"use strict";
exports.id = 7;
exports.ids = [7];
exports.modules = {

/***/ 741:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GetRoleCredentialsCommand: () => (/* reexport safe */ _aws_sdk_client_sso__WEBPACK_IMPORTED_MODULE_0__.GetRoleCredentialsCommand),
/* harmony export */   SSOClient: () => (/* reexport safe */ _aws_sdk_client_sso__WEBPACK_IMPORTED_MODULE_1__.SSOClient)
/* harmony export */ });
/* harmony import */ var _aws_sdk_client_sso__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(742);
/* harmony import */ var _aws_sdk_client_sso__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(921);




/***/ }),

/***/ 921:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SSOClient: () => (/* binding */ SSOClient),
/* harmony export */   __Client: () => (/* reexport safe */ _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_9__.Client)
/* harmony export */ });
/* harmony import */ var _aws_sdk_middleware_host_header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(922);
/* harmony import */ var _aws_sdk_middleware_logger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(923);
/* harmony import */ var _aws_sdk_middleware_recursion_detection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(925);
/* harmony import */ var _aws_sdk_middleware_user_agent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(926);
/* harmony import */ var _smithy_config_resolver__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(987);
/* harmony import */ var _smithy_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(861);
/* harmony import */ var _smithy_middleware_content_length__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1011);
/* harmony import */ var _smithy_middleware_endpoint__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(743);
/* harmony import */ var _smithy_middleware_retry__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(879);
/* harmony import */ var _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(829);
/* harmony import */ var _auth_httpAuthSchemeProvider__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(1012);
/* harmony import */ var _endpoint_EndpointParameters__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(857);
/* harmony import */ var _runtimeConfig__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(1037);
/* harmony import */ var _runtimeExtensions__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(1087);















class SSOClient extends _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_9__.Client {
    constructor(...[configuration]) {
        const _config_0 = (0,_runtimeConfig__WEBPACK_IMPORTED_MODULE_10__.getRuntimeConfig)(configuration || {});
        const _config_1 = (0,_endpoint_EndpointParameters__WEBPACK_IMPORTED_MODULE_11__.resolveClientEndpointParameters)(_config_0);
        const _config_2 = (0,_smithy_config_resolver__WEBPACK_IMPORTED_MODULE_4__.resolveRegionConfig)(_config_1);
        const _config_3 = (0,_smithy_middleware_endpoint__WEBPACK_IMPORTED_MODULE_7__.resolveEndpointConfig)(_config_2);
        const _config_4 = (0,_smithy_middleware_retry__WEBPACK_IMPORTED_MODULE_8__.resolveRetryConfig)(_config_3);
        const _config_5 = (0,_aws_sdk_middleware_host_header__WEBPACK_IMPORTED_MODULE_0__.resolveHostHeaderConfig)(_config_4);
        const _config_6 = (0,_aws_sdk_middleware_user_agent__WEBPACK_IMPORTED_MODULE_3__.resolveUserAgentConfig)(_config_5);
        const _config_7 = (0,_auth_httpAuthSchemeProvider__WEBPACK_IMPORTED_MODULE_12__.resolveHttpAuthSchemeConfig)(_config_6);
        const _config_8 = (0,_runtimeExtensions__WEBPACK_IMPORTED_MODULE_13__.resolveRuntimeExtensions)(_config_7, configuration?.extensions || []);
        super(_config_8);
        this.config = _config_8;
        this.middlewareStack.use((0,_smithy_middleware_retry__WEBPACK_IMPORTED_MODULE_8__.getRetryPlugin)(this.config));
        this.middlewareStack.use((0,_smithy_middleware_content_length__WEBPACK_IMPORTED_MODULE_6__.getContentLengthPlugin)(this.config));
        this.middlewareStack.use((0,_aws_sdk_middleware_host_header__WEBPACK_IMPORTED_MODULE_0__.getHostHeaderPlugin)(this.config));
        this.middlewareStack.use((0,_aws_sdk_middleware_logger__WEBPACK_IMPORTED_MODULE_1__.getLoggerPlugin)(this.config));
        this.middlewareStack.use((0,_aws_sdk_middleware_recursion_detection__WEBPACK_IMPORTED_MODULE_2__.getRecursionDetectionPlugin)(this.config));
        this.middlewareStack.use((0,_aws_sdk_middleware_user_agent__WEBPACK_IMPORTED_MODULE_3__.getUserAgentPlugin)(this.config));
        this.middlewareStack.use((0,_smithy_core__WEBPACK_IMPORTED_MODULE_5__.getHttpAuthSchemeEndpointRuleSetPlugin)(this.config, {
            httpAuthSchemeParametersProvider: this.getDefaultHttpAuthSchemeParametersProvider(),
            identityProviderConfigProvider: this.getIdentityProviderConfigProvider(),
        }));
        this.middlewareStack.use((0,_smithy_core__WEBPACK_IMPORTED_MODULE_5__.getHttpSigningPlugin)(this.config));
    }
    destroy() {
        super.destroy();
    }
    getDefaultHttpAuthSchemeParametersProvider() {
        return _auth_httpAuthSchemeProvider__WEBPACK_IMPORTED_MODULE_12__.defaultSSOHttpAuthSchemeParametersProvider;
    }
    getIdentityProviderConfigProvider() {
        return async (config) => new _smithy_core__WEBPACK_IMPORTED_MODULE_5__.DefaultIdentityProviderConfig({
            "aws.auth#sigv4": config.credentials,
        });
    }
}


/***/ }),

/***/ 1095:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getHttpAuthExtensionConfiguration: () => (/* binding */ getHttpAuthExtensionConfiguration),
/* harmony export */   resolveHttpAuthRuntimeConfig: () => (/* binding */ resolveHttpAuthRuntimeConfig)
/* harmony export */ });
const getHttpAuthExtensionConfiguration = (runtimeConfig) => {
    const _httpAuthSchemes = runtimeConfig.httpAuthSchemes;
    let _httpAuthSchemeProvider = runtimeConfig.httpAuthSchemeProvider;
    let _credentials = runtimeConfig.credentials;
    return {
        setHttpAuthScheme(httpAuthScheme) {
            const index = _httpAuthSchemes.findIndex((scheme) => scheme.schemeId === httpAuthScheme.schemeId);
            if (index === -1) {
                _httpAuthSchemes.push(httpAuthScheme);
            }
            else {
                _httpAuthSchemes.splice(index, 1, httpAuthScheme);
            }
        },
        httpAuthSchemes() {
            return _httpAuthSchemes;
        },
        setHttpAuthSchemeProvider(httpAuthSchemeProvider) {
            _httpAuthSchemeProvider = httpAuthSchemeProvider;
        },
        httpAuthSchemeProvider() {
            return _httpAuthSchemeProvider;
        },
        setCredentials(credentials) {
            _credentials = credentials;
        },
        credentials() {
            return _credentials;
        },
    };
};
const resolveHttpAuthRuntimeConfig = (config) => {
    return {
        httpAuthSchemes: config.httpAuthSchemes(),
        httpAuthSchemeProvider: config.httpAuthSchemeProvider(),
        credentials: config.credentials(),
    };
};


/***/ }),

/***/ 1012:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   defaultSSOHttpAuthSchemeParametersProvider: () => (/* binding */ defaultSSOHttpAuthSchemeParametersProvider),
/* harmony export */   defaultSSOHttpAuthSchemeProvider: () => (/* binding */ defaultSSOHttpAuthSchemeProvider),
/* harmony export */   resolveHttpAuthSchemeConfig: () => (/* binding */ resolveHttpAuthSchemeConfig)
/* harmony export */ });
/* harmony import */ var _aws_sdk_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1013);
/* harmony import */ var _smithy_util_middleware__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(761);


const defaultSSOHttpAuthSchemeParametersProvider = async (config, context, input) => {
    return {
        operation: (0,_smithy_util_middleware__WEBPACK_IMPORTED_MODULE_0__.getSmithyContext)(context).operation,
        region: (await (0,_smithy_util_middleware__WEBPACK_IMPORTED_MODULE_0__.normalizeProvider)(config.region)()) ||
            (() => {
                throw new Error("expected `region` to be configured for `aws.auth#sigv4`");
            })(),
    };
};
function createAwsAuthSigv4HttpAuthOption(authParameters) {
    return {
        schemeId: "aws.auth#sigv4",
        signingProperties: {
            name: "awsssoportal",
            region: authParameters.region,
        },
        propertiesExtractor: (config, context) => ({
            signingProperties: {
                config,
                context,
            },
        }),
    };
}
function createSmithyApiNoAuthHttpAuthOption(authParameters) {
    return {
        schemeId: "smithy.api#noAuth",
    };
}
const defaultSSOHttpAuthSchemeProvider = (authParameters) => {
    const options = [];
    switch (authParameters.operation) {
        case "GetRoleCredentials": {
            options.push(createSmithyApiNoAuthHttpAuthOption(authParameters));
            break;
        }
        case "ListAccountRoles": {
            options.push(createSmithyApiNoAuthHttpAuthOption(authParameters));
            break;
        }
        case "ListAccounts": {
            options.push(createSmithyApiNoAuthHttpAuthOption(authParameters));
            break;
        }
        case "Logout": {
            options.push(createSmithyApiNoAuthHttpAuthOption(authParameters));
            break;
        }
        default: {
            options.push(createAwsAuthSigv4HttpAuthOption(authParameters));
        }
    }
    return options;
};
const resolveHttpAuthSchemeConfig = (config) => {
    const config_0 = (0,_aws_sdk_core__WEBPACK_IMPORTED_MODULE_1__.resolveAwsSdkSigV4Config)(config);
    return {
        ...config_0,
    };
};


/***/ }),

/***/ 742:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $Command: () => (/* reexport safe */ _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_2__.Command),
/* harmony export */   GetRoleCredentialsCommand: () => (/* binding */ GetRoleCredentialsCommand)
/* harmony export */ });
/* harmony import */ var _smithy_middleware_endpoint__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(743);
/* harmony import */ var _smithy_middleware_serde__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(823);
/* harmony import */ var _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(829);
/* harmony import */ var _endpoint_EndpointParameters__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(857);
/* harmony import */ var _models_models_0__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(858);
/* harmony import */ var _protocols_Aws_restJson1__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(860);







class GetRoleCredentialsCommand extends _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_2__.Command
    .classBuilder()
    .ep({
    ..._endpoint_EndpointParameters__WEBPACK_IMPORTED_MODULE_3__.commonParams,
})
    .m(function (Command, cs, config, o) {
    return [
        (0,_smithy_middleware_serde__WEBPACK_IMPORTED_MODULE_1__.getSerdePlugin)(config, this.serialize, this.deserialize),
        (0,_smithy_middleware_endpoint__WEBPACK_IMPORTED_MODULE_0__.getEndpointPlugin)(config, Command.getEndpointParameterInstructions()),
    ];
})
    .s("SWBPortalService", "GetRoleCredentials", {})
    .n("SSOClient", "GetRoleCredentialsCommand")
    .f(_models_models_0__WEBPACK_IMPORTED_MODULE_4__.GetRoleCredentialsRequestFilterSensitiveLog, _models_models_0__WEBPACK_IMPORTED_MODULE_4__.GetRoleCredentialsResponseFilterSensitiveLog)
    .ser(_protocols_Aws_restJson1__WEBPACK_IMPORTED_MODULE_5__.se_GetRoleCredentialsCommand)
    .de(_protocols_Aws_restJson1__WEBPACK_IMPORTED_MODULE_5__.de_GetRoleCredentialsCommand)
    .build() {
}


/***/ }),

/***/ 857:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   commonParams: () => (/* binding */ commonParams),
/* harmony export */   resolveClientEndpointParameters: () => (/* binding */ resolveClientEndpointParameters)
/* harmony export */ });
const resolveClientEndpointParameters = (options) => {
    return {
        ...options,
        useDualstackEndpoint: options.useDualstackEndpoint ?? false,
        useFipsEndpoint: options.useFipsEndpoint ?? false,
        defaultSigningName: "awsssoportal",
    };
};
const commonParams = {
    UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
    Endpoint: { type: "builtInParams", name: "endpoint" },
    Region: { type: "builtInParams", name: "region" },
    UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
};


/***/ }),

/***/ 1075:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   defaultEndpointResolver: () => (/* binding */ defaultEndpointResolver)
/* harmony export */ });
/* harmony import */ var _aws_sdk_util_endpoints__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(929);
/* harmony import */ var _smithy_util_endpoints__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(931);
/* harmony import */ var _ruleset__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1076);



const defaultEndpointResolver = (endpointParams, context = {}) => {
    return (0,_smithy_util_endpoints__WEBPACK_IMPORTED_MODULE_1__.resolveEndpoint)(_ruleset__WEBPACK_IMPORTED_MODULE_2__.ruleSet, {
        endpointParams: endpointParams,
        logger: context.logger,
    });
};
_smithy_util_endpoints__WEBPACK_IMPORTED_MODULE_1__.customEndpointFunctions.aws = _aws_sdk_util_endpoints__WEBPACK_IMPORTED_MODULE_0__.awsEndpointFunctions;


/***/ }),

/***/ 1076:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ruleSet: () => (/* binding */ ruleSet)
/* harmony export */ });
const u = "required", v = "fn", w = "argv", x = "ref";
const a = true, b = "isSet", c = "booleanEquals", d = "error", e = "endpoint", f = "tree", g = "PartitionResult", h = "getAttr", i = { [u]: false, "type": "String" }, j = { [u]: true, "default": false, "type": "Boolean" }, k = { [x]: "Endpoint" }, l = { [v]: c, [w]: [{ [x]: "UseFIPS" }, true] }, m = { [v]: c, [w]: [{ [x]: "UseDualStack" }, true] }, n = {}, o = { [v]: h, [w]: [{ [x]: g }, "supportsFIPS"] }, p = { [x]: g }, q = { [v]: c, [w]: [true, { [v]: h, [w]: [p, "supportsDualStack"] }] }, r = [l], s = [m], t = [{ [x]: "Region" }];
const _data = { version: "1.0", parameters: { Region: i, UseDualStack: j, UseFIPS: j, Endpoint: i }, rules: [{ conditions: [{ [v]: b, [w]: [k] }], rules: [{ conditions: r, error: "Invalid Configuration: FIPS and custom endpoint are not supported", type: d }, { conditions: s, error: "Invalid Configuration: Dualstack and custom endpoint are not supported", type: d }, { endpoint: { url: k, properties: n, headers: n }, type: e }], type: f }, { conditions: [{ [v]: b, [w]: t }], rules: [{ conditions: [{ [v]: "aws.partition", [w]: t, assign: g }], rules: [{ conditions: [l, m], rules: [{ conditions: [{ [v]: c, [w]: [a, o] }, q], rules: [{ endpoint: { url: "https://portal.sso-fips.{Region}.{PartitionResult#dualStackDnsSuffix}", properties: n, headers: n }, type: e }], type: f }, { error: "FIPS and DualStack are enabled, but this partition does not support one or both", type: d }], type: f }, { conditions: r, rules: [{ conditions: [{ [v]: c, [w]: [o, a] }], rules: [{ conditions: [{ [v]: "stringEquals", [w]: [{ [v]: h, [w]: [p, "name"] }, "aws-us-gov"] }], endpoint: { url: "https://portal.sso.{Region}.amazonaws.com", properties: n, headers: n }, type: e }, { endpoint: { url: "https://portal.sso-fips.{Region}.{PartitionResult#dnsSuffix}", properties: n, headers: n }, type: e }], type: f }, { error: "FIPS is enabled but this partition does not support FIPS", type: d }], type: f }, { conditions: s, rules: [{ conditions: [q], rules: [{ endpoint: { url: "https://portal.sso.{Region}.{PartitionResult#dualStackDnsSuffix}", properties: n, headers: n }, type: e }], type: f }, { error: "DualStack is enabled but this partition does not support DualStack", type: d }], type: f }, { endpoint: { url: "https://portal.sso.{Region}.{PartitionResult#dnsSuffix}", properties: n, headers: n }, type: e }], type: f }], type: f }, { error: "Invalid Configuration: Missing Region", type: d }] };
const ruleSet = _data;


/***/ }),

/***/ 859:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SSOServiceException: () => (/* binding */ SSOServiceException),
/* harmony export */   __ServiceException: () => (/* reexport safe */ _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_0__.ServiceException)
/* harmony export */ });
/* harmony import */ var _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(829);


class SSOServiceException extends _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_0__.ServiceException {
    constructor(options) {
        super(options);
        Object.setPrototypeOf(this, SSOServiceException.prototype);
    }
}


/***/ }),

/***/ 858:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GetRoleCredentialsRequestFilterSensitiveLog: () => (/* binding */ GetRoleCredentialsRequestFilterSensitiveLog),
/* harmony export */   GetRoleCredentialsResponseFilterSensitiveLog: () => (/* binding */ GetRoleCredentialsResponseFilterSensitiveLog),
/* harmony export */   InvalidRequestException: () => (/* binding */ InvalidRequestException),
/* harmony export */   ListAccountRolesRequestFilterSensitiveLog: () => (/* binding */ ListAccountRolesRequestFilterSensitiveLog),
/* harmony export */   ListAccountsRequestFilterSensitiveLog: () => (/* binding */ ListAccountsRequestFilterSensitiveLog),
/* harmony export */   LogoutRequestFilterSensitiveLog: () => (/* binding */ LogoutRequestFilterSensitiveLog),
/* harmony export */   ResourceNotFoundException: () => (/* binding */ ResourceNotFoundException),
/* harmony export */   RoleCredentialsFilterSensitiveLog: () => (/* binding */ RoleCredentialsFilterSensitiveLog),
/* harmony export */   TooManyRequestsException: () => (/* binding */ TooManyRequestsException),
/* harmony export */   UnauthorizedException: () => (/* binding */ UnauthorizedException)
/* harmony export */ });
/* harmony import */ var _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(829);
/* harmony import */ var _SSOServiceException__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(859);


class InvalidRequestException extends _SSOServiceException__WEBPACK_IMPORTED_MODULE_1__.SSOServiceException {
    constructor(opts) {
        super({
            name: "InvalidRequestException",
            $fault: "client",
            ...opts,
        });
        this.name = "InvalidRequestException";
        this.$fault = "client";
        Object.setPrototypeOf(this, InvalidRequestException.prototype);
    }
}
class ResourceNotFoundException extends _SSOServiceException__WEBPACK_IMPORTED_MODULE_1__.SSOServiceException {
    constructor(opts) {
        super({
            name: "ResourceNotFoundException",
            $fault: "client",
            ...opts,
        });
        this.name = "ResourceNotFoundException";
        this.$fault = "client";
        Object.setPrototypeOf(this, ResourceNotFoundException.prototype);
    }
}
class TooManyRequestsException extends _SSOServiceException__WEBPACK_IMPORTED_MODULE_1__.SSOServiceException {
    constructor(opts) {
        super({
            name: "TooManyRequestsException",
            $fault: "client",
            ...opts,
        });
        this.name = "TooManyRequestsException";
        this.$fault = "client";
        Object.setPrototypeOf(this, TooManyRequestsException.prototype);
    }
}
class UnauthorizedException extends _SSOServiceException__WEBPACK_IMPORTED_MODULE_1__.SSOServiceException {
    constructor(opts) {
        super({
            name: "UnauthorizedException",
            $fault: "client",
            ...opts,
        });
        this.name = "UnauthorizedException";
        this.$fault = "client";
        Object.setPrototypeOf(this, UnauthorizedException.prototype);
    }
}
const GetRoleCredentialsRequestFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.accessToken && { accessToken: _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_0__.SENSITIVE_STRING }),
});
const RoleCredentialsFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.secretAccessKey && { secretAccessKey: _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_0__.SENSITIVE_STRING }),
    ...(obj.sessionToken && { sessionToken: _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_0__.SENSITIVE_STRING }),
});
const GetRoleCredentialsResponseFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.roleCredentials && { roleCredentials: RoleCredentialsFilterSensitiveLog(obj.roleCredentials) }),
});
const ListAccountRolesRequestFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.accessToken && { accessToken: _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_0__.SENSITIVE_STRING }),
});
const ListAccountsRequestFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.accessToken && { accessToken: _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_0__.SENSITIVE_STRING }),
});
const LogoutRequestFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.accessToken && { accessToken: _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_0__.SENSITIVE_STRING }),
});


/***/ }),

/***/ 860:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   de_GetRoleCredentialsCommand: () => (/* binding */ de_GetRoleCredentialsCommand),
/* harmony export */   de_ListAccountRolesCommand: () => (/* binding */ de_ListAccountRolesCommand),
/* harmony export */   de_ListAccountsCommand: () => (/* binding */ de_ListAccountsCommand),
/* harmony export */   de_LogoutCommand: () => (/* binding */ de_LogoutCommand),
/* harmony export */   se_GetRoleCredentialsCommand: () => (/* binding */ se_GetRoleCredentialsCommand),
/* harmony export */   se_ListAccountRolesCommand: () => (/* binding */ se_ListAccountRolesCommand),
/* harmony export */   se_ListAccountsCommand: () => (/* binding */ se_ListAccountsCommand),
/* harmony export */   se_LogoutCommand: () => (/* binding */ se_LogoutCommand)
/* harmony export */ });
/* harmony import */ var _aws_sdk_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(919);
/* harmony import */ var _smithy_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(861);
/* harmony import */ var _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(829);
/* harmony import */ var _models_models_0__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(858);
/* harmony import */ var _models_SSOServiceException__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(859);





const se_GetRoleCredentialsCommand = async (input, context) => {
    const b = (0,_smithy_core__WEBPACK_IMPORTED_MODULE_0__.requestBuilder)(input, context);
    const headers = (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.map)({}, isSerializableHeaderValue, {
        [_xasbt]: input[_aT],
    });
    b.bp("/federation/credentials");
    const query = (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.map)({
        [_rn]: [, (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.expectNonNull)(input[_rN], `roleName`)],
        [_ai]: [, (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.expectNonNull)(input[_aI], `accountId`)],
    });
    let body;
    b.m("GET").h(headers).q(query).b(body);
    return b.build();
};
const se_ListAccountRolesCommand = async (input, context) => {
    const b = (0,_smithy_core__WEBPACK_IMPORTED_MODULE_0__.requestBuilder)(input, context);
    const headers = (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.map)({}, isSerializableHeaderValue, {
        [_xasbt]: input[_aT],
    });
    b.bp("/assignment/roles");
    const query = (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.map)({
        [_nt]: [, input[_nT]],
        [_mr]: [() => input.maxResults !== void 0, () => input[_mR].toString()],
        [_ai]: [, (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.expectNonNull)(input[_aI], `accountId`)],
    });
    let body;
    b.m("GET").h(headers).q(query).b(body);
    return b.build();
};
const se_ListAccountsCommand = async (input, context) => {
    const b = (0,_smithy_core__WEBPACK_IMPORTED_MODULE_0__.requestBuilder)(input, context);
    const headers = (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.map)({}, isSerializableHeaderValue, {
        [_xasbt]: input[_aT],
    });
    b.bp("/assignment/accounts");
    const query = (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.map)({
        [_nt]: [, input[_nT]],
        [_mr]: [() => input.maxResults !== void 0, () => input[_mR].toString()],
    });
    let body;
    b.m("GET").h(headers).q(query).b(body);
    return b.build();
};
const se_LogoutCommand = async (input, context) => {
    const b = (0,_smithy_core__WEBPACK_IMPORTED_MODULE_0__.requestBuilder)(input, context);
    const headers = (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.map)({}, isSerializableHeaderValue, {
        [_xasbt]: input[_aT],
    });
    b.bp("/logout");
    let body;
    b.m("POST").h(headers).b(body);
    return b.build();
};
const de_GetRoleCredentialsCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const contents = (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.map)({
        $metadata: deserializeMetadata(output),
    });
    const data = (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.expectNonNull)((0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.expectObject)(await (0,_aws_sdk_core__WEBPACK_IMPORTED_MODULE_2__.parseJsonBody)(output.body, context)), "body");
    const doc = (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.take)(data, {
        roleCredentials: _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__._json,
    });
    Object.assign(contents, doc);
    return contents;
};
const de_ListAccountRolesCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const contents = (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.map)({
        $metadata: deserializeMetadata(output),
    });
    const data = (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.expectNonNull)((0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.expectObject)(await (0,_aws_sdk_core__WEBPACK_IMPORTED_MODULE_2__.parseJsonBody)(output.body, context)), "body");
    const doc = (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.take)(data, {
        nextToken: _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.expectString,
        roleList: _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__._json,
    });
    Object.assign(contents, doc);
    return contents;
};
const de_ListAccountsCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const contents = (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.map)({
        $metadata: deserializeMetadata(output),
    });
    const data = (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.expectNonNull)((0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.expectObject)(await (0,_aws_sdk_core__WEBPACK_IMPORTED_MODULE_2__.parseJsonBody)(output.body, context)), "body");
    const doc = (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.take)(data, {
        accountList: _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__._json,
        nextToken: _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.expectString,
    });
    Object.assign(contents, doc);
    return contents;
};
const de_LogoutCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const contents = (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.map)({
        $metadata: deserializeMetadata(output),
    });
    await (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.collectBody)(output.body, context);
    return contents;
};
const de_CommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await (0,_aws_sdk_core__WEBPACK_IMPORTED_MODULE_2__.parseJsonErrorBody)(output.body, context),
    };
    const errorCode = (0,_aws_sdk_core__WEBPACK_IMPORTED_MODULE_2__.loadRestJsonErrorCode)(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidRequestException":
        case "com.amazonaws.sso#InvalidRequestException":
            throw await de_InvalidRequestExceptionRes(parsedOutput, context);
        case "ResourceNotFoundException":
        case "com.amazonaws.sso#ResourceNotFoundException":
            throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
        case "TooManyRequestsException":
        case "com.amazonaws.sso#TooManyRequestsException":
            throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
        case "UnauthorizedException":
        case "com.amazonaws.sso#UnauthorizedException":
            throw await de_UnauthorizedExceptionRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody,
                errorCode,
            });
    }
};
const throwDefaultError = (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.withBaseException)(_models_SSOServiceException__WEBPACK_IMPORTED_MODULE_3__.SSOServiceException);
const de_InvalidRequestExceptionRes = async (parsedOutput, context) => {
    const contents = (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.map)({});
    const data = parsedOutput.body;
    const doc = (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.take)(data, {
        message: _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.expectString,
    });
    Object.assign(contents, doc);
    const exception = new _models_models_0__WEBPACK_IMPORTED_MODULE_4__.InvalidRequestException({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents,
    });
    return (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.decorateServiceException)(exception, parsedOutput.body);
};
const de_ResourceNotFoundExceptionRes = async (parsedOutput, context) => {
    const contents = (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.map)({});
    const data = parsedOutput.body;
    const doc = (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.take)(data, {
        message: _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.expectString,
    });
    Object.assign(contents, doc);
    const exception = new _models_models_0__WEBPACK_IMPORTED_MODULE_4__.ResourceNotFoundException({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents,
    });
    return (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.decorateServiceException)(exception, parsedOutput.body);
};
const de_TooManyRequestsExceptionRes = async (parsedOutput, context) => {
    const contents = (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.map)({});
    const data = parsedOutput.body;
    const doc = (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.take)(data, {
        message: _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.expectString,
    });
    Object.assign(contents, doc);
    const exception = new _models_models_0__WEBPACK_IMPORTED_MODULE_4__.TooManyRequestsException({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents,
    });
    return (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.decorateServiceException)(exception, parsedOutput.body);
};
const de_UnauthorizedExceptionRes = async (parsedOutput, context) => {
    const contents = (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.map)({});
    const data = parsedOutput.body;
    const doc = (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.take)(data, {
        message: _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.expectString,
    });
    Object.assign(contents, doc);
    const exception = new _models_models_0__WEBPACK_IMPORTED_MODULE_4__.UnauthorizedException({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents,
    });
    return (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.decorateServiceException)(exception, parsedOutput.body);
};
const deserializeMetadata = (output) => ({
    httpStatusCode: output.statusCode,
    requestId: output.headers["x-amzn-requestid"] ?? output.headers["x-amzn-request-id"] ?? output.headers["x-amz-request-id"],
    extendedRequestId: output.headers["x-amz-id-2"],
    cfId: output.headers["x-amz-cf-id"],
});
const collectBodyString = (streamBody, context) => (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.collectBody)(streamBody, context).then((body) => context.utf8Encoder(body));
const isSerializableHeaderValue = (value) => value !== undefined &&
    value !== null &&
    value !== "" &&
    (!Object.getOwnPropertyNames(value).includes("length") || value.length != 0) &&
    (!Object.getOwnPropertyNames(value).includes("size") || value.size != 0);
const _aI = "accountId";
const _aT = "accessToken";
const _ai = "account_id";
const _mR = "maxResults";
const _mr = "max_result";
const _nT = "nextToken";
const _nt = "next_token";
const _rN = "roleName";
const _rn = "role_name";
const _xasbt = "x-amz-sso_bearer_token";


/***/ }),

/***/ 1037:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getRuntimeConfig: () => (/* binding */ getRuntimeConfig)
/* harmony export */ });
/* harmony import */ var _package_json__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(1038);
/* harmony import */ var _aws_sdk_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(1086);
/* harmony import */ var _aws_sdk_util_user_agent_node__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1039);
/* harmony import */ var _smithy_config_resolver__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(987);
/* harmony import */ var _smithy_hash_node__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1042);
/* harmony import */ var _smithy_middleware_retry__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(879);
/* harmony import */ var _smithy_node_config_provider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(750);
/* harmony import */ var _smithy_node_http_handler__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1047);
/* harmony import */ var _smithy_util_body_length_node__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1061);
/* harmony import */ var _smithy_util_retry__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(881);
/* harmony import */ var _runtimeConfig_shared__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(1063);
/* harmony import */ var _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(829);
/* harmony import */ var _smithy_util_defaults_mode_node__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1082);














const getRuntimeConfig = (config) => {
    (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_8__.emitWarningIfUnsupportedVersion)(process.version);
    const defaultsMode = (0,_smithy_util_defaults_mode_node__WEBPACK_IMPORTED_MODULE_9__.resolveDefaultsModeConfig)(config);
    const defaultConfigProvider = () => defaultsMode().then(_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_8__.loadConfigsForDefaultMode);
    const clientSharedValues = (0,_runtimeConfig_shared__WEBPACK_IMPORTED_MODULE_10__.getRuntimeConfig)(config);
    (0,_aws_sdk_core__WEBPACK_IMPORTED_MODULE_11__.emitWarningIfUnsupportedVersion)(process.version);
    return {
        ...clientSharedValues,
        ...config,
        runtime: "node",
        defaultsMode,
        bodyLengthChecker: config?.bodyLengthChecker ?? _smithy_util_body_length_node__WEBPACK_IMPORTED_MODULE_6__.calculateBodyLength,
        defaultUserAgentProvider: config?.defaultUserAgentProvider ??
            (0,_aws_sdk_util_user_agent_node__WEBPACK_IMPORTED_MODULE_0__.defaultUserAgent)({ serviceId: clientSharedValues.serviceId, clientVersion: _package_json__WEBPACK_IMPORTED_MODULE_12__.version }),
        maxAttempts: config?.maxAttempts ?? (0,_smithy_node_config_provider__WEBPACK_IMPORTED_MODULE_4__.loadConfig)(_smithy_middleware_retry__WEBPACK_IMPORTED_MODULE_3__.NODE_MAX_ATTEMPT_CONFIG_OPTIONS),
        region: config?.region ?? (0,_smithy_node_config_provider__WEBPACK_IMPORTED_MODULE_4__.loadConfig)(_smithy_config_resolver__WEBPACK_IMPORTED_MODULE_1__.NODE_REGION_CONFIG_OPTIONS, _smithy_config_resolver__WEBPACK_IMPORTED_MODULE_1__.NODE_REGION_CONFIG_FILE_OPTIONS),
        requestHandler: _smithy_node_http_handler__WEBPACK_IMPORTED_MODULE_5__.NodeHttpHandler.create(config?.requestHandler ?? defaultConfigProvider),
        retryMode: config?.retryMode ??
            (0,_smithy_node_config_provider__WEBPACK_IMPORTED_MODULE_4__.loadConfig)({
                ..._smithy_middleware_retry__WEBPACK_IMPORTED_MODULE_3__.NODE_RETRY_MODE_CONFIG_OPTIONS,
                default: async () => (await defaultConfigProvider()).retryMode || _smithy_util_retry__WEBPACK_IMPORTED_MODULE_7__.DEFAULT_RETRY_MODE,
            }),
        sha256: config?.sha256 ?? _smithy_hash_node__WEBPACK_IMPORTED_MODULE_2__.Hash.bind(null, "sha256"),
        streamCollector: config?.streamCollector ?? _smithy_node_http_handler__WEBPACK_IMPORTED_MODULE_5__.streamCollector,
        useDualstackEndpoint: config?.useDualstackEndpoint ?? (0,_smithy_node_config_provider__WEBPACK_IMPORTED_MODULE_4__.loadConfig)(_smithy_config_resolver__WEBPACK_IMPORTED_MODULE_1__.NODE_USE_DUALSTACK_ENDPOINT_CONFIG_OPTIONS),
        useFipsEndpoint: config?.useFipsEndpoint ?? (0,_smithy_node_config_provider__WEBPACK_IMPORTED_MODULE_4__.loadConfig)(_smithy_config_resolver__WEBPACK_IMPORTED_MODULE_1__.NODE_USE_FIPS_ENDPOINT_CONFIG_OPTIONS),
    };
};


/***/ }),

/***/ 1063:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getRuntimeConfig: () => (/* binding */ getRuntimeConfig)
/* harmony export */ });
/* harmony import */ var _aws_sdk_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1077);
/* harmony import */ var _smithy_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(861);
/* harmony import */ var _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(829);
/* harmony import */ var _smithy_url_parser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(758);
/* harmony import */ var _smithy_util_base64__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1064);
/* harmony import */ var _smithy_util_utf8__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1071);
/* harmony import */ var _auth_httpAuthSchemeProvider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1012);
/* harmony import */ var _endpoint_endpointResolver__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1075);








const getRuntimeConfig = (config) => {
    return {
        apiVersion: "2019-06-10",
        base64Decoder: config?.base64Decoder ?? _smithy_util_base64__WEBPACK_IMPORTED_MODULE_3__.fromBase64,
        base64Encoder: config?.base64Encoder ?? _smithy_util_base64__WEBPACK_IMPORTED_MODULE_3__.toBase64,
        disableHostPrefix: config?.disableHostPrefix ?? false,
        endpointProvider: config?.endpointProvider ?? _endpoint_endpointResolver__WEBPACK_IMPORTED_MODULE_5__.defaultEndpointResolver,
        extensions: config?.extensions ?? [],
        httpAuthSchemeProvider: config?.httpAuthSchemeProvider ?? _auth_httpAuthSchemeProvider__WEBPACK_IMPORTED_MODULE_6__.defaultSSOHttpAuthSchemeProvider,
        httpAuthSchemes: config?.httpAuthSchemes ?? [
            {
                schemeId: "aws.auth#sigv4",
                identityProvider: (ipc) => ipc.getIdentityProvider("aws.auth#sigv4"),
                signer: new _aws_sdk_core__WEBPACK_IMPORTED_MODULE_7__.AwsSdkSigV4Signer(),
            },
            {
                schemeId: "smithy.api#noAuth",
                identityProvider: (ipc) => ipc.getIdentityProvider("smithy.api#noAuth") || (async () => ({})),
                signer: new _smithy_core__WEBPACK_IMPORTED_MODULE_0__.NoAuthSigner(),
            },
        ],
        logger: config?.logger ?? new _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.NoOpLogger(),
        serviceId: config?.serviceId ?? "SSO",
        urlParser: config?.urlParser ?? _smithy_url_parser__WEBPACK_IMPORTED_MODULE_2__.parseUrl,
        utf8Decoder: config?.utf8Decoder ?? _smithy_util_utf8__WEBPACK_IMPORTED_MODULE_4__.fromUtf8,
        utf8Encoder: config?.utf8Encoder ?? _smithy_util_utf8__WEBPACK_IMPORTED_MODULE_4__.toUtf8,
    };
};


/***/ }),

/***/ 1087:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   resolveRuntimeExtensions: () => (/* binding */ resolveRuntimeExtensions)
/* harmony export */ });
/* harmony import */ var _aws_sdk_region_config_resolver__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1088);
/* harmony import */ var _smithy_protocol_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(868);
/* harmony import */ var _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(829);
/* harmony import */ var _auth_httpAuthExtensionConfiguration__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1095);




const asPartial = (t) => t;
const resolveRuntimeExtensions = (runtimeConfig, extensions) => {
    const extensionConfiguration = {
        ...asPartial((0,_aws_sdk_region_config_resolver__WEBPACK_IMPORTED_MODULE_0__.getAwsRegionExtensionConfiguration)(runtimeConfig)),
        ...asPartial((0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_2__.getDefaultExtensionConfiguration)(runtimeConfig)),
        ...asPartial((0,_smithy_protocol_http__WEBPACK_IMPORTED_MODULE_1__.getHttpHandlerExtensionConfiguration)(runtimeConfig)),
        ...asPartial((0,_auth_httpAuthExtensionConfiguration__WEBPACK_IMPORTED_MODULE_3__.getHttpAuthExtensionConfiguration)(runtimeConfig)),
    };
    extensions.forEach((extension) => extension.configure(extensionConfiguration));
    return {
        ...runtimeConfig,
        ...(0,_aws_sdk_region_config_resolver__WEBPACK_IMPORTED_MODULE_0__.resolveAwsRegionExtensionConfiguration)(extensionConfiguration),
        ...(0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_2__.resolveDefaultRuntimeConfig)(extensionConfiguration),
        ...(0,_smithy_protocol_http__WEBPACK_IMPORTED_MODULE_1__.resolveHttpHandlerRuntimeConfig)(extensionConfiguration),
        ...(0,_auth_httpAuthExtensionConfiguration__WEBPACK_IMPORTED_MODULE_3__.resolveHttpAuthRuntimeConfig)(extensionConfiguration),
    };
};


/***/ }),

/***/ 1072:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   fromUtf8: () => (/* binding */ fromUtf8)
/* harmony export */ });
/* harmony import */ var _smithy_util_buffer_from__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1022);

const fromUtf8 = (input) => {
    const buf = (0,_smithy_util_buffer_from__WEBPACK_IMPORTED_MODULE_0__.fromString)(input, "utf8");
    return new Uint8Array(buf.buffer, buf.byteOffset, buf.byteLength / Uint8Array.BYTES_PER_ELEMENT);
};


/***/ }),

/***/ 1071:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   fromUtf8: () => (/* reexport safe */ _fromUtf8__WEBPACK_IMPORTED_MODULE_0__.fromUtf8),
/* harmony export */   toUint8Array: () => (/* reexport safe */ _toUint8Array__WEBPACK_IMPORTED_MODULE_1__.toUint8Array),
/* harmony export */   toUtf8: () => (/* reexport safe */ _toUtf8__WEBPACK_IMPORTED_MODULE_2__.toUtf8)
/* harmony export */ });
/* harmony import */ var _fromUtf8__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1072);
/* harmony import */ var _toUint8Array__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1073);
/* harmony import */ var _toUtf8__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1074);





/***/ }),

/***/ 1073:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   toUint8Array: () => (/* binding */ toUint8Array)
/* harmony export */ });
/* harmony import */ var _fromUtf8__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1072);

const toUint8Array = (data) => {
    if (typeof data === "string") {
        return (0,_fromUtf8__WEBPACK_IMPORTED_MODULE_0__.fromUtf8)(data);
    }
    if (ArrayBuffer.isView(data)) {
        return new Uint8Array(data.buffer, data.byteOffset, data.byteLength / Uint8Array.BYTES_PER_ELEMENT);
    }
    return new Uint8Array(data);
};


/***/ }),

/***/ 1074:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   toUtf8: () => (/* binding */ toUtf8)
/* harmony export */ });
/* harmony import */ var _smithy_util_buffer_from__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1022);

const toUtf8 = (input) => {
    if (typeof input === "string") {
        return input;
    }
    if (typeof input !== "object" || typeof input.byteOffset !== "number" || typeof input.byteLength !== "number") {
        throw new Error("@smithy/util-utf8: toUtf8 encoder function only accepts string | Uint8Array.");
    }
    return (0,_smithy_util_buffer_from__WEBPACK_IMPORTED_MODULE_0__.fromArrayBuffer)(input.buffer, input.byteOffset, input.byteLength).toString("utf8");
};


/***/ }),

/***/ 1038:
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"name":"@aws-sdk/client-sso","description":"AWS SDK for JavaScript Sso Client for Node.js, Browser and React Native","version":"3.598.0","scripts":{"build":"concurrently \'yarn:build:cjs\' \'yarn:build:es\' \'yarn:build:types\'","build:cjs":"node ../../scripts/compilation/inline client-sso","build:es":"tsc -p tsconfig.es.json","build:include:deps":"lerna run --scope $npm_package_name --include-dependencies build","build:types":"tsc -p tsconfig.types.json","build:types:downlevel":"downlevel-dts dist-types dist-types/ts3.4","clean":"rimraf ./dist-* && rimraf *.tsbuildinfo","extract:docs":"api-extractor run --local","generate:client":"node ../../scripts/generate-clients/single-service --solo sso"},"main":"./dist-cjs/index.js","types":"./dist-types/index.d.ts","module":"./dist-es/index.js","sideEffects":false,"dependencies":{"@aws-crypto/sha256-browser":"5.2.0","@aws-crypto/sha256-js":"5.2.0","@aws-sdk/core":"3.598.0","@aws-sdk/middleware-host-header":"3.598.0","@aws-sdk/middleware-logger":"3.598.0","@aws-sdk/middleware-recursion-detection":"3.598.0","@aws-sdk/middleware-user-agent":"3.598.0","@aws-sdk/region-config-resolver":"3.598.0","@aws-sdk/types":"3.598.0","@aws-sdk/util-endpoints":"3.598.0","@aws-sdk/util-user-agent-browser":"3.598.0","@aws-sdk/util-user-agent-node":"3.598.0","@smithy/config-resolver":"^3.0.2","@smithy/core":"^2.2.1","@smithy/fetch-http-handler":"^3.0.2","@smithy/hash-node":"^3.0.1","@smithy/invalid-dependency":"^3.0.1","@smithy/middleware-content-length":"^3.0.1","@smithy/middleware-endpoint":"^3.0.2","@smithy/middleware-retry":"^3.0.4","@smithy/middleware-serde":"^3.0.1","@smithy/middleware-stack":"^3.0.1","@smithy/node-config-provider":"^3.1.1","@smithy/node-http-handler":"^3.0.1","@smithy/protocol-http":"^4.0.1","@smithy/smithy-client":"^3.1.2","@smithy/types":"^3.1.0","@smithy/url-parser":"^3.0.1","@smithy/util-base64":"^3.0.0","@smithy/util-body-length-browser":"^3.0.0","@smithy/util-body-length-node":"^3.0.0","@smithy/util-defaults-mode-browser":"^3.0.4","@smithy/util-defaults-mode-node":"^3.0.4","@smithy/util-endpoints":"^2.0.2","@smithy/util-middleware":"^3.0.1","@smithy/util-retry":"^3.0.1","@smithy/util-utf8":"^3.0.0","tslib":"^2.6.2"},"devDependencies":{"@tsconfig/node16":"16.1.3","@types/node":"^16.18.96","concurrently":"7.0.0","downlevel-dts":"0.10.1","rimraf":"3.0.2","typescript":"~4.9.5"},"engines":{"node":">=16.0.0"},"typesVersions":{"<4.0":{"dist-types/*":["dist-types/ts3.4/*"]}},"files":["dist-*/**"],"author":{"name":"AWS SDK for JavaScript Team","url":"https://aws.amazon.com/javascript/"},"license":"Apache-2.0","browser":{"./dist-es/runtimeConfig":"./dist-es/runtimeConfig.browser"},"react-native":{"./dist-es/runtimeConfig":"./dist-es/runtimeConfig.native"},"homepage":"https://github.com/aws/aws-sdk-js-v3/tree/main/clients/client-sso","repository":{"type":"git","url":"https://github.com/aws/aws-sdk-js-v3.git","directory":"clients/client-sso"}}');

/***/ })

};
;