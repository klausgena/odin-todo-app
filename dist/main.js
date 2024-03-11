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

#projects-h2 {
    color: var(--lighttype);
    padding-top: 1rem;
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

#add-task>p {
    color: var(--accent);
    background-color: var(--green);
    padding-top: 1rem;
    padding-bottom: 1rem;
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,kBAAkB;IAClB,gBAAgB;IAChB,2BAA2B;IAC3B,sBAAsB;IACtB,sBAAsB;IACtB,iBAAiB;IACjB,iBAAiB;IACjB,mBAAmB;IACnB,eAAe;IACf,oBAAoB;IACpB,qBAAqB;AACzB;;;;AAIA;IACI,6BAA6B;AACjC;;AAEA;IACI,SAAS;IACT,kBAAkB;IAClB,cAAc;IACd,mCAAmC;IACnC,oBAAoB;AACxB;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,mBAAmB;IACnB,UAAU;IACV,yCAAyC;AAC7C;;AAEA;;;;IAII,gCAAgC;IAChC,SAAS;AACb;;AAEA;;;IAGI,gCAAgC;IAChC,eAAe;AACnB;;AAEA;;;;IAII,cAAc;AAClB;;AAEA;IACI,uBAAuB;IACvB,iBAAiB;AACrB;;;;AAIA;IACI,gBAAgB;AACpB;;AAEA;IACI,SAAS;IACT,eAAe;AACnB;;AAEA;IACI,UAAU;IACV,iBAAiB;AACrB;;AAEA;IACI,oBAAoB;IACpB,8BAA8B;IAC9B,iBAAiB;IACjB,oBAAoB;AACxB","sourcesContent":[":root {\n    --greener: #adef93;\n    --green: #bef2a9;\n    --greengreenyellow: #caf2a9;\n    --greenyellow: #daf2a9;\n    --yellowgreen: #eaf2a9;\n    --yellow: #eef2a9;\n    --accent: #e8678c;\n    --darktype: #131810;\n    --type: #2a2f27;\n    --lighttype: #898b87;\n    --background: #f8fdf6;\n}\n\n\n\nh3:has(input:checked) {\n    text-decoration: line-through;\n}\n\nbody {\n    margin: 0;\n    color: var(--type);\n    font-size: 1em;\n    background-color: var(--background);\n    font-family: 'Arial';\n}\n\n#content {\n    display: flex;\n}\n\n#sidebar {\n    padding: 2rem 0 0 0;\n    flex: 30vw;\n    background-color: var(--greengreenyellow);\n}\n\nh1,\nh2,\nh3,\np {\n    padding: 0.5rem 1rem 0.5rem 2rem;\n    margin: 0;\n}\n\n#sidebar h3:hover,\n#sidebar h2:hover,\n#add-task>p:hover {\n    background-color: var(--greener);\n    cursor: pointer;\n}\n\n#sidebar h1,\n#sidebar h2,\n#sidebar h3,\n#sidebar p {\n    font-size: 1em;\n}\n\n#projects-h2 {\n    color: var(--lighttype);\n    padding-top: 1rem;\n}\n\n\n\nul>li {\n    list-style: none;\n}\n\nul {\n    margin: 0;\n    padding-left: 0;\n}\n\n#main-tasks-div {\n    flex: 70vw;\n    padding-top: 2rem;\n}\n\n#add-task>p {\n    color: var(--accent);\n    background-color: var(--green);\n    padding-top: 1rem;\n    padding-bottom: 1rem;\n}"],"sourceRoot":""}]);
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
    const projectsDiv = document.getElementById("project-list");
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
        delSpan.textContent = ' (DEL)';
        delSpan.setAttribute("class", "project-delete");
        delSpan.setAttribute("data-project-index", index);
        h3.textContent = project.what;
        h3.setAttribute("class", "project-list-h3");
        h3.setAttribute("data-project-index", index);
        h3.appendChild(delSpan);
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
    const ulWhat = document.createElement('ul');
    const values = [todo.when, todo.urgent, todo.done];
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
    contentSpan.textContent = todo.what;
    li.appendChild(checkBox);
    li.appendChild(contentSpan);
    li.appendChild(uiSpan);
    values.forEach((value, index) => {
        const li = document.createElement('li');
        const changeSpan = document.createElement('span');
        changeSpan.textContent = " (EDIT)";
        changeSpan.setAttribute("class", "todo-edit");
        changeSpan.setAttribute("data-todo-el-index", index);
        li.textContent = value;
        li.appendChild(changeSpan);
        ulWhat.appendChild(li);
    });
    //li.appendChild(h3);

    li.appendChild(ulWhat);
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
    futureH2.textContent = "Tasks for later";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7O1VDdlJBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOzs7Ozs7Ozs7Ozs7OztBQ0FrQjtBQUNZO0FBQ007O0FBRXBDO0FBQ0E7QUFDQTtBQUNBLFdBQVcsbURBQWtCLEciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vZGluLXRvZG8tYXBwLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWFwcC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL29kaW4tdG9kby1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL29kaW4tdG9kby1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL29kaW4tdG9kby1hcHAvLi9zcmMvYXBwLmpzIiwid2VicGFjazovL29kaW4tdG9kby1hcHAvLi9zcmMvY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tYXBwLy4vc3JjL2RiLmpzIiwid2VicGFjazovL29kaW4tdG9kby1hcHAvLi9zcmMvZXZlbnRzLmpzIiwid2VicGFjazovL29kaW4tdG9kby1hcHAvLi9zcmMvcHJvamVjdC5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tYXBwLy4vc3JjL3RvZG8uanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWFwcC8uL3NyYy92aWV3cy5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tYXBwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL29kaW4tdG9kby1hcHAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWFwcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWFwcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL29kaW4tdG9kby1hcHAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9vZGluLXRvZG8tYXBwL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9vZGluLXRvZG8tYXBwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGA6cm9vdCB7XG4gICAgLS1ncmVlbmVyOiAjYWRlZjkzO1xuICAgIC0tZ3JlZW46ICNiZWYyYTk7XG4gICAgLS1ncmVlbmdyZWVueWVsbG93OiAjY2FmMmE5O1xuICAgIC0tZ3JlZW55ZWxsb3c6ICNkYWYyYTk7XG4gICAgLS15ZWxsb3dncmVlbjogI2VhZjJhOTtcbiAgICAtLXllbGxvdzogI2VlZjJhOTtcbiAgICAtLWFjY2VudDogI2U4Njc4YztcbiAgICAtLWRhcmt0eXBlOiAjMTMxODEwO1xuICAgIC0tdHlwZTogIzJhMmYyNztcbiAgICAtLWxpZ2h0dHlwZTogIzg5OGI4NztcbiAgICAtLWJhY2tncm91bmQ6ICNmOGZkZjY7XG59XG5cblxuXG5oMzpoYXMoaW5wdXQ6Y2hlY2tlZCkge1xuICAgIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xufVxuXG5ib2R5IHtcbiAgICBtYXJnaW46IDA7XG4gICAgY29sb3I6IHZhcigtLXR5cGUpO1xuICAgIGZvbnQtc2l6ZTogMWVtO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQpO1xuICAgIGZvbnQtZmFtaWx5OiAnQXJpYWwnO1xufVxuXG4jY29udGVudCB7XG4gICAgZGlzcGxheTogZmxleDtcbn1cblxuI3NpZGViYXIge1xuICAgIHBhZGRpbmc6IDJyZW0gMCAwIDA7XG4gICAgZmxleDogMzB2dztcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ncmVlbmdyZWVueWVsbG93KTtcbn1cblxuaDEsXG5oMixcbmgzLFxucCB7XG4gICAgcGFkZGluZzogMC41cmVtIDFyZW0gMC41cmVtIDJyZW07XG4gICAgbWFyZ2luOiAwO1xufVxuXG4jc2lkZWJhciBoMzpob3ZlcixcbiNzaWRlYmFyIGgyOmhvdmVyLFxuI2FkZC10YXNrPnA6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWdyZWVuZXIpO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuI3NpZGViYXIgaDEsXG4jc2lkZWJhciBoMixcbiNzaWRlYmFyIGgzLFxuI3NpZGViYXIgcCB7XG4gICAgZm9udC1zaXplOiAxZW07XG59XG5cbiNwcm9qZWN0cy1oMiB7XG4gICAgY29sb3I6IHZhcigtLWxpZ2h0dHlwZSk7XG4gICAgcGFkZGluZy10b3A6IDFyZW07XG59XG5cblxuXG51bD5saSB7XG4gICAgbGlzdC1zdHlsZTogbm9uZTtcbn1cblxudWwge1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nLWxlZnQ6IDA7XG59XG5cbiNtYWluLXRhc2tzLWRpdiB7XG4gICAgZmxleDogNzB2dztcbiAgICBwYWRkaW5nLXRvcDogMnJlbTtcbn1cblxuI2FkZC10YXNrPnAge1xuICAgIGNvbG9yOiB2YXIoLS1hY2NlbnQpO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWdyZWVuKTtcbiAgICBwYWRkaW5nLXRvcDogMXJlbTtcbiAgICBwYWRkaW5nLWJvdHRvbTogMXJlbTtcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLDJCQUEyQjtJQUMzQixzQkFBc0I7SUFDdEIsc0JBQXNCO0lBQ3RCLGlCQUFpQjtJQUNqQixpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLGVBQWU7SUFDZixvQkFBb0I7SUFDcEIscUJBQXFCO0FBQ3pCOzs7O0FBSUE7SUFDSSw2QkFBNkI7QUFDakM7O0FBRUE7SUFDSSxTQUFTO0lBQ1Qsa0JBQWtCO0lBQ2xCLGNBQWM7SUFDZCxtQ0FBbUM7SUFDbkMsb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixVQUFVO0lBQ1YseUNBQXlDO0FBQzdDOztBQUVBOzs7O0lBSUksZ0NBQWdDO0lBQ2hDLFNBQVM7QUFDYjs7QUFFQTs7O0lBR0ksZ0NBQWdDO0lBQ2hDLGVBQWU7QUFDbkI7O0FBRUE7Ozs7SUFJSSxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksdUJBQXVCO0lBQ3ZCLGlCQUFpQjtBQUNyQjs7OztBQUlBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksU0FBUztJQUNULGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksb0JBQW9CO0lBQ3BCLDhCQUE4QjtJQUM5QixpQkFBaUI7SUFDakIsb0JBQW9CO0FBQ3hCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjpyb290IHtcXG4gICAgLS1ncmVlbmVyOiAjYWRlZjkzO1xcbiAgICAtLWdyZWVuOiAjYmVmMmE5O1xcbiAgICAtLWdyZWVuZ3JlZW55ZWxsb3c6ICNjYWYyYTk7XFxuICAgIC0tZ3JlZW55ZWxsb3c6ICNkYWYyYTk7XFxuICAgIC0teWVsbG93Z3JlZW46ICNlYWYyYTk7XFxuICAgIC0teWVsbG93OiAjZWVmMmE5O1xcbiAgICAtLWFjY2VudDogI2U4Njc4YztcXG4gICAgLS1kYXJrdHlwZTogIzEzMTgxMDtcXG4gICAgLS10eXBlOiAjMmEyZjI3O1xcbiAgICAtLWxpZ2h0dHlwZTogIzg5OGI4NztcXG4gICAgLS1iYWNrZ3JvdW5kOiAjZjhmZGY2O1xcbn1cXG5cXG5cXG5cXG5oMzpoYXMoaW5wdXQ6Y2hlY2tlZCkge1xcbiAgICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcXG59XFxuXFxuYm9keSB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgY29sb3I6IHZhcigtLXR5cGUpO1xcbiAgICBmb250LXNpemU6IDFlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZCk7XFxuICAgIGZvbnQtZmFtaWx5OiAnQXJpYWwnO1xcbn1cXG5cXG4jY29udGVudCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbiNzaWRlYmFyIHtcXG4gICAgcGFkZGluZzogMnJlbSAwIDAgMDtcXG4gICAgZmxleDogMzB2dztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZ3JlZW5ncmVlbnllbGxvdyk7XFxufVxcblxcbmgxLFxcbmgyLFxcbmgzLFxcbnAge1xcbiAgICBwYWRkaW5nOiAwLjVyZW0gMXJlbSAwLjVyZW0gMnJlbTtcXG4gICAgbWFyZ2luOiAwO1xcbn1cXG5cXG4jc2lkZWJhciBoMzpob3ZlcixcXG4jc2lkZWJhciBoMjpob3ZlcixcXG4jYWRkLXRhc2s+cDpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWdyZWVuZXIpO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbiNzaWRlYmFyIGgxLFxcbiNzaWRlYmFyIGgyLFxcbiNzaWRlYmFyIGgzLFxcbiNzaWRlYmFyIHAge1xcbiAgICBmb250LXNpemU6IDFlbTtcXG59XFxuXFxuI3Byb2plY3RzLWgyIHtcXG4gICAgY29sb3I6IHZhcigtLWxpZ2h0dHlwZSk7XFxuICAgIHBhZGRpbmctdG9wOiAxcmVtO1xcbn1cXG5cXG5cXG5cXG51bD5saSB7XFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcblxcbnVsIHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nLWxlZnQ6IDA7XFxufVxcblxcbiNtYWluLXRhc2tzLWRpdiB7XFxuICAgIGZsZXg6IDcwdnc7XFxuICAgIHBhZGRpbmctdG9wOiAycmVtO1xcbn1cXG5cXG4jYWRkLXRhc2s+cCB7XFxuICAgIGNvbG9yOiB2YXIoLS1hY2NlbnQpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ncmVlbik7XFxuICAgIHBhZGRpbmctdG9wOiAxcmVtO1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMXJlbTtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCAqIGFzIGNvbnRyb2xsZXIgZnJvbSAnLi9jb250cm9sbGVyLmpzJztcblxuLy8gQ3JlYXRlIGEgZGVmYXVsdCBwcm9qZWN0XG5jb25zdCBkZWZhdWx0UHJvamVjdCA9IGNvbnRyb2xsZXIucHJvamVjdENyZWF0ZSgnQGhvbWUnKTtcbi8vIGFkZCBzZWNvbmQgcHJvamVjdCBhbmQgdGhpcmQgcHJvamVjdFxuY29uc3Qgc2Vjb25kID0gY29udHJvbGxlci5wcm9qZWN0Q3JlYXRlKFwiQHdvcmtcIik7XG5jb25zdCB0aGlyZCA9IGNvbnRyb2xsZXIucHJvamVjdENyZWF0ZShcIkBwY1wiKTtcblxuLy8gQ3JlYXRlIGEgZHVtbXkgdG9kb1xuY29uc3QgZGVmYXVsdFRvZG8gPSBjb250cm9sbGVyLnRvZG9DcmVhdGUoJ0RvIHRoZSBkaXNoZXMnLCAnTm93JywgZGVmYXVsdFByb2plY3QpO1xuY29uc3Qgc2Vjb25kVG9kbyA9IGNvbnRyb2xsZXIudG9kb0NyZWF0ZSgnQ2hlY2sgbXkgZW1haWwnLCAnVG9kYXknLCBzZWNvbmQpO1xuY29uc3QgdGhpcmRUb2RvID0gY29udHJvbGxlci50b2RvQ3JlYXRlKCdDcmVhdGUgYmFja3VwIGZyb20gcGMgdG8gU0REJywgJ05leHQgd2VlaycsIHRoaXJkKTtcbmNvbnN0IGZvdXJ0aFRvZG8gPSBjb250cm9sbGVyLnRvZG9DcmVhdGUoJ0NoZWNrIG9uIEVCYXkgZm9yIG5ldyBrZXlib2FyZCcsICdUb21vcnJvdycsIHRoaXJkKTsiLCIvLyBBbGwgdGhlIGFjdGlvbnMgdXNlcnMgY2FuIHVuZGVydGFrZVxuaW1wb3J0IHsgVG9kbyB9IGZyb20gJy4vdG9kby5qcyc7XG5pbXBvcnQgeyBQcm9qZWN0IH0gZnJvbSAnLi9wcm9qZWN0LmpzJztcbmltcG9ydCB7IGRlZmF1bHQgYXMgREIgfSBmcm9tICcuL2RiLmpzJztcblxuLy8gVG9kbyBhY3Rpb25zXG4vLyBUT0RPIE1ha2UgZXZlcnkgZnVuY3Rpb24gcmV0dXJuIHNvbWV0aGluZ1xuXG5leHBvcnQgZnVuY3Rpb24gdG9kb0lzRG9uZSh0b2RvKSB7XG4gICAgdG9kby5kb25lID0gJ1llcyc7XG4gICAgcmV0dXJuIHRvZG87XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0b2RvRGVsZXRlKHByb2plY3QsIHRvZG9JbmRleCkge1xuICAgIHByb2plY3QuZGVsZXRlKHRvZG9JbmRleCk7XG4gICAgcmV0dXJuIHByb2plY3Q7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0b2RvQ3JlYXRlKHdoYXQsIHdoZW4sIHByb2plY3QpIHtcbiAgICBjb25zdCB0b2RvID0gbmV3IFRvZG8od2hhdCwgd2hlbik7XG4gICAgcHJvamVjdC5hZGQodG9kbyk7XG4gICAgcmV0dXJuIHByb2plY3Q7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0b2RvRWRpdCh0b2RvLCB3aGF0LCB3aGVuLCB1cmdlbnQpIHtcbiAgICAvLyBUT0RPOiB0aGluayBvZiBzb21lIGRlZmF1bHRzP1xuICAgIHRvZG8ud2hhdCA9IHdoYXQ7XG4gICAgdG9kby53aGVuID0gd2hlbjtcbiAgICB0b2RvLnVyZ2VudCA9IHVyZ2VudDtcbiAgICByZXR1cm4gdG9kbztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByb2plY3RUb2RvTWFya0RvbmUodG9kb0luZGV4LCBwcm9qZWN0SW5kZXgpIHtcbiAgICBjb25zdCBwcm9qZWN0ID0gZ2V0UHJvamVjdEJ5TnVtYmVyKHByb2plY3RJbmRleCk7XG4gICAgY29uc3QgdG9kbyA9IHByb2plY3QudG9kbyh0b2RvSW5kZXgpO1xuICAgIHRvZG9Jc0RvbmUodG9kbyk7XG4gICAgY29uc29sZS5sb2coYFRvZG8gJHt0b2RvLndoYXR9IGlzIG1hcmtlZCBhcyBkb25lLmApO1xufVxuXG4vLyBMaXN0c1xuXG5leHBvcnQgZnVuY3Rpb24gbGlzdFRvZG9zRm9yUHJvamVjdChudW1iZXIpIHtcbiAgICBjb25zdCBteVByb2plY3QgPSBEQi5nZXRQcm9qZWN0QnlOdW1iZXIobnVtYmVyKTtcbiAgICByZXR1cm4gbXlQcm9qZWN0LndoaWNoO1xufVxuXG4vLyBUT0RPXG5leHBvcnQgZnVuY3Rpb24gbGlzdFRvZG9zQnlEYXRlKCkgeyB9XG5cblxuZXhwb3J0IGZ1bmN0aW9uIGxpc3RQcm9qZWN0cygpIHtcbiAgICByZXR1cm4gREIubGlzdFByb2plY3RzKCk7XG59XG5cbi8vIFByb2plY3QgYWN0aW9uc1xuXG5leHBvcnQgZnVuY3Rpb24gcHJvamVjdENyZWF0ZShuYW1lKSB7XG4gICAgY29uc3QgcHJvamVjdCA9IG5ldyBQcm9qZWN0KG5hbWUpO1xuICAgIERCLmFkZFByb2plY3QocHJvamVjdCk7XG4gICAgcmV0dXJuIHByb2plY3Q7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcm9qZWN0RGVsZXRlKHByb2plY3QpIHtcbiAgICBEQi5kZWxldGVQcm9qZWN0KHByb2plY3QpO1xuICAgIHByb2plY3QgPSBudWxsO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcHJvamVjdEVkaXQocHJvamVjdCwgbmFtZSkge1xuICAgIHByb2plY3Qud2hhdCA9IG5hbWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcm9qZWN0QWRkVG9kbyhwcm9qZWN0LCB0b2RvKSB7XG4gICAgcHJvamVjdC5hZGQodG9kbyk7XG4gICAgcmV0dXJuIHByb2plY3Q7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRQcm9qZWN0QnlOdW1iZXIobnVtYmVyKSB7XG4gICAgcmV0dXJuIERCLmdldFByb2plY3RCeU51bWJlcihudW1iZXIpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0UHJvamVjdENvdW50KCkge1xuICAgIHJldHVybiBEQi5nZXRQcm9qZWN0Q291bnQoKTtcbn0iLCIvLyBDb250YWluZXIgZm9yIGFsbCBwcm9qZWN0cyBhbmQgdG9kb3Ncbi8vIHVuaXF1ZSBDTEFTUyBpbnN0YW5jZSBTSU5HTEVUT05cbmxldCBpbnN0YW5jZTtcbmxldCBwcm9qZWN0cyA9IFtdO1xuY2xhc3MgREIge1xuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHRpZiAoaW5zdGFuY2UpIHtcblx0XHRcdHRocm93IG5ldyBFcnJvcihcIk5ldyBpbnN0YW5jZSBjYW5ub3QgYmUgY3JlYXRlZCFcIik7XG5cdFx0fVxuXHRcdGluc3RhbmNlID0gdGhpcztcblx0fVxuXHRhZGRQcm9qZWN0KHByb2plY3QpIHtcblx0XHRwcm9qZWN0cy5wdXNoKHByb2plY3QpO1xuXHRcdGNvbnNvbGUubG9nKGBQcm9qZWN0ICR7cHJvamVjdC53aGF0fSBzdWNjZXNzZnVsbHkgYWRkZWQgdG8gREIhYCk7XG5cdH1cblx0ZGVsZXRlUHJvamVjdChwcm9qZWN0KSB7XG5cdFx0bGV0IGluZGV4ID0gcHJvamVjdHMuaW5kZXhPZihwcm9qZWN0KTtcblx0XHRpZiAoaW5kZXggIT09IC0xKSB7XG5cdFx0XHRwcm9qZWN0cy5zcGxpY2UoaW5kZXgsIDEpO1xuXHRcdFx0Y29uc29sZS5sb2coYFByb2plY3QgJHtwcm9qZWN0LndoYXR9IHN1Y2Nlc3NmdWxseSByZW1vdmVkIGZyb20gREIhYCk7XG5cdFx0fVxuXG5cdH1cblx0bGlzdFByb2plY3RzKCkge1xuXHRcdHJldHVybiBwcm9qZWN0cztcblx0fVxuXG5cdGV4aXN0c1Byb2plY3QobmFtZSkge1xuXHRcdGlmIChwcm9qZWN0cy5maW5kKHByb2plY3QgPT4gcHJvamVjdC53aGF0ID09PSBuYW1lKSkge1xuXHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0fVxuXHRcdHJldHVybiBmYWxzZTtcblx0fVxuXG5cdGdldFByb2plY3RCeU51bWJlcihudW1iZXIpIHtcblx0XHRyZXR1cm4gcHJvamVjdHNbbnVtYmVyXTtcblx0fVxuXG5cdGdldFByb2plY3RDb3VudCgpIHtcblx0XHRyZXR1cm4gcHJvamVjdHMubGVuZ3RoO1xuXHR9XG59XG5sZXQgREJJbnN0YW5jZSA9IE9iamVjdC5mcmVlemUobmV3IERCKCkpO1xuXG5leHBvcnQgZGVmYXVsdCBEQkluc3RhbmNlO1xuIiwiaW1wb3J0ICogYXMgdmlld3MgZnJvbSAnLi92aWV3cy5qcyc7XG5pbXBvcnQgKiBhcyBjb250cm9sbGVyIGZyb20gJy4vY29udHJvbGxlci5qcyc7XG5cblxuLy8gSEVMUEVSIEZVTkNUSU9OU1xuXG5mdW5jdGlvbiBnZXRQcm9qZWN0KHRhcmdldCkge1xuICAgIC8vIEdldHMgdGhlIHByb2plY3Qgb3V0IG9mIHRoZSBEb20gdHJlZVxuICAgIGNvbnN0IHByb2plY3RMaSA9IHRhcmdldC5jbG9zZXN0KFwiaDIgKyB1bFwiKS5wYXJlbnRFbGVtZW50O1xuICAgIGNvbnN0IHByb2plY3RJZCA9IHByb2plY3RMaS5xdWVyeVNlbGVjdG9yKFwic3BhblwiKS5kYXRhc2V0LnByb2plY3RJbmRleDtcbiAgICBjb25zdCBteVByb2plY3QgPSBjb250cm9sbGVyLmdldFByb2plY3RCeU51bWJlcihwcm9qZWN0SWQpO1xuICAgIHJldHVybiBteVByb2plY3Q7XG59XG5cbmZ1bmN0aW9uIGdldFByb2plY3RJbmRleCh0YXJnZXQpIHtcbiAgICAvLyBHZXRzIHRoZSBwcm9qZWN0IGluZGV4IG91dCBvZiB0aGUgRG9tIHRyZWVcbiAgICBjb25zdCBwcm9qZWN0TGkgPSB0YXJnZXQuY2xvc2VzdChcImgyICsgdWxcIikucGFyZW50RWxlbWVudDtcbiAgICByZXR1cm4gcHJvamVjdExpLnF1ZXJ5U2VsZWN0b3IoXCJzcGFuXCIpLmRhdGFzZXQucHJvamVjdEluZGV4O1xufVxuXG4vLyBFVkVOVCBIQU5ETEVSU1xuXG5leHBvcnQgZnVuY3Rpb24gYWRkVG9kb0V2ZW50KGV2ZW50KSB7XG5cbiAgICBjb25zdCB0YXJnZXQgPSBldmVudC50YXJnZXQ7XG4gICAgbGV0IG1vZGFsID0gXCJcIjtcblxuICAgIGlmICh0YXJnZXQuaWQgPT0gXCJhZGQtdGFza1wiKSB7XG4gICAgICAgIG1vZGFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhZGQtbWFpbi10b2RvLWRpYWxvZ1wiKTtcbiAgICAgICAgbW9kYWwuc2hvd01vZGFsKCk7XG4gICAgICAgIG1vZGFsLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgIGlmIChldmVudC50YXJnZXQuY2xhc3NOYW1lID09IFwiYWRkLXRvZG8tYnV0dG9uXCIpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBwcm9qZWN0SW5kZXggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2FkZC1tYWluLXRvZG8tZGlhbG9nIGZvcm0gc2VsZWN0XCIpLnZhbHVlO1xuICAgICAgICAgICAgICAgIGNvbnN0IHByb2plY3QgPSBjb250cm9sbGVyLmdldFByb2plY3RCeU51bWJlcihwcm9qZWN0SW5kZXgpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHByb2plY3RJbmRleCk7XG4gICAgICAgICAgICAgICAgY29uc3Qgd2hhdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYWRkLW1haW4tdG9kby1kaWFsb2cgZm9ybSBpbnB1dFwiKS52YWx1ZTtcbiAgICAgICAgICAgICAgICBjb25zdCB3aGVuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNhZGQtbWFpbi10b2RvLWRpYWxvZyBmb3JtIGlucHV0K2xhYmVsK2lucHV0XCIpLnZhbHVlO1xuICAgICAgICAgICAgICAgIGlmICghd2hhdCB8fCAhd2hlbikge1xuICAgICAgICAgICAgICAgICAgICBhbGVydChcIm5vIGZvcm0gZGF0YVwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRyb2xsZXIudG9kb0NyZWF0ZSh3aGF0LCB3aGVuLCBwcm9qZWN0KTtcbiAgICAgICAgICAgICAgICAgICAgdmlld3MucmVkcmF3U2NyZWVuKHByb2plY3RJbmRleCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH1cbiAgICBlbHNlIGlmICh0YXJnZXQuY2xhc3NOYW1lID09IFwidG9kby1hZGRcIikge1xuICAgICAgICBtb2RhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWRkLXRvZG8tZGlhbG9nXCIpO1xuICAgICAgICBtb2RhbC5zaG93TW9kYWwoKTtcbiAgICAgICAgY29uc3QgcHJvamVjdEluZGV4ID0gbW9kYWwucGFyZW50RWxlbWVudC5maXJzdENoaWxkLmRhdGFzZXQucHJvamVjdEluZGV4O1xuICAgICAgICBtb2RhbC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICBpZiAoZXZlbnQudGFyZ2V0LmNsYXNzTmFtZSA9PSBcImFkZC10b2RvLWJ1dHRvblwiKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgcHJvamVjdCA9IGNvbnRyb2xsZXIuZ2V0UHJvamVjdEJ5TnVtYmVyKHByb2plY3RJbmRleCk7XG4gICAgICAgICAgICAgICAgY29uc3Qgd2hhdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYWRkLXRvZG8tZGlhbG9nIGZvcm0gaW5wdXRcIikudmFsdWU7XG4gICAgICAgICAgICAgICAgY29uc3Qgd2hlbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYWRkLXRvZG8tZGlhbG9nIGZvcm0gaW5wdXQrbGFiZWwraW5wdXRcIikudmFsdWU7XG4gICAgICAgICAgICAgICAgaWYgKCF3aGF0IHx8ICF3aGVuKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIHRvZG8gbWFrZSB0aGlzIG1vcmUgZWxlZ2FudFxuICAgICAgICAgICAgICAgICAgICBhbGVydChcIkZvcm0gZGF0YSBtaXNzaW5nXCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgY29udHJvbGxlci50b2RvQ3JlYXRlKHdoYXQsIHdoZW4sIHByb2plY3QpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB2aWV3cy5yZWRyYXdTY3JlZW4ocHJvamVjdEluZGV4KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzaG93UHJvamVjdFRvZG9zRXZlbnQoZXZlbnQpIHtcbiAgICBjb25zdCBwcm9qZWN0c0RpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvamVjdC1saXN0XCIpO1xuICAgIGNvbnN0IHRhcmdldCA9IGV2ZW50LnRhcmdldDtcbiAgICBpZiAodGFyZ2V0LmNsYXNzTmFtZSA9PSBcInByb2plY3QtbGlzdC1oM1wiKSB7XG4gICAgICAgIHZpZXdzLnJlZHJhd1NjcmVlbih0YXJnZXQuZGF0YXNldC5wcm9qZWN0SW5kZXgpO1xuICAgIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZFByb2plY3RFdmVudChldmVudCkge1xuICAgIC8vIGFkZCBhIHByb2plY3QgaW4gdGhlIEdVSVxuICAgIGNvbnN0IHRhcmdldCA9IGV2ZW50LnRhcmdldDtcbiAgICBpZiAodGFyZ2V0LmlkID09IFwiYWRkLXByb2plY3RcIikge1xuICAgICAgICBjb25zdCBtb2RhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWRkLXByb2plY3QtZGlhbG9nXCIpO1xuICAgICAgICBtb2RhbC5zaG93TW9kYWwoKTtcbiAgICAgICAgbW9kYWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgIGlmIChldmVudC50YXJnZXQuaWQgPT0gXCJzdWJtaXQtbmV3LXByb2plY3RcIikge1xuICAgICAgICAgICAgICAgIGNvbnN0IHdoYXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2FkZC1wcm9qZWN0LWRpYWxvZyBmb3JtIGlucHV0XCIpLnZhbHVlO1xuICAgICAgICAgICAgICAgIGlmICghd2hhdCkge1xuICAgICAgICAgICAgICAgICAgICBhbGVydChcIkZvcm0gRGF0YSBNSVNTSU5HXCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgY29udHJvbGxlci5wcm9qZWN0Q3JlYXRlKHdoYXQpO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBwcm9qZWN0SW5kZXggPSBjb250cm9sbGVyLmdldFByb2plY3RDb3VudCgpO1xuICAgICAgICAgICAgICAgICAgICB2aWV3cy5yZWRyYXdTY3JlZW4ocHJvamVjdEluZGV4IC0gMSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlbGV0ZVRvZG9FdmVudChldmVudCkge1xuICAgIC8vIGRlbGV0ZSBhIHRvZG8gZnJvbSB0aGUgR1VJXG4gICAgY29uc3QgdGFyZ2V0ID0gZXZlbnQudGFyZ2V0O1xuICAgIGlmICh0YXJnZXQuY2xhc3NOYW1lID09IFwidG9kby1kZWxldGVcIikge1xuICAgICAgICAvLyBnZXQgdGhlIHByb2plY3RcbiAgICAgICAgY29uc3QgcHJvamVjdCA9IGdldFByb2plY3QodGFyZ2V0KTtcbiAgICAgICAgY29uc3QgaW5kZXggPSB0YXJnZXQuZGF0YXNldC50b2RvSW5kZXg7XG4gICAgICAgIGNvbnRyb2xsZXIudG9kb0RlbGV0ZShwcm9qZWN0LCBpbmRleCk7XG4gICAgICAgIHZpZXdzLnJlZHJhd1NjcmVlbigpO1xuICAgIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlbGV0ZVByb2plY3RFdmVudChldmVudCkge1xuICAgIC8vIGRlbGV0ZSBhIHByb2plY3QgZnJvbSB0aGUgR1VJXG4gICAgLy8gVE9ETyBBU0sgWUVTIE9SIE5PIFNVUkU/PyBERUxFVEUgbWFrZSBmdW5jdGlvblxuICAgIGNvbnN0IHRhcmdldCA9IGV2ZW50LnRhcmdldDtcbiAgICBpZiAodGFyZ2V0LmNsYXNzTmFtZSA9PSBcInByb2plY3QtZGVsZXRlXCIpIHtcbiAgICAgICAgY29uc3QgaW5kZXggPSB0YXJnZXQuZGF0YXNldC5wcm9qZWN0SW5kZXg7XG4gICAgICAgIGNvbnN0IHByb2plY3QgPSBjb250cm9sbGVyLmdldFByb2plY3RCeU51bWJlcihpbmRleCk7XG4gICAgICAgIGNvbnRyb2xsZXIucHJvamVjdERlbGV0ZShwcm9qZWN0KTtcbiAgICAgICAgdmlld3MucmVkcmF3U2NyZWVuKCk7XG4gICAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gbWFya0RvbmVUb2RvRXZlbnQoZXZlbnQpIHtcbiAgICAvLyBtYXJrIGEgdG9kbyBhcyBkb25lIGluIHRoZSBHVUlcbiAgICBjb25zdCB0YXJnZXQgPSBldmVudC50YXJnZXQ7XG4gICAgaWYgKHRhcmdldC50eXBlID09IFwiY2hlY2tib3hcIikge1xuICAgICAgICBjb25zdCBwcm9qZWN0SW5kZXggPSBnZXRQcm9qZWN0SW5kZXgodGFyZ2V0KTtcbiAgICAgICAgY29uc3QgdG9kb0luZGV4ID0gdGFyZ2V0LmRhdGFzZXQudG9kb0luZGV4O1xuICAgICAgICBjb250cm9sbGVyLnByb2plY3RUb2RvTWFya0RvbmUodG9kb0luZGV4LCBwcm9qZWN0SW5kZXgpO1xuICAgICAgICB2aWV3cy5yZWRyYXdTY3JlZW4oKTtcbiAgICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBlZGl0VG9kb0VsZW1lbnRFdmVudCgpIHtcblxufVxuXG5leHBvcnQgZnVuY3Rpb24gdG9nZ2xlVHJlZUV2ZW50KCkge1xuXG59IiwiY2xhc3MgUHJvamVjdCB7XG4gICAgI3doYXQ7XG4gICAgI3doaWNoID0gW107XG5cbiAgICBjb25zdHJ1Y3Rvcih3aGF0KSB7XG4gICAgICAgIHRoaXMuI3doYXQgPSB3aGF0O1xuICAgICAgICAvLyBlcnJvciBpZiBzdWNoIGEgcHJvamVjdCBhbHJlYWR5IGV4aXN0c1xuICAgICAgICBjb25zb2xlLmxvZyhgU3VjY2Vzc2Z1bGx5IGNyZWF0ZWQgcHJvamVjdCAke3doYXR9LmApO1xuICAgIH1cbiAgICBhZGQodG9kbykge1xuICAgICAgICB0aGlzLiN3aGljaC5wdXNoKHRvZG8pO1xuICAgICAgICBjb25zb2xlLmxvZyhgU3VjY2Vzc2Z1bGx5IGFkZGVkIHRvZG8gJHt0b2RvLndoYXR9IHRvIHByb2plY3QgJHt0aGlzLiN3aGF0fWApO1xuICAgICAgICBjb25zb2xlLmxvZyhgVGhlIHByb2plY3Qgbm93IGNvbnRhaW5zICR7dGhpcy5jb3VudH0gdG9kbyBpdGVtcy5gKTtcbiAgICB9XG4gICAgZGVsZXRlKGluZGV4KSB7XG4gICAgICAgIC8vIGRlbGV0ZSBhIHRvZG8gYWNjb3JkaW5nIHRvIGluZGV4XG4gICAgICAgIHRoaXMuI3doaWNoLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgIGNvbnNvbGUubG9nKGBTdWNjZXNzZnVsbHkgZGVsZXRlZCB0b2RvICR7aW5kZXh9IGZyb20gcHJvamVjdCAke3RoaXMuI3doYXR9YCk7XG4gICAgICAgIGNvbnNvbGUubG9nKGBUaGUgcHJvamVjdCBub3cgY29udGFpbnMgJHt0aGlzLmNvdW50fSB0b2RvIGl0ZW1zLmApO1xuICAgIH1cbiAgICB0b2RvKGluZGV4KSB7XG4gICAgICAgIHJldHVybiB0aGlzLiN3aGljaFtpbmRleF07XG4gICAgfVxuICAgIGdldCBjb3VudCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuI3doaWNoLmxlbmd0aDtcbiAgICB9XG5cbiAgICBnZXQgd2hhdCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuI3doYXQ7XG4gICAgfVxuXG4gICAgZ2V0IHdoaWNoKCkge1xuICAgICAgICByZXR1cm4gdGhpcy4jd2hpY2g7XG4gICAgfVxufVxuZXhwb3J0IHsgUHJvamVjdCB9O1xuIiwiLy8gVE9ETyBnaXZlIGVhY2ggdG9kbyBhbiB1bmlxdWUgSURcbi8vIFRPRE8gYWRkIGVhY2ggdG9kbyB0byBhIGNlcnRhaW4gcHJvamVjdCAoZWxzZTogRGVmYXVsdFxuXG5jbGFzcyBUb2RvIHtcbiAgICAjd2hhdDtcbiAgICAjd2hlbjtcbiAgICAjaXNVcmdlbnQ7XG4gICAgI2lzRmluaXNoZWQ7XG4gICAgI3Byb2plY3Q7XG5cbiAgICBjb25zdHJ1Y3Rvcih3aGF0LCB3aGVuLCBwcm9qZWN0ID0gXCJEZWZhdWx0XCIsIGlzVXJnZW50ID0gJ05vJywgaXNGaW5pc2hlZCA9ICdObycpIHtcbiAgICAgICAgdGhpcy4jd2hhdCA9IHdoYXQ7XG4gICAgICAgIHRoaXMuI3doZW4gPSB3aGVuO1xuICAgICAgICB0aGlzLiNwcm9qZWN0ID0gcHJvamVjdDtcbiAgICAgICAgdGhpcy4jaXNVcmdlbnQgPSBpc1VyZ2VudDtcbiAgICAgICAgdGhpcy4jaXNGaW5pc2hlZCA9IGlzRmluaXNoZWQ7XG4gICAgICAgIGNvbnNvbGUubG9nKGBTdWNjZXNzZnVsbHkgY3JlYXRlZCB0b2RvICR7d2hhdH1gKTtcbiAgICB9XG4gICAgLy8gZ2V0dGVyc1xuICAgIGdldCB3aGF0KCkge1xuICAgICAgICByZXR1cm4gdGhpcy4jd2hhdDtcbiAgICB9XG4gICAgZ2V0IHdoZW4oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLiN3aGVuO1xuICAgIH1cbiAgICBnZXQgdXJnZW50KCkge1xuICAgICAgICByZXR1cm4gdGhpcy4jaXNVcmdlbnQ7XG4gICAgfVxuICAgIGdldCBkb25lKCkge1xuICAgICAgICByZXR1cm4gdGhpcy4jaXNGaW5pc2hlZDtcbiAgICB9XG4gICAgLy8gc2V0dGVyc1xuICAgIHNldCB3aGF0KHdoYXQpIHtcbiAgICAgICAgdGhpcy4jd2hhdCA9IHdoYXQ7XG4gICAgfVxuICAgIHNldCB3aGVuKHdoZW4pIHtcbiAgICAgICAgdGhpcy4jd2hlbiA9IHdoZW47XG4gICAgfVxuICAgIHNldCB1cmdlbnQoeWVzTm8pIHtcbiAgICAgICAgdGhpcy4jaXNVcmdlbnQgPSB5ZXNObztcbiAgICB9XG4gICAgc2V0IGRvbmUoeWVzTm8pIHtcbiAgICAgICAgdGhpcy4jaXNGaW5pc2hlZCA9IHllc05vO1xuICAgICAgICByZXR1cm4gdGhpcy4jaXNGaW5pc2hlZDtcbiAgICB9XG59XG5leHBvcnQgeyBUb2RvIH07XG4iLCJpbXBvcnQgKiBhcyBjb250cm9sbGVyIGZyb20gJy4vY29udHJvbGxlci5qcyc7XG5pbXBvcnQgKiBhcyBldmVudHMgZnJvbSAnLi9ldmVudHMuanMnO1xuXG4vLyBoZWxwZXIgZnVuY3Rpb25zXG5cbi8vIGV2ZW50IGhhbmRsZXIgdmlld3NcblxuZnVuY3Rpb24gYWRkVG9kb01vZGFsKHNpZGVZZXNObykge1xuXG4gICAgLy8gVE9ETyBtYWtlIHNlY29uZCBtb2RhbCBmb3IgaWYgaXMgc2lkZWJhciB0aGVuIGFkZCBcbiAgICAvLyBzZWxlY3Qgd2l0aCBwcm9qZWN0cywgZWxzZSBkbyBub3QgYWRkLlxuICAgIGNvbnN0IG1vZGFsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpYWxvZ1wiKTtcbiAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvcm1cIik7XG4gICAgY29uc3QgbGFiZWxXaGF0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICAgIGNvbnN0IGxhYmVsV2hlbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgICBjb25zdCBpbnB1dFdoYXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgY29uc3QgaW5wdXRXaGVuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIGNvbnN0IGNhbmNlbEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgY29uc3Qgc3VibWl0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcblxuICAgIG1vZGFsLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiYWRkLXRvZG8tZGlhbG9nXCIpO1xuICAgIGZvcm0uc2V0QXR0cmlidXRlKFwibWV0aG9kXCIsIFwiZGlhbG9nXCIpO1xuICAgIGlucHV0V2hhdC50eXBlID0gXCJ0ZXh0XCI7XG4gICAgaW5wdXRXaGVuLnR5cGUgPSBcImRhdGVcIjtcbiAgICBsYWJlbFdoYXQudGV4dENvbnRlbnQgPSBcIlRpdGxlXCI7XG4gICAgbGFiZWxXaGVuLnRleHRDb250ZW50ID0gXCJEdWUgRGF0ZVwiO1xuXG4gICAgc3VibWl0QnV0dG9uLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiYWRkLXRvZG8tYnV0dG9uXCIpO1xuICAgIHN1Ym1pdEJ1dHRvbi50eXBlID0gXCJidXR0b25cIjtcbiAgICBjYW5jZWxCdXR0b24uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJjYW5jZWwtYnV0dG9uXCIpO1xuICAgIHN1Ym1pdEJ1dHRvbi50ZXh0Q29udGVudCA9IFwiU3VibWl0XCI7XG4gICAgY2FuY2VsQnV0dG9uLnRleHRDb250ZW50ID0gXCJDYW5jZWxcIjtcblxuICAgIGZvcm0uYXBwZW5kQ2hpbGQobGFiZWxXaGF0KTtcbiAgICBmb3JtLmFwcGVuZENoaWxkKGlucHV0V2hhdCk7XG4gICAgZm9ybS5hcHBlbmRDaGlsZChsYWJlbFdoZW4pO1xuICAgIGZvcm0uYXBwZW5kQ2hpbGQoaW5wdXRXaGVuKTtcblxuICAgIGlmIChzaWRlWWVzTm8pIHtcbiAgICAgICAgY29uc3QgbGFiZWxQcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICAgICAgICBtb2RhbC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImFkZC1tYWluLXRvZG8tZGlhbG9nXCIpO1xuICAgICAgICBsYWJlbFByb2plY3QudGV4dENvbnRlbnQgPSBcIkFzc2lnbiBUbyBQcm9qZWN0XCI7XG4gICAgICAgIGNvbnN0IHNlbGVjdFByb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VsZWN0XCIpO1xuICAgICAgICBjb25zdCBwcm9qZWN0cyA9IGNvbnRyb2xsZXIubGlzdFByb2plY3RzKCk7XG4gICAgICAgIC8vIGZpbGwgdGhlIHNlbGVjdCB3aXRoIGFsbCBleGlzdGluZyBwcm9qZWN0c1xuICAgICAgICBwcm9qZWN0cy5mb3JFYWNoKChwcm9qZWN0LCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgY29uc3Qgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbiAgICAgICAgICAgIG9wdGlvbi52YWx1ZSA9IGluZGV4O1xuICAgICAgICAgICAgb3B0aW9uLnRleHRDb250ZW50ID0gcHJvamVjdC53aGF0O1xuICAgICAgICAgICAgc2VsZWN0UHJvamVjdC5hcHBlbmRDaGlsZChvcHRpb24pO1xuICAgICAgICB9KVxuICAgICAgICBmb3JtLmFwcGVuZENoaWxkKGxhYmVsUHJvamVjdCk7XG4gICAgICAgIGZvcm0uYXBwZW5kQ2hpbGQoc2VsZWN0UHJvamVjdCk7XG4gICAgfVxuXG4gICAgZm9ybS5hcHBlbmRDaGlsZChjYW5jZWxCdXR0b24pO1xuICAgIGZvcm0uYXBwZW5kQ2hpbGQoc3VibWl0QnV0dG9uKTtcblxuICAgIG1vZGFsLmFwcGVuZENoaWxkKGZvcm0pO1xuXG4gICAgcmV0dXJuIG1vZGFsO1xufVxuXG5mdW5jdGlvbiBhZGRQcm9qZWN0TW9kYWwoKSB7XG4gICAgY29uc3QgbW9kYWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGlhbG9nXCIpO1xuICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiKTtcbiAgICBjb25zdCBsYWJlbFdoYXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gICAgY29uc3QgaW5wdXRXaGF0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuXG4gICAgaW5wdXRXaGF0LnR5cGUgPSBcInRleHRcIjtcbiAgICBsYWJlbFdoYXQudGV4dENvbnRlbnQgPSBcIldoYXQncyB0aGUgcHJvamVjdCBhYm91dD9cIjtcblxuICAgIGNvbnN0IGNhbmNlbEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgY29uc3Qgc3VibWl0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcblxuICAgIGNhbmNlbEJ1dHRvbi50ZXh0Q29udGVudCA9IFwiQ2FuY2VsXCI7XG4gICAgc3VibWl0QnV0dG9uLnRleHRDb250ZW50ID0gXCJTdWJtaXRcIjtcbiAgICBzdWJtaXRCdXR0b24uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJzdWJtaXQtbmV3LXByb2plY3RcIik7XG4gICAgc3VibWl0QnV0dG9uLnR5cGUgPSBcImJ1dHRvblwiO1xuXG5cbiAgICBtb2RhbC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImFkZC1wcm9qZWN0LWRpYWxvZ1wiKTtcbiAgICBmb3JtLnNldEF0dHJpYnV0ZShcIm1ldGhvZFwiLCBcImRpYWxvZ1wiKTtcblxuICAgIGZvcm0uYXBwZW5kQ2hpbGQobGFiZWxXaGF0KTtcbiAgICBmb3JtLmFwcGVuZENoaWxkKGlucHV0V2hhdCk7XG4gICAgZm9ybS5hcHBlbmRDaGlsZChjYW5jZWxCdXR0b24pO1xuICAgIGZvcm0uYXBwZW5kQ2hpbGQoc3VibWl0QnV0dG9uKTtcblxuICAgIG1vZGFsLmFwcGVuZENoaWxkKGZvcm0pO1xuXG4gICAgcmV0dXJuIG1vZGFsO1xufVxuXG5mdW5jdGlvbiBlZGl0VG9kb01vZGFsKCkge1xuICAgIGNvbnN0IG1vZGFsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpYWxvZ1wiKTtcbiAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvcm1cIik7XG5cbiAgICBtb2RhbC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImVkaXQtdG9kby1kaWFsb2dcIik7XG4gICAgZm9ybS5zZXRBdHRyaWJ1dGUoXCJtZXRob2RcIiwgXCJkaWFsb2dcIik7XG59XG5cbi8vIEFsbCB2aWV3cyB1c2VycyBjYW4gaW50ZXJhY3Qgd2l0aFxuZXhwb3J0IGZ1bmN0aW9uIGRhdGVWaWV3KCkge1xuICAgIC8vIHJldHVybnMgdGhlIHRvZG8gbGlzdCwgb3JkZXJlZCBieSBkYXRlIGFuZCBkaXZpZGVkIGludG8gNCBjYXRlZ29yaWVzOlxuICAgIC8vIFRvZGF5LCBUaGlzIHdlZWssIFRoaXMgTW9udGggYW5kIExhdGVyXG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0b2RheVZpZXcoKSB7XG4gICAgLy8gcmV0dXJucyB0aGUgbGlzdCBvZiB0b2RvcyBmb3IgdG9kYXlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByb2plY3RzVmlldygpIHtcbiAgICAvLyByZXR1cm5zIHRoZSBsaXN0IG9mIGFsbCBwcm9qZWN0c1xuICAgIGNvbnN0IHByb2plY3RzID0gY29udHJvbGxlci5saXN0UHJvamVjdHMoKTtcbiAgICBjb25zdCB1bCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtcbiAgICAvL2NvbnN0IGFkZEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIHByb2plY3RzLmZvckVhY2goKHByb2plY3QsIGluZGV4KSA9PiB7XG4gICAgICAgIGNvbnN0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICAgICAgICBjb25zdCBoMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gICAgICAgIGNvbnN0IGRlbFNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICAgIGRlbFNwYW4udGV4dENvbnRlbnQgPSAnIChERUwpJztcbiAgICAgICAgZGVsU3Bhbi5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInByb2plY3QtZGVsZXRlXCIpO1xuICAgICAgICBkZWxTcGFuLnNldEF0dHJpYnV0ZShcImRhdGEtcHJvamVjdC1pbmRleFwiLCBpbmRleCk7XG4gICAgICAgIGgzLnRleHRDb250ZW50ID0gcHJvamVjdC53aGF0O1xuICAgICAgICBoMy5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInByb2plY3QtbGlzdC1oM1wiKTtcbiAgICAgICAgaDMuc2V0QXR0cmlidXRlKFwiZGF0YS1wcm9qZWN0LWluZGV4XCIsIGluZGV4KTtcbiAgICAgICAgaDMuYXBwZW5kQ2hpbGQoZGVsU3Bhbik7XG4gICAgICAgIGxpLmFwcGVuZENoaWxkKGgzKTtcbiAgICAgICAgdWwuYXBwZW5kQ2hpbGQobGkpO1xuICAgIH0pO1xuICAgIHJldHVybiB1bDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByb2plY3RUb2Rvc1ZpZXcoaW5kZXgpIHtcbiAgICAvLyByZXR1cm5zIGEgbGlzdCBvZiBhbGwgdG9kb3MgZm9yIGEgY2VydGFpbiBwcm9qZWN0XG4gICAgY29uc3QgbXlQcm9qZWN0ID0gY29udHJvbGxlci5nZXRQcm9qZWN0QnlOdW1iZXIoaW5kZXgpO1xuICAgIGNvbnN0IHRvZG9zID0gY29udHJvbGxlci5saXN0VG9kb3NGb3JQcm9qZWN0KGluZGV4KTtcbiAgICBjb25zdCBhZGRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBjb25zdCBhZGRUb2RvRGlhbG9nID0gYWRkVG9kb01vZGFsKGZhbHNlLCBpbmRleCk7XG4gICAgY29uc3QgaDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XG4gICAgaDIudGV4dENvbnRlbnQgPSBteVByb2plY3Qud2hhdDtcbiAgICBoMi5zZXRBdHRyaWJ1dGUoXCJkYXRhLXByb2plY3QtaW5kZXhcIiwgaW5kZXgpO1xuICAgIGNvbnN0IHVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcbiAgICB1bC5hcHBlbmRDaGlsZChoMik7XG4gICAgaWYgKHRvZG9zLmxlbmd0aCA+IDApIHtcbiAgICAgICAgdG9kb3MuZm9yRWFjaCgodG9kbywgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHVsVG9kbyA9IHRvZG9WaWV3KHRvZG8sIGluZGV4KTtcbiAgICAgICAgICAgIHVsLmFwcGVuZENoaWxkKHVsVG9kbyk7XG4gICAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGBObyB0b2RvcyBmb3IgcHJvamVjdCAke2luZGV4fWApO1xuICAgIH1cbiAgICBhZGRCdXR0b24uc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJ0b2RvLWFkZFwiKTtcbiAgICBhZGRCdXR0b24udGV4dENvbnRlbnQgPSBcIisgQUREIFRPRE9cIjtcbiAgICB1bC5hcHBlbmRDaGlsZChhZGRCdXR0b24pO1xuICAgIHVsLmFwcGVuZENoaWxkKGFkZFRvZG9EaWFsb2cpO1xuICAgIHJldHVybiB1bDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRvZG9WaWV3KHRvZG8sIGluZGV4KSB7XG4gICAgLy8gcmV0dXJucyBhIHRvZG8gd2l0aCBhbGwgdGhlIGRldGFpbHNcbiAgICBjb25zdCBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgY29uc3QgdWxXaGF0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcbiAgICBjb25zdCB2YWx1ZXMgPSBbdG9kby53aGVuLCB0b2RvLnVyZ2VudCwgdG9kby5kb25lXTtcbiAgICBjb25zdCB1aVNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgY29uc3QgY29udGVudFNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgY29uc3QgY2hlY2tCb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIGNvbnN0IGNoZWNrZWQgPSAodG9kby5kb25lID09ICdZZXMnKSA/IHRydWUgOiBmYWxzZTtcbiAgICBjaGVja0JveC50eXBlID0gJ2NoZWNrYm94JztcbiAgICBjaGVja0JveC5zZXRBdHRyaWJ1dGUoXCJkYXRhLXRvZG8taW5kZXhcIiwgaW5kZXgpO1xuICAgIGNoZWNrQm94LmNoZWNrZWQgPSBjaGVja2VkO1xuICAgIHVpU3Bhbi50ZXh0Q29udGVudCA9IChcIiAoREVMKVwiKTtcbiAgICB1aVNwYW4uc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJ0b2RvLWRlbGV0ZVwiKTtcbiAgICB1aVNwYW4uc2V0QXR0cmlidXRlKFwiZGF0YS10b2RvLWluZGV4XCIsIGluZGV4KTtcbiAgICBjb250ZW50U3Bhbi50ZXh0Q29udGVudCA9IHRvZG8ud2hhdDtcbiAgICBsaS5hcHBlbmRDaGlsZChjaGVja0JveCk7XG4gICAgbGkuYXBwZW5kQ2hpbGQoY29udGVudFNwYW4pO1xuICAgIGxpLmFwcGVuZENoaWxkKHVpU3Bhbik7XG4gICAgdmFsdWVzLmZvckVhY2goKHZhbHVlLCBpbmRleCkgPT4ge1xuICAgICAgICBjb25zdCBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgICAgIGNvbnN0IGNoYW5nZVNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICAgIGNoYW5nZVNwYW4udGV4dENvbnRlbnQgPSBcIiAoRURJVClcIjtcbiAgICAgICAgY2hhbmdlU3Bhbi5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInRvZG8tZWRpdFwiKTtcbiAgICAgICAgY2hhbmdlU3Bhbi5zZXRBdHRyaWJ1dGUoXCJkYXRhLXRvZG8tZWwtaW5kZXhcIiwgaW5kZXgpO1xuICAgICAgICBsaS50ZXh0Q29udGVudCA9IHZhbHVlO1xuICAgICAgICBsaS5hcHBlbmRDaGlsZChjaGFuZ2VTcGFuKTtcbiAgICAgICAgdWxXaGF0LmFwcGVuZENoaWxkKGxpKTtcbiAgICB9KTtcbiAgICAvL2xpLmFwcGVuZENoaWxkKGgzKTtcblxuICAgIGxpLmFwcGVuZENoaWxkKHVsV2hhdCk7XG4gICAgcmV0dXJuIGxpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkRXZlbnRzVG9WaWV3KG5vZGUpIHtcbiAgICBjb25zdCBjb250YWluZXIgPSBub2RlO1xuICAgIGNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGV2ZW50cy5hZGRUb2RvRXZlbnQpO1xuICAgIGNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGV2ZW50cy5hZGRQcm9qZWN0RXZlbnQpO1xuICAgIGNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGV2ZW50cy5zaG93UHJvamVjdFRvZG9zRXZlbnQpO1xuICAgIC8vIGNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGV2ZW50cy5kZWxldGVUb2RvRXZlbnQpO1xuICAgIC8vIGNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGV2ZW50cy5kZWxldGVQcm9qZWN0RXZlbnQpO1xuICAgIC8vIGNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGV2ZW50cy5tYXJrRG9uZVRvZG9FdmVudCk7XG4gICAgLy8gcmV0dXJuIGNvbnRhaW5lcjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlZHJhd1NjcmVlbihwcm9qZWN0SW5kZXgpIHtcbiAgICAvLyBUT0RPIGFkZCAnY29udGVudCcgcGFyYW1ldGVyIHRvIHJlZHJhdyBzY3JlZW4gZm9yIG1haW4gY29udGVudCAhXG4gICAgY29uc3QgbWFpbkRpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudFwiKTtcbiAgICBtYWluRGl2LmlubmVySFRNTCA9IFwiXCI7XG4gICAgY3JlYXRlU2lkZWJhckNvbXBvbmVudChtYWluRGl2KTtcbiAgICBpZiAocHJvamVjdEluZGV4ID09IHVuZGVmaW5lZCkge1xuICAgICAgICBjcmVhdGVNYWluQ29udGVudChtYWluRGl2LCAwKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBjcmVhdGVNYWluQ29udGVudChtYWluRGl2LCBwcm9qZWN0SW5kZXgpO1xuICAgIH1cbiAgICBhZGRFdmVudHNUb1ZpZXcobWFpbkRpdik7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZU1haW5Db250ZW50KGNvbnRhaW5lckRpdiwgcHJvamVjdEluZGV4KSB7XG4gICAgLy8gQ3JlYXRlcyB0aGUgbWFpbiBjb250ZW50IGRpdiB3aXRoIHRoZSB0b2RvcyBvZiB0aGUgc2VsZWN0ZWQgcHJvamVjdFxuICAgIC8vIG9yIGZvciB0aGUgc2VsZWN0ZWQgdGltZSBwZXJpb2RcbiAgICAvLyBkZWZhdWx0IHZpZXcgPSBsYXN0IHByb2plY3QgdGFza3M/IFRvZGF5J3MgdGFza3M/P1xuICAgIGNvbnN0IG1haW5EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IHRhc2tzVWwgPSBwcm9qZWN0VG9kb3NWaWV3KHByb2plY3RJbmRleCk7XG5cbiAgICAvLyB0b2RvIGFkZCBwcm9qZWN0IHRpdGxlIGluIHByb2plY3R0b2Rvc3ZpdyBmdW5jdGlvblxuICAgIG1haW5EaXYuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJtYWluLXRhc2tzLWRpdlwiKTtcbiAgICBtYWluRGl2LmFwcGVuZENoaWxkKHRhc2tzVWwpO1xuXG4gICAgY29udGFpbmVyRGl2LmFwcGVuZENoaWxkKG1haW5EaXYpO1xufVxuXG5cbmZ1bmN0aW9uIGNyZWF0ZVNpZGViYXJDb21wb25lbnQoY29udGFpbmVyRGl2KSB7XG4gICAgLy8gQ3JlYXRlcyB0aGUgc2lkZWJhciB3aXRoIHByb2plY3QgbGlzdCwgYWRkIHRhc2sgaW5wdXQsIHRvZGF5LCBmdXR1cmVcbiAgICBjb25zdCBoZWFkZXJIMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgICBjb25zdCBzaWRlYmFyRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCBhZGRUYXNrRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCBwcm9qZWN0TGlzdERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29uc3QgdG9kYXlEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IGZ1dHVyZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29uc3QgYWRkVGFza1AgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBjb25zdCBwcm9qZWN0TGlzdFVsID0gcHJvamVjdHNWaWV3KCk7XG4gICAgY29uc3QgcHJvamVjdHNIMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcbiAgICBjb25zdCB0b2RheUgyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xuICAgIGNvbnN0IGZ1dHVyZUgyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xuICAgIGNvbnN0IGFkZFRvZG9EaWFsb2cgPSBhZGRUb2RvTW9kYWwodHJ1ZSk7XG4gICAgY29uc3QgYWRkUHJvamVjdERpYWxvZyA9IGFkZFByb2plY3RNb2RhbCgpO1xuXG4gICAgc2lkZWJhckRpdi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInNpZGViYXJcIik7XG4gICAgYWRkVGFza0Rpdi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImFkZC10YXNrXCIpO1xuICAgIHRvZGF5RGl2LnNldEF0dHJpYnV0ZShcImlkXCIsIFwidG9kYXktZGl2XCIpO1xuICAgIGZ1dHVyZURpdi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImZ1dHVyZS1kaXZcIik7XG4gICAgcHJvamVjdExpc3REaXYuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJwcm9qZWN0LWxpc3RcIik7XG4gICAgdG9kYXlEaXYuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJ0YXNrcy1mb3ItdG9kYXlcIik7XG4gICAgZnV0dXJlRGl2LnNldEF0dHJpYnV0ZShcImlkXCIsIFwiZnV0dXJlLXRhc2tzXCIpO1xuXG4gICAgYWRkVGFza1AuaW5uZXJIVE1MID0gXCJBZGQgYSB0YXNrIDxzcGFuIGNsYXNzPSdmYXQtcGx1cycgaWQ9J2FkZC10YXNrJz4rPC9zcGFuPlwiO1xuICAgIGFkZFRhc2tEaXYuYXBwZW5kQ2hpbGQoYWRkVGFza1ApO1xuICAgIGFkZFRhc2tEaXYuYXBwZW5kQ2hpbGQoYWRkVG9kb0RpYWxvZyk7XG4gICAgdG9kYXlIMi50ZXh0Q29udGVudCA9IFwiVG9kYXkncyBUYXNrc1wiO1xuICAgIGZ1dHVyZUgyLnRleHRDb250ZW50ID0gXCJUYXNrcyBmb3IgbGF0ZXJcIjtcbiAgICBwcm9qZWN0c0gyLmlubmVySFRNTCA9IFwiUHJvamVjdHMgPHNwYW4gY2xhc3M9J2ZhdC1wbHVzJyBpZD0nYWRkLXByb2plY3QnPis8L3NwYW4+XCI7XG4gICAgcHJvamVjdHNIMi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInByb2plY3RzLWgyXCIpO1xuICAgIHRvZGF5RGl2LmFwcGVuZENoaWxkKHRvZGF5SDIpO1xuICAgIGZ1dHVyZURpdi5hcHBlbmRDaGlsZChmdXR1cmVIMik7XG4gICAgcHJvamVjdExpc3REaXYuYXBwZW5kQ2hpbGQocHJvamVjdHNIMik7XG4gICAgcHJvamVjdExpc3REaXYuYXBwZW5kQ2hpbGQocHJvamVjdExpc3RVbCk7XG4gICAgaGVhZGVySDEudGV4dENvbnRlbnQgPSBcIk15IFRPRE8gbGlzdFwiO1xuXG4gICAgc2lkZWJhckRpdi5hcHBlbmRDaGlsZChoZWFkZXJIMSk7XG4gICAgc2lkZWJhckRpdi5hcHBlbmRDaGlsZChhZGRUYXNrRGl2KTtcbiAgICBzaWRlYmFyRGl2LmFwcGVuZENoaWxkKHRvZGF5RGl2KTtcbiAgICBzaWRlYmFyRGl2LmFwcGVuZENoaWxkKGZ1dHVyZURpdik7XG4gICAgc2lkZWJhckRpdi5hcHBlbmRDaGlsZChwcm9qZWN0TGlzdERpdik7XG4gICAgc2lkZWJhckRpdi5hcHBlbmRDaGlsZChhZGRQcm9qZWN0RGlhbG9nKTtcblxuICAgIGNvbnRhaW5lckRpdi5hcHBlbmRDaGlsZChzaWRlYmFyRGl2KTtcbn1cblxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuL2FwcC5qcyc7XG5pbXBvcnQgY3NzIGZyb20gJy4vc3R5bGUuY3NzJztcbmltcG9ydCAqIGFzIHZpZXdzIGZyb20gJy4vdmlld3MuanMnO1xuXG5jb25zdCBtYWluRGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50XCIpO1xuY29uc3QgaDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG5oMS50ZXh0Q29udGVudCA9IFwiTXkgUHJvamVjdHNcIjtcbmNvbnN0IHVsID0gdmlld3MucmVkcmF3U2NyZWVuKCk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9