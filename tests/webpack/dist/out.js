/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./entry.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../../core.js":
/*!*****************************************!*\
  !*** /Users/dstaudigel/brd/log/core.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = {\n  log(hash,...args) {\n    var middleware = ((hash && hash.middleware) || []).concat(this.middleware);\n    \n    (function caller(middleware) {\n      return function(hash,...args) {\n        var next = caller(middleware.slice(1));\n        middleware[0](next,hash,...args);\n      };\n    })(middleware)(hash,...args);\n  },\n  middleware: [],\n};\n\n\n//# sourceURL=webpack:////Users/dstaudigel/brd/log/core.js?");

/***/ }),

/***/ "../../logger.js":
/*!*******************************************!*\
  !*** /Users/dstaudigel/brd/log/logger.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var Core = __webpack_require__(/*! ./core */ \"../../core.js\");\n\nclass Logger {\n  constructor(options) {\n    this.options = options;\n  }\n\n  extend(options) {\n    return new Logger({ ...this.options, ...options });\n  }\n  \n  log(...args) {\n    Core.log({ ...this.options, level: 'log' },...args);\n  }\n\n  info(...args) {\n    Core.log({ ...this.options, level: 'info' },...args);\n  }\n  \n  warn(...args) {\n    Core.log({ ...this.options, level: 'warn' },...args);\n  }\n\n  error(...args) {\n    Core.log({ ...this.options, level: 'error' },...args);\n  }\n}\n\nmodule.exports = function(options) {\n  return new Logger(options);\n}\n\n\n//# sourceURL=webpack:////Users/dstaudigel/brd/log/logger.js?");

/***/ }),

/***/ "../../middleware/passthrough.js":
/*!***********************************************************!*\
  !*** /Users/dstaudigel/brd/log/middleware/passthrough.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function(next,options,...args) {\n  if(typeof console == 'undefined') return;\n  \n  var fn = console[options.level];\n  if(typeof fn == 'function') {\n    fn.call(console,...args);\n  }\n}\n\n\n//# sourceURL=webpack:////Users/dstaudigel/brd/log/middleware/passthrough.js?");

/***/ }),

/***/ "../../middleware/prefix.js":
/*!******************************************************!*\
  !*** /Users/dstaudigel/brd/log/middleware/prefix.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function(next,options,...args) {\n  var level = options.level || 'log';\n  level =  ' '.repeat(5-level.length) + level;\n  \n  next(options,`[${level}] ${args[0]}`,...args.slice(1));\n}\n\n\n//# sourceURL=webpack:////Users/dstaudigel/brd/log/middleware/prefix.js?");

/***/ }),

/***/ "./entry.js":
/*!******************!*\
  !*** ./entry.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _core_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core.js */ \"../../core.js\");\n/* harmony import */ var _core_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js__WEBPACK_IMPORTED_MODULE_0__);\n/*** IMPORTS FROM brd-log  ***/\nconst console = __webpack_require__(/*! brd-log/logger */ \"../../logger.js\")({\"file\":\"unknown\"});\n\n\n\n_core_js__WEBPACK_IMPORTED_MODULE_0___default.a.middleware.push(__webpack_require__(/*! ../../middleware/prefix */ \"../../middleware/prefix.js\"));\n_core_js__WEBPACK_IMPORTED_MODULE_0___default.a.middleware.push(__webpack_require__(/*! ../../middleware/passthrough */ \"../../middleware/passthrough.js\"));\n\nconsole.log(\"This is a log\");\nconsole.warn(\"This is a warning.\");\n\n\n\n//# sourceURL=webpack:///./entry.js?");

/***/ })

/******/ });