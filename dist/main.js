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
const defaultProject = _controller_js__WEBPACK_IMPORTED_MODULE_0__.projectCreate('home');
// add second project and third project
const second = _controller_js__WEBPACK_IMPORTED_MODULE_0__.projectCreate("work");
const third = _controller_js__WEBPACK_IMPORTED_MODULE_0__.projectCreate("pc");

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

function addIcon(iconName) {
    const i = document.createElement("i");
    const iconClass = `iconoir-${iconName}`;
    i.setAttribute("class", iconClass);
    console.log(i);
    return i;
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
        const icon = addIcon("at-sign");
        const plusIcon = addIcon("plus-circle");
        const trashIcon = addIcon("trash");
        const projectWhat = document.createTextNode(project.what);
        delSpan.appendChild(trashIcon);
        delSpan.setAttribute("class", "project-delete");
        delSpan.setAttribute("data-project-index", index);
        leftSpan.appendChild(projectWhat);
        leftSpan.insertBefore(icon, projectWhat);
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
    const atIcon = addIcon("at-sign");
    const projectWhat = document.createTextNode(myProject.what);
    h2.appendChild(atIcon);
    h2.appendChild(projectWhat);
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
    const addTaskPContent = document.createTextNode("Add a Task");
    const plusIcon = addIcon("plus-circle");

    addTaskDiv.setAttribute("id", "add-task");
    sidebarDiv.setAttribute("id", "sidebar");
    todayDiv.setAttribute("id", "today-div");
    futureDiv.setAttribute("id", "future-div");
    projectListDiv.setAttribute("id", "project-list");
    todayDiv.setAttribute("id", "tasks-for-today");
    futureDiv.setAttribute("id", "future-tasks");

    addTaskP.appendChild(addTaskPContent);
    addTaskP.appendChild(plusIcon);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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VCxNQUFNO0FBQ04sNENBQTRDLE1BQU07QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBLHdDQUF3QyxvREFBbUI7QUFDM0Qsd0NBQXdDLHVEQUFzQjtBQUM5RCx3Q0FBd0MsNkRBQTRCO0FBQ3BFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7OztVQzFUQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7Ozs7Ozs7Ozs7QUNBa0I7QUFDWTtBQUNNOztBQUVwQztBQUNBO0FBQ0E7QUFDQSxXQUFXLG1EQUFrQixHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWFwcC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL29kaW4tdG9kby1hcHAvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL29kaW4tdG9kby1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL29kaW4tdG9kby1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tYXBwLy4vc3JjL2FwcC5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tYXBwLy4vc3JjL2NvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWFwcC8uL3NyYy9kYi5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tYXBwLy4vc3JjL2V2ZW50cy5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tYXBwLy4vc3JjL3Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWFwcC8uL3NyYy90b2RvLmpzIiwid2VicGFjazovL29kaW4tdG9kby1hcHAvLi9zcmMvdmlld3MuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWFwcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9vZGluLXRvZG8tYXBwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL29kaW4tdG9kby1hcHAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL29kaW4tdG9kby1hcHAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9vZGluLXRvZG8tYXBwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWFwcC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWFwcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgOnJvb3Qge1xuICAgIC0tZ3JlZW5lcjogI2FkZWY5MztcbiAgICAtLWdyZWVuOiAjYmVmMmE5O1xuICAgIC0tZ3JlZW5ncmVlbnllbGxvdzogI2NhZjJhOTtcbiAgICAtLWdyZWVueWVsbG93OiAjZGFmMmE5O1xuICAgIC0teWVsbG93Z3JlZW46ICNlYWYyYTk7XG4gICAgLS15ZWxsb3c6ICNlZWYyYTk7XG4gICAgLS1hY2NlbnQ6ICNlODY3OGM7XG4gICAgLS1kYXJrdHlwZTogIzEzMTgxMDtcbiAgICAtLXR5cGU6ICMyYTJmMjc7XG4gICAgLS1saWdodHR5cGU6ICM4OThiODc7XG4gICAgLS1iYWNrZ3JvdW5kOiAjZjhmZGY2O1xufVxuXG5cblxuaDM6aGFzKGlucHV0OmNoZWNrZWQpIHtcbiAgICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcbn1cblxuYm9keSB7XG4gICAgbWFyZ2luOiAwO1xuICAgIGNvbG9yOiB2YXIoLS10eXBlKTtcbiAgICBmb250LXNpemU6IDFlbTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kKTtcbiAgICBmb250LWZhbWlseTogJ0FyaWFsJztcbn1cblxuI2NvbnRlbnQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbn1cblxuI3NpZGViYXIge1xuICAgIHBhZGRpbmc6IDJyZW0gMCAwIDA7XG4gICAgZmxleDogMzB2dztcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ncmVlbmdyZWVueWVsbG93KTtcbn1cblxuaDEsXG5oMixcbmgzLFxucCB7XG4gICAgcGFkZGluZzogMC41cmVtIDFyZW0gMC41cmVtIDJyZW07XG4gICAgbWFyZ2luOiAwO1xufVxuXG4jc2lkZWJhciBoMzpob3ZlcixcbiNzaWRlYmFyIGgyOmhvdmVyLFxuI2FkZC10YXNrPnA6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWdyZWVuZXIpO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuI3NpZGViYXIgaDEsXG4jc2lkZWJhciBoMixcbiNzaWRlYmFyIGgzLFxuI3NpZGViYXIgcCB7XG4gICAgZm9udC1zaXplOiAxZW07XG59XG5cbnNwYW4ubnVtYmVyIHtcbiAgICBjb2xvcjogdmFyKC0tbGlnaHR0eXBlKTtcbiAgICBmb250LXdlaWdodDogMTAwO1xuICAgIGp1c3RpZnktc2VsZjogcmlnaHQ7XG59XG5cbiNwcm9qZWN0cy1oMiB7XG4gICAgY29sb3I6IHZhcigtLWxpZ2h0dHlwZSk7XG4gICAgcGFkZGluZy10b3A6IDFyZW07XG59XG5cbiNzaWRlYmFyIGgyLFxuI3NpZGViYXIgcCxcbi5wcm9qZWN0LWxpc3QtaDMge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG4ucHJvamVjdC1kZWxldGUge1xuICAgIGNvbG9yOiB2YXIoLS1saWdodHR5cGUpO1xufVxuXG4ucHJvamVjdC1kZWxldGU6aG92ZXIsXG4jYWRkLXRhc2s6aG92ZXIsXG4jYWRkLXByb2plY3Q6aG92ZXIge1xuICAgIGNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kKTtcbn1cblxudWw+bGkge1xuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG59XG5cbnVsIHtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZy1sZWZ0OiAwO1xufVxuXG4jbWFpbi10YXNrcy1kaXYge1xuICAgIGZsZXg6IDcwdnc7XG4gICAgcGFkZGluZy10b3A6IDJyZW07XG59XG5cbiNtYWluLXRhc2tzLWRpdiBsaSB7XG4gICAgcGFkZGluZy1sZWZ0OiAycmVtO1xuICAgIHBhZGRpbmctYm90dG9tOiAwLjVyZW07XG59XG5cbmJ1dHRvbi50b2RvLWFkZCB7XG4gICAgbWFyZ2luLWxlZnQ6IDJyZW07XG59XG5cbiNhZGQtdGFzaz5wIHtcbiAgICBjb2xvcjogdmFyKC0tYWNjZW50KTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ncmVlbik7XG4gICAgcGFkZGluZy10b3A6IDFyZW07XG4gICAgcGFkZGluZy1ib3R0b206IDFyZW07XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQiwyQkFBMkI7SUFDM0Isc0JBQXNCO0lBQ3RCLHNCQUFzQjtJQUN0QixpQkFBaUI7SUFDakIsaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2Ysb0JBQW9CO0lBQ3BCLHFCQUFxQjtBQUN6Qjs7OztBQUlBO0lBQ0ksNkJBQTZCO0FBQ2pDOztBQUVBO0lBQ0ksU0FBUztJQUNULGtCQUFrQjtJQUNsQixjQUFjO0lBQ2QsbUNBQW1DO0lBQ25DLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLFVBQVU7SUFDVix5Q0FBeUM7QUFDN0M7O0FBRUE7Ozs7SUFJSSxnQ0FBZ0M7SUFDaEMsU0FBUztBQUNiOztBQUVBOzs7SUFHSSxnQ0FBZ0M7SUFDaEMsZUFBZTtBQUNuQjs7QUFFQTs7OztJQUlJLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSx1QkFBdUI7SUFDdkIsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLHVCQUF1QjtJQUN2QixpQkFBaUI7QUFDckI7O0FBRUE7OztJQUdJLGFBQWE7SUFDYiw4QkFBOEI7QUFDbEM7O0FBRUE7SUFDSSx1QkFBdUI7QUFDM0I7O0FBRUE7OztJQUdJLHdCQUF3QjtBQUM1Qjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLFNBQVM7SUFDVCxlQUFlO0FBQ25COztBQUVBO0lBQ0ksVUFBVTtJQUNWLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxvQkFBb0I7SUFDcEIsOEJBQThCO0lBQzlCLGlCQUFpQjtJQUNqQixvQkFBb0I7QUFDeEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiOnJvb3Qge1xcbiAgICAtLWdyZWVuZXI6ICNhZGVmOTM7XFxuICAgIC0tZ3JlZW46ICNiZWYyYTk7XFxuICAgIC0tZ3JlZW5ncmVlbnllbGxvdzogI2NhZjJhOTtcXG4gICAgLS1ncmVlbnllbGxvdzogI2RhZjJhOTtcXG4gICAgLS15ZWxsb3dncmVlbjogI2VhZjJhOTtcXG4gICAgLS15ZWxsb3c6ICNlZWYyYTk7XFxuICAgIC0tYWNjZW50OiAjZTg2NzhjO1xcbiAgICAtLWRhcmt0eXBlOiAjMTMxODEwO1xcbiAgICAtLXR5cGU6ICMyYTJmMjc7XFxuICAgIC0tbGlnaHR0eXBlOiAjODk4Yjg3O1xcbiAgICAtLWJhY2tncm91bmQ6ICNmOGZkZjY7XFxufVxcblxcblxcblxcbmgzOmhhcyhpbnB1dDpjaGVja2VkKSB7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBjb2xvcjogdmFyKC0tdHlwZSk7XFxuICAgIGZvbnQtc2l6ZTogMWVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kKTtcXG4gICAgZm9udC1mYW1pbHk6ICdBcmlhbCc7XFxufVxcblxcbiNjb250ZW50IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG59XFxuXFxuI3NpZGViYXIge1xcbiAgICBwYWRkaW5nOiAycmVtIDAgMCAwO1xcbiAgICBmbGV4OiAzMHZ3O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ncmVlbmdyZWVueWVsbG93KTtcXG59XFxuXFxuaDEsXFxuaDIsXFxuaDMsXFxucCB7XFxuICAgIHBhZGRpbmc6IDAuNXJlbSAxcmVtIDAuNXJlbSAycmVtO1xcbiAgICBtYXJnaW46IDA7XFxufVxcblxcbiNzaWRlYmFyIGgzOmhvdmVyLFxcbiNzaWRlYmFyIGgyOmhvdmVyLFxcbiNhZGQtdGFzaz5wOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZ3JlZW5lcik7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuI3NpZGViYXIgaDEsXFxuI3NpZGViYXIgaDIsXFxuI3NpZGViYXIgaDMsXFxuI3NpZGViYXIgcCB7XFxuICAgIGZvbnQtc2l6ZTogMWVtO1xcbn1cXG5cXG5zcGFuLm51bWJlciB7XFxuICAgIGNvbG9yOiB2YXIoLS1saWdodHR5cGUpO1xcbiAgICBmb250LXdlaWdodDogMTAwO1xcbiAgICBqdXN0aWZ5LXNlbGY6IHJpZ2h0O1xcbn1cXG5cXG4jcHJvamVjdHMtaDIge1xcbiAgICBjb2xvcjogdmFyKC0tbGlnaHR0eXBlKTtcXG4gICAgcGFkZGluZy10b3A6IDFyZW07XFxufVxcblxcbiNzaWRlYmFyIGgyLFxcbiNzaWRlYmFyIHAsXFxuLnByb2plY3QtbGlzdC1oMyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuLnByb2plY3QtZGVsZXRlIHtcXG4gICAgY29sb3I6IHZhcigtLWxpZ2h0dHlwZSk7XFxufVxcblxcbi5wcm9qZWN0LWRlbGV0ZTpob3ZlcixcXG4jYWRkLXRhc2s6aG92ZXIsXFxuI2FkZC1wcm9qZWN0OmhvdmVyIHtcXG4gICAgY29sb3I6IHZhcigtLWJhY2tncm91bmQpO1xcbn1cXG5cXG51bD5saSB7XFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcblxcbnVsIHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nLWxlZnQ6IDA7XFxufVxcblxcbiNtYWluLXRhc2tzLWRpdiB7XFxuICAgIGZsZXg6IDcwdnc7XFxuICAgIHBhZGRpbmctdG9wOiAycmVtO1xcbn1cXG5cXG4jbWFpbi10YXNrcy1kaXYgbGkge1xcbiAgICBwYWRkaW5nLWxlZnQ6IDJyZW07XFxuICAgIHBhZGRpbmctYm90dG9tOiAwLjVyZW07XFxufVxcblxcbmJ1dHRvbi50b2RvLWFkZCB7XFxuICAgIG1hcmdpbi1sZWZ0OiAycmVtO1xcbn1cXG5cXG4jYWRkLXRhc2s+cCB7XFxuICAgIGNvbG9yOiB2YXIoLS1hY2NlbnQpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ncmVlbik7XFxuICAgIHBhZGRpbmctdG9wOiAxcmVtO1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMXJlbTtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCAqIGFzIGNvbnRyb2xsZXIgZnJvbSAnLi9jb250cm9sbGVyLmpzJztcblxuLy8gQ3JlYXRlIGEgZGVmYXVsdCBwcm9qZWN0XG5jb25zdCBkZWZhdWx0UHJvamVjdCA9IGNvbnRyb2xsZXIucHJvamVjdENyZWF0ZSgnaG9tZScpO1xuLy8gYWRkIHNlY29uZCBwcm9qZWN0IGFuZCB0aGlyZCBwcm9qZWN0XG5jb25zdCBzZWNvbmQgPSBjb250cm9sbGVyLnByb2plY3RDcmVhdGUoXCJ3b3JrXCIpO1xuY29uc3QgdGhpcmQgPSBjb250cm9sbGVyLnByb2plY3RDcmVhdGUoXCJwY1wiKTtcblxuLy8gQ3JlYXRlIGEgZHVtbXkgdG9kb1xuY29uc3QgZGVmYXVsdFRvZG8gPSBjb250cm9sbGVyLnRvZG9DcmVhdGUoJ0RvIHRoZSBkaXNoZXMnLCAnTm93JywgZGVmYXVsdFByb2plY3QpO1xuY29uc3Qgc2Vjb25kVG9kbyA9IGNvbnRyb2xsZXIudG9kb0NyZWF0ZSgnQ2hlY2sgbXkgZW1haWwnLCAnVG9kYXknLCBzZWNvbmQpO1xuY29uc3QgdGhpcmRUb2RvID0gY29udHJvbGxlci50b2RvQ3JlYXRlKCdDcmVhdGUgYmFja3VwIGZyb20gcGMgdG8gU0REJywgJ05leHQgd2VlaycsIHRoaXJkKTtcbmNvbnN0IGZvdXJ0aFRvZG8gPSBjb250cm9sbGVyLnRvZG9DcmVhdGUoJ0NoZWNrIG9uIEVCYXkgZm9yIG5ldyBrZXlib2FyZCcsICdUb21vcnJvdycsIHRoaXJkKTsiLCIvLyBBbGwgdGhlIGFjdGlvbnMgdXNlcnMgY2FuIHVuZGVydGFrZVxuaW1wb3J0IHsgVG9kbyB9IGZyb20gJy4vdG9kby5qcyc7XG5pbXBvcnQgeyBQcm9qZWN0IH0gZnJvbSAnLi9wcm9qZWN0LmpzJztcbmltcG9ydCB7IGRlZmF1bHQgYXMgREIgfSBmcm9tICcuL2RiLmpzJztcblxuLy8gVG9kbyBhY3Rpb25zXG4vLyBUT0RPIE1ha2UgZXZlcnkgZnVuY3Rpb24gcmV0dXJuIHNvbWV0aGluZ1xuXG5leHBvcnQgZnVuY3Rpb24gdG9kb0lzRG9uZSh0b2RvKSB7XG4gICAgdG9kby5kb25lID0gJ1llcyc7XG4gICAgcmV0dXJuIHRvZG87XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0b2RvRGVsZXRlKHByb2plY3QsIHRvZG9JbmRleCkge1xuICAgIHByb2plY3QuZGVsZXRlKHRvZG9JbmRleCk7XG4gICAgcmV0dXJuIHByb2plY3Q7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0b2RvQ3JlYXRlKHdoYXQsIHdoZW4sIHByb2plY3QpIHtcbiAgICBjb25zdCB0b2RvID0gbmV3IFRvZG8od2hhdCwgd2hlbik7XG4gICAgcHJvamVjdC5hZGQodG9kbyk7XG4gICAgcmV0dXJuIHByb2plY3Q7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0b2RvRWRpdCh0b2RvLCB3aGF0LCB3aGVuLCB1cmdlbnQpIHtcbiAgICAvLyBUT0RPOiB0aGluayBvZiBzb21lIGRlZmF1bHRzP1xuICAgIHRvZG8ud2hhdCA9IHdoYXQ7XG4gICAgdG9kby53aGVuID0gd2hlbjtcbiAgICB0b2RvLnVyZ2VudCA9IHVyZ2VudDtcbiAgICByZXR1cm4gdG9kbztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByb2plY3RUb2RvTWFya0RvbmUodG9kb0luZGV4LCBwcm9qZWN0SW5kZXgpIHtcbiAgICBjb25zdCBwcm9qZWN0ID0gZ2V0UHJvamVjdEJ5TnVtYmVyKHByb2plY3RJbmRleCk7XG4gICAgY29uc3QgdG9kbyA9IHByb2plY3QudG9kbyh0b2RvSW5kZXgpO1xuICAgIHRvZG9Jc0RvbmUodG9kbyk7XG4gICAgY29uc29sZS5sb2coYFRvZG8gJHt0b2RvLndoYXR9IGlzIG1hcmtlZCBhcyBkb25lLmApO1xufVxuXG4vLyBMaXN0c1xuXG5leHBvcnQgZnVuY3Rpb24gbGlzdFRvZG9zRm9yUHJvamVjdChudW1iZXIpIHtcbiAgICBjb25zdCBteVByb2plY3QgPSBEQi5nZXRQcm9qZWN0QnlOdW1iZXIobnVtYmVyKTtcbiAgICByZXR1cm4gbXlQcm9qZWN0LndoaWNoO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0TnVtYmVyVG9kb3NGb3JQcm9qZWN0KHByb2plY3RJbmRleCkge1xuICAgIHJldHVybiBsaXN0VG9kb3NGb3JQcm9qZWN0KHByb2plY3RJbmRleCkubGVuZ3RoO1xufVxuXG4vLyBUT0RPXG5leHBvcnQgZnVuY3Rpb24gbGlzdFRvZG9zQnlEYXRlKCkgeyB9XG5cblxuZXhwb3J0IGZ1bmN0aW9uIGxpc3RQcm9qZWN0cygpIHtcbiAgICByZXR1cm4gREIubGlzdFByb2plY3RzKCk7XG59XG5cbi8vIFByb2plY3QgYWN0aW9uc1xuXG5leHBvcnQgZnVuY3Rpb24gcHJvamVjdENyZWF0ZShuYW1lKSB7XG4gICAgY29uc3QgcHJvamVjdCA9IG5ldyBQcm9qZWN0KG5hbWUpO1xuICAgIERCLmFkZFByb2plY3QocHJvamVjdCk7XG4gICAgcmV0dXJuIHByb2plY3Q7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcm9qZWN0RGVsZXRlKHByb2plY3QpIHtcbiAgICBEQi5kZWxldGVQcm9qZWN0KHByb2plY3QpO1xuICAgIHByb2plY3QgPSBudWxsO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcHJvamVjdEVkaXQocHJvamVjdCwgbmFtZSkge1xuICAgIHByb2plY3Qud2hhdCA9IG5hbWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcm9qZWN0QWRkVG9kbyhwcm9qZWN0LCB0b2RvKSB7XG4gICAgcHJvamVjdC5hZGQodG9kbyk7XG4gICAgcmV0dXJuIHByb2plY3Q7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRQcm9qZWN0QnlOdW1iZXIobnVtYmVyKSB7XG4gICAgcmV0dXJuIERCLmdldFByb2plY3RCeU51bWJlcihudW1iZXIpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0UHJvamVjdENvdW50KCkge1xuICAgIHJldHVybiBEQi5nZXRQcm9qZWN0Q291bnQoKTtcbn0iLCIvLyBDb250YWluZXIgZm9yIGFsbCBwcm9qZWN0cyBhbmQgdG9kb3Ncbi8vIHVuaXF1ZSBDTEFTUyBpbnN0YW5jZSBTSU5HTEVUT05cbmxldCBpbnN0YW5jZTtcbmxldCBwcm9qZWN0cyA9IFtdO1xuY2xhc3MgREIge1xuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHRpZiAoaW5zdGFuY2UpIHtcblx0XHRcdHRocm93IG5ldyBFcnJvcihcIk5ldyBpbnN0YW5jZSBjYW5ub3QgYmUgY3JlYXRlZCFcIik7XG5cdFx0fVxuXHRcdGluc3RhbmNlID0gdGhpcztcblx0fVxuXHRhZGRQcm9qZWN0KHByb2plY3QpIHtcblx0XHRwcm9qZWN0cy5wdXNoKHByb2plY3QpO1xuXHRcdGNvbnNvbGUubG9nKGBQcm9qZWN0ICR7cHJvamVjdC53aGF0fSBzdWNjZXNzZnVsbHkgYWRkZWQgdG8gREIhYCk7XG5cdH1cblx0ZGVsZXRlUHJvamVjdChwcm9qZWN0KSB7XG5cdFx0bGV0IGluZGV4ID0gcHJvamVjdHMuaW5kZXhPZihwcm9qZWN0KTtcblx0XHRpZiAoaW5kZXggIT09IC0xKSB7XG5cdFx0XHRwcm9qZWN0cy5zcGxpY2UoaW5kZXgsIDEpO1xuXHRcdFx0Y29uc29sZS5sb2coYFByb2plY3QgJHtwcm9qZWN0LndoYXR9IHN1Y2Nlc3NmdWxseSByZW1vdmVkIGZyb20gREIhYCk7XG5cdFx0fVxuXG5cdH1cblx0bGlzdFByb2plY3RzKCkge1xuXHRcdHJldHVybiBwcm9qZWN0cztcblx0fVxuXG5cdGV4aXN0c1Byb2plY3QobmFtZSkge1xuXHRcdGlmIChwcm9qZWN0cy5maW5kKHByb2plY3QgPT4gcHJvamVjdC53aGF0ID09PSBuYW1lKSkge1xuXHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0fVxuXHRcdHJldHVybiBmYWxzZTtcblx0fVxuXG5cdGdldFByb2plY3RCeU51bWJlcihudW1iZXIpIHtcblx0XHRyZXR1cm4gcHJvamVjdHNbbnVtYmVyXTtcblx0fVxuXG5cdGdldFByb2plY3RDb3VudCgpIHtcblx0XHRyZXR1cm4gcHJvamVjdHMubGVuZ3RoO1xuXHR9XG59XG5sZXQgREJJbnN0YW5jZSA9IE9iamVjdC5mcmVlemUobmV3IERCKCkpO1xuXG5leHBvcnQgZGVmYXVsdCBEQkluc3RhbmNlO1xuIiwiaW1wb3J0ICogYXMgdmlld3MgZnJvbSAnLi92aWV3cy5qcyc7XG5pbXBvcnQgKiBhcyBjb250cm9sbGVyIGZyb20gJy4vY29udHJvbGxlci5qcyc7XG5cblxuLy8gSEVMUEVSIEZVTkNUSU9OU1xuXG5mdW5jdGlvbiBnZXRQcm9qZWN0KHRhcmdldCkge1xuICAgIC8vIEdldHMgdGhlIHByb2plY3Qgb3V0IG9mIHRoZSBEb20gdHJlZVxuICAgIGNvbnN0IHByb2plY3RMaSA9IHRhcmdldC5jbG9zZXN0KFwiaDIgKyB1bFwiKS5wYXJlbnRFbGVtZW50O1xuICAgIGNvbnN0IHByb2plY3RJZCA9IHByb2plY3RMaS5xdWVyeVNlbGVjdG9yKFwic3BhblwiKS5kYXRhc2V0LnByb2plY3RJbmRleDtcbiAgICBjb25zdCBteVByb2plY3QgPSBjb250cm9sbGVyLmdldFByb2plY3RCeU51bWJlcihwcm9qZWN0SWQpO1xuICAgIHJldHVybiBteVByb2plY3Q7XG59XG5cbmZ1bmN0aW9uIGdldFByb2plY3RJbmRleCh0YXJnZXQpIHtcbiAgICAvLyBHZXRzIHRoZSBwcm9qZWN0IGluZGV4IG91dCBvZiB0aGUgRG9tIHRyZWVcbiAgICBjb25zdCBwcm9qZWN0TGkgPSB0YXJnZXQuY2xvc2VzdChcImgyICsgdWxcIikucGFyZW50RWxlbWVudDtcbiAgICByZXR1cm4gcHJvamVjdExpLnF1ZXJ5U2VsZWN0b3IoXCJzcGFuXCIpLmRhdGFzZXQucHJvamVjdEluZGV4O1xufVxuXG4vLyBFVkVOVCBIQU5ETEVSU1xuXG5leHBvcnQgZnVuY3Rpb24gYWRkVG9kb0V2ZW50KGV2ZW50KSB7XG5cbiAgICBjb25zdCB0YXJnZXQgPSBldmVudC50YXJnZXQ7XG4gICAgbGV0IG1vZGFsID0gXCJcIjtcblxuICAgIGlmICh0YXJnZXQuaWQgPT0gXCJhZGQtdGFza1wiKSB7XG4gICAgICAgIG1vZGFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhZGQtbWFpbi10b2RvLWRpYWxvZ1wiKTtcbiAgICAgICAgbW9kYWwuc2hvd01vZGFsKCk7XG4gICAgICAgIG1vZGFsLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgIGlmIChldmVudC50YXJnZXQuY2xhc3NOYW1lID09IFwiYWRkLXRvZG8tYnV0dG9uXCIpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBwcm9qZWN0SW5kZXggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2FkZC1tYWluLXRvZG8tZGlhbG9nIGZvcm0gc2VsZWN0XCIpLnZhbHVlO1xuICAgICAgICAgICAgICAgIGNvbnN0IHByb2plY3QgPSBjb250cm9sbGVyLmdldFByb2plY3RCeU51bWJlcihwcm9qZWN0SW5kZXgpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHByb2plY3RJbmRleCk7XG4gICAgICAgICAgICAgICAgY29uc3Qgd2hhdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYWRkLW1haW4tdG9kby1kaWFsb2cgZm9ybSBpbnB1dFwiKS52YWx1ZTtcbiAgICAgICAgICAgICAgICBjb25zdCB3aGVuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNhZGQtbWFpbi10b2RvLWRpYWxvZyBmb3JtIGlucHV0K2xhYmVsK2lucHV0XCIpLnZhbHVlO1xuICAgICAgICAgICAgICAgIGlmICghd2hhdCB8fCAhd2hlbikge1xuICAgICAgICAgICAgICAgICAgICBhbGVydChcIm5vIGZvcm0gZGF0YVwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRyb2xsZXIudG9kb0NyZWF0ZSh3aGF0LCB3aGVuLCBwcm9qZWN0KTtcbiAgICAgICAgICAgICAgICAgICAgdmlld3MucmVkcmF3U2NyZWVuKHByb2plY3RJbmRleCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH1cbiAgICBlbHNlIGlmICh0YXJnZXQuY2xhc3NOYW1lID09IFwidG9kby1hZGRcIikge1xuICAgICAgICBtb2RhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWRkLXRvZG8tZGlhbG9nXCIpO1xuICAgICAgICBtb2RhbC5zaG93TW9kYWwoKTtcbiAgICAgICAgY29uc3QgcHJvamVjdEluZGV4ID0gbW9kYWwucGFyZW50RWxlbWVudC5maXJzdENoaWxkLmRhdGFzZXQucHJvamVjdEluZGV4O1xuICAgICAgICBtb2RhbC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICBpZiAoZXZlbnQudGFyZ2V0LmNsYXNzTmFtZSA9PSBcImFkZC10b2RvLWJ1dHRvblwiKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgcHJvamVjdCA9IGNvbnRyb2xsZXIuZ2V0UHJvamVjdEJ5TnVtYmVyKHByb2plY3RJbmRleCk7XG4gICAgICAgICAgICAgICAgY29uc3Qgd2hhdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYWRkLXRvZG8tZGlhbG9nIGZvcm0gaW5wdXRcIikudmFsdWU7XG4gICAgICAgICAgICAgICAgY29uc3Qgd2hlbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYWRkLXRvZG8tZGlhbG9nIGZvcm0gaW5wdXQrbGFiZWwraW5wdXRcIikudmFsdWU7XG4gICAgICAgICAgICAgICAgaWYgKCF3aGF0IHx8ICF3aGVuKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIHRvZG8gbWFrZSB0aGlzIG1vcmUgZWxlZ2FudFxuICAgICAgICAgICAgICAgICAgICBhbGVydChcIkZvcm0gZGF0YSBtaXNzaW5nXCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgY29udHJvbGxlci50b2RvQ3JlYXRlKHdoYXQsIHdoZW4sIHByb2plY3QpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB2aWV3cy5yZWRyYXdTY3JlZW4ocHJvamVjdEluZGV4KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzaG93UHJvamVjdFRvZG9zRXZlbnQoZXZlbnQpIHtcbiAgICAvLyBjb25zdCBwcm9qZWN0c0RpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvamVjdC1saXN0XCIpO1xuICAgIGNvbnN0IHRhcmdldCA9IGV2ZW50LnRhcmdldDtcbiAgICBpZiAodGFyZ2V0LmNsYXNzTmFtZSA9PSBcInByb2plY3QtbGlzdC1oM1wiKSB7XG4gICAgICAgIHZpZXdzLnJlZHJhd1NjcmVlbih0YXJnZXQuZGF0YXNldC5wcm9qZWN0SW5kZXgpO1xuICAgIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZFByb2plY3RFdmVudChldmVudCkge1xuICAgIC8vIGFkZCBhIHByb2plY3QgaW4gdGhlIEdVSVxuICAgIGNvbnN0IHRhcmdldCA9IGV2ZW50LnRhcmdldDtcbiAgICBpZiAodGFyZ2V0LmlkID09IFwiYWRkLXByb2plY3RcIikge1xuICAgICAgICBjb25zdCBtb2RhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWRkLXByb2plY3QtZGlhbG9nXCIpO1xuICAgICAgICBtb2RhbC5zaG93TW9kYWwoKTtcbiAgICAgICAgbW9kYWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgIGlmIChldmVudC50YXJnZXQuaWQgPT0gXCJzdWJtaXQtbmV3LXByb2plY3RcIikge1xuICAgICAgICAgICAgICAgIGNvbnN0IHdoYXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2FkZC1wcm9qZWN0LWRpYWxvZyBmb3JtIGlucHV0XCIpLnZhbHVlO1xuICAgICAgICAgICAgICAgIGlmICghd2hhdCkge1xuICAgICAgICAgICAgICAgICAgICBhbGVydChcIkZvcm0gRGF0YSBNSVNTSU5HXCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgY29udHJvbGxlci5wcm9qZWN0Q3JlYXRlKHdoYXQpO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBwcm9qZWN0SW5kZXggPSBjb250cm9sbGVyLmdldFByb2plY3RDb3VudCgpO1xuICAgICAgICAgICAgICAgICAgICB2aWV3cy5yZWRyYXdTY3JlZW4ocHJvamVjdEluZGV4IC0gMSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlbGV0ZVRvZG9FdmVudChldmVudCkge1xuICAgIC8vIGRlbGV0ZSBhIHRvZG8gZnJvbSB0aGUgR1VJXG4gICAgY29uc3QgdGFyZ2V0ID0gZXZlbnQudGFyZ2V0O1xuICAgIGlmICh0YXJnZXQuY2xhc3NOYW1lID09IFwidG9kby1kZWxldGVcIikge1xuICAgICAgICAvLyBnZXQgdGhlIHByb2plY3RcbiAgICAgICAgY29uc3QgcHJvamVjdCA9IGdldFByb2plY3QodGFyZ2V0KTtcbiAgICAgICAgY29uc3QgaW5kZXggPSB0YXJnZXQuZGF0YXNldC50b2RvSW5kZXg7XG4gICAgICAgIGNvbnRyb2xsZXIudG9kb0RlbGV0ZShwcm9qZWN0LCBpbmRleCk7XG4gICAgICAgIHZpZXdzLnJlZHJhd1NjcmVlbigpO1xuICAgIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlbGV0ZVByb2plY3RFdmVudChldmVudCkge1xuICAgIC8vIGRlbGV0ZSBhIHByb2plY3QgZnJvbSB0aGUgR1VJXG4gICAgLy8gVE9ETyBBU0sgWUVTIE9SIE5PIFNVUkU/PyBERUxFVEUgbWFrZSBmdW5jdGlvblxuICAgIGNvbnN0IHRhcmdldCA9IGV2ZW50LnRhcmdldDtcbiAgICBpZiAodGFyZ2V0LmNsYXNzTmFtZSA9PSBcInByb2plY3QtZGVsZXRlXCIpIHtcbiAgICAgICAgY29uc3QgaW5kZXggPSB0YXJnZXQuZGF0YXNldC5wcm9qZWN0SW5kZXg7XG4gICAgICAgIGNvbnN0IHByb2plY3QgPSBjb250cm9sbGVyLmdldFByb2plY3RCeU51bWJlcihpbmRleCk7XG4gICAgICAgIGNvbnRyb2xsZXIucHJvamVjdERlbGV0ZShwcm9qZWN0KTtcbiAgICAgICAgdmlld3MucmVkcmF3U2NyZWVuKCk7XG4gICAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gbWFya0RvbmVUb2RvRXZlbnQoZXZlbnQpIHtcbiAgICAvLyBtYXJrIGEgdG9kbyBhcyBkb25lIGluIHRoZSBHVUlcbiAgICBjb25zdCB0YXJnZXQgPSBldmVudC50YXJnZXQ7XG4gICAgaWYgKHRhcmdldC50eXBlID09IFwiY2hlY2tib3hcIikge1xuICAgICAgICBjb25zdCBwcm9qZWN0SW5kZXggPSBnZXRQcm9qZWN0SW5kZXgodGFyZ2V0KTtcbiAgICAgICAgY29uc3QgdG9kb0luZGV4ID0gdGFyZ2V0LmRhdGFzZXQudG9kb0luZGV4O1xuICAgICAgICBjb250cm9sbGVyLnByb2plY3RUb2RvTWFya0RvbmUodG9kb0luZGV4LCBwcm9qZWN0SW5kZXgpO1xuICAgICAgICB2aWV3cy5yZWRyYXdTY3JlZW4oKTtcbiAgICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBlZGl0VG9kb0VsZW1lbnRFdmVudCgpIHtcblxufVxuXG5leHBvcnQgZnVuY3Rpb24gdG9nZ2xlVHJlZUV2ZW50KCkge1xuXG59IiwiY2xhc3MgUHJvamVjdCB7XG4gICAgI3doYXQ7XG4gICAgI3doaWNoID0gW107XG5cbiAgICBjb25zdHJ1Y3Rvcih3aGF0KSB7XG4gICAgICAgIHRoaXMuI3doYXQgPSB3aGF0O1xuICAgICAgICAvLyBlcnJvciBpZiBzdWNoIGEgcHJvamVjdCBhbHJlYWR5IGV4aXN0c1xuICAgICAgICBjb25zb2xlLmxvZyhgU3VjY2Vzc2Z1bGx5IGNyZWF0ZWQgcHJvamVjdCAke3doYXR9LmApO1xuICAgIH1cbiAgICBhZGQodG9kbykge1xuICAgICAgICB0aGlzLiN3aGljaC5wdXNoKHRvZG8pO1xuICAgICAgICBjb25zb2xlLmxvZyhgU3VjY2Vzc2Z1bGx5IGFkZGVkIHRvZG8gJHt0b2RvLndoYXR9IHRvIHByb2plY3QgJHt0aGlzLiN3aGF0fWApO1xuICAgICAgICBjb25zb2xlLmxvZyhgVGhlIHByb2plY3Qgbm93IGNvbnRhaW5zICR7dGhpcy5jb3VudH0gdG9kbyBpdGVtcy5gKTtcbiAgICB9XG4gICAgZGVsZXRlKGluZGV4KSB7XG4gICAgICAgIC8vIGRlbGV0ZSBhIHRvZG8gYWNjb3JkaW5nIHRvIGluZGV4XG4gICAgICAgIHRoaXMuI3doaWNoLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgIGNvbnNvbGUubG9nKGBTdWNjZXNzZnVsbHkgZGVsZXRlZCB0b2RvICR7aW5kZXh9IGZyb20gcHJvamVjdCAke3RoaXMuI3doYXR9YCk7XG4gICAgICAgIGNvbnNvbGUubG9nKGBUaGUgcHJvamVjdCBub3cgY29udGFpbnMgJHt0aGlzLmNvdW50fSB0b2RvIGl0ZW1zLmApO1xuICAgIH1cbiAgICB0b2RvKGluZGV4KSB7XG4gICAgICAgIHJldHVybiB0aGlzLiN3aGljaFtpbmRleF07XG4gICAgfVxuICAgIGdldCBjb3VudCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuI3doaWNoLmxlbmd0aDtcbiAgICB9XG5cbiAgICBnZXQgd2hhdCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuI3doYXQ7XG4gICAgfVxuXG4gICAgZ2V0IHdoaWNoKCkge1xuICAgICAgICByZXR1cm4gdGhpcy4jd2hpY2g7XG4gICAgfVxufVxuZXhwb3J0IHsgUHJvamVjdCB9O1xuIiwiLy8gVE9ETyBnaXZlIGVhY2ggdG9kbyBhbiB1bmlxdWUgSURcbi8vIFRPRE8gYWRkIGVhY2ggdG9kbyB0byBhIGNlcnRhaW4gcHJvamVjdCAoZWxzZTogRGVmYXVsdFxuXG5jbGFzcyBUb2RvIHtcbiAgICAjd2hhdDtcbiAgICAjd2hlbjtcbiAgICAjaXNVcmdlbnQ7XG4gICAgI2lzRmluaXNoZWQ7XG4gICAgI3Byb2plY3Q7XG5cbiAgICBjb25zdHJ1Y3Rvcih3aGF0LCB3aGVuLCBwcm9qZWN0ID0gXCJEZWZhdWx0XCIsIGlzVXJnZW50ID0gJ05vJywgaXNGaW5pc2hlZCA9ICdObycpIHtcbiAgICAgICAgdGhpcy4jd2hhdCA9IHdoYXQ7XG4gICAgICAgIHRoaXMuI3doZW4gPSB3aGVuO1xuICAgICAgICB0aGlzLiNwcm9qZWN0ID0gcHJvamVjdDtcbiAgICAgICAgdGhpcy4jaXNVcmdlbnQgPSBpc1VyZ2VudDtcbiAgICAgICAgdGhpcy4jaXNGaW5pc2hlZCA9IGlzRmluaXNoZWQ7XG4gICAgICAgIGNvbnNvbGUubG9nKGBTdWNjZXNzZnVsbHkgY3JlYXRlZCB0b2RvICR7d2hhdH1gKTtcbiAgICB9XG4gICAgLy8gZ2V0dGVyc1xuICAgIGdldCB3aGF0KCkge1xuICAgICAgICByZXR1cm4gdGhpcy4jd2hhdDtcbiAgICB9XG4gICAgZ2V0IHdoZW4oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLiN3aGVuO1xuICAgIH1cbiAgICBnZXQgdXJnZW50KCkge1xuICAgICAgICByZXR1cm4gdGhpcy4jaXNVcmdlbnQ7XG4gICAgfVxuICAgIGdldCBkb25lKCkge1xuICAgICAgICByZXR1cm4gdGhpcy4jaXNGaW5pc2hlZDtcbiAgICB9XG4gICAgLy8gc2V0dGVyc1xuICAgIHNldCB3aGF0KHdoYXQpIHtcbiAgICAgICAgdGhpcy4jd2hhdCA9IHdoYXQ7XG4gICAgfVxuICAgIHNldCB3aGVuKHdoZW4pIHtcbiAgICAgICAgdGhpcy4jd2hlbiA9IHdoZW47XG4gICAgfVxuICAgIHNldCB1cmdlbnQoeWVzTm8pIHtcbiAgICAgICAgdGhpcy4jaXNVcmdlbnQgPSB5ZXNObztcbiAgICB9XG4gICAgc2V0IGRvbmUoeWVzTm8pIHtcbiAgICAgICAgdGhpcy4jaXNGaW5pc2hlZCA9IHllc05vO1xuICAgICAgICByZXR1cm4gdGhpcy4jaXNGaW5pc2hlZDtcbiAgICB9XG59XG5leHBvcnQgeyBUb2RvIH07XG4iLCJpbXBvcnQgKiBhcyBjb250cm9sbGVyIGZyb20gJy4vY29udHJvbGxlci5qcyc7XG5pbXBvcnQgKiBhcyBldmVudHMgZnJvbSAnLi9ldmVudHMuanMnO1xuXG4vLyBoZWxwZXIgZnVuY3Rpb25zXG5cbmZ1bmN0aW9uIGNyZWF0ZU51bWJlclNwYW4obnVtYmVyKSB7XG4gICAgY29uc3Qgc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICBzcGFuLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwibnVtYmVyXCIpO1xuICAgIHNwYW4udGV4dENvbnRlbnQgPSBudW1iZXI7XG4gICAgcmV0dXJuIHNwYW47XG59XG5cbmZ1bmN0aW9uIGFkZEljb24oaWNvbk5hbWUpIHtcbiAgICBjb25zdCBpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlcIik7XG4gICAgY29uc3QgaWNvbkNsYXNzID0gYGljb25vaXItJHtpY29uTmFtZX1gO1xuICAgIGkuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgaWNvbkNsYXNzKTtcbiAgICBjb25zb2xlLmxvZyhpKTtcbiAgICByZXR1cm4gaTtcbn1cblxuLy8gZXZlbnQgaGFuZGxlciB2aWV3c1xuXG5mdW5jdGlvbiBhZGRUb2RvTW9kYWwoc2lkZVllc05vKSB7XG5cbiAgICAvLyBUT0RPIG1ha2Ugc2Vjb25kIG1vZGFsIGZvciBpZiBpcyBzaWRlYmFyIHRoZW4gYWRkIFxuICAgIC8vIHNlbGVjdCB3aXRoIHByb2plY3RzLCBlbHNlIGRvIG5vdCBhZGQuXG4gICAgY29uc3QgbW9kYWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGlhbG9nXCIpO1xuICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiKTtcbiAgICBjb25zdCBsYWJlbFdoYXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gICAgY29uc3QgbGFiZWxXaGVuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICAgIGNvbnN0IGlucHV0V2hhdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICBjb25zdCBpbnB1dFdoZW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgY29uc3QgY2FuY2VsQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBjb25zdCBzdWJtaXRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuXG4gICAgbW9kYWwuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJhZGQtdG9kby1kaWFsb2dcIik7XG4gICAgZm9ybS5zZXRBdHRyaWJ1dGUoXCJtZXRob2RcIiwgXCJkaWFsb2dcIik7XG4gICAgaW5wdXRXaGF0LnR5cGUgPSBcInRleHRcIjtcbiAgICBpbnB1dFdoZW4udHlwZSA9IFwiZGF0ZVwiO1xuICAgIGxhYmVsV2hhdC50ZXh0Q29udGVudCA9IFwiVGl0bGVcIjtcbiAgICBsYWJlbFdoZW4udGV4dENvbnRlbnQgPSBcIkR1ZSBEYXRlXCI7XG5cbiAgICBzdWJtaXRCdXR0b24uc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJhZGQtdG9kby1idXR0b25cIik7XG4gICAgc3VibWl0QnV0dG9uLnR5cGUgPSBcImJ1dHRvblwiO1xuICAgIGNhbmNlbEJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImNhbmNlbC1idXR0b25cIik7XG4gICAgc3VibWl0QnV0dG9uLnRleHRDb250ZW50ID0gXCJTdWJtaXRcIjtcbiAgICBjYW5jZWxCdXR0b24udGV4dENvbnRlbnQgPSBcIkNhbmNlbFwiO1xuXG4gICAgZm9ybS5hcHBlbmRDaGlsZChsYWJlbFdoYXQpO1xuICAgIGZvcm0uYXBwZW5kQ2hpbGQoaW5wdXRXaGF0KTtcbiAgICBmb3JtLmFwcGVuZENoaWxkKGxhYmVsV2hlbik7XG4gICAgZm9ybS5hcHBlbmRDaGlsZChpbnB1dFdoZW4pO1xuXG4gICAgaWYgKHNpZGVZZXNObykge1xuICAgICAgICBjb25zdCBsYWJlbFByb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gICAgICAgIG1vZGFsLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiYWRkLW1haW4tdG9kby1kaWFsb2dcIik7XG4gICAgICAgIGxhYmVsUHJvamVjdC50ZXh0Q29udGVudCA9IFwiQXNzaWduIFRvIFByb2plY3RcIjtcbiAgICAgICAgY29uc3Qgc2VsZWN0UHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWxlY3RcIik7XG4gICAgICAgIGNvbnN0IHByb2plY3RzID0gY29udHJvbGxlci5saXN0UHJvamVjdHMoKTtcbiAgICAgICAgLy8gZmlsbCB0aGUgc2VsZWN0IHdpdGggYWxsIGV4aXN0aW5nIHByb2plY3RzXG4gICAgICAgIHByb2plY3RzLmZvckVhY2goKHByb2plY3QsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICAgICAgICAgICAgb3B0aW9uLnZhbHVlID0gaW5kZXg7XG4gICAgICAgICAgICBvcHRpb24udGV4dENvbnRlbnQgPSBwcm9qZWN0LndoYXQ7XG4gICAgICAgICAgICBzZWxlY3RQcm9qZWN0LmFwcGVuZENoaWxkKG9wdGlvbik7XG4gICAgICAgIH0pXG4gICAgICAgIGZvcm0uYXBwZW5kQ2hpbGQobGFiZWxQcm9qZWN0KTtcbiAgICAgICAgZm9ybS5hcHBlbmRDaGlsZChzZWxlY3RQcm9qZWN0KTtcbiAgICB9XG5cbiAgICBmb3JtLmFwcGVuZENoaWxkKGNhbmNlbEJ1dHRvbik7XG4gICAgZm9ybS5hcHBlbmRDaGlsZChzdWJtaXRCdXR0b24pO1xuXG4gICAgbW9kYWwuYXBwZW5kQ2hpbGQoZm9ybSk7XG5cbiAgICByZXR1cm4gbW9kYWw7XG59XG5cbmZ1bmN0aW9uIGFkZFByb2plY3RNb2RhbCgpIHtcbiAgICBjb25zdCBtb2RhbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaWFsb2dcIik7XG4gICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIpO1xuICAgIGNvbnN0IGxhYmVsV2hhdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgICBjb25zdCBpbnB1dFdoYXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG5cbiAgICBpbnB1dFdoYXQudHlwZSA9IFwidGV4dFwiO1xuICAgIGxhYmVsV2hhdC50ZXh0Q29udGVudCA9IFwiV2hhdCdzIHRoZSBwcm9qZWN0IGFib3V0P1wiO1xuXG4gICAgY29uc3QgY2FuY2VsQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBjb25zdCBzdWJtaXRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuXG4gICAgY2FuY2VsQnV0dG9uLnRleHRDb250ZW50ID0gXCJDYW5jZWxcIjtcbiAgICBzdWJtaXRCdXR0b24udGV4dENvbnRlbnQgPSBcIlN1Ym1pdFwiO1xuICAgIHN1Ym1pdEJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInN1Ym1pdC1uZXctcHJvamVjdFwiKTtcbiAgICBzdWJtaXRCdXR0b24udHlwZSA9IFwiYnV0dG9uXCI7XG5cblxuICAgIG1vZGFsLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiYWRkLXByb2plY3QtZGlhbG9nXCIpO1xuICAgIGZvcm0uc2V0QXR0cmlidXRlKFwibWV0aG9kXCIsIFwiZGlhbG9nXCIpO1xuXG4gICAgZm9ybS5hcHBlbmRDaGlsZChsYWJlbFdoYXQpO1xuICAgIGZvcm0uYXBwZW5kQ2hpbGQoaW5wdXRXaGF0KTtcbiAgICBmb3JtLmFwcGVuZENoaWxkKGNhbmNlbEJ1dHRvbik7XG4gICAgZm9ybS5hcHBlbmRDaGlsZChzdWJtaXRCdXR0b24pO1xuXG4gICAgbW9kYWwuYXBwZW5kQ2hpbGQoZm9ybSk7XG5cbiAgICByZXR1cm4gbW9kYWw7XG59XG5cbmZ1bmN0aW9uIGVkaXRUb2RvTW9kYWwoKSB7XG4gICAgY29uc3QgbW9kYWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGlhbG9nXCIpO1xuICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiKTtcblxuICAgIG1vZGFsLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiZWRpdC10b2RvLWRpYWxvZ1wiKTtcbiAgICBmb3JtLnNldEF0dHJpYnV0ZShcIm1ldGhvZFwiLCBcImRpYWxvZ1wiKTtcbn1cblxuLy8gQWxsIHZpZXdzIHVzZXJzIGNhbiBpbnRlcmFjdCB3aXRoXG5leHBvcnQgZnVuY3Rpb24gZGF0ZVZpZXcoKSB7XG4gICAgLy8gcmV0dXJucyB0aGUgdG9kbyBsaXN0LCBvcmRlcmVkIGJ5IGRhdGUgYW5kIGRpdmlkZWQgaW50byA0IGNhdGVnb3JpZXM6XG4gICAgLy8gVG9kYXksIFRoaXMgd2VlaywgVGhpcyBNb250aCBhbmQgTGF0ZXJcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRvZGF5VmlldygpIHtcbiAgICAvLyByZXR1cm5zIHRoZSBsaXN0IG9mIHRvZG9zIGZvciB0b2RheVxufVxuXG5leHBvcnQgZnVuY3Rpb24gcHJvamVjdHNWaWV3KCkge1xuICAgIC8vIHJldHVybnMgdGhlIGxpc3Qgb2YgYWxsIHByb2plY3RzXG4gICAgY29uc3QgcHJvamVjdHMgPSBjb250cm9sbGVyLmxpc3RQcm9qZWN0cygpO1xuICAgIGNvbnN0IHVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO1xuICAgIC8vY29uc3QgYWRkQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgcHJvamVjdHMuZm9yRWFjaCgocHJvamVjdCwgaW5kZXgpID0+IHtcbiAgICAgICAgY29uc3QgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gICAgICAgIGNvbnN0IGgzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgICAgICAgY29uc3QgZGVsU3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgICAgY29uc3QgbGVmdFNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICAgIGNvbnN0IGljb24gPSBhZGRJY29uKFwiYXQtc2lnblwiKTtcbiAgICAgICAgY29uc3QgcGx1c0ljb24gPSBhZGRJY29uKFwicGx1cy1jaXJjbGVcIik7XG4gICAgICAgIGNvbnN0IHRyYXNoSWNvbiA9IGFkZEljb24oXCJ0cmFzaFwiKTtcbiAgICAgICAgY29uc3QgcHJvamVjdFdoYXQgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShwcm9qZWN0LndoYXQpO1xuICAgICAgICBkZWxTcGFuLmFwcGVuZENoaWxkKHRyYXNoSWNvbik7XG4gICAgICAgIGRlbFNwYW4uc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJwcm9qZWN0LWRlbGV0ZVwiKTtcbiAgICAgICAgZGVsU3Bhbi5zZXRBdHRyaWJ1dGUoXCJkYXRhLXByb2plY3QtaW5kZXhcIiwgaW5kZXgpO1xuICAgICAgICBsZWZ0U3Bhbi5hcHBlbmRDaGlsZChwcm9qZWN0V2hhdCk7XG4gICAgICAgIGxlZnRTcGFuLmluc2VydEJlZm9yZShpY29uLCBwcm9qZWN0V2hhdCk7XG4gICAgICAgIGxlZnRTcGFuLmFwcGVuZENoaWxkKGRlbFNwYW4pO1xuICAgICAgICBoMy5hcHBlbmRDaGlsZChsZWZ0U3Bhbik7XG4gICAgICAgIGgzLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwicHJvamVjdC1saXN0LWgzXCIpO1xuICAgICAgICBoMy5hcHBlbmRDaGlsZChjcmVhdGVOdW1iZXJTcGFuKGNvbnRyb2xsZXIuZ2V0TnVtYmVyVG9kb3NGb3JQcm9qZWN0KGluZGV4KSkpO1xuICAgICAgICBsaS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInByb2plY3QtbGlzdC1saVwiKTtcbiAgICAgICAgaDMuc2V0QXR0cmlidXRlKFwiZGF0YS1wcm9qZWN0LWluZGV4XCIsIGluZGV4KTtcbiAgICAgICAgbGkuYXBwZW5kQ2hpbGQoaDMpO1xuICAgICAgICB1bC5hcHBlbmRDaGlsZChsaSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIHVsO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcHJvamVjdFRvZG9zVmlldyhpbmRleCkge1xuICAgIC8vIHJldHVybnMgYSBsaXN0IG9mIGFsbCB0b2RvcyBmb3IgYSBjZXJ0YWluIHByb2plY3RcbiAgICBjb25zdCBteVByb2plY3QgPSBjb250cm9sbGVyLmdldFByb2plY3RCeU51bWJlcihpbmRleCk7XG4gICAgY29uc3QgdG9kb3MgPSBjb250cm9sbGVyLmxpc3RUb2Rvc0ZvclByb2plY3QoaW5kZXgpO1xuICAgIGNvbnN0IGFkZEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGNvbnN0IGFkZFRvZG9EaWFsb2cgPSBhZGRUb2RvTW9kYWwoZmFsc2UsIGluZGV4KTtcbiAgICBjb25zdCBoMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcbiAgICBjb25zdCBhdEljb24gPSBhZGRJY29uKFwiYXQtc2lnblwiKTtcbiAgICBjb25zdCBwcm9qZWN0V2hhdCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKG15UHJvamVjdC53aGF0KTtcbiAgICBoMi5hcHBlbmRDaGlsZChhdEljb24pO1xuICAgIGgyLmFwcGVuZENoaWxkKHByb2plY3RXaGF0KTtcbiAgICBoMi5zZXRBdHRyaWJ1dGUoXCJkYXRhLXByb2plY3QtaW5kZXhcIiwgaW5kZXgpO1xuICAgIGNvbnN0IHVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcbiAgICB1bC5hcHBlbmRDaGlsZChoMik7XG4gICAgaWYgKHRvZG9zLmxlbmd0aCA+IDApIHtcbiAgICAgICAgdG9kb3MuZm9yRWFjaCgodG9kbywgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHVsVG9kbyA9IHRvZG9WaWV3KHRvZG8sIGluZGV4KTtcbiAgICAgICAgICAgIHVsLmFwcGVuZENoaWxkKHVsVG9kbyk7XG4gICAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGBObyB0b2RvcyBmb3IgcHJvamVjdCAke2luZGV4fWApO1xuICAgIH1cbiAgICBhZGRCdXR0b24uc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJ0b2RvLWFkZFwiKTtcbiAgICBhZGRCdXR0b24udGV4dENvbnRlbnQgPSBcIisgQUREIFRPRE9cIjtcbiAgICB1bC5hcHBlbmRDaGlsZChhZGRCdXR0b24pO1xuICAgIHVsLmFwcGVuZENoaWxkKGFkZFRvZG9EaWFsb2cpO1xuICAgIHJldHVybiB1bDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRvZG9WaWV3KHRvZG8sIGluZGV4KSB7XG4gICAgLy8gcmV0dXJucyBhIHRvZG8gd2l0aCBhbGwgdGhlIGRldGFpbHNcbiAgICBjb25zdCBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgY29uc3QgdmFsdWVTcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgIGNvbnN0IHZhbHVlcyA9IHsgXCJkYXRlXCI6IHRvZG8ud2hlbiwgXCJ1cmdlbnRcIjogdG9kby51cmdlbnQsIFwiZG9uZVwiOiB0b2RvLmRvbmUgfTtcbiAgICBjb25zdCB1aVNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgY29uc3QgY29udGVudFNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgY29uc3QgY2hlY2tCb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIGNvbnN0IGNoZWNrZWQgPSAodG9kby5kb25lID09ICdZZXMnKSA/IHRydWUgOiBmYWxzZTtcbiAgICBjaGVja0JveC50eXBlID0gJ2NoZWNrYm94JztcbiAgICBjaGVja0JveC5zZXRBdHRyaWJ1dGUoXCJkYXRhLXRvZG8taW5kZXhcIiwgaW5kZXgpO1xuICAgIGNoZWNrQm94LmNoZWNrZWQgPSBjaGVja2VkO1xuICAgIHVpU3Bhbi50ZXh0Q29udGVudCA9IChcIiAoREVMKVwiKTtcbiAgICB1aVNwYW4uc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJ0b2RvLWRlbGV0ZVwiKTtcbiAgICB1aVNwYW4uc2V0QXR0cmlidXRlKFwiZGF0YS10b2RvLWluZGV4XCIsIGluZGV4KTtcbiAgICBjb250ZW50U3Bhbi5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInRvZG8tZGVzY3JpcHRpb25cIik7XG4gICAgY29udGVudFNwYW4udGV4dENvbnRlbnQgPSB0b2RvLndoYXQ7XG4gICAgdmFsdWVTcGFuLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwidmFsdWUtc3BhblwiKTtcbiAgICBsaS5hcHBlbmRDaGlsZChjaGVja0JveCk7XG4gICAgbGkuYXBwZW5kQ2hpbGQoY29udGVudFNwYW4pO1xuICAgIGxpLmFwcGVuZENoaWxkKHVpU3Bhbik7XG4gICAgT2JqZWN0LnZhbHVlcyh2YWx1ZXMpLmZvckVhY2goKHZhbHVlLCBpbmRleCkgPT4ge1xuICAgICAgICBjb25zdCBzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgICBzcGFuLnRleHRDb250ZW50ID0gdmFsdWU7XG4gICAgICAgIHNwYW4uc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgT2JqZWN0LmtleXModmFsdWVzKVtpbmRleF0pO1xuICAgICAgICB2YWx1ZVNwYW4uYXBwZW5kQ2hpbGQoc3Bhbik7XG4gICAgfSk7XG4gICAgY29uc3QgY2hhbmdlU3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICBjaGFuZ2VTcGFuLnRleHRDb250ZW50ID0gXCIgKEVESVQpXCI7XG4gICAgY2hhbmdlU3Bhbi5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInRvZG8tZWRpdFwiKTtcbiAgICBjaGFuZ2VTcGFuLnNldEF0dHJpYnV0ZShcImRhdGEtdG9kby1lbC1pbmRleFwiLCBpbmRleCk7XG4gICAgbGkuYXBwZW5kQ2hpbGQoY2hhbmdlU3Bhbik7XG4gICAgbGkuYXBwZW5kQ2hpbGQodmFsdWVTcGFuKTtcbiAgICByZXR1cm4gbGk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRFdmVudHNUb1ZpZXcobm9kZSkge1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IG5vZGU7XG4gICAgY29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZXZlbnRzLmFkZFRvZG9FdmVudCk7XG4gICAgY29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZXZlbnRzLmFkZFByb2plY3RFdmVudCk7XG4gICAgY29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZXZlbnRzLnNob3dQcm9qZWN0VG9kb3NFdmVudCk7XG4gICAgLy8gY29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZXZlbnRzLmRlbGV0ZVRvZG9FdmVudCk7XG4gICAgLy8gY29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZXZlbnRzLmRlbGV0ZVByb2plY3RFdmVudCk7XG4gICAgLy8gY29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZXZlbnRzLm1hcmtEb25lVG9kb0V2ZW50KTtcbiAgICAvLyByZXR1cm4gY29udGFpbmVyO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVkcmF3U2NyZWVuKHByb2plY3RJbmRleCkge1xuICAgIC8vIFRPRE8gYWRkICdjb250ZW50JyBwYXJhbWV0ZXIgdG8gcmVkcmF3IHNjcmVlbiBmb3IgbWFpbiBjb250ZW50ICFcbiAgICBjb25zdCBtYWluRGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50XCIpO1xuICAgIG1haW5EaXYuaW5uZXJIVE1MID0gXCJcIjtcbiAgICBjcmVhdGVTaWRlYmFyQ29tcG9uZW50KG1haW5EaXYpO1xuICAgIGlmIChwcm9qZWN0SW5kZXggPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGNyZWF0ZU1haW5Db250ZW50KG1haW5EaXYsIDApO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGNyZWF0ZU1haW5Db250ZW50KG1haW5EaXYsIHByb2plY3RJbmRleCk7XG4gICAgfVxuICAgIGFkZEV2ZW50c1RvVmlldyhtYWluRGl2KTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlTWFpbkNvbnRlbnQoY29udGFpbmVyRGl2LCBwcm9qZWN0SW5kZXgpIHtcbiAgICAvLyBDcmVhdGVzIHRoZSBtYWluIGNvbnRlbnQgZGl2IHdpdGggdGhlIHRvZG9zIG9mIHRoZSBzZWxlY3RlZCBwcm9qZWN0XG4gICAgLy8gb3IgZm9yIHRoZSBzZWxlY3RlZCB0aW1lIHBlcmlvZFxuICAgIC8vIGRlZmF1bHQgdmlldyA9IGxhc3QgcHJvamVjdCB0YXNrcz8gVG9kYXkncyB0YXNrcz8/XG4gICAgY29uc3QgbWFpbkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29uc3QgdGFza3NVbCA9IHByb2plY3RUb2Rvc1ZpZXcocHJvamVjdEluZGV4KTtcblxuICAgIC8vIHRvZG8gYWRkIHByb2plY3QgdGl0bGUgaW4gcHJvamVjdHRvZG9zdml3IGZ1bmN0aW9uXG4gICAgbWFpbkRpdi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcIm1haW4tdGFza3MtZGl2XCIpO1xuICAgIG1haW5EaXYuYXBwZW5kQ2hpbGQodGFza3NVbCk7XG5cbiAgICBjb250YWluZXJEaXYuYXBwZW5kQ2hpbGQobWFpbkRpdik7XG59XG5cblxuZnVuY3Rpb24gY3JlYXRlU2lkZWJhckNvbXBvbmVudChjb250YWluZXJEaXYpIHtcbiAgICAvLyBDcmVhdGVzIHRoZSBzaWRlYmFyIHdpdGggcHJvamVjdCBsaXN0LCBhZGQgdGFzayBpbnB1dCwgdG9kYXksIGZ1dHVyZVxuICAgIGNvbnN0IGhlYWRlckgxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICAgIGNvbnN0IHNpZGViYXJEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IGFkZFRhc2tEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IHByb2plY3RMaXN0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCB0b2RheURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29uc3QgZnV0dXJlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCBhZGRUYXNrUCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIGNvbnN0IHByb2plY3RMaXN0VWwgPSBwcm9qZWN0c1ZpZXcoKTtcbiAgICBjb25zdCBwcm9qZWN0c0gyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xuICAgIGNvbnN0IHRvZGF5SDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XG4gICAgY29uc3QgZnV0dXJlSDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XG4gICAgY29uc3QgYWRkVG9kb0RpYWxvZyA9IGFkZFRvZG9Nb2RhbCh0cnVlKTtcbiAgICBjb25zdCBhZGRQcm9qZWN0RGlhbG9nID0gYWRkUHJvamVjdE1vZGFsKCk7XG4gICAgY29uc3QgYWRkVGFza1BDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCJBZGQgYSBUYXNrXCIpO1xuICAgIGNvbnN0IHBsdXNJY29uID0gYWRkSWNvbihcInBsdXMtY2lyY2xlXCIpO1xuXG4gICAgYWRkVGFza0Rpdi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImFkZC10YXNrXCIpO1xuICAgIHNpZGViYXJEaXYuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJzaWRlYmFyXCIpO1xuICAgIHRvZGF5RGl2LnNldEF0dHJpYnV0ZShcImlkXCIsIFwidG9kYXktZGl2XCIpO1xuICAgIGZ1dHVyZURpdi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImZ1dHVyZS1kaXZcIik7XG4gICAgcHJvamVjdExpc3REaXYuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJwcm9qZWN0LWxpc3RcIik7XG4gICAgdG9kYXlEaXYuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJ0YXNrcy1mb3ItdG9kYXlcIik7XG4gICAgZnV0dXJlRGl2LnNldEF0dHJpYnV0ZShcImlkXCIsIFwiZnV0dXJlLXRhc2tzXCIpO1xuXG4gICAgYWRkVGFza1AuYXBwZW5kQ2hpbGQoYWRkVGFza1BDb250ZW50KTtcbiAgICBhZGRUYXNrUC5hcHBlbmRDaGlsZChwbHVzSWNvbik7XG4gICAgYWRkVGFza0Rpdi5hcHBlbmRDaGlsZChhZGRUYXNrUCk7XG4gICAgYWRkVGFza0Rpdi5hcHBlbmRDaGlsZChhZGRUb2RvRGlhbG9nKTtcbiAgICB0b2RheUgyLnRleHRDb250ZW50ID0gXCJUb2RheSdzIFRhc2tzXCI7XG4gICAgdG9kYXlIMi5hcHBlbmRDaGlsZChjcmVhdGVOdW1iZXJTcGFuKDEyKSk7XG4gICAgZnV0dXJlSDIudGV4dENvbnRlbnQgPSBcIlRhc2tzIGZvciBsYXRlclwiO1xuICAgIGZ1dHVyZUgyLmFwcGVuZENoaWxkKGNyZWF0ZU51bWJlclNwYW4oOTkpKTtcblxuXG4gICAgcHJvamVjdHNIMi5pbm5lckhUTUwgPSBcIlByb2plY3RzIDxzcGFuIGNsYXNzPSdmYXQtcGx1cycgaWQ9J2FkZC1wcm9qZWN0Jz4rPC9zcGFuPlwiO1xuICAgIHByb2plY3RzSDIuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJwcm9qZWN0cy1oMlwiKTtcbiAgICB0b2RheURpdi5hcHBlbmRDaGlsZCh0b2RheUgyKTtcbiAgICBmdXR1cmVEaXYuYXBwZW5kQ2hpbGQoZnV0dXJlSDIpO1xuICAgIHByb2plY3RMaXN0RGl2LmFwcGVuZENoaWxkKHByb2plY3RzSDIpO1xuICAgIHByb2plY3RMaXN0RGl2LmFwcGVuZENoaWxkKHByb2plY3RMaXN0VWwpO1xuICAgIGhlYWRlckgxLnRleHRDb250ZW50ID0gXCJNeSBUT0RPIGxpc3RcIjtcblxuICAgIHNpZGViYXJEaXYuYXBwZW5kQ2hpbGQoaGVhZGVySDEpO1xuICAgIHNpZGViYXJEaXYuYXBwZW5kQ2hpbGQoYWRkVGFza0Rpdik7XG4gICAgc2lkZWJhckRpdi5hcHBlbmRDaGlsZCh0b2RheURpdik7XG4gICAgc2lkZWJhckRpdi5hcHBlbmRDaGlsZChmdXR1cmVEaXYpO1xuICAgIHNpZGViYXJEaXYuYXBwZW5kQ2hpbGQocHJvamVjdExpc3REaXYpO1xuICAgIHNpZGViYXJEaXYuYXBwZW5kQ2hpbGQoYWRkUHJvamVjdERpYWxvZyk7XG5cbiAgICBjb250YWluZXJEaXYuYXBwZW5kQ2hpbGQoc2lkZWJhckRpdik7XG59XG5cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi9hcHAuanMnO1xuaW1wb3J0IGNzcyBmcm9tICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgKiBhcyB2aWV3cyBmcm9tICcuL3ZpZXdzLmpzJztcblxuY29uc3QgbWFpbkRpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudFwiKTtcbmNvbnN0IGgxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuaDEudGV4dENvbnRlbnQgPSBcIk15IFByb2plY3RzXCI7XG5jb25zdCB1bCA9IHZpZXdzLnJlZHJhd1NjcmVlbigpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==