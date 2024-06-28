"use strict";
exports.id = 6;
exports.ids = [6];
exports.modules = {

/***/ 710:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   checkUrl: () => (/* binding */ checkUrl)
/* harmony export */ });
/* harmony import */ var _smithy_property_provider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(195);

const LOOPBACK_CIDR_IPv4 = "127.0.0.0/8";
const LOOPBACK_CIDR_IPv6 = "::1/128";
const ECS_CONTAINER_HOST = "169.254.170.2";
const EKS_CONTAINER_HOST_IPv4 = "169.254.170.23";
const EKS_CONTAINER_HOST_IPv6 = "[fd00:ec2::23]";
const checkUrl = (url, logger) => {
    if (url.protocol === "https:") {
        return;
    }
    if (url.hostname === ECS_CONTAINER_HOST ||
        url.hostname === EKS_CONTAINER_HOST_IPv4 ||
        url.hostname === EKS_CONTAINER_HOST_IPv6) {
        return;
    }
    if (url.hostname.includes("[")) {
        if (url.hostname === "[::1]" || url.hostname === "[0000:0000:0000:0000:0000:0000:0000:0001]") {
            return;
        }
    }
    else {
        if (url.hostname === "localhost") {
            return;
        }
        const ipComponents = url.hostname.split(".");
        const inRange = (component) => {
            const num = parseInt(component, 10);
            return 0 <= num && num <= 255;
        };
        if (ipComponents[0] === "127" &&
            inRange(ipComponents[1]) &&
            inRange(ipComponents[2]) &&
            inRange(ipComponents[3]) &&
            ipComponents.length === 4) {
            return;
        }
    }
    throw new _smithy_property_provider__WEBPACK_IMPORTED_MODULE_0__.CredentialsProviderError(`URL not accepted. It must either be HTTPS or match one of the following:
  - loopback CIDR 127.0.0.0/8 or [::1/128]
  - ECS container host 169.254.170.2
  - EKS container host 169.254.170.23 or [fd00:ec2::23]`, { logger });
};


/***/ }),

/***/ 623:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   fromHttp: () => (/* binding */ fromHttp)
/* harmony export */ });
/* harmony import */ var _smithy_node_http_handler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(624);
/* harmony import */ var _smithy_property_provider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(195);
/* harmony import */ var fs_promises__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(709);
/* harmony import */ var fs_promises__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(fs_promises__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _checkUrl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(710);
/* harmony import */ var _requestHelpers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(711);
/* harmony import */ var _retry_wrapper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(740);






const AWS_CONTAINER_CREDENTIALS_RELATIVE_URI = "AWS_CONTAINER_CREDENTIALS_RELATIVE_URI";
const DEFAULT_LINK_LOCAL_HOST = "http://169.254.170.2";
const AWS_CONTAINER_CREDENTIALS_FULL_URI = "AWS_CONTAINER_CREDENTIALS_FULL_URI";
const AWS_CONTAINER_AUTHORIZATION_TOKEN_FILE = "AWS_CONTAINER_AUTHORIZATION_TOKEN_FILE";
const AWS_CONTAINER_AUTHORIZATION_TOKEN = "AWS_CONTAINER_AUTHORIZATION_TOKEN";
const fromHttp = (options = {}) => {
    options.logger?.debug("@aws-sdk/credential-provider-http - fromHttp");
    let host;
    const relative = options.awsContainerCredentialsRelativeUri ?? process.env[AWS_CONTAINER_CREDENTIALS_RELATIVE_URI];
    const full = options.awsContainerCredentialsFullUri ?? process.env[AWS_CONTAINER_CREDENTIALS_FULL_URI];
    const token = options.awsContainerAuthorizationToken ?? process.env[AWS_CONTAINER_AUTHORIZATION_TOKEN];
    const tokenFile = options.awsContainerAuthorizationTokenFile ?? process.env[AWS_CONTAINER_AUTHORIZATION_TOKEN_FILE];
    const warn = options.logger?.constructor?.name === "NoOpLogger" || !options.logger ? console.warn : options.logger.warn;
    if (relative && full) {
        warn("@aws-sdk/credential-provider-http: " +
            "you have set both awsContainerCredentialsRelativeUri and awsContainerCredentialsFullUri.");
        warn("awsContainerCredentialsFullUri will take precedence.");
    }
    if (token && tokenFile) {
        warn("@aws-sdk/credential-provider-http: " +
            "you have set both awsContainerAuthorizationToken and awsContainerAuthorizationTokenFile.");
        warn("awsContainerAuthorizationToken will take precedence.");
    }
    if (full) {
        host = full;
    }
    else if (relative) {
        host = `${DEFAULT_LINK_LOCAL_HOST}${relative}`;
    }
    else {
        throw new _smithy_property_provider__WEBPACK_IMPORTED_MODULE_1__.CredentialsProviderError(`No HTTP credential provider host provided.
Set AWS_CONTAINER_CREDENTIALS_FULL_URI or AWS_CONTAINER_CREDENTIALS_RELATIVE_URI.`, { logger: options.logger });
    }
    const url = new URL(host);
    (0,_checkUrl__WEBPACK_IMPORTED_MODULE_3__.checkUrl)(url, options.logger);
    const requestHandler = new _smithy_node_http_handler__WEBPACK_IMPORTED_MODULE_0__.NodeHttpHandler({
        requestTimeout: options.timeout ?? 1000,
        connectionTimeout: options.timeout ?? 1000,
    });
    return (0,_retry_wrapper__WEBPACK_IMPORTED_MODULE_5__.retryWrapper)(async () => {
        const request = (0,_requestHelpers__WEBPACK_IMPORTED_MODULE_4__.createGetRequest)(url);
        if (token) {
            request.headers.Authorization = token;
        }
        else if (tokenFile) {
            request.headers.Authorization = (await fs_promises__WEBPACK_IMPORTED_MODULE_2___default().readFile(tokenFile)).toString();
        }
        try {
            const result = await requestHandler.handle(request);
            return (0,_requestHelpers__WEBPACK_IMPORTED_MODULE_4__.getCredentials)(result.response);
        }
        catch (e) {
            throw new _smithy_property_provider__WEBPACK_IMPORTED_MODULE_1__.CredentialsProviderError(String(e), { logger: options.logger });
        }
    }, options.maxRetries ?? 3, options.timeout ?? 1000);
};


/***/ }),

/***/ 711:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createGetRequest: () => (/* binding */ createGetRequest),
/* harmony export */   getCredentials: () => (/* binding */ getCredentials)
/* harmony export */ });
/* harmony import */ var _smithy_property_provider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(195);
/* harmony import */ var _smithy_protocol_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(626);
/* harmony import */ var _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(712);
/* harmony import */ var _smithy_util_stream__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(331);




function createGetRequest(url) {
    return new _smithy_protocol_http__WEBPACK_IMPORTED_MODULE_1__.HttpRequest({
        protocol: url.protocol,
        hostname: url.hostname,
        port: Number(url.port),
        path: url.pathname,
        query: Array.from(url.searchParams.entries()).reduce((acc, [k, v]) => {
            acc[k] = v;
            return acc;
        }, {}),
        fragment: url.hash,
    });
}
async function getCredentials(response, logger) {
    const stream = (0,_smithy_util_stream__WEBPACK_IMPORTED_MODULE_3__.sdkStreamMixin)(response.body);
    const str = await stream.transformToString();
    if (response.statusCode === 200) {
        const parsed = JSON.parse(str);
        if (typeof parsed.AccessKeyId !== "string" ||
            typeof parsed.SecretAccessKey !== "string" ||
            typeof parsed.Token !== "string" ||
            typeof parsed.Expiration !== "string") {
            throw new _smithy_property_provider__WEBPACK_IMPORTED_MODULE_0__.CredentialsProviderError("HTTP credential provider response not of the required format, an object matching: " +
                "{ AccessKeyId: string, SecretAccessKey: string, Token: string, Expiration: string(rfc3339) }", { logger });
        }
        return {
            accessKeyId: parsed.AccessKeyId,
            secretAccessKey: parsed.SecretAccessKey,
            sessionToken: parsed.Token,
            expiration: (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_2__.parseRfc3339DateTime)(parsed.Expiration),
        };
    }
    if (response.statusCode >= 400 && response.statusCode < 500) {
        let parsedBody = {};
        try {
            parsedBody = JSON.parse(str);
        }
        catch (e) { }
        throw Object.assign(new _smithy_property_provider__WEBPACK_IMPORTED_MODULE_0__.CredentialsProviderError(`Server responded with status: ${response.statusCode}`, { logger }), {
            Code: parsedBody.Code,
            Message: parsedBody.Message,
        });
    }
    throw new _smithy_property_provider__WEBPACK_IMPORTED_MODULE_0__.CredentialsProviderError(`Server responded with status: ${response.statusCode}`, { logger });
}


/***/ }),

/***/ 740:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   retryWrapper: () => (/* binding */ retryWrapper)
/* harmony export */ });
const retryWrapper = (toRetry, maxRetries, delayMs) => {
    return async () => {
        for (let i = 0; i < maxRetries; ++i) {
            try {
                return await toRetry();
            }
            catch (e) {
                await new Promise((resolve) => setTimeout(resolve, delayMs));
            }
        }
        return await toRetry();
    };
};


/***/ }),

/***/ 622:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   fromHttp: () => (/* reexport safe */ _fromHttp_fromHttp__WEBPACK_IMPORTED_MODULE_0__.fromHttp)
/* harmony export */ });
/* harmony import */ var _fromHttp_fromHttp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(623);



/***/ }),

/***/ 716:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ 715:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   constructStack: () => (/* reexport safe */ _MiddlewareStack__WEBPACK_IMPORTED_MODULE_0__.constructStack)
/* harmony export */ });
/* harmony import */ var _MiddlewareStack__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(716);



/***/ }),

/***/ 698:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NODEJS_TIMEOUT_ERROR_CODES: () => (/* binding */ NODEJS_TIMEOUT_ERROR_CODES)
/* harmony export */ });
const NODEJS_TIMEOUT_ERROR_CODES = ["ECONNRESET", "EPIPE", "ETIMEDOUT"];


/***/ }),

/***/ 699:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ 624:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DEFAULT_REQUEST_TIMEOUT: () => (/* reexport safe */ _node_http_handler__WEBPACK_IMPORTED_MODULE_0__.DEFAULT_REQUEST_TIMEOUT),
/* harmony export */   NodeHttp2Handler: () => (/* reexport safe */ _node_http2_handler__WEBPACK_IMPORTED_MODULE_1__.NodeHttp2Handler),
/* harmony export */   NodeHttpHandler: () => (/* reexport safe */ _node_http_handler__WEBPACK_IMPORTED_MODULE_0__.NodeHttpHandler),
/* harmony export */   streamCollector: () => (/* reexport safe */ _stream_collector__WEBPACK_IMPORTED_MODULE_2__.streamCollector)
/* harmony export */ });
/* harmony import */ var _node_http_handler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(625);
/* harmony import */ var _node_http2_handler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(704);
/* harmony import */ var _stream_collector__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(707);





/***/ }),

/***/ 625:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DEFAULT_REQUEST_TIMEOUT: () => (/* binding */ DEFAULT_REQUEST_TIMEOUT),
/* harmony export */   NodeHttpHandler: () => (/* binding */ NodeHttpHandler)
/* harmony export */ });
/* harmony import */ var _smithy_protocol_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(626);
/* harmony import */ var _smithy_querystring_builder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(694);
/* harmony import */ var http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(421);
/* harmony import */ var http__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(http__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var https__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(422);
/* harmony import */ var https__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(https__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(698);
/* harmony import */ var _get_transformed_headers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(699);
/* harmony import */ var _set_connection_timeout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(700);
/* harmony import */ var _set_socket_keep_alive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(701);
/* harmony import */ var _set_socket_timeout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(702);
/* harmony import */ var _write_request_body__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(703);










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

/***/ 705:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NodeHttp2ConnectionManager: () => (/* binding */ NodeHttp2ConnectionManager)
/* harmony export */ });
/* harmony import */ var http2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(430);
/* harmony import */ var http2__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(http2__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_http2_connection_pool__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(706);


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

/***/ 706:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ 704:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NodeHttp2Handler: () => (/* binding */ NodeHttp2Handler)
/* harmony export */ });
/* harmony import */ var _smithy_protocol_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(626);
/* harmony import */ var _smithy_querystring_builder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(694);
/* harmony import */ var http2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(430);
/* harmony import */ var http2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(http2__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _get_transformed_headers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(699);
/* harmony import */ var _node_http2_connection_manager__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(705);
/* harmony import */ var _write_request_body__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(703);






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

/***/ 700:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ 701:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ 702:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ 708:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ 707:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   streamCollector: () => (/* binding */ streamCollector)
/* harmony export */ });
/* harmony import */ var _collector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(708);

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

/***/ 703:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ 629:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Field: () => (/* binding */ Field)
/* harmony export */ });
/* harmony import */ var _smithy_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(630);

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

/***/ 688:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ 628:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ 627:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getHttpHandlerExtensionConfiguration: () => (/* reexport safe */ _httpExtensionConfiguration__WEBPACK_IMPORTED_MODULE_0__.getHttpHandlerExtensionConfiguration),
/* harmony export */   resolveHttpHandlerRuntimeConfig: () => (/* reexport safe */ _httpExtensionConfiguration__WEBPACK_IMPORTED_MODULE_0__.resolveHttpHandlerRuntimeConfig)
/* harmony export */ });
/* harmony import */ var _httpExtensionConfiguration__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(628);



/***/ }),

/***/ 689:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ 690:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ 691:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ 626:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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
/* harmony import */ var _extensions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(627);
/* harmony import */ var _Field__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(629);
/* harmony import */ var _Fields__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(688);
/* harmony import */ var _httpHandler__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(689);
/* harmony import */ var _httpRequest__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(690);
/* harmony import */ var _httpResponse__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(691);
/* harmony import */ var _isValidHostname__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(692);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(693);










/***/ }),

/***/ 692:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isValidHostname: () => (/* binding */ isValidHostname)
/* harmony export */ });
function isValidHostname(hostname) {
    const hostPattern = /^[a-z0-9][a-z0-9\.\-]*[a-z0-9]$/;
    return hostPattern.test(hostname);
}


/***/ }),

/***/ 693:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ 694:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   buildQueryString: () => (/* binding */ buildQueryString)
/* harmony export */ });
/* harmony import */ var _smithy_util_uri_escape__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(695);

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

/***/ 713:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ 714:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Client: () => (/* binding */ Client)
/* harmony export */ });
/* harmony import */ var _smithy_middleware_stack__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(715);

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

/***/ 717:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ 718:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Command: () => (/* binding */ Command)
/* harmony export */ });
/* harmony import */ var _smithy_middleware_stack__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(715);
/* harmony import */ var _smithy_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(630);


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

/***/ 719:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SENSITIVE_STRING: () => (/* binding */ SENSITIVE_STRING)
/* harmony export */ });
const SENSITIVE_STRING = "***SensitiveInformation***";


/***/ }),

/***/ 720:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ 721:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   dateToUtcString: () => (/* binding */ dateToUtcString),
/* harmony export */   parseEpochTimestamp: () => (/* binding */ parseEpochTimestamp),
/* harmony export */   parseRfc3339DateTime: () => (/* binding */ parseRfc3339DateTime),
/* harmony export */   parseRfc3339DateTimeWithOffset: () => (/* binding */ parseRfc3339DateTimeWithOffset),
/* harmony export */   parseRfc7231DateTime: () => (/* binding */ parseRfc7231DateTime)
/* harmony export */ });
/* harmony import */ var _parse_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(722);

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

/***/ 723:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   throwDefaultError: () => (/* binding */ throwDefaultError),
/* harmony export */   withBaseException: () => (/* binding */ withBaseException)
/* harmony export */ });
/* harmony import */ var _exceptions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(724);

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

/***/ 725:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ 726:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ 724:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ 731:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ 729:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AlgorithmId: () => (/* reexport safe */ _smithy_types__WEBPACK_IMPORTED_MODULE_0__.AlgorithmId),
/* harmony export */   getChecksumConfiguration: () => (/* binding */ getChecksumConfiguration),
/* harmony export */   resolveChecksumRuntimeConfig: () => (/* binding */ resolveChecksumRuntimeConfig)
/* harmony export */ });
/* harmony import */ var _smithy_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(630);


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

/***/ 728:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getDefaultClientConfiguration: () => (/* binding */ getDefaultClientConfiguration),
/* harmony export */   getDefaultExtensionConfiguration: () => (/* binding */ getDefaultExtensionConfiguration),
/* harmony export */   resolveDefaultRuntimeConfig: () => (/* binding */ resolveDefaultRuntimeConfig)
/* harmony export */ });
/* harmony import */ var _checksum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(729);
/* harmony import */ var _retry__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(730);


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

/***/ 727:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getDefaultClientConfiguration: () => (/* reexport safe */ _defaultExtensionConfiguration__WEBPACK_IMPORTED_MODULE_0__.getDefaultClientConfiguration),
/* harmony export */   getDefaultExtensionConfiguration: () => (/* reexport safe */ _defaultExtensionConfiguration__WEBPACK_IMPORTED_MODULE_0__.getDefaultExtensionConfiguration),
/* harmony export */   resolveDefaultRuntimeConfig: () => (/* reexport safe */ _defaultExtensionConfiguration__WEBPACK_IMPORTED_MODULE_0__.resolveDefaultRuntimeConfig)
/* harmony export */ });
/* harmony import */ var _defaultExtensionConfiguration__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(728);



/***/ }),

/***/ 730:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ 732:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getArrayIfSingleItem: () => (/* binding */ getArrayIfSingleItem)
/* harmony export */ });
const getArrayIfSingleItem = (mayBeArray) => Array.isArray(mayBeArray) ? mayBeArray : [mayBeArray];


/***/ }),

/***/ 733:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ 712:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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
/* harmony import */ var _NoOpLogger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(713);
/* harmony import */ var _client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(714);
/* harmony import */ var _collect_stream_body__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(717);
/* harmony import */ var _command__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(718);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(719);
/* harmony import */ var _create_aggregated_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(720);
/* harmony import */ var _date_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(721);
/* harmony import */ var _default_error_handler__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(723);
/* harmony import */ var _defaults_mode__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(725);
/* harmony import */ var _emitWarningIfUnsupportedVersion__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(726);
/* harmony import */ var _extensions__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(727);
/* harmony import */ var _exceptions__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(724);
/* harmony import */ var _extended_encode_uri_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(731);
/* harmony import */ var _get_array_if_single_item__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(732);
/* harmony import */ var _get_value_from_text_node__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(733);
/* harmony import */ var _lazy_json__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(734);
/* harmony import */ var _object_mapping__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(735);
/* harmony import */ var _parse_utils__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(722);
/* harmony import */ var _resolve_path__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(736);
/* harmony import */ var _ser_utils__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(737);
/* harmony import */ var _serde_json__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(738);
/* harmony import */ var _split_every__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(739);
























/***/ }),

/***/ 734:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ 735:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ 722:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ 736:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   resolvedPath: () => (/* binding */ resolvedPath)
/* harmony export */ });
/* harmony import */ var _extended_encode_uri_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(731);

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

/***/ 737:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ 738:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ 739:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ 631:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ 634:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ 635:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ 636:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ 637:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ 638:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ 633:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ 632:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HttpApiKeyAuthLocation: () => (/* reexport safe */ _HttpApiKeyAuth__WEBPACK_IMPORTED_MODULE_1__.HttpApiKeyAuthLocation),
/* harmony export */   HttpAuthLocation: () => (/* reexport safe */ _auth__WEBPACK_IMPORTED_MODULE_0__.HttpAuthLocation)
/* harmony export */ });
/* harmony import */ var _auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(633);
/* harmony import */ var _HttpApiKeyAuth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(634);
/* harmony import */ var _HttpAuthScheme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(635);
/* harmony import */ var _HttpAuthSchemeProvider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(636);
/* harmony import */ var _HttpSigner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(637);
/* harmony import */ var _IdentityProviderConfig__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(638);








/***/ }),

/***/ 639:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ 640:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ 641:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ 642:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ 644:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ 643:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(644);
/* harmony import */ var _manager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(645);
/* harmony import */ var _pool__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(646);





/***/ }),

/***/ 645:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ 646:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ 647:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ 648:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ 649:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ 651:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ 652:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ 653:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ 655:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ 650:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _EndpointRuleObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(651);
/* harmony import */ var _ErrorRuleObject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(652);
/* harmony import */ var _RuleSetObject__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(653);
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(654);
/* harmony import */ var _TreeRuleObject__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(655);







/***/ }),

/***/ 654:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ 656:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ 659:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ 658:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getDefaultClientConfiguration: () => (/* binding */ getDefaultClientConfiguration),
/* harmony export */   resolveDefaultRuntimeConfig: () => (/* binding */ resolveDefaultRuntimeConfig)
/* harmony export */ });
/* harmony import */ var _checksum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(659);

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

/***/ 660:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ 657:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AlgorithmId: () => (/* reexport safe */ _checksum__WEBPACK_IMPORTED_MODULE_2__.AlgorithmId),
/* harmony export */   getDefaultClientConfiguration: () => (/* reexport safe */ _defaultClientConfiguration__WEBPACK_IMPORTED_MODULE_0__.getDefaultClientConfiguration),
/* harmony export */   resolveDefaultRuntimeConfig: () => (/* reexport safe */ _defaultClientConfiguration__WEBPACK_IMPORTED_MODULE_0__.resolveDefaultRuntimeConfig)
/* harmony export */ });
/* harmony import */ var _defaultClientConfiguration__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(658);
/* harmony import */ var _defaultExtensionConfiguration__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(660);
/* harmony import */ var _checksum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(659);





/***/ }),

/***/ 661:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ 662:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ 664:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ 665:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ 666:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ 663:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _apiKeyIdentity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(664);
/* harmony import */ var _awsCredentialIdentity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(665);
/* harmony import */ var _identity__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(666);
/* harmony import */ var _tokenIdentity__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(667);






/***/ }),

/***/ 667:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ 630:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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
/* harmony import */ var _abort__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(631);
/* harmony import */ var _auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(632);
/* harmony import */ var _blob_blob_payload_input_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(639);
/* harmony import */ var _checksum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(640);
/* harmony import */ var _client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(641);
/* harmony import */ var _command__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(642);
/* harmony import */ var _connection__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(643);
/* harmony import */ var _crypto__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(647);
/* harmony import */ var _encode__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(648);
/* harmony import */ var _endpoint__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(649);
/* harmony import */ var _endpoints__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(650);
/* harmony import */ var _eventStream__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(656);
/* harmony import */ var _extensions__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(657);
/* harmony import */ var _http__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(661);
/* harmony import */ var _http_httpHandlerInitialization__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(662);
/* harmony import */ var _identity__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(663);
/* harmony import */ var _logger__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(668);
/* harmony import */ var _middleware__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(669);
/* harmony import */ var _pagination__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(670);
/* harmony import */ var _profile__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(671);
/* harmony import */ var _response__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(672);
/* harmony import */ var _retry__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(673);
/* harmony import */ var _serde__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(674);
/* harmony import */ var _shapes__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(675);
/* harmony import */ var _signature__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(676);
/* harmony import */ var _stream__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(677);
/* harmony import */ var _streaming_payload_streaming_blob_common_types__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(678);
/* harmony import */ var _streaming_payload_streaming_blob_payload_input_types__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(679);
/* harmony import */ var _streaming_payload_streaming_blob_payload_output_types__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(680);
/* harmony import */ var _transfer__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(681);
/* harmony import */ var _transform_client_payload_blob_type_narrow__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(682);
/* harmony import */ var _transform_no_undefined__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(683);
/* harmony import */ var _transform_type_transform__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(684);
/* harmony import */ var _uri__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(685);
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(686);
/* harmony import */ var _waiter__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(687);






































/***/ }),

/***/ 668:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ 669:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SMITHY_CONTEXT_KEY: () => (/* binding */ SMITHY_CONTEXT_KEY)
/* harmony export */ });
const SMITHY_CONTEXT_KEY = "__smithy_context";


/***/ }),

/***/ 670:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ 671:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ 672:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ 673:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ 674:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ 675:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ 676:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ 677:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ 678:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ 679:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ 680:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ 681:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ 682:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ 683:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ 684:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ 685:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ 686:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ 687:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ 697:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   escapeUriPath: () => (/* binding */ escapeUriPath)
/* harmony export */ });
/* harmony import */ var _escape_uri__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(696);

const escapeUriPath = (uri) => uri.split("/").map(_escape_uri__WEBPACK_IMPORTED_MODULE_0__.escapeUri).join("/");


/***/ }),

/***/ 696:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   escapeUri: () => (/* binding */ escapeUri)
/* harmony export */ });
const escapeUri = (uri) => encodeURIComponent(uri).replace(/[!'()*]/g, hexEncode);
const hexEncode = (c) => `%${c.charCodeAt(0).toString(16).toUpperCase()}`;


/***/ }),

/***/ 695:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   escapeUri: () => (/* reexport safe */ _escape_uri__WEBPACK_IMPORTED_MODULE_0__.escapeUri),
/* harmony export */   escapeUriPath: () => (/* reexport safe */ _escape_uri_path__WEBPACK_IMPORTED_MODULE_1__.escapeUriPath)
/* harmony export */ });
/* harmony import */ var _escape_uri__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(696);
/* harmony import */ var _escape_uri_path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(697);




/***/ })

};
;