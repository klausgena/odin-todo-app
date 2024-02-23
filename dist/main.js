/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _controller_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./controller.js */ "./src/controller.js");
/* harmony import */ var _views_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./views.js */ "./src/views.js");



// Create a default project
const defaultProject = _controller_js__WEBPACK_IMPORTED_MODULE_0__.projectCreate('My Todo List');

// Create a dummy todo
const defaultTodo = _controller_js__WEBPACK_IMPORTED_MODULE_0__.todoCreate('This app', 'Now');
const secondTodo = _controller_js__WEBPACK_IMPORTED_MODULE_0__.todoCreate('This 2 app', 'Today');
const thirdTodo = _controller_js__WEBPACK_IMPORTED_MODULE_0__.todoCreate('This sdfasf app', 'Next week');
const fourthTodo = _controller_js__WEBPACK_IMPORTED_MODULE_0__.todoCreate('Thisasdfa  app', 'Tomorrow');

_views_js__WEBPACK_IMPORTED_MODULE_1__.todoView(defaultTodo);

_controller_js__WEBPACK_IMPORTED_MODULE_0__.todoIsDone(defaultTodo);

// Check if todo state changed
_views_js__WEBPACK_IMPORTED_MODULE_1__.todoView(defaultTodo);

// add default todo to default project
_controller_js__WEBPACK_IMPORTED_MODULE_0__.projectAddTodo(defaultProject, defaultTodo);

// add second project and third project
_controller_js__WEBPACK_IMPORTED_MODULE_0__.projectCreate("My second TODO list");
_controller_js__WEBPACK_IMPORTED_MODULE_0__.projectCreate("Third");
_controller_js__WEBPACK_IMPORTED_MODULE_0__.projectAddTodo(defaultProject, secondTodo);
_controller_js__WEBPACK_IMPORTED_MODULE_0__.projectAddTodo(defaultProject, thirdTodo);
_controller_js__WEBPACK_IMPORTED_MODULE_0__.projectAddTodo(defaultProject, fourthTodo);


// list todos for project
//views.projectTodosView("My Todo List");

// check DB
//views.projectsView();

// remove project from DB
//controller.projectDelete(defaultProject);

// check DB
//views.projectsView();

// show todos for defaultproject
//views.projectTodosView('My second TODO list');

/***/ }),

/***/ "./src/controller.js":
/*!***************************!*\
  !*** ./src/controller.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   listProjects: () => (/* binding */ listProjects),
/* harmony export */   listTodosByDate: () => (/* binding */ listTodosByDate),
/* harmony export */   listTodosForProject: () => (/* binding */ listTodosForProject),
/* harmony export */   projectAddTodo: () => (/* binding */ projectAddTodo),
/* harmony export */   projectCreate: () => (/* binding */ projectCreate),
/* harmony export */   projectDelete: () => (/* binding */ projectDelete),
/* harmony export */   projectEdit: () => (/* binding */ projectEdit),
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
    todo.done = 'yes';
    return todo;
}

function todoDelete(todo) {
    todo = null;
    return todo;
}

function todoCreate(what, when) {
    const todo = new _todo_js__WEBPACK_IMPORTED_MODULE_0__.Todo(what, when);
    return todo;
}

function todoEdit(todo, what, when, urgent) {
    // TODO: think of some defaults?
    todo.what = what;
    todo.when = when;
    todo.urgent = urgent;
    return todo;
}

// Lists

function listTodosForProject(projectName) {
    const myProject = _db_js__WEBPACK_IMPORTED_MODULE_2__["default"].getProject(projectName);
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
    // TODO remove all TODO's from project???
    _db_js__WEBPACK_IMPORTED_MODULE_2__["default"].deleteProject(project);
    project = null;
}

function projectEdit(project, name) {
    project.what = name;
}

function projectAddTodo(project, todo) {
    project.add(todo);
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
			// TODO error if name exists already
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

	getProject(name) {
		const myProject = projects.find(project => project.what === name);
		return myProject;
	}
}
let DBInstance = Object.freeze(new DB());

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DBInstance);


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
	console.log(`Successfully created project ${what}.`);
    }
    add(todo) {
	this.#which.push(todo);
	console.log(`Successfully added todo ${todo.what} to project ${this.#what}`);
	console.log(`The project now contains ${this.count} todo items.`);
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
/* harmony export */   dateView: () => (/* binding */ dateView),
/* harmony export */   projectTodosView: () => (/* binding */ projectTodosView),
/* harmony export */   projectsView: () => (/* binding */ projectsView),
/* harmony export */   todayView: () => (/* binding */ todayView),
/* harmony export */   todoView: () => (/* binding */ todoView)
/* harmony export */ });
/* harmony import */ var _controller_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./controller.js */ "./src/controller.js");


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
    projects.forEach(project => {
        const li = document.createElement("li");
        const h2 = document.createElement('h2');
        h2.textContent = project.what;
        li.appendChild(h2);
        // TODO append list with all project todos
        const todos = projectTodosView(project);
        if (todos) {
            li.appendChild(todos);
        }
        else {
            const string = "No todos for this project";
            const p = document.createElement('p');
            p.textContent = string;
            li.appendChild(p);
        }
        ul.appendChild(li);
    });
    return ul;
}

function projectTodosView(project) {
    // returns a list of all todos for a certain project
    const todos = _controller_js__WEBPACK_IMPORTED_MODULE_0__.listTodosForProject(project.what);
    if (todos.length > 0) {
        const ul = document.createElement('ul');
        todos.forEach(todo => {
            const ulTodo = todoView(todo);
            ul.appendChild(ulTodo);
        });
        return ul;
    } else {
        console.log(`No todos for project ${project.what}`);
        // to check if there are todos?
        return false;
    }
}

function todoView(todo) {
    // returns a todo with all the details
    const ul = document.createElement('ul');
    const ulWhat = document.createElement('ul');
    const liWhen = document.createElement('li');
    const liUrgent = document.createElement('li');
    const liDone = document.createElement('li');
    const h3 = document.createElement('h3');

    h3.textContent = todo.what;
    liWhen.textContent = todo.when;
    liUrgent.textContent = todo.urgent;
    liDone.textContent = todo.done;

    ulWhat.appendChild(liWhen);
    ulWhat.appendChild(liUrgent);
    ulWhat.appendChild(liDone);

    ul.appendChild(h3);
    ul.appendChild(ulWhat);

    return ul;
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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _app_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.js */ "./src/app.js");
/* harmony import */ var _views_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./views.js */ "./src/views.js");



const mainDiv = document.getElementById("content");
const h1 = document.createElement("h1");
h1.textContent = "My Projects";
const ul = _views_js__WEBPACK_IMPORTED_MODULE_1__.projectsView();

mainDiv.appendChild(h1);
mainDiv.appendChild(ul);
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQThDO0FBQ1Y7O0FBRXBDO0FBQ0EsdUJBQXVCLHlEQUF3Qjs7QUFFL0M7QUFDQSxvQkFBb0Isc0RBQXFCO0FBQ3pDLG1CQUFtQixzREFBcUI7QUFDeEMsa0JBQWtCLHNEQUFxQjtBQUN2QyxtQkFBbUIsc0RBQXFCOztBQUV4QywrQ0FBYzs7QUFFZCxzREFBcUI7O0FBRXJCO0FBQ0EsK0NBQWM7O0FBRWQ7QUFDQSwwREFBeUI7O0FBRXpCO0FBQ0EseURBQXdCO0FBQ3hCLHlEQUF3QjtBQUN4QiwwREFBeUI7QUFDekIsMERBQXlCO0FBQ3pCLDBEQUF5Qjs7O0FBR3pCO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDM0NBO0FBQ2lDO0FBQ007QUFDQzs7QUFFeEM7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTs7QUFFTztBQUNQLHFCQUFxQiwwQ0FBSTtBQUN6QjtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVPO0FBQ1Asc0JBQXNCLDhDQUFFO0FBQ3hCO0FBQ0E7O0FBRUE7QUFDTzs7O0FBR0E7QUFDUCxXQUFXLDhDQUFFO0FBQ2I7O0FBRUE7O0FBRU87QUFDUCx3QkFBd0IsZ0RBQU87QUFDL0IsSUFBSSw4Q0FBRTtBQUNOO0FBQ0E7O0FBRU87QUFDUDtBQUNBLElBQUksOENBQUU7QUFDTjtBQUNBOztBQUVPO0FBQ1A7QUFDQTs7QUFFTztBQUNQO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ2xFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLGNBQWM7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQixjQUFjO0FBQ3hDOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZSxVQUFVLEVBQUM7Ozs7Ozs7Ozs7Ozs7OztBQ25DMUI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSw2Q0FBNkMsS0FBSztBQUNsRDtBQUNBO0FBQ0E7QUFDQSx3Q0FBd0MsV0FBVyxhQUFhLFdBQVc7QUFDM0UseUNBQXlDLFlBQVk7QUFDckQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ21COzs7Ozs7Ozs7Ozs7Ozs7QUN6Qm5CO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUFpRCxLQUFLO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDZ0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDOUM4Qjs7QUFFOUM7QUFDTztBQUNQO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7O0FBRU87QUFDUDtBQUNBLHFCQUFxQix3REFBdUI7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRU87QUFDUDtBQUNBLGtCQUFrQiwrREFBOEI7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLE1BQU07QUFDTiw0Q0FBNEMsYUFBYTtBQUN6RDtBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7VUM1RUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7QUNOa0I7QUFDa0I7O0FBRXBDO0FBQ0E7QUFDQTtBQUNBLFdBQVcsbURBQWtCOztBQUU3QjtBQUNBLHdCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWFwcC8uL3NyYy9hcHAuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWFwcC8uL3NyYy9jb250cm9sbGVyLmpzIiwid2VicGFjazovL29kaW4tdG9kby1hcHAvLi9zcmMvZGIuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWFwcC8uL3NyYy9wcm9qZWN0LmpzIiwid2VicGFjazovL29kaW4tdG9kby1hcHAvLi9zcmMvdG9kby5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tYXBwLy4vc3JjL3ZpZXdzLmpzIiwid2VicGFjazovL29kaW4tdG9kby1hcHAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWFwcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWFwcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL29kaW4tdG9kby1hcHAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9vZGluLXRvZG8tYXBwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIGNvbnRyb2xsZXIgZnJvbSAnLi9jb250cm9sbGVyLmpzJztcbmltcG9ydCAqIGFzIHZpZXdzIGZyb20gJy4vdmlld3MuanMnO1xuXG4vLyBDcmVhdGUgYSBkZWZhdWx0IHByb2plY3RcbmNvbnN0IGRlZmF1bHRQcm9qZWN0ID0gY29udHJvbGxlci5wcm9qZWN0Q3JlYXRlKCdNeSBUb2RvIExpc3QnKTtcblxuLy8gQ3JlYXRlIGEgZHVtbXkgdG9kb1xuY29uc3QgZGVmYXVsdFRvZG8gPSBjb250cm9sbGVyLnRvZG9DcmVhdGUoJ1RoaXMgYXBwJywgJ05vdycpO1xuY29uc3Qgc2Vjb25kVG9kbyA9IGNvbnRyb2xsZXIudG9kb0NyZWF0ZSgnVGhpcyAyIGFwcCcsICdUb2RheScpO1xuY29uc3QgdGhpcmRUb2RvID0gY29udHJvbGxlci50b2RvQ3JlYXRlKCdUaGlzIHNkZmFzZiBhcHAnLCAnTmV4dCB3ZWVrJyk7XG5jb25zdCBmb3VydGhUb2RvID0gY29udHJvbGxlci50b2RvQ3JlYXRlKCdUaGlzYXNkZmEgIGFwcCcsICdUb21vcnJvdycpO1xuXG52aWV3cy50b2RvVmlldyhkZWZhdWx0VG9kbyk7XG5cbmNvbnRyb2xsZXIudG9kb0lzRG9uZShkZWZhdWx0VG9kbyk7XG5cbi8vIENoZWNrIGlmIHRvZG8gc3RhdGUgY2hhbmdlZFxudmlld3MudG9kb1ZpZXcoZGVmYXVsdFRvZG8pO1xuXG4vLyBhZGQgZGVmYXVsdCB0b2RvIHRvIGRlZmF1bHQgcHJvamVjdFxuY29udHJvbGxlci5wcm9qZWN0QWRkVG9kbyhkZWZhdWx0UHJvamVjdCwgZGVmYXVsdFRvZG8pO1xuXG4vLyBhZGQgc2Vjb25kIHByb2plY3QgYW5kIHRoaXJkIHByb2plY3RcbmNvbnRyb2xsZXIucHJvamVjdENyZWF0ZShcIk15IHNlY29uZCBUT0RPIGxpc3RcIik7XG5jb250cm9sbGVyLnByb2plY3RDcmVhdGUoXCJUaGlyZFwiKTtcbmNvbnRyb2xsZXIucHJvamVjdEFkZFRvZG8oZGVmYXVsdFByb2plY3QsIHNlY29uZFRvZG8pO1xuY29udHJvbGxlci5wcm9qZWN0QWRkVG9kbyhkZWZhdWx0UHJvamVjdCwgdGhpcmRUb2RvKTtcbmNvbnRyb2xsZXIucHJvamVjdEFkZFRvZG8oZGVmYXVsdFByb2plY3QsIGZvdXJ0aFRvZG8pO1xuXG5cbi8vIGxpc3QgdG9kb3MgZm9yIHByb2plY3Rcbi8vdmlld3MucHJvamVjdFRvZG9zVmlldyhcIk15IFRvZG8gTGlzdFwiKTtcblxuLy8gY2hlY2sgREJcbi8vdmlld3MucHJvamVjdHNWaWV3KCk7XG5cbi8vIHJlbW92ZSBwcm9qZWN0IGZyb20gREJcbi8vY29udHJvbGxlci5wcm9qZWN0RGVsZXRlKGRlZmF1bHRQcm9qZWN0KTtcblxuLy8gY2hlY2sgREJcbi8vdmlld3MucHJvamVjdHNWaWV3KCk7XG5cbi8vIHNob3cgdG9kb3MgZm9yIGRlZmF1bHRwcm9qZWN0XG4vL3ZpZXdzLnByb2plY3RUb2Rvc1ZpZXcoJ015IHNlY29uZCBUT0RPIGxpc3QnKTsiLCIvLyBBbGwgdGhlIGFjdGlvbnMgdXNlcnMgY2FuIHVuZGVydGFrZVxuaW1wb3J0IHsgVG9kbyB9IGZyb20gJy4vdG9kby5qcyc7XG5pbXBvcnQgeyBQcm9qZWN0IH0gZnJvbSAnLi9wcm9qZWN0LmpzJztcbmltcG9ydCB7IGRlZmF1bHQgYXMgREIgfSBmcm9tICcuL2RiLmpzJztcblxuLy8gVG9kbyBhY3Rpb25zXG4vLyBUT0RPIE1ha2UgZXZlcnkgZnVuY3Rpb24gcmV0dXJuIHNvbWV0aGluZ1xuXG5leHBvcnQgZnVuY3Rpb24gdG9kb0lzRG9uZSh0b2RvKSB7XG4gICAgdG9kby5kb25lID0gJ3llcyc7XG4gICAgcmV0dXJuIHRvZG87XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0b2RvRGVsZXRlKHRvZG8pIHtcbiAgICB0b2RvID0gbnVsbDtcbiAgICByZXR1cm4gdG9kbztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRvZG9DcmVhdGUod2hhdCwgd2hlbikge1xuICAgIGNvbnN0IHRvZG8gPSBuZXcgVG9kbyh3aGF0LCB3aGVuKTtcbiAgICByZXR1cm4gdG9kbztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRvZG9FZGl0KHRvZG8sIHdoYXQsIHdoZW4sIHVyZ2VudCkge1xuICAgIC8vIFRPRE86IHRoaW5rIG9mIHNvbWUgZGVmYXVsdHM/XG4gICAgdG9kby53aGF0ID0gd2hhdDtcbiAgICB0b2RvLndoZW4gPSB3aGVuO1xuICAgIHRvZG8udXJnZW50ID0gdXJnZW50O1xuICAgIHJldHVybiB0b2RvO1xufVxuXG4vLyBMaXN0c1xuXG5leHBvcnQgZnVuY3Rpb24gbGlzdFRvZG9zRm9yUHJvamVjdChwcm9qZWN0TmFtZSkge1xuICAgIGNvbnN0IG15UHJvamVjdCA9IERCLmdldFByb2plY3QocHJvamVjdE5hbWUpO1xuICAgIHJldHVybiBteVByb2plY3Qud2hpY2g7XG59XG5cbi8vIFRPRE9cbmV4cG9ydCBmdW5jdGlvbiBsaXN0VG9kb3NCeURhdGUoKSB7IH1cblxuXG5leHBvcnQgZnVuY3Rpb24gbGlzdFByb2plY3RzKCkge1xuICAgIHJldHVybiBEQi5saXN0UHJvamVjdHMoKTtcbn1cblxuLy8gUHJvamVjdCBhY3Rpb25zXG5cbmV4cG9ydCBmdW5jdGlvbiBwcm9qZWN0Q3JlYXRlKG5hbWUpIHtcbiAgICBjb25zdCBwcm9qZWN0ID0gbmV3IFByb2plY3QobmFtZSk7XG4gICAgREIuYWRkUHJvamVjdChwcm9qZWN0KTtcbiAgICByZXR1cm4gcHJvamVjdDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByb2plY3REZWxldGUocHJvamVjdCkge1xuICAgIC8vIFRPRE8gcmVtb3ZlIGFsbCBUT0RPJ3MgZnJvbSBwcm9qZWN0Pz8/XG4gICAgREIuZGVsZXRlUHJvamVjdChwcm9qZWN0KTtcbiAgICBwcm9qZWN0ID0gbnVsbDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByb2plY3RFZGl0KHByb2plY3QsIG5hbWUpIHtcbiAgICBwcm9qZWN0LndoYXQgPSBuYW1lO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcHJvamVjdEFkZFRvZG8ocHJvamVjdCwgdG9kbykge1xuICAgIHByb2plY3QuYWRkKHRvZG8pO1xufVxuIiwiLy8gQ29udGFpbmVyIGZvciBhbGwgcHJvamVjdHMgYW5kIHRvZG9zXG4vLyB1bmlxdWUgQ0xBU1MgaW5zdGFuY2UgU0lOR0xFVE9OXG5sZXQgaW5zdGFuY2U7XG5sZXQgcHJvamVjdHMgPSBbXTtcbmNsYXNzIERCIHtcblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0aWYgKGluc3RhbmNlKSB7XG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoXCJOZXcgaW5zdGFuY2UgY2Fubm90IGJlIGNyZWF0ZWQhXCIpO1xuXHRcdFx0Ly8gVE9ETyBlcnJvciBpZiBuYW1lIGV4aXN0cyBhbHJlYWR5XG5cdFx0fVxuXHRcdGluc3RhbmNlID0gdGhpcztcblx0fVxuXHRhZGRQcm9qZWN0KHByb2plY3QpIHtcblx0XHRwcm9qZWN0cy5wdXNoKHByb2plY3QpO1xuXHRcdGNvbnNvbGUubG9nKGBQcm9qZWN0ICR7cHJvamVjdC53aGF0fSBzdWNjZXNzZnVsbHkgYWRkZWQgdG8gREIhYCk7XG5cdH1cblx0ZGVsZXRlUHJvamVjdChwcm9qZWN0KSB7XG5cdFx0bGV0IGluZGV4ID0gcHJvamVjdHMuaW5kZXhPZihwcm9qZWN0KTtcblx0XHRpZiAoaW5kZXggIT09IC0xKSB7XG5cdFx0XHRwcm9qZWN0cy5zcGxpY2UoaW5kZXgsIDEpO1xuXHRcdFx0Y29uc29sZS5sb2coYFByb2plY3QgJHtwcm9qZWN0LndoYXR9IHN1Y2Nlc3NmdWxseSByZW1vdmVkIGZyb20gREIhYCk7XG5cdFx0fVxuXG5cdH1cblx0bGlzdFByb2plY3RzKCkge1xuXHRcdHJldHVybiBwcm9qZWN0cztcblx0fVxuXG5cdGdldFByb2plY3QobmFtZSkge1xuXHRcdGNvbnN0IG15UHJvamVjdCA9IHByb2plY3RzLmZpbmQocHJvamVjdCA9PiBwcm9qZWN0LndoYXQgPT09IG5hbWUpO1xuXHRcdHJldHVybiBteVByb2plY3Q7XG5cdH1cbn1cbmxldCBEQkluc3RhbmNlID0gT2JqZWN0LmZyZWV6ZShuZXcgREIoKSk7XG5cbmV4cG9ydCBkZWZhdWx0IERCSW5zdGFuY2U7XG4iLCJjbGFzcyBQcm9qZWN0IHtcbiAgICAjd2hhdDtcbiAgICAjd2hpY2ggPSBbXTtcblxuICAgIGNvbnN0cnVjdG9yKHdoYXQpIHtcblx0dGhpcy4jd2hhdCA9IHdoYXQ7XG5cdGNvbnNvbGUubG9nKGBTdWNjZXNzZnVsbHkgY3JlYXRlZCBwcm9qZWN0ICR7d2hhdH0uYCk7XG4gICAgfVxuICAgIGFkZCh0b2RvKSB7XG5cdHRoaXMuI3doaWNoLnB1c2godG9kbyk7XG5cdGNvbnNvbGUubG9nKGBTdWNjZXNzZnVsbHkgYWRkZWQgdG9kbyAke3RvZG8ud2hhdH0gdG8gcHJvamVjdCAke3RoaXMuI3doYXR9YCk7XG5cdGNvbnNvbGUubG9nKGBUaGUgcHJvamVjdCBub3cgY29udGFpbnMgJHt0aGlzLmNvdW50fSB0b2RvIGl0ZW1zLmApO1xuICAgIH1cbiAgICBnZXQgY291bnQoKSB7XG5cdHJldHVybiB0aGlzLiN3aGljaC5sZW5ndGg7XG4gICAgfVxuXG4gICAgZ2V0IHdoYXQoKSB7XG5cdHJldHVybiB0aGlzLiN3aGF0O1xuICAgIH1cblxuICAgIGdldCB3aGljaCgpIHtcblx0cmV0dXJuIHRoaXMuI3doaWNoO1xuICAgIH1cbn1cbmV4cG9ydCB7IFByb2plY3QgfTtcbiIsIi8vIFRPRE8gZ2l2ZSBlYWNoIHRvZG8gYW4gdW5pcXVlIElEXG4vLyBUT0RPIGFkZCBlYWNoIHRvZG8gdG8gYSBjZXJ0YWluIHByb2plY3QgKGVsc2U6IERlZmF1bHRcblxuY2xhc3MgVG9kbyB7XG4gICAgI3doYXQ7XG4gICAgI3doZW47XG4gICAgI2lzVXJnZW50O1xuICAgICNpc0ZpbmlzaGVkO1xuICAgICNwcm9qZWN0O1xuXG4gICAgY29uc3RydWN0b3Iod2hhdCwgd2hlbiwgcHJvamVjdCA9IFwiRGVmYXVsdFwiLCBpc1VyZ2VudCA9ICdObycsIGlzRmluaXNoZWQgPSAnTm8nKSB7XG4gICAgICAgIHRoaXMuI3doYXQgPSB3aGF0O1xuICAgICAgICB0aGlzLiN3aGVuID0gd2hlbjtcbiAgICAgICAgdGhpcy4jcHJvamVjdCA9IHByb2plY3Q7XG4gICAgICAgIHRoaXMuI2lzVXJnZW50ID0gaXNVcmdlbnQ7XG4gICAgICAgIHRoaXMuI2lzRmluaXNoZWQgPSBpc0ZpbmlzaGVkO1xuICAgICAgICBjb25zb2xlLmxvZyhgU3VjY2Vzc2Z1bGx5IGNyZWF0ZWQgdG9kbyAke3doYXR9YCk7XG4gICAgfVxuICAgIC8vIGdldHRlcnNcbiAgICBnZXQgd2hhdCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuI3doYXQ7XG4gICAgfVxuICAgIGdldCB3aGVuKCkge1xuICAgICAgICByZXR1cm4gdGhpcy4jd2hlbjtcbiAgICB9XG4gICAgZ2V0IHVyZ2VudCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuI2lzVXJnZW50O1xuICAgIH1cbiAgICBnZXQgZG9uZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuI2lzRmluaXNoZWQ7XG4gICAgfVxuICAgIC8vIHNldHRlcnNcbiAgICBzZXQgd2hhdCh3aGF0KSB7XG4gICAgICAgIHRoaXMuI3doYXQgPSB3aGF0O1xuICAgIH1cbiAgICBzZXQgd2hlbih3aGVuKSB7XG4gICAgICAgIHRoaXMuI3doZW4gPSB3aGVuO1xuICAgIH1cbiAgICBzZXQgdXJnZW50KHllc05vKSB7XG4gICAgICAgIHRoaXMuI2lzVXJnZW50ID0geWVzTm87XG4gICAgfVxuICAgIHNldCBkb25lKHllc05vKSB7XG4gICAgICAgIHRoaXMuI2lzRmluaXNoZWQgPSB5ZXNObztcbiAgICAgICAgcmV0dXJuIHRoaXMuI2lzRmluaXNoZWQ7XG4gICAgfVxufVxuZXhwb3J0IHsgVG9kbyB9O1xuIiwiaW1wb3J0ICogYXMgY29udHJvbGxlciBmcm9tICcuL2NvbnRyb2xsZXIuanMnO1xuXG4vLyBBbGwgdmlld3MgdXNlcnMgY2FuIGludGVyYWN0IHdpdGhcbmV4cG9ydCBmdW5jdGlvbiBkYXRlVmlldygpIHtcbiAgICAvLyByZXR1cm5zIHRoZSB0b2RvIGxpc3QsIG9yZGVyZWQgYnkgZGF0ZSBhbmQgZGl2aWRlZCBpbnRvIDQgY2F0ZWdvcmllczpcbiAgICAvLyBUb2RheSwgVGhpcyB3ZWVrLCBUaGlzIE1vbnRoIGFuZCBMYXRlclxufVxuXG5leHBvcnQgZnVuY3Rpb24gdG9kYXlWaWV3KCkge1xuICAgIC8vIHJldHVybnMgdGhlIGxpc3Qgb2YgdG9kb3MgZm9yIHRvZGF5XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcm9qZWN0c1ZpZXcoKSB7XG4gICAgLy8gcmV0dXJucyB0aGUgbGlzdCBvZiBhbGwgcHJvamVjdHNcbiAgICBjb25zdCBwcm9qZWN0cyA9IGNvbnRyb2xsZXIubGlzdFByb2plY3RzKCk7XG4gICAgY29uc3QgdWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XG4gICAgcHJvamVjdHMuZm9yRWFjaChwcm9qZWN0ID0+IHtcbiAgICAgICAgY29uc3QgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gICAgICAgIGNvbnN0IGgyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICAgICAgaDIudGV4dENvbnRlbnQgPSBwcm9qZWN0LndoYXQ7XG4gICAgICAgIGxpLmFwcGVuZENoaWxkKGgyKTtcbiAgICAgICAgLy8gVE9ETyBhcHBlbmQgbGlzdCB3aXRoIGFsbCBwcm9qZWN0IHRvZG9zXG4gICAgICAgIGNvbnN0IHRvZG9zID0gcHJvamVjdFRvZG9zVmlldyhwcm9qZWN0KTtcbiAgICAgICAgaWYgKHRvZG9zKSB7XG4gICAgICAgICAgICBsaS5hcHBlbmRDaGlsZCh0b2Rvcyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBjb25zdCBzdHJpbmcgPSBcIk5vIHRvZG9zIGZvciB0aGlzIHByb2plY3RcIjtcbiAgICAgICAgICAgIGNvbnN0IHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgICAgICBwLnRleHRDb250ZW50ID0gc3RyaW5nO1xuICAgICAgICAgICAgbGkuYXBwZW5kQ2hpbGQocCk7XG4gICAgICAgIH1cbiAgICAgICAgdWwuYXBwZW5kQ2hpbGQobGkpO1xuICAgIH0pO1xuICAgIHJldHVybiB1bDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByb2plY3RUb2Rvc1ZpZXcocHJvamVjdCkge1xuICAgIC8vIHJldHVybnMgYSBsaXN0IG9mIGFsbCB0b2RvcyBmb3IgYSBjZXJ0YWluIHByb2plY3RcbiAgICBjb25zdCB0b2RvcyA9IGNvbnRyb2xsZXIubGlzdFRvZG9zRm9yUHJvamVjdChwcm9qZWN0LndoYXQpO1xuICAgIGlmICh0b2Rvcy5sZW5ndGggPiAwKSB7XG4gICAgICAgIGNvbnN0IHVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcbiAgICAgICAgdG9kb3MuZm9yRWFjaCh0b2RvID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHVsVG9kbyA9IHRvZG9WaWV3KHRvZG8pO1xuICAgICAgICAgICAgdWwuYXBwZW5kQ2hpbGQodWxUb2RvKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiB1bDtcbiAgICB9IGVsc2Uge1xuICAgICAgICBjb25zb2xlLmxvZyhgTm8gdG9kb3MgZm9yIHByb2plY3QgJHtwcm9qZWN0LndoYXR9YCk7XG4gICAgICAgIC8vIHRvIGNoZWNrIGlmIHRoZXJlIGFyZSB0b2Rvcz9cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRvZG9WaWV3KHRvZG8pIHtcbiAgICAvLyByZXR1cm5zIGEgdG9kbyB3aXRoIGFsbCB0aGUgZGV0YWlsc1xuICAgIGNvbnN0IHVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcbiAgICBjb25zdCB1bFdoYXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xuICAgIGNvbnN0IGxpV2hlbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgY29uc3QgbGlVcmdlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIGNvbnN0IGxpRG9uZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgY29uc3QgaDMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuXG4gICAgaDMudGV4dENvbnRlbnQgPSB0b2RvLndoYXQ7XG4gICAgbGlXaGVuLnRleHRDb250ZW50ID0gdG9kby53aGVuO1xuICAgIGxpVXJnZW50LnRleHRDb250ZW50ID0gdG9kby51cmdlbnQ7XG4gICAgbGlEb25lLnRleHRDb250ZW50ID0gdG9kby5kb25lO1xuXG4gICAgdWxXaGF0LmFwcGVuZENoaWxkKGxpV2hlbik7XG4gICAgdWxXaGF0LmFwcGVuZENoaWxkKGxpVXJnZW50KTtcbiAgICB1bFdoYXQuYXBwZW5kQ2hpbGQobGlEb25lKTtcblxuICAgIHVsLmFwcGVuZENoaWxkKGgzKTtcbiAgICB1bC5hcHBlbmRDaGlsZCh1bFdoYXQpO1xuXG4gICAgcmV0dXJuIHVsO1xufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgJy4vYXBwLmpzJztcbmltcG9ydCAqIGFzIHZpZXdzIGZyb20gJy4vdmlld3MuanMnO1xuXG5jb25zdCBtYWluRGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50XCIpO1xuY29uc3QgaDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG5oMS50ZXh0Q29udGVudCA9IFwiTXkgUHJvamVjdHNcIjtcbmNvbnN0IHVsID0gdmlld3MucHJvamVjdHNWaWV3KCk7XG5cbm1haW5EaXYuYXBwZW5kQ2hpbGQoaDEpO1xubWFpbkRpdi5hcHBlbmRDaGlsZCh1bCk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9