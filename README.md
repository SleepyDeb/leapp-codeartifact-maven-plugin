# Leap CodeArtifact Plugin
The Leap CodeArtifact Plugin is designed to simplify the process of injecting CodeArtifact Maven repository credentials into the Maven settings file `(~/.m2/settings.xml)`. It uses the selected Leapp session to retrieve the information and credentials from the AWS account.

# Features
- **Account Introspection:** It lists CodeArtifact repositories
- **Credentials Injection:** It injects the maven configuration generating a new set of credentials automatically

# Installation
1. Open the Settings menu in your Leapp session.
2. Add the package by specifying: `leapp-codeartifact-plugin`
That's it! The plugin will be installed and ready to use.

To customize the injected Maven profile, set the `AWS_MAVEN_PROFILE` environment variable. Otherwise, the `codeartifact` profile will be used.

# Usage
1. **Right-Click on an AWS Active Session**
2. **Select "Inject CodeArtifact Credentials"**
The session must be already active!

# Application Behavior:
The application will perform the following tasks:
1. Detect all CodeArtifact domains and repositories associated with the selected session (credentials\region).
2. Back up the existing user-defined file `(~/.m2/settings.xml.xxxx.bak)`.
3. For each CodeArtifact domain, inject a server into the Maven configuration settings with the updated access token; Will register each repository and associate the proper domain credentials on the specified profile (either the default profile or the one defined using the environment variable `AWS_MAVEN_PROFILE`).

# Disclaimer
Please note that this plugin has been developed quickly and may not adhere to best practices or standards, it is provided as-is, without any guarantees or safety measures. Use it responsibly and consider security implications. :*D