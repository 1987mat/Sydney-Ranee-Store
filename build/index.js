/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/modules/HideNavbarScroll.js":
/*!*****************************************!*\
  !*** ./src/modules/HideNavbarScroll.js ***!
  \*****************************************/
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

/***/ "./src/modules/Search.js":
/*!*******************************!*\
  !*** ./src/modules/Search.js ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
class Search {
  constructor() {
    this.searchIcon = document.querySelector('.dashicons-search');
    this.searchModal = document.querySelector('.search-wrapper-hidden');
    this.searchInput = document.querySelector('.search-input');
    this.searchResults = document.querySelector('.search-results');
    this.closeIcon = document.querySelector('.close-icon');
    this.typerTimer;
    this.previousValue;
    this.isSpinnerVisible = false;
    this.events();
  }
  events() {
    this.searchIcon.addEventListener('click', () => {
      this.searchModal.classList.add('show');
      this.searchInput.focus();
    });
    this.closeIcon.addEventListener('click', () => {
      this.searchModal.classList.remove('show');
      this.searchResults.innerHTML = '';
      this.searchInput.value = '';
    });
    this.searchInput.addEventListener('keyup', () => {
      if (this.searchInput.value !== this.previousValue) {
        clearTimeout(this.typerTimer);
        if (this.searchInput.value) {
          this.typerTimer = setTimeout(this.displayResults.bind(this), 500);

          // Display loading spinner
          if (!this.isSpinnerVisible) {
            this.searchResults.innerHTML = '<div class="spinner"></div>';
            this.isSpinnerVisible = true;
          }
        } else {
          this.isSpinnerVisible = false;
          this.searchInput.value = '';
          this.searchResults.innerHTML = '';
        }
      }
      this.previousValue = this.searchInput.value;
    });
  }
  displayResults() {
    fetch(siteData.root_url + '/wp-json/store/v1/search?term=' + this.searchInput.value).then(response => response.json()).then(results => {
      this.searchResults.innerHTML = `
          ${results.length ? '<ul>' : '<p>No information found.</p>'}
          ${results.map(product => `
            <li>
              <a href="${product.url}" class="product-search-link">
                <img src="${product.image}">
                <h3>${product.title}</h3>
                <span>$${product.price}</span>
              </a>
            </li>`).join('')}
          </ul>`;
    });
    this.isSpinnerVisible = false;
  }
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
/* harmony import */ var _modules_HideNavbarScroll__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/HideNavbarScroll */ "./src/modules/HideNavbarScroll.js");
/* harmony import */ var _modules_Search__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/Search */ "./src/modules/Search.js");


const hideNavbarScroll = new _modules_HideNavbarScroll__WEBPACK_IMPORTED_MODULE_0__["default"]();
const search = new _modules_Search__WEBPACK_IMPORTED_MODULE_1__["default"]();
}();
/******/ })()
;
//# sourceMappingURL=index.js.map