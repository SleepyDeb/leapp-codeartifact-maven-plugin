"use strict";
exports.id = 3;
exports.ids = [3];
exports.modules = {

/***/ 590:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   fromProcess: () => (/* binding */ fromProcess)
/* harmony export */ });
/* harmony import */ var _smithy_shared_ini_file_loader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(205);
/* harmony import */ var _resolveProcessCredentials__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(591);


const fromProcess = (init = {}) => async () => {
    init.logger?.debug("@aws-sdk/credential-provider-process - fromProcess");
    const profiles = await (0,_smithy_shared_ini_file_loader__WEBPACK_IMPORTED_MODULE_0__.parseKnownFiles)(init);
    return (0,_resolveProcessCredentials__WEBPACK_IMPORTED_MODULE_1__.resolveProcessCredentials)((0,_smithy_shared_ini_file_loader__WEBPACK_IMPORTED_MODULE_0__.getProfileName)(init), profiles, init.logger);
};


/***/ }),

/***/ 593:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getValidatedProcessCredentials: () => (/* binding */ getValidatedProcessCredentials)
/* harmony export */ });
const getValidatedProcessCredentials = (profileName, data) => {
    if (data.Version !== 1) {
        throw Error(`Profile ${profileName} credential_process did not return Version 1.`);
    }
    if (data.AccessKeyId === undefined || data.SecretAccessKey === undefined) {
        throw Error(`Profile ${profileName} credential_process returned invalid credentials.`);
    }
    if (data.Expiration) {
        const currentTime = new Date();
        const expireTime = new Date(data.Expiration);
        if (expireTime < currentTime) {
            throw Error(`Profile ${profileName} credential_process returned expired credentials.`);
        }
    }
    return {
        accessKeyId: data.AccessKeyId,
        secretAccessKey: data.SecretAccessKey,
        ...(data.SessionToken && { sessionToken: data.SessionToken }),
        ...(data.Expiration && { expiration: new Date(data.Expiration) }),
        ...(data.CredentialScope && { credentialScope: data.CredentialScope }),
    };
};


/***/ }),

/***/ 589:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   fromProcess: () => (/* reexport safe */ _fromProcess__WEBPACK_IMPORTED_MODULE_0__.fromProcess)
/* harmony export */ });
/* harmony import */ var _fromProcess__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(590);



/***/ }),

/***/ 591:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   resolveProcessCredentials: () => (/* binding */ resolveProcessCredentials)
/* harmony export */ });
/* harmony import */ var _smithy_property_provider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(195);
/* harmony import */ var child_process__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(592);
/* harmony import */ var child_process__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(child_process__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(435);
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _getValidatedProcessCredentials__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(593);




const resolveProcessCredentials = async (profileName, profiles, logger) => {
    const profile = profiles[profileName];
    if (profiles[profileName]) {
        const credentialProcess = profile["credential_process"];
        if (credentialProcess !== undefined) {
            const execPromise = (0,util__WEBPACK_IMPORTED_MODULE_2__.promisify)(child_process__WEBPACK_IMPORTED_MODULE_1__.exec);
            try {
                const { stdout } = await execPromise(credentialProcess);
                let data;
                try {
                    data = JSON.parse(stdout.trim());
                }
                catch {
                    throw Error(`Profile ${profileName} credential_process returned invalid JSON.`);
                }
                return (0,_getValidatedProcessCredentials__WEBPACK_IMPORTED_MODULE_3__.getValidatedProcessCredentials)(profileName, data);
            }
            catch (error) {
                throw new _smithy_property_provider__WEBPACK_IMPORTED_MODULE_0__.CredentialsProviderError(error.message, { logger });
            }
        }
        else {
            throw new _smithy_property_provider__WEBPACK_IMPORTED_MODULE_0__.CredentialsProviderError(`Profile ${profileName} did not contain credential_process.`, { logger });
        }
    }
    else {
        throw new _smithy_property_provider__WEBPACK_IMPORTED_MODULE_0__.CredentialsProviderError(`Profile ${profileName} could not be found in shared credentials file.`, {
            logger,
        });
    }
};


/***/ })

};
;