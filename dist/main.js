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

_views_js__WEBPACK_IMPORTED_MODULE_1__.todoView(defaultTodo);

_controller_js__WEBPACK_IMPORTED_MODULE_0__.todoIsDone(defaultTodo);

// Check if todo state changed
_views_js__WEBPACK_IMPORTED_MODULE_1__.todoView(defaultTodo);

// add default todo to default project
_controller_js__WEBPACK_IMPORTED_MODULE_0__.projectAddTodo(defaultProject, defaultTodo);

// add second project and third project
_controller_js__WEBPACK_IMPORTED_MODULE_0__.projectCreate("My second TODO list");
_controller_js__WEBPACK_IMPORTED_MODULE_0__.projectCreate("Third");

// list todos for project
_views_js__WEBPACK_IMPORTED_MODULE_1__.projectTodosView("My Todo List");

// check DB
_views_js__WEBPACK_IMPORTED_MODULE_1__.projectsView();

// remove project from DB
_controller_js__WEBPACK_IMPORTED_MODULE_0__.projectDelete(defaultProject);

// check DB
_views_js__WEBPACK_IMPORTED_MODULE_1__.projectsView();

// show todos for defaultproject
_views_js__WEBPACK_IMPORTED_MODULE_1__.projectTodosView('My second TODO list');

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
        li.textContent = project.what;
        ul.appendChild(li);
    });
    return ul;
}
function projectTodosView(project) {
    // returns a list of all todos for a certain project
    const todos = _controller_js__WEBPACK_IMPORTED_MODULE_0__.listTodosForProject(project);
    if (todos.length > 0) {
        todos.forEach(todo => {
            console.log(todo.what);
        });
    } else {
        console.log("No more todos");
    }
}

function todoView(todo) {
    // returns a todo with all the details
    const todoString = `\n**Todo** \nwhat: ${todo.what} \nwhen: ${todo.when} \nurgency: ${todo.urgent} \ndone?: ${todo.done}`;
    console.log(todoString);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7QUNOa0I7QUFDa0I7O0FBRXBDO0FBQ0E7QUFDQTtBQUNBLFdBQVcsbURBQWtCOztBQUU3QjtBQUNBLHdCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWFwcC8uL3NyYy9hcHAuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWFwcC8uL3NyYy9jb250cm9sbGVyLmpzIiwid2VicGFjazovL29kaW4tdG9kby1hcHAvLi9zcmMvZGIuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWFwcC8uL3NyYy9wcm9qZWN0LmpzIiwid2VicGFjazovL29kaW4tdG9kby1hcHAvLi9zcmMvdG9kby5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tYXBwLy4vc3JjL3ZpZXdzLmpzIiwid2VicGFjazovL29kaW4tdG9kby1hcHAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWFwcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWFwcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL29kaW4tdG9kby1hcHAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9vZGluLXRvZG8tYXBwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIGNvbnRyb2xsZXIgZnJvbSAnLi9jb250cm9sbGVyLmpzJztcbmltcG9ydCAqIGFzIHZpZXdzIGZyb20gJy4vdmlld3MuanMnO1xuXG4vLyBDcmVhdGUgYSBkZWZhdWx0IHByb2plY3RcbmNvbnN0IGRlZmF1bHRQcm9qZWN0ID0gY29udHJvbGxlci5wcm9qZWN0Q3JlYXRlKCdNeSBUb2RvIExpc3QnKTtcblxuLy8gQ3JlYXRlIGEgZHVtbXkgdG9kb1xuY29uc3QgZGVmYXVsdFRvZG8gPSBjb250cm9sbGVyLnRvZG9DcmVhdGUoJ1RoaXMgYXBwJywgJ05vdycpO1xuXG52aWV3cy50b2RvVmlldyhkZWZhdWx0VG9kbyk7XG5cbmNvbnRyb2xsZXIudG9kb0lzRG9uZShkZWZhdWx0VG9kbyk7XG5cbi8vIENoZWNrIGlmIHRvZG8gc3RhdGUgY2hhbmdlZFxudmlld3MudG9kb1ZpZXcoZGVmYXVsdFRvZG8pO1xuXG4vLyBhZGQgZGVmYXVsdCB0b2RvIHRvIGRlZmF1bHQgcHJvamVjdFxuY29udHJvbGxlci5wcm9qZWN0QWRkVG9kbyhkZWZhdWx0UHJvamVjdCwgZGVmYXVsdFRvZG8pO1xuXG4vLyBhZGQgc2Vjb25kIHByb2plY3QgYW5kIHRoaXJkIHByb2plY3RcbmNvbnRyb2xsZXIucHJvamVjdENyZWF0ZShcIk15IHNlY29uZCBUT0RPIGxpc3RcIik7XG5jb250cm9sbGVyLnByb2plY3RDcmVhdGUoXCJUaGlyZFwiKTtcblxuLy8gbGlzdCB0b2RvcyBmb3IgcHJvamVjdFxudmlld3MucHJvamVjdFRvZG9zVmlldyhcIk15IFRvZG8gTGlzdFwiKTtcblxuLy8gY2hlY2sgREJcbnZpZXdzLnByb2plY3RzVmlldygpO1xuXG4vLyByZW1vdmUgcHJvamVjdCBmcm9tIERCXG5jb250cm9sbGVyLnByb2plY3REZWxldGUoZGVmYXVsdFByb2plY3QpO1xuXG4vLyBjaGVjayBEQlxudmlld3MucHJvamVjdHNWaWV3KCk7XG5cbi8vIHNob3cgdG9kb3MgZm9yIGRlZmF1bHRwcm9qZWN0XG52aWV3cy5wcm9qZWN0VG9kb3NWaWV3KCdNeSBzZWNvbmQgVE9ETyBsaXN0Jyk7IiwiLy8gQWxsIHRoZSBhY3Rpb25zIHVzZXJzIGNhbiB1bmRlcnRha2VcbmltcG9ydCB7IFRvZG8gfSBmcm9tICcuL3RvZG8uanMnO1xuaW1wb3J0IHsgUHJvamVjdCB9IGZyb20gJy4vcHJvamVjdC5qcyc7XG5pbXBvcnQgeyBkZWZhdWx0IGFzIERCIH0gZnJvbSAnLi9kYi5qcyc7XG5cbi8vIFRvZG8gYWN0aW9uc1xuLy8gVE9ETyBNYWtlIGV2ZXJ5IGZ1bmN0aW9uIHJldHVybiBzb21ldGhpbmdcblxuZXhwb3J0IGZ1bmN0aW9uIHRvZG9Jc0RvbmUodG9kbykge1xuICAgIHRvZG8uZG9uZSA9ICd5ZXMnO1xuICAgIHJldHVybiB0b2RvO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdG9kb0RlbGV0ZSh0b2RvKSB7XG4gICAgdG9kbyA9IG51bGw7XG4gICAgcmV0dXJuIHRvZG87XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0b2RvQ3JlYXRlKHdoYXQsIHdoZW4pIHtcbiAgICBjb25zdCB0b2RvID0gbmV3IFRvZG8od2hhdCwgd2hlbik7XG4gICAgcmV0dXJuIHRvZG87XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0b2RvRWRpdCh0b2RvLCB3aGF0LCB3aGVuLCB1cmdlbnQpIHtcbiAgICAvLyBUT0RPOiB0aGluayBvZiBzb21lIGRlZmF1bHRzP1xuICAgIHRvZG8ud2hhdCA9IHdoYXQ7XG4gICAgdG9kby53aGVuID0gd2hlbjtcbiAgICB0b2RvLnVyZ2VudCA9IHVyZ2VudDtcbiAgICByZXR1cm4gdG9kbztcbn1cblxuLy8gTGlzdHNcblxuZXhwb3J0IGZ1bmN0aW9uIGxpc3RUb2Rvc0ZvclByb2plY3QocHJvamVjdE5hbWUpIHtcbiAgICBjb25zdCBteVByb2plY3QgPSBEQi5nZXRQcm9qZWN0KHByb2plY3ROYW1lKTtcbiAgICByZXR1cm4gbXlQcm9qZWN0LndoaWNoO1xufVxuXG4vLyBUT0RPXG5leHBvcnQgZnVuY3Rpb24gbGlzdFRvZG9zQnlEYXRlKCkgeyB9XG5cblxuZXhwb3J0IGZ1bmN0aW9uIGxpc3RQcm9qZWN0cygpIHtcbiAgICByZXR1cm4gREIubGlzdFByb2plY3RzKCk7XG59XG5cbi8vIFByb2plY3QgYWN0aW9uc1xuXG5leHBvcnQgZnVuY3Rpb24gcHJvamVjdENyZWF0ZShuYW1lKSB7XG4gICAgY29uc3QgcHJvamVjdCA9IG5ldyBQcm9qZWN0KG5hbWUpO1xuICAgIERCLmFkZFByb2plY3QocHJvamVjdCk7XG4gICAgcmV0dXJuIHByb2plY3Q7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcm9qZWN0RGVsZXRlKHByb2plY3QpIHtcbiAgICAvLyBUT0RPIHJlbW92ZSBhbGwgVE9ETydzIGZyb20gcHJvamVjdD8/P1xuICAgIERCLmRlbGV0ZVByb2plY3QocHJvamVjdCk7XG4gICAgcHJvamVjdCA9IG51bGw7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcm9qZWN0RWRpdChwcm9qZWN0LCBuYW1lKSB7XG4gICAgcHJvamVjdC53aGF0ID0gbmFtZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByb2plY3RBZGRUb2RvKHByb2plY3QsIHRvZG8pIHtcbiAgICBwcm9qZWN0LmFkZCh0b2RvKTtcbn1cbiIsIi8vIENvbnRhaW5lciBmb3IgYWxsIHByb2plY3RzIGFuZCB0b2Rvc1xuLy8gdW5pcXVlIENMQVNTIGluc3RhbmNlIFNJTkdMRVRPTlxubGV0IGluc3RhbmNlO1xubGV0IHByb2plY3RzID0gW107XG5jbGFzcyBEQiB7XG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdGlmIChpbnN0YW5jZSkge1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKFwiTmV3IGluc3RhbmNlIGNhbm5vdCBiZSBjcmVhdGVkIVwiKTtcblx0XHRcdC8vIFRPRE8gZXJyb3IgaWYgbmFtZSBleGlzdHMgYWxyZWFkeVxuXHRcdH1cblx0XHRpbnN0YW5jZSA9IHRoaXM7XG5cdH1cblx0YWRkUHJvamVjdChwcm9qZWN0KSB7XG5cdFx0cHJvamVjdHMucHVzaChwcm9qZWN0KTtcblx0XHRjb25zb2xlLmxvZyhgUHJvamVjdCAke3Byb2plY3Qud2hhdH0gc3VjY2Vzc2Z1bGx5IGFkZGVkIHRvIERCIWApO1xuXHR9XG5cdGRlbGV0ZVByb2plY3QocHJvamVjdCkge1xuXHRcdGxldCBpbmRleCA9IHByb2plY3RzLmluZGV4T2YocHJvamVjdCk7XG5cdFx0aWYgKGluZGV4ICE9PSAtMSkge1xuXHRcdFx0cHJvamVjdHMuc3BsaWNlKGluZGV4LCAxKTtcblx0XHRcdGNvbnNvbGUubG9nKGBQcm9qZWN0ICR7cHJvamVjdC53aGF0fSBzdWNjZXNzZnVsbHkgcmVtb3ZlZCBmcm9tIERCIWApO1xuXHRcdH1cblxuXHR9XG5cdGxpc3RQcm9qZWN0cygpIHtcblx0XHRyZXR1cm4gcHJvamVjdHM7XG5cdH1cblxuXHRnZXRQcm9qZWN0KG5hbWUpIHtcblx0XHRjb25zdCBteVByb2plY3QgPSBwcm9qZWN0cy5maW5kKHByb2plY3QgPT4gcHJvamVjdC53aGF0ID09PSBuYW1lKTtcblx0XHRyZXR1cm4gbXlQcm9qZWN0O1xuXHR9XG59XG5sZXQgREJJbnN0YW5jZSA9IE9iamVjdC5mcmVlemUobmV3IERCKCkpO1xuXG5leHBvcnQgZGVmYXVsdCBEQkluc3RhbmNlO1xuIiwiY2xhc3MgUHJvamVjdCB7XG4gICAgI3doYXQ7XG4gICAgI3doaWNoID0gW107XG5cbiAgICBjb25zdHJ1Y3Rvcih3aGF0KSB7XG5cdHRoaXMuI3doYXQgPSB3aGF0O1xuXHRjb25zb2xlLmxvZyhgU3VjY2Vzc2Z1bGx5IGNyZWF0ZWQgcHJvamVjdCAke3doYXR9LmApO1xuICAgIH1cbiAgICBhZGQodG9kbykge1xuXHR0aGlzLiN3aGljaC5wdXNoKHRvZG8pO1xuXHRjb25zb2xlLmxvZyhgU3VjY2Vzc2Z1bGx5IGFkZGVkIHRvZG8gJHt0b2RvLndoYXR9IHRvIHByb2plY3QgJHt0aGlzLiN3aGF0fWApO1xuXHRjb25zb2xlLmxvZyhgVGhlIHByb2plY3Qgbm93IGNvbnRhaW5zICR7dGhpcy5jb3VudH0gdG9kbyBpdGVtcy5gKTtcbiAgICB9XG4gICAgZ2V0IGNvdW50KCkge1xuXHRyZXR1cm4gdGhpcy4jd2hpY2gubGVuZ3RoO1xuICAgIH1cblxuICAgIGdldCB3aGF0KCkge1xuXHRyZXR1cm4gdGhpcy4jd2hhdDtcbiAgICB9XG5cbiAgICBnZXQgd2hpY2goKSB7XG5cdHJldHVybiB0aGlzLiN3aGljaDtcbiAgICB9XG59XG5leHBvcnQgeyBQcm9qZWN0IH07XG4iLCIvLyBUT0RPIGdpdmUgZWFjaCB0b2RvIGFuIHVuaXF1ZSBJRFxuLy8gVE9ETyBhZGQgZWFjaCB0b2RvIHRvIGEgY2VydGFpbiBwcm9qZWN0IChlbHNlOiBEZWZhdWx0XG5cbmNsYXNzIFRvZG8ge1xuICAgICN3aGF0O1xuICAgICN3aGVuO1xuICAgICNpc1VyZ2VudDtcbiAgICAjaXNGaW5pc2hlZDtcbiAgICAjcHJvamVjdDtcblxuICAgIGNvbnN0cnVjdG9yKHdoYXQsIHdoZW4sIHByb2plY3QgPSBcIkRlZmF1bHRcIiwgaXNVcmdlbnQgPSAnTm8nLCBpc0ZpbmlzaGVkID0gJ05vJykge1xuICAgICAgICB0aGlzLiN3aGF0ID0gd2hhdDtcbiAgICAgICAgdGhpcy4jd2hlbiA9IHdoZW47XG4gICAgICAgIHRoaXMuI3Byb2plY3QgPSBwcm9qZWN0O1xuICAgICAgICB0aGlzLiNpc1VyZ2VudCA9IGlzVXJnZW50O1xuICAgICAgICB0aGlzLiNpc0ZpbmlzaGVkID0gaXNGaW5pc2hlZDtcbiAgICAgICAgY29uc29sZS5sb2coYFN1Y2Nlc3NmdWxseSBjcmVhdGVkIHRvZG8gJHt3aGF0fWApO1xuICAgIH1cbiAgICAvLyBnZXR0ZXJzXG4gICAgZ2V0IHdoYXQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLiN3aGF0O1xuICAgIH1cbiAgICBnZXQgd2hlbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuI3doZW47XG4gICAgfVxuICAgIGdldCB1cmdlbnQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLiNpc1VyZ2VudDtcbiAgICB9XG4gICAgZ2V0IGRvbmUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLiNpc0ZpbmlzaGVkO1xuICAgIH1cbiAgICAvLyBzZXR0ZXJzXG4gICAgc2V0IHdoYXQod2hhdCkge1xuICAgICAgICB0aGlzLiN3aGF0ID0gd2hhdDtcbiAgICB9XG4gICAgc2V0IHdoZW4od2hlbikge1xuICAgICAgICB0aGlzLiN3aGVuID0gd2hlbjtcbiAgICB9XG4gICAgc2V0IHVyZ2VudCh5ZXNObykge1xuICAgICAgICB0aGlzLiNpc1VyZ2VudCA9IHllc05vO1xuICAgIH1cbiAgICBzZXQgZG9uZSh5ZXNObykge1xuICAgICAgICB0aGlzLiNpc0ZpbmlzaGVkID0geWVzTm87XG4gICAgICAgIHJldHVybiB0aGlzLiNpc0ZpbmlzaGVkO1xuICAgIH1cbn1cbmV4cG9ydCB7IFRvZG8gfTtcbiIsImltcG9ydCAqIGFzIGNvbnRyb2xsZXIgZnJvbSAnLi9jb250cm9sbGVyLmpzJztcblxuLy8gQWxsIHZpZXdzIHVzZXJzIGNhbiBpbnRlcmFjdCB3aXRoXG5leHBvcnQgZnVuY3Rpb24gZGF0ZVZpZXcoKSB7XG4gICAgLy8gcmV0dXJucyB0aGUgdG9kbyBsaXN0LCBvcmRlcmVkIGJ5IGRhdGUgYW5kIGRpdmlkZWQgaW50byA0IGNhdGVnb3JpZXM6XG4gICAgLy8gVG9kYXksIFRoaXMgd2VlaywgVGhpcyBNb250aCBhbmQgTGF0ZXJcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRvZGF5VmlldygpIHtcbiAgICAvLyByZXR1cm5zIHRoZSBsaXN0IG9mIHRvZG9zIGZvciB0b2RheVxufVxuXG5leHBvcnQgZnVuY3Rpb24gcHJvamVjdHNWaWV3KCkge1xuICAgIC8vIHJldHVybnMgdGhlIGxpc3Qgb2YgYWxsIHByb2plY3RzXG4gICAgY29uc3QgcHJvamVjdHMgPSBjb250cm9sbGVyLmxpc3RQcm9qZWN0cygpO1xuICAgIGNvbnN0IHVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO1xuICAgIHByb2plY3RzLmZvckVhY2gocHJvamVjdCA9PiB7XG4gICAgICAgIGNvbnN0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICAgICAgICBsaS50ZXh0Q29udGVudCA9IHByb2plY3Qud2hhdDtcbiAgICAgICAgdWwuYXBwZW5kQ2hpbGQobGkpO1xuICAgIH0pO1xuICAgIHJldHVybiB1bDtcbn1cbmV4cG9ydCBmdW5jdGlvbiBwcm9qZWN0VG9kb3NWaWV3KHByb2plY3QpIHtcbiAgICAvLyByZXR1cm5zIGEgbGlzdCBvZiBhbGwgdG9kb3MgZm9yIGEgY2VydGFpbiBwcm9qZWN0XG4gICAgY29uc3QgdG9kb3MgPSBjb250cm9sbGVyLmxpc3RUb2Rvc0ZvclByb2plY3QocHJvamVjdCk7XG4gICAgaWYgKHRvZG9zLmxlbmd0aCA+IDApIHtcbiAgICAgICAgdG9kb3MuZm9yRWFjaCh0b2RvID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRvZG8ud2hhdCk7XG4gICAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiTm8gbW9yZSB0b2Rvc1wiKTtcbiAgICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0b2RvVmlldyh0b2RvKSB7XG4gICAgLy8gcmV0dXJucyBhIHRvZG8gd2l0aCBhbGwgdGhlIGRldGFpbHNcbiAgICBjb25zdCB0b2RvU3RyaW5nID0gYFxcbioqVG9kbyoqIFxcbndoYXQ6ICR7dG9kby53aGF0fSBcXG53aGVuOiAke3RvZG8ud2hlbn0gXFxudXJnZW5jeTogJHt0b2RvLnVyZ2VudH0gXFxuZG9uZT86ICR7dG9kby5kb25lfWA7XG4gICAgY29uc29sZS5sb2codG9kb1N0cmluZyk7XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCAnLi9hcHAuanMnO1xuaW1wb3J0ICogYXMgdmlld3MgZnJvbSAnLi92aWV3cy5qcyc7XG5cbmNvbnN0IG1haW5EaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnRcIik7XG5jb25zdCBoMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbmgxLnRleHRDb250ZW50ID0gXCJNeSBQcm9qZWN0c1wiO1xuY29uc3QgdWwgPSB2aWV3cy5wcm9qZWN0c1ZpZXcoKTtcblxubWFpbkRpdi5hcHBlbmRDaGlsZChoMSk7XG5tYWluRGl2LmFwcGVuZENoaWxkKHVsKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=