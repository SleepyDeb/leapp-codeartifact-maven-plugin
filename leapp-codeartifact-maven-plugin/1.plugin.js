"use strict";
exports.id = 1;
exports.ids = [1];
exports.modules = {

/***/ 568:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   fromSSO: () => (/* binding */ fromSSO)
/* harmony export */ });
/* harmony import */ var _smithy_property_provider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(195);
/* harmony import */ var _smithy_shared_ini_file_loader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(205);
/* harmony import */ var _isSsoProfile__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(569);
/* harmony import */ var _resolveSSOCredentials__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(570);
/* harmony import */ var _validateSsoProfile__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(578);





const fromSSO = (init = {}) => async () => {
    init.logger?.debug("@aws-sdk/credential-provider-sso - fromSSO");
    const { ssoStartUrl, ssoAccountId, ssoRegion, ssoRoleName, ssoSession } = init;
    const { ssoClient } = init;
    const profileName = (0,_smithy_shared_ini_file_loader__WEBPACK_IMPORTED_MODULE_1__.getProfileName)(init);
    if (!ssoStartUrl && !ssoAccountId && !ssoRegion && !ssoRoleName && !ssoSession) {
        const profiles = await (0,_smithy_shared_ini_file_loader__WEBPACK_IMPORTED_MODULE_1__.parseKnownFiles)(init);
        const profile = profiles[profileName];
        if (!profile) {
            throw new _smithy_property_provider__WEBPACK_IMPORTED_MODULE_0__.CredentialsProviderError(`Profile ${profileName} was not found.`, { logger: init.logger });
        }
        if (!(0,_isSsoProfile__WEBPACK_IMPORTED_MODULE_2__.isSsoProfile)(profile)) {
            throw new _smithy_property_provider__WEBPACK_IMPORTED_MODULE_0__.CredentialsProviderError(`Profile ${profileName} is not configured with SSO credentials.`, {
                logger: init.logger,
            });
        }
        if (profile?.sso_session) {
            const ssoSessions = await (0,_smithy_shared_ini_file_loader__WEBPACK_IMPORTED_MODULE_1__.loadSsoSessionData)(init);
            const session = ssoSessions[profile.sso_session];
            const conflictMsg = ` configurations in profile ${profileName} and sso-session ${profile.sso_session}`;
            if (ssoRegion && ssoRegion !== session.sso_region) {
                throw new _smithy_property_provider__WEBPACK_IMPORTED_MODULE_0__.CredentialsProviderError(`Conflicting SSO region` + conflictMsg, {
                    tryNextLink: false,
                    logger: init.logger,
                });
            }
            if (ssoStartUrl && ssoStartUrl !== session.sso_start_url) {
                throw new _smithy_property_provider__WEBPACK_IMPORTED_MODULE_0__.CredentialsProviderError(`Conflicting SSO start_url` + conflictMsg, {
                    tryNextLink: false,
                    logger: init.logger,
                });
            }
            profile.sso_region = session.sso_region;
            profile.sso_start_url = session.sso_start_url;
        }
        const { sso_start_url, sso_account_id, sso_region, sso_role_name, sso_session } = (0,_validateSsoProfile__WEBPACK_IMPORTED_MODULE_4__.validateSsoProfile)(profile, init.logger);
        return (0,_resolveSSOCredentials__WEBPACK_IMPORTED_MODULE_3__.resolveSSOCredentials)({
            ssoStartUrl: sso_start_url,
            ssoSession: sso_session,
            ssoAccountId: sso_account_id,
            ssoRegion: sso_region,
            ssoRoleName: sso_role_name,
            ssoClient: ssoClient,
            clientConfig: init.clientConfig,
            profile: profileName,
        });
    }
    else if (!ssoStartUrl || !ssoAccountId || !ssoRegion || !ssoRoleName) {
        throw new _smithy_property_provider__WEBPACK_IMPORTED_MODULE_0__.CredentialsProviderError("Incomplete configuration. The fromSSO() argument hash must include " +
            '"ssoStartUrl", "ssoAccountId", "ssoRegion", "ssoRoleName"', { tryNextLink: false, logger: init.logger });
    }
    else {
        return (0,_resolveSSOCredentials__WEBPACK_IMPORTED_MODULE_3__.resolveSSOCredentials)({
            ssoStartUrl,
            ssoSession,
            ssoAccountId,
            ssoRegion,
            ssoRoleName,
            ssoClient,
            clientConfig: init.clientConfig,
            profile: profileName,
        });
    }
};


/***/ }),

/***/ 567:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   fromSSO: () => (/* reexport safe */ _fromSSO__WEBPACK_IMPORTED_MODULE_0__.fromSSO),
/* harmony export */   isSsoProfile: () => (/* reexport safe */ _isSsoProfile__WEBPACK_IMPORTED_MODULE_1__.isSsoProfile),
/* harmony export */   validateSsoProfile: () => (/* reexport safe */ _validateSsoProfile__WEBPACK_IMPORTED_MODULE_3__.validateSsoProfile)
/* harmony export */ });
/* harmony import */ var _fromSSO__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(568);
/* harmony import */ var _isSsoProfile__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(569);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(579);
/* harmony import */ var _validateSsoProfile__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(578);






/***/ }),

/***/ 569:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isSsoProfile: () => (/* binding */ isSsoProfile)
/* harmony export */ });
const isSsoProfile = (arg) => arg &&
    (typeof arg.sso_start_url === "string" ||
        typeof arg.sso_account_id === "string" ||
        typeof arg.sso_session === "string" ||
        typeof arg.sso_region === "string" ||
        typeof arg.sso_role_name === "string");


/***/ }),

/***/ 570:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   resolveSSOCredentials: () => (/* binding */ resolveSSOCredentials)
/* harmony export */ });
/* harmony import */ var _aws_sdk_token_providers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(571);
/* harmony import */ var _smithy_property_provider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(195);
/* harmony import */ var _smithy_shared_ini_file_loader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(205);



const SHOULD_FAIL_CREDENTIAL_CHAIN = false;
const resolveSSOCredentials = async ({ ssoStartUrl, ssoSession, ssoAccountId, ssoRegion, ssoRoleName, ssoClient, clientConfig, profile, logger, }) => {
    let token;
    const refreshMessage = `To refresh this SSO session run aws sso login with the corresponding profile.`;
    if (ssoSession) {
        try {
            const _token = await (0,_aws_sdk_token_providers__WEBPACK_IMPORTED_MODULE_2__.fromSso)({ profile })();
            token = {
                accessToken: _token.token,
                expiresAt: new Date(_token.expiration).toISOString(),
            };
        }
        catch (e) {
            throw new _smithy_property_provider__WEBPACK_IMPORTED_MODULE_0__.CredentialsProviderError(e.message, {
                tryNextLink: SHOULD_FAIL_CREDENTIAL_CHAIN,
                logger,
            });
        }
    }
    else {
        try {
            token = await (0,_smithy_shared_ini_file_loader__WEBPACK_IMPORTED_MODULE_1__.getSSOTokenFromFile)(ssoStartUrl);
        }
        catch (e) {
            throw new _smithy_property_provider__WEBPACK_IMPORTED_MODULE_0__.CredentialsProviderError(`The SSO session associated with this profile is invalid. ${refreshMessage}`, {
                tryNextLink: SHOULD_FAIL_CREDENTIAL_CHAIN,
                logger,
            });
        }
    }
    if (new Date(token.expiresAt).getTime() - Date.now() <= 0) {
        throw new _smithy_property_provider__WEBPACK_IMPORTED_MODULE_0__.CredentialsProviderError(`The SSO session associated with this profile has expired. ${refreshMessage}`, {
            tryNextLink: SHOULD_FAIL_CREDENTIAL_CHAIN,
            logger,
        });
    }
    const { accessToken } = token;
    const { SSOClient, GetRoleCredentialsCommand } = await Promise.all(/* import() */[__webpack_require__.e(8), __webpack_require__.e(7)]).then(__webpack_require__.bind(__webpack_require__, 741));
    const sso = ssoClient ||
        new SSOClient(Object.assign({}, clientConfig ?? {}, {
            region: clientConfig?.region ?? ssoRegion,
        }));
    let ssoResp;
    try {
        ssoResp = await sso.send(new GetRoleCredentialsCommand({
            accountId: ssoAccountId,
            roleName: ssoRoleName,
            accessToken,
        }));
    }
    catch (e) {
        throw new _smithy_property_provider__WEBPACK_IMPORTED_MODULE_0__.CredentialsProviderError(e, {
            tryNextLink: SHOULD_FAIL_CREDENTIAL_CHAIN,
            logger,
        });
    }
    const { roleCredentials: { accessKeyId, secretAccessKey, sessionToken, expiration, credentialScope } = {} } = ssoResp;
    if (!accessKeyId || !secretAccessKey || !sessionToken || !expiration) {
        throw new _smithy_property_provider__WEBPACK_IMPORTED_MODULE_0__.CredentialsProviderError("SSO returns an invalid temporary credential.", {
            tryNextLink: SHOULD_FAIL_CREDENTIAL_CHAIN,
            logger,
        });
    }
    return { accessKeyId, secretAccessKey, sessionToken, expiration: new Date(expiration), credentialScope };
};


/***/ }),

/***/ 579:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ 578:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   validateSsoProfile: () => (/* binding */ validateSsoProfile)
/* harmony export */ });
/* harmony import */ var _smithy_property_provider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(195);

const validateSsoProfile = (profile, logger) => {
    const { sso_start_url, sso_account_id, sso_region, sso_role_name } = profile;
    if (!sso_start_url || !sso_account_id || !sso_region || !sso_role_name) {
        throw new _smithy_property_provider__WEBPACK_IMPORTED_MODULE_0__.CredentialsProviderError(`Profile is configured with invalid SSO credentials. Required parameters "sso_account_id", ` +
            `"sso_region", "sso_role_name", "sso_start_url". Got ${Object.keys(profile).join(", ")}\nReference: https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-sso.html`, { tryNextLink: false, logger });
    }
    return profile;
};


/***/ }),

/***/ 572:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EXPIRE_WINDOW_MS: () => (/* binding */ EXPIRE_WINDOW_MS),
/* harmony export */   REFRESH_MESSAGE: () => (/* binding */ REFRESH_MESSAGE)
/* harmony export */ });
const EXPIRE_WINDOW_MS = 5 * 60 * 1000;
const REFRESH_MESSAGE = `To refresh this SSO session run 'aws sso login' with the corresponding profile.`;


/***/ }),

/***/ 571:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   fromSso: () => (/* binding */ fromSso)
/* harmony export */ });
/* harmony import */ var _smithy_property_provider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(195);
/* harmony import */ var _smithy_shared_ini_file_loader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(205);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(572);
/* harmony import */ var _getNewSsoOidcToken__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(573);
/* harmony import */ var _validateTokenExpiry__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(575);
/* harmony import */ var _validateTokenKey__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(576);
/* harmony import */ var _writeSSOTokenToFile__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(577);







const lastRefreshAttemptTime = new Date(0);
const fromSso = (init = {}) => async () => {
    init.logger?.debug("@aws-sdk/token-providers - fromSso");
    const profiles = await (0,_smithy_shared_ini_file_loader__WEBPACK_IMPORTED_MODULE_1__.parseKnownFiles)(init);
    const profileName = (0,_smithy_shared_ini_file_loader__WEBPACK_IMPORTED_MODULE_1__.getProfileName)(init);
    const profile = profiles[profileName];
    if (!profile) {
        throw new _smithy_property_provider__WEBPACK_IMPORTED_MODULE_0__.TokenProviderError(`Profile '${profileName}' could not be found in shared credentials file.`, false);
    }
    else if (!profile["sso_session"]) {
        throw new _smithy_property_provider__WEBPACK_IMPORTED_MODULE_0__.TokenProviderError(`Profile '${profileName}' is missing required property 'sso_session'.`);
    }
    const ssoSessionName = profile["sso_session"];
    const ssoSessions = await (0,_smithy_shared_ini_file_loader__WEBPACK_IMPORTED_MODULE_1__.loadSsoSessionData)(init);
    const ssoSession = ssoSessions[ssoSessionName];
    if (!ssoSession) {
        throw new _smithy_property_provider__WEBPACK_IMPORTED_MODULE_0__.TokenProviderError(`Sso session '${ssoSessionName}' could not be found in shared credentials file.`, false);
    }
    for (const ssoSessionRequiredKey of ["sso_start_url", "sso_region"]) {
        if (!ssoSession[ssoSessionRequiredKey]) {
            throw new _smithy_property_provider__WEBPACK_IMPORTED_MODULE_0__.TokenProviderError(`Sso session '${ssoSessionName}' is missing required property '${ssoSessionRequiredKey}'.`, false);
        }
    }
    const ssoStartUrl = ssoSession["sso_start_url"];
    const ssoRegion = ssoSession["sso_region"];
    let ssoToken;
    try {
        ssoToken = await (0,_smithy_shared_ini_file_loader__WEBPACK_IMPORTED_MODULE_1__.getSSOTokenFromFile)(ssoSessionName);
    }
    catch (e) {
        throw new _smithy_property_provider__WEBPACK_IMPORTED_MODULE_0__.TokenProviderError(`The SSO session token associated with profile=${profileName} was not found or is invalid. ${_constants__WEBPACK_IMPORTED_MODULE_2__.REFRESH_MESSAGE}`, false);
    }
    (0,_validateTokenKey__WEBPACK_IMPORTED_MODULE_3__.validateTokenKey)("accessToken", ssoToken.accessToken);
    (0,_validateTokenKey__WEBPACK_IMPORTED_MODULE_3__.validateTokenKey)("expiresAt", ssoToken.expiresAt);
    const { accessToken, expiresAt } = ssoToken;
    const existingToken = { token: accessToken, expiration: new Date(expiresAt) };
    if (existingToken.expiration.getTime() - Date.now() > _constants__WEBPACK_IMPORTED_MODULE_2__.EXPIRE_WINDOW_MS) {
        return existingToken;
    }
    if (Date.now() - lastRefreshAttemptTime.getTime() < 30 * 1000) {
        (0,_validateTokenExpiry__WEBPACK_IMPORTED_MODULE_4__.validateTokenExpiry)(existingToken);
        return existingToken;
    }
    (0,_validateTokenKey__WEBPACK_IMPORTED_MODULE_3__.validateTokenKey)("clientId", ssoToken.clientId, true);
    (0,_validateTokenKey__WEBPACK_IMPORTED_MODULE_3__.validateTokenKey)("clientSecret", ssoToken.clientSecret, true);
    (0,_validateTokenKey__WEBPACK_IMPORTED_MODULE_3__.validateTokenKey)("refreshToken", ssoToken.refreshToken, true);
    try {
        lastRefreshAttemptTime.setTime(Date.now());
        const newSsoOidcToken = await (0,_getNewSsoOidcToken__WEBPACK_IMPORTED_MODULE_5__.getNewSsoOidcToken)(ssoToken, ssoRegion);
        (0,_validateTokenKey__WEBPACK_IMPORTED_MODULE_3__.validateTokenKey)("accessToken", newSsoOidcToken.accessToken);
        (0,_validateTokenKey__WEBPACK_IMPORTED_MODULE_3__.validateTokenKey)("expiresIn", newSsoOidcToken.expiresIn);
        const newTokenExpiration = new Date(Date.now() + newSsoOidcToken.expiresIn * 1000);
        try {
            await (0,_writeSSOTokenToFile__WEBPACK_IMPORTED_MODULE_6__.writeSSOTokenToFile)(ssoSessionName, {
                ...ssoToken,
                accessToken: newSsoOidcToken.accessToken,
                expiresAt: newTokenExpiration.toISOString(),
                refreshToken: newSsoOidcToken.refreshToken,
            });
        }
        catch (error) {
        }
        return {
            token: newSsoOidcToken.accessToken,
            expiration: newTokenExpiration,
        };
    }
    catch (error) {
        (0,_validateTokenExpiry__WEBPACK_IMPORTED_MODULE_4__.validateTokenExpiry)(existingToken);
        return existingToken;
    }
};


/***/ }),

/***/ 573:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getNewSsoOidcToken: () => (/* binding */ getNewSsoOidcToken)
/* harmony export */ });
/* harmony import */ var _getSsoOidcClient__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(574);

const getNewSsoOidcToken = async (ssoToken, ssoRegion) => {
    const { CreateTokenCommand } = await Promise.all(/* import() */[__webpack_require__.e(8), __webpack_require__.e(9)]).then(__webpack_require__.bind(__webpack_require__, 1096));
    const ssoOidcClient = await (0,_getSsoOidcClient__WEBPACK_IMPORTED_MODULE_0__.getSsoOidcClient)(ssoRegion);
    return ssoOidcClient.send(new CreateTokenCommand({
        clientId: ssoToken.clientId,
        clientSecret: ssoToken.clientSecret,
        refreshToken: ssoToken.refreshToken,
        grantType: "refresh_token",
    }));
};


/***/ }),

/***/ 574:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getSsoOidcClient: () => (/* binding */ getSsoOidcClient)
/* harmony export */ });
const ssoOidcClientsHash = {};
const getSsoOidcClient = async (ssoRegion) => {
    const { SSOOIDCClient } = await Promise.all(/* import() */[__webpack_require__.e(8), __webpack_require__.e(9)]).then(__webpack_require__.bind(__webpack_require__, 1096));
    if (ssoOidcClientsHash[ssoRegion]) {
        return ssoOidcClientsHash[ssoRegion];
    }
    const ssoOidcClient = new SSOOIDCClient({ region: ssoRegion });
    ssoOidcClientsHash[ssoRegion] = ssoOidcClient;
    return ssoOidcClient;
};


/***/ }),

/***/ 575:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   validateTokenExpiry: () => (/* binding */ validateTokenExpiry)
/* harmony export */ });
/* harmony import */ var _smithy_property_provider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(195);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(572);


const validateTokenExpiry = (token) => {
    if (token.expiration && token.expiration.getTime() < Date.now()) {
        throw new _smithy_property_provider__WEBPACK_IMPORTED_MODULE_0__.TokenProviderError(`Token is expired. ${_constants__WEBPACK_IMPORTED_MODULE_1__.REFRESH_MESSAGE}`, false);
    }
};


/***/ }),

/***/ 576:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   validateTokenKey: () => (/* binding */ validateTokenKey)
/* harmony export */ });
/* harmony import */ var _smithy_property_provider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(195);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(572);


const validateTokenKey = (key, value, forRefresh = false) => {
    if (typeof value === "undefined") {
        throw new _smithy_property_provider__WEBPACK_IMPORTED_MODULE_0__.TokenProviderError(`Value not present for '${key}' in SSO Token${forRefresh ? ". Cannot refresh" : ""}. ${_constants__WEBPACK_IMPORTED_MODULE_1__.REFRESH_MESSAGE}`, false);
    }
};


/***/ }),

/***/ 577:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   writeSSOTokenToFile: () => (/* binding */ writeSSOTokenToFile)
/* harmony export */ });
/* harmony import */ var _smithy_shared_ini_file_loader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(205);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(20);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_1__);


const { writeFile } = fs__WEBPACK_IMPORTED_MODULE_1__.promises;
const writeSSOTokenToFile = (id, ssoToken) => {
    const tokenFilepath = (0,_smithy_shared_ini_file_loader__WEBPACK_IMPORTED_MODULE_0__.getSSOTokenFilepath)(id);
    const tokenString = JSON.stringify(ssoToken, null, 2);
    return writeFile(tokenFilepath, tokenString);
};


/***/ })

};
;