import * as codeartifact from '@aws-sdk/client-codeartifact';
import { XMLParser, XMLBuilder } from 'fast-xml-parser';
import { homedir } from 'os';
import * as path from 'path';
import * as fs from 'fs';
import { AwsCredentialIdentity } from "@smithy/types";

const injectedBannerText = 'this file have been injected by the leapp-codeartifact-maven-plugin';
const injectedBanner = `<!-- ${injectedBannerText} -->`;
const defaultXml = `<settings xmlns="http://maven.apache.org/SETTINGS/1.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
  xsi:schemaLocation="http://maven.apache.org/SETTINGS/1.0.0 https://maven.apache.org/xsd/settings-1.0.0.xsd">${injectedBanner}</settings>`;
const commentPropName = `<!--`;
const mavenXmlParser = new XMLParser({
    ignoreAttributes: false,
    isArray: (tagName) => ['server', 'profile', 'repository', 'profile'].includes(tagName),
    commentPropName
});
const mavenXmlSerializer = new XMLBuilder({
    ignoreAttributes: false,
    format: true,
    commentPropName
});

interface SettingsFile {
    settings?: {
        [commentPropName]?: string,
        servers?: {
            server?: {
                id: string,
                username: string,
                password: string
            }[]
        },
        profiles?: {
            profile?: {
                id: string,
                repositories?: {
                    repository?: {
                        id: string,
                        name: string,
                        url: string
                    }[]
                }
            }[]
        }
    }
};

export class CodeArtifactMavenInjector {
    private _client: codeartifact.CodeartifactClient;

    constructor(credentials?: AwsCredentialIdentity, region?: string, private mavenProfile: string = 'default') {
        this._client = new codeartifact.CodeartifactClient({
            credentials,
            region
        });
    }

    private async enumerateDomains() {
        const domains = [] as codeartifact.DomainSummary[];

        let nextToken = undefined as string | undefined;
        do {
            const result = await this._client.send(new codeartifact.ListDomainsCommand({
                nextToken
            }));

            nextToken = result.nextToken;
            domains.push(...result.domains!);
        } while (nextToken)

        return domains;
    }

    private async enumerateRepositories() {
        const repositories = [] as codeartifact.RepositorySummary[];

        let nextToken = undefined as string | undefined;
        do {
            const result = await this._client.send(new codeartifact.ListRepositoriesCommand({
                nextToken
            }));

            repositories.push(...result.repositories!);
        } while (nextToken)

        return repositories;
    }

    public async introspectAccountAndInject() {
        const domains = await this.enumerateDomains();
        const repositories = await this.enumerateRepositories();
        const settings = await this.ensureMavenConfigFile();
        this.sanitizeSettingObject(settings)

        // Injecting Secrets
        for (const domain of domains) {
            const domainName = domain.name!;
            const token = await this.generateDomainToken(domainName, domain.owner);
            const server = settings.settings.servers.server.filter(s => s.id == domainName)[0];

            if (!server) {
                settings.settings.servers.server.push({
                    id: domainName,
                    username: `aws`,
                    password: token
                })
            } else {
                server.password = token;
            }
        }

        const profile = this.ensureSettingsProfile(settings, this.mavenProfile);

        // Inejecting repositories
        for (const repository of repositories) {
            const profileRepo = profile.repositories.repository.filter(r => r.id == repository.name)[0];

            const url = await this.getRepositoryEndpoint(repository.domainName!, repository.domainOwner, repository.name!)
            if (!profileRepo) {
                profile.repositories.repository.push({
                    id: repository.name!,
                    name: repository.domainName!,
                    url
                })
            } else {
                profileRepo.id = repository.name!;
                profileRepo.name = repository.domainName!;
                profileRepo.url = url;
            }
        }
        await this.backupSettingFileIfNeeded();
        this.saveSettings(settings);

        const domainCount = Object.values(domains).length;
        const repositoryCount = Object.values(repositories).length;
        return { domainCount, repositoryCount}
    }

    private getPaths() {
        const home = homedir();
        const settingsFilePath = path.join(home, ".m2/settings.xml");
        const settingsDirectory = path.dirname(settingsFilePath);

        return {
            home,
            settingsFilePath,
            settingsDirectory
        }
    }

    private ensureMavenSettingsFile() {
        const { settingsDirectory, settingsFilePath } = this.getPaths();

        if (!fs.existsSync(settingsDirectory))
            fs.mkdirSync(settingsDirectory, { recursive: true });

        if (!fs.existsSync(settingsFilePath))
            fs.writeFileSync(settingsFilePath, defaultXml);

        return settingsFilePath;
    }

    private async backupSettingFileIfNeeded() {
        const currentConfig = await this.ensureMavenConfigFile();
        const haveBeenInjected = currentConfig.settings?.[commentPropName]?.includes(injectedBannerText);
        if(haveBeenInjected)
            return;

        const { settingsDirectory, settingsFilePath } = this.getPaths();
        const millis = new Date().getDate();
        const backupFilePath = path.join(settingsDirectory, `settings.xml.${millis}.bak`)
        fs.copyFileSync(settingsFilePath, backupFilePath)
    }

    private async saveSettings(settingsFile: SettingsFile) {
        settingsFile.settings[commentPropName] = injectedBannerText;
        const settingsFilePath = this.ensureMavenSettingsFile();
        fs.writeFileSync(settingsFilePath, mavenXmlSerializer.build(settingsFile))
    }

    private async ensureMavenConfigFile() {
        const settingsFilePath = this.ensureMavenSettingsFile();
        const xmlString = fs.readFileSync(settingsFilePath).toString();
        const hasInjectionBanner = xmlString.includes(injectedBanner);
        return mavenXmlParser.parse(xmlString) as SettingsFile
    }

    private sanitizeSettingObject(obj: SettingsFile) {
        if (!obj.settings)
            obj.settings = {};

        if (!obj.settings.profiles)
            obj.settings.profiles = { profile: [] }

        if (!obj.settings.profiles.profile)
            obj.settings.profiles.profile = []

        if (!obj.settings.servers)
            obj.settings.servers = { server: [] }

        if (!obj.settings.servers.server)
            obj.settings.servers.server = []

        return obj;
    }

    private ensureSettingsProfile(obj: SettingsFile, mavenProfileName: string) {
        let profile = obj.settings.profiles.profile.filter(p => p.id === mavenProfileName)[0];

        if (!profile) {
            profile = { id: mavenProfileName, repositories: { repository: [] } };
            obj.settings.profiles.profile.push(profile);
        }

        if (!profile.repositories)
            profile.repositories = { repository: [] }

        if (!profile.repositories.repository)
            profile.repositories.repository = []

        return profile;
    }

    private async generateDomainToken(domain: string, domainOwner?: string) {
        const result = await this._client.send(new codeartifact.GetAuthorizationTokenCommand({
            domain,
            domainOwner
        }))
        return result.authorizationToken!;
    }

    private async getRepositoryEndpoint(domain: string, domainOwner: string | undefined, repository: string) {
        const result = await this._client.send(new codeartifact.GetRepositoryEndpointCommand({
            domain,
            domainOwner,
            repository,
            format: codeartifact.PackageFormat.MAVEN
        }))
        return result.repositoryEndpoint!;
    }
}

