import * as codeartifact from '@aws-sdk/client-codeartifact';
import { XMLParser, XMLBuilder } from 'fast-xml-parser';
import { AwsCredentialIdentity } from "@smithy/types";
import { homedir } from 'os';
import * as path from 'path';
import * as fs from 'fs';

const injectedBannerText = 'this file have been injected by the leapp-codeartifact-maven-plugin';
const injectedBanner = `<!-- ${injectedBannerText} -->`;
const defaultXml = `<settings xmlns="http://maven.apache.org/SETTINGS/1.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
  xsi:schemaLocation="http://maven.apache.org/SETTINGS/1.0.0 https://maven.apache.org/xsd/settings-1.0.0.xsd">${injectedBanner}</settings>`;
const commentPropName = `<!--`;
const mavenXmlParser = new XMLParser({
    ignoreAttributes: false,
    isArray: (tagName) => ['server', 'profile', 'repository', 'profile', 'activeProfile', 'pluginRepository' ].includes(tagName),
    commentPropName,
    parseTagValue: true
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
                        url: string
                    }[]
                },
                pluginRepositories?: {
                    pluginRepository?: {
                        id: string,
                        url: string
                    }[]
                }
            }[]
        },
        activeProfiles?: {
            activeProfile?: string[]
        }
    }
};

export class CodeArtifactMavenInjector {
    private _client: codeartifact.CodeartifactClient;
    private _tokenCache: {
        [domainName: string]: string
    } = {}

    constructor(credentials?: AwsCredentialIdentity, region?: string, private mavenProfile: string = 'codeartifact') {
        this._client = new codeartifact.CodeartifactClient({
            credentials,
            region
        });
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

    public async getRepositoryDetails(repository: string, domain: string, domainOwner: string) {
        const result = await this._client.send(new codeartifact.DescribeRepositoryCommand({
            repository,
            domain,
            domainOwner
        }));
        const connections = result?.repository?.externalConnections ?? []
        const connectionsName = connections.filter(conn => conn.packageFormat == 'maven').map(conn => conn.externalConnectionName);
        return { connectionsName }
    }

    public async introspectAccountAndInject() {
        const repositories = await this.enumerateRepositories();
        const conf = await this.ensureMavenConfigFile();        
        this.sanitizeSettingObject(conf)

        const mavenProfile = this.mavenProfile;
        const profile = this.ensureSettingsProfile(conf, this.mavenProfile);

        let registerdNewRepos = false;

        // Inejecting repositories
        for (const repository of repositories) {
            const domainName = repository.domainName!;
            const domainOwner = repository.domainOwner;
            const repositoryName = repository.name!;

            const url = await this.getRepositoryEndpoint(domainName, domainOwner, repositoryName)
            const token = await this.generateDomainTokenCached(domainName, domainOwner);

            const profileRepo = profile.repositories.repository.filter(r => r.id == repositoryName)[0];
            if (!profileRepo) {
                profile.repositories.repository.push({
                    id: repositoryName,
                    url
                });
                registerdNewRepos = true;
            } else {
                profileRepo.url = url;
            }

            const profilePluginRepo = profile.pluginRepositories.pluginRepository.filter(r => r.id == repositoryName)[0];
            if(!profilePluginRepo) {
                profile.pluginRepositories.pluginRepository.push({
                    id: repositoryName,
                    url
                });
                registerdNewRepos = true;
            } else {
                profilePluginRepo.url = url;
            }

            const server = conf.settings.servers.server.filter(s => s.id == repositoryName)[0];
            if(!server) {
                conf.settings.servers.server.push({
                    id: repositoryName,
                    username: `aws`,
                    password: token
                })
            } else {
                server.username = `aws`
                server.password = token;
            }
        }

        const mavenProfileNotActive = !conf.settings.activeProfiles.activeProfile.filter(p => p == mavenProfile)[0];
        const activateMavenProfile = registerdNewRepos && mavenProfileNotActive;
        if(activateMavenProfile) {
            conf.settings.activeProfiles.activeProfile.push(mavenProfile)
        }
        const activatedMavenProfile = activateMavenProfile ? mavenProfile : undefined;

        const { backupFilePath } = await this.backupSettingFileIfNeeded();
        this.saveSettings(conf);

        const repositoryCount = Object.values(repositories).length;
        return { repositoryCount, backupFilePath, activatedMavenProfile }
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
            return { };

        const { settingsDirectory, settingsFilePath } = this.getPaths();
        const millis = new Date().getTime();
        const backupFilePath = path.join(settingsDirectory, `settings.xml.${millis}.bak`)
        fs.copyFileSync(settingsFilePath, backupFilePath)

        const shortBackupFilePath = backupFilePath.replace(homedir(), '~');
        return { backupFilePath: shortBackupFilePath };
    }

    private async saveSettings(settingsFile: SettingsFile) {
        settingsFile.settings[commentPropName] = injectedBannerText;
        const settingsFilePath = this.ensureMavenSettingsFile();
        fs.writeFileSync(settingsFilePath, mavenXmlSerializer.build(settingsFile))
    }

    private async ensureMavenConfigFile() {
        const settingsFilePath = this.ensureMavenSettingsFile();
        const xmlString = fs.readFileSync(settingsFilePath).toString();
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

        if (!obj.settings.activeProfiles)
            obj.settings.activeProfiles = { activeProfile: [] }

        if (!obj.settings.activeProfiles.activeProfile)
            obj.settings.activeProfiles.activeProfile = [];

        return obj;
    }

    private ensureSettingsProfile(obj: SettingsFile, mavenProfileName: string) {
        let profile = obj.settings.profiles.profile.filter(p => p.id === mavenProfileName)[0];

        if (!profile) {
            profile = { id: mavenProfileName, repositories: { repository: [] }, pluginRepositories: { pluginRepository: [] }};
            obj.settings.profiles.profile.push(profile);
        }

        if (!profile.repositories)
            profile.repositories = { repository: [] }

        if (!profile.repositories.repository)
            profile.repositories.repository = []

        if (!profile.pluginRepositories)
            profile.pluginRepositories = { pluginRepository: [] }

        if(!profile.pluginRepositories.pluginRepository)
            profile.pluginRepositories.pluginRepository = []

        return profile;
    }

    private async generateDomainTokenCached(domain: string, domainOwner?: string) {
        const cachedToken = this._tokenCache[domain];

        if(cachedToken)
            return cachedToken;

        const generatedToken = await this.generateDomainToken(domain, domainOwner);
        return this._tokenCache[domain] = generatedToken;
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
