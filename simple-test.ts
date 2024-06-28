import { CodeArtifactMavenInjector } from "./codeartifact-maven-injector";

setImmediate(async ()=>{
    const injector = new CodeArtifactMavenInjector();
    const { repositoryCount } = await injector.introspectAccountAndInject();
    console.info(`RepositoryCount: ${repositoryCount}`)
});