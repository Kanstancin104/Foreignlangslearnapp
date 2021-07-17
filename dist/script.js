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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/components/factory/factory.js":
/*!*******************************************!*\
  !*** ./src/components/factory/factory.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nSyntaxError: /Users/konstantin.vengura/deutschlernen/src/components/factory/factory.js: Unexpected token (3:0)\n\n\u001b[0m \u001b[90m 1 |\u001b[39m \u001b[36mimport\u001b[39m \u001b[33mRenderCards\u001b[39m \u001b[36mfrom\u001b[39m \u001b[32m\"../rendercards/rendercards\"\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 2 |\u001b[39m \u001b[36mimport\u001b[39m playGame \u001b[36mfrom\u001b[39m \u001b[32m\"../playgame/playGame\"\u001b[39m\u001b[0m\n\u001b[0m\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 3 |\u001b[39m \u001b[33m<<\u001b[39m\u001b[33m<<\u001b[39m\u001b[33m<<\u001b[39m\u001b[33m<\u001b[39m \u001b[33mHEAD\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m   |\u001b[39m \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 4 |\u001b[39m \u001b[90m// import Menu from \"../menu/menu\"\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 5 |\u001b[39m \u001b[36mimport\u001b[39m renderTrain \u001b[36mfrom\u001b[39m \u001b[32m\"../renderTrain/renderTrain\"\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 6 |\u001b[39m\u001b[0m\n    at Parser._raise (/Users/konstantin.vengura/deutschlernen/node_modules/@babel/parser/lib/index.js:810:17)\n    at Parser.raiseWithData (/Users/konstantin.vengura/deutschlernen/node_modules/@babel/parser/lib/index.js:803:17)\n    at Parser.raise (/Users/konstantin.vengura/deutschlernen/node_modules/@babel/parser/lib/index.js:764:17)\n    at Parser.unexpected (/Users/konstantin.vengura/deutschlernen/node_modules/@babel/parser/lib/index.js:9980:16)\n    at Parser.parseExprAtom (/Users/konstantin.vengura/deutschlernen/node_modules/@babel/parser/lib/index.js:11382:20)\n    at Parser.parseExprSubscripts (/Users/konstantin.vengura/deutschlernen/node_modules/@babel/parser/lib/index.js:10954:23)\n    at Parser.parseUpdate (/Users/konstantin.vengura/deutschlernen/node_modules/@babel/parser/lib/index.js:10934:21)\n    at Parser.parseMaybeUnary (/Users/konstantin.vengura/deutschlernen/node_modules/@babel/parser/lib/index.js:10912:23)\n    at Parser.parseExprOps (/Users/konstantin.vengura/deutschlernen/node_modules/@babel/parser/lib/index.js:10769:23)\n    at Parser.parseMaybeConditional (/Users/konstantin.vengura/deutschlernen/node_modules/@babel/parser/lib/index.js:10743:23)\n    at Parser.parseMaybeAssign (/Users/konstantin.vengura/deutschlernen/node_modules/@babel/parser/lib/index.js:10706:21)\n    at Parser.parseExpressionBase (/Users/konstantin.vengura/deutschlernen/node_modules/@babel/parser/lib/index.js:10651:23)\n    at /Users/konstantin.vengura/deutschlernen/node_modules/@babel/parser/lib/index.js:10645:39\n    at Parser.allowInAnd (/Users/konstantin.vengura/deutschlernen/node_modules/@babel/parser/lib/index.js:12390:16)\n    at Parser.parseExpression (/Users/konstantin.vengura/deutschlernen/node_modules/@babel/parser/lib/index.js:10645:17)\n    at Parser.parseStatementContent (/Users/konstantin.vengura/deutschlernen/node_modules/@babel/parser/lib/index.js:12727:23)\n    at Parser.parseStatement (/Users/konstantin.vengura/deutschlernen/node_modules/@babel/parser/lib/index.js:12596:17)\n    at Parser.parseBlockOrModuleBlockBody (/Users/konstantin.vengura/deutschlernen/node_modules/@babel/parser/lib/index.js:13185:25)\n    at Parser.parseBlockBody (/Users/konstantin.vengura/deutschlernen/node_modules/@babel/parser/lib/index.js:13176:10)\n    at Parser.parseProgram (/Users/konstantin.vengura/deutschlernen/node_modules/@babel/parser/lib/index.js:12519:10)\n    at Parser.parseTopLevel (/Users/konstantin.vengura/deutschlernen/node_modules/@babel/parser/lib/index.js:12510:25)\n    at Parser.parse (/Users/konstantin.vengura/deutschlernen/node_modules/@babel/parser/lib/index.js:14241:10)\n    at parse (/Users/konstantin.vengura/deutschlernen/node_modules/@babel/parser/lib/index.js:14293:38)\n    at parser (/Users/konstantin.vengura/deutschlernen/node_modules/@babel/core/lib/parser/index.js:52:34)\n    at parser.next (<anonymous>)\n    at normalizeFile (/Users/konstantin.vengura/deutschlernen/node_modules/@babel/core/lib/transformation/normalize-file.js:82:38)\n    at normalizeFile.next (<anonymous>)\n    at run (/Users/konstantin.vengura/deutschlernen/node_modules/@babel/core/lib/transformation/index.js:29:50)\n    at run.next (<anonymous>)\n    at Function.transform (/Users/konstantin.vengura/deutschlernen/node_modules/@babel/core/lib/transform.js:25:41)");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_factory_factory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/factory/factory */ "./src/components/factory/factory.js");

var factory = new _components_factory_factory__WEBPACK_IMPORTED_MODULE_0__["default"]();
factory.init();
console.log("hijna");

/***/ })

/******/ });
//# sourceMappingURL=script.js.map