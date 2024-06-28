"use strict";
exports.id = 2;
exports.ids = [2];
exports.modules = {

/***/ 581:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   fromIni: () => (/* binding */ fromIni)
/* harmony export */ });
/* harmony import */ var _smithy_shared_ini_file_loader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(205);
/* harmony import */ var _resolveProfileData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(582);


const fromIni = (init = {}) => async () => {
    init.logger?.debug("@aws-sdk/credential-provider-ini - fromIni");
    const profiles = await (0,_smithy_shared_ini_file_loader__WEBPACK_IMPORTED_MODULE_0__.parseKnownFiles)(init);
    return (0,_resolveProfileData__WEBPACK_IMPORTED_MODULE_1__.resolveProfileData)((0,_smithy_shared_ini_file_loader__WEBPACK_IMPORTED_MODULE_0__.getProfileName)(init), profiles, init);
};


/***/ }),

/***/ 580:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   fromIni: () => (/* reexport safe */ _fromIni__WEBPACK_IMPORTED_MODULE_0__.fromIni)
/* harmony export */ });
/* harmony import */ var _fromIni__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(581);



/***/ }),

/***/ 583:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isAssumeRoleProfile: () => (/* binding */ isAssumeRoleProfile),
/* harmony export */   resolveAssumeRoleCredentials: () => (/* binding */ resolveAssumeRoleCredentials)
/* harmony export */ });
/* harmony import */ var _smithy_property_provider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(195);
/* harmony import */ var _smithy_shared_ini_file_loader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(205);
/* harmony import */ var _resolveCredentialSource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(584);
/* harmony import */ var _resolveProfileData__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(582);




const isAssumeRoleProfile = (arg, { profile = "default", logger } = {}) => {
    return (Boolean(arg) &&
        typeof arg === "object" &&
        typeof arg.role_arn === "string" &&
        ["undefined", "string"].indexOf(typeof arg.role_session_name) > -1 &&
        ["undefined", "string"].indexOf(typeof arg.external_id) > -1 &&
        ["undefined", "string"].indexOf(typeof arg.mfa_serial) > -1 &&
        (isAssumeRoleWithSourceProfile(arg, { profile, logger }) || isCredentialSourceProfile(arg, { profile, logger })));
};
const isAssumeRoleWithSourceProfile = (arg, { profile, logger }) => {
    const withSourceProfile = typeof arg.source_profile === "string" && typeof arg.credential_source === "undefined";
    if (withSourceProfile) {
        logger?.debug?.(`    ${profile} isAssumeRoleWithSourceProfile source_profile=${arg.source_profile}`);
    }
    return withSourceProfile;
};
const isCredentialSourceProfile = (arg, { profile, logger }) => {
    const withProviderProfile = typeof arg.credential_source === "string" && typeof arg.source_profile === "undefined";
    if (withProviderProfile) {
        logger?.debug?.(`    ${profile} isCredentialSourceProfile credential_source=${arg.credential_source}`);
    }
    return withProviderProfile;
};
const resolveAssumeRoleCredentials = async (profileName, profiles, options, visitedProfiles = {}) => {
    options.logger?.debug("@aws-sdk/credential-provider-ini - resolveAssumeRoleCredentials (STS)");
    const data = profiles[profileName];
    if (!options.roleAssumer) {
        const { getDefaultRoleAssumer } = await __webpack_require__.e(/* import() */ 10).then(__webpack_require__.bind(__webpack_require__, 1121));
        options.roleAssumer = getDefaultRoleAssumer({
            ...options.clientConfig,
            credentialProviderLogger: options.logger,
            parentClientConfig: options?.parentClientConfig,
        }, options.clientPlugins);
    }
    const { source_profile } = data;
    if (source_profile && source_profile in visitedProfiles) {
        throw new _smithy_property_provider__WEBPACK_IMPORTED_MODULE_0__.CredentialsProviderError(`Detected a cycle attempting to resolve credentials for profile` +
            ` ${(0,_smithy_shared_ini_file_loader__WEBPACK_IMPORTED_MODULE_1__.getProfileName)(options)}. Profiles visited: ` +
            Object.keys(visitedProfiles).join(", "), { logger: options.logger });
    }
    options.logger?.debug(`@aws-sdk/credential-provider-ini - finding credential resolver using ${source_profile ? `source_profile=[${source_profile}]` : `profile=[${profileName}]`}`);
    const sourceCredsProvider = source_profile
        ? (0,_resolveProfileData__WEBPACK_IMPORTED_MODULE_3__.resolveProfileData)(source_profile, {
            ...profiles,
            [source_profile]: {
                ...profiles[source_profile],
                role_arn: data.role_arn ?? profiles[source_profile].role_arn,
            },
        }, options, {
            ...visitedProfiles,
            [source_profile]: true,
        })
        : (await (0,_resolveCredentialSource__WEBPACK_IMPORTED_MODULE_2__.resolveCredentialSource)(data.credential_source, profileName, options.logger)(options))();
    const params = {
        RoleArn: data.role_arn,
        RoleSessionName: data.role_session_name || `aws-sdk-js-${Date.now()}`,
        ExternalId: data.external_id,
        DurationSeconds: parseInt(data.duration_seconds || "3600", 10),
    };
    const { mfa_serial } = data;
    if (mfa_serial) {
        if (!options.mfaCodeProvider) {
            throw new _smithy_property_provider__WEBPACK_IMPORTED_MODULE_0__.CredentialsProviderError(`Profile ${profileName} requires multi-factor authentication, but no MFA code callback was provided.`, { logger: options.logger, tryNextLink: false });
        }
        params.SerialNumber = mfa_serial;
        params.TokenCode = await options.mfaCodeProvider(mfa_serial);
    }
    const sourceCreds = await sourceCredsProvider;
    return options.roleAssumer(sourceCreds, params);
};


/***/ }),

/***/ 584:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   resolveCredentialSource: () => (/* binding */ resolveCredentialSource)
/* harmony export */ });
/* harmony import */ var _smithy_property_provider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(195);

const resolveCredentialSource = (credentialSource, profileName, logger) => {
    const sourceProvidersMap = {
        EcsContainer: async (options) => {
            const { fromHttp } = await __webpack_require__.e(/* import() */ 6).then(__webpack_require__.bind(__webpack_require__, 622));
            const { fromContainerMetadata } = await __webpack_require__.e(/* import() */ 5).then(__webpack_require__.bind(__webpack_require__, 597));
            logger?.debug("@aws-sdk/credential-provider-ini - credential_source is EcsContainer");
            return (0,_smithy_property_provider__WEBPACK_IMPORTED_MODULE_0__.chain)(fromHttp(options ?? {}), fromContainerMetadata(options));
        },
        Ec2InstanceMetadata: async (options) => {
            logger?.debug("@aws-sdk/credential-provider-ini - credential_source is Ec2InstanceMetadata");
            const { fromInstanceMetadata } = await __webpack_require__.e(/* import() */ 5).then(__webpack_require__.bind(__webpack_require__, 597));
            return fromInstanceMetadata(options);
        },
        Environment: async (options) => {
            logger?.debug("@aws-sdk/credential-provider-ini - credential_source is Environment");
            const { fromEnv } = await Promise.resolve(/* import() */).then(__webpack_require__.bind(__webpack_require__, 507));
            return fromEnv(options);
        },
    };
    if (credentialSource in sourceProvidersMap) {
        return sourceProvidersMap[credentialSource];
    }
    else {
        throw new _smithy_property_provider__WEBPACK_IMPORTED_MODULE_0__.CredentialsProviderError(`Unsupported credential source in profile ${profileName}. Got ${credentialSource}, ` +
            `expected EcsContainer or Ec2InstanceMetadata or Environment.`, { logger });
    }
};


/***/ }),

/***/ 585:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isProcessProfile: () => (/* binding */ isProcessProfile),
/* harmony export */   resolveProcessCredentials: () => (/* binding */ resolveProcessCredentials)
/* harmony export */ });
const isProcessProfile = (arg) => Boolean(arg) && typeof arg === "object" && typeof arg.credential_process === "string";
const resolveProcessCredentials = async (options, profile) => __webpack_require__.e(/* import() */ 3).then(__webpack_require__.bind(__webpack_require__, 589)).then(({ fromProcess }) => fromProcess({
    ...options,
    profile,
})());


/***/ }),

/***/ 582:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   resolveProfileData: () => (/* binding */ resolveProfileData)
/* harmony export */ });
/* harmony import */ var _smithy_property_provider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(195);
/* harmony import */ var _resolveAssumeRoleCredentials__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(583);
/* harmony import */ var _resolveProcessCredentials__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(585);
/* harmony import */ var _resolveSsoCredentials__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(586);
/* harmony import */ var _resolveStaticCredentials__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(587);
/* harmony import */ var _resolveWebIdentityCredentials__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(588);






const resolveProfileData = async (profileName, profiles, options, visitedProfiles = {}) => {
    const data = profiles[profileName];
    if (Object.keys(visitedProfiles).length > 0 && (0,_resolveStaticCredentials__WEBPACK_IMPORTED_MODULE_4__.isStaticCredsProfile)(data)) {
        return (0,_resolveStaticCredentials__WEBPACK_IMPORTED_MODULE_4__.resolveStaticCredentials)(data, options);
    }
    if ((0,_resolveAssumeRoleCredentials__WEBPACK_IMPORTED_MODULE_1__.isAssumeRoleProfile)(data, { profile: profileName, logger: options.logger })) {
        return (0,_resolveAssumeRoleCredentials__WEBPACK_IMPORTED_MODULE_1__.resolveAssumeRoleCredentials)(profileName, profiles, options, visitedProfiles);
    }
    if ((0,_resolveStaticCredentials__WEBPACK_IMPORTED_MODULE_4__.isStaticCredsProfile)(data)) {
        return (0,_resolveStaticCredentials__WEBPACK_IMPORTED_MODULE_4__.resolveStaticCredentials)(data, options);
    }
    if ((0,_resolveWebIdentityCredentials__WEBPACK_IMPORTED_MODULE_5__.isWebIdentityProfile)(data)) {
        return (0,_resolveWebIdentityCredentials__WEBPACK_IMPORTED_MODULE_5__.resolveWebIdentityCredentials)(data, options);
    }
    if ((0,_resolveProcessCredentials__WEBPACK_IMPORTED_MODULE_2__.isProcessProfile)(data)) {
        return (0,_resolveProcessCredentials__WEBPACK_IMPORTED_MODULE_2__.resolveProcessCredentials)(options, profileName);
    }
    if ((0,_resolveSsoCredentials__WEBPACK_IMPORTED_MODULE_3__.isSsoProfile)(data)) {
        return await (0,_resolveSsoCredentials__WEBPACK_IMPORTED_MODULE_3__.resolveSsoCredentials)(profileName, options);
    }
    throw new _smithy_property_provider__WEBPACK_IMPORTED_MODULE_0__.CredentialsProviderError(`Could not resolve credentials using profile: [${profileName}] in configuration/credentials file(s).`, { logger: options.logger });
};


/***/ }),

/***/ 586:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isSsoProfile: () => (/* binding */ isSsoProfile),
/* harmony export */   resolveSsoCredentials: () => (/* binding */ resolveSsoCredentials)
/* harmony export */ });
const resolveSsoCredentials = async (profile, options = {}) => {
    const { fromSSO } = await __webpack_require__.e(/* import() */ 1).then(__webpack_require__.bind(__webpack_require__, 567));
    return fromSSO({
        profile,
        logger: options.logger,
    })();
};
const isSsoProfile = (arg) => arg &&
    (typeof arg.sso_start_url === "string" ||
        typeof arg.sso_account_id === "string" ||
        typeof arg.sso_session === "string" ||
        typeof arg.sso_region === "string" ||
        typeof arg.sso_role_name === "string");


/***/ }),

/***/ 587:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isStaticCredsProfile: () => (/* binding */ isStaticCredsProfile),
/* harmony export */   resolveStaticCredentials: () => (/* binding */ resolveStaticCredentials)
/* harmony export */ });
const isStaticCredsProfile = (arg) => Boolean(arg) &&
    typeof arg === "object" &&
    typeof arg.aws_access_key_id === "string" &&
    typeof arg.aws_secret_access_key === "string" &&
    ["undefined", "string"].indexOf(typeof arg.aws_session_token) > -1;
const resolveStaticCredentials = (profile, options) => {
    options?.logger?.debug("@aws-sdk/credential-provider-ini - resolveStaticCredentials");
    return Promise.resolve({
        accessKeyId: profile.aws_access_key_id,
        secretAccessKey: profile.aws_secret_access_key,
        sessionToken: profile.aws_session_token,
        credentialScope: profile.aws_credential_scope,
    });
};


/***/ }),

/***/ 588:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isWebIdentityProfile: () => (/* binding */ isWebIdentityProfile),
/* harmony export */   resolveWebIdentityCredentials: () => (/* binding */ resolveWebIdentityCredentials)
/* harmony export */ });
const isWebIdentityProfile = (arg) => Boolean(arg) &&
    typeof arg === "object" &&
    typeof arg.web_identity_token_file === "string" &&
    typeof arg.role_arn === "string" &&
    ["undefined", "string"].indexOf(typeof arg.role_session_name) > -1;
const resolveWebIdentityCredentials = async (profile, options) => __webpack_require__.e(/* import() */ 4).then(__webpack_require__.bind(__webpack_require__, 594)).then(({ fromTokenFile }) => fromTokenFile({
    webIdentityTokenFile: profile.web_identity_token_file,
    roleArn: profile.role_arn,
    roleSessionName: profile.role_session_name,
    roleAssumerWithWebIdentity: options.roleAssumerWithWebIdentity,
    logger: options.logger,
    parentClientConfig: options.parentClientConfig,
})());


/***/ })

};
;