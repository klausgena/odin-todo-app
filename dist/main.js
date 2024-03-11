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
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `:root {
    --greener: #adef93;
    --green: #bef2a9;
    --greengreenyellow: #caf2a9;
    --greenyellow: #daf2a9;
    --yellowgreen: #eaf2a9;
    --yellow: #eef2a9;
    --accent: #e8678c;
    --darktype: #131810;
    --type: #2a2f27;
    --lighttype: #898b87;
    --background: #f8fdf6;
}



h3:has(input:checked) {
    text-decoration: line-through;
}

body {
    margin: 0;
    color: var(--type);
    font-size: 1em;
    background-color: var(--background);
    font-family: 'Arial';
}

#content {
    display: flex;
    height: 100vh;
}

#sidebar {
    padding: 2rem 0 0 0;
    flex: 30vw;
    background-color: var(--greengreenyellow);
}

h1,
h2,
h3,
p {
    padding: 0.5rem 1rem 0.5rem 2rem;
    margin: 0;
}

#sidebar h3:hover,
#sidebar h2:hover,
#add-task>p:hover {
    background-color: var(--greener);
    cursor: pointer;
}

#sidebar h1,
#sidebar h2,
#sidebar h3,
#sidebar p {
    font-size: 1em;
}

span.number {
    color: var(--lighttype);
    font-weight: 100;
    justify-self: right;
}

#projects-h2 {
    color: var(--lighttype);
    padding-top: 1rem;
}

#sidebar h2,
#sidebar p,
.project-list-h3 {
    display: flex;
    justify-content: space-between;
}

.project-delete {
    color: var(--lighttype);
}

.project-delete:hover,
#add-task:hover,
#add-project:hover {
    color: var(--background);
}

ul>li {
    list-style: none;
}

ul {
    margin: 0;
    padding-left: 0;
}

#main-tasks-div {
    flex: 70vw;
    padding-top: 2rem;
}

#main-tasks-div li {
    padding-left: 2rem;
    padding-bottom: 0.5rem;
}

button.todo-add {
    margin-left: 2rem;
}

#add-task>p {
    color: var(--accent);
    background-color: var(--green);
    padding-top: 1rem;
    padding-bottom: 1rem;
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,kBAAkB;IAClB,gBAAgB;IAChB,2BAA2B;IAC3B,sBAAsB;IACtB,sBAAsB;IACtB,iBAAiB;IACjB,iBAAiB;IACjB,mBAAmB;IACnB,eAAe;IACf,oBAAoB;IACpB,qBAAqB;AACzB;;;;AAIA;IACI,6BAA6B;AACjC;;AAEA;IACI,SAAS;IACT,kBAAkB;IAClB,cAAc;IACd,mCAAmC;IACnC,oBAAoB;AACxB;;AAEA;IACI,aAAa;IACb,aAAa;AACjB;;AAEA;IACI,mBAAmB;IACnB,UAAU;IACV,yCAAyC;AAC7C;;AAEA;;;;IAII,gCAAgC;IAChC,SAAS;AACb;;AAEA;;;IAGI,gCAAgC;IAChC,eAAe;AACnB;;AAEA;;;;IAII,cAAc;AAClB;;AAEA;IACI,uBAAuB;IACvB,gBAAgB;IAChB,mBAAmB;AACvB;;AAEA;IACI,uBAAuB;IACvB,iBAAiB;AACrB;;AAEA;;;IAGI,aAAa;IACb,8BAA8B;AAClC;;AAEA;IACI,uBAAuB;AAC3B;;AAEA;;;IAGI,wBAAwB;AAC5B;;AAEA;IACI,gBAAgB;AACpB;;AAEA;IACI,SAAS;IACT,eAAe;AACnB;;AAEA;IACI,UAAU;IACV,iBAAiB;AACrB;;AAEA;IACI,kBAAkB;IAClB,sBAAsB;AAC1B;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,oBAAoB;IACpB,8BAA8B;IAC9B,iBAAiB;IACjB,oBAAoB;AACxB","sourcesContent":[":root {\n    --greener: #adef93;\n    --green: #bef2a9;\n    --greengreenyellow: #caf2a9;\n    --greenyellow: #daf2a9;\n    --yellowgreen: #eaf2a9;\n    --yellow: #eef2a9;\n    --accent: #e8678c;\n    --darktype: #131810;\n    --type: #2a2f27;\n    --lighttype: #898b87;\n    --background: #f8fdf6;\n}\n\n\n\nh3:has(input:checked) {\n    text-decoration: line-through;\n}\n\nbody {\n    margin: 0;\n    color: var(--type);\n    font-size: 1em;\n    background-color: var(--background);\n    font-family: 'Arial';\n}\n\n#content {\n    display: flex;\n    height: 100vh;\n}\n\n#sidebar {\n    padding: 2rem 0 0 0;\n    flex: 30vw;\n    background-color: var(--greengreenyellow);\n}\n\nh1,\nh2,\nh3,\np {\n    padding: 0.5rem 1rem 0.5rem 2rem;\n    margin: 0;\n}\n\n#sidebar h3:hover,\n#sidebar h2:hover,\n#add-task>p:hover {\n    background-color: var(--greener);\n    cursor: pointer;\n}\n\n#sidebar h1,\n#sidebar h2,\n#sidebar h3,\n#sidebar p {\n    font-size: 1em;\n}\n\nspan.number {\n    color: var(--lighttype);\n    font-weight: 100;\n    justify-self: right;\n}\n\n#projects-h2 {\n    color: var(--lighttype);\n    padding-top: 1rem;\n}\n\n#sidebar h2,\n#sidebar p,\n.project-list-h3 {\n    display: flex;\n    justify-content: space-between;\n}\n\n.project-delete {\n    color: var(--lighttype);\n}\n\n.project-delete:hover,\n#add-task:hover,\n#add-project:hover {\n    color: var(--background);\n}\n\nul>li {\n    list-style: none;\n}\n\nul {\n    margin: 0;\n    padding-left: 0;\n}\n\n#main-tasks-div {\n    flex: 70vw;\n    padding-top: 2rem;\n}\n\n#main-tasks-div li {\n    padding-left: 2rem;\n    padding-bottom: 0.5rem;\n}\n\nbutton.todo-add {\n    margin-left: 2rem;\n}\n\n#add-task>p {\n    color: var(--accent);\n    background-color: var(--green);\n    padding-top: 1rem;\n    padding-bottom: 1rem;\n}"],"sourceRoot":""}]);
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
  var list = [];

  // return the list of modules as css string
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
  };

  // import a list of modules into the list
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
    return [content].concat([sourceMapping]).join("\n");
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
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
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
  }

  // For old IE
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
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
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

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _controller_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./controller.js */ "./src/controller.js");


// Create a default project
const defaultProject = _controller_js__WEBPACK_IMPORTED_MODULE_0__.projectCreate('@home');
// add second project and third project
const second = _controller_js__WEBPACK_IMPORTED_MODULE_0__.projectCreate("@work");
const third = _controller_js__WEBPACK_IMPORTED_MODULE_0__.projectCreate("@pc");

// Create a dummy todo
const defaultTodo = _controller_js__WEBPACK_IMPORTED_MODULE_0__.todoCreate('Do the dishes', 'Now', defaultProject);
const secondTodo = _controller_js__WEBPACK_IMPORTED_MODULE_0__.todoCreate('Check my email', 'Today', second);
const thirdTodo = _controller_js__WEBPACK_IMPORTED_MODULE_0__.todoCreate('Create backup from pc to SDD', 'Next week', third);
const fourthTodo = _controller_js__WEBPACK_IMPORTED_MODULE_0__.todoCreate('Check on EBay for new keyboard', 'Tomorrow', third);

/***/ }),

/***/ "./src/controller.js":
/*!***************************!*\
  !*** ./src/controller.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getNumberTodosForProject: () => (/* binding */ getNumberTodosForProject),
/* harmony export */   getProjectByNumber: () => (/* binding */ getProjectByNumber),
/* harmony export */   getProjectCount: () => (/* binding */ getProjectCount),
/* harmony export */   listProjects: () => (/* binding */ listProjects),
/* harmony export */   listTodosByDate: () => (/* binding */ listTodosByDate),
/* harmony export */   listTodosForProject: () => (/* binding */ listTodosForProject),
/* harmony export */   projectAddTodo: () => (/* binding */ projectAddTodo),
/* harmony export */   projectCreate: () => (/* binding */ projectCreate),
/* harmony export */   projectDelete: () => (/* binding */ projectDelete),
/* harmony export */   projectEdit: () => (/* binding */ projectEdit),
/* harmony export */   projectTodoMarkDone: () => (/* binding */ projectTodoMarkDone),
/* harmony export */   todoCreate: () => (/* binding */ todoCreate),
/* harmony export */   todoDelete: () => (/* binding */ todoDelete),
/* harmony export */   todoEdit: () => (/* binding */ todoEdit),
/* harmony export */   todoIsDone: () => (/* binding */ todoIsDone)
/* harmony export */ });
/* harmony import */ var _todo_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo.js */ "./src/todo.js");
/* harmony import */ var _project_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project.js */ "./src/project.js");
/* harmony import */ var _db_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./db.js */ "./src/db.js");
// All the actions users can undertake




// Todo actions
// TODO Make every function return something

function todoIsDone(todo) {
    todo.done = 'Yes';
    return todo;
}

function todoDelete(project, todoIndex) {
    project.delete(todoIndex);
    return project;
}

function todoCreate(what, when, project) {
    const todo = new _todo_js__WEBPACK_IMPORTED_MODULE_0__.Todo(what, when);
    project.add(todo);
    return project;
}

function todoEdit(todo, what, when, urgent) {
    // TODO: think of some defaults?
    todo.what = what;
    todo.when = when;
    todo.urgent = urgent;
    return todo;
}

function projectTodoMarkDone(todoIndex, projectIndex) {
    const project = getProjectByNumber(projectIndex);
    const todo = project.todo(todoIndex);
    todoIsDone(todo);
    console.log(`Todo ${todo.what} is marked as done.`);
}

// Lists

function listTodosForProject(number) {
    const myProject = _db_js__WEBPACK_IMPORTED_MODULE_2__["default"].getProjectByNumber(number);
    return myProject.which;
}

function getNumberTodosForProject(projectIndex) {
    return listTodosForProject(projectIndex).length;
}

// TODO
function listTodosByDate() { }


function listProjects() {
    return _db_js__WEBPACK_IMPORTED_MODULE_2__["default"].listProjects();
}

// Project actions

function projectCreate(name) {
    const project = new _project_js__WEBPACK_IMPORTED_MODULE_1__.Project(name);
    _db_js__WEBPACK_IMPORTED_MODULE_2__["default"].addProject(project);
    return project;
}

function projectDelete(project) {
    _db_js__WEBPACK_IMPORTED_MODULE_2__["default"].deleteProject(project);
    project = null;
}

function projectEdit(project, name) {
    project.what = name;
}

function projectAddTodo(project, todo) {
    project.add(todo);
    return project;
}

function getProjectByNumber(number) {
    return _db_js__WEBPACK_IMPORTED_MODULE_2__["default"].getProjectByNumber(number);
}

function getProjectCount() {
    return _db_js__WEBPACK_IMPORTED_MODULE_2__["default"].getProjectCount();
}

/***/ }),

/***/ "./src/db.js":
/*!*******************!*\
  !*** ./src/db.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// Container for all projects and todos
// unique CLASS instance SINGLETON
let instance;
let projects = [];
class DB {
	constructor() {
		if (instance) {
			throw new Error("New instance cannot be created!");
		}
		instance = this;
	}
	addProject(project) {
		projects.push(project);
		console.log(`Project ${project.what} successfully added to DB!`);
	}
	deleteProject(project) {
		let index = projects.indexOf(project);
		if (index !== -1) {
			projects.splice(index, 1);
			console.log(`Project ${project.what} successfully removed from DB!`);
		}

	}
	listProjects() {
		return projects;
	}

	existsProject(name) {
		if (projects.find(project => project.what === name)) {
			return true;
		}
		return false;
	}

	getProjectByNumber(number) {
		return projects[number];
	}

	getProjectCount() {
		return projects.length;
	}
}
let DBInstance = Object.freeze(new DB());

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DBInstance);


/***/ }),

/***/ "./src/events.js":
/*!***********************!*\
  !*** ./src/events.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addProjectEvent: () => (/* binding */ addProjectEvent),
/* harmony export */   addTodoEvent: () => (/* binding */ addTodoEvent),
/* harmony export */   deleteProjectEvent: () => (/* binding */ deleteProjectEvent),
/* harmony export */   deleteTodoEvent: () => (/* binding */ deleteTodoEvent),
/* harmony export */   editTodoElementEvent: () => (/* binding */ editTodoElementEvent),
/* harmony export */   markDoneTodoEvent: () => (/* binding */ markDoneTodoEvent),
/* harmony export */   showProjectTodosEvent: () => (/* binding */ showProjectTodosEvent),
/* harmony export */   toggleTreeEvent: () => (/* binding */ toggleTreeEvent)
/* harmony export */ });
/* harmony import */ var _views_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./views.js */ "./src/views.js");
/* harmony import */ var _controller_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./controller.js */ "./src/controller.js");




// HELPER FUNCTIONS

function getProject(target) {
    // Gets the project out of the Dom tree
    const projectLi = target.closest("h2 + ul").parentElement;
    const projectId = projectLi.querySelector("span").dataset.projectIndex;
    const myProject = _controller_js__WEBPACK_IMPORTED_MODULE_1__.getProjectByNumber(projectId);
    return myProject;
}

function getProjectIndex(target) {
    // Gets the project index out of the Dom tree
    const projectLi = target.closest("h2 + ul").parentElement;
    return projectLi.querySelector("span").dataset.projectIndex;
}

// EVENT HANDLERS

function addTodoEvent(event) {

    const target = event.target;
    let modal = "";

    if (target.id == "add-task") {
        modal = document.getElementById("add-main-todo-dialog");
        modal.showModal();
        modal.addEventListener("click", function (event) {
            if (event.target.className == "add-todo-button") {
                const projectIndex = document.querySelector("#add-main-todo-dialog form select").value;
                const project = _controller_js__WEBPACK_IMPORTED_MODULE_1__.getProjectByNumber(projectIndex);
                console.log(projectIndex);
                const what = document.querySelector("#add-main-todo-dialog form input").value;
                const when = document.querySelector("#add-main-todo-dialog form input+label+input").value;
                if (!what || !when) {
                    alert("no form data");
                }
                else {
                    _controller_js__WEBPACK_IMPORTED_MODULE_1__.todoCreate(what, when, project);
                    _views_js__WEBPACK_IMPORTED_MODULE_0__.redrawScreen(projectIndex);
                }
            }
        })
    }
    else if (target.className == "todo-add") {
        modal = document.getElementById("add-todo-dialog");
        modal.showModal();
        const projectIndex = modal.parentElement.firstChild.dataset.projectIndex;
        modal.addEventListener("click", function (event) {
            if (event.target.className == "add-todo-button") {
                const project = _controller_js__WEBPACK_IMPORTED_MODULE_1__.getProjectByNumber(projectIndex);
                const what = document.querySelector("#add-todo-dialog form input").value;
                const when = document.querySelector("#add-todo-dialog form input+label+input").value;
                if (!what || !when) {
                    // todo make this more elegant
                    alert("Form data missing");
                }
                else {
                    _controller_js__WEBPACK_IMPORTED_MODULE_1__.todoCreate(what, when, project);
                }
                _views_js__WEBPACK_IMPORTED_MODULE_0__.redrawScreen(projectIndex);
            }
        })
    }
}

function showProjectTodosEvent(event) {
    // const projectsDiv = document.getElementById("project-list");
    const target = event.target;
    if (target.className == "project-list-h3") {
        _views_js__WEBPACK_IMPORTED_MODULE_0__.redrawScreen(target.dataset.projectIndex);
    }
}

function addProjectEvent(event) {
    // add a project in the GUI
    const target = event.target;
    if (target.id == "add-project") {
        const modal = document.getElementById("add-project-dialog");
        modal.showModal();
        modal.addEventListener('click', function (event) {
            if (event.target.id == "submit-new-project") {
                const what = document.querySelector("#add-project-dialog form input").value;
                if (!what) {
                    alert("Form Data MISSING");
                }
                else {
                    _controller_js__WEBPACK_IMPORTED_MODULE_1__.projectCreate(what);
                    const projectIndex = _controller_js__WEBPACK_IMPORTED_MODULE_1__.getProjectCount();
                    _views_js__WEBPACK_IMPORTED_MODULE_0__.redrawScreen(projectIndex - 1);
                }
            }
        })
    }
}

function deleteTodoEvent(event) {
    // delete a todo from the GUI
    const target = event.target;
    if (target.className == "todo-delete") {
        // get the project
        const project = getProject(target);
        const index = target.dataset.todoIndex;
        _controller_js__WEBPACK_IMPORTED_MODULE_1__.todoDelete(project, index);
        _views_js__WEBPACK_IMPORTED_MODULE_0__.redrawScreen();
    }
}

function deleteProjectEvent(event) {
    // delete a project from the GUI
    // TODO ASK YES OR NO SURE?? DELETE make function
    const target = event.target;
    if (target.className == "project-delete") {
        const index = target.dataset.projectIndex;
        const project = _controller_js__WEBPACK_IMPORTED_MODULE_1__.getProjectByNumber(index);
        _controller_js__WEBPACK_IMPORTED_MODULE_1__.projectDelete(project);
        _views_js__WEBPACK_IMPORTED_MODULE_0__.redrawScreen();
    }
}

function markDoneTodoEvent(event) {
    // mark a todo as done in the GUI
    const target = event.target;
    if (target.type == "checkbox") {
        const projectIndex = getProjectIndex(target);
        const todoIndex = target.dataset.todoIndex;
        _controller_js__WEBPACK_IMPORTED_MODULE_1__.projectTodoMarkDone(todoIndex, projectIndex);
        _views_js__WEBPACK_IMPORTED_MODULE_0__.redrawScreen();
    }
}

function editTodoElementEvent() {

}

function toggleTreeEvent() {

}

/***/ }),

/***/ "./src/project.js":
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Project: () => (/* binding */ Project)
/* harmony export */ });
class Project {
    #what;
    #which = [];

    constructor(what) {
        this.#what = what;
        // error if such a project already exists
        console.log(`Successfully created project ${what}.`);
    }
    add(todo) {
        this.#which.push(todo);
        console.log(`Successfully added todo ${todo.what} to project ${this.#what}`);
        console.log(`The project now contains ${this.count} todo items.`);
    }
    delete(index) {
        // delete a todo according to index
        this.#which.splice(index, 1);
        console.log(`Successfully deleted todo ${index} from project ${this.#what}`);
        console.log(`The project now contains ${this.count} todo items.`);
    }
    todo(index) {
        return this.#which[index];
    }
    get count() {
        return this.#which.length;
    }

    get what() {
        return this.#what;
    }

    get which() {
        return this.#which;
    }
}



/***/ }),

/***/ "./src/todo.js":
/*!*********************!*\
  !*** ./src/todo.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Todo: () => (/* binding */ Todo)
/* harmony export */ });
// TODO give each todo an unique ID
// TODO add each todo to a certain project (else: Default

class Todo {
    #what;
    #when;
    #isUrgent;
    #isFinished;
    #project;

    constructor(what, when, project = "Default", isUrgent = 'No', isFinished = 'No') {
        this.#what = what;
        this.#when = when;
        this.#project = project;
        this.#isUrgent = isUrgent;
        this.#isFinished = isFinished;
        console.log(`Successfully created todo ${what}`);
    }
    // getters
    get what() {
        return this.#what;
    }
    get when() {
        return this.#when;
    }
    get urgent() {
        return this.#isUrgent;
    }
    get done() {
        return this.#isFinished;
    }
    // setters
    set what(what) {
        this.#what = what;
    }
    set when(when) {
        this.#when = when;
    }
    set urgent(yesNo) {
        this.#isUrgent = yesNo;
    }
    set done(yesNo) {
        this.#isFinished = yesNo;
        return this.#isFinished;
    }
}



/***/ }),

/***/ "./src/views.js":
/*!**********************!*\
  !*** ./src/views.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addEventsToView: () => (/* binding */ addEventsToView),
/* harmony export */   dateView: () => (/* binding */ dateView),
/* harmony export */   projectTodosView: () => (/* binding */ projectTodosView),
/* harmony export */   projectsView: () => (/* binding */ projectsView),
/* harmony export */   redrawScreen: () => (/* binding */ redrawScreen),
/* harmony export */   todayView: () => (/* binding */ todayView),
/* harmony export */   todoView: () => (/* binding */ todoView)
/* harmony export */ });
/* harmony import */ var _controller_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./controller.js */ "./src/controller.js");
/* harmony import */ var _events_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./events.js */ "./src/events.js");



// helper functions

function createNumberSpan(number) {
    const span = document.createElement('span');
    span.setAttribute("class", "number");
    span.textContent = number;
    return span;
}

// event handler views

function addTodoModal(sideYesNo) {

    // TODO make second modal for if is sidebar then add 
    // select with projects, else do not add.
    const modal = document.createElement("dialog");
    const form = document.createElement("form");
    const labelWhat = document.createElement("label");
    const labelWhen = document.createElement("label");
    const inputWhat = document.createElement("input");
    const inputWhen = document.createElement("input");
    const cancelButton = document.createElement("button");
    const submitButton = document.createElement("button");

    modal.setAttribute("id", "add-todo-dialog");
    form.setAttribute("method", "dialog");
    inputWhat.type = "text";
    inputWhen.type = "date";
    labelWhat.textContent = "Title";
    labelWhen.textContent = "Due Date";

    submitButton.setAttribute("class", "add-todo-button");
    submitButton.type = "button";
    cancelButton.setAttribute("id", "cancel-button");
    submitButton.textContent = "Submit";
    cancelButton.textContent = "Cancel";

    form.appendChild(labelWhat);
    form.appendChild(inputWhat);
    form.appendChild(labelWhen);
    form.appendChild(inputWhen);

    if (sideYesNo) {
        const labelProject = document.createElement("label");
        modal.setAttribute("id", "add-main-todo-dialog");
        labelProject.textContent = "Assign To Project";
        const selectProject = document.createElement("select");
        const projects = _controller_js__WEBPACK_IMPORTED_MODULE_0__.listProjects();
        // fill the select with all existing projects
        projects.forEach((project, index) => {
            const option = document.createElement("option");
            option.value = index;
            option.textContent = project.what;
            selectProject.appendChild(option);
        })
        form.appendChild(labelProject);
        form.appendChild(selectProject);
    }

    form.appendChild(cancelButton);
    form.appendChild(submitButton);

    modal.appendChild(form);

    return modal;
}

function addProjectModal() {
    const modal = document.createElement("dialog");
    const form = document.createElement("form");
    const labelWhat = document.createElement("label");
    const inputWhat = document.createElement("input");

    inputWhat.type = "text";
    labelWhat.textContent = "What's the project about?";

    const cancelButton = document.createElement("button");
    const submitButton = document.createElement("button");

    cancelButton.textContent = "Cancel";
    submitButton.textContent = "Submit";
    submitButton.setAttribute("id", "submit-new-project");
    submitButton.type = "button";


    modal.setAttribute("id", "add-project-dialog");
    form.setAttribute("method", "dialog");

    form.appendChild(labelWhat);
    form.appendChild(inputWhat);
    form.appendChild(cancelButton);
    form.appendChild(submitButton);

    modal.appendChild(form);

    return modal;
}

function editTodoModal() {
    const modal = document.createElement("dialog");
    const form = document.createElement("form");

    modal.setAttribute("id", "edit-todo-dialog");
    form.setAttribute("method", "dialog");
}

// All views users can interact with
function dateView() {
    // returns the todo list, ordered by date and divided into 4 categories:
    // Today, This week, This Month and Later
}

function todayView() {
    // returns the list of todos for today
}

function projectsView() {
    // returns the list of all projects
    const projects = _controller_js__WEBPACK_IMPORTED_MODULE_0__.listProjects();
    const ul = document.createElement("ul");
    //const addButton = document.createElement('button');
    projects.forEach((project, index) => {
        const li = document.createElement("li");
        const h3 = document.createElement('h3');
        const delSpan = document.createElement('span');
        const leftSpan = document.createElement('span');
        delSpan.textContent = ' -';
        delSpan.setAttribute("class", "project-delete");
        delSpan.setAttribute("data-project-index", index);
        leftSpan.textContent = project.what;
        leftSpan.appendChild(delSpan);
        h3.appendChild(leftSpan);
        h3.setAttribute("class", "project-list-h3");
        h3.appendChild(createNumberSpan(_controller_js__WEBPACK_IMPORTED_MODULE_0__.getNumberTodosForProject(index)));
        li.setAttribute("class", "project-list-li");
        h3.setAttribute("data-project-index", index);
        li.appendChild(h3);
        ul.appendChild(li);
    });
    return ul;
}

function projectTodosView(index) {
    // returns a list of all todos for a certain project
    const myProject = _controller_js__WEBPACK_IMPORTED_MODULE_0__.getProjectByNumber(index);
    const todos = _controller_js__WEBPACK_IMPORTED_MODULE_0__.listTodosForProject(index);
    const addButton = document.createElement('button');
    const addTodoDialog = addTodoModal(false, index);
    const h2 = document.createElement("h2");
    h2.textContent = myProject.what;
    h2.setAttribute("data-project-index", index);
    const ul = document.createElement('ul');
    ul.appendChild(h2);
    if (todos.length > 0) {
        todos.forEach((todo, index) => {
            const ulTodo = todoView(todo, index);
            ul.appendChild(ulTodo);
        });
    } else {
        console.log(`No todos for project ${index}`);
    }
    addButton.setAttribute("class", "todo-add");
    addButton.textContent = "+ ADD TODO";
    ul.appendChild(addButton);
    ul.appendChild(addTodoDialog);
    return ul;
}

function todoView(todo, index) {
    // returns a todo with all the details
    const li = document.createElement('li');
    const valueSpan = document.createElement('span');
    const values = { "date": todo.when, "urgent": todo.urgent, "done": todo.done };
    const uiSpan = document.createElement('span');
    const contentSpan = document.createElement('span');
    const checkBox = document.createElement('input');
    const checked = (todo.done == 'Yes') ? true : false;
    checkBox.type = 'checkbox';
    checkBox.setAttribute("data-todo-index", index);
    checkBox.checked = checked;
    uiSpan.textContent = (" (DEL)");
    uiSpan.setAttribute("class", "todo-delete");
    uiSpan.setAttribute("data-todo-index", index);
    contentSpan.setAttribute("class", "todo-description");
    contentSpan.textContent = todo.what;
    valueSpan.setAttribute("class", "value-span");
    li.appendChild(checkBox);
    li.appendChild(contentSpan);
    li.appendChild(uiSpan);
    Object.values(values).forEach((value, index) => {
        const span = document.createElement('span');
        span.textContent = value;
        span.setAttribute("class", Object.keys(values)[index]);
        valueSpan.appendChild(span);
    });
    const changeSpan = document.createElement('span');
    changeSpan.textContent = " (EDIT)";
    changeSpan.setAttribute("class", "todo-edit");
    changeSpan.setAttribute("data-todo-el-index", index);
    li.appendChild(changeSpan);
    li.appendChild(valueSpan);
    return li;
}

function addEventsToView(node) {
    const container = node;
    container.addEventListener('click', _events_js__WEBPACK_IMPORTED_MODULE_1__.addTodoEvent);
    container.addEventListener('click', _events_js__WEBPACK_IMPORTED_MODULE_1__.addProjectEvent);
    container.addEventListener('click', _events_js__WEBPACK_IMPORTED_MODULE_1__.showProjectTodosEvent);
    // container.addEventListener('click', events.deleteTodoEvent);
    // container.addEventListener('click', events.deleteProjectEvent);
    // container.addEventListener('click', events.markDoneTodoEvent);
    // return container;
}

function redrawScreen(projectIndex) {
    // TODO add 'content' parameter to redraw screen for main content !
    const mainDiv = document.getElementById("content");
    mainDiv.innerHTML = "";
    createSidebarComponent(mainDiv);
    if (projectIndex == undefined) {
        createMainContent(mainDiv, 0);
    } else {
        createMainContent(mainDiv, projectIndex);
    }
    addEventsToView(mainDiv);
}

function createMainContent(containerDiv, projectIndex) {
    // Creates the main content div with the todos of the selected project
    // or for the selected time period
    // default view = last project tasks? Today's tasks??
    const mainDiv = document.createElement("div");
    const tasksUl = projectTodosView(projectIndex);

    // todo add project title in projecttodosviw function
    mainDiv.setAttribute("id", "main-tasks-div");
    mainDiv.appendChild(tasksUl);

    containerDiv.appendChild(mainDiv);
}


function createSidebarComponent(containerDiv) {
    // Creates the sidebar with project list, add task input, today, future
    const headerH1 = document.createElement("h1");
    const sidebarDiv = document.createElement("div");
    const addTaskDiv = document.createElement("div");
    const projectListDiv = document.createElement("div");
    const todayDiv = document.createElement("div");
    const futureDiv = document.createElement("div");
    const addTaskP = document.createElement("p");
    const projectListUl = projectsView();
    const projectsH2 = document.createElement("h2");
    const todayH2 = document.createElement("h2");
    const futureH2 = document.createElement("h2");
    const addTodoDialog = addTodoModal(true);
    const addProjectDialog = addProjectModal();

    sidebarDiv.setAttribute("id", "sidebar");
    addTaskDiv.setAttribute("id", "add-task");
    todayDiv.setAttribute("id", "today-div");
    futureDiv.setAttribute("id", "future-div");
    projectListDiv.setAttribute("id", "project-list");
    todayDiv.setAttribute("id", "tasks-for-today");
    futureDiv.setAttribute("id", "future-tasks");

    addTaskP.innerHTML = "Add a task <span class='fat-plus' id='add-task'>+</span>";
    addTaskDiv.appendChild(addTaskP);
    addTaskDiv.appendChild(addTodoDialog);
    todayH2.textContent = "Today's Tasks";
    todayH2.appendChild(createNumberSpan(12));
    futureH2.textContent = "Tasks for later";
    futureH2.appendChild(createNumberSpan(99));


    projectsH2.innerHTML = "Projects <span class='fat-plus' id='add-project'>+</span>";
    projectsH2.setAttribute("id", "projects-h2");
    todayDiv.appendChild(todayH2);
    futureDiv.appendChild(futureH2);
    projectListDiv.appendChild(projectsH2);
    projectListDiv.appendChild(projectListUl);
    headerH1.textContent = "My TODO list";

    sidebarDiv.appendChild(headerH1);
    sidebarDiv.appendChild(addTaskDiv);
    sidebarDiv.appendChild(todayDiv);
    sidebarDiv.appendChild(futureDiv);
    sidebarDiv.appendChild(projectListDiv);
    sidebarDiv.appendChild(addProjectDialog);

    containerDiv.appendChild(sidebarDiv);
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
/* harmony import */ var _app_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.js */ "./src/app.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _views_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./views.js */ "./src/views.js");




const mainDiv = document.getElementById("content");
const h1 = document.createElement("h1");
h1.textContent = "My Projects";
const ul = _views_js__WEBPACK_IMPORTED_MODULE_2__.redrawScreen();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7Ozs7Ozs7Ozs7O0FDQWtCO0FBQ1k7QUFDTTs7QUFFcEM7QUFDQTtBQUNBO0FBQ0EsV0FBVyxtREFBa0IsRyIsInNvdXJjZXMiOlsid2VicGFjazovL29kaW4tdG9kby1hcHAvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL29kaW4tdG9kby1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL29kaW4tdG9kby1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tYXBwLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL29kaW4tdG9kby1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL29kaW4tdG9kby1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWFwcC8uL3NyYy9hcHAuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWFwcC8uL3NyYy9jb250cm9sbGVyLmpzIiwid2VicGFjazovL29kaW4tdG9kby1hcHAvLi9zcmMvZGIuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWFwcC8uL3NyYy9ldmVudHMuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWFwcC8uL3NyYy9wcm9qZWN0LmpzIiwid2VicGFjazovL29kaW4tdG9kby1hcHAvLi9zcmMvdG9kby5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tYXBwLy4vc3JjL3ZpZXdzLmpzIiwid2VicGFjazovL29kaW4tdG9kby1hcHAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWFwcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9vZGluLXRvZG8tYXBwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tYXBwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWFwcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL29kaW4tdG9kby1hcHAvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL29kaW4tdG9kby1hcHAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYDpyb290IHtcbiAgICAtLWdyZWVuZXI6ICNhZGVmOTM7XG4gICAgLS1ncmVlbjogI2JlZjJhOTtcbiAgICAtLWdyZWVuZ3JlZW55ZWxsb3c6ICNjYWYyYTk7XG4gICAgLS1ncmVlbnllbGxvdzogI2RhZjJhOTtcbiAgICAtLXllbGxvd2dyZWVuOiAjZWFmMmE5O1xuICAgIC0teWVsbG93OiAjZWVmMmE5O1xuICAgIC0tYWNjZW50OiAjZTg2NzhjO1xuICAgIC0tZGFya3R5cGU6ICMxMzE4MTA7XG4gICAgLS10eXBlOiAjMmEyZjI3O1xuICAgIC0tbGlnaHR0eXBlOiAjODk4Yjg3O1xuICAgIC0tYmFja2dyb3VuZDogI2Y4ZmRmNjtcbn1cblxuXG5cbmgzOmhhcyhpbnB1dDpjaGVja2VkKSB7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XG59XG5cbmJvZHkge1xuICAgIG1hcmdpbjogMDtcbiAgICBjb2xvcjogdmFyKC0tdHlwZSk7XG4gICAgZm9udC1zaXplOiAxZW07XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZCk7XG4gICAgZm9udC1mYW1pbHk6ICdBcmlhbCc7XG59XG5cbiNjb250ZW50IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGhlaWdodDogMTAwdmg7XG59XG5cbiNzaWRlYmFyIHtcbiAgICBwYWRkaW5nOiAycmVtIDAgMCAwO1xuICAgIGZsZXg6IDMwdnc7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZ3JlZW5ncmVlbnllbGxvdyk7XG59XG5cbmgxLFxuaDIsXG5oMyxcbnAge1xuICAgIHBhZGRpbmc6IDAuNXJlbSAxcmVtIDAuNXJlbSAycmVtO1xuICAgIG1hcmdpbjogMDtcbn1cblxuI3NpZGViYXIgaDM6aG92ZXIsXG4jc2lkZWJhciBoMjpob3ZlcixcbiNhZGQtdGFzaz5wOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ncmVlbmVyKTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbiNzaWRlYmFyIGgxLFxuI3NpZGViYXIgaDIsXG4jc2lkZWJhciBoMyxcbiNzaWRlYmFyIHAge1xuICAgIGZvbnQtc2l6ZTogMWVtO1xufVxuXG5zcGFuLm51bWJlciB7XG4gICAgY29sb3I6IHZhcigtLWxpZ2h0dHlwZSk7XG4gICAgZm9udC13ZWlnaHQ6IDEwMDtcbiAgICBqdXN0aWZ5LXNlbGY6IHJpZ2h0O1xufVxuXG4jcHJvamVjdHMtaDIge1xuICAgIGNvbG9yOiB2YXIoLS1saWdodHR5cGUpO1xuICAgIHBhZGRpbmctdG9wOiAxcmVtO1xufVxuXG4jc2lkZWJhciBoMixcbiNzaWRlYmFyIHAsXG4ucHJvamVjdC1saXN0LWgzIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuLnByb2plY3QtZGVsZXRlIHtcbiAgICBjb2xvcjogdmFyKC0tbGlnaHR0eXBlKTtcbn1cblxuLnByb2plY3QtZGVsZXRlOmhvdmVyLFxuI2FkZC10YXNrOmhvdmVyLFxuI2FkZC1wcm9qZWN0OmhvdmVyIHtcbiAgICBjb2xvcjogdmFyKC0tYmFja2dyb3VuZCk7XG59XG5cbnVsPmxpIHtcbiAgICBsaXN0LXN0eWxlOiBub25lO1xufVxuXG51bCB7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmctbGVmdDogMDtcbn1cblxuI21haW4tdGFza3MtZGl2IHtcbiAgICBmbGV4OiA3MHZ3O1xuICAgIHBhZGRpbmctdG9wOiAycmVtO1xufVxuXG4jbWFpbi10YXNrcy1kaXYgbGkge1xuICAgIHBhZGRpbmctbGVmdDogMnJlbTtcbiAgICBwYWRkaW5nLWJvdHRvbTogMC41cmVtO1xufVxuXG5idXR0b24udG9kby1hZGQge1xuICAgIG1hcmdpbi1sZWZ0OiAycmVtO1xufVxuXG4jYWRkLXRhc2s+cCB7XG4gICAgY29sb3I6IHZhcigtLWFjY2VudCk7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZ3JlZW4pO1xuICAgIHBhZGRpbmctdG9wOiAxcmVtO1xuICAgIHBhZGRpbmctYm90dG9tOiAxcmVtO1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsMkJBQTJCO0lBQzNCLHNCQUFzQjtJQUN0QixzQkFBc0I7SUFDdEIsaUJBQWlCO0lBQ2pCLGlCQUFpQjtJQUNqQixtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLG9CQUFvQjtJQUNwQixxQkFBcUI7QUFDekI7Ozs7QUFJQTtJQUNJLDZCQUE2QjtBQUNqQzs7QUFFQTtJQUNJLFNBQVM7SUFDVCxrQkFBa0I7SUFDbEIsY0FBYztJQUNkLG1DQUFtQztJQUNuQyxvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixVQUFVO0lBQ1YseUNBQXlDO0FBQzdDOztBQUVBOzs7O0lBSUksZ0NBQWdDO0lBQ2hDLFNBQVM7QUFDYjs7QUFFQTs7O0lBR0ksZ0NBQWdDO0lBQ2hDLGVBQWU7QUFDbkI7O0FBRUE7Ozs7SUFJSSxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksdUJBQXVCO0lBQ3ZCLGdCQUFnQjtJQUNoQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSx1QkFBdUI7SUFDdkIsaUJBQWlCO0FBQ3JCOztBQUVBOzs7SUFHSSxhQUFhO0lBQ2IsOEJBQThCO0FBQ2xDOztBQUVBO0lBQ0ksdUJBQXVCO0FBQzNCOztBQUVBOzs7SUFHSSx3QkFBd0I7QUFDNUI7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxTQUFTO0lBQ1QsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLFVBQVU7SUFDVixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksb0JBQW9CO0lBQ3BCLDhCQUE4QjtJQUM5QixpQkFBaUI7SUFDakIsb0JBQW9CO0FBQ3hCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjpyb290IHtcXG4gICAgLS1ncmVlbmVyOiAjYWRlZjkzO1xcbiAgICAtLWdyZWVuOiAjYmVmMmE5O1xcbiAgICAtLWdyZWVuZ3JlZW55ZWxsb3c6ICNjYWYyYTk7XFxuICAgIC0tZ3JlZW55ZWxsb3c6ICNkYWYyYTk7XFxuICAgIC0teWVsbG93Z3JlZW46ICNlYWYyYTk7XFxuICAgIC0teWVsbG93OiAjZWVmMmE5O1xcbiAgICAtLWFjY2VudDogI2U4Njc4YztcXG4gICAgLS1kYXJrdHlwZTogIzEzMTgxMDtcXG4gICAgLS10eXBlOiAjMmEyZjI3O1xcbiAgICAtLWxpZ2h0dHlwZTogIzg5OGI4NztcXG4gICAgLS1iYWNrZ3JvdW5kOiAjZjhmZGY2O1xcbn1cXG5cXG5cXG5cXG5oMzpoYXMoaW5wdXQ6Y2hlY2tlZCkge1xcbiAgICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcXG59XFxuXFxuYm9keSB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgY29sb3I6IHZhcigtLXR5cGUpO1xcbiAgICBmb250LXNpemU6IDFlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZCk7XFxuICAgIGZvbnQtZmFtaWx5OiAnQXJpYWwnO1xcbn1cXG5cXG4jY29udGVudCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGhlaWdodDogMTAwdmg7XFxufVxcblxcbiNzaWRlYmFyIHtcXG4gICAgcGFkZGluZzogMnJlbSAwIDAgMDtcXG4gICAgZmxleDogMzB2dztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZ3JlZW5ncmVlbnllbGxvdyk7XFxufVxcblxcbmgxLFxcbmgyLFxcbmgzLFxcbnAge1xcbiAgICBwYWRkaW5nOiAwLjVyZW0gMXJlbSAwLjVyZW0gMnJlbTtcXG4gICAgbWFyZ2luOiAwO1xcbn1cXG5cXG4jc2lkZWJhciBoMzpob3ZlcixcXG4jc2lkZWJhciBoMjpob3ZlcixcXG4jYWRkLXRhc2s+cDpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWdyZWVuZXIpO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbiNzaWRlYmFyIGgxLFxcbiNzaWRlYmFyIGgyLFxcbiNzaWRlYmFyIGgzLFxcbiNzaWRlYmFyIHAge1xcbiAgICBmb250LXNpemU6IDFlbTtcXG59XFxuXFxuc3Bhbi5udW1iZXIge1xcbiAgICBjb2xvcjogdmFyKC0tbGlnaHR0eXBlKTtcXG4gICAgZm9udC13ZWlnaHQ6IDEwMDtcXG4gICAganVzdGlmeS1zZWxmOiByaWdodDtcXG59XFxuXFxuI3Byb2plY3RzLWgyIHtcXG4gICAgY29sb3I6IHZhcigtLWxpZ2h0dHlwZSk7XFxuICAgIHBhZGRpbmctdG9wOiAxcmVtO1xcbn1cXG5cXG4jc2lkZWJhciBoMixcXG4jc2lkZWJhciBwLFxcbi5wcm9qZWN0LWxpc3QtaDMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbi5wcm9qZWN0LWRlbGV0ZSB7XFxuICAgIGNvbG9yOiB2YXIoLS1saWdodHR5cGUpO1xcbn1cXG5cXG4ucHJvamVjdC1kZWxldGU6aG92ZXIsXFxuI2FkZC10YXNrOmhvdmVyLFxcbiNhZGQtcHJvamVjdDpob3ZlciB7XFxuICAgIGNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kKTtcXG59XFxuXFxudWw+bGkge1xcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcbn1cXG5cXG51bCB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZy1sZWZ0OiAwO1xcbn1cXG5cXG4jbWFpbi10YXNrcy1kaXYge1xcbiAgICBmbGV4OiA3MHZ3O1xcbiAgICBwYWRkaW5nLXRvcDogMnJlbTtcXG59XFxuXFxuI21haW4tdGFza3MtZGl2IGxpIHtcXG4gICAgcGFkZGluZy1sZWZ0OiAycmVtO1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMC41cmVtO1xcbn1cXG5cXG5idXR0b24udG9kby1hZGQge1xcbiAgICBtYXJnaW4tbGVmdDogMnJlbTtcXG59XFxuXFxuI2FkZC10YXNrPnAge1xcbiAgICBjb2xvcjogdmFyKC0tYWNjZW50KTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZ3JlZW4pO1xcbiAgICBwYWRkaW5nLXRvcDogMXJlbTtcXG4gICAgcGFkZGluZy1ib3R0b206IDFyZW07XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgKiBhcyBjb250cm9sbGVyIGZyb20gJy4vY29udHJvbGxlci5qcyc7XG5cbi8vIENyZWF0ZSBhIGRlZmF1bHQgcHJvamVjdFxuY29uc3QgZGVmYXVsdFByb2plY3QgPSBjb250cm9sbGVyLnByb2plY3RDcmVhdGUoJ0Bob21lJyk7XG4vLyBhZGQgc2Vjb25kIHByb2plY3QgYW5kIHRoaXJkIHByb2plY3RcbmNvbnN0IHNlY29uZCA9IGNvbnRyb2xsZXIucHJvamVjdENyZWF0ZShcIkB3b3JrXCIpO1xuY29uc3QgdGhpcmQgPSBjb250cm9sbGVyLnByb2plY3RDcmVhdGUoXCJAcGNcIik7XG5cbi8vIENyZWF0ZSBhIGR1bW15IHRvZG9cbmNvbnN0IGRlZmF1bHRUb2RvID0gY29udHJvbGxlci50b2RvQ3JlYXRlKCdEbyB0aGUgZGlzaGVzJywgJ05vdycsIGRlZmF1bHRQcm9qZWN0KTtcbmNvbnN0IHNlY29uZFRvZG8gPSBjb250cm9sbGVyLnRvZG9DcmVhdGUoJ0NoZWNrIG15IGVtYWlsJywgJ1RvZGF5Jywgc2Vjb25kKTtcbmNvbnN0IHRoaXJkVG9kbyA9IGNvbnRyb2xsZXIudG9kb0NyZWF0ZSgnQ3JlYXRlIGJhY2t1cCBmcm9tIHBjIHRvIFNERCcsICdOZXh0IHdlZWsnLCB0aGlyZCk7XG5jb25zdCBmb3VydGhUb2RvID0gY29udHJvbGxlci50b2RvQ3JlYXRlKCdDaGVjayBvbiBFQmF5IGZvciBuZXcga2V5Ym9hcmQnLCAnVG9tb3Jyb3cnLCB0aGlyZCk7IiwiLy8gQWxsIHRoZSBhY3Rpb25zIHVzZXJzIGNhbiB1bmRlcnRha2VcbmltcG9ydCB7IFRvZG8gfSBmcm9tICcuL3RvZG8uanMnO1xuaW1wb3J0IHsgUHJvamVjdCB9IGZyb20gJy4vcHJvamVjdC5qcyc7XG5pbXBvcnQgeyBkZWZhdWx0IGFzIERCIH0gZnJvbSAnLi9kYi5qcyc7XG5cbi8vIFRvZG8gYWN0aW9uc1xuLy8gVE9ETyBNYWtlIGV2ZXJ5IGZ1bmN0aW9uIHJldHVybiBzb21ldGhpbmdcblxuZXhwb3J0IGZ1bmN0aW9uIHRvZG9Jc0RvbmUodG9kbykge1xuICAgIHRvZG8uZG9uZSA9ICdZZXMnO1xuICAgIHJldHVybiB0b2RvO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdG9kb0RlbGV0ZShwcm9qZWN0LCB0b2RvSW5kZXgpIHtcbiAgICBwcm9qZWN0LmRlbGV0ZSh0b2RvSW5kZXgpO1xuICAgIHJldHVybiBwcm9qZWN0O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdG9kb0NyZWF0ZSh3aGF0LCB3aGVuLCBwcm9qZWN0KSB7XG4gICAgY29uc3QgdG9kbyA9IG5ldyBUb2RvKHdoYXQsIHdoZW4pO1xuICAgIHByb2plY3QuYWRkKHRvZG8pO1xuICAgIHJldHVybiBwcm9qZWN0O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdG9kb0VkaXQodG9kbywgd2hhdCwgd2hlbiwgdXJnZW50KSB7XG4gICAgLy8gVE9ETzogdGhpbmsgb2Ygc29tZSBkZWZhdWx0cz9cbiAgICB0b2RvLndoYXQgPSB3aGF0O1xuICAgIHRvZG8ud2hlbiA9IHdoZW47XG4gICAgdG9kby51cmdlbnQgPSB1cmdlbnQ7XG4gICAgcmV0dXJuIHRvZG87XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcm9qZWN0VG9kb01hcmtEb25lKHRvZG9JbmRleCwgcHJvamVjdEluZGV4KSB7XG4gICAgY29uc3QgcHJvamVjdCA9IGdldFByb2plY3RCeU51bWJlcihwcm9qZWN0SW5kZXgpO1xuICAgIGNvbnN0IHRvZG8gPSBwcm9qZWN0LnRvZG8odG9kb0luZGV4KTtcbiAgICB0b2RvSXNEb25lKHRvZG8pO1xuICAgIGNvbnNvbGUubG9nKGBUb2RvICR7dG9kby53aGF0fSBpcyBtYXJrZWQgYXMgZG9uZS5gKTtcbn1cblxuLy8gTGlzdHNcblxuZXhwb3J0IGZ1bmN0aW9uIGxpc3RUb2Rvc0ZvclByb2plY3QobnVtYmVyKSB7XG4gICAgY29uc3QgbXlQcm9qZWN0ID0gREIuZ2V0UHJvamVjdEJ5TnVtYmVyKG51bWJlcik7XG4gICAgcmV0dXJuIG15UHJvamVjdC53aGljaDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldE51bWJlclRvZG9zRm9yUHJvamVjdChwcm9qZWN0SW5kZXgpIHtcbiAgICByZXR1cm4gbGlzdFRvZG9zRm9yUHJvamVjdChwcm9qZWN0SW5kZXgpLmxlbmd0aDtcbn1cblxuLy8gVE9ET1xuZXhwb3J0IGZ1bmN0aW9uIGxpc3RUb2Rvc0J5RGF0ZSgpIHsgfVxuXG5cbmV4cG9ydCBmdW5jdGlvbiBsaXN0UHJvamVjdHMoKSB7XG4gICAgcmV0dXJuIERCLmxpc3RQcm9qZWN0cygpO1xufVxuXG4vLyBQcm9qZWN0IGFjdGlvbnNcblxuZXhwb3J0IGZ1bmN0aW9uIHByb2plY3RDcmVhdGUobmFtZSkge1xuICAgIGNvbnN0IHByb2plY3QgPSBuZXcgUHJvamVjdChuYW1lKTtcbiAgICBEQi5hZGRQcm9qZWN0KHByb2plY3QpO1xuICAgIHJldHVybiBwcm9qZWN0O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcHJvamVjdERlbGV0ZShwcm9qZWN0KSB7XG4gICAgREIuZGVsZXRlUHJvamVjdChwcm9qZWN0KTtcbiAgICBwcm9qZWN0ID0gbnVsbDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByb2plY3RFZGl0KHByb2plY3QsIG5hbWUpIHtcbiAgICBwcm9qZWN0LndoYXQgPSBuYW1lO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcHJvamVjdEFkZFRvZG8ocHJvamVjdCwgdG9kbykge1xuICAgIHByb2plY3QuYWRkKHRvZG8pO1xuICAgIHJldHVybiBwcm9qZWN0O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0UHJvamVjdEJ5TnVtYmVyKG51bWJlcikge1xuICAgIHJldHVybiBEQi5nZXRQcm9qZWN0QnlOdW1iZXIobnVtYmVyKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFByb2plY3RDb3VudCgpIHtcbiAgICByZXR1cm4gREIuZ2V0UHJvamVjdENvdW50KCk7XG59IiwiLy8gQ29udGFpbmVyIGZvciBhbGwgcHJvamVjdHMgYW5kIHRvZG9zXG4vLyB1bmlxdWUgQ0xBU1MgaW5zdGFuY2UgU0lOR0xFVE9OXG5sZXQgaW5zdGFuY2U7XG5sZXQgcHJvamVjdHMgPSBbXTtcbmNsYXNzIERCIHtcblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0aWYgKGluc3RhbmNlKSB7XG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoXCJOZXcgaW5zdGFuY2UgY2Fubm90IGJlIGNyZWF0ZWQhXCIpO1xuXHRcdH1cblx0XHRpbnN0YW5jZSA9IHRoaXM7XG5cdH1cblx0YWRkUHJvamVjdChwcm9qZWN0KSB7XG5cdFx0cHJvamVjdHMucHVzaChwcm9qZWN0KTtcblx0XHRjb25zb2xlLmxvZyhgUHJvamVjdCAke3Byb2plY3Qud2hhdH0gc3VjY2Vzc2Z1bGx5IGFkZGVkIHRvIERCIWApO1xuXHR9XG5cdGRlbGV0ZVByb2plY3QocHJvamVjdCkge1xuXHRcdGxldCBpbmRleCA9IHByb2plY3RzLmluZGV4T2YocHJvamVjdCk7XG5cdFx0aWYgKGluZGV4ICE9PSAtMSkge1xuXHRcdFx0cHJvamVjdHMuc3BsaWNlKGluZGV4LCAxKTtcblx0XHRcdGNvbnNvbGUubG9nKGBQcm9qZWN0ICR7cHJvamVjdC53aGF0fSBzdWNjZXNzZnVsbHkgcmVtb3ZlZCBmcm9tIERCIWApO1xuXHRcdH1cblxuXHR9XG5cdGxpc3RQcm9qZWN0cygpIHtcblx0XHRyZXR1cm4gcHJvamVjdHM7XG5cdH1cblxuXHRleGlzdHNQcm9qZWN0KG5hbWUpIHtcblx0XHRpZiAocHJvamVjdHMuZmluZChwcm9qZWN0ID0+IHByb2plY3Qud2hhdCA9PT0gbmFtZSkpIHtcblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH1cblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cblxuXHRnZXRQcm9qZWN0QnlOdW1iZXIobnVtYmVyKSB7XG5cdFx0cmV0dXJuIHByb2plY3RzW251bWJlcl07XG5cdH1cblxuXHRnZXRQcm9qZWN0Q291bnQoKSB7XG5cdFx0cmV0dXJuIHByb2plY3RzLmxlbmd0aDtcblx0fVxufVxubGV0IERCSW5zdGFuY2UgPSBPYmplY3QuZnJlZXplKG5ldyBEQigpKTtcblxuZXhwb3J0IGRlZmF1bHQgREJJbnN0YW5jZTtcbiIsImltcG9ydCAqIGFzIHZpZXdzIGZyb20gJy4vdmlld3MuanMnO1xuaW1wb3J0ICogYXMgY29udHJvbGxlciBmcm9tICcuL2NvbnRyb2xsZXIuanMnO1xuXG5cbi8vIEhFTFBFUiBGVU5DVElPTlNcblxuZnVuY3Rpb24gZ2V0UHJvamVjdCh0YXJnZXQpIHtcbiAgICAvLyBHZXRzIHRoZSBwcm9qZWN0IG91dCBvZiB0aGUgRG9tIHRyZWVcbiAgICBjb25zdCBwcm9qZWN0TGkgPSB0YXJnZXQuY2xvc2VzdChcImgyICsgdWxcIikucGFyZW50RWxlbWVudDtcbiAgICBjb25zdCBwcm9qZWN0SWQgPSBwcm9qZWN0TGkucXVlcnlTZWxlY3RvcihcInNwYW5cIikuZGF0YXNldC5wcm9qZWN0SW5kZXg7XG4gICAgY29uc3QgbXlQcm9qZWN0ID0gY29udHJvbGxlci5nZXRQcm9qZWN0QnlOdW1iZXIocHJvamVjdElkKTtcbiAgICByZXR1cm4gbXlQcm9qZWN0O1xufVxuXG5mdW5jdGlvbiBnZXRQcm9qZWN0SW5kZXgodGFyZ2V0KSB7XG4gICAgLy8gR2V0cyB0aGUgcHJvamVjdCBpbmRleCBvdXQgb2YgdGhlIERvbSB0cmVlXG4gICAgY29uc3QgcHJvamVjdExpID0gdGFyZ2V0LmNsb3Nlc3QoXCJoMiArIHVsXCIpLnBhcmVudEVsZW1lbnQ7XG4gICAgcmV0dXJuIHByb2plY3RMaS5xdWVyeVNlbGVjdG9yKFwic3BhblwiKS5kYXRhc2V0LnByb2plY3RJbmRleDtcbn1cblxuLy8gRVZFTlQgSEFORExFUlNcblxuZXhwb3J0IGZ1bmN0aW9uIGFkZFRvZG9FdmVudChldmVudCkge1xuXG4gICAgY29uc3QgdGFyZ2V0ID0gZXZlbnQudGFyZ2V0O1xuICAgIGxldCBtb2RhbCA9IFwiXCI7XG5cbiAgICBpZiAodGFyZ2V0LmlkID09IFwiYWRkLXRhc2tcIikge1xuICAgICAgICBtb2RhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWRkLW1haW4tdG9kby1kaWFsb2dcIik7XG4gICAgICAgIG1vZGFsLnNob3dNb2RhbCgpO1xuICAgICAgICBtb2RhbC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICBpZiAoZXZlbnQudGFyZ2V0LmNsYXNzTmFtZSA9PSBcImFkZC10b2RvLWJ1dHRvblwiKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgcHJvamVjdEluZGV4ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNhZGQtbWFpbi10b2RvLWRpYWxvZyBmb3JtIHNlbGVjdFwiKS52YWx1ZTtcbiAgICAgICAgICAgICAgICBjb25zdCBwcm9qZWN0ID0gY29udHJvbGxlci5nZXRQcm9qZWN0QnlOdW1iZXIocHJvamVjdEluZGV4KTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhwcm9qZWN0SW5kZXgpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHdoYXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2FkZC1tYWluLXRvZG8tZGlhbG9nIGZvcm0gaW5wdXRcIikudmFsdWU7XG4gICAgICAgICAgICAgICAgY29uc3Qgd2hlbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYWRkLW1haW4tdG9kby1kaWFsb2cgZm9ybSBpbnB1dCtsYWJlbCtpbnB1dFwiKS52YWx1ZTtcbiAgICAgICAgICAgICAgICBpZiAoIXdoYXQgfHwgIXdoZW4pIHtcbiAgICAgICAgICAgICAgICAgICAgYWxlcnQoXCJubyBmb3JtIGRhdGFcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBjb250cm9sbGVyLnRvZG9DcmVhdGUod2hhdCwgd2hlbiwgcHJvamVjdCk7XG4gICAgICAgICAgICAgICAgICAgIHZpZXdzLnJlZHJhd1NjcmVlbihwcm9qZWN0SW5kZXgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9XG4gICAgZWxzZSBpZiAodGFyZ2V0LmNsYXNzTmFtZSA9PSBcInRvZG8tYWRkXCIpIHtcbiAgICAgICAgbW9kYWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFkZC10b2RvLWRpYWxvZ1wiKTtcbiAgICAgICAgbW9kYWwuc2hvd01vZGFsKCk7XG4gICAgICAgIGNvbnN0IHByb2plY3RJbmRleCA9IG1vZGFsLnBhcmVudEVsZW1lbnQuZmlyc3RDaGlsZC5kYXRhc2V0LnByb2plY3RJbmRleDtcbiAgICAgICAgbW9kYWwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgaWYgKGV2ZW50LnRhcmdldC5jbGFzc05hbWUgPT0gXCJhZGQtdG9kby1idXR0b25cIikge1xuICAgICAgICAgICAgICAgIGNvbnN0IHByb2plY3QgPSBjb250cm9sbGVyLmdldFByb2plY3RCeU51bWJlcihwcm9qZWN0SW5kZXgpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHdoYXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2FkZC10b2RvLWRpYWxvZyBmb3JtIGlucHV0XCIpLnZhbHVlO1xuICAgICAgICAgICAgICAgIGNvbnN0IHdoZW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2FkZC10b2RvLWRpYWxvZyBmb3JtIGlucHV0K2xhYmVsK2lucHV0XCIpLnZhbHVlO1xuICAgICAgICAgICAgICAgIGlmICghd2hhdCB8fCAhd2hlbikge1xuICAgICAgICAgICAgICAgICAgICAvLyB0b2RvIG1ha2UgdGhpcyBtb3JlIGVsZWdhbnRcbiAgICAgICAgICAgICAgICAgICAgYWxlcnQoXCJGb3JtIGRhdGEgbWlzc2luZ1wiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRyb2xsZXIudG9kb0NyZWF0ZSh3aGF0LCB3aGVuLCBwcm9qZWN0KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdmlld3MucmVkcmF3U2NyZWVuKHByb2plY3RJbmRleCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gc2hvd1Byb2plY3RUb2Rvc0V2ZW50KGV2ZW50KSB7XG4gICAgLy8gY29uc3QgcHJvamVjdHNEaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2plY3QtbGlzdFwiKTtcbiAgICBjb25zdCB0YXJnZXQgPSBldmVudC50YXJnZXQ7XG4gICAgaWYgKHRhcmdldC5jbGFzc05hbWUgPT0gXCJwcm9qZWN0LWxpc3QtaDNcIikge1xuICAgICAgICB2aWV3cy5yZWRyYXdTY3JlZW4odGFyZ2V0LmRhdGFzZXQucHJvamVjdEluZGV4KTtcbiAgICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRQcm9qZWN0RXZlbnQoZXZlbnQpIHtcbiAgICAvLyBhZGQgYSBwcm9qZWN0IGluIHRoZSBHVUlcbiAgICBjb25zdCB0YXJnZXQgPSBldmVudC50YXJnZXQ7XG4gICAgaWYgKHRhcmdldC5pZCA9PSBcImFkZC1wcm9qZWN0XCIpIHtcbiAgICAgICAgY29uc3QgbW9kYWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFkZC1wcm9qZWN0LWRpYWxvZ1wiKTtcbiAgICAgICAgbW9kYWwuc2hvd01vZGFsKCk7XG4gICAgICAgIG1vZGFsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICBpZiAoZXZlbnQudGFyZ2V0LmlkID09IFwic3VibWl0LW5ldy1wcm9qZWN0XCIpIHtcbiAgICAgICAgICAgICAgICBjb25zdCB3aGF0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNhZGQtcHJvamVjdC1kaWFsb2cgZm9ybSBpbnB1dFwiKS52YWx1ZTtcbiAgICAgICAgICAgICAgICBpZiAoIXdoYXQpIHtcbiAgICAgICAgICAgICAgICAgICAgYWxlcnQoXCJGb3JtIERhdGEgTUlTU0lOR1wiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRyb2xsZXIucHJvamVjdENyZWF0ZSh3aGF0KTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcHJvamVjdEluZGV4ID0gY29udHJvbGxlci5nZXRQcm9qZWN0Q291bnQoKTtcbiAgICAgICAgICAgICAgICAgICAgdmlld3MucmVkcmF3U2NyZWVuKHByb2plY3RJbmRleCAtIDEpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWxldGVUb2RvRXZlbnQoZXZlbnQpIHtcbiAgICAvLyBkZWxldGUgYSB0b2RvIGZyb20gdGhlIEdVSVxuICAgIGNvbnN0IHRhcmdldCA9IGV2ZW50LnRhcmdldDtcbiAgICBpZiAodGFyZ2V0LmNsYXNzTmFtZSA9PSBcInRvZG8tZGVsZXRlXCIpIHtcbiAgICAgICAgLy8gZ2V0IHRoZSBwcm9qZWN0XG4gICAgICAgIGNvbnN0IHByb2plY3QgPSBnZXRQcm9qZWN0KHRhcmdldCk7XG4gICAgICAgIGNvbnN0IGluZGV4ID0gdGFyZ2V0LmRhdGFzZXQudG9kb0luZGV4O1xuICAgICAgICBjb250cm9sbGVyLnRvZG9EZWxldGUocHJvamVjdCwgaW5kZXgpO1xuICAgICAgICB2aWV3cy5yZWRyYXdTY3JlZW4oKTtcbiAgICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWxldGVQcm9qZWN0RXZlbnQoZXZlbnQpIHtcbiAgICAvLyBkZWxldGUgYSBwcm9qZWN0IGZyb20gdGhlIEdVSVxuICAgIC8vIFRPRE8gQVNLIFlFUyBPUiBOTyBTVVJFPz8gREVMRVRFIG1ha2UgZnVuY3Rpb25cbiAgICBjb25zdCB0YXJnZXQgPSBldmVudC50YXJnZXQ7XG4gICAgaWYgKHRhcmdldC5jbGFzc05hbWUgPT0gXCJwcm9qZWN0LWRlbGV0ZVwiKSB7XG4gICAgICAgIGNvbnN0IGluZGV4ID0gdGFyZ2V0LmRhdGFzZXQucHJvamVjdEluZGV4O1xuICAgICAgICBjb25zdCBwcm9qZWN0ID0gY29udHJvbGxlci5nZXRQcm9qZWN0QnlOdW1iZXIoaW5kZXgpO1xuICAgICAgICBjb250cm9sbGVyLnByb2plY3REZWxldGUocHJvamVjdCk7XG4gICAgICAgIHZpZXdzLnJlZHJhd1NjcmVlbigpO1xuICAgIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1hcmtEb25lVG9kb0V2ZW50KGV2ZW50KSB7XG4gICAgLy8gbWFyayBhIHRvZG8gYXMgZG9uZSBpbiB0aGUgR1VJXG4gICAgY29uc3QgdGFyZ2V0ID0gZXZlbnQudGFyZ2V0O1xuICAgIGlmICh0YXJnZXQudHlwZSA9PSBcImNoZWNrYm94XCIpIHtcbiAgICAgICAgY29uc3QgcHJvamVjdEluZGV4ID0gZ2V0UHJvamVjdEluZGV4KHRhcmdldCk7XG4gICAgICAgIGNvbnN0IHRvZG9JbmRleCA9IHRhcmdldC5kYXRhc2V0LnRvZG9JbmRleDtcbiAgICAgICAgY29udHJvbGxlci5wcm9qZWN0VG9kb01hcmtEb25lKHRvZG9JbmRleCwgcHJvamVjdEluZGV4KTtcbiAgICAgICAgdmlld3MucmVkcmF3U2NyZWVuKCk7XG4gICAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZWRpdFRvZG9FbGVtZW50RXZlbnQoKSB7XG5cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRvZ2dsZVRyZWVFdmVudCgpIHtcblxufSIsImNsYXNzIFByb2plY3Qge1xuICAgICN3aGF0O1xuICAgICN3aGljaCA9IFtdO1xuXG4gICAgY29uc3RydWN0b3Iod2hhdCkge1xuICAgICAgICB0aGlzLiN3aGF0ID0gd2hhdDtcbiAgICAgICAgLy8gZXJyb3IgaWYgc3VjaCBhIHByb2plY3QgYWxyZWFkeSBleGlzdHNcbiAgICAgICAgY29uc29sZS5sb2coYFN1Y2Nlc3NmdWxseSBjcmVhdGVkIHByb2plY3QgJHt3aGF0fS5gKTtcbiAgICB9XG4gICAgYWRkKHRvZG8pIHtcbiAgICAgICAgdGhpcy4jd2hpY2gucHVzaCh0b2RvKTtcbiAgICAgICAgY29uc29sZS5sb2coYFN1Y2Nlc3NmdWxseSBhZGRlZCB0b2RvICR7dG9kby53aGF0fSB0byBwcm9qZWN0ICR7dGhpcy4jd2hhdH1gKTtcbiAgICAgICAgY29uc29sZS5sb2coYFRoZSBwcm9qZWN0IG5vdyBjb250YWlucyAke3RoaXMuY291bnR9IHRvZG8gaXRlbXMuYCk7XG4gICAgfVxuICAgIGRlbGV0ZShpbmRleCkge1xuICAgICAgICAvLyBkZWxldGUgYSB0b2RvIGFjY29yZGluZyB0byBpbmRleFxuICAgICAgICB0aGlzLiN3aGljaC5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICBjb25zb2xlLmxvZyhgU3VjY2Vzc2Z1bGx5IGRlbGV0ZWQgdG9kbyAke2luZGV4fSBmcm9tIHByb2plY3QgJHt0aGlzLiN3aGF0fWApO1xuICAgICAgICBjb25zb2xlLmxvZyhgVGhlIHByb2plY3Qgbm93IGNvbnRhaW5zICR7dGhpcy5jb3VudH0gdG9kbyBpdGVtcy5gKTtcbiAgICB9XG4gICAgdG9kbyhpbmRleCkge1xuICAgICAgICByZXR1cm4gdGhpcy4jd2hpY2hbaW5kZXhdO1xuICAgIH1cbiAgICBnZXQgY291bnQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLiN3aGljaC5sZW5ndGg7XG4gICAgfVxuXG4gICAgZ2V0IHdoYXQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLiN3aGF0O1xuICAgIH1cblxuICAgIGdldCB3aGljaCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuI3doaWNoO1xuICAgIH1cbn1cbmV4cG9ydCB7IFByb2plY3QgfTtcbiIsIi8vIFRPRE8gZ2l2ZSBlYWNoIHRvZG8gYW4gdW5pcXVlIElEXG4vLyBUT0RPIGFkZCBlYWNoIHRvZG8gdG8gYSBjZXJ0YWluIHByb2plY3QgKGVsc2U6IERlZmF1bHRcblxuY2xhc3MgVG9kbyB7XG4gICAgI3doYXQ7XG4gICAgI3doZW47XG4gICAgI2lzVXJnZW50O1xuICAgICNpc0ZpbmlzaGVkO1xuICAgICNwcm9qZWN0O1xuXG4gICAgY29uc3RydWN0b3Iod2hhdCwgd2hlbiwgcHJvamVjdCA9IFwiRGVmYXVsdFwiLCBpc1VyZ2VudCA9ICdObycsIGlzRmluaXNoZWQgPSAnTm8nKSB7XG4gICAgICAgIHRoaXMuI3doYXQgPSB3aGF0O1xuICAgICAgICB0aGlzLiN3aGVuID0gd2hlbjtcbiAgICAgICAgdGhpcy4jcHJvamVjdCA9IHByb2plY3Q7XG4gICAgICAgIHRoaXMuI2lzVXJnZW50ID0gaXNVcmdlbnQ7XG4gICAgICAgIHRoaXMuI2lzRmluaXNoZWQgPSBpc0ZpbmlzaGVkO1xuICAgICAgICBjb25zb2xlLmxvZyhgU3VjY2Vzc2Z1bGx5IGNyZWF0ZWQgdG9kbyAke3doYXR9YCk7XG4gICAgfVxuICAgIC8vIGdldHRlcnNcbiAgICBnZXQgd2hhdCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuI3doYXQ7XG4gICAgfVxuICAgIGdldCB3aGVuKCkge1xuICAgICAgICByZXR1cm4gdGhpcy4jd2hlbjtcbiAgICB9XG4gICAgZ2V0IHVyZ2VudCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuI2lzVXJnZW50O1xuICAgIH1cbiAgICBnZXQgZG9uZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuI2lzRmluaXNoZWQ7XG4gICAgfVxuICAgIC8vIHNldHRlcnNcbiAgICBzZXQgd2hhdCh3aGF0KSB7XG4gICAgICAgIHRoaXMuI3doYXQgPSB3aGF0O1xuICAgIH1cbiAgICBzZXQgd2hlbih3aGVuKSB7XG4gICAgICAgIHRoaXMuI3doZW4gPSB3aGVuO1xuICAgIH1cbiAgICBzZXQgdXJnZW50KHllc05vKSB7XG4gICAgICAgIHRoaXMuI2lzVXJnZW50ID0geWVzTm87XG4gICAgfVxuICAgIHNldCBkb25lKHllc05vKSB7XG4gICAgICAgIHRoaXMuI2lzRmluaXNoZWQgPSB5ZXNObztcbiAgICAgICAgcmV0dXJuIHRoaXMuI2lzRmluaXNoZWQ7XG4gICAgfVxufVxuZXhwb3J0IHsgVG9kbyB9O1xuIiwiaW1wb3J0ICogYXMgY29udHJvbGxlciBmcm9tICcuL2NvbnRyb2xsZXIuanMnO1xuaW1wb3J0ICogYXMgZXZlbnRzIGZyb20gJy4vZXZlbnRzLmpzJztcblxuLy8gaGVscGVyIGZ1bmN0aW9uc1xuXG5mdW5jdGlvbiBjcmVhdGVOdW1iZXJTcGFuKG51bWJlcikge1xuICAgIGNvbnN0IHNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgc3Bhbi5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcIm51bWJlclwiKTtcbiAgICBzcGFuLnRleHRDb250ZW50ID0gbnVtYmVyO1xuICAgIHJldHVybiBzcGFuO1xufVxuXG4vLyBldmVudCBoYW5kbGVyIHZpZXdzXG5cbmZ1bmN0aW9uIGFkZFRvZG9Nb2RhbChzaWRlWWVzTm8pIHtcblxuICAgIC8vIFRPRE8gbWFrZSBzZWNvbmQgbW9kYWwgZm9yIGlmIGlzIHNpZGViYXIgdGhlbiBhZGQgXG4gICAgLy8gc2VsZWN0IHdpdGggcHJvamVjdHMsIGVsc2UgZG8gbm90IGFkZC5cbiAgICBjb25zdCBtb2RhbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaWFsb2dcIik7XG4gICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIpO1xuICAgIGNvbnN0IGxhYmVsV2hhdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgICBjb25zdCBsYWJlbFdoZW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gICAgY29uc3QgaW5wdXRXaGF0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIGNvbnN0IGlucHV0V2hlbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICBjb25zdCBjYW5jZWxCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGNvbnN0IHN1Ym1pdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG5cbiAgICBtb2RhbC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImFkZC10b2RvLWRpYWxvZ1wiKTtcbiAgICBmb3JtLnNldEF0dHJpYnV0ZShcIm1ldGhvZFwiLCBcImRpYWxvZ1wiKTtcbiAgICBpbnB1dFdoYXQudHlwZSA9IFwidGV4dFwiO1xuICAgIGlucHV0V2hlbi50eXBlID0gXCJkYXRlXCI7XG4gICAgbGFiZWxXaGF0LnRleHRDb250ZW50ID0gXCJUaXRsZVwiO1xuICAgIGxhYmVsV2hlbi50ZXh0Q29udGVudCA9IFwiRHVlIERhdGVcIjtcblxuICAgIHN1Ym1pdEJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImFkZC10b2RvLWJ1dHRvblwiKTtcbiAgICBzdWJtaXRCdXR0b24udHlwZSA9IFwiYnV0dG9uXCI7XG4gICAgY2FuY2VsQnV0dG9uLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiY2FuY2VsLWJ1dHRvblwiKTtcbiAgICBzdWJtaXRCdXR0b24udGV4dENvbnRlbnQgPSBcIlN1Ym1pdFwiO1xuICAgIGNhbmNlbEJ1dHRvbi50ZXh0Q29udGVudCA9IFwiQ2FuY2VsXCI7XG5cbiAgICBmb3JtLmFwcGVuZENoaWxkKGxhYmVsV2hhdCk7XG4gICAgZm9ybS5hcHBlbmRDaGlsZChpbnB1dFdoYXQpO1xuICAgIGZvcm0uYXBwZW5kQ2hpbGQobGFiZWxXaGVuKTtcbiAgICBmb3JtLmFwcGVuZENoaWxkKGlucHV0V2hlbik7XG5cbiAgICBpZiAoc2lkZVllc05vKSB7XG4gICAgICAgIGNvbnN0IGxhYmVsUHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgICAgICAgbW9kYWwuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJhZGQtbWFpbi10b2RvLWRpYWxvZ1wiKTtcbiAgICAgICAgbGFiZWxQcm9qZWN0LnRleHRDb250ZW50ID0gXCJBc3NpZ24gVG8gUHJvamVjdFwiO1xuICAgICAgICBjb25zdCBzZWxlY3RQcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlbGVjdFwiKTtcbiAgICAgICAgY29uc3QgcHJvamVjdHMgPSBjb250cm9sbGVyLmxpc3RQcm9qZWN0cygpO1xuICAgICAgICAvLyBmaWxsIHRoZSBzZWxlY3Qgd2l0aCBhbGwgZXhpc3RpbmcgcHJvamVjdHNcbiAgICAgICAgcHJvamVjdHMuZm9yRWFjaCgocHJvamVjdCwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gICAgICAgICAgICBvcHRpb24udmFsdWUgPSBpbmRleDtcbiAgICAgICAgICAgIG9wdGlvbi50ZXh0Q29udGVudCA9IHByb2plY3Qud2hhdDtcbiAgICAgICAgICAgIHNlbGVjdFByb2plY3QuYXBwZW5kQ2hpbGQob3B0aW9uKTtcbiAgICAgICAgfSlcbiAgICAgICAgZm9ybS5hcHBlbmRDaGlsZChsYWJlbFByb2plY3QpO1xuICAgICAgICBmb3JtLmFwcGVuZENoaWxkKHNlbGVjdFByb2plY3QpO1xuICAgIH1cblxuICAgIGZvcm0uYXBwZW5kQ2hpbGQoY2FuY2VsQnV0dG9uKTtcbiAgICBmb3JtLmFwcGVuZENoaWxkKHN1Ym1pdEJ1dHRvbik7XG5cbiAgICBtb2RhbC5hcHBlbmRDaGlsZChmb3JtKTtcblxuICAgIHJldHVybiBtb2RhbDtcbn1cblxuZnVuY3Rpb24gYWRkUHJvamVjdE1vZGFsKCkge1xuICAgIGNvbnN0IG1vZGFsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpYWxvZ1wiKTtcbiAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvcm1cIik7XG4gICAgY29uc3QgbGFiZWxXaGF0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICAgIGNvbnN0IGlucHV0V2hhdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcblxuICAgIGlucHV0V2hhdC50eXBlID0gXCJ0ZXh0XCI7XG4gICAgbGFiZWxXaGF0LnRleHRDb250ZW50ID0gXCJXaGF0J3MgdGhlIHByb2plY3QgYWJvdXQ/XCI7XG5cbiAgICBjb25zdCBjYW5jZWxCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGNvbnN0IHN1Ym1pdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG5cbiAgICBjYW5jZWxCdXR0b24udGV4dENvbnRlbnQgPSBcIkNhbmNlbFwiO1xuICAgIHN1Ym1pdEJ1dHRvbi50ZXh0Q29udGVudCA9IFwiU3VibWl0XCI7XG4gICAgc3VibWl0QnV0dG9uLnNldEF0dHJpYnV0ZShcImlkXCIsIFwic3VibWl0LW5ldy1wcm9qZWN0XCIpO1xuICAgIHN1Ym1pdEJ1dHRvbi50eXBlID0gXCJidXR0b25cIjtcblxuXG4gICAgbW9kYWwuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJhZGQtcHJvamVjdC1kaWFsb2dcIik7XG4gICAgZm9ybS5zZXRBdHRyaWJ1dGUoXCJtZXRob2RcIiwgXCJkaWFsb2dcIik7XG5cbiAgICBmb3JtLmFwcGVuZENoaWxkKGxhYmVsV2hhdCk7XG4gICAgZm9ybS5hcHBlbmRDaGlsZChpbnB1dFdoYXQpO1xuICAgIGZvcm0uYXBwZW5kQ2hpbGQoY2FuY2VsQnV0dG9uKTtcbiAgICBmb3JtLmFwcGVuZENoaWxkKHN1Ym1pdEJ1dHRvbik7XG5cbiAgICBtb2RhbC5hcHBlbmRDaGlsZChmb3JtKTtcblxuICAgIHJldHVybiBtb2RhbDtcbn1cblxuZnVuY3Rpb24gZWRpdFRvZG9Nb2RhbCgpIHtcbiAgICBjb25zdCBtb2RhbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaWFsb2dcIik7XG4gICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIpO1xuXG4gICAgbW9kYWwuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJlZGl0LXRvZG8tZGlhbG9nXCIpO1xuICAgIGZvcm0uc2V0QXR0cmlidXRlKFwibWV0aG9kXCIsIFwiZGlhbG9nXCIpO1xufVxuXG4vLyBBbGwgdmlld3MgdXNlcnMgY2FuIGludGVyYWN0IHdpdGhcbmV4cG9ydCBmdW5jdGlvbiBkYXRlVmlldygpIHtcbiAgICAvLyByZXR1cm5zIHRoZSB0b2RvIGxpc3QsIG9yZGVyZWQgYnkgZGF0ZSBhbmQgZGl2aWRlZCBpbnRvIDQgY2F0ZWdvcmllczpcbiAgICAvLyBUb2RheSwgVGhpcyB3ZWVrLCBUaGlzIE1vbnRoIGFuZCBMYXRlclxufVxuXG5leHBvcnQgZnVuY3Rpb24gdG9kYXlWaWV3KCkge1xuICAgIC8vIHJldHVybnMgdGhlIGxpc3Qgb2YgdG9kb3MgZm9yIHRvZGF5XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcm9qZWN0c1ZpZXcoKSB7XG4gICAgLy8gcmV0dXJucyB0aGUgbGlzdCBvZiBhbGwgcHJvamVjdHNcbiAgICBjb25zdCBwcm9qZWN0cyA9IGNvbnRyb2xsZXIubGlzdFByb2plY3RzKCk7XG4gICAgY29uc3QgdWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XG4gICAgLy9jb25zdCBhZGRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBwcm9qZWN0cy5mb3JFYWNoKChwcm9qZWN0LCBpbmRleCkgPT4ge1xuICAgICAgICBjb25zdCBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgICAgICAgY29uc3QgaDMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICAgICAgICBjb25zdCBkZWxTcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgICBjb25zdCBsZWZ0U3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgICAgZGVsU3Bhbi50ZXh0Q29udGVudCA9ICcgLSc7XG4gICAgICAgIGRlbFNwYW4uc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJwcm9qZWN0LWRlbGV0ZVwiKTtcbiAgICAgICAgZGVsU3Bhbi5zZXRBdHRyaWJ1dGUoXCJkYXRhLXByb2plY3QtaW5kZXhcIiwgaW5kZXgpO1xuICAgICAgICBsZWZ0U3Bhbi50ZXh0Q29udGVudCA9IHByb2plY3Qud2hhdDtcbiAgICAgICAgbGVmdFNwYW4uYXBwZW5kQ2hpbGQoZGVsU3Bhbik7XG4gICAgICAgIGgzLmFwcGVuZENoaWxkKGxlZnRTcGFuKTtcbiAgICAgICAgaDMuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJwcm9qZWN0LWxpc3QtaDNcIik7XG4gICAgICAgIGgzLmFwcGVuZENoaWxkKGNyZWF0ZU51bWJlclNwYW4oY29udHJvbGxlci5nZXROdW1iZXJUb2Rvc0ZvclByb2plY3QoaW5kZXgpKSk7XG4gICAgICAgIGxpLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwicHJvamVjdC1saXN0LWxpXCIpO1xuICAgICAgICBoMy5zZXRBdHRyaWJ1dGUoXCJkYXRhLXByb2plY3QtaW5kZXhcIiwgaW5kZXgpO1xuICAgICAgICBsaS5hcHBlbmRDaGlsZChoMyk7XG4gICAgICAgIHVsLmFwcGVuZENoaWxkKGxpKTtcbiAgICB9KTtcbiAgICByZXR1cm4gdWw7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcm9qZWN0VG9kb3NWaWV3KGluZGV4KSB7XG4gICAgLy8gcmV0dXJucyBhIGxpc3Qgb2YgYWxsIHRvZG9zIGZvciBhIGNlcnRhaW4gcHJvamVjdFxuICAgIGNvbnN0IG15UHJvamVjdCA9IGNvbnRyb2xsZXIuZ2V0UHJvamVjdEJ5TnVtYmVyKGluZGV4KTtcbiAgICBjb25zdCB0b2RvcyA9IGNvbnRyb2xsZXIubGlzdFRvZG9zRm9yUHJvamVjdChpbmRleCk7XG4gICAgY29uc3QgYWRkQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgY29uc3QgYWRkVG9kb0RpYWxvZyA9IGFkZFRvZG9Nb2RhbChmYWxzZSwgaW5kZXgpO1xuICAgIGNvbnN0IGgyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xuICAgIGgyLnRleHRDb250ZW50ID0gbXlQcm9qZWN0LndoYXQ7XG4gICAgaDIuc2V0QXR0cmlidXRlKFwiZGF0YS1wcm9qZWN0LWluZGV4XCIsIGluZGV4KTtcbiAgICBjb25zdCB1bCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG4gICAgdWwuYXBwZW5kQ2hpbGQoaDIpO1xuICAgIGlmICh0b2Rvcy5sZW5ndGggPiAwKSB7XG4gICAgICAgIHRvZG9zLmZvckVhY2goKHRvZG8sIGluZGV4KSA9PiB7XG4gICAgICAgICAgICBjb25zdCB1bFRvZG8gPSB0b2RvVmlldyh0b2RvLCBpbmRleCk7XG4gICAgICAgICAgICB1bC5hcHBlbmRDaGlsZCh1bFRvZG8pO1xuICAgICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBjb25zb2xlLmxvZyhgTm8gdG9kb3MgZm9yIHByb2plY3QgJHtpbmRleH1gKTtcbiAgICB9XG4gICAgYWRkQnV0dG9uLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwidG9kby1hZGRcIik7XG4gICAgYWRkQnV0dG9uLnRleHRDb250ZW50ID0gXCIrIEFERCBUT0RPXCI7XG4gICAgdWwuYXBwZW5kQ2hpbGQoYWRkQnV0dG9uKTtcbiAgICB1bC5hcHBlbmRDaGlsZChhZGRUb2RvRGlhbG9nKTtcbiAgICByZXR1cm4gdWw7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0b2RvVmlldyh0b2RvLCBpbmRleCkge1xuICAgIC8vIHJldHVybnMgYSB0b2RvIHdpdGggYWxsIHRoZSBkZXRhaWxzXG4gICAgY29uc3QgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIGNvbnN0IHZhbHVlU3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICBjb25zdCB2YWx1ZXMgPSB7IFwiZGF0ZVwiOiB0b2RvLndoZW4sIFwidXJnZW50XCI6IHRvZG8udXJnZW50LCBcImRvbmVcIjogdG9kby5kb25lIH07XG4gICAgY29uc3QgdWlTcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgIGNvbnN0IGNvbnRlbnRTcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgIGNvbnN0IGNoZWNrQm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBjb25zdCBjaGVja2VkID0gKHRvZG8uZG9uZSA9PSAnWWVzJykgPyB0cnVlIDogZmFsc2U7XG4gICAgY2hlY2tCb3gudHlwZSA9ICdjaGVja2JveCc7XG4gICAgY2hlY2tCb3guc2V0QXR0cmlidXRlKFwiZGF0YS10b2RvLWluZGV4XCIsIGluZGV4KTtcbiAgICBjaGVja0JveC5jaGVja2VkID0gY2hlY2tlZDtcbiAgICB1aVNwYW4udGV4dENvbnRlbnQgPSAoXCIgKERFTClcIik7XG4gICAgdWlTcGFuLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwidG9kby1kZWxldGVcIik7XG4gICAgdWlTcGFuLnNldEF0dHJpYnV0ZShcImRhdGEtdG9kby1pbmRleFwiLCBpbmRleCk7XG4gICAgY29udGVudFNwYW4uc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJ0b2RvLWRlc2NyaXB0aW9uXCIpO1xuICAgIGNvbnRlbnRTcGFuLnRleHRDb250ZW50ID0gdG9kby53aGF0O1xuICAgIHZhbHVlU3Bhbi5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInZhbHVlLXNwYW5cIik7XG4gICAgbGkuYXBwZW5kQ2hpbGQoY2hlY2tCb3gpO1xuICAgIGxpLmFwcGVuZENoaWxkKGNvbnRlbnRTcGFuKTtcbiAgICBsaS5hcHBlbmRDaGlsZCh1aVNwYW4pO1xuICAgIE9iamVjdC52YWx1ZXModmFsdWVzKS5mb3JFYWNoKCh2YWx1ZSwgaW5kZXgpID0+IHtcbiAgICAgICAgY29uc3Qgc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgICAgc3Bhbi50ZXh0Q29udGVudCA9IHZhbHVlO1xuICAgICAgICBzcGFuLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIE9iamVjdC5rZXlzKHZhbHVlcylbaW5kZXhdKTtcbiAgICAgICAgdmFsdWVTcGFuLmFwcGVuZENoaWxkKHNwYW4pO1xuICAgIH0pO1xuICAgIGNvbnN0IGNoYW5nZVNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgY2hhbmdlU3Bhbi50ZXh0Q29udGVudCA9IFwiIChFRElUKVwiO1xuICAgIGNoYW5nZVNwYW4uc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJ0b2RvLWVkaXRcIik7XG4gICAgY2hhbmdlU3Bhbi5zZXRBdHRyaWJ1dGUoXCJkYXRhLXRvZG8tZWwtaW5kZXhcIiwgaW5kZXgpO1xuICAgIGxpLmFwcGVuZENoaWxkKGNoYW5nZVNwYW4pO1xuICAgIGxpLmFwcGVuZENoaWxkKHZhbHVlU3Bhbik7XG4gICAgcmV0dXJuIGxpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkRXZlbnRzVG9WaWV3KG5vZGUpIHtcbiAgICBjb25zdCBjb250YWluZXIgPSBub2RlO1xuICAgIGNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGV2ZW50cy5hZGRUb2RvRXZlbnQpO1xuICAgIGNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGV2ZW50cy5hZGRQcm9qZWN0RXZlbnQpO1xuICAgIGNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGV2ZW50cy5zaG93UHJvamVjdFRvZG9zRXZlbnQpO1xuICAgIC8vIGNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGV2ZW50cy5kZWxldGVUb2RvRXZlbnQpO1xuICAgIC8vIGNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGV2ZW50cy5kZWxldGVQcm9qZWN0RXZlbnQpO1xuICAgIC8vIGNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGV2ZW50cy5tYXJrRG9uZVRvZG9FdmVudCk7XG4gICAgLy8gcmV0dXJuIGNvbnRhaW5lcjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlZHJhd1NjcmVlbihwcm9qZWN0SW5kZXgpIHtcbiAgICAvLyBUT0RPIGFkZCAnY29udGVudCcgcGFyYW1ldGVyIHRvIHJlZHJhdyBzY3JlZW4gZm9yIG1haW4gY29udGVudCAhXG4gICAgY29uc3QgbWFpbkRpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudFwiKTtcbiAgICBtYWluRGl2LmlubmVySFRNTCA9IFwiXCI7XG4gICAgY3JlYXRlU2lkZWJhckNvbXBvbmVudChtYWluRGl2KTtcbiAgICBpZiAocHJvamVjdEluZGV4ID09IHVuZGVmaW5lZCkge1xuICAgICAgICBjcmVhdGVNYWluQ29udGVudChtYWluRGl2LCAwKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBjcmVhdGVNYWluQ29udGVudChtYWluRGl2LCBwcm9qZWN0SW5kZXgpO1xuICAgIH1cbiAgICBhZGRFdmVudHNUb1ZpZXcobWFpbkRpdik7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZU1haW5Db250ZW50KGNvbnRhaW5lckRpdiwgcHJvamVjdEluZGV4KSB7XG4gICAgLy8gQ3JlYXRlcyB0aGUgbWFpbiBjb250ZW50IGRpdiB3aXRoIHRoZSB0b2RvcyBvZiB0aGUgc2VsZWN0ZWQgcHJvamVjdFxuICAgIC8vIG9yIGZvciB0aGUgc2VsZWN0ZWQgdGltZSBwZXJpb2RcbiAgICAvLyBkZWZhdWx0IHZpZXcgPSBsYXN0IHByb2plY3QgdGFza3M/IFRvZGF5J3MgdGFza3M/P1xuICAgIGNvbnN0IG1haW5EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IHRhc2tzVWwgPSBwcm9qZWN0VG9kb3NWaWV3KHByb2plY3RJbmRleCk7XG5cbiAgICAvLyB0b2RvIGFkZCBwcm9qZWN0IHRpdGxlIGluIHByb2plY3R0b2Rvc3ZpdyBmdW5jdGlvblxuICAgIG1haW5EaXYuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJtYWluLXRhc2tzLWRpdlwiKTtcbiAgICBtYWluRGl2LmFwcGVuZENoaWxkKHRhc2tzVWwpO1xuXG4gICAgY29udGFpbmVyRGl2LmFwcGVuZENoaWxkKG1haW5EaXYpO1xufVxuXG5cbmZ1bmN0aW9uIGNyZWF0ZVNpZGViYXJDb21wb25lbnQoY29udGFpbmVyRGl2KSB7XG4gICAgLy8gQ3JlYXRlcyB0aGUgc2lkZWJhciB3aXRoIHByb2plY3QgbGlzdCwgYWRkIHRhc2sgaW5wdXQsIHRvZGF5LCBmdXR1cmVcbiAgICBjb25zdCBoZWFkZXJIMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgICBjb25zdCBzaWRlYmFyRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCBhZGRUYXNrRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCBwcm9qZWN0TGlzdERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29uc3QgdG9kYXlEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IGZ1dHVyZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29uc3QgYWRkVGFza1AgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBjb25zdCBwcm9qZWN0TGlzdFVsID0gcHJvamVjdHNWaWV3KCk7XG4gICAgY29uc3QgcHJvamVjdHNIMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcbiAgICBjb25zdCB0b2RheUgyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xuICAgIGNvbnN0IGZ1dHVyZUgyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xuICAgIGNvbnN0IGFkZFRvZG9EaWFsb2cgPSBhZGRUb2RvTW9kYWwodHJ1ZSk7XG4gICAgY29uc3QgYWRkUHJvamVjdERpYWxvZyA9IGFkZFByb2plY3RNb2RhbCgpO1xuXG4gICAgc2lkZWJhckRpdi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInNpZGViYXJcIik7XG4gICAgYWRkVGFza0Rpdi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImFkZC10YXNrXCIpO1xuICAgIHRvZGF5RGl2LnNldEF0dHJpYnV0ZShcImlkXCIsIFwidG9kYXktZGl2XCIpO1xuICAgIGZ1dHVyZURpdi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImZ1dHVyZS1kaXZcIik7XG4gICAgcHJvamVjdExpc3REaXYuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJwcm9qZWN0LWxpc3RcIik7XG4gICAgdG9kYXlEaXYuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJ0YXNrcy1mb3ItdG9kYXlcIik7XG4gICAgZnV0dXJlRGl2LnNldEF0dHJpYnV0ZShcImlkXCIsIFwiZnV0dXJlLXRhc2tzXCIpO1xuXG4gICAgYWRkVGFza1AuaW5uZXJIVE1MID0gXCJBZGQgYSB0YXNrIDxzcGFuIGNsYXNzPSdmYXQtcGx1cycgaWQ9J2FkZC10YXNrJz4rPC9zcGFuPlwiO1xuICAgIGFkZFRhc2tEaXYuYXBwZW5kQ2hpbGQoYWRkVGFza1ApO1xuICAgIGFkZFRhc2tEaXYuYXBwZW5kQ2hpbGQoYWRkVG9kb0RpYWxvZyk7XG4gICAgdG9kYXlIMi50ZXh0Q29udGVudCA9IFwiVG9kYXkncyBUYXNrc1wiO1xuICAgIHRvZGF5SDIuYXBwZW5kQ2hpbGQoY3JlYXRlTnVtYmVyU3BhbigxMikpO1xuICAgIGZ1dHVyZUgyLnRleHRDb250ZW50ID0gXCJUYXNrcyBmb3IgbGF0ZXJcIjtcbiAgICBmdXR1cmVIMi5hcHBlbmRDaGlsZChjcmVhdGVOdW1iZXJTcGFuKDk5KSk7XG5cblxuICAgIHByb2plY3RzSDIuaW5uZXJIVE1MID0gXCJQcm9qZWN0cyA8c3BhbiBjbGFzcz0nZmF0LXBsdXMnIGlkPSdhZGQtcHJvamVjdCc+Kzwvc3Bhbj5cIjtcbiAgICBwcm9qZWN0c0gyLnNldEF0dHJpYnV0ZShcImlkXCIsIFwicHJvamVjdHMtaDJcIik7XG4gICAgdG9kYXlEaXYuYXBwZW5kQ2hpbGQodG9kYXlIMik7XG4gICAgZnV0dXJlRGl2LmFwcGVuZENoaWxkKGZ1dHVyZUgyKTtcbiAgICBwcm9qZWN0TGlzdERpdi5hcHBlbmRDaGlsZChwcm9qZWN0c0gyKTtcbiAgICBwcm9qZWN0TGlzdERpdi5hcHBlbmRDaGlsZChwcm9qZWN0TGlzdFVsKTtcbiAgICBoZWFkZXJIMS50ZXh0Q29udGVudCA9IFwiTXkgVE9ETyBsaXN0XCI7XG5cbiAgICBzaWRlYmFyRGl2LmFwcGVuZENoaWxkKGhlYWRlckgxKTtcbiAgICBzaWRlYmFyRGl2LmFwcGVuZENoaWxkKGFkZFRhc2tEaXYpO1xuICAgIHNpZGViYXJEaXYuYXBwZW5kQ2hpbGQodG9kYXlEaXYpO1xuICAgIHNpZGViYXJEaXYuYXBwZW5kQ2hpbGQoZnV0dXJlRGl2KTtcbiAgICBzaWRlYmFyRGl2LmFwcGVuZENoaWxkKHByb2plY3RMaXN0RGl2KTtcbiAgICBzaWRlYmFyRGl2LmFwcGVuZENoaWxkKGFkZFByb2plY3REaWFsb2cpO1xuXG4gICAgY29udGFpbmVyRGl2LmFwcGVuZENoaWxkKHNpZGViYXJEaXYpO1xufVxuXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4vYXBwLmpzJztcbmltcG9ydCBjc3MgZnJvbSAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0ICogYXMgdmlld3MgZnJvbSAnLi92aWV3cy5qcyc7XG5cbmNvbnN0IG1haW5EaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnRcIik7XG5jb25zdCBoMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbmgxLnRleHRDb250ZW50ID0gXCJNeSBQcm9qZWN0c1wiO1xuY29uc3QgdWwgPSB2aWV3cy5yZWRyYXdTY3JlZW4oKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=