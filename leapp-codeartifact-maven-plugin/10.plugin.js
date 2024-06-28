exports.id = 10;
exports.ids = [10];
exports.modules = Array(1121).concat([
/* 1121 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $Command: () => (/* reexport safe */ _commands__WEBPACK_IMPORTED_MODULE_2__.$Command),
/* harmony export */   AssumeRoleCommand: () => (/* reexport safe */ _commands__WEBPACK_IMPORTED_MODULE_2__.AssumeRoleCommand),
/* harmony export */   AssumeRoleResponseFilterSensitiveLog: () => (/* reexport safe */ _models__WEBPACK_IMPORTED_MODULE_3__.AssumeRoleResponseFilterSensitiveLog),
/* harmony export */   AssumeRoleWithSAMLCommand: () => (/* reexport safe */ _commands__WEBPACK_IMPORTED_MODULE_2__.AssumeRoleWithSAMLCommand),
/* harmony export */   AssumeRoleWithSAMLRequestFilterSensitiveLog: () => (/* reexport safe */ _models__WEBPACK_IMPORTED_MODULE_3__.AssumeRoleWithSAMLRequestFilterSensitiveLog),
/* harmony export */   AssumeRoleWithSAMLResponseFilterSensitiveLog: () => (/* reexport safe */ _models__WEBPACK_IMPORTED_MODULE_3__.AssumeRoleWithSAMLResponseFilterSensitiveLog),
/* harmony export */   AssumeRoleWithWebIdentityCommand: () => (/* reexport safe */ _commands__WEBPACK_IMPORTED_MODULE_2__.AssumeRoleWithWebIdentityCommand),
/* harmony export */   AssumeRoleWithWebIdentityRequestFilterSensitiveLog: () => (/* reexport safe */ _models__WEBPACK_IMPORTED_MODULE_3__.AssumeRoleWithWebIdentityRequestFilterSensitiveLog),
/* harmony export */   AssumeRoleWithWebIdentityResponseFilterSensitiveLog: () => (/* reexport safe */ _models__WEBPACK_IMPORTED_MODULE_3__.AssumeRoleWithWebIdentityResponseFilterSensitiveLog),
/* harmony export */   CredentialsFilterSensitiveLog: () => (/* reexport safe */ _models__WEBPACK_IMPORTED_MODULE_3__.CredentialsFilterSensitiveLog),
/* harmony export */   DecodeAuthorizationMessageCommand: () => (/* reexport safe */ _commands__WEBPACK_IMPORTED_MODULE_2__.DecodeAuthorizationMessageCommand),
/* harmony export */   ExpiredTokenException: () => (/* reexport safe */ _models__WEBPACK_IMPORTED_MODULE_3__.ExpiredTokenException),
/* harmony export */   GetAccessKeyInfoCommand: () => (/* reexport safe */ _commands__WEBPACK_IMPORTED_MODULE_2__.GetAccessKeyInfoCommand),
/* harmony export */   GetCallerIdentityCommand: () => (/* reexport safe */ _commands__WEBPACK_IMPORTED_MODULE_2__.GetCallerIdentityCommand),
/* harmony export */   GetFederationTokenCommand: () => (/* reexport safe */ _commands__WEBPACK_IMPORTED_MODULE_2__.GetFederationTokenCommand),
/* harmony export */   GetFederationTokenResponseFilterSensitiveLog: () => (/* reexport safe */ _models__WEBPACK_IMPORTED_MODULE_3__.GetFederationTokenResponseFilterSensitiveLog),
/* harmony export */   GetSessionTokenCommand: () => (/* reexport safe */ _commands__WEBPACK_IMPORTED_MODULE_2__.GetSessionTokenCommand),
/* harmony export */   GetSessionTokenResponseFilterSensitiveLog: () => (/* reexport safe */ _models__WEBPACK_IMPORTED_MODULE_3__.GetSessionTokenResponseFilterSensitiveLog),
/* harmony export */   IDPCommunicationErrorException: () => (/* reexport safe */ _models__WEBPACK_IMPORTED_MODULE_3__.IDPCommunicationErrorException),
/* harmony export */   IDPRejectedClaimException: () => (/* reexport safe */ _models__WEBPACK_IMPORTED_MODULE_3__.IDPRejectedClaimException),
/* harmony export */   InvalidAuthorizationMessageException: () => (/* reexport safe */ _models__WEBPACK_IMPORTED_MODULE_3__.InvalidAuthorizationMessageException),
/* harmony export */   InvalidIdentityTokenException: () => (/* reexport safe */ _models__WEBPACK_IMPORTED_MODULE_3__.InvalidIdentityTokenException),
/* harmony export */   MalformedPolicyDocumentException: () => (/* reexport safe */ _models__WEBPACK_IMPORTED_MODULE_3__.MalformedPolicyDocumentException),
/* harmony export */   PackedPolicyTooLargeException: () => (/* reexport safe */ _models__WEBPACK_IMPORTED_MODULE_3__.PackedPolicyTooLargeException),
/* harmony export */   RegionDisabledException: () => (/* reexport safe */ _models__WEBPACK_IMPORTED_MODULE_3__.RegionDisabledException),
/* harmony export */   STS: () => (/* reexport safe */ _STS__WEBPACK_IMPORTED_MODULE_1__.STS),
/* harmony export */   STSClient: () => (/* reexport safe */ _STSClient__WEBPACK_IMPORTED_MODULE_0__.STSClient),
/* harmony export */   STSServiceException: () => (/* reexport safe */ _models_STSServiceException__WEBPACK_IMPORTED_MODULE_5__.STSServiceException),
/* harmony export */   __Client: () => (/* reexport safe */ _STSClient__WEBPACK_IMPORTED_MODULE_0__.__Client),
/* harmony export */   decorateDefaultCredentialProvider: () => (/* reexport safe */ _defaultRoleAssumers__WEBPACK_IMPORTED_MODULE_4__.decorateDefaultCredentialProvider),
/* harmony export */   getDefaultRoleAssumer: () => (/* reexport safe */ _defaultRoleAssumers__WEBPACK_IMPORTED_MODULE_4__.getDefaultRoleAssumer),
/* harmony export */   getDefaultRoleAssumerWithWebIdentity: () => (/* reexport safe */ _defaultRoleAssumers__WEBPACK_IMPORTED_MODULE_4__.getDefaultRoleAssumerWithWebIdentity)
/* harmony export */ });
/* harmony import */ var _STSClient__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1122);
/* harmony import */ var _STS__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1470);
/* harmony import */ var _commands__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1495);
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1496);
/* harmony import */ var _defaultRoleAssumers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1497);
/* harmony import */ var _models_STSServiceException__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1473);








/***/ }),
/* 1122 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   STSClient: () => (/* binding */ STSClient),
/* harmony export */   __Client: () => (/* reexport safe */ _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_9__.Client)
/* harmony export */ });
/* harmony import */ var _aws_sdk_middleware_host_header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1123);
/* harmony import */ var _aws_sdk_middleware_logger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1192);
/* harmony import */ var _aws_sdk_middleware_recursion_detection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1194);
/* harmony import */ var _aws_sdk_middleware_user_agent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1195);
/* harmony import */ var _smithy_config_resolver__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1256);
/* harmony import */ var _smithy_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1283);
/* harmony import */ var _smithy_middleware_content_length__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1384);
/* harmony import */ var _smithy_middleware_endpoint__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1287);
/* harmony import */ var _smithy_middleware_retry__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1316);
/* harmony import */ var _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1344);
/* harmony import */ var _auth_httpAuthSchemeProvider__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(1385);
/* harmony import */ var _endpoint_EndpointParameters__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(1410);
/* harmony import */ var _runtimeConfig__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(1411);
/* harmony import */ var _runtimeExtensions__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(1461);















class STSClient extends _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_9__.Client {
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
        return _auth_httpAuthSchemeProvider__WEBPACK_IMPORTED_MODULE_12__.defaultSTSHttpAuthSchemeParametersProvider;
    }
    getIdentityProviderConfigProvider() {
        return async (config) => new _smithy_core__WEBPACK_IMPORTED_MODULE_5__.DefaultIdentityProviderConfig({
            "aws.auth#sigv4": config.credentials,
        });
    }
}


/***/ }),
/* 1123 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getHostHeaderPlugin: () => (/* binding */ getHostHeaderPlugin),
/* harmony export */   hostHeaderMiddleware: () => (/* binding */ hostHeaderMiddleware),
/* harmony export */   hostHeaderMiddlewareOptions: () => (/* binding */ hostHeaderMiddlewareOptions),
/* harmony export */   resolveHostHeaderConfig: () => (/* binding */ resolveHostHeaderConfig)
/* harmony export */ });
/* harmony import */ var _smithy_protocol_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1124);

function resolveHostHeaderConfig(input) {
    return input;
}
const hostHeaderMiddleware = (options) => (next) => async (args) => {
    if (!_smithy_protocol_http__WEBPACK_IMPORTED_MODULE_0__.HttpRequest.isInstance(args.request))
        return next(args);
    const { request } = args;
    const { handlerProtocol = "" } = options.requestHandler.metadata || {};
    if (handlerProtocol.indexOf("h2") >= 0 && !request.headers[":authority"]) {
        delete request.headers["host"];
        request.headers[":authority"] = request.hostname + (request.port ? ":" + request.port : "");
    }
    else if (!request.headers["host"]) {
        let host = request.hostname;
        if (request.port != null)
            host += `:${request.port}`;
        request.headers["host"] = host;
    }
    return next(args);
};
const hostHeaderMiddlewareOptions = {
    name: "hostHeaderMiddleware",
    step: "build",
    priority: "low",
    tags: ["HOST"],
    override: true,
};
const getHostHeaderPlugin = (options) => ({
    applyToStack: (clientStack) => {
        clientStack.add(hostHeaderMiddleware(options), hostHeaderMiddlewareOptions);
    },
});


/***/ }),
/* 1124 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Field: () => (/* reexport safe */ _Field__WEBPACK_IMPORTED_MODULE_1__.Field),
/* harmony export */   Fields: () => (/* reexport safe */ _Fields__WEBPACK_IMPORTED_MODULE_2__.Fields),
/* harmony export */   HttpRequest: () => (/* reexport safe */ _httpRequest__WEBPACK_IMPORTED_MODULE_4__.HttpRequest),
/* harmony export */   HttpResponse: () => (/* reexport safe */ _httpResponse__WEBPACK_IMPORTED_MODULE_5__.HttpResponse),
/* harmony export */   getHttpHandlerExtensionConfiguration: () => (/* reexport safe */ _extensions__WEBPACK_IMPORTED_MODULE_0__.getHttpHandlerExtensionConfiguration),
/* harmony export */   isValidHostname: () => (/* reexport safe */ _isValidHostname__WEBPACK_IMPORTED_MODULE_6__.isValidHostname),
/* harmony export */   resolveHttpHandlerRuntimeConfig: () => (/* reexport safe */ _extensions__WEBPACK_IMPORTED_MODULE_0__.resolveHttpHandlerRuntimeConfig)
/* harmony export */ });
/* harmony import */ var _extensions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1125);
/* harmony import */ var _Field__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1127);
/* harmony import */ var _Fields__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1186);
/* harmony import */ var _httpHandler__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1187);
/* harmony import */ var _httpRequest__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1188);
/* harmony import */ var _httpResponse__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1189);
/* harmony import */ var _isValidHostname__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1190);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1191);










/***/ }),
/* 1125 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getHttpHandlerExtensionConfiguration: () => (/* reexport safe */ _httpExtensionConfiguration__WEBPACK_IMPORTED_MODULE_0__.getHttpHandlerExtensionConfiguration),
/* harmony export */   resolveHttpHandlerRuntimeConfig: () => (/* reexport safe */ _httpExtensionConfiguration__WEBPACK_IMPORTED_MODULE_0__.resolveHttpHandlerRuntimeConfig)
/* harmony export */ });
/* harmony import */ var _httpExtensionConfiguration__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1126);



/***/ }),
/* 1126 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getHttpHandlerExtensionConfiguration: () => (/* binding */ getHttpHandlerExtensionConfiguration),
/* harmony export */   resolveHttpHandlerRuntimeConfig: () => (/* binding */ resolveHttpHandlerRuntimeConfig)
/* harmony export */ });
const getHttpHandlerExtensionConfiguration = (runtimeConfig) => {
    let httpHandler = runtimeConfig.httpHandler;
    return {
        setHttpHandler(handler) {
            httpHandler = handler;
        },
        httpHandler() {
            return httpHandler;
        },
        updateHttpClientConfig(key, value) {
            httpHandler.updateHttpClientConfig(key, value);
        },
        httpHandlerConfigs() {
            return httpHandler.httpHandlerConfigs();
        },
    };
};
const resolveHttpHandlerRuntimeConfig = (httpHandlerExtensionConfiguration) => {
    return {
        httpHandler: httpHandlerExtensionConfiguration.httpHandler(),
    };
};


/***/ }),
/* 1127 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Field: () => (/* binding */ Field)
/* harmony export */ });
/* harmony import */ var _smithy_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1128);

class Field {
    constructor({ name, kind = _smithy_types__WEBPACK_IMPORTED_MODULE_0__.FieldPosition.HEADER, values = [] }) {
        this.name = name;
        this.kind = kind;
        this.values = values;
    }
    add(value) {
        this.values.push(value);
    }
    set(values) {
        this.values = values;
    }
    remove(value) {
        this.values = this.values.filter((v) => v !== value);
    }
    toString() {
        return this.values.map((v) => (v.includes(",") || v.includes(" ") ? `"${v}"` : v)).join(", ");
    }
    get() {
        return this.values;
    }
}


/***/ }),
/* 1128 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AlgorithmId: () => (/* reexport safe */ _extensions__WEBPACK_IMPORTED_MODULE_12__.AlgorithmId),
/* harmony export */   EndpointURLScheme: () => (/* reexport safe */ _endpoint__WEBPACK_IMPORTED_MODULE_9__.EndpointURLScheme),
/* harmony export */   FieldPosition: () => (/* reexport safe */ _http__WEBPACK_IMPORTED_MODULE_13__.FieldPosition),
/* harmony export */   HttpApiKeyAuthLocation: () => (/* reexport safe */ _auth__WEBPACK_IMPORTED_MODULE_1__.HttpApiKeyAuthLocation),
/* harmony export */   HttpAuthLocation: () => (/* reexport safe */ _auth__WEBPACK_IMPORTED_MODULE_1__.HttpAuthLocation),
/* harmony export */   IniSectionType: () => (/* reexport safe */ _profile__WEBPACK_IMPORTED_MODULE_19__.IniSectionType),
/* harmony export */   RequestHandlerProtocol: () => (/* reexport safe */ _transfer__WEBPACK_IMPORTED_MODULE_29__.RequestHandlerProtocol),
/* harmony export */   SMITHY_CONTEXT_KEY: () => (/* reexport safe */ _middleware__WEBPACK_IMPORTED_MODULE_17__.SMITHY_CONTEXT_KEY),
/* harmony export */   getDefaultClientConfiguration: () => (/* reexport safe */ _extensions__WEBPACK_IMPORTED_MODULE_12__.getDefaultClientConfiguration),
/* harmony export */   resolveDefaultRuntimeConfig: () => (/* reexport safe */ _extensions__WEBPACK_IMPORTED_MODULE_12__.resolveDefaultRuntimeConfig)
/* harmony export */ });
/* harmony import */ var _abort__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1129);
/* harmony import */ var _auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1130);
/* harmony import */ var _blob_blob_payload_input_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1137);
/* harmony import */ var _checksum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1138);
/* harmony import */ var _client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1139);
/* harmony import */ var _command__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1140);
/* harmony import */ var _connection__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1141);
/* harmony import */ var _crypto__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1145);
/* harmony import */ var _encode__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1146);
/* harmony import */ var _endpoint__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1147);
/* harmony import */ var _endpoints__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(1148);
/* harmony import */ var _eventStream__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(1154);
/* harmony import */ var _extensions__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(1155);
/* harmony import */ var _http__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(1159);
/* harmony import */ var _http_httpHandlerInitialization__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(1160);
/* harmony import */ var _identity__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(1161);
/* harmony import */ var _logger__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(1166);
/* harmony import */ var _middleware__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(1167);
/* harmony import */ var _pagination__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(1168);
/* harmony import */ var _profile__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(1169);
/* harmony import */ var _response__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(1170);
/* harmony import */ var _retry__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(1171);
/* harmony import */ var _serde__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(1172);
/* harmony import */ var _shapes__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(1173);
/* harmony import */ var _signature__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(1174);
/* harmony import */ var _stream__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(1175);
/* harmony import */ var _streaming_payload_streaming_blob_common_types__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(1176);
/* harmony import */ var _streaming_payload_streaming_blob_payload_input_types__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(1177);
/* harmony import */ var _streaming_payload_streaming_blob_payload_output_types__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(1178);
/* harmony import */ var _transfer__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(1179);
/* harmony import */ var _transform_client_payload_blob_type_narrow__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(1180);
/* harmony import */ var _transform_no_undefined__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(1181);
/* harmony import */ var _transform_type_transform__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(1182);
/* harmony import */ var _uri__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(1183);
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(1184);
/* harmony import */ var _waiter__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(1185);






































/***/ }),
/* 1129 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),
/* 1130 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HttpApiKeyAuthLocation: () => (/* reexport safe */ _HttpApiKeyAuth__WEBPACK_IMPORTED_MODULE_1__.HttpApiKeyAuthLocation),
/* harmony export */   HttpAuthLocation: () => (/* reexport safe */ _auth__WEBPACK_IMPORTED_MODULE_0__.HttpAuthLocation)
/* harmony export */ });
/* harmony import */ var _auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1131);
/* harmony import */ var _HttpApiKeyAuth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1132);
/* harmony import */ var _HttpAuthScheme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1133);
/* harmony import */ var _HttpAuthSchemeProvider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1134);
/* harmony import */ var _HttpSigner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1135);
/* harmony import */ var _IdentityProviderConfig__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1136);








/***/ }),
/* 1131 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HttpAuthLocation: () => (/* binding */ HttpAuthLocation)
/* harmony export */ });
var HttpAuthLocation;
(function (HttpAuthLocation) {
    HttpAuthLocation["HEADER"] = "header";
    HttpAuthLocation["QUERY"] = "query";
})(HttpAuthLocation || (HttpAuthLocation = {}));


/***/ }),
/* 1132 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HttpApiKeyAuthLocation: () => (/* binding */ HttpApiKeyAuthLocation)
/* harmony export */ });
var HttpApiKeyAuthLocation;
(function (HttpApiKeyAuthLocation) {
    HttpApiKeyAuthLocation["HEADER"] = "header";
    HttpApiKeyAuthLocation["QUERY"] = "query";
})(HttpApiKeyAuthLocation || (HttpApiKeyAuthLocation = {}));


/***/ }),
/* 1133 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),
/* 1134 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),
/* 1135 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),
/* 1136 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),
/* 1137 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),
/* 1138 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),
/* 1139 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),
/* 1140 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),
/* 1141 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1142);
/* harmony import */ var _manager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1143);
/* harmony import */ var _pool__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1144);





/***/ }),
/* 1142 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),
/* 1143 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),
/* 1144 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),
/* 1145 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),
/* 1146 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),
/* 1147 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EndpointURLScheme: () => (/* binding */ EndpointURLScheme)
/* harmony export */ });
var EndpointURLScheme;
(function (EndpointURLScheme) {
    EndpointURLScheme["HTTP"] = "http";
    EndpointURLScheme["HTTPS"] = "https";
})(EndpointURLScheme || (EndpointURLScheme = {}));


/***/ }),
/* 1148 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _EndpointRuleObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1149);
/* harmony import */ var _ErrorRuleObject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1150);
/* harmony import */ var _RuleSetObject__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1151);
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1152);
/* harmony import */ var _TreeRuleObject__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1153);







/***/ }),
/* 1149 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),
/* 1150 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),
/* 1151 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),
/* 1152 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),
/* 1153 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),
/* 1154 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),
/* 1155 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AlgorithmId: () => (/* reexport safe */ _checksum__WEBPACK_IMPORTED_MODULE_2__.AlgorithmId),
/* harmony export */   getDefaultClientConfiguration: () => (/* reexport safe */ _defaultClientConfiguration__WEBPACK_IMPORTED_MODULE_0__.getDefaultClientConfiguration),
/* harmony export */   resolveDefaultRuntimeConfig: () => (/* reexport safe */ _defaultClientConfiguration__WEBPACK_IMPORTED_MODULE_0__.resolveDefaultRuntimeConfig)
/* harmony export */ });
/* harmony import */ var _defaultClientConfiguration__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1156);
/* harmony import */ var _defaultExtensionConfiguration__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1158);
/* harmony import */ var _checksum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1157);





/***/ }),
/* 1156 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getDefaultClientConfiguration: () => (/* binding */ getDefaultClientConfiguration),
/* harmony export */   resolveDefaultRuntimeConfig: () => (/* binding */ resolveDefaultRuntimeConfig)
/* harmony export */ });
/* harmony import */ var _checksum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1157);

const getDefaultClientConfiguration = (runtimeConfig) => {
    return {
        ...(0,_checksum__WEBPACK_IMPORTED_MODULE_0__.getChecksumConfiguration)(runtimeConfig),
    };
};
const resolveDefaultRuntimeConfig = (config) => {
    return {
        ...(0,_checksum__WEBPACK_IMPORTED_MODULE_0__.resolveChecksumRuntimeConfig)(config),
    };
};


/***/ }),
/* 1157 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AlgorithmId: () => (/* binding */ AlgorithmId),
/* harmony export */   getChecksumConfiguration: () => (/* binding */ getChecksumConfiguration),
/* harmony export */   resolveChecksumRuntimeConfig: () => (/* binding */ resolveChecksumRuntimeConfig)
/* harmony export */ });
var AlgorithmId;
(function (AlgorithmId) {
    AlgorithmId["MD5"] = "md5";
    AlgorithmId["CRC32"] = "crc32";
    AlgorithmId["CRC32C"] = "crc32c";
    AlgorithmId["SHA1"] = "sha1";
    AlgorithmId["SHA256"] = "sha256";
})(AlgorithmId || (AlgorithmId = {}));
const getChecksumConfiguration = (runtimeConfig) => {
    const checksumAlgorithms = [];
    if (runtimeConfig.sha256 !== undefined) {
        checksumAlgorithms.push({
            algorithmId: () => AlgorithmId.SHA256,
            checksumConstructor: () => runtimeConfig.sha256,
        });
    }
    if (runtimeConfig.md5 != undefined) {
        checksumAlgorithms.push({
            algorithmId: () => AlgorithmId.MD5,
            checksumConstructor: () => runtimeConfig.md5,
        });
    }
    return {
        _checksumAlgorithms: checksumAlgorithms,
        addChecksumAlgorithm(algo) {
            this._checksumAlgorithms.push(algo);
        },
        checksumAlgorithms() {
            return this._checksumAlgorithms;
        },
    };
};
const resolveChecksumRuntimeConfig = (clientConfig) => {
    const runtimeConfig = {};
    clientConfig.checksumAlgorithms().forEach((checksumAlgorithm) => {
        runtimeConfig[checksumAlgorithm.algorithmId()] = checksumAlgorithm.checksumConstructor();
    });
    return runtimeConfig;
};


/***/ }),
/* 1158 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),
/* 1159 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FieldPosition: () => (/* binding */ FieldPosition)
/* harmony export */ });
var FieldPosition;
(function (FieldPosition) {
    FieldPosition[FieldPosition["HEADER"] = 0] = "HEADER";
    FieldPosition[FieldPosition["TRAILER"] = 1] = "TRAILER";
})(FieldPosition || (FieldPosition = {}));


/***/ }),
/* 1160 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),
/* 1161 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _apiKeyIdentity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1162);
/* harmony import */ var _awsCredentialIdentity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1163);
/* harmony import */ var _identity__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1164);
/* harmony import */ var _tokenIdentity__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1165);






/***/ }),
/* 1162 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),
/* 1163 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),
/* 1164 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),
/* 1165 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),
/* 1166 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),
/* 1167 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SMITHY_CONTEXT_KEY: () => (/* binding */ SMITHY_CONTEXT_KEY)
/* harmony export */ });
const SMITHY_CONTEXT_KEY = "__smithy_context";


/***/ }),
/* 1168 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),
/* 1169 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   IniSectionType: () => (/* binding */ IniSectionType)
/* harmony export */ });
var IniSectionType;
(function (IniSectionType) {
    IniSectionType["PROFILE"] = "profile";
    IniSectionType["SSO_SESSION"] = "sso-session";
    IniSectionType["SERVICES"] = "services";
})(IniSectionType || (IniSectionType = {}));


/***/ }),
/* 1170 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),
/* 1171 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),
/* 1172 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),
/* 1173 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),
/* 1174 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),
/* 1175 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),
/* 1176 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),
/* 1177 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),
/* 1178 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),
/* 1179 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RequestHandlerProtocol: () => (/* binding */ RequestHandlerProtocol)
/* harmony export */ });
var RequestHandlerProtocol;
(function (RequestHandlerProtocol) {
    RequestHandlerProtocol["HTTP_0_9"] = "http/0.9";
    RequestHandlerProtocol["HTTP_1_0"] = "http/1.0";
    RequestHandlerProtocol["TDS_8_0"] = "tds/8.0";
})(RequestHandlerProtocol || (RequestHandlerProtocol = {}));


/***/ }),
/* 1180 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),
/* 1181 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),
/* 1182 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),
/* 1183 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),
/* 1184 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),
/* 1185 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),
/* 1186 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Fields: () => (/* binding */ Fields)
/* harmony export */ });
class Fields {
    constructor({ fields = [], encoding = "utf-8" }) {
        this.entries = {};
        fields.forEach(this.setField.bind(this));
        this.encoding = encoding;
    }
    setField(field) {
        this.entries[field.name.toLowerCase()] = field;
    }
    getField(name) {
        return this.entries[name.toLowerCase()];
    }
    removeField(name) {
        delete this.entries[name.toLowerCase()];
    }
    getByType(kind) {
        return Object.values(this.entries).filter((field) => field.kind === kind);
    }
}


/***/ }),
/* 1187 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),
/* 1188 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HttpRequest: () => (/* binding */ HttpRequest)
/* harmony export */ });
class HttpRequest {
    constructor(options) {
        this.method = options.method || "GET";
        this.hostname = options.hostname || "localhost";
        this.port = options.port;
        this.query = options.query || {};
        this.headers = options.headers || {};
        this.body = options.body;
        this.protocol = options.protocol
            ? options.protocol.slice(-1) !== ":"
                ? `${options.protocol}:`
                : options.protocol
            : "https:";
        this.path = options.path ? (options.path.charAt(0) !== "/" ? `/${options.path}` : options.path) : "/";
        this.username = options.username;
        this.password = options.password;
        this.fragment = options.fragment;
    }
    static isInstance(request) {
        if (!request)
            return false;
        const req = request;
        return ("method" in req &&
            "protocol" in req &&
            "hostname" in req &&
            "path" in req &&
            typeof req["query"] === "object" &&
            typeof req["headers"] === "object");
    }
    clone() {
        const cloned = new HttpRequest({
            ...this,
            headers: { ...this.headers },
        });
        if (cloned.query)
            cloned.query = cloneQuery(cloned.query);
        return cloned;
    }
}
function cloneQuery(query) {
    return Object.keys(query).reduce((carry, paramName) => {
        const param = query[paramName];
        return {
            ...carry,
            [paramName]: Array.isArray(param) ? [...param] : param,
        };
    }, {});
}


/***/ }),
/* 1189 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HttpResponse: () => (/* binding */ HttpResponse)
/* harmony export */ });
class HttpResponse {
    constructor(options) {
        this.statusCode = options.statusCode;
        this.reason = options.reason;
        this.headers = options.headers || {};
        this.body = options.body;
    }
    static isInstance(response) {
        if (!response)
            return false;
        const resp = response;
        return typeof resp.statusCode === "number" && typeof resp.headers === "object";
    }
}


/***/ }),
/* 1190 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isValidHostname: () => (/* binding */ isValidHostname)
/* harmony export */ });
function isValidHostname(hostname) {
    const hostPattern = /^[a-z0-9][a-z0-9\.\-]*[a-z0-9]$/;
    return hostPattern.test(hostname);
}


/***/ }),
/* 1191 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),
/* 1192 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getLoggerPlugin: () => (/* reexport safe */ _loggerMiddleware__WEBPACK_IMPORTED_MODULE_0__.getLoggerPlugin),
/* harmony export */   loggerMiddleware: () => (/* reexport safe */ _loggerMiddleware__WEBPACK_IMPORTED_MODULE_0__.loggerMiddleware),
/* harmony export */   loggerMiddlewareOptions: () => (/* reexport safe */ _loggerMiddleware__WEBPACK_IMPORTED_MODULE_0__.loggerMiddlewareOptions)
/* harmony export */ });
/* harmony import */ var _loggerMiddleware__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1193);



/***/ }),
/* 1193 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getLoggerPlugin: () => (/* binding */ getLoggerPlugin),
/* harmony export */   loggerMiddleware: () => (/* binding */ loggerMiddleware),
/* harmony export */   loggerMiddlewareOptions: () => (/* binding */ loggerMiddlewareOptions)
/* harmony export */ });
const loggerMiddleware = () => (next, context) => async (args) => {
    try {
        const response = await next(args);
        const { clientName, commandName, logger, dynamoDbDocumentClientOptions = {} } = context;
        const { overrideInputFilterSensitiveLog, overrideOutputFilterSensitiveLog } = dynamoDbDocumentClientOptions;
        const inputFilterSensitiveLog = overrideInputFilterSensitiveLog ?? context.inputFilterSensitiveLog;
        const outputFilterSensitiveLog = overrideOutputFilterSensitiveLog ?? context.outputFilterSensitiveLog;
        const { $metadata, ...outputWithoutMetadata } = response.output;
        logger?.info?.({
            clientName,
            commandName,
            input: inputFilterSensitiveLog(args.input),
            output: outputFilterSensitiveLog(outputWithoutMetadata),
            metadata: $metadata,
        });
        return response;
    }
    catch (error) {
        const { clientName, commandName, logger, dynamoDbDocumentClientOptions = {} } = context;
        const { overrideInputFilterSensitiveLog } = dynamoDbDocumentClientOptions;
        const inputFilterSensitiveLog = overrideInputFilterSensitiveLog ?? context.inputFilterSensitiveLog;
        logger?.error?.({
            clientName,
            commandName,
            input: inputFilterSensitiveLog(args.input),
            error,
            metadata: error.$metadata,
        });
        throw error;
    }
};
const loggerMiddlewareOptions = {
    name: "loggerMiddleware",
    tags: ["LOGGER"],
    step: "initialize",
    override: true,
};
const getLoggerPlugin = (options) => ({
    applyToStack: (clientStack) => {
        clientStack.add(loggerMiddleware(), loggerMiddlewareOptions);
    },
});


/***/ }),
/* 1194 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addRecursionDetectionMiddlewareOptions: () => (/* binding */ addRecursionDetectionMiddlewareOptions),
/* harmony export */   getRecursionDetectionPlugin: () => (/* binding */ getRecursionDetectionPlugin),
/* harmony export */   recursionDetectionMiddleware: () => (/* binding */ recursionDetectionMiddleware)
/* harmony export */ });
/* harmony import */ var _smithy_protocol_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1124);

const TRACE_ID_HEADER_NAME = "X-Amzn-Trace-Id";
const ENV_LAMBDA_FUNCTION_NAME = "AWS_LAMBDA_FUNCTION_NAME";
const ENV_TRACE_ID = "_X_AMZN_TRACE_ID";
const recursionDetectionMiddleware = (options) => (next) => async (args) => {
    const { request } = args;
    if (!_smithy_protocol_http__WEBPACK_IMPORTED_MODULE_0__.HttpRequest.isInstance(request) ||
        options.runtime !== "node" ||
        request.headers.hasOwnProperty(TRACE_ID_HEADER_NAME)) {
        return next(args);
    }
    const functionName = process.env[ENV_LAMBDA_FUNCTION_NAME];
    const traceId = process.env[ENV_TRACE_ID];
    const nonEmptyString = (str) => typeof str === "string" && str.length > 0;
    if (nonEmptyString(functionName) && nonEmptyString(traceId)) {
        request.headers[TRACE_ID_HEADER_NAME] = traceId;
    }
    return next({
        ...args,
        request,
    });
};
const addRecursionDetectionMiddlewareOptions = {
    step: "build",
    tags: ["RECURSION_DETECTION"],
    name: "recursionDetectionMiddleware",
    override: true,
    priority: "low",
};
const getRecursionDetectionPlugin = (options) => ({
    applyToStack: (clientStack) => {
        clientStack.add(recursionDetectionMiddleware(options), addRecursionDetectionMiddlewareOptions);
    },
});


/***/ }),
/* 1195 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getUserAgentMiddlewareOptions: () => (/* reexport safe */ _user_agent_middleware__WEBPACK_IMPORTED_MODULE_1__.getUserAgentMiddlewareOptions),
/* harmony export */   getUserAgentPlugin: () => (/* reexport safe */ _user_agent_middleware__WEBPACK_IMPORTED_MODULE_1__.getUserAgentPlugin),
/* harmony export */   resolveUserAgentConfig: () => (/* reexport safe */ _configurations__WEBPACK_IMPORTED_MODULE_0__.resolveUserAgentConfig),
/* harmony export */   userAgentMiddleware: () => (/* reexport safe */ _user_agent_middleware__WEBPACK_IMPORTED_MODULE_1__.userAgentMiddleware)
/* harmony export */ });
/* harmony import */ var _configurations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1196);
/* harmony import */ var _user_agent_middleware__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1197);




/***/ }),
/* 1196 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   resolveUserAgentConfig: () => (/* binding */ resolveUserAgentConfig)
/* harmony export */ });
function resolveUserAgentConfig(input) {
    return {
        ...input,
        customUserAgent: typeof input.customUserAgent === "string" ? [[input.customUserAgent]] : input.customUserAgent,
    };
}


/***/ }),
/* 1197 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getUserAgentMiddlewareOptions: () => (/* binding */ getUserAgentMiddlewareOptions),
/* harmony export */   getUserAgentPlugin: () => (/* binding */ getUserAgentPlugin),
/* harmony export */   userAgentMiddleware: () => (/* binding */ userAgentMiddleware)
/* harmony export */ });
/* harmony import */ var _aws_sdk_util_endpoints__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1198);
/* harmony import */ var _smithy_protocol_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1124);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1255);



const userAgentMiddleware = (options) => (next, context) => async (args) => {
    const { request } = args;
    if (!_smithy_protocol_http__WEBPACK_IMPORTED_MODULE_1__.HttpRequest.isInstance(request))
        return next(args);
    const { headers } = request;
    const userAgent = context?.userAgent?.map(escapeUserAgent) || [];
    const defaultUserAgent = (await options.defaultUserAgentProvider()).map(escapeUserAgent);
    const customUserAgent = options?.customUserAgent?.map(escapeUserAgent) || [];
    const prefix = (0,_aws_sdk_util_endpoints__WEBPACK_IMPORTED_MODULE_0__.getUserAgentPrefix)();
    const sdkUserAgentValue = (prefix ? [prefix] : [])
        .concat([...defaultUserAgent, ...userAgent, ...customUserAgent])
        .join(_constants__WEBPACK_IMPORTED_MODULE_2__.SPACE);
    const normalUAValue = [
        ...defaultUserAgent.filter((section) => section.startsWith("aws-sdk-")),
        ...customUserAgent,
    ].join(_constants__WEBPACK_IMPORTED_MODULE_2__.SPACE);
    if (options.runtime !== "browser") {
        if (normalUAValue) {
            headers[_constants__WEBPACK_IMPORTED_MODULE_2__.X_AMZ_USER_AGENT] = headers[_constants__WEBPACK_IMPORTED_MODULE_2__.X_AMZ_USER_AGENT]
                ? `${headers[_constants__WEBPACK_IMPORTED_MODULE_2__.USER_AGENT]} ${normalUAValue}`
                : normalUAValue;
        }
        headers[_constants__WEBPACK_IMPORTED_MODULE_2__.USER_AGENT] = sdkUserAgentValue;
    }
    else {
        headers[_constants__WEBPACK_IMPORTED_MODULE_2__.X_AMZ_USER_AGENT] = sdkUserAgentValue;
    }
    return next({
        ...args,
        request,
    });
};
const escapeUserAgent = (userAgentPair) => {
    const name = userAgentPair[0]
        .split(_constants__WEBPACK_IMPORTED_MODULE_2__.UA_NAME_SEPARATOR)
        .map((part) => part.replace(_constants__WEBPACK_IMPORTED_MODULE_2__.UA_NAME_ESCAPE_REGEX, _constants__WEBPACK_IMPORTED_MODULE_2__.UA_ESCAPE_CHAR))
        .join(_constants__WEBPACK_IMPORTED_MODULE_2__.UA_NAME_SEPARATOR);
    const version = userAgentPair[1]?.replace(_constants__WEBPACK_IMPORTED_MODULE_2__.UA_VALUE_ESCAPE_REGEX, _constants__WEBPACK_IMPORTED_MODULE_2__.UA_ESCAPE_CHAR);
    const prefixSeparatorIndex = name.indexOf(_constants__WEBPACK_IMPORTED_MODULE_2__.UA_NAME_SEPARATOR);
    const prefix = name.substring(0, prefixSeparatorIndex);
    let uaName = name.substring(prefixSeparatorIndex + 1);
    if (prefix === "api") {
        uaName = uaName.toLowerCase();
    }
    return [prefix, uaName, version]
        .filter((item) => item && item.length > 0)
        .reduce((acc, item, index) => {
        switch (index) {
            case 0:
                return item;
            case 1:
                return `${acc}/${item}`;
            default:
                return `${acc}#${item}`;
        }
    }, "");
};
const getUserAgentMiddlewareOptions = {
    name: "getUserAgentMiddleware",
    step: "build",
    priority: "low",
    tags: ["SET_USER_AGENT", "USER_AGENT"],
    override: true,
};
const getUserAgentPlugin = (config) => ({
    applyToStack: (clientStack) => {
        clientStack.add(userAgentMiddleware(config), getUserAgentMiddlewareOptions);
    },
});


/***/ }),
/* 1198 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EndpointError: () => (/* reexport safe */ _types__WEBPACK_IMPORTED_MODULE_4__.EndpointError),
/* harmony export */   awsEndpointFunctions: () => (/* reexport safe */ _aws__WEBPACK_IMPORTED_MODULE_0__.awsEndpointFunctions),
/* harmony export */   getUserAgentPrefix: () => (/* reexport safe */ _lib_aws_partition__WEBPACK_IMPORTED_MODULE_1__.getUserAgentPrefix),
/* harmony export */   isIpAddress: () => (/* reexport safe */ _lib_isIpAddress__WEBPACK_IMPORTED_MODULE_2__.isIpAddress),
/* harmony export */   partition: () => (/* reexport safe */ _lib_aws_partition__WEBPACK_IMPORTED_MODULE_1__.partition),
/* harmony export */   resolveEndpoint: () => (/* reexport safe */ _resolveEndpoint__WEBPACK_IMPORTED_MODULE_3__.resolveEndpoint),
/* harmony export */   setPartitionInfo: () => (/* reexport safe */ _lib_aws_partition__WEBPACK_IMPORTED_MODULE_1__.setPartitionInfo),
/* harmony export */   useDefaultPartitionInfo: () => (/* reexport safe */ _lib_aws_partition__WEBPACK_IMPORTED_MODULE_1__.useDefaultPartitionInfo)
/* harmony export */ });
/* harmony import */ var _aws__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1199);
/* harmony import */ var _lib_aws_partition__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1245);
/* harmony import */ var _lib_isIpAddress__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1243);
/* harmony import */ var _resolveEndpoint__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1247);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1248);







/***/ }),
/* 1199 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   awsEndpointFunctions: () => (/* binding */ awsEndpointFunctions)
/* harmony export */ });
/* harmony import */ var _smithy_util_endpoints__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1200);
/* harmony import */ var _lib_aws_isVirtualHostableS3Bucket__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1242);
/* harmony import */ var _lib_aws_parseArn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1244);
/* harmony import */ var _lib_aws_partition__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1245);




const awsEndpointFunctions = {
    isVirtualHostableS3Bucket: _lib_aws_isVirtualHostableS3Bucket__WEBPACK_IMPORTED_MODULE_1__.isVirtualHostableS3Bucket,
    parseArn: _lib_aws_parseArn__WEBPACK_IMPORTED_MODULE_2__.parseArn,
    partition: _lib_aws_partition__WEBPACK_IMPORTED_MODULE_3__.partition,
};
_smithy_util_endpoints__WEBPACK_IMPORTED_MODULE_0__.customEndpointFunctions.aws = awsEndpointFunctions;


/***/ }),
/* 1200 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EndpointError: () => (/* reexport safe */ _types__WEBPACK_IMPORTED_MODULE_4__.EndpointError),
/* harmony export */   customEndpointFunctions: () => (/* reexport safe */ _utils_customEndpointFunctions__WEBPACK_IMPORTED_MODULE_2__.customEndpointFunctions),
/* harmony export */   isIpAddress: () => (/* reexport safe */ _lib_isIpAddress__WEBPACK_IMPORTED_MODULE_0__.isIpAddress),
/* harmony export */   isValidHostLabel: () => (/* reexport safe */ _lib_isValidHostLabel__WEBPACK_IMPORTED_MODULE_1__.isValidHostLabel),
/* harmony export */   resolveEndpoint: () => (/* reexport safe */ _resolveEndpoint__WEBPACK_IMPORTED_MODULE_3__.resolveEndpoint)
/* harmony export */ });
/* harmony import */ var _lib_isIpAddress__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1201);
/* harmony import */ var _lib_isValidHostLabel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1202);
/* harmony import */ var _utils_customEndpointFunctions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1203);
/* harmony import */ var _resolveEndpoint__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1204);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1208);







/***/ }),
/* 1201 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isIpAddress: () => (/* binding */ isIpAddress)
/* harmony export */ });
const IP_V4_REGEX = new RegExp(`^(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}$`);
const isIpAddress = (value) => IP_V4_REGEX.test(value) || (value.startsWith("[") && value.endsWith("]"));


/***/ }),
/* 1202 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isValidHostLabel: () => (/* binding */ isValidHostLabel)
/* harmony export */ });
const VALID_HOST_LABEL_REGEX = new RegExp(`^(?!.*-$)(?!-)[a-zA-Z0-9-]{1,63}$`);
const isValidHostLabel = (value, allowSubDomains = false) => {
    if (!allowSubDomains) {
        return VALID_HOST_LABEL_REGEX.test(value);
    }
    const labels = value.split(".");
    for (const label of labels) {
        if (!isValidHostLabel(label)) {
            return false;
        }
    }
    return true;
};


/***/ }),
/* 1203 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   customEndpointFunctions: () => (/* binding */ customEndpointFunctions)
/* harmony export */ });
const customEndpointFunctions = {};


/***/ }),
/* 1204 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   resolveEndpoint: () => (/* binding */ resolveEndpoint)
/* harmony export */ });
/* harmony import */ var _debug__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1205);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1208);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1216);



const resolveEndpoint = (ruleSetObject, options) => {
    const { endpointParams, logger } = options;
    const { parameters, rules } = ruleSetObject;
    options.logger?.debug?.(`${_debug__WEBPACK_IMPORTED_MODULE_0__.debugId} Initial EndpointParams: ${(0,_debug__WEBPACK_IMPORTED_MODULE_0__.toDebugString)(endpointParams)}`);
    const paramsWithDefault = Object.entries(parameters)
        .filter(([, v]) => v.default != null)
        .map(([k, v]) => [k, v.default]);
    if (paramsWithDefault.length > 0) {
        for (const [paramKey, paramDefaultValue] of paramsWithDefault) {
            endpointParams[paramKey] = endpointParams[paramKey] ?? paramDefaultValue;
        }
    }
    const requiredParams = Object.entries(parameters)
        .filter(([, v]) => v.required)
        .map(([k]) => k);
    for (const requiredParam of requiredParams) {
        if (endpointParams[requiredParam] == null) {
            throw new _types__WEBPACK_IMPORTED_MODULE_1__.EndpointError(`Missing required parameter: '${requiredParam}'`);
        }
    }
    const endpoint = (0,_utils__WEBPACK_IMPORTED_MODULE_2__.evaluateRules)(rules, { endpointParams, logger, referenceRecord: {} });
    if (options.endpointParams?.Endpoint) {
        try {
            const givenEndpoint = new URL(options.endpointParams.Endpoint);
            const { protocol, port } = givenEndpoint;
            endpoint.url.protocol = protocol;
            endpoint.url.port = port;
        }
        catch (e) {
        }
    }
    options.logger?.debug?.(`${_debug__WEBPACK_IMPORTED_MODULE_0__.debugId} Resolved endpoint: ${(0,_debug__WEBPACK_IMPORTED_MODULE_0__.toDebugString)(endpoint)}`);
    return endpoint;
};


/***/ }),
/* 1205 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   debugId: () => (/* reexport safe */ _debugId__WEBPACK_IMPORTED_MODULE_0__.debugId),
/* harmony export */   toDebugString: () => (/* reexport safe */ _toDebugString__WEBPACK_IMPORTED_MODULE_1__.toDebugString)
/* harmony export */ });
/* harmony import */ var _debugId__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1206);
/* harmony import */ var _toDebugString__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1207);




/***/ }),
/* 1206 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   debugId: () => (/* binding */ debugId)
/* harmony export */ });
const debugId = "endpoints";


/***/ }),
/* 1207 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   toDebugString: () => (/* binding */ toDebugString)
/* harmony export */ });
function toDebugString(input) {
    if (typeof input !== "object" || input == null) {
        return input;
    }
    if ("ref" in input) {
        return `$${toDebugString(input.ref)}`;
    }
    if ("fn" in input) {
        return `${input.fn}(${(input.argv || []).map(toDebugString).join(", ")})`;
    }
    return JSON.stringify(input, null, 2);
}


/***/ }),
/* 1208 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EndpointError: () => (/* reexport safe */ _EndpointError__WEBPACK_IMPORTED_MODULE_0__.EndpointError)
/* harmony export */ });
/* harmony import */ var _EndpointError__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1209);
/* harmony import */ var _EndpointFunctions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1210);
/* harmony import */ var _EndpointRuleObject__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1211);
/* harmony import */ var _ErrorRuleObject__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1212);
/* harmony import */ var _RuleSetObject__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1213);
/* harmony import */ var _TreeRuleObject__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1214);
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1215);









/***/ }),
/* 1209 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EndpointError: () => (/* binding */ EndpointError)
/* harmony export */ });
class EndpointError extends Error {
    constructor(message) {
        super(message);
        this.name = "EndpointError";
    }
}


/***/ }),
/* 1210 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),
/* 1211 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),
/* 1212 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),
/* 1213 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),
/* 1214 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),
/* 1215 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),
/* 1216 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   customEndpointFunctions: () => (/* reexport safe */ _customEndpointFunctions__WEBPACK_IMPORTED_MODULE_0__.customEndpointFunctions),
/* harmony export */   evaluateRules: () => (/* reexport safe */ _evaluateRules__WEBPACK_IMPORTED_MODULE_1__.evaluateRules)
/* harmony export */ });
/* harmony import */ var _customEndpointFunctions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1203);
/* harmony import */ var _evaluateRules__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1217);




/***/ }),
/* 1217 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   evaluateRules: () => (/* binding */ evaluateRules)
/* harmony export */ });
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1208);
/* harmony import */ var _evaluateEndpointRule__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1218);
/* harmony import */ var _evaluateErrorRule__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1240);
/* harmony import */ var _evaluateTreeRule__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1241);




const evaluateRules = (rules, options) => {
    for (const rule of rules) {
        if (rule.type === "endpoint") {
            const endpointOrUndefined = (0,_evaluateEndpointRule__WEBPACK_IMPORTED_MODULE_1__.evaluateEndpointRule)(rule, options);
            if (endpointOrUndefined) {
                return endpointOrUndefined;
            }
        }
        else if (rule.type === "error") {
            (0,_evaluateErrorRule__WEBPACK_IMPORTED_MODULE_2__.evaluateErrorRule)(rule, options);
        }
        else if (rule.type === "tree") {
            const endpointOrUndefined = (0,_evaluateTreeRule__WEBPACK_IMPORTED_MODULE_3__.evaluateTreeRule)(rule, options);
            if (endpointOrUndefined) {
                return endpointOrUndefined;
            }
        }
        else {
            throw new _types__WEBPACK_IMPORTED_MODULE_0__.EndpointError(`Unknown endpoint rule: ${rule}`);
        }
    }
    throw new _types__WEBPACK_IMPORTED_MODULE_0__.EndpointError(`Rules evaluation failed`);
};


/***/ }),
/* 1218 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   evaluateEndpointRule: () => (/* binding */ evaluateEndpointRule)
/* harmony export */ });
/* harmony import */ var _debug__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1205);
/* harmony import */ var _evaluateConditions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1219);
/* harmony import */ var _getEndpointHeaders__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1236);
/* harmony import */ var _getEndpointProperties__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1237);
/* harmony import */ var _getEndpointUrl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1239);





const evaluateEndpointRule = (endpointRule, options) => {
    const { conditions, endpoint } = endpointRule;
    const { result, referenceRecord } = (0,_evaluateConditions__WEBPACK_IMPORTED_MODULE_1__.evaluateConditions)(conditions, options);
    if (!result) {
        return;
    }
    const endpointRuleOptions = {
        ...options,
        referenceRecord: { ...options.referenceRecord, ...referenceRecord },
    };
    const { url, properties, headers } = endpoint;
    options.logger?.debug?.(`${_debug__WEBPACK_IMPORTED_MODULE_0__.debugId} Resolving endpoint from template: ${(0,_debug__WEBPACK_IMPORTED_MODULE_0__.toDebugString)(endpoint)}`);
    return {
        ...(headers != undefined && {
            headers: (0,_getEndpointHeaders__WEBPACK_IMPORTED_MODULE_2__.getEndpointHeaders)(headers, endpointRuleOptions),
        }),
        ...(properties != undefined && {
            properties: (0,_getEndpointProperties__WEBPACK_IMPORTED_MODULE_3__.getEndpointProperties)(properties, endpointRuleOptions),
        }),
        url: (0,_getEndpointUrl__WEBPACK_IMPORTED_MODULE_4__.getEndpointUrl)(url, endpointRuleOptions),
    };
};


/***/ }),
/* 1219 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   evaluateConditions: () => (/* binding */ evaluateConditions)
/* harmony export */ });
/* harmony import */ var _debug__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1205);
/* harmony import */ var _evaluateCondition__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1220);


const evaluateConditions = (conditions = [], options) => {
    const conditionsReferenceRecord = {};
    for (const condition of conditions) {
        const { result, toAssign } = (0,_evaluateCondition__WEBPACK_IMPORTED_MODULE_1__.evaluateCondition)(condition, {
            ...options,
            referenceRecord: {
                ...options.referenceRecord,
                ...conditionsReferenceRecord,
            },
        });
        if (!result) {
            return { result };
        }
        if (toAssign) {
            conditionsReferenceRecord[toAssign.name] = toAssign.value;
            options.logger?.debug?.(`${_debug__WEBPACK_IMPORTED_MODULE_0__.debugId} assign: ${toAssign.name} := ${(0,_debug__WEBPACK_IMPORTED_MODULE_0__.toDebugString)(toAssign.value)}`);
        }
    }
    return { result: true, referenceRecord: conditionsReferenceRecord };
};


/***/ }),
/* 1220 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   evaluateCondition: () => (/* binding */ evaluateCondition)
/* harmony export */ });
/* harmony import */ var _debug__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1205);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1208);
/* harmony import */ var _callFunction__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1221);



const evaluateCondition = ({ assign, ...fnArgs }, options) => {
    if (assign && assign in options.referenceRecord) {
        throw new _types__WEBPACK_IMPORTED_MODULE_1__.EndpointError(`'${assign}' is already defined in Reference Record.`);
    }
    const value = (0,_callFunction__WEBPACK_IMPORTED_MODULE_2__.callFunction)(fnArgs, options);
    options.logger?.debug?.(`${_debug__WEBPACK_IMPORTED_MODULE_0__.debugId} evaluateCondition: ${(0,_debug__WEBPACK_IMPORTED_MODULE_0__.toDebugString)(fnArgs)} = ${(0,_debug__WEBPACK_IMPORTED_MODULE_0__.toDebugString)(value)}`);
    return {
        result: value === "" ? true : !!value,
        ...(assign != null && { toAssign: { name: assign, value } }),
    };
};


/***/ }),
/* 1221 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   callFunction: () => (/* binding */ callFunction)
/* harmony export */ });
/* harmony import */ var _customEndpointFunctions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1203);
/* harmony import */ var _endpointFunctions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1222);
/* harmony import */ var _evaluateExpression__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1233);



const callFunction = ({ fn, argv }, options) => {
    const evaluatedArgs = argv.map((arg) => ["boolean", "number"].includes(typeof arg) ? arg : (0,_evaluateExpression__WEBPACK_IMPORTED_MODULE_2__.evaluateExpression)(arg, "arg", options));
    const fnSegments = fn.split(".");
    if (fnSegments[0] in _customEndpointFunctions__WEBPACK_IMPORTED_MODULE_0__.customEndpointFunctions && fnSegments[1] != null) {
        return _customEndpointFunctions__WEBPACK_IMPORTED_MODULE_0__.customEndpointFunctions[fnSegments[0]][fnSegments[1]](...evaluatedArgs);
    }
    return _endpointFunctions__WEBPACK_IMPORTED_MODULE_1__.endpointFunctions[fn](...evaluatedArgs);
};


/***/ }),
/* 1222 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   endpointFunctions: () => (/* binding */ endpointFunctions)
/* harmony export */ });
/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1223);

const endpointFunctions = {
    booleanEquals: _lib__WEBPACK_IMPORTED_MODULE_0__.booleanEquals,
    getAttr: _lib__WEBPACK_IMPORTED_MODULE_0__.getAttr,
    isSet: _lib__WEBPACK_IMPORTED_MODULE_0__.isSet,
    isValidHostLabel: _lib__WEBPACK_IMPORTED_MODULE_0__.isValidHostLabel,
    not: _lib__WEBPACK_IMPORTED_MODULE_0__.not,
    parseURL: _lib__WEBPACK_IMPORTED_MODULE_0__.parseURL,
    stringEquals: _lib__WEBPACK_IMPORTED_MODULE_0__.stringEquals,
    substring: _lib__WEBPACK_IMPORTED_MODULE_0__.substring,
    uriEncode: _lib__WEBPACK_IMPORTED_MODULE_0__.uriEncode,
};


/***/ }),
/* 1223 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   booleanEquals: () => (/* reexport safe */ _booleanEquals__WEBPACK_IMPORTED_MODULE_0__.booleanEquals),
/* harmony export */   getAttr: () => (/* reexport safe */ _getAttr__WEBPACK_IMPORTED_MODULE_1__.getAttr),
/* harmony export */   isSet: () => (/* reexport safe */ _isSet__WEBPACK_IMPORTED_MODULE_2__.isSet),
/* harmony export */   isValidHostLabel: () => (/* reexport safe */ _isValidHostLabel__WEBPACK_IMPORTED_MODULE_3__.isValidHostLabel),
/* harmony export */   not: () => (/* reexport safe */ _not__WEBPACK_IMPORTED_MODULE_4__.not),
/* harmony export */   parseURL: () => (/* reexport safe */ _parseURL__WEBPACK_IMPORTED_MODULE_5__.parseURL),
/* harmony export */   stringEquals: () => (/* reexport safe */ _stringEquals__WEBPACK_IMPORTED_MODULE_6__.stringEquals),
/* harmony export */   substring: () => (/* reexport safe */ _substring__WEBPACK_IMPORTED_MODULE_7__.substring),
/* harmony export */   uriEncode: () => (/* reexport safe */ _uriEncode__WEBPACK_IMPORTED_MODULE_8__.uriEncode)
/* harmony export */ });
/* harmony import */ var _booleanEquals__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1224);
/* harmony import */ var _getAttr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1225);
/* harmony import */ var _isSet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1227);
/* harmony import */ var _isValidHostLabel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1202);
/* harmony import */ var _not__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1228);
/* harmony import */ var _parseURL__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1229);
/* harmony import */ var _stringEquals__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1230);
/* harmony import */ var _substring__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1231);
/* harmony import */ var _uriEncode__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1232);











/***/ }),
/* 1224 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   booleanEquals: () => (/* binding */ booleanEquals)
/* harmony export */ });
const booleanEquals = (value1, value2) => value1 === value2;


/***/ }),
/* 1225 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getAttr: () => (/* binding */ getAttr)
/* harmony export */ });
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1208);
/* harmony import */ var _getAttrPathList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1226);


const getAttr = (value, path) => (0,_getAttrPathList__WEBPACK_IMPORTED_MODULE_1__.getAttrPathList)(path).reduce((acc, index) => {
    if (typeof acc !== "object") {
        throw new _types__WEBPACK_IMPORTED_MODULE_0__.EndpointError(`Index '${index}' in '${path}' not found in '${JSON.stringify(value)}'`);
    }
    else if (Array.isArray(acc)) {
        return acc[parseInt(index)];
    }
    return acc[index];
}, value);


/***/ }),
/* 1226 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getAttrPathList: () => (/* binding */ getAttrPathList)
/* harmony export */ });
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1208);

const getAttrPathList = (path) => {
    const parts = path.split(".");
    const pathList = [];
    for (const part of parts) {
        const squareBracketIndex = part.indexOf("[");
        if (squareBracketIndex !== -1) {
            if (part.indexOf("]") !== part.length - 1) {
                throw new _types__WEBPACK_IMPORTED_MODULE_0__.EndpointError(`Path: '${path}' does not end with ']'`);
            }
            const arrayIndex = part.slice(squareBracketIndex + 1, -1);
            if (Number.isNaN(parseInt(arrayIndex))) {
                throw new _types__WEBPACK_IMPORTED_MODULE_0__.EndpointError(`Invalid array index: '${arrayIndex}' in path: '${path}'`);
            }
            if (squareBracketIndex !== 0) {
                pathList.push(part.slice(0, squareBracketIndex));
            }
            pathList.push(arrayIndex);
        }
        else {
            pathList.push(part);
        }
    }
    return pathList;
};


/***/ }),
/* 1227 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isSet: () => (/* binding */ isSet)
/* harmony export */ });
const isSet = (value) => value != null;


/***/ }),
/* 1228 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   not: () => (/* binding */ not)
/* harmony export */ });
const not = (value) => !value;


/***/ }),
/* 1229 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   parseURL: () => (/* binding */ parseURL)
/* harmony export */ });
/* harmony import */ var _smithy_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1128);
/* harmony import */ var _isIpAddress__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1201);


const DEFAULT_PORTS = {
    [_smithy_types__WEBPACK_IMPORTED_MODULE_0__.EndpointURLScheme.HTTP]: 80,
    [_smithy_types__WEBPACK_IMPORTED_MODULE_0__.EndpointURLScheme.HTTPS]: 443,
};
const parseURL = (value) => {
    const whatwgURL = (() => {
        try {
            if (value instanceof URL) {
                return value;
            }
            if (typeof value === "object" && "hostname" in value) {
                const { hostname, port, protocol = "", path = "", query = {} } = value;
                const url = new URL(`${protocol}//${hostname}${port ? `:${port}` : ""}${path}`);
                url.search = Object.entries(query)
                    .map(([k, v]) => `${k}=${v}`)
                    .join("&");
                return url;
            }
            return new URL(value);
        }
        catch (error) {
            return null;
        }
    })();
    if (!whatwgURL) {
        console.error(`Unable to parse ${JSON.stringify(value)} as a whatwg URL.`);
        return null;
    }
    const urlString = whatwgURL.href;
    const { host, hostname, pathname, protocol, search } = whatwgURL;
    if (search) {
        return null;
    }
    const scheme = protocol.slice(0, -1);
    if (!Object.values(_smithy_types__WEBPACK_IMPORTED_MODULE_0__.EndpointURLScheme).includes(scheme)) {
        return null;
    }
    const isIp = (0,_isIpAddress__WEBPACK_IMPORTED_MODULE_1__.isIpAddress)(hostname);
    const inputContainsDefaultPort = urlString.includes(`${host}:${DEFAULT_PORTS[scheme]}`) ||
        (typeof value === "string" && value.includes(`${host}:${DEFAULT_PORTS[scheme]}`));
    const authority = `${host}${inputContainsDefaultPort ? `:${DEFAULT_PORTS[scheme]}` : ``}`;
    return {
        scheme,
        authority,
        path: pathname,
        normalizedPath: pathname.endsWith("/") ? pathname : `${pathname}/`,
        isIp,
    };
};


/***/ }),
/* 1230 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   stringEquals: () => (/* binding */ stringEquals)
/* harmony export */ });
const stringEquals = (value1, value2) => value1 === value2;


/***/ }),
/* 1231 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   substring: () => (/* binding */ substring)
/* harmony export */ });
const substring = (input, start, stop, reverse) => {
    if (start >= stop || input.length < stop) {
        return null;
    }
    if (!reverse) {
        return input.substring(start, stop);
    }
    return input.substring(input.length - stop, input.length - start);
};


/***/ }),
/* 1232 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   uriEncode: () => (/* binding */ uriEncode)
/* harmony export */ });
const uriEncode = (value) => encodeURIComponent(value).replace(/[!*'()]/g, (c) => `%${c.charCodeAt(0).toString(16).toUpperCase()}`);


/***/ }),
/* 1233 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   evaluateExpression: () => (/* binding */ evaluateExpression)
/* harmony export */ });
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1208);
/* harmony import */ var _callFunction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1221);
/* harmony import */ var _evaluateTemplate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1234);
/* harmony import */ var _getReferenceValue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1235);




const evaluateExpression = (obj, keyName, options) => {
    if (typeof obj === "string") {
        return (0,_evaluateTemplate__WEBPACK_IMPORTED_MODULE_2__.evaluateTemplate)(obj, options);
    }
    else if (obj["fn"]) {
        return (0,_callFunction__WEBPACK_IMPORTED_MODULE_1__.callFunction)(obj, options);
    }
    else if (obj["ref"]) {
        return (0,_getReferenceValue__WEBPACK_IMPORTED_MODULE_3__.getReferenceValue)(obj, options);
    }
    throw new _types__WEBPACK_IMPORTED_MODULE_0__.EndpointError(`'${keyName}': ${String(obj)} is not a string, function or reference.`);
};


/***/ }),
/* 1234 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   evaluateTemplate: () => (/* binding */ evaluateTemplate)
/* harmony export */ });
/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1223);

const evaluateTemplate = (template, options) => {
    const evaluatedTemplateArr = [];
    const templateContext = {
        ...options.endpointParams,
        ...options.referenceRecord,
    };
    let currentIndex = 0;
    while (currentIndex < template.length) {
        const openingBraceIndex = template.indexOf("{", currentIndex);
        if (openingBraceIndex === -1) {
            evaluatedTemplateArr.push(template.slice(currentIndex));
            break;
        }
        evaluatedTemplateArr.push(template.slice(currentIndex, openingBraceIndex));
        const closingBraceIndex = template.indexOf("}", openingBraceIndex);
        if (closingBraceIndex === -1) {
            evaluatedTemplateArr.push(template.slice(openingBraceIndex));
            break;
        }
        if (template[openingBraceIndex + 1] === "{" && template[closingBraceIndex + 1] === "}") {
            evaluatedTemplateArr.push(template.slice(openingBraceIndex + 1, closingBraceIndex));
            currentIndex = closingBraceIndex + 2;
        }
        const parameterName = template.substring(openingBraceIndex + 1, closingBraceIndex);
        if (parameterName.includes("#")) {
            const [refName, attrName] = parameterName.split("#");
            evaluatedTemplateArr.push((0,_lib__WEBPACK_IMPORTED_MODULE_0__.getAttr)(templateContext[refName], attrName));
        }
        else {
            evaluatedTemplateArr.push(templateContext[parameterName]);
        }
        currentIndex = closingBraceIndex + 1;
    }
    return evaluatedTemplateArr.join("");
};


/***/ }),
/* 1235 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getReferenceValue: () => (/* binding */ getReferenceValue)
/* harmony export */ });
const getReferenceValue = ({ ref }, options) => {
    const referenceRecord = {
        ...options.endpointParams,
        ...options.referenceRecord,
    };
    return referenceRecord[ref];
};


/***/ }),
/* 1236 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getEndpointHeaders: () => (/* binding */ getEndpointHeaders)
/* harmony export */ });
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1208);
/* harmony import */ var _evaluateExpression__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1233);


const getEndpointHeaders = (headers, options) => Object.entries(headers).reduce((acc, [headerKey, headerVal]) => ({
    ...acc,
    [headerKey]: headerVal.map((headerValEntry) => {
        const processedExpr = (0,_evaluateExpression__WEBPACK_IMPORTED_MODULE_1__.evaluateExpression)(headerValEntry, "Header value entry", options);
        if (typeof processedExpr !== "string") {
            throw new _types__WEBPACK_IMPORTED_MODULE_0__.EndpointError(`Header '${headerKey}' value '${processedExpr}' is not a string`);
        }
        return processedExpr;
    }),
}), {});


/***/ }),
/* 1237 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getEndpointProperties: () => (/* binding */ getEndpointProperties)
/* harmony export */ });
/* harmony import */ var _getEndpointProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1238);

const getEndpointProperties = (properties, options) => Object.entries(properties).reduce((acc, [propertyKey, propertyVal]) => ({
    ...acc,
    [propertyKey]: (0,_getEndpointProperty__WEBPACK_IMPORTED_MODULE_0__.getEndpointProperty)(propertyVal, options),
}), {});


/***/ }),
/* 1238 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getEndpointProperty: () => (/* binding */ getEndpointProperty)
/* harmony export */ });
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1208);
/* harmony import */ var _evaluateTemplate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1234);
/* harmony import */ var _getEndpointProperties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1237);



const getEndpointProperty = (property, options) => {
    if (Array.isArray(property)) {
        return property.map((propertyEntry) => getEndpointProperty(propertyEntry, options));
    }
    switch (typeof property) {
        case "string":
            return (0,_evaluateTemplate__WEBPACK_IMPORTED_MODULE_1__.evaluateTemplate)(property, options);
        case "object":
            if (property === null) {
                throw new _types__WEBPACK_IMPORTED_MODULE_0__.EndpointError(`Unexpected endpoint property: ${property}`);
            }
            return (0,_getEndpointProperties__WEBPACK_IMPORTED_MODULE_2__.getEndpointProperties)(property, options);
        case "boolean":
            return property;
        default:
            throw new _types__WEBPACK_IMPORTED_MODULE_0__.EndpointError(`Unexpected endpoint property type: ${typeof property}`);
    }
};


/***/ }),
/* 1239 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getEndpointUrl: () => (/* binding */ getEndpointUrl)
/* harmony export */ });
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1208);
/* harmony import */ var _evaluateExpression__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1233);


const getEndpointUrl = (endpointUrl, options) => {
    const expression = (0,_evaluateExpression__WEBPACK_IMPORTED_MODULE_1__.evaluateExpression)(endpointUrl, "Endpoint URL", options);
    if (typeof expression === "string") {
        try {
            return new URL(expression);
        }
        catch (error) {
            console.error(`Failed to construct URL with ${expression}`, error);
            throw error;
        }
    }
    throw new _types__WEBPACK_IMPORTED_MODULE_0__.EndpointError(`Endpoint URL must be a string, got ${typeof expression}`);
};


/***/ }),
/* 1240 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   evaluateErrorRule: () => (/* binding */ evaluateErrorRule)
/* harmony export */ });
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1208);
/* harmony import */ var _evaluateConditions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1219);
/* harmony import */ var _evaluateExpression__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1233);



const evaluateErrorRule = (errorRule, options) => {
    const { conditions, error } = errorRule;
    const { result, referenceRecord } = (0,_evaluateConditions__WEBPACK_IMPORTED_MODULE_1__.evaluateConditions)(conditions, options);
    if (!result) {
        return;
    }
    throw new _types__WEBPACK_IMPORTED_MODULE_0__.EndpointError((0,_evaluateExpression__WEBPACK_IMPORTED_MODULE_2__.evaluateExpression)(error, "Error", {
        ...options,
        referenceRecord: { ...options.referenceRecord, ...referenceRecord },
    }));
};


/***/ }),
/* 1241 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   evaluateTreeRule: () => (/* binding */ evaluateTreeRule)
/* harmony export */ });
/* harmony import */ var _evaluateConditions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1219);
/* harmony import */ var _evaluateRules__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1217);


const evaluateTreeRule = (treeRule, options) => {
    const { conditions, rules } = treeRule;
    const { result, referenceRecord } = (0,_evaluateConditions__WEBPACK_IMPORTED_MODULE_0__.evaluateConditions)(conditions, options);
    if (!result) {
        return;
    }
    return (0,_evaluateRules__WEBPACK_IMPORTED_MODULE_1__.evaluateRules)(rules, {
        ...options,
        referenceRecord: { ...options.referenceRecord, ...referenceRecord },
    });
};


/***/ }),
/* 1242 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isVirtualHostableS3Bucket: () => (/* binding */ isVirtualHostableS3Bucket)
/* harmony export */ });
/* harmony import */ var _smithy_util_endpoints__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1200);
/* harmony import */ var _isIpAddress__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1243);


const isVirtualHostableS3Bucket = (value, allowSubDomains = false) => {
    if (allowSubDomains) {
        for (const label of value.split(".")) {
            if (!isVirtualHostableS3Bucket(label)) {
                return false;
            }
        }
        return true;
    }
    if (!(0,_smithy_util_endpoints__WEBPACK_IMPORTED_MODULE_0__.isValidHostLabel)(value)) {
        return false;
    }
    if (value.length < 3 || value.length > 63) {
        return false;
    }
    if (value !== value.toLowerCase()) {
        return false;
    }
    if ((0,_isIpAddress__WEBPACK_IMPORTED_MODULE_1__.isIpAddress)(value)) {
        return false;
    }
    return true;
};


/***/ }),
/* 1243 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isIpAddress: () => (/* reexport safe */ _smithy_util_endpoints__WEBPACK_IMPORTED_MODULE_0__.isIpAddress)
/* harmony export */ });
/* harmony import */ var _smithy_util_endpoints__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1200);



/***/ }),
/* 1244 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   parseArn: () => (/* binding */ parseArn)
/* harmony export */ });
const parseArn = (value) => {
    const segments = value.split(":");
    if (segments.length < 6)
        return null;
    const [arn, partition, service, region, accountId, ...resourceId] = segments;
    if (arn !== "arn" || partition === "" || service === "" || resourceId[0] === "")
        return null;
    return {
        partition,
        service,
        region,
        accountId,
        resourceId: resourceId[0].includes("/") ? resourceId[0].split("/") : resourceId,
    };
};


/***/ }),
/* 1245 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getUserAgentPrefix: () => (/* binding */ getUserAgentPrefix),
/* harmony export */   partition: () => (/* binding */ partition),
/* harmony export */   setPartitionInfo: () => (/* binding */ setPartitionInfo),
/* harmony export */   useDefaultPartitionInfo: () => (/* binding */ useDefaultPartitionInfo)
/* harmony export */ });
/* harmony import */ var _partitions_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1246);

let selectedPartitionsInfo = _partitions_json__WEBPACK_IMPORTED_MODULE_0__;
let selectedUserAgentPrefix = "";
const partition = (value) => {
    const { partitions } = selectedPartitionsInfo;
    for (const partition of partitions) {
        const { regions, outputs } = partition;
        for (const [region, regionData] of Object.entries(regions)) {
            if (region === value) {
                return {
                    ...outputs,
                    ...regionData,
                };
            }
        }
    }
    for (const partition of partitions) {
        const { regionRegex, outputs } = partition;
        if (new RegExp(regionRegex).test(value)) {
            return {
                ...outputs,
            };
        }
    }
    const DEFAULT_PARTITION = partitions.find((partition) => partition.id === "aws");
    if (!DEFAULT_PARTITION) {
        throw new Error("Provided region was not found in the partition array or regex," +
            " and default partition with id 'aws' doesn't exist.");
    }
    return {
        ...DEFAULT_PARTITION.outputs,
    };
};
const setPartitionInfo = (partitionsInfo, userAgentPrefix = "") => {
    selectedPartitionsInfo = partitionsInfo;
    selectedUserAgentPrefix = userAgentPrefix;
};
const useDefaultPartitionInfo = () => {
    setPartitionInfo(_partitions_json__WEBPACK_IMPORTED_MODULE_0__, "");
};
const getUserAgentPrefix = () => selectedUserAgentPrefix;


/***/ }),
/* 1246 */
/***/ ((module) => {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"partitions":[{"id":"aws","outputs":{"dnsSuffix":"amazonaws.com","dualStackDnsSuffix":"api.aws","implicitGlobalRegion":"us-east-1","name":"aws","supportsDualStack":true,"supportsFIPS":true},"regionRegex":"^(us|eu|ap|sa|ca|me|af|il)\\\\-\\\\w+\\\\-\\\\d+$","regions":{"af-south-1":{"description":"Africa (Cape Town)"},"ap-east-1":{"description":"Asia Pacific (Hong Kong)"},"ap-northeast-1":{"description":"Asia Pacific (Tokyo)"},"ap-northeast-2":{"description":"Asia Pacific (Seoul)"},"ap-northeast-3":{"description":"Asia Pacific (Osaka)"},"ap-south-1":{"description":"Asia Pacific (Mumbai)"},"ap-south-2":{"description":"Asia Pacific (Hyderabad)"},"ap-southeast-1":{"description":"Asia Pacific (Singapore)"},"ap-southeast-2":{"description":"Asia Pacific (Sydney)"},"ap-southeast-3":{"description":"Asia Pacific (Jakarta)"},"ap-southeast-4":{"description":"Asia Pacific (Melbourne)"},"aws-global":{"description":"AWS Standard global region"},"ca-central-1":{"description":"Canada (Central)"},"ca-west-1":{"description":"Canada West (Calgary)"},"eu-central-1":{"description":"Europe (Frankfurt)"},"eu-central-2":{"description":"Europe (Zurich)"},"eu-north-1":{"description":"Europe (Stockholm)"},"eu-south-1":{"description":"Europe (Milan)"},"eu-south-2":{"description":"Europe (Spain)"},"eu-west-1":{"description":"Europe (Ireland)"},"eu-west-2":{"description":"Europe (London)"},"eu-west-3":{"description":"Europe (Paris)"},"il-central-1":{"description":"Israel (Tel Aviv)"},"me-central-1":{"description":"Middle East (UAE)"},"me-south-1":{"description":"Middle East (Bahrain)"},"sa-east-1":{"description":"South America (Sao Paulo)"},"us-east-1":{"description":"US East (N. Virginia)"},"us-east-2":{"description":"US East (Ohio)"},"us-west-1":{"description":"US West (N. California)"},"us-west-2":{"description":"US West (Oregon)"}}},{"id":"aws-cn","outputs":{"dnsSuffix":"amazonaws.com.cn","dualStackDnsSuffix":"api.amazonwebservices.com.cn","implicitGlobalRegion":"cn-northwest-1","name":"aws-cn","supportsDualStack":true,"supportsFIPS":true},"regionRegex":"^cn\\\\-\\\\w+\\\\-\\\\d+$","regions":{"aws-cn-global":{"description":"AWS China global region"},"cn-north-1":{"description":"China (Beijing)"},"cn-northwest-1":{"description":"China (Ningxia)"}}},{"id":"aws-us-gov","outputs":{"dnsSuffix":"amazonaws.com","dualStackDnsSuffix":"api.aws","implicitGlobalRegion":"us-gov-west-1","name":"aws-us-gov","supportsDualStack":true,"supportsFIPS":true},"regionRegex":"^us\\\\-gov\\\\-\\\\w+\\\\-\\\\d+$","regions":{"aws-us-gov-global":{"description":"AWS GovCloud (US) global region"},"us-gov-east-1":{"description":"AWS GovCloud (US-East)"},"us-gov-west-1":{"description":"AWS GovCloud (US-West)"}}},{"id":"aws-iso","outputs":{"dnsSuffix":"c2s.ic.gov","dualStackDnsSuffix":"c2s.ic.gov","implicitGlobalRegion":"us-iso-east-1","name":"aws-iso","supportsDualStack":false,"supportsFIPS":true},"regionRegex":"^us\\\\-iso\\\\-\\\\w+\\\\-\\\\d+$","regions":{"aws-iso-global":{"description":"AWS ISO (US) global region"},"us-iso-east-1":{"description":"US ISO East"},"us-iso-west-1":{"description":"US ISO WEST"}}},{"id":"aws-iso-b","outputs":{"dnsSuffix":"sc2s.sgov.gov","dualStackDnsSuffix":"sc2s.sgov.gov","implicitGlobalRegion":"us-isob-east-1","name":"aws-iso-b","supportsDualStack":false,"supportsFIPS":true},"regionRegex":"^us\\\\-isob\\\\-\\\\w+\\\\-\\\\d+$","regions":{"aws-iso-b-global":{"description":"AWS ISOB (US) global region"},"us-isob-east-1":{"description":"US ISOB East (Ohio)"}}},{"id":"aws-iso-e","outputs":{"dnsSuffix":"cloud.adc-e.uk","dualStackDnsSuffix":"cloud.adc-e.uk","implicitGlobalRegion":"eu-isoe-west-1","name":"aws-iso-e","supportsDualStack":false,"supportsFIPS":true},"regionRegex":"^eu\\\\-isoe\\\\-\\\\w+\\\\-\\\\d+$","regions":{"eu-isoe-west-1":{"description":"EU ISOE West"}}},{"id":"aws-iso-f","outputs":{"dnsSuffix":"csp.hci.ic.gov","dualStackDnsSuffix":"csp.hci.ic.gov","implicitGlobalRegion":"us-isof-south-1","name":"aws-iso-f","supportsDualStack":false,"supportsFIPS":true},"regionRegex":"^us\\\\-isof\\\\-\\\\w+\\\\-\\\\d+$","regions":{}}],"version":"1.1"}');

/***/ }),
/* 1247 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   resolveEndpoint: () => (/* reexport safe */ _smithy_util_endpoints__WEBPACK_IMPORTED_MODULE_0__.resolveEndpoint)
/* harmony export */ });
/* harmony import */ var _smithy_util_endpoints__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1200);



/***/ }),
/* 1248 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EndpointError: () => (/* reexport safe */ _EndpointError__WEBPACK_IMPORTED_MODULE_0__.EndpointError)
/* harmony export */ });
/* harmony import */ var _EndpointError__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1249);
/* harmony import */ var _EndpointRuleObject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1250);
/* harmony import */ var _ErrorRuleObject__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1251);
/* harmony import */ var _RuleSetObject__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1252);
/* harmony import */ var _TreeRuleObject__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1253);
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1254);








/***/ }),
/* 1249 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EndpointError: () => (/* reexport safe */ _smithy_util_endpoints__WEBPACK_IMPORTED_MODULE_0__.EndpointError)
/* harmony export */ });
/* harmony import */ var _smithy_util_endpoints__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1200);



/***/ }),
/* 1250 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),
/* 1251 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),
/* 1252 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),
/* 1253 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),
/* 1254 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),
/* 1255 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SPACE: () => (/* binding */ SPACE),
/* harmony export */   UA_ESCAPE_CHAR: () => (/* binding */ UA_ESCAPE_CHAR),
/* harmony export */   UA_NAME_ESCAPE_REGEX: () => (/* binding */ UA_NAME_ESCAPE_REGEX),
/* harmony export */   UA_NAME_SEPARATOR: () => (/* binding */ UA_NAME_SEPARATOR),
/* harmony export */   UA_VALUE_ESCAPE_REGEX: () => (/* binding */ UA_VALUE_ESCAPE_REGEX),
/* harmony export */   USER_AGENT: () => (/* binding */ USER_AGENT),
/* harmony export */   X_AMZ_USER_AGENT: () => (/* binding */ X_AMZ_USER_AGENT)
/* harmony export */ });
const USER_AGENT = "user-agent";
const X_AMZ_USER_AGENT = "x-amz-user-agent";
const SPACE = " ";
const UA_NAME_SEPARATOR = "/";
const UA_NAME_ESCAPE_REGEX = /[^\!\$\%\&\'\*\+\-\.\^\_\`\|\~\d\w]/g;
const UA_VALUE_ESCAPE_REGEX = /[^\!\$\%\&\'\*\+\-\.\^\_\`\|\~\d\w\#]/g;
const UA_ESCAPE_CHAR = "-";


/***/ }),
/* 1256 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CONFIG_USE_DUALSTACK_ENDPOINT: () => (/* reexport safe */ _endpointsConfig__WEBPACK_IMPORTED_MODULE_0__.CONFIG_USE_DUALSTACK_ENDPOINT),
/* harmony export */   CONFIG_USE_FIPS_ENDPOINT: () => (/* reexport safe */ _endpointsConfig__WEBPACK_IMPORTED_MODULE_0__.CONFIG_USE_FIPS_ENDPOINT),
/* harmony export */   DEFAULT_USE_DUALSTACK_ENDPOINT: () => (/* reexport safe */ _endpointsConfig__WEBPACK_IMPORTED_MODULE_0__.DEFAULT_USE_DUALSTACK_ENDPOINT),
/* harmony export */   DEFAULT_USE_FIPS_ENDPOINT: () => (/* reexport safe */ _endpointsConfig__WEBPACK_IMPORTED_MODULE_0__.DEFAULT_USE_FIPS_ENDPOINT),
/* harmony export */   ENV_USE_DUALSTACK_ENDPOINT: () => (/* reexport safe */ _endpointsConfig__WEBPACK_IMPORTED_MODULE_0__.ENV_USE_DUALSTACK_ENDPOINT),
/* harmony export */   ENV_USE_FIPS_ENDPOINT: () => (/* reexport safe */ _endpointsConfig__WEBPACK_IMPORTED_MODULE_0__.ENV_USE_FIPS_ENDPOINT),
/* harmony export */   NODE_REGION_CONFIG_FILE_OPTIONS: () => (/* reexport safe */ _regionConfig__WEBPACK_IMPORTED_MODULE_1__.NODE_REGION_CONFIG_FILE_OPTIONS),
/* harmony export */   NODE_REGION_CONFIG_OPTIONS: () => (/* reexport safe */ _regionConfig__WEBPACK_IMPORTED_MODULE_1__.NODE_REGION_CONFIG_OPTIONS),
/* harmony export */   NODE_USE_DUALSTACK_ENDPOINT_CONFIG_OPTIONS: () => (/* reexport safe */ _endpointsConfig__WEBPACK_IMPORTED_MODULE_0__.NODE_USE_DUALSTACK_ENDPOINT_CONFIG_OPTIONS),
/* harmony export */   NODE_USE_FIPS_ENDPOINT_CONFIG_OPTIONS: () => (/* reexport safe */ _endpointsConfig__WEBPACK_IMPORTED_MODULE_0__.NODE_USE_FIPS_ENDPOINT_CONFIG_OPTIONS),
/* harmony export */   REGION_ENV_NAME: () => (/* reexport safe */ _regionConfig__WEBPACK_IMPORTED_MODULE_1__.REGION_ENV_NAME),
/* harmony export */   REGION_INI_NAME: () => (/* reexport safe */ _regionConfig__WEBPACK_IMPORTED_MODULE_1__.REGION_INI_NAME),
/* harmony export */   getRegionInfo: () => (/* reexport safe */ _regionInfo__WEBPACK_IMPORTED_MODULE_2__.getRegionInfo),
/* harmony export */   resolveCustomEndpointsConfig: () => (/* reexport safe */ _endpointsConfig__WEBPACK_IMPORTED_MODULE_0__.resolveCustomEndpointsConfig),
/* harmony export */   resolveEndpointsConfig: () => (/* reexport safe */ _endpointsConfig__WEBPACK_IMPORTED_MODULE_0__.resolveEndpointsConfig),
/* harmony export */   resolveRegionConfig: () => (/* reexport safe */ _regionConfig__WEBPACK_IMPORTED_MODULE_1__.resolveRegionConfig)
/* harmony export */ });
/* harmony import */ var _endpointsConfig__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1257);
/* harmony import */ var _regionConfig__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1270);
/* harmony import */ var _regionInfo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1275);





/***/ }),
/* 1257 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CONFIG_USE_DUALSTACK_ENDPOINT: () => (/* reexport safe */ _NodeUseDualstackEndpointConfigOptions__WEBPACK_IMPORTED_MODULE_0__.CONFIG_USE_DUALSTACK_ENDPOINT),
/* harmony export */   CONFIG_USE_FIPS_ENDPOINT: () => (/* reexport safe */ _NodeUseFipsEndpointConfigOptions__WEBPACK_IMPORTED_MODULE_1__.CONFIG_USE_FIPS_ENDPOINT),
/* harmony export */   DEFAULT_USE_DUALSTACK_ENDPOINT: () => (/* reexport safe */ _NodeUseDualstackEndpointConfigOptions__WEBPACK_IMPORTED_MODULE_0__.DEFAULT_USE_DUALSTACK_ENDPOINT),
/* harmony export */   DEFAULT_USE_FIPS_ENDPOINT: () => (/* reexport safe */ _NodeUseFipsEndpointConfigOptions__WEBPACK_IMPORTED_MODULE_1__.DEFAULT_USE_FIPS_ENDPOINT),
/* harmony export */   ENV_USE_DUALSTACK_ENDPOINT: () => (/* reexport safe */ _NodeUseDualstackEndpointConfigOptions__WEBPACK_IMPORTED_MODULE_0__.ENV_USE_DUALSTACK_ENDPOINT),
/* harmony export */   ENV_USE_FIPS_ENDPOINT: () => (/* reexport safe */ _NodeUseFipsEndpointConfigOptions__WEBPACK_IMPORTED_MODULE_1__.ENV_USE_FIPS_ENDPOINT),
/* harmony export */   NODE_USE_DUALSTACK_ENDPOINT_CONFIG_OPTIONS: () => (/* reexport safe */ _NodeUseDualstackEndpointConfigOptions__WEBPACK_IMPORTED_MODULE_0__.NODE_USE_DUALSTACK_ENDPOINT_CONFIG_OPTIONS),
/* harmony export */   NODE_USE_FIPS_ENDPOINT_CONFIG_OPTIONS: () => (/* reexport safe */ _NodeUseFipsEndpointConfigOptions__WEBPACK_IMPORTED_MODULE_1__.NODE_USE_FIPS_ENDPOINT_CONFIG_OPTIONS),
/* harmony export */   resolveCustomEndpointsConfig: () => (/* reexport safe */ _resolveCustomEndpointsConfig__WEBPACK_IMPORTED_MODULE_2__.resolveCustomEndpointsConfig),
/* harmony export */   resolveEndpointsConfig: () => (/* reexport safe */ _resolveEndpointsConfig__WEBPACK_IMPORTED_MODULE_3__.resolveEndpointsConfig)
/* harmony export */ });
/* harmony import */ var _NodeUseDualstackEndpointConfigOptions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1258);
/* harmony import */ var _NodeUseFipsEndpointConfigOptions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1263);
/* harmony import */ var _resolveCustomEndpointsConfig__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1264);
/* harmony import */ var _resolveEndpointsConfig__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1268);






/***/ }),
/* 1258 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CONFIG_USE_DUALSTACK_ENDPOINT: () => (/* binding */ CONFIG_USE_DUALSTACK_ENDPOINT),
/* harmony export */   DEFAULT_USE_DUALSTACK_ENDPOINT: () => (/* binding */ DEFAULT_USE_DUALSTACK_ENDPOINT),
/* harmony export */   ENV_USE_DUALSTACK_ENDPOINT: () => (/* binding */ ENV_USE_DUALSTACK_ENDPOINT),
/* harmony export */   NODE_USE_DUALSTACK_ENDPOINT_CONFIG_OPTIONS: () => (/* binding */ NODE_USE_DUALSTACK_ENDPOINT_CONFIG_OPTIONS)
/* harmony export */ });
/* harmony import */ var _smithy_util_config_provider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1259);

const ENV_USE_DUALSTACK_ENDPOINT = "AWS_USE_DUALSTACK_ENDPOINT";
const CONFIG_USE_DUALSTACK_ENDPOINT = "use_dualstack_endpoint";
const DEFAULT_USE_DUALSTACK_ENDPOINT = false;
const NODE_USE_DUALSTACK_ENDPOINT_CONFIG_OPTIONS = {
    environmentVariableSelector: (env) => (0,_smithy_util_config_provider__WEBPACK_IMPORTED_MODULE_0__.booleanSelector)(env, ENV_USE_DUALSTACK_ENDPOINT, _smithy_util_config_provider__WEBPACK_IMPORTED_MODULE_0__.SelectorType.ENV),
    configFileSelector: (profile) => (0,_smithy_util_config_provider__WEBPACK_IMPORTED_MODULE_0__.booleanSelector)(profile, CONFIG_USE_DUALSTACK_ENDPOINT, _smithy_util_config_provider__WEBPACK_IMPORTED_MODULE_0__.SelectorType.CONFIG),
    default: false,
};


/***/ }),
/* 1259 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SelectorType: () => (/* reexport safe */ _types__WEBPACK_IMPORTED_MODULE_2__.SelectorType),
/* harmony export */   booleanSelector: () => (/* reexport safe */ _booleanSelector__WEBPACK_IMPORTED_MODULE_0__.booleanSelector),
/* harmony export */   numberSelector: () => (/* reexport safe */ _numberSelector__WEBPACK_IMPORTED_MODULE_1__.numberSelector)
/* harmony export */ });
/* harmony import */ var _booleanSelector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1260);
/* harmony import */ var _numberSelector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1261);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1262);





/***/ }),
/* 1260 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   booleanSelector: () => (/* binding */ booleanSelector)
/* harmony export */ });
const booleanSelector = (obj, key, type) => {
    if (!(key in obj))
        return undefined;
    if (obj[key] === "true")
        return true;
    if (obj[key] === "false")
        return false;
    throw new Error(`Cannot load ${type} "${key}". Expected "true" or "false", got ${obj[key]}.`);
};


/***/ }),
/* 1261 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   numberSelector: () => (/* binding */ numberSelector)
/* harmony export */ });
const numberSelector = (obj, key, type) => {
    if (!(key in obj))
        return undefined;
    const numberValue = parseInt(obj[key], 10);
    if (Number.isNaN(numberValue)) {
        throw new TypeError(`Cannot load ${type} '${key}'. Expected number, got '${obj[key]}'.`);
    }
    return numberValue;
};


/***/ }),
/* 1262 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SelectorType: () => (/* binding */ SelectorType)
/* harmony export */ });
var SelectorType;
(function (SelectorType) {
    SelectorType["ENV"] = "env";
    SelectorType["CONFIG"] = "shared config entry";
})(SelectorType || (SelectorType = {}));


/***/ }),
/* 1263 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CONFIG_USE_FIPS_ENDPOINT: () => (/* binding */ CONFIG_USE_FIPS_ENDPOINT),
/* harmony export */   DEFAULT_USE_FIPS_ENDPOINT: () => (/* binding */ DEFAULT_USE_FIPS_ENDPOINT),
/* harmony export */   ENV_USE_FIPS_ENDPOINT: () => (/* binding */ ENV_USE_FIPS_ENDPOINT),
/* harmony export */   NODE_USE_FIPS_ENDPOINT_CONFIG_OPTIONS: () => (/* binding */ NODE_USE_FIPS_ENDPOINT_CONFIG_OPTIONS)
/* harmony export */ });
/* harmony import */ var _smithy_util_config_provider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1259);

const ENV_USE_FIPS_ENDPOINT = "AWS_USE_FIPS_ENDPOINT";
const CONFIG_USE_FIPS_ENDPOINT = "use_fips_endpoint";
const DEFAULT_USE_FIPS_ENDPOINT = false;
const NODE_USE_FIPS_ENDPOINT_CONFIG_OPTIONS = {
    environmentVariableSelector: (env) => (0,_smithy_util_config_provider__WEBPACK_IMPORTED_MODULE_0__.booleanSelector)(env, ENV_USE_FIPS_ENDPOINT, _smithy_util_config_provider__WEBPACK_IMPORTED_MODULE_0__.SelectorType.ENV),
    configFileSelector: (profile) => (0,_smithy_util_config_provider__WEBPACK_IMPORTED_MODULE_0__.booleanSelector)(profile, CONFIG_USE_FIPS_ENDPOINT, _smithy_util_config_provider__WEBPACK_IMPORTED_MODULE_0__.SelectorType.CONFIG),
    default: false,
};


/***/ }),
/* 1264 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   resolveCustomEndpointsConfig: () => (/* binding */ resolveCustomEndpointsConfig)
/* harmony export */ });
/* harmony import */ var _smithy_util_middleware__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1265);

const resolveCustomEndpointsConfig = (input) => {
    const { endpoint, urlParser } = input;
    return {
        ...input,
        tls: input.tls ?? true,
        endpoint: (0,_smithy_util_middleware__WEBPACK_IMPORTED_MODULE_0__.normalizeProvider)(typeof endpoint === "string" ? urlParser(endpoint) : endpoint),
        isCustomEndpoint: true,
        useDualstackEndpoint: (0,_smithy_util_middleware__WEBPACK_IMPORTED_MODULE_0__.normalizeProvider)(input.useDualstackEndpoint ?? false),
    };
};


/***/ }),
/* 1265 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getSmithyContext: () => (/* reexport safe */ _getSmithyContext__WEBPACK_IMPORTED_MODULE_0__.getSmithyContext),
/* harmony export */   normalizeProvider: () => (/* reexport safe */ _normalizeProvider__WEBPACK_IMPORTED_MODULE_1__.normalizeProvider)
/* harmony export */ });
/* harmony import */ var _getSmithyContext__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1266);
/* harmony import */ var _normalizeProvider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1267);




/***/ }),
/* 1266 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getSmithyContext: () => (/* binding */ getSmithyContext)
/* harmony export */ });
/* harmony import */ var _smithy_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1128);

const getSmithyContext = (context) => context[_smithy_types__WEBPACK_IMPORTED_MODULE_0__.SMITHY_CONTEXT_KEY] || (context[_smithy_types__WEBPACK_IMPORTED_MODULE_0__.SMITHY_CONTEXT_KEY] = {});


/***/ }),
/* 1267 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   normalizeProvider: () => (/* binding */ normalizeProvider)
/* harmony export */ });
const normalizeProvider = (input) => {
    if (typeof input === "function")
        return input;
    const promisified = Promise.resolve(input);
    return () => promisified;
};


/***/ }),
/* 1268 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   resolveEndpointsConfig: () => (/* binding */ resolveEndpointsConfig)
/* harmony export */ });
/* harmony import */ var _smithy_util_middleware__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1265);
/* harmony import */ var _utils_getEndpointFromRegion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1269);


const resolveEndpointsConfig = (input) => {
    const useDualstackEndpoint = (0,_smithy_util_middleware__WEBPACK_IMPORTED_MODULE_0__.normalizeProvider)(input.useDualstackEndpoint ?? false);
    const { endpoint, useFipsEndpoint, urlParser } = input;
    return {
        ...input,
        tls: input.tls ?? true,
        endpoint: endpoint
            ? (0,_smithy_util_middleware__WEBPACK_IMPORTED_MODULE_0__.normalizeProvider)(typeof endpoint === "string" ? urlParser(endpoint) : endpoint)
            : () => (0,_utils_getEndpointFromRegion__WEBPACK_IMPORTED_MODULE_1__.getEndpointFromRegion)({ ...input, useDualstackEndpoint, useFipsEndpoint }),
        isCustomEndpoint: !!endpoint,
        useDualstackEndpoint,
    };
};


/***/ }),
/* 1269 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getEndpointFromRegion: () => (/* binding */ getEndpointFromRegion)
/* harmony export */ });
const getEndpointFromRegion = async (input) => {
    const { tls = true } = input;
    const region = await input.region();
    const dnsHostRegex = new RegExp(/^([a-zA-Z0-9]|[a-zA-Z0-9][a-zA-Z0-9-]{0,61}[a-zA-Z0-9])$/);
    if (!dnsHostRegex.test(region)) {
        throw new Error("Invalid region in client config");
    }
    const useDualstackEndpoint = await input.useDualstackEndpoint();
    const useFipsEndpoint = await input.useFipsEndpoint();
    const { hostname } = (await input.regionInfoProvider(region, { useDualstackEndpoint, useFipsEndpoint })) ?? {};
    if (!hostname) {
        throw new Error("Cannot resolve hostname from client config");
    }
    return input.urlParser(`${tls ? "https:" : "http:"}//${hostname}`);
};


/***/ }),
/* 1270 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NODE_REGION_CONFIG_FILE_OPTIONS: () => (/* reexport safe */ _config__WEBPACK_IMPORTED_MODULE_0__.NODE_REGION_CONFIG_FILE_OPTIONS),
/* harmony export */   NODE_REGION_CONFIG_OPTIONS: () => (/* reexport safe */ _config__WEBPACK_IMPORTED_MODULE_0__.NODE_REGION_CONFIG_OPTIONS),
/* harmony export */   REGION_ENV_NAME: () => (/* reexport safe */ _config__WEBPACK_IMPORTED_MODULE_0__.REGION_ENV_NAME),
/* harmony export */   REGION_INI_NAME: () => (/* reexport safe */ _config__WEBPACK_IMPORTED_MODULE_0__.REGION_INI_NAME),
/* harmony export */   resolveRegionConfig: () => (/* reexport safe */ _resolveRegionConfig__WEBPACK_IMPORTED_MODULE_1__.resolveRegionConfig)
/* harmony export */ });
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1271);
/* harmony import */ var _resolveRegionConfig__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1272);




/***/ }),
/* 1271 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NODE_REGION_CONFIG_FILE_OPTIONS: () => (/* binding */ NODE_REGION_CONFIG_FILE_OPTIONS),
/* harmony export */   NODE_REGION_CONFIG_OPTIONS: () => (/* binding */ NODE_REGION_CONFIG_OPTIONS),
/* harmony export */   REGION_ENV_NAME: () => (/* binding */ REGION_ENV_NAME),
/* harmony export */   REGION_INI_NAME: () => (/* binding */ REGION_INI_NAME)
/* harmony export */ });
const REGION_ENV_NAME = "AWS_REGION";
const REGION_INI_NAME = "region";
const NODE_REGION_CONFIG_OPTIONS = {
    environmentVariableSelector: (env) => env[REGION_ENV_NAME],
    configFileSelector: (profile) => profile[REGION_INI_NAME],
    default: () => {
        throw new Error("Region is missing");
    },
};
const NODE_REGION_CONFIG_FILE_OPTIONS = {
    preferredFile: "credentials",
};


/***/ }),
/* 1272 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   resolveRegionConfig: () => (/* binding */ resolveRegionConfig)
/* harmony export */ });
/* harmony import */ var _getRealRegion__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1273);
/* harmony import */ var _isFipsRegion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1274);


const resolveRegionConfig = (input) => {
    const { region, useFipsEndpoint } = input;
    if (!region) {
        throw new Error("Region is missing");
    }
    return {
        ...input,
        region: async () => {
            if (typeof region === "string") {
                return (0,_getRealRegion__WEBPACK_IMPORTED_MODULE_0__.getRealRegion)(region);
            }
            const providedRegion = await region();
            return (0,_getRealRegion__WEBPACK_IMPORTED_MODULE_0__.getRealRegion)(providedRegion);
        },
        useFipsEndpoint: async () => {
            const providedRegion = typeof region === "string" ? region : await region();
            if ((0,_isFipsRegion__WEBPACK_IMPORTED_MODULE_1__.isFipsRegion)(providedRegion)) {
                return true;
            }
            return typeof useFipsEndpoint !== "function" ? Promise.resolve(!!useFipsEndpoint) : useFipsEndpoint();
        },
    };
};


/***/ }),
/* 1273 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getRealRegion: () => (/* binding */ getRealRegion)
/* harmony export */ });
/* harmony import */ var _isFipsRegion__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1274);

const getRealRegion = (region) => (0,_isFipsRegion__WEBPACK_IMPORTED_MODULE_0__.isFipsRegion)(region)
    ? ["fips-aws-global", "aws-fips"].includes(region)
        ? "us-east-1"
        : region.replace(/fips-(dkr-|prod-)?|-fips/, "")
    : region;


/***/ }),
/* 1274 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isFipsRegion: () => (/* binding */ isFipsRegion)
/* harmony export */ });
const isFipsRegion = (region) => typeof region === "string" && (region.startsWith("fips-") || region.endsWith("-fips"));


/***/ }),
/* 1275 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getRegionInfo: () => (/* reexport safe */ _getRegionInfo__WEBPACK_IMPORTED_MODULE_2__.getRegionInfo)
/* harmony export */ });
/* harmony import */ var _PartitionHash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1276);
/* harmony import */ var _RegionHash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1277);
/* harmony import */ var _getRegionInfo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1278);





/***/ }),
/* 1276 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),
/* 1277 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),
/* 1278 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getRegionInfo: () => (/* binding */ getRegionInfo)
/* harmony export */ });
/* harmony import */ var _getHostnameFromVariants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1279);
/* harmony import */ var _getResolvedHostname__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1280);
/* harmony import */ var _getResolvedPartition__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1281);
/* harmony import */ var _getResolvedSigningRegion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1282);




const getRegionInfo = (region, { useFipsEndpoint = false, useDualstackEndpoint = false, signingService, regionHash, partitionHash, }) => {
    const partition = (0,_getResolvedPartition__WEBPACK_IMPORTED_MODULE_2__.getResolvedPartition)(region, { partitionHash });
    const resolvedRegion = region in regionHash ? region : partitionHash[partition]?.endpoint ?? region;
    const hostnameOptions = { useFipsEndpoint, useDualstackEndpoint };
    const regionHostname = (0,_getHostnameFromVariants__WEBPACK_IMPORTED_MODULE_0__.getHostnameFromVariants)(regionHash[resolvedRegion]?.variants, hostnameOptions);
    const partitionHostname = (0,_getHostnameFromVariants__WEBPACK_IMPORTED_MODULE_0__.getHostnameFromVariants)(partitionHash[partition]?.variants, hostnameOptions);
    const hostname = (0,_getResolvedHostname__WEBPACK_IMPORTED_MODULE_1__.getResolvedHostname)(resolvedRegion, { regionHostname, partitionHostname });
    if (hostname === undefined) {
        throw new Error(`Endpoint resolution failed for: ${{ resolvedRegion, useFipsEndpoint, useDualstackEndpoint }}`);
    }
    const signingRegion = (0,_getResolvedSigningRegion__WEBPACK_IMPORTED_MODULE_3__.getResolvedSigningRegion)(hostname, {
        signingRegion: regionHash[resolvedRegion]?.signingRegion,
        regionRegex: partitionHash[partition].regionRegex,
        useFipsEndpoint,
    });
    return {
        partition,
        signingService,
        hostname,
        ...(signingRegion && { signingRegion }),
        ...(regionHash[resolvedRegion]?.signingService && {
            signingService: regionHash[resolvedRegion].signingService,
        }),
    };
};


/***/ }),
/* 1279 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getHostnameFromVariants: () => (/* binding */ getHostnameFromVariants)
/* harmony export */ });
const getHostnameFromVariants = (variants = [], { useFipsEndpoint, useDualstackEndpoint }) => variants.find(({ tags }) => useFipsEndpoint === tags.includes("fips") && useDualstackEndpoint === tags.includes("dualstack"))?.hostname;


/***/ }),
/* 1280 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getResolvedHostname: () => (/* binding */ getResolvedHostname)
/* harmony export */ });
const getResolvedHostname = (resolvedRegion, { regionHostname, partitionHostname }) => regionHostname
    ? regionHostname
    : partitionHostname
        ? partitionHostname.replace("{region}", resolvedRegion)
        : undefined;


/***/ }),
/* 1281 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getResolvedPartition: () => (/* binding */ getResolvedPartition)
/* harmony export */ });
const getResolvedPartition = (region, { partitionHash }) => Object.keys(partitionHash || {}).find((key) => partitionHash[key].regions.includes(region)) ?? "aws";


/***/ }),
/* 1282 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getResolvedSigningRegion: () => (/* binding */ getResolvedSigningRegion)
/* harmony export */ });
const getResolvedSigningRegion = (hostname, { signingRegion, regionRegex, useFipsEndpoint }) => {
    if (signingRegion) {
        return signingRegion;
    }
    else if (useFipsEndpoint) {
        const regionRegexJs = regionRegex.replace("\\\\", "\\").replace(/^\^/g, "\\.").replace(/\$$/g, "\\.");
        const regionRegexmatchArray = hostname.match(regionRegexJs);
        if (regionRegexmatchArray) {
            return regionRegexmatchArray[0].slice(1, -1);
        }
    }
};


/***/ }),
/* 1283 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DefaultIdentityProviderConfig: () => (/* reexport safe */ _util_identity_and_auth__WEBPACK_IMPORTED_MODULE_2__.DefaultIdentityProviderConfig),
/* harmony export */   EXPIRATION_MS: () => (/* reexport safe */ _util_identity_and_auth__WEBPACK_IMPORTED_MODULE_2__.EXPIRATION_MS),
/* harmony export */   HttpApiKeyAuthSigner: () => (/* reexport safe */ _util_identity_and_auth__WEBPACK_IMPORTED_MODULE_2__.HttpApiKeyAuthSigner),
/* harmony export */   HttpBearerAuthSigner: () => (/* reexport safe */ _util_identity_and_auth__WEBPACK_IMPORTED_MODULE_2__.HttpBearerAuthSigner),
/* harmony export */   NoAuthSigner: () => (/* reexport safe */ _util_identity_and_auth__WEBPACK_IMPORTED_MODULE_2__.NoAuthSigner),
/* harmony export */   RequestBuilder: () => (/* reexport safe */ _protocols_requestBuilder__WEBPACK_IMPORTED_MODULE_5__.RequestBuilder),
/* harmony export */   createIsIdentityExpiredFunction: () => (/* reexport safe */ _util_identity_and_auth__WEBPACK_IMPORTED_MODULE_2__.createIsIdentityExpiredFunction),
/* harmony export */   createPaginator: () => (/* reexport safe */ _pagination_createPaginator__WEBPACK_IMPORTED_MODULE_6__.createPaginator),
/* harmony export */   doesIdentityRequireRefresh: () => (/* reexport safe */ _util_identity_and_auth__WEBPACK_IMPORTED_MODULE_2__.doesIdentityRequireRefresh),
/* harmony export */   getHttpAuthSchemeEndpointRuleSetPlugin: () => (/* reexport safe */ _middleware_http_auth_scheme__WEBPACK_IMPORTED_MODULE_0__.getHttpAuthSchemeEndpointRuleSetPlugin),
/* harmony export */   getHttpAuthSchemePlugin: () => (/* reexport safe */ _middleware_http_auth_scheme__WEBPACK_IMPORTED_MODULE_0__.getHttpAuthSchemePlugin),
/* harmony export */   getHttpSigningPlugin: () => (/* reexport safe */ _middleware_http_signing__WEBPACK_IMPORTED_MODULE_1__.getHttpSigningPlugin),
/* harmony export */   getSmithyContext: () => (/* reexport safe */ _getSmithyContext__WEBPACK_IMPORTED_MODULE_3__.getSmithyContext),
/* harmony export */   httpAuthSchemeEndpointRuleSetMiddlewareOptions: () => (/* reexport safe */ _middleware_http_auth_scheme__WEBPACK_IMPORTED_MODULE_0__.httpAuthSchemeEndpointRuleSetMiddlewareOptions),
/* harmony export */   httpAuthSchemeMiddleware: () => (/* reexport safe */ _middleware_http_auth_scheme__WEBPACK_IMPORTED_MODULE_0__.httpAuthSchemeMiddleware),
/* harmony export */   httpAuthSchemeMiddlewareOptions: () => (/* reexport safe */ _middleware_http_auth_scheme__WEBPACK_IMPORTED_MODULE_0__.httpAuthSchemeMiddlewareOptions),
/* harmony export */   httpSigningMiddleware: () => (/* reexport safe */ _middleware_http_signing__WEBPACK_IMPORTED_MODULE_1__.httpSigningMiddleware),
/* harmony export */   httpSigningMiddlewareOptions: () => (/* reexport safe */ _middleware_http_signing__WEBPACK_IMPORTED_MODULE_1__.httpSigningMiddlewareOptions),
/* harmony export */   isIdentityExpired: () => (/* reexport safe */ _util_identity_and_auth__WEBPACK_IMPORTED_MODULE_2__.isIdentityExpired),
/* harmony export */   memoizeIdentityProvider: () => (/* reexport safe */ _util_identity_and_auth__WEBPACK_IMPORTED_MODULE_2__.memoizeIdentityProvider),
/* harmony export */   normalizeProvider: () => (/* reexport safe */ _normalizeProvider__WEBPACK_IMPORTED_MODULE_4__.normalizeProvider),
/* harmony export */   requestBuilder: () => (/* reexport safe */ _protocols_requestBuilder__WEBPACK_IMPORTED_MODULE_5__.requestBuilder)
/* harmony export */ });
/* harmony import */ var _middleware_http_auth_scheme__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1284);
/* harmony import */ var _middleware_http_signing__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1313);
/* harmony import */ var _util_identity_and_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1373);
/* harmony import */ var _getSmithyContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1380);
/* harmony import */ var _normalizeProvider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1381);
/* harmony import */ var _protocols_requestBuilder__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1382);
/* harmony import */ var _pagination_createPaginator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1383);









/***/ }),
/* 1284 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getHttpAuthSchemeEndpointRuleSetPlugin: () => (/* reexport safe */ _getHttpAuthSchemeEndpointRuleSetPlugin__WEBPACK_IMPORTED_MODULE_1__.getHttpAuthSchemeEndpointRuleSetPlugin),
/* harmony export */   getHttpAuthSchemePlugin: () => (/* reexport safe */ _getHttpAuthSchemePlugin__WEBPACK_IMPORTED_MODULE_2__.getHttpAuthSchemePlugin),
/* harmony export */   httpAuthSchemeEndpointRuleSetMiddlewareOptions: () => (/* reexport safe */ _getHttpAuthSchemeEndpointRuleSetPlugin__WEBPACK_IMPORTED_MODULE_1__.httpAuthSchemeEndpointRuleSetMiddlewareOptions),
/* harmony export */   httpAuthSchemeMiddleware: () => (/* reexport safe */ _httpAuthSchemeMiddleware__WEBPACK_IMPORTED_MODULE_0__.httpAuthSchemeMiddleware),
/* harmony export */   httpAuthSchemeMiddlewareOptions: () => (/* reexport safe */ _getHttpAuthSchemePlugin__WEBPACK_IMPORTED_MODULE_2__.httpAuthSchemeMiddlewareOptions)
/* harmony export */ });
/* harmony import */ var _httpAuthSchemeMiddleware__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1285);
/* harmony import */ var _getHttpAuthSchemeEndpointRuleSetPlugin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1286);
/* harmony import */ var _getHttpAuthSchemePlugin__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1312);





/***/ }),
/* 1285 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   httpAuthSchemeMiddleware: () => (/* binding */ httpAuthSchemeMiddleware)
/* harmony export */ });
/* harmony import */ var _smithy_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1128);
/* harmony import */ var _smithy_util_middleware__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1265);


function convertHttpAuthSchemesToMap(httpAuthSchemes) {
    const map = new Map();
    for (const scheme of httpAuthSchemes) {
        map.set(scheme.schemeId, scheme);
    }
    return map;
}
const httpAuthSchemeMiddleware = (config, mwOptions) => (next, context) => async (args) => {
    const options = config.httpAuthSchemeProvider(await mwOptions.httpAuthSchemeParametersProvider(config, context, args.input));
    const authSchemes = convertHttpAuthSchemesToMap(config.httpAuthSchemes);
    const smithyContext = (0,_smithy_util_middleware__WEBPACK_IMPORTED_MODULE_1__.getSmithyContext)(context);
    const failureReasons = [];
    for (const option of options) {
        const scheme = authSchemes.get(option.schemeId);
        if (!scheme) {
            failureReasons.push(`HttpAuthScheme \`${option.schemeId}\` was not enabled for this service.`);
            continue;
        }
        const identityProvider = scheme.identityProvider(await mwOptions.identityProviderConfigProvider(config));
        if (!identityProvider) {
            failureReasons.push(`HttpAuthScheme \`${option.schemeId}\` did not have an IdentityProvider configured.`);
            continue;
        }
        const { identityProperties = {}, signingProperties = {} } = option.propertiesExtractor?.(config, context) || {};
        option.identityProperties = Object.assign(option.identityProperties || {}, identityProperties);
        option.signingProperties = Object.assign(option.signingProperties || {}, signingProperties);
        smithyContext.selectedHttpAuthScheme = {
            httpAuthOption: option,
            identity: await identityProvider(option.identityProperties),
            signer: scheme.signer,
        };
        break;
    }
    if (!smithyContext.selectedHttpAuthScheme) {
        throw new Error(failureReasons.join("\n"));
    }
    return next(args);
};


/***/ }),
/* 1286 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getHttpAuthSchemeEndpointRuleSetPlugin: () => (/* binding */ getHttpAuthSchemeEndpointRuleSetPlugin),
/* harmony export */   httpAuthSchemeEndpointRuleSetMiddlewareOptions: () => (/* binding */ httpAuthSchemeEndpointRuleSetMiddlewareOptions)
/* harmony export */ });
/* harmony import */ var _smithy_middleware_endpoint__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1287);
/* harmony import */ var _httpAuthSchemeMiddleware__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1285);


const httpAuthSchemeEndpointRuleSetMiddlewareOptions = {
    step: "serialize",
    tags: ["HTTP_AUTH_SCHEME"],
    name: "httpAuthSchemeMiddleware",
    override: true,
    relation: "before",
    toMiddleware: _smithy_middleware_endpoint__WEBPACK_IMPORTED_MODULE_0__.endpointMiddlewareOptions.name,
};
const getHttpAuthSchemeEndpointRuleSetPlugin = (config, { httpAuthSchemeParametersProvider, identityProviderConfigProvider, }) => ({
    applyToStack: (clientStack) => {
        clientStack.addRelativeTo((0,_httpAuthSchemeMiddleware__WEBPACK_IMPORTED_MODULE_1__.httpAuthSchemeMiddleware)(config, {
            httpAuthSchemeParametersProvider,
            identityProviderConfigProvider,
        }), httpAuthSchemeEndpointRuleSetMiddlewareOptions);
    },
});


/***/ }),
/* 1287 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   endpointMiddleware: () => (/* reexport safe */ _endpointMiddleware__WEBPACK_IMPORTED_MODULE_1__.endpointMiddleware),
/* harmony export */   endpointMiddlewareOptions: () => (/* reexport safe */ _getEndpointPlugin__WEBPACK_IMPORTED_MODULE_2__.endpointMiddlewareOptions),
/* harmony export */   getEndpointFromInstructions: () => (/* reexport safe */ _adaptors__WEBPACK_IMPORTED_MODULE_0__.getEndpointFromInstructions),
/* harmony export */   getEndpointPlugin: () => (/* reexport safe */ _getEndpointPlugin__WEBPACK_IMPORTED_MODULE_2__.getEndpointPlugin),
/* harmony export */   resolveEndpointConfig: () => (/* reexport safe */ _resolveEndpointConfig__WEBPACK_IMPORTED_MODULE_3__.resolveEndpointConfig),
/* harmony export */   resolveParams: () => (/* reexport safe */ _adaptors__WEBPACK_IMPORTED_MODULE_0__.resolveParams),
/* harmony export */   toEndpointV1: () => (/* reexport safe */ _adaptors__WEBPACK_IMPORTED_MODULE_0__.toEndpointV1)
/* harmony export */ });
/* harmony import */ var _adaptors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1288);
/* harmony import */ var _endpointMiddleware__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1304);
/* harmony import */ var _getEndpointPlugin__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1305);
/* harmony import */ var _resolveEndpointConfig__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1310);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1311);







/***/ }),
/* 1288 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getEndpointFromInstructions: () => (/* reexport safe */ _getEndpointFromInstructions__WEBPACK_IMPORTED_MODULE_0__.getEndpointFromInstructions),
/* harmony export */   resolveParams: () => (/* reexport safe */ _getEndpointFromInstructions__WEBPACK_IMPORTED_MODULE_0__.resolveParams),
/* harmony export */   toEndpointV1: () => (/* reexport safe */ _toEndpointV1__WEBPACK_IMPORTED_MODULE_1__.toEndpointV1)
/* harmony export */ });
/* harmony import */ var _getEndpointFromInstructions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1289);
/* harmony import */ var _toEndpointV1__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1301);




/***/ }),
/* 1289 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getEndpointFromInstructions: () => (/* binding */ getEndpointFromInstructions),
/* harmony export */   resolveParams: () => (/* binding */ resolveParams)
/* harmony export */ });
/* harmony import */ var _service_customizations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1290);
/* harmony import */ var _createConfigValueProvider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1292);
/* harmony import */ var _getEndpointFromConfig__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1293);
/* harmony import */ var _toEndpointV1__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1301);




const getEndpointFromInstructions = async (commandInput, instructionsSupplier, clientConfig, context) => {
    if (!clientConfig.endpoint) {
        const endpointFromConfig = await (0,_getEndpointFromConfig__WEBPACK_IMPORTED_MODULE_2__.getEndpointFromConfig)(clientConfig.serviceId || "");
        if (endpointFromConfig) {
            clientConfig.endpoint = () => Promise.resolve((0,_toEndpointV1__WEBPACK_IMPORTED_MODULE_3__.toEndpointV1)(endpointFromConfig));
        }
    }
    const endpointParams = await resolveParams(commandInput, instructionsSupplier, clientConfig);
    if (typeof clientConfig.endpointProvider !== "function") {
        throw new Error("config.endpointProvider is not set.");
    }
    const endpoint = clientConfig.endpointProvider(endpointParams, context);
    return endpoint;
};
const resolveParams = async (commandInput, instructionsSupplier, clientConfig) => {
    const endpointParams = {};
    const instructions = instructionsSupplier?.getEndpointParameterInstructions?.() || {};
    for (const [name, instruction] of Object.entries(instructions)) {
        switch (instruction.type) {
            case "staticContextParams":
                endpointParams[name] = instruction.value;
                break;
            case "contextParams":
                endpointParams[name] = commandInput[instruction.name];
                break;
            case "clientContextParams":
            case "builtInParams":
                endpointParams[name] = await (0,_createConfigValueProvider__WEBPACK_IMPORTED_MODULE_1__.createConfigValueProvider)(instruction.name, name, clientConfig)();
                break;
            default:
                throw new Error("Unrecognized endpoint parameter instruction: " + JSON.stringify(instruction));
        }
    }
    if (Object.keys(instructions).length === 0) {
        Object.assign(endpointParams, clientConfig);
    }
    if (String(clientConfig.serviceId).toLowerCase() === "s3") {
        await (0,_service_customizations__WEBPACK_IMPORTED_MODULE_0__.resolveParamsForS3)(endpointParams);
    }
    return endpointParams;
};


/***/ }),
/* 1290 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DOT_PATTERN: () => (/* reexport safe */ _s3__WEBPACK_IMPORTED_MODULE_0__.DOT_PATTERN),
/* harmony export */   S3_HOSTNAME_PATTERN: () => (/* reexport safe */ _s3__WEBPACK_IMPORTED_MODULE_0__.S3_HOSTNAME_PATTERN),
/* harmony export */   isArnBucketName: () => (/* reexport safe */ _s3__WEBPACK_IMPORTED_MODULE_0__.isArnBucketName),
/* harmony export */   isDnsCompatibleBucketName: () => (/* reexport safe */ _s3__WEBPACK_IMPORTED_MODULE_0__.isDnsCompatibleBucketName),
/* harmony export */   resolveParamsForS3: () => (/* reexport safe */ _s3__WEBPACK_IMPORTED_MODULE_0__.resolveParamsForS3)
/* harmony export */ });
/* harmony import */ var _s3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1291);



/***/ }),
/* 1291 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DOT_PATTERN: () => (/* binding */ DOT_PATTERN),
/* harmony export */   S3_HOSTNAME_PATTERN: () => (/* binding */ S3_HOSTNAME_PATTERN),
/* harmony export */   isArnBucketName: () => (/* binding */ isArnBucketName),
/* harmony export */   isDnsCompatibleBucketName: () => (/* binding */ isDnsCompatibleBucketName),
/* harmony export */   resolveParamsForS3: () => (/* binding */ resolveParamsForS3)
/* harmony export */ });
const resolveParamsForS3 = async (endpointParams) => {
    const bucket = endpointParams?.Bucket || "";
    if (typeof endpointParams.Bucket === "string") {
        endpointParams.Bucket = bucket.replace(/#/g, encodeURIComponent("#")).replace(/\?/g, encodeURIComponent("?"));
    }
    if (isArnBucketName(bucket)) {
        if (endpointParams.ForcePathStyle === true) {
            throw new Error("Path-style addressing cannot be used with ARN buckets");
        }
    }
    else if (!isDnsCompatibleBucketName(bucket) ||
        (bucket.indexOf(".") !== -1 && !String(endpointParams.Endpoint).startsWith("http:")) ||
        bucket.toLowerCase() !== bucket ||
        bucket.length < 3) {
        endpointParams.ForcePathStyle = true;
    }
    if (endpointParams.DisableMultiRegionAccessPoints) {
        endpointParams.disableMultiRegionAccessPoints = true;
        endpointParams.DisableMRAP = true;
    }
    return endpointParams;
};
const DOMAIN_PATTERN = /^[a-z0-9][a-z0-9\.\-]{1,61}[a-z0-9]$/;
const IP_ADDRESS_PATTERN = /(\d+\.){3}\d+/;
const DOTS_PATTERN = /\.\./;
const DOT_PATTERN = /\./;
const S3_HOSTNAME_PATTERN = /^(.+\.)?s3(-fips)?(\.dualstack)?[.-]([a-z0-9-]+)\./;
const isDnsCompatibleBucketName = (bucketName) => DOMAIN_PATTERN.test(bucketName) && !IP_ADDRESS_PATTERN.test(bucketName) && !DOTS_PATTERN.test(bucketName);
const isArnBucketName = (bucketName) => {
    const [arn, partition, service, , , bucket] = bucketName.split(":");
    const isArn = arn === "arn" && bucketName.split(":").length >= 6;
    const isValidArn = Boolean(isArn && partition && service && bucket);
    if (isArn && !isValidArn) {
        throw new Error(`Invalid ARN: ${bucketName} was an invalid ARN.`);
    }
    return isValidArn;
};


/***/ }),
/* 1292 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createConfigValueProvider: () => (/* binding */ createConfigValueProvider)
/* harmony export */ });
const createConfigValueProvider = (configKey, canonicalEndpointParamKey, config) => {
    const configProvider = async () => {
        const configValue = config[configKey] ?? config[canonicalEndpointParamKey];
        if (typeof configValue === "function") {
            return configValue();
        }
        return configValue;
    };
    if (configKey === "credentialScope" || canonicalEndpointParamKey === "CredentialScope") {
        return async () => {
            const credentials = typeof config.credentials === "function" ? await config.credentials() : config.credentials;
            const configValue = credentials?.credentialScope ?? credentials?.CredentialScope;
            return configValue;
        };
    }
    if (configKey === "endpoint" || canonicalEndpointParamKey === "endpoint") {
        return async () => {
            const endpoint = await configProvider();
            if (endpoint && typeof endpoint === "object") {
                if ("url" in endpoint) {
                    return endpoint.url.href;
                }
                if ("hostname" in endpoint) {
                    const { protocol, hostname, port, path } = endpoint;
                    return `${protocol}//${hostname}${port ? ":" + port : ""}${path}`;
                }
            }
            return endpoint;
        };
    }
    return configProvider;
};


/***/ }),
/* 1293 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getEndpointFromConfig: () => (/* binding */ getEndpointFromConfig)
/* harmony export */ });
/* harmony import */ var _smithy_node_config_provider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1294);
/* harmony import */ var _getEndpointUrlConfig__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1300);


const getEndpointFromConfig = async (serviceId) => (0,_smithy_node_config_provider__WEBPACK_IMPORTED_MODULE_0__.loadConfig)((0,_getEndpointUrlConfig__WEBPACK_IMPORTED_MODULE_1__.getEndpointUrlConfig)(serviceId))();


/***/ }),
/* 1294 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   loadConfig: () => (/* reexport safe */ _configLoader__WEBPACK_IMPORTED_MODULE_0__.loadConfig)
/* harmony export */ });
/* harmony import */ var _configLoader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1295);



/***/ }),
/* 1295 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   loadConfig: () => (/* binding */ loadConfig)
/* harmony export */ });
/* harmony import */ var _smithy_property_provider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(195);
/* harmony import */ var _fromEnv__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1296);
/* harmony import */ var _fromSharedConfigFiles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1298);
/* harmony import */ var _fromStatic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1299);




const loadConfig = ({ environmentVariableSelector, configFileSelector, default: defaultValue }, configuration = {}) => (0,_smithy_property_provider__WEBPACK_IMPORTED_MODULE_0__.memoize)((0,_smithy_property_provider__WEBPACK_IMPORTED_MODULE_0__.chain)((0,_fromEnv__WEBPACK_IMPORTED_MODULE_1__.fromEnv)(environmentVariableSelector), (0,_fromSharedConfigFiles__WEBPACK_IMPORTED_MODULE_2__.fromSharedConfigFiles)(configFileSelector, configuration), (0,_fromStatic__WEBPACK_IMPORTED_MODULE_3__.fromStatic)(defaultValue)));


/***/ }),
/* 1296 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   fromEnv: () => (/* binding */ fromEnv)
/* harmony export */ });
/* harmony import */ var _smithy_property_provider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(195);
/* harmony import */ var _getSelectorName__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1297);


const fromEnv = (envVarSelector, logger) => async () => {
    try {
        const config = envVarSelector(process.env);
        if (config === undefined) {
            throw new Error();
        }
        return config;
    }
    catch (e) {
        throw new _smithy_property_provider__WEBPACK_IMPORTED_MODULE_0__.CredentialsProviderError(e.message || `Not found in ENV: ${(0,_getSelectorName__WEBPACK_IMPORTED_MODULE_1__.getSelectorName)(envVarSelector.toString())}`, { logger });
    }
};


/***/ }),
/* 1297 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getSelectorName: () => (/* binding */ getSelectorName)
/* harmony export */ });
function getSelectorName(functionString) {
    try {
        const constants = new Set(Array.from(functionString.match(/([A-Z_]){3,}/g) ?? []));
        constants.delete("CONFIG");
        constants.delete("CONFIG_PREFIX_SEPARATOR");
        constants.delete("ENV");
        return [...constants].join(", ");
    }
    catch (e) {
        return functionString;
    }
}


/***/ }),
/* 1298 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   fromSharedConfigFiles: () => (/* binding */ fromSharedConfigFiles)
/* harmony export */ });
/* harmony import */ var _smithy_property_provider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(195);
/* harmony import */ var _smithy_shared_ini_file_loader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(205);
/* harmony import */ var _getSelectorName__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1297);



const fromSharedConfigFiles = (configSelector, { preferredFile = "config", ...init } = {}) => async () => {
    const profile = (0,_smithy_shared_ini_file_loader__WEBPACK_IMPORTED_MODULE_1__.getProfileName)(init);
    const { configFile, credentialsFile } = await (0,_smithy_shared_ini_file_loader__WEBPACK_IMPORTED_MODULE_1__.loadSharedConfigFiles)(init);
    const profileFromCredentials = credentialsFile[profile] || {};
    const profileFromConfig = configFile[profile] || {};
    const mergedProfile = preferredFile === "config"
        ? { ...profileFromCredentials, ...profileFromConfig }
        : { ...profileFromConfig, ...profileFromCredentials };
    try {
        const cfgFile = preferredFile === "config" ? configFile : credentialsFile;
        const configValue = configSelector(mergedProfile, cfgFile);
        if (configValue === undefined) {
            throw new Error();
        }
        return configValue;
    }
    catch (e) {
        throw new _smithy_property_provider__WEBPACK_IMPORTED_MODULE_0__.CredentialsProviderError(e.message || `Not found in config files w/ profile [${profile}]: ${(0,_getSelectorName__WEBPACK_IMPORTED_MODULE_2__.getSelectorName)(configSelector.toString())}`, { logger: init.logger });
    }
};


/***/ }),
/* 1299 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   fromStatic: () => (/* binding */ fromStatic)
/* harmony export */ });
/* harmony import */ var _smithy_property_provider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(195);

const isFunction = (func) => typeof func === "function";
const fromStatic = (defaultValue) => isFunction(defaultValue) ? async () => await defaultValue() : (0,_smithy_property_provider__WEBPACK_IMPORTED_MODULE_0__.fromStatic)(defaultValue);


/***/ }),
/* 1300 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getEndpointUrlConfig: () => (/* binding */ getEndpointUrlConfig)
/* harmony export */ });
/* harmony import */ var _smithy_shared_ini_file_loader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(205);

const ENV_ENDPOINT_URL = "AWS_ENDPOINT_URL";
const CONFIG_ENDPOINT_URL = "endpoint_url";
const getEndpointUrlConfig = (serviceId) => ({
    environmentVariableSelector: (env) => {
        const serviceSuffixParts = serviceId.split(" ").map((w) => w.toUpperCase());
        const serviceEndpointUrl = env[[ENV_ENDPOINT_URL, ...serviceSuffixParts].join("_")];
        if (serviceEndpointUrl)
            return serviceEndpointUrl;
        const endpointUrl = env[ENV_ENDPOINT_URL];
        if (endpointUrl)
            return endpointUrl;
        return undefined;
    },
    configFileSelector: (profile, config) => {
        if (config && profile.services) {
            const servicesSection = config[["services", profile.services].join(_smithy_shared_ini_file_loader__WEBPACK_IMPORTED_MODULE_0__.CONFIG_PREFIX_SEPARATOR)];
            if (servicesSection) {
                const servicePrefixParts = serviceId.split(" ").map((w) => w.toLowerCase());
                const endpointUrl = servicesSection[[servicePrefixParts.join("_"), CONFIG_ENDPOINT_URL].join(_smithy_shared_ini_file_loader__WEBPACK_IMPORTED_MODULE_0__.CONFIG_PREFIX_SEPARATOR)];
                if (endpointUrl)
                    return endpointUrl;
            }
        }
        const endpointUrl = profile[CONFIG_ENDPOINT_URL];
        if (endpointUrl)
            return endpointUrl;
        return undefined;
    },
    default: undefined,
});


/***/ }),
/* 1301 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   toEndpointV1: () => (/* binding */ toEndpointV1)
/* harmony export */ });
/* harmony import */ var _smithy_url_parser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1302);

const toEndpointV1 = (endpoint) => {
    if (typeof endpoint === "object") {
        if ("url" in endpoint) {
            return (0,_smithy_url_parser__WEBPACK_IMPORTED_MODULE_0__.parseUrl)(endpoint.url);
        }
        return endpoint;
    }
    return (0,_smithy_url_parser__WEBPACK_IMPORTED_MODULE_0__.parseUrl)(endpoint);
};


/***/ }),
/* 1302 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   parseUrl: () => (/* binding */ parseUrl)
/* harmony export */ });
/* harmony import */ var _smithy_querystring_parser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1303);

const parseUrl = (url) => {
    if (typeof url === "string") {
        return parseUrl(new URL(url));
    }
    const { hostname, pathname, port, protocol, search } = url;
    let query;
    if (search) {
        query = (0,_smithy_querystring_parser__WEBPACK_IMPORTED_MODULE_0__.parseQueryString)(search);
    }
    return {
        hostname,
        port: port ? parseInt(port) : undefined,
        protocol,
        path: pathname,
        query,
    };
};


/***/ }),
/* 1303 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   parseQueryString: () => (/* binding */ parseQueryString)
/* harmony export */ });
function parseQueryString(querystring) {
    const query = {};
    querystring = querystring.replace(/^\?/, "");
    if (querystring) {
        for (const pair of querystring.split("&")) {
            let [key, value = null] = pair.split("=");
            key = decodeURIComponent(key);
            if (value) {
                value = decodeURIComponent(value);
            }
            if (!(key in query)) {
                query[key] = value;
            }
            else if (Array.isArray(query[key])) {
                query[key].push(value);
            }
            else {
                query[key] = [query[key], value];
            }
        }
    }
    return query;
}


/***/ }),
/* 1304 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   endpointMiddleware: () => (/* binding */ endpointMiddleware)
/* harmony export */ });
/* harmony import */ var _smithy_util_middleware__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1265);
/* harmony import */ var _adaptors_getEndpointFromInstructions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1289);


const endpointMiddleware = ({ config, instructions, }) => {
    return (next, context) => async (args) => {
        const endpoint = await (0,_adaptors_getEndpointFromInstructions__WEBPACK_IMPORTED_MODULE_1__.getEndpointFromInstructions)(args.input, {
            getEndpointParameterInstructions() {
                return instructions;
            },
        }, { ...config }, context);
        context.endpointV2 = endpoint;
        context.authSchemes = endpoint.properties?.authSchemes;
        const authScheme = context.authSchemes?.[0];
        if (authScheme) {
            context["signing_region"] = authScheme.signingRegion;
            context["signing_service"] = authScheme.signingName;
            const smithyContext = (0,_smithy_util_middleware__WEBPACK_IMPORTED_MODULE_0__.getSmithyContext)(context);
            const httpAuthOption = smithyContext?.selectedHttpAuthScheme?.httpAuthOption;
            if (httpAuthOption) {
                httpAuthOption.signingProperties = Object.assign(httpAuthOption.signingProperties || {}, {
                    signing_region: authScheme.signingRegion,
                    signingRegion: authScheme.signingRegion,
                    signing_service: authScheme.signingName,
                    signingName: authScheme.signingName,
                    signingRegionSet: authScheme.signingRegionSet,
                }, authScheme.properties);
            }
        }
        return next({
            ...args,
        });
    };
};


/***/ }),
/* 1305 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   endpointMiddlewareOptions: () => (/* binding */ endpointMiddlewareOptions),
/* harmony export */   getEndpointPlugin: () => (/* binding */ getEndpointPlugin)
/* harmony export */ });
/* harmony import */ var _smithy_middleware_serde__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1306);
/* harmony import */ var _endpointMiddleware__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1304);


const endpointMiddlewareOptions = {
    step: "serialize",
    tags: ["ENDPOINT_PARAMETERS", "ENDPOINT_V2", "ENDPOINT"],
    name: "endpointV2Middleware",
    override: true,
    relation: "before",
    toMiddleware: _smithy_middleware_serde__WEBPACK_IMPORTED_MODULE_0__.serializerMiddlewareOption.name,
};
const getEndpointPlugin = (config, instructions) => ({
    applyToStack: (clientStack) => {
        clientStack.addRelativeTo((0,_endpointMiddleware__WEBPACK_IMPORTED_MODULE_1__.endpointMiddleware)({
            config,
            instructions,
        }), endpointMiddlewareOptions);
    },
});


/***/ }),
/* 1306 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   deserializerMiddleware: () => (/* reexport safe */ _deserializerMiddleware__WEBPACK_IMPORTED_MODULE_0__.deserializerMiddleware),
/* harmony export */   deserializerMiddlewareOption: () => (/* reexport safe */ _serdePlugin__WEBPACK_IMPORTED_MODULE_1__.deserializerMiddlewareOption),
/* harmony export */   getSerdePlugin: () => (/* reexport safe */ _serdePlugin__WEBPACK_IMPORTED_MODULE_1__.getSerdePlugin),
/* harmony export */   serializerMiddleware: () => (/* reexport safe */ _serializerMiddleware__WEBPACK_IMPORTED_MODULE_2__.serializerMiddleware),
/* harmony export */   serializerMiddlewareOption: () => (/* reexport safe */ _serdePlugin__WEBPACK_IMPORTED_MODULE_1__.serializerMiddlewareOption)
/* harmony export */ });
/* harmony import */ var _deserializerMiddleware__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1307);
/* harmony import */ var _serdePlugin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1308);
/* harmony import */ var _serializerMiddleware__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1309);





/***/ }),
/* 1307 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   deserializerMiddleware: () => (/* binding */ deserializerMiddleware)
/* harmony export */ });
const deserializerMiddleware = (options, deserializer) => (next) => async (args) => {
    const { response } = await next(args);
    try {
        const parsed = await deserializer(response, options);
        return {
            response,
            output: parsed,
        };
    }
    catch (error) {
        Object.defineProperty(error, "$response", {
            value: response,
        });
        if (!("$metadata" in error)) {
            const hint = `Deserialization error: to see the raw response, inspect the hidden field {error}.$response on this object.`;
            error.message += "\n  " + hint;
            if (typeof error.$responseBodyText !== "undefined") {
                if (error.$response) {
                    error.$response.body = error.$responseBodyText;
                }
            }
        }
        throw error;
    }
};


/***/ }),
/* 1308 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   deserializerMiddlewareOption: () => (/* binding */ deserializerMiddlewareOption),
/* harmony export */   getSerdePlugin: () => (/* binding */ getSerdePlugin),
/* harmony export */   serializerMiddlewareOption: () => (/* binding */ serializerMiddlewareOption)
/* harmony export */ });
/* harmony import */ var _deserializerMiddleware__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1307);
/* harmony import */ var _serializerMiddleware__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1309);


const deserializerMiddlewareOption = {
    name: "deserializerMiddleware",
    step: "deserialize",
    tags: ["DESERIALIZER"],
    override: true,
};
const serializerMiddlewareOption = {
    name: "serializerMiddleware",
    step: "serialize",
    tags: ["SERIALIZER"],
    override: true,
};
function getSerdePlugin(config, serializer, deserializer) {
    return {
        applyToStack: (commandStack) => {
            commandStack.add((0,_deserializerMiddleware__WEBPACK_IMPORTED_MODULE_0__.deserializerMiddleware)(config, deserializer), deserializerMiddlewareOption);
            commandStack.add((0,_serializerMiddleware__WEBPACK_IMPORTED_MODULE_1__.serializerMiddleware)(config, serializer), serializerMiddlewareOption);
        },
    };
}


/***/ }),
/* 1309 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   serializerMiddleware: () => (/* binding */ serializerMiddleware)
/* harmony export */ });
const serializerMiddleware = (options, serializer) => (next, context) => async (args) => {
    const endpoint = context.endpointV2?.url && options.urlParser
        ? async () => options.urlParser(context.endpointV2.url)
        : options.endpoint;
    if (!endpoint) {
        throw new Error("No valid endpoint provider available.");
    }
    const request = await serializer(args.input, { ...options, endpoint });
    return next({
        ...args,
        request,
    });
};


/***/ }),
/* 1310 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   resolveEndpointConfig: () => (/* binding */ resolveEndpointConfig)
/* harmony export */ });
/* harmony import */ var _smithy_util_middleware__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1265);
/* harmony import */ var _adaptors_toEndpointV1__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1301);


const resolveEndpointConfig = (input) => {
    const tls = input.tls ?? true;
    const { endpoint } = input;
    const customEndpointProvider = endpoint != null ? async () => (0,_adaptors_toEndpointV1__WEBPACK_IMPORTED_MODULE_1__.toEndpointV1)(await (0,_smithy_util_middleware__WEBPACK_IMPORTED_MODULE_0__.normalizeProvider)(endpoint)()) : undefined;
    const isCustomEndpoint = !!endpoint;
    return {
        ...input,
        endpoint: customEndpointProvider,
        tls,
        isCustomEndpoint,
        useDualstackEndpoint: (0,_smithy_util_middleware__WEBPACK_IMPORTED_MODULE_0__.normalizeProvider)(input.useDualstackEndpoint ?? false),
        useFipsEndpoint: (0,_smithy_util_middleware__WEBPACK_IMPORTED_MODULE_0__.normalizeProvider)(input.useFipsEndpoint ?? false),
    };
};


/***/ }),
/* 1311 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),
/* 1312 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getHttpAuthSchemePlugin: () => (/* binding */ getHttpAuthSchemePlugin),
/* harmony export */   httpAuthSchemeMiddlewareOptions: () => (/* binding */ httpAuthSchemeMiddlewareOptions)
/* harmony export */ });
/* harmony import */ var _smithy_middleware_serde__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1306);
/* harmony import */ var _httpAuthSchemeMiddleware__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1285);


const httpAuthSchemeMiddlewareOptions = {
    step: "serialize",
    tags: ["HTTP_AUTH_SCHEME"],
    name: "httpAuthSchemeMiddleware",
    override: true,
    relation: "before",
    toMiddleware: _smithy_middleware_serde__WEBPACK_IMPORTED_MODULE_0__.serializerMiddlewareOption.name,
};
const getHttpAuthSchemePlugin = (config, { httpAuthSchemeParametersProvider, identityProviderConfigProvider, }) => ({
    applyToStack: (clientStack) => {
        clientStack.addRelativeTo((0,_httpAuthSchemeMiddleware__WEBPACK_IMPORTED_MODULE_1__.httpAuthSchemeMiddleware)(config, {
            httpAuthSchemeParametersProvider,
            identityProviderConfigProvider,
        }), httpAuthSchemeMiddlewareOptions);
    },
});


/***/ }),
/* 1313 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getHttpSigningPlugin: () => (/* reexport safe */ _getHttpSigningMiddleware__WEBPACK_IMPORTED_MODULE_1__.getHttpSigningPlugin),
/* harmony export */   httpSigningMiddleware: () => (/* reexport safe */ _httpSigningMiddleware__WEBPACK_IMPORTED_MODULE_0__.httpSigningMiddleware),
/* harmony export */   httpSigningMiddlewareOptions: () => (/* reexport safe */ _getHttpSigningMiddleware__WEBPACK_IMPORTED_MODULE_1__.httpSigningMiddlewareOptions)
/* harmony export */ });
/* harmony import */ var _httpSigningMiddleware__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1314);
/* harmony import */ var _getHttpSigningMiddleware__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1315);




/***/ }),
/* 1314 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   httpSigningMiddleware: () => (/* binding */ httpSigningMiddleware)
/* harmony export */ });
/* harmony import */ var _smithy_protocol_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1124);
/* harmony import */ var _smithy_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1128);
/* harmony import */ var _smithy_util_middleware__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1265);



const defaultErrorHandler = (signingProperties) => (error) => {
    throw error;
};
const defaultSuccessHandler = (httpResponse, signingProperties) => { };
const httpSigningMiddleware = (config) => (next, context) => async (args) => {
    if (!_smithy_protocol_http__WEBPACK_IMPORTED_MODULE_0__.HttpRequest.isInstance(args.request)) {
        return next(args);
    }
    const smithyContext = (0,_smithy_util_middleware__WEBPACK_IMPORTED_MODULE_2__.getSmithyContext)(context);
    const scheme = smithyContext.selectedHttpAuthScheme;
    if (!scheme) {
        throw new Error(`No HttpAuthScheme was selected: unable to sign request`);
    }
    const { httpAuthOption: { signingProperties = {} }, identity, signer, } = scheme;
    const output = await next({
        ...args,
        request: await signer.sign(args.request, identity, signingProperties),
    }).catch((signer.errorHandler || defaultErrorHandler)(signingProperties));
    (signer.successHandler || defaultSuccessHandler)(output.response, signingProperties);
    return output;
};


/***/ }),
/* 1315 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getHttpSigningPlugin: () => (/* binding */ getHttpSigningPlugin),
/* harmony export */   httpSigningMiddlewareOptions: () => (/* binding */ httpSigningMiddlewareOptions)
/* harmony export */ });
/* harmony import */ var _smithy_middleware_retry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1316);
/* harmony import */ var _httpSigningMiddleware__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1314);


const httpSigningMiddlewareOptions = {
    step: "finalizeRequest",
    tags: ["HTTP_SIGNING"],
    name: "httpSigningMiddleware",
    aliases: ["apiKeyMiddleware", "tokenMiddleware", "awsAuthMiddleware"],
    override: true,
    relation: "after",
    toMiddleware: _smithy_middleware_retry__WEBPACK_IMPORTED_MODULE_0__.retryMiddlewareOptions.name,
};
const getHttpSigningPlugin = (config) => ({
    applyToStack: (clientStack) => {
        clientStack.addRelativeTo((0,_httpSigningMiddleware__WEBPACK_IMPORTED_MODULE_1__.httpSigningMiddleware)(config), httpSigningMiddlewareOptions);
    },
});


/***/ }),
/* 1316 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AdaptiveRetryStrategy: () => (/* reexport safe */ _AdaptiveRetryStrategy__WEBPACK_IMPORTED_MODULE_0__.AdaptiveRetryStrategy),
/* harmony export */   CONFIG_MAX_ATTEMPTS: () => (/* reexport safe */ _configurations__WEBPACK_IMPORTED_MODULE_2__.CONFIG_MAX_ATTEMPTS),
/* harmony export */   CONFIG_RETRY_MODE: () => (/* reexport safe */ _configurations__WEBPACK_IMPORTED_MODULE_2__.CONFIG_RETRY_MODE),
/* harmony export */   ENV_MAX_ATTEMPTS: () => (/* reexport safe */ _configurations__WEBPACK_IMPORTED_MODULE_2__.ENV_MAX_ATTEMPTS),
/* harmony export */   ENV_RETRY_MODE: () => (/* reexport safe */ _configurations__WEBPACK_IMPORTED_MODULE_2__.ENV_RETRY_MODE),
/* harmony export */   NODE_MAX_ATTEMPT_CONFIG_OPTIONS: () => (/* reexport safe */ _configurations__WEBPACK_IMPORTED_MODULE_2__.NODE_MAX_ATTEMPT_CONFIG_OPTIONS),
/* harmony export */   NODE_RETRY_MODE_CONFIG_OPTIONS: () => (/* reexport safe */ _configurations__WEBPACK_IMPORTED_MODULE_2__.NODE_RETRY_MODE_CONFIG_OPTIONS),
/* harmony export */   StandardRetryStrategy: () => (/* reexport safe */ _StandardRetryStrategy__WEBPACK_IMPORTED_MODULE_1__.StandardRetryStrategy),
/* harmony export */   defaultDelayDecider: () => (/* reexport safe */ _delayDecider__WEBPACK_IMPORTED_MODULE_3__.defaultDelayDecider),
/* harmony export */   defaultRetryDecider: () => (/* reexport safe */ _retryDecider__WEBPACK_IMPORTED_MODULE_5__.defaultRetryDecider),
/* harmony export */   getOmitRetryHeadersPlugin: () => (/* reexport safe */ _omitRetryHeadersMiddleware__WEBPACK_IMPORTED_MODULE_4__.getOmitRetryHeadersPlugin),
/* harmony export */   getRetryAfterHint: () => (/* reexport safe */ _retryMiddleware__WEBPACK_IMPORTED_MODULE_6__.getRetryAfterHint),
/* harmony export */   getRetryPlugin: () => (/* reexport safe */ _retryMiddleware__WEBPACK_IMPORTED_MODULE_6__.getRetryPlugin),
/* harmony export */   omitRetryHeadersMiddleware: () => (/* reexport safe */ _omitRetryHeadersMiddleware__WEBPACK_IMPORTED_MODULE_4__.omitRetryHeadersMiddleware),
/* harmony export */   omitRetryHeadersMiddlewareOptions: () => (/* reexport safe */ _omitRetryHeadersMiddleware__WEBPACK_IMPORTED_MODULE_4__.omitRetryHeadersMiddlewareOptions),
/* harmony export */   resolveRetryConfig: () => (/* reexport safe */ _configurations__WEBPACK_IMPORTED_MODULE_2__.resolveRetryConfig),
/* harmony export */   retryMiddleware: () => (/* reexport safe */ _retryMiddleware__WEBPACK_IMPORTED_MODULE_6__.retryMiddleware),
/* harmony export */   retryMiddlewareOptions: () => (/* reexport safe */ _retryMiddleware__WEBPACK_IMPORTED_MODULE_6__.retryMiddlewareOptions)
/* harmony export */ });
/* harmony import */ var _AdaptiveRetryStrategy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1317);
/* harmony import */ var _StandardRetryStrategy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1330);
/* harmony import */ var _configurations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1341);
/* harmony import */ var _delayDecider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1332);
/* harmony import */ var _omitRetryHeadersMiddleware__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1342);
/* harmony import */ var _retryDecider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1333);
/* harmony import */ var _retryMiddleware__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1343);









/***/ }),
/* 1317 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AdaptiveRetryStrategy: () => (/* binding */ AdaptiveRetryStrategy)
/* harmony export */ });
/* harmony import */ var _smithy_util_retry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1318);
/* harmony import */ var _StandardRetryStrategy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1330);


class AdaptiveRetryStrategy extends _StandardRetryStrategy__WEBPACK_IMPORTED_MODULE_1__.StandardRetryStrategy {
    constructor(maxAttemptsProvider, options) {
        const { rateLimiter, ...superOptions } = options ?? {};
        super(maxAttemptsProvider, superOptions);
        this.rateLimiter = rateLimiter ?? new _smithy_util_retry__WEBPACK_IMPORTED_MODULE_0__.DefaultRateLimiter();
        this.mode = _smithy_util_retry__WEBPACK_IMPORTED_MODULE_0__.RETRY_MODES.ADAPTIVE;
    }
    async retry(next, args) {
        return super.retry(next, args, {
            beforeRequest: async () => {
                return this.rateLimiter.getSendToken();
            },
            afterRequest: (response) => {
                this.rateLimiter.updateClientSendingRate(response);
            },
        });
    }
}


/***/ }),
/* 1318 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AdaptiveRetryStrategy: () => (/* reexport safe */ _AdaptiveRetryStrategy__WEBPACK_IMPORTED_MODULE_0__.AdaptiveRetryStrategy),
/* harmony export */   ConfiguredRetryStrategy: () => (/* reexport safe */ _ConfiguredRetryStrategy__WEBPACK_IMPORTED_MODULE_1__.ConfiguredRetryStrategy),
/* harmony export */   DEFAULT_MAX_ATTEMPTS: () => (/* reexport safe */ _config__WEBPACK_IMPORTED_MODULE_4__.DEFAULT_MAX_ATTEMPTS),
/* harmony export */   DEFAULT_RETRY_DELAY_BASE: () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_5__.DEFAULT_RETRY_DELAY_BASE),
/* harmony export */   DEFAULT_RETRY_MODE: () => (/* reexport safe */ _config__WEBPACK_IMPORTED_MODULE_4__.DEFAULT_RETRY_MODE),
/* harmony export */   DefaultRateLimiter: () => (/* reexport safe */ _DefaultRateLimiter__WEBPACK_IMPORTED_MODULE_2__.DefaultRateLimiter),
/* harmony export */   INITIAL_RETRY_TOKENS: () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_5__.INITIAL_RETRY_TOKENS),
/* harmony export */   INVOCATION_ID_HEADER: () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_5__.INVOCATION_ID_HEADER),
/* harmony export */   MAXIMUM_RETRY_DELAY: () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_5__.MAXIMUM_RETRY_DELAY),
/* harmony export */   NO_RETRY_INCREMENT: () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_5__.NO_RETRY_INCREMENT),
/* harmony export */   REQUEST_HEADER: () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_5__.REQUEST_HEADER),
/* harmony export */   RETRY_COST: () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_5__.RETRY_COST),
/* harmony export */   RETRY_MODES: () => (/* reexport safe */ _config__WEBPACK_IMPORTED_MODULE_4__.RETRY_MODES),
/* harmony export */   StandardRetryStrategy: () => (/* reexport safe */ _StandardRetryStrategy__WEBPACK_IMPORTED_MODULE_3__.StandardRetryStrategy),
/* harmony export */   THROTTLING_RETRY_DELAY_BASE: () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_5__.THROTTLING_RETRY_DELAY_BASE),
/* harmony export */   TIMEOUT_RETRY_COST: () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_5__.TIMEOUT_RETRY_COST)
/* harmony export */ });
/* harmony import */ var _AdaptiveRetryStrategy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1319);
/* harmony import */ var _ConfiguredRetryStrategy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1328);
/* harmony import */ var _DefaultRateLimiter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1321);
/* harmony import */ var _StandardRetryStrategy__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1324);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1320);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1325);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1329);









/***/ }),
/* 1319 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AdaptiveRetryStrategy: () => (/* binding */ AdaptiveRetryStrategy)
/* harmony export */ });
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1320);
/* harmony import */ var _DefaultRateLimiter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1321);
/* harmony import */ var _StandardRetryStrategy__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1324);



class AdaptiveRetryStrategy {
    constructor(maxAttemptsProvider, options) {
        this.maxAttemptsProvider = maxAttemptsProvider;
        this.mode = _config__WEBPACK_IMPORTED_MODULE_0__.RETRY_MODES.ADAPTIVE;
        const { rateLimiter } = options ?? {};
        this.rateLimiter = rateLimiter ?? new _DefaultRateLimiter__WEBPACK_IMPORTED_MODULE_1__.DefaultRateLimiter();
        this.standardRetryStrategy = new _StandardRetryStrategy__WEBPACK_IMPORTED_MODULE_2__.StandardRetryStrategy(maxAttemptsProvider);
    }
    async acquireInitialRetryToken(retryTokenScope) {
        await this.rateLimiter.getSendToken();
        return this.standardRetryStrategy.acquireInitialRetryToken(retryTokenScope);
    }
    async refreshRetryTokenForRetry(tokenToRenew, errorInfo) {
        this.rateLimiter.updateClientSendingRate(errorInfo);
        return this.standardRetryStrategy.refreshRetryTokenForRetry(tokenToRenew, errorInfo);
    }
    recordSuccess(token) {
        this.rateLimiter.updateClientSendingRate({});
        this.standardRetryStrategy.recordSuccess(token);
    }
}


/***/ }),
/* 1320 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DEFAULT_MAX_ATTEMPTS: () => (/* binding */ DEFAULT_MAX_ATTEMPTS),
/* harmony export */   DEFAULT_RETRY_MODE: () => (/* binding */ DEFAULT_RETRY_MODE),
/* harmony export */   RETRY_MODES: () => (/* binding */ RETRY_MODES)
/* harmony export */ });
var RETRY_MODES;
(function (RETRY_MODES) {
    RETRY_MODES["STANDARD"] = "standard";
    RETRY_MODES["ADAPTIVE"] = "adaptive";
})(RETRY_MODES || (RETRY_MODES = {}));
const DEFAULT_MAX_ATTEMPTS = 3;
const DEFAULT_RETRY_MODE = RETRY_MODES.STANDARD;


/***/ }),
/* 1321 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DefaultRateLimiter: () => (/* binding */ DefaultRateLimiter)
/* harmony export */ });
/* harmony import */ var _smithy_service_error_classification__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1322);

class DefaultRateLimiter {
    constructor(options) {
        this.currentCapacity = 0;
        this.enabled = false;
        this.lastMaxRate = 0;
        this.measuredTxRate = 0;
        this.requestCount = 0;
        this.lastTimestamp = 0;
        this.timeWindow = 0;
        this.beta = options?.beta ?? 0.7;
        this.minCapacity = options?.minCapacity ?? 1;
        this.minFillRate = options?.minFillRate ?? 0.5;
        this.scaleConstant = options?.scaleConstant ?? 0.4;
        this.smooth = options?.smooth ?? 0.8;
        const currentTimeInSeconds = this.getCurrentTimeInSeconds();
        this.lastThrottleTime = currentTimeInSeconds;
        this.lastTxRateBucket = Math.floor(this.getCurrentTimeInSeconds());
        this.fillRate = this.minFillRate;
        this.maxCapacity = this.minCapacity;
    }
    getCurrentTimeInSeconds() {
        return Date.now() / 1000;
    }
    async getSendToken() {
        return this.acquireTokenBucket(1);
    }
    async acquireTokenBucket(amount) {
        if (!this.enabled) {
            return;
        }
        this.refillTokenBucket();
        if (amount > this.currentCapacity) {
            const delay = ((amount - this.currentCapacity) / this.fillRate) * 1000;
            await new Promise((resolve) => setTimeout(resolve, delay));
        }
        this.currentCapacity = this.currentCapacity - amount;
    }
    refillTokenBucket() {
        const timestamp = this.getCurrentTimeInSeconds();
        if (!this.lastTimestamp) {
            this.lastTimestamp = timestamp;
            return;
        }
        const fillAmount = (timestamp - this.lastTimestamp) * this.fillRate;
        this.currentCapacity = Math.min(this.maxCapacity, this.currentCapacity + fillAmount);
        this.lastTimestamp = timestamp;
    }
    updateClientSendingRate(response) {
        let calculatedRate;
        this.updateMeasuredRate();
        if ((0,_smithy_service_error_classification__WEBPACK_IMPORTED_MODULE_0__.isThrottlingError)(response)) {
            const rateToUse = !this.enabled ? this.measuredTxRate : Math.min(this.measuredTxRate, this.fillRate);
            this.lastMaxRate = rateToUse;
            this.calculateTimeWindow();
            this.lastThrottleTime = this.getCurrentTimeInSeconds();
            calculatedRate = this.cubicThrottle(rateToUse);
            this.enableTokenBucket();
        }
        else {
            this.calculateTimeWindow();
            calculatedRate = this.cubicSuccess(this.getCurrentTimeInSeconds());
        }
        const newRate = Math.min(calculatedRate, 2 * this.measuredTxRate);
        this.updateTokenBucketRate(newRate);
    }
    calculateTimeWindow() {
        this.timeWindow = this.getPrecise(Math.pow((this.lastMaxRate * (1 - this.beta)) / this.scaleConstant, 1 / 3));
    }
    cubicThrottle(rateToUse) {
        return this.getPrecise(rateToUse * this.beta);
    }
    cubicSuccess(timestamp) {
        return this.getPrecise(this.scaleConstant * Math.pow(timestamp - this.lastThrottleTime - this.timeWindow, 3) + this.lastMaxRate);
    }
    enableTokenBucket() {
        this.enabled = true;
    }
    updateTokenBucketRate(newRate) {
        this.refillTokenBucket();
        this.fillRate = Math.max(newRate, this.minFillRate);
        this.maxCapacity = Math.max(newRate, this.minCapacity);
        this.currentCapacity = Math.min(this.currentCapacity, this.maxCapacity);
    }
    updateMeasuredRate() {
        const t = this.getCurrentTimeInSeconds();
        const timeBucket = Math.floor(t * 2) / 2;
        this.requestCount++;
        if (timeBucket > this.lastTxRateBucket) {
            const currentRate = this.requestCount / (timeBucket - this.lastTxRateBucket);
            this.measuredTxRate = this.getPrecise(currentRate * this.smooth + this.measuredTxRate * (1 - this.smooth));
            this.requestCount = 0;
            this.lastTxRateBucket = timeBucket;
        }
    }
    getPrecise(num) {
        return parseFloat(num.toFixed(8));
    }
}


/***/ }),
/* 1322 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isClockSkewCorrectedError: () => (/* binding */ isClockSkewCorrectedError),
/* harmony export */   isClockSkewError: () => (/* binding */ isClockSkewError),
/* harmony export */   isRetryableByTrait: () => (/* binding */ isRetryableByTrait),
/* harmony export */   isServerError: () => (/* binding */ isServerError),
/* harmony export */   isThrottlingError: () => (/* binding */ isThrottlingError),
/* harmony export */   isTransientError: () => (/* binding */ isTransientError)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1323);

const isRetryableByTrait = (error) => error.$retryable !== undefined;
const isClockSkewError = (error) => _constants__WEBPACK_IMPORTED_MODULE_0__.CLOCK_SKEW_ERROR_CODES.includes(error.name);
const isClockSkewCorrectedError = (error) => error.$metadata?.clockSkewCorrected;
const isThrottlingError = (error) => error.$metadata?.httpStatusCode === 429 ||
    _constants__WEBPACK_IMPORTED_MODULE_0__.THROTTLING_ERROR_CODES.includes(error.name) ||
    error.$retryable?.throttling == true;
const isTransientError = (error) => isClockSkewCorrectedError(error) ||
    _constants__WEBPACK_IMPORTED_MODULE_0__.TRANSIENT_ERROR_CODES.includes(error.name) ||
    _constants__WEBPACK_IMPORTED_MODULE_0__.NODEJS_TIMEOUT_ERROR_CODES.includes(error?.code || "") ||
    _constants__WEBPACK_IMPORTED_MODULE_0__.TRANSIENT_ERROR_STATUS_CODES.includes(error.$metadata?.httpStatusCode || 0);
const isServerError = (error) => {
    if (error.$metadata?.httpStatusCode !== undefined) {
        const statusCode = error.$metadata.httpStatusCode;
        if (500 <= statusCode && statusCode <= 599 && !isTransientError(error)) {
            return true;
        }
        return false;
    }
    return false;
};


/***/ }),
/* 1323 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CLOCK_SKEW_ERROR_CODES: () => (/* binding */ CLOCK_SKEW_ERROR_CODES),
/* harmony export */   NODEJS_TIMEOUT_ERROR_CODES: () => (/* binding */ NODEJS_TIMEOUT_ERROR_CODES),
/* harmony export */   THROTTLING_ERROR_CODES: () => (/* binding */ THROTTLING_ERROR_CODES),
/* harmony export */   TRANSIENT_ERROR_CODES: () => (/* binding */ TRANSIENT_ERROR_CODES),
/* harmony export */   TRANSIENT_ERROR_STATUS_CODES: () => (/* binding */ TRANSIENT_ERROR_STATUS_CODES)
/* harmony export */ });
const CLOCK_SKEW_ERROR_CODES = [
    "AuthFailure",
    "InvalidSignatureException",
    "RequestExpired",
    "RequestInTheFuture",
    "RequestTimeTooSkewed",
    "SignatureDoesNotMatch",
];
const THROTTLING_ERROR_CODES = [
    "BandwidthLimitExceeded",
    "EC2ThrottledException",
    "LimitExceededException",
    "PriorRequestNotComplete",
    "ProvisionedThroughputExceededException",
    "RequestLimitExceeded",
    "RequestThrottled",
    "RequestThrottledException",
    "SlowDown",
    "ThrottledException",
    "Throttling",
    "ThrottlingException",
    "TooManyRequestsException",
    "TransactionInProgressException",
];
const TRANSIENT_ERROR_CODES = ["TimeoutError", "RequestTimeout", "RequestTimeoutException"];
const TRANSIENT_ERROR_STATUS_CODES = [500, 502, 503, 504];
const NODEJS_TIMEOUT_ERROR_CODES = ["ECONNRESET", "ECONNREFUSED", "EPIPE", "ETIMEDOUT"];


/***/ }),
/* 1324 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   StandardRetryStrategy: () => (/* binding */ StandardRetryStrategy)
/* harmony export */ });
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1320);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1325);
/* harmony import */ var _defaultRetryBackoffStrategy__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1326);
/* harmony import */ var _defaultRetryToken__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1327);




class StandardRetryStrategy {
    constructor(maxAttempts) {
        this.maxAttempts = maxAttempts;
        this.mode = _config__WEBPACK_IMPORTED_MODULE_0__.RETRY_MODES.STANDARD;
        this.capacity = _constants__WEBPACK_IMPORTED_MODULE_1__.INITIAL_RETRY_TOKENS;
        this.retryBackoffStrategy = (0,_defaultRetryBackoffStrategy__WEBPACK_IMPORTED_MODULE_2__.getDefaultRetryBackoffStrategy)();
        this.maxAttemptsProvider = typeof maxAttempts === "function" ? maxAttempts : async () => maxAttempts;
    }
    async acquireInitialRetryToken(retryTokenScope) {
        return (0,_defaultRetryToken__WEBPACK_IMPORTED_MODULE_3__.createDefaultRetryToken)({
            retryDelay: _constants__WEBPACK_IMPORTED_MODULE_1__.DEFAULT_RETRY_DELAY_BASE,
            retryCount: 0,
        });
    }
    async refreshRetryTokenForRetry(token, errorInfo) {
        const maxAttempts = await this.getMaxAttempts();
        if (this.shouldRetry(token, errorInfo, maxAttempts)) {
            const errorType = errorInfo.errorType;
            this.retryBackoffStrategy.setDelayBase(errorType === "THROTTLING" ? _constants__WEBPACK_IMPORTED_MODULE_1__.THROTTLING_RETRY_DELAY_BASE : _constants__WEBPACK_IMPORTED_MODULE_1__.DEFAULT_RETRY_DELAY_BASE);
            const delayFromErrorType = this.retryBackoffStrategy.computeNextBackoffDelay(token.getRetryCount());
            const retryDelay = errorInfo.retryAfterHint
                ? Math.max(errorInfo.retryAfterHint.getTime() - Date.now() || 0, delayFromErrorType)
                : delayFromErrorType;
            const capacityCost = this.getCapacityCost(errorType);
            this.capacity -= capacityCost;
            return (0,_defaultRetryToken__WEBPACK_IMPORTED_MODULE_3__.createDefaultRetryToken)({
                retryDelay,
                retryCount: token.getRetryCount() + 1,
                retryCost: capacityCost,
            });
        }
        throw new Error("No retry token available");
    }
    recordSuccess(token) {
        this.capacity = Math.max(_constants__WEBPACK_IMPORTED_MODULE_1__.INITIAL_RETRY_TOKENS, this.capacity + (token.getRetryCost() ?? _constants__WEBPACK_IMPORTED_MODULE_1__.NO_RETRY_INCREMENT));
    }
    getCapacity() {
        return this.capacity;
    }
    async getMaxAttempts() {
        try {
            return await this.maxAttemptsProvider();
        }
        catch (error) {
            console.warn(`Max attempts provider could not resolve. Using default of ${_config__WEBPACK_IMPORTED_MODULE_0__.DEFAULT_MAX_ATTEMPTS}`);
            return _config__WEBPACK_IMPORTED_MODULE_0__.DEFAULT_MAX_ATTEMPTS;
        }
    }
    shouldRetry(tokenToRenew, errorInfo, maxAttempts) {
        const attempts = tokenToRenew.getRetryCount() + 1;
        return (attempts < maxAttempts &&
            this.capacity >= this.getCapacityCost(errorInfo.errorType) &&
            this.isRetryableError(errorInfo.errorType));
    }
    getCapacityCost(errorType) {
        return errorType === "TRANSIENT" ? _constants__WEBPACK_IMPORTED_MODULE_1__.TIMEOUT_RETRY_COST : _constants__WEBPACK_IMPORTED_MODULE_1__.RETRY_COST;
    }
    isRetryableError(errorType) {
        return errorType === "THROTTLING" || errorType === "TRANSIENT";
    }
}


/***/ }),
/* 1325 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DEFAULT_RETRY_DELAY_BASE: () => (/* binding */ DEFAULT_RETRY_DELAY_BASE),
/* harmony export */   INITIAL_RETRY_TOKENS: () => (/* binding */ INITIAL_RETRY_TOKENS),
/* harmony export */   INVOCATION_ID_HEADER: () => (/* binding */ INVOCATION_ID_HEADER),
/* harmony export */   MAXIMUM_RETRY_DELAY: () => (/* binding */ MAXIMUM_RETRY_DELAY),
/* harmony export */   NO_RETRY_INCREMENT: () => (/* binding */ NO_RETRY_INCREMENT),
/* harmony export */   REQUEST_HEADER: () => (/* binding */ REQUEST_HEADER),
/* harmony export */   RETRY_COST: () => (/* binding */ RETRY_COST),
/* harmony export */   THROTTLING_RETRY_DELAY_BASE: () => (/* binding */ THROTTLING_RETRY_DELAY_BASE),
/* harmony export */   TIMEOUT_RETRY_COST: () => (/* binding */ TIMEOUT_RETRY_COST)
/* harmony export */ });
const DEFAULT_RETRY_DELAY_BASE = 100;
const MAXIMUM_RETRY_DELAY = 20 * 1000;
const THROTTLING_RETRY_DELAY_BASE = 500;
const INITIAL_RETRY_TOKENS = 500;
const RETRY_COST = 5;
const TIMEOUT_RETRY_COST = 10;
const NO_RETRY_INCREMENT = 1;
const INVOCATION_ID_HEADER = "amz-sdk-invocation-id";
const REQUEST_HEADER = "amz-sdk-request";


/***/ }),
/* 1326 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getDefaultRetryBackoffStrategy: () => (/* binding */ getDefaultRetryBackoffStrategy)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1325);

const getDefaultRetryBackoffStrategy = () => {
    let delayBase = _constants__WEBPACK_IMPORTED_MODULE_0__.DEFAULT_RETRY_DELAY_BASE;
    const computeNextBackoffDelay = (attempts) => {
        return Math.floor(Math.min(_constants__WEBPACK_IMPORTED_MODULE_0__.MAXIMUM_RETRY_DELAY, Math.random() * 2 ** attempts * delayBase));
    };
    const setDelayBase = (delay) => {
        delayBase = delay;
    };
    return {
        computeNextBackoffDelay,
        setDelayBase,
    };
};


/***/ }),
/* 1327 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createDefaultRetryToken: () => (/* binding */ createDefaultRetryToken)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1325);

const createDefaultRetryToken = ({ retryDelay, retryCount, retryCost, }) => {
    const getRetryCount = () => retryCount;
    const getRetryDelay = () => Math.min(_constants__WEBPACK_IMPORTED_MODULE_0__.MAXIMUM_RETRY_DELAY, retryDelay);
    const getRetryCost = () => retryCost;
    return {
        getRetryCount,
        getRetryDelay,
        getRetryCost,
    };
};


/***/ }),
/* 1328 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ConfiguredRetryStrategy: () => (/* binding */ ConfiguredRetryStrategy)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1325);
/* harmony import */ var _StandardRetryStrategy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1324);


class ConfiguredRetryStrategy extends _StandardRetryStrategy__WEBPACK_IMPORTED_MODULE_1__.StandardRetryStrategy {
    constructor(maxAttempts, computeNextBackoffDelay = _constants__WEBPACK_IMPORTED_MODULE_0__.DEFAULT_RETRY_DELAY_BASE) {
        super(typeof maxAttempts === "function" ? maxAttempts : async () => maxAttempts);
        if (typeof computeNextBackoffDelay === "number") {
            this.computeNextBackoffDelay = () => computeNextBackoffDelay;
        }
        else {
            this.computeNextBackoffDelay = computeNextBackoffDelay;
        }
    }
    async refreshRetryTokenForRetry(tokenToRenew, errorInfo) {
        const token = await super.refreshRetryTokenForRetry(tokenToRenew, errorInfo);
        token.getRetryDelay = () => this.computeNextBackoffDelay(token.getRetryCount());
        return token;
    }
}


/***/ }),
/* 1329 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),
/* 1330 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   StandardRetryStrategy: () => (/* binding */ StandardRetryStrategy)
/* harmony export */ });
/* harmony import */ var _smithy_protocol_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1124);
/* harmony import */ var _smithy_service_error_classification__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1322);
/* harmony import */ var _smithy_util_retry__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1318);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1335);
/* harmony import */ var _defaultRetryQuota__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1331);
/* harmony import */ var _delayDecider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1332);
/* harmony import */ var _retryDecider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1333);
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1334);








class StandardRetryStrategy {
    constructor(maxAttemptsProvider, options) {
        this.maxAttemptsProvider = maxAttemptsProvider;
        this.mode = _smithy_util_retry__WEBPACK_IMPORTED_MODULE_2__.RETRY_MODES.STANDARD;
        this.retryDecider = options?.retryDecider ?? _retryDecider__WEBPACK_IMPORTED_MODULE_5__.defaultRetryDecider;
        this.delayDecider = options?.delayDecider ?? _delayDecider__WEBPACK_IMPORTED_MODULE_4__.defaultDelayDecider;
        this.retryQuota = options?.retryQuota ?? (0,_defaultRetryQuota__WEBPACK_IMPORTED_MODULE_3__.getDefaultRetryQuota)(_smithy_util_retry__WEBPACK_IMPORTED_MODULE_2__.INITIAL_RETRY_TOKENS);
    }
    shouldRetry(error, attempts, maxAttempts) {
        return attempts < maxAttempts && this.retryDecider(error) && this.retryQuota.hasRetryTokens(error);
    }
    async getMaxAttempts() {
        let maxAttempts;
        try {
            maxAttempts = await this.maxAttemptsProvider();
        }
        catch (error) {
            maxAttempts = _smithy_util_retry__WEBPACK_IMPORTED_MODULE_2__.DEFAULT_MAX_ATTEMPTS;
        }
        return maxAttempts;
    }
    async retry(next, args, options) {
        let retryTokenAmount;
        let attempts = 0;
        let totalDelay = 0;
        const maxAttempts = await this.getMaxAttempts();
        const { request } = args;
        if (_smithy_protocol_http__WEBPACK_IMPORTED_MODULE_0__.HttpRequest.isInstance(request)) {
            request.headers[_smithy_util_retry__WEBPACK_IMPORTED_MODULE_2__.INVOCATION_ID_HEADER] = (0,uuid__WEBPACK_IMPORTED_MODULE_7__["default"])();
        }
        while (true) {
            try {
                if (_smithy_protocol_http__WEBPACK_IMPORTED_MODULE_0__.HttpRequest.isInstance(request)) {
                    request.headers[_smithy_util_retry__WEBPACK_IMPORTED_MODULE_2__.REQUEST_HEADER] = `attempt=${attempts + 1}; max=${maxAttempts}`;
                }
                if (options?.beforeRequest) {
                    await options.beforeRequest();
                }
                const { response, output } = await next(args);
                if (options?.afterRequest) {
                    options.afterRequest(response);
                }
                this.retryQuota.releaseRetryTokens(retryTokenAmount);
                output.$metadata.attempts = attempts + 1;
                output.$metadata.totalRetryDelay = totalDelay;
                return { response, output };
            }
            catch (e) {
                const err = (0,_util__WEBPACK_IMPORTED_MODULE_6__.asSdkError)(e);
                attempts++;
                if (this.shouldRetry(err, attempts, maxAttempts)) {
                    retryTokenAmount = this.retryQuota.retrieveRetryTokens(err);
                    const delayFromDecider = this.delayDecider((0,_smithy_service_error_classification__WEBPACK_IMPORTED_MODULE_1__.isThrottlingError)(err) ? _smithy_util_retry__WEBPACK_IMPORTED_MODULE_2__.THROTTLING_RETRY_DELAY_BASE : _smithy_util_retry__WEBPACK_IMPORTED_MODULE_2__.DEFAULT_RETRY_DELAY_BASE, attempts);
                    const delayFromResponse = getDelayFromRetryAfterHeader(err.$response);
                    const delay = Math.max(delayFromResponse || 0, delayFromDecider);
                    totalDelay += delay;
                    await new Promise((resolve) => setTimeout(resolve, delay));
                    continue;
                }
                if (!err.$metadata) {
                    err.$metadata = {};
                }
                err.$metadata.attempts = attempts;
                err.$metadata.totalRetryDelay = totalDelay;
                throw err;
            }
        }
    }
}
const getDelayFromRetryAfterHeader = (response) => {
    if (!_smithy_protocol_http__WEBPACK_IMPORTED_MODULE_0__.HttpResponse.isInstance(response))
        return;
    const retryAfterHeaderName = Object.keys(response.headers).find((key) => key.toLowerCase() === "retry-after");
    if (!retryAfterHeaderName)
        return;
    const retryAfter = response.headers[retryAfterHeaderName];
    const retryAfterSeconds = Number(retryAfter);
    if (!Number.isNaN(retryAfterSeconds))
        return retryAfterSeconds * 1000;
    const retryAfterDate = new Date(retryAfter);
    return retryAfterDate.getTime() - Date.now();
};


/***/ }),
/* 1331 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getDefaultRetryQuota: () => (/* binding */ getDefaultRetryQuota)
/* harmony export */ });
/* harmony import */ var _smithy_util_retry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1318);

const getDefaultRetryQuota = (initialRetryTokens, options) => {
    const MAX_CAPACITY = initialRetryTokens;
    const noRetryIncrement = options?.noRetryIncrement ?? _smithy_util_retry__WEBPACK_IMPORTED_MODULE_0__.NO_RETRY_INCREMENT;
    const retryCost = options?.retryCost ?? _smithy_util_retry__WEBPACK_IMPORTED_MODULE_0__.RETRY_COST;
    const timeoutRetryCost = options?.timeoutRetryCost ?? _smithy_util_retry__WEBPACK_IMPORTED_MODULE_0__.TIMEOUT_RETRY_COST;
    let availableCapacity = initialRetryTokens;
    const getCapacityAmount = (error) => (error.name === "TimeoutError" ? timeoutRetryCost : retryCost);
    const hasRetryTokens = (error) => getCapacityAmount(error) <= availableCapacity;
    const retrieveRetryTokens = (error) => {
        if (!hasRetryTokens(error)) {
            throw new Error("No retry token available");
        }
        const capacityAmount = getCapacityAmount(error);
        availableCapacity -= capacityAmount;
        return capacityAmount;
    };
    const releaseRetryTokens = (capacityReleaseAmount) => {
        availableCapacity += capacityReleaseAmount ?? noRetryIncrement;
        availableCapacity = Math.min(availableCapacity, MAX_CAPACITY);
    };
    return Object.freeze({
        hasRetryTokens,
        retrieveRetryTokens,
        releaseRetryTokens,
    });
};


/***/ }),
/* 1332 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   defaultDelayDecider: () => (/* binding */ defaultDelayDecider)
/* harmony export */ });
/* harmony import */ var _smithy_util_retry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1318);

const defaultDelayDecider = (delayBase, attempts) => Math.floor(Math.min(_smithy_util_retry__WEBPACK_IMPORTED_MODULE_0__.MAXIMUM_RETRY_DELAY, Math.random() * 2 ** attempts * delayBase));


/***/ }),
/* 1333 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   defaultRetryDecider: () => (/* binding */ defaultRetryDecider)
/* harmony export */ });
/* harmony import */ var _smithy_service_error_classification__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1322);

const defaultRetryDecider = (error) => {
    if (!error) {
        return false;
    }
    return (0,_smithy_service_error_classification__WEBPACK_IMPORTED_MODULE_0__.isRetryableByTrait)(error) || (0,_smithy_service_error_classification__WEBPACK_IMPORTED_MODULE_0__.isClockSkewError)(error) || (0,_smithy_service_error_classification__WEBPACK_IMPORTED_MODULE_0__.isThrottlingError)(error) || (0,_smithy_service_error_classification__WEBPACK_IMPORTED_MODULE_0__.isTransientError)(error);
};


/***/ }),
/* 1334 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   asSdkError: () => (/* binding */ asSdkError)
/* harmony export */ });
const asSdkError = (error) => {
    if (error instanceof Error)
        return error;
    if (error instanceof Object)
        return Object.assign(new Error(), error);
    if (typeof error === "string")
        return new Error(error);
    return new Error(`AWS SDK error wrapper for ${error}`);
};


/***/ }),
/* 1335 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _native_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1336);
/* harmony import */ var _rng_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1337);
/* harmony import */ var _stringify_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1338);




function v4(options, buf, offset) {
  if (_native_js__WEBPACK_IMPORTED_MODULE_0__["default"].randomUUID && !buf && !options) {
    return _native_js__WEBPACK_IMPORTED_MODULE_0__["default"].randomUUID();
  }

  options = options || {};
  const rnds = options.random || (options.rng || _rng_js__WEBPACK_IMPORTED_MODULE_1__["default"])(); // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`

  rnds[6] = rnds[6] & 0x0f | 0x40;
  rnds[8] = rnds[8] & 0x3f | 0x80; // Copy bytes to buffer, if provided

  if (buf) {
    offset = offset || 0;

    for (let i = 0; i < 16; ++i) {
      buf[offset + i] = rnds[i];
    }

    return buf;
  }

  return (0,_stringify_js__WEBPACK_IMPORTED_MODULE_2__.unsafeStringify)(rnds);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (v4);

/***/ }),
/* 1336 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(209);
/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(crypto__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  randomUUID: (crypto__WEBPACK_IMPORTED_MODULE_0___default().randomUUID)
});

/***/ }),
/* 1337 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ rng)
/* harmony export */ });
/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(209);
/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(crypto__WEBPACK_IMPORTED_MODULE_0__);

const rnds8Pool = new Uint8Array(256); // # of random values to pre-allocate

let poolPtr = rnds8Pool.length;
function rng() {
  if (poolPtr > rnds8Pool.length - 16) {
    crypto__WEBPACK_IMPORTED_MODULE_0___default().randomFillSync(rnds8Pool);
    poolPtr = 0;
  }

  return rnds8Pool.slice(poolPtr, poolPtr += 16);
}

/***/ }),
/* 1338 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   unsafeStringify: () => (/* binding */ unsafeStringify)
/* harmony export */ });
/* harmony import */ var _validate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1339);

/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */

const byteToHex = [];

for (let i = 0; i < 256; ++i) {
  byteToHex.push((i + 0x100).toString(16).slice(1));
}

function unsafeStringify(arr, offset = 0) {
  // Note: Be careful editing this code!  It's been tuned for performance
  // and works in ways you may not expect. See https://github.com/uuidjs/uuid/pull/434
  return byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + '-' + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + '-' + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + '-' + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + '-' + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]];
}

function stringify(arr, offset = 0) {
  const uuid = unsafeStringify(arr, offset); // Consistency check for valid UUID.  If this throws, it's likely due to one
  // of the following:
  // - One or more input array values don't map to a hex octet (leading to
  // "undefined" in the uuid)
  // - Invalid input values for the RFC `version` or `variant` fields

  if (!(0,_validate_js__WEBPACK_IMPORTED_MODULE_0__["default"])(uuid)) {
    throw TypeError('Stringified UUID is invalid');
  }

  return uuid;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (stringify);

/***/ }),
/* 1339 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _regex_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1340);


function validate(uuid) {
  return typeof uuid === 'string' && _regex_js__WEBPACK_IMPORTED_MODULE_0__["default"].test(uuid);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (validate);

/***/ }),
/* 1340 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i);

/***/ }),
/* 1341 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CONFIG_MAX_ATTEMPTS: () => (/* binding */ CONFIG_MAX_ATTEMPTS),
/* harmony export */   CONFIG_RETRY_MODE: () => (/* binding */ CONFIG_RETRY_MODE),
/* harmony export */   ENV_MAX_ATTEMPTS: () => (/* binding */ ENV_MAX_ATTEMPTS),
/* harmony export */   ENV_RETRY_MODE: () => (/* binding */ ENV_RETRY_MODE),
/* harmony export */   NODE_MAX_ATTEMPT_CONFIG_OPTIONS: () => (/* binding */ NODE_MAX_ATTEMPT_CONFIG_OPTIONS),
/* harmony export */   NODE_RETRY_MODE_CONFIG_OPTIONS: () => (/* binding */ NODE_RETRY_MODE_CONFIG_OPTIONS),
/* harmony export */   resolveRetryConfig: () => (/* binding */ resolveRetryConfig)
/* harmony export */ });
/* harmony import */ var _smithy_util_middleware__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1265);
/* harmony import */ var _smithy_util_retry__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1318);


const ENV_MAX_ATTEMPTS = "AWS_MAX_ATTEMPTS";
const CONFIG_MAX_ATTEMPTS = "max_attempts";
const NODE_MAX_ATTEMPT_CONFIG_OPTIONS = {
    environmentVariableSelector: (env) => {
        const value = env[ENV_MAX_ATTEMPTS];
        if (!value)
            return undefined;
        const maxAttempt = parseInt(value);
        if (Number.isNaN(maxAttempt)) {
            throw new Error(`Environment variable ${ENV_MAX_ATTEMPTS} mast be a number, got "${value}"`);
        }
        return maxAttempt;
    },
    configFileSelector: (profile) => {
        const value = profile[CONFIG_MAX_ATTEMPTS];
        if (!value)
            return undefined;
        const maxAttempt = parseInt(value);
        if (Number.isNaN(maxAttempt)) {
            throw new Error(`Shared config file entry ${CONFIG_MAX_ATTEMPTS} mast be a number, got "${value}"`);
        }
        return maxAttempt;
    },
    default: _smithy_util_retry__WEBPACK_IMPORTED_MODULE_1__.DEFAULT_MAX_ATTEMPTS,
};
const resolveRetryConfig = (input) => {
    const { retryStrategy } = input;
    const maxAttempts = (0,_smithy_util_middleware__WEBPACK_IMPORTED_MODULE_0__.normalizeProvider)(input.maxAttempts ?? _smithy_util_retry__WEBPACK_IMPORTED_MODULE_1__.DEFAULT_MAX_ATTEMPTS);
    return {
        ...input,
        maxAttempts,
        retryStrategy: async () => {
            if (retryStrategy) {
                return retryStrategy;
            }
            const retryMode = await (0,_smithy_util_middleware__WEBPACK_IMPORTED_MODULE_0__.normalizeProvider)(input.retryMode)();
            if (retryMode === _smithy_util_retry__WEBPACK_IMPORTED_MODULE_1__.RETRY_MODES.ADAPTIVE) {
                return new _smithy_util_retry__WEBPACK_IMPORTED_MODULE_1__.AdaptiveRetryStrategy(maxAttempts);
            }
            return new _smithy_util_retry__WEBPACK_IMPORTED_MODULE_1__.StandardRetryStrategy(maxAttempts);
        },
    };
};
const ENV_RETRY_MODE = "AWS_RETRY_MODE";
const CONFIG_RETRY_MODE = "retry_mode";
const NODE_RETRY_MODE_CONFIG_OPTIONS = {
    environmentVariableSelector: (env) => env[ENV_RETRY_MODE],
    configFileSelector: (profile) => profile[CONFIG_RETRY_MODE],
    default: _smithy_util_retry__WEBPACK_IMPORTED_MODULE_1__.DEFAULT_RETRY_MODE,
};


/***/ }),
/* 1342 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getOmitRetryHeadersPlugin: () => (/* binding */ getOmitRetryHeadersPlugin),
/* harmony export */   omitRetryHeadersMiddleware: () => (/* binding */ omitRetryHeadersMiddleware),
/* harmony export */   omitRetryHeadersMiddlewareOptions: () => (/* binding */ omitRetryHeadersMiddlewareOptions)
/* harmony export */ });
/* harmony import */ var _smithy_protocol_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1124);
/* harmony import */ var _smithy_util_retry__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1318);


const omitRetryHeadersMiddleware = () => (next) => async (args) => {
    const { request } = args;
    if (_smithy_protocol_http__WEBPACK_IMPORTED_MODULE_0__.HttpRequest.isInstance(request)) {
        delete request.headers[_smithy_util_retry__WEBPACK_IMPORTED_MODULE_1__.INVOCATION_ID_HEADER];
        delete request.headers[_smithy_util_retry__WEBPACK_IMPORTED_MODULE_1__.REQUEST_HEADER];
    }
    return next(args);
};
const omitRetryHeadersMiddlewareOptions = {
    name: "omitRetryHeadersMiddleware",
    tags: ["RETRY", "HEADERS", "OMIT_RETRY_HEADERS"],
    relation: "before",
    toMiddleware: "awsAuthMiddleware",
    override: true,
};
const getOmitRetryHeadersPlugin = (options) => ({
    applyToStack: (clientStack) => {
        clientStack.addRelativeTo(omitRetryHeadersMiddleware(), omitRetryHeadersMiddlewareOptions);
    },
});


/***/ }),
/* 1343 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getRetryAfterHint: () => (/* binding */ getRetryAfterHint),
/* harmony export */   getRetryPlugin: () => (/* binding */ getRetryPlugin),
/* harmony export */   retryMiddleware: () => (/* binding */ retryMiddleware),
/* harmony export */   retryMiddlewareOptions: () => (/* binding */ retryMiddlewareOptions)
/* harmony export */ });
/* harmony import */ var _smithy_protocol_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1124);
/* harmony import */ var _smithy_service_error_classification__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1322);
/* harmony import */ var _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1344);
/* harmony import */ var _smithy_util_retry__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1318);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1335);
/* harmony import */ var _isStreamingPayload_isStreamingPayload__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1372);
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1334);







const retryMiddleware = (options) => (next, context) => async (args) => {
    let retryStrategy = await options.retryStrategy();
    const maxAttempts = await options.maxAttempts();
    if (isRetryStrategyV2(retryStrategy)) {
        retryStrategy = retryStrategy;
        let retryToken = await retryStrategy.acquireInitialRetryToken(context["partition_id"]);
        let lastError = new Error();
        let attempts = 0;
        let totalRetryDelay = 0;
        const { request } = args;
        const isRequest = _smithy_protocol_http__WEBPACK_IMPORTED_MODULE_0__.HttpRequest.isInstance(request);
        if (isRequest) {
            request.headers[_smithy_util_retry__WEBPACK_IMPORTED_MODULE_3__.INVOCATION_ID_HEADER] = (0,uuid__WEBPACK_IMPORTED_MODULE_6__["default"])();
        }
        while (true) {
            try {
                if (isRequest) {
                    request.headers[_smithy_util_retry__WEBPACK_IMPORTED_MODULE_3__.REQUEST_HEADER] = `attempt=${attempts + 1}; max=${maxAttempts}`;
                }
                const { response, output } = await next(args);
                retryStrategy.recordSuccess(retryToken);
                output.$metadata.attempts = attempts + 1;
                output.$metadata.totalRetryDelay = totalRetryDelay;
                return { response, output };
            }
            catch (e) {
                const retryErrorInfo = getRetryErrorInfo(e);
                lastError = (0,_util__WEBPACK_IMPORTED_MODULE_5__.asSdkError)(e);
                if (isRequest && (0,_isStreamingPayload_isStreamingPayload__WEBPACK_IMPORTED_MODULE_4__.isStreamingPayload)(request)) {
                    (context.logger instanceof _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_2__.NoOpLogger ? console : context.logger)?.warn("An error was encountered in a non-retryable streaming request.");
                    throw lastError;
                }
                try {
                    retryToken = await retryStrategy.refreshRetryTokenForRetry(retryToken, retryErrorInfo);
                }
                catch (refreshError) {
                    if (!lastError.$metadata) {
                        lastError.$metadata = {};
                    }
                    lastError.$metadata.attempts = attempts + 1;
                    lastError.$metadata.totalRetryDelay = totalRetryDelay;
                    throw lastError;
                }
                attempts = retryToken.getRetryCount();
                const delay = retryToken.getRetryDelay();
                totalRetryDelay += delay;
                await new Promise((resolve) => setTimeout(resolve, delay));
            }
        }
    }
    else {
        retryStrategy = retryStrategy;
        if (retryStrategy?.mode)
            context.userAgent = [...(context.userAgent || []), ["cfg/retry-mode", retryStrategy.mode]];
        return retryStrategy.retry(next, args);
    }
};
const isRetryStrategyV2 = (retryStrategy) => typeof retryStrategy.acquireInitialRetryToken !== "undefined" &&
    typeof retryStrategy.refreshRetryTokenForRetry !== "undefined" &&
    typeof retryStrategy.recordSuccess !== "undefined";
const getRetryErrorInfo = (error) => {
    const errorInfo = {
        error,
        errorType: getRetryErrorType(error),
    };
    const retryAfterHint = getRetryAfterHint(error.$response);
    if (retryAfterHint) {
        errorInfo.retryAfterHint = retryAfterHint;
    }
    return errorInfo;
};
const getRetryErrorType = (error) => {
    if ((0,_smithy_service_error_classification__WEBPACK_IMPORTED_MODULE_1__.isThrottlingError)(error))
        return "THROTTLING";
    if ((0,_smithy_service_error_classification__WEBPACK_IMPORTED_MODULE_1__.isTransientError)(error))
        return "TRANSIENT";
    if ((0,_smithy_service_error_classification__WEBPACK_IMPORTED_MODULE_1__.isServerError)(error))
        return "SERVER_ERROR";
    return "CLIENT_ERROR";
};
const retryMiddlewareOptions = {
    name: "retryMiddleware",
    tags: ["RETRY"],
    step: "finalizeRequest",
    priority: "high",
    override: true,
};
const getRetryPlugin = (options) => ({
    applyToStack: (clientStack) => {
        clientStack.add(retryMiddleware(options), retryMiddlewareOptions);
    },
});
const getRetryAfterHint = (response) => {
    if (!_smithy_protocol_http__WEBPACK_IMPORTED_MODULE_0__.HttpResponse.isInstance(response))
        return;
    const retryAfterHeaderName = Object.keys(response.headers).find((key) => key.toLowerCase() === "retry-after");
    if (!retryAfterHeaderName)
        return;
    const retryAfter = response.headers[retryAfterHeaderName];
    const retryAfterSeconds = Number(retryAfter);
    if (!Number.isNaN(retryAfterSeconds))
        return new Date(retryAfterSeconds * 1000);
    const retryAfterDate = new Date(retryAfter);
    return retryAfterDate;
};


/***/ }),
/* 1344 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Client: () => (/* reexport safe */ _client__WEBPACK_IMPORTED_MODULE_1__.Client),
/* harmony export */   Command: () => (/* reexport safe */ _command__WEBPACK_IMPORTED_MODULE_3__.Command),
/* harmony export */   LazyJsonString: () => (/* reexport safe */ _lazy_json__WEBPACK_IMPORTED_MODULE_15__.LazyJsonString),
/* harmony export */   NoOpLogger: () => (/* reexport safe */ _NoOpLogger__WEBPACK_IMPORTED_MODULE_0__.NoOpLogger),
/* harmony export */   SENSITIVE_STRING: () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_4__.SENSITIVE_STRING),
/* harmony export */   ServiceException: () => (/* reexport safe */ _exceptions__WEBPACK_IMPORTED_MODULE_11__.ServiceException),
/* harmony export */   StringWrapper: () => (/* reexport safe */ _lazy_json__WEBPACK_IMPORTED_MODULE_15__.StringWrapper),
/* harmony export */   _json: () => (/* reexport safe */ _serde_json__WEBPACK_IMPORTED_MODULE_20__._json),
/* harmony export */   collectBody: () => (/* reexport safe */ _collect_stream_body__WEBPACK_IMPORTED_MODULE_2__.collectBody),
/* harmony export */   convertMap: () => (/* reexport safe */ _object_mapping__WEBPACK_IMPORTED_MODULE_16__.convertMap),
/* harmony export */   createAggregatedClient: () => (/* reexport safe */ _create_aggregated_client__WEBPACK_IMPORTED_MODULE_5__.createAggregatedClient),
/* harmony export */   dateToUtcString: () => (/* reexport safe */ _date_utils__WEBPACK_IMPORTED_MODULE_6__.dateToUtcString),
/* harmony export */   decorateServiceException: () => (/* reexport safe */ _exceptions__WEBPACK_IMPORTED_MODULE_11__.decorateServiceException),
/* harmony export */   emitWarningIfUnsupportedVersion: () => (/* reexport safe */ _emitWarningIfUnsupportedVersion__WEBPACK_IMPORTED_MODULE_9__.emitWarningIfUnsupportedVersion),
/* harmony export */   expectBoolean: () => (/* reexport safe */ _parse_utils__WEBPACK_IMPORTED_MODULE_17__.expectBoolean),
/* harmony export */   expectByte: () => (/* reexport safe */ _parse_utils__WEBPACK_IMPORTED_MODULE_17__.expectByte),
/* harmony export */   expectFloat32: () => (/* reexport safe */ _parse_utils__WEBPACK_IMPORTED_MODULE_17__.expectFloat32),
/* harmony export */   expectInt: () => (/* reexport safe */ _parse_utils__WEBPACK_IMPORTED_MODULE_17__.expectInt),
/* harmony export */   expectInt32: () => (/* reexport safe */ _parse_utils__WEBPACK_IMPORTED_MODULE_17__.expectInt32),
/* harmony export */   expectLong: () => (/* reexport safe */ _parse_utils__WEBPACK_IMPORTED_MODULE_17__.expectLong),
/* harmony export */   expectNonNull: () => (/* reexport safe */ _parse_utils__WEBPACK_IMPORTED_MODULE_17__.expectNonNull),
/* harmony export */   expectNumber: () => (/* reexport safe */ _parse_utils__WEBPACK_IMPORTED_MODULE_17__.expectNumber),
/* harmony export */   expectObject: () => (/* reexport safe */ _parse_utils__WEBPACK_IMPORTED_MODULE_17__.expectObject),
/* harmony export */   expectShort: () => (/* reexport safe */ _parse_utils__WEBPACK_IMPORTED_MODULE_17__.expectShort),
/* harmony export */   expectString: () => (/* reexport safe */ _parse_utils__WEBPACK_IMPORTED_MODULE_17__.expectString),
/* harmony export */   expectUnion: () => (/* reexport safe */ _parse_utils__WEBPACK_IMPORTED_MODULE_17__.expectUnion),
/* harmony export */   extendedEncodeURIComponent: () => (/* reexport safe */ _extended_encode_uri_component__WEBPACK_IMPORTED_MODULE_12__.extendedEncodeURIComponent),
/* harmony export */   getArrayIfSingleItem: () => (/* reexport safe */ _get_array_if_single_item__WEBPACK_IMPORTED_MODULE_13__.getArrayIfSingleItem),
/* harmony export */   getDefaultClientConfiguration: () => (/* reexport safe */ _extensions__WEBPACK_IMPORTED_MODULE_10__.getDefaultClientConfiguration),
/* harmony export */   getDefaultExtensionConfiguration: () => (/* reexport safe */ _extensions__WEBPACK_IMPORTED_MODULE_10__.getDefaultExtensionConfiguration),
/* harmony export */   getValueFromTextNode: () => (/* reexport safe */ _get_value_from_text_node__WEBPACK_IMPORTED_MODULE_14__.getValueFromTextNode),
/* harmony export */   handleFloat: () => (/* reexport safe */ _parse_utils__WEBPACK_IMPORTED_MODULE_17__.handleFloat),
/* harmony export */   limitedParseDouble: () => (/* reexport safe */ _parse_utils__WEBPACK_IMPORTED_MODULE_17__.limitedParseDouble),
/* harmony export */   limitedParseFloat: () => (/* reexport safe */ _parse_utils__WEBPACK_IMPORTED_MODULE_17__.limitedParseFloat),
/* harmony export */   limitedParseFloat32: () => (/* reexport safe */ _parse_utils__WEBPACK_IMPORTED_MODULE_17__.limitedParseFloat32),
/* harmony export */   loadConfigsForDefaultMode: () => (/* reexport safe */ _defaults_mode__WEBPACK_IMPORTED_MODULE_8__.loadConfigsForDefaultMode),
/* harmony export */   logger: () => (/* reexport safe */ _parse_utils__WEBPACK_IMPORTED_MODULE_17__.logger),
/* harmony export */   map: () => (/* reexport safe */ _object_mapping__WEBPACK_IMPORTED_MODULE_16__.map),
/* harmony export */   parseBoolean: () => (/* reexport safe */ _parse_utils__WEBPACK_IMPORTED_MODULE_17__.parseBoolean),
/* harmony export */   parseEpochTimestamp: () => (/* reexport safe */ _date_utils__WEBPACK_IMPORTED_MODULE_6__.parseEpochTimestamp),
/* harmony export */   parseRfc3339DateTime: () => (/* reexport safe */ _date_utils__WEBPACK_IMPORTED_MODULE_6__.parseRfc3339DateTime),
/* harmony export */   parseRfc3339DateTimeWithOffset: () => (/* reexport safe */ _date_utils__WEBPACK_IMPORTED_MODULE_6__.parseRfc3339DateTimeWithOffset),
/* harmony export */   parseRfc7231DateTime: () => (/* reexport safe */ _date_utils__WEBPACK_IMPORTED_MODULE_6__.parseRfc7231DateTime),
/* harmony export */   resolveDefaultRuntimeConfig: () => (/* reexport safe */ _extensions__WEBPACK_IMPORTED_MODULE_10__.resolveDefaultRuntimeConfig),
/* harmony export */   resolvedPath: () => (/* reexport safe */ _resolve_path__WEBPACK_IMPORTED_MODULE_18__.resolvedPath),
/* harmony export */   serializeDateTime: () => (/* reexport safe */ _ser_utils__WEBPACK_IMPORTED_MODULE_19__.serializeDateTime),
/* harmony export */   serializeFloat: () => (/* reexport safe */ _ser_utils__WEBPACK_IMPORTED_MODULE_19__.serializeFloat),
/* harmony export */   splitEvery: () => (/* reexport safe */ _split_every__WEBPACK_IMPORTED_MODULE_21__.splitEvery),
/* harmony export */   strictParseByte: () => (/* reexport safe */ _parse_utils__WEBPACK_IMPORTED_MODULE_17__.strictParseByte),
/* harmony export */   strictParseDouble: () => (/* reexport safe */ _parse_utils__WEBPACK_IMPORTED_MODULE_17__.strictParseDouble),
/* harmony export */   strictParseFloat: () => (/* reexport safe */ _parse_utils__WEBPACK_IMPORTED_MODULE_17__.strictParseFloat),
/* harmony export */   strictParseFloat32: () => (/* reexport safe */ _parse_utils__WEBPACK_IMPORTED_MODULE_17__.strictParseFloat32),
/* harmony export */   strictParseInt: () => (/* reexport safe */ _parse_utils__WEBPACK_IMPORTED_MODULE_17__.strictParseInt),
/* harmony export */   strictParseInt32: () => (/* reexport safe */ _parse_utils__WEBPACK_IMPORTED_MODULE_17__.strictParseInt32),
/* harmony export */   strictParseLong: () => (/* reexport safe */ _parse_utils__WEBPACK_IMPORTED_MODULE_17__.strictParseLong),
/* harmony export */   strictParseShort: () => (/* reexport safe */ _parse_utils__WEBPACK_IMPORTED_MODULE_17__.strictParseShort),
/* harmony export */   take: () => (/* reexport safe */ _object_mapping__WEBPACK_IMPORTED_MODULE_16__.take),
/* harmony export */   throwDefaultError: () => (/* reexport safe */ _default_error_handler__WEBPACK_IMPORTED_MODULE_7__.throwDefaultError),
/* harmony export */   withBaseException: () => (/* reexport safe */ _default_error_handler__WEBPACK_IMPORTED_MODULE_7__.withBaseException)
/* harmony export */ });
/* harmony import */ var _NoOpLogger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1345);
/* harmony import */ var _client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1346);
/* harmony import */ var _collect_stream_body__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1349);
/* harmony import */ var _command__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1350);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1351);
/* harmony import */ var _create_aggregated_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1352);
/* harmony import */ var _date_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1353);
/* harmony import */ var _default_error_handler__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1355);
/* harmony import */ var _defaults_mode__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1357);
/* harmony import */ var _emitWarningIfUnsupportedVersion__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1358);
/* harmony import */ var _extensions__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(1359);
/* harmony import */ var _exceptions__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(1356);
/* harmony import */ var _extended_encode_uri_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(1363);
/* harmony import */ var _get_array_if_single_item__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(1364);
/* harmony import */ var _get_value_from_text_node__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(1365);
/* harmony import */ var _lazy_json__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(1366);
/* harmony import */ var _object_mapping__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(1367);
/* harmony import */ var _parse_utils__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(1354);
/* harmony import */ var _resolve_path__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(1368);
/* harmony import */ var _ser_utils__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(1369);
/* harmony import */ var _serde_json__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(1370);
/* harmony import */ var _split_every__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(1371);
























/***/ }),
/* 1345 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NoOpLogger: () => (/* binding */ NoOpLogger)
/* harmony export */ });
class NoOpLogger {
    trace() { }
    debug() { }
    info() { }
    warn() { }
    error() { }
}


/***/ }),
/* 1346 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Client: () => (/* binding */ Client)
/* harmony export */ });
/* harmony import */ var _smithy_middleware_stack__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1347);

class Client {
    constructor(config) {
        this.middlewareStack = (0,_smithy_middleware_stack__WEBPACK_IMPORTED_MODULE_0__.constructStack)();
        this.config = config;
    }
    send(command, optionsOrCb, cb) {
        const options = typeof optionsOrCb !== "function" ? optionsOrCb : undefined;
        const callback = typeof optionsOrCb === "function" ? optionsOrCb : cb;
        const handler = command.resolveMiddleware(this.middlewareStack, this.config, options);
        if (callback) {
            handler(command)
                .then((result) => callback(null, result.output), (err) => callback(err))
                .catch(() => { });
        }
        else {
            return handler(command).then((result) => result.output);
        }
    }
    destroy() {
        if (this.config.requestHandler.destroy)
            this.config.requestHandler.destroy();
    }
}


/***/ }),
/* 1347 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   constructStack: () => (/* reexport safe */ _MiddlewareStack__WEBPACK_IMPORTED_MODULE_0__.constructStack)
/* harmony export */ });
/* harmony import */ var _MiddlewareStack__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1348);



/***/ }),
/* 1348 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   constructStack: () => (/* binding */ constructStack)
/* harmony export */ });
const getAllAliases = (name, aliases) => {
    const _aliases = [];
    if (name) {
        _aliases.push(name);
    }
    if (aliases) {
        for (const alias of aliases) {
            _aliases.push(alias);
        }
    }
    return _aliases;
};
const getMiddlewareNameWithAliases = (name, aliases) => {
    return `${name || "anonymous"}${aliases && aliases.length > 0 ? ` (a.k.a. ${aliases.join(",")})` : ""}`;
};
const constructStack = () => {
    let absoluteEntries = [];
    let relativeEntries = [];
    let identifyOnResolve = false;
    const entriesNameSet = new Set();
    const sort = (entries) => entries.sort((a, b) => stepWeights[b.step] - stepWeights[a.step] ||
        priorityWeights[b.priority || "normal"] - priorityWeights[a.priority || "normal"]);
    const removeByName = (toRemove) => {
        let isRemoved = false;
        const filterCb = (entry) => {
            const aliases = getAllAliases(entry.name, entry.aliases);
            if (aliases.includes(toRemove)) {
                isRemoved = true;
                for (const alias of aliases) {
                    entriesNameSet.delete(alias);
                }
                return false;
            }
            return true;
        };
        absoluteEntries = absoluteEntries.filter(filterCb);
        relativeEntries = relativeEntries.filter(filterCb);
        return isRemoved;
    };
    const removeByReference = (toRemove) => {
        let isRemoved = false;
        const filterCb = (entry) => {
            if (entry.middleware === toRemove) {
                isRemoved = true;
                for (const alias of getAllAliases(entry.name, entry.aliases)) {
                    entriesNameSet.delete(alias);
                }
                return false;
            }
            return true;
        };
        absoluteEntries = absoluteEntries.filter(filterCb);
        relativeEntries = relativeEntries.filter(filterCb);
        return isRemoved;
    };
    const cloneTo = (toStack) => {
        absoluteEntries.forEach((entry) => {
            toStack.add(entry.middleware, { ...entry });
        });
        relativeEntries.forEach((entry) => {
            toStack.addRelativeTo(entry.middleware, { ...entry });
        });
        toStack.identifyOnResolve?.(stack.identifyOnResolve());
        return toStack;
    };
    const expandRelativeMiddlewareList = (from) => {
        const expandedMiddlewareList = [];
        from.before.forEach((entry) => {
            if (entry.before.length === 0 && entry.after.length === 0) {
                expandedMiddlewareList.push(entry);
            }
            else {
                expandedMiddlewareList.push(...expandRelativeMiddlewareList(entry));
            }
        });
        expandedMiddlewareList.push(from);
        from.after.reverse().forEach((entry) => {
            if (entry.before.length === 0 && entry.after.length === 0) {
                expandedMiddlewareList.push(entry);
            }
            else {
                expandedMiddlewareList.push(...expandRelativeMiddlewareList(entry));
            }
        });
        return expandedMiddlewareList;
    };
    const getMiddlewareList = (debug = false) => {
        const normalizedAbsoluteEntries = [];
        const normalizedRelativeEntries = [];
        const normalizedEntriesNameMap = {};
        absoluteEntries.forEach((entry) => {
            const normalizedEntry = {
                ...entry,
                before: [],
                after: [],
            };
            for (const alias of getAllAliases(normalizedEntry.name, normalizedEntry.aliases)) {
                normalizedEntriesNameMap[alias] = normalizedEntry;
            }
            normalizedAbsoluteEntries.push(normalizedEntry);
        });
        relativeEntries.forEach((entry) => {
            const normalizedEntry = {
                ...entry,
                before: [],
                after: [],
            };
            for (const alias of getAllAliases(normalizedEntry.name, normalizedEntry.aliases)) {
                normalizedEntriesNameMap[alias] = normalizedEntry;
            }
            normalizedRelativeEntries.push(normalizedEntry);
        });
        normalizedRelativeEntries.forEach((entry) => {
            if (entry.toMiddleware) {
                const toMiddleware = normalizedEntriesNameMap[entry.toMiddleware];
                if (toMiddleware === undefined) {
                    if (debug) {
                        return;
                    }
                    throw new Error(`${entry.toMiddleware} is not found when adding ` +
                        `${getMiddlewareNameWithAliases(entry.name, entry.aliases)} ` +
                        `middleware ${entry.relation} ${entry.toMiddleware}`);
                }
                if (entry.relation === "after") {
                    toMiddleware.after.push(entry);
                }
                if (entry.relation === "before") {
                    toMiddleware.before.push(entry);
                }
            }
        });
        const mainChain = sort(normalizedAbsoluteEntries)
            .map(expandRelativeMiddlewareList)
            .reduce((wholeList, expandedMiddlewareList) => {
            wholeList.push(...expandedMiddlewareList);
            return wholeList;
        }, []);
        return mainChain;
    };
    const stack = {
        add: (middleware, options = {}) => {
            const { name, override, aliases: _aliases } = options;
            const entry = {
                step: "initialize",
                priority: "normal",
                middleware,
                ...options,
            };
            const aliases = getAllAliases(name, _aliases);
            if (aliases.length > 0) {
                if (aliases.some((alias) => entriesNameSet.has(alias))) {
                    if (!override)
                        throw new Error(`Duplicate middleware name '${getMiddlewareNameWithAliases(name, _aliases)}'`);
                    for (const alias of aliases) {
                        const toOverrideIndex = absoluteEntries.findIndex((entry) => entry.name === alias || entry.aliases?.some((a) => a === alias));
                        if (toOverrideIndex === -1) {
                            continue;
                        }
                        const toOverride = absoluteEntries[toOverrideIndex];
                        if (toOverride.step !== entry.step || entry.priority !== toOverride.priority) {
                            throw new Error(`"${getMiddlewareNameWithAliases(toOverride.name, toOverride.aliases)}" middleware with ` +
                                `${toOverride.priority} priority in ${toOverride.step} step cannot ` +
                                `be overridden by "${getMiddlewareNameWithAliases(name, _aliases)}" middleware with ` +
                                `${entry.priority} priority in ${entry.step} step.`);
                        }
                        absoluteEntries.splice(toOverrideIndex, 1);
                    }
                }
                for (const alias of aliases) {
                    entriesNameSet.add(alias);
                }
            }
            absoluteEntries.push(entry);
        },
        addRelativeTo: (middleware, options) => {
            const { name, override, aliases: _aliases } = options;
            const entry = {
                middleware,
                ...options,
            };
            const aliases = getAllAliases(name, _aliases);
            if (aliases.length > 0) {
                if (aliases.some((alias) => entriesNameSet.has(alias))) {
                    if (!override)
                        throw new Error(`Duplicate middleware name '${getMiddlewareNameWithAliases(name, _aliases)}'`);
                    for (const alias of aliases) {
                        const toOverrideIndex = relativeEntries.findIndex((entry) => entry.name === alias || entry.aliases?.some((a) => a === alias));
                        if (toOverrideIndex === -1) {
                            continue;
                        }
                        const toOverride = relativeEntries[toOverrideIndex];
                        if (toOverride.toMiddleware !== entry.toMiddleware || toOverride.relation !== entry.relation) {
                            throw new Error(`"${getMiddlewareNameWithAliases(toOverride.name, toOverride.aliases)}" middleware ` +
                                `${toOverride.relation} "${toOverride.toMiddleware}" middleware cannot be overridden ` +
                                `by "${getMiddlewareNameWithAliases(name, _aliases)}" middleware ${entry.relation} ` +
                                `"${entry.toMiddleware}" middleware.`);
                        }
                        relativeEntries.splice(toOverrideIndex, 1);
                    }
                }
                for (const alias of aliases) {
                    entriesNameSet.add(alias);
                }
            }
            relativeEntries.push(entry);
        },
        clone: () => cloneTo(constructStack()),
        use: (plugin) => {
            plugin.applyToStack(stack);
        },
        remove: (toRemove) => {
            if (typeof toRemove === "string")
                return removeByName(toRemove);
            else
                return removeByReference(toRemove);
        },
        removeByTag: (toRemove) => {
            let isRemoved = false;
            const filterCb = (entry) => {
                const { tags, name, aliases: _aliases } = entry;
                if (tags && tags.includes(toRemove)) {
                    const aliases = getAllAliases(name, _aliases);
                    for (const alias of aliases) {
                        entriesNameSet.delete(alias);
                    }
                    isRemoved = true;
                    return false;
                }
                return true;
            };
            absoluteEntries = absoluteEntries.filter(filterCb);
            relativeEntries = relativeEntries.filter(filterCb);
            return isRemoved;
        },
        concat: (from) => {
            const cloned = cloneTo(constructStack());
            cloned.use(from);
            cloned.identifyOnResolve(identifyOnResolve || cloned.identifyOnResolve() || (from.identifyOnResolve?.() ?? false));
            return cloned;
        },
        applyToStack: cloneTo,
        identify: () => {
            return getMiddlewareList(true).map((mw) => {
                const step = mw.step ??
                    mw.relation +
                        " " +
                        mw.toMiddleware;
                return getMiddlewareNameWithAliases(mw.name, mw.aliases) + " - " + step;
            });
        },
        identifyOnResolve(toggle) {
            if (typeof toggle === "boolean")
                identifyOnResolve = toggle;
            return identifyOnResolve;
        },
        resolve: (handler, context) => {
            for (const middleware of getMiddlewareList()
                .map((entry) => entry.middleware)
                .reverse()) {
                handler = middleware(handler, context);
            }
            if (identifyOnResolve) {
                console.log(stack.identify());
            }
            return handler;
        },
    };
    return stack;
};
const stepWeights = {
    initialize: 5,
    serialize: 4,
    build: 3,
    finalizeRequest: 2,
    deserialize: 1,
};
const priorityWeights = {
    high: 3,
    normal: 2,
    low: 1,
};


/***/ }),
/* 1349 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   collectBody: () => (/* binding */ collectBody)
/* harmony export */ });
/* harmony import */ var _smithy_util_stream__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(331);

const collectBody = async (streamBody = new Uint8Array(), context) => {
    if (streamBody instanceof Uint8Array) {
        return _smithy_util_stream__WEBPACK_IMPORTED_MODULE_0__.Uint8ArrayBlobAdapter.mutate(streamBody);
    }
    if (!streamBody) {
        return _smithy_util_stream__WEBPACK_IMPORTED_MODULE_0__.Uint8ArrayBlobAdapter.mutate(new Uint8Array());
    }
    const fromContext = context.streamCollector(streamBody);
    return _smithy_util_stream__WEBPACK_IMPORTED_MODULE_0__.Uint8ArrayBlobAdapter.mutate(await fromContext);
};


/***/ }),
/* 1350 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Command: () => (/* binding */ Command)
/* harmony export */ });
/* harmony import */ var _smithy_middleware_stack__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1347);
/* harmony import */ var _smithy_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1128);


class Command {
    constructor() {
        this.middlewareStack = (0,_smithy_middleware_stack__WEBPACK_IMPORTED_MODULE_0__.constructStack)();
    }
    static classBuilder() {
        return new ClassBuilder();
    }
    resolveMiddlewareWithContext(clientStack, configuration, options, { middlewareFn, clientName, commandName, inputFilterSensitiveLog, outputFilterSensitiveLog, smithyContext, additionalContext, CommandCtor, }) {
        for (const mw of middlewareFn.bind(this)(CommandCtor, clientStack, configuration, options)) {
            this.middlewareStack.use(mw);
        }
        const stack = clientStack.concat(this.middlewareStack);
        const { logger } = configuration;
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog,
            outputFilterSensitiveLog,
            [_smithy_types__WEBPACK_IMPORTED_MODULE_1__.SMITHY_CONTEXT_KEY]: {
                ...smithyContext,
            },
            ...additionalContext,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
}
class ClassBuilder {
    constructor() {
        this._init = () => { };
        this._ep = {};
        this._middlewareFn = () => [];
        this._commandName = "";
        this._clientName = "";
        this._additionalContext = {};
        this._smithyContext = {};
        this._inputFilterSensitiveLog = (_) => _;
        this._outputFilterSensitiveLog = (_) => _;
        this._serializer = null;
        this._deserializer = null;
    }
    init(cb) {
        this._init = cb;
    }
    ep(endpointParameterInstructions) {
        this._ep = endpointParameterInstructions;
        return this;
    }
    m(middlewareSupplier) {
        this._middlewareFn = middlewareSupplier;
        return this;
    }
    s(service, operation, smithyContext = {}) {
        this._smithyContext = {
            service,
            operation,
            ...smithyContext,
        };
        return this;
    }
    c(additionalContext = {}) {
        this._additionalContext = additionalContext;
        return this;
    }
    n(clientName, commandName) {
        this._clientName = clientName;
        this._commandName = commandName;
        return this;
    }
    f(inputFilter = (_) => _, outputFilter = (_) => _) {
        this._inputFilterSensitiveLog = inputFilter;
        this._outputFilterSensitiveLog = outputFilter;
        return this;
    }
    ser(serializer) {
        this._serializer = serializer;
        return this;
    }
    de(deserializer) {
        this._deserializer = deserializer;
        return this;
    }
    build() {
        const closure = this;
        let CommandRef;
        return (CommandRef = class extends Command {
            static getEndpointParameterInstructions() {
                return closure._ep;
            }
            constructor(...[input]) {
                super();
                this.serialize = closure._serializer;
                this.deserialize = closure._deserializer;
                this.input = input ?? {};
                closure._init(this);
            }
            resolveMiddleware(stack, configuration, options) {
                return this.resolveMiddlewareWithContext(stack, configuration, options, {
                    CommandCtor: CommandRef,
                    middlewareFn: closure._middlewareFn,
                    clientName: closure._clientName,
                    commandName: closure._commandName,
                    inputFilterSensitiveLog: closure._inputFilterSensitiveLog,
                    outputFilterSensitiveLog: closure._outputFilterSensitiveLog,
                    smithyContext: closure._smithyContext,
                    additionalContext: closure._additionalContext,
                });
            }
        });
    }
}


/***/ }),
/* 1351 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SENSITIVE_STRING: () => (/* binding */ SENSITIVE_STRING)
/* harmony export */ });
const SENSITIVE_STRING = "***SensitiveInformation***";


/***/ }),
/* 1352 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createAggregatedClient: () => (/* binding */ createAggregatedClient)
/* harmony export */ });
const createAggregatedClient = (commands, Client) => {
    for (const command of Object.keys(commands)) {
        const CommandCtor = commands[command];
        const methodImpl = async function (args, optionsOrCb, cb) {
            const command = new CommandCtor(args);
            if (typeof optionsOrCb === "function") {
                this.send(command, optionsOrCb);
            }
            else if (typeof cb === "function") {
                if (typeof optionsOrCb !== "object")
                    throw new Error(`Expected http options but got ${typeof optionsOrCb}`);
                this.send(command, optionsOrCb || {}, cb);
            }
            else {
                return this.send(command, optionsOrCb);
            }
        };
        const methodName = (command[0].toLowerCase() + command.slice(1)).replace(/Command$/, "");
        Client.prototype[methodName] = methodImpl;
    }
};


/***/ }),
/* 1353 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   dateToUtcString: () => (/* binding */ dateToUtcString),
/* harmony export */   parseEpochTimestamp: () => (/* binding */ parseEpochTimestamp),
/* harmony export */   parseRfc3339DateTime: () => (/* binding */ parseRfc3339DateTime),
/* harmony export */   parseRfc3339DateTimeWithOffset: () => (/* binding */ parseRfc3339DateTimeWithOffset),
/* harmony export */   parseRfc7231DateTime: () => (/* binding */ parseRfc7231DateTime)
/* harmony export */ });
/* harmony import */ var _parse_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1354);

const DAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
function dateToUtcString(date) {
    const year = date.getUTCFullYear();
    const month = date.getUTCMonth();
    const dayOfWeek = date.getUTCDay();
    const dayOfMonthInt = date.getUTCDate();
    const hoursInt = date.getUTCHours();
    const minutesInt = date.getUTCMinutes();
    const secondsInt = date.getUTCSeconds();
    const dayOfMonthString = dayOfMonthInt < 10 ? `0${dayOfMonthInt}` : `${dayOfMonthInt}`;
    const hoursString = hoursInt < 10 ? `0${hoursInt}` : `${hoursInt}`;
    const minutesString = minutesInt < 10 ? `0${minutesInt}` : `${minutesInt}`;
    const secondsString = secondsInt < 10 ? `0${secondsInt}` : `${secondsInt}`;
    return `${DAYS[dayOfWeek]}, ${dayOfMonthString} ${MONTHS[month]} ${year} ${hoursString}:${minutesString}:${secondsString} GMT`;
}
const RFC3339 = new RegExp(/^(\d{4})-(\d{2})-(\d{2})[tT](\d{2}):(\d{2}):(\d{2})(?:\.(\d+))?[zZ]$/);
const parseRfc3339DateTime = (value) => {
    if (value === null || value === undefined) {
        return undefined;
    }
    if (typeof value !== "string") {
        throw new TypeError("RFC-3339 date-times must be expressed as strings");
    }
    const match = RFC3339.exec(value);
    if (!match) {
        throw new TypeError("Invalid RFC-3339 date-time value");
    }
    const [_, yearStr, monthStr, dayStr, hours, minutes, seconds, fractionalMilliseconds] = match;
    const year = (0,_parse_utils__WEBPACK_IMPORTED_MODULE_0__.strictParseShort)(stripLeadingZeroes(yearStr));
    const month = parseDateValue(monthStr, "month", 1, 12);
    const day = parseDateValue(dayStr, "day", 1, 31);
    return buildDate(year, month, day, { hours, minutes, seconds, fractionalMilliseconds });
};
const RFC3339_WITH_OFFSET = new RegExp(/^(\d{4})-(\d{2})-(\d{2})[tT](\d{2}):(\d{2}):(\d{2})(?:\.(\d+))?(([-+]\d{2}\:\d{2})|[zZ])$/);
const parseRfc3339DateTimeWithOffset = (value) => {
    if (value === null || value === undefined) {
        return undefined;
    }
    if (typeof value !== "string") {
        throw new TypeError("RFC-3339 date-times must be expressed as strings");
    }
    const match = RFC3339_WITH_OFFSET.exec(value);
    if (!match) {
        throw new TypeError("Invalid RFC-3339 date-time value");
    }
    const [_, yearStr, monthStr, dayStr, hours, minutes, seconds, fractionalMilliseconds, offsetStr] = match;
    const year = (0,_parse_utils__WEBPACK_IMPORTED_MODULE_0__.strictParseShort)(stripLeadingZeroes(yearStr));
    const month = parseDateValue(monthStr, "month", 1, 12);
    const day = parseDateValue(dayStr, "day", 1, 31);
    const date = buildDate(year, month, day, { hours, minutes, seconds, fractionalMilliseconds });
    if (offsetStr.toUpperCase() != "Z") {
        date.setTime(date.getTime() - parseOffsetToMilliseconds(offsetStr));
    }
    return date;
};
const IMF_FIXDATE = new RegExp(/^(?:Mon|Tue|Wed|Thu|Fri|Sat|Sun), (\d{2}) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) (\d{4}) (\d{1,2}):(\d{2}):(\d{2})(?:\.(\d+))? GMT$/);
const RFC_850_DATE = new RegExp(/^(?:Monday|Tuesday|Wednesday|Thursday|Friday|Saturday|Sunday), (\d{2})-(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)-(\d{2}) (\d{1,2}):(\d{2}):(\d{2})(?:\.(\d+))? GMT$/);
const ASC_TIME = new RegExp(/^(?:Mon|Tue|Wed|Thu|Fri|Sat|Sun) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) ( [1-9]|\d{2}) (\d{1,2}):(\d{2}):(\d{2})(?:\.(\d+))? (\d{4})$/);
const parseRfc7231DateTime = (value) => {
    if (value === null || value === undefined) {
        return undefined;
    }
    if (typeof value !== "string") {
        throw new TypeError("RFC-7231 date-times must be expressed as strings");
    }
    let match = IMF_FIXDATE.exec(value);
    if (match) {
        const [_, dayStr, monthStr, yearStr, hours, minutes, seconds, fractionalMilliseconds] = match;
        return buildDate((0,_parse_utils__WEBPACK_IMPORTED_MODULE_0__.strictParseShort)(stripLeadingZeroes(yearStr)), parseMonthByShortName(monthStr), parseDateValue(dayStr, "day", 1, 31), { hours, minutes, seconds, fractionalMilliseconds });
    }
    match = RFC_850_DATE.exec(value);
    if (match) {
        const [_, dayStr, monthStr, yearStr, hours, minutes, seconds, fractionalMilliseconds] = match;
        return adjustRfc850Year(buildDate(parseTwoDigitYear(yearStr), parseMonthByShortName(monthStr), parseDateValue(dayStr, "day", 1, 31), {
            hours,
            minutes,
            seconds,
            fractionalMilliseconds,
        }));
    }
    match = ASC_TIME.exec(value);
    if (match) {
        const [_, monthStr, dayStr, hours, minutes, seconds, fractionalMilliseconds, yearStr] = match;
        return buildDate((0,_parse_utils__WEBPACK_IMPORTED_MODULE_0__.strictParseShort)(stripLeadingZeroes(yearStr)), parseMonthByShortName(monthStr), parseDateValue(dayStr.trimLeft(), "day", 1, 31), { hours, minutes, seconds, fractionalMilliseconds });
    }
    throw new TypeError("Invalid RFC-7231 date-time value");
};
const parseEpochTimestamp = (value) => {
    if (value === null || value === undefined) {
        return undefined;
    }
    let valueAsDouble;
    if (typeof value === "number") {
        valueAsDouble = value;
    }
    else if (typeof value === "string") {
        valueAsDouble = (0,_parse_utils__WEBPACK_IMPORTED_MODULE_0__.strictParseDouble)(value);
    }
    else {
        throw new TypeError("Epoch timestamps must be expressed as floating point numbers or their string representation");
    }
    if (Number.isNaN(valueAsDouble) || valueAsDouble === Infinity || valueAsDouble === -Infinity) {
        throw new TypeError("Epoch timestamps must be valid, non-Infinite, non-NaN numerics");
    }
    return new Date(Math.round(valueAsDouble * 1000));
};
const buildDate = (year, month, day, time) => {
    const adjustedMonth = month - 1;
    validateDayOfMonth(year, adjustedMonth, day);
    return new Date(Date.UTC(year, adjustedMonth, day, parseDateValue(time.hours, "hour", 0, 23), parseDateValue(time.minutes, "minute", 0, 59), parseDateValue(time.seconds, "seconds", 0, 60), parseMilliseconds(time.fractionalMilliseconds)));
};
const parseTwoDigitYear = (value) => {
    const thisYear = new Date().getUTCFullYear();
    const valueInThisCentury = Math.floor(thisYear / 100) * 100 + (0,_parse_utils__WEBPACK_IMPORTED_MODULE_0__.strictParseShort)(stripLeadingZeroes(value));
    if (valueInThisCentury < thisYear) {
        return valueInThisCentury + 100;
    }
    return valueInThisCentury;
};
const FIFTY_YEARS_IN_MILLIS = 50 * 365 * 24 * 60 * 60 * 1000;
const adjustRfc850Year = (input) => {
    if (input.getTime() - new Date().getTime() > FIFTY_YEARS_IN_MILLIS) {
        return new Date(Date.UTC(input.getUTCFullYear() - 100, input.getUTCMonth(), input.getUTCDate(), input.getUTCHours(), input.getUTCMinutes(), input.getUTCSeconds(), input.getUTCMilliseconds()));
    }
    return input;
};
const parseMonthByShortName = (value) => {
    const monthIdx = MONTHS.indexOf(value);
    if (monthIdx < 0) {
        throw new TypeError(`Invalid month: ${value}`);
    }
    return monthIdx + 1;
};
const DAYS_IN_MONTH = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
const validateDayOfMonth = (year, month, day) => {
    let maxDays = DAYS_IN_MONTH[month];
    if (month === 1 && isLeapYear(year)) {
        maxDays = 29;
    }
    if (day > maxDays) {
        throw new TypeError(`Invalid day for ${MONTHS[month]} in ${year}: ${day}`);
    }
};
const isLeapYear = (year) => {
    return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
};
const parseDateValue = (value, type, lower, upper) => {
    const dateVal = (0,_parse_utils__WEBPACK_IMPORTED_MODULE_0__.strictParseByte)(stripLeadingZeroes(value));
    if (dateVal < lower || dateVal > upper) {
        throw new TypeError(`${type} must be between ${lower} and ${upper}, inclusive`);
    }
    return dateVal;
};
const parseMilliseconds = (value) => {
    if (value === null || value === undefined) {
        return 0;
    }
    return (0,_parse_utils__WEBPACK_IMPORTED_MODULE_0__.strictParseFloat32)("0." + value) * 1000;
};
const parseOffsetToMilliseconds = (value) => {
    const directionStr = value[0];
    let direction = 1;
    if (directionStr == "+") {
        direction = 1;
    }
    else if (directionStr == "-") {
        direction = -1;
    }
    else {
        throw new TypeError(`Offset direction, ${directionStr}, must be "+" or "-"`);
    }
    const hour = Number(value.substring(1, 3));
    const minute = Number(value.substring(4, 6));
    return direction * (hour * 60 + minute) * 60 * 1000;
};
const stripLeadingZeroes = (value) => {
    let idx = 0;
    while (idx < value.length - 1 && value.charAt(idx) === "0") {
        idx++;
    }
    if (idx === 0) {
        return value;
    }
    return value.slice(idx);
};


/***/ }),
/* 1354 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   expectBoolean: () => (/* binding */ expectBoolean),
/* harmony export */   expectByte: () => (/* binding */ expectByte),
/* harmony export */   expectFloat32: () => (/* binding */ expectFloat32),
/* harmony export */   expectInt: () => (/* binding */ expectInt),
/* harmony export */   expectInt32: () => (/* binding */ expectInt32),
/* harmony export */   expectLong: () => (/* binding */ expectLong),
/* harmony export */   expectNonNull: () => (/* binding */ expectNonNull),
/* harmony export */   expectNumber: () => (/* binding */ expectNumber),
/* harmony export */   expectObject: () => (/* binding */ expectObject),
/* harmony export */   expectShort: () => (/* binding */ expectShort),
/* harmony export */   expectString: () => (/* binding */ expectString),
/* harmony export */   expectUnion: () => (/* binding */ expectUnion),
/* harmony export */   handleFloat: () => (/* binding */ handleFloat),
/* harmony export */   limitedParseDouble: () => (/* binding */ limitedParseDouble),
/* harmony export */   limitedParseFloat: () => (/* binding */ limitedParseFloat),
/* harmony export */   limitedParseFloat32: () => (/* binding */ limitedParseFloat32),
/* harmony export */   logger: () => (/* binding */ logger),
/* harmony export */   parseBoolean: () => (/* binding */ parseBoolean),
/* harmony export */   strictParseByte: () => (/* binding */ strictParseByte),
/* harmony export */   strictParseDouble: () => (/* binding */ strictParseDouble),
/* harmony export */   strictParseFloat: () => (/* binding */ strictParseFloat),
/* harmony export */   strictParseFloat32: () => (/* binding */ strictParseFloat32),
/* harmony export */   strictParseInt: () => (/* binding */ strictParseInt),
/* harmony export */   strictParseInt32: () => (/* binding */ strictParseInt32),
/* harmony export */   strictParseLong: () => (/* binding */ strictParseLong),
/* harmony export */   strictParseShort: () => (/* binding */ strictParseShort)
/* harmony export */ });
const parseBoolean = (value) => {
    switch (value) {
        case "true":
            return true;
        case "false":
            return false;
        default:
            throw new Error(`Unable to parse boolean value "${value}"`);
    }
};
const expectBoolean = (value) => {
    if (value === null || value === undefined) {
        return undefined;
    }
    if (typeof value === "number") {
        if (value === 0 || value === 1) {
            logger.warn(stackTraceWarning(`Expected boolean, got ${typeof value}: ${value}`));
        }
        if (value === 0) {
            return false;
        }
        if (value === 1) {
            return true;
        }
    }
    if (typeof value === "string") {
        const lower = value.toLowerCase();
        if (lower === "false" || lower === "true") {
            logger.warn(stackTraceWarning(`Expected boolean, got ${typeof value}: ${value}`));
        }
        if (lower === "false") {
            return false;
        }
        if (lower === "true") {
            return true;
        }
    }
    if (typeof value === "boolean") {
        return value;
    }
    throw new TypeError(`Expected boolean, got ${typeof value}: ${value}`);
};
const expectNumber = (value) => {
    if (value === null || value === undefined) {
        return undefined;
    }
    if (typeof value === "string") {
        const parsed = parseFloat(value);
        if (!Number.isNaN(parsed)) {
            if (String(parsed) !== String(value)) {
                logger.warn(stackTraceWarning(`Expected number but observed string: ${value}`));
            }
            return parsed;
        }
    }
    if (typeof value === "number") {
        return value;
    }
    throw new TypeError(`Expected number, got ${typeof value}: ${value}`);
};
const MAX_FLOAT = Math.ceil(2 ** 127 * (2 - 2 ** -23));
const expectFloat32 = (value) => {
    const expected = expectNumber(value);
    if (expected !== undefined && !Number.isNaN(expected) && expected !== Infinity && expected !== -Infinity) {
        if (Math.abs(expected) > MAX_FLOAT) {
            throw new TypeError(`Expected 32-bit float, got ${value}`);
        }
    }
    return expected;
};
const expectLong = (value) => {
    if (value === null || value === undefined) {
        return undefined;
    }
    if (Number.isInteger(value) && !Number.isNaN(value)) {
        return value;
    }
    throw new TypeError(`Expected integer, got ${typeof value}: ${value}`);
};
const expectInt = expectLong;
const expectInt32 = (value) => expectSizedInt(value, 32);
const expectShort = (value) => expectSizedInt(value, 16);
const expectByte = (value) => expectSizedInt(value, 8);
const expectSizedInt = (value, size) => {
    const expected = expectLong(value);
    if (expected !== undefined && castInt(expected, size) !== expected) {
        throw new TypeError(`Expected ${size}-bit integer, got ${value}`);
    }
    return expected;
};
const castInt = (value, size) => {
    switch (size) {
        case 32:
            return Int32Array.of(value)[0];
        case 16:
            return Int16Array.of(value)[0];
        case 8:
            return Int8Array.of(value)[0];
    }
};
const expectNonNull = (value, location) => {
    if (value === null || value === undefined) {
        if (location) {
            throw new TypeError(`Expected a non-null value for ${location}`);
        }
        throw new TypeError("Expected a non-null value");
    }
    return value;
};
const expectObject = (value) => {
    if (value === null || value === undefined) {
        return undefined;
    }
    if (typeof value === "object" && !Array.isArray(value)) {
        return value;
    }
    const receivedType = Array.isArray(value) ? "array" : typeof value;
    throw new TypeError(`Expected object, got ${receivedType}: ${value}`);
};
const expectString = (value) => {
    if (value === null || value === undefined) {
        return undefined;
    }
    if (typeof value === "string") {
        return value;
    }
    if (["boolean", "number", "bigint"].includes(typeof value)) {
        logger.warn(stackTraceWarning(`Expected string, got ${typeof value}: ${value}`));
        return String(value);
    }
    throw new TypeError(`Expected string, got ${typeof value}: ${value}`);
};
const expectUnion = (value) => {
    if (value === null || value === undefined) {
        return undefined;
    }
    const asObject = expectObject(value);
    const setKeys = Object.entries(asObject)
        .filter(([, v]) => v != null)
        .map(([k]) => k);
    if (setKeys.length === 0) {
        throw new TypeError(`Unions must have exactly one non-null member. None were found.`);
    }
    if (setKeys.length > 1) {
        throw new TypeError(`Unions must have exactly one non-null member. Keys ${setKeys} were not null.`);
    }
    return asObject;
};
const strictParseDouble = (value) => {
    if (typeof value == "string") {
        return expectNumber(parseNumber(value));
    }
    return expectNumber(value);
};
const strictParseFloat = strictParseDouble;
const strictParseFloat32 = (value) => {
    if (typeof value == "string") {
        return expectFloat32(parseNumber(value));
    }
    return expectFloat32(value);
};
const NUMBER_REGEX = /(-?(?:0|[1-9]\d*)(?:\.\d+)?(?:[eE][+-]?\d+)?)|(-?Infinity)|(NaN)/g;
const parseNumber = (value) => {
    const matches = value.match(NUMBER_REGEX);
    if (matches === null || matches[0].length !== value.length) {
        throw new TypeError(`Expected real number, got implicit NaN`);
    }
    return parseFloat(value);
};
const limitedParseDouble = (value) => {
    if (typeof value == "string") {
        return parseFloatString(value);
    }
    return expectNumber(value);
};
const handleFloat = limitedParseDouble;
const limitedParseFloat = limitedParseDouble;
const limitedParseFloat32 = (value) => {
    if (typeof value == "string") {
        return parseFloatString(value);
    }
    return expectFloat32(value);
};
const parseFloatString = (value) => {
    switch (value) {
        case "NaN":
            return NaN;
        case "Infinity":
            return Infinity;
        case "-Infinity":
            return -Infinity;
        default:
            throw new Error(`Unable to parse float value: ${value}`);
    }
};
const strictParseLong = (value) => {
    if (typeof value === "string") {
        return expectLong(parseNumber(value));
    }
    return expectLong(value);
};
const strictParseInt = strictParseLong;
const strictParseInt32 = (value) => {
    if (typeof value === "string") {
        return expectInt32(parseNumber(value));
    }
    return expectInt32(value);
};
const strictParseShort = (value) => {
    if (typeof value === "string") {
        return expectShort(parseNumber(value));
    }
    return expectShort(value);
};
const strictParseByte = (value) => {
    if (typeof value === "string") {
        return expectByte(parseNumber(value));
    }
    return expectByte(value);
};
const stackTraceWarning = (message) => {
    return String(new TypeError(message).stack || message)
        .split("\n")
        .slice(0, 5)
        .filter((s) => !s.includes("stackTraceWarning"))
        .join("\n");
};
const logger = {
    warn: console.warn,
};


/***/ }),
/* 1355 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   throwDefaultError: () => (/* binding */ throwDefaultError),
/* harmony export */   withBaseException: () => (/* binding */ withBaseException)
/* harmony export */ });
/* harmony import */ var _exceptions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1356);

const throwDefaultError = ({ output, parsedBody, exceptionCtor, errorCode }) => {
    const $metadata = deserializeMetadata(output);
    const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
    const response = new exceptionCtor({
        name: parsedBody?.code || parsedBody?.Code || errorCode || statusCode || "UnknownError",
        $fault: "client",
        $metadata,
    });
    throw (0,_exceptions__WEBPACK_IMPORTED_MODULE_0__.decorateServiceException)(response, parsedBody);
};
const withBaseException = (ExceptionCtor) => {
    return ({ output, parsedBody, errorCode }) => {
        throwDefaultError({ output, parsedBody, exceptionCtor: ExceptionCtor, errorCode });
    };
};
const deserializeMetadata = (output) => ({
    httpStatusCode: output.statusCode,
    requestId: output.headers["x-amzn-requestid"] ?? output.headers["x-amzn-request-id"] ?? output.headers["x-amz-request-id"],
    extendedRequestId: output.headers["x-amz-id-2"],
    cfId: output.headers["x-amz-cf-id"],
});


/***/ }),
/* 1356 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ServiceException: () => (/* binding */ ServiceException),
/* harmony export */   decorateServiceException: () => (/* binding */ decorateServiceException)
/* harmony export */ });
class ServiceException extends Error {
    constructor(options) {
        super(options.message);
        Object.setPrototypeOf(this, ServiceException.prototype);
        this.name = options.name;
        this.$fault = options.$fault;
        this.$metadata = options.$metadata;
    }
}
const decorateServiceException = (exception, additions = {}) => {
    Object.entries(additions)
        .filter(([, v]) => v !== undefined)
        .forEach(([k, v]) => {
        if (exception[k] == undefined || exception[k] === "") {
            exception[k] = v;
        }
    });
    const message = exception.message || exception.Message || "UnknownError";
    exception.message = message;
    delete exception.Message;
    return exception;
};


/***/ }),
/* 1357 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   loadConfigsForDefaultMode: () => (/* binding */ loadConfigsForDefaultMode)
/* harmony export */ });
const loadConfigsForDefaultMode = (mode) => {
    switch (mode) {
        case "standard":
            return {
                retryMode: "standard",
                connectionTimeout: 3100,
            };
        case "in-region":
            return {
                retryMode: "standard",
                connectionTimeout: 1100,
            };
        case "cross-region":
            return {
                retryMode: "standard",
                connectionTimeout: 3100,
            };
        case "mobile":
            return {
                retryMode: "standard",
                connectionTimeout: 30000,
            };
        default:
            return {};
    }
};


/***/ }),
/* 1358 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   emitWarningIfUnsupportedVersion: () => (/* binding */ emitWarningIfUnsupportedVersion)
/* harmony export */ });
let warningEmitted = false;
const emitWarningIfUnsupportedVersion = (version) => {
    if (version && !warningEmitted && parseInt(version.substring(1, version.indexOf("."))) < 16) {
        warningEmitted = true;
    }
};


/***/ }),
/* 1359 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getDefaultClientConfiguration: () => (/* reexport safe */ _defaultExtensionConfiguration__WEBPACK_IMPORTED_MODULE_0__.getDefaultClientConfiguration),
/* harmony export */   getDefaultExtensionConfiguration: () => (/* reexport safe */ _defaultExtensionConfiguration__WEBPACK_IMPORTED_MODULE_0__.getDefaultExtensionConfiguration),
/* harmony export */   resolveDefaultRuntimeConfig: () => (/* reexport safe */ _defaultExtensionConfiguration__WEBPACK_IMPORTED_MODULE_0__.resolveDefaultRuntimeConfig)
/* harmony export */ });
/* harmony import */ var _defaultExtensionConfiguration__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1360);



/***/ }),
/* 1360 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getDefaultClientConfiguration: () => (/* binding */ getDefaultClientConfiguration),
/* harmony export */   getDefaultExtensionConfiguration: () => (/* binding */ getDefaultExtensionConfiguration),
/* harmony export */   resolveDefaultRuntimeConfig: () => (/* binding */ resolveDefaultRuntimeConfig)
/* harmony export */ });
/* harmony import */ var _checksum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1361);
/* harmony import */ var _retry__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1362);


const getDefaultExtensionConfiguration = (runtimeConfig) => {
    return {
        ...(0,_checksum__WEBPACK_IMPORTED_MODULE_0__.getChecksumConfiguration)(runtimeConfig),
        ...(0,_retry__WEBPACK_IMPORTED_MODULE_1__.getRetryConfiguration)(runtimeConfig),
    };
};
const getDefaultClientConfiguration = getDefaultExtensionConfiguration;
const resolveDefaultRuntimeConfig = (config) => {
    return {
        ...(0,_checksum__WEBPACK_IMPORTED_MODULE_0__.resolveChecksumRuntimeConfig)(config),
        ...(0,_retry__WEBPACK_IMPORTED_MODULE_1__.resolveRetryRuntimeConfig)(config),
    };
};


/***/ }),
/* 1361 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AlgorithmId: () => (/* reexport safe */ _smithy_types__WEBPACK_IMPORTED_MODULE_0__.AlgorithmId),
/* harmony export */   getChecksumConfiguration: () => (/* binding */ getChecksumConfiguration),
/* harmony export */   resolveChecksumRuntimeConfig: () => (/* binding */ resolveChecksumRuntimeConfig)
/* harmony export */ });
/* harmony import */ var _smithy_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1128);


const getChecksumConfiguration = (runtimeConfig) => {
    const checksumAlgorithms = [];
    for (const id in _smithy_types__WEBPACK_IMPORTED_MODULE_0__.AlgorithmId) {
        const algorithmId = _smithy_types__WEBPACK_IMPORTED_MODULE_0__.AlgorithmId[id];
        if (runtimeConfig[algorithmId] === undefined) {
            continue;
        }
        checksumAlgorithms.push({
            algorithmId: () => algorithmId,
            checksumConstructor: () => runtimeConfig[algorithmId],
        });
    }
    return {
        _checksumAlgorithms: checksumAlgorithms,
        addChecksumAlgorithm(algo) {
            this._checksumAlgorithms.push(algo);
        },
        checksumAlgorithms() {
            return this._checksumAlgorithms;
        },
    };
};
const resolveChecksumRuntimeConfig = (clientConfig) => {
    const runtimeConfig = {};
    clientConfig.checksumAlgorithms().forEach((checksumAlgorithm) => {
        runtimeConfig[checksumAlgorithm.algorithmId()] = checksumAlgorithm.checksumConstructor();
    });
    return runtimeConfig;
};


/***/ }),
/* 1362 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getRetryConfiguration: () => (/* binding */ getRetryConfiguration),
/* harmony export */   resolveRetryRuntimeConfig: () => (/* binding */ resolveRetryRuntimeConfig)
/* harmony export */ });
const getRetryConfiguration = (runtimeConfig) => {
    let _retryStrategy = runtimeConfig.retryStrategy;
    return {
        setRetryStrategy(retryStrategy) {
            _retryStrategy = retryStrategy;
        },
        retryStrategy() {
            return _retryStrategy;
        },
    };
};
const resolveRetryRuntimeConfig = (retryStrategyConfiguration) => {
    const runtimeConfig = {};
    runtimeConfig.retryStrategy = retryStrategyConfiguration.retryStrategy();
    return runtimeConfig;
};


/***/ }),
/* 1363 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   extendedEncodeURIComponent: () => (/* binding */ extendedEncodeURIComponent)
/* harmony export */ });
function extendedEncodeURIComponent(str) {
    return encodeURIComponent(str).replace(/[!'()*]/g, function (c) {
        return "%" + c.charCodeAt(0).toString(16).toUpperCase();
    });
}


/***/ }),
/* 1364 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getArrayIfSingleItem: () => (/* binding */ getArrayIfSingleItem)
/* harmony export */ });
const getArrayIfSingleItem = (mayBeArray) => Array.isArray(mayBeArray) ? mayBeArray : [mayBeArray];


/***/ }),
/* 1365 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getValueFromTextNode: () => (/* binding */ getValueFromTextNode)
/* harmony export */ });
const getValueFromTextNode = (obj) => {
    const textNodeName = "#text";
    for (const key in obj) {
        if (obj.hasOwnProperty(key) && obj[key][textNodeName] !== undefined) {
            obj[key] = obj[key][textNodeName];
        }
        else if (typeof obj[key] === "object" && obj[key] !== null) {
            obj[key] = getValueFromTextNode(obj[key]);
        }
    }
    return obj;
};


/***/ }),
/* 1366 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LazyJsonString: () => (/* binding */ LazyJsonString),
/* harmony export */   StringWrapper: () => (/* binding */ StringWrapper)
/* harmony export */ });
const StringWrapper = function () {
    const Class = Object.getPrototypeOf(this).constructor;
    const Constructor = Function.bind.apply(String, [null, ...arguments]);
    const instance = new Constructor();
    Object.setPrototypeOf(instance, Class.prototype);
    return instance;
};
StringWrapper.prototype = Object.create(String.prototype, {
    constructor: {
        value: StringWrapper,
        enumerable: false,
        writable: true,
        configurable: true,
    },
});
Object.setPrototypeOf(StringWrapper, String);
class LazyJsonString extends StringWrapper {
    deserializeJSON() {
        return JSON.parse(super.toString());
    }
    toJSON() {
        return super.toString();
    }
    static fromObject(object) {
        if (object instanceof LazyJsonString) {
            return object;
        }
        else if (object instanceof String || typeof object === "string") {
            return new LazyJsonString(object);
        }
        return new LazyJsonString(JSON.stringify(object));
    }
}


/***/ }),
/* 1367 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   convertMap: () => (/* binding */ convertMap),
/* harmony export */   map: () => (/* binding */ map),
/* harmony export */   take: () => (/* binding */ take)
/* harmony export */ });
function map(arg0, arg1, arg2) {
    let target;
    let filter;
    let instructions;
    if (typeof arg1 === "undefined" && typeof arg2 === "undefined") {
        target = {};
        instructions = arg0;
    }
    else {
        target = arg0;
        if (typeof arg1 === "function") {
            filter = arg1;
            instructions = arg2;
            return mapWithFilter(target, filter, instructions);
        }
        else {
            instructions = arg1;
        }
    }
    for (const key of Object.keys(instructions)) {
        if (!Array.isArray(instructions[key])) {
            target[key] = instructions[key];
            continue;
        }
        applyInstruction(target, null, instructions, key);
    }
    return target;
}
const convertMap = (target) => {
    const output = {};
    for (const [k, v] of Object.entries(target || {})) {
        output[k] = [, v];
    }
    return output;
};
const take = (source, instructions) => {
    const out = {};
    for (const key in instructions) {
        applyInstruction(out, source, instructions, key);
    }
    return out;
};
const mapWithFilter = (target, filter, instructions) => {
    return map(target, Object.entries(instructions).reduce((_instructions, [key, value]) => {
        if (Array.isArray(value)) {
            _instructions[key] = value;
        }
        else {
            if (typeof value === "function") {
                _instructions[key] = [filter, value()];
            }
            else {
                _instructions[key] = [filter, value];
            }
        }
        return _instructions;
    }, {}));
};
const applyInstruction = (target, source, instructions, targetKey) => {
    if (source !== null) {
        let instruction = instructions[targetKey];
        if (typeof instruction === "function") {
            instruction = [, instruction];
        }
        const [filter = nonNullish, valueFn = pass, sourceKey = targetKey] = instruction;
        if ((typeof filter === "function" && filter(source[sourceKey])) || (typeof filter !== "function" && !!filter)) {
            target[targetKey] = valueFn(source[sourceKey]);
        }
        return;
    }
    let [filter, value] = instructions[targetKey];
    if (typeof value === "function") {
        let _value;
        const defaultFilterPassed = filter === undefined && (_value = value()) != null;
        const customFilterPassed = (typeof filter === "function" && !!filter(void 0)) || (typeof filter !== "function" && !!filter);
        if (defaultFilterPassed) {
            target[targetKey] = _value;
        }
        else if (customFilterPassed) {
            target[targetKey] = value();
        }
    }
    else {
        const defaultFilterPassed = filter === undefined && value != null;
        const customFilterPassed = (typeof filter === "function" && !!filter(value)) || (typeof filter !== "function" && !!filter);
        if (defaultFilterPassed || customFilterPassed) {
            target[targetKey] = value;
        }
    }
};
const nonNullish = (_) => _ != null;
const pass = (_) => _;


/***/ }),
/* 1368 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   resolvedPath: () => (/* binding */ resolvedPath)
/* harmony export */ });
/* harmony import */ var _extended_encode_uri_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1363);

const resolvedPath = (resolvedPath, input, memberName, labelValueProvider, uriLabel, isGreedyLabel) => {
    if (input != null && input[memberName] !== undefined) {
        const labelValue = labelValueProvider();
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: " + memberName + ".");
        }
        resolvedPath = resolvedPath.replace(uriLabel, isGreedyLabel
            ? labelValue
                .split("/")
                .map((segment) => (0,_extended_encode_uri_component__WEBPACK_IMPORTED_MODULE_0__.extendedEncodeURIComponent)(segment))
                .join("/")
            : (0,_extended_encode_uri_component__WEBPACK_IMPORTED_MODULE_0__.extendedEncodeURIComponent)(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: " + memberName + ".");
    }
    return resolvedPath;
};


/***/ }),
/* 1369 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   serializeDateTime: () => (/* binding */ serializeDateTime),
/* harmony export */   serializeFloat: () => (/* binding */ serializeFloat)
/* harmony export */ });
const serializeFloat = (value) => {
    if (value !== value) {
        return "NaN";
    }
    switch (value) {
        case Infinity:
            return "Infinity";
        case -Infinity:
            return "-Infinity";
        default:
            return value;
    }
};
const serializeDateTime = (date) => date.toISOString().replace(".000Z", "Z");


/***/ }),
/* 1370 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   _json: () => (/* binding */ _json)
/* harmony export */ });
const _json = (obj) => {
    if (obj == null) {
        return {};
    }
    if (Array.isArray(obj)) {
        return obj.filter((_) => _ != null).map(_json);
    }
    if (typeof obj === "object") {
        const target = {};
        for (const key of Object.keys(obj)) {
            if (obj[key] == null) {
                continue;
            }
            target[key] = _json(obj[key]);
        }
        return target;
    }
    return obj;
};


/***/ }),
/* 1371 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   splitEvery: () => (/* binding */ splitEvery)
/* harmony export */ });
function splitEvery(value, delimiter, numDelimiters) {
    if (numDelimiters <= 0 || !Number.isInteger(numDelimiters)) {
        throw new Error("Invalid number of delimiters (" + numDelimiters + ") for splitEvery.");
    }
    const segments = value.split(delimiter);
    if (numDelimiters === 1) {
        return segments;
    }
    const compoundSegments = [];
    let currentSegment = "";
    for (let i = 0; i < segments.length; i++) {
        if (currentSegment === "") {
            currentSegment = segments[i];
        }
        else {
            currentSegment += delimiter + segments[i];
        }
        if ((i + 1) % numDelimiters === 0) {
            compoundSegments.push(currentSegment);
            currentSegment = "";
        }
    }
    if (currentSegment !== "") {
        compoundSegments.push(currentSegment);
    }
    return compoundSegments;
}


/***/ }),
/* 1372 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isStreamingPayload: () => (/* binding */ isStreamingPayload)
/* harmony export */ });
/* harmony import */ var stream__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(345);
/* harmony import */ var stream__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(stream__WEBPACK_IMPORTED_MODULE_0__);

const isStreamingPayload = (request) => request?.body instanceof stream__WEBPACK_IMPORTED_MODULE_0__.Readable ||
    (typeof ReadableStream !== "undefined" && request?.body instanceof ReadableStream);


/***/ }),
/* 1373 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DefaultIdentityProviderConfig: () => (/* reexport safe */ _DefaultIdentityProviderConfig__WEBPACK_IMPORTED_MODULE_0__.DefaultIdentityProviderConfig),
/* harmony export */   EXPIRATION_MS: () => (/* reexport safe */ _memoizeIdentityProvider__WEBPACK_IMPORTED_MODULE_2__.EXPIRATION_MS),
/* harmony export */   HttpApiKeyAuthSigner: () => (/* reexport safe */ _httpAuthSchemes__WEBPACK_IMPORTED_MODULE_1__.HttpApiKeyAuthSigner),
/* harmony export */   HttpBearerAuthSigner: () => (/* reexport safe */ _httpAuthSchemes__WEBPACK_IMPORTED_MODULE_1__.HttpBearerAuthSigner),
/* harmony export */   NoAuthSigner: () => (/* reexport safe */ _httpAuthSchemes__WEBPACK_IMPORTED_MODULE_1__.NoAuthSigner),
/* harmony export */   createIsIdentityExpiredFunction: () => (/* reexport safe */ _memoizeIdentityProvider__WEBPACK_IMPORTED_MODULE_2__.createIsIdentityExpiredFunction),
/* harmony export */   doesIdentityRequireRefresh: () => (/* reexport safe */ _memoizeIdentityProvider__WEBPACK_IMPORTED_MODULE_2__.doesIdentityRequireRefresh),
/* harmony export */   isIdentityExpired: () => (/* reexport safe */ _memoizeIdentityProvider__WEBPACK_IMPORTED_MODULE_2__.isIdentityExpired),
/* harmony export */   memoizeIdentityProvider: () => (/* reexport safe */ _memoizeIdentityProvider__WEBPACK_IMPORTED_MODULE_2__.memoizeIdentityProvider)
/* harmony export */ });
/* harmony import */ var _DefaultIdentityProviderConfig__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1374);
/* harmony import */ var _httpAuthSchemes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1375);
/* harmony import */ var _memoizeIdentityProvider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1379);





/***/ }),
/* 1374 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DefaultIdentityProviderConfig: () => (/* binding */ DefaultIdentityProviderConfig)
/* harmony export */ });
class DefaultIdentityProviderConfig {
    constructor(config) {
        this.authSchemes = new Map();
        for (const [key, value] of Object.entries(config)) {
            if (value !== undefined) {
                this.authSchemes.set(key, value);
            }
        }
    }
    getIdentityProvider(schemeId) {
        return this.authSchemes.get(schemeId);
    }
}


/***/ }),
/* 1375 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HttpApiKeyAuthSigner: () => (/* reexport safe */ _httpApiKeyAuth__WEBPACK_IMPORTED_MODULE_0__.HttpApiKeyAuthSigner),
/* harmony export */   HttpBearerAuthSigner: () => (/* reexport safe */ _httpBearerAuth__WEBPACK_IMPORTED_MODULE_1__.HttpBearerAuthSigner),
/* harmony export */   NoAuthSigner: () => (/* reexport safe */ _noAuth__WEBPACK_IMPORTED_MODULE_2__.NoAuthSigner)
/* harmony export */ });
/* harmony import */ var _httpApiKeyAuth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1376);
/* harmony import */ var _httpBearerAuth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1377);
/* harmony import */ var _noAuth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1378);





/***/ }),
/* 1376 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HttpApiKeyAuthSigner: () => (/* binding */ HttpApiKeyAuthSigner)
/* harmony export */ });
/* harmony import */ var _smithy_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1128);

class HttpApiKeyAuthSigner {
    async sign(httpRequest, identity, signingProperties) {
        if (!signingProperties) {
            throw new Error("request could not be signed with `apiKey` since the `name` and `in` signer properties are missing");
        }
        if (!signingProperties.name) {
            throw new Error("request could not be signed with `apiKey` since the `name` signer property is missing");
        }
        if (!signingProperties.in) {
            throw new Error("request could not be signed with `apiKey` since the `in` signer property is missing");
        }
        if (!identity.apiKey) {
            throw new Error("request could not be signed with `apiKey` since the `apiKey` is not defined");
        }
        const clonedRequest = httpRequest.clone();
        if (signingProperties.in === _smithy_types__WEBPACK_IMPORTED_MODULE_0__.HttpApiKeyAuthLocation.QUERY) {
            clonedRequest.query[signingProperties.name] = identity.apiKey;
        }
        else if (signingProperties.in === _smithy_types__WEBPACK_IMPORTED_MODULE_0__.HttpApiKeyAuthLocation.HEADER) {
            clonedRequest.headers[signingProperties.name] = signingProperties.scheme
                ? `${signingProperties.scheme} ${identity.apiKey}`
                : identity.apiKey;
        }
        else {
            throw new Error("request can only be signed with `apiKey` locations `query` or `header`, " +
                "but found: `" +
                signingProperties.in +
                "`");
        }
        return clonedRequest;
    }
}


/***/ }),
/* 1377 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HttpBearerAuthSigner: () => (/* binding */ HttpBearerAuthSigner)
/* harmony export */ });
class HttpBearerAuthSigner {
    async sign(httpRequest, identity, signingProperties) {
        const clonedRequest = httpRequest.clone();
        if (!identity.token) {
            throw new Error("request could not be signed with `token` since the `token` is not defined");
        }
        clonedRequest.headers["Authorization"] = `Bearer ${identity.token}`;
        return clonedRequest;
    }
}


/***/ }),
/* 1378 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NoAuthSigner: () => (/* binding */ NoAuthSigner)
/* harmony export */ });
class NoAuthSigner {
    async sign(httpRequest, identity, signingProperties) {
        return httpRequest;
    }
}


/***/ }),
/* 1379 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EXPIRATION_MS: () => (/* binding */ EXPIRATION_MS),
/* harmony export */   createIsIdentityExpiredFunction: () => (/* binding */ createIsIdentityExpiredFunction),
/* harmony export */   doesIdentityRequireRefresh: () => (/* binding */ doesIdentityRequireRefresh),
/* harmony export */   isIdentityExpired: () => (/* binding */ isIdentityExpired),
/* harmony export */   memoizeIdentityProvider: () => (/* binding */ memoizeIdentityProvider)
/* harmony export */ });
const createIsIdentityExpiredFunction = (expirationMs) => (identity) => doesIdentityRequireRefresh(identity) && identity.expiration.getTime() - Date.now() < expirationMs;
const EXPIRATION_MS = 300000;
const isIdentityExpired = createIsIdentityExpiredFunction(EXPIRATION_MS);
const doesIdentityRequireRefresh = (identity) => identity.expiration !== undefined;
const memoizeIdentityProvider = (provider, isExpired, requiresRefresh) => {
    if (provider === undefined) {
        return undefined;
    }
    const normalizedProvider = typeof provider !== "function" ? async () => Promise.resolve(provider) : provider;
    let resolved;
    let pending;
    let hasResult;
    let isConstant = false;
    const coalesceProvider = async (options) => {
        if (!pending) {
            pending = normalizedProvider(options);
        }
        try {
            resolved = await pending;
            hasResult = true;
            isConstant = false;
        }
        finally {
            pending = undefined;
        }
        return resolved;
    };
    if (isExpired === undefined) {
        return async (options) => {
            if (!hasResult || options?.forceRefresh) {
                resolved = await coalesceProvider(options);
            }
            return resolved;
        };
    }
    return async (options) => {
        if (!hasResult || options?.forceRefresh) {
            resolved = await coalesceProvider(options);
        }
        if (isConstant) {
            return resolved;
        }
        if (!requiresRefresh(resolved)) {
            isConstant = true;
            return resolved;
        }
        if (isExpired(resolved)) {
            await coalesceProvider(options);
            return resolved;
        }
        return resolved;
    };
};


/***/ }),
/* 1380 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getSmithyContext: () => (/* binding */ getSmithyContext)
/* harmony export */ });
/* harmony import */ var _smithy_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1128);

const getSmithyContext = (context) => context[_smithy_types__WEBPACK_IMPORTED_MODULE_0__.SMITHY_CONTEXT_KEY] || (context[_smithy_types__WEBPACK_IMPORTED_MODULE_0__.SMITHY_CONTEXT_KEY] = {});


/***/ }),
/* 1381 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   normalizeProvider: () => (/* binding */ normalizeProvider)
/* harmony export */ });
const normalizeProvider = (input) => {
    if (typeof input === "function")
        return input;
    const promisified = Promise.resolve(input);
    return () => promisified;
};


/***/ }),
/* 1382 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RequestBuilder: () => (/* binding */ RequestBuilder),
/* harmony export */   requestBuilder: () => (/* binding */ requestBuilder)
/* harmony export */ });
/* harmony import */ var _smithy_protocol_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1124);
/* harmony import */ var _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1344);


function requestBuilder(input, context) {
    return new RequestBuilder(input, context);
}
class RequestBuilder {
    constructor(input, context) {
        this.input = input;
        this.context = context;
        this.query = {};
        this.method = "";
        this.headers = {};
        this.path = "";
        this.body = null;
        this.hostname = "";
        this.resolvePathStack = [];
    }
    async build() {
        const { hostname, protocol = "https", port, path: basePath } = await this.context.endpoint();
        this.path = basePath;
        for (const resolvePath of this.resolvePathStack) {
            resolvePath(this.path);
        }
        return new _smithy_protocol_http__WEBPACK_IMPORTED_MODULE_0__.HttpRequest({
            protocol,
            hostname: this.hostname || hostname,
            port,
            method: this.method,
            path: this.path,
            query: this.query,
            body: this.body,
            headers: this.headers,
        });
    }
    hn(hostname) {
        this.hostname = hostname;
        return this;
    }
    bp(uriLabel) {
        this.resolvePathStack.push((basePath) => {
            this.path = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + uriLabel;
        });
        return this;
    }
    p(memberName, labelValueProvider, uriLabel, isGreedyLabel) {
        this.resolvePathStack.push((path) => {
            this.path = (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.resolvedPath)(path, this.input, memberName, labelValueProvider, uriLabel, isGreedyLabel);
        });
        return this;
    }
    h(headers) {
        this.headers = headers;
        return this;
    }
    q(query) {
        this.query = query;
        return this;
    }
    b(body) {
        this.body = body;
        return this;
    }
    m(method) {
        this.method = method;
        return this;
    }
}


/***/ }),
/* 1383 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createPaginator: () => (/* binding */ createPaginator)
/* harmony export */ });
const makePagedClientRequest = async (CommandCtor, client, input, ...args) => {
    return await client.send(new CommandCtor(input), ...args);
};
function createPaginator(ClientCtor, CommandCtor, inputTokenName, outputTokenName, pageSizeTokenName) {
    return async function* paginateOperation(config, input, ...additionalArguments) {
        let token = config.startingToken || undefined;
        let hasNext = true;
        let page;
        while (hasNext) {
            input[inputTokenName] = token;
            if (pageSizeTokenName) {
                input[pageSizeTokenName] = input[pageSizeTokenName] ?? config.pageSize;
            }
            if (config.client instanceof ClientCtor) {
                page = await makePagedClientRequest(CommandCtor, config.client, input, ...additionalArguments);
            }
            else {
                throw new Error(`Invalid client, expected instance of ${ClientCtor.name}`);
            }
            yield page;
            const prevToken = token;
            token = get(page, outputTokenName);
            hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
        }
        return undefined;
    };
}
const get = (fromObject, path) => {
    let cursor = fromObject;
    const pathComponents = path.split(".");
    for (const step of pathComponents) {
        if (!cursor || typeof cursor !== "object") {
            return undefined;
        }
        cursor = cursor[step];
    }
    return cursor;
};


/***/ }),
/* 1384 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   contentLengthMiddleware: () => (/* binding */ contentLengthMiddleware),
/* harmony export */   contentLengthMiddlewareOptions: () => (/* binding */ contentLengthMiddlewareOptions),
/* harmony export */   getContentLengthPlugin: () => (/* binding */ getContentLengthPlugin)
/* harmony export */ });
/* harmony import */ var _smithy_protocol_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1124);

const CONTENT_LENGTH_HEADER = "content-length";
function contentLengthMiddleware(bodyLengthChecker) {
    return (next) => async (args) => {
        const request = args.request;
        if (_smithy_protocol_http__WEBPACK_IMPORTED_MODULE_0__.HttpRequest.isInstance(request)) {
            const { body, headers } = request;
            if (body &&
                Object.keys(headers)
                    .map((str) => str.toLowerCase())
                    .indexOf(CONTENT_LENGTH_HEADER) === -1) {
                try {
                    const length = bodyLengthChecker(body);
                    request.headers = {
                        ...request.headers,
                        [CONTENT_LENGTH_HEADER]: String(length),
                    };
                }
                catch (error) {
                }
            }
        }
        return next({
            ...args,
            request,
        });
    };
}
const contentLengthMiddlewareOptions = {
    step: "build",
    tags: ["SET_CONTENT_LENGTH", "CONTENT_LENGTH"],
    name: "contentLengthMiddleware",
    override: true,
};
const getContentLengthPlugin = (options) => ({
    applyToStack: (clientStack) => {
        clientStack.add(contentLengthMiddleware(options.bodyLengthChecker), contentLengthMiddlewareOptions);
    },
});


/***/ }),
/* 1385 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   defaultSTSHttpAuthSchemeParametersProvider: () => (/* binding */ defaultSTSHttpAuthSchemeParametersProvider),
/* harmony export */   defaultSTSHttpAuthSchemeProvider: () => (/* binding */ defaultSTSHttpAuthSchemeProvider),
/* harmony export */   resolveHttpAuthSchemeConfig: () => (/* binding */ resolveHttpAuthSchemeConfig),
/* harmony export */   resolveStsAuthConfig: () => (/* binding */ resolveStsAuthConfig)
/* harmony export */ });
/* harmony import */ var _aws_sdk_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1386);
/* harmony import */ var _smithy_util_middleware__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1265);
/* harmony import */ var _STSClient__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1122);



const defaultSTSHttpAuthSchemeParametersProvider = async (config, context, input) => {
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
            name: "sts",
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
const defaultSTSHttpAuthSchemeProvider = (authParameters) => {
    const options = [];
    switch (authParameters.operation) {
        case "AssumeRoleWithSAML": {
            options.push(createSmithyApiNoAuthHttpAuthOption(authParameters));
            break;
        }
        case "AssumeRoleWithWebIdentity": {
            options.push(createSmithyApiNoAuthHttpAuthOption(authParameters));
            break;
        }
        default: {
            options.push(createAwsAuthSigv4HttpAuthOption(authParameters));
        }
    }
    return options;
};
const resolveStsAuthConfig = (input) => ({
    ...input,
    stsClientCtor: _STSClient__WEBPACK_IMPORTED_MODULE_1__.STSClient,
});
const resolveHttpAuthSchemeConfig = (config) => {
    const config_0 = resolveStsAuthConfig(config);
    const config_1 = (0,_aws_sdk_core__WEBPACK_IMPORTED_MODULE_2__.resolveAwsSdkSigV4Config)(config_0);
    return {
        ...config_1,
    };
};


/***/ }),
/* 1386 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   resolveAWSSDKSigV4Config: () => (/* binding */ resolveAWSSDKSigV4Config),
/* harmony export */   resolveAwsSdkSigV4Config: () => (/* binding */ resolveAwsSdkSigV4Config)
/* harmony export */ });
/* harmony import */ var _smithy_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1283);
/* harmony import */ var _smithy_signature_v4__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1387);


const resolveAwsSdkSigV4Config = (config) => {
    let normalizedCreds;
    if (config.credentials) {
        normalizedCreds = (0,_smithy_core__WEBPACK_IMPORTED_MODULE_0__.memoizeIdentityProvider)(config.credentials, _smithy_core__WEBPACK_IMPORTED_MODULE_0__.isIdentityExpired, _smithy_core__WEBPACK_IMPORTED_MODULE_0__.doesIdentityRequireRefresh);
    }
    if (!normalizedCreds) {
        if (config.credentialDefaultProvider) {
            normalizedCreds = (0,_smithy_core__WEBPACK_IMPORTED_MODULE_0__.normalizeProvider)(config.credentialDefaultProvider(Object.assign({}, config, {
                parentClientConfig: config,
            })));
        }
        else {
            normalizedCreds = async () => {
                throw new Error("`credentials` is missing");
            };
        }
    }
    const { signingEscapePath = true, systemClockOffset = config.systemClockOffset || 0, sha256, } = config;
    let signer;
    if (config.signer) {
        signer = (0,_smithy_core__WEBPACK_IMPORTED_MODULE_0__.normalizeProvider)(config.signer);
    }
    else if (config.regionInfoProvider) {
        signer = () => (0,_smithy_core__WEBPACK_IMPORTED_MODULE_0__.normalizeProvider)(config.region)()
            .then(async (region) => [
            (await config.regionInfoProvider(region, {
                useFipsEndpoint: await config.useFipsEndpoint(),
                useDualstackEndpoint: await config.useDualstackEndpoint(),
            })) || {},
            region,
        ])
            .then(([regionInfo, region]) => {
            const { signingRegion, signingService } = regionInfo;
            config.signingRegion = config.signingRegion || signingRegion || region;
            config.signingName = config.signingName || signingService || config.serviceId;
            const params = {
                ...config,
                credentials: normalizedCreds,
                region: config.signingRegion,
                service: config.signingName,
                sha256,
                uriEscapePath: signingEscapePath,
            };
            const SignerCtor = config.signerConstructor || _smithy_signature_v4__WEBPACK_IMPORTED_MODULE_1__.SignatureV4;
            return new SignerCtor(params);
        });
    }
    else {
        signer = async (authScheme) => {
            authScheme = Object.assign({}, {
                name: "sigv4",
                signingName: config.signingName || config.defaultSigningName,
                signingRegion: await (0,_smithy_core__WEBPACK_IMPORTED_MODULE_0__.normalizeProvider)(config.region)(),
                properties: {},
            }, authScheme);
            const signingRegion = authScheme.signingRegion;
            const signingService = authScheme.signingName;
            config.signingRegion = config.signingRegion || signingRegion;
            config.signingName = config.signingName || signingService || config.serviceId;
            const params = {
                ...config,
                credentials: normalizedCreds,
                region: config.signingRegion,
                service: config.signingName,
                sha256,
                uriEscapePath: signingEscapePath,
            };
            const SignerCtor = config.signerConstructor || _smithy_signature_v4__WEBPACK_IMPORTED_MODULE_1__.SignatureV4;
            return new SignerCtor(params);
        };
    }
    return {
        ...config,
        systemClockOffset,
        signingEscapePath,
        credentials: normalizedCreds,
        signer,
    };
};
const resolveAWSSDKSigV4Config = resolveAwsSdkSigV4Config;


/***/ }),
/* 1387 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SignatureV4: () => (/* reexport safe */ _SignatureV4__WEBPACK_IMPORTED_MODULE_0__.SignatureV4),
/* harmony export */   clearCredentialCache: () => (/* reexport safe */ _credentialDerivation__WEBPACK_IMPORTED_MODULE_6__.clearCredentialCache),
/* harmony export */   createScope: () => (/* reexport safe */ _credentialDerivation__WEBPACK_IMPORTED_MODULE_6__.createScope),
/* harmony export */   getCanonicalHeaders: () => (/* reexport safe */ _getCanonicalHeaders__WEBPACK_IMPORTED_MODULE_1__.getCanonicalHeaders),
/* harmony export */   getCanonicalQuery: () => (/* reexport safe */ _getCanonicalQuery__WEBPACK_IMPORTED_MODULE_2__.getCanonicalQuery),
/* harmony export */   getPayloadHash: () => (/* reexport safe */ _getPayloadHash__WEBPACK_IMPORTED_MODULE_3__.getPayloadHash),
/* harmony export */   getSigningKey: () => (/* reexport safe */ _credentialDerivation__WEBPACK_IMPORTED_MODULE_6__.getSigningKey),
/* harmony export */   moveHeadersToQuery: () => (/* reexport safe */ _moveHeadersToQuery__WEBPACK_IMPORTED_MODULE_4__.moveHeadersToQuery),
/* harmony export */   prepareRequest: () => (/* reexport safe */ _prepareRequest__WEBPACK_IMPORTED_MODULE_5__.prepareRequest)
/* harmony export */ });
/* harmony import */ var _SignatureV4__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1388);
/* harmony import */ var _getCanonicalHeaders__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1401);
/* harmony import */ var _getCanonicalQuery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1402);
/* harmony import */ var _getPayloadHash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1403);
/* harmony import */ var _moveHeadersToQuery__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1406);
/* harmony import */ var _prepareRequest__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1408);
/* harmony import */ var _credentialDerivation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1400);









/***/ }),
/* 1388 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SignatureV4: () => (/* binding */ SignatureV4)
/* harmony export */ });
/* harmony import */ var _smithy_util_hex_encoding__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1389);
/* harmony import */ var _smithy_util_middleware__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1265);
/* harmony import */ var _smithy_util_uri_escape__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1390);
/* harmony import */ var _smithy_util_utf8__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1393);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1399);
/* harmony import */ var _credentialDerivation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1400);
/* harmony import */ var _getCanonicalHeaders__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1401);
/* harmony import */ var _getCanonicalQuery__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1402);
/* harmony import */ var _getPayloadHash__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1403);
/* harmony import */ var _HeaderFormatter__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1404);
/* harmony import */ var _headerUtil__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(1405);
/* harmony import */ var _moveHeadersToQuery__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(1406);
/* harmony import */ var _prepareRequest__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(1408);
/* harmony import */ var _utilDate__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(1409);














class SignatureV4 {
    constructor({ applyChecksum, credentials, region, service, sha256, uriEscapePath = true, }) {
        this.headerFormatter = new _HeaderFormatter__WEBPACK_IMPORTED_MODULE_9__.HeaderFormatter();
        this.service = service;
        this.sha256 = sha256;
        this.uriEscapePath = uriEscapePath;
        this.applyChecksum = typeof applyChecksum === "boolean" ? applyChecksum : true;
        this.regionProvider = (0,_smithy_util_middleware__WEBPACK_IMPORTED_MODULE_1__.normalizeProvider)(region);
        this.credentialProvider = (0,_smithy_util_middleware__WEBPACK_IMPORTED_MODULE_1__.normalizeProvider)(credentials);
    }
    async presign(originalRequest, options = {}) {
        const { signingDate = new Date(), expiresIn = 3600, unsignableHeaders, unhoistableHeaders, signableHeaders, signingRegion, signingService, } = options;
        const credentials = await this.credentialProvider();
        this.validateResolvedCredentials(credentials);
        const region = signingRegion ?? (await this.regionProvider());
        const { longDate, shortDate } = formatDate(signingDate);
        if (expiresIn > _constants__WEBPACK_IMPORTED_MODULE_4__.MAX_PRESIGNED_TTL) {
            return Promise.reject("Signature version 4 presigned URLs" + " must have an expiration date less than one week in" + " the future");
        }
        const scope = (0,_credentialDerivation__WEBPACK_IMPORTED_MODULE_5__.createScope)(shortDate, region, signingService ?? this.service);
        const request = (0,_moveHeadersToQuery__WEBPACK_IMPORTED_MODULE_11__.moveHeadersToQuery)((0,_prepareRequest__WEBPACK_IMPORTED_MODULE_12__.prepareRequest)(originalRequest), { unhoistableHeaders });
        if (credentials.sessionToken) {
            request.query[_constants__WEBPACK_IMPORTED_MODULE_4__.TOKEN_QUERY_PARAM] = credentials.sessionToken;
        }
        request.query[_constants__WEBPACK_IMPORTED_MODULE_4__.ALGORITHM_QUERY_PARAM] = _constants__WEBPACK_IMPORTED_MODULE_4__.ALGORITHM_IDENTIFIER;
        request.query[_constants__WEBPACK_IMPORTED_MODULE_4__.CREDENTIAL_QUERY_PARAM] = `${credentials.accessKeyId}/${scope}`;
        request.query[_constants__WEBPACK_IMPORTED_MODULE_4__.AMZ_DATE_QUERY_PARAM] = longDate;
        request.query[_constants__WEBPACK_IMPORTED_MODULE_4__.EXPIRES_QUERY_PARAM] = expiresIn.toString(10);
        const canonicalHeaders = (0,_getCanonicalHeaders__WEBPACK_IMPORTED_MODULE_6__.getCanonicalHeaders)(request, unsignableHeaders, signableHeaders);
        request.query[_constants__WEBPACK_IMPORTED_MODULE_4__.SIGNED_HEADERS_QUERY_PARAM] = getCanonicalHeaderList(canonicalHeaders);
        request.query[_constants__WEBPACK_IMPORTED_MODULE_4__.SIGNATURE_QUERY_PARAM] = await this.getSignature(longDate, scope, this.getSigningKey(credentials, region, shortDate, signingService), this.createCanonicalRequest(request, canonicalHeaders, await (0,_getPayloadHash__WEBPACK_IMPORTED_MODULE_8__.getPayloadHash)(originalRequest, this.sha256)));
        return request;
    }
    async sign(toSign, options) {
        if (typeof toSign === "string") {
            return this.signString(toSign, options);
        }
        else if (toSign.headers && toSign.payload) {
            return this.signEvent(toSign, options);
        }
        else if (toSign.message) {
            return this.signMessage(toSign, options);
        }
        else {
            return this.signRequest(toSign, options);
        }
    }
    async signEvent({ headers, payload }, { signingDate = new Date(), priorSignature, signingRegion, signingService }) {
        const region = signingRegion ?? (await this.regionProvider());
        const { shortDate, longDate } = formatDate(signingDate);
        const scope = (0,_credentialDerivation__WEBPACK_IMPORTED_MODULE_5__.createScope)(shortDate, region, signingService ?? this.service);
        const hashedPayload = await (0,_getPayloadHash__WEBPACK_IMPORTED_MODULE_8__.getPayloadHash)({ headers: {}, body: payload }, this.sha256);
        const hash = new this.sha256();
        hash.update(headers);
        const hashedHeaders = (0,_smithy_util_hex_encoding__WEBPACK_IMPORTED_MODULE_0__.toHex)(await hash.digest());
        const stringToSign = [
            _constants__WEBPACK_IMPORTED_MODULE_4__.EVENT_ALGORITHM_IDENTIFIER,
            longDate,
            scope,
            priorSignature,
            hashedHeaders,
            hashedPayload,
        ].join("\n");
        return this.signString(stringToSign, { signingDate, signingRegion: region, signingService });
    }
    async signMessage(signableMessage, { signingDate = new Date(), signingRegion, signingService }) {
        const promise = this.signEvent({
            headers: this.headerFormatter.format(signableMessage.message.headers),
            payload: signableMessage.message.body,
        }, {
            signingDate,
            signingRegion,
            signingService,
            priorSignature: signableMessage.priorSignature,
        });
        return promise.then((signature) => {
            return { message: signableMessage.message, signature };
        });
    }
    async signString(stringToSign, { signingDate = new Date(), signingRegion, signingService } = {}) {
        const credentials = await this.credentialProvider();
        this.validateResolvedCredentials(credentials);
        const region = signingRegion ?? (await this.regionProvider());
        const { shortDate } = formatDate(signingDate);
        const hash = new this.sha256(await this.getSigningKey(credentials, region, shortDate, signingService));
        hash.update((0,_smithy_util_utf8__WEBPACK_IMPORTED_MODULE_3__.toUint8Array)(stringToSign));
        return (0,_smithy_util_hex_encoding__WEBPACK_IMPORTED_MODULE_0__.toHex)(await hash.digest());
    }
    async signRequest(requestToSign, { signingDate = new Date(), signableHeaders, unsignableHeaders, signingRegion, signingService, } = {}) {
        const credentials = await this.credentialProvider();
        this.validateResolvedCredentials(credentials);
        const region = signingRegion ?? (await this.regionProvider());
        const request = (0,_prepareRequest__WEBPACK_IMPORTED_MODULE_12__.prepareRequest)(requestToSign);
        const { longDate, shortDate } = formatDate(signingDate);
        const scope = (0,_credentialDerivation__WEBPACK_IMPORTED_MODULE_5__.createScope)(shortDate, region, signingService ?? this.service);
        request.headers[_constants__WEBPACK_IMPORTED_MODULE_4__.AMZ_DATE_HEADER] = longDate;
        if (credentials.sessionToken) {
            request.headers[_constants__WEBPACK_IMPORTED_MODULE_4__.TOKEN_HEADER] = credentials.sessionToken;
        }
        const payloadHash = await (0,_getPayloadHash__WEBPACK_IMPORTED_MODULE_8__.getPayloadHash)(request, this.sha256);
        if (!(0,_headerUtil__WEBPACK_IMPORTED_MODULE_10__.hasHeader)(_constants__WEBPACK_IMPORTED_MODULE_4__.SHA256_HEADER, request.headers) && this.applyChecksum) {
            request.headers[_constants__WEBPACK_IMPORTED_MODULE_4__.SHA256_HEADER] = payloadHash;
        }
        const canonicalHeaders = (0,_getCanonicalHeaders__WEBPACK_IMPORTED_MODULE_6__.getCanonicalHeaders)(request, unsignableHeaders, signableHeaders);
        const signature = await this.getSignature(longDate, scope, this.getSigningKey(credentials, region, shortDate, signingService), this.createCanonicalRequest(request, canonicalHeaders, payloadHash));
        request.headers[_constants__WEBPACK_IMPORTED_MODULE_4__.AUTH_HEADER] =
            `${_constants__WEBPACK_IMPORTED_MODULE_4__.ALGORITHM_IDENTIFIER} ` +
                `Credential=${credentials.accessKeyId}/${scope}, ` +
                `SignedHeaders=${getCanonicalHeaderList(canonicalHeaders)}, ` +
                `Signature=${signature}`;
        return request;
    }
    createCanonicalRequest(request, canonicalHeaders, payloadHash) {
        const sortedHeaders = Object.keys(canonicalHeaders).sort();
        return `${request.method}
${this.getCanonicalPath(request)}
${(0,_getCanonicalQuery__WEBPACK_IMPORTED_MODULE_7__.getCanonicalQuery)(request)}
${sortedHeaders.map((name) => `${name}:${canonicalHeaders[name]}`).join("\n")}

${sortedHeaders.join(";")}
${payloadHash}`;
    }
    async createStringToSign(longDate, credentialScope, canonicalRequest) {
        const hash = new this.sha256();
        hash.update((0,_smithy_util_utf8__WEBPACK_IMPORTED_MODULE_3__.toUint8Array)(canonicalRequest));
        const hashedRequest = await hash.digest();
        return `${_constants__WEBPACK_IMPORTED_MODULE_4__.ALGORITHM_IDENTIFIER}
${longDate}
${credentialScope}
${(0,_smithy_util_hex_encoding__WEBPACK_IMPORTED_MODULE_0__.toHex)(hashedRequest)}`;
    }
    getCanonicalPath({ path }) {
        if (this.uriEscapePath) {
            const normalizedPathSegments = [];
            for (const pathSegment of path.split("/")) {
                if (pathSegment?.length === 0)
                    continue;
                if (pathSegment === ".")
                    continue;
                if (pathSegment === "..") {
                    normalizedPathSegments.pop();
                }
                else {
                    normalizedPathSegments.push(pathSegment);
                }
            }
            const normalizedPath = `${path?.startsWith("/") ? "/" : ""}${normalizedPathSegments.join("/")}${normalizedPathSegments.length > 0 && path?.endsWith("/") ? "/" : ""}`;
            const doubleEncoded = (0,_smithy_util_uri_escape__WEBPACK_IMPORTED_MODULE_2__.escapeUri)(normalizedPath);
            return doubleEncoded.replace(/%2F/g, "/");
        }
        return path;
    }
    async getSignature(longDate, credentialScope, keyPromise, canonicalRequest) {
        const stringToSign = await this.createStringToSign(longDate, credentialScope, canonicalRequest);
        const hash = new this.sha256(await keyPromise);
        hash.update((0,_smithy_util_utf8__WEBPACK_IMPORTED_MODULE_3__.toUint8Array)(stringToSign));
        return (0,_smithy_util_hex_encoding__WEBPACK_IMPORTED_MODULE_0__.toHex)(await hash.digest());
    }
    getSigningKey(credentials, region, shortDate, service) {
        return (0,_credentialDerivation__WEBPACK_IMPORTED_MODULE_5__.getSigningKey)(this.sha256, credentials, shortDate, region, service || this.service);
    }
    validateResolvedCredentials(credentials) {
        if (typeof credentials !== "object" ||
            typeof credentials.accessKeyId !== "string" ||
            typeof credentials.secretAccessKey !== "string") {
            throw new Error("Resolved credential object is not valid");
        }
    }
}
const formatDate = (now) => {
    const longDate = (0,_utilDate__WEBPACK_IMPORTED_MODULE_13__.iso8601)(now).replace(/[\-:]/g, "");
    return {
        longDate,
        shortDate: longDate.slice(0, 8),
    };
};
const getCanonicalHeaderList = (headers) => Object.keys(headers).sort().join(";");


/***/ }),
/* 1389 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   fromHex: () => (/* binding */ fromHex),
/* harmony export */   toHex: () => (/* binding */ toHex)
/* harmony export */ });
const SHORT_TO_HEX = {};
const HEX_TO_SHORT = {};
for (let i = 0; i < 256; i++) {
    let encodedByte = i.toString(16).toLowerCase();
    if (encodedByte.length === 1) {
        encodedByte = `0${encodedByte}`;
    }
    SHORT_TO_HEX[i] = encodedByte;
    HEX_TO_SHORT[encodedByte] = i;
}
function fromHex(encoded) {
    if (encoded.length % 2 !== 0) {
        throw new Error("Hex encoded strings must have an even number length");
    }
    const out = new Uint8Array(encoded.length / 2);
    for (let i = 0; i < encoded.length; i += 2) {
        const encodedByte = encoded.slice(i, i + 2).toLowerCase();
        if (encodedByte in HEX_TO_SHORT) {
            out[i / 2] = HEX_TO_SHORT[encodedByte];
        }
        else {
            throw new Error(`Cannot decode unrecognized sequence ${encodedByte} as hexadecimal`);
        }
    }
    return out;
}
function toHex(bytes) {
    let out = "";
    for (let i = 0; i < bytes.byteLength; i++) {
        out += SHORT_TO_HEX[bytes[i]];
    }
    return out;
}


/***/ }),
/* 1390 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   escapeUri: () => (/* reexport safe */ _escape_uri__WEBPACK_IMPORTED_MODULE_0__.escapeUri),
/* harmony export */   escapeUriPath: () => (/* reexport safe */ _escape_uri_path__WEBPACK_IMPORTED_MODULE_1__.escapeUriPath)
/* harmony export */ });
/* harmony import */ var _escape_uri__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1391);
/* harmony import */ var _escape_uri_path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1392);




/***/ }),
/* 1391 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   escapeUri: () => (/* binding */ escapeUri)
/* harmony export */ });
const escapeUri = (uri) => encodeURIComponent(uri).replace(/[!'()*]/g, hexEncode);
const hexEncode = (c) => `%${c.charCodeAt(0).toString(16).toUpperCase()}`;


/***/ }),
/* 1392 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   escapeUriPath: () => (/* binding */ escapeUriPath)
/* harmony export */ });
/* harmony import */ var _escape_uri__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1391);

const escapeUriPath = (uri) => uri.split("/").map(_escape_uri__WEBPACK_IMPORTED_MODULE_0__.escapeUri).join("/");


/***/ }),
/* 1393 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   fromUtf8: () => (/* reexport safe */ _fromUtf8__WEBPACK_IMPORTED_MODULE_0__.fromUtf8),
/* harmony export */   toUint8Array: () => (/* reexport safe */ _toUint8Array__WEBPACK_IMPORTED_MODULE_1__.toUint8Array),
/* harmony export */   toUtf8: () => (/* reexport safe */ _toUtf8__WEBPACK_IMPORTED_MODULE_2__.toUtf8)
/* harmony export */ });
/* harmony import */ var _fromUtf8__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1394);
/* harmony import */ var _toUint8Array__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1397);
/* harmony import */ var _toUtf8__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1398);





/***/ }),
/* 1394 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   fromUtf8: () => (/* binding */ fromUtf8)
/* harmony export */ });
/* harmony import */ var _smithy_util_buffer_from__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1395);

const fromUtf8 = (input) => {
    const buf = (0,_smithy_util_buffer_from__WEBPACK_IMPORTED_MODULE_0__.fromString)(input, "utf8");
    return new Uint8Array(buf.buffer, buf.byteOffset, buf.byteLength / Uint8Array.BYTES_PER_ELEMENT);
};


/***/ }),
/* 1395 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   fromArrayBuffer: () => (/* binding */ fromArrayBuffer),
/* harmony export */   fromString: () => (/* binding */ fromString)
/* harmony export */ });
/* harmony import */ var _smithy_is_array_buffer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1396);
/* harmony import */ var buffer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(338);
/* harmony import */ var buffer__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(buffer__WEBPACK_IMPORTED_MODULE_1__);


const fromArrayBuffer = (input, offset = 0, length = input.byteLength - offset) => {
    if (!(0,_smithy_is_array_buffer__WEBPACK_IMPORTED_MODULE_0__.isArrayBuffer)(input)) {
        throw new TypeError(`The "input" argument must be ArrayBuffer. Received type ${typeof input} (${input})`);
    }
    return buffer__WEBPACK_IMPORTED_MODULE_1__.Buffer.from(input, offset, length);
};
const fromString = (input, encoding) => {
    if (typeof input !== "string") {
        throw new TypeError(`The "input" argument must be of type string. Received type ${typeof input} (${input})`);
    }
    return encoding ? buffer__WEBPACK_IMPORTED_MODULE_1__.Buffer.from(input, encoding) : buffer__WEBPACK_IMPORTED_MODULE_1__.Buffer.from(input);
};


/***/ }),
/* 1396 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isArrayBuffer: () => (/* binding */ isArrayBuffer)
/* harmony export */ });
const isArrayBuffer = (arg) => (typeof ArrayBuffer === "function" && arg instanceof ArrayBuffer) ||
    Object.prototype.toString.call(arg) === "[object ArrayBuffer]";


/***/ }),
/* 1397 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   toUint8Array: () => (/* binding */ toUint8Array)
/* harmony export */ });
/* harmony import */ var _fromUtf8__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1394);

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
/* 1398 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   toUtf8: () => (/* binding */ toUtf8)
/* harmony export */ });
/* harmony import */ var _smithy_util_buffer_from__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1395);

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
/* 1399 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ALGORITHM_IDENTIFIER: () => (/* binding */ ALGORITHM_IDENTIFIER),
/* harmony export */   ALGORITHM_IDENTIFIER_V4A: () => (/* binding */ ALGORITHM_IDENTIFIER_V4A),
/* harmony export */   ALGORITHM_QUERY_PARAM: () => (/* binding */ ALGORITHM_QUERY_PARAM),
/* harmony export */   ALWAYS_UNSIGNABLE_HEADERS: () => (/* binding */ ALWAYS_UNSIGNABLE_HEADERS),
/* harmony export */   AMZ_DATE_HEADER: () => (/* binding */ AMZ_DATE_HEADER),
/* harmony export */   AMZ_DATE_QUERY_PARAM: () => (/* binding */ AMZ_DATE_QUERY_PARAM),
/* harmony export */   AUTH_HEADER: () => (/* binding */ AUTH_HEADER),
/* harmony export */   CREDENTIAL_QUERY_PARAM: () => (/* binding */ CREDENTIAL_QUERY_PARAM),
/* harmony export */   DATE_HEADER: () => (/* binding */ DATE_HEADER),
/* harmony export */   EVENT_ALGORITHM_IDENTIFIER: () => (/* binding */ EVENT_ALGORITHM_IDENTIFIER),
/* harmony export */   EXPIRES_QUERY_PARAM: () => (/* binding */ EXPIRES_QUERY_PARAM),
/* harmony export */   GENERATED_HEADERS: () => (/* binding */ GENERATED_HEADERS),
/* harmony export */   HOST_HEADER: () => (/* binding */ HOST_HEADER),
/* harmony export */   KEY_TYPE_IDENTIFIER: () => (/* binding */ KEY_TYPE_IDENTIFIER),
/* harmony export */   MAX_CACHE_SIZE: () => (/* binding */ MAX_CACHE_SIZE),
/* harmony export */   MAX_PRESIGNED_TTL: () => (/* binding */ MAX_PRESIGNED_TTL),
/* harmony export */   PROXY_HEADER_PATTERN: () => (/* binding */ PROXY_HEADER_PATTERN),
/* harmony export */   REGION_SET_PARAM: () => (/* binding */ REGION_SET_PARAM),
/* harmony export */   SEC_HEADER_PATTERN: () => (/* binding */ SEC_HEADER_PATTERN),
/* harmony export */   SHA256_HEADER: () => (/* binding */ SHA256_HEADER),
/* harmony export */   SIGNATURE_HEADER: () => (/* binding */ SIGNATURE_HEADER),
/* harmony export */   SIGNATURE_QUERY_PARAM: () => (/* binding */ SIGNATURE_QUERY_PARAM),
/* harmony export */   SIGNED_HEADERS_QUERY_PARAM: () => (/* binding */ SIGNED_HEADERS_QUERY_PARAM),
/* harmony export */   TOKEN_HEADER: () => (/* binding */ TOKEN_HEADER),
/* harmony export */   TOKEN_QUERY_PARAM: () => (/* binding */ TOKEN_QUERY_PARAM),
/* harmony export */   UNSIGNABLE_PATTERNS: () => (/* binding */ UNSIGNABLE_PATTERNS),
/* harmony export */   UNSIGNED_PAYLOAD: () => (/* binding */ UNSIGNED_PAYLOAD)
/* harmony export */ });
const ALGORITHM_QUERY_PARAM = "X-Amz-Algorithm";
const CREDENTIAL_QUERY_PARAM = "X-Amz-Credential";
const AMZ_DATE_QUERY_PARAM = "X-Amz-Date";
const SIGNED_HEADERS_QUERY_PARAM = "X-Amz-SignedHeaders";
const EXPIRES_QUERY_PARAM = "X-Amz-Expires";
const SIGNATURE_QUERY_PARAM = "X-Amz-Signature";
const TOKEN_QUERY_PARAM = "X-Amz-Security-Token";
const REGION_SET_PARAM = "X-Amz-Region-Set";
const AUTH_HEADER = "authorization";
const AMZ_DATE_HEADER = AMZ_DATE_QUERY_PARAM.toLowerCase();
const DATE_HEADER = "date";
const GENERATED_HEADERS = [AUTH_HEADER, AMZ_DATE_HEADER, DATE_HEADER];
const SIGNATURE_HEADER = SIGNATURE_QUERY_PARAM.toLowerCase();
const SHA256_HEADER = "x-amz-content-sha256";
const TOKEN_HEADER = TOKEN_QUERY_PARAM.toLowerCase();
const HOST_HEADER = "host";
const ALWAYS_UNSIGNABLE_HEADERS = {
    authorization: true,
    "cache-control": true,
    connection: true,
    expect: true,
    from: true,
    "keep-alive": true,
    "max-forwards": true,
    pragma: true,
    referer: true,
    te: true,
    trailer: true,
    "transfer-encoding": true,
    upgrade: true,
    "user-agent": true,
    "x-amzn-trace-id": true,
};
const PROXY_HEADER_PATTERN = /^proxy-/;
const SEC_HEADER_PATTERN = /^sec-/;
const UNSIGNABLE_PATTERNS = [/^proxy-/i, /^sec-/i];
const ALGORITHM_IDENTIFIER = "AWS4-HMAC-SHA256";
const ALGORITHM_IDENTIFIER_V4A = "AWS4-ECDSA-P256-SHA256";
const EVENT_ALGORITHM_IDENTIFIER = "AWS4-HMAC-SHA256-PAYLOAD";
const UNSIGNED_PAYLOAD = "UNSIGNED-PAYLOAD";
const MAX_CACHE_SIZE = 50;
const KEY_TYPE_IDENTIFIER = "aws4_request";
const MAX_PRESIGNED_TTL = 60 * 60 * 24 * 7;


/***/ }),
/* 1400 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   clearCredentialCache: () => (/* binding */ clearCredentialCache),
/* harmony export */   createScope: () => (/* binding */ createScope),
/* harmony export */   getSigningKey: () => (/* binding */ getSigningKey)
/* harmony export */ });
/* harmony import */ var _smithy_util_hex_encoding__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1389);
/* harmony import */ var _smithy_util_utf8__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1393);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1399);



const signingKeyCache = {};
const cacheQueue = [];
const createScope = (shortDate, region, service) => `${shortDate}/${region}/${service}/${_constants__WEBPACK_IMPORTED_MODULE_2__.KEY_TYPE_IDENTIFIER}`;
const getSigningKey = async (sha256Constructor, credentials, shortDate, region, service) => {
    const credsHash = await hmac(sha256Constructor, credentials.secretAccessKey, credentials.accessKeyId);
    const cacheKey = `${shortDate}:${region}:${service}:${(0,_smithy_util_hex_encoding__WEBPACK_IMPORTED_MODULE_0__.toHex)(credsHash)}:${credentials.sessionToken}`;
    if (cacheKey in signingKeyCache) {
        return signingKeyCache[cacheKey];
    }
    cacheQueue.push(cacheKey);
    while (cacheQueue.length > _constants__WEBPACK_IMPORTED_MODULE_2__.MAX_CACHE_SIZE) {
        delete signingKeyCache[cacheQueue.shift()];
    }
    let key = `AWS4${credentials.secretAccessKey}`;
    for (const signable of [shortDate, region, service, _constants__WEBPACK_IMPORTED_MODULE_2__.KEY_TYPE_IDENTIFIER]) {
        key = await hmac(sha256Constructor, key, signable);
    }
    return (signingKeyCache[cacheKey] = key);
};
const clearCredentialCache = () => {
    cacheQueue.length = 0;
    Object.keys(signingKeyCache).forEach((cacheKey) => {
        delete signingKeyCache[cacheKey];
    });
};
const hmac = (ctor, secret, data) => {
    const hash = new ctor(secret);
    hash.update((0,_smithy_util_utf8__WEBPACK_IMPORTED_MODULE_1__.toUint8Array)(data));
    return hash.digest();
};


/***/ }),
/* 1401 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getCanonicalHeaders: () => (/* binding */ getCanonicalHeaders)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1399);

const getCanonicalHeaders = ({ headers }, unsignableHeaders, signableHeaders) => {
    const canonical = {};
    for (const headerName of Object.keys(headers).sort()) {
        if (headers[headerName] == undefined) {
            continue;
        }
        const canonicalHeaderName = headerName.toLowerCase();
        if (canonicalHeaderName in _constants__WEBPACK_IMPORTED_MODULE_0__.ALWAYS_UNSIGNABLE_HEADERS ||
            unsignableHeaders?.has(canonicalHeaderName) ||
            _constants__WEBPACK_IMPORTED_MODULE_0__.PROXY_HEADER_PATTERN.test(canonicalHeaderName) ||
            _constants__WEBPACK_IMPORTED_MODULE_0__.SEC_HEADER_PATTERN.test(canonicalHeaderName)) {
            if (!signableHeaders || (signableHeaders && !signableHeaders.has(canonicalHeaderName))) {
                continue;
            }
        }
        canonical[canonicalHeaderName] = headers[headerName].trim().replace(/\s+/g, " ");
    }
    return canonical;
};


/***/ }),
/* 1402 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getCanonicalQuery: () => (/* binding */ getCanonicalQuery)
/* harmony export */ });
/* harmony import */ var _smithy_util_uri_escape__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1390);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1399);


const getCanonicalQuery = ({ query = {} }) => {
    const keys = [];
    const serialized = {};
    for (const key of Object.keys(query).sort()) {
        if (key.toLowerCase() === _constants__WEBPACK_IMPORTED_MODULE_1__.SIGNATURE_HEADER) {
            continue;
        }
        keys.push(key);
        const value = query[key];
        if (typeof value === "string") {
            serialized[key] = `${(0,_smithy_util_uri_escape__WEBPACK_IMPORTED_MODULE_0__.escapeUri)(key)}=${(0,_smithy_util_uri_escape__WEBPACK_IMPORTED_MODULE_0__.escapeUri)(value)}`;
        }
        else if (Array.isArray(value)) {
            serialized[key] = value
                .slice(0)
                .reduce((encoded, value) => encoded.concat([`${(0,_smithy_util_uri_escape__WEBPACK_IMPORTED_MODULE_0__.escapeUri)(key)}=${(0,_smithy_util_uri_escape__WEBPACK_IMPORTED_MODULE_0__.escapeUri)(value)}`]), [])
                .sort()
                .join("&");
        }
    }
    return keys
        .map((key) => serialized[key])
        .filter((serialized) => serialized)
        .join("&");
};


/***/ }),
/* 1403 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getPayloadHash: () => (/* binding */ getPayloadHash)
/* harmony export */ });
/* harmony import */ var _smithy_is_array_buffer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1396);
/* harmony import */ var _smithy_util_hex_encoding__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1389);
/* harmony import */ var _smithy_util_utf8__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1393);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1399);




const getPayloadHash = async ({ headers, body }, hashConstructor) => {
    for (const headerName of Object.keys(headers)) {
        if (headerName.toLowerCase() === _constants__WEBPACK_IMPORTED_MODULE_3__.SHA256_HEADER) {
            return headers[headerName];
        }
    }
    if (body == undefined) {
        return "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855";
    }
    else if (typeof body === "string" || ArrayBuffer.isView(body) || (0,_smithy_is_array_buffer__WEBPACK_IMPORTED_MODULE_0__.isArrayBuffer)(body)) {
        const hashCtor = new hashConstructor();
        hashCtor.update((0,_smithy_util_utf8__WEBPACK_IMPORTED_MODULE_2__.toUint8Array)(body));
        return (0,_smithy_util_hex_encoding__WEBPACK_IMPORTED_MODULE_1__.toHex)(await hashCtor.digest());
    }
    return _constants__WEBPACK_IMPORTED_MODULE_3__.UNSIGNED_PAYLOAD;
};


/***/ }),
/* 1404 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HeaderFormatter: () => (/* binding */ HeaderFormatter),
/* harmony export */   Int64: () => (/* binding */ Int64)
/* harmony export */ });
/* harmony import */ var _smithy_util_hex_encoding__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1389);
/* harmony import */ var _smithy_util_utf8__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1393);


class HeaderFormatter {
    format(headers) {
        const chunks = [];
        for (const headerName of Object.keys(headers)) {
            const bytes = (0,_smithy_util_utf8__WEBPACK_IMPORTED_MODULE_1__.fromUtf8)(headerName);
            chunks.push(Uint8Array.from([bytes.byteLength]), bytes, this.formatHeaderValue(headers[headerName]));
        }
        const out = new Uint8Array(chunks.reduce((carry, bytes) => carry + bytes.byteLength, 0));
        let position = 0;
        for (const chunk of chunks) {
            out.set(chunk, position);
            position += chunk.byteLength;
        }
        return out;
    }
    formatHeaderValue(header) {
        switch (header.type) {
            case "boolean":
                return Uint8Array.from([header.value ? 0 : 1]);
            case "byte":
                return Uint8Array.from([2, header.value]);
            case "short":
                const shortView = new DataView(new ArrayBuffer(3));
                shortView.setUint8(0, 3);
                shortView.setInt16(1, header.value, false);
                return new Uint8Array(shortView.buffer);
            case "integer":
                const intView = new DataView(new ArrayBuffer(5));
                intView.setUint8(0, 4);
                intView.setInt32(1, header.value, false);
                return new Uint8Array(intView.buffer);
            case "long":
                const longBytes = new Uint8Array(9);
                longBytes[0] = 5;
                longBytes.set(header.value.bytes, 1);
                return longBytes;
            case "binary":
                const binView = new DataView(new ArrayBuffer(3 + header.value.byteLength));
                binView.setUint8(0, 6);
                binView.setUint16(1, header.value.byteLength, false);
                const binBytes = new Uint8Array(binView.buffer);
                binBytes.set(header.value, 3);
                return binBytes;
            case "string":
                const utf8Bytes = (0,_smithy_util_utf8__WEBPACK_IMPORTED_MODULE_1__.fromUtf8)(header.value);
                const strView = new DataView(new ArrayBuffer(3 + utf8Bytes.byteLength));
                strView.setUint8(0, 7);
                strView.setUint16(1, utf8Bytes.byteLength, false);
                const strBytes = new Uint8Array(strView.buffer);
                strBytes.set(utf8Bytes, 3);
                return strBytes;
            case "timestamp":
                const tsBytes = new Uint8Array(9);
                tsBytes[0] = 8;
                tsBytes.set(Int64.fromNumber(header.value.valueOf()).bytes, 1);
                return tsBytes;
            case "uuid":
                if (!UUID_PATTERN.test(header.value)) {
                    throw new Error(`Invalid UUID received: ${header.value}`);
                }
                const uuidBytes = new Uint8Array(17);
                uuidBytes[0] = 9;
                uuidBytes.set((0,_smithy_util_hex_encoding__WEBPACK_IMPORTED_MODULE_0__.fromHex)(header.value.replace(/\-/g, "")), 1);
                return uuidBytes;
        }
    }
}
var HEADER_VALUE_TYPE;
(function (HEADER_VALUE_TYPE) {
    HEADER_VALUE_TYPE[HEADER_VALUE_TYPE["boolTrue"] = 0] = "boolTrue";
    HEADER_VALUE_TYPE[HEADER_VALUE_TYPE["boolFalse"] = 1] = "boolFalse";
    HEADER_VALUE_TYPE[HEADER_VALUE_TYPE["byte"] = 2] = "byte";
    HEADER_VALUE_TYPE[HEADER_VALUE_TYPE["short"] = 3] = "short";
    HEADER_VALUE_TYPE[HEADER_VALUE_TYPE["integer"] = 4] = "integer";
    HEADER_VALUE_TYPE[HEADER_VALUE_TYPE["long"] = 5] = "long";
    HEADER_VALUE_TYPE[HEADER_VALUE_TYPE["byteArray"] = 6] = "byteArray";
    HEADER_VALUE_TYPE[HEADER_VALUE_TYPE["string"] = 7] = "string";
    HEADER_VALUE_TYPE[HEADER_VALUE_TYPE["timestamp"] = 8] = "timestamp";
    HEADER_VALUE_TYPE[HEADER_VALUE_TYPE["uuid"] = 9] = "uuid";
})(HEADER_VALUE_TYPE || (HEADER_VALUE_TYPE = {}));
const UUID_PATTERN = /^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$/;
class Int64 {
    constructor(bytes) {
        this.bytes = bytes;
        if (bytes.byteLength !== 8) {
            throw new Error("Int64 buffers must be exactly 8 bytes");
        }
    }
    static fromNumber(number) {
        if (number > 9223372036854776000 || number < -9223372036854776000) {
            throw new Error(`${number} is too large (or, if negative, too small) to represent as an Int64`);
        }
        const bytes = new Uint8Array(8);
        for (let i = 7, remaining = Math.abs(Math.round(number)); i > -1 && remaining > 0; i--, remaining /= 256) {
            bytes[i] = remaining;
        }
        if (number < 0) {
            negate(bytes);
        }
        return new Int64(bytes);
    }
    valueOf() {
        const bytes = this.bytes.slice(0);
        const negative = bytes[0] & 0b10000000;
        if (negative) {
            negate(bytes);
        }
        return parseInt((0,_smithy_util_hex_encoding__WEBPACK_IMPORTED_MODULE_0__.toHex)(bytes), 16) * (negative ? -1 : 1);
    }
    toString() {
        return String(this.valueOf());
    }
}
function negate(bytes) {
    for (let i = 0; i < 8; i++) {
        bytes[i] ^= 0xff;
    }
    for (let i = 7; i > -1; i--) {
        bytes[i]++;
        if (bytes[i] !== 0)
            break;
    }
}


/***/ }),
/* 1405 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   deleteHeader: () => (/* binding */ deleteHeader),
/* harmony export */   getHeaderValue: () => (/* binding */ getHeaderValue),
/* harmony export */   hasHeader: () => (/* binding */ hasHeader)
/* harmony export */ });
const hasHeader = (soughtHeader, headers) => {
    soughtHeader = soughtHeader.toLowerCase();
    for (const headerName of Object.keys(headers)) {
        if (soughtHeader === headerName.toLowerCase()) {
            return true;
        }
    }
    return false;
};
const getHeaderValue = (soughtHeader, headers) => {
    soughtHeader = soughtHeader.toLowerCase();
    for (const headerName of Object.keys(headers)) {
        if (soughtHeader === headerName.toLowerCase()) {
            return headers[headerName];
        }
    }
    return undefined;
};
const deleteHeader = (soughtHeader, headers) => {
    soughtHeader = soughtHeader.toLowerCase();
    for (const headerName of Object.keys(headers)) {
        if (soughtHeader === headerName.toLowerCase()) {
            delete headers[headerName];
        }
    }
};


/***/ }),
/* 1406 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   moveHeadersToQuery: () => (/* binding */ moveHeadersToQuery)
/* harmony export */ });
/* harmony import */ var _cloneRequest__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1407);

const moveHeadersToQuery = (request, options = {}) => {
    const { headers, query = {} } = typeof request.clone === "function" ? request.clone() : (0,_cloneRequest__WEBPACK_IMPORTED_MODULE_0__.cloneRequest)(request);
    for (const name of Object.keys(headers)) {
        const lname = name.toLowerCase();
        if (lname.slice(0, 6) === "x-amz-" && !options.unhoistableHeaders?.has(lname)) {
            query[name] = headers[name];
            delete headers[name];
        }
    }
    return {
        ...request,
        headers,
        query,
    };
};


/***/ }),
/* 1407 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   cloneQuery: () => (/* binding */ cloneQuery),
/* harmony export */   cloneRequest: () => (/* binding */ cloneRequest)
/* harmony export */ });
const cloneRequest = ({ headers, query, ...rest }) => ({
    ...rest,
    headers: { ...headers },
    query: query ? cloneQuery(query) : undefined,
});
const cloneQuery = (query) => Object.keys(query).reduce((carry, paramName) => {
    const param = query[paramName];
    return {
        ...carry,
        [paramName]: Array.isArray(param) ? [...param] : param,
    };
}, {});


/***/ }),
/* 1408 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   prepareRequest: () => (/* binding */ prepareRequest)
/* harmony export */ });
/* harmony import */ var _cloneRequest__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1407);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1399);


const prepareRequest = (request) => {
    request = typeof request.clone === "function" ? request.clone() : (0,_cloneRequest__WEBPACK_IMPORTED_MODULE_0__.cloneRequest)(request);
    for (const headerName of Object.keys(request.headers)) {
        if (_constants__WEBPACK_IMPORTED_MODULE_1__.GENERATED_HEADERS.indexOf(headerName.toLowerCase()) > -1) {
            delete request.headers[headerName];
        }
    }
    return request;
};


/***/ }),
/* 1409 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   iso8601: () => (/* binding */ iso8601),
/* harmony export */   toDate: () => (/* binding */ toDate)
/* harmony export */ });
const iso8601 = (time) => toDate(time)
    .toISOString()
    .replace(/\.\d{3}Z$/, "Z");
const toDate = (time) => {
    if (typeof time === "number") {
        return new Date(time * 1000);
    }
    if (typeof time === "string") {
        if (Number(time)) {
            return new Date(Number(time) * 1000);
        }
        return new Date(time);
    }
    return time;
};


/***/ }),
/* 1410 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
        useGlobalEndpoint: options.useGlobalEndpoint ?? false,
        defaultSigningName: "sts",
    };
};
const commonParams = {
    UseGlobalEndpoint: { type: "builtInParams", name: "useGlobalEndpoint" },
    UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
    Endpoint: { type: "builtInParams", name: "endpoint" },
    Region: { type: "builtInParams", name: "region" },
    UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
};


/***/ }),
/* 1411 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getRuntimeConfig: () => (/* binding */ getRuntimeConfig)
/* harmony export */ });
/* harmony import */ var _package_json__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(1412);
/* harmony import */ var _aws_sdk_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(1460);
/* harmony import */ var _aws_sdk_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(1451);
/* harmony import */ var _aws_sdk_credential_provider_node__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(505);
/* harmony import */ var _aws_sdk_util_user_agent_node__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1413);
/* harmony import */ var _smithy_config_resolver__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1256);
/* harmony import */ var _smithy_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1283);
/* harmony import */ var _smithy_hash_node__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1416);
/* harmony import */ var _smithy_middleware_retry__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1316);
/* harmony import */ var _smithy_node_config_provider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1294);
/* harmony import */ var _smithy_node_http_handler__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1421);
/* harmony import */ var _smithy_util_body_length_node__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1435);
/* harmony import */ var _smithy_util_retry__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1318);
/* harmony import */ var _runtimeConfig_shared__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(1437);
/* harmony import */ var _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(1344);
/* harmony import */ var _smithy_util_defaults_mode_node__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(1456);
















const getRuntimeConfig = (config) => {
    (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_10__.emitWarningIfUnsupportedVersion)(process.version);
    const defaultsMode = (0,_smithy_util_defaults_mode_node__WEBPACK_IMPORTED_MODULE_11__.resolveDefaultsModeConfig)(config);
    const defaultConfigProvider = () => defaultsMode().then(_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_10__.loadConfigsForDefaultMode);
    const clientSharedValues = (0,_runtimeConfig_shared__WEBPACK_IMPORTED_MODULE_12__.getRuntimeConfig)(config);
    (0,_aws_sdk_core__WEBPACK_IMPORTED_MODULE_13__.emitWarningIfUnsupportedVersion)(process.version);
    return {
        ...clientSharedValues,
        ...config,
        runtime: "node",
        defaultsMode,
        bodyLengthChecker: config?.bodyLengthChecker ?? _smithy_util_body_length_node__WEBPACK_IMPORTED_MODULE_8__.calculateBodyLength,
        credentialDefaultProvider: config?.credentialDefaultProvider ?? _aws_sdk_credential_provider_node__WEBPACK_IMPORTED_MODULE_0__.defaultProvider,
        defaultUserAgentProvider: config?.defaultUserAgentProvider ??
            (0,_aws_sdk_util_user_agent_node__WEBPACK_IMPORTED_MODULE_1__.defaultUserAgent)({ serviceId: clientSharedValues.serviceId, clientVersion: _package_json__WEBPACK_IMPORTED_MODULE_14__.version }),
        httpAuthSchemes: config?.httpAuthSchemes ?? [
            {
                schemeId: "aws.auth#sigv4",
                identityProvider: (ipc) => ipc.getIdentityProvider("aws.auth#sigv4") ||
                    (async (idProps) => await (0,_aws_sdk_credential_provider_node__WEBPACK_IMPORTED_MODULE_0__.defaultProvider)(idProps?.__config || {})()),
                signer: new _aws_sdk_core__WEBPACK_IMPORTED_MODULE_15__.AwsSdkSigV4Signer(),
            },
            {
                schemeId: "smithy.api#noAuth",
                identityProvider: (ipc) => ipc.getIdentityProvider("smithy.api#noAuth") || (async () => ({})),
                signer: new _smithy_core__WEBPACK_IMPORTED_MODULE_3__.NoAuthSigner(),
            },
        ],
        maxAttempts: config?.maxAttempts ?? (0,_smithy_node_config_provider__WEBPACK_IMPORTED_MODULE_6__.loadConfig)(_smithy_middleware_retry__WEBPACK_IMPORTED_MODULE_5__.NODE_MAX_ATTEMPT_CONFIG_OPTIONS),
        region: config?.region ?? (0,_smithy_node_config_provider__WEBPACK_IMPORTED_MODULE_6__.loadConfig)(_smithy_config_resolver__WEBPACK_IMPORTED_MODULE_2__.NODE_REGION_CONFIG_OPTIONS, _smithy_config_resolver__WEBPACK_IMPORTED_MODULE_2__.NODE_REGION_CONFIG_FILE_OPTIONS),
        requestHandler: _smithy_node_http_handler__WEBPACK_IMPORTED_MODULE_7__.NodeHttpHandler.create(config?.requestHandler ?? defaultConfigProvider),
        retryMode: config?.retryMode ??
            (0,_smithy_node_config_provider__WEBPACK_IMPORTED_MODULE_6__.loadConfig)({
                ..._smithy_middleware_retry__WEBPACK_IMPORTED_MODULE_5__.NODE_RETRY_MODE_CONFIG_OPTIONS,
                default: async () => (await defaultConfigProvider()).retryMode || _smithy_util_retry__WEBPACK_IMPORTED_MODULE_9__.DEFAULT_RETRY_MODE,
            }),
        sha256: config?.sha256 ?? _smithy_hash_node__WEBPACK_IMPORTED_MODULE_4__.Hash.bind(null, "sha256"),
        streamCollector: config?.streamCollector ?? _smithy_node_http_handler__WEBPACK_IMPORTED_MODULE_7__.streamCollector,
        useDualstackEndpoint: config?.useDualstackEndpoint ?? (0,_smithy_node_config_provider__WEBPACK_IMPORTED_MODULE_6__.loadConfig)(_smithy_config_resolver__WEBPACK_IMPORTED_MODULE_2__.NODE_USE_DUALSTACK_ENDPOINT_CONFIG_OPTIONS),
        useFipsEndpoint: config?.useFipsEndpoint ?? (0,_smithy_node_config_provider__WEBPACK_IMPORTED_MODULE_6__.loadConfig)(_smithy_config_resolver__WEBPACK_IMPORTED_MODULE_2__.NODE_USE_FIPS_ENDPOINT_CONFIG_OPTIONS),
    };
};


/***/ }),
/* 1412 */
/***/ ((module) => {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"name":"@aws-sdk/client-sts","description":"AWS SDK for JavaScript Sts Client for Node.js, Browser and React Native","version":"3.606.0","scripts":{"build":"concurrently \'yarn:build:cjs\' \'yarn:build:es\' \'yarn:build:types\'","build:cjs":"node ../../scripts/compilation/inline client-sts","build:es":"tsc -p tsconfig.es.json","build:include:deps":"lerna run --scope $npm_package_name --include-dependencies build","build:types":"rimraf ./dist-types tsconfig.types.tsbuildinfo && tsc -p tsconfig.types.json","build:types:downlevel":"downlevel-dts dist-types dist-types/ts3.4","clean":"rimraf ./dist-* && rimraf *.tsbuildinfo","extract:docs":"api-extractor run --local","generate:client":"node ../../scripts/generate-clients/single-service --solo sts","test":"yarn test:unit","test:unit":"jest"},"main":"./dist-cjs/index.js","types":"./dist-types/index.d.ts","module":"./dist-es/index.js","sideEffects":false,"dependencies":{"@aws-crypto/sha256-browser":"5.2.0","@aws-crypto/sha256-js":"5.2.0","@aws-sdk/client-sso-oidc":"3.606.0","@aws-sdk/core":"3.598.0","@aws-sdk/credential-provider-node":"3.600.0","@aws-sdk/middleware-host-header":"3.598.0","@aws-sdk/middleware-logger":"3.598.0","@aws-sdk/middleware-recursion-detection":"3.598.0","@aws-sdk/middleware-user-agent":"3.598.0","@aws-sdk/region-config-resolver":"3.598.0","@aws-sdk/types":"3.598.0","@aws-sdk/util-endpoints":"3.598.0","@aws-sdk/util-user-agent-browser":"3.598.0","@aws-sdk/util-user-agent-node":"3.598.0","@smithy/config-resolver":"^3.0.2","@smithy/core":"^2.2.1","@smithy/fetch-http-handler":"^3.0.2","@smithy/hash-node":"^3.0.1","@smithy/invalid-dependency":"^3.0.1","@smithy/middleware-content-length":"^3.0.1","@smithy/middleware-endpoint":"^3.0.2","@smithy/middleware-retry":"^3.0.4","@smithy/middleware-serde":"^3.0.1","@smithy/middleware-stack":"^3.0.1","@smithy/node-config-provider":"^3.1.1","@smithy/node-http-handler":"^3.0.1","@smithy/protocol-http":"^4.0.1","@smithy/smithy-client":"^3.1.2","@smithy/types":"^3.1.0","@smithy/url-parser":"^3.0.1","@smithy/util-base64":"^3.0.0","@smithy/util-body-length-browser":"^3.0.0","@smithy/util-body-length-node":"^3.0.0","@smithy/util-defaults-mode-browser":"^3.0.4","@smithy/util-defaults-mode-node":"^3.0.4","@smithy/util-endpoints":"^2.0.2","@smithy/util-middleware":"^3.0.1","@smithy/util-retry":"^3.0.1","@smithy/util-utf8":"^3.0.0","tslib":"^2.6.2"},"devDependencies":{"@tsconfig/node16":"16.1.3","@types/node":"^16.18.96","concurrently":"7.0.0","downlevel-dts":"0.10.1","rimraf":"3.0.2","typescript":"~4.9.5"},"engines":{"node":">=16.0.0"},"typesVersions":{"<4.0":{"dist-types/*":["dist-types/ts3.4/*"]}},"files":["dist-*/**"],"author":{"name":"AWS SDK for JavaScript Team","url":"https://aws.amazon.com/javascript/"},"license":"Apache-2.0","browser":{"./dist-es/runtimeConfig":"./dist-es/runtimeConfig.browser"},"react-native":{"./dist-es/runtimeConfig":"./dist-es/runtimeConfig.native"},"homepage":"https://github.com/aws/aws-sdk-js-v3/tree/main/clients/client-sts","repository":{"type":"git","url":"https://github.com/aws/aws-sdk-js-v3.git","directory":"clients/client-sts"}}');

/***/ }),
/* 1413 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UA_APP_ID_ENV_NAME: () => (/* binding */ UA_APP_ID_ENV_NAME),
/* harmony export */   UA_APP_ID_INI_NAME: () => (/* binding */ UA_APP_ID_INI_NAME),
/* harmony export */   crtAvailability: () => (/* reexport safe */ _crt_availability__WEBPACK_IMPORTED_MODULE_4__.crtAvailability),
/* harmony export */   defaultUserAgent: () => (/* binding */ defaultUserAgent)
/* harmony export */ });
/* harmony import */ var _smithy_node_config_provider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1294);
/* harmony import */ var os__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18);
/* harmony import */ var os__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(os__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var process__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(511);
/* harmony import */ var process__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(process__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _is_crt_available__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1414);
/* harmony import */ var _crt_availability__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1415);





const UA_APP_ID_ENV_NAME = "AWS_SDK_UA_APP_ID";
const UA_APP_ID_INI_NAME = "sdk-ua-app-id";
const defaultUserAgent = ({ serviceId, clientVersion }) => {
    const sections = [
        ["aws-sdk-js", clientVersion],
        ["ua", "2.0"],
        [`os/${(0,os__WEBPACK_IMPORTED_MODULE_1__.platform)()}`, (0,os__WEBPACK_IMPORTED_MODULE_1__.release)()],
        ["lang/js"],
        ["md/nodejs", `${process__WEBPACK_IMPORTED_MODULE_2__.versions.node}`],
    ];
    const crtAvailable = (0,_is_crt_available__WEBPACK_IMPORTED_MODULE_3__.isCrtAvailable)();
    if (crtAvailable) {
        sections.push(crtAvailable);
    }
    if (serviceId) {
        sections.push([`api/${serviceId}`, clientVersion]);
    }
    if (process__WEBPACK_IMPORTED_MODULE_2__.env.AWS_EXECUTION_ENV) {
        sections.push([`exec-env/${process__WEBPACK_IMPORTED_MODULE_2__.env.AWS_EXECUTION_ENV}`]);
    }
    const appIdPromise = (0,_smithy_node_config_provider__WEBPACK_IMPORTED_MODULE_0__.loadConfig)({
        environmentVariableSelector: (env) => env[UA_APP_ID_ENV_NAME],
        configFileSelector: (profile) => profile[UA_APP_ID_INI_NAME],
        default: undefined,
    })();
    let resolvedUserAgent = undefined;
    return async () => {
        if (!resolvedUserAgent) {
            const appId = await appIdPromise;
            resolvedUserAgent = appId ? [...sections, [`app/${appId}`]] : [...sections];
        }
        return resolvedUserAgent;
    };
};


/***/ }),
/* 1414 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isCrtAvailable: () => (/* binding */ isCrtAvailable)
/* harmony export */ });
/* harmony import */ var _crt_availability__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1415);

const isCrtAvailable = () => {
    if (_crt_availability__WEBPACK_IMPORTED_MODULE_0__.crtAvailability.isCrtAvailable) {
        return ["md/crt-avail"];
    }
    return null;
};


/***/ }),
/* 1415 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   crtAvailability: () => (/* binding */ crtAvailability)
/* harmony export */ });
const crtAvailability = {
    isCrtAvailable: false,
};


/***/ }),
/* 1416 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Hash: () => (/* binding */ Hash)
/* harmony export */ });
/* harmony import */ var _smithy_util_buffer_from__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1395);
/* harmony import */ var _smithy_util_utf8__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1417);
/* harmony import */ var buffer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(338);
/* harmony import */ var buffer__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(buffer__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(209);
/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(crypto__WEBPACK_IMPORTED_MODULE_3__);




class Hash {
    constructor(algorithmIdentifier, secret) {
        this.algorithmIdentifier = algorithmIdentifier;
        this.secret = secret;
        this.reset();
    }
    update(toHash, encoding) {
        this.hash.update((0,_smithy_util_utf8__WEBPACK_IMPORTED_MODULE_1__.toUint8Array)(castSourceData(toHash, encoding)));
    }
    digest() {
        return Promise.resolve(this.hash.digest());
    }
    reset() {
        this.hash = this.secret
            ? (0,crypto__WEBPACK_IMPORTED_MODULE_3__.createHmac)(this.algorithmIdentifier, castSourceData(this.secret))
            : (0,crypto__WEBPACK_IMPORTED_MODULE_3__.createHash)(this.algorithmIdentifier);
    }
}
function castSourceData(toCast, encoding) {
    if (buffer__WEBPACK_IMPORTED_MODULE_2__.Buffer.isBuffer(toCast)) {
        return toCast;
    }
    if (typeof toCast === "string") {
        return (0,_smithy_util_buffer_from__WEBPACK_IMPORTED_MODULE_0__.fromString)(toCast, encoding);
    }
    if (ArrayBuffer.isView(toCast)) {
        return (0,_smithy_util_buffer_from__WEBPACK_IMPORTED_MODULE_0__.fromArrayBuffer)(toCast.buffer, toCast.byteOffset, toCast.byteLength);
    }
    return (0,_smithy_util_buffer_from__WEBPACK_IMPORTED_MODULE_0__.fromArrayBuffer)(toCast);
}


/***/ }),
/* 1417 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   fromUtf8: () => (/* reexport safe */ _fromUtf8__WEBPACK_IMPORTED_MODULE_0__.fromUtf8),
/* harmony export */   toUint8Array: () => (/* reexport safe */ _toUint8Array__WEBPACK_IMPORTED_MODULE_1__.toUint8Array),
/* harmony export */   toUtf8: () => (/* reexport safe */ _toUtf8__WEBPACK_IMPORTED_MODULE_2__.toUtf8)
/* harmony export */ });
/* harmony import */ var _fromUtf8__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1418);
/* harmony import */ var _toUint8Array__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1419);
/* harmony import */ var _toUtf8__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1420);





/***/ }),
/* 1418 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   fromUtf8: () => (/* binding */ fromUtf8)
/* harmony export */ });
/* harmony import */ var _smithy_util_buffer_from__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1395);

const fromUtf8 = (input) => {
    const buf = (0,_smithy_util_buffer_from__WEBPACK_IMPORTED_MODULE_0__.fromString)(input, "utf8");
    return new Uint8Array(buf.buffer, buf.byteOffset, buf.byteLength / Uint8Array.BYTES_PER_ELEMENT);
};


/***/ }),
/* 1419 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   toUint8Array: () => (/* binding */ toUint8Array)
/* harmony export */ });
/* harmony import */ var _fromUtf8__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1418);

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
/* 1420 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   toUtf8: () => (/* binding */ toUtf8)
/* harmony export */ });
/* harmony import */ var _smithy_util_buffer_from__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1395);

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
/* 1421 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DEFAULT_REQUEST_TIMEOUT: () => (/* reexport safe */ _node_http_handler__WEBPACK_IMPORTED_MODULE_0__.DEFAULT_REQUEST_TIMEOUT),
/* harmony export */   NodeHttp2Handler: () => (/* reexport safe */ _node_http2_handler__WEBPACK_IMPORTED_MODULE_1__.NodeHttp2Handler),
/* harmony export */   NodeHttpHandler: () => (/* reexport safe */ _node_http_handler__WEBPACK_IMPORTED_MODULE_0__.NodeHttpHandler),
/* harmony export */   streamCollector: () => (/* reexport safe */ _stream_collector__WEBPACK_IMPORTED_MODULE_2__.streamCollector)
/* harmony export */ });
/* harmony import */ var _node_http_handler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1422);
/* harmony import */ var _node_http2_handler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1430);
/* harmony import */ var _stream_collector__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1433);





/***/ }),
/* 1422 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DEFAULT_REQUEST_TIMEOUT: () => (/* binding */ DEFAULT_REQUEST_TIMEOUT),
/* harmony export */   NodeHttpHandler: () => (/* binding */ NodeHttpHandler)
/* harmony export */ });
/* harmony import */ var _smithy_protocol_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1124);
/* harmony import */ var _smithy_querystring_builder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1423);
/* harmony import */ var http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(421);
/* harmony import */ var http__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(http__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var https__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(422);
/* harmony import */ var https__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(https__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1424);
/* harmony import */ var _get_transformed_headers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1425);
/* harmony import */ var _set_connection_timeout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1426);
/* harmony import */ var _set_socket_keep_alive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1427);
/* harmony import */ var _set_socket_timeout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1428);
/* harmony import */ var _write_request_body__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1429);










const DEFAULT_REQUEST_TIMEOUT = 0;
class NodeHttpHandler {
    static create(instanceOrOptions) {
        if (typeof instanceOrOptions?.handle === "function") {
            return instanceOrOptions;
        }
        return new NodeHttpHandler(instanceOrOptions);
    }
    static checkSocketUsage(agent, socketWarningTimestamp, logger = console) {
        const { sockets, requests, maxSockets } = agent;
        if (typeof maxSockets !== "number" || maxSockets === Infinity) {
            return socketWarningTimestamp;
        }
        const interval = 15000;
        if (Date.now() - interval < socketWarningTimestamp) {
            return socketWarningTimestamp;
        }
        if (sockets && requests) {
            for (const origin in sockets) {
                const socketsInUse = sockets[origin]?.length ?? 0;
                const requestsEnqueued = requests[origin]?.length ?? 0;
                if (socketsInUse >= maxSockets && requestsEnqueued >= 2 * maxSockets) {
                    logger?.warn?.(`@smithy/node-http-handler:WARN - socket usage at capacity=${socketsInUse} and ${requestsEnqueued} additional requests are enqueued.
See https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/node-configuring-maxsockets.html
or increase socketAcquisitionWarningTimeout=(millis) in the NodeHttpHandler config.`);
                    return Date.now();
                }
            }
        }
        return socketWarningTimestamp;
    }
    constructor(options) {
        this.socketWarningTimestamp = 0;
        this.metadata = { handlerProtocol: "http/1.1" };
        this.configProvider = new Promise((resolve, reject) => {
            if (typeof options === "function") {
                options()
                    .then((_options) => {
                    resolve(this.resolveDefaultConfig(_options));
                })
                    .catch(reject);
            }
            else {
                resolve(this.resolveDefaultConfig(options));
            }
        });
    }
    resolveDefaultConfig(options) {
        const { requestTimeout, connectionTimeout, socketTimeout, httpAgent, httpsAgent } = options || {};
        const keepAlive = true;
        const maxSockets = 50;
        return {
            connectionTimeout,
            requestTimeout: requestTimeout ?? socketTimeout,
            httpAgent: (() => {
                if (httpAgent instanceof http__WEBPACK_IMPORTED_MODULE_2__.Agent || typeof httpAgent?.destroy === "function") {
                    return httpAgent;
                }
                return new http__WEBPACK_IMPORTED_MODULE_2__.Agent({ keepAlive, maxSockets, ...httpAgent });
            })(),
            httpsAgent: (() => {
                if (httpsAgent instanceof https__WEBPACK_IMPORTED_MODULE_3__.Agent || typeof httpsAgent?.destroy === "function") {
                    return httpsAgent;
                }
                return new https__WEBPACK_IMPORTED_MODULE_3__.Agent({ keepAlive, maxSockets, ...httpsAgent });
            })(),
            logger: console,
        };
    }
    destroy() {
        this.config?.httpAgent?.destroy();
        this.config?.httpsAgent?.destroy();
    }
    async handle(request, { abortSignal } = {}) {
        if (!this.config) {
            this.config = await this.configProvider;
        }
        let socketCheckTimeoutId;
        return new Promise((_resolve, _reject) => {
            let writeRequestBodyPromise = undefined;
            const resolve = async (arg) => {
                await writeRequestBodyPromise;
                clearTimeout(socketCheckTimeoutId);
                _resolve(arg);
            };
            const reject = async (arg) => {
                await writeRequestBodyPromise;
                clearTimeout(socketCheckTimeoutId);
                _reject(arg);
            };
            if (!this.config) {
                throw new Error("Node HTTP request handler config is not resolved");
            }
            if (abortSignal?.aborted) {
                const abortError = new Error("Request aborted");
                abortError.name = "AbortError";
                reject(abortError);
                return;
            }
            const isSSL = request.protocol === "https:";
            const agent = isSSL ? this.config.httpsAgent : this.config.httpAgent;
            socketCheckTimeoutId = setTimeout(() => {
                this.socketWarningTimestamp = NodeHttpHandler.checkSocketUsage(agent, this.socketWarningTimestamp, this.config.logger);
            }, this.config.socketAcquisitionWarningTimeout ??
                (this.config.requestTimeout ?? 2000) + (this.config.connectionTimeout ?? 1000));
            const queryString = (0,_smithy_querystring_builder__WEBPACK_IMPORTED_MODULE_1__.buildQueryString)(request.query || {});
            let auth = undefined;
            if (request.username != null || request.password != null) {
                const username = request.username ?? "";
                const password = request.password ?? "";
                auth = `${username}:${password}`;
            }
            let path = request.path;
            if (queryString) {
                path += `?${queryString}`;
            }
            if (request.fragment) {
                path += `#${request.fragment}`;
            }
            const nodeHttpsOptions = {
                headers: request.headers,
                host: request.hostname,
                method: request.method,
                path,
                port: request.port,
                agent,
                auth,
            };
            const requestFunc = isSSL ? https__WEBPACK_IMPORTED_MODULE_3__.request : http__WEBPACK_IMPORTED_MODULE_2__.request;
            const req = requestFunc(nodeHttpsOptions, (res) => {
                const httpResponse = new _smithy_protocol_http__WEBPACK_IMPORTED_MODULE_0__.HttpResponse({
                    statusCode: res.statusCode || -1,
                    reason: res.statusMessage,
                    headers: (0,_get_transformed_headers__WEBPACK_IMPORTED_MODULE_5__.getTransformedHeaders)(res.headers),
                    body: res,
                });
                resolve({ response: httpResponse });
            });
            req.on("error", (err) => {
                if (_constants__WEBPACK_IMPORTED_MODULE_4__.NODEJS_TIMEOUT_ERROR_CODES.includes(err.code)) {
                    reject(Object.assign(err, { name: "TimeoutError" }));
                }
                else {
                    reject(err);
                }
            });
            (0,_set_connection_timeout__WEBPACK_IMPORTED_MODULE_6__.setConnectionTimeout)(req, reject, this.config.connectionTimeout);
            (0,_set_socket_timeout__WEBPACK_IMPORTED_MODULE_8__.setSocketTimeout)(req, reject, this.config.requestTimeout);
            if (abortSignal) {
                const onAbort = () => {
                    req.destroy();
                    const abortError = new Error("Request aborted");
                    abortError.name = "AbortError";
                    reject(abortError);
                };
                if (typeof abortSignal.addEventListener === "function") {
                    abortSignal.addEventListener("abort", onAbort);
                }
                else {
                    abortSignal.onabort = onAbort;
                }
            }
            const httpAgent = nodeHttpsOptions.agent;
            if (typeof httpAgent === "object" && "keepAlive" in httpAgent) {
                (0,_set_socket_keep_alive__WEBPACK_IMPORTED_MODULE_7__.setSocketKeepAlive)(req, {
                    keepAlive: httpAgent.keepAlive,
                    keepAliveMsecs: httpAgent.keepAliveMsecs,
                });
            }
            writeRequestBodyPromise = (0,_write_request_body__WEBPACK_IMPORTED_MODULE_9__.writeRequestBody)(req, request, this.config.requestTimeout).catch((e) => {
                clearTimeout(socketCheckTimeoutId);
                return _reject(e);
            });
        });
    }
    updateHttpClientConfig(key, value) {
        this.config = undefined;
        this.configProvider = this.configProvider.then((config) => {
            return {
                ...config,
                [key]: value,
            };
        });
    }
    httpHandlerConfigs() {
        return this.config ?? {};
    }
}


/***/ }),
/* 1423 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   buildQueryString: () => (/* binding */ buildQueryString)
/* harmony export */ });
/* harmony import */ var _smithy_util_uri_escape__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1390);

function buildQueryString(query) {
    const parts = [];
    for (let key of Object.keys(query).sort()) {
        const value = query[key];
        key = (0,_smithy_util_uri_escape__WEBPACK_IMPORTED_MODULE_0__.escapeUri)(key);
        if (Array.isArray(value)) {
            for (let i = 0, iLen = value.length; i < iLen; i++) {
                parts.push(`${key}=${(0,_smithy_util_uri_escape__WEBPACK_IMPORTED_MODULE_0__.escapeUri)(value[i])}`);
            }
        }
        else {
            let qsEntry = key;
            if (value || typeof value === "string") {
                qsEntry += `=${(0,_smithy_util_uri_escape__WEBPACK_IMPORTED_MODULE_0__.escapeUri)(value)}`;
            }
            parts.push(qsEntry);
        }
    }
    return parts.join("&");
}


/***/ }),
/* 1424 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NODEJS_TIMEOUT_ERROR_CODES: () => (/* binding */ NODEJS_TIMEOUT_ERROR_CODES)
/* harmony export */ });
const NODEJS_TIMEOUT_ERROR_CODES = ["ECONNRESET", "EPIPE", "ETIMEDOUT"];


/***/ }),
/* 1425 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getTransformedHeaders: () => (/* binding */ getTransformedHeaders)
/* harmony export */ });
const getTransformedHeaders = (headers) => {
    const transformedHeaders = {};
    for (const name of Object.keys(headers)) {
        const headerValues = headers[name];
        transformedHeaders[name] = Array.isArray(headerValues) ? headerValues.join(",") : headerValues;
    }
    return transformedHeaders;
};



/***/ }),
/* 1426 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   setConnectionTimeout: () => (/* binding */ setConnectionTimeout)
/* harmony export */ });
const setConnectionTimeout = (request, reject, timeoutInMs = 0) => {
    if (!timeoutInMs) {
        return;
    }
    const timeoutId = setTimeout(() => {
        request.destroy();
        reject(Object.assign(new Error(`Socket timed out without establishing a connection within ${timeoutInMs} ms`), {
            name: "TimeoutError",
        }));
    }, timeoutInMs);
    request.on("socket", (socket) => {
        if (socket.connecting) {
            socket.on("connect", () => {
                clearTimeout(timeoutId);
            });
        }
        else {
            clearTimeout(timeoutId);
        }
    });
};


/***/ }),
/* 1427 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   setSocketKeepAlive: () => (/* binding */ setSocketKeepAlive)
/* harmony export */ });
const setSocketKeepAlive = (request, { keepAlive, keepAliveMsecs }) => {
    if (keepAlive !== true) {
        return;
    }
    request.on("socket", (socket) => {
        socket.setKeepAlive(keepAlive, keepAliveMsecs || 0);
    });
};


/***/ }),
/* 1428 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   setSocketTimeout: () => (/* binding */ setSocketTimeout)
/* harmony export */ });
const setSocketTimeout = (request, reject, timeoutInMs = 0) => {
    request.setTimeout(timeoutInMs, () => {
        request.destroy();
        reject(Object.assign(new Error(`Connection timed out after ${timeoutInMs} ms`), { name: "TimeoutError" }));
    });
};


/***/ }),
/* 1429 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   writeRequestBody: () => (/* binding */ writeRequestBody)
/* harmony export */ });
/* harmony import */ var stream__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(345);
/* harmony import */ var stream__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(stream__WEBPACK_IMPORTED_MODULE_0__);

const MIN_WAIT_TIME = 1000;
async function writeRequestBody(httpRequest, request, maxContinueTimeoutMs = MIN_WAIT_TIME) {
    const headers = request.headers ?? {};
    const expect = headers["Expect"] || headers["expect"];
    let timeoutId = -1;
    let hasError = false;
    if (expect === "100-continue") {
        await Promise.race([
            new Promise((resolve) => {
                timeoutId = Number(setTimeout(resolve, Math.max(MIN_WAIT_TIME, maxContinueTimeoutMs)));
            }),
            new Promise((resolve) => {
                httpRequest.on("continue", () => {
                    clearTimeout(timeoutId);
                    resolve();
                });
                httpRequest.on("error", () => {
                    hasError = true;
                    clearTimeout(timeoutId);
                    resolve();
                });
            }),
        ]);
    }
    if (!hasError) {
        writeBody(httpRequest, request.body);
    }
}
function writeBody(httpRequest, body) {
    if (body instanceof stream__WEBPACK_IMPORTED_MODULE_0__.Readable) {
        body.pipe(httpRequest);
        return;
    }
    if (body) {
        if (Buffer.isBuffer(body) || typeof body === "string") {
            httpRequest.end(body);
            return;
        }
        const uint8 = body;
        if (typeof uint8 === "object" &&
            uint8.buffer &&
            typeof uint8.byteOffset === "number" &&
            typeof uint8.byteLength === "number") {
            httpRequest.end(Buffer.from(uint8.buffer, uint8.byteOffset, uint8.byteLength));
            return;
        }
        httpRequest.end(Buffer.from(body));
        return;
    }
    httpRequest.end();
}


/***/ }),
/* 1430 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NodeHttp2Handler: () => (/* binding */ NodeHttp2Handler)
/* harmony export */ });
/* harmony import */ var _smithy_protocol_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1124);
/* harmony import */ var _smithy_querystring_builder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1423);
/* harmony import */ var http2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(430);
/* harmony import */ var http2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(http2__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _get_transformed_headers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1425);
/* harmony import */ var _node_http2_connection_manager__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1431);
/* harmony import */ var _write_request_body__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1429);






class NodeHttp2Handler {
    static create(instanceOrOptions) {
        if (typeof instanceOrOptions?.handle === "function") {
            return instanceOrOptions;
        }
        return new NodeHttp2Handler(instanceOrOptions);
    }
    constructor(options) {
        this.metadata = { handlerProtocol: "h2" };
        this.connectionManager = new _node_http2_connection_manager__WEBPACK_IMPORTED_MODULE_4__.NodeHttp2ConnectionManager({});
        this.configProvider = new Promise((resolve, reject) => {
            if (typeof options === "function") {
                options()
                    .then((opts) => {
                    resolve(opts || {});
                })
                    .catch(reject);
            }
            else {
                resolve(options || {});
            }
        });
    }
    destroy() {
        this.connectionManager.destroy();
    }
    async handle(request, { abortSignal } = {}) {
        if (!this.config) {
            this.config = await this.configProvider;
            this.connectionManager.setDisableConcurrentStreams(this.config.disableConcurrentStreams || false);
            if (this.config.maxConcurrentStreams) {
                this.connectionManager.setMaxConcurrentStreams(this.config.maxConcurrentStreams);
            }
        }
        const { requestTimeout, disableConcurrentStreams } = this.config;
        return new Promise((_resolve, _reject) => {
            let fulfilled = false;
            let writeRequestBodyPromise = undefined;
            const resolve = async (arg) => {
                await writeRequestBodyPromise;
                _resolve(arg);
            };
            const reject = async (arg) => {
                await writeRequestBodyPromise;
                _reject(arg);
            };
            if (abortSignal?.aborted) {
                fulfilled = true;
                const abortError = new Error("Request aborted");
                abortError.name = "AbortError";
                reject(abortError);
                return;
            }
            const { hostname, method, port, protocol, query } = request;
            let auth = "";
            if (request.username != null || request.password != null) {
                const username = request.username ?? "";
                const password = request.password ?? "";
                auth = `${username}:${password}@`;
            }
            const authority = `${protocol}//${auth}${hostname}${port ? `:${port}` : ""}`;
            const requestContext = { destination: new URL(authority) };
            const session = this.connectionManager.lease(requestContext, {
                requestTimeout: this.config?.sessionTimeout,
                disableConcurrentStreams: disableConcurrentStreams || false,
            });
            const rejectWithDestroy = (err) => {
                if (disableConcurrentStreams) {
                    this.destroySession(session);
                }
                fulfilled = true;
                reject(err);
            };
            const queryString = (0,_smithy_querystring_builder__WEBPACK_IMPORTED_MODULE_1__.buildQueryString)(query || {});
            let path = request.path;
            if (queryString) {
                path += `?${queryString}`;
            }
            if (request.fragment) {
                path += `#${request.fragment}`;
            }
            const req = session.request({
                ...request.headers,
                [http2__WEBPACK_IMPORTED_MODULE_2__.constants.HTTP2_HEADER_PATH]: path,
                [http2__WEBPACK_IMPORTED_MODULE_2__.constants.HTTP2_HEADER_METHOD]: method,
            });
            session.ref();
            req.on("response", (headers) => {
                const httpResponse = new _smithy_protocol_http__WEBPACK_IMPORTED_MODULE_0__.HttpResponse({
                    statusCode: headers[":status"] || -1,
                    headers: (0,_get_transformed_headers__WEBPACK_IMPORTED_MODULE_3__.getTransformedHeaders)(headers),
                    body: req,
                });
                fulfilled = true;
                resolve({ response: httpResponse });
                if (disableConcurrentStreams) {
                    session.close();
                    this.connectionManager.deleteSession(authority, session);
                }
            });
            if (requestTimeout) {
                req.setTimeout(requestTimeout, () => {
                    req.close();
                    const timeoutError = new Error(`Stream timed out because of no activity for ${requestTimeout} ms`);
                    timeoutError.name = "TimeoutError";
                    rejectWithDestroy(timeoutError);
                });
            }
            if (abortSignal) {
                const onAbort = () => {
                    req.close();
                    const abortError = new Error("Request aborted");
                    abortError.name = "AbortError";
                    rejectWithDestroy(abortError);
                };
                if (typeof abortSignal.addEventListener === "function") {
                    abortSignal.addEventListener("abort", onAbort);
                }
                else {
                    abortSignal.onabort = onAbort;
                }
            }
            req.on("frameError", (type, code, id) => {
                rejectWithDestroy(new Error(`Frame type id ${type} in stream id ${id} has failed with code ${code}.`));
            });
            req.on("error", rejectWithDestroy);
            req.on("aborted", () => {
                rejectWithDestroy(new Error(`HTTP/2 stream is abnormally aborted in mid-communication with result code ${req.rstCode}.`));
            });
            req.on("close", () => {
                session.unref();
                if (disableConcurrentStreams) {
                    session.destroy();
                }
                if (!fulfilled) {
                    rejectWithDestroy(new Error("Unexpected error: http2 request did not get a response"));
                }
            });
            writeRequestBodyPromise = (0,_write_request_body__WEBPACK_IMPORTED_MODULE_5__.writeRequestBody)(req, request, requestTimeout);
        });
    }
    updateHttpClientConfig(key, value) {
        this.config = undefined;
        this.configProvider = this.configProvider.then((config) => {
            return {
                ...config,
                [key]: value,
            };
        });
    }
    httpHandlerConfigs() {
        return this.config ?? {};
    }
    destroySession(session) {
        if (!session.destroyed) {
            session.destroy();
        }
    }
}


/***/ }),
/* 1431 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NodeHttp2ConnectionManager: () => (/* binding */ NodeHttp2ConnectionManager)
/* harmony export */ });
/* harmony import */ var http2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(430);
/* harmony import */ var http2__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(http2__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_http2_connection_pool__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1432);


class NodeHttp2ConnectionManager {
    constructor(config) {
        this.sessionCache = new Map();
        this.config = config;
        if (this.config.maxConcurrency && this.config.maxConcurrency <= 0) {
            throw new RangeError("maxConcurrency must be greater than zero.");
        }
    }
    lease(requestContext, connectionConfiguration) {
        const url = this.getUrlString(requestContext);
        const existingPool = this.sessionCache.get(url);
        if (existingPool) {
            const existingSession = existingPool.poll();
            if (existingSession && !this.config.disableConcurrency) {
                return existingSession;
            }
        }
        const session = http2__WEBPACK_IMPORTED_MODULE_0___default().connect(url);
        if (this.config.maxConcurrency) {
            session.settings({ maxConcurrentStreams: this.config.maxConcurrency }, (err) => {
                if (err) {
                    throw new Error("Fail to set maxConcurrentStreams to " +
                        this.config.maxConcurrency +
                        "when creating new session for " +
                        requestContext.destination.toString());
                }
            });
        }
        session.unref();
        const destroySessionCb = () => {
            session.destroy();
            this.deleteSession(url, session);
        };
        session.on("goaway", destroySessionCb);
        session.on("error", destroySessionCb);
        session.on("frameError", destroySessionCb);
        session.on("close", () => this.deleteSession(url, session));
        if (connectionConfiguration.requestTimeout) {
            session.setTimeout(connectionConfiguration.requestTimeout, destroySessionCb);
        }
        const connectionPool = this.sessionCache.get(url) || new _node_http2_connection_pool__WEBPACK_IMPORTED_MODULE_1__.NodeHttp2ConnectionPool();
        connectionPool.offerLast(session);
        this.sessionCache.set(url, connectionPool);
        return session;
    }
    deleteSession(authority, session) {
        const existingConnectionPool = this.sessionCache.get(authority);
        if (!existingConnectionPool) {
            return;
        }
        if (!existingConnectionPool.contains(session)) {
            return;
        }
        existingConnectionPool.remove(session);
        this.sessionCache.set(authority, existingConnectionPool);
    }
    release(requestContext, session) {
        const cacheKey = this.getUrlString(requestContext);
        this.sessionCache.get(cacheKey)?.offerLast(session);
    }
    destroy() {
        for (const [key, connectionPool] of this.sessionCache) {
            for (const session of connectionPool) {
                if (!session.destroyed) {
                    session.destroy();
                }
                connectionPool.remove(session);
            }
            this.sessionCache.delete(key);
        }
    }
    setMaxConcurrentStreams(maxConcurrentStreams) {
        if (this.config.maxConcurrency && this.config.maxConcurrency <= 0) {
            throw new RangeError("maxConcurrentStreams must be greater than zero.");
        }
        this.config.maxConcurrency = maxConcurrentStreams;
    }
    setDisableConcurrentStreams(disableConcurrentStreams) {
        this.config.disableConcurrency = disableConcurrentStreams;
    }
    getUrlString(request) {
        return request.destination.toString();
    }
}


/***/ }),
/* 1432 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NodeHttp2ConnectionPool: () => (/* binding */ NodeHttp2ConnectionPool)
/* harmony export */ });
class NodeHttp2ConnectionPool {
    constructor(sessions) {
        this.sessions = [];
        this.sessions = sessions ?? [];
    }
    poll() {
        if (this.sessions.length > 0) {
            return this.sessions.shift();
        }
    }
    offerLast(session) {
        this.sessions.push(session);
    }
    contains(session) {
        return this.sessions.includes(session);
    }
    remove(session) {
        this.sessions = this.sessions.filter((s) => s !== session);
    }
    [Symbol.iterator]() {
        return this.sessions[Symbol.iterator]();
    }
    destroy(connection) {
        for (const session of this.sessions) {
            if (session === connection) {
                if (!session.destroyed) {
                    session.destroy();
                }
            }
        }
    }
}


/***/ }),
/* 1433 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   streamCollector: () => (/* binding */ streamCollector)
/* harmony export */ });
/* harmony import */ var _collector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1434);

const streamCollector = (stream) => {
    if (isReadableStreamInstance(stream)) {
        return collectReadableStream(stream);
    }
    return new Promise((resolve, reject) => {
        const collector = new _collector__WEBPACK_IMPORTED_MODULE_0__.Collector();
        stream.pipe(collector);
        stream.on("error", (err) => {
            collector.end();
            reject(err);
        });
        collector.on("error", reject);
        collector.on("finish", function () {
            const bytes = new Uint8Array(Buffer.concat(this.bufferedBytes));
            resolve(bytes);
        });
    });
};
const isReadableStreamInstance = (stream) => typeof ReadableStream === "function" && stream instanceof ReadableStream;
async function collectReadableStream(stream) {
    const chunks = [];
    const reader = stream.getReader();
    let isDone = false;
    let length = 0;
    while (!isDone) {
        const { done, value } = await reader.read();
        if (value) {
            chunks.push(value);
            length += value.length;
        }
        isDone = done;
    }
    const collected = new Uint8Array(length);
    let offset = 0;
    for (const chunk of chunks) {
        collected.set(chunk, offset);
        offset += chunk.length;
    }
    return collected;
}


/***/ }),
/* 1434 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Collector: () => (/* binding */ Collector)
/* harmony export */ });
/* harmony import */ var stream__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(345);
/* harmony import */ var stream__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(stream__WEBPACK_IMPORTED_MODULE_0__);

class Collector extends stream__WEBPACK_IMPORTED_MODULE_0__.Writable {
    constructor() {
        super(...arguments);
        this.bufferedBytes = [];
    }
    _write(chunk, encoding, callback) {
        this.bufferedBytes.push(chunk);
        callback();
    }
}


/***/ }),
/* 1435 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   calculateBodyLength: () => (/* reexport safe */ _calculateBodyLength__WEBPACK_IMPORTED_MODULE_0__.calculateBodyLength)
/* harmony export */ });
/* harmony import */ var _calculateBodyLength__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1436);



/***/ }),
/* 1436 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   calculateBodyLength: () => (/* binding */ calculateBodyLength)
/* harmony export */ });
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_0__);

const calculateBodyLength = (body) => {
    if (!body) {
        return 0;
    }
    if (typeof body === "string") {
        return Buffer.byteLength(body);
    }
    else if (typeof body.byteLength === "number") {
        return body.byteLength;
    }
    else if (typeof body.size === "number") {
        return body.size;
    }
    else if (typeof body.start === "number" && typeof body.end === "number") {
        return body.end + 1 - body.start;
    }
    else if (typeof body.path === "string" || Buffer.isBuffer(body.path)) {
        return (0,fs__WEBPACK_IMPORTED_MODULE_0__.lstatSync)(body.path).size;
    }
    else if (typeof body.fd === "number") {
        return (0,fs__WEBPACK_IMPORTED_MODULE_0__.fstatSync)(body.fd).size;
    }
    throw new Error(`Body Length computation failed for ${body}`);
};


/***/ }),
/* 1437 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getRuntimeConfig: () => (/* binding */ getRuntimeConfig)
/* harmony export */ });
/* harmony import */ var _aws_sdk_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1451);
/* harmony import */ var _smithy_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1283);
/* harmony import */ var _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1344);
/* harmony import */ var _smithy_url_parser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1302);
/* harmony import */ var _smithy_util_base64__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1438);
/* harmony import */ var _smithy_util_utf8__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1445);
/* harmony import */ var _auth_httpAuthSchemeProvider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1385);
/* harmony import */ var _endpoint_endpointResolver__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1449);








const getRuntimeConfig = (config) => {
    return {
        apiVersion: "2011-06-15",
        base64Decoder: config?.base64Decoder ?? _smithy_util_base64__WEBPACK_IMPORTED_MODULE_3__.fromBase64,
        base64Encoder: config?.base64Encoder ?? _smithy_util_base64__WEBPACK_IMPORTED_MODULE_3__.toBase64,
        disableHostPrefix: config?.disableHostPrefix ?? false,
        endpointProvider: config?.endpointProvider ?? _endpoint_endpointResolver__WEBPACK_IMPORTED_MODULE_5__.defaultEndpointResolver,
        extensions: config?.extensions ?? [],
        httpAuthSchemeProvider: config?.httpAuthSchemeProvider ?? _auth_httpAuthSchemeProvider__WEBPACK_IMPORTED_MODULE_6__.defaultSTSHttpAuthSchemeProvider,
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
        serviceId: config?.serviceId ?? "STS",
        urlParser: config?.urlParser ?? _smithy_url_parser__WEBPACK_IMPORTED_MODULE_2__.parseUrl,
        utf8Decoder: config?.utf8Decoder ?? _smithy_util_utf8__WEBPACK_IMPORTED_MODULE_4__.fromUtf8,
        utf8Encoder: config?.utf8Encoder ?? _smithy_util_utf8__WEBPACK_IMPORTED_MODULE_4__.toUtf8,
    };
};


/***/ }),
/* 1438 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   fromBase64: () => (/* reexport safe */ _fromBase64__WEBPACK_IMPORTED_MODULE_0__.fromBase64),
/* harmony export */   toBase64: () => (/* reexport safe */ _toBase64__WEBPACK_IMPORTED_MODULE_1__.toBase64)
/* harmony export */ });
/* harmony import */ var _fromBase64__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1439);
/* harmony import */ var _toBase64__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1440);




/***/ }),
/* 1439 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   fromBase64: () => (/* binding */ fromBase64)
/* harmony export */ });
/* harmony import */ var _smithy_util_buffer_from__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1395);

const BASE64_REGEX = /^[A-Za-z0-9+/]*={0,2}$/;
const fromBase64 = (input) => {
    if ((input.length * 3) % 4 !== 0) {
        throw new TypeError(`Incorrect padding on base64 string.`);
    }
    if (!BASE64_REGEX.exec(input)) {
        throw new TypeError(`Invalid base64 string.`);
    }
    const buffer = (0,_smithy_util_buffer_from__WEBPACK_IMPORTED_MODULE_0__.fromString)(input, "base64");
    return new Uint8Array(buffer.buffer, buffer.byteOffset, buffer.byteLength);
};


/***/ }),
/* 1440 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   toBase64: () => (/* binding */ toBase64)
/* harmony export */ });
/* harmony import */ var _smithy_util_buffer_from__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1395);
/* harmony import */ var _smithy_util_utf8__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1441);


const toBase64 = (_input) => {
    let input;
    if (typeof _input === "string") {
        input = (0,_smithy_util_utf8__WEBPACK_IMPORTED_MODULE_1__.fromUtf8)(_input);
    }
    else {
        input = _input;
    }
    if (typeof input !== "object" || typeof input.byteOffset !== "number" || typeof input.byteLength !== "number") {
        throw new Error("@smithy/util-base64: toBase64 encoder function only accepts string | Uint8Array.");
    }
    return (0,_smithy_util_buffer_from__WEBPACK_IMPORTED_MODULE_0__.fromArrayBuffer)(input.buffer, input.byteOffset, input.byteLength).toString("base64");
};


/***/ }),
/* 1441 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   fromUtf8: () => (/* reexport safe */ _fromUtf8__WEBPACK_IMPORTED_MODULE_0__.fromUtf8),
/* harmony export */   toUint8Array: () => (/* reexport safe */ _toUint8Array__WEBPACK_IMPORTED_MODULE_1__.toUint8Array),
/* harmony export */   toUtf8: () => (/* reexport safe */ _toUtf8__WEBPACK_IMPORTED_MODULE_2__.toUtf8)
/* harmony export */ });
/* harmony import */ var _fromUtf8__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1442);
/* harmony import */ var _toUint8Array__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1443);
/* harmony import */ var _toUtf8__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1444);





/***/ }),
/* 1442 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   fromUtf8: () => (/* binding */ fromUtf8)
/* harmony export */ });
/* harmony import */ var _smithy_util_buffer_from__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1395);

const fromUtf8 = (input) => {
    const buf = (0,_smithy_util_buffer_from__WEBPACK_IMPORTED_MODULE_0__.fromString)(input, "utf8");
    return new Uint8Array(buf.buffer, buf.byteOffset, buf.byteLength / Uint8Array.BYTES_PER_ELEMENT);
};


/***/ }),
/* 1443 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   toUint8Array: () => (/* binding */ toUint8Array)
/* harmony export */ });
/* harmony import */ var _fromUtf8__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1442);

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
/* 1444 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   toUtf8: () => (/* binding */ toUtf8)
/* harmony export */ });
/* harmony import */ var _smithy_util_buffer_from__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1395);

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
/* 1445 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   fromUtf8: () => (/* reexport safe */ _fromUtf8__WEBPACK_IMPORTED_MODULE_0__.fromUtf8),
/* harmony export */   toUint8Array: () => (/* reexport safe */ _toUint8Array__WEBPACK_IMPORTED_MODULE_1__.toUint8Array),
/* harmony export */   toUtf8: () => (/* reexport safe */ _toUtf8__WEBPACK_IMPORTED_MODULE_2__.toUtf8)
/* harmony export */ });
/* harmony import */ var _fromUtf8__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1446);
/* harmony import */ var _toUint8Array__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1447);
/* harmony import */ var _toUtf8__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1448);





/***/ }),
/* 1446 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   fromUtf8: () => (/* binding */ fromUtf8)
/* harmony export */ });
/* harmony import */ var _smithy_util_buffer_from__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1395);

const fromUtf8 = (input) => {
    const buf = (0,_smithy_util_buffer_from__WEBPACK_IMPORTED_MODULE_0__.fromString)(input, "utf8");
    return new Uint8Array(buf.buffer, buf.byteOffset, buf.byteLength / Uint8Array.BYTES_PER_ELEMENT);
};


/***/ }),
/* 1447 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   toUint8Array: () => (/* binding */ toUint8Array)
/* harmony export */ });
/* harmony import */ var _fromUtf8__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1446);

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
/* 1448 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   toUtf8: () => (/* binding */ toUtf8)
/* harmony export */ });
/* harmony import */ var _smithy_util_buffer_from__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1395);

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
/* 1449 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   defaultEndpointResolver: () => (/* binding */ defaultEndpointResolver)
/* harmony export */ });
/* harmony import */ var _aws_sdk_util_endpoints__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1198);
/* harmony import */ var _smithy_util_endpoints__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1200);
/* harmony import */ var _ruleset__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1450);



const defaultEndpointResolver = (endpointParams, context = {}) => {
    return (0,_smithy_util_endpoints__WEBPACK_IMPORTED_MODULE_1__.resolveEndpoint)(_ruleset__WEBPACK_IMPORTED_MODULE_2__.ruleSet, {
        endpointParams: endpointParams,
        logger: context.logger,
    });
};
_smithy_util_endpoints__WEBPACK_IMPORTED_MODULE_1__.customEndpointFunctions.aws = _aws_sdk_util_endpoints__WEBPACK_IMPORTED_MODULE_0__.awsEndpointFunctions;


/***/ }),
/* 1450 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ruleSet: () => (/* binding */ ruleSet)
/* harmony export */ });
const F = "required", G = "type", H = "fn", I = "argv", J = "ref";
const a = false, b = true, c = "booleanEquals", d = "stringEquals", e = "sigv4", f = "sts", g = "us-east-1", h = "endpoint", i = "https://sts.{Region}.{PartitionResult#dnsSuffix}", j = "tree", k = "error", l = "getAttr", m = { [F]: false, [G]: "String" }, n = { [F]: true, "default": false, [G]: "Boolean" }, o = { [J]: "Endpoint" }, p = { [H]: "isSet", [I]: [{ [J]: "Region" }] }, q = { [J]: "Region" }, r = { [H]: "aws.partition", [I]: [q], "assign": "PartitionResult" }, s = { [J]: "UseFIPS" }, t = { [J]: "UseDualStack" }, u = { "url": "https://sts.amazonaws.com", "properties": { "authSchemes": [{ "name": e, "signingName": f, "signingRegion": g }] }, "headers": {} }, v = {}, w = { "conditions": [{ [H]: d, [I]: [q, "aws-global"] }], [h]: u, [G]: h }, x = { [H]: c, [I]: [s, true] }, y = { [H]: c, [I]: [t, true] }, z = { [H]: l, [I]: [{ [J]: "PartitionResult" }, "supportsFIPS"] }, A = { [J]: "PartitionResult" }, B = { [H]: c, [I]: [true, { [H]: l, [I]: [A, "supportsDualStack"] }] }, C = [{ [H]: "isSet", [I]: [o] }], D = [x], E = [y];
const _data = { version: "1.0", parameters: { Region: m, UseDualStack: n, UseFIPS: n, Endpoint: m, UseGlobalEndpoint: n }, rules: [{ conditions: [{ [H]: c, [I]: [{ [J]: "UseGlobalEndpoint" }, b] }, { [H]: "not", [I]: C }, p, r, { [H]: c, [I]: [s, a] }, { [H]: c, [I]: [t, a] }], rules: [{ conditions: [{ [H]: d, [I]: [q, "ap-northeast-1"] }], endpoint: u, [G]: h }, { conditions: [{ [H]: d, [I]: [q, "ap-south-1"] }], endpoint: u, [G]: h }, { conditions: [{ [H]: d, [I]: [q, "ap-southeast-1"] }], endpoint: u, [G]: h }, { conditions: [{ [H]: d, [I]: [q, "ap-southeast-2"] }], endpoint: u, [G]: h }, w, { conditions: [{ [H]: d, [I]: [q, "ca-central-1"] }], endpoint: u, [G]: h }, { conditions: [{ [H]: d, [I]: [q, "eu-central-1"] }], endpoint: u, [G]: h }, { conditions: [{ [H]: d, [I]: [q, "eu-north-1"] }], endpoint: u, [G]: h }, { conditions: [{ [H]: d, [I]: [q, "eu-west-1"] }], endpoint: u, [G]: h }, { conditions: [{ [H]: d, [I]: [q, "eu-west-2"] }], endpoint: u, [G]: h }, { conditions: [{ [H]: d, [I]: [q, "eu-west-3"] }], endpoint: u, [G]: h }, { conditions: [{ [H]: d, [I]: [q, "sa-east-1"] }], endpoint: u, [G]: h }, { conditions: [{ [H]: d, [I]: [q, g] }], endpoint: u, [G]: h }, { conditions: [{ [H]: d, [I]: [q, "us-east-2"] }], endpoint: u, [G]: h }, { conditions: [{ [H]: d, [I]: [q, "us-west-1"] }], endpoint: u, [G]: h }, { conditions: [{ [H]: d, [I]: [q, "us-west-2"] }], endpoint: u, [G]: h }, { endpoint: { url: i, properties: { authSchemes: [{ name: e, signingName: f, signingRegion: "{Region}" }] }, headers: v }, [G]: h }], [G]: j }, { conditions: C, rules: [{ conditions: D, error: "Invalid Configuration: FIPS and custom endpoint are not supported", [G]: k }, { conditions: E, error: "Invalid Configuration: Dualstack and custom endpoint are not supported", [G]: k }, { endpoint: { url: o, properties: v, headers: v }, [G]: h }], [G]: j }, { conditions: [p], rules: [{ conditions: [r], rules: [{ conditions: [x, y], rules: [{ conditions: [{ [H]: c, [I]: [b, z] }, B], rules: [{ endpoint: { url: "https://sts-fips.{Region}.{PartitionResult#dualStackDnsSuffix}", properties: v, headers: v }, [G]: h }], [G]: j }, { error: "FIPS and DualStack are enabled, but this partition does not support one or both", [G]: k }], [G]: j }, { conditions: D, rules: [{ conditions: [{ [H]: c, [I]: [z, b] }], rules: [{ conditions: [{ [H]: d, [I]: [{ [H]: l, [I]: [A, "name"] }, "aws-us-gov"] }], endpoint: { url: "https://sts.{Region}.amazonaws.com", properties: v, headers: v }, [G]: h }, { endpoint: { url: "https://sts-fips.{Region}.{PartitionResult#dnsSuffix}", properties: v, headers: v }, [G]: h }], [G]: j }, { error: "FIPS is enabled but this partition does not support FIPS", [G]: k }], [G]: j }, { conditions: E, rules: [{ conditions: [B], rules: [{ endpoint: { url: "https://sts.{Region}.{PartitionResult#dualStackDnsSuffix}", properties: v, headers: v }, [G]: h }], [G]: j }, { error: "DualStack is enabled but this partition does not support DualStack", [G]: k }], [G]: j }, w, { endpoint: { url: i, properties: v, headers: v }, [G]: h }], [G]: j }], [G]: j }, { error: "Invalid Configuration: Missing Region", [G]: k }] };
const ruleSet = _data;


/***/ }),
/* 1451 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AWSSDKSigV4Signer: () => (/* binding */ AWSSDKSigV4Signer),
/* harmony export */   AwsSdkSigV4Signer: () => (/* binding */ AwsSdkSigV4Signer)
/* harmony export */ });
/* harmony import */ var _smithy_protocol_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1124);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1452);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1453);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1454);


const throwSigningPropertyError = (name, property) => {
    if (!property) {
        throw new Error(`Property \`${name}\` is not resolved for AWS SDK SigV4Auth`);
    }
    return property;
};
const validateSigningProperties = async (signingProperties) => {
    const context = throwSigningPropertyError("context", signingProperties.context);
    const config = throwSigningPropertyError("config", signingProperties.config);
    const authScheme = context.endpointV2?.properties?.authSchemes?.[0];
    const signerFunction = throwSigningPropertyError("signer", config.signer);
    const signer = await signerFunction(authScheme);
    const signingRegion = signingProperties?.signingRegion;
    const signingName = signingProperties?.signingName;
    return {
        config,
        signer,
        signingRegion,
        signingName,
    };
};
class AwsSdkSigV4Signer {
    async sign(httpRequest, identity, signingProperties) {
        if (!_smithy_protocol_http__WEBPACK_IMPORTED_MODULE_0__.HttpRequest.isInstance(httpRequest)) {
            throw new Error("The request is not an instance of `HttpRequest` and cannot be signed");
        }
        const { config, signer, signingRegion, signingName } = await validateSigningProperties(signingProperties);
        const signedRequest = await signer.sign(httpRequest, {
            signingDate: (0,_utils__WEBPACK_IMPORTED_MODULE_1__.getSkewCorrectedDate)(config.systemClockOffset),
            signingRegion: signingRegion,
            signingService: signingName,
        });
        return signedRequest;
    }
    errorHandler(signingProperties) {
        return (error) => {
            const serverTime = error.ServerTime ?? (0,_utils__WEBPACK_IMPORTED_MODULE_2__.getDateHeader)(error.$response);
            if (serverTime) {
                const config = throwSigningPropertyError("config", signingProperties.config);
                const initialSystemClockOffset = config.systemClockOffset;
                config.systemClockOffset = (0,_utils__WEBPACK_IMPORTED_MODULE_3__.getUpdatedSystemClockOffset)(serverTime, config.systemClockOffset);
                const clockSkewCorrected = config.systemClockOffset !== initialSystemClockOffset;
                if (clockSkewCorrected && error.$metadata) {
                    error.$metadata.clockSkewCorrected = true;
                }
            }
            throw error;
        };
    }
    successHandler(httpResponse, signingProperties) {
        const dateHeader = (0,_utils__WEBPACK_IMPORTED_MODULE_2__.getDateHeader)(httpResponse);
        if (dateHeader) {
            const config = throwSigningPropertyError("config", signingProperties.config);
            config.systemClockOffset = (0,_utils__WEBPACK_IMPORTED_MODULE_3__.getUpdatedSystemClockOffset)(dateHeader, config.systemClockOffset);
        }
    }
}
const AWSSDKSigV4Signer = AwsSdkSigV4Signer;


/***/ }),
/* 1452 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getSkewCorrectedDate: () => (/* binding */ getSkewCorrectedDate)
/* harmony export */ });
const getSkewCorrectedDate = (systemClockOffset) => new Date(Date.now() + systemClockOffset);


/***/ }),
/* 1453 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getDateHeader: () => (/* binding */ getDateHeader)
/* harmony export */ });
/* harmony import */ var _smithy_protocol_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1124);

const getDateHeader = (response) => _smithy_protocol_http__WEBPACK_IMPORTED_MODULE_0__.HttpResponse.isInstance(response) ? response.headers?.date ?? response.headers?.Date : undefined;


/***/ }),
/* 1454 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getUpdatedSystemClockOffset: () => (/* binding */ getUpdatedSystemClockOffset)
/* harmony export */ });
/* harmony import */ var _isClockSkewed__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1455);

const getUpdatedSystemClockOffset = (clockTime, currentSystemClockOffset) => {
    const clockTimeInMs = Date.parse(clockTime);
    if ((0,_isClockSkewed__WEBPACK_IMPORTED_MODULE_0__.isClockSkewed)(clockTimeInMs, currentSystemClockOffset)) {
        return clockTimeInMs - Date.now();
    }
    return currentSystemClockOffset;
};


/***/ }),
/* 1455 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isClockSkewed: () => (/* binding */ isClockSkewed)
/* harmony export */ });
/* harmony import */ var _getSkewCorrectedDate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1452);

const isClockSkewed = (clockTime, systemClockOffset) => Math.abs((0,_getSkewCorrectedDate__WEBPACK_IMPORTED_MODULE_0__.getSkewCorrectedDate)(systemClockOffset).getTime() - clockTime) >= 300000;


/***/ }),
/* 1456 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   resolveDefaultsModeConfig: () => (/* reexport safe */ _resolveDefaultsModeConfig__WEBPACK_IMPORTED_MODULE_0__.resolveDefaultsModeConfig)
/* harmony export */ });
/* harmony import */ var _resolveDefaultsModeConfig__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1457);



/***/ }),
/* 1457 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   resolveDefaultsModeConfig: () => (/* binding */ resolveDefaultsModeConfig)
/* harmony export */ });
/* harmony import */ var _smithy_config_resolver__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1256);
/* harmony import */ var _smithy_node_config_provider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1294);
/* harmony import */ var _smithy_property_provider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(195);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1458);
/* harmony import */ var _defaultsModeConfig__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1459);





const resolveDefaultsModeConfig = ({ region = (0,_smithy_node_config_provider__WEBPACK_IMPORTED_MODULE_1__.loadConfig)(_smithy_config_resolver__WEBPACK_IMPORTED_MODULE_0__.NODE_REGION_CONFIG_OPTIONS), defaultsMode = (0,_smithy_node_config_provider__WEBPACK_IMPORTED_MODULE_1__.loadConfig)(_defaultsModeConfig__WEBPACK_IMPORTED_MODULE_4__.NODE_DEFAULTS_MODE_CONFIG_OPTIONS), } = {}) => (0,_smithy_property_provider__WEBPACK_IMPORTED_MODULE_2__.memoize)(async () => {
    const mode = typeof defaultsMode === "function" ? await defaultsMode() : defaultsMode;
    switch (mode?.toLowerCase()) {
        case "auto":
            return resolveNodeDefaultsModeAuto(region);
        case "in-region":
        case "cross-region":
        case "mobile":
        case "standard":
        case "legacy":
            return Promise.resolve(mode?.toLocaleLowerCase());
        case undefined:
            return Promise.resolve("legacy");
        default:
            throw new Error(`Invalid parameter for "defaultsMode", expect ${_constants__WEBPACK_IMPORTED_MODULE_3__.DEFAULTS_MODE_OPTIONS.join(", ")}, got ${mode}`);
    }
});
const resolveNodeDefaultsModeAuto = async (clientRegion) => {
    if (clientRegion) {
        const resolvedRegion = typeof clientRegion === "function" ? await clientRegion() : clientRegion;
        const inferredRegion = await inferPhysicalRegion();
        if (!inferredRegion) {
            return "standard";
        }
        if (resolvedRegion === inferredRegion) {
            return "in-region";
        }
        else {
            return "cross-region";
        }
    }
    return "standard";
};
const inferPhysicalRegion = async () => {
    if (process.env[_constants__WEBPACK_IMPORTED_MODULE_3__.AWS_EXECUTION_ENV] && (process.env[_constants__WEBPACK_IMPORTED_MODULE_3__.AWS_REGION_ENV] || process.env[_constants__WEBPACK_IMPORTED_MODULE_3__.AWS_DEFAULT_REGION_ENV])) {
        return process.env[_constants__WEBPACK_IMPORTED_MODULE_3__.AWS_REGION_ENV] ?? process.env[_constants__WEBPACK_IMPORTED_MODULE_3__.AWS_DEFAULT_REGION_ENV];
    }
    if (!process.env[_constants__WEBPACK_IMPORTED_MODULE_3__.ENV_IMDS_DISABLED]) {
        try {
            const { getInstanceMetadataEndpoint, httpRequest } = await __webpack_require__.e(/* import() */ 5).then(__webpack_require__.bind(__webpack_require__, 597));
            const endpoint = await getInstanceMetadataEndpoint();
            return (await httpRequest({ ...endpoint, path: _constants__WEBPACK_IMPORTED_MODULE_3__.IMDS_REGION_PATH })).toString();
        }
        catch (e) {
        }
    }
};


/***/ }),
/* 1458 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AWS_DEFAULT_REGION_ENV: () => (/* binding */ AWS_DEFAULT_REGION_ENV),
/* harmony export */   AWS_EXECUTION_ENV: () => (/* binding */ AWS_EXECUTION_ENV),
/* harmony export */   AWS_REGION_ENV: () => (/* binding */ AWS_REGION_ENV),
/* harmony export */   DEFAULTS_MODE_OPTIONS: () => (/* binding */ DEFAULTS_MODE_OPTIONS),
/* harmony export */   ENV_IMDS_DISABLED: () => (/* binding */ ENV_IMDS_DISABLED),
/* harmony export */   IMDS_REGION_PATH: () => (/* binding */ IMDS_REGION_PATH)
/* harmony export */ });
const AWS_EXECUTION_ENV = "AWS_EXECUTION_ENV";
const AWS_REGION_ENV = "AWS_REGION";
const AWS_DEFAULT_REGION_ENV = "AWS_DEFAULT_REGION";
const ENV_IMDS_DISABLED = "AWS_EC2_METADATA_DISABLED";
const DEFAULTS_MODE_OPTIONS = ["in-region", "cross-region", "mobile", "standard", "legacy"];
const IMDS_REGION_PATH = "/latest/meta-data/placement/region";


/***/ }),
/* 1459 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NODE_DEFAULTS_MODE_CONFIG_OPTIONS: () => (/* binding */ NODE_DEFAULTS_MODE_CONFIG_OPTIONS)
/* harmony export */ });
const AWS_DEFAULTS_MODE_ENV = "AWS_DEFAULTS_MODE";
const AWS_DEFAULTS_MODE_CONFIG = "defaults_mode";
const NODE_DEFAULTS_MODE_CONFIG_OPTIONS = {
    environmentVariableSelector: (env) => {
        return env[AWS_DEFAULTS_MODE_ENV];
    },
    configFileSelector: (profile) => {
        return profile[AWS_DEFAULTS_MODE_CONFIG];
    },
    default: "legacy",
};


/***/ }),
/* 1460 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   emitWarningIfUnsupportedVersion: () => (/* binding */ emitWarningIfUnsupportedVersion)
/* harmony export */ });
let warningEmitted = false;
const emitWarningIfUnsupportedVersion = (version) => {
    if (version && !warningEmitted && parseInt(version.substring(1, version.indexOf("."))) < 16) {
        warningEmitted = true;
    }
};


/***/ }),
/* 1461 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   resolveRuntimeExtensions: () => (/* binding */ resolveRuntimeExtensions)
/* harmony export */ });
/* harmony import */ var _aws_sdk_region_config_resolver__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1462);
/* harmony import */ var _smithy_protocol_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1124);
/* harmony import */ var _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1344);
/* harmony import */ var _auth_httpAuthExtensionConfiguration__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1469);




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
/* 1462 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NODE_REGION_CONFIG_FILE_OPTIONS: () => (/* reexport safe */ _regionConfig__WEBPACK_IMPORTED_MODULE_1__.NODE_REGION_CONFIG_FILE_OPTIONS),
/* harmony export */   NODE_REGION_CONFIG_OPTIONS: () => (/* reexport safe */ _regionConfig__WEBPACK_IMPORTED_MODULE_1__.NODE_REGION_CONFIG_OPTIONS),
/* harmony export */   REGION_ENV_NAME: () => (/* reexport safe */ _regionConfig__WEBPACK_IMPORTED_MODULE_1__.REGION_ENV_NAME),
/* harmony export */   REGION_INI_NAME: () => (/* reexport safe */ _regionConfig__WEBPACK_IMPORTED_MODULE_1__.REGION_INI_NAME),
/* harmony export */   getAwsRegionExtensionConfiguration: () => (/* reexport safe */ _extensions__WEBPACK_IMPORTED_MODULE_0__.getAwsRegionExtensionConfiguration),
/* harmony export */   resolveAwsRegionExtensionConfiguration: () => (/* reexport safe */ _extensions__WEBPACK_IMPORTED_MODULE_0__.resolveAwsRegionExtensionConfiguration),
/* harmony export */   resolveRegionConfig: () => (/* reexport safe */ _regionConfig__WEBPACK_IMPORTED_MODULE_1__.resolveRegionConfig)
/* harmony export */ });
/* harmony import */ var _extensions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1463);
/* harmony import */ var _regionConfig__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1464);




/***/ }),
/* 1463 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getAwsRegionExtensionConfiguration: () => (/* binding */ getAwsRegionExtensionConfiguration),
/* harmony export */   resolveAwsRegionExtensionConfiguration: () => (/* binding */ resolveAwsRegionExtensionConfiguration)
/* harmony export */ });
const getAwsRegionExtensionConfiguration = (runtimeConfig) => {
    let runtimeConfigRegion = async () => {
        if (runtimeConfig.region === undefined) {
            throw new Error("Region is missing from runtimeConfig");
        }
        const region = runtimeConfig.region;
        if (typeof region === "string") {
            return region;
        }
        return region();
    };
    return {
        setRegion(region) {
            runtimeConfigRegion = region;
        },
        region() {
            return runtimeConfigRegion;
        },
    };
};
const resolveAwsRegionExtensionConfiguration = (awsRegionExtensionConfiguration) => {
    return {
        region: awsRegionExtensionConfiguration.region(),
    };
};


/***/ }),
/* 1464 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NODE_REGION_CONFIG_FILE_OPTIONS: () => (/* reexport safe */ _config__WEBPACK_IMPORTED_MODULE_0__.NODE_REGION_CONFIG_FILE_OPTIONS),
/* harmony export */   NODE_REGION_CONFIG_OPTIONS: () => (/* reexport safe */ _config__WEBPACK_IMPORTED_MODULE_0__.NODE_REGION_CONFIG_OPTIONS),
/* harmony export */   REGION_ENV_NAME: () => (/* reexport safe */ _config__WEBPACK_IMPORTED_MODULE_0__.REGION_ENV_NAME),
/* harmony export */   REGION_INI_NAME: () => (/* reexport safe */ _config__WEBPACK_IMPORTED_MODULE_0__.REGION_INI_NAME),
/* harmony export */   resolveRegionConfig: () => (/* reexport safe */ _resolveRegionConfig__WEBPACK_IMPORTED_MODULE_1__.resolveRegionConfig)
/* harmony export */ });
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1465);
/* harmony import */ var _resolveRegionConfig__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1466);




/***/ }),
/* 1465 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NODE_REGION_CONFIG_FILE_OPTIONS: () => (/* binding */ NODE_REGION_CONFIG_FILE_OPTIONS),
/* harmony export */   NODE_REGION_CONFIG_OPTIONS: () => (/* binding */ NODE_REGION_CONFIG_OPTIONS),
/* harmony export */   REGION_ENV_NAME: () => (/* binding */ REGION_ENV_NAME),
/* harmony export */   REGION_INI_NAME: () => (/* binding */ REGION_INI_NAME)
/* harmony export */ });
const REGION_ENV_NAME = "AWS_REGION";
const REGION_INI_NAME = "region";
const NODE_REGION_CONFIG_OPTIONS = {
    environmentVariableSelector: (env) => env[REGION_ENV_NAME],
    configFileSelector: (profile) => profile[REGION_INI_NAME],
    default: () => {
        throw new Error("Region is missing");
    },
};
const NODE_REGION_CONFIG_FILE_OPTIONS = {
    preferredFile: "credentials",
};


/***/ }),
/* 1466 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   resolveRegionConfig: () => (/* binding */ resolveRegionConfig)
/* harmony export */ });
/* harmony import */ var _getRealRegion__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1467);
/* harmony import */ var _isFipsRegion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1468);


const resolveRegionConfig = (input) => {
    const { region, useFipsEndpoint } = input;
    if (!region) {
        throw new Error("Region is missing");
    }
    return {
        ...input,
        region: async () => {
            if (typeof region === "string") {
                return (0,_getRealRegion__WEBPACK_IMPORTED_MODULE_0__.getRealRegion)(region);
            }
            const providedRegion = await region();
            return (0,_getRealRegion__WEBPACK_IMPORTED_MODULE_0__.getRealRegion)(providedRegion);
        },
        useFipsEndpoint: async () => {
            const providedRegion = typeof region === "string" ? region : await region();
            if ((0,_isFipsRegion__WEBPACK_IMPORTED_MODULE_1__.isFipsRegion)(providedRegion)) {
                return true;
            }
            return typeof useFipsEndpoint !== "function" ? Promise.resolve(!!useFipsEndpoint) : useFipsEndpoint();
        },
    };
};


/***/ }),
/* 1467 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getRealRegion: () => (/* binding */ getRealRegion)
/* harmony export */ });
/* harmony import */ var _isFipsRegion__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1468);

const getRealRegion = (region) => (0,_isFipsRegion__WEBPACK_IMPORTED_MODULE_0__.isFipsRegion)(region)
    ? ["fips-aws-global", "aws-fips"].includes(region)
        ? "us-east-1"
        : region.replace(/fips-(dkr-|prod-)?|-fips/, "")
    : region;


/***/ }),
/* 1468 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isFipsRegion: () => (/* binding */ isFipsRegion)
/* harmony export */ });
const isFipsRegion = (region) => typeof region === "string" && (region.startsWith("fips-") || region.endsWith("-fips"));


/***/ }),
/* 1469 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
/* 1470 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   STS: () => (/* binding */ STS)
/* harmony export */ });
/* harmony import */ var _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1344);
/* harmony import */ var _commands_AssumeRoleCommand__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1471);
/* harmony import */ var _commands_AssumeRoleWithSAMLCommand__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1488);
/* harmony import */ var _commands_AssumeRoleWithWebIdentityCommand__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1489);
/* harmony import */ var _commands_DecodeAuthorizationMessageCommand__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1490);
/* harmony import */ var _commands_GetAccessKeyInfoCommand__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1491);
/* harmony import */ var _commands_GetCallerIdentityCommand__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1492);
/* harmony import */ var _commands_GetFederationTokenCommand__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1493);
/* harmony import */ var _commands_GetSessionTokenCommand__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1494);
/* harmony import */ var _STSClient__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1122);










const commands = {
    AssumeRoleCommand: _commands_AssumeRoleCommand__WEBPACK_IMPORTED_MODULE_1__.AssumeRoleCommand,
    AssumeRoleWithSAMLCommand: _commands_AssumeRoleWithSAMLCommand__WEBPACK_IMPORTED_MODULE_2__.AssumeRoleWithSAMLCommand,
    AssumeRoleWithWebIdentityCommand: _commands_AssumeRoleWithWebIdentityCommand__WEBPACK_IMPORTED_MODULE_3__.AssumeRoleWithWebIdentityCommand,
    DecodeAuthorizationMessageCommand: _commands_DecodeAuthorizationMessageCommand__WEBPACK_IMPORTED_MODULE_4__.DecodeAuthorizationMessageCommand,
    GetAccessKeyInfoCommand: _commands_GetAccessKeyInfoCommand__WEBPACK_IMPORTED_MODULE_5__.GetAccessKeyInfoCommand,
    GetCallerIdentityCommand: _commands_GetCallerIdentityCommand__WEBPACK_IMPORTED_MODULE_6__.GetCallerIdentityCommand,
    GetFederationTokenCommand: _commands_GetFederationTokenCommand__WEBPACK_IMPORTED_MODULE_7__.GetFederationTokenCommand,
    GetSessionTokenCommand: _commands_GetSessionTokenCommand__WEBPACK_IMPORTED_MODULE_8__.GetSessionTokenCommand,
};
class STS extends _STSClient__WEBPACK_IMPORTED_MODULE_9__.STSClient {
}
(0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_0__.createAggregatedClient)(commands, STS);


/***/ }),
/* 1471 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $Command: () => (/* reexport safe */ _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_2__.Command),
/* harmony export */   AssumeRoleCommand: () => (/* binding */ AssumeRoleCommand)
/* harmony export */ });
/* harmony import */ var _smithy_middleware_endpoint__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1287);
/* harmony import */ var _smithy_middleware_serde__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1306);
/* harmony import */ var _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1344);
/* harmony import */ var _endpoint_EndpointParameters__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1410);
/* harmony import */ var _models_models_0__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1472);
/* harmony import */ var _protocols_Aws_query__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1474);







class AssumeRoleCommand extends _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_2__.Command
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
    .s("AWSSecurityTokenServiceV20110615", "AssumeRole", {})
    .n("STSClient", "AssumeRoleCommand")
    .f(void 0, _models_models_0__WEBPACK_IMPORTED_MODULE_4__.AssumeRoleResponseFilterSensitiveLog)
    .ser(_protocols_Aws_query__WEBPACK_IMPORTED_MODULE_5__.se_AssumeRoleCommand)
    .de(_protocols_Aws_query__WEBPACK_IMPORTED_MODULE_5__.de_AssumeRoleCommand)
    .build() {
}


/***/ }),
/* 1472 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AssumeRoleResponseFilterSensitiveLog: () => (/* binding */ AssumeRoleResponseFilterSensitiveLog),
/* harmony export */   AssumeRoleWithSAMLRequestFilterSensitiveLog: () => (/* binding */ AssumeRoleWithSAMLRequestFilterSensitiveLog),
/* harmony export */   AssumeRoleWithSAMLResponseFilterSensitiveLog: () => (/* binding */ AssumeRoleWithSAMLResponseFilterSensitiveLog),
/* harmony export */   AssumeRoleWithWebIdentityRequestFilterSensitiveLog: () => (/* binding */ AssumeRoleWithWebIdentityRequestFilterSensitiveLog),
/* harmony export */   AssumeRoleWithWebIdentityResponseFilterSensitiveLog: () => (/* binding */ AssumeRoleWithWebIdentityResponseFilterSensitiveLog),
/* harmony export */   CredentialsFilterSensitiveLog: () => (/* binding */ CredentialsFilterSensitiveLog),
/* harmony export */   ExpiredTokenException: () => (/* binding */ ExpiredTokenException),
/* harmony export */   GetFederationTokenResponseFilterSensitiveLog: () => (/* binding */ GetFederationTokenResponseFilterSensitiveLog),
/* harmony export */   GetSessionTokenResponseFilterSensitiveLog: () => (/* binding */ GetSessionTokenResponseFilterSensitiveLog),
/* harmony export */   IDPCommunicationErrorException: () => (/* binding */ IDPCommunicationErrorException),
/* harmony export */   IDPRejectedClaimException: () => (/* binding */ IDPRejectedClaimException),
/* harmony export */   InvalidAuthorizationMessageException: () => (/* binding */ InvalidAuthorizationMessageException),
/* harmony export */   InvalidIdentityTokenException: () => (/* binding */ InvalidIdentityTokenException),
/* harmony export */   MalformedPolicyDocumentException: () => (/* binding */ MalformedPolicyDocumentException),
/* harmony export */   PackedPolicyTooLargeException: () => (/* binding */ PackedPolicyTooLargeException),
/* harmony export */   RegionDisabledException: () => (/* binding */ RegionDisabledException)
/* harmony export */ });
/* harmony import */ var _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1344);
/* harmony import */ var _STSServiceException__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1473);


class ExpiredTokenException extends _STSServiceException__WEBPACK_IMPORTED_MODULE_1__.STSServiceException {
    constructor(opts) {
        super({
            name: "ExpiredTokenException",
            $fault: "client",
            ...opts,
        });
        this.name = "ExpiredTokenException";
        this.$fault = "client";
        Object.setPrototypeOf(this, ExpiredTokenException.prototype);
    }
}
class MalformedPolicyDocumentException extends _STSServiceException__WEBPACK_IMPORTED_MODULE_1__.STSServiceException {
    constructor(opts) {
        super({
            name: "MalformedPolicyDocumentException",
            $fault: "client",
            ...opts,
        });
        this.name = "MalformedPolicyDocumentException";
        this.$fault = "client";
        Object.setPrototypeOf(this, MalformedPolicyDocumentException.prototype);
    }
}
class PackedPolicyTooLargeException extends _STSServiceException__WEBPACK_IMPORTED_MODULE_1__.STSServiceException {
    constructor(opts) {
        super({
            name: "PackedPolicyTooLargeException",
            $fault: "client",
            ...opts,
        });
        this.name = "PackedPolicyTooLargeException";
        this.$fault = "client";
        Object.setPrototypeOf(this, PackedPolicyTooLargeException.prototype);
    }
}
class RegionDisabledException extends _STSServiceException__WEBPACK_IMPORTED_MODULE_1__.STSServiceException {
    constructor(opts) {
        super({
            name: "RegionDisabledException",
            $fault: "client",
            ...opts,
        });
        this.name = "RegionDisabledException";
        this.$fault = "client";
        Object.setPrototypeOf(this, RegionDisabledException.prototype);
    }
}
class IDPRejectedClaimException extends _STSServiceException__WEBPACK_IMPORTED_MODULE_1__.STSServiceException {
    constructor(opts) {
        super({
            name: "IDPRejectedClaimException",
            $fault: "client",
            ...opts,
        });
        this.name = "IDPRejectedClaimException";
        this.$fault = "client";
        Object.setPrototypeOf(this, IDPRejectedClaimException.prototype);
    }
}
class InvalidIdentityTokenException extends _STSServiceException__WEBPACK_IMPORTED_MODULE_1__.STSServiceException {
    constructor(opts) {
        super({
            name: "InvalidIdentityTokenException",
            $fault: "client",
            ...opts,
        });
        this.name = "InvalidIdentityTokenException";
        this.$fault = "client";
        Object.setPrototypeOf(this, InvalidIdentityTokenException.prototype);
    }
}
class IDPCommunicationErrorException extends _STSServiceException__WEBPACK_IMPORTED_MODULE_1__.STSServiceException {
    constructor(opts) {
        super({
            name: "IDPCommunicationErrorException",
            $fault: "client",
            ...opts,
        });
        this.name = "IDPCommunicationErrorException";
        this.$fault = "client";
        Object.setPrototypeOf(this, IDPCommunicationErrorException.prototype);
    }
}
class InvalidAuthorizationMessageException extends _STSServiceException__WEBPACK_IMPORTED_MODULE_1__.STSServiceException {
    constructor(opts) {
        super({
            name: "InvalidAuthorizationMessageException",
            $fault: "client",
            ...opts,
        });
        this.name = "InvalidAuthorizationMessageException";
        this.$fault = "client";
        Object.setPrototypeOf(this, InvalidAuthorizationMessageException.prototype);
    }
}
const CredentialsFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.SecretAccessKey && { SecretAccessKey: _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_0__.SENSITIVE_STRING }),
});
const AssumeRoleResponseFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.Credentials && { Credentials: CredentialsFilterSensitiveLog(obj.Credentials) }),
});
const AssumeRoleWithSAMLRequestFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.SAMLAssertion && { SAMLAssertion: _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_0__.SENSITIVE_STRING }),
});
const AssumeRoleWithSAMLResponseFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.Credentials && { Credentials: CredentialsFilterSensitiveLog(obj.Credentials) }),
});
const AssumeRoleWithWebIdentityRequestFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.WebIdentityToken && { WebIdentityToken: _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_0__.SENSITIVE_STRING }),
});
const AssumeRoleWithWebIdentityResponseFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.Credentials && { Credentials: CredentialsFilterSensitiveLog(obj.Credentials) }),
});
const GetFederationTokenResponseFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.Credentials && { Credentials: CredentialsFilterSensitiveLog(obj.Credentials) }),
});
const GetSessionTokenResponseFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.Credentials && { Credentials: CredentialsFilterSensitiveLog(obj.Credentials) }),
});


/***/ }),
/* 1473 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   STSServiceException: () => (/* binding */ STSServiceException),
/* harmony export */   __ServiceException: () => (/* reexport safe */ _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_0__.ServiceException)
/* harmony export */ });
/* harmony import */ var _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1344);


class STSServiceException extends _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_0__.ServiceException {
    constructor(options) {
        super(options);
        Object.setPrototypeOf(this, STSServiceException.prototype);
    }
}


/***/ }),
/* 1474 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   de_AssumeRoleCommand: () => (/* binding */ de_AssumeRoleCommand),
/* harmony export */   de_AssumeRoleWithSAMLCommand: () => (/* binding */ de_AssumeRoleWithSAMLCommand),
/* harmony export */   de_AssumeRoleWithWebIdentityCommand: () => (/* binding */ de_AssumeRoleWithWebIdentityCommand),
/* harmony export */   de_DecodeAuthorizationMessageCommand: () => (/* binding */ de_DecodeAuthorizationMessageCommand),
/* harmony export */   de_GetAccessKeyInfoCommand: () => (/* binding */ de_GetAccessKeyInfoCommand),
/* harmony export */   de_GetCallerIdentityCommand: () => (/* binding */ de_GetCallerIdentityCommand),
/* harmony export */   de_GetFederationTokenCommand: () => (/* binding */ de_GetFederationTokenCommand),
/* harmony export */   de_GetSessionTokenCommand: () => (/* binding */ de_GetSessionTokenCommand),
/* harmony export */   se_AssumeRoleCommand: () => (/* binding */ se_AssumeRoleCommand),
/* harmony export */   se_AssumeRoleWithSAMLCommand: () => (/* binding */ se_AssumeRoleWithSAMLCommand),
/* harmony export */   se_AssumeRoleWithWebIdentityCommand: () => (/* binding */ se_AssumeRoleWithWebIdentityCommand),
/* harmony export */   se_DecodeAuthorizationMessageCommand: () => (/* binding */ se_DecodeAuthorizationMessageCommand),
/* harmony export */   se_GetAccessKeyInfoCommand: () => (/* binding */ se_GetAccessKeyInfoCommand),
/* harmony export */   se_GetCallerIdentityCommand: () => (/* binding */ se_GetCallerIdentityCommand),
/* harmony export */   se_GetFederationTokenCommand: () => (/* binding */ se_GetFederationTokenCommand),
/* harmony export */   se_GetSessionTokenCommand: () => (/* binding */ se_GetSessionTokenCommand)
/* harmony export */ });
/* harmony import */ var _aws_sdk_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1475);
/* harmony import */ var _smithy_protocol_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1124);
/* harmony import */ var _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1344);
/* harmony import */ var _models_models_0__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1472);
/* harmony import */ var _models_STSServiceException__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1473);





const se_AssumeRoleCommand = async (input, context) => {
    const headers = SHARED_HEADERS;
    let body;
    body = buildFormUrlencodedString({
        ...se_AssumeRoleRequest(input, context),
        [_A]: _AR,
        [_V]: _,
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
const se_AssumeRoleWithSAMLCommand = async (input, context) => {
    const headers = SHARED_HEADERS;
    let body;
    body = buildFormUrlencodedString({
        ...se_AssumeRoleWithSAMLRequest(input, context),
        [_A]: _ARWSAML,
        [_V]: _,
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
const se_AssumeRoleWithWebIdentityCommand = async (input, context) => {
    const headers = SHARED_HEADERS;
    let body;
    body = buildFormUrlencodedString({
        ...se_AssumeRoleWithWebIdentityRequest(input, context),
        [_A]: _ARWWI,
        [_V]: _,
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
const se_DecodeAuthorizationMessageCommand = async (input, context) => {
    const headers = SHARED_HEADERS;
    let body;
    body = buildFormUrlencodedString({
        ...se_DecodeAuthorizationMessageRequest(input, context),
        [_A]: _DAM,
        [_V]: _,
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
const se_GetAccessKeyInfoCommand = async (input, context) => {
    const headers = SHARED_HEADERS;
    let body;
    body = buildFormUrlencodedString({
        ...se_GetAccessKeyInfoRequest(input, context),
        [_A]: _GAKI,
        [_V]: _,
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
const se_GetCallerIdentityCommand = async (input, context) => {
    const headers = SHARED_HEADERS;
    let body;
    body = buildFormUrlencodedString({
        ...se_GetCallerIdentityRequest(input, context),
        [_A]: _GCI,
        [_V]: _,
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
const se_GetFederationTokenCommand = async (input, context) => {
    const headers = SHARED_HEADERS;
    let body;
    body = buildFormUrlencodedString({
        ...se_GetFederationTokenRequest(input, context),
        [_A]: _GFT,
        [_V]: _,
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
const se_GetSessionTokenCommand = async (input, context) => {
    const headers = SHARED_HEADERS;
    let body;
    body = buildFormUrlencodedString({
        ...se_GetSessionTokenRequest(input, context),
        [_A]: _GST,
        [_V]: _,
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
const de_AssumeRoleCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const data = await (0,_aws_sdk_core__WEBPACK_IMPORTED_MODULE_2__.parseXmlBody)(output.body, context);
    let contents = {};
    contents = de_AssumeRoleResponse(data.AssumeRoleResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
const de_AssumeRoleWithSAMLCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const data = await (0,_aws_sdk_core__WEBPACK_IMPORTED_MODULE_2__.parseXmlBody)(output.body, context);
    let contents = {};
    contents = de_AssumeRoleWithSAMLResponse(data.AssumeRoleWithSAMLResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
const de_AssumeRoleWithWebIdentityCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const data = await (0,_aws_sdk_core__WEBPACK_IMPORTED_MODULE_2__.parseXmlBody)(output.body, context);
    let contents = {};
    contents = de_AssumeRoleWithWebIdentityResponse(data.AssumeRoleWithWebIdentityResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
const de_DecodeAuthorizationMessageCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const data = await (0,_aws_sdk_core__WEBPACK_IMPORTED_MODULE_2__.parseXmlBody)(output.body, context);
    let contents = {};
    contents = de_DecodeAuthorizationMessageResponse(data.DecodeAuthorizationMessageResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
const de_GetAccessKeyInfoCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const data = await (0,_aws_sdk_core__WEBPACK_IMPORTED_MODULE_2__.parseXmlBody)(output.body, context);
    let contents = {};
    contents = de_GetAccessKeyInfoResponse(data.GetAccessKeyInfoResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
const de_GetCallerIdentityCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const data = await (0,_aws_sdk_core__WEBPACK_IMPORTED_MODULE_2__.parseXmlBody)(output.body, context);
    let contents = {};
    contents = de_GetCallerIdentityResponse(data.GetCallerIdentityResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
const de_GetFederationTokenCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const data = await (0,_aws_sdk_core__WEBPACK_IMPORTED_MODULE_2__.parseXmlBody)(output.body, context);
    let contents = {};
    contents = de_GetFederationTokenResponse(data.GetFederationTokenResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
const de_GetSessionTokenCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const data = await (0,_aws_sdk_core__WEBPACK_IMPORTED_MODULE_2__.parseXmlBody)(output.body, context);
    let contents = {};
    contents = de_GetSessionTokenResponse(data.GetSessionTokenResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
const de_CommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await (0,_aws_sdk_core__WEBPACK_IMPORTED_MODULE_2__.parseXmlErrorBody)(output.body, context),
    };
    const errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ExpiredTokenException":
        case "com.amazonaws.sts#ExpiredTokenException":
            throw await de_ExpiredTokenExceptionRes(parsedOutput, context);
        case "MalformedPolicyDocument":
        case "com.amazonaws.sts#MalformedPolicyDocumentException":
            throw await de_MalformedPolicyDocumentExceptionRes(parsedOutput, context);
        case "PackedPolicyTooLarge":
        case "com.amazonaws.sts#PackedPolicyTooLargeException":
            throw await de_PackedPolicyTooLargeExceptionRes(parsedOutput, context);
        case "RegionDisabledException":
        case "com.amazonaws.sts#RegionDisabledException":
            throw await de_RegionDisabledExceptionRes(parsedOutput, context);
        case "IDPRejectedClaim":
        case "com.amazonaws.sts#IDPRejectedClaimException":
            throw await de_IDPRejectedClaimExceptionRes(parsedOutput, context);
        case "InvalidIdentityToken":
        case "com.amazonaws.sts#InvalidIdentityTokenException":
            throw await de_InvalidIdentityTokenExceptionRes(parsedOutput, context);
        case "IDPCommunicationError":
        case "com.amazonaws.sts#IDPCommunicationErrorException":
            throw await de_IDPCommunicationErrorExceptionRes(parsedOutput, context);
        case "InvalidAuthorizationMessageException":
        case "com.amazonaws.sts#InvalidAuthorizationMessageException":
            throw await de_InvalidAuthorizationMessageExceptionRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody: parsedBody.Error,
                errorCode,
            });
    }
};
const de_ExpiredTokenExceptionRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = de_ExpiredTokenException(body.Error, context);
    const exception = new _models_models_0__WEBPACK_IMPORTED_MODULE_3__.ExpiredTokenException({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.decorateServiceException)(exception, body);
};
const de_IDPCommunicationErrorExceptionRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = de_IDPCommunicationErrorException(body.Error, context);
    const exception = new _models_models_0__WEBPACK_IMPORTED_MODULE_3__.IDPCommunicationErrorException({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.decorateServiceException)(exception, body);
};
const de_IDPRejectedClaimExceptionRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = de_IDPRejectedClaimException(body.Error, context);
    const exception = new _models_models_0__WEBPACK_IMPORTED_MODULE_3__.IDPRejectedClaimException({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.decorateServiceException)(exception, body);
};
const de_InvalidAuthorizationMessageExceptionRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = de_InvalidAuthorizationMessageException(body.Error, context);
    const exception = new _models_models_0__WEBPACK_IMPORTED_MODULE_3__.InvalidAuthorizationMessageException({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.decorateServiceException)(exception, body);
};
const de_InvalidIdentityTokenExceptionRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = de_InvalidIdentityTokenException(body.Error, context);
    const exception = new _models_models_0__WEBPACK_IMPORTED_MODULE_3__.InvalidIdentityTokenException({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.decorateServiceException)(exception, body);
};
const de_MalformedPolicyDocumentExceptionRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = de_MalformedPolicyDocumentException(body.Error, context);
    const exception = new _models_models_0__WEBPACK_IMPORTED_MODULE_3__.MalformedPolicyDocumentException({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.decorateServiceException)(exception, body);
};
const de_PackedPolicyTooLargeExceptionRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = de_PackedPolicyTooLargeException(body.Error, context);
    const exception = new _models_models_0__WEBPACK_IMPORTED_MODULE_3__.PackedPolicyTooLargeException({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.decorateServiceException)(exception, body);
};
const de_RegionDisabledExceptionRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = de_RegionDisabledException(body.Error, context);
    const exception = new _models_models_0__WEBPACK_IMPORTED_MODULE_3__.RegionDisabledException({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.decorateServiceException)(exception, body);
};
const se_AssumeRoleRequest = (input, context) => {
    const entries = {};
    if (input[_RA] != null) {
        entries[_RA] = input[_RA];
    }
    if (input[_RSN] != null) {
        entries[_RSN] = input[_RSN];
    }
    if (input[_PA] != null) {
        const memberEntries = se_policyDescriptorListType(input[_PA], context);
        if (input[_PA]?.length === 0) {
            entries.PolicyArns = [];
        }
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `PolicyArns.${key}`;
            entries[loc] = value;
        });
    }
    if (input[_P] != null) {
        entries[_P] = input[_P];
    }
    if (input[_DS] != null) {
        entries[_DS] = input[_DS];
    }
    if (input[_T] != null) {
        const memberEntries = se_tagListType(input[_T], context);
        if (input[_T]?.length === 0) {
            entries.Tags = [];
        }
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `Tags.${key}`;
            entries[loc] = value;
        });
    }
    if (input[_TTK] != null) {
        const memberEntries = se_tagKeyListType(input[_TTK], context);
        if (input[_TTK]?.length === 0) {
            entries.TransitiveTagKeys = [];
        }
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `TransitiveTagKeys.${key}`;
            entries[loc] = value;
        });
    }
    if (input[_EI] != null) {
        entries[_EI] = input[_EI];
    }
    if (input[_SN] != null) {
        entries[_SN] = input[_SN];
    }
    if (input[_TC] != null) {
        entries[_TC] = input[_TC];
    }
    if (input[_SI] != null) {
        entries[_SI] = input[_SI];
    }
    if (input[_PC] != null) {
        const memberEntries = se_ProvidedContextsListType(input[_PC], context);
        if (input[_PC]?.length === 0) {
            entries.ProvidedContexts = [];
        }
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `ProvidedContexts.${key}`;
            entries[loc] = value;
        });
    }
    return entries;
};
const se_AssumeRoleWithSAMLRequest = (input, context) => {
    const entries = {};
    if (input[_RA] != null) {
        entries[_RA] = input[_RA];
    }
    if (input[_PAr] != null) {
        entries[_PAr] = input[_PAr];
    }
    if (input[_SAMLA] != null) {
        entries[_SAMLA] = input[_SAMLA];
    }
    if (input[_PA] != null) {
        const memberEntries = se_policyDescriptorListType(input[_PA], context);
        if (input[_PA]?.length === 0) {
            entries.PolicyArns = [];
        }
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `PolicyArns.${key}`;
            entries[loc] = value;
        });
    }
    if (input[_P] != null) {
        entries[_P] = input[_P];
    }
    if (input[_DS] != null) {
        entries[_DS] = input[_DS];
    }
    return entries;
};
const se_AssumeRoleWithWebIdentityRequest = (input, context) => {
    const entries = {};
    if (input[_RA] != null) {
        entries[_RA] = input[_RA];
    }
    if (input[_RSN] != null) {
        entries[_RSN] = input[_RSN];
    }
    if (input[_WIT] != null) {
        entries[_WIT] = input[_WIT];
    }
    if (input[_PI] != null) {
        entries[_PI] = input[_PI];
    }
    if (input[_PA] != null) {
        const memberEntries = se_policyDescriptorListType(input[_PA], context);
        if (input[_PA]?.length === 0) {
            entries.PolicyArns = [];
        }
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `PolicyArns.${key}`;
            entries[loc] = value;
        });
    }
    if (input[_P] != null) {
        entries[_P] = input[_P];
    }
    if (input[_DS] != null) {
        entries[_DS] = input[_DS];
    }
    return entries;
};
const se_DecodeAuthorizationMessageRequest = (input, context) => {
    const entries = {};
    if (input[_EM] != null) {
        entries[_EM] = input[_EM];
    }
    return entries;
};
const se_GetAccessKeyInfoRequest = (input, context) => {
    const entries = {};
    if (input[_AKI] != null) {
        entries[_AKI] = input[_AKI];
    }
    return entries;
};
const se_GetCallerIdentityRequest = (input, context) => {
    const entries = {};
    return entries;
};
const se_GetFederationTokenRequest = (input, context) => {
    const entries = {};
    if (input[_N] != null) {
        entries[_N] = input[_N];
    }
    if (input[_P] != null) {
        entries[_P] = input[_P];
    }
    if (input[_PA] != null) {
        const memberEntries = se_policyDescriptorListType(input[_PA], context);
        if (input[_PA]?.length === 0) {
            entries.PolicyArns = [];
        }
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `PolicyArns.${key}`;
            entries[loc] = value;
        });
    }
    if (input[_DS] != null) {
        entries[_DS] = input[_DS];
    }
    if (input[_T] != null) {
        const memberEntries = se_tagListType(input[_T], context);
        if (input[_T]?.length === 0) {
            entries.Tags = [];
        }
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `Tags.${key}`;
            entries[loc] = value;
        });
    }
    return entries;
};
const se_GetSessionTokenRequest = (input, context) => {
    const entries = {};
    if (input[_DS] != null) {
        entries[_DS] = input[_DS];
    }
    if (input[_SN] != null) {
        entries[_SN] = input[_SN];
    }
    if (input[_TC] != null) {
        entries[_TC] = input[_TC];
    }
    return entries;
};
const se_policyDescriptorListType = (input, context) => {
    const entries = {};
    let counter = 1;
    for (const entry of input) {
        if (entry === null) {
            continue;
        }
        const memberEntries = se_PolicyDescriptorType(entry, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            entries[`member.${counter}.${key}`] = value;
        });
        counter++;
    }
    return entries;
};
const se_PolicyDescriptorType = (input, context) => {
    const entries = {};
    if (input[_a] != null) {
        entries[_a] = input[_a];
    }
    return entries;
};
const se_ProvidedContext = (input, context) => {
    const entries = {};
    if (input[_PAro] != null) {
        entries[_PAro] = input[_PAro];
    }
    if (input[_CA] != null) {
        entries[_CA] = input[_CA];
    }
    return entries;
};
const se_ProvidedContextsListType = (input, context) => {
    const entries = {};
    let counter = 1;
    for (const entry of input) {
        if (entry === null) {
            continue;
        }
        const memberEntries = se_ProvidedContext(entry, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            entries[`member.${counter}.${key}`] = value;
        });
        counter++;
    }
    return entries;
};
const se_Tag = (input, context) => {
    const entries = {};
    if (input[_K] != null) {
        entries[_K] = input[_K];
    }
    if (input[_Va] != null) {
        entries[_Va] = input[_Va];
    }
    return entries;
};
const se_tagKeyListType = (input, context) => {
    const entries = {};
    let counter = 1;
    for (const entry of input) {
        if (entry === null) {
            continue;
        }
        entries[`member.${counter}`] = entry;
        counter++;
    }
    return entries;
};
const se_tagListType = (input, context) => {
    const entries = {};
    let counter = 1;
    for (const entry of input) {
        if (entry === null) {
            continue;
        }
        const memberEntries = se_Tag(entry, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            entries[`member.${counter}.${key}`] = value;
        });
        counter++;
    }
    return entries;
};
const de_AssumedRoleUser = (output, context) => {
    const contents = {};
    if (output[_ARI] != null) {
        contents[_ARI] = (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.expectString)(output[_ARI]);
    }
    if (output[_Ar] != null) {
        contents[_Ar] = (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.expectString)(output[_Ar]);
    }
    return contents;
};
const de_AssumeRoleResponse = (output, context) => {
    const contents = {};
    if (output[_C] != null) {
        contents[_C] = de_Credentials(output[_C], context);
    }
    if (output[_ARU] != null) {
        contents[_ARU] = de_AssumedRoleUser(output[_ARU], context);
    }
    if (output[_PPS] != null) {
        contents[_PPS] = (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.strictParseInt32)(output[_PPS]);
    }
    if (output[_SI] != null) {
        contents[_SI] = (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.expectString)(output[_SI]);
    }
    return contents;
};
const de_AssumeRoleWithSAMLResponse = (output, context) => {
    const contents = {};
    if (output[_C] != null) {
        contents[_C] = de_Credentials(output[_C], context);
    }
    if (output[_ARU] != null) {
        contents[_ARU] = de_AssumedRoleUser(output[_ARU], context);
    }
    if (output[_PPS] != null) {
        contents[_PPS] = (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.strictParseInt32)(output[_PPS]);
    }
    if (output[_S] != null) {
        contents[_S] = (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.expectString)(output[_S]);
    }
    if (output[_ST] != null) {
        contents[_ST] = (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.expectString)(output[_ST]);
    }
    if (output[_I] != null) {
        contents[_I] = (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.expectString)(output[_I]);
    }
    if (output[_Au] != null) {
        contents[_Au] = (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.expectString)(output[_Au]);
    }
    if (output[_NQ] != null) {
        contents[_NQ] = (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.expectString)(output[_NQ]);
    }
    if (output[_SI] != null) {
        contents[_SI] = (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.expectString)(output[_SI]);
    }
    return contents;
};
const de_AssumeRoleWithWebIdentityResponse = (output, context) => {
    const contents = {};
    if (output[_C] != null) {
        contents[_C] = de_Credentials(output[_C], context);
    }
    if (output[_SFWIT] != null) {
        contents[_SFWIT] = (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.expectString)(output[_SFWIT]);
    }
    if (output[_ARU] != null) {
        contents[_ARU] = de_AssumedRoleUser(output[_ARU], context);
    }
    if (output[_PPS] != null) {
        contents[_PPS] = (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.strictParseInt32)(output[_PPS]);
    }
    if (output[_Pr] != null) {
        contents[_Pr] = (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.expectString)(output[_Pr]);
    }
    if (output[_Au] != null) {
        contents[_Au] = (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.expectString)(output[_Au]);
    }
    if (output[_SI] != null) {
        contents[_SI] = (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.expectString)(output[_SI]);
    }
    return contents;
};
const de_Credentials = (output, context) => {
    const contents = {};
    if (output[_AKI] != null) {
        contents[_AKI] = (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.expectString)(output[_AKI]);
    }
    if (output[_SAK] != null) {
        contents[_SAK] = (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.expectString)(output[_SAK]);
    }
    if (output[_STe] != null) {
        contents[_STe] = (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.expectString)(output[_STe]);
    }
    if (output[_E] != null) {
        contents[_E] = (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.expectNonNull)((0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.parseRfc3339DateTimeWithOffset)(output[_E]));
    }
    return contents;
};
const de_DecodeAuthorizationMessageResponse = (output, context) => {
    const contents = {};
    if (output[_DM] != null) {
        contents[_DM] = (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.expectString)(output[_DM]);
    }
    return contents;
};
const de_ExpiredTokenException = (output, context) => {
    const contents = {};
    if (output[_m] != null) {
        contents[_m] = (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.expectString)(output[_m]);
    }
    return contents;
};
const de_FederatedUser = (output, context) => {
    const contents = {};
    if (output[_FUI] != null) {
        contents[_FUI] = (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.expectString)(output[_FUI]);
    }
    if (output[_Ar] != null) {
        contents[_Ar] = (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.expectString)(output[_Ar]);
    }
    return contents;
};
const de_GetAccessKeyInfoResponse = (output, context) => {
    const contents = {};
    if (output[_Ac] != null) {
        contents[_Ac] = (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.expectString)(output[_Ac]);
    }
    return contents;
};
const de_GetCallerIdentityResponse = (output, context) => {
    const contents = {};
    if (output[_UI] != null) {
        contents[_UI] = (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.expectString)(output[_UI]);
    }
    if (output[_Ac] != null) {
        contents[_Ac] = (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.expectString)(output[_Ac]);
    }
    if (output[_Ar] != null) {
        contents[_Ar] = (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.expectString)(output[_Ar]);
    }
    return contents;
};
const de_GetFederationTokenResponse = (output, context) => {
    const contents = {};
    if (output[_C] != null) {
        contents[_C] = de_Credentials(output[_C], context);
    }
    if (output[_FU] != null) {
        contents[_FU] = de_FederatedUser(output[_FU], context);
    }
    if (output[_PPS] != null) {
        contents[_PPS] = (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.strictParseInt32)(output[_PPS]);
    }
    return contents;
};
const de_GetSessionTokenResponse = (output, context) => {
    const contents = {};
    if (output[_C] != null) {
        contents[_C] = de_Credentials(output[_C], context);
    }
    return contents;
};
const de_IDPCommunicationErrorException = (output, context) => {
    const contents = {};
    if (output[_m] != null) {
        contents[_m] = (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.expectString)(output[_m]);
    }
    return contents;
};
const de_IDPRejectedClaimException = (output, context) => {
    const contents = {};
    if (output[_m] != null) {
        contents[_m] = (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.expectString)(output[_m]);
    }
    return contents;
};
const de_InvalidAuthorizationMessageException = (output, context) => {
    const contents = {};
    if (output[_m] != null) {
        contents[_m] = (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.expectString)(output[_m]);
    }
    return contents;
};
const de_InvalidIdentityTokenException = (output, context) => {
    const contents = {};
    if (output[_m] != null) {
        contents[_m] = (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.expectString)(output[_m]);
    }
    return contents;
};
const de_MalformedPolicyDocumentException = (output, context) => {
    const contents = {};
    if (output[_m] != null) {
        contents[_m] = (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.expectString)(output[_m]);
    }
    return contents;
};
const de_PackedPolicyTooLargeException = (output, context) => {
    const contents = {};
    if (output[_m] != null) {
        contents[_m] = (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.expectString)(output[_m]);
    }
    return contents;
};
const de_RegionDisabledException = (output, context) => {
    const contents = {};
    if (output[_m] != null) {
        contents[_m] = (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.expectString)(output[_m]);
    }
    return contents;
};
const deserializeMetadata = (output) => ({
    httpStatusCode: output.statusCode,
    requestId: output.headers["x-amzn-requestid"] ?? output.headers["x-amzn-request-id"] ?? output.headers["x-amz-request-id"],
    extendedRequestId: output.headers["x-amz-id-2"],
    cfId: output.headers["x-amz-cf-id"],
});
const collectBodyString = (streamBody, context) => (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.collectBody)(streamBody, context).then((body) => context.utf8Encoder(body));
const throwDefaultError = (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.withBaseException)(_models_STSServiceException__WEBPACK_IMPORTED_MODULE_4__.STSServiceException);
const buildHttpRpcRequest = async (context, headers, path, resolvedHostname, body) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const contents = {
        protocol,
        hostname,
        port,
        method: "POST",
        path: basePath.endsWith("/") ? basePath.slice(0, -1) + path : basePath + path,
        headers,
    };
    if (resolvedHostname !== undefined) {
        contents.hostname = resolvedHostname;
    }
    if (body !== undefined) {
        contents.body = body;
    }
    return new _smithy_protocol_http__WEBPACK_IMPORTED_MODULE_0__.HttpRequest(contents);
};
const SHARED_HEADERS = {
    "content-type": "application/x-www-form-urlencoded",
};
const _ = "2011-06-15";
const _A = "Action";
const _AKI = "AccessKeyId";
const _AR = "AssumeRole";
const _ARI = "AssumedRoleId";
const _ARU = "AssumedRoleUser";
const _ARWSAML = "AssumeRoleWithSAML";
const _ARWWI = "AssumeRoleWithWebIdentity";
const _Ac = "Account";
const _Ar = "Arn";
const _Au = "Audience";
const _C = "Credentials";
const _CA = "ContextAssertion";
const _DAM = "DecodeAuthorizationMessage";
const _DM = "DecodedMessage";
const _DS = "DurationSeconds";
const _E = "Expiration";
const _EI = "ExternalId";
const _EM = "EncodedMessage";
const _FU = "FederatedUser";
const _FUI = "FederatedUserId";
const _GAKI = "GetAccessKeyInfo";
const _GCI = "GetCallerIdentity";
const _GFT = "GetFederationToken";
const _GST = "GetSessionToken";
const _I = "Issuer";
const _K = "Key";
const _N = "Name";
const _NQ = "NameQualifier";
const _P = "Policy";
const _PA = "PolicyArns";
const _PAr = "PrincipalArn";
const _PAro = "ProviderArn";
const _PC = "ProvidedContexts";
const _PI = "ProviderId";
const _PPS = "PackedPolicySize";
const _Pr = "Provider";
const _RA = "RoleArn";
const _RSN = "RoleSessionName";
const _S = "Subject";
const _SAK = "SecretAccessKey";
const _SAMLA = "SAMLAssertion";
const _SFWIT = "SubjectFromWebIdentityToken";
const _SI = "SourceIdentity";
const _SN = "SerialNumber";
const _ST = "SubjectType";
const _STe = "SessionToken";
const _T = "Tags";
const _TC = "TokenCode";
const _TTK = "TransitiveTagKeys";
const _UI = "UserId";
const _V = "Version";
const _Va = "Value";
const _WIT = "WebIdentityToken";
const _a = "arn";
const _m = "message";
const buildFormUrlencodedString = (formEntries) => Object.entries(formEntries)
    .map(([key, value]) => (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.extendedEncodeURIComponent)(key) + "=" + (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.extendedEncodeURIComponent)(value))
    .join("&");
const loadQueryErrorCode = (output, data) => {
    if (data.Error?.Code !== undefined) {
        return data.Error.Code;
    }
    if (output.statusCode == 404) {
        return "NotFound";
    }
};


/***/ }),
/* 1475 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   loadRestXmlErrorCode: () => (/* binding */ loadRestXmlErrorCode),
/* harmony export */   parseXmlBody: () => (/* binding */ parseXmlBody),
/* harmony export */   parseXmlErrorBody: () => (/* binding */ parseXmlErrorBody)
/* harmony export */ });
/* harmony import */ var _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1344);
/* harmony import */ var fast_xml_parser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1476);
/* harmony import */ var fast_xml_parser__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fast_xml_parser__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1487);



const parseXmlBody = (streamBody, context) => (0,_common__WEBPACK_IMPORTED_MODULE_2__.collectBodyString)(streamBody, context).then((encoded) => {
    if (encoded.length) {
        const parser = new fast_xml_parser__WEBPACK_IMPORTED_MODULE_1__.XMLParser({
            attributeNamePrefix: "",
            htmlEntities: true,
            ignoreAttributes: false,
            ignoreDeclaration: true,
            parseTagValue: false,
            trimValues: false,
            tagValueProcessor: (_, val) => (val.trim() === "" && val.includes("\n") ? "" : undefined),
        });
        parser.addEntity("#xD", "\r");
        parser.addEntity("#10", "\n");
        let parsedObj;
        try {
            parsedObj = parser.parse(encoded, true);
        }
        catch (e) {
            if (e && typeof e === "object") {
                Object.defineProperty(e, "$responseBodyText", {
                    value: encoded,
                });
            }
            throw e;
        }
        const textNodeName = "#text";
        const key = Object.keys(parsedObj)[0];
        const parsedObjToReturn = parsedObj[key];
        if (parsedObjToReturn[textNodeName]) {
            parsedObjToReturn[key] = parsedObjToReturn[textNodeName];
            delete parsedObjToReturn[textNodeName];
        }
        return (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_0__.getValueFromTextNode)(parsedObjToReturn);
    }
    return {};
});
const parseXmlErrorBody = async (errorBody, context) => {
    const value = await parseXmlBody(errorBody, context);
    if (value.Error) {
        value.Error.message = value.Error.message ?? value.Error.Message;
    }
    return value;
};
const loadRestXmlErrorCode = (output, data) => {
    if (data?.Error?.Code !== undefined) {
        return data.Error.Code;
    }
    if (data?.Code !== undefined) {
        return data.Code;
    }
    if (output.statusCode == 404) {
        return "NotFound";
    }
};


/***/ }),
/* 1476 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


const validator = __webpack_require__(1477);
const XMLParser = __webpack_require__(1479);
const XMLBuilder = __webpack_require__(1485);

module.exports = {
  XMLParser: XMLParser,
  XMLValidator: validator,
  XMLBuilder: XMLBuilder
}

/***/ }),
/* 1477 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


const util = __webpack_require__(1478);

const defaultOptions = {
  allowBooleanAttributes: false, //A tag can have attributes without any value
  unpairedTags: []
};

//const tagsPattern = new RegExp("<\\/?([\\w:\\-_\.]+)\\s*\/?>","g");
exports.validate = function (xmlData, options) {
  options = Object.assign({}, defaultOptions, options);

  //xmlData = xmlData.replace(/(\r\n|\n|\r)/gm,"");//make it single line
  //xmlData = xmlData.replace(/(^\s*<\?xml.*?\?>)/g,"");//Remove XML starting tag
  //xmlData = xmlData.replace(/(<!DOCTYPE[\s\w\"\.\/\-\:]+(\[.*\])*\s*>)/g,"");//Remove DOCTYPE
  const tags = [];
  let tagFound = false;

  //indicates that the root tag has been closed (aka. depth 0 has been reached)
  let reachedRoot = false;

  if (xmlData[0] === '\ufeff') {
    // check for byte order mark (BOM)
    xmlData = xmlData.substr(1);
  }
  
  for (let i = 0; i < xmlData.length; i++) {

    if (xmlData[i] === '<' && xmlData[i+1] === '?') {
      i+=2;
      i = readPI(xmlData,i);
      if (i.err) return i;
    }else if (xmlData[i] === '<') {
      //starting of tag
      //read until you reach to '>' avoiding any '>' in attribute value
      let tagStartPos = i;
      i++;
      
      if (xmlData[i] === '!') {
        i = readCommentAndCDATA(xmlData, i);
        continue;
      } else {
        let closingTag = false;
        if (xmlData[i] === '/') {
          //closing tag
          closingTag = true;
          i++;
        }
        //read tagname
        let tagName = '';
        for (; i < xmlData.length &&
          xmlData[i] !== '>' &&
          xmlData[i] !== ' ' &&
          xmlData[i] !== '\t' &&
          xmlData[i] !== '\n' &&
          xmlData[i] !== '\r'; i++
        ) {
          tagName += xmlData[i];
        }
        tagName = tagName.trim();
        //console.log(tagName);

        if (tagName[tagName.length - 1] === '/') {
          //self closing tag without attributes
          tagName = tagName.substring(0, tagName.length - 1);
          //continue;
          i--;
        }
        if (!validateTagName(tagName)) {
          let msg;
          if (tagName.trim().length === 0) {
            msg = "Invalid space after '<'.";
          } else {
            msg = "Tag '"+tagName+"' is an invalid name.";
          }
          return getErrorObject('InvalidTag', msg, getLineNumberForPosition(xmlData, i));
        }

        const result = readAttributeStr(xmlData, i);
        if (result === false) {
          return getErrorObject('InvalidAttr', "Attributes for '"+tagName+"' have open quote.", getLineNumberForPosition(xmlData, i));
        }
        let attrStr = result.value;
        i = result.index;

        if (attrStr[attrStr.length - 1] === '/') {
          //self closing tag
          const attrStrStart = i - attrStr.length;
          attrStr = attrStr.substring(0, attrStr.length - 1);
          const isValid = validateAttributeString(attrStr, options);
          if (isValid === true) {
            tagFound = true;
            //continue; //text may presents after self closing tag
          } else {
            //the result from the nested function returns the position of the error within the attribute
            //in order to get the 'true' error line, we need to calculate the position where the attribute begins (i - attrStr.length) and then add the position within the attribute
            //this gives us the absolute index in the entire xml, which we can use to find the line at last
            return getErrorObject(isValid.err.code, isValid.err.msg, getLineNumberForPosition(xmlData, attrStrStart + isValid.err.line));
          }
        } else if (closingTag) {
          if (!result.tagClosed) {
            return getErrorObject('InvalidTag', "Closing tag '"+tagName+"' doesn't have proper closing.", getLineNumberForPosition(xmlData, i));
          } else if (attrStr.trim().length > 0) {
            return getErrorObject('InvalidTag', "Closing tag '"+tagName+"' can't have attributes or invalid starting.", getLineNumberForPosition(xmlData, tagStartPos));
          } else {
            const otg = tags.pop();
            if (tagName !== otg.tagName) {
              let openPos = getLineNumberForPosition(xmlData, otg.tagStartPos);
              return getErrorObject('InvalidTag',
                "Expected closing tag '"+otg.tagName+"' (opened in line "+openPos.line+", col "+openPos.col+") instead of closing tag '"+tagName+"'.",
                getLineNumberForPosition(xmlData, tagStartPos));
            }

            //when there are no more tags, we reached the root level.
            if (tags.length == 0) {
              reachedRoot = true;
            }
          }
        } else {
          const isValid = validateAttributeString(attrStr, options);
          if (isValid !== true) {
            //the result from the nested function returns the position of the error within the attribute
            //in order to get the 'true' error line, we need to calculate the position where the attribute begins (i - attrStr.length) and then add the position within the attribute
            //this gives us the absolute index in the entire xml, which we can use to find the line at last
            return getErrorObject(isValid.err.code, isValid.err.msg, getLineNumberForPosition(xmlData, i - attrStr.length + isValid.err.line));
          }

          //if the root level has been reached before ...
          if (reachedRoot === true) {
            return getErrorObject('InvalidXml', 'Multiple possible root nodes found.', getLineNumberForPosition(xmlData, i));
          } else if(options.unpairedTags.indexOf(tagName) !== -1){
            //don't push into stack
          } else {
            tags.push({tagName, tagStartPos});
          }
          tagFound = true;
        }

        //skip tag text value
        //It may include comments and CDATA value
        for (i++; i < xmlData.length; i++) {
          if (xmlData[i] === '<') {
            if (xmlData[i + 1] === '!') {
              //comment or CADATA
              i++;
              i = readCommentAndCDATA(xmlData, i);
              continue;
            } else if (xmlData[i+1] === '?') {
              i = readPI(xmlData, ++i);
              if (i.err) return i;
            } else{
              break;
            }
          } else if (xmlData[i] === '&') {
            const afterAmp = validateAmpersand(xmlData, i);
            if (afterAmp == -1)
              return getErrorObject('InvalidChar', "char '&' is not expected.", getLineNumberForPosition(xmlData, i));
            i = afterAmp;
          }else{
            if (reachedRoot === true && !isWhiteSpace(xmlData[i])) {
              return getErrorObject('InvalidXml', "Extra text at the end", getLineNumberForPosition(xmlData, i));
            }
          }
        } //end of reading tag text value
        if (xmlData[i] === '<') {
          i--;
        }
      }
    } else {
      if ( isWhiteSpace(xmlData[i])) {
        continue;
      }
      return getErrorObject('InvalidChar', "char '"+xmlData[i]+"' is not expected.", getLineNumberForPosition(xmlData, i));
    }
  }

  if (!tagFound) {
    return getErrorObject('InvalidXml', 'Start tag expected.', 1);
  }else if (tags.length == 1) {
      return getErrorObject('InvalidTag', "Unclosed tag '"+tags[0].tagName+"'.", getLineNumberForPosition(xmlData, tags[0].tagStartPos));
  }else if (tags.length > 0) {
      return getErrorObject('InvalidXml', "Invalid '"+
          JSON.stringify(tags.map(t => t.tagName), null, 4).replace(/\r?\n/g, '')+
          "' found.", {line: 1, col: 1});
  }

  return true;
};

function isWhiteSpace(char){
  return char === ' ' || char === '\t' || char === '\n'  || char === '\r';
}
/**
 * Read Processing insstructions and skip
 * @param {*} xmlData
 * @param {*} i
 */
function readPI(xmlData, i) {
  const start = i;
  for (; i < xmlData.length; i++) {
    if (xmlData[i] == '?' || xmlData[i] == ' ') {
      //tagname
      const tagname = xmlData.substr(start, i - start);
      if (i > 5 && tagname === 'xml') {
        return getErrorObject('InvalidXml', 'XML declaration allowed only at the start of the document.', getLineNumberForPosition(xmlData, i));
      } else if (xmlData[i] == '?' && xmlData[i + 1] == '>') {
        //check if valid attribut string
        i++;
        break;
      } else {
        continue;
      }
    }
  }
  return i;
}

function readCommentAndCDATA(xmlData, i) {
  if (xmlData.length > i + 5 && xmlData[i + 1] === '-' && xmlData[i + 2] === '-') {
    //comment
    for (i += 3; i < xmlData.length; i++) {
      if (xmlData[i] === '-' && xmlData[i + 1] === '-' && xmlData[i + 2] === '>') {
        i += 2;
        break;
      }
    }
  } else if (
    xmlData.length > i + 8 &&
    xmlData[i + 1] === 'D' &&
    xmlData[i + 2] === 'O' &&
    xmlData[i + 3] === 'C' &&
    xmlData[i + 4] === 'T' &&
    xmlData[i + 5] === 'Y' &&
    xmlData[i + 6] === 'P' &&
    xmlData[i + 7] === 'E'
  ) {
    let angleBracketsCount = 1;
    for (i += 8; i < xmlData.length; i++) {
      if (xmlData[i] === '<') {
        angleBracketsCount++;
      } else if (xmlData[i] === '>') {
        angleBracketsCount--;
        if (angleBracketsCount === 0) {
          break;
        }
      }
    }
  } else if (
    xmlData.length > i + 9 &&
    xmlData[i + 1] === '[' &&
    xmlData[i + 2] === 'C' &&
    xmlData[i + 3] === 'D' &&
    xmlData[i + 4] === 'A' &&
    xmlData[i + 5] === 'T' &&
    xmlData[i + 6] === 'A' &&
    xmlData[i + 7] === '['
  ) {
    for (i += 8; i < xmlData.length; i++) {
      if (xmlData[i] === ']' && xmlData[i + 1] === ']' && xmlData[i + 2] === '>') {
        i += 2;
        break;
      }
    }
  }

  return i;
}

const doubleQuote = '"';
const singleQuote = "'";

/**
 * Keep reading xmlData until '<' is found outside the attribute value.
 * @param {string} xmlData
 * @param {number} i
 */
function readAttributeStr(xmlData, i) {
  let attrStr = '';
  let startChar = '';
  let tagClosed = false;
  for (; i < xmlData.length; i++) {
    if (xmlData[i] === doubleQuote || xmlData[i] === singleQuote) {
      if (startChar === '') {
        startChar = xmlData[i];
      } else if (startChar !== xmlData[i]) {
        //if vaue is enclosed with double quote then single quotes are allowed inside the value and vice versa
      } else {
        startChar = '';
      }
    } else if (xmlData[i] === '>') {
      if (startChar === '') {
        tagClosed = true;
        break;
      }
    }
    attrStr += xmlData[i];
  }
  if (startChar !== '') {
    return false;
  }

  return {
    value: attrStr,
    index: i,
    tagClosed: tagClosed
  };
}

/**
 * Select all the attributes whether valid or invalid.
 */
const validAttrStrRegxp = new RegExp('(\\s*)([^\\s=]+)(\\s*=)?(\\s*([\'"])(([\\s\\S])*?)\\5)?', 'g');

//attr, ="sd", a="amit's", a="sd"b="saf", ab  cd=""

function validateAttributeString(attrStr, options) {
  //console.log("start:"+attrStr+":end");

  //if(attrStr.trim().length === 0) return true; //empty string

  const matches = util.getAllMatches(attrStr, validAttrStrRegxp);
  const attrNames = {};

  for (let i = 0; i < matches.length; i++) {
    if (matches[i][1].length === 0) {
      //nospace before attribute name: a="sd"b="saf"
      return getErrorObject('InvalidAttr', "Attribute '"+matches[i][2]+"' has no space in starting.", getPositionFromMatch(matches[i]))
    } else if (matches[i][3] !== undefined && matches[i][4] === undefined) {
      return getErrorObject('InvalidAttr', "Attribute '"+matches[i][2]+"' is without value.", getPositionFromMatch(matches[i]));
    } else if (matches[i][3] === undefined && !options.allowBooleanAttributes) {
      //independent attribute: ab
      return getErrorObject('InvalidAttr', "boolean attribute '"+matches[i][2]+"' is not allowed.", getPositionFromMatch(matches[i]));
    }
    /* else if(matches[i][6] === undefined){//attribute without value: ab=
                    return { err: { code:"InvalidAttr",msg:"attribute " + matches[i][2] + " has no value assigned."}};
                } */
    const attrName = matches[i][2];
    if (!validateAttrName(attrName)) {
      return getErrorObject('InvalidAttr', "Attribute '"+attrName+"' is an invalid name.", getPositionFromMatch(matches[i]));
    }
    if (!attrNames.hasOwnProperty(attrName)) {
      //check for duplicate attribute.
      attrNames[attrName] = 1;
    } else {
      return getErrorObject('InvalidAttr', "Attribute '"+attrName+"' is repeated.", getPositionFromMatch(matches[i]));
    }
  }

  return true;
}

function validateNumberAmpersand(xmlData, i) {
  let re = /\d/;
  if (xmlData[i] === 'x') {
    i++;
    re = /[\da-fA-F]/;
  }
  for (; i < xmlData.length; i++) {
    if (xmlData[i] === ';')
      return i;
    if (!xmlData[i].match(re))
      break;
  }
  return -1;
}

function validateAmpersand(xmlData, i) {
  // https://www.w3.org/TR/xml/#dt-charref
  i++;
  if (xmlData[i] === ';')
    return -1;
  if (xmlData[i] === '#') {
    i++;
    return validateNumberAmpersand(xmlData, i);
  }
  let count = 0;
  for (; i < xmlData.length; i++, count++) {
    if (xmlData[i].match(/\w/) && count < 20)
      continue;
    if (xmlData[i] === ';')
      break;
    return -1;
  }
  return i;
}

function getErrorObject(code, message, lineNumber) {
  return {
    err: {
      code: code,
      msg: message,
      line: lineNumber.line || lineNumber,
      col: lineNumber.col,
    },
  };
}

function validateAttrName(attrName) {
  return util.isName(attrName);
}

// const startsWithXML = /^xml/i;

function validateTagName(tagname) {
  return util.isName(tagname) /* && !tagname.match(startsWithXML) */;
}

//this function returns the line number for the character at the given index
function getLineNumberForPosition(xmlData, index) {
  const lines = xmlData.substring(0, index).split(/\r?\n/);
  return {
    line: lines.length,

    // column number is last line's length + 1, because column numbering starts at 1:
    col: lines[lines.length - 1].length + 1
  };
}

//this function returns the position of the first character of match within attrStr
function getPositionFromMatch(match) {
  return match.startIndex + match[1].length;
}


/***/ }),
/* 1478 */
/***/ ((__unused_webpack_module, exports) => {

"use strict";


const nameStartChar = ':A-Za-z_\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD';
const nameChar = nameStartChar + '\\-.\\d\\u00B7\\u0300-\\u036F\\u203F-\\u2040';
const nameRegexp = '[' + nameStartChar + '][' + nameChar + ']*'
const regexName = new RegExp('^' + nameRegexp + '$');

const getAllMatches = function(string, regex) {
  const matches = [];
  let match = regex.exec(string);
  while (match) {
    const allmatches = [];
    allmatches.startIndex = regex.lastIndex - match[0].length;
    const len = match.length;
    for (let index = 0; index < len; index++) {
      allmatches.push(match[index]);
    }
    matches.push(allmatches);
    match = regex.exec(string);
  }
  return matches;
};

const isName = function(string) {
  const match = regexName.exec(string);
  return !(match === null || typeof match === 'undefined');
};

exports.isExist = function(v) {
  return typeof v !== 'undefined';
};

exports.isEmptyObject = function(obj) {
  return Object.keys(obj).length === 0;
};

/**
 * Copy all the properties of a into b.
 * @param {*} target
 * @param {*} a
 */
exports.merge = function(target, a, arrayMode) {
  if (a) {
    const keys = Object.keys(a); // will return an array of own properties
    const len = keys.length; //don't make it inline
    for (let i = 0; i < len; i++) {
      if (arrayMode === 'strict') {
        target[keys[i]] = [ a[keys[i]] ];
      } else {
        target[keys[i]] = a[keys[i]];
      }
    }
  }
};
/* exports.merge =function (b,a){
  return Object.assign(b,a);
} */

exports.getValue = function(v) {
  if (exports.isExist(v)) {
    return v;
  } else {
    return '';
  }
};

// const fakeCall = function(a) {return a;};
// const fakeCallNoReturn = function() {};

exports.isName = isName;
exports.getAllMatches = getAllMatches;
exports.nameRegexp = nameRegexp;


/***/ }),
/* 1479 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const { buildOptions} = __webpack_require__(1480);
const OrderedObjParser = __webpack_require__(1481);
const { prettify} = __webpack_require__(1484);
const validator = __webpack_require__(1477);

class XMLParser{
    
    constructor(options){
        this.externalEntities = {};
        this.options = buildOptions(options);
        
    }
    /**
     * Parse XML dats to JS object 
     * @param {string|Buffer} xmlData 
     * @param {boolean|Object} validationOption 
     */
    parse(xmlData,validationOption){
        if(typeof xmlData === "string"){
        }else if( xmlData.toString){
            xmlData = xmlData.toString();
        }else{
            throw new Error("XML data is accepted in String or Bytes[] form.")
        }
        if( validationOption){
            if(validationOption === true) validationOption = {}; //validate with default options
            
            const result = validator.validate(xmlData, validationOption);
            if (result !== true) {
              throw Error( `${result.err.msg}:${result.err.line}:${result.err.col}` )
            }
          }
        const orderedObjParser = new OrderedObjParser(this.options);
        orderedObjParser.addExternalEntities(this.externalEntities);
        const orderedResult = orderedObjParser.parseXml(xmlData);
        if(this.options.preserveOrder || orderedResult === undefined) return orderedResult;
        else return prettify(orderedResult, this.options);
    }

    /**
     * Add Entity which is not by default supported by this library
     * @param {string} key 
     * @param {string} value 
     */
    addEntity(key, value){
        if(value.indexOf("&") !== -1){
            throw new Error("Entity value can't have '&'")
        }else if(key.indexOf("&") !== -1 || key.indexOf(";") !== -1){
            throw new Error("An entity must be set without '&' and ';'. Eg. use '#xD' for '&#xD;'")
        }else if(value === "&"){
            throw new Error("An entity with value '&' is not permitted");
        }else{
            this.externalEntities[key] = value;
        }
    }
}

module.exports = XMLParser;

/***/ }),
/* 1480 */
/***/ ((__unused_webpack_module, exports) => {


const defaultOptions = {
    preserveOrder: false,
    attributeNamePrefix: '@_',
    attributesGroupName: false,
    textNodeName: '#text',
    ignoreAttributes: true,
    removeNSPrefix: false, // remove NS from tag name or attribute name if true
    allowBooleanAttributes: false, //a tag can have attributes without any value
    //ignoreRootElement : false,
    parseTagValue: true,
    parseAttributeValue: false,
    trimValues: true, //Trim string values of tag and attributes
    cdataPropName: false,
    numberParseOptions: {
      hex: true,
      leadingZeros: true,
      eNotation: true
    },
    tagValueProcessor: function(tagName, val) {
      return val;
    },
    attributeValueProcessor: function(attrName, val) {
      return val;
    },
    stopNodes: [], //nested tags will not be parsed even for errors
    alwaysCreateTextNode: false,
    isArray: () => false,
    commentPropName: false,
    unpairedTags: [],
    processEntities: true,
    htmlEntities: false,
    ignoreDeclaration: false,
    ignorePiTags: false,
    transformTagName: false,
    transformAttributeName: false,
    updateTag: function(tagName, jPath, attrs){
      return tagName
    },
    // skipEmptyListItem: false
};
   
const buildOptions = function(options) {
    return Object.assign({}, defaultOptions, options);
};

exports.buildOptions = buildOptions;
exports.defaultOptions = defaultOptions;

/***/ }),
/* 1481 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

///@ts-check

const util = __webpack_require__(1478);
const xmlNode = __webpack_require__(1482);
const readDocType = __webpack_require__(1483);
const toNumber = __webpack_require__(14);

const regx =
  '<((!\\[CDATA\\[([\\s\\S]*?)(]]>))|((NAME:)?(NAME))([^>]*)>|((\\/)(NAME)\\s*>))([^<]*)'
  .replace(/NAME/g, util.nameRegexp);

//const tagsRegx = new RegExp("<(\\/?[\\w:\\-\._]+)([^>]*)>(\\s*"+cdataRegx+")*([^<]+)?","g");
//const tagsRegx = new RegExp("<(\\/?)((\\w*:)?([\\w:\\-\._]+))([^>]*)>([^<]*)("+cdataRegx+"([^<]*))*([^<]+)?","g");

class OrderedObjParser{
  constructor(options){
    this.options = options;
    this.currentNode = null;
    this.tagsNodeStack = [];
    this.docTypeEntities = {};
    this.lastEntities = {
      "apos" : { regex: /&(apos|#39|#x27);/g, val : "'"},
      "gt" : { regex: /&(gt|#62|#x3E);/g, val : ">"},
      "lt" : { regex: /&(lt|#60|#x3C);/g, val : "<"},
      "quot" : { regex: /&(quot|#34|#x22);/g, val : "\""},
    };
    this.ampEntity = { regex: /&(amp|#38|#x26);/g, val : "&"};
    this.htmlEntities = {
      "space": { regex: /&(nbsp|#160);/g, val: " " },
      // "lt" : { regex: /&(lt|#60);/g, val: "<" },
      // "gt" : { regex: /&(gt|#62);/g, val: ">" },
      // "amp" : { regex: /&(amp|#38);/g, val: "&" },
      // "quot" : { regex: /&(quot|#34);/g, val: "\"" },
      // "apos" : { regex: /&(apos|#39);/g, val: "'" },
      "cent" : { regex: /&(cent|#162);/g, val: "¢" },
      "pound" : { regex: /&(pound|#163);/g, val: "£" },
      "yen" : { regex: /&(yen|#165);/g, val: "¥" },
      "euro" : { regex: /&(euro|#8364);/g, val: "€" },
      "copyright" : { regex: /&(copy|#169);/g, val: "©" },
      "reg" : { regex: /&(reg|#174);/g, val: "®" },
      "inr" : { regex: /&(inr|#8377);/g, val: "₹" },
    };
    this.addExternalEntities = addExternalEntities;
    this.parseXml = parseXml;
    this.parseTextData = parseTextData;
    this.resolveNameSpace = resolveNameSpace;
    this.buildAttributesMap = buildAttributesMap;
    this.isItStopNode = isItStopNode;
    this.replaceEntitiesValue = replaceEntitiesValue;
    this.readStopNodeData = readStopNodeData;
    this.saveTextToParentTag = saveTextToParentTag;
    this.addChild = addChild;
  }

}

function addExternalEntities(externalEntities){
  const entKeys = Object.keys(externalEntities);
  for (let i = 0; i < entKeys.length; i++) {
    const ent = entKeys[i];
    this.lastEntities[ent] = {
       regex: new RegExp("&"+ent+";","g"),
       val : externalEntities[ent]
    }
  }
}

/**
 * @param {string} val
 * @param {string} tagName
 * @param {string} jPath
 * @param {boolean} dontTrim
 * @param {boolean} hasAttributes
 * @param {boolean} isLeafNode
 * @param {boolean} escapeEntities
 */
function parseTextData(val, tagName, jPath, dontTrim, hasAttributes, isLeafNode, escapeEntities) {
  if (val !== undefined) {
    if (this.options.trimValues && !dontTrim) {
      val = val.trim();
    }
    if(val.length > 0){
      if(!escapeEntities) val = this.replaceEntitiesValue(val);
      
      const newval = this.options.tagValueProcessor(tagName, val, jPath, hasAttributes, isLeafNode);
      if(newval === null || newval === undefined){
        //don't parse
        return val;
      }else if(typeof newval !== typeof val || newval !== val){
        //overwrite
        return newval;
      }else if(this.options.trimValues){
        return parseValue(val, this.options.parseTagValue, this.options.numberParseOptions);
      }else{
        const trimmedVal = val.trim();
        if(trimmedVal === val){
          return parseValue(val, this.options.parseTagValue, this.options.numberParseOptions);
        }else{
          return val;
        }
      }
    }
  }
}

function resolveNameSpace(tagname) {
  if (this.options.removeNSPrefix) {
    const tags = tagname.split(':');
    const prefix = tagname.charAt(0) === '/' ? '/' : '';
    if (tags[0] === 'xmlns') {
      return '';
    }
    if (tags.length === 2) {
      tagname = prefix + tags[1];
    }
  }
  return tagname;
}

//TODO: change regex to capture NS
//const attrsRegx = new RegExp("([\\w\\-\\.\\:]+)\\s*=\\s*(['\"])((.|\n)*?)\\2","gm");
const attrsRegx = new RegExp('([^\\s=]+)\\s*(=\\s*([\'"])([\\s\\S]*?)\\3)?', 'gm');

function buildAttributesMap(attrStr, jPath, tagName) {
  if (!this.options.ignoreAttributes && typeof attrStr === 'string') {
    // attrStr = attrStr.replace(/\r?\n/g, ' ');
    //attrStr = attrStr || attrStr.trim();

    const matches = util.getAllMatches(attrStr, attrsRegx);
    const len = matches.length; //don't make it inline
    const attrs = {};
    for (let i = 0; i < len; i++) {
      const attrName = this.resolveNameSpace(matches[i][1]);
      let oldVal = matches[i][4];
      let aName = this.options.attributeNamePrefix + attrName;
      if (attrName.length) {
        if (this.options.transformAttributeName) {
          aName = this.options.transformAttributeName(aName);
        }
        if(aName === "__proto__") aName  = "#__proto__";
        if (oldVal !== undefined) {
          if (this.options.trimValues) {
            oldVal = oldVal.trim();
          }
          oldVal = this.replaceEntitiesValue(oldVal);
          const newVal = this.options.attributeValueProcessor(attrName, oldVal, jPath);
          if(newVal === null || newVal === undefined){
            //don't parse
            attrs[aName] = oldVal;
          }else if(typeof newVal !== typeof oldVal || newVal !== oldVal){
            //overwrite
            attrs[aName] = newVal;
          }else{
            //parse
            attrs[aName] = parseValue(
              oldVal,
              this.options.parseAttributeValue,
              this.options.numberParseOptions
            );
          }
        } else if (this.options.allowBooleanAttributes) {
          attrs[aName] = true;
        }
      }
    }
    if (!Object.keys(attrs).length) {
      return;
    }
    if (this.options.attributesGroupName) {
      const attrCollection = {};
      attrCollection[this.options.attributesGroupName] = attrs;
      return attrCollection;
    }
    return attrs
  }
}

const parseXml = function(xmlData) {
  xmlData = xmlData.replace(/\r\n?/g, "\n"); //TODO: remove this line
  const xmlObj = new xmlNode('!xml');
  let currentNode = xmlObj;
  let textData = "";
  let jPath = "";
  for(let i=0; i< xmlData.length; i++){//for each char in XML data
    const ch = xmlData[i];
    if(ch === '<'){
      // const nextIndex = i+1;
      // const _2ndChar = xmlData[nextIndex];
      if( xmlData[i+1] === '/') {//Closing Tag
        const closeIndex = findClosingIndex(xmlData, ">", i, "Closing Tag is not closed.")
        let tagName = xmlData.substring(i+2,closeIndex).trim();

        if(this.options.removeNSPrefix){
          const colonIndex = tagName.indexOf(":");
          if(colonIndex !== -1){
            tagName = tagName.substr(colonIndex+1);
          }
        }

        if(this.options.transformTagName) {
          tagName = this.options.transformTagName(tagName);
        }

        if(currentNode){
          textData = this.saveTextToParentTag(textData, currentNode, jPath);
        }

        //check if last tag of nested tag was unpaired tag
        const lastTagName = jPath.substring(jPath.lastIndexOf(".")+1);
        if(tagName && this.options.unpairedTags.indexOf(tagName) !== -1 ){
          throw new Error(`Unpaired tag can not be used as closing tag: </${tagName}>`);
        }
        let propIndex = 0
        if(lastTagName && this.options.unpairedTags.indexOf(lastTagName) !== -1 ){
          propIndex = jPath.lastIndexOf('.', jPath.lastIndexOf('.')-1)
          this.tagsNodeStack.pop();
        }else{
          propIndex = jPath.lastIndexOf(".");
        }
        jPath = jPath.substring(0, propIndex);

        currentNode = this.tagsNodeStack.pop();//avoid recursion, set the parent tag scope
        textData = "";
        i = closeIndex;
      } else if( xmlData[i+1] === '?') {

        let tagData = readTagExp(xmlData,i, false, "?>");
        if(!tagData) throw new Error("Pi Tag is not closed.");

        textData = this.saveTextToParentTag(textData, currentNode, jPath);
        if( (this.options.ignoreDeclaration && tagData.tagName === "?xml") || this.options.ignorePiTags){

        }else{
  
          const childNode = new xmlNode(tagData.tagName);
          childNode.add(this.options.textNodeName, "");
          
          if(tagData.tagName !== tagData.tagExp && tagData.attrExpPresent){
            childNode[":@"] = this.buildAttributesMap(tagData.tagExp, jPath, tagData.tagName);
          }
          this.addChild(currentNode, childNode, jPath)

        }


        i = tagData.closeIndex + 1;
      } else if(xmlData.substr(i + 1, 3) === '!--') {
        const endIndex = findClosingIndex(xmlData, "-->", i+4, "Comment is not closed.")
        if(this.options.commentPropName){
          const comment = xmlData.substring(i + 4, endIndex - 2);

          textData = this.saveTextToParentTag(textData, currentNode, jPath);

          currentNode.add(this.options.commentPropName, [ { [this.options.textNodeName] : comment } ]);
        }
        i = endIndex;
      } else if( xmlData.substr(i + 1, 2) === '!D') {
        const result = readDocType(xmlData, i);
        this.docTypeEntities = result.entities;
        i = result.i;
      }else if(xmlData.substr(i + 1, 2) === '![') {
        const closeIndex = findClosingIndex(xmlData, "]]>", i, "CDATA is not closed.") - 2;
        const tagExp = xmlData.substring(i + 9,closeIndex);

        textData = this.saveTextToParentTag(textData, currentNode, jPath);

        //cdata should be set even if it is 0 length string
        if(this.options.cdataPropName){
          // let val = this.parseTextData(tagExp, this.options.cdataPropName, jPath + "." + this.options.cdataPropName, true, false, true);
          // if(!val) val = "";
          currentNode.add(this.options.cdataPropName, [ { [this.options.textNodeName] : tagExp } ]);
        }else{
          let val = this.parseTextData(tagExp, currentNode.tagname, jPath, true, false, true);
          if(val == undefined) val = "";
          currentNode.add(this.options.textNodeName, val);
        }
        
        i = closeIndex + 2;
      }else {//Opening tag
        let result = readTagExp(xmlData,i, this.options.removeNSPrefix);
        let tagName= result.tagName;
        let tagExp = result.tagExp;
        let attrExpPresent = result.attrExpPresent;
        let closeIndex = result.closeIndex;

        if (this.options.transformTagName) {
          tagName = this.options.transformTagName(tagName);
        }
        
        //save text as child node
        if (currentNode && textData) {
          if(currentNode.tagname !== '!xml'){
            //when nested tag is found
            textData = this.saveTextToParentTag(textData, currentNode, jPath, false);
          }
        }

        //check if last tag was unpaired tag
        const lastTag = currentNode;
        if(lastTag && this.options.unpairedTags.indexOf(lastTag.tagname) !== -1 ){
          currentNode = this.tagsNodeStack.pop();
          jPath = jPath.substring(0, jPath.lastIndexOf("."));
        }
        if(tagName !== xmlObj.tagname){
          jPath += jPath ? "." + tagName : tagName;
        }
        if (this.isItStopNode(this.options.stopNodes, jPath, tagName)) { //TODO: namespace
          let tagContent = "";
          //self-closing tag
          if(tagExp.length > 0 && tagExp.lastIndexOf("/") === tagExp.length - 1){
            i = result.closeIndex;
          }
          //unpaired tag
          else if(this.options.unpairedTags.indexOf(tagName) !== -1){
            i = result.closeIndex;
          }
          //normal tag
          else{
            //read until closing tag is found
            const result = this.readStopNodeData(xmlData, tagName, closeIndex + 1);
            if(!result) throw new Error(`Unexpected end of ${tagName}`);
            i = result.i;
            tagContent = result.tagContent;
          }

          const childNode = new xmlNode(tagName);
          if(tagName !== tagExp && attrExpPresent){
            childNode[":@"] = this.buildAttributesMap(tagExp, jPath, tagName);
          }
          if(tagContent) {
            tagContent = this.parseTextData(tagContent, tagName, jPath, true, attrExpPresent, true, true);
          }
          
          jPath = jPath.substr(0, jPath.lastIndexOf("."));
          childNode.add(this.options.textNodeName, tagContent);
          
          this.addChild(currentNode, childNode, jPath)
        }else{
  //selfClosing tag
          if(tagExp.length > 0 && tagExp.lastIndexOf("/") === tagExp.length - 1){
            if(tagName[tagName.length - 1] === "/"){ //remove trailing '/'
              tagName = tagName.substr(0, tagName.length - 1);
              tagExp = tagName;
            }else{
              tagExp = tagExp.substr(0, tagExp.length - 1);
            }
            
            if(this.options.transformTagName) {
              tagName = this.options.transformTagName(tagName);
            }

            const childNode = new xmlNode(tagName);
            if(tagName !== tagExp && attrExpPresent){
              childNode[":@"] = this.buildAttributesMap(tagExp, jPath, tagName);
            }
            this.addChild(currentNode, childNode, jPath)
            jPath = jPath.substr(0, jPath.lastIndexOf("."));
          }
    //opening tag
          else{
            const childNode = new xmlNode( tagName);
            this.tagsNodeStack.push(currentNode);
            
            if(tagName !== tagExp && attrExpPresent){
              childNode[":@"] = this.buildAttributesMap(tagExp, jPath, tagName);
            }
            this.addChild(currentNode, childNode, jPath)
            currentNode = childNode;
          }
          textData = "";
          i = closeIndex;
        }
      }
    }else{
      textData += xmlData[i];
    }
  }
  return xmlObj.child;
}

function addChild(currentNode, childNode, jPath){
  const result = this.options.updateTag(childNode.tagname, jPath, childNode[":@"])
  if(result === false){
  }else if(typeof result === "string"){
    childNode.tagname = result
    currentNode.addChild(childNode);
  }else{
    currentNode.addChild(childNode);
  }
}

const replaceEntitiesValue = function(val){

  if(this.options.processEntities){
    for(let entityName in this.docTypeEntities){
      const entity = this.docTypeEntities[entityName];
      val = val.replace( entity.regx, entity.val);
    }
    for(let entityName in this.lastEntities){
      const entity = this.lastEntities[entityName];
      val = val.replace( entity.regex, entity.val);
    }
    if(this.options.htmlEntities){
      for(let entityName in this.htmlEntities){
        const entity = this.htmlEntities[entityName];
        val = val.replace( entity.regex, entity.val);
      }
    }
    val = val.replace( this.ampEntity.regex, this.ampEntity.val);
  }
  return val;
}
function saveTextToParentTag(textData, currentNode, jPath, isLeafNode) {
  if (textData) { //store previously collected data as textNode
    if(isLeafNode === undefined) isLeafNode = Object.keys(currentNode.child).length === 0
    
    textData = this.parseTextData(textData,
      currentNode.tagname,
      jPath,
      false,
      currentNode[":@"] ? Object.keys(currentNode[":@"]).length !== 0 : false,
      isLeafNode);

    if (textData !== undefined && textData !== "")
      currentNode.add(this.options.textNodeName, textData);
    textData = "";
  }
  return textData;
}

//TODO: use jPath to simplify the logic
/**
 * 
 * @param {string[]} stopNodes 
 * @param {string} jPath
 * @param {string} currentTagName 
 */
function isItStopNode(stopNodes, jPath, currentTagName){
  const allNodesExp = "*." + currentTagName;
  for (const stopNodePath in stopNodes) {
    const stopNodeExp = stopNodes[stopNodePath];
    if( allNodesExp === stopNodeExp || jPath === stopNodeExp  ) return true;
  }
  return false;
}

/**
 * Returns the tag Expression and where it is ending handling single-double quotes situation
 * @param {string} xmlData 
 * @param {number} i starting index
 * @returns 
 */
function tagExpWithClosingIndex(xmlData, i, closingChar = ">"){
  let attrBoundary;
  let tagExp = "";
  for (let index = i; index < xmlData.length; index++) {
    let ch = xmlData[index];
    if (attrBoundary) {
        if (ch === attrBoundary) attrBoundary = "";//reset
    } else if (ch === '"' || ch === "'") {
        attrBoundary = ch;
    } else if (ch === closingChar[0]) {
      if(closingChar[1]){
        if(xmlData[index + 1] === closingChar[1]){
          return {
            data: tagExp,
            index: index
          }
        }
      }else{
        return {
          data: tagExp,
          index: index
        }
      }
    } else if (ch === '\t') {
      ch = " "
    }
    tagExp += ch;
  }
}

function findClosingIndex(xmlData, str, i, errMsg){
  const closingIndex = xmlData.indexOf(str, i);
  if(closingIndex === -1){
    throw new Error(errMsg)
  }else{
    return closingIndex + str.length - 1;
  }
}

function readTagExp(xmlData,i, removeNSPrefix, closingChar = ">"){
  const result = tagExpWithClosingIndex(xmlData, i+1, closingChar);
  if(!result) return;
  let tagExp = result.data;
  const closeIndex = result.index;
  const separatorIndex = tagExp.search(/\s/);
  let tagName = tagExp;
  let attrExpPresent = true;
  if(separatorIndex !== -1){//separate tag name and attributes expression
    tagName = tagExp.substr(0, separatorIndex).replace(/\s\s*$/, '');
    tagExp = tagExp.substr(separatorIndex + 1);
  }

  if(removeNSPrefix){
    const colonIndex = tagName.indexOf(":");
    if(colonIndex !== -1){
      tagName = tagName.substr(colonIndex+1);
      attrExpPresent = tagName !== result.data.substr(colonIndex + 1);
    }
  }

  return {
    tagName: tagName,
    tagExp: tagExp,
    closeIndex: closeIndex,
    attrExpPresent: attrExpPresent,
  }
}
/**
 * find paired tag for a stop node
 * @param {string} xmlData 
 * @param {string} tagName 
 * @param {number} i 
 */
function readStopNodeData(xmlData, tagName, i){
  const startIndex = i;
  // Starting at 1 since we already have an open tag
  let openTagCount = 1;

  for (; i < xmlData.length; i++) {
    if( xmlData[i] === "<"){ 
      if (xmlData[i+1] === "/") {//close tag
          const closeIndex = findClosingIndex(xmlData, ">", i, `${tagName} is not closed`);
          let closeTagName = xmlData.substring(i+2,closeIndex).trim();
          if(closeTagName === tagName){
            openTagCount--;
            if (openTagCount === 0) {
              return {
                tagContent: xmlData.substring(startIndex, i),
                i : closeIndex
              }
            }
          }
          i=closeIndex;
        } else if(xmlData[i+1] === '?') { 
          const closeIndex = findClosingIndex(xmlData, "?>", i+1, "StopNode is not closed.")
          i=closeIndex;
        } else if(xmlData.substr(i + 1, 3) === '!--') { 
          const closeIndex = findClosingIndex(xmlData, "-->", i+3, "StopNode is not closed.")
          i=closeIndex;
        } else if(xmlData.substr(i + 1, 2) === '![') { 
          const closeIndex = findClosingIndex(xmlData, "]]>", i, "StopNode is not closed.") - 2;
          i=closeIndex;
        } else {
          const tagData = readTagExp(xmlData, i, '>')

          if (tagData) {
            const openTagName = tagData && tagData.tagName;
            if (openTagName === tagName && tagData.tagExp[tagData.tagExp.length-1] !== "/") {
              openTagCount++;
            }
            i=tagData.closeIndex;
          }
        }
      }
  }//end for loop
}

function parseValue(val, shouldParse, options) {
  if (shouldParse && typeof val === 'string') {
    //console.log(options)
    const newval = val.trim();
    if(newval === 'true' ) return true;
    else if(newval === 'false' ) return false;
    else return toNumber(val, options);
  } else {
    if (util.isExist(val)) {
      return val;
    } else {
      return '';
    }
  }
}


module.exports = OrderedObjParser;


/***/ }),
/* 1482 */
/***/ ((module) => {

"use strict";


class XmlNode{
  constructor(tagname) {
    this.tagname = tagname;
    this.child = []; //nested tags, text, cdata, comments in order
    this[":@"] = {}; //attributes map
  }
  add(key,val){
    // this.child.push( {name : key, val: val, isCdata: isCdata });
    if(key === "__proto__") key = "#__proto__";
    this.child.push( {[key]: val });
  }
  addChild(node) {
    if(node.tagname === "__proto__") node.tagname = "#__proto__";
    if(node[":@"] && Object.keys(node[":@"]).length > 0){
      this.child.push( { [node.tagname]: node.child, [":@"]: node[":@"] });
    }else{
      this.child.push( { [node.tagname]: node.child });
    }
  };
};


module.exports = XmlNode;

/***/ }),
/* 1483 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const util = __webpack_require__(1478);

//TODO: handle comments
function readDocType(xmlData, i){
    
    const entities = {};
    if( xmlData[i + 3] === 'O' &&
         xmlData[i + 4] === 'C' &&
         xmlData[i + 5] === 'T' &&
         xmlData[i + 6] === 'Y' &&
         xmlData[i + 7] === 'P' &&
         xmlData[i + 8] === 'E')
    {    
        i = i+9;
        let angleBracketsCount = 1;
        let hasBody = false, comment = false;
        let exp = "";
        for(;i<xmlData.length;i++){
            if (xmlData[i] === '<' && !comment) { //Determine the tag type
                if( hasBody && isEntity(xmlData, i)){
                    i += 7; 
                    [entityName, val,i] = readEntityExp(xmlData,i+1);
                    if(val.indexOf("&") === -1) //Parameter entities are not supported
                        entities[ validateEntityName(entityName) ] = {
                            regx : RegExp( `&${entityName};`,"g"),
                            val: val
                        };
                }
                else if( hasBody && isElement(xmlData, i))  i += 8;//Not supported
                else if( hasBody && isAttlist(xmlData, i))  i += 8;//Not supported
                else if( hasBody && isNotation(xmlData, i)) i += 9;//Not supported
                else if( isComment)                         comment = true;
                else                                        throw new Error("Invalid DOCTYPE");

                angleBracketsCount++;
                exp = "";
            } else if (xmlData[i] === '>') { //Read tag content
                if(comment){
                    if( xmlData[i - 1] === "-" && xmlData[i - 2] === "-"){
                        comment = false;
                        angleBracketsCount--;
                    }
                }else{
                    angleBracketsCount--;
                }
                if (angleBracketsCount === 0) {
                  break;
                }
            }else if( xmlData[i] === '['){
                hasBody = true;
            }else{
                exp += xmlData[i];
            }
        }
        if(angleBracketsCount !== 0){
            throw new Error(`Unclosed DOCTYPE`);
        }
    }else{
        throw new Error(`Invalid Tag instead of DOCTYPE`);
    }
    return {entities, i};
}

function readEntityExp(xmlData,i){
    //External entities are not supported
    //    <!ENTITY ext SYSTEM "http://normal-website.com" >

    //Parameter entities are not supported
    //    <!ENTITY entityname "&anotherElement;">

    //Internal entities are supported
    //    <!ENTITY entityname "replacement text">
    
    //read EntityName
    let entityName = "";
    for (; i < xmlData.length && (xmlData[i] !== "'" && xmlData[i] !== '"' ); i++) {
        // if(xmlData[i] === " ") continue;
        // else 
        entityName += xmlData[i];
    }
    entityName = entityName.trim();
    if(entityName.indexOf(" ") !== -1) throw new Error("External entites are not supported");

    //read Entity Value
    const startChar = xmlData[i++];
    let val = ""
    for (; i < xmlData.length && xmlData[i] !== startChar ; i++) {
        val += xmlData[i];
    }
    return [entityName, val, i];
}

function isComment(xmlData, i){
    if(xmlData[i+1] === '!' &&
    xmlData[i+2] === '-' &&
    xmlData[i+3] === '-') return true
    return false
}
function isEntity(xmlData, i){
    if(xmlData[i+1] === '!' &&
    xmlData[i+2] === 'E' &&
    xmlData[i+3] === 'N' &&
    xmlData[i+4] === 'T' &&
    xmlData[i+5] === 'I' &&
    xmlData[i+6] === 'T' &&
    xmlData[i+7] === 'Y') return true
    return false
}
function isElement(xmlData, i){
    if(xmlData[i+1] === '!' &&
    xmlData[i+2] === 'E' &&
    xmlData[i+3] === 'L' &&
    xmlData[i+4] === 'E' &&
    xmlData[i+5] === 'M' &&
    xmlData[i+6] === 'E' &&
    xmlData[i+7] === 'N' &&
    xmlData[i+8] === 'T') return true
    return false
}

function isAttlist(xmlData, i){
    if(xmlData[i+1] === '!' &&
    xmlData[i+2] === 'A' &&
    xmlData[i+3] === 'T' &&
    xmlData[i+4] === 'T' &&
    xmlData[i+5] === 'L' &&
    xmlData[i+6] === 'I' &&
    xmlData[i+7] === 'S' &&
    xmlData[i+8] === 'T') return true
    return false
}
function isNotation(xmlData, i){
    if(xmlData[i+1] === '!' &&
    xmlData[i+2] === 'N' &&
    xmlData[i+3] === 'O' &&
    xmlData[i+4] === 'T' &&
    xmlData[i+5] === 'A' &&
    xmlData[i+6] === 'T' &&
    xmlData[i+7] === 'I' &&
    xmlData[i+8] === 'O' &&
    xmlData[i+9] === 'N') return true
    return false
}

function validateEntityName(name){
    if (util.isName(name))
	return name;
    else
        throw new Error(`Invalid entity name ${name}`);
}

module.exports = readDocType;


/***/ }),
/* 1484 */
/***/ ((__unused_webpack_module, exports) => {

"use strict";


/**
 * 
 * @param {array} node 
 * @param {any} options 
 * @returns 
 */
function prettify(node, options){
  return compress( node, options);
}

/**
 * 
 * @param {array} arr 
 * @param {object} options 
 * @param {string} jPath 
 * @returns object
 */
function compress(arr, options, jPath){
  let text;
  const compressedObj = {};
  for (let i = 0; i < arr.length; i++) {
    const tagObj = arr[i];
    const property = propName(tagObj);
    let newJpath = "";
    if(jPath === undefined) newJpath = property;
    else newJpath = jPath + "." + property;

    if(property === options.textNodeName){
      if(text === undefined) text = tagObj[property];
      else text += "" + tagObj[property];
    }else if(property === undefined){
      continue;
    }else if(tagObj[property]){
      
      let val = compress(tagObj[property], options, newJpath);
      const isLeaf = isLeafTag(val, options);

      if(tagObj[":@"]){
        assignAttributes( val, tagObj[":@"], newJpath, options);
      }else if(Object.keys(val).length === 1 && val[options.textNodeName] !== undefined && !options.alwaysCreateTextNode){
        val = val[options.textNodeName];
      }else if(Object.keys(val).length === 0){
        if(options.alwaysCreateTextNode) val[options.textNodeName] = "";
        else val = "";
      }

      if(compressedObj[property] !== undefined && compressedObj.hasOwnProperty(property)) {
        if(!Array.isArray(compressedObj[property])) {
            compressedObj[property] = [ compressedObj[property] ];
        }
        compressedObj[property].push(val);
      }else{
        //TODO: if a node is not an array, then check if it should be an array
        //also determine if it is a leaf node
        if (options.isArray(property, newJpath, isLeaf )) {
          compressedObj[property] = [val];
        }else{
          compressedObj[property] = val;
        }
      }
    }
    
  }
  // if(text && text.length > 0) compressedObj[options.textNodeName] = text;
  if(typeof text === "string"){
    if(text.length > 0) compressedObj[options.textNodeName] = text;
  }else if(text !== undefined) compressedObj[options.textNodeName] = text;
  return compressedObj;
}

function propName(obj){
  const keys = Object.keys(obj);
  for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
    if(key !== ":@") return key;
  }
}

function assignAttributes(obj, attrMap, jpath, options){
  if (attrMap) {
    const keys = Object.keys(attrMap);
    const len = keys.length; //don't make it inline
    for (let i = 0; i < len; i++) {
      const atrrName = keys[i];
      if (options.isArray(atrrName, jpath + "." + atrrName, true, true)) {
        obj[atrrName] = [ attrMap[atrrName] ];
      } else {
        obj[atrrName] = attrMap[atrrName];
      }
    }
  }
}

function isLeafTag(obj, options){
  const { textNodeName } = options;
  const propCount = Object.keys(obj).length;
  
  if (propCount === 0) {
    return true;
  }

  if (
    propCount === 1 &&
    (obj[textNodeName] || typeof obj[textNodeName] === "boolean" || obj[textNodeName] === 0)
  ) {
    return true;
  }

  return false;
}
exports.prettify = prettify;


/***/ }),
/* 1485 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

//parse Empty Node as self closing node
const buildFromOrderedJs = __webpack_require__(1486);

const defaultOptions = {
  attributeNamePrefix: '@_',
  attributesGroupName: false,
  textNodeName: '#text',
  ignoreAttributes: true,
  cdataPropName: false,
  format: false,
  indentBy: '  ',
  suppressEmptyNode: false,
  suppressUnpairedNode: true,
  suppressBooleanAttributes: true,
  tagValueProcessor: function(key, a) {
    return a;
  },
  attributeValueProcessor: function(attrName, a) {
    return a;
  },
  preserveOrder: false,
  commentPropName: false,
  unpairedTags: [],
  entities: [
    { regex: new RegExp("&", "g"), val: "&amp;" },//it must be on top
    { regex: new RegExp(">", "g"), val: "&gt;" },
    { regex: new RegExp("<", "g"), val: "&lt;" },
    { regex: new RegExp("\'", "g"), val: "&apos;" },
    { regex: new RegExp("\"", "g"), val: "&quot;" }
  ],
  processEntities: true,
  stopNodes: [],
  // transformTagName: false,
  // transformAttributeName: false,
  oneListGroup: false
};

function Builder(options) {
  this.options = Object.assign({}, defaultOptions, options);
  if (this.options.ignoreAttributes || this.options.attributesGroupName) {
    this.isAttribute = function(/*a*/) {
      return false;
    };
  } else {
    this.attrPrefixLen = this.options.attributeNamePrefix.length;
    this.isAttribute = isAttribute;
  }

  this.processTextOrObjNode = processTextOrObjNode

  if (this.options.format) {
    this.indentate = indentate;
    this.tagEndChar = '>\n';
    this.newLine = '\n';
  } else {
    this.indentate = function() {
      return '';
    };
    this.tagEndChar = '>';
    this.newLine = '';
  }
}

Builder.prototype.build = function(jObj) {
  if(this.options.preserveOrder){
    return buildFromOrderedJs(jObj, this.options);
  }else {
    if(Array.isArray(jObj) && this.options.arrayNodeName && this.options.arrayNodeName.length > 1){
      jObj = {
        [this.options.arrayNodeName] : jObj
      }
    }
    return this.j2x(jObj, 0).val;
  }
};

Builder.prototype.j2x = function(jObj, level) {
  let attrStr = '';
  let val = '';
  for (let key in jObj) {
    if (typeof jObj[key] === 'undefined') {
      // supress undefined node
    } else if (jObj[key] === null) {
      if(key[0] === "?") val += this.indentate(level) + '<' + key + '?' + this.tagEndChar;
      else val += this.indentate(level) + '<' + key + '/' + this.tagEndChar;
      // val += this.indentate(level) + '<' + key + '/' + this.tagEndChar;
    } else if (jObj[key] instanceof Date) {
      val += this.buildTextValNode(jObj[key], key, '', level);
    } else if (typeof jObj[key] !== 'object') {
      //premitive type
      const attr = this.isAttribute(key);
      if (attr) {
        attrStr += this.buildAttrPairStr(attr, '' + jObj[key]);
      }else {
        //tag value
        if (key === this.options.textNodeName) {
          let newval = this.options.tagValueProcessor(key, '' + jObj[key]);
          val += this.replaceEntitiesValue(newval);
        } else {
          val += this.buildTextValNode(jObj[key], key, '', level);
        }
      }
    } else if (Array.isArray(jObj[key])) {
      //repeated nodes
      const arrLen = jObj[key].length;
      let listTagVal = "";
      for (let j = 0; j < arrLen; j++) {
        const item = jObj[key][j];
        if (typeof item === 'undefined') {
          // supress undefined node
        } else if (item === null) {
          if(key[0] === "?") val += this.indentate(level) + '<' + key + '?' + this.tagEndChar;
          else val += this.indentate(level) + '<' + key + '/' + this.tagEndChar;
          // val += this.indentate(level) + '<' + key + '/' + this.tagEndChar;
        } else if (typeof item === 'object') {
          if(this.options.oneListGroup ){
            listTagVal += this.j2x(item, level + 1).val;
          }else{
            listTagVal += this.processTextOrObjNode(item, key, level)
          }
        } else {
          listTagVal += this.buildTextValNode(item, key, '', level);
        }
      }
      if(this.options.oneListGroup){
        listTagVal = this.buildObjectNode(listTagVal, key, '', level);
      }
      val += listTagVal;
    } else {
      //nested node
      if (this.options.attributesGroupName && key === this.options.attributesGroupName) {
        const Ks = Object.keys(jObj[key]);
        const L = Ks.length;
        for (let j = 0; j < L; j++) {
          attrStr += this.buildAttrPairStr(Ks[j], '' + jObj[key][Ks[j]]);
        }
      } else {
        val += this.processTextOrObjNode(jObj[key], key, level)
      }
    }
  }
  return {attrStr: attrStr, val: val};
};

Builder.prototype.buildAttrPairStr = function(attrName, val){
  val = this.options.attributeValueProcessor(attrName, '' + val);
  val = this.replaceEntitiesValue(val);
  if (this.options.suppressBooleanAttributes && val === "true") {
    return ' ' + attrName;
  } else return ' ' + attrName + '="' + val + '"';
}

function processTextOrObjNode (object, key, level) {
  const result = this.j2x(object, level + 1);
  if (object[this.options.textNodeName] !== undefined && Object.keys(object).length === 1) {
    return this.buildTextValNode(object[this.options.textNodeName], key, result.attrStr, level);
  } else {
    return this.buildObjectNode(result.val, key, result.attrStr, level);
  }
}

Builder.prototype.buildObjectNode = function(val, key, attrStr, level) {
  if(val === ""){
    if(key[0] === "?") return  this.indentate(level) + '<' + key + attrStr+ '?' + this.tagEndChar;
    else {
      return this.indentate(level) + '<' + key + attrStr + this.closeTag(key) + this.tagEndChar;
    }
  }else{

    let tagEndExp = '</' + key + this.tagEndChar;
    let piClosingChar = "";
    
    if(key[0] === "?") {
      piClosingChar = "?";
      tagEndExp = "";
    }
  
    if (attrStr && val.indexOf('<') === -1) {
      return ( this.indentate(level) + '<' +  key + attrStr + piClosingChar + '>' + val + tagEndExp );
    } else if (this.options.commentPropName !== false && key === this.options.commentPropName && piClosingChar.length === 0) {
      return this.indentate(level) + `<!--${val}-->` + this.newLine;
    }else {
      return (
        this.indentate(level) + '<' + key + attrStr + piClosingChar + this.tagEndChar +
        val +
        this.indentate(level) + tagEndExp    );
    }
  }
}

Builder.prototype.closeTag = function(key){
  let closeTag = "";
  if(this.options.unpairedTags.indexOf(key) !== -1){ //unpaired
    if(!this.options.suppressUnpairedNode) closeTag = "/"
  }else if(this.options.suppressEmptyNode){ //empty
    closeTag = "/";
  }else{
    closeTag = `></${key}`
  }
  return closeTag;
}

function buildEmptyObjNode(val, key, attrStr, level) {
  if (val !== '') {
    return this.buildObjectNode(val, key, attrStr, level);
  } else {
    if(key[0] === "?") return  this.indentate(level) + '<' + key + attrStr+ '?' + this.tagEndChar;
    else {
      return  this.indentate(level) + '<' + key + attrStr + '/' + this.tagEndChar;
      // return this.buildTagStr(level,key, attrStr);
    }
  }
}

Builder.prototype.buildTextValNode = function(val, key, attrStr, level) {
  if (this.options.cdataPropName !== false && key === this.options.cdataPropName) {
    return this.indentate(level) + `<![CDATA[${val}]]>` +  this.newLine;
  }else if (this.options.commentPropName !== false && key === this.options.commentPropName) {
    return this.indentate(level) + `<!--${val}-->` +  this.newLine;
  }else if(key[0] === "?") {//PI tag
    return  this.indentate(level) + '<' + key + attrStr+ '?' + this.tagEndChar; 
  }else{
    let textValue = this.options.tagValueProcessor(key, val);
    textValue = this.replaceEntitiesValue(textValue);
  
    if( textValue === ''){
      return this.indentate(level) + '<' + key + attrStr + this.closeTag(key) + this.tagEndChar;
    }else{
      return this.indentate(level) + '<' + key + attrStr + '>' +
         textValue +
        '</' + key + this.tagEndChar;
    }
  }
}

Builder.prototype.replaceEntitiesValue = function(textValue){
  if(textValue && textValue.length > 0 && this.options.processEntities){
    for (let i=0; i<this.options.entities.length; i++) {
      const entity = this.options.entities[i];
      textValue = textValue.replace(entity.regex, entity.val);
    }
  }
  return textValue;
}

function indentate(level) {
  return this.options.indentBy.repeat(level);
}

function isAttribute(name /*, options*/) {
  if (name.startsWith(this.options.attributeNamePrefix)) {
    return name.substr(this.attrPrefixLen);
  } else {
    return false;
  }
}

module.exports = Builder;


/***/ }),
/* 1486 */
/***/ ((module) => {

const EOL = "\n";

/**
 * 
 * @param {array} jArray 
 * @param {any} options 
 * @returns 
 */
function toXml(jArray, options) {
    let indentation = "";
    if (options.format && options.indentBy.length > 0) {
        indentation = EOL;
    }
    return arrToStr(jArray, options, "", indentation);
}

function arrToStr(arr, options, jPath, indentation) {
    let xmlStr = "";
    let isPreviousElementTag = false;

    for (let i = 0; i < arr.length; i++) {
        const tagObj = arr[i];
        const tagName = propName(tagObj);
        let newJPath = "";
        if (jPath.length === 0) newJPath = tagName
        else newJPath = `${jPath}.${tagName}`;

        if (tagName === options.textNodeName) {
            let tagText = tagObj[tagName];
            if (!isStopNode(newJPath, options)) {
                tagText = options.tagValueProcessor(tagName, tagText);
                tagText = replaceEntitiesValue(tagText, options);
            }
            if (isPreviousElementTag) {
                xmlStr += indentation;
            }
            xmlStr += tagText;
            isPreviousElementTag = false;
            continue;
        } else if (tagName === options.cdataPropName) {
            if (isPreviousElementTag) {
                xmlStr += indentation;
            }
            xmlStr += `<![CDATA[${tagObj[tagName][0][options.textNodeName]}]]>`;
            isPreviousElementTag = false;
            continue;
        } else if (tagName === options.commentPropName) {
            xmlStr += indentation + `<!--${tagObj[tagName][0][options.textNodeName]}-->`;
            isPreviousElementTag = true;
            continue;
        } else if (tagName[0] === "?") {
            const attStr = attr_to_str(tagObj[":@"], options);
            const tempInd = tagName === "?xml" ? "" : indentation;
            let piTextNodeName = tagObj[tagName][0][options.textNodeName];
            piTextNodeName = piTextNodeName.length !== 0 ? " " + piTextNodeName : ""; //remove extra spacing
            xmlStr += tempInd + `<${tagName}${piTextNodeName}${attStr}?>`;
            isPreviousElementTag = true;
            continue;
        }
        let newIdentation = indentation;
        if (newIdentation !== "") {
            newIdentation += options.indentBy;
        }
        const attStr = attr_to_str(tagObj[":@"], options);
        const tagStart = indentation + `<${tagName}${attStr}`;
        const tagValue = arrToStr(tagObj[tagName], options, newJPath, newIdentation);
        if (options.unpairedTags.indexOf(tagName) !== -1) {
            if (options.suppressUnpairedNode) xmlStr += tagStart + ">";
            else xmlStr += tagStart + "/>";
        } else if ((!tagValue || tagValue.length === 0) && options.suppressEmptyNode) {
            xmlStr += tagStart + "/>";
        } else if (tagValue && tagValue.endsWith(">")) {
            xmlStr += tagStart + `>${tagValue}${indentation}</${tagName}>`;
        } else {
            xmlStr += tagStart + ">";
            if (tagValue && indentation !== "" && (tagValue.includes("/>") || tagValue.includes("</"))) {
                xmlStr += indentation + options.indentBy + tagValue + indentation;
            } else {
                xmlStr += tagValue;
            }
            xmlStr += `</${tagName}>`;
        }
        isPreviousElementTag = true;
    }

    return xmlStr;
}

function propName(obj) {
    const keys = Object.keys(obj);
    for (let i = 0; i < keys.length; i++) {
        const key = keys[i];
        if (key !== ":@") return key;
    }
}

function attr_to_str(attrMap, options) {
    let attrStr = "";
    if (attrMap && !options.ignoreAttributes) {
        for (let attr in attrMap) {
            let attrVal = options.attributeValueProcessor(attr, attrMap[attr]);
            attrVal = replaceEntitiesValue(attrVal, options);
            if (attrVal === true && options.suppressBooleanAttributes) {
                attrStr += ` ${attr.substr(options.attributeNamePrefix.length)}`;
            } else {
                attrStr += ` ${attr.substr(options.attributeNamePrefix.length)}="${attrVal}"`;
            }
        }
    }
    return attrStr;
}

function isStopNode(jPath, options) {
    jPath = jPath.substr(0, jPath.length - options.textNodeName.length - 1);
    let tagName = jPath.substr(jPath.lastIndexOf(".") + 1);
    for (let index in options.stopNodes) {
        if (options.stopNodes[index] === jPath || options.stopNodes[index] === "*." + tagName) return true;
    }
    return false;
}

function replaceEntitiesValue(textValue, options) {
    if (textValue && textValue.length > 0 && options.processEntities) {
        for (let i = 0; i < options.entities.length; i++) {
            const entity = options.entities[i];
            textValue = textValue.replace(entity.regex, entity.val);
        }
    }
    return textValue;
}
module.exports = toXml;


/***/ }),
/* 1487 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   collectBodyString: () => (/* binding */ collectBodyString)
/* harmony export */ });
/* harmony import */ var _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1344);

const collectBodyString = (streamBody, context) => (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_0__.collectBody)(streamBody, context).then((body) => context.utf8Encoder(body));


/***/ }),
/* 1488 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $Command: () => (/* reexport safe */ _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_2__.Command),
/* harmony export */   AssumeRoleWithSAMLCommand: () => (/* binding */ AssumeRoleWithSAMLCommand)
/* harmony export */ });
/* harmony import */ var _smithy_middleware_endpoint__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1287);
/* harmony import */ var _smithy_middleware_serde__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1306);
/* harmony import */ var _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1344);
/* harmony import */ var _endpoint_EndpointParameters__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1410);
/* harmony import */ var _models_models_0__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1472);
/* harmony import */ var _protocols_Aws_query__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1474);







class AssumeRoleWithSAMLCommand extends _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_2__.Command
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
    .s("AWSSecurityTokenServiceV20110615", "AssumeRoleWithSAML", {})
    .n("STSClient", "AssumeRoleWithSAMLCommand")
    .f(_models_models_0__WEBPACK_IMPORTED_MODULE_4__.AssumeRoleWithSAMLRequestFilterSensitiveLog, _models_models_0__WEBPACK_IMPORTED_MODULE_4__.AssumeRoleWithSAMLResponseFilterSensitiveLog)
    .ser(_protocols_Aws_query__WEBPACK_IMPORTED_MODULE_5__.se_AssumeRoleWithSAMLCommand)
    .de(_protocols_Aws_query__WEBPACK_IMPORTED_MODULE_5__.de_AssumeRoleWithSAMLCommand)
    .build() {
}


/***/ }),
/* 1489 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $Command: () => (/* reexport safe */ _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_2__.Command),
/* harmony export */   AssumeRoleWithWebIdentityCommand: () => (/* binding */ AssumeRoleWithWebIdentityCommand)
/* harmony export */ });
/* harmony import */ var _smithy_middleware_endpoint__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1287);
/* harmony import */ var _smithy_middleware_serde__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1306);
/* harmony import */ var _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1344);
/* harmony import */ var _endpoint_EndpointParameters__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1410);
/* harmony import */ var _models_models_0__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1472);
/* harmony import */ var _protocols_Aws_query__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1474);







class AssumeRoleWithWebIdentityCommand extends _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_2__.Command
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
    .s("AWSSecurityTokenServiceV20110615", "AssumeRoleWithWebIdentity", {})
    .n("STSClient", "AssumeRoleWithWebIdentityCommand")
    .f(_models_models_0__WEBPACK_IMPORTED_MODULE_4__.AssumeRoleWithWebIdentityRequestFilterSensitiveLog, _models_models_0__WEBPACK_IMPORTED_MODULE_4__.AssumeRoleWithWebIdentityResponseFilterSensitiveLog)
    .ser(_protocols_Aws_query__WEBPACK_IMPORTED_MODULE_5__.se_AssumeRoleWithWebIdentityCommand)
    .de(_protocols_Aws_query__WEBPACK_IMPORTED_MODULE_5__.de_AssumeRoleWithWebIdentityCommand)
    .build() {
}


/***/ }),
/* 1490 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $Command: () => (/* reexport safe */ _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_2__.Command),
/* harmony export */   DecodeAuthorizationMessageCommand: () => (/* binding */ DecodeAuthorizationMessageCommand)
/* harmony export */ });
/* harmony import */ var _smithy_middleware_endpoint__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1287);
/* harmony import */ var _smithy_middleware_serde__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1306);
/* harmony import */ var _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1344);
/* harmony import */ var _endpoint_EndpointParameters__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1410);
/* harmony import */ var _protocols_Aws_query__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1474);






class DecodeAuthorizationMessageCommand extends _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_2__.Command
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
    .s("AWSSecurityTokenServiceV20110615", "DecodeAuthorizationMessage", {})
    .n("STSClient", "DecodeAuthorizationMessageCommand")
    .f(void 0, void 0)
    .ser(_protocols_Aws_query__WEBPACK_IMPORTED_MODULE_4__.se_DecodeAuthorizationMessageCommand)
    .de(_protocols_Aws_query__WEBPACK_IMPORTED_MODULE_4__.de_DecodeAuthorizationMessageCommand)
    .build() {
}


/***/ }),
/* 1491 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $Command: () => (/* reexport safe */ _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_2__.Command),
/* harmony export */   GetAccessKeyInfoCommand: () => (/* binding */ GetAccessKeyInfoCommand)
/* harmony export */ });
/* harmony import */ var _smithy_middleware_endpoint__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1287);
/* harmony import */ var _smithy_middleware_serde__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1306);
/* harmony import */ var _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1344);
/* harmony import */ var _endpoint_EndpointParameters__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1410);
/* harmony import */ var _protocols_Aws_query__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1474);






class GetAccessKeyInfoCommand extends _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_2__.Command
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
    .s("AWSSecurityTokenServiceV20110615", "GetAccessKeyInfo", {})
    .n("STSClient", "GetAccessKeyInfoCommand")
    .f(void 0, void 0)
    .ser(_protocols_Aws_query__WEBPACK_IMPORTED_MODULE_4__.se_GetAccessKeyInfoCommand)
    .de(_protocols_Aws_query__WEBPACK_IMPORTED_MODULE_4__.de_GetAccessKeyInfoCommand)
    .build() {
}


/***/ }),
/* 1492 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $Command: () => (/* reexport safe */ _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_2__.Command),
/* harmony export */   GetCallerIdentityCommand: () => (/* binding */ GetCallerIdentityCommand)
/* harmony export */ });
/* harmony import */ var _smithy_middleware_endpoint__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1287);
/* harmony import */ var _smithy_middleware_serde__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1306);
/* harmony import */ var _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1344);
/* harmony import */ var _endpoint_EndpointParameters__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1410);
/* harmony import */ var _protocols_Aws_query__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1474);






class GetCallerIdentityCommand extends _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_2__.Command
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
    .s("AWSSecurityTokenServiceV20110615", "GetCallerIdentity", {})
    .n("STSClient", "GetCallerIdentityCommand")
    .f(void 0, void 0)
    .ser(_protocols_Aws_query__WEBPACK_IMPORTED_MODULE_4__.se_GetCallerIdentityCommand)
    .de(_protocols_Aws_query__WEBPACK_IMPORTED_MODULE_4__.de_GetCallerIdentityCommand)
    .build() {
}


/***/ }),
/* 1493 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $Command: () => (/* reexport safe */ _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_2__.Command),
/* harmony export */   GetFederationTokenCommand: () => (/* binding */ GetFederationTokenCommand)
/* harmony export */ });
/* harmony import */ var _smithy_middleware_endpoint__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1287);
/* harmony import */ var _smithy_middleware_serde__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1306);
/* harmony import */ var _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1344);
/* harmony import */ var _endpoint_EndpointParameters__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1410);
/* harmony import */ var _models_models_0__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1472);
/* harmony import */ var _protocols_Aws_query__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1474);







class GetFederationTokenCommand extends _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_2__.Command
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
    .s("AWSSecurityTokenServiceV20110615", "GetFederationToken", {})
    .n("STSClient", "GetFederationTokenCommand")
    .f(void 0, _models_models_0__WEBPACK_IMPORTED_MODULE_4__.GetFederationTokenResponseFilterSensitiveLog)
    .ser(_protocols_Aws_query__WEBPACK_IMPORTED_MODULE_5__.se_GetFederationTokenCommand)
    .de(_protocols_Aws_query__WEBPACK_IMPORTED_MODULE_5__.de_GetFederationTokenCommand)
    .build() {
}


/***/ }),
/* 1494 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $Command: () => (/* reexport safe */ _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_2__.Command),
/* harmony export */   GetSessionTokenCommand: () => (/* binding */ GetSessionTokenCommand)
/* harmony export */ });
/* harmony import */ var _smithy_middleware_endpoint__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1287);
/* harmony import */ var _smithy_middleware_serde__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1306);
/* harmony import */ var _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1344);
/* harmony import */ var _endpoint_EndpointParameters__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1410);
/* harmony import */ var _models_models_0__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1472);
/* harmony import */ var _protocols_Aws_query__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1474);







class GetSessionTokenCommand extends _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_2__.Command
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
    .s("AWSSecurityTokenServiceV20110615", "GetSessionToken", {})
    .n("STSClient", "GetSessionTokenCommand")
    .f(void 0, _models_models_0__WEBPACK_IMPORTED_MODULE_4__.GetSessionTokenResponseFilterSensitiveLog)
    .ser(_protocols_Aws_query__WEBPACK_IMPORTED_MODULE_5__.se_GetSessionTokenCommand)
    .de(_protocols_Aws_query__WEBPACK_IMPORTED_MODULE_5__.de_GetSessionTokenCommand)
    .build() {
}


/***/ }),
/* 1495 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $Command: () => (/* reexport safe */ _AssumeRoleCommand__WEBPACK_IMPORTED_MODULE_0__.$Command),
/* harmony export */   AssumeRoleCommand: () => (/* reexport safe */ _AssumeRoleCommand__WEBPACK_IMPORTED_MODULE_0__.AssumeRoleCommand),
/* harmony export */   AssumeRoleWithSAMLCommand: () => (/* reexport safe */ _AssumeRoleWithSAMLCommand__WEBPACK_IMPORTED_MODULE_1__.AssumeRoleWithSAMLCommand),
/* harmony export */   AssumeRoleWithWebIdentityCommand: () => (/* reexport safe */ _AssumeRoleWithWebIdentityCommand__WEBPACK_IMPORTED_MODULE_2__.AssumeRoleWithWebIdentityCommand),
/* harmony export */   DecodeAuthorizationMessageCommand: () => (/* reexport safe */ _DecodeAuthorizationMessageCommand__WEBPACK_IMPORTED_MODULE_3__.DecodeAuthorizationMessageCommand),
/* harmony export */   GetAccessKeyInfoCommand: () => (/* reexport safe */ _GetAccessKeyInfoCommand__WEBPACK_IMPORTED_MODULE_4__.GetAccessKeyInfoCommand),
/* harmony export */   GetCallerIdentityCommand: () => (/* reexport safe */ _GetCallerIdentityCommand__WEBPACK_IMPORTED_MODULE_5__.GetCallerIdentityCommand),
/* harmony export */   GetFederationTokenCommand: () => (/* reexport safe */ _GetFederationTokenCommand__WEBPACK_IMPORTED_MODULE_6__.GetFederationTokenCommand),
/* harmony export */   GetSessionTokenCommand: () => (/* reexport safe */ _GetSessionTokenCommand__WEBPACK_IMPORTED_MODULE_7__.GetSessionTokenCommand)
/* harmony export */ });
/* harmony import */ var _AssumeRoleCommand__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1471);
/* harmony import */ var _AssumeRoleWithSAMLCommand__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1488);
/* harmony import */ var _AssumeRoleWithWebIdentityCommand__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1489);
/* harmony import */ var _DecodeAuthorizationMessageCommand__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1490);
/* harmony import */ var _GetAccessKeyInfoCommand__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1491);
/* harmony import */ var _GetCallerIdentityCommand__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1492);
/* harmony import */ var _GetFederationTokenCommand__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1493);
/* harmony import */ var _GetSessionTokenCommand__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1494);










/***/ }),
/* 1496 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AssumeRoleResponseFilterSensitiveLog: () => (/* reexport safe */ _models_0__WEBPACK_IMPORTED_MODULE_0__.AssumeRoleResponseFilterSensitiveLog),
/* harmony export */   AssumeRoleWithSAMLRequestFilterSensitiveLog: () => (/* reexport safe */ _models_0__WEBPACK_IMPORTED_MODULE_0__.AssumeRoleWithSAMLRequestFilterSensitiveLog),
/* harmony export */   AssumeRoleWithSAMLResponseFilterSensitiveLog: () => (/* reexport safe */ _models_0__WEBPACK_IMPORTED_MODULE_0__.AssumeRoleWithSAMLResponseFilterSensitiveLog),
/* harmony export */   AssumeRoleWithWebIdentityRequestFilterSensitiveLog: () => (/* reexport safe */ _models_0__WEBPACK_IMPORTED_MODULE_0__.AssumeRoleWithWebIdentityRequestFilterSensitiveLog),
/* harmony export */   AssumeRoleWithWebIdentityResponseFilterSensitiveLog: () => (/* reexport safe */ _models_0__WEBPACK_IMPORTED_MODULE_0__.AssumeRoleWithWebIdentityResponseFilterSensitiveLog),
/* harmony export */   CredentialsFilterSensitiveLog: () => (/* reexport safe */ _models_0__WEBPACK_IMPORTED_MODULE_0__.CredentialsFilterSensitiveLog),
/* harmony export */   ExpiredTokenException: () => (/* reexport safe */ _models_0__WEBPACK_IMPORTED_MODULE_0__.ExpiredTokenException),
/* harmony export */   GetFederationTokenResponseFilterSensitiveLog: () => (/* reexport safe */ _models_0__WEBPACK_IMPORTED_MODULE_0__.GetFederationTokenResponseFilterSensitiveLog),
/* harmony export */   GetSessionTokenResponseFilterSensitiveLog: () => (/* reexport safe */ _models_0__WEBPACK_IMPORTED_MODULE_0__.GetSessionTokenResponseFilterSensitiveLog),
/* harmony export */   IDPCommunicationErrorException: () => (/* reexport safe */ _models_0__WEBPACK_IMPORTED_MODULE_0__.IDPCommunicationErrorException),
/* harmony export */   IDPRejectedClaimException: () => (/* reexport safe */ _models_0__WEBPACK_IMPORTED_MODULE_0__.IDPRejectedClaimException),
/* harmony export */   InvalidAuthorizationMessageException: () => (/* reexport safe */ _models_0__WEBPACK_IMPORTED_MODULE_0__.InvalidAuthorizationMessageException),
/* harmony export */   InvalidIdentityTokenException: () => (/* reexport safe */ _models_0__WEBPACK_IMPORTED_MODULE_0__.InvalidIdentityTokenException),
/* harmony export */   MalformedPolicyDocumentException: () => (/* reexport safe */ _models_0__WEBPACK_IMPORTED_MODULE_0__.MalformedPolicyDocumentException),
/* harmony export */   PackedPolicyTooLargeException: () => (/* reexport safe */ _models_0__WEBPACK_IMPORTED_MODULE_0__.PackedPolicyTooLargeException),
/* harmony export */   RegionDisabledException: () => (/* reexport safe */ _models_0__WEBPACK_IMPORTED_MODULE_0__.RegionDisabledException)
/* harmony export */ });
/* harmony import */ var _models_0__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1472);



/***/ }),
/* 1497 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   decorateDefaultCredentialProvider: () => (/* binding */ decorateDefaultCredentialProvider),
/* harmony export */   getDefaultRoleAssumer: () => (/* binding */ getDefaultRoleAssumer),
/* harmony export */   getDefaultRoleAssumerWithWebIdentity: () => (/* binding */ getDefaultRoleAssumerWithWebIdentity)
/* harmony export */ });
/* harmony import */ var _defaultStsRoleAssumers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1498);
/* harmony import */ var _STSClient__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1122);


const getCustomizableStsClientCtor = (baseCtor, customizations) => {
    if (!customizations)
        return baseCtor;
    else
        return class CustomizableSTSClient extends baseCtor {
            constructor(config) {
                super(config);
                for (const customization of customizations) {
                    this.middlewareStack.use(customization);
                }
            }
        };
};
const getDefaultRoleAssumer = (stsOptions = {}, stsPlugins) => (0,_defaultStsRoleAssumers__WEBPACK_IMPORTED_MODULE_0__.getDefaultRoleAssumer)(stsOptions, getCustomizableStsClientCtor(_STSClient__WEBPACK_IMPORTED_MODULE_1__.STSClient, stsPlugins));
const getDefaultRoleAssumerWithWebIdentity = (stsOptions = {}, stsPlugins) => (0,_defaultStsRoleAssumers__WEBPACK_IMPORTED_MODULE_0__.getDefaultRoleAssumerWithWebIdentity)(stsOptions, getCustomizableStsClientCtor(_STSClient__WEBPACK_IMPORTED_MODULE_1__.STSClient, stsPlugins));
const decorateDefaultCredentialProvider = (provider) => (input) => provider({
    roleAssumer: getDefaultRoleAssumer(input),
    roleAssumerWithWebIdentity: getDefaultRoleAssumerWithWebIdentity(input),
    ...input,
});


/***/ }),
/* 1498 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   decorateDefaultCredentialProvider: () => (/* binding */ decorateDefaultCredentialProvider),
/* harmony export */   getDefaultRoleAssumer: () => (/* binding */ getDefaultRoleAssumer),
/* harmony export */   getDefaultRoleAssumerWithWebIdentity: () => (/* binding */ getDefaultRoleAssumerWithWebIdentity)
/* harmony export */ });
/* harmony import */ var _commands_AssumeRoleCommand__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1471);
/* harmony import */ var _commands_AssumeRoleWithWebIdentityCommand__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1489);


const ASSUME_ROLE_DEFAULT_REGION = "us-east-1";
const resolveRegion = async (_region, _parentRegion, credentialProviderLogger) => {
    const region = typeof _region === "function" ? await _region() : _region;
    const parentRegion = typeof _parentRegion === "function" ? await _parentRegion() : _parentRegion;
    credentialProviderLogger?.debug?.("@aws-sdk/client-sts::resolveRegion", "accepting first of:", `${region} (provider)`, `${parentRegion} (parent client)`, `${ASSUME_ROLE_DEFAULT_REGION} (STS default)`);
    return region ?? parentRegion ?? ASSUME_ROLE_DEFAULT_REGION;
};
const getDefaultRoleAssumer = (stsOptions, stsClientCtor) => {
    let stsClient;
    let closureSourceCreds;
    return async (sourceCreds, params) => {
        closureSourceCreds = sourceCreds;
        if (!stsClient) {
            const { logger = stsOptions?.parentClientConfig?.logger, region, requestHandler = stsOptions?.parentClientConfig?.requestHandler, credentialProviderLogger, } = stsOptions;
            const resolvedRegion = await resolveRegion(region, stsOptions?.parentClientConfig?.region, credentialProviderLogger);
            stsClient = new stsClientCtor({
                credentialDefaultProvider: () => async () => closureSourceCreds,
                region: resolvedRegion,
                requestHandler: requestHandler,
                logger: logger,
            });
        }
        const { Credentials } = await stsClient.send(new _commands_AssumeRoleCommand__WEBPACK_IMPORTED_MODULE_0__.AssumeRoleCommand(params));
        if (!Credentials || !Credentials.AccessKeyId || !Credentials.SecretAccessKey) {
            throw new Error(`Invalid response from STS.assumeRole call with role ${params.RoleArn}`);
        }
        return {
            accessKeyId: Credentials.AccessKeyId,
            secretAccessKey: Credentials.SecretAccessKey,
            sessionToken: Credentials.SessionToken,
            expiration: Credentials.Expiration,
            credentialScope: Credentials.CredentialScope,
        };
    };
};
const getDefaultRoleAssumerWithWebIdentity = (stsOptions, stsClientCtor) => {
    let stsClient;
    return async (params) => {
        if (!stsClient) {
            const { logger = stsOptions?.parentClientConfig?.logger, region, requestHandler = stsOptions?.parentClientConfig?.requestHandler, credentialProviderLogger, } = stsOptions;
            const resolvedRegion = await resolveRegion(region, stsOptions?.parentClientConfig?.region, credentialProviderLogger);
            stsClient = new stsClientCtor({
                region: resolvedRegion,
                requestHandler: requestHandler,
                logger: logger,
            });
        }
        const { Credentials } = await stsClient.send(new _commands_AssumeRoleWithWebIdentityCommand__WEBPACK_IMPORTED_MODULE_1__.AssumeRoleWithWebIdentityCommand(params));
        if (!Credentials || !Credentials.AccessKeyId || !Credentials.SecretAccessKey) {
            throw new Error(`Invalid response from STS.assumeRoleWithWebIdentity call with role ${params.RoleArn}`);
        }
        return {
            accessKeyId: Credentials.AccessKeyId,
            secretAccessKey: Credentials.SecretAccessKey,
            sessionToken: Credentials.SessionToken,
            expiration: Credentials.Expiration,
            credentialScope: Credentials.CredentialScope,
        };
    };
};
const decorateDefaultCredentialProvider = (provider) => (input) => provider({
    roleAssumer: getDefaultRoleAssumer(input, input.stsClientCtor),
    roleAssumerWithWebIdentity: getDefaultRoleAssumerWithWebIdentity(input, input.stsClientCtor),
    ...input,
});


/***/ })
]);
;