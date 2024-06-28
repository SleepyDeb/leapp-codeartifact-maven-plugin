import { Session } from "@noovolari/leapp-core/models/session";
import { SessionStatus } from "@noovolari/leapp-core/models/session-status";
import { AwsCredentialsPlugin } from "@noovolari/leapp-core/plugin-sdk/aws-credentials-plugin";
import { PluginLogLevel } from "@noovolari/leapp-core/plugin-sdk/plugin-log-level";
import * as fs from 'fs';
import { CodeArtifactMavenInjector } from "./codeartifact-maven-injector";

export class LeappCodeArtifactPlugin extends AwsCredentialsPlugin {
  get actionName(): string {
    return "Inject CodeArtifact Credentials";
  }

  get actionIcon(): string {
    return "fa-play";
  }

  /*
   * @params
   * session       Session            my session object (https://github.com/Noovolari/leapp/blob/master/packages/core/src/models/session.ts)
   * credentials   Credential-Info    my credentials object (https://github.com/Noovolari/leapp/blob/master/packages/core/src/models/credentials-info.ts)
   */
  async applySessionAction(session: Session, credentials: {
    sessionToken: {
        aws_access_key_id: string,
        aws_secret_access_key: string,
        aws_session_token: string
    }
  }): Promise<void> {
    const status = session.status;
    if(status != SessionStatus.active) {
        this.pluginEnvironment.log(`Can't start the plugin, session is not active.`, PluginLogLevel.error, true);
        return;
    }

    const mavenProfile = process.env.AWS_MAVEN_PROFILE ?? 'default';
    const sessionToken = credentials.sessionToken;
    const sdkCredentials = {
        accessKeyId: sessionToken.aws_access_key_id,
        secretAccessKey: sessionToken.aws_secret_access_key,
        sessionToken: sessionToken.aws_session_token,
    };
    
    const injector = new CodeArtifactMavenInjector(sdkCredentials, session.region, mavenProfile);
    const { domainCount, repositoryCount } = await injector.introspectAccountAndInject();
    this.pluginEnvironment.log(`Injected maven profile: ${mavenProfile}, domains: ${domainCount}, repositories: ${repositoryCount}`, PluginLogLevel.info, true);
  }
}
