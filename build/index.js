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
        if (currentScroll === 0) {
          this.header.classList.remove('show');
        } else {
          this.header.classList.add('show');
        }

        // Scroll down
        if (currentScroll > this.headerHeight && currentScroll > this.lastScroll) {
          this.header.classList.add('hide');
          // Scroll up
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

/***/ "./src/modules/MobileMenu.js":
/*!***********************************!*\
  !*** ./src/modules/MobileMenu.js ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
class MobileMenu {
  constructor() {
    this.navMenu = document.querySelector('.nav-menu-wrapper');
    this.hamburger = document.querySelector('.hamburger');
    this.events();
  }
  events() {
    this.hamburger.addEventListener('click', () => {
      this.navMenu.classList.toggle('open');
      this.hamburger.classList.toggle('active');
      document.body.classList.toggle('no-scroll');
    });
  }
}
/* harmony default export */ __webpack_exports__["default"] = (MobileMenu);

/***/ }),

/***/ "./src/modules/Search.js":
/*!*******************************!*\
  !*** ./src/modules/Search.js ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
class Search {
  constructor() {
    this.searchIcon = document.querySelector('.search-icon-btn');
    this.searchModal = document.querySelector('.search-wrapper-hidden');
    this.searchInput = document.querySelector('.search-input');
    this.searchResults = document.querySelector('.search-results');
    this.closeIcon = document.querySelector('.close-icon');
    this.navMenu = document.querySelector('.nav-menu-wrapper');
    this.hamburger = document.querySelector('.hamburger');
    this.typerTimer;
    this.previousValue;
    this.isSpinnerVisible = false;
    this.events();
  }
  events() {
    // Click search icon
    this.searchIcon.addEventListener('click', this.openSearchOverlay.bind(this));

    // Click close icon
    this.closeIcon.addEventListener('click', this.closeSearchOverlay.bind(this));

    // Keyboard events
    document.addEventListener('keyup', this.keyPressed.bind(this));

    // Typing events
    this.searchInput.addEventListener('keyup', this.handleTyping.bind(this));
  }

  // METHODS
  openSearchOverlay() {
    this.searchModal.classList.add('show');
    this.searchInput.focus();
  }
  closeSearchOverlay() {
    if (this.navMenu.classList.contains('open')) {
      this.navMenu.classList.remove('open');
      this.hamburger.classList.remove('active');
    }
    this.searchModal.classList.remove('show');
    this.searchInput.blur();
    this.searchResults.innerHTML = '';
    this.searchInput.value = '';
  }
  keyPressed(e) {
    let key = e.key;

    // Open overlay
    if (key === 's' && !this.searchModal.classList.contains('show') && !document.querySelector('input:focus, textarea:focus')) {
      this.openSearchOverlay();
    }

    // Close overlay
    if (key === 'Escape' && this.searchModal.classList.contains('show')) {
      this.closeSearchOverlay();
    }
  }
  handleTyping() {
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
  }
  displayResults() {
    fetch(siteData.root_url + '/wp-json/store/v1/search?term=' + this.searchInput.value).then(response => response.json()).then(results => {
      this.searchResults.innerHTML = `
          ${results.length ? '<ul>' : '<p>No product found.</p>'}
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

/***/ }),

/***/ "./src/modules/animationOnScroll.js":
/*!******************************************!*\
  !*** ./src/modules/animationOnScroll.js ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "animationOnScroll": function() { return /* binding */ animationOnScroll; }
/* harmony export */ });
function animationOnScroll() {
  const elements = document.querySelectorAll('.type-product');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      entry.target.classList.toggle('fade-in', entry.isIntersecting);
      if (entry.isIntersecting) observer.unobserve(entry.target);
    });
  }, {
    treshold: 0.7
  });
  [...elements].forEach(el => {
    observer.observe(el);
  });
}

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
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
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
/* harmony import */ var _modules_MobileMenu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/MobileMenu */ "./src/modules/MobileMenu.js");
/* harmony import */ var _modules_animationOnScroll__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/animationOnScroll */ "./src/modules/animationOnScroll.js");




const hideNavbarScroll = new _modules_HideNavbarScroll__WEBPACK_IMPORTED_MODULE_0__["default"]();
const search = new _modules_Search__WEBPACK_IMPORTED_MODULE_1__["default"]();
const mobileMenu = new _modules_MobileMenu__WEBPACK_IMPORTED_MODULE_2__["default"]();
(0,_modules_animationOnScroll__WEBPACK_IMPORTED_MODULE_3__.animationOnScroll)();
}();
/******/ })()
;
//# sourceMappingURL=index.js.map