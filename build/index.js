/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/HideNavbarScroll.js":
/*!*********************************!*\
  !*** ./src/HideNavbarScroll.js ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
class HideNavbarScroll {
  constructor() {
    this.header = document.querySelector('header');
    this.headerHeight = this.header.clientHeight;
    this.lastScroll = 0;
    this.events();
  }
  events() {
    window.addEventListener('scroll', () => {
      if (window.innerWidth >= 992) {
        let currentScroll = window.scrollY;
        if (currentScroll > this.headerHeight && currentScroll > this.lastScroll) {
          this.header.classList.add('hide');
        } else {
          this.header.classList.remove('hide');
        }
        this.lastScroll = currentScroll;
      }
    });
  }
}
/* harmony default export */ __webpack_exports__["default"] = (HideNavbarScroll);

/***/ }),

/***/ "./src/Search.js":
/*!***********************!*\
  !*** ./src/Search.js ***!
  \***********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
class Search {
  constructor() {
    this.searchIcon = document.querySelector('.dashicons-search');
    this.events();
  }
  events() {}
}
/* harmony default export */ __webpack_exports__["default"] = (Search);

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
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HideNavbarScroll__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./HideNavbarScroll */ "./src/HideNavbarScroll.js");
/* harmony import */ var _Search__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Search */ "./src/Search.js");


const hideNavbarScroll = new _HideNavbarScroll__WEBPACK_IMPORTED_MODULE_0__["default"]();
const search = new _Search__WEBPACK_IMPORTED_MODULE_1__["default"]();
}();
/******/ })()
;
//# sourceMappingURL=index.js.map