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
___CSS_LOADER_EXPORT___.push([module.id, "html {\n\tbox-sizing: border-box;\n}\n*,\n*::after,\n*::before {\n\tbox-sizing: inherit;\n\tmargin: 0;\n\tpadding: 0;\n}\n:root {\n\tfont-family: Quicksand;\n\t--primary-color: #e5e6e4;\n\t--secondary-color: #0f110c;\n\t--secondary-color-hover: #202020;\n\t--accent-color: #ff4000;\n\t--primary-font-color: black;\n\t--secondary-font-color: white;\n\t--accent-font-color: white;\n\t--font-color: black;\n\t--placeholder-color: greenyellow;\n\t--heading-height: 200px;\n\t--facebook-color: #4267b2;\n\t--facebook-hover: #517bcf;\n\t--twitter-color: #1da1f2;\n\t--twitter-hover: #4abaff;\n\t--instagram-color: #833ab4;\n\t--instagram-hover: #a349df;\n}\n\n@font-face {\n\tfont-family: 'Quicksand';\n\tsrc: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n}\n\n@font-face {\n\tfont-family: 'Italianno';\n\tsrc: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n}\n\n#content {\n\tmin-height: 100vh;\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: center;\n}\n\na {\n\ttext-decoration: none;\n\tcolor: var(--font-color);\n}\n\nnav {\n\theight: 50px;\n\tbackground-color: var(--secondary-color);\n\tcolor: var(--secondary-font-color);\n\tdisplay: flex;\n\tjustify-content: space-between;\n\talign-items: center;\n\twidth: 100%;\n}\n\n.nav-item {\n\tpadding: 0px 20px;\n\theight: 100%;\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\tgap: 50px;\n}\n\n.logo-link {\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: center;\n\tcolor: var(--secondary-font-color);\n}\n\n.logo-link img {\n\theight: 50px;\n\twidth: 50px;\n\tpadding: 9px;\n\tfilter: invert(100%) sepia(0%) saturate(7481%) hue-rotate(146deg)\n\t\tbrightness(106%) contrast(104%);\n}\n\n.logo-text {\n\tfont-size: 1.2rem;\n}\n\n.tabs {\n\tdisplay: flex;\n\theight: 100%;\n\tjustify-content: center;\n\talign-items: center;\n}\n\n.tab {\n\tcursor: pointer;\n\theight: 100%;\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\tcolor: rgb(210, 210, 210);\n\tpadding: 0 10px;\n}\n\n.tab:hover {\n\tcolor: var(--secondary-font-color);\n\tbackground-color: var(--secondary-color-hover);\n}\n\n.icons {\n\tdisplay: flex;\n\theight: 100%;\n\twidth: 150px;\n}\n\n.icon {\n\theight: 100%;\n\tpadding: 10px;\n\tcursor: pointer;\n}\n\n.icon-fb {\n\tbackground-color: var(--facebook-color);\n}\n\n.icon-fb:hover {\n\tbackground-color: var(--facebook-hover);\n}\n\n.icon-tw {\n\tbackground-color: var(--twitter-color);\n}\n\n.icon-tw:hover {\n\tbackground-color: var(--twitter-hover);\n}\n\n.icon-insta {\n\tbackground-color: var(--instagram-color);\n}\n\n.icon-insta:hover {\n\tbackground-color: var(--instagram-hover);\n}\n\n.heading {\n\tposition: relative;\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\tbackground-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\n\theight: var(--heading-height);\n\twidth: 100%;\n\tbackground-size: cover;\n}\n\n.heading::before {\n\tposition: absolute;\n\tcontent: '';\n\tleft: 0;\n\ttop: 0;\n\theight: var(--heading-height);\n\twidth: 100%;\n\tbackground: rgb(0, 0, 0);\n\tbackground: linear-gradient(\n\t\t90deg,\n\t\trgba(0, 0, 0, 0.9) 0%,\n\t\trgba(45, 45, 45, 0.3) 50%,\n\t\trgba(0, 0, 0, 0.9) 100%\n\t);\n}\n\n.heading-text {\n\tposition: relative;\n\tcolor: white;\n\tfont-size: 6rem;\n\tfont-family: Italianno;\n}\n\n.main {\n\tdisplay: flex;\n\tflex-direction: column;\n\tpadding: 30px;\n\tbackground-color: var(--primary-color);\n\tcolor: var(--primary-font-color);\n\tflex-grow: 1;\n}\n\n.main-header {\n\tfont-size: 3.5rem;\n\ttext-align: center;\n\tmargin-bottom: 20px;\n\tfont-family: Italianno;\n}\n\n.main-text {\n\tfont-size: 1.5rem;\n\ttext-align: center;\n}\n\nfooter {\n\theight: 70px;\n\twidth: 100%;\n\tbackground-color: var(--secondary-color);\n\tcolor: var(--secondary-font-color);\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\tfont-size: 1.2rem;\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;CACC,sBAAsB;AACvB;AACA;;;CAGC,mBAAmB;CACnB,SAAS;CACT,UAAU;AACX;AACA;CACC,sBAAsB;CACtB,wBAAwB;CACxB,0BAA0B;CAC1B,gCAAgC;CAChC,uBAAuB;CACvB,2BAA2B;CAC3B,6BAA6B;CAC7B,0BAA0B;CAC1B,mBAAmB;CACnB,gCAAgC;CAChC,uBAAuB;CACvB,yBAAyB;CACzB,yBAAyB;CACzB,wBAAwB;CACxB,wBAAwB;CACxB,0BAA0B;CAC1B,0BAA0B;AAC3B;;AAEA;CACC,wBAAwB;CACxB,4CAAiC;AAClC;;AAEA;CACC,wBAAwB;CACxB,4CAAiC;AAClC;;AAEA;CACC,iBAAiB;CACjB,aAAa;CACb,sBAAsB;CACtB,mBAAmB;AACpB;;AAEA;CACC,qBAAqB;CACrB,wBAAwB;AACzB;;AAEA;CACC,YAAY;CACZ,wCAAwC;CACxC,kCAAkC;CAClC,aAAa;CACb,8BAA8B;CAC9B,mBAAmB;CACnB,WAAW;AACZ;;AAEA;CACC,iBAAiB;CACjB,YAAY;CACZ,aAAa;CACb,uBAAuB;CACvB,mBAAmB;CACnB,SAAS;AACV;;AAEA;CACC,aAAa;CACb,mBAAmB;CACnB,uBAAuB;CACvB,kCAAkC;AACnC;;AAEA;CACC,YAAY;CACZ,WAAW;CACX,YAAY;CACZ;iCACgC;AACjC;;AAEA;CACC,iBAAiB;AAClB;;AAEA;CACC,aAAa;CACb,YAAY;CACZ,uBAAuB;CACvB,mBAAmB;AACpB;;AAEA;CACC,eAAe;CACf,YAAY;CACZ,aAAa;CACb,uBAAuB;CACvB,mBAAmB;CACnB,yBAAyB;CACzB,eAAe;AAChB;;AAEA;CACC,kCAAkC;CAClC,8CAA8C;AAC/C;;AAEA;CACC,aAAa;CACb,YAAY;CACZ,YAAY;AACb;;AAEA;CACC,YAAY;CACZ,aAAa;CACb,eAAe;AAChB;;AAEA;CACC,uCAAuC;AACxC;;AAEA;CACC,uCAAuC;AACxC;;AAEA;CACC,sCAAsC;AACvC;;AAEA;CACC,sCAAsC;AACvC;;AAEA;CACC,wCAAwC;AACzC;;AAEA;CACC,wCAAwC;AACzC;;AAEA;CACC,kBAAkB;CAClB,aAAa;CACb,uBAAuB;CACvB,mBAAmB;CACnB,yDAA6C;CAC7C,6BAA6B;CAC7B,WAAW;CACX,sBAAsB;AACvB;;AAEA;CACC,kBAAkB;CAClB,WAAW;CACX,OAAO;CACP,MAAM;CACN,6BAA6B;CAC7B,WAAW;CACX,wBAAwB;CACxB;;;;;EAKC;AACF;;AAEA;CACC,kBAAkB;CAClB,YAAY;CACZ,eAAe;CACf,sBAAsB;AACvB;;AAEA;CACC,aAAa;CACb,sBAAsB;CACtB,aAAa;CACb,sCAAsC;CACtC,gCAAgC;CAChC,YAAY;AACb;;AAEA;CACC,iBAAiB;CACjB,kBAAkB;CAClB,mBAAmB;CACnB,sBAAsB;AACvB;;AAEA;CACC,iBAAiB;CACjB,kBAAkB;AACnB;;AAEA;CACC,YAAY;CACZ,WAAW;CACX,wCAAwC;CACxC,kCAAkC;CAClC,aAAa;CACb,uBAAuB;CACvB,mBAAmB;CACnB,iBAAiB;AAClB","sourcesContent":["html {\n\tbox-sizing: border-box;\n}\n*,\n*::after,\n*::before {\n\tbox-sizing: inherit;\n\tmargin: 0;\n\tpadding: 0;\n}\n:root {\n\tfont-family: Quicksand;\n\t--primary-color: #e5e6e4;\n\t--secondary-color: #0f110c;\n\t--secondary-color-hover: #202020;\n\t--accent-color: #ff4000;\n\t--primary-font-color: black;\n\t--secondary-font-color: white;\n\t--accent-font-color: white;\n\t--font-color: black;\n\t--placeholder-color: greenyellow;\n\t--heading-height: 200px;\n\t--facebook-color: #4267b2;\n\t--facebook-hover: #517bcf;\n\t--twitter-color: #1da1f2;\n\t--twitter-hover: #4abaff;\n\t--instagram-color: #833ab4;\n\t--instagram-hover: #a349df;\n}\n\n@font-face {\n\tfont-family: 'Quicksand';\n\tsrc: url(./Quicksand-Regular.ttf);\n}\n\n@font-face {\n\tfont-family: 'Italianno';\n\tsrc: url(./Italianno-Regular.ttf);\n}\n\n#content {\n\tmin-height: 100vh;\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: center;\n}\n\na {\n\ttext-decoration: none;\n\tcolor: var(--font-color);\n}\n\nnav {\n\theight: 50px;\n\tbackground-color: var(--secondary-color);\n\tcolor: var(--secondary-font-color);\n\tdisplay: flex;\n\tjustify-content: space-between;\n\talign-items: center;\n\twidth: 100%;\n}\n\n.nav-item {\n\tpadding: 0px 20px;\n\theight: 100%;\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\tgap: 50px;\n}\n\n.logo-link {\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: center;\n\tcolor: var(--secondary-font-color);\n}\n\n.logo-link img {\n\theight: 50px;\n\twidth: 50px;\n\tpadding: 9px;\n\tfilter: invert(100%) sepia(0%) saturate(7481%) hue-rotate(146deg)\n\t\tbrightness(106%) contrast(104%);\n}\n\n.logo-text {\n\tfont-size: 1.2rem;\n}\n\n.tabs {\n\tdisplay: flex;\n\theight: 100%;\n\tjustify-content: center;\n\talign-items: center;\n}\n\n.tab {\n\tcursor: pointer;\n\theight: 100%;\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\tcolor: rgb(210, 210, 210);\n\tpadding: 0 10px;\n}\n\n.tab:hover {\n\tcolor: var(--secondary-font-color);\n\tbackground-color: var(--secondary-color-hover);\n}\n\n.icons {\n\tdisplay: flex;\n\theight: 100%;\n\twidth: 150px;\n}\n\n.icon {\n\theight: 100%;\n\tpadding: 10px;\n\tcursor: pointer;\n}\n\n.icon-fb {\n\tbackground-color: var(--facebook-color);\n}\n\n.icon-fb:hover {\n\tbackground-color: var(--facebook-hover);\n}\n\n.icon-tw {\n\tbackground-color: var(--twitter-color);\n}\n\n.icon-tw:hover {\n\tbackground-color: var(--twitter-hover);\n}\n\n.icon-insta {\n\tbackground-color: var(--instagram-color);\n}\n\n.icon-insta:hover {\n\tbackground-color: var(--instagram-hover);\n}\n\n.heading {\n\tposition: relative;\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\tbackground-image: url(./background-photo.jpg);\n\theight: var(--heading-height);\n\twidth: 100%;\n\tbackground-size: cover;\n}\n\n.heading::before {\n\tposition: absolute;\n\tcontent: '';\n\tleft: 0;\n\ttop: 0;\n\theight: var(--heading-height);\n\twidth: 100%;\n\tbackground: rgb(0, 0, 0);\n\tbackground: linear-gradient(\n\t\t90deg,\n\t\trgba(0, 0, 0, 0.9) 0%,\n\t\trgba(45, 45, 45, 0.3) 50%,\n\t\trgba(0, 0, 0, 0.9) 100%\n\t);\n}\n\n.heading-text {\n\tposition: relative;\n\tcolor: white;\n\tfont-size: 6rem;\n\tfont-family: Italianno;\n}\n\n.main {\n\tdisplay: flex;\n\tflex-direction: column;\n\tpadding: 30px;\n\tbackground-color: var(--primary-color);\n\tcolor: var(--primary-font-color);\n\tflex-grow: 1;\n}\n\n.main-header {\n\tfont-size: 3.5rem;\n\ttext-align: center;\n\tmargin-bottom: 20px;\n\tfont-family: Italianno;\n}\n\n.main-text {\n\tfont-size: 1.5rem;\n\ttext-align: center;\n}\n\nfooter {\n\theight: 70px;\n\twidth: 100%;\n\tbackground-color: var(--secondary-color);\n\tcolor: var(--secondary-font-color);\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\tfont-size: 1.2rem;\n}\n"],"sourceRoot":""}]);
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



const content = document.querySelector('#content');

function loadPage() {
	content.appendChild(_nav__WEBPACK_IMPORTED_MODULE_0__["default"]);
	content.appendChild(_heading__WEBPACK_IMPORTED_MODULE_1__["default"]);
}


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
	(0,_utility__WEBPACK_IMPORTED_MODULE_4__.createElement)('div', ['tab'], 'About us'),
	(0,_utility__WEBPACK_IMPORTED_MODULE_4__.createElement)('div', ['tab'], 'Menu'),
	(0,_utility__WEBPACK_IMPORTED_MODULE_4__.createElement)('div', ['tab'], 'Our restaurants'),
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
		element.innerText = elementContent;
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



(0,_load_page__WEBPACK_IMPORTED_MODULE_1__["default"])();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NmQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7Ozs7O1dDckJBOzs7Ozs7Ozs7Ozs7O0FDQXFCO0FBQ2M7O0FBRW5DLHNEQUFRIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50LXBhZ2UvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQtcGFnZS8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC1wYWdlLy4vc3JjL2hlYWRpbmcuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbG9hZC1wYWdlLmpzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC1wYWdlLy4vc3JjL25hdi5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQtcGFnZS8uL3NyYy91dGlsaXR5LmpzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vUXVpY2tzYW5kLVJlZ3VsYXIudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi9JdGFsaWFubm8tUmVndWxhci50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyA9IG5ldyBVUkwoXCIuL2JhY2tncm91bmQtcGhvdG8uanBnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJodG1sIHtcXG5cXHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG4qLFxcbio6OmFmdGVyLFxcbio6OmJlZm9yZSB7XFxuXFx0Ym94LXNpemluZzogaW5oZXJpdDtcXG5cXHRtYXJnaW46IDA7XFxuXFx0cGFkZGluZzogMDtcXG59XFxuOnJvb3Qge1xcblxcdGZvbnQtZmFtaWx5OiBRdWlja3NhbmQ7XFxuXFx0LS1wcmltYXJ5LWNvbG9yOiAjZTVlNmU0O1xcblxcdC0tc2Vjb25kYXJ5LWNvbG9yOiAjMGYxMTBjO1xcblxcdC0tc2Vjb25kYXJ5LWNvbG9yLWhvdmVyOiAjMjAyMDIwO1xcblxcdC0tYWNjZW50LWNvbG9yOiAjZmY0MDAwO1xcblxcdC0tcHJpbWFyeS1mb250LWNvbG9yOiBibGFjaztcXG5cXHQtLXNlY29uZGFyeS1mb250LWNvbG9yOiB3aGl0ZTtcXG5cXHQtLWFjY2VudC1mb250LWNvbG9yOiB3aGl0ZTtcXG5cXHQtLWZvbnQtY29sb3I6IGJsYWNrO1xcblxcdC0tcGxhY2Vob2xkZXItY29sb3I6IGdyZWVueWVsbG93O1xcblxcdC0taGVhZGluZy1oZWlnaHQ6IDIwMHB4O1xcblxcdC0tZmFjZWJvb2stY29sb3I6ICM0MjY3YjI7XFxuXFx0LS1mYWNlYm9vay1ob3ZlcjogIzUxN2JjZjtcXG5cXHQtLXR3aXR0ZXItY29sb3I6ICMxZGExZjI7XFxuXFx0LS10d2l0dGVyLWhvdmVyOiAjNGFiYWZmO1xcblxcdC0taW5zdGFncmFtLWNvbG9yOiAjODMzYWI0O1xcblxcdC0taW5zdGFncmFtLWhvdmVyOiAjYTM0OWRmO1xcbn1cXG5cXG5AZm9udC1mYWNlIHtcXG5cXHRmb250LWZhbWlseTogJ1F1aWNrc2FuZCc7XFxuXFx0c3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcbn1cXG5cXG5AZm9udC1mYWNlIHtcXG5cXHRmb250LWZhbWlseTogJ0l0YWxpYW5ubyc7XFxuXFx0c3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fICsgXCIpO1xcbn1cXG5cXG4jY29udGVudCB7XFxuXFx0bWluLWhlaWdodDogMTAwdmg7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbmEge1xcblxcdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG5cXHRjb2xvcjogdmFyKC0tZm9udC1jb2xvcik7XFxufVxcblxcbm5hdiB7XFxuXFx0aGVpZ2h0OiA1MHB4O1xcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZGFyeS1jb2xvcik7XFxuXFx0Y29sb3I6IHZhcigtLXNlY29uZGFyeS1mb250LWNvbG9yKTtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4ubmF2LWl0ZW0ge1xcblxcdHBhZGRpbmc6IDBweCAyMHB4O1xcblxcdGhlaWdodDogMTAwJTtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0Z2FwOiA1MHB4O1xcbn1cXG5cXG4ubG9nby1saW5rIHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXFx0Y29sb3I6IHZhcigtLXNlY29uZGFyeS1mb250LWNvbG9yKTtcXG59XFxuXFxuLmxvZ28tbGluayBpbWcge1xcblxcdGhlaWdodDogNTBweDtcXG5cXHR3aWR0aDogNTBweDtcXG5cXHRwYWRkaW5nOiA5cHg7XFxuXFx0ZmlsdGVyOiBpbnZlcnQoMTAwJSkgc2VwaWEoMCUpIHNhdHVyYXRlKDc0ODElKSBodWUtcm90YXRlKDE0NmRlZylcXG5cXHRcXHRicmlnaHRuZXNzKDEwNiUpIGNvbnRyYXN0KDEwNCUpO1xcbn1cXG5cXG4ubG9nby10ZXh0IHtcXG5cXHRmb250LXNpemU6IDEuMnJlbTtcXG59XFxuXFxuLnRhYnMge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0aGVpZ2h0OiAxMDAlO1xcblxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi50YWIge1xcblxcdGN1cnNvcjogcG9pbnRlcjtcXG5cXHRoZWlnaHQ6IDEwMCU7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdGNvbG9yOiByZ2IoMjEwLCAyMTAsIDIxMCk7XFxuXFx0cGFkZGluZzogMCAxMHB4O1xcbn1cXG5cXG4udGFiOmhvdmVyIHtcXG5cXHRjb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWZvbnQtY29sb3IpO1xcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZGFyeS1jb2xvci1ob3Zlcik7XFxufVxcblxcbi5pY29ucyB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRoZWlnaHQ6IDEwMCU7XFxuXFx0d2lkdGg6IDE1MHB4O1xcbn1cXG5cXG4uaWNvbiB7XFxuXFx0aGVpZ2h0OiAxMDAlO1xcblxcdHBhZGRpbmc6IDEwcHg7XFxuXFx0Y3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uaWNvbi1mYiB7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZmFjZWJvb2stY29sb3IpO1xcbn1cXG5cXG4uaWNvbi1mYjpob3ZlciB7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZmFjZWJvb2staG92ZXIpO1xcbn1cXG5cXG4uaWNvbi10dyB7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdHdpdHRlci1jb2xvcik7XFxufVxcblxcbi5pY29uLXR3OmhvdmVyIHtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10d2l0dGVyLWhvdmVyKTtcXG59XFxuXFxuLmljb24taW5zdGEge1xcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWluc3RhZ3JhbS1jb2xvcik7XFxufVxcblxcbi5pY29uLWluc3RhOmhvdmVyIHtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pbnN0YWdyYW0taG92ZXIpO1xcbn1cXG5cXG4uaGVhZGluZyB7XFxuXFx0cG9zaXRpb246IHJlbGF0aXZlO1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fICsgXCIpO1xcblxcdGhlaWdodDogdmFyKC0taGVhZGluZy1oZWlnaHQpO1xcblxcdHdpZHRoOiAxMDAlO1xcblxcdGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxufVxcblxcbi5oZWFkaW5nOjpiZWZvcmUge1xcblxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG5cXHRjb250ZW50OiAnJztcXG5cXHRsZWZ0OiAwO1xcblxcdHRvcDogMDtcXG5cXHRoZWlnaHQ6IHZhcigtLWhlYWRpbmctaGVpZ2h0KTtcXG5cXHR3aWR0aDogMTAwJTtcXG5cXHRiYWNrZ3JvdW5kOiByZ2IoMCwgMCwgMCk7XFxuXFx0YmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KFxcblxcdFxcdDkwZGVnLFxcblxcdFxcdHJnYmEoMCwgMCwgMCwgMC45KSAwJSxcXG5cXHRcXHRyZ2JhKDQ1LCA0NSwgNDUsIDAuMykgNTAlLFxcblxcdFxcdHJnYmEoMCwgMCwgMCwgMC45KSAxMDAlXFxuXFx0KTtcXG59XFxuXFxuLmhlYWRpbmctdGV4dCB7XFxuXFx0cG9zaXRpb246IHJlbGF0aXZlO1xcblxcdGNvbG9yOiB3aGl0ZTtcXG5cXHRmb250LXNpemU6IDZyZW07XFxuXFx0Zm9udC1mYW1pbHk6IEl0YWxpYW5ubztcXG59XFxuXFxuLm1haW4ge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXHRwYWRkaW5nOiAzMHB4O1xcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xcblxcdGNvbG9yOiB2YXIoLS1wcmltYXJ5LWZvbnQtY29sb3IpO1xcblxcdGZsZXgtZ3JvdzogMTtcXG59XFxuXFxuLm1haW4taGVhZGVyIHtcXG5cXHRmb250LXNpemU6IDMuNXJlbTtcXG5cXHR0ZXh0LWFsaWduOiBjZW50ZXI7XFxuXFx0bWFyZ2luLWJvdHRvbTogMjBweDtcXG5cXHRmb250LWZhbWlseTogSXRhbGlhbm5vO1xcbn1cXG5cXG4ubWFpbi10ZXh0IHtcXG5cXHRmb250LXNpemU6IDEuNXJlbTtcXG5cXHR0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbmZvb3RlciB7XFxuXFx0aGVpZ2h0OiA3MHB4O1xcblxcdHdpZHRoOiAxMDAlO1xcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZGFyeS1jb2xvcik7XFxuXFx0Y29sb3I6IHZhcigtLXNlY29uZGFyeS1mb250LWNvbG9yKTtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0Zm9udC1zaXplOiAxLjJyZW07XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7Q0FDQyxzQkFBc0I7QUFDdkI7QUFDQTs7O0NBR0MsbUJBQW1CO0NBQ25CLFNBQVM7Q0FDVCxVQUFVO0FBQ1g7QUFDQTtDQUNDLHNCQUFzQjtDQUN0Qix3QkFBd0I7Q0FDeEIsMEJBQTBCO0NBQzFCLGdDQUFnQztDQUNoQyx1QkFBdUI7Q0FDdkIsMkJBQTJCO0NBQzNCLDZCQUE2QjtDQUM3QiwwQkFBMEI7Q0FDMUIsbUJBQW1CO0NBQ25CLGdDQUFnQztDQUNoQyx1QkFBdUI7Q0FDdkIseUJBQXlCO0NBQ3pCLHlCQUF5QjtDQUN6Qix3QkFBd0I7Q0FDeEIsd0JBQXdCO0NBQ3hCLDBCQUEwQjtDQUMxQiwwQkFBMEI7QUFDM0I7O0FBRUE7Q0FDQyx3QkFBd0I7Q0FDeEIsNENBQWlDO0FBQ2xDOztBQUVBO0NBQ0Msd0JBQXdCO0NBQ3hCLDRDQUFpQztBQUNsQzs7QUFFQTtDQUNDLGlCQUFpQjtDQUNqQixhQUFhO0NBQ2Isc0JBQXNCO0NBQ3RCLG1CQUFtQjtBQUNwQjs7QUFFQTtDQUNDLHFCQUFxQjtDQUNyQix3QkFBd0I7QUFDekI7O0FBRUE7Q0FDQyxZQUFZO0NBQ1osd0NBQXdDO0NBQ3hDLGtDQUFrQztDQUNsQyxhQUFhO0NBQ2IsOEJBQThCO0NBQzlCLG1CQUFtQjtDQUNuQixXQUFXO0FBQ1o7O0FBRUE7Q0FDQyxpQkFBaUI7Q0FDakIsWUFBWTtDQUNaLGFBQWE7Q0FDYix1QkFBdUI7Q0FDdkIsbUJBQW1CO0NBQ25CLFNBQVM7QUFDVjs7QUFFQTtDQUNDLGFBQWE7Q0FDYixtQkFBbUI7Q0FDbkIsdUJBQXVCO0NBQ3ZCLGtDQUFrQztBQUNuQzs7QUFFQTtDQUNDLFlBQVk7Q0FDWixXQUFXO0NBQ1gsWUFBWTtDQUNaO2lDQUNnQztBQUNqQzs7QUFFQTtDQUNDLGlCQUFpQjtBQUNsQjs7QUFFQTtDQUNDLGFBQWE7Q0FDYixZQUFZO0NBQ1osdUJBQXVCO0NBQ3ZCLG1CQUFtQjtBQUNwQjs7QUFFQTtDQUNDLGVBQWU7Q0FDZixZQUFZO0NBQ1osYUFBYTtDQUNiLHVCQUF1QjtDQUN2QixtQkFBbUI7Q0FDbkIseUJBQXlCO0NBQ3pCLGVBQWU7QUFDaEI7O0FBRUE7Q0FDQyxrQ0FBa0M7Q0FDbEMsOENBQThDO0FBQy9DOztBQUVBO0NBQ0MsYUFBYTtDQUNiLFlBQVk7Q0FDWixZQUFZO0FBQ2I7O0FBRUE7Q0FDQyxZQUFZO0NBQ1osYUFBYTtDQUNiLGVBQWU7QUFDaEI7O0FBRUE7Q0FDQyx1Q0FBdUM7QUFDeEM7O0FBRUE7Q0FDQyx1Q0FBdUM7QUFDeEM7O0FBRUE7Q0FDQyxzQ0FBc0M7QUFDdkM7O0FBRUE7Q0FDQyxzQ0FBc0M7QUFDdkM7O0FBRUE7Q0FDQyx3Q0FBd0M7QUFDekM7O0FBRUE7Q0FDQyx3Q0FBd0M7QUFDekM7O0FBRUE7Q0FDQyxrQkFBa0I7Q0FDbEIsYUFBYTtDQUNiLHVCQUF1QjtDQUN2QixtQkFBbUI7Q0FDbkIseURBQTZDO0NBQzdDLDZCQUE2QjtDQUM3QixXQUFXO0NBQ1gsc0JBQXNCO0FBQ3ZCOztBQUVBO0NBQ0Msa0JBQWtCO0NBQ2xCLFdBQVc7Q0FDWCxPQUFPO0NBQ1AsTUFBTTtDQUNOLDZCQUE2QjtDQUM3QixXQUFXO0NBQ1gsd0JBQXdCO0NBQ3hCOzs7OztFQUtDO0FBQ0Y7O0FBRUE7Q0FDQyxrQkFBa0I7Q0FDbEIsWUFBWTtDQUNaLGVBQWU7Q0FDZixzQkFBc0I7QUFDdkI7O0FBRUE7Q0FDQyxhQUFhO0NBQ2Isc0JBQXNCO0NBQ3RCLGFBQWE7Q0FDYixzQ0FBc0M7Q0FDdEMsZ0NBQWdDO0NBQ2hDLFlBQVk7QUFDYjs7QUFFQTtDQUNDLGlCQUFpQjtDQUNqQixrQkFBa0I7Q0FDbEIsbUJBQW1CO0NBQ25CLHNCQUFzQjtBQUN2Qjs7QUFFQTtDQUNDLGlCQUFpQjtDQUNqQixrQkFBa0I7QUFDbkI7O0FBRUE7Q0FDQyxZQUFZO0NBQ1osV0FBVztDQUNYLHdDQUF3QztDQUN4QyxrQ0FBa0M7Q0FDbEMsYUFBYTtDQUNiLHVCQUF1QjtDQUN2QixtQkFBbUI7Q0FDbkIsaUJBQWlCO0FBQ2xCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcImh0bWwge1xcblxcdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcbiosXFxuKjo6YWZ0ZXIsXFxuKjo6YmVmb3JlIHtcXG5cXHRib3gtc2l6aW5nOiBpbmhlcml0O1xcblxcdG1hcmdpbjogMDtcXG5cXHRwYWRkaW5nOiAwO1xcbn1cXG46cm9vdCB7XFxuXFx0Zm9udC1mYW1pbHk6IFF1aWNrc2FuZDtcXG5cXHQtLXByaW1hcnktY29sb3I6ICNlNWU2ZTQ7XFxuXFx0LS1zZWNvbmRhcnktY29sb3I6ICMwZjExMGM7XFxuXFx0LS1zZWNvbmRhcnktY29sb3ItaG92ZXI6ICMyMDIwMjA7XFxuXFx0LS1hY2NlbnQtY29sb3I6ICNmZjQwMDA7XFxuXFx0LS1wcmltYXJ5LWZvbnQtY29sb3I6IGJsYWNrO1xcblxcdC0tc2Vjb25kYXJ5LWZvbnQtY29sb3I6IHdoaXRlO1xcblxcdC0tYWNjZW50LWZvbnQtY29sb3I6IHdoaXRlO1xcblxcdC0tZm9udC1jb2xvcjogYmxhY2s7XFxuXFx0LS1wbGFjZWhvbGRlci1jb2xvcjogZ3JlZW55ZWxsb3c7XFxuXFx0LS1oZWFkaW5nLWhlaWdodDogMjAwcHg7XFxuXFx0LS1mYWNlYm9vay1jb2xvcjogIzQyNjdiMjtcXG5cXHQtLWZhY2Vib29rLWhvdmVyOiAjNTE3YmNmO1xcblxcdC0tdHdpdHRlci1jb2xvcjogIzFkYTFmMjtcXG5cXHQtLXR3aXR0ZXItaG92ZXI6ICM0YWJhZmY7XFxuXFx0LS1pbnN0YWdyYW0tY29sb3I6ICM4MzNhYjQ7XFxuXFx0LS1pbnN0YWdyYW0taG92ZXI6ICNhMzQ5ZGY7XFxufVxcblxcbkBmb250LWZhY2Uge1xcblxcdGZvbnQtZmFtaWx5OiAnUXVpY2tzYW5kJztcXG5cXHRzcmM6IHVybCguL1F1aWNrc2FuZC1SZWd1bGFyLnR0Zik7XFxufVxcblxcbkBmb250LWZhY2Uge1xcblxcdGZvbnQtZmFtaWx5OiAnSXRhbGlhbm5vJztcXG5cXHRzcmM6IHVybCguL0l0YWxpYW5uby1SZWd1bGFyLnR0Zik7XFxufVxcblxcbiNjb250ZW50IHtcXG5cXHRtaW4taGVpZ2h0OiAxMDB2aDtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuYSB7XFxuXFx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xcblxcdGNvbG9yOiB2YXIoLS1mb250LWNvbG9yKTtcXG59XFxuXFxubmF2IHtcXG5cXHRoZWlnaHQ6IDUwcHg7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWNvbG9yKTtcXG5cXHRjb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWZvbnQtY29sb3IpO1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0d2lkdGg6IDEwMCU7XFxufVxcblxcbi5uYXYtaXRlbSB7XFxuXFx0cGFkZGluZzogMHB4IDIwcHg7XFxuXFx0aGVpZ2h0OiAxMDAlO1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRnYXA6IDUwcHg7XFxufVxcblxcbi5sb2dvLWxpbmsge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXHRjb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWZvbnQtY29sb3IpO1xcbn1cXG5cXG4ubG9nby1saW5rIGltZyB7XFxuXFx0aGVpZ2h0OiA1MHB4O1xcblxcdHdpZHRoOiA1MHB4O1xcblxcdHBhZGRpbmc6IDlweDtcXG5cXHRmaWx0ZXI6IGludmVydCgxMDAlKSBzZXBpYSgwJSkgc2F0dXJhdGUoNzQ4MSUpIGh1ZS1yb3RhdGUoMTQ2ZGVnKVxcblxcdFxcdGJyaWdodG5lc3MoMTA2JSkgY29udHJhc3QoMTA0JSk7XFxufVxcblxcbi5sb2dvLXRleHQge1xcblxcdGZvbnQtc2l6ZTogMS4ycmVtO1xcbn1cXG5cXG4udGFicyB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRoZWlnaHQ6IDEwMCU7XFxuXFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnRhYiB7XFxuXFx0Y3Vyc29yOiBwb2ludGVyO1xcblxcdGhlaWdodDogMTAwJTtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0Y29sb3I6IHJnYigyMTAsIDIxMCwgMjEwKTtcXG5cXHRwYWRkaW5nOiAwIDEwcHg7XFxufVxcblxcbi50YWI6aG92ZXIge1xcblxcdGNvbG9yOiB2YXIoLS1zZWNvbmRhcnktZm9udC1jb2xvcik7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWNvbG9yLWhvdmVyKTtcXG59XFxuXFxuLmljb25zIHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGhlaWdodDogMTAwJTtcXG5cXHR3aWR0aDogMTUwcHg7XFxufVxcblxcbi5pY29uIHtcXG5cXHRoZWlnaHQ6IDEwMCU7XFxuXFx0cGFkZGluZzogMTBweDtcXG5cXHRjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5pY29uLWZiIHtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1mYWNlYm9vay1jb2xvcik7XFxufVxcblxcbi5pY29uLWZiOmhvdmVyIHtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1mYWNlYm9vay1ob3Zlcik7XFxufVxcblxcbi5pY29uLXR3IHtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10d2l0dGVyLWNvbG9yKTtcXG59XFxuXFxuLmljb24tdHc6aG92ZXIge1xcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLXR3aXR0ZXItaG92ZXIpO1xcbn1cXG5cXG4uaWNvbi1pbnN0YSB7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW5zdGFncmFtLWNvbG9yKTtcXG59XFxuXFxuLmljb24taW5zdGE6aG92ZXIge1xcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWluc3RhZ3JhbS1ob3Zlcik7XFxufVxcblxcbi5oZWFkaW5nIHtcXG5cXHRwb3NpdGlvbjogcmVsYXRpdmU7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdGJhY2tncm91bmQtaW1hZ2U6IHVybCguL2JhY2tncm91bmQtcGhvdG8uanBnKTtcXG5cXHRoZWlnaHQ6IHZhcigtLWhlYWRpbmctaGVpZ2h0KTtcXG5cXHR3aWR0aDogMTAwJTtcXG5cXHRiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbn1cXG5cXG4uaGVhZGluZzo6YmVmb3JlIHtcXG5cXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxuXFx0Y29udGVudDogJyc7XFxuXFx0bGVmdDogMDtcXG5cXHR0b3A6IDA7XFxuXFx0aGVpZ2h0OiB2YXIoLS1oZWFkaW5nLWhlaWdodCk7XFxuXFx0d2lkdGg6IDEwMCU7XFxuXFx0YmFja2dyb3VuZDogcmdiKDAsIDAsIDApO1xcblxcdGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcXG5cXHRcXHQ5MGRlZyxcXG5cXHRcXHRyZ2JhKDAsIDAsIDAsIDAuOSkgMCUsXFxuXFx0XFx0cmdiYSg0NSwgNDUsIDQ1LCAwLjMpIDUwJSxcXG5cXHRcXHRyZ2JhKDAsIDAsIDAsIDAuOSkgMTAwJVxcblxcdCk7XFxufVxcblxcbi5oZWFkaW5nLXRleHQge1xcblxcdHBvc2l0aW9uOiByZWxhdGl2ZTtcXG5cXHRjb2xvcjogd2hpdGU7XFxuXFx0Zm9udC1zaXplOiA2cmVtO1xcblxcdGZvbnQtZmFtaWx5OiBJdGFsaWFubm87XFxufVxcblxcbi5tYWluIHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFx0cGFkZGluZzogMzBweDtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcXG5cXHRjb2xvcjogdmFyKC0tcHJpbWFyeS1mb250LWNvbG9yKTtcXG5cXHRmbGV4LWdyb3c6IDE7XFxufVxcblxcbi5tYWluLWhlYWRlciB7XFxuXFx0Zm9udC1zaXplOiAzLjVyZW07XFxuXFx0dGV4dC1hbGlnbjogY2VudGVyO1xcblxcdG1hcmdpbi1ib3R0b206IDIwcHg7XFxuXFx0Zm9udC1mYW1pbHk6IEl0YWxpYW5ubztcXG59XFxuXFxuLm1haW4tdGV4dCB7XFxuXFx0Zm9udC1zaXplOiAxLjVyZW07XFxuXFx0dGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG5mb290ZXIge1xcblxcdGhlaWdodDogNzBweDtcXG5cXHR3aWR0aDogMTAwJTtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmRhcnktY29sb3IpO1xcblxcdGNvbG9yOiB2YXIoLS1zZWNvbmRhcnktZm9udC1jb2xvcik7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdGZvbnQtc2l6ZTogMS4ycmVtO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG5cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG5cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpOyAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cblxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH0gLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuXG5cbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG5cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHsgY3JlYXRlRWxlbWVudCB9IGZyb20gJy4vdXRpbGl0eSc7XG5cbmNvbnN0IGhlYWRpbmdFbGVtZW50ID0gY3JlYXRlRWxlbWVudCgnc2VjdGlvbicsIFsnaGVhZGluZyddKTtcblxuY29uc3QgaGVhZGluZ1RleHRFbGVtZW50ID0gY3JlYXRlRWxlbWVudCgncCcsIFsnaGVhZGluZy10ZXh0J10sICdBYm91dCB1cycpO1xuXG5oZWFkaW5nRWxlbWVudC5hcHBlbmRDaGlsZChoZWFkaW5nVGV4dEVsZW1lbnQpO1xuXG5leHBvcnQgZGVmYXVsdCBoZWFkaW5nRWxlbWVudDtcbiIsImltcG9ydCBuYXZFbGVtZW50IGZyb20gJy4vbmF2JztcbmltcG9ydCBoZWFkaW5nRWxlbWVudCBmcm9tICcuL2hlYWRpbmcnO1xuXG5jb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbG9hZFBhZ2UoKSB7XG5cdGNvbnRlbnQuYXBwZW5kQ2hpbGQobmF2RWxlbWVudCk7XG5cdGNvbnRlbnQuYXBwZW5kQ2hpbGQoaGVhZGluZ0VsZW1lbnQpO1xufVxuIiwiaW1wb3J0IEZhY2Vib29rIGZyb20gJy4vZmFjZWJvb2suc3ZnJztcbmltcG9ydCBJbnN0YWdyYW0gZnJvbSAnLi9pbnN0YWdyYW0uc3ZnJztcbmltcG9ydCBUd2l0dGVyIGZyb20gJy4vdHdpdHRlci5zdmcnO1xuaW1wb3J0IEhhdCBmcm9tICcuL2hhdC5zdmcnO1xuaW1wb3J0IHsgY3JlYXRlRWxlbWVudCB9IGZyb20gJy4vdXRpbGl0eSc7XG5cbmNvbnN0IG5hdkVsZW1lbnQgPSBjcmVhdGVFbGVtZW50KCduYXYnKTtcblxuLy8gRWxlbWVudHNcbmNvbnN0IG5hdkl0ZW1FbGVtZW50cyA9IFtcblx0Y3JlYXRlRWxlbWVudCgnZGl2JywgWyduYXYtaXRlbSddKSxcblx0Y3JlYXRlRWxlbWVudCgnZGl2JywgWyduYXYtaXRlbSddKSxcbl07XG5cbmNvbnN0IGxvZ29FbGVtZW50ID0gY3JlYXRlRWxlbWVudCgnZGl2JywgWydsb2dvJ10pO1xuY29uc3QgbG9nb0xpbmtFbGVtZW50ID0gY3JlYXRlRWxlbWVudCgnYScsIFsnbG9nby1saW5rJ10pO1xubG9nb0xpbmtFbGVtZW50LnNldEF0dHJpYnV0ZSgnaHJlZicsICcjJyk7XG5jb25zdCBsb2dvVGV4dEVsZW1lbnQgPSBjcmVhdGVFbGVtZW50KCdwJywgWydsb2dvLXRleHQnXSwgJ09kaW4gUmVzdGF1cmFudCcpO1xuXG5jb25zdCB0YWJzRWxlbWVudCA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsIFsndGFicyddKTtcbmNvbnN0IHRhYkVsZW1lbnRzID0gW1xuXHRjcmVhdGVFbGVtZW50KCdkaXYnLCBbJ3RhYiddLCAnQWJvdXQgdXMnKSxcblx0Y3JlYXRlRWxlbWVudCgnZGl2JywgWyd0YWInXSwgJ01lbnUnKSxcblx0Y3JlYXRlRWxlbWVudCgnZGl2JywgWyd0YWInXSwgJ091ciByZXN0YXVyYW50cycpLFxuXTtcblxuY29uc3QgaWNvbnNFbGVtZW50ID0gY3JlYXRlRWxlbWVudCgnZGl2JywgWydpY29ucyddKTtcbmNvbnN0IGljb25FbGVtZW50cyA9IFtcblx0Y3JlYXRlRWxlbWVudCgnYScsIFsnbGluay1mYiddKSxcblx0Y3JlYXRlRWxlbWVudCgnYScsIFsnbGluay10dyddKSxcblx0Y3JlYXRlRWxlbWVudCgnYScsIFsnbGluay1pbnN0YSddKSxcbl07XG5cbi8vIEltYWdlc1xuY29uc3QgZmFjZWJvb2tJbWcgPSBuZXcgSW1hZ2UoKTtcbmZhY2Vib29rSW1nLnNyYyA9IEZhY2Vib29rO1xuZmFjZWJvb2tJbWcuYWx0ID0gJ0ZhY2Vib29rJztcbmZhY2Vib29rSW1nLmNsYXNzTGlzdC5hZGQoJ2ljb24tZmInKTtcbmZhY2Vib29rSW1nLmNsYXNzTGlzdC5hZGQoJ2ljb24nKTtcblxuY29uc3QgdHdpdHRlckltZyA9IG5ldyBJbWFnZSgpO1xudHdpdHRlckltZy5zcmMgPSBUd2l0dGVyO1xudHdpdHRlckltZy5hbHQgPSAnVHdpdHRlcic7XG50d2l0dGVySW1nLmNsYXNzTGlzdC5hZGQoJ2ljb24tdHcnKTtcbnR3aXR0ZXJJbWcuY2xhc3NMaXN0LmFkZCgnaWNvbicpO1xuaWNvbnNFbGVtZW50LmFwcGVuZENoaWxkKHR3aXR0ZXJJbWcpO1xuXG5jb25zdCBpbnN0YWdyYW1JbWcgPSBuZXcgSW1hZ2UoKTtcbmluc3RhZ3JhbUltZy5zcmMgPSBJbnN0YWdyYW07XG5pbnN0YWdyYW1JbWcuYWx0ID0gJ0luc3RhZ3JhbSc7XG5pbnN0YWdyYW1JbWcuY2xhc3NMaXN0LmFkZCgnaWNvbi1pbnN0YScpO1xuaW5zdGFncmFtSW1nLmNsYXNzTGlzdC5hZGQoJ2ljb24nKTtcbmljb25zRWxlbWVudC5hcHBlbmRDaGlsZChpbnN0YWdyYW1JbWcpO1xuXG5jb25zdCBoYXRJbWcgPSBuZXcgSW1hZ2UoKTtcbmhhdEltZy5zcmMgPSBIYXQ7XG5oYXRJbWcuYWx0ID0gJ09kaW4gUmVzdGF1cmFudCBMb2dvJztcbmxvZ29MaW5rRWxlbWVudC5pbnNlcnRBZGphY2VudEVsZW1lbnQoJ2FmdGVyYmVnaW4nLCBoYXRJbWcpO1xuXG4vLyBBcHBlbmRpbmdcbmxvZ29MaW5rRWxlbWVudC5hcHBlbmRDaGlsZChsb2dvVGV4dEVsZW1lbnQpO1xubG9nb0VsZW1lbnQuYXBwZW5kQ2hpbGQobG9nb0xpbmtFbGVtZW50KTtcblxudGFiRWxlbWVudHMuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuXHR0YWJzRWxlbWVudC5hcHBlbmRDaGlsZChlbGVtZW50KTtcbn0pO1xuXG5pY29uRWxlbWVudHMuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuXHRpY29uc0VsZW1lbnQuYXBwZW5kQ2hpbGQoZWxlbWVudCk7XG59KTtcbmljb25zRWxlbWVudC5xdWVyeVNlbGVjdG9yKCcubGluay1mYicpLmFwcGVuZENoaWxkKGZhY2Vib29rSW1nKTtcbmljb25zRWxlbWVudC5xdWVyeVNlbGVjdG9yKCcubGluay10dycpLmFwcGVuZENoaWxkKHR3aXR0ZXJJbWcpO1xuaWNvbnNFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5saW5rLWluc3RhJykuYXBwZW5kQ2hpbGQoaW5zdGFncmFtSW1nKTtcblxubmF2SXRlbUVsZW1lbnRzWzBdLmFwcGVuZENoaWxkKGxvZ29FbGVtZW50KTtcbm5hdkl0ZW1FbGVtZW50c1swXS5hcHBlbmRDaGlsZCh0YWJzRWxlbWVudCk7XG5cbm5hdkl0ZW1FbGVtZW50c1sxXS5hcHBlbmRDaGlsZChpY29uc0VsZW1lbnQpO1xuXG5uYXZJdGVtRWxlbWVudHMuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuXHRuYXZFbGVtZW50LmFwcGVuZENoaWxkKGVsZW1lbnQpO1xufSk7XG5cbmV4cG9ydCBkZWZhdWx0IG5hdkVsZW1lbnQ7XG4iLCJmdW5jdGlvbiBjcmVhdGVFbGVtZW50KGVsZW1lbnRUeXBlLCBlbGVtZW50Q2xhc3NlcywgZWxlbWVudENvbnRlbnQpIHtcblx0Y29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoZWxlbWVudFR5cGUpO1xuXHRpZiAoQXJyYXkuaXNBcnJheShlbGVtZW50Q2xhc3NlcykpIHtcblx0XHRlbGVtZW50Q2xhc3Nlcy5mb3JFYWNoKChjbGFzc05hbWUpID0+IHtcblx0XHRcdGVsZW1lbnQuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpO1xuXHRcdH0pO1xuXHR9XG5cdGlmIChlbGVtZW50Q29udGVudCkge1xuXHRcdGVsZW1lbnQuaW5uZXJUZXh0ID0gZWxlbWVudENvbnRlbnQ7XG5cdH1cblx0cmV0dXJuIGVsZW1lbnQ7XG59XG5cbmV4cG9ydCB7IGNyZWF0ZUVsZW1lbnQgfTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCBsb2FkUGFnZSBmcm9tICcuL2xvYWQtcGFnZSc7XG5cbmxvYWRQYWdlKCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=