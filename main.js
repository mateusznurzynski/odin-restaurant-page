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
___CSS_LOADER_EXPORT___.push([module.id, "html {\n\tbox-sizing: border-box;\n}\n*,\n*::after,\n*::before {\n\tbox-sizing: inherit;\n\tmargin: 0;\n\tpadding: 0;\n}\n:root {\n\tfont-family: Quicksand;\n\t--primary-color: #e5e6e4;\n\t--secondary-color: #0f110c;\n\t--secondary-color-hover: #202020;\n\t--accent-color: #ff4000;\n\t--primary-font-color: black;\n\t--secondary-font-color: white;\n\t--accent-font-color: white;\n\t--font-color: black;\n\t--placeholder-color: greenyellow;\n\t--heading-height: 200px;\n\t--facebook-color: #4267b2;\n\t--facebook-hover: #517bcf;\n\t--twitter-color: #1da1f2;\n\t--twitter-hover: #4abaff;\n\t--instagram-color: #833ab4;\n\t--instagram-hover: #a349df;\n}\n\n@font-face {\n\tfont-family: 'Quicksand';\n\tsrc: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n}\n\n@font-face {\n\tfont-family: 'Italianno';\n\tsrc: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n}\n\n#content {\n\tmin-height: 100vh;\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: center;\n}\n\na {\n\ttext-decoration: none;\n\tcolor: var(--font-color);\n}\n\nnav {\n\theight: 50px;\n\tbackground-color: var(--secondary-color);\n\tcolor: var(--secondary-font-color);\n\tdisplay: flex;\n\tjustify-content: space-between;\n\talign-items: center;\n\twidth: 100%;\n}\n\n.nav-item {\n\tpadding: 0px 20px;\n\theight: 100%;\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\tgap: 50px;\n}\n\n.logo-link {\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: center;\n\tcolor: var(--secondary-font-color);\n}\n\n.logo-link img {\n\theight: 50px;\n\twidth: 50px;\n\tpadding: 9px;\n\tfilter: invert(100%) sepia(0%) saturate(7481%) hue-rotate(146deg)\n\t\tbrightness(106%) contrast(104%);\n}\n\n.logo-text {\n\tfont-size: 1.2rem;\n}\n\n.tabs {\n\tdisplay: flex;\n\theight: 100%;\n\tjustify-content: center;\n\talign-items: center;\n}\n\n.tab {\n\tcursor: pointer;\n\theight: 100%;\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\tcolor: rgb(210, 210, 210);\n\tpadding: 0 10px;\n}\n\n.tab:hover,\n.nav-active {\n\tcolor: var(--secondary-font-color);\n\tbackground-color: var(--secondary-color-hover);\n}\n\n.icons {\n\tdisplay: flex;\n\theight: 100%;\n\twidth: 150px;\n}\n\n.icon {\n\theight: 100%;\n\tpadding: 10px;\n\tcursor: pointer;\n}\n\n.icon-fb {\n\tbackground-color: var(--facebook-color);\n}\n\n.icon-fb:hover {\n\tbackground-color: var(--facebook-hover);\n}\n\n.icon-tw {\n\tbackground-color: var(--twitter-color);\n}\n\n.icon-tw:hover {\n\tbackground-color: var(--twitter-hover);\n}\n\n.icon-insta {\n\tbackground-color: var(--instagram-color);\n}\n\n.icon-insta:hover {\n\tbackground-color: var(--instagram-hover);\n}\n\n.heading {\n\tposition: relative;\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\tbackground-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\n\theight: var(--heading-height);\n\twidth: 100%;\n\tbackground-size: cover;\n}\n\n.heading::before {\n\tposition: absolute;\n\tcontent: '';\n\tleft: 0;\n\ttop: 0;\n\theight: var(--heading-height);\n\twidth: 100%;\n\tbackground: rgb(0, 0, 0);\n\tbackground: linear-gradient(\n\t\t90deg,\n\t\trgba(0, 0, 0, 0.9) 0%,\n\t\trgba(45, 45, 45, 0.3) 50%,\n\t\trgba(0, 0, 0, 0.9) 100%\n\t);\n}\n\n.heading-text {\n\tposition: relative;\n\tcolor: white;\n\tfont-size: 6rem;\n\tfont-family: Italianno;\n}\n\n.main {\n\tdisplay: flex;\n\tflex-direction: column;\n\twidth: 100%;\n\tpadding: 30px;\n\tbackground-color: var(--primary-color);\n\tcolor: var(--primary-font-color);\n\tflex-grow: 1;\n}\n\n.main-header {\n\tfont-size: 3.5rem;\n\ttext-align: center;\n\tmargin-bottom: 20px;\n\tfont-family: Italianno;\n}\n\n.main-text {\n\tfont-size: 1.5rem;\n\ttext-align: center;\n}\n\n.main-content {\n\tdisplay: flex;\n}\n\n.dish {\n\tdisplay: flex;\n\tjustify-content: center;\n\twidth: 100%;\n}\n\n.dish-img {\n\tdisplay: block;\n\tpadding: 30px;\n\twidth: clamp(500px, 50%, 720px);\n\theight: auto;\n}\n\n.dish-text {\n\twidth: 50%;\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: start;\n\talign-items: center;\n\tpadding: 20px;\n\tgap: 20px;\n\tmax-height: 355px;\n}\n\n.dish-text > h2 {\n\tmargin: 20px 0px;\n}\n\nfooter {\n\theight: 70px;\n\twidth: 100%;\n\tbackground-color: var(--secondary-color);\n\tcolor: var(--secondary-font-color);\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\tfont-size: 1.2rem;\n}\n\n@media (max-width: 992px) {\n\t.dish {\n\t\tflex-direction: column;\n\t}\n\t.dish-img {\n\t\twidth: 100%;\n\t}\n\t.dish-text {\n\t\twidth: 100%;\n\t\theight: unset;\n\t}\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["html {\n\tbox-sizing: border-box;\n}\n*,\n*::after,\n*::before {\n\tbox-sizing: inherit;\n\tmargin: 0;\n\tpadding: 0;\n}\n:root {\n\tfont-family: Quicksand;\n\t--primary-color: #e5e6e4;\n\t--secondary-color: #0f110c;\n\t--secondary-color-hover: #202020;\n\t--accent-color: #ff4000;\n\t--primary-font-color: black;\n\t--secondary-font-color: white;\n\t--accent-font-color: white;\n\t--font-color: black;\n\t--placeholder-color: greenyellow;\n\t--heading-height: 200px;\n\t--facebook-color: #4267b2;\n\t--facebook-hover: #517bcf;\n\t--twitter-color: #1da1f2;\n\t--twitter-hover: #4abaff;\n\t--instagram-color: #833ab4;\n\t--instagram-hover: #a349df;\n}\n\n@font-face {\n\tfont-family: 'Quicksand';\n\tsrc: url(./Quicksand-Regular.ttf);\n}\n\n@font-face {\n\tfont-family: 'Italianno';\n\tsrc: url(./Italianno-Regular.ttf);\n}\n\n#content {\n\tmin-height: 100vh;\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: center;\n}\n\na {\n\ttext-decoration: none;\n\tcolor: var(--font-color);\n}\n\nnav {\n\theight: 50px;\n\tbackground-color: var(--secondary-color);\n\tcolor: var(--secondary-font-color);\n\tdisplay: flex;\n\tjustify-content: space-between;\n\talign-items: center;\n\twidth: 100%;\n}\n\n.nav-item {\n\tpadding: 0px 20px;\n\theight: 100%;\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\tgap: 50px;\n}\n\n.logo-link {\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: center;\n\tcolor: var(--secondary-font-color);\n}\n\n.logo-link img {\n\theight: 50px;\n\twidth: 50px;\n\tpadding: 9px;\n\tfilter: invert(100%) sepia(0%) saturate(7481%) hue-rotate(146deg)\n\t\tbrightness(106%) contrast(104%);\n}\n\n.logo-text {\n\tfont-size: 1.2rem;\n}\n\n.tabs {\n\tdisplay: flex;\n\theight: 100%;\n\tjustify-content: center;\n\talign-items: center;\n}\n\n.tab {\n\tcursor: pointer;\n\theight: 100%;\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\tcolor: rgb(210, 210, 210);\n\tpadding: 0 10px;\n}\n\n.tab:hover,\n.nav-active {\n\tcolor: var(--secondary-font-color);\n\tbackground-color: var(--secondary-color-hover);\n}\n\n.icons {\n\tdisplay: flex;\n\theight: 100%;\n\twidth: 150px;\n}\n\n.icon {\n\theight: 100%;\n\tpadding: 10px;\n\tcursor: pointer;\n}\n\n.icon-fb {\n\tbackground-color: var(--facebook-color);\n}\n\n.icon-fb:hover {\n\tbackground-color: var(--facebook-hover);\n}\n\n.icon-tw {\n\tbackground-color: var(--twitter-color);\n}\n\n.icon-tw:hover {\n\tbackground-color: var(--twitter-hover);\n}\n\n.icon-insta {\n\tbackground-color: var(--instagram-color);\n}\n\n.icon-insta:hover {\n\tbackground-color: var(--instagram-hover);\n}\n\n.heading {\n\tposition: relative;\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\tbackground-image: url(./background-photo.jpg);\n\theight: var(--heading-height);\n\twidth: 100%;\n\tbackground-size: cover;\n}\n\n.heading::before {\n\tposition: absolute;\n\tcontent: '';\n\tleft: 0;\n\ttop: 0;\n\theight: var(--heading-height);\n\twidth: 100%;\n\tbackground: rgb(0, 0, 0);\n\tbackground: linear-gradient(\n\t\t90deg,\n\t\trgba(0, 0, 0, 0.9) 0%,\n\t\trgba(45, 45, 45, 0.3) 50%,\n\t\trgba(0, 0, 0, 0.9) 100%\n\t);\n}\n\n.heading-text {\n\tposition: relative;\n\tcolor: white;\n\tfont-size: 6rem;\n\tfont-family: Italianno;\n}\n\n.main {\n\tdisplay: flex;\n\tflex-direction: column;\n\twidth: 100%;\n\tpadding: 30px;\n\tbackground-color: var(--primary-color);\n\tcolor: var(--primary-font-color);\n\tflex-grow: 1;\n}\n\n.main-header {\n\tfont-size: 3.5rem;\n\ttext-align: center;\n\tmargin-bottom: 20px;\n\tfont-family: Italianno;\n}\n\n.main-text {\n\tfont-size: 1.5rem;\n\ttext-align: center;\n}\n\n.main-content {\n\tdisplay: flex;\n}\n\n.dish {\n\tdisplay: flex;\n\tjustify-content: center;\n\twidth: 100%;\n}\n\n.dish-img {\n\tdisplay: block;\n\tpadding: 30px;\n\twidth: clamp(500px, 50%, 720px);\n\theight: auto;\n}\n\n.dish-text {\n\twidth: 50%;\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: start;\n\talign-items: center;\n\tpadding: 20px;\n\tgap: 20px;\n\tmax-height: 355px;\n}\n\n.dish-text > h2 {\n\tmargin: 20px 0px;\n}\n\nfooter {\n\theight: 70px;\n\twidth: 100%;\n\tbackground-color: var(--secondary-color);\n\tcolor: var(--secondary-font-color);\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\tfont-size: 1.2rem;\n}\n\n@media (max-width: 992px) {\n\t.dish {\n\t\tflex-direction: column;\n\t}\n\t.dish-img {\n\t\twidth: 100%;\n\t}\n\t.dish-text {\n\t\twidth: 100%;\n\t\theight: unset;\n\t}\n}\n"],"sourceRoot":""}]);
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
			description:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam earum officiis quia doloribus non aliquam unde, nesciunt fugit explicabo perspiciatis perferendis odit magnam repellendus vel.',
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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YSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxLQUFLLE9BQU8sT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsT0FBTyxNQUFNLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksVUFBVSxLQUFLLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssS0FB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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRXlCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNiekI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOzs7OztXQ3pCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NmQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7Ozs7O1dDckJBOzs7Ozs7Ozs7Ozs7OztBQ0FxQjtBQUNjO0FBQ0s7O0FBRXhDLHNEQUFROztBQUVSO0FBQ0E7QUFDQTtBQUNBLENBQUMseURBQVU7QUFDWCxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQtcGFnZS8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC1wYWdlLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50LXBhZ2UvLi9zcmMvZm9vdGVyLmpzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC1wYWdlLy4vc3JjL2hlYWRpbmcuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbG9hZC1wYWdlLmpzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC1wYWdlLy4vc3JjL21haW4tY29udGVudC5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQtcGFnZS8uL3NyYy9uYXYuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50LXBhZ2UvLi9zcmMvdGFicy9tZW51LmpzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC1wYWdlLy4vc3JjL3V0aWxpdHkuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQtcGFnZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9RdWlja3NhbmQtUmVndWxhci50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuL0l0YWxpYW5uby1SZWd1bGFyLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fID0gbmV3IFVSTChcIi4vYmFja2dyb3VuZC1waG90by5qcGdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcImh0bWwge1xcblxcdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcbiosXFxuKjo6YWZ0ZXIsXFxuKjo6YmVmb3JlIHtcXG5cXHRib3gtc2l6aW5nOiBpbmhlcml0O1xcblxcdG1hcmdpbjogMDtcXG5cXHRwYWRkaW5nOiAwO1xcbn1cXG46cm9vdCB7XFxuXFx0Zm9udC1mYW1pbHk6IFF1aWNrc2FuZDtcXG5cXHQtLXByaW1hcnktY29sb3I6ICNlNWU2ZTQ7XFxuXFx0LS1zZWNvbmRhcnktY29sb3I6ICMwZjExMGM7XFxuXFx0LS1zZWNvbmRhcnktY29sb3ItaG92ZXI6ICMyMDIwMjA7XFxuXFx0LS1hY2NlbnQtY29sb3I6ICNmZjQwMDA7XFxuXFx0LS1wcmltYXJ5LWZvbnQtY29sb3I6IGJsYWNrO1xcblxcdC0tc2Vjb25kYXJ5LWZvbnQtY29sb3I6IHdoaXRlO1xcblxcdC0tYWNjZW50LWZvbnQtY29sb3I6IHdoaXRlO1xcblxcdC0tZm9udC1jb2xvcjogYmxhY2s7XFxuXFx0LS1wbGFjZWhvbGRlci1jb2xvcjogZ3JlZW55ZWxsb3c7XFxuXFx0LS1oZWFkaW5nLWhlaWdodDogMjAwcHg7XFxuXFx0LS1mYWNlYm9vay1jb2xvcjogIzQyNjdiMjtcXG5cXHQtLWZhY2Vib29rLWhvdmVyOiAjNTE3YmNmO1xcblxcdC0tdHdpdHRlci1jb2xvcjogIzFkYTFmMjtcXG5cXHQtLXR3aXR0ZXItaG92ZXI6ICM0YWJhZmY7XFxuXFx0LS1pbnN0YWdyYW0tY29sb3I6ICM4MzNhYjQ7XFxuXFx0LS1pbnN0YWdyYW0taG92ZXI6ICNhMzQ5ZGY7XFxufVxcblxcbkBmb250LWZhY2Uge1xcblxcdGZvbnQtZmFtaWx5OiAnUXVpY2tzYW5kJztcXG5cXHRzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxufVxcblxcbkBmb250LWZhY2Uge1xcblxcdGZvbnQtZmFtaWx5OiAnSXRhbGlhbm5vJztcXG5cXHRzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gKyBcIik7XFxufVxcblxcbiNjb250ZW50IHtcXG5cXHRtaW4taGVpZ2h0OiAxMDB2aDtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuYSB7XFxuXFx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xcblxcdGNvbG9yOiB2YXIoLS1mb250LWNvbG9yKTtcXG59XFxuXFxubmF2IHtcXG5cXHRoZWlnaHQ6IDUwcHg7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWNvbG9yKTtcXG5cXHRjb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWZvbnQtY29sb3IpO1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0d2lkdGg6IDEwMCU7XFxufVxcblxcbi5uYXYtaXRlbSB7XFxuXFx0cGFkZGluZzogMHB4IDIwcHg7XFxuXFx0aGVpZ2h0OiAxMDAlO1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRnYXA6IDUwcHg7XFxufVxcblxcbi5sb2dvLWxpbmsge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXHRjb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWZvbnQtY29sb3IpO1xcbn1cXG5cXG4ubG9nby1saW5rIGltZyB7XFxuXFx0aGVpZ2h0OiA1MHB4O1xcblxcdHdpZHRoOiA1MHB4O1xcblxcdHBhZGRpbmc6IDlweDtcXG5cXHRmaWx0ZXI6IGludmVydCgxMDAlKSBzZXBpYSgwJSkgc2F0dXJhdGUoNzQ4MSUpIGh1ZS1yb3RhdGUoMTQ2ZGVnKVxcblxcdFxcdGJyaWdodG5lc3MoMTA2JSkgY29udHJhc3QoMTA0JSk7XFxufVxcblxcbi5sb2dvLXRleHQge1xcblxcdGZvbnQtc2l6ZTogMS4ycmVtO1xcbn1cXG5cXG4udGFicyB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRoZWlnaHQ6IDEwMCU7XFxuXFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnRhYiB7XFxuXFx0Y3Vyc29yOiBwb2ludGVyO1xcblxcdGhlaWdodDogMTAwJTtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0Y29sb3I6IHJnYigyMTAsIDIxMCwgMjEwKTtcXG5cXHRwYWRkaW5nOiAwIDEwcHg7XFxufVxcblxcbi50YWI6aG92ZXIsXFxuLm5hdi1hY3RpdmUge1xcblxcdGNvbG9yOiB2YXIoLS1zZWNvbmRhcnktZm9udC1jb2xvcik7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWNvbG9yLWhvdmVyKTtcXG59XFxuXFxuLmljb25zIHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGhlaWdodDogMTAwJTtcXG5cXHR3aWR0aDogMTUwcHg7XFxufVxcblxcbi5pY29uIHtcXG5cXHRoZWlnaHQ6IDEwMCU7XFxuXFx0cGFkZGluZzogMTBweDtcXG5cXHRjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5pY29uLWZiIHtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1mYWNlYm9vay1jb2xvcik7XFxufVxcblxcbi5pY29uLWZiOmhvdmVyIHtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1mYWNlYm9vay1ob3Zlcik7XFxufVxcblxcbi5pY29uLXR3IHtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10d2l0dGVyLWNvbG9yKTtcXG59XFxuXFxuLmljb24tdHc6aG92ZXIge1xcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLXR3aXR0ZXItaG92ZXIpO1xcbn1cXG5cXG4uaWNvbi1pbnN0YSB7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW5zdGFncmFtLWNvbG9yKTtcXG59XFxuXFxuLmljb24taW5zdGE6aG92ZXIge1xcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWluc3RhZ3JhbS1ob3Zlcik7XFxufVxcblxcbi5oZWFkaW5nIHtcXG5cXHRwb3NpdGlvbjogcmVsYXRpdmU7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gKyBcIik7XFxuXFx0aGVpZ2h0OiB2YXIoLS1oZWFkaW5nLWhlaWdodCk7XFxuXFx0d2lkdGg6IDEwMCU7XFxuXFx0YmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG59XFxuXFxuLmhlYWRpbmc6OmJlZm9yZSB7XFxuXFx0cG9zaXRpb246IGFic29sdXRlO1xcblxcdGNvbnRlbnQ6ICcnO1xcblxcdGxlZnQ6IDA7XFxuXFx0dG9wOiAwO1xcblxcdGhlaWdodDogdmFyKC0taGVhZGluZy1oZWlnaHQpO1xcblxcdHdpZHRoOiAxMDAlO1xcblxcdGJhY2tncm91bmQ6IHJnYigwLCAwLCAwKTtcXG5cXHRiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoXFxuXFx0XFx0OTBkZWcsXFxuXFx0XFx0cmdiYSgwLCAwLCAwLCAwLjkpIDAlLFxcblxcdFxcdHJnYmEoNDUsIDQ1LCA0NSwgMC4zKSA1MCUsXFxuXFx0XFx0cmdiYSgwLCAwLCAwLCAwLjkpIDEwMCVcXG5cXHQpO1xcbn1cXG5cXG4uaGVhZGluZy10ZXh0IHtcXG5cXHRwb3NpdGlvbjogcmVsYXRpdmU7XFxuXFx0Y29sb3I6IHdoaXRlO1xcblxcdGZvbnQtc2l6ZTogNnJlbTtcXG5cXHRmb250LWZhbWlseTogSXRhbGlhbm5vO1xcbn1cXG5cXG4ubWFpbiB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcdHdpZHRoOiAxMDAlO1xcblxcdHBhZGRpbmc6IDMwcHg7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XFxuXFx0Y29sb3I6IHZhcigtLXByaW1hcnktZm9udC1jb2xvcik7XFxuXFx0ZmxleC1ncm93OiAxO1xcbn1cXG5cXG4ubWFpbi1oZWFkZXIge1xcblxcdGZvbnQtc2l6ZTogMy41cmVtO1xcblxcdHRleHQtYWxpZ246IGNlbnRlcjtcXG5cXHRtYXJnaW4tYm90dG9tOiAyMHB4O1xcblxcdGZvbnQtZmFtaWx5OiBJdGFsaWFubm87XFxufVxcblxcbi5tYWluLXRleHQge1xcblxcdGZvbnQtc2l6ZTogMS41cmVtO1xcblxcdHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLm1haW4tY29udGVudCB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG59XFxuXFxuLmRpc2gge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXFx0d2lkdGg6IDEwMCU7XFxufVxcblxcbi5kaXNoLWltZyB7XFxuXFx0ZGlzcGxheTogYmxvY2s7XFxuXFx0cGFkZGluZzogMzBweDtcXG5cXHR3aWR0aDogY2xhbXAoNTAwcHgsIDUwJSwgNzIwcHgpO1xcblxcdGhlaWdodDogYXV0bztcXG59XFxuXFxuLmRpc2gtdGV4dCB7XFxuXFx0d2lkdGg6IDUwJTtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFx0anVzdGlmeS1jb250ZW50OiBzdGFydDtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdHBhZGRpbmc6IDIwcHg7XFxuXFx0Z2FwOiAyMHB4O1xcblxcdG1heC1oZWlnaHQ6IDM1NXB4O1xcbn1cXG5cXG4uZGlzaC10ZXh0ID4gaDIge1xcblxcdG1hcmdpbjogMjBweCAwcHg7XFxufVxcblxcbmZvb3RlciB7XFxuXFx0aGVpZ2h0OiA3MHB4O1xcblxcdHdpZHRoOiAxMDAlO1xcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZGFyeS1jb2xvcik7XFxuXFx0Y29sb3I6IHZhcigtLXNlY29uZGFyeS1mb250LWNvbG9yKTtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0Zm9udC1zaXplOiAxLjJyZW07XFxufVxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiA5OTJweCkge1xcblxcdC5kaXNoIHtcXG5cXHRcXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcdH1cXG5cXHQuZGlzaC1pbWcge1xcblxcdFxcdHdpZHRoOiAxMDAlO1xcblxcdH1cXG5cXHQuZGlzaC10ZXh0IHtcXG5cXHRcXHR3aWR0aDogMTAwJTtcXG5cXHRcXHRoZWlnaHQ6IHVuc2V0O1xcblxcdH1cXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtDQUNDLHNCQUFzQjtBQUN2QjtBQUNBOzs7Q0FHQyxtQkFBbUI7Q0FDbkIsU0FBUztDQUNULFVBQVU7QUFDWDtBQUNBO0NBQ0Msc0JBQXNCO0NBQ3RCLHdCQUF3QjtDQUN4QiwwQkFBMEI7Q0FDMUIsZ0NBQWdDO0NB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Q0FDWCx3Q0FBd0M7Q0FDeEMsa0NBQWtDO0NBQ2xDLGFBQWE7Q0FDYix1QkFBdUI7Q0FDdkIsbUJBQW1CO0NBQ25CLGlCQUFpQjtBQUNsQjs7QUFFQTtDQUNDO0VBQ0Msc0JBQXNCO0NBQ3ZCO0NBQ0E7RUFDQyxXQUFXO0NBQ1o7Q0FDQTtFQUNDLFdBQVc7RUFDWCxhQUFhO0NBQ2Q7QUFDRFwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJodG1sIHtcXG5cXHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG4qLFxcbio6OmFmdGVyLFxcbio6OmJlZm9yZSB7XFxuXFx0Ym94LXNpemluZzogaW5oZXJpdDtcXG5cXHRtYXJnaW46IDA7XFxuXFx0cGFkZGluZzogMDtcXG59XFxuOnJvb3Qge1xcblxcdGZvbnQtZmFtaWx5OiBRdWlja3NhbmQ7XFxuXFx0LS1wcmltYXJ5LWNvbG9yOiAjZTVlNmU0O1xcblxcdC0tc2Vjb25kYXJ5LWNvbG9yOiAjMGYxMTBjO1xcblxcdC0tc2Vjb25kYXJ5LWNvbG9yLWhvdmVyOiAjMjAyMDIwO1xcblxcdC0tYWNjZW50LWNvbG9yOiAjZmY0MDAwO1xcblxcdC0tcHJpbWFyeS1mb250LWNvbG9yOiBibGFjaztcXG5cXHQtLXNlY29uZGFyeS1mb250LWNvbG9yOiB3aGl0ZTtcXG5cXHQtLWFjY2VudC1mb250LWNvbG9yOiB3aGl0ZTtcXG5cXHQtLWZvbnQtY29sb3I6IGJsYWNrO1xcblxcdC0tcGxhY2Vob2xkZXItY29sb3I6IGdyZWVueWVsbG93O1xcblxcdC0taGVhZGluZy1oZWlnaHQ6IDIwMHB4O1xcblxcdC0tZmFjZWJvb2stY29sb3I6ICM0MjY3YjI7XFxuXFx0LS1mYWNlYm9vay1ob3ZlcjogIzUxN2JjZjtcXG5cXHQtLXR3aXR0ZXItY29sb3I6ICMxZGExZjI7XFxuXFx0LS10d2l0dGVyLWhvdmVyOiAjNGFiYWZmO1xcblxcdC0taW5zdGFncmFtLWNvbG9yOiAjODMzYWI0O1xcblxcdC0taW5zdGFncmFtLWhvdmVyOiAjYTM0OWRmO1xcbn1cXG5cXG5AZm9udC1mYWNlIHtcXG5cXHRmb250LWZhbWlseTogJ1F1aWNrc2FuZCc7XFxuXFx0c3JjOiB1cmwoLi9RdWlja3NhbmQtUmVndWxhci50dGYpO1xcbn1cXG5cXG5AZm9udC1mYWNlIHtcXG5cXHRmb250LWZhbWlseTogJ0l0YWxpYW5ubyc7XFxuXFx0c3JjOiB1cmwoLi9JdGFsaWFubm8tUmVndWxhci50dGYpO1xcbn1cXG5cXG4jY29udGVudCB7XFxuXFx0bWluLWhlaWdodDogMTAwdmg7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbmEge1xcblxcdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG5cXHRjb2xvcjogdmFyKC0tZm9udC1jb2xvcik7XFxufVxcblxcbm5hdiB7XFxuXFx0aGVpZ2h0OiA1MHB4O1xcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZGFyeS1jb2xvcik7XFxuXFx0Y29sb3I6IHZhcigtLXNlY29uZGFyeS1mb250LWNvbG9yKTtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4ubmF2LWl0ZW0ge1xcblxcdHBhZGRpbmc6IDBweCAyMHB4O1xcblxcdGhlaWdodDogMTAwJTtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0Z2FwOiA1MHB4O1xcbn1cXG5cXG4ubG9nby1saW5rIHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXFx0Y29sb3I6IHZhcigtLXNlY29uZGFyeS1mb250LWNvbG9yKTtcXG59XFxuXFxuLmxvZ28tbGluayBpbWcge1xcblxcdGhlaWdodDogNTBweDtcXG5cXHR3aWR0aDogNTBweDtcXG5cXHRwYWRkaW5nOiA5cHg7XFxuXFx0ZmlsdGVyOiBpbnZlcnQoMTAwJSkgc2VwaWEoMCUpIHNhdHVyYXRlKDc0ODElKSBodWUtcm90YXRlKDE0NmRlZylcXG5cXHRcXHRicmlnaHRuZXNzKDEwNiUpIGNvbnRyYXN0KDEwNCUpO1xcbn1cXG5cXG4ubG9nby10ZXh0IHtcXG5cXHRmb250LXNpemU6IDEuMnJlbTtcXG59XFxuXFxuLnRhYnMge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0aGVpZ2h0OiAxMDAlO1xcblxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi50YWIge1xcblxcdGN1cnNvcjogcG9pbnRlcjtcXG5cXHRoZWlnaHQ6IDEwMCU7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdGNvbG9yOiByZ2IoMjEwLCAyMTAsIDIxMCk7XFxuXFx0cGFkZGluZzogMCAxMHB4O1xcbn1cXG5cXG4udGFiOmhvdmVyLFxcbi5uYXYtYWN0aXZlIHtcXG5cXHRjb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWZvbnQtY29sb3IpO1xcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZGFyeS1jb2xvci1ob3Zlcik7XFxufVxcblxcbi5pY29ucyB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRoZWlnaHQ6IDEwMCU7XFxuXFx0d2lkdGg6IDE1MHB4O1xcbn1cXG5cXG4uaWNvbiB7XFxuXFx0aGVpZ2h0OiAxMDAlO1xcblxcdHBhZGRpbmc6IDEwcHg7XFxuXFx0Y3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uaWNvbi1mYiB7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZmFjZWJvb2stY29sb3IpO1xcbn1cXG5cXG4uaWNvbi1mYjpob3ZlciB7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZmFjZWJvb2staG92ZXIpO1xcbn1cXG5cXG4uaWNvbi10dyB7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdHdpdHRlci1jb2xvcik7XFxufVxcblxcbi5pY29uLXR3OmhvdmVyIHtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10d2l0dGVyLWhvdmVyKTtcXG59XFxuXFxuLmljb24taW5zdGEge1xcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWluc3RhZ3JhbS1jb2xvcik7XFxufVxcblxcbi5pY29uLWluc3RhOmhvdmVyIHtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pbnN0YWdyYW0taG92ZXIpO1xcbn1cXG5cXG4uaGVhZGluZyB7XFxuXFx0cG9zaXRpb246IHJlbGF0aXZlO1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi9iYWNrZ3JvdW5kLXBob3RvLmpwZyk7XFxuXFx0aGVpZ2h0OiB2YXIoLS1oZWFkaW5nLWhlaWdodCk7XFxuXFx0d2lkdGg6IDEwMCU7XFxuXFx0YmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG59XFxuXFxuLmhlYWRpbmc6OmJlZm9yZSB7XFxuXFx0cG9zaXRpb246IGFic29sdXRlO1xcblxcdGNvbnRlbnQ6ICcnO1xcblxcdGxlZnQ6IDA7XFxuXFx0dG9wOiAwO1xcblxcdGhlaWdodDogdmFyKC0taGVhZGluZy1oZWlnaHQpO1xcblxcdHdpZHRoOiAxMDAlO1xcblxcdGJhY2tncm91bmQ6IHJnYigwLCAwLCAwKTtcXG5cXHRiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoXFxuXFx0XFx0OTBkZWcsXFxuXFx0XFx0cmdiYSgwLCAwLCAwLCAwLjkpIDAlLFxcblxcdFxcdHJnYmEoNDUsIDQ1LCA0NSwgMC4zKSA1MCUsXFxuXFx0XFx0cmdiYSgwLCAwLCAwLCAwLjkpIDEwMCVcXG5cXHQpO1xcbn1cXG5cXG4uaGVhZGluZy10ZXh0IHtcXG5cXHRwb3NpdGlvbjogcmVsYXRpdmU7XFxuXFx0Y29sb3I6IHdoaXRlO1xcblxcdGZvbnQtc2l6ZTogNnJlbTtcXG5cXHRmb250LWZhbWlseTogSXRhbGlhbm5vO1xcbn1cXG5cXG4ubWFpbiB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcdHdpZHRoOiAxMDAlO1xcblxcdHBhZGRpbmc6IDMwcHg7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XFxuXFx0Y29sb3I6IHZhcigtLXByaW1hcnktZm9udC1jb2xvcik7XFxuXFx0ZmxleC1ncm93OiAxO1xcbn1cXG5cXG4ubWFpbi1oZWFkZXIge1xcblxcdGZvbnQtc2l6ZTogMy41cmVtO1xcblxcdHRleHQtYWxpZ246IGNlbnRlcjtcXG5cXHRtYXJnaW4tYm90dG9tOiAyMHB4O1xcblxcdGZvbnQtZmFtaWx5OiBJdGFsaWFubm87XFxufVxcblxcbi5tYWluLXRleHQge1xcblxcdGZvbnQtc2l6ZTogMS41cmVtO1xcblxcdHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLm1haW4tY29udGVudCB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG59XFxuXFxuLmRpc2gge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXFx0d2lkdGg6IDEwMCU7XFxufVxcblxcbi5kaXNoLWltZyB7XFxuXFx0ZGlzcGxheTogYmxvY2s7XFxuXFx0cGFkZGluZzogMzBweDtcXG5cXHR3aWR0aDogY2xhbXAoNTAwcHgsIDUwJSwgNzIwcHgpO1xcblxcdGhlaWdodDogYXV0bztcXG59XFxuXFxuLmRpc2gtdGV4dCB7XFxuXFx0d2lkdGg6IDUwJTtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFx0anVzdGlmeS1jb250ZW50OiBzdGFydDtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdHBhZGRpbmc6IDIwcHg7XFxuXFx0Z2FwOiAyMHB4O1xcblxcdG1heC1oZWlnaHQ6IDM1NXB4O1xcbn1cXG5cXG4uZGlzaC10ZXh0ID4gaDIge1xcblxcdG1hcmdpbjogMjBweCAwcHg7XFxufVxcblxcbmZvb3RlciB7XFxuXFx0aGVpZ2h0OiA3MHB4O1xcblxcdHdpZHRoOiAxMDAlO1xcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZGFyeS1jb2xvcik7XFxuXFx0Y29sb3I6IHZhcigtLXNlY29uZGFyeS1mb250LWNvbG9yKTtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0Zm9udC1zaXplOiAxLjJyZW07XFxufVxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiA5OTJweCkge1xcblxcdC5kaXNoIHtcXG5cXHRcXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcdH1cXG5cXHQuZGlzaC1pbWcge1xcblxcdFxcdHdpZHRoOiAxMDAlO1xcblxcdH1cXG5cXHQuZGlzaC10ZXh0IHtcXG5cXHRcXHR3aWR0aDogMTAwJTtcXG5cXHRcXHRoZWlnaHQ6IHVuc2V0O1xcblxcdH1cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuXG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuXG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTsgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG5cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuXG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9IC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcblxuXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuXG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7IGNyZWF0ZUVsZW1lbnQgfSBmcm9tICcuL3V0aWxpdHknO1xuXG5jb25zdCBmb290ZXJFbGVtZW50ID0gY3JlYXRlRWxlbWVudCgnZm9vdGVyJywgbnVsbCwgJ01hdGV1c3ogTnVyennFhHNraSBcXHUwMEE5Jyk7XG5cbmV4cG9ydCBkZWZhdWx0IGZvb3RlckVsZW1lbnQ7XG4iLCJpbXBvcnQgeyBjcmVhdGVFbGVtZW50IH0gZnJvbSAnLi91dGlsaXR5JztcblxuY29uc3QgaGVhZGluZ0VsZW1lbnQgPSBjcmVhdGVFbGVtZW50KCdzZWN0aW9uJywgWydoZWFkaW5nJ10pO1xuXG5jb25zdCBoZWFkaW5nVGV4dEVsZW1lbnQgPSBjcmVhdGVFbGVtZW50KCdwJywgWydoZWFkaW5nLXRleHQnXSwgJ0Fib3V0IHVzJyk7XG5cbmhlYWRpbmdFbGVtZW50LmFwcGVuZENoaWxkKGhlYWRpbmdUZXh0RWxlbWVudCk7XG5cbmV4cG9ydCBkZWZhdWx0IGhlYWRpbmdFbGVtZW50O1xuIiwiaW1wb3J0IG5hdkVsZW1lbnQgZnJvbSAnLi9uYXYnO1xuaW1wb3J0IGhlYWRpbmdFbGVtZW50IGZyb20gJy4vaGVhZGluZyc7XG5pbXBvcnQgbWFpbkVsZW1lbnQgZnJvbSAnLi9tYWluLWNvbnRlbnQnO1xuaW1wb3J0IGZvb3RlckVsZW1lbnQgZnJvbSAnLi9mb290ZXInO1xuXG5jb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbG9hZFBhZ2UoKSB7XG5cdGNvbnRlbnQuYXBwZW5kQ2hpbGQobmF2RWxlbWVudCk7XG5cdGNvbnRlbnQuYXBwZW5kQ2hpbGQoaGVhZGluZ0VsZW1lbnQpO1xuXHRjb250ZW50LmFwcGVuZENoaWxkKG1haW5FbGVtZW50KTtcblx0Y29udGVudC5hcHBlbmRDaGlsZChmb290ZXJFbGVtZW50KTtcbn1cbiIsImltcG9ydCB7IGNyZWF0ZUVsZW1lbnQgfSBmcm9tICcuL3V0aWxpdHknO1xuXG5jb25zdCBtYWluRWxlbWVudCA9IGNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nLCBbJ21haW4nXSk7XG5cbmNvbnN0IG1haW5IZWFkZXJFbGVtZW50ID0gY3JlYXRlRWxlbWVudChcblx0J3AnLFxuXHRbJ21haW4taGVhZGVyJ10sXG5cdCdMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ci4nXG4pO1xuXG5jb25zdCBtYWluVGV4dEVsZW1lbnQgPSBjcmVhdGVFbGVtZW50KFxuXHQncCcsXG5cdFsnbWFpbi10ZXh0J10sXG5cdCdMb3JlbSwgaXBzdW0gZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gU2VxdWkgbWludXMgaXBzYW0gYWQgbmVzY2l1bnQgcHJhZXNlbnRpdW0gZXZlbmlldCBmYWNpbGlzIHBlcnNwaWNpYXRpcywgZWxpZ2VuZGkgcmVwcmVoZW5kZXJpdCBxdWlkZW0gYXV0LCBudWxsYSBtb2xlc3RpYXMgbGFib3Jpb3NhbSBhcGVyaWFtIVxcblxcbkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIEV4ZXJjaXRhdGlvbmVtIHN1c2NpcGl0LCB0ZW5ldHVyIG9mZmljaWEgcXVhcyBub2JpcyBhcmNoaXRlY3RvIGFjY3VzYW50aXVtIG51bXF1YW0gc3VudCBvZGl0IGRlYml0aXMgbm9uLiBEb2xvcmUgcXVpIGNvbnNlcXV1bnR1ciBpbXBlZGl0IGRlc2VydW50IGFzcGVybmF0dXIgcG9ycm8gdm9sdXB0YXRlbSBlbGlnZW5kaSBxdW9zLCB2b2x1cHRhdGUgZXhjZXB0dXJpIG5hbSBsaWJlcm8sIHZvbHVwdGF0ZXMgb3B0aW8gbmVzY2l1bnQsIGNvbnNlY3RldHVyIGlwc2E/J1xuKTtcblxubWFpbkVsZW1lbnQuYXBwZW5kQ2hpbGQobWFpbkhlYWRlckVsZW1lbnQpO1xubWFpbkVsZW1lbnQuYXBwZW5kQ2hpbGQobWFpblRleHRFbGVtZW50KTtcblxuZXhwb3J0IGRlZmF1bHQgbWFpbkVsZW1lbnQ7XG4iLCJpbXBvcnQgRmFjZWJvb2sgZnJvbSAnLi9mYWNlYm9vay5zdmcnO1xuaW1wb3J0IEluc3RhZ3JhbSBmcm9tICcuL2luc3RhZ3JhbS5zdmcnO1xuaW1wb3J0IFR3aXR0ZXIgZnJvbSAnLi90d2l0dGVyLnN2Zyc7XG5pbXBvcnQgSGF0IGZyb20gJy4vaGF0LnN2Zyc7XG5pbXBvcnQgeyBjcmVhdGVFbGVtZW50IH0gZnJvbSAnLi91dGlsaXR5JztcblxuY29uc3QgbmF2RWxlbWVudCA9IGNyZWF0ZUVsZW1lbnQoJ25hdicpO1xuXG4vLyBFbGVtZW50c1xuY29uc3QgbmF2SXRlbUVsZW1lbnRzID0gW1xuXHRjcmVhdGVFbGVtZW50KCdkaXYnLCBbJ25hdi1pdGVtJ10pLFxuXHRjcmVhdGVFbGVtZW50KCdkaXYnLCBbJ25hdi1pdGVtJ10pLFxuXTtcblxuY29uc3QgbG9nb0VsZW1lbnQgPSBjcmVhdGVFbGVtZW50KCdkaXYnLCBbJ2xvZ28nXSk7XG5jb25zdCBsb2dvTGlua0VsZW1lbnQgPSBjcmVhdGVFbGVtZW50KCdhJywgWydsb2dvLWxpbmsnXSk7XG5sb2dvTGlua0VsZW1lbnQuc2V0QXR0cmlidXRlKCdocmVmJywgJyMnKTtcbmNvbnN0IGxvZ29UZXh0RWxlbWVudCA9IGNyZWF0ZUVsZW1lbnQoJ3AnLCBbJ2xvZ28tdGV4dCddLCAnT2RpbiBSZXN0YXVyYW50Jyk7XG5cbmNvbnN0IHRhYnNFbGVtZW50ID0gY3JlYXRlRWxlbWVudCgnZGl2JywgWyd0YWJzJ10pO1xuY29uc3QgdGFiRWxlbWVudHMgPSBbXG5cdGNyZWF0ZUVsZW1lbnQoJ2RpdicsIFsndGFiJywgJ2Fib3V0LXVzJywgJ25hdi1hY3RpdmUnXSwgJ0Fib3V0IHVzJyksXG5cdGNyZWF0ZUVsZW1lbnQoJ2RpdicsIFsndGFiJywgJ21lbnUnXSwgJ01lbnUnKSxcblx0Y3JlYXRlRWxlbWVudCgnZGl2JywgWyd0YWInLCAncmVzdGF1cmFudHMnXSwgJ091ciByZXN0YXVyYW50cycpLFxuXTtcblxuY29uc3QgaWNvbnNFbGVtZW50ID0gY3JlYXRlRWxlbWVudCgnZGl2JywgWydpY29ucyddKTtcbmNvbnN0IGljb25FbGVtZW50cyA9IFtcblx0Y3JlYXRlRWxlbWVudCgnYScsIFsnbGluay1mYiddKSxcblx0Y3JlYXRlRWxlbWVudCgnYScsIFsnbGluay10dyddKSxcblx0Y3JlYXRlRWxlbWVudCgnYScsIFsnbGluay1pbnN0YSddKSxcbl07XG5cbi8vIEltYWdlc1xuY29uc3QgZmFjZWJvb2tJbWcgPSBuZXcgSW1hZ2UoKTtcbmZhY2Vib29rSW1nLnNyYyA9IEZhY2Vib29rO1xuZmFjZWJvb2tJbWcuYWx0ID0gJ0ZhY2Vib29rJztcbmZhY2Vib29rSW1nLmNsYXNzTGlzdC5hZGQoJ2ljb24tZmInKTtcbmZhY2Vib29rSW1nLmNsYXNzTGlzdC5hZGQoJ2ljb24nKTtcblxuY29uc3QgdHdpdHRlckltZyA9IG5ldyBJbWFnZSgpO1xudHdpdHRlckltZy5zcmMgPSBUd2l0dGVyO1xudHdpdHRlckltZy5hbHQgPSAnVHdpdHRlcic7XG50d2l0dGVySW1nLmNsYXNzTGlzdC5hZGQoJ2ljb24tdHcnKTtcbnR3aXR0ZXJJbWcuY2xhc3NMaXN0LmFkZCgnaWNvbicpO1xuaWNvbnNFbGVtZW50LmFwcGVuZENoaWxkKHR3aXR0ZXJJbWcpO1xuXG5jb25zdCBpbnN0YWdyYW1JbWcgPSBuZXcgSW1hZ2UoKTtcbmluc3RhZ3JhbUltZy5zcmMgPSBJbnN0YWdyYW07XG5pbnN0YWdyYW1JbWcuYWx0ID0gJ0luc3RhZ3JhbSc7XG5pbnN0YWdyYW1JbWcuY2xhc3NMaXN0LmFkZCgnaWNvbi1pbnN0YScpO1xuaW5zdGFncmFtSW1nLmNsYXNzTGlzdC5hZGQoJ2ljb24nKTtcbmljb25zRWxlbWVudC5hcHBlbmRDaGlsZChpbnN0YWdyYW1JbWcpO1xuXG5jb25zdCBoYXRJbWcgPSBuZXcgSW1hZ2UoKTtcbmhhdEltZy5zcmMgPSBIYXQ7XG5oYXRJbWcuYWx0ID0gJ09kaW4gUmVzdGF1cmFudCBMb2dvJztcbmxvZ29MaW5rRWxlbWVudC5pbnNlcnRBZGphY2VudEVsZW1lbnQoJ2FmdGVyYmVnaW4nLCBoYXRJbWcpO1xuXG4vLyBBcHBlbmRpbmdcbmxvZ29MaW5rRWxlbWVudC5hcHBlbmRDaGlsZChsb2dvVGV4dEVsZW1lbnQpO1xubG9nb0VsZW1lbnQuYXBwZW5kQ2hpbGQobG9nb0xpbmtFbGVtZW50KTtcblxudGFiRWxlbWVudHMuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuXHR0YWJzRWxlbWVudC5hcHBlbmRDaGlsZChlbGVtZW50KTtcbn0pO1xuXG5pY29uRWxlbWVudHMuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuXHRpY29uc0VsZW1lbnQuYXBwZW5kQ2hpbGQoZWxlbWVudCk7XG59KTtcbmljb25zRWxlbWVudC5xdWVyeVNlbGVjdG9yKCcubGluay1mYicpLmFwcGVuZENoaWxkKGZhY2Vib29rSW1nKTtcbmljb25zRWxlbWVudC5xdWVyeVNlbGVjdG9yKCcubGluay10dycpLmFwcGVuZENoaWxkKHR3aXR0ZXJJbWcpO1xuaWNvbnNFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5saW5rLWluc3RhJykuYXBwZW5kQ2hpbGQoaW5zdGFncmFtSW1nKTtcblxubmF2SXRlbUVsZW1lbnRzWzBdLmFwcGVuZENoaWxkKGxvZ29FbGVtZW50KTtcbm5hdkl0ZW1FbGVtZW50c1swXS5hcHBlbmRDaGlsZCh0YWJzRWxlbWVudCk7XG5cbm5hdkl0ZW1FbGVtZW50c1sxXS5hcHBlbmRDaGlsZChpY29uc0VsZW1lbnQpO1xuXG5uYXZJdGVtRWxlbWVudHMuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuXHRuYXZFbGVtZW50LmFwcGVuZENoaWxkKGVsZW1lbnQpO1xufSk7XG5cbmV4cG9ydCBkZWZhdWx0IG5hdkVsZW1lbnQ7XG4iLCJpbXBvcnQgeyBjcmVhdGVFbGVtZW50IH0gZnJvbSAnLi4vdXRpbGl0eSc7XG5pbXBvcnQgTGFzYWduZSBmcm9tICcuLi9sYXNhZ25lLmpwZyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZU1lbnUoKSB7XG5cdGNvbnN0IGRpc2hlcyA9IFtcblx0XHR7XG5cdFx0XHR0aXRsZTogJ0xhc2FnbmUnLFxuXHRcdFx0aW1hZ2U6IExhc2FnbmUsXG5cdFx0XHRkZXNjcmlwdGlvbjpcblx0XHRcdFx0J0xvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIE51bXF1YW0gZWFydW0gb2ZmaWNpaXMgcXVpYSBkb2xvcmlidXMgbm9uIGFsaXF1YW0gdW5kZSwgbmVzY2l1bnQgZnVnaXQgZXhwbGljYWJvIHBlcnNwaWNpYXRpcyBwZXJmZXJlbmRpcyBvZGl0IG1hZ25hbSByZXBlbGxlbmR1cyB2ZWwuJyxcblx0XHR9LFxuXHRdO1xuXG5cdGNvbnN0IG1haW5Db250ZW50RWxlbWVudCA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsIFtcblx0XHQnbWFpbi1jb250ZW50Jyxcblx0XHQnbWFpbi10ZXh0Jyxcblx0XSk7XG5cdGRpc2hlcy5mb3JFYWNoKChkaXNoKSA9PiB7XG5cdFx0Y29uc3QgaW1hZ2VFbGVtZW50ID0gbmV3IEltYWdlKCk7XG5cdFx0aW1hZ2VFbGVtZW50LnNyYyA9IGRpc2guaW1hZ2U7XG5cdFx0aW1hZ2VFbGVtZW50LmFsdCA9IGRpc2gudGl0bGU7XG5cdFx0aW1hZ2VFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2Rpc2gtaW1nJyk7XG5cblx0XHRjb25zdCBkZXNjcmlwdGlvbkVsZW1lbnQgPSBjcmVhdGVFbGVtZW50KFxuXHRcdFx0J2RpdicsXG5cdFx0XHRbJ2Rpc2gtdGV4dCddLFxuXHRcdFx0YDxoMj4ke2Rpc2gudGl0bGV9PC9oMj48cD4ke2Rpc2guZGVzY3JpcHRpb259PC9wPmBcblx0XHQpO1xuXG5cdFx0Y29uc3QgZGlzaEVsZW1lbnQgPSBjcmVhdGVFbGVtZW50KCdkaXYnLCBbJ2Rpc2gnXSk7XG5cdFx0ZGlzaEVsZW1lbnQuYXBwZW5kQ2hpbGQoaW1hZ2VFbGVtZW50KTtcblx0XHRkaXNoRWxlbWVudC5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbkVsZW1lbnQpO1xuXG5cdFx0bWFpbkNvbnRlbnRFbGVtZW50LmFwcGVuZENoaWxkKGRpc2hFbGVtZW50KTtcblx0fSk7XG5cblx0Y29uc3QgaGVhZGluZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZWFkaW5nJyk7XG5cdGNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbicpO1xuXHRjb25zdCBoZWFkaW5nVGl0bGUgPSAnT3VyIG1lbnUnO1xuXHRjb25zdCBuYXZDbGFzcyA9ICcubWVudSc7XG5cblx0Y29uc3QgaGVhZGluZ1RleHRFbGVtZW50ID0gY3JlYXRlRWxlbWVudChcblx0XHQncCcsXG5cdFx0WydoZWFkaW5nLXRleHQnXSxcblx0XHRoZWFkaW5nVGl0bGVcblx0KTtcblxuXHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKG5hdkNsYXNzKS5jbGFzc0xpc3QuYWRkKCduYXYtYWN0aXZlJyk7XG5cdGhlYWRpbmcuYXBwZW5kQ2hpbGQoaGVhZGluZ1RleHRFbGVtZW50KTtcblx0bWFpbi5hcHBlbmRDaGlsZChtYWluQ29udGVudEVsZW1lbnQpO1xufVxuIiwiZnVuY3Rpb24gY3JlYXRlRWxlbWVudChlbGVtZW50VHlwZSwgZWxlbWVudENsYXNzZXMsIGVsZW1lbnRDb250ZW50KSB7XG5cdGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGVsZW1lbnRUeXBlKTtcblx0aWYgKEFycmF5LmlzQXJyYXkoZWxlbWVudENsYXNzZXMpKSB7XG5cdFx0ZWxlbWVudENsYXNzZXMuZm9yRWFjaCgoY2xhc3NOYW1lKSA9PiB7XG5cdFx0XHRlbGVtZW50LmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtcblx0XHR9KTtcblx0fVxuXHRpZiAoZWxlbWVudENvbnRlbnQpIHtcblx0XHRlbGVtZW50LmlubmVySFRNTCA9IGVsZW1lbnRDb250ZW50O1xuXHR9XG5cdHJldHVybiBlbGVtZW50O1xufVxuXG5leHBvcnQgeyBjcmVhdGVFbGVtZW50IH07XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgbG9hZFBhZ2UgZnJvbSAnLi9sb2FkLXBhZ2UnO1xuaW1wb3J0IGNyZWF0ZU1lbnUgZnJvbSAnLi90YWJzL21lbnUuanMnO1xuXG5sb2FkUGFnZSgpO1xuXG5jb25zdCBuYXZNZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1lbnUnKTtcbm5hdk1lbnUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuXHRjbGVhck9sZFRhYkNvbnRlbnQoKTtcblx0Y3JlYXRlTWVudSgpO1xufSk7XG5cbmZ1bmN0aW9uIGNsZWFyT2xkVGFiQ29udGVudCgpIHtcblx0Y29uc3QgYWN0aXZlVGFicyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5uYXYtYWN0aXZlJyk7XG5cdGNvbnN0IGhlYWRpbmcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVhZGluZycpO1xuXHRjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4nKTtcblx0YWN0aXZlVGFicy5mb3JFYWNoKCh0YWIpID0+IHtcblx0XHR0YWIuY2xhc3NMaXN0LnJlbW92ZSgnbmF2LWFjdGl2ZScpO1xuXHR9KTtcblx0aGVhZGluZy5pbm5lckhUTUwgPSAnJztcblx0bWFpbi5pbm5lckhUTUwgPSAnJztcbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==