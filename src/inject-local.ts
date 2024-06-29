import { CodeArtifactMavenInjector } from "./codeartifact-maven-injector";

export async function injectMavenConfiguration() {
    const mavenProfile = process.env.AWS_MAVEN_PROFILE ?? 'codeartifact';

    const injector = new CodeArtifactMavenInjector(mavenProfile);
    const { repositoryCount, newRepositoryCount, activatedMavenProfile, backupFilePath } = await injector.introspectAccountAndInject();

    if(backupFilePath)
        console.info(`Backup Created: ${backupFilePath}.`);

    if(activatedMavenProfile)
        console.info(`Maven pofile '${activatedMavenProfile}' have been activated`)

    if(repositoryCount)
        console.info(`Injected maven profile: ${mavenProfile}, repositories: ${repositoryCount}`);
    else
        console.warn(`No repositories have been found.`);

    if(newRepositoryCount)
        console.info(`Of which are new ${newRepositoryCount}`);
}

setImmediate(injectMavenConfiguration);