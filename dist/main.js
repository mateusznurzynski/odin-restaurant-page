/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./Quicksand-Regular.ttf */ "./src/Quicksand-Regular.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./Italianno-Regular.ttf */ "./src/Italianno-Regular.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./background-photo.jpg */ "./src/background-photo.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "html {\n\tbox-sizing: border-box;\n}\n*,\n*::after,\n*::before {\n\tbox-sizing: inherit;\n\tmargin: 0;\n\tpadding: 0;\n}\n:root {\n\tfont-family: Quicksand;\n\t--primary-color: #e5e6e4;\n\t--secondary-color: #0f110c;\n\t--secondary-color-hover: #202020;\n\t--accent-color: #ff4000;\n\t--primary-font-color: black;\n\t--secondary-font-color: white;\n\t--accent-font-color: white;\n\t--font-color: black;\n\t--placeholder-color: greenyellow;\n\t--heading-height: 200px;\n\t--facebook-color: #4267b2;\n\t--facebook-hover: #517bcf;\n\t--twitter-color: #1da1f2;\n\t--twitter-hover: #4abaff;\n\t--instagram-color: #833ab4;\n\t--instagram-hover: #a349df;\n}\n\n@font-face {\n\tfont-family: 'Quicksand';\n\tsrc: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n}\n\n@font-face {\n\tfont-family: 'Italianno';\n\tsrc: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n}\n\n#content {\n\tmin-height: 100vh;\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: center;\n}\n\na {\n\ttext-decoration: none;\n\tcolor: var(--font-color);\n}\n\nnav {\n\theight: 50px;\n\tbackground-color: var(--secondary-color);\n\tcolor: var(--secondary-font-color);\n\tdisplay: flex;\n\tjustify-content: space-between;\n\talign-items: center;\n\twidth: 100%;\n}\n\n.nav-item {\n\tpadding: 0px 20px;\n\theight: 100%;\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\tgap: 50px;\n}\n\n.logo-link {\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: center;\n\tcolor: var(--secondary-font-color);\n}\n\n.logo-link img {\n\theight: 50px;\n\twidth: 50px;\n\tpadding: 9px;\n\tfilter: invert(100%) sepia(0%) saturate(7481%) hue-rotate(146deg)\n\t\tbrightness(106%) contrast(104%);\n}\n\n.logo-text {\n\tfont-size: 1.2rem;\n}\n\n.tabs {\n\tdisplay: flex;\n\theight: 100%;\n\tjustify-content: center;\n\talign-items: center;\n}\n\n.tab {\n\tcursor: pointer;\n\theight: 100%;\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\tcolor: rgb(210, 210, 210);\n\tpadding: 0 10px;\n}\n\n.tab:hover,\n.nav-active {\n\tcolor: var(--secondary-font-color);\n\tbackground-color: var(--secondary-color-hover);\n}\n\n.icons {\n\tdisplay: flex;\n\theight: 100%;\n\twidth: 150px;\n}\n\n.icon {\n\theight: 100%;\n\tpadding: 10px;\n\tcursor: pointer;\n}\n\n.icon-fb {\n\tbackground-color: var(--facebook-color);\n}\n\n.icon-fb:hover {\n\tbackground-color: var(--facebook-hover);\n}\n\n.icon-tw {\n\tbackground-color: var(--twitter-color);\n}\n\n.icon-tw:hover {\n\tbackground-color: var(--twitter-hover);\n}\n\n.icon-insta {\n\tbackground-color: var(--instagram-color);\n}\n\n.icon-insta:hover {\n\tbackground-color: var(--instagram-hover);\n}\n\n.heading {\n\tposition: relative;\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\tbackground-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\n\theight: var(--heading-height);\n\twidth: 100%;\n\tbackground-size: cover;\n}\n\n.heading::before {\n\tposition: absolute;\n\tcontent: '';\n\tleft: 0;\n\ttop: 0;\n\theight: var(--heading-height);\n\twidth: 100%;\n\tbackground: rgb(0, 0, 0);\n\tbackground: linear-gradient(\n\t\t90deg,\n\t\trgba(0, 0, 0, 0.9) 0%,\n\t\trgba(45, 45, 45, 0.3) 50%,\n\t\trgba(0, 0, 0, 0.9) 100%\n\t);\n}\n\n.heading-text {\n\tposition: relative;\n\tcolor: white;\n\tfont-size: 6rem;\n\tfont-family: Italianno;\n}\n\n.main {\n\tdisplay: flex;\n\tflex-direction: column;\n\twidth: 100%;\n\tpadding: 30px;\n\tbackground-color: var(--primary-color);\n\tcolor: var(--primary-font-color);\n\tflex-grow: 1;\n}\n\n.main-header {\n\tfont-size: 3.5rem;\n\ttext-align: center;\n\tmargin-bottom: 20px;\n\tfont-family: Italianno;\n}\n\n.main-text {\n\tfont-size: 1.5rem;\n\ttext-align: center;\n}\n\n.dish {\n\tdisplay: flex;\n}\n\n.dish-img {\n\twidth: 50%;\n\tpadding: 30px;\n}\n\n.dish-text {\n\twidth: 50%;\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: center;\n\talign-items: center;\n\tpadding: 30px;\n\tgap: 30px;\n}\n\nfooter {\n\theight: 70px;\n\twidth: 100%;\n\tbackground-color: var(--secondary-color);\n\tcolor: var(--secondary-font-color);\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\tfont-size: 1.2rem;\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;CACC,sBAAsB;AACvB;AACA;;;CAGC,mBAAmB;CACnB,SAAS;CACT,UAAU;AACX;AACA;CACC,sBAAsB;CACtB,wBAAwB;CACxB,0BAA0B;CAC1B,gCAAgC;CAChC,uBAAuB;CACvB,2BAA2B;CAC3B,6BAA6B;CAC7B,0BAA0B;CAC1B,mBAAmB;CACnB,gCAAgC;CAChC,uBAAuB;CACvB,yBAAyB;CACzB,yBAAyB;CACzB,wBAAwB;CACxB,wBAAwB;CACxB,0BAA0B;CAC1B,0BAA0B;AAC3B;;AAEA;CACC,wBAAwB;CACxB,4CAAiC;AAClC;;AAEA;CACC,wBAAwB;CACxB,4CAAiC;AAClC;;AAEA;CACC,iBAAiB;CACjB,aAAa;CACb,sBAAsB;CACtB,mBAAmB;AACpB;;AAEA;CACC,qBAAqB;CACrB,wBAAwB;AACzB;;AAEA;CACC,YAAY;CACZ,wCAAwC;CACxC,kCAAkC;CAClC,aAAa;CACb,8BAA8B;CAC9B,mBAAmB;CACnB,WAAW;AACZ;;AAEA;CACC,iBAAiB;CACjB,YAAY;CACZ,aAAa;CACb,uBAAuB;CACvB,mBAAmB;CACnB,SAAS;AACV;;AAEA;CACC,aAAa;CACb,mBAAmB;CACnB,uBAAuB;CACvB,kCAAkC;AACnC;;AAEA;CACC,YAAY;CACZ,WAAW;CACX,YAAY;CACZ;iCACgC;AACjC;;AAEA;CACC,iBAAiB;AAClB;;AAEA;CACC,aAAa;CACb,YAAY;CACZ,uBAAuB;CACvB,mBAAmB;AACpB;;AAEA;CACC,eAAe;CACf,YAAY;CACZ,aAAa;CACb,uBAAuB;CACvB,mBAAmB;CACnB,yBAAyB;CACzB,eAAe;AAChB;;AAEA;;CAEC,kCAAkC;CAClC,8CAA8C;AAC/C;;AAEA;CACC,aAAa;CACb,YAAY;CACZ,YAAY;AACb;;AAEA;CACC,YAAY;CACZ,aAAa;CACb,eAAe;AAChB;;AAEA;CACC,uCAAuC;AACxC;;AAEA;CACC,uCAAuC;AACxC;;AAEA;CACC,sCAAsC;AACvC;;AAEA;CACC,sCAAsC;AACvC;;AAEA;CACC,wCAAwC;AACzC;;AAEA;CACC,wCAAwC;AACzC;;AAEA;CACC,kBAAkB;CAClB,aAAa;CACb,uBAAuB;CACvB,mBAAmB;CACnB,yDAA6C;CAC7C,6BAA6B;CAC7B,WAAW;CACX,sBAAsB;AACvB;;AAEA;CACC,kBAAkB;CAClB,WAAW;CACX,OAAO;CACP,MAAM;CACN,6BAA6B;CAC7B,WAAW;CACX,wBAAwB;CACxB;;;;;EAKC;AACF;;AAEA;CACC,kBAAkB;CAClB,YAAY;CACZ,eAAe;CACf,sBAAsB;AACvB;;AAEA;CACC,aAAa;CACb,sBAAsB;CACtB,WAAW;CACX,aAAa;CACb,sCAAsC;CACtC,gCAAgC;CAChC,YAAY;AACb;;AAEA;CACC,iBAAiB;CACjB,kBAAkB;CAClB,mBAAmB;CACnB,sBAAsB;AACvB;;AAEA;CACC,iBAAiB;CACjB,kBAAkB;AACnB;;AAEA;CACC,aAAa;AACd;;AAEA;CACC,UAAU;CACV,aAAa;AACd;;AAEA;CACC,UAAU;CACV,aAAa;CACb,sBAAsB;CACtB,uBAAuB;CACvB,mBAAmB;CACnB,aAAa;CACb,SAAS;AACV;;AAEA;CACC,YAAY;CACZ,WAAW;CACX,wCAAwC;CACxC,kCAAkC;CAClC,aAAa;CACb,uBAAuB;CACvB,mBAAmB;CACnB,iBAAiB;AAClB","sourcesContent":["html {\n\tbox-sizing: border-box;\n}\n*,\n*::after,\n*::before {\n\tbox-sizing: inherit;\n\tmargin: 0;\n\tpadding: 0;\n}\n:root {\n\tfont-family: Quicksand;\n\t--primary-color: #e5e6e4;\n\t--secondary-color: #0f110c;\n\t--secondary-color-hover: #202020;\n\t--accent-color: #ff4000;\n\t--primary-font-color: black;\n\t--secondary-font-color: white;\n\t--accent-font-color: white;\n\t--font-color: black;\n\t--placeholder-color: greenyellow;\n\t--heading-height: 200px;\n\t--facebook-color: #4267b2;\n\t--facebook-hover: #517bcf;\n\t--twitter-color: #1da1f2;\n\t--twitter-hover: #4abaff;\n\t--instagram-color: #833ab4;\n\t--instagram-hover: #a349df;\n}\n\n@font-face {\n\tfont-family: 'Quicksand';\n\tsrc: url(./Quicksand-Regular.ttf);\n}\n\n@font-face {\n\tfont-family: 'Italianno';\n\tsrc: url(./Italianno-Regular.ttf);\n}\n\n#content {\n\tmin-height: 100vh;\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: center;\n}\n\na {\n\ttext-decoration: none;\n\tcolor: var(--font-color);\n}\n\nnav {\n\theight: 50px;\n\tbackground-color: var(--secondary-color);\n\tcolor: var(--secondary-font-color);\n\tdisplay: flex;\n\tjustify-content: space-between;\n\talign-items: center;\n\twidth: 100%;\n}\n\n.nav-item {\n\tpadding: 0px 20px;\n\theight: 100%;\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\tgap: 50px;\n}\n\n.logo-link {\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: center;\n\tcolor: var(--secondary-font-color);\n}\n\n.logo-link img {\n\theight: 50px;\n\twidth: 50px;\n\tpadding: 9px;\n\tfilter: invert(100%) sepia(0%) saturate(7481%) hue-rotate(146deg)\n\t\tbrightness(106%) contrast(104%);\n}\n\n.logo-text {\n\tfont-size: 1.2rem;\n}\n\n.tabs {\n\tdisplay: flex;\n\theight: 100%;\n\tjustify-content: center;\n\talign-items: center;\n}\n\n.tab {\n\tcursor: pointer;\n\theight: 100%;\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\tcolor: rgb(210, 210, 210);\n\tpadding: 0 10px;\n}\n\n.tab:hover,\n.nav-active {\n\tcolor: var(--secondary-font-color);\n\tbackground-color: var(--secondary-color-hover);\n}\n\n.icons {\n\tdisplay: flex;\n\theight: 100%;\n\twidth: 150px;\n}\n\n.icon {\n\theight: 100%;\n\tpadding: 10px;\n\tcursor: pointer;\n}\n\n.icon-fb {\n\tbackground-color: var(--facebook-color);\n}\n\n.icon-fb:hover {\n\tbackground-color: var(--facebook-hover);\n}\n\n.icon-tw {\n\tbackground-color: var(--twitter-color);\n}\n\n.icon-tw:hover {\n\tbackground-color: var(--twitter-hover);\n}\n\n.icon-insta {\n\tbackground-color: var(--instagram-color);\n}\n\n.icon-insta:hover {\n\tbackground-color: var(--instagram-hover);\n}\n\n.heading {\n\tposition: relative;\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\tbackground-image: url(./background-photo.jpg);\n\theight: var(--heading-height);\n\twidth: 100%;\n\tbackground-size: cover;\n}\n\n.heading::before {\n\tposition: absolute;\n\tcontent: '';\n\tleft: 0;\n\ttop: 0;\n\theight: var(--heading-height);\n\twidth: 100%;\n\tbackground: rgb(0, 0, 0);\n\tbackground: linear-gradient(\n\t\t90deg,\n\t\trgba(0, 0, 0, 0.9) 0%,\n\t\trgba(45, 45, 45, 0.3) 50%,\n\t\trgba(0, 0, 0, 0.9) 100%\n\t);\n}\n\n.heading-text {\n\tposition: relative;\n\tcolor: white;\n\tfont-size: 6rem;\n\tfont-family: Italianno;\n}\n\n.main {\n\tdisplay: flex;\n\tflex-direction: column;\n\twidth: 100%;\n\tpadding: 30px;\n\tbackground-color: var(--primary-color);\n\tcolor: var(--primary-font-color);\n\tflex-grow: 1;\n}\n\n.main-header {\n\tfont-size: 3.5rem;\n\ttext-align: center;\n\tmargin-bottom: 20px;\n\tfont-family: Italianno;\n}\n\n.main-text {\n\tfont-size: 1.5rem;\n\ttext-align: center;\n}\n\n.dish {\n\tdisplay: flex;\n}\n\n.dish-img {\n\twidth: 50%;\n\tpadding: 30px;\n}\n\n.dish-text {\n\twidth: 50%;\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: center;\n\talign-items: center;\n\tpadding: 30px;\n\tgap: 30px;\n}\n\nfooter {\n\theight: 70px;\n\twidth: 100%;\n\tbackground-color: var(--secondary-color);\n\tcolor: var(--secondary-font-color);\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\tfont-size: 1.2rem;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/footer.js":
/*!***********************!*\
  !*** ./src/footer.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utility__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utility */ "./src/utility.js");


const footerElement = (0,_utility__WEBPACK_IMPORTED_MODULE_0__.createElement)('footer', null, 'Mateusz Nurzyński \u00A9');

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (footerElement);


/***/ }),

/***/ "./src/heading.js":
/*!************************!*\
  !*** ./src/heading.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utility__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utility */ "./src/utility.js");


const headingElement = (0,_utility__WEBPACK_IMPORTED_MODULE_0__.createElement)('section', ['heading']);

const headingTextElement = (0,_utility__WEBPACK_IMPORTED_MODULE_0__.createElement)('p', ['heading-text'], 'About us');

headingElement.appendChild(headingTextElement);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (headingElement);


/***/ }),

/***/ "./src/load-page.js":
/*!**************************!*\
  !*** ./src/load-page.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ loadPage)
/* harmony export */ });
/* harmony import */ var _nav__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./nav */ "./src/nav.js");
/* harmony import */ var _heading__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./heading */ "./src/heading.js");
/* harmony import */ var _main_content__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./main-content */ "./src/main-content.js");
/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./footer */ "./src/footer.js");





const content = document.querySelector('#content');

function loadPage() {
	content.appendChild(_nav__WEBPACK_IMPORTED_MODULE_0__["default"]);
	content.appendChild(_heading__WEBPACK_IMPORTED_MODULE_1__["default"]);
	content.appendChild(_main_content__WEBPACK_IMPORTED_MODULE_2__["default"]);
	content.appendChild(_footer__WEBPACK_IMPORTED_MODULE_3__["default"]);
}


/***/ }),

/***/ "./src/main-content.js":
/*!*****************************!*\
  !*** ./src/main-content.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utility__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utility */ "./src/utility.js");


const mainElement = (0,_utility__WEBPACK_IMPORTED_MODULE_0__.createElement)('section', ['main']);

const mainHeaderElement = (0,_utility__WEBPACK_IMPORTED_MODULE_0__.createElement)(
	'p',
	['main-header'],
	'Lorem ipsum dolor sit amet consectetur.'
);

const mainTextElement = (0,_utility__WEBPACK_IMPORTED_MODULE_0__.createElement)(
	'p',
	['main-text'],
	'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi minus ipsam ad nesciunt praesentium eveniet facilis perspiciatis, eligendi reprehenderit quidem aut, nulla molestias laboriosam aperiam!\n\nLorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem suscipit, tenetur officia quas nobis architecto accusantium numquam sunt odit debitis non. Dolore qui consequuntur impedit deserunt aspernatur porro voluptatem eligendi quos, voluptate excepturi nam libero, voluptates optio nesciunt, consectetur ipsa?'
);

mainElement.appendChild(mainHeaderElement);
mainElement.appendChild(mainTextElement);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (mainElement);


/***/ }),

/***/ "./src/nav.js":
/*!********************!*\
  !*** ./src/nav.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _facebook_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./facebook.svg */ "./src/facebook.svg");
/* harmony import */ var _instagram_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./instagram.svg */ "./src/instagram.svg");
/* harmony import */ var _twitter_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./twitter.svg */ "./src/twitter.svg");
/* harmony import */ var _hat_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./hat.svg */ "./src/hat.svg");
/* harmony import */ var _utility__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utility */ "./src/utility.js");






const navElement = (0,_utility__WEBPACK_IMPORTED_MODULE_4__.createElement)('nav');

// Elements
const navItemElements = [
	(0,_utility__WEBPACK_IMPORTED_MODULE_4__.createElement)('div', ['nav-item']),
	(0,_utility__WEBPACK_IMPORTED_MODULE_4__.createElement)('div', ['nav-item']),
];

const logoElement = (0,_utility__WEBPACK_IMPORTED_MODULE_4__.createElement)('div', ['logo']);
const logoLinkElement = (0,_utility__WEBPACK_IMPORTED_MODULE_4__.createElement)('a', ['logo-link']);
logoLinkElement.setAttribute('href', '#');
const logoTextElement = (0,_utility__WEBPACK_IMPORTED_MODULE_4__.createElement)('p', ['logo-text'], 'Odin Restaurant');

const tabsElement = (0,_utility__WEBPACK_IMPORTED_MODULE_4__.createElement)('div', ['tabs']);
const tabElements = [
	(0,_utility__WEBPACK_IMPORTED_MODULE_4__.createElement)('div', ['tab', 'about-us', 'nav-active'], 'About us'),
	(0,_utility__WEBPACK_IMPORTED_MODULE_4__.createElement)('div', ['tab', 'menu'], 'Menu'),
	(0,_utility__WEBPACK_IMPORTED_MODULE_4__.createElement)('div', ['tab', 'restaurants'], 'Our restaurants'),
];

const iconsElement = (0,_utility__WEBPACK_IMPORTED_MODULE_4__.createElement)('div', ['icons']);
const iconElements = [
	(0,_utility__WEBPACK_IMPORTED_MODULE_4__.createElement)('a', ['link-fb']),
	(0,_utility__WEBPACK_IMPORTED_MODULE_4__.createElement)('a', ['link-tw']),
	(0,_utility__WEBPACK_IMPORTED_MODULE_4__.createElement)('a', ['link-insta']),
];

// Images
const facebookImg = new Image();
facebookImg.src = _facebook_svg__WEBPACK_IMPORTED_MODULE_0__;
facebookImg.alt = 'Facebook';
facebookImg.classList.add('icon-fb');
facebookImg.classList.add('icon');

const twitterImg = new Image();
twitterImg.src = _twitter_svg__WEBPACK_IMPORTED_MODULE_2__;
twitterImg.alt = 'Twitter';
twitterImg.classList.add('icon-tw');
twitterImg.classList.add('icon');
iconsElement.appendChild(twitterImg);

const instagramImg = new Image();
instagramImg.src = _instagram_svg__WEBPACK_IMPORTED_MODULE_1__;
instagramImg.alt = 'Instagram';
instagramImg.classList.add('icon-insta');
instagramImg.classList.add('icon');
iconsElement.appendChild(instagramImg);

const hatImg = new Image();
hatImg.src = _hat_svg__WEBPACK_IMPORTED_MODULE_3__;
hatImg.alt = 'Odin Restaurant Logo';
logoLinkElement.insertAdjacentElement('afterbegin', hatImg);

// Appending
logoLinkElement.appendChild(logoTextElement);
logoElement.appendChild(logoLinkElement);

tabElements.forEach((element) => {
	tabsElement.appendChild(element);
});

iconElements.forEach((element) => {
	iconsElement.appendChild(element);
});
iconsElement.querySelector('.link-fb').appendChild(facebookImg);
iconsElement.querySelector('.link-tw').appendChild(twitterImg);
iconsElement.querySelector('.link-insta').appendChild(instagramImg);

navItemElements[0].appendChild(logoElement);
navItemElements[0].appendChild(tabsElement);

navItemElements[1].appendChild(iconsElement);

navItemElements.forEach((element) => {
	navElement.appendChild(element);
});

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (navElement);


/***/ }),

/***/ "./src/tabs/menu.js":
/*!**************************!*\
  !*** ./src/tabs/menu.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createMenu)
/* harmony export */ });
/* harmony import */ var _utility__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utility */ "./src/utility.js");
/* harmony import */ var _lasagne_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lasagne.jpg */ "./src/lasagne.jpg");



function createMenu() {
	const dishes = [
		{
			title: 'Lasagne',
			image: _lasagne_jpg__WEBPACK_IMPORTED_MODULE_1__,
			description: 'Lasagne description',
		},
	];

	const mainContentElement = (0,_utility__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', [
		'main-content',
		'main-text',
	]);
	dishes.forEach((dish) => {
		const imageElement = new Image();
		imageElement.src = dish.image;
		imageElement.alt = dish.title;
		imageElement.classList.add('dish-img');

		const descriptionElement = (0,_utility__WEBPACK_IMPORTED_MODULE_0__.createElement)(
			'div',
			['dish-text'],
			`<h2>${dish.title}</h2><p>${dish.description}</p>`
		);

		const dishElement = (0,_utility__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', ['dish']);
		dishElement.appendChild(imageElement);
		dishElement.appendChild(descriptionElement);

		mainContentElement.appendChild(dishElement);
	});

	const heading = document.querySelector('.heading');
	const main = document.querySelector('.main');
	const headingTitle = 'Our menu';
	const navClass = '.menu';

	const headingTextElement = (0,_utility__WEBPACK_IMPORTED_MODULE_0__.createElement)(
		'p',
		['heading-text'],
		headingTitle
	);

	document.querySelector(navClass).classList.add('nav-active');
	heading.appendChild(headingTextElement);
	main.appendChild(mainContentElement);
}


/***/ }),

/***/ "./src/utility.js":
/*!************************!*\
  !*** ./src/utility.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createElement": () => (/* binding */ createElement)
/* harmony export */ });
function createElement(elementType, elementClasses, elementContent) {
	const element = document.createElement(elementType);
	if (Array.isArray(elementClasses)) {
		elementClasses.forEach((className) => {
			element.classList.add(className);
		});
	}
	if (elementContent) {
		element.innerHTML = elementContent;
	}
	return element;
}




/***/ }),

/***/ "./src/Italianno-Regular.ttf":
/*!***********************************!*\
  !*** ./src/Italianno-Regular.ttf ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "af758e9e36a2222b1130.ttf";

/***/ }),

/***/ "./src/Quicksand-Regular.ttf":
/*!***********************************!*\
  !*** ./src/Quicksand-Regular.ttf ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "04b11c8f0d4d58c1bed1.ttf";

/***/ }),

/***/ "./src/background-photo.jpg":
/*!**********************************!*\
  !*** ./src/background-photo.jpg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "601bc249762124499396.jpg";

/***/ }),

/***/ "./src/facebook.svg":
/*!**************************!*\
  !*** ./src/facebook.svg ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ed57b640744ceccd3f18.svg";

/***/ }),

/***/ "./src/hat.svg":
/*!*********************!*\
  !*** ./src/hat.svg ***!
  \*********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b9678be91ad279cdc8f4.svg";

/***/ }),

/***/ "./src/instagram.svg":
/*!***************************!*\
  !*** ./src/instagram.svg ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "58343ea253613167c66a.svg";

/***/ }),

/***/ "./src/lasagne.jpg":
/*!*************************!*\
  !*** ./src/lasagne.jpg ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "bffbeb777dde124ea3ab.jpg";

/***/ }),

/***/ "./src/twitter.svg":
/*!*************************!*\
  !*** ./src/twitter.svg ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "cace40f86d59be2debfe.svg";

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
/******/ 			id: moduleId,
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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _load_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./load-page */ "./src/load-page.js");
/* harmony import */ var _tabs_menu_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tabs/menu.js */ "./src/tabs/menu.js");




(0,_load_page__WEBPACK_IMPORTED_MODULE_1__["default"])();

const navMenu = document.querySelector('.menu');
navMenu.addEventListener('click', (e) => {
	clearOldTabContent();
	(0,_tabs_menu_js__WEBPACK_IMPORTED_MODULE_2__["default"])();
});

function clearOldTabContent() {
	const activeTabs = document.querySelectorAll('.nav-active');
	const heading = document.querySelector('.heading');
	const main = document.querySelector('.main');
	activeTabs.forEach((tab) => {
		tab.classList.remove('nav-active');
	});
	heading.innerHTML = '';
	main.innerHTML = '';
}

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NmQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7Ozs7O1dDckJBOzs7Ozs7Ozs7Ozs7OztBQ0FxQjtBQUNjO0FBQ0s7O0FBRXhDLHNEQUFROztBQUVSO0FBQ0E7QUFDQTtBQUNBLENBQUMseURBQVU7QUFDWCxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQtcGFnZS8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC1wYWdlLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50LXBhZ2UvLi9zcmMvZm9vdGVyLmpzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC1wYWdlLy4vc3JjL2hlYWRpbmcuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbG9hZC1wYWdlLmpzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC1wYWdlLy4vc3JjL21haW4tY29udGVudC5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQtcGFnZS8uL3NyYy9uYXYuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50LXBhZ2UvLi9zcmMvdGFicy9tZW51LmpzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC1wYWdlLy4vc3JjL3V0aWxpdHkuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQtcGFnZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9RdWlja3NhbmQtUmVndWxhci50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuL0l0YWxpYW5uby1SZWd1bGFyLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fID0gbmV3IFVSTChcIi4vYmFja2dyb3VuZC1waG90by5qcGdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcImh0bWwge1xcblxcdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcbiosXFxuKjo6YWZ0ZXIsXFxuKjo6YmVmb3JlIHtcXG5cXHRib3gtc2l6aW5nOiBpbmhlcml0O1xcblxcdG1hcmdpbjogMDtcXG5cXHRwYWRkaW5nOiAwO1xcbn1cXG46cm9vdCB7XFxuXFx0Zm9udC1mYW1pbHk6IFF1aWNrc2FuZDtcXG5cXHQtLXByaW1hcnktY29sb3I6ICNlNWU2ZTQ7XFxuXFx0LS1zZWNvbmRhcnktY29sb3I6ICMwZjExMGM7XFxuXFx0LS1zZWNvbmRhcnktY29sb3ItaG92ZXI6ICMyMDIwMjA7XFxuXFx0LS1hY2NlbnQtY29sb3I6ICNmZjQwMDA7XFxuXFx0LS1wcmltYXJ5LWZvbnQtY29sb3I6IGJsYWNrO1xcblxcdC0tc2Vjb25kYXJ5LWZvbnQtY29sb3I6IHdoaXRlO1xcblxcdC0tYWNjZW50LWZvbnQtY29sb3I6IHdoaXRlO1xcblxcdC0tZm9udC1jb2xvcjogYmxhY2s7XFxuXFx0LS1wbGFjZWhvbGRlci1jb2xvcjogZ3JlZW55ZWxsb3c7XFxuXFx0LS1oZWFkaW5nLWhlaWdodDogMjAwcHg7XFxuXFx0LS1mYWNlYm9vay1jb2xvcjogIzQyNjdiMjtcXG5cXHQtLWZhY2Vib29rLWhvdmVyOiAjNTE3YmNmO1xcblxcdC0tdHdpdHRlci1jb2xvcjogIzFkYTFmMjtcXG5cXHQtLXR3aXR0ZXItaG92ZXI6ICM0YWJhZmY7XFxuXFx0LS1pbnN0YWdyYW0tY29sb3I6ICM4MzNhYjQ7XFxuXFx0LS1pbnN0YWdyYW0taG92ZXI6ICNhMzQ5ZGY7XFxufVxcblxcbkBmb250LWZhY2Uge1xcblxcdGZvbnQtZmFtaWx5OiAnUXVpY2tzYW5kJztcXG5cXHRzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxufVxcblxcbkBmb250LWZhY2Uge1xcblxcdGZvbnQtZmFtaWx5OiAnSXRhbGlhbm5vJztcXG5cXHRzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gKyBcIik7XFxufVxcblxcbiNjb250ZW50IHtcXG5cXHRtaW4taGVpZ2h0OiAxMDB2aDtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuYSB7XFxuXFx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xcblxcdGNvbG9yOiB2YXIoLS1mb250LWNvbG9yKTtcXG59XFxuXFxubmF2IHtcXG5cXHRoZWlnaHQ6IDUwcHg7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWNvbG9yKTtcXG5cXHRjb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWZvbnQtY29sb3IpO1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0d2lkdGg6IDEwMCU7XFxufVxcblxcbi5uYXYtaXRlbSB7XFxuXFx0cGFkZGluZzogMHB4IDIwcHg7XFxuXFx0aGVpZ2h0OiAxMDAlO1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRnYXA6IDUwcHg7XFxufVxcblxcbi5sb2dvLWxpbmsge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXHRjb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWZvbnQtY29sb3IpO1xcbn1cXG5cXG4ubG9nby1saW5rIGltZyB7XFxuXFx0aGVpZ2h0OiA1MHB4O1xcblxcdHdpZHRoOiA1MHB4O1xcblxcdHBhZGRpbmc6IDlweDtcXG5cXHRmaWx0ZXI6IGludmVydCgxMDAlKSBzZXBpYSgwJSkgc2F0dXJhdGUoNzQ4MSUpIGh1ZS1yb3RhdGUoMTQ2ZGVnKVxcblxcdFxcdGJyaWdodG5lc3MoMTA2JSkgY29udHJhc3QoMTA0JSk7XFxufVxcblxcbi5sb2dvLXRleHQge1xcblxcdGZvbnQtc2l6ZTogMS4ycmVtO1xcbn1cXG5cXG4udGFicyB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRoZWlnaHQ6IDEwMCU7XFxuXFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnRhYiB7XFxuXFx0Y3Vyc29yOiBwb2ludGVyO1xcblxcdGhlaWdodDogMTAwJTtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0Y29sb3I6IHJnYigyMTAsIDIxMCwgMjEwKTtcXG5cXHRwYWRkaW5nOiAwIDEwcHg7XFxufVxcblxcbi50YWI6aG92ZXIsXFxuLm5hdi1hY3RpdmUge1xcblxcdGNvbG9yOiB2YXIoLS1zZWNvbmRhcnktZm9udC1jb2xvcik7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWNvbG9yLWhvdmVyKTtcXG59XFxuXFxuLmljb25zIHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGhlaWdodDogMTAwJTtcXG5cXHR3aWR0aDogMTUwcHg7XFxufVxcblxcbi5pY29uIHtcXG5cXHRoZWlnaHQ6IDEwMCU7XFxuXFx0cGFkZGluZzogMTBweDtcXG5cXHRjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5pY29uLWZiIHtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1mYWNlYm9vay1jb2xvcik7XFxufVxcblxcbi5pY29uLWZiOmhvdmVyIHtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1mYWNlYm9vay1ob3Zlcik7XFxufVxcblxcbi5pY29uLXR3IHtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10d2l0dGVyLWNvbG9yKTtcXG59XFxuXFxuLmljb24tdHc6aG92ZXIge1xcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLXR3aXR0ZXItaG92ZXIpO1xcbn1cXG5cXG4uaWNvbi1pbnN0YSB7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW5zdGFncmFtLWNvbG9yKTtcXG59XFxuXFxuLmljb24taW5zdGE6aG92ZXIge1xcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWluc3RhZ3JhbS1ob3Zlcik7XFxufVxcblxcbi5oZWFkaW5nIHtcXG5cXHRwb3NpdGlvbjogcmVsYXRpdmU7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gKyBcIik7XFxuXFx0aGVpZ2h0OiB2YXIoLS1oZWFkaW5nLWhlaWdodCk7XFxuXFx0d2lkdGg6IDEwMCU7XFxuXFx0YmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG59XFxuXFxuLmhlYWRpbmc6OmJlZm9yZSB7XFxuXFx0cG9zaXRpb246IGFic29sdXRlO1xcblxcdGNvbnRlbnQ6ICcnO1xcblxcdGxlZnQ6IDA7XFxuXFx0dG9wOiAwO1xcblxcdGhlaWdodDogdmFyKC0taGVhZGluZy1oZWlnaHQpO1xcblxcdHdpZHRoOiAxMDAlO1xcblxcdGJhY2tncm91bmQ6IHJnYigwLCAwLCAwKTtcXG5cXHRiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoXFxuXFx0XFx0OTBkZWcsXFxuXFx0XFx0cmdiYSgwLCAwLCAwLCAwLjkpIDAlLFxcblxcdFxcdHJnYmEoNDUsIDQ1LCA0NSwgMC4zKSA1MCUsXFxuXFx0XFx0cmdiYSgwLCAwLCAwLCAwLjkpIDEwMCVcXG5cXHQpO1xcbn1cXG5cXG4uaGVhZGluZy10ZXh0IHtcXG5cXHRwb3NpdGlvbjogcmVsYXRpdmU7XFxuXFx0Y29sb3I6IHdoaXRlO1xcblxcdGZvbnQtc2l6ZTogNnJlbTtcXG5cXHRmb250LWZhbWlseTogSXRhbGlhbm5vO1xcbn1cXG5cXG4ubWFpbiB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcdHdpZHRoOiAxMDAlO1xcblxcdHBhZGRpbmc6IDMwcHg7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XFxuXFx0Y29sb3I6IHZhcigtLXByaW1hcnktZm9udC1jb2xvcik7XFxuXFx0ZmxleC1ncm93OiAxO1xcbn1cXG5cXG4ubWFpbi1oZWFkZXIge1xcblxcdGZvbnQtc2l6ZTogMy41cmVtO1xcblxcdHRleHQtYWxpZ246IGNlbnRlcjtcXG5cXHRtYXJnaW4tYm90dG9tOiAyMHB4O1xcblxcdGZvbnQtZmFtaWx5OiBJdGFsaWFubm87XFxufVxcblxcbi5tYWluLXRleHQge1xcblxcdGZvbnQtc2l6ZTogMS41cmVtO1xcblxcdHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLmRpc2gge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi5kaXNoLWltZyB7XFxuXFx0d2lkdGg6IDUwJTtcXG5cXHRwYWRkaW5nOiAzMHB4O1xcbn1cXG5cXG4uZGlzaC10ZXh0IHtcXG5cXHR3aWR0aDogNTAlO1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdHBhZGRpbmc6IDMwcHg7XFxuXFx0Z2FwOiAzMHB4O1xcbn1cXG5cXG5mb290ZXIge1xcblxcdGhlaWdodDogNzBweDtcXG5cXHR3aWR0aDogMTAwJTtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmRhcnktY29sb3IpO1xcblxcdGNvbG9yOiB2YXIoLS1zZWNvbmRhcnktZm9udC1jb2xvcik7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdGZvbnQtc2l6ZTogMS4ycmVtO1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0NBQ0Msc0JBQXNCO0FBQ3ZCO0FBQ0E7OztDQUdDLG1CQUFtQjtDQUNuQixTQUFTO0NBQ1QsVUFBVTtBQUNYO0FB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Q0FDdkIsbUJBQW1CO0NBQ25CLGlCQUFpQjtBQUNsQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJodG1sIHtcXG5cXHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG4qLFxcbio6OmFmdGVyLFxcbio6OmJlZm9yZSB7XFxuXFx0Ym94LXNpemluZzogaW5oZXJpdDtcXG5cXHRtYXJnaW46IDA7XFxuXFx0cGFkZGluZzogMDtcXG59XFxuOnJvb3Qge1xcblxcdGZvbnQtZmFtaWx5OiBRdWlja3NhbmQ7XFxuXFx0LS1wcmltYXJ5LWNvbG9yOiAjZTVlNmU0O1xcblxcdC0tc2Vjb25kYXJ5LWNvbG9yOiAjMGYxMTBjO1xcblxcdC0tc2Vjb25kYXJ5LWNvbG9yLWhvdmVyOiAjMjAyMDIwO1xcblxcdC0tYWNjZW50LWNvbG9yOiAjZmY0MDAwO1xcblxcdC0tcHJpbWFyeS1mb250LWNvbG9yOiBibGFjaztcXG5cXHQtLXNlY29uZGFyeS1mb250LWNvbG9yOiB3aGl0ZTtcXG5cXHQtLWFjY2VudC1mb250LWNvbG9yOiB3aGl0ZTtcXG5cXHQtLWZvbnQtY29sb3I6IGJsYWNrO1xcblxcdC0tcGxhY2Vob2xkZXItY29sb3I6IGdyZWVueWVsbG93O1xcblxcdC0taGVhZGluZy1oZWlnaHQ6IDIwMHB4O1xcblxcdC0tZmFjZWJvb2stY29sb3I6ICM0MjY3YjI7XFxuXFx0LS1mYWNlYm9vay1ob3ZlcjogIzUxN2JjZjtcXG5cXHQtLXR3aXR0ZXItY29sb3I6ICMxZGExZjI7XFxuXFx0LS10d2l0dGVyLWhvdmVyOiAjNGFiYWZmO1xcblxcdC0taW5zdGFncmFtLWNvbG9yOiAjODMzYWI0O1xcblxcdC0taW5zdGFncmFtLWhvdmVyOiAjYTM0OWRmO1xcbn1cXG5cXG5AZm9udC1mYWNlIHtcXG5cXHRmb250LWZhbWlseTogJ1F1aWNrc2FuZCc7XFxuXFx0c3JjOiB1cmwoLi9RdWlja3NhbmQtUmVndWxhci50dGYpO1xcbn1cXG5cXG5AZm9udC1mYWNlIHtcXG5cXHRmb250LWZhbWlseTogJ0l0YWxpYW5ubyc7XFxuXFx0c3JjOiB1cmwoLi9JdGFsaWFubm8tUmVndWxhci50dGYpO1xcbn1cXG5cXG4jY29udGVudCB7XFxuXFx0bWluLWhlaWdodDogMTAwdmg7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbmEge1xcblxcdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG5cXHRjb2xvcjogdmFyKC0tZm9udC1jb2xvcik7XFxufVxcblxcbm5hdiB7XFxuXFx0aGVpZ2h0OiA1MHB4O1xcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZGFyeS1jb2xvcik7XFxuXFx0Y29sb3I6IHZhcigtLXNlY29uZGFyeS1mb250LWNvbG9yKTtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4ubmF2LWl0ZW0ge1xcblxcdHBhZGRpbmc6IDBweCAyMHB4O1xcblxcdGhlaWdodDogMTAwJTtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0Z2FwOiA1MHB4O1xcbn1cXG5cXG4ubG9nby1saW5rIHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXFx0Y29sb3I6IHZhcigtLXNlY29uZGFyeS1mb250LWNvbG9yKTtcXG59XFxuXFxuLmxvZ28tbGluayBpbWcge1xcblxcdGhlaWdodDogNTBweDtcXG5cXHR3aWR0aDogNTBweDtcXG5cXHRwYWRkaW5nOiA5cHg7XFxuXFx0ZmlsdGVyOiBpbnZlcnQoMTAwJSkgc2VwaWEoMCUpIHNhdHVyYXRlKDc0ODElKSBodWUtcm90YXRlKDE0NmRlZylcXG5cXHRcXHRicmlnaHRuZXNzKDEwNiUpIGNvbnRyYXN0KDEwNCUpO1xcbn1cXG5cXG4ubG9nby10ZXh0IHtcXG5cXHRmb250LXNpemU6IDEuMnJlbTtcXG59XFxuXFxuLnRhYnMge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0aGVpZ2h0OiAxMDAlO1xcblxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi50YWIge1xcblxcdGN1cnNvcjogcG9pbnRlcjtcXG5cXHRoZWlnaHQ6IDEwMCU7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdGNvbG9yOiByZ2IoMjEwLCAyMTAsIDIxMCk7XFxuXFx0cGFkZGluZzogMCAxMHB4O1xcbn1cXG5cXG4udGFiOmhvdmVyLFxcbi5uYXYtYWN0aXZlIHtcXG5cXHRjb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWZvbnQtY29sb3IpO1xcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZGFyeS1jb2xvci1ob3Zlcik7XFxufVxcblxcbi5pY29ucyB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRoZWlnaHQ6IDEwMCU7XFxuXFx0d2lkdGg6IDE1MHB4O1xcbn1cXG5cXG4uaWNvbiB7XFxuXFx0aGVpZ2h0OiAxMDAlO1xcblxcdHBhZGRpbmc6IDEwcHg7XFxuXFx0Y3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uaWNvbi1mYiB7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZmFjZWJvb2stY29sb3IpO1xcbn1cXG5cXG4uaWNvbi1mYjpob3ZlciB7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZmFjZWJvb2staG92ZXIpO1xcbn1cXG5cXG4uaWNvbi10dyB7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdHdpdHRlci1jb2xvcik7XFxufVxcblxcbi5pY29uLXR3OmhvdmVyIHtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10d2l0dGVyLWhvdmVyKTtcXG59XFxuXFxuLmljb24taW5zdGEge1xcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWluc3RhZ3JhbS1jb2xvcik7XFxufVxcblxcbi5pY29uLWluc3RhOmhvdmVyIHtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pbnN0YWdyYW0taG92ZXIpO1xcbn1cXG5cXG4uaGVhZGluZyB7XFxuXFx0cG9zaXRpb246IHJlbGF0aXZlO1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi9iYWNrZ3JvdW5kLXBob3RvLmpwZyk7XFxuXFx0aGVpZ2h0OiB2YXIoLS1oZWFkaW5nLWhlaWdodCk7XFxuXFx0d2lkdGg6IDEwMCU7XFxuXFx0YmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG59XFxuXFxuLmhlYWRpbmc6OmJlZm9yZSB7XFxuXFx0cG9zaXRpb246IGFic29sdXRlO1xcblxcdGNvbnRlbnQ6ICcnO1xcblxcdGxlZnQ6IDA7XFxuXFx0dG9wOiAwO1xcblxcdGhlaWdodDogdmFyKC0taGVhZGluZy1oZWlnaHQpO1xcblxcdHdpZHRoOiAxMDAlO1xcblxcdGJhY2tncm91bmQ6IHJnYigwLCAwLCAwKTtcXG5cXHRiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoXFxuXFx0XFx0OTBkZWcsXFxuXFx0XFx0cmdiYSgwLCAwLCAwLCAwLjkpIDAlLFxcblxcdFxcdHJnYmEoNDUsIDQ1LCA0NSwgMC4zKSA1MCUsXFxuXFx0XFx0cmdiYSgwLCAwLCAwLCAwLjkpIDEwMCVcXG5cXHQpO1xcbn1cXG5cXG4uaGVhZGluZy10ZXh0IHtcXG5cXHRwb3NpdGlvbjogcmVsYXRpdmU7XFxuXFx0Y29sb3I6IHdoaXRlO1xcblxcdGZvbnQtc2l6ZTogNnJlbTtcXG5cXHRmb250LWZhbWlseTogSXRhbGlhbm5vO1xcbn1cXG5cXG4ubWFpbiB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcdHdpZHRoOiAxMDAlO1xcblxcdHBhZGRpbmc6IDMwcHg7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XFxuXFx0Y29sb3I6IHZhcigtLXByaW1hcnktZm9udC1jb2xvcik7XFxuXFx0ZmxleC1ncm93OiAxO1xcbn1cXG5cXG4ubWFpbi1oZWFkZXIge1xcblxcdGZvbnQtc2l6ZTogMy41cmVtO1xcblxcdHRleHQtYWxpZ246IGNlbnRlcjtcXG5cXHRtYXJnaW4tYm90dG9tOiAyMHB4O1xcblxcdGZvbnQtZmFtaWx5OiBJdGFsaWFubm87XFxufVxcblxcbi5tYWluLXRleHQge1xcblxcdGZvbnQtc2l6ZTogMS41cmVtO1xcblxcdHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLmRpc2gge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi5kaXNoLWltZyB7XFxuXFx0d2lkdGg6IDUwJTtcXG5cXHRwYWRkaW5nOiAzMHB4O1xcbn1cXG5cXG4uZGlzaC10ZXh0IHtcXG5cXHR3aWR0aDogNTAlO1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdHBhZGRpbmc6IDMwcHg7XFxuXFx0Z2FwOiAzMHB4O1xcbn1cXG5cXG5mb290ZXIge1xcblxcdGhlaWdodDogNzBweDtcXG5cXHR3aWR0aDogMTAwJTtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmRhcnktY29sb3IpO1xcblxcdGNvbG9yOiB2YXIoLS1zZWNvbmRhcnktZm9udC1jb2xvcik7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdGZvbnQtc2l6ZTogMS4ycmVtO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG5cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG5cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpOyAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cblxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH0gLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuXG5cbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG5cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHsgY3JlYXRlRWxlbWVudCB9IGZyb20gJy4vdXRpbGl0eSc7XG5cbmNvbnN0IGZvb3RlckVsZW1lbnQgPSBjcmVhdGVFbGVtZW50KCdmb290ZXInLCBudWxsLCAnTWF0ZXVzeiBOdXJ6ecWEc2tpIFxcdTAwQTknKTtcblxuZXhwb3J0IGRlZmF1bHQgZm9vdGVyRWxlbWVudDtcbiIsImltcG9ydCB7IGNyZWF0ZUVsZW1lbnQgfSBmcm9tICcuL3V0aWxpdHknO1xuXG5jb25zdCBoZWFkaW5nRWxlbWVudCA9IGNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nLCBbJ2hlYWRpbmcnXSk7XG5cbmNvbnN0IGhlYWRpbmdUZXh0RWxlbWVudCA9IGNyZWF0ZUVsZW1lbnQoJ3AnLCBbJ2hlYWRpbmctdGV4dCddLCAnQWJvdXQgdXMnKTtcblxuaGVhZGluZ0VsZW1lbnQuYXBwZW5kQ2hpbGQoaGVhZGluZ1RleHRFbGVtZW50KTtcblxuZXhwb3J0IGRlZmF1bHQgaGVhZGluZ0VsZW1lbnQ7XG4iLCJpbXBvcnQgbmF2RWxlbWVudCBmcm9tICcuL25hdic7XG5pbXBvcnQgaGVhZGluZ0VsZW1lbnQgZnJvbSAnLi9oZWFkaW5nJztcbmltcG9ydCBtYWluRWxlbWVudCBmcm9tICcuL21haW4tY29udGVudCc7XG5pbXBvcnQgZm9vdGVyRWxlbWVudCBmcm9tICcuL2Zvb3Rlcic7XG5cbmNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCcpO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBsb2FkUGFnZSgpIHtcblx0Y29udGVudC5hcHBlbmRDaGlsZChuYXZFbGVtZW50KTtcblx0Y29udGVudC5hcHBlbmRDaGlsZChoZWFkaW5nRWxlbWVudCk7XG5cdGNvbnRlbnQuYXBwZW5kQ2hpbGQobWFpbkVsZW1lbnQpO1xuXHRjb250ZW50LmFwcGVuZENoaWxkKGZvb3RlckVsZW1lbnQpO1xufVxuIiwiaW1wb3J0IHsgY3JlYXRlRWxlbWVudCB9IGZyb20gJy4vdXRpbGl0eSc7XG5cbmNvbnN0IG1haW5FbGVtZW50ID0gY3JlYXRlRWxlbWVudCgnc2VjdGlvbicsIFsnbWFpbiddKTtcblxuY29uc3QgbWFpbkhlYWRlckVsZW1lbnQgPSBjcmVhdGVFbGVtZW50KFxuXHQncCcsXG5cdFsnbWFpbi1oZWFkZXInXSxcblx0J0xvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyLidcbik7XG5cbmNvbnN0IG1haW5UZXh0RWxlbWVudCA9IGNyZWF0ZUVsZW1lbnQoXG5cdCdwJyxcblx0WydtYWluLXRleHQnXSxcblx0J0xvcmVtLCBpcHN1bSBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBTZXF1aSBtaW51cyBpcHNhbSBhZCBuZXNjaXVudCBwcmFlc2VudGl1bSBldmVuaWV0IGZhY2lsaXMgcGVyc3BpY2lhdGlzLCBlbGlnZW5kaSByZXByZWhlbmRlcml0IHF1aWRlbSBhdXQsIG51bGxhIG1vbGVzdGlhcyBsYWJvcmlvc2FtIGFwZXJpYW0hXFxuXFxuTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gRXhlcmNpdGF0aW9uZW0gc3VzY2lwaXQsIHRlbmV0dXIgb2ZmaWNpYSBxdWFzIG5vYmlzIGFyY2hpdGVjdG8gYWNjdXNhbnRpdW0gbnVtcXVhbSBzdW50IG9kaXQgZGViaXRpcyBub24uIERvbG9yZSBxdWkgY29uc2VxdXVudHVyIGltcGVkaXQgZGVzZXJ1bnQgYXNwZXJuYXR1ciBwb3JybyB2b2x1cHRhdGVtIGVsaWdlbmRpIHF1b3MsIHZvbHVwdGF0ZSBleGNlcHR1cmkgbmFtIGxpYmVybywgdm9sdXB0YXRlcyBvcHRpbyBuZXNjaXVudCwgY29uc2VjdGV0dXIgaXBzYT8nXG4pO1xuXG5tYWluRWxlbWVudC5hcHBlbmRDaGlsZChtYWluSGVhZGVyRWxlbWVudCk7XG5tYWluRWxlbWVudC5hcHBlbmRDaGlsZChtYWluVGV4dEVsZW1lbnQpO1xuXG5leHBvcnQgZGVmYXVsdCBtYWluRWxlbWVudDtcbiIsImltcG9ydCBGYWNlYm9vayBmcm9tICcuL2ZhY2Vib29rLnN2Zyc7XG5pbXBvcnQgSW5zdGFncmFtIGZyb20gJy4vaW5zdGFncmFtLnN2Zyc7XG5pbXBvcnQgVHdpdHRlciBmcm9tICcuL3R3aXR0ZXIuc3ZnJztcbmltcG9ydCBIYXQgZnJvbSAnLi9oYXQuc3ZnJztcbmltcG9ydCB7IGNyZWF0ZUVsZW1lbnQgfSBmcm9tICcuL3V0aWxpdHknO1xuXG5jb25zdCBuYXZFbGVtZW50ID0gY3JlYXRlRWxlbWVudCgnbmF2Jyk7XG5cbi8vIEVsZW1lbnRzXG5jb25zdCBuYXZJdGVtRWxlbWVudHMgPSBbXG5cdGNyZWF0ZUVsZW1lbnQoJ2RpdicsIFsnbmF2LWl0ZW0nXSksXG5cdGNyZWF0ZUVsZW1lbnQoJ2RpdicsIFsnbmF2LWl0ZW0nXSksXG5dO1xuXG5jb25zdCBsb2dvRWxlbWVudCA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsIFsnbG9nbyddKTtcbmNvbnN0IGxvZ29MaW5rRWxlbWVudCA9IGNyZWF0ZUVsZW1lbnQoJ2EnLCBbJ2xvZ28tbGluayddKTtcbmxvZ29MaW5rRWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCAnIycpO1xuY29uc3QgbG9nb1RleHRFbGVtZW50ID0gY3JlYXRlRWxlbWVudCgncCcsIFsnbG9nby10ZXh0J10sICdPZGluIFJlc3RhdXJhbnQnKTtcblxuY29uc3QgdGFic0VsZW1lbnQgPSBjcmVhdGVFbGVtZW50KCdkaXYnLCBbJ3RhYnMnXSk7XG5jb25zdCB0YWJFbGVtZW50cyA9IFtcblx0Y3JlYXRlRWxlbWVudCgnZGl2JywgWyd0YWInLCAnYWJvdXQtdXMnLCAnbmF2LWFjdGl2ZSddLCAnQWJvdXQgdXMnKSxcblx0Y3JlYXRlRWxlbWVudCgnZGl2JywgWyd0YWInLCAnbWVudSddLCAnTWVudScpLFxuXHRjcmVhdGVFbGVtZW50KCdkaXYnLCBbJ3RhYicsICdyZXN0YXVyYW50cyddLCAnT3VyIHJlc3RhdXJhbnRzJyksXG5dO1xuXG5jb25zdCBpY29uc0VsZW1lbnQgPSBjcmVhdGVFbGVtZW50KCdkaXYnLCBbJ2ljb25zJ10pO1xuY29uc3QgaWNvbkVsZW1lbnRzID0gW1xuXHRjcmVhdGVFbGVtZW50KCdhJywgWydsaW5rLWZiJ10pLFxuXHRjcmVhdGVFbGVtZW50KCdhJywgWydsaW5rLXR3J10pLFxuXHRjcmVhdGVFbGVtZW50KCdhJywgWydsaW5rLWluc3RhJ10pLFxuXTtcblxuLy8gSW1hZ2VzXG5jb25zdCBmYWNlYm9va0ltZyA9IG5ldyBJbWFnZSgpO1xuZmFjZWJvb2tJbWcuc3JjID0gRmFjZWJvb2s7XG5mYWNlYm9va0ltZy5hbHQgPSAnRmFjZWJvb2snO1xuZmFjZWJvb2tJbWcuY2xhc3NMaXN0LmFkZCgnaWNvbi1mYicpO1xuZmFjZWJvb2tJbWcuY2xhc3NMaXN0LmFkZCgnaWNvbicpO1xuXG5jb25zdCB0d2l0dGVySW1nID0gbmV3IEltYWdlKCk7XG50d2l0dGVySW1nLnNyYyA9IFR3aXR0ZXI7XG50d2l0dGVySW1nLmFsdCA9ICdUd2l0dGVyJztcbnR3aXR0ZXJJbWcuY2xhc3NMaXN0LmFkZCgnaWNvbi10dycpO1xudHdpdHRlckltZy5jbGFzc0xpc3QuYWRkKCdpY29uJyk7XG5pY29uc0VsZW1lbnQuYXBwZW5kQ2hpbGQodHdpdHRlckltZyk7XG5cbmNvbnN0IGluc3RhZ3JhbUltZyA9IG5ldyBJbWFnZSgpO1xuaW5zdGFncmFtSW1nLnNyYyA9IEluc3RhZ3JhbTtcbmluc3RhZ3JhbUltZy5hbHQgPSAnSW5zdGFncmFtJztcbmluc3RhZ3JhbUltZy5jbGFzc0xpc3QuYWRkKCdpY29uLWluc3RhJyk7XG5pbnN0YWdyYW1JbWcuY2xhc3NMaXN0LmFkZCgnaWNvbicpO1xuaWNvbnNFbGVtZW50LmFwcGVuZENoaWxkKGluc3RhZ3JhbUltZyk7XG5cbmNvbnN0IGhhdEltZyA9IG5ldyBJbWFnZSgpO1xuaGF0SW1nLnNyYyA9IEhhdDtcbmhhdEltZy5hbHQgPSAnT2RpbiBSZXN0YXVyYW50IExvZ28nO1xubG9nb0xpbmtFbGVtZW50Lmluc2VydEFkamFjZW50RWxlbWVudCgnYWZ0ZXJiZWdpbicsIGhhdEltZyk7XG5cbi8vIEFwcGVuZGluZ1xubG9nb0xpbmtFbGVtZW50LmFwcGVuZENoaWxkKGxvZ29UZXh0RWxlbWVudCk7XG5sb2dvRWxlbWVudC5hcHBlbmRDaGlsZChsb2dvTGlua0VsZW1lbnQpO1xuXG50YWJFbGVtZW50cy5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG5cdHRhYnNFbGVtZW50LmFwcGVuZENoaWxkKGVsZW1lbnQpO1xufSk7XG5cbmljb25FbGVtZW50cy5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG5cdGljb25zRWxlbWVudC5hcHBlbmRDaGlsZChlbGVtZW50KTtcbn0pO1xuaWNvbnNFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5saW5rLWZiJykuYXBwZW5kQ2hpbGQoZmFjZWJvb2tJbWcpO1xuaWNvbnNFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5saW5rLXR3JykuYXBwZW5kQ2hpbGQodHdpdHRlckltZyk7XG5pY29uc0VsZW1lbnQucXVlcnlTZWxlY3RvcignLmxpbmstaW5zdGEnKS5hcHBlbmRDaGlsZChpbnN0YWdyYW1JbWcpO1xuXG5uYXZJdGVtRWxlbWVudHNbMF0uYXBwZW5kQ2hpbGQobG9nb0VsZW1lbnQpO1xubmF2SXRlbUVsZW1lbnRzWzBdLmFwcGVuZENoaWxkKHRhYnNFbGVtZW50KTtcblxubmF2SXRlbUVsZW1lbnRzWzFdLmFwcGVuZENoaWxkKGljb25zRWxlbWVudCk7XG5cbm5hdkl0ZW1FbGVtZW50cy5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG5cdG5hdkVsZW1lbnQuYXBwZW5kQ2hpbGQoZWxlbWVudCk7XG59KTtcblxuZXhwb3J0IGRlZmF1bHQgbmF2RWxlbWVudDtcbiIsImltcG9ydCB7IGNyZWF0ZUVsZW1lbnQgfSBmcm9tICcuLi91dGlsaXR5JztcbmltcG9ydCBMYXNhZ25lIGZyb20gJy4uL2xhc2FnbmUuanBnJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlTWVudSgpIHtcblx0Y29uc3QgZGlzaGVzID0gW1xuXHRcdHtcblx0XHRcdHRpdGxlOiAnTGFzYWduZScsXG5cdFx0XHRpbWFnZTogTGFzYWduZSxcblx0XHRcdGRlc2NyaXB0aW9uOiAnTGFzYWduZSBkZXNjcmlwdGlvbicsXG5cdFx0fSxcblx0XTtcblxuXHRjb25zdCBtYWluQ29udGVudEVsZW1lbnQgPSBjcmVhdGVFbGVtZW50KCdkaXYnLCBbXG5cdFx0J21haW4tY29udGVudCcsXG5cdFx0J21haW4tdGV4dCcsXG5cdF0pO1xuXHRkaXNoZXMuZm9yRWFjaCgoZGlzaCkgPT4ge1xuXHRcdGNvbnN0IGltYWdlRWxlbWVudCA9IG5ldyBJbWFnZSgpO1xuXHRcdGltYWdlRWxlbWVudC5zcmMgPSBkaXNoLmltYWdlO1xuXHRcdGltYWdlRWxlbWVudC5hbHQgPSBkaXNoLnRpdGxlO1xuXHRcdGltYWdlRWxlbWVudC5jbGFzc0xpc3QuYWRkKCdkaXNoLWltZycpO1xuXG5cdFx0Y29uc3QgZGVzY3JpcHRpb25FbGVtZW50ID0gY3JlYXRlRWxlbWVudChcblx0XHRcdCdkaXYnLFxuXHRcdFx0WydkaXNoLXRleHQnXSxcblx0XHRcdGA8aDI+JHtkaXNoLnRpdGxlfTwvaDI+PHA+JHtkaXNoLmRlc2NyaXB0aW9ufTwvcD5gXG5cdFx0KTtcblxuXHRcdGNvbnN0IGRpc2hFbGVtZW50ID0gY3JlYXRlRWxlbWVudCgnZGl2JywgWydkaXNoJ10pO1xuXHRcdGRpc2hFbGVtZW50LmFwcGVuZENoaWxkKGltYWdlRWxlbWVudCk7XG5cdFx0ZGlzaEVsZW1lbnQuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb25FbGVtZW50KTtcblxuXHRcdG1haW5Db250ZW50RWxlbWVudC5hcHBlbmRDaGlsZChkaXNoRWxlbWVudCk7XG5cdH0pO1xuXG5cdGNvbnN0IGhlYWRpbmcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVhZGluZycpO1xuXHRjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4nKTtcblx0Y29uc3QgaGVhZGluZ1RpdGxlID0gJ091ciBtZW51Jztcblx0Y29uc3QgbmF2Q2xhc3MgPSAnLm1lbnUnO1xuXG5cdGNvbnN0IGhlYWRpbmdUZXh0RWxlbWVudCA9IGNyZWF0ZUVsZW1lbnQoXG5cdFx0J3AnLFxuXHRcdFsnaGVhZGluZy10ZXh0J10sXG5cdFx0aGVhZGluZ1RpdGxlXG5cdCk7XG5cblx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihuYXZDbGFzcykuY2xhc3NMaXN0LmFkZCgnbmF2LWFjdGl2ZScpO1xuXHRoZWFkaW5nLmFwcGVuZENoaWxkKGhlYWRpbmdUZXh0RWxlbWVudCk7XG5cdG1haW4uYXBwZW5kQ2hpbGQobWFpbkNvbnRlbnRFbGVtZW50KTtcbn1cbiIsImZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnQoZWxlbWVudFR5cGUsIGVsZW1lbnRDbGFzc2VzLCBlbGVtZW50Q29udGVudCkge1xuXHRjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChlbGVtZW50VHlwZSk7XG5cdGlmIChBcnJheS5pc0FycmF5KGVsZW1lbnRDbGFzc2VzKSkge1xuXHRcdGVsZW1lbnRDbGFzc2VzLmZvckVhY2goKGNsYXNzTmFtZSkgPT4ge1xuXHRcdFx0ZWxlbWVudC5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XG5cdFx0fSk7XG5cdH1cblx0aWYgKGVsZW1lbnRDb250ZW50KSB7XG5cdFx0ZWxlbWVudC5pbm5lckhUTUwgPSBlbGVtZW50Q29udGVudDtcblx0fVxuXHRyZXR1cm4gZWxlbWVudDtcbn1cblxuZXhwb3J0IHsgY3JlYXRlRWxlbWVudCB9O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IGxvYWRQYWdlIGZyb20gJy4vbG9hZC1wYWdlJztcbmltcG9ydCBjcmVhdGVNZW51IGZyb20gJy4vdGFicy9tZW51LmpzJztcblxubG9hZFBhZ2UoKTtcblxuY29uc3QgbmF2TWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tZW51Jyk7XG5uYXZNZW51LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcblx0Y2xlYXJPbGRUYWJDb250ZW50KCk7XG5cdGNyZWF0ZU1lbnUoKTtcbn0pO1xuXG5mdW5jdGlvbiBjbGVhck9sZFRhYkNvbnRlbnQoKSB7XG5cdGNvbnN0IGFjdGl2ZVRhYnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubmF2LWFjdGl2ZScpO1xuXHRjb25zdCBoZWFkaW5nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlYWRpbmcnKTtcblx0Y29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluJyk7XG5cdGFjdGl2ZVRhYnMuZm9yRWFjaCgodGFiKSA9PiB7XG5cdFx0dGFiLmNsYXNzTGlzdC5yZW1vdmUoJ25hdi1hY3RpdmUnKTtcblx0fSk7XG5cdGhlYWRpbmcuaW5uZXJIVE1MID0gJyc7XG5cdG1haW4uaW5uZXJIVE1MID0gJyc7XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=