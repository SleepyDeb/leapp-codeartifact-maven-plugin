"use strict";
exports.id = 9;
exports.ids = [9];
exports.modules = {

/***/ 1111:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SSOOIDC: () => (/* binding */ SSOOIDC)
/* harmony export */ });
/* harmony import */ var _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(829);
/* harmony import */ var _commands_CreateTokenCommand__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1112);
/* harmony import */ var _commands_CreateTokenWithIAMCommand__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1116);
/* harmony import */ var _commands_RegisterClientCommand__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1117);
/* harmony import */ var _commands_StartDeviceAuthorizationCommand__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1118);
/* harmony import */ var _SSOOIDCClient__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1097);






const commands = {
    CreateTokenCommand: _commands_CreateTokenCommand__WEBPACK_IMPORTED_MODULE_1__.CreateTokenCommand,
    CreateTokenWithIAMCommand: _commands_CreateTokenWithIAMCommand__WEBPACK_IMPORTED_MODULE_2__.CreateTokenWithIAMCommand,
    RegisterClientCommand: _commands_RegisterClientCommand__WEBPACK_IMPORTED_MODULE_3__.RegisterClientCommand,
    StartDeviceAuthorizationCommand: _commands_StartDeviceAuthorizationCommand__WEBPACK_IMPORTED_MODULE_4__.StartDeviceAuthorizationCommand,
};
class SSOOIDC extends _SSOOIDCClient__WEBPACK_IMPORTED_MODULE_5__.SSOOIDCClient {
}
(0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_0__.createAggregatedClient)(commands, SSOOIDC);


/***/ }),

/***/ 1097:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SSOOIDCClient: () => (/* binding */ SSOOIDCClient),
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
/* harmony import */ var _auth_httpAuthSchemeProvider__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(1098);
/* harmony import */ var _endpoint_EndpointParameters__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(1099);
/* harmony import */ var _runtimeConfig__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(1100);
/* harmony import */ var _runtimeExtensions__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(1109);















class SSOOIDCClient extends _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_9__.Client {
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
        return _auth_httpAuthSchemeProvider__WEBPACK_IMPORTED_MODULE_12__.defaultSSOOIDCHttpAuthSchemeParametersProvider;
    }
    getIdentityProviderConfigProvider() {
        return async (config) => new _smithy_core__WEBPACK_IMPORTED_MODULE_5__.DefaultIdentityProviderConfig({
            "aws.auth#sigv4": config.credentials,
        });
    }
}


/***/ }),

/***/ 1110:
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

/***/ 1098:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   defaultSSOOIDCHttpAuthSchemeParametersProvider: () => (/* binding */ defaultSSOOIDCHttpAuthSchemeParametersProvider),
/* harmony export */   defaultSSOOIDCHttpAuthSchemeProvider: () => (/* binding */ defaultSSOOIDCHttpAuthSchemeProvider),
/* harmony export */   resolveHttpAuthSchemeConfig: () => (/* binding */ resolveHttpAuthSchemeConfig)
/* harmony export */ });
/* harmony import */ var _aws_sdk_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1013);
/* harmony import */ var _smithy_util_middleware__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(761);


const defaultSSOOIDCHttpAuthSchemeParametersProvider = async (config, context, input) => {
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
            name: "sso-oauth",
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
const defaultSSOOIDCHttpAuthSchemeProvider = (authParameters) => {
    const options = [];
    switch (authParameters.operation) {
        case "CreateToken": {
            options.push(createSmithyApiNoAuthHttpAuthOption(authParameters));
            break;
        }
        case "RegisterClient": {
            options.push(createSmithyApiNoAuthHttpAuthOption(authParameters));
            break;
        }
        case "StartDeviceAuthorization": {
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

/***/ 1112:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $Command: () => (/* reexport safe */ _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_2__.Command),
/* harmony export */   CreateTokenCommand: () => (/* binding */ CreateTokenCommand)
/* harmony export */ });
/* harmony import */ var _smithy_middleware_endpoint__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(743);
/* harmony import */ var _smithy_middleware_serde__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(823);
/* harmony import */ var _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(829);
/* harmony import */ var _endpoint_EndpointParameters__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1099);
/* harmony import */ var _models_models_0__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1113);
/* harmony import */ var _protocols_Aws_restJson1__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1115);







class CreateTokenCommand extends _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_2__.Command
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
    .s("AWSSSOOIDCService", "CreateToken", {})
    .n("SSOOIDCClient", "CreateTokenCommand")
    .f(_models_models_0__WEBPACK_IMPORTED_MODULE_4__.CreateTokenRequestFilterSensitiveLog, _models_models_0__WEBPACK_IMPORTED_MODULE_4__.CreateTokenResponseFilterSensitiveLog)
    .ser(_protocols_Aws_restJson1__WEBPACK_IMPORTED_MODULE_5__.se_CreateTokenCommand)
    .de(_protocols_Aws_restJson1__WEBPACK_IMPORTED_MODULE_5__.de_CreateTokenCommand)
    .build() {
}


/***/ }),

/***/ 1116:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $Command: () => (/* reexport safe */ _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_2__.Command),
/* harmony export */   CreateTokenWithIAMCommand: () => (/* binding */ CreateTokenWithIAMCommand)
/* harmony export */ });
/* harmony import */ var _smithy_middleware_endpoint__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(743);
/* harmony import */ var _smithy_middleware_serde__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(823);
/* harmony import */ var _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(829);
/* harmony import */ var _endpoint_EndpointParameters__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1099);
/* harmony import */ var _models_models_0__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1113);
/* harmony import */ var _protocols_Aws_restJson1__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1115);







class CreateTokenWithIAMCommand extends _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_2__.Command
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
    .s("AWSSSOOIDCService", "CreateTokenWithIAM", {})
    .n("SSOOIDCClient", "CreateTokenWithIAMCommand")
    .f(_models_models_0__WEBPACK_IMPORTED_MODULE_4__.CreateTokenWithIAMRequestFilterSensitiveLog, _models_models_0__WEBPACK_IMPORTED_MODULE_4__.CreateTokenWithIAMResponseFilterSensitiveLog)
    .ser(_protocols_Aws_restJson1__WEBPACK_IMPORTED_MODULE_5__.se_CreateTokenWithIAMCommand)
    .de(_protocols_Aws_restJson1__WEBPACK_IMPORTED_MODULE_5__.de_CreateTokenWithIAMCommand)
    .build() {
}


/***/ }),

/***/ 1117:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $Command: () => (/* reexport safe */ _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_2__.Command),
/* harmony export */   RegisterClientCommand: () => (/* binding */ RegisterClientCommand)
/* harmony export */ });
/* harmony import */ var _smithy_middleware_endpoint__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(743);
/* harmony import */ var _smithy_middleware_serde__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(823);
/* harmony import */ var _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(829);
/* harmony import */ var _endpoint_EndpointParameters__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1099);
/* harmony import */ var _models_models_0__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1113);
/* harmony import */ var _protocols_Aws_restJson1__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1115);







class RegisterClientCommand extends _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_2__.Command
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
    .s("AWSSSOOIDCService", "RegisterClient", {})
    .n("SSOOIDCClient", "RegisterClientCommand")
    .f(void 0, _models_models_0__WEBPACK_IMPORTED_MODULE_4__.RegisterClientResponseFilterSensitiveLog)
    .ser(_protocols_Aws_restJson1__WEBPACK_IMPORTED_MODULE_5__.se_RegisterClientCommand)
    .de(_protocols_Aws_restJson1__WEBPACK_IMPORTED_MODULE_5__.de_RegisterClientCommand)
    .build() {
}


/***/ }),

/***/ 1118:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $Command: () => (/* reexport safe */ _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_2__.Command),
/* harmony export */   StartDeviceAuthorizationCommand: () => (/* binding */ StartDeviceAuthorizationCommand)
/* harmony export */ });
/* harmony import */ var _smithy_middleware_endpoint__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(743);
/* harmony import */ var _smithy_middleware_serde__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(823);
/* harmony import */ var _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(829);
/* harmony import */ var _endpoint_EndpointParameters__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1099);
/* harmony import */ var _models_models_0__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1113);
/* harmony import */ var _protocols_Aws_restJson1__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1115);







class StartDeviceAuthorizationCommand extends _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_2__.Command
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
    .s("AWSSSOOIDCService", "StartDeviceAuthorization", {})
    .n("SSOOIDCClient", "StartDeviceAuthorizationCommand")
    .f(_models_models_0__WEBPACK_IMPORTED_MODULE_4__.StartDeviceAuthorizationRequestFilterSensitiveLog, void 0)
    .ser(_protocols_Aws_restJson1__WEBPACK_IMPORTED_MODULE_5__.se_StartDeviceAuthorizationCommand)
    .de(_protocols_Aws_restJson1__WEBPACK_IMPORTED_MODULE_5__.de_StartDeviceAuthorizationCommand)
    .build() {
}


/***/ }),

/***/ 1119:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $Command: () => (/* reexport safe */ _CreateTokenCommand__WEBPACK_IMPORTED_MODULE_0__.$Command),
/* harmony export */   CreateTokenCommand: () => (/* reexport safe */ _CreateTokenCommand__WEBPACK_IMPORTED_MODULE_0__.CreateTokenCommand),
/* harmony export */   CreateTokenWithIAMCommand: () => (/* reexport safe */ _CreateTokenWithIAMCommand__WEBPACK_IMPORTED_MODULE_1__.CreateTokenWithIAMCommand),
/* harmony export */   RegisterClientCommand: () => (/* reexport safe */ _RegisterClientCommand__WEBPACK_IMPORTED_MODULE_2__.RegisterClientCommand),
/* harmony export */   StartDeviceAuthorizationCommand: () => (/* reexport safe */ _StartDeviceAuthorizationCommand__WEBPACK_IMPORTED_MODULE_3__.StartDeviceAuthorizationCommand)
/* harmony export */ });
/* harmony import */ var _CreateTokenCommand__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1112);
/* harmony import */ var _CreateTokenWithIAMCommand__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1116);
/* harmony import */ var _RegisterClientCommand__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1117);
/* harmony import */ var _StartDeviceAuthorizationCommand__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1118);






/***/ }),

/***/ 1099:
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
        defaultSigningName: "sso-oauth",
    };
};
const commonParams = {
    UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
    Endpoint: { type: "builtInParams", name: "endpoint" },
    Region: { type: "builtInParams", name: "region" },
    UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
};


/***/ }),

/***/ 1107:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   defaultEndpointResolver: () => (/* binding */ defaultEndpointResolver)
/* harmony export */ });
/* harmony import */ var _aws_sdk_util_endpoints__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(929);
/* harmony import */ var _smithy_util_endpoints__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(931);
/* harmony import */ var _ruleset__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1108);



const defaultEndpointResolver = (endpointParams, context = {}) => {
    return (0,_smithy_util_endpoints__WEBPACK_IMPORTED_MODULE_1__.resolveEndpoint)(_ruleset__WEBPACK_IMPORTED_MODULE_2__.ruleSet, {
        endpointParams: endpointParams,
        logger: context.logger,
    });
};
_smithy_util_endpoints__WEBPACK_IMPORTED_MODULE_1__.customEndpointFunctions.aws = _aws_sdk_util_endpoints__WEBPACK_IMPORTED_MODULE_0__.awsEndpointFunctions;


/***/ }),

/***/ 1108:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ruleSet: () => (/* binding */ ruleSet)
/* harmony export */ });
const u = "required", v = "fn", w = "argv", x = "ref";
const a = true, b = "isSet", c = "booleanEquals", d = "error", e = "endpoint", f = "tree", g = "PartitionResult", h = "getAttr", i = { [u]: false, "type": "String" }, j = { [u]: true, "default": false, "type": "Boolean" }, k = { [x]: "Endpoint" }, l = { [v]: c, [w]: [{ [x]: "UseFIPS" }, true] }, m = { [v]: c, [w]: [{ [x]: "UseDualStack" }, true] }, n = {}, o = { [v]: h, [w]: [{ [x]: g }, "supportsFIPS"] }, p = { [x]: g }, q = { [v]: c, [w]: [true, { [v]: h, [w]: [p, "supportsDualStack"] }] }, r = [l], s = [m], t = [{ [x]: "Region" }];
const _data = { version: "1.0", parameters: { Region: i, UseDualStack: j, UseFIPS: j, Endpoint: i }, rules: [{ conditions: [{ [v]: b, [w]: [k] }], rules: [{ conditions: r, error: "Invalid Configuration: FIPS and custom endpoint are not supported", type: d }, { conditions: s, error: "Invalid Configuration: Dualstack and custom endpoint are not supported", type: d }, { endpoint: { url: k, properties: n, headers: n }, type: e }], type: f }, { conditions: [{ [v]: b, [w]: t }], rules: [{ conditions: [{ [v]: "aws.partition", [w]: t, assign: g }], rules: [{ conditions: [l, m], rules: [{ conditions: [{ [v]: c, [w]: [a, o] }, q], rules: [{ endpoint: { url: "https://oidc-fips.{Region}.{PartitionResult#dualStackDnsSuffix}", properties: n, headers: n }, type: e }], type: f }, { error: "FIPS and DualStack are enabled, but this partition does not support one or both", type: d }], type: f }, { conditions: r, rules: [{ conditions: [{ [v]: c, [w]: [o, a] }], rules: [{ conditions: [{ [v]: "stringEquals", [w]: [{ [v]: h, [w]: [p, "name"] }, "aws-us-gov"] }], endpoint: { url: "https://oidc.{Region}.amazonaws.com", properties: n, headers: n }, type: e }, { endpoint: { url: "https://oidc-fips.{Region}.{PartitionResult#dnsSuffix}", properties: n, headers: n }, type: e }], type: f }, { error: "FIPS is enabled but this partition does not support FIPS", type: d }], type: f }, { conditions: s, rules: [{ conditions: [q], rules: [{ endpoint: { url: "https://oidc.{Region}.{PartitionResult#dualStackDnsSuffix}", properties: n, headers: n }, type: e }], type: f }, { error: "DualStack is enabled but this partition does not support DualStack", type: d }], type: f }, { endpoint: { url: "https://oidc.{Region}.{PartitionResult#dnsSuffix}", properties: n, headers: n }, type: e }], type: f }], type: f }, { error: "Invalid Configuration: Missing Region", type: d }] };
const ruleSet = _data;


/***/ }),

/***/ 1096:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $Command: () => (/* reexport safe */ _commands__WEBPACK_IMPORTED_MODULE_2__.$Command),
/* harmony export */   AccessDeniedException: () => (/* reexport safe */ _models__WEBPACK_IMPORTED_MODULE_3__.AccessDeniedException),
/* harmony export */   AuthorizationPendingException: () => (/* reexport safe */ _models__WEBPACK_IMPORTED_MODULE_3__.AuthorizationPendingException),
/* harmony export */   CreateTokenCommand: () => (/* reexport safe */ _commands__WEBPACK_IMPORTED_MODULE_2__.CreateTokenCommand),
/* harmony export */   CreateTokenRequestFilterSensitiveLog: () => (/* reexport safe */ _models__WEBPACK_IMPORTED_MODULE_3__.CreateTokenRequestFilterSensitiveLog),
/* harmony export */   CreateTokenResponseFilterSensitiveLog: () => (/* reexport safe */ _models__WEBPACK_IMPORTED_MODULE_3__.CreateTokenResponseFilterSensitiveLog),
/* harmony export */   CreateTokenWithIAMCommand: () => (/* reexport safe */ _commands__WEBPACK_IMPORTED_MODULE_2__.CreateTokenWithIAMCommand),
/* harmony export */   CreateTokenWithIAMRequestFilterSensitiveLog: () => (/* reexport safe */ _models__WEBPACK_IMPORTED_MODULE_3__.CreateTokenWithIAMRequestFilterSensitiveLog),
/* harmony export */   CreateTokenWithIAMResponseFilterSensitiveLog: () => (/* reexport safe */ _models__WEBPACK_IMPORTED_MODULE_3__.CreateTokenWithIAMResponseFilterSensitiveLog),
/* harmony export */   ExpiredTokenException: () => (/* reexport safe */ _models__WEBPACK_IMPORTED_MODULE_3__.ExpiredTokenException),
/* harmony export */   InternalServerException: () => (/* reexport safe */ _models__WEBPACK_IMPORTED_MODULE_3__.InternalServerException),
/* harmony export */   InvalidClientException: () => (/* reexport safe */ _models__WEBPACK_IMPORTED_MODULE_3__.InvalidClientException),
/* harmony export */   InvalidClientMetadataException: () => (/* reexport safe */ _models__WEBPACK_IMPORTED_MODULE_3__.InvalidClientMetadataException),
/* harmony export */   InvalidGrantException: () => (/* reexport safe */ _models__WEBPACK_IMPORTED_MODULE_3__.InvalidGrantException),
/* harmony export */   InvalidRedirectUriException: () => (/* reexport safe */ _models__WEBPACK_IMPORTED_MODULE_3__.InvalidRedirectUriException),
/* harmony export */   InvalidRequestException: () => (/* reexport safe */ _models__WEBPACK_IMPORTED_MODULE_3__.InvalidRequestException),
/* harmony export */   InvalidRequestRegionException: () => (/* reexport safe */ _models__WEBPACK_IMPORTED_MODULE_3__.InvalidRequestRegionException),
/* harmony export */   InvalidScopeException: () => (/* reexport safe */ _models__WEBPACK_IMPORTED_MODULE_3__.InvalidScopeException),
/* harmony export */   RegisterClientCommand: () => (/* reexport safe */ _commands__WEBPACK_IMPORTED_MODULE_2__.RegisterClientCommand),
/* harmony export */   RegisterClientResponseFilterSensitiveLog: () => (/* reexport safe */ _models__WEBPACK_IMPORTED_MODULE_3__.RegisterClientResponseFilterSensitiveLog),
/* harmony export */   SSOOIDC: () => (/* reexport safe */ _SSOOIDC__WEBPACK_IMPORTED_MODULE_1__.SSOOIDC),
/* harmony export */   SSOOIDCClient: () => (/* reexport safe */ _SSOOIDCClient__WEBPACK_IMPORTED_MODULE_0__.SSOOIDCClient),
/* harmony export */   SSOOIDCServiceException: () => (/* reexport safe */ _models_SSOOIDCServiceException__WEBPACK_IMPORTED_MODULE_4__.SSOOIDCServiceException),
/* harmony export */   SlowDownException: () => (/* reexport safe */ _models__WEBPACK_IMPORTED_MODULE_3__.SlowDownException),
/* harmony export */   StartDeviceAuthorizationCommand: () => (/* reexport safe */ _commands__WEBPACK_IMPORTED_MODULE_2__.StartDeviceAuthorizationCommand),
/* harmony export */   StartDeviceAuthorizationRequestFilterSensitiveLog: () => (/* reexport safe */ _models__WEBPACK_IMPORTED_MODULE_3__.StartDeviceAuthorizationRequestFilterSensitiveLog),
/* harmony export */   UnauthorizedClientException: () => (/* reexport safe */ _models__WEBPACK_IMPORTED_MODULE_3__.UnauthorizedClientException),
/* harmony export */   UnsupportedGrantTypeException: () => (/* reexport safe */ _models__WEBPACK_IMPORTED_MODULE_3__.UnsupportedGrantTypeException),
/* harmony export */   __Client: () => (/* reexport safe */ _SSOOIDCClient__WEBPACK_IMPORTED_MODULE_0__.__Client)
/* harmony export */ });
/* harmony import */ var _SSOOIDCClient__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1097);
/* harmony import */ var _SSOOIDC__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1111);
/* harmony import */ var _commands__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1119);
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1120);
/* harmony import */ var _models_SSOOIDCServiceException__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1114);







/***/ }),

/***/ 1114:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SSOOIDCServiceException: () => (/* binding */ SSOOIDCServiceException),
/* harmony export */   __ServiceException: () => (/* reexport safe */ _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_0__.ServiceException)
/* harmony export */ });
/* harmony import */ var _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(829);


class SSOOIDCServiceException extends _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_0__.ServiceException {
    constructor(options) {
        super(options);
        Object.setPrototypeOf(this, SSOOIDCServiceException.prototype);
    }
}


/***/ }),

/***/ 1120:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AccessDeniedException: () => (/* reexport safe */ _models_0__WEBPACK_IMPORTED_MODULE_0__.AccessDeniedException),
/* harmony export */   AuthorizationPendingException: () => (/* reexport safe */ _models_0__WEBPACK_IMPORTED_MODULE_0__.AuthorizationPendingException),
/* harmony export */   CreateTokenRequestFilterSensitiveLog: () => (/* reexport safe */ _models_0__WEBPACK_IMPORTED_MODULE_0__.CreateTokenRequestFilterSensitiveLog),
/* harmony export */   CreateTokenResponseFilterSensitiveLog: () => (/* reexport safe */ _models_0__WEBPACK_IMPORTED_MODULE_0__.CreateTokenResponseFilterSensitiveLog),
/* harmony export */   CreateTokenWithIAMRequestFilterSensitiveLog: () => (/* reexport safe */ _models_0__WEBPACK_IMPORTED_MODULE_0__.CreateTokenWithIAMRequestFilterSensitiveLog),
/* harmony export */   CreateTokenWithIAMResponseFilterSensitiveLog: () => (/* reexport safe */ _models_0__WEBPACK_IMPORTED_MODULE_0__.CreateTokenWithIAMResponseFilterSensitiveLog),
/* harmony export */   ExpiredTokenException: () => (/* reexport safe */ _models_0__WEBPACK_IMPORTED_MODULE_0__.ExpiredTokenException),
/* harmony export */   InternalServerException: () => (/* reexport safe */ _models_0__WEBPACK_IMPORTED_MODULE_0__.InternalServerException),
/* harmony export */   InvalidClientException: () => (/* reexport safe */ _models_0__WEBPACK_IMPORTED_MODULE_0__.InvalidClientException),
/* harmony export */   InvalidClientMetadataException: () => (/* reexport safe */ _models_0__WEBPACK_IMPORTED_MODULE_0__.InvalidClientMetadataException),
/* harmony export */   InvalidGrantException: () => (/* reexport safe */ _models_0__WEBPACK_IMPORTED_MODULE_0__.InvalidGrantException),
/* harmony export */   InvalidRedirectUriException: () => (/* reexport safe */ _models_0__WEBPACK_IMPORTED_MODULE_0__.InvalidRedirectUriException),
/* harmony export */   InvalidRequestException: () => (/* reexport safe */ _models_0__WEBPACK_IMPORTED_MODULE_0__.InvalidRequestException),
/* harmony export */   InvalidRequestRegionException: () => (/* reexport safe */ _models_0__WEBPACK_IMPORTED_MODULE_0__.InvalidRequestRegionException),
/* harmony export */   InvalidScopeException: () => (/* reexport safe */ _models_0__WEBPACK_IMPORTED_MODULE_0__.InvalidScopeException),
/* harmony export */   RegisterClientResponseFilterSensitiveLog: () => (/* reexport safe */ _models_0__WEBPACK_IMPORTED_MODULE_0__.RegisterClientResponseFilterSensitiveLog),
/* harmony export */   SlowDownException: () => (/* reexport safe */ _models_0__WEBPACK_IMPORTED_MODULE_0__.SlowDownException),
/* harmony export */   StartDeviceAuthorizationRequestFilterSensitiveLog: () => (/* reexport safe */ _models_0__WEBPACK_IMPORTED_MODULE_0__.StartDeviceAuthorizationRequestFilterSensitiveLog),
/* harmony export */   UnauthorizedClientException: () => (/* reexport safe */ _models_0__WEBPACK_IMPORTED_MODULE_0__.UnauthorizedClientException),
/* harmony export */   UnsupportedGrantTypeException: () => (/* reexport safe */ _models_0__WEBPACK_IMPORTED_MODULE_0__.UnsupportedGrantTypeException)
/* harmony export */ });
/* harmony import */ var _models_0__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1113);



/***/ }),

/***/ 1113:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AccessDeniedException: () => (/* binding */ AccessDeniedException),
/* harmony export */   AuthorizationPendingException: () => (/* binding */ AuthorizationPendingException),
/* harmony export */   CreateTokenRequestFilterSensitiveLog: () => (/* binding */ CreateTokenRequestFilterSensitiveLog),
/* harmony export */   CreateTokenResponseFilterSensitiveLog: () => (/* binding */ CreateTokenResponseFilterSensitiveLog),
/* harmony export */   CreateTokenWithIAMRequestFilterSensitiveLog: () => (/* binding */ CreateTokenWithIAMRequestFilterSensitiveLog),
/* harmony export */   CreateTokenWithIAMResponseFilterSensitiveLog: () => (/* binding */ CreateTokenWithIAMResponseFilterSensitiveLog),
/* harmony export */   ExpiredTokenException: () => (/* binding */ ExpiredTokenException),
/* harmony export */   InternalServerException: () => (/* binding */ InternalServerException),
/* harmony export */   InvalidClientException: () => (/* binding */ InvalidClientException),
/* harmony export */   InvalidClientMetadataException: () => (/* binding */ InvalidClientMetadataException),
/* harmony export */   InvalidGrantException: () => (/* binding */ InvalidGrantException),
/* harmony export */   InvalidRedirectUriException: () => (/* binding */ InvalidRedirectUriException),
/* harmony export */   InvalidRequestException: () => (/* binding */ InvalidRequestException),
/* harmony export */   InvalidRequestRegionException: () => (/* binding */ InvalidRequestRegionException),
/* harmony export */   InvalidScopeException: () => (/* binding */ InvalidScopeException),
/* harmony export */   RegisterClientResponseFilterSensitiveLog: () => (/* binding */ RegisterClientResponseFilterSensitiveLog),
/* harmony export */   SlowDownException: () => (/* binding */ SlowDownException),
/* harmony export */   StartDeviceAuthorizationRequestFilterSensitiveLog: () => (/* binding */ StartDeviceAuthorizationRequestFilterSensitiveLog),
/* harmony export */   UnauthorizedClientException: () => (/* binding */ UnauthorizedClientException),
/* harmony export */   UnsupportedGrantTypeException: () => (/* binding */ UnsupportedGrantTypeException)
/* harmony export */ });
/* harmony import */ var _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(829);
/* harmony import */ var _SSOOIDCServiceException__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1114);


class AccessDeniedException extends _SSOOIDCServiceException__WEBPACK_IMPORTED_MODULE_1__.SSOOIDCServiceException {
    constructor(opts) {
        super({
            name: "AccessDeniedException",
            $fault: "client",
            ...opts,
        });
        this.name = "AccessDeniedException";
        this.$fault = "client";
        Object.setPrototypeOf(this, AccessDeniedException.prototype);
        this.error = opts.error;
        this.error_description = opts.error_description;
    }
}
class AuthorizationPendingException extends _SSOOIDCServiceException__WEBPACK_IMPORTED_MODULE_1__.SSOOIDCServiceException {
    constructor(opts) {
        super({
            name: "AuthorizationPendingException",
            $fault: "client",
            ...opts,
        });
        this.name = "AuthorizationPendingException";
        this.$fault = "client";
        Object.setPrototypeOf(this, AuthorizationPendingException.prototype);
        this.error = opts.error;
        this.error_description = opts.error_description;
    }
}
class ExpiredTokenException extends _SSOOIDCServiceException__WEBPACK_IMPORTED_MODULE_1__.SSOOIDCServiceException {
    constructor(opts) {
        super({
            name: "ExpiredTokenException",
            $fault: "client",
            ...opts,
        });
        this.name = "ExpiredTokenException";
        this.$fault = "client";
        Object.setPrototypeOf(this, ExpiredTokenException.prototype);
        this.error = opts.error;
        this.error_description = opts.error_description;
    }
}
class InternalServerException extends _SSOOIDCServiceException__WEBPACK_IMPORTED_MODULE_1__.SSOOIDCServiceException {
    constructor(opts) {
        super({
            name: "InternalServerException",
            $fault: "server",
            ...opts,
        });
        this.name = "InternalServerException";
        this.$fault = "server";
        Object.setPrototypeOf(this, InternalServerException.prototype);
        this.error = opts.error;
        this.error_description = opts.error_description;
    }
}
class InvalidClientException extends _SSOOIDCServiceException__WEBPACK_IMPORTED_MODULE_1__.SSOOIDCServiceException {
    constructor(opts) {
        super({
            name: "InvalidClientException",
            $fault: "client",
            ...opts,
        });
        this.name = "InvalidClientException";
        this.$fault = "client";
        Object.setPrototypeOf(this, InvalidClientException.prototype);
        this.error = opts.error;
        this.error_description = opts.error_description;
    }
}
class InvalidGrantException extends _SSOOIDCServiceException__WEBPACK_IMPORTED_MODULE_1__.SSOOIDCServiceException {
    constructor(opts) {
        super({
            name: "InvalidGrantException",
            $fault: "client",
            ...opts,
        });
        this.name = "InvalidGrantException";
        this.$fault = "client";
        Object.setPrototypeOf(this, InvalidGrantException.prototype);
        this.error = opts.error;
        this.error_description = opts.error_description;
    }
}
class InvalidRequestException extends _SSOOIDCServiceException__WEBPACK_IMPORTED_MODULE_1__.SSOOIDCServiceException {
    constructor(opts) {
        super({
            name: "InvalidRequestException",
            $fault: "client",
            ...opts,
        });
        this.name = "InvalidRequestException";
        this.$fault = "client";
        Object.setPrototypeOf(this, InvalidRequestException.prototype);
        this.error = opts.error;
        this.error_description = opts.error_description;
    }
}
class InvalidScopeException extends _SSOOIDCServiceException__WEBPACK_IMPORTED_MODULE_1__.SSOOIDCServiceException {
    constructor(opts) {
        super({
            name: "InvalidScopeException",
            $fault: "client",
            ...opts,
        });
        this.name = "InvalidScopeException";
        this.$fault = "client";
        Object.setPrototypeOf(this, InvalidScopeException.prototype);
        this.error = opts.error;
        this.error_description = opts.error_description;
    }
}
class SlowDownException extends _SSOOIDCServiceException__WEBPACK_IMPORTED_MODULE_1__.SSOOIDCServiceException {
    constructor(opts) {
        super({
            name: "SlowDownException",
            $fault: "client",
            ...opts,
        });
        this.name = "SlowDownException";
        this.$fault = "client";
        Object.setPrototypeOf(this, SlowDownException.prototype);
        this.error = opts.error;
        this.error_description = opts.error_description;
    }
}
class UnauthorizedClientException extends _SSOOIDCServiceException__WEBPACK_IMPORTED_MODULE_1__.SSOOIDCServiceException {
    constructor(opts) {
        super({
            name: "UnauthorizedClientException",
            $fault: "client",
            ...opts,
        });
        this.name = "UnauthorizedClientException";
        this.$fault = "client";
        Object.setPrototypeOf(this, UnauthorizedClientException.prototype);
        this.error = opts.error;
        this.error_description = opts.error_description;
    }
}
class UnsupportedGrantTypeException extends _SSOOIDCServiceException__WEBPACK_IMPORTED_MODULE_1__.SSOOIDCServiceException {
    constructor(opts) {
        super({
            name: "UnsupportedGrantTypeException",
            $fault: "client",
            ...opts,
        });
        this.name = "UnsupportedGrantTypeException";
        this.$fault = "client";
        Object.setPrototypeOf(this, UnsupportedGrantTypeException.prototype);
        this.error = opts.error;
        this.error_description = opts.error_description;
    }
}
class InvalidRequestRegionException extends _SSOOIDCServiceException__WEBPACK_IMPORTED_MODULE_1__.SSOOIDCServiceException {
    constructor(opts) {
        super({
            name: "InvalidRequestRegionException",
            $fault: "client",
            ...opts,
        });
        this.name = "InvalidRequestRegionException";
        this.$fault = "client";
        Object.setPrototypeOf(this, InvalidRequestRegionException.prototype);
        this.error = opts.error;
        this.error_description = opts.error_description;
        this.endpoint = opts.endpoint;
        this.region = opts.region;
    }
}
class InvalidClientMetadataException extends _SSOOIDCServiceException__WEBPACK_IMPORTED_MODULE_1__.SSOOIDCServiceException {
    constructor(opts) {
        super({
            name: "InvalidClientMetadataException",
            $fault: "client",
            ...opts,
        });
        this.name = "InvalidClientMetadataException";
        this.$fault = "client";
        Object.setPrototypeOf(this, InvalidClientMetadataException.prototype);
        this.error = opts.error;
        this.error_description = opts.error_description;
    }
}
class InvalidRedirectUriException extends _SSOOIDCServiceException__WEBPACK_IMPORTED_MODULE_1__.SSOOIDCServiceException {
    constructor(opts) {
        super({
            name: "InvalidRedirectUriException",
            $fault: "client",
            ...opts,
        });
        this.name = "InvalidRedirectUriException";
        this.$fault = "client";
        Object.setPrototypeOf(this, InvalidRedirectUriException.prototype);
        this.error = opts.error;
        this.error_description = opts.error_description;
    }
}
const CreateTokenRequestFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.clientSecret && { clientSecret: _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_0__.SENSITIVE_STRING }),
    ...(obj.refreshToken && { refreshToken: _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_0__.SENSITIVE_STRING }),
    ...(obj.codeVerifier && { codeVerifier: _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_0__.SENSITIVE_STRING }),
});
const CreateTokenResponseFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.accessToken && { accessToken: _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_0__.SENSITIVE_STRING }),
    ...(obj.refreshToken && { refreshToken: _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_0__.SENSITIVE_STRING }),
    ...(obj.idToken && { idToken: _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_0__.SENSITIVE_STRING }),
});
const CreateTokenWithIAMRequestFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.refreshToken && { refreshToken: _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_0__.SENSITIVE_STRING }),
    ...(obj.assertion && { assertion: _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_0__.SENSITIVE_STRING }),
    ...(obj.subjectToken && { subjectToken: _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_0__.SENSITIVE_STRING }),
    ...(obj.codeVerifier && { codeVerifier: _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_0__.SENSITIVE_STRING }),
});
const CreateTokenWithIAMResponseFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.accessToken && { accessToken: _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_0__.SENSITIVE_STRING }),
    ...(obj.refreshToken && { refreshToken: _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_0__.SENSITIVE_STRING }),
    ...(obj.idToken && { idToken: _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_0__.SENSITIVE_STRING }),
});
const RegisterClientResponseFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.clientSecret && { clientSecret: _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_0__.SENSITIVE_STRING }),
});
const StartDeviceAuthorizationRequestFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.clientSecret && { clientSecret: _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_0__.SENSITIVE_STRING }),
});


/***/ }),

/***/ 1115:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   de_CreateTokenCommand: () => (/* binding */ de_CreateTokenCommand),
/* harmony export */   de_CreateTokenWithIAMCommand: () => (/* binding */ de_CreateTokenWithIAMCommand),
/* harmony export */   de_RegisterClientCommand: () => (/* binding */ de_RegisterClientCommand),
/* harmony export */   de_StartDeviceAuthorizationCommand: () => (/* binding */ de_StartDeviceAuthorizationCommand),
/* harmony export */   se_CreateTokenCommand: () => (/* binding */ se_CreateTokenCommand),
/* harmony export */   se_CreateTokenWithIAMCommand: () => (/* binding */ se_CreateTokenWithIAMCommand),
/* harmony export */   se_RegisterClientCommand: () => (/* binding */ se_RegisterClientCommand),
/* harmony export */   se_StartDeviceAuthorizationCommand: () => (/* binding */ se_StartDeviceAuthorizationCommand)
/* harmony export */ });
/* harmony import */ var _aws_sdk_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(919);
/* harmony import */ var _smithy_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(861);
/* harmony import */ var _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(829);
/* harmony import */ var _models_models_0__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1113);
/* harmony import */ var _models_SSOOIDCServiceException__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1114);





const se_CreateTokenCommand = async (input, context) => {
    const b = (0,_smithy_core__WEBPACK_IMPORTED_MODULE_0__.requestBuilder)(input, context);
    const headers = {
        "content-type": "application/json",
    };
    b.bp("/token");
    let body;
    body = JSON.stringify((0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.take)(input, {
        clientId: [],
        clientSecret: [],
        code: [],
        codeVerifier: [],
        deviceCode: [],
        grantType: [],
        redirectUri: [],
        refreshToken: [],
        scope: (_) => (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__._json)(_),
    }));
    b.m("POST").h(headers).b(body);
    return b.build();
};
const se_CreateTokenWithIAMCommand = async (input, context) => {
    const b = (0,_smithy_core__WEBPACK_IMPORTED_MODULE_0__.requestBuilder)(input, context);
    const headers = {
        "content-type": "application/json",
    };
    b.bp("/token");
    const query = (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.map)({
        [_ai]: [, "t"],
    });
    let body;
    body = JSON.stringify((0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.take)(input, {
        assertion: [],
        clientId: [],
        code: [],
        codeVerifier: [],
        grantType: [],
        redirectUri: [],
        refreshToken: [],
        requestedTokenType: [],
        scope: (_) => (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__._json)(_),
        subjectToken: [],
        subjectTokenType: [],
    }));
    b.m("POST").h(headers).q(query).b(body);
    return b.build();
};
const se_RegisterClientCommand = async (input, context) => {
    const b = (0,_smithy_core__WEBPACK_IMPORTED_MODULE_0__.requestBuilder)(input, context);
    const headers = {
        "content-type": "application/json",
    };
    b.bp("/client/register");
    let body;
    body = JSON.stringify((0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.take)(input, {
        clientName: [],
        clientType: [],
        entitledApplicationArn: [],
        grantTypes: (_) => (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__._json)(_),
        issuerUrl: [],
        redirectUris: (_) => (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__._json)(_),
        scopes: (_) => (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__._json)(_),
    }));
    b.m("POST").h(headers).b(body);
    return b.build();
};
const se_StartDeviceAuthorizationCommand = async (input, context) => {
    const b = (0,_smithy_core__WEBPACK_IMPORTED_MODULE_0__.requestBuilder)(input, context);
    const headers = {
        "content-type": "application/json",
    };
    b.bp("/device_authorization");
    let body;
    body = JSON.stringify((0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.take)(input, {
        clientId: [],
        clientSecret: [],
        startUrl: [],
    }));
    b.m("POST").h(headers).b(body);
    return b.build();
};
const de_CreateTokenCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const contents = (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.map)({
        $metadata: deserializeMetadata(output),
    });
    const data = (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.expectNonNull)((0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.expectObject)(await (0,_aws_sdk_core__WEBPACK_IMPORTED_MODULE_2__.parseJsonBody)(output.body, context)), "body");
    const doc = (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.take)(data, {
        accessToken: _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.expectString,
        expiresIn: _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.expectInt32,
        idToken: _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.expectString,
        refreshToken: _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.expectString,
        tokenType: _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.expectString,
    });
    Object.assign(contents, doc);
    return contents;
};
const de_CreateTokenWithIAMCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const contents = (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.map)({
        $metadata: deserializeMetadata(output),
    });
    const data = (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.expectNonNull)((0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.expectObject)(await (0,_aws_sdk_core__WEBPACK_IMPORTED_MODULE_2__.parseJsonBody)(output.body, context)), "body");
    const doc = (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.take)(data, {
        accessToken: _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.expectString,
        expiresIn: _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.expectInt32,
        idToken: _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.expectString,
        issuedTokenType: _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.expectString,
        refreshToken: _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.expectString,
        scope: _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__._json,
        tokenType: _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.expectString,
    });
    Object.assign(contents, doc);
    return contents;
};
const de_RegisterClientCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const contents = (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.map)({
        $metadata: deserializeMetadata(output),
    });
    const data = (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.expectNonNull)((0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.expectObject)(await (0,_aws_sdk_core__WEBPACK_IMPORTED_MODULE_2__.parseJsonBody)(output.body, context)), "body");
    const doc = (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.take)(data, {
        authorizationEndpoint: _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.expectString,
        clientId: _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.expectString,
        clientIdIssuedAt: _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.expectLong,
        clientSecret: _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.expectString,
        clientSecretExpiresAt: _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.expectLong,
        tokenEndpoint: _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.expectString,
    });
    Object.assign(contents, doc);
    return contents;
};
const de_StartDeviceAuthorizationCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const contents = (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.map)({
        $metadata: deserializeMetadata(output),
    });
    const data = (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.expectNonNull)((0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.expectObject)(await (0,_aws_sdk_core__WEBPACK_IMPORTED_MODULE_2__.parseJsonBody)(output.body, context)), "body");
    const doc = (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.take)(data, {
        deviceCode: _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.expectString,
        expiresIn: _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.expectInt32,
        interval: _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.expectInt32,
        userCode: _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.expectString,
        verificationUri: _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.expectString,
        verificationUriComplete: _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.expectString,
    });
    Object.assign(contents, doc);
    return contents;
};
const de_CommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await (0,_aws_sdk_core__WEBPACK_IMPORTED_MODULE_2__.parseJsonErrorBody)(output.body, context),
    };
    const errorCode = (0,_aws_sdk_core__WEBPACK_IMPORTED_MODULE_2__.loadRestJsonErrorCode)(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.ssooidc#AccessDeniedException":
            throw await de_AccessDeniedExceptionRes(parsedOutput, context);
        case "AuthorizationPendingException":
        case "com.amazonaws.ssooidc#AuthorizationPendingException":
            throw await de_AuthorizationPendingExceptionRes(parsedOutput, context);
        case "ExpiredTokenException":
        case "com.amazonaws.ssooidc#ExpiredTokenException":
            throw await de_ExpiredTokenExceptionRes(parsedOutput, context);
        case "InternalServerException":
        case "com.amazonaws.ssooidc#InternalServerException":
            throw await de_InternalServerExceptionRes(parsedOutput, context);
        case "InvalidClientException":
        case "com.amazonaws.ssooidc#InvalidClientException":
            throw await de_InvalidClientExceptionRes(parsedOutput, context);
        case "InvalidGrantException":
        case "com.amazonaws.ssooidc#InvalidGrantException":
            throw await de_InvalidGrantExceptionRes(parsedOutput, context);
        case "InvalidRequestException":
        case "com.amazonaws.ssooidc#InvalidRequestException":
            throw await de_InvalidRequestExceptionRes(parsedOutput, context);
        case "InvalidScopeException":
        case "com.amazonaws.ssooidc#InvalidScopeException":
            throw await de_InvalidScopeExceptionRes(parsedOutput, context);
        case "SlowDownException":
        case "com.amazonaws.ssooidc#SlowDownException":
            throw await de_SlowDownExceptionRes(parsedOutput, context);
        case "UnauthorizedClientException":
        case "com.amazonaws.ssooidc#UnauthorizedClientException":
            throw await de_UnauthorizedClientExceptionRes(parsedOutput, context);
        case "UnsupportedGrantTypeException":
        case "com.amazonaws.ssooidc#UnsupportedGrantTypeException":
            throw await de_UnsupportedGrantTypeExceptionRes(parsedOutput, context);
        case "InvalidRequestRegionException":
        case "com.amazonaws.ssooidc#InvalidRequestRegionException":
            throw await de_InvalidRequestRegionExceptionRes(parsedOutput, context);
        case "InvalidClientMetadataException":
        case "com.amazonaws.ssooidc#InvalidClientMetadataException":
            throw await de_InvalidClientMetadataExceptionRes(parsedOutput, context);
        case "InvalidRedirectUriException":
        case "com.amazonaws.ssooidc#InvalidRedirectUriException":
            throw await de_InvalidRedirectUriExceptionRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody,
                errorCode,
            });
    }
};
const throwDefaultError = (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.withBaseException)(_models_SSOOIDCServiceException__WEBPACK_IMPORTED_MODULE_3__.SSOOIDCServiceException);
const de_AccessDeniedExceptionRes = async (parsedOutput, context) => {
    const contents = (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.map)({});
    const data = parsedOutput.body;
    const doc = (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.take)(data, {
        error: _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.expectString,
        error_description: _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.expectString,
    });
    Object.assign(contents, doc);
    const exception = new _models_models_0__WEBPACK_IMPORTED_MODULE_4__.AccessDeniedException({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents,
    });
    return (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.decorateServiceException)(exception, parsedOutput.body);
};
const de_AuthorizationPendingExceptionRes = async (parsedOutput, context) => {
    const contents = (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.map)({});
    const data = parsedOutput.body;
    const doc = (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.take)(data, {
        error: _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.expectString,
        error_description: _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.expectString,
    });
    Object.assign(contents, doc);
    const exception = new _models_models_0__WEBPACK_IMPORTED_MODULE_4__.AuthorizationPendingException({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents,
    });
    return (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.decorateServiceException)(exception, parsedOutput.body);
};
const de_ExpiredTokenExceptionRes = async (parsedOutput, context) => {
    const contents = (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.map)({});
    const data = parsedOutput.body;
    const doc = (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.take)(data, {
        error: _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.expectString,
        error_description: _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.expectString,
    });
    Object.assign(contents, doc);
    const exception = new _models_models_0__WEBPACK_IMPORTED_MODULE_4__.ExpiredTokenException({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents,
    });
    return (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.decorateServiceException)(exception, parsedOutput.body);
};
const de_InternalServerExceptionRes = async (parsedOutput, context) => {
    const contents = (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.map)({});
    const data = parsedOutput.body;
    const doc = (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.take)(data, {
        error: _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.expectString,
        error_description: _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.expectString,
    });
    Object.assign(contents, doc);
    const exception = new _models_models_0__WEBPACK_IMPORTED_MODULE_4__.InternalServerException({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents,
    });
    return (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.decorateServiceException)(exception, parsedOutput.body);
};
const de_InvalidClientExceptionRes = async (parsedOutput, context) => {
    const contents = (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.map)({});
    const data = parsedOutput.body;
    const doc = (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.take)(data, {
        error: _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.expectString,
        error_description: _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.expectString,
    });
    Object.assign(contents, doc);
    const exception = new _models_models_0__WEBPACK_IMPORTED_MODULE_4__.InvalidClientException({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents,
    });
    return (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.decorateServiceException)(exception, parsedOutput.body);
};
const de_InvalidClientMetadataExceptionRes = async (parsedOutput, context) => {
    const contents = (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.map)({});
    const data = parsedOutput.body;
    const doc = (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.take)(data, {
        error: _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.expectString,
        error_description: _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.expectString,
    });
    Object.assign(contents, doc);
    const exception = new _models_models_0__WEBPACK_IMPORTED_MODULE_4__.InvalidClientMetadataException({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents,
    });
    return (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.decorateServiceException)(exception, parsedOutput.body);
};
const de_InvalidGrantExceptionRes = async (parsedOutput, context) => {
    const contents = (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.map)({});
    const data = parsedOutput.body;
    const doc = (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.take)(data, {
        error: _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.expectString,
        error_description: _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.expectString,
    });
    Object.assign(contents, doc);
    const exception = new _models_models_0__WEBPACK_IMPORTED_MODULE_4__.InvalidGrantException({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents,
    });
    return (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.decorateServiceException)(exception, parsedOutput.body);
};
const de_InvalidRedirectUriExceptionRes = async (parsedOutput, context) => {
    const contents = (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.map)({});
    const data = parsedOutput.body;
    const doc = (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.take)(data, {
        error: _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.expectString,
        error_description: _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.expectString,
    });
    Object.assign(contents, doc);
    const exception = new _models_models_0__WEBPACK_IMPORTED_MODULE_4__.InvalidRedirectUriException({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents,
    });
    return (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.decorateServiceException)(exception, parsedOutput.body);
};
const de_InvalidRequestExceptionRes = async (parsedOutput, context) => {
    const contents = (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.map)({});
    const data = parsedOutput.body;
    const doc = (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.take)(data, {
        error: _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.expectString,
        error_description: _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.expectString,
    });
    Object.assign(contents, doc);
    const exception = new _models_models_0__WEBPACK_IMPORTED_MODULE_4__.InvalidRequestException({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents,
    });
    return (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.decorateServiceException)(exception, parsedOutput.body);
};
const de_InvalidRequestRegionExceptionRes = async (parsedOutput, context) => {
    const contents = (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.map)({});
    const data = parsedOutput.body;
    const doc = (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.take)(data, {
        endpoint: _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.expectString,
        error: _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.expectString,
        error_description: _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.expectString,
        region: _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.expectString,
    });
    Object.assign(contents, doc);
    const exception = new _models_models_0__WEBPACK_IMPORTED_MODULE_4__.InvalidRequestRegionException({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents,
    });
    return (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.decorateServiceException)(exception, parsedOutput.body);
};
const de_InvalidScopeExceptionRes = async (parsedOutput, context) => {
    const contents = (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.map)({});
    const data = parsedOutput.body;
    const doc = (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.take)(data, {
        error: _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.expectString,
        error_description: _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.expectString,
    });
    Object.assign(contents, doc);
    const exception = new _models_models_0__WEBPACK_IMPORTED_MODULE_4__.InvalidScopeException({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents,
    });
    return (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.decorateServiceException)(exception, parsedOutput.body);
};
const de_SlowDownExceptionRes = async (parsedOutput, context) => {
    const contents = (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.map)({});
    const data = parsedOutput.body;
    const doc = (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.take)(data, {
        error: _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.expectString,
        error_description: _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.expectString,
    });
    Object.assign(contents, doc);
    const exception = new _models_models_0__WEBPACK_IMPORTED_MODULE_4__.SlowDownException({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents,
    });
    return (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.decorateServiceException)(exception, parsedOutput.body);
};
const de_UnauthorizedClientExceptionRes = async (parsedOutput, context) => {
    const contents = (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.map)({});
    const data = parsedOutput.body;
    const doc = (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.take)(data, {
        error: _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.expectString,
        error_description: _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.expectString,
    });
    Object.assign(contents, doc);
    const exception = new _models_models_0__WEBPACK_IMPORTED_MODULE_4__.UnauthorizedClientException({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents,
    });
    return (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.decorateServiceException)(exception, parsedOutput.body);
};
const de_UnsupportedGrantTypeExceptionRes = async (parsedOutput, context) => {
    const contents = (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.map)({});
    const data = parsedOutput.body;
    const doc = (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.take)(data, {
        error: _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.expectString,
        error_description: _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.expectString,
    });
    Object.assign(contents, doc);
    const exception = new _models_models_0__WEBPACK_IMPORTED_MODULE_4__.UnsupportedGrantTypeException({
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
const _ai = "aws_iam";


/***/ }),

/***/ 1100:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getRuntimeConfig: () => (/* binding */ getRuntimeConfig)
/* harmony export */ });
/* harmony import */ var _package_json__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(1101);
/* harmony import */ var _aws_sdk_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(1086);
/* harmony import */ var _aws_sdk_credential_provider_node__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(505);
/* harmony import */ var _aws_sdk_util_user_agent_node__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1039);
/* harmony import */ var _smithy_config_resolver__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(987);
/* harmony import */ var _smithy_hash_node__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1042);
/* harmony import */ var _smithy_middleware_retry__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(879);
/* harmony import */ var _smithy_node_config_provider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(750);
/* harmony import */ var _smithy_node_http_handler__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1047);
/* harmony import */ var _smithy_util_body_length_node__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1061);
/* harmony import */ var _smithy_util_retry__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(881);
/* harmony import */ var _runtimeConfig_shared__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(1102);
/* harmony import */ var _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(829);
/* harmony import */ var _smithy_util_defaults_mode_node__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(1082);















const getRuntimeConfig = (config) => {
    (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_9__.emitWarningIfUnsupportedVersion)(process.version);
    const defaultsMode = (0,_smithy_util_defaults_mode_node__WEBPACK_IMPORTED_MODULE_10__.resolveDefaultsModeConfig)(config);
    const defaultConfigProvider = () => defaultsMode().then(_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_9__.loadConfigsForDefaultMode);
    const clientSharedValues = (0,_runtimeConfig_shared__WEBPACK_IMPORTED_MODULE_11__.getRuntimeConfig)(config);
    (0,_aws_sdk_core__WEBPACK_IMPORTED_MODULE_12__.emitWarningIfUnsupportedVersion)(process.version);
    return {
        ...clientSharedValues,
        ...config,
        runtime: "node",
        defaultsMode,
        bodyLengthChecker: config?.bodyLengthChecker ?? _smithy_util_body_length_node__WEBPACK_IMPORTED_MODULE_7__.calculateBodyLength,
        credentialDefaultProvider: config?.credentialDefaultProvider ?? _aws_sdk_credential_provider_node__WEBPACK_IMPORTED_MODULE_0__.defaultProvider,
        defaultUserAgentProvider: config?.defaultUserAgentProvider ??
            (0,_aws_sdk_util_user_agent_node__WEBPACK_IMPORTED_MODULE_1__.defaultUserAgent)({ serviceId: clientSharedValues.serviceId, clientVersion: _package_json__WEBPACK_IMPORTED_MODULE_13__.version }),
        maxAttempts: config?.maxAttempts ?? (0,_smithy_node_config_provider__WEBPACK_IMPORTED_MODULE_5__.loadConfig)(_smithy_middleware_retry__WEBPACK_IMPORTED_MODULE_4__.NODE_MAX_ATTEMPT_CONFIG_OPTIONS),
        region: config?.region ?? (0,_smithy_node_config_provider__WEBPACK_IMPORTED_MODULE_5__.loadConfig)(_smithy_config_resolver__WEBPACK_IMPORTED_MODULE_2__.NODE_REGION_CONFIG_OPTIONS, _smithy_config_resolver__WEBPACK_IMPORTED_MODULE_2__.NODE_REGION_CONFIG_FILE_OPTIONS),
        requestHandler: _smithy_node_http_handler__WEBPACK_IMPORTED_MODULE_6__.NodeHttpHandler.create(config?.requestHandler ?? defaultConfigProvider),
        retryMode: config?.retryMode ??
            (0,_smithy_node_config_provider__WEBPACK_IMPORTED_MODULE_5__.loadConfig)({
                ..._smithy_middleware_retry__WEBPACK_IMPORTED_MODULE_4__.NODE_RETRY_MODE_CONFIG_OPTIONS,
                default: async () => (await defaultConfigProvider()).retryMode || _smithy_util_retry__WEBPACK_IMPORTED_MODULE_8__.DEFAULT_RETRY_MODE,
            }),
        sha256: config?.sha256 ?? _smithy_hash_node__WEBPACK_IMPORTED_MODULE_3__.Hash.bind(null, "sha256"),
        streamCollector: config?.streamCollector ?? _smithy_node_http_handler__WEBPACK_IMPORTED_MODULE_6__.streamCollector,
        useDualstackEndpoint: config?.useDualstackEndpoint ?? (0,_smithy_node_config_provider__WEBPACK_IMPORTED_MODULE_5__.loadConfig)(_smithy_config_resolver__WEBPACK_IMPORTED_MODULE_2__.NODE_USE_DUALSTACK_ENDPOINT_CONFIG_OPTIONS),
        useFipsEndpoint: config?.useFipsEndpoint ?? (0,_smithy_node_config_provider__WEBPACK_IMPORTED_MODULE_5__.loadConfig)(_smithy_config_resolver__WEBPACK_IMPORTED_MODULE_2__.NODE_USE_FIPS_ENDPOINT_CONFIG_OPTIONS),
    };
};


/***/ }),

/***/ 1102:
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
/* harmony import */ var _smithy_util_utf8__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1103);
/* harmony import */ var _auth_httpAuthSchemeProvider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1098);
/* harmony import */ var _endpoint_endpointResolver__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1107);








const getRuntimeConfig = (config) => {
    return {
        apiVersion: "2019-06-10",
        base64Decoder: config?.base64Decoder ?? _smithy_util_base64__WEBPACK_IMPORTED_MODULE_3__.fromBase64,
        base64Encoder: config?.base64Encoder ?? _smithy_util_base64__WEBPACK_IMPORTED_MODULE_3__.toBase64,
        disableHostPrefix: config?.disableHostPrefix ?? false,
        endpointProvider: config?.endpointProvider ?? _endpoint_endpointResolver__WEBPACK_IMPORTED_MODULE_5__.defaultEndpointResolver,
        extensions: config?.extensions ?? [],
        httpAuthSchemeProvider: config?.httpAuthSchemeProvider ?? _auth_httpAuthSchemeProvider__WEBPACK_IMPORTED_MODULE_6__.defaultSSOOIDCHttpAuthSchemeProvider,
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
        serviceId: config?.serviceId ?? "SSO OIDC",
        urlParser: config?.urlParser ?? _smithy_url_parser__WEBPACK_IMPORTED_MODULE_2__.parseUrl,
        utf8Decoder: config?.utf8Decoder ?? _smithy_util_utf8__WEBPACK_IMPORTED_MODULE_4__.fromUtf8,
        utf8Encoder: config?.utf8Encoder ?? _smithy_util_utf8__WEBPACK_IMPORTED_MODULE_4__.toUtf8,
    };
};


/***/ }),

/***/ 1109:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   resolveRuntimeExtensions: () => (/* binding */ resolveRuntimeExtensions)
/* harmony export */ });
/* harmony import */ var _aws_sdk_region_config_resolver__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1088);
/* harmony import */ var _smithy_protocol_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(868);
/* harmony import */ var _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(829);
/* harmony import */ var _auth_httpAuthExtensionConfiguration__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1110);




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

/***/ 1104:
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

/***/ 1103:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   fromUtf8: () => (/* reexport safe */ _fromUtf8__WEBPACK_IMPORTED_MODULE_0__.fromUtf8),
/* harmony export */   toUint8Array: () => (/* reexport safe */ _toUint8Array__WEBPACK_IMPORTED_MODULE_1__.toUint8Array),
/* harmony export */   toUtf8: () => (/* reexport safe */ _toUtf8__WEBPACK_IMPORTED_MODULE_2__.toUtf8)
/* harmony export */ });
/* harmony import */ var _fromUtf8__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1104);
/* harmony import */ var _toUint8Array__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1105);
/* harmony import */ var _toUtf8__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1106);





/***/ }),

/***/ 1105:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   toUint8Array: () => (/* binding */ toUint8Array)
/* harmony export */ });
/* harmony import */ var _fromUtf8__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1104);

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

/***/ 1106:
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

/***/ 1101:
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"name":"@aws-sdk/client-sso-oidc","description":"AWS SDK for JavaScript Sso Oidc Client for Node.js, Browser and React Native","version":"3.606.0","scripts":{"build":"concurrently \'yarn:build:cjs\' \'yarn:build:es\' \'yarn:build:types\'","build:cjs":"node ../../scripts/compilation/inline client-sso-oidc","build:es":"tsc -p tsconfig.es.json","build:include:deps":"lerna run --scope $npm_package_name --include-dependencies build","build:types":"tsc -p tsconfig.types.json","build:types:downlevel":"downlevel-dts dist-types dist-types/ts3.4","clean":"rimraf ./dist-* && rimraf *.tsbuildinfo","extract:docs":"api-extractor run --local","generate:client":"node ../../scripts/generate-clients/single-service --solo sso-oidc"},"main":"./dist-cjs/index.js","types":"./dist-types/index.d.ts","module":"./dist-es/index.js","sideEffects":false,"dependencies":{"@aws-crypto/sha256-browser":"5.2.0","@aws-crypto/sha256-js":"5.2.0","@aws-sdk/core":"3.598.0","@aws-sdk/credential-provider-node":"3.600.0","@aws-sdk/middleware-host-header":"3.598.0","@aws-sdk/middleware-logger":"3.598.0","@aws-sdk/middleware-recursion-detection":"3.598.0","@aws-sdk/middleware-user-agent":"3.598.0","@aws-sdk/region-config-resolver":"3.598.0","@aws-sdk/types":"3.598.0","@aws-sdk/util-endpoints":"3.598.0","@aws-sdk/util-user-agent-browser":"3.598.0","@aws-sdk/util-user-agent-node":"3.598.0","@smithy/config-resolver":"^3.0.2","@smithy/core":"^2.2.1","@smithy/fetch-http-handler":"^3.0.2","@smithy/hash-node":"^3.0.1","@smithy/invalid-dependency":"^3.0.1","@smithy/middleware-content-length":"^3.0.1","@smithy/middleware-endpoint":"^3.0.2","@smithy/middleware-retry":"^3.0.4","@smithy/middleware-serde":"^3.0.1","@smithy/middleware-stack":"^3.0.1","@smithy/node-config-provider":"^3.1.1","@smithy/node-http-handler":"^3.0.1","@smithy/protocol-http":"^4.0.1","@smithy/smithy-client":"^3.1.2","@smithy/types":"^3.1.0","@smithy/url-parser":"^3.0.1","@smithy/util-base64":"^3.0.0","@smithy/util-body-length-browser":"^3.0.0","@smithy/util-body-length-node":"^3.0.0","@smithy/util-defaults-mode-browser":"^3.0.4","@smithy/util-defaults-mode-node":"^3.0.4","@smithy/util-endpoints":"^2.0.2","@smithy/util-middleware":"^3.0.1","@smithy/util-retry":"^3.0.1","@smithy/util-utf8":"^3.0.0","tslib":"^2.6.2"},"peerDependencies":{"@aws-sdk/client-sts":"^3.606.0"},"devDependencies":{"@tsconfig/node16":"16.1.3","@types/node":"^16.18.96","concurrently":"7.0.0","downlevel-dts":"0.10.1","rimraf":"3.0.2","typescript":"~4.9.5"},"engines":{"node":">=16.0.0"},"typesVersions":{"<4.0":{"dist-types/*":["dist-types/ts3.4/*"]}},"files":["dist-*/**"],"author":{"name":"AWS SDK for JavaScript Team","url":"https://aws.amazon.com/javascript/"},"license":"Apache-2.0","browser":{"./dist-es/runtimeConfig":"./dist-es/runtimeConfig.browser"},"react-native":{"./dist-es/runtimeConfig":"./dist-es/runtimeConfig.native"},"homepage":"https://github.com/aws/aws-sdk-js-v3/tree/main/clients/client-sso-oidc","repository":{"type":"git","url":"https://github.com/aws/aws-sdk-js-v3.git","directory":"clients/client-sso-oidc"}}');

/***/ })

};
;