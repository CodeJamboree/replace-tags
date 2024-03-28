(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["@codejamboree/replace-tags"] = factory();
	else
		root["@codejamboree/replace-tags"] = factory();
})(this, () => {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/appendPath.ts":
/*!***************************!*\
  !*** ./src/appendPath.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
var EMPTY = "";
/**
 * Appends a segment to a path prefix.
 * @param {string | undefined} prefix - The prefix to append the segment to, or undefined if no prefix exists.
 * @param {string} segment - The segment to append to the prefix.
 * @returns {string} The concatenated path, with the segment appended to the prefix (if provided).
 */
var appendPath = function (prefix, segment) { return "".concat(prefix !== null && prefix !== void 0 ? prefix : EMPTY).concat(segment); };
exports["default"] = appendPath;


/***/ }),

/***/ "./src/appendPathIndex.ts":
/*!********************************!*\
  !*** ./src/appendPathIndex.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
var EMPTY = "";
/**
 * Appends an index to a path prefix.
 * @param {string | undefined} prefix - The prefix to append the segment to, or undefined if no prefix exists.
 * @param {string} digits - The digits to append to the prefix.
 * @returns {string} The concatenated path, with the digits appended to the prefix (if provided).
 */
var appendPathIndex = function (prefix, digits) { return "".concat(prefix !== null && prefix !== void 0 ? prefix : EMPTY, "[").concat(digits, "]"); };
exports["default"] = appendPathIndex;


/***/ }),

/***/ "./src/appendPathKey.ts":
/*!******************************!*\
  !*** ./src/appendPathKey.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
var EMPTY = "";
/**
 * Appends an index to a path prefix.
 * @param {string | undefined} prefix - The prefix to insert before the key, or undefined if no prefix exists.
 * @param {string} key - The key to append to the prefix, often non-numeric.
 * @returns {string} The concatenated path, with the key appended to the prefix (if provided).
 */
var appendPathKey = function (prefix, key) { return "".concat(prefix ? "".concat(prefix, ".") : EMPTY).concat(key); };
exports["default"] = appendPathKey;


/***/ }),

/***/ "./src/cache.ts":
/*!**********************!*\
  !*** ./src/cache.ts ***!
  \**********************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getString = exports.set = exports.has = exports.get = exports.clear = void 0;
var stringify_1 = __importDefault(__webpack_require__(/*! ./stringify */ "./src/stringify.ts"));
/**
 * Cache for storing the results of the last successful compilation.
 */
var valueCache = new Map();
/**
 * Cache for storing the results of the last successful compilation as strings.
 */
var stringCache = new Map();
/**
 * Clears the cache.
 * @returns {void} Nothing.
 */
var clear = function () {
    valueCache.clear();
    stringCache.clear();
};
exports.clear = clear;
/**
 * Gets a value from the cache.
 * @param {string} key - The key to retrieve from the cache.
 * @returns {unknown} The value from the cache.
 */
var get = function (key) { return valueCache.get(key); };
exports.get = get;
/**
 * Checks if the cache has a value for the given key.
 * @param {string} key - The key to check in the cache.
 * @returns {boolean} True if the cache has a value for the key, otherwise false.
 * @example
 * cache.has(""); // false
 * cache.has("Key"); // false
 * cache.set("Key", "Value");
 * cache.has("Key"); // true
 */
var has = function (key) { return valueCache.has(key); };
exports.has = has;
/**
 * Sets a value in the cache.
 * @param {string} key - The key to store the value under.
 * @param {unknown} value - The value to store in the cache.
 * @returns {void} Nothing.
 * @example
 * cache.set("Key", "Value");
 * cache.get("Key"); // "Value"
 * cache.has("Key"); // true
 * cache.set("Key", "New Value");
 * cache.get("Key"); // "New Value"
 */
var set = function (key, value) {
    valueCache.set(key, value);
};
exports.set = set;
/**
 * Gets a string from the cache.
 * @param {string} path - The path to retrieve from the cache.
 * @param {string} tag - The tag containing the path.
 * @param {MissingPathCallback} onMissingPath - A callback function to handle missing paths.
 * @returns {string} The value from the cache as a string.
 * @example
 * getString("Key", "default value"); // "default value"
 * set("Key", "Value");
 * getString("Key", "default value"); // "Value"
 * set("Key", 42);
 * getString("Key", "default value"); // "42"
 * set("Key", undefined);
 * getString("Key", "default value"); // "default value"
 */
var getString = function (path, tag, onMissingPath) {
    if (stringCache.has(path))
        return stringCache.get(path);
    var value = valueCache.get(path);
    var text = (0, stringify_1.default)(value, path, tag, onMissingPath);
    stringCache.set(path, text);
    return text;
};
exports.getString = getString;


/***/ }),

/***/ "./src/checkCondition.ts":
/*!*******************************!*\
  !*** ./src/checkCondition.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
/**
 * Helper function to check a condition and throw an error if it is met.
 * @param {boolean} condition - The condition to check.
 * @param {string} message - The error message to throw if the condition is met.
 * @throws {Error} Throws an error if the condition is met.
 * @returns {void} Nothing.
 * @example checkCondition(1 === 1, "1 is equal to 1");
 * // Throws an error with the message "1 is equal to 1"
 */
var checkCondition = function (condition, message) {
    if (condition) {
        throw new Error(message);
    }
};
exports["default"] = checkCondition;


/***/ }),

/***/ "./src/defaultMissingPathHandler.ts":
/*!******************************************!*\
  !*** ./src/defaultMissingPathHandler.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
/**
 * A callback function to handle missing tags.
 * @callback MissingPathCallback
 * @param {string} path - The path that was not found.
 * @param {string} tag - The tag that was not found.
 * @returns {string} The tag that was not found.
 */
var defaultMissingPathHandler = function (path, tag) {
    return tag;
};
exports["default"] = defaultMissingPathHandler;


/***/ }),

/***/ "./src/findNextValue.ts":
/*!******************************!*\
  !*** ./src/findNextValue.ts ***!
  \******************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var appendPathKey_1 = __importDefault(__webpack_require__(/*! ./appendPathKey */ "./src/appendPathKey.ts"));
var getArrayValue_1 = __importDefault(__webpack_require__(/*! ./getArrayValue */ "./src/getArrayValue.ts"));
var getValue_1 = __importDefault(__webpack_require__(/*! ./getValue */ "./src/getValue.ts"));
var getValueFromIndicies_1 = __importDefault(__webpack_require__(/*! ./getValueFromIndicies */ "./src/getValueFromIndicies.ts"));
/**
 * Finds the next value in the object based on the given segment.
 * @param {NextValue} result - The result object containing the current value, current path, and full path.
 * @param {string} segment - The segment of the path to process.
 * @returns {NextValue} The updated result object with the next value, current path, and full path.
 */
var findNextValue = function (result, segment) {
    var value = result.value, currentPath = result.currentPath;
    var fullPath = result.fullPath;
    if (value === undefined)
        return result;
    if (segment.startsWith("[")) {
        value = (0, getValueFromIndicies_1.default)(value, segment, currentPath, fullPath);
        currentPath = (0, appendPathKey_1.default)(currentPath, segment);
    }
    else if (segment.includes("[")) {
        value = (0, getArrayValue_1.default)(value, segment, currentPath, fullPath);
        currentPath = (0, appendPathKey_1.default)(currentPath, segment);
    }
    else {
        currentPath = (0, appendPathKey_1.default)(currentPath, segment);
        value = (0, getValue_1.default)(value, segment, currentPath, fullPath);
    }
    return {
        value: value,
        currentPath: currentPath,
        fullPath: fullPath,
    };
};
exports["default"] = findNextValue;


/***/ }),

/***/ "./src/findValueByPath.ts":
/*!********************************!*\
  !*** ./src/findValueByPath.ts ***!
  \********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var findNextValue_1 = __importDefault(__webpack_require__(/*! ./findNextValue */ "./src/findNextValue.ts"));
var cache = __importStar(__webpack_require__(/*! ./cache */ "./src/cache.ts"));
/**
 * Finds a value in an object by the given path in dot notation.
 * @param {unknown} source - The object to search within.
 * @param {string} path - The path to the value in dot notation.
 * @returns {unknown} The value found at the given path, or undefined if not found.
 */
var findValueByPath = function (source, path) {
    if (cache.has(path))
        return cache.get(path);
    var segments = path.split(".");
    var nextValue = {
        fullPath: path,
        currentPath: undefined,
        value: source,
    };
    for (var _i = 0, segments_1 = segments; _i < segments_1.length; _i++) {
        var segment = segments_1[_i];
        nextValue = (0, findNextValue_1.default)(nextValue, segment);
        if (nextValue.value === undefined)
            break;
    }
    cache.set(path, nextValue.value);
    return nextValue.value;
};
exports["default"] = findValueByPath;


/***/ }),

/***/ "./src/getArrayValue.ts":
/*!******************************!*\
  !*** ./src/getArrayValue.ts ***!
  \******************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var appendPath_1 = __importDefault(__webpack_require__(/*! ./appendPath */ "./src/appendPath.ts"));
var getValueFromIndicies_1 = __importDefault(__webpack_require__(/*! ./getValueFromIndicies */ "./src/getValueFromIndicies.ts"));
var getValue_1 = __importDefault(__webpack_require__(/*! ./getValue */ "./src/getValue.ts"));
/**
 * Retrieves the value from an array based on the provided segment.
 * @param {unknown} value - The value to search within (typically an array or object).
 * @param {string} segment - The segment representing the array and index (e.g., 'array[0]').
 * @param {string | undefined} currentPath - The current path in the object hierarchy.
 * @param {string} path - The full path in the object hierarchy.
 * @returns {unknown} The value retrieved from the array based on the segment.
 * @example // Example usage
 * const value = { a: [ 'b', ['c', 'd', ['e', 'f', 'g']]] }
 * const path = 'parent.a[1][2][3].length';
 * const currentPath = 'parent';
 * const segment = 'a[1][2][3]';
 * console.log(getArrayValue(data, segment, currentPath, path));
 * // Output: "g"
 */
var getArrayValue = function (value, segment, currentPath, path) {
    // Find the index of where the indicies begin
    var index = segment.indexOf("[");
    // Check to see if the segment begins with a key
    if (index !== 0) {
        // Get the key name before the indicies
        var key = segment.slice(0, index);
        // Update the path
        currentPath = (0, appendPath_1.default)(currentPath, key);
        // Grab the value
        value = (0, getValue_1.default)(value, key, currentPath, path);
        // quit if we have nothing
        if (value === undefined)
            return value;
        // Update the segment to remove the key
        segment = segment.slice(index);
    }
    // Return the value from indicies "[0][1]...[n]"
    return (0, getValueFromIndicies_1.default)(value, segment, currentPath, path);
};
exports["default"] = getArrayValue;


/***/ }),

/***/ "./src/getOptionsWithDefaults.ts":
/*!***************************************!*\
  !*** ./src/getOptionsWithDefaults.ts ***!
  \***************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var getRegExp_1 = __importDefault(__webpack_require__(/*! ./getRegExp */ "./src/getRegExp.ts"));
var validatePatterns_1 = __importDefault(__webpack_require__(/*! ./validatePatterns */ "./src/validatePatterns.ts"));
var DoubleCurlyBraces_1 = __importDefault(__webpack_require__(/*! ./styles/DoubleCurlyBraces */ "./src/styles/DoubleCurlyBraces.ts"));
var defaultMissingPathHandler_1 = __importDefault(__webpack_require__(/*! ./defaultMissingPathHandler */ "./src/defaultMissingPathHandler.ts"));
/**
 * Merges the provided options with default options for tag patterns.
 * @param {Partial<ReplaceTagsOptions>} [options] - Optional partial options object.
 * @returns {ReplaceTagsOptions} The merged options object with default values.
 */
var getOptionsWithDefaults = function (_a) {
    var _b = _a === void 0 ? DoubleCurlyBraces_1.default : _a, _c = _b.tagPattern, tagPattern = _c === void 0 ? DoubleCurlyBraces_1.default.tagPattern : _c, _d = _b.tagStartPattern, tagStartPattern = _d === void 0 ? DoubleCurlyBraces_1.default.tagStartPattern : _d, _e = _b.tagEndPattern, tagEndPattern = _e === void 0 ? DoubleCurlyBraces_1.default.tagEndPattern : _e, _f = _b.onMissingPath, onMissingPath = _f === void 0 ? defaultMissingPathHandler_1.default : _f;
    var options = {
        tagPattern: (0, getRegExp_1.default)(tagPattern),
        tagStartPattern: (0, getRegExp_1.default)(tagStartPattern),
        tagEndPattern: (0, getRegExp_1.default)(tagEndPattern),
        onMissingPath: onMissingPath,
    };
    // Validate the provided patterns
    (0, validatePatterns_1.default)(options);
    return options;
};
exports["default"] = getOptionsWithDefaults;


/***/ }),

/***/ "./src/getRegExp.ts":
/*!**************************!*\
  !*** ./src/getRegExp.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
/**
 * Gets a regular expression, or a new stateless regular expression if the input is stateful.
 * @param {RegExp} [expression] An regular expression
 * @returns {RegExp} A stateless regular expression
 */
var getRegExp = function (expression) {
    // Return a new RegExp if lastIndex is not 0 to ensure the returned RegExp is stateless
    return expression.lastIndex !== 0
        ? new RegExp(expression)
        : expression;
};
exports["default"] = getRegExp;


/***/ }),

/***/ "./src/getValue.ts":
/*!*************************!*\
  !*** ./src/getValue.ts ***!
  \*************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var cache = __importStar(__webpack_require__(/*! ./cache */ "./src/cache.ts"));
var UNDEFINED = "undefined";
var FUNCTION = "function";
var WHOLE_NUMBER = /^\d+$/;
/**
 * Retrieves the value from the source based on the provided key
 * @param {unknown} source The source from which to retrieve the value.
 * @param {string|number} key The key to look up in the source object.
 * @param {string} currentPath The current path being traversed in the object hierarchy.
 * @param {string} fullPath The full path to the current key being evaluated.
 * @returns {unknown} The value retrieved from the source object.
 */
var getValue = function (source, key, currentPath, fullPath) {
    if (cache.has(currentPath))
        return cache.get(currentPath);
    // Early return if source is not an object
    if (typeof source === UNDEFINED || source === null) {
        cache.set(currentPath, undefined);
        return undefined;
    }
    // Check if key is a numeric string once and reuse the result
    var numericKey = WHOLE_NUMBER.test(key) ? Number(key) : null;
    // We assign `value` to the element at the `numericKey`
    // index if `source` is an array and `key` is a numeric
    // string, otherwise we treat `source` as an object and
    // assign `value` to the property with the name `key`.
    var value = numericKey !== null && Array.isArray(source)
        ? source[numericKey]
        : source[key];
    // If the value is a function, call it with the provided
    // parameters
    if (typeof value === FUNCTION)
        value = value.call(source, key, currentPath, fullPath);
    cache.set(currentPath, value);
    return value;
};
exports["default"] = getValue;


/***/ }),

/***/ "./src/getValueFromIndicies.ts":
/*!*************************************!*\
  !*** ./src/getValueFromIndicies.ts ***!
  \*************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var appendPathIndex_1 = __importDefault(__webpack_require__(/*! ./appendPathIndex */ "./src/appendPathIndex.ts"));
var appendPath_1 = __importDefault(__webpack_require__(/*! ./appendPath */ "./src/appendPath.ts"));
var getValue_1 = __importDefault(__webpack_require__(/*! ./getValue */ "./src/getValue.ts"));
var cache = __importStar(__webpack_require__(/*! ./cache */ "./src/cache.ts"));
var BRACKETS = /[[\]]+/;
/**
 * This function retrieves the value from an array based on the provided indicies.
 * @param {unknown} value The value to evaluate
 * @param {string} indicies The indicies to evaluate in the form of '[0][1][2]...[n]'
 * @param {string} currentPath The current path
 * @param {string} path The full path
 * @returns {unknown} The value retrieved from the array based on the indicies.
 */
var getValueFromIndicies = function (value, indicies, currentPath, path) {
    var finalPath = (0, appendPath_1.default)(currentPath, indicies);
    // Check if the current path is in the cache
    if (cache.has(finalPath))
        return cache.get(finalPath);
    // Split the indicie values into an array of keys
    var keys = indicies.split(BRACKETS).filter(Boolean);
    for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
        var key = keys_1[_i];
        // Append the [key] to the current path
        currentPath = (0, appendPathIndex_1.default)(currentPath, key);
        // Retrieve the value associated with the key
        value = (0, getValue_1.default)(value, key, currentPath, path);
        // quit if the value is undefined
        if (value === undefined)
            break;
    }
    return value;
};
exports["default"] = getValueFromIndicies;


/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TripleCurlyBraces = exports.SquareBracketsWithHyphens = exports.SquareBracketsWithColons = exports.SquareBrackets = exports.CurlyBracesWithExclamationMarks = exports.Pointy = exports.VerticalBars = exports.PercentSigns = exports.PercentBrackets = exports.Parentheses = exports.Mustache = exports.HTMLComments = exports.HashSymbolsWithCurlyBraces = exports.Handlebars = exports.ExclamationMarks = exports.Dunders = exports.DoubleUnderscores = exports.DoubleSquareBracketsWithDollarSigns = exports.DoubleSquareBrackets = exports.DoubleQuestionMarks = exports.DoubleCurlyBracesWithPercentSign = exports.DoubleCurlyBraces = exports.DoubleColonsWithBraces = exports.DoubleCaretsWithBraces = exports.DoubleAtSigns = exports.DoubleAngle = exports.DollarSignWithCurlyBraces = exports.DollarSignsWithSquareBrackets = exports.CurlyBracesWithHashSymbols = exports.CurlyBracesWithDollarSigns = exports.CurlyBraces = exports.Chevrons = exports.Backticks = exports.AngleBracketsWithPercentSigns = exports.AngleBrackets = exports.findValueByPath = exports.replaceTags = exports.styles = exports.clearCache = exports.environment = exports.timestamp = exports.version = void 0;
// Import functions
var findValueByPath_1 = __importDefault(__webpack_require__(/*! ./findValueByPath */ "./src/findValueByPath.ts"));
exports.findValueByPath = findValueByPath_1.default;
var replaceTags_1 = __importDefault(__webpack_require__(/*! ./replaceTags */ "./src/replaceTags.ts"));
exports.replaceTags = replaceTags_1.default;
var cache_1 = __webpack_require__(/*! ./cache */ "./src/cache.ts");
// Import styles
var AngleBrackets_1 = __importDefault(__webpack_require__(/*! ./styles/AngleBrackets */ "./src/styles/AngleBrackets.ts"));
exports.AngleBrackets = AngleBrackets_1.default;
var AngleBracketsWithPercentSigns_1 = __importDefault(__webpack_require__(/*! ./styles/AngleBracketsWithPercentSigns */ "./src/styles/AngleBracketsWithPercentSigns.ts"));
exports.AngleBracketsWithPercentSigns = AngleBracketsWithPercentSigns_1.default;
var Backticks_1 = __importDefault(__webpack_require__(/*! ./styles/Backticks */ "./src/styles/Backticks.ts"));
exports.Backticks = Backticks_1.default;
var Chevrons_1 = __importDefault(__webpack_require__(/*! ./styles/Chevrons */ "./src/styles/Chevrons.ts"));
exports.Chevrons = Chevrons_1.default;
var CurlyBraces_1 = __importDefault(__webpack_require__(/*! ./styles/CurlyBraces */ "./src/styles/CurlyBraces.ts"));
exports.CurlyBraces = CurlyBraces_1.default;
var CurlyBracesWithDollarSigns_1 = __importDefault(__webpack_require__(/*! ./styles/CurlyBracesWithDollarSigns */ "./src/styles/CurlyBracesWithDollarSigns.ts"));
exports.CurlyBracesWithDollarSigns = CurlyBracesWithDollarSigns_1.default;
var CurlyBracesWithHashSymbols_1 = __importDefault(__webpack_require__(/*! ./styles/CurlyBracesWithHashSymbols */ "./src/styles/CurlyBracesWithHashSymbols.ts"));
exports.CurlyBracesWithHashSymbols = CurlyBracesWithHashSymbols_1.default;
var DollarSignWithCurlyBraces_1 = __importDefault(__webpack_require__(/*! ./styles/DollarSignWithCurlyBraces */ "./src/styles/DollarSignWithCurlyBraces.ts"));
exports.DollarSignWithCurlyBraces = DollarSignWithCurlyBraces_1.default;
var DollarSignsWithSquareBrackets_1 = __importDefault(__webpack_require__(/*! ./styles/DollarSignsWithSquareBrackets */ "./src/styles/DollarSignsWithSquareBrackets.ts"));
exports.DollarSignsWithSquareBrackets = DollarSignsWithSquareBrackets_1.default;
var DoubleAngle_1 = __importDefault(__webpack_require__(/*! ./styles/DoubleAngle */ "./src/styles/DoubleAngle.ts"));
exports.DoubleAngle = DoubleAngle_1.default;
var DoubleAtSigns_1 = __importDefault(__webpack_require__(/*! ./styles/DoubleAtSigns */ "./src/styles/DoubleAtSigns.ts"));
exports.DoubleAtSigns = DoubleAtSigns_1.default;
var DoubleCaretsWithBraces_1 = __importDefault(__webpack_require__(/*! ./styles/DoubleCaretsWithBraces */ "./src/styles/DoubleCaretsWithBraces.ts"));
exports.DoubleCaretsWithBraces = DoubleCaretsWithBraces_1.default;
var DoubleColonsWithBraces_1 = __importDefault(__webpack_require__(/*! ./styles/DoubleColonsWithBraces */ "./src/styles/DoubleColonsWithBraces.ts"));
exports.DoubleColonsWithBraces = DoubleColonsWithBraces_1.default;
var DoubleCurlyBraces_1 = __importDefault(__webpack_require__(/*! ./styles/DoubleCurlyBraces */ "./src/styles/DoubleCurlyBraces.ts"));
exports.DoubleCurlyBraces = DoubleCurlyBraces_1.default;
var DoubleCurlyBracesWithPercentSigns_1 = __importDefault(__webpack_require__(/*! ./styles/DoubleCurlyBracesWithPercentSigns */ "./src/styles/DoubleCurlyBracesWithPercentSigns.ts"));
exports.DoubleCurlyBracesWithPercentSign = DoubleCurlyBracesWithPercentSigns_1.default;
var DoubleQuestionMarks_1 = __importDefault(__webpack_require__(/*! ./styles/DoubleQuestionMarks */ "./src/styles/DoubleQuestionMarks.ts"));
exports.DoubleQuestionMarks = DoubleQuestionMarks_1.default;
var DoubleSquareBrackets_1 = __importDefault(__webpack_require__(/*! ./styles/DoubleSquareBrackets */ "./src/styles/DoubleSquareBrackets.ts"));
exports.DoubleSquareBrackets = DoubleSquareBrackets_1.default;
var DoubleSquareBracketsWithDollarSigns_1 = __importDefault(__webpack_require__(/*! ./styles/DoubleSquareBracketsWithDollarSigns */ "./src/styles/DoubleSquareBracketsWithDollarSigns.ts"));
exports.DoubleSquareBracketsWithDollarSigns = DoubleSquareBracketsWithDollarSigns_1.default;
var DoubleUnderscores_1 = __importDefault(__webpack_require__(/*! ./styles/DoubleUnderscores */ "./src/styles/DoubleUnderscores.ts"));
exports.DoubleUnderscores = DoubleUnderscores_1.default;
var Dunders_1 = __importDefault(__webpack_require__(/*! ./styles/Dunders */ "./src/styles/Dunders.ts"));
exports.Dunders = Dunders_1.default;
var ExclamationMarks_1 = __importDefault(__webpack_require__(/*! ./styles/ExclamationMarks */ "./src/styles/ExclamationMarks.ts"));
exports.ExclamationMarks = ExclamationMarks_1.default;
var HashSymbolsWithCurlyBraces_1 = __importDefault(__webpack_require__(/*! ./styles/HashSymbolsWithCurlyBraces */ "./src/styles/HashSymbolsWithCurlyBraces.ts"));
exports.HashSymbolsWithCurlyBraces = HashSymbolsWithCurlyBraces_1.default;
var Handlebars_1 = __importDefault(__webpack_require__(/*! ./styles/Handlebars */ "./src/styles/Handlebars.ts"));
exports.Handlebars = Handlebars_1.default;
var HTMLComments_1 = __importDefault(__webpack_require__(/*! ./styles/HTMLComments */ "./src/styles/HTMLComments.ts"));
exports.HTMLComments = HTMLComments_1.default;
var Mustache_1 = __importDefault(__webpack_require__(/*! ./styles/Mustache */ "./src/styles/Mustache.ts"));
exports.Mustache = Mustache_1.default;
var Parentheses_1 = __importDefault(__webpack_require__(/*! ./styles/Parentheses */ "./src/styles/Parentheses.ts"));
exports.Parentheses = Parentheses_1.default;
var PercentBrackets_1 = __importDefault(__webpack_require__(/*! ./styles/PercentBrackets */ "./src/styles/PercentBrackets.ts"));
exports.PercentBrackets = PercentBrackets_1.default;
var PercentSigns_1 = __importDefault(__webpack_require__(/*! ./styles/PercentSigns */ "./src/styles/PercentSigns.ts"));
exports.PercentSigns = PercentSigns_1.default;
var VerticalBars_1 = __importDefault(__webpack_require__(/*! ./styles/VerticalBars */ "./src/styles/VerticalBars.ts"));
exports.VerticalBars = VerticalBars_1.default;
var Pointy_1 = __importDefault(__webpack_require__(/*! ./styles/Pointy */ "./src/styles/Pointy.ts"));
exports.Pointy = Pointy_1.default;
var CurlyBracesWithExclamationMarks_1 = __importDefault(__webpack_require__(/*! ./styles/CurlyBracesWithExclamationMarks */ "./src/styles/CurlyBracesWithExclamationMarks.ts"));
exports.CurlyBracesWithExclamationMarks = CurlyBracesWithExclamationMarks_1.default;
var SquareBrackets_1 = __importDefault(__webpack_require__(/*! ./styles/SquareBrackets */ "./src/styles/SquareBrackets.ts"));
exports.SquareBrackets = SquareBrackets_1.default;
var SquareBracketsWithColons_1 = __importDefault(__webpack_require__(/*! ./styles/SquareBracketsWithColons */ "./src/styles/SquareBracketsWithColons.ts"));
exports.SquareBracketsWithColons = SquareBracketsWithColons_1.default;
var SquareBracketsWithHyphens_1 = __importDefault(__webpack_require__(/*! ./styles/SquareBracketsWithHyphens */ "./src/styles/SquareBracketsWithHyphens.ts"));
exports.SquareBracketsWithHyphens = SquareBracketsWithHyphens_1.default;
var TripleCurlyBraces_1 = __importDefault(__webpack_require__(/*! ./styles/TripleCurlyBraces */ "./src/styles/TripleCurlyBraces.ts"));
exports.TripleCurlyBraces = TripleCurlyBraces_1.default;
// Build Varialbles populated by Webpack DefinePlugin
// Define version number
exports.version = "1.2.1";
// Define timestamped build
exports.timestamp = 1711654117696;
// Define environment build
exports.environment = "development";
// Epoxrt main function
exports["default"] = replaceTags_1.default;
// Export utility functions
exports.clearCache = cache_1.clear;
// Export styles
exports.styles = [
    AngleBrackets_1.default,
    AngleBracketsWithPercentSigns_1.default,
    Backticks_1.default,
    Chevrons_1.default,
    CurlyBraces_1.default,
    CurlyBracesWithDollarSigns_1.default,
    CurlyBracesWithHashSymbols_1.default,
    DollarSignsWithSquareBrackets_1.default,
    DollarSignWithCurlyBraces_1.default,
    DoubleAngle_1.default,
    DoubleAtSigns_1.default,
    DoubleCaretsWithBraces_1.default,
    DoubleColonsWithBraces_1.default,
    DoubleCurlyBraces_1.default,
    DoubleCurlyBracesWithPercentSigns_1.default,
    DoubleQuestionMarks_1.default,
    DoubleSquareBrackets_1.default,
    DoubleSquareBracketsWithDollarSigns_1.default,
    DoubleUnderscores_1.default,
    Dunders_1.default,
    ExclamationMarks_1.default,
    Handlebars_1.default,
    HashSymbolsWithCurlyBraces_1.default,
    HTMLComments_1.default,
    Mustache_1.default,
    Parentheses_1.default,
    PercentBrackets_1.default,
    PercentSigns_1.default,
    VerticalBars_1.default,
    Pointy_1.default,
    CurlyBracesWithExclamationMarks_1.default,
    SquareBrackets_1.default,
    SquareBracketsWithColons_1.default,
    SquareBracketsWithHyphens_1.default,
    TripleCurlyBraces_1.default,
];


/***/ }),

/***/ "./src/replaceTags.ts":
/*!****************************!*\
  !*** ./src/replaceTags.ts ***!
  \****************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var tagReplacer_1 = __importDefault(__webpack_require__(/*! ./tagReplacer */ "./src/tagReplacer.ts"));
var getOptionsWithDefaults_1 = __importDefault(__webpack_require__(/*! ./getOptionsWithDefaults */ "./src/getOptionsWithDefaults.ts"));
var cache = __importStar(__webpack_require__(/*! ./cache */ "./src/cache.ts"));
var expectedOptionKeys = [
    "tagPattern",
    "tagStartPattern",
    "tagEndPattern",
    "cache",
    "onMissingPath",
    // ignored keys:
    "name",
    "openingTag",
    "closingTag",
];
/**
 * Replaces tags in a text with corresponding values from an object.
 * @param {string} text - The text containing tags to be replaced.
 * @param {object | string} values - The object containing values for replacement.
 * @param {ReplaceTagsOptions} [options] - Optional configuration for tag parsing.
 * @returns {string} The text with replaced tags.
 */
var replaceTags = function (text, values, options) {
    var _a;
    if (typeof text !== "string")
        return text;
    if (typeof values === "string") {
        values = JSON.parse(values);
    }
    if (typeof options === "object" && options !== null) {
        Object.keys(options).every(function (key) {
            if (!expectedOptionKeys.includes(key)) {
                throw new Error("Unexpected option key: ".concat(key));
            }
            return true;
        });
    }
    var _b = (0, getOptionsWithDefaults_1.default)(options), onMissingPath = _b.onMissingPath, tagPattern = _b.tagPattern, tagStartPattern = _b.tagStartPattern, tagEndPattern = _b.tagEndPattern;
    var pattern = tagPattern;
    var tagEdges = new RegExp("".concat(tagStartPattern.source + "\\s*", "|").concat("\\s*" + tagEndPattern.source), "g");
    var keepCache = (_a = options === null || options === void 0 ? void 0 : options.cache) !== null && _a !== void 0 ? _a : false;
    if (!keepCache)
        cache.clear();
    try {
        return text.replace(pattern, (0, tagReplacer_1.default)(values, tagEdges, onMissingPath));
    }
    finally {
        if (!keepCache)
            cache.clear();
    }
};
exports["default"] = replaceTags;


/***/ }),

/***/ "./src/stringify.ts":
/*!**************************!*\
  !*** ./src/stringify.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
var STRING = "string";
var OBJECT = "object";
/**
 * Convert value to string
 * @param {unknown} value The value to convert to a string.
 * @param {string} path The default value to return if the value is undefined or null.
 * @param {string} tag The tag that contains the missing path.
 * @param {MissingPathCallback} onMissingPath A callback function to handle missing paths.
 * @returns {string} The value as a string.
 * @example
 * stringify("Hello, World!", "default value"); // "Hello, World!"
 * stringify(42, "default value"); // "42"
 * stringify(undefined, "default value"); // "default value"
 * stringify(null, "default value"); // "default value"
 * stringify({ key: "value" }, "default value"); // '{"key":"value"}'
 * stringify([1, 2, 3], "default value"); // '[1,2,3]'
 * stringify(true, "default value"); // "true"
 * stringify(false, "default value"); // "false"
 * stringify(0, "default value"); // "0"
 * stringify("", "default value"); // ""
 */
var stringify = function (value, path, tag, onMissingPath) {
    if (value === null || value === undefined)
        return onMissingPath(path, tag);
    switch (typeof value) {
        case STRING:
            // @ts-expect-error - We know this is a string
            return value;
        case OBJECT:
            return JSON.stringify(value);
        default:
            return String(value !== null && value !== void 0 ? value : onMissingPath(path, tag));
    }
};
exports["default"] = stringify;


/***/ }),

/***/ "./src/styles/AngleBrackets.ts":
/*!*************************************!*\
  !*** ./src/styles/AngleBrackets.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
/**
 * Options for replacing tags using angle brackets (`<<` `>>`).
 * Matches tags of the form `<<variable>>` in the text.
 * @example
 * // Example usage:
 * const text = 'Hello <<variable>>';
 * const result = replaceTags(text, { variable: 'world' }, AngleBrackets);
 * console.log(result); // Output: 'Hello world'
 */
var AngleBrackets = {
    name: "Angle Brackets",
    openingTag: "<<",
    closingTag: ">>",
    tagPattern: /<<([^>]+)>>/g,
    tagStartPattern: /^<</,
    tagEndPattern: />>$/,
};
exports["default"] = AngleBrackets;


/***/ }),

/***/ "./src/styles/AngleBracketsWithPercentSigns.ts":
/*!*****************************************************!*\
  !*** ./src/styles/AngleBracketsWithPercentSigns.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
/**
 * Options for replacing tags using angle brackets with percent signs (`<%` `%>`).
 * Matches tags of the form `<%variable%>` in the text.
 * @example
 * // Example usage:
 * const text = 'Hello <%variable%>';
 * const result = replaceTags(text, { variable: 'world' }, AngleBracketsWithPercentSigns);
 * console.log(result); // Output: 'Hello world'
 */
var AngleBracketsWithPercentSigns = {
    name: "Angle Brackets With Percent Signs",
    openingTag: "<%",
    closingTag: "%>",
    tagPattern: /<%([^%]+)%>/g,
    tagStartPattern: /^<%/,
    tagEndPattern: /%>$/,
};
exports["default"] = AngleBracketsWithPercentSigns;


/***/ }),

/***/ "./src/styles/Backticks.ts":
/*!*********************************!*\
  !*** ./src/styles/Backticks.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
/**
 * Options for replacing tags using backticks (` `` ` ` `` `).
 * Matches tags of the form ` ``variable`` ` in the text.
 * @example
 * // Example usage:
 * const text = 'Hello ``variable``';
 * const result = replaceTags(text, { variable: 'world' }, Backticks);
 * console.log(result); // Output: 'Hello world'
 */
var Backticks = {
    name: "Backticks",
    openingTag: "``",
    closingTag: "``",
    tagPattern: /``([^`]+)``/g,
    tagStartPattern: /^``/,
    tagEndPattern: /``$/,
};
exports["default"] = Backticks;


/***/ }),

/***/ "./src/styles/Chevrons.ts":
/*!********************************!*\
  !*** ./src/styles/Chevrons.ts ***!
  \********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var AngleBrackets_1 = __importDefault(__webpack_require__(/*! ./AngleBrackets */ "./src/styles/AngleBrackets.ts"));
/**
 * Options for replacing tags using angle brackets (`<<` `>>`).
 * Matches tags of the form `<<variable>>` in the text.
 * @example
 * // Example usage:
 * const text = 'Hello <<variable>>';
 * const result = replaceTags(text, { variable: 'world' }, Chevrons);
 * console.log(result); // Output: 'Hello world'
 */
var Chevrons = __assign(__assign({}, AngleBrackets_1.default), { name: "Chevrons" });
exports["default"] = Chevrons;


/***/ }),

/***/ "./src/styles/CurlyBraces.ts":
/*!***********************************!*\
  !*** ./src/styles/CurlyBraces.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
/**
 * Options for replacing tags using curly braces (`{` `}`).
 * Matches tags of the form `{variable}` in the text.
 * @example
 * // Example usage:
 * const text = 'Hello {variable}';
 * const result = replaceTags(text, { variable: 'world' }, CurlyBraces);
 * console.log(result); // Output: 'Hello world'
 */
var CurlyBraces = {
    name: "Curly Braces",
    openingTag: "{",
    closingTag: "}",
    tagPattern: /\{[^}]*\}/g,
    tagStartPattern: /^\{/,
    tagEndPattern: /\}$/,
};
exports["default"] = CurlyBraces;


/***/ }),

/***/ "./src/styles/CurlyBracesWithDollarSigns.ts":
/*!**************************************************!*\
  !*** ./src/styles/CurlyBracesWithDollarSigns.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
/**
 * Options for replacing tags using curly braces with dollar signs (`{$` `$}`).
 * Matches tags of the form `{$variable$}` in the text.
 * @example
 * // Example usage:
 * const text = 'Hello {$variable$}';
 * const result = replaceTags(text, { variable: 'world' }, CurlyBracesWithDollarSigns);
 * console.log(result); // Output: 'Hello world'
 */
var CurlyBracesWithDollarSigns = {
    name: "Curly Braces With Dollar Signs",
    openingTag: "{$",
    closingTag: "$}",
    tagPattern: /\{\$+(.*?)\$\}/g,
    tagStartPattern: /^\{\$/,
    tagEndPattern: /\$\}$/,
};
exports["default"] = CurlyBracesWithDollarSigns;


/***/ }),

/***/ "./src/styles/CurlyBracesWithExclamationMarks.ts":
/*!*******************************************************!*\
  !*** ./src/styles/CurlyBracesWithExclamationMarks.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
/**
 * Options for replacing tags using exclamation marks (`{!` `!}`).
 * Matches tags of the form `{!variable!}` in the text.
 * @example
 * // Example usage:
 * const text = 'Hello {!variable!}';
 * const result = replaceTags(text, { variable: 'world' }, CurlyBracesWithExclamationMarks);
 * console.log(result); // Output: 'Hello world'
 */
var CurlyBracesWithExclamationMarks = {
    name: "Curly Braces With Exclamation Marks",
    openingTag: "{!",
    closingTag: "!}",
    tagPattern: /\{!([^!]+)!\}/g,
    tagStartPattern: /^\{!/,
    tagEndPattern: /!\}$/,
};
exports["default"] = CurlyBracesWithExclamationMarks;


/***/ }),

/***/ "./src/styles/CurlyBracesWithHashSymbols.ts":
/*!**************************************************!*\
  !*** ./src/styles/CurlyBracesWithHashSymbols.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
/**
 * Options for replacing tags using curly braces with pound signs (`{#` `#}`).
 * Matches tags of the form `{#variable#}` in the text.
 * @example
 * // Example usage:
 * const text = 'Hello {#variable#}';
 * const result = replaceTags(text, { variable: 'world' }, CurlyBracesWithHashSymbols);
 * console.log(result); // Output: 'Hello world'
 */
var CurlyBracesWithHashSymbols = {
    name: "Curly Braces With Hash Symbols",
    openingTag: "{#",
    closingTag: "#}",
    tagPattern: /\{#.*?#\}/g,
    tagStartPattern: /^\{#/,
    tagEndPattern: /#\}$/,
};
exports["default"] = CurlyBracesWithHashSymbols;


/***/ }),

/***/ "./src/styles/DollarSignWithCurlyBraces.ts":
/*!*************************************************!*\
  !*** ./src/styles/DollarSignWithCurlyBraces.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
/**
 * Options for replacing tags using dollar signs and curly braces (`${` `}`).
 * Matches tags of the form `${variable}` in the text.
 * @example
 * // Example usage:
 * const text = 'Hello ${variable}';
 * const result = replaceTags(text, { variable: 'world' }, DollarSignWithCurlyBraces);
 * console.log(result); // Output: 'Hello world'
 */
var DollarSignWithCurlyBraces = {
    name: "Dollar Sign With Curly Braces",
    openingTag: "${",
    closingTag: "}",
    tagPattern: /\$\{([^}]+)\}/g,
    tagStartPattern: /^\$\{/,
    tagEndPattern: /\}$/,
};
exports["default"] = DollarSignWithCurlyBraces;


/***/ }),

/***/ "./src/styles/DollarSignsWithSquareBrackets.ts":
/*!*****************************************************!*\
  !*** ./src/styles/DollarSignsWithSquareBrackets.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
/**
 * Options for replacing tags using dollar signs and square brackets (`$[` `]$`).
 * Matches tags of the form `$[variable]$` in the text.
 * @example
 * // Example usage:
 * const text = 'Hello $[variable]$';
 * const result = replaceTags(text, { variable: 'world' }, DollarSignsWithSquareBrackets);
 * console.log(result); // Output: 'Hello world'
 */
var DollarSignsWithSquareBrackets = {
    name: "Dollar Signs With Square Brackets",
    openingTag: "$[",
    closingTag: "]$",
    tagPattern: /\$\[([^\]]*(?:](?!\$)[^\]]*)*)\]\$/g,
    tagStartPattern: /^\$\[/,
    tagEndPattern: /\]\$$/,
};
exports["default"] = DollarSignsWithSquareBrackets;


/***/ }),

/***/ "./src/styles/DoubleAngle.ts":
/*!***********************************!*\
  !*** ./src/styles/DoubleAngle.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
/**
 * Options for replacing tags using double angle brackets (`«` `»`).
 * Matches tags of the form `«variable»` in the text.
 * @example
 * // Example usage:
 * const text = 'Hello «variable»';
 * const result = replaceTags(text, { variable: 'world' }, DoubleAngle);
 * console.log(result); // Output: 'Hello world'
 */
var DoubleAngle = {
    name: "Double Angle",
    openingTag: "\xAB",
    closingTag: "\xBB",
    tagPattern: /\xAB([^\xBB]+)\xBB/g,
    tagStartPattern: /^\xAB/,
    tagEndPattern: /\xBB$/,
};
exports["default"] = DoubleAngle;


/***/ }),

/***/ "./src/styles/DoubleAtSigns.ts":
/*!*************************************!*\
  !*** ./src/styles/DoubleAtSigns.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
/**
 * Options for replacing tags using double at signs (`@@` `@@`).
 * Matches tags of the form `@@variable@@` in the text.
 * @example
 * // Example usage:
 * const text = 'Hello @@variable@@';
 * const result = replaceTags(text, { variable: 'world' }, DoubleAtSigns);
 * console.log(result); // Output: 'Hello world'
 */
var DoubleAtSigns = {
    name: "Double At Signs",
    openingTag: "@@",
    closingTag: "@@",
    tagPattern: /@@[^@]+@@/g,
    tagStartPattern: /^@@/,
    tagEndPattern: /@@$/,
};
exports["default"] = DoubleAtSigns;


/***/ }),

/***/ "./src/styles/DoubleCaretsWithBraces.ts":
/*!**********************************************!*\
  !*** ./src/styles/DoubleCaretsWithBraces.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
/**
 * Options for replacing tags using double carets with braces (`^^` `^^`).
 * Matches tags of the form `^^{variable}^^` in the text.
 * @example
 * // Example usage:
 * const text = 'Hello ^^{variable}^^';
 * const result = replaceTags(text, { variable: 'world' }, DoubleCaretsWithBraces);
 * console.log(result); // Output: 'Hello world'
 */
var DoubleCaretsWithBraces = {
    name: "Double Carets With Braces",
    openingTag: "^^{",
    closingTag: "}^^",
    tagPattern: /\^\^\{[^}]+\}\^\^/g,
    tagStartPattern: /^\^\^\{/,
    tagEndPattern: /\}\^\^$/,
};
exports["default"] = DoubleCaretsWithBraces;


/***/ }),

/***/ "./src/styles/DoubleColonsWithBraces.ts":
/*!**********************************************!*\
  !*** ./src/styles/DoubleColonsWithBraces.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
/**
 * Options for replacing tags using double colons with braces (`::` `::`).
 * Matches tags of the form `::{variable}::` in the text.
 * @example
 * // Example usage:
 * const text = 'Hello ::{variable}::';
 * const result = replaceTags(text, { variable: 'world' }, DoubleColonsWithBraces);
 * console.log(result); // Output: 'Hello world'
 */
var DoubleColonsWithBraces = {
    name: "Double Colons With Braces",
    openingTag: "::{",
    closingTag: "}::",
    tagPattern: /::\{[^}]+\}::/g,
    tagStartPattern: /^::\{/,
    tagEndPattern: /\}::$/,
};
exports["default"] = DoubleColonsWithBraces;


/***/ }),

/***/ "./src/styles/DoubleCurlyBraces.ts":
/*!*****************************************!*\
  !*** ./src/styles/DoubleCurlyBraces.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
/**
 * Options for replacing tags using double curly braces (`{{` `}}`).
 * Matches tags of the form `{{variable}}` in the text.
 * @example
 * // Example usage:
 * const text = 'Hello {{variable}}';
 * const result = replaceTags(text, { variable: 'world' }, DoubleCurlyBraces);
 * console.log(result); // Output: 'Hello world'
 */
var DoubleCurlyBraces = {
    name: "Double Curly Braces",
    openingTag: "{{",
    closingTag: "}}",
    tagPattern: /\{\{([^}]+)\}\}/g,
    tagStartPattern: /^\{\{/,
    tagEndPattern: /\}\}$/,
};
exports["default"] = DoubleCurlyBraces;


/***/ }),

/***/ "./src/styles/DoubleCurlyBracesWithPercentSigns.ts":
/*!*********************************************************!*\
  !*** ./src/styles/DoubleCurlyBracesWithPercentSigns.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
/**
 * Options for replacing tags using double curly braces with percent signs (`{{%` `%}}`).
 * Matches tags of the form `{{%variable%}}` in the text.
 * @example
 * // Example usage:
 * const text = 'Hello {{%variable%}}';
 * const result = replaceTags(text, { variable: 'world' }, DoubleCurlyBracesWithPercentSigns);
 * console.log(result); // Output: 'Hello world'
 */
var DoubleCurlyBracesWithPercentSigns = {
    name: "Double Curly Braces With Percent Signs",
    openingTag: "{{%",
    closingTag: "%}}",
    tagPattern: /\{\{%([^%]+)%\}\}/g,
    tagStartPattern: /^\{\{%/,
    tagEndPattern: /%\}\}$/,
};
exports["default"] = DoubleCurlyBracesWithPercentSigns;


/***/ }),

/***/ "./src/styles/DoubleQuestionMarks.ts":
/*!*******************************************!*\
  !*** ./src/styles/DoubleQuestionMarks.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
/**
 * Options for replacing tags using double question marks (`??` `??`).
 * Matches tags of the form `??variable??` in the text.
 * @example
 * // Example usage:
 * const text = 'Hello ??variable??';
 * const result = replaceTags(text, { variable: 'world' }, DoubleQuestionMarks);
 * console.log(result); // Output: 'Hello world'
 */
var DoubleQuestionMarks = {
    name: "Double Question Marks",
    openingTag: "??",
    closingTag: "??",
    tagPattern: /\?\?[^?]+\?\?/g,
    tagStartPattern: /^\?\?/,
    tagEndPattern: /\?\?$/,
};
exports["default"] = DoubleQuestionMarks;


/***/ }),

/***/ "./src/styles/DoubleSquareBrackets.ts":
/*!********************************************!*\
  !*** ./src/styles/DoubleSquareBrackets.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
/**
 * Options for replacing tags using double square brackets (`[[` `]]`).
 * Matches tags of the form `[[variable]]` in the text.
 * @example
 * // Example usage:
 * const text = 'Hello [[variable]]';
 * const result = replaceTags(text, { variable: 'world' }, DoubleSquareBrackets);
 * console.log(result); // Output: 'Hello world'
 */
var DoubleSquareBrackets = {
    name: "Double Square Brackets",
    openingTag: "[[",
    closingTag: "]]",
    tagPattern: /\[\[.*?\]\]+/g,
    tagStartPattern: /^\[\[/,
    tagEndPattern: /\]\]$/,
};
exports["default"] = DoubleSquareBrackets;


/***/ }),

/***/ "./src/styles/DoubleSquareBracketsWithDollarSigns.ts":
/*!***********************************************************!*\
  !*** ./src/styles/DoubleSquareBracketsWithDollarSigns.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
/**
 * Options for replacing tags using double square brackets with dollar signs (`[[$` `$]]`).
 * Matches tags of the form `[[$variable$]]` in the text.
 * @example
 * // Example usage:
 * const text = 'Hello [[$variable$]]';
 * const result = replaceTags(text, { variable: 'world' }, DoubleSquareBracketsWithDollarSigns);
 * console.log(result); // Output: 'Hello world'
 */
var DoubleSquareBracketsWithDollarSigns = {
    name: "Double Square Brackets With Dollar Signs",
    openingTag: "[[$",
    closingTag: "$]]",
    tagPattern: /\[\[\$(.*?)\$\]\]/g,
    tagStartPattern: /^\[\[\$/,
    tagEndPattern: /\$\]\]$/,
};
exports["default"] = DoubleSquareBracketsWithDollarSigns;


/***/ }),

/***/ "./src/styles/DoubleUnderscores.ts":
/*!*****************************************!*\
  !*** ./src/styles/DoubleUnderscores.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
/**
 * Options for replacing tags using double underscores (`__` `__`).
 * Matches tags of the form `__variable__` in the text.
 * @example
 * // Example usage:
 * const text = 'Hello __variable__';
 * const result = replaceTags(text, { variable: 'world' }, DoubleUnderscores);
 * console.log(result); // Output: 'Hello world'
 */
var DoubleUnderscores = {
    name: "Double Underscores",
    openingTag: "__",
    closingTag: "__",
    tagPattern: /__+.+?__+/g,
    tagStartPattern: /^__/,
    tagEndPattern: /__$/,
};
exports["default"] = DoubleUnderscores;


/***/ }),

/***/ "./src/styles/Dunders.ts":
/*!*******************************!*\
  !*** ./src/styles/Dunders.ts ***!
  \*******************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var DoubleUnderscores_1 = __importDefault(__webpack_require__(/*! ./DoubleUnderscores */ "./src/styles/DoubleUnderscores.ts"));
/**
 * Options for replacing tags using double underscores (`__` `__`).
 * Matches tags of the form `__variable__` in the text.
 * @example
 * // Example usage:
 * const text = 'Hello __variable__';
 * const result = replaceTags(text, { variable: 'world' }, Dunders);
 * console.log(result); // Output: 'Hello world'
 */
var Dunders = __assign(__assign({}, DoubleUnderscores_1.default), { name: "Dunders" });
exports["default"] = Dunders;


/***/ }),

/***/ "./src/styles/ExclamationMarks.ts":
/*!****************************************!*\
  !*** ./src/styles/ExclamationMarks.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
/**
 * Options for replacing tags using exclamation marks (`!` `!`).
 * Matches tags of the form `!{variable}!` in the text.
 * @example
 * // Example usage:
 * const text = 'Hello !{variable}!';
 * const result = replaceTags(text, { variable: 'world' }, ExclamationMarks);
 * console.log(result); // Output: 'Hello world'
 */
var ExclamationMarks = {
    name: "Exclamation Marks",
    openingTag: "!{",
    closingTag: "}!",
    tagPattern: /!\{([^}]+)\}!/g,
    tagStartPattern: /^!\{/,
    tagEndPattern: /\}!$/,
};
exports["default"] = ExclamationMarks;


/***/ }),

/***/ "./src/styles/HTMLComments.ts":
/*!************************************!*\
  !*** ./src/styles/HTMLComments.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
/**
 * Options for replacing tags using HTML comments (`<!--` `-->`).
 * Matches tags of the form `<!--variable-->` in the text.
 * @example
 * // Example usage:
 * const text = 'Hello <!--variable-->';
 * const result = replaceTags(text, { variable: 'world' }, HTMLComments);
 * console.log(result); // Output: 'Hello world'
 */
var HTMLComments = {
    name: "HTML Comments",
    openingTag: "<!--",
    closingTag: "--!>",
    tagPattern: /<!--.*?--!>/g,
    tagStartPattern: /^<!--/,
    tagEndPattern: /--!>$/,
};
exports["default"] = HTMLComments;


/***/ }),

/***/ "./src/styles/Handlebars.ts":
/*!**********************************!*\
  !*** ./src/styles/Handlebars.ts ***!
  \**********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var CurlyBraces_1 = __importDefault(__webpack_require__(/*! ./CurlyBraces */ "./src/styles/CurlyBraces.ts"));
/**
 * Options for replacing tags using curly braces (`{` `}`).
 * Matches tags of the form `{variable}` in the text.
 * @example
 * // Example usage:
 * const text = 'Hello {variable}';
 * const result = replaceTags(text, { variable: 'world' }, Handlebars);
 * console.log(result); // Output: 'Hello world'
 */
var Handlebars = __assign(__assign({}, CurlyBraces_1.default), { name: "Handlebars" });
exports["default"] = Handlebars;


/***/ }),

/***/ "./src/styles/HashSymbolsWithCurlyBraces.ts":
/*!**************************************************!*\
  !*** ./src/styles/HashSymbolsWithCurlyBraces.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
/**
 * Options for replacing tags using hash symbols and curly braces (`#{` `}#`).
 * Matches tags of the form `#{variable}#` in the text.
 * @example
 * // Example usage:
 * const text = 'Hello #{variable}#';
 * const result = replaceTags(text, { variable: 'world' }, HashSymbolsWithCurlyBraces);
 * console.log(result); // Output: 'Hello world'
 */
var HashSymbolsWithCurlyBraces = {
    name: "Hash Symbols With Curly Braces",
    openingTag: "#{",
    closingTag: "}#",
    tagPattern: /#\{([^}]+)\}#/g,
    tagStartPattern: /^#\{/,
    tagEndPattern: /\}#$/,
};
exports["default"] = HashSymbolsWithCurlyBraces;


/***/ }),

/***/ "./src/styles/Mustache.ts":
/*!********************************!*\
  !*** ./src/styles/Mustache.ts ***!
  \********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var DoubleCurlyBraces_1 = __importDefault(__webpack_require__(/*! ./DoubleCurlyBraces */ "./src/styles/DoubleCurlyBraces.ts"));
/**
 * Options for replacing tags using double curly braces (`{{` `}}`).
 * Matches tags of the form `{{variable}}` in the text.
 * @example
 * // Example usage:
 * const text = 'Hello {{variable}}';
 * const result = replaceTags(text, { variable: 'world' }, Mustache);
 * console.log(result); // Output: 'Hello world'
 */
var Mustache = __assign(__assign({}, DoubleCurlyBraces_1.default), { name: "Mustache" });
exports["default"] = Mustache;


/***/ }),

/***/ "./src/styles/Parentheses.ts":
/*!***********************************!*\
  !*** ./src/styles/Parentheses.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
/**
 * Options for replacing tags using parentheses (`(` `)`).
 * Matches tags of the form `(variable)` in the text.
 * @example
 * // Example usage:
 * const text = 'Hello (variable)';
 * const result = replaceTags(text, { variable: 'world' }, Parentheses);
 * console.log(result); // Output: 'Hello world'
 */
var Parentheses = {
    name: "Parentheses",
    openingTag: "(",
    closingTag: ")",
    tagPattern: /\(([^)]+)\)/g,
    tagStartPattern: /^\(/,
    tagEndPattern: /\)$/,
};
exports["default"] = Parentheses;


/***/ }),

/***/ "./src/styles/PercentBrackets.ts":
/*!***************************************!*\
  !*** ./src/styles/PercentBrackets.ts ***!
  \***************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var AngleBracketsWithPercentSigns_1 = __importDefault(__webpack_require__(/*! ./AngleBracketsWithPercentSigns */ "./src/styles/AngleBracketsWithPercentSigns.ts"));
/**
 * Options for replacing tags using angle brackets with percent signs (`<%` `%>`).
 * Matches tags of the form `<%variable%>` in the text.
 * @example
 * // Example usage:
 * const text = 'Hello <%variable%>';
 * const result = replaceTags(text, { variable: 'world' }, PercentBrackets);
 * console.log(result); // Output: 'Hello world'
 */
var PercentBrackets = __assign(__assign({}, AngleBracketsWithPercentSigns_1.default), { name: "Percent Brackets" });
exports["default"] = PercentBrackets;


/***/ }),

/***/ "./src/styles/PercentSigns.ts":
/*!************************************!*\
  !*** ./src/styles/PercentSigns.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
/**
 * Options for replacing tags using percent signs (`%{` `}%`).
 * Matches tags of the form `%{variable}%` in the text.
 * @example
 * // Example usage:
 * const text = 'Hello %{variable}%';
 * const result = replaceTags(text, { variable: 'world' }, PercentSigns);
 * console.log(result); // Output: 'Hello world'
 */
var PercentSigns = {
    name: "Percent Signs",
    openingTag: "%{",
    closingTag: "}%",
    tagPattern: /%\{([^}]+)\}%/g,
    tagStartPattern: /^%\{/,
    tagEndPattern: /\}%$/,
};
exports["default"] = PercentSigns;


/***/ }),

/***/ "./src/styles/Pointy.ts":
/*!******************************!*\
  !*** ./src/styles/Pointy.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
/**
 * Options for replacing tags using hand emojis pointing in at the variable (`👉` `👈`).
 * Matches tags of the form `👉variable👈` in the text.
 * @example
 * // Example usage:
 * const text = 'Hello 👉variable👈';
 * const result = replaceTags(text, { variable: 'world' }, Pointy);
 * console.log(result); // Output: 'Hello world'
 */
var Pointy = {
    name: "Pointy",
    openingTag: "\uD83D\uDC49",
    closingTag: "\uD83D\uDC48",
    tagPattern: /\uD83D\uDC49([^\uD83D\uDC48]+)\uD83D\uDC48/gu,
    tagStartPattern: /^\uD83D\uDC49/u,
    tagEndPattern: /\uD83D\uDC48$/u,
};
exports["default"] = Pointy;


/***/ }),

/***/ "./src/styles/SquareBrackets.ts":
/*!**************************************!*\
  !*** ./src/styles/SquareBrackets.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
/**
 * Options for replacing tags using square brackets (`[` `]`).
 * Matches tags of the form `[variable]` in the text.
 * @example
 * // Example usage:
 * const text = 'Hello [variable]';
 * const result = replaceTags(text, { variable: 'world' }, SquareBrackets);
 * console.log(result); // Output: 'Hello world'
 */
var SquareBrackets = {
    name: "Square Brackets",
    openingTag: "[",
    closingTag: "]",
    tagPattern: /\[\s*(\.?[^[]*(\[[^\]]+\])*)+\s*\]+/g,
    tagStartPattern: /^\[/,
    tagEndPattern: /\]$/,
};
exports["default"] = SquareBrackets;


/***/ }),

/***/ "./src/styles/SquareBracketsWithColons.ts":
/*!************************************************!*\
  !*** ./src/styles/SquareBracketsWithColons.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
/**
 * Options for replacing tags using square brackets and colons (`[:` `:]`).
 * Matches tags of the form `[:variable:]` in the text.
 * @example
 * // Example usage:
 * const text = 'Hello [:variable:]';
 * const result = replaceTags(text, { variable: 'world' }, SquareBracketsWithColons);
 * console.log(result); // Output: 'Hello world'
 */
var SquareBracketsWithColons = {
    name: "Square Brackets With Colons",
    openingTag: "[:",
    closingTag: ":]",
    tagPattern: /\[:([^:]+):\]/g,
    tagStartPattern: /^\[:/,
    tagEndPattern: /:\]$/,
};
exports["default"] = SquareBracketsWithColons;


/***/ }),

/***/ "./src/styles/SquareBracketsWithHyphens.ts":
/*!*************************************************!*\
  !*** ./src/styles/SquareBracketsWithHyphens.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
/**
 * Options for replacing tags using square brackets and hyphens (`[-` `-]`).
 * Matches tags of the form `[-variable-]` in the text.
 * @example
 * // Example usage:
 * const text = 'Hello [-variable-]';
 * const result = replaceTags(text, { variable: 'world' }, SquareBracketsWithHyphens);
 * console.log(result); // Output: 'Hello world'
 */
var SquareBracketsWithHyphens = {
    name: "Square Brackets With Hyphens",
    openingTag: "[-",
    closingTag: "-]",
    tagPattern: /\[-[^-]+?-\]/g,
    tagStartPattern: /^\[-/,
    tagEndPattern: /-\]$/,
};
exports["default"] = SquareBracketsWithHyphens;


/***/ }),

/***/ "./src/styles/TripleCurlyBraces.ts":
/*!*****************************************!*\
  !*** ./src/styles/TripleCurlyBraces.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
/**
 * Options for replacing tags using triple curly braces (`{{{` `}}}`).
 * Matches tags of the form `{{{variable}}}` in the text.
 * @example
 * // Example usage:
 * const text = 'Hello {{{variable}}}';
 * const result = replaceTags(text, { variable: 'world' }, TripleCurlyBraces);
 * console.log(result); // Output: 'Hello world'
 */
var TripleCurlyBraces = {
    name: "Triple Curly Braces",
    openingTag: "{{{",
    closingTag: "}}}",
    tagPattern: /\{\{\{([^}]+)\}\}\}/g,
    tagStartPattern: /^\{\{\{/,
    tagEndPattern: /\}\}\}$/,
};
exports["default"] = TripleCurlyBraces;


/***/ }),

/***/ "./src/styles/VerticalBars.ts":
/*!************************************!*\
  !*** ./src/styles/VerticalBars.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
/**
 * Options for replacing tags using vertical bars (`|` `|`).
 * Matches tags of the form `|variable|` in the text.
 * @example
 * // Example usage:
 * const text = 'Hello |variable|';
 * const result = replaceTags(text, { variable: 'world' }, VerticalBars);
 * console.log(result); // Output: 'Hello world'
 */
var VerticalBars = {
    name: "Vertical Bars",
    openingTag: "|",
    closingTag: "|",
    tagPattern: /\|([^|]+)\|/g,
    tagStartPattern: /^\|/,
    tagEndPattern: /\|$/,
};
exports["default"] = VerticalBars;


/***/ }),

/***/ "./src/tagReplacer.ts":
/*!****************************!*\
  !*** ./src/tagReplacer.ts ***!
  \****************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var cache = __importStar(__webpack_require__(/*! ./cache */ "./src/cache.ts"));
var findValueByPath_1 = __importDefault(__webpack_require__(/*! ./findValueByPath */ "./src/findValueByPath.ts"));
var EMPTY = "";
/**
 *
 * Creates a RegEx replacer function to use the corresponding values and tag style.
 * @param {object} values - The object containing values for replacement.
 * @param {RegExp} tagEdges - A regular expression pattern for matching the start or end of a tag.
 * @param {MissingPathCallback} onMissingPath - A callback function to handle missing tags.
 * @returns {RegExReplacer} A function that takes a tag and replaces it with a value.
 */
var tagReplacer = function (values, tagEdges, onMissingPath) {
    /**
     * Replaces a tag with its resolved value if found; otherwise, returns the tag.
     * @param {string} match The matched tag
     * @returns {string} The resolved value if the tag matches a path in the `values` object; otherwise, the original tag.
     */
    var replacer = function (match) {
        var path = match.replace(tagEdges, EMPTY);
        if (!cache.has(path))
            (0, findValueByPath_1.default)(values, path);
        return cache.getString(path, match, onMissingPath);
    };
    return replacer;
};
exports["default"] = tagReplacer;


/***/ }),

/***/ "./src/validatePatterns.ts":
/*!*********************************!*\
  !*** ./src/validatePatterns.ts ***!
  \*********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var checkCondition_1 = __importDefault(__webpack_require__(/*! ./checkCondition */ "./src/checkCondition.ts"));
/**
 * Checks the provided patterns and throws an error if they don't meet certain conditions.
 * @param {ReplaceTagsOptions} options - The options object containing the patterns to check.
 * @returns {void}
 * @throws {Error} Throws an error if the patterns don't meet the conditions.
 */
var validatePatterns = function (_a) {
    var tagEndPattern = _a.tagEndPattern, tagStartPattern = _a.tagStartPattern, tagPattern = _a.tagPattern, onMissingPath = _a.onMissingPath;
    // Global Flag Checks
    (0, checkCondition_1.default)(!tagPattern.global, "tagPattern not flagged as global");
    (0, checkCondition_1.default)(tagStartPattern.global, "tagStartPattern flagged as global");
    (0, checkCondition_1.default)(tagEndPattern.global, "tagEndPattern flagged as global");
    // Start of string or line checks
    (0, checkCondition_1.default)(tagPattern.source.startsWith("^"), "tagPattern starts with `^`");
    (0, checkCondition_1.default)(!tagStartPattern.source.startsWith("^"), "tagStartPattern missing prefix `^`");
    (0, checkCondition_1.default)(tagEndPattern.source.startsWith("^"), "tagEndPattern starts with `^`");
    // End of string or line checks
    (0, checkCondition_1.default)(tagPattern.source.endsWith("$") &&
        !tagPattern.source.endsWith("\\$"), "tagPattern ends with unescaped `$`");
    (0, checkCondition_1.default)(tagStartPattern.source.endsWith("$") &&
        !tagStartPattern.source.endsWith("\\$"), "tagStartPattern ends with unescaped `$`");
    (0, checkCondition_1.default)(!tagEndPattern.source.endsWith("$"), "tagEndPattern missing suffix `$`");
    (0, checkCondition_1.default)(tagEndPattern.source.endsWith("\\$"), "tagEndPattern ends with escaped `$`");
    (0, checkCondition_1.default)(typeof onMissingPath !== "function", "onMissingPath is not a function");
};
exports["default"] = validatePatterns;


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=index.js.map