# Leap CodeArtifact Plugin
The Leap CodeArtifact Plugin is designed to simplify the process of injecting CodeArtifact Maven repository credentials into the Maven settings file `(~/.m2/settings.xml)`. It uses the selected Leapp session to retrieve the information and credentials from the AWS account.

[![View this project on NPM](https://img.shields.io/npm/v/leapp-codeartifact-maven-plugin.svg)](https://npmjs.org/package/leapp-codeartifact-maven-plugin)
[![Dependabot Updates](https://github.com/SleepyDeb/leapp-codeartifact-maven-plugin/actions/workflows/dependabot/dependabot-updates/badge.svg)](https://github.com/SleepyDeb/leapp-codeartifact-maven-plugin/actions/workflows/dependabot/dependabot-updates) [![Build And Publish](https://github.com/SleepyDeb/leapp-codeartifact-maven-plugin/actions/workflows/npm-publish-github-packages.yml/badge.svg)](https://github.com/SleepyDeb/leapp-codeartifact-maven-plugin/actions/workflows/npm-publish-github-packages.yml)
## Features
- **Account Introspection:** It lists CodeArtifact repositories
- **Credentials Injection:** It injects the maven configuration generating a new set of credentials automatically for each repository

## Installation
1. Open the Settings menu in your Leapp session.
2. Add the package by specifying: `leapp-codeartifact-maven-plugin`
That's it! The plugin will be installed and ready to use.

To customize the injected Maven profile, set the `AWS_MAVEN_PROFILE` environment variable. Otherwise, the `codeartifact` profile will be used. (after you do, restart the Leapp application)

## Usage
1. **Right-Click on an AWS Active Session**
2. **Select "Inject CodeArtifact Credentials"**
The session must be already active!

## Application Behavior:
The application will perform the following tasks:
1. Detect all CodeArtifact repositories associated with the selected session (credentials\region).
2. Backup the existing user-defined file if have not been injected yet `(~/.m2/settings.xml.xxxx.bak)`.
3. For each CodeArtifact repository, the plugin will inject a server definition into the Maven configuration settings with the updated access token.
4. Will generate a Maven profile and for each CodeArtifact repository will inject both a maven repository and a mavenPlugin repository entry.

The plugin operates in an “append-only” mode, which means it won’t remove any deleted CodeArtifact repositories. In the event of an `id` collision, it will overwrite the related properties resource URL, username, or password.

You can continue to manage the maven settings file on your own freely. The plugin will place the generated profile into the `activeProfile` section of the Maven Settings only the first time or when a new CodeArtifact repository is added to the configuration. This approach allows you to deactive the profile globally, and the plugin will inject the updated credentials without overriding your user choice.

A similar behavior has been implemented for the repository and pluginRepository profile section; if you delete one entry from only one of the two lists the plugin will not add it back, in this manner, you will be able to maintain a repository only as a pluginRepository or as a standard repository as your need.

## How to customize the plugin for your needs
1. Clone this repository locally
2. Install the dependencies `npm install`
3. To build and install the plugin inside the Leapp application locally you can run `npm run build-local`
4. Ensure you quit the Leapp application from the system tray before testing the plugin, if the plugin has already been loaded before the build the updated version will not be loaded
5. Open the Leapp application, go to settings, and ensure that the plugin is enabled

To test the execution locally without the Leapp application you can run the `inject` script,
The inject script will use any default AWS SDK session configuration.

### On Linux:
- export AWS_PROFILE="aws-session-name"
- npm run inject

### In Windows PowerShell:
- $env:AWS_PROFILE="aws-session-name"
- npm run inject

### In Windows Cmd:
- set AWS_PROFILE="aws-session-name"
- npm run inject

## Disclaimer
Please note that this plugin has been developed quickly and may not adhere to best practices or standards, it is provided as-is, without any guarantees or safety measures. Use it responsibly and consider security implications. :*D 
