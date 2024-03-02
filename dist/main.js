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
const defaultProject = _controller_js__WEBPACK_IMPORTED_MODULE_0__.projectCreate('My project');
// add second project and third project
const second = _controller_js__WEBPACK_IMPORTED_MODULE_0__.projectCreate("My second project");
const third = _controller_js__WEBPACK_IMPORTED_MODULE_0__.projectCreate("Third project is todo list");

// Create a dummy todo
const defaultTodo = _controller_js__WEBPACK_IMPORTED_MODULE_0__.todoCreate('This todo', 'Now', defaultProject);
const secondTodo = _controller_js__WEBPACK_IMPORTED_MODULE_0__.todoCreate('This 2 todo', 'Today', second);
const thirdTodo = _controller_js__WEBPACK_IMPORTED_MODULE_0__.todoCreate('This todo todo', 'Next week', third);
const fourthTodo = _controller_js__WEBPACK_IMPORTED_MODULE_0__.todoCreate('Thisasdfa todo', 'Tomorrow', third);

_views_js__WEBPACK_IMPORTED_MODULE_1__.todoView(defaultTodo);

_controller_js__WEBPACK_IMPORTED_MODULE_0__.todoIsDone(defaultTodo);

// Check if todo state changed
_views_js__WEBPACK_IMPORTED_MODULE_1__.todoView(defaultTodo);

/***/ }),

/***/ "./src/controller.js":
/*!***************************!*\
  !*** ./src/controller.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getProjectByNumber: () => (/* binding */ getProjectByNumber),
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
		// NEEDED???
		const myProject = projects.find(project => project.what === name);
		return myProject;
	}

	getProjectByNumber(number) {
		return projects[number];
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
/* harmony export */   toggleTreeEvent: () => (/* binding */ toggleTreeEvent)
/* harmony export */ });
/* harmony import */ var _views_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./views.js */ "./src/views.js");
/* harmony import */ var _controller_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./controller.js */ "./src/controller.js");



function addTodoEvent(event) {
    const target = event.target;
    if (target.className == "todo-add") {
        const projectLi = target.closest("h2 + ul").parentElement;
        const projectId = projectLi.querySelector("span").dataset.projectIndex;
        const myProject = _controller_js__WEBPACK_IMPORTED_MODULE_1__.getProjectByNumber(projectId);
        // TODO add modal or input fields
        _controller_js__WEBPACK_IMPORTED_MODULE_1__.todoCreate("this todo stupid name fuck suck dick", "next month", myProject);
        _views_js__WEBPACK_IMPORTED_MODULE_0__.redrawScreen();
    }
}

function addProjectEvent(event) {
    // add functionality
    const target = event.target;
    if (target.id == "add-project") {
        _controller_js__WEBPACK_IMPORTED_MODULE_1__.projectCreate("New Fucking Project! YOUOHOU!");
        // TODO add modal or input fields
        _views_js__WEBPACK_IMPORTED_MODULE_0__.redrawScreen();
    }
}

function deleteTodoEvent() {

}

function deleteProjectEvent() {

}

function markDoneTodoEvent() {

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
        console.log(`Successfully created project ${what}.`);
    }
    add(todo) {
        this.#which.push(todo);
        console.log(`Successfully added todo ${todo.what} to project ${this.#what}`);
        console.log(`The project now contains ${this.count} todo items.`);
    }
    delete(todo) {
        this.#which.splice(index, 1);
        console.log(`Successfully deleted todo ${todo.what} from project ${this.#what}`);
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
    const addButton = document.createElement('button');
    projects.forEach((project, index) => {
        const li = document.createElement("li");
        const h2 = document.createElement('h2');
        const delSpan = document.createElement('span');
        delSpan.textContent = ' (DEL)';
        delSpan.setAttribute("class", "project-delete");
        delSpan.setAttribute("data-project-index", index);
        h2.textContent = project.what;
        h2.appendChild(delSpan);
        li.appendChild(h2);
        // append list with all project todos
        const todos = projectTodosView(project);
        if (todos) {
            li.appendChild(todos);
        }
        ul.appendChild(li);
    });
    addButton.textContent = "+ ADD PROJECT";
    addButton.setAttribute("id", "add-project");
    ul.appendChild(addButton);
    return ul;
}

function projectTodosView(project) {
    // returns a list of all todos for a certain project
    const todos = _controller_js__WEBPACK_IMPORTED_MODULE_0__.listTodosForProject(project.what);
    const addButton = document.createElement('button');
    const ul = document.createElement('ul');
    if (todos.length > 0) {
        todos.forEach((todo, index) => {
            const ulTodo = todoView(todo, index);
            ul.appendChild(ulTodo);


        });
    } else {
        console.log(`No todos for project ${project.what}`);
    }
    addButton.setAttribute("class", "todo-add");
    addButton.textContent = "+ ADD TODO";
    ul.appendChild(addButton);
    return ul;
}

function todoView(todo, index) {
    // returns a todo with all the details
    const li = document.createElement('li');
    const ulWhat = document.createElement('ul');
    const values = [todo.when, todo.urgent, todo.done];
    const h3 = document.createElement('h3');
    const uiSpan = document.createElement('span');
    const checkBox = document.createElement('input');
    checkBox.type = 'checkbox';
    checkBox.setAttribute("data-todo-index", index);
    uiSpan.textContent = (" (DEL)");
    uiSpan.setAttribute("class", "todo-delete");
    uiSpan.setAttribute("data-todo-index", index);
    h3.textContent = todo.what;
    h3.appendChild(checkBox);
    h3.appendChild(uiSpan);
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
    li.appendChild(h3);

    li.appendChild(ulWhat);
    return li;
}

function addEventsToView(viewFunction) {
    const container = viewFunction();
    container.addEventListener('click', _events_js__WEBPACK_IMPORTED_MODULE_1__.addTodoEvent);
    container.addEventListener('click', _events_js__WEBPACK_IMPORTED_MODULE_1__.addProjectEvent);
    return container;
}

function redrawScreen() {
    const mainDiv = document.getElementById("content");
    mainDiv.innerHTML = "";
    const h1 = document.createElement("h1");
    h1.textContent = "My Projects";
    const ul = addEventsToView(projectsView);
    mainDiv.appendChild(h1);
    mainDiv.appendChild(ul);
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
const ul = _views_js__WEBPACK_IMPORTED_MODULE_1__.redrawScreen();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0Esa0JBQWtCLCtEQUE4QjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBLFNBQVM7QUFDVCxNQUFNO0FBQ04sNENBQTRDLGFBQWE7QUFDekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0Esd0NBQXdDLG9EQUFtQjtBQUMzRCx3Q0FBd0MsdURBQXNCO0FBQzlEO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7VUM3R0E7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7QUNOa0I7QUFDa0I7O0FBRXBDO0FBQ0E7QUFDQTtBQUNBLFdBQVcsbURBQWtCLEciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vZGluLXRvZG8tYXBwLy4vc3JjL2FwcC5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tYXBwLy4vc3JjL2NvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWFwcC8uL3NyYy9kYi5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tYXBwLy4vc3JjL2V2ZW50cy5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tYXBwLy4vc3JjL3Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWFwcC8uL3NyYy90b2RvLmpzIiwid2VicGFjazovL29kaW4tdG9kby1hcHAvLi9zcmMvdmlld3MuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWFwcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9vZGluLXRvZG8tYXBwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tYXBwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWFwcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL29kaW4tdG9kby1hcHAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgY29udHJvbGxlciBmcm9tICcuL2NvbnRyb2xsZXIuanMnO1xuaW1wb3J0ICogYXMgdmlld3MgZnJvbSAnLi92aWV3cy5qcyc7XG5cbi8vIENyZWF0ZSBhIGRlZmF1bHQgcHJvamVjdFxuY29uc3QgZGVmYXVsdFByb2plY3QgPSBjb250cm9sbGVyLnByb2plY3RDcmVhdGUoJ015IHByb2plY3QnKTtcbi8vIGFkZCBzZWNvbmQgcHJvamVjdCBhbmQgdGhpcmQgcHJvamVjdFxuY29uc3Qgc2Vjb25kID0gY29udHJvbGxlci5wcm9qZWN0Q3JlYXRlKFwiTXkgc2Vjb25kIHByb2plY3RcIik7XG5jb25zdCB0aGlyZCA9IGNvbnRyb2xsZXIucHJvamVjdENyZWF0ZShcIlRoaXJkIHByb2plY3QgaXMgdG9kbyBsaXN0XCIpO1xuXG4vLyBDcmVhdGUgYSBkdW1teSB0b2RvXG5jb25zdCBkZWZhdWx0VG9kbyA9IGNvbnRyb2xsZXIudG9kb0NyZWF0ZSgnVGhpcyB0b2RvJywgJ05vdycsIGRlZmF1bHRQcm9qZWN0KTtcbmNvbnN0IHNlY29uZFRvZG8gPSBjb250cm9sbGVyLnRvZG9DcmVhdGUoJ1RoaXMgMiB0b2RvJywgJ1RvZGF5Jywgc2Vjb25kKTtcbmNvbnN0IHRoaXJkVG9kbyA9IGNvbnRyb2xsZXIudG9kb0NyZWF0ZSgnVGhpcyB0b2RvIHRvZG8nLCAnTmV4dCB3ZWVrJywgdGhpcmQpO1xuY29uc3QgZm91cnRoVG9kbyA9IGNvbnRyb2xsZXIudG9kb0NyZWF0ZSgnVGhpc2FzZGZhIHRvZG8nLCAnVG9tb3Jyb3cnLCB0aGlyZCk7XG5cbnZpZXdzLnRvZG9WaWV3KGRlZmF1bHRUb2RvKTtcblxuY29udHJvbGxlci50b2RvSXNEb25lKGRlZmF1bHRUb2RvKTtcblxuLy8gQ2hlY2sgaWYgdG9kbyBzdGF0ZSBjaGFuZ2VkXG52aWV3cy50b2RvVmlldyhkZWZhdWx0VG9kbyk7IiwiLy8gQWxsIHRoZSBhY3Rpb25zIHVzZXJzIGNhbiB1bmRlcnRha2VcbmltcG9ydCB7IFRvZG8gfSBmcm9tICcuL3RvZG8uanMnO1xuaW1wb3J0IHsgUHJvamVjdCB9IGZyb20gJy4vcHJvamVjdC5qcyc7XG5pbXBvcnQgeyBkZWZhdWx0IGFzIERCIH0gZnJvbSAnLi9kYi5qcyc7XG5cbi8vIFRvZG8gYWN0aW9uc1xuLy8gVE9ETyBNYWtlIGV2ZXJ5IGZ1bmN0aW9uIHJldHVybiBzb21ldGhpbmdcblxuZXhwb3J0IGZ1bmN0aW9uIHRvZG9Jc0RvbmUodG9kbykge1xuICAgIHRvZG8uZG9uZSA9ICd5ZXMnO1xuICAgIHJldHVybiB0b2RvO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdG9kb0RlbGV0ZShwcm9qZWN0LCB0b2RvSW5kZXgpIHtcbiAgICBwcm9qZWN0LmRlbGV0ZSh0b2RvSW5kZXgpO1xuICAgIHJldHVybiBwcm9qZWN0O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdG9kb0NyZWF0ZSh3aGF0LCB3aGVuLCBwcm9qZWN0KSB7XG4gICAgY29uc3QgdG9kbyA9IG5ldyBUb2RvKHdoYXQsIHdoZW4pO1xuICAgIHByb2plY3QuYWRkKHRvZG8pO1xuICAgIHJldHVybiBwcm9qZWN0O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdG9kb0VkaXQodG9kbywgd2hhdCwgd2hlbiwgdXJnZW50KSB7XG4gICAgLy8gVE9ETzogdGhpbmsgb2Ygc29tZSBkZWZhdWx0cz9cbiAgICB0b2RvLndoYXQgPSB3aGF0O1xuICAgIHRvZG8ud2hlbiA9IHdoZW47XG4gICAgdG9kby51cmdlbnQgPSB1cmdlbnQ7XG4gICAgcmV0dXJuIHRvZG87XG59XG5cbi8vIExpc3RzXG5cbmV4cG9ydCBmdW5jdGlvbiBsaXN0VG9kb3NGb3JQcm9qZWN0KHByb2plY3ROYW1lKSB7XG4gICAgY29uc3QgbXlQcm9qZWN0ID0gREIuZ2V0UHJvamVjdChwcm9qZWN0TmFtZSk7XG4gICAgcmV0dXJuIG15UHJvamVjdC53aGljaDtcbn1cblxuLy8gVE9ET1xuZXhwb3J0IGZ1bmN0aW9uIGxpc3RUb2Rvc0J5RGF0ZSgpIHsgfVxuXG5cbmV4cG9ydCBmdW5jdGlvbiBsaXN0UHJvamVjdHMoKSB7XG4gICAgcmV0dXJuIERCLmxpc3RQcm9qZWN0cygpO1xufVxuXG4vLyBQcm9qZWN0IGFjdGlvbnNcblxuZXhwb3J0IGZ1bmN0aW9uIHByb2plY3RDcmVhdGUobmFtZSkge1xuICAgIGNvbnN0IHByb2plY3QgPSBuZXcgUHJvamVjdChuYW1lKTtcbiAgICBEQi5hZGRQcm9qZWN0KHByb2plY3QpO1xuICAgIHJldHVybiBwcm9qZWN0O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcHJvamVjdERlbGV0ZShwcm9qZWN0KSB7XG4gICAgREIuZGVsZXRlUHJvamVjdChwcm9qZWN0KTtcbiAgICBwcm9qZWN0ID0gbnVsbDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByb2plY3RFZGl0KHByb2plY3QsIG5hbWUpIHtcbiAgICBwcm9qZWN0LndoYXQgPSBuYW1lO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcHJvamVjdEFkZFRvZG8ocHJvamVjdCwgdG9kbykge1xuICAgIHByb2plY3QuYWRkKHRvZG8pO1xuICAgIHJldHVybiBwcm9qZWN0O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0UHJvamVjdEJ5TnVtYmVyKG51bWJlcikge1xuICAgIHJldHVybiBEQi5nZXRQcm9qZWN0QnlOdW1iZXIobnVtYmVyKTtcbn0iLCIvLyBDb250YWluZXIgZm9yIGFsbCBwcm9qZWN0cyBhbmQgdG9kb3Ncbi8vIHVuaXF1ZSBDTEFTUyBpbnN0YW5jZSBTSU5HTEVUT05cbmxldCBpbnN0YW5jZTtcbmxldCBwcm9qZWN0cyA9IFtdO1xuY2xhc3MgREIge1xuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHRpZiAoaW5zdGFuY2UpIHtcblx0XHRcdHRocm93IG5ldyBFcnJvcihcIk5ldyBpbnN0YW5jZSBjYW5ub3QgYmUgY3JlYXRlZCFcIik7XG5cdFx0XHQvLyBUT0RPIGVycm9yIGlmIG5hbWUgZXhpc3RzIGFscmVhZHlcblx0XHR9XG5cdFx0aW5zdGFuY2UgPSB0aGlzO1xuXHR9XG5cdGFkZFByb2plY3QocHJvamVjdCkge1xuXHRcdHByb2plY3RzLnB1c2gocHJvamVjdCk7XG5cdFx0Y29uc29sZS5sb2coYFByb2plY3QgJHtwcm9qZWN0LndoYXR9IHN1Y2Nlc3NmdWxseSBhZGRlZCB0byBEQiFgKTtcblx0fVxuXHRkZWxldGVQcm9qZWN0KHByb2plY3QpIHtcblx0XHRsZXQgaW5kZXggPSBwcm9qZWN0cy5pbmRleE9mKHByb2plY3QpO1xuXHRcdGlmIChpbmRleCAhPT0gLTEpIHtcblx0XHRcdHByb2plY3RzLnNwbGljZShpbmRleCwgMSk7XG5cdFx0XHRjb25zb2xlLmxvZyhgUHJvamVjdCAke3Byb2plY3Qud2hhdH0gc3VjY2Vzc2Z1bGx5IHJlbW92ZWQgZnJvbSBEQiFgKTtcblx0XHR9XG5cblx0fVxuXHRsaXN0UHJvamVjdHMoKSB7XG5cdFx0cmV0dXJuIHByb2plY3RzO1xuXHR9XG5cblx0Z2V0UHJvamVjdChuYW1lKSB7XG5cdFx0Ly8gTkVFREVEPz8/XG5cdFx0Y29uc3QgbXlQcm9qZWN0ID0gcHJvamVjdHMuZmluZChwcm9qZWN0ID0+IHByb2plY3Qud2hhdCA9PT0gbmFtZSk7XG5cdFx0cmV0dXJuIG15UHJvamVjdDtcblx0fVxuXG5cdGdldFByb2plY3RCeU51bWJlcihudW1iZXIpIHtcblx0XHRyZXR1cm4gcHJvamVjdHNbbnVtYmVyXTtcblx0fVxufVxubGV0IERCSW5zdGFuY2UgPSBPYmplY3QuZnJlZXplKG5ldyBEQigpKTtcblxuZXhwb3J0IGRlZmF1bHQgREJJbnN0YW5jZTtcbiIsImltcG9ydCAqIGFzIHZpZXdzIGZyb20gJy4vdmlld3MuanMnO1xuaW1wb3J0ICogYXMgY29udHJvbGxlciBmcm9tICcuL2NvbnRyb2xsZXIuanMnO1xuXG5leHBvcnQgZnVuY3Rpb24gYWRkVG9kb0V2ZW50KGV2ZW50KSB7XG4gICAgY29uc3QgdGFyZ2V0ID0gZXZlbnQudGFyZ2V0O1xuICAgIGlmICh0YXJnZXQuY2xhc3NOYW1lID09IFwidG9kby1hZGRcIikge1xuICAgICAgICBjb25zdCBwcm9qZWN0TGkgPSB0YXJnZXQuY2xvc2VzdChcImgyICsgdWxcIikucGFyZW50RWxlbWVudDtcbiAgICAgICAgY29uc3QgcHJvamVjdElkID0gcHJvamVjdExpLnF1ZXJ5U2VsZWN0b3IoXCJzcGFuXCIpLmRhdGFzZXQucHJvamVjdEluZGV4O1xuICAgICAgICBjb25zdCBteVByb2plY3QgPSBjb250cm9sbGVyLmdldFByb2plY3RCeU51bWJlcihwcm9qZWN0SWQpO1xuICAgICAgICAvLyBUT0RPIGFkZCBtb2RhbCBvciBpbnB1dCBmaWVsZHNcbiAgICAgICAgY29udHJvbGxlci50b2RvQ3JlYXRlKFwidGhpcyB0b2RvIHN0dXBpZCBuYW1lIGZ1Y2sgc3VjayBkaWNrXCIsIFwibmV4dCBtb250aFwiLCBteVByb2plY3QpO1xuICAgICAgICB2aWV3cy5yZWRyYXdTY3JlZW4oKTtcbiAgICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRQcm9qZWN0RXZlbnQoZXZlbnQpIHtcbiAgICAvLyBhZGQgZnVuY3Rpb25hbGl0eVxuICAgIGNvbnN0IHRhcmdldCA9IGV2ZW50LnRhcmdldDtcbiAgICBpZiAodGFyZ2V0LmlkID09IFwiYWRkLXByb2plY3RcIikge1xuICAgICAgICBjb250cm9sbGVyLnByb2plY3RDcmVhdGUoXCJOZXcgRnVja2luZyBQcm9qZWN0ISBZT1VPSE9VIVwiKTtcbiAgICAgICAgLy8gVE9ETyBhZGQgbW9kYWwgb3IgaW5wdXQgZmllbGRzXG4gICAgICAgIHZpZXdzLnJlZHJhd1NjcmVlbigpO1xuICAgIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlbGV0ZVRvZG9FdmVudCgpIHtcblxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVsZXRlUHJvamVjdEV2ZW50KCkge1xuXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtYXJrRG9uZVRvZG9FdmVudCgpIHtcblxufVxuXG5leHBvcnQgZnVuY3Rpb24gZWRpdFRvZG9FbGVtZW50RXZlbnQoKSB7XG5cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRvZ2dsZVRyZWVFdmVudCgpIHtcblxufSIsImNsYXNzIFByb2plY3Qge1xuICAgICN3aGF0O1xuICAgICN3aGljaCA9IFtdO1xuXG4gICAgY29uc3RydWN0b3Iod2hhdCkge1xuICAgICAgICB0aGlzLiN3aGF0ID0gd2hhdDtcbiAgICAgICAgY29uc29sZS5sb2coYFN1Y2Nlc3NmdWxseSBjcmVhdGVkIHByb2plY3QgJHt3aGF0fS5gKTtcbiAgICB9XG4gICAgYWRkKHRvZG8pIHtcbiAgICAgICAgdGhpcy4jd2hpY2gucHVzaCh0b2RvKTtcbiAgICAgICAgY29uc29sZS5sb2coYFN1Y2Nlc3NmdWxseSBhZGRlZCB0b2RvICR7dG9kby53aGF0fSB0byBwcm9qZWN0ICR7dGhpcy4jd2hhdH1gKTtcbiAgICAgICAgY29uc29sZS5sb2coYFRoZSBwcm9qZWN0IG5vdyBjb250YWlucyAke3RoaXMuY291bnR9IHRvZG8gaXRlbXMuYCk7XG4gICAgfVxuICAgIGRlbGV0ZSh0b2RvKSB7XG4gICAgICAgIHRoaXMuI3doaWNoLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgIGNvbnNvbGUubG9nKGBTdWNjZXNzZnVsbHkgZGVsZXRlZCB0b2RvICR7dG9kby53aGF0fSBmcm9tIHByb2plY3QgJHt0aGlzLiN3aGF0fWApO1xuICAgICAgICBjb25zb2xlLmxvZyhgVGhlIHByb2plY3Qgbm93IGNvbnRhaW5zICR7dGhpcy5jb3VudH0gdG9kbyBpdGVtcy5gKTtcbiAgICB9XG4gICAgZ2V0IGNvdW50KCkge1xuICAgICAgICByZXR1cm4gdGhpcy4jd2hpY2gubGVuZ3RoO1xuICAgIH1cblxuICAgIGdldCB3aGF0KCkge1xuICAgICAgICByZXR1cm4gdGhpcy4jd2hhdDtcbiAgICB9XG5cbiAgICBnZXQgd2hpY2goKSB7XG4gICAgICAgIHJldHVybiB0aGlzLiN3aGljaDtcbiAgICB9XG59XG5leHBvcnQgeyBQcm9qZWN0IH07XG4iLCIvLyBUT0RPIGdpdmUgZWFjaCB0b2RvIGFuIHVuaXF1ZSBJRFxuLy8gVE9ETyBhZGQgZWFjaCB0b2RvIHRvIGEgY2VydGFpbiBwcm9qZWN0IChlbHNlOiBEZWZhdWx0XG5cbmNsYXNzIFRvZG8ge1xuICAgICN3aGF0O1xuICAgICN3aGVuO1xuICAgICNpc1VyZ2VudDtcbiAgICAjaXNGaW5pc2hlZDtcbiAgICAjcHJvamVjdDtcblxuICAgIGNvbnN0cnVjdG9yKHdoYXQsIHdoZW4sIHByb2plY3QgPSBcIkRlZmF1bHRcIiwgaXNVcmdlbnQgPSAnTm8nLCBpc0ZpbmlzaGVkID0gJ05vJykge1xuICAgICAgICB0aGlzLiN3aGF0ID0gd2hhdDtcbiAgICAgICAgdGhpcy4jd2hlbiA9IHdoZW47XG4gICAgICAgIHRoaXMuI3Byb2plY3QgPSBwcm9qZWN0O1xuICAgICAgICB0aGlzLiNpc1VyZ2VudCA9IGlzVXJnZW50O1xuICAgICAgICB0aGlzLiNpc0ZpbmlzaGVkID0gaXNGaW5pc2hlZDtcbiAgICAgICAgY29uc29sZS5sb2coYFN1Y2Nlc3NmdWxseSBjcmVhdGVkIHRvZG8gJHt3aGF0fWApO1xuICAgIH1cbiAgICAvLyBnZXR0ZXJzXG4gICAgZ2V0IHdoYXQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLiN3aGF0O1xuICAgIH1cbiAgICBnZXQgd2hlbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuI3doZW47XG4gICAgfVxuICAgIGdldCB1cmdlbnQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLiNpc1VyZ2VudDtcbiAgICB9XG4gICAgZ2V0IGRvbmUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLiNpc0ZpbmlzaGVkO1xuICAgIH1cbiAgICAvLyBzZXR0ZXJzXG4gICAgc2V0IHdoYXQod2hhdCkge1xuICAgICAgICB0aGlzLiN3aGF0ID0gd2hhdDtcbiAgICB9XG4gICAgc2V0IHdoZW4od2hlbikge1xuICAgICAgICB0aGlzLiN3aGVuID0gd2hlbjtcbiAgICB9XG4gICAgc2V0IHVyZ2VudCh5ZXNObykge1xuICAgICAgICB0aGlzLiNpc1VyZ2VudCA9IHllc05vO1xuICAgIH1cbiAgICBzZXQgZG9uZSh5ZXNObykge1xuICAgICAgICB0aGlzLiNpc0ZpbmlzaGVkID0geWVzTm87XG4gICAgICAgIHJldHVybiB0aGlzLiNpc0ZpbmlzaGVkO1xuICAgIH1cbn1cbmV4cG9ydCB7IFRvZG8gfTtcbiIsImltcG9ydCAqIGFzIGNvbnRyb2xsZXIgZnJvbSAnLi9jb250cm9sbGVyLmpzJztcbmltcG9ydCAqIGFzIGV2ZW50cyBmcm9tICcuL2V2ZW50cy5qcyc7XG5cbi8vIEFsbCB2aWV3cyB1c2VycyBjYW4gaW50ZXJhY3Qgd2l0aFxuZXhwb3J0IGZ1bmN0aW9uIGRhdGVWaWV3KCkge1xuICAgIC8vIHJldHVybnMgdGhlIHRvZG8gbGlzdCwgb3JkZXJlZCBieSBkYXRlIGFuZCBkaXZpZGVkIGludG8gNCBjYXRlZ29yaWVzOlxuICAgIC8vIFRvZGF5LCBUaGlzIHdlZWssIFRoaXMgTW9udGggYW5kIExhdGVyXG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0b2RheVZpZXcoKSB7XG4gICAgLy8gcmV0dXJucyB0aGUgbGlzdCBvZiB0b2RvcyBmb3IgdG9kYXlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByb2plY3RzVmlldygpIHtcbiAgICAvLyByZXR1cm5zIHRoZSBsaXN0IG9mIGFsbCBwcm9qZWN0c1xuICAgIGNvbnN0IHByb2plY3RzID0gY29udHJvbGxlci5saXN0UHJvamVjdHMoKTtcbiAgICBjb25zdCB1bCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtcbiAgICBjb25zdCBhZGRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBwcm9qZWN0cy5mb3JFYWNoKChwcm9qZWN0LCBpbmRleCkgPT4ge1xuICAgICAgICBjb25zdCBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgICAgICAgY29uc3QgaDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgICAgICBjb25zdCBkZWxTcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgICBkZWxTcGFuLnRleHRDb250ZW50ID0gJyAoREVMKSc7XG4gICAgICAgIGRlbFNwYW4uc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJwcm9qZWN0LWRlbGV0ZVwiKTtcbiAgICAgICAgZGVsU3Bhbi5zZXRBdHRyaWJ1dGUoXCJkYXRhLXByb2plY3QtaW5kZXhcIiwgaW5kZXgpO1xuICAgICAgICBoMi50ZXh0Q29udGVudCA9IHByb2plY3Qud2hhdDtcbiAgICAgICAgaDIuYXBwZW5kQ2hpbGQoZGVsU3Bhbik7XG4gICAgICAgIGxpLmFwcGVuZENoaWxkKGgyKTtcbiAgICAgICAgLy8gYXBwZW5kIGxpc3Qgd2l0aCBhbGwgcHJvamVjdCB0b2Rvc1xuICAgICAgICBjb25zdCB0b2RvcyA9IHByb2plY3RUb2Rvc1ZpZXcocHJvamVjdCk7XG4gICAgICAgIGlmICh0b2Rvcykge1xuICAgICAgICAgICAgbGkuYXBwZW5kQ2hpbGQodG9kb3MpO1xuICAgICAgICB9XG4gICAgICAgIHVsLmFwcGVuZENoaWxkKGxpKTtcbiAgICB9KTtcbiAgICBhZGRCdXR0b24udGV4dENvbnRlbnQgPSBcIisgQUREIFBST0pFQ1RcIjtcbiAgICBhZGRCdXR0b24uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJhZGQtcHJvamVjdFwiKTtcbiAgICB1bC5hcHBlbmRDaGlsZChhZGRCdXR0b24pO1xuICAgIHJldHVybiB1bDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByb2plY3RUb2Rvc1ZpZXcocHJvamVjdCkge1xuICAgIC8vIHJldHVybnMgYSBsaXN0IG9mIGFsbCB0b2RvcyBmb3IgYSBjZXJ0YWluIHByb2plY3RcbiAgICBjb25zdCB0b2RvcyA9IGNvbnRyb2xsZXIubGlzdFRvZG9zRm9yUHJvamVjdChwcm9qZWN0LndoYXQpO1xuICAgIGNvbnN0IGFkZEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGNvbnN0IHVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcbiAgICBpZiAodG9kb3MubGVuZ3RoID4gMCkge1xuICAgICAgICB0b2Rvcy5mb3JFYWNoKCh0b2RvLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgdWxUb2RvID0gdG9kb1ZpZXcodG9kbywgaW5kZXgpO1xuICAgICAgICAgICAgdWwuYXBwZW5kQ2hpbGQodWxUb2RvKTtcblxuXG4gICAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGBObyB0b2RvcyBmb3IgcHJvamVjdCAke3Byb2plY3Qud2hhdH1gKTtcbiAgICB9XG4gICAgYWRkQnV0dG9uLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwidG9kby1hZGRcIik7XG4gICAgYWRkQnV0dG9uLnRleHRDb250ZW50ID0gXCIrIEFERCBUT0RPXCI7XG4gICAgdWwuYXBwZW5kQ2hpbGQoYWRkQnV0dG9uKTtcbiAgICByZXR1cm4gdWw7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0b2RvVmlldyh0b2RvLCBpbmRleCkge1xuICAgIC8vIHJldHVybnMgYSB0b2RvIHdpdGggYWxsIHRoZSBkZXRhaWxzXG4gICAgY29uc3QgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIGNvbnN0IHVsV2hhdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG4gICAgY29uc3QgdmFsdWVzID0gW3RvZG8ud2hlbiwgdG9kby51cmdlbnQsIHRvZG8uZG9uZV07XG4gICAgY29uc3QgaDMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICAgIGNvbnN0IHVpU3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICBjb25zdCBjaGVja0JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgY2hlY2tCb3gudHlwZSA9ICdjaGVja2JveCc7XG4gICAgY2hlY2tCb3guc2V0QXR0cmlidXRlKFwiZGF0YS10b2RvLWluZGV4XCIsIGluZGV4KTtcbiAgICB1aVNwYW4udGV4dENvbnRlbnQgPSAoXCIgKERFTClcIik7XG4gICAgdWlTcGFuLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwidG9kby1kZWxldGVcIik7XG4gICAgdWlTcGFuLnNldEF0dHJpYnV0ZShcImRhdGEtdG9kby1pbmRleFwiLCBpbmRleCk7XG4gICAgaDMudGV4dENvbnRlbnQgPSB0b2RvLndoYXQ7XG4gICAgaDMuYXBwZW5kQ2hpbGQoY2hlY2tCb3gpO1xuICAgIGgzLmFwcGVuZENoaWxkKHVpU3Bhbik7XG4gICAgdmFsdWVzLmZvckVhY2goKHZhbHVlLCBpbmRleCkgPT4ge1xuICAgICAgICBjb25zdCBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgICAgIGNvbnN0IGNoYW5nZVNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICAgIGNoYW5nZVNwYW4udGV4dENvbnRlbnQgPSBcIiAoRURJVClcIjtcbiAgICAgICAgY2hhbmdlU3Bhbi5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInRvZG8tZWRpdFwiKTtcbiAgICAgICAgY2hhbmdlU3Bhbi5zZXRBdHRyaWJ1dGUoXCJkYXRhLXRvZG8tZWwtaW5kZXhcIiwgaW5kZXgpO1xuICAgICAgICBsaS50ZXh0Q29udGVudCA9IHZhbHVlO1xuICAgICAgICBsaS5hcHBlbmRDaGlsZChjaGFuZ2VTcGFuKTtcbiAgICAgICAgdWxXaGF0LmFwcGVuZENoaWxkKGxpKTtcbiAgICB9KTtcbiAgICBsaS5hcHBlbmRDaGlsZChoMyk7XG5cbiAgICBsaS5hcHBlbmRDaGlsZCh1bFdoYXQpO1xuICAgIHJldHVybiBsaTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZEV2ZW50c1RvVmlldyh2aWV3RnVuY3Rpb24pIHtcbiAgICBjb25zdCBjb250YWluZXIgPSB2aWV3RnVuY3Rpb24oKTtcbiAgICBjb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBldmVudHMuYWRkVG9kb0V2ZW50KTtcbiAgICBjb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBldmVudHMuYWRkUHJvamVjdEV2ZW50KTtcbiAgICByZXR1cm4gY29udGFpbmVyO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVkcmF3U2NyZWVuKCkge1xuICAgIGNvbnN0IG1haW5EaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnRcIik7XG4gICAgbWFpbkRpdi5pbm5lckhUTUwgPSBcIlwiO1xuICAgIGNvbnN0IGgxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICAgIGgxLnRleHRDb250ZW50ID0gXCJNeSBQcm9qZWN0c1wiO1xuICAgIGNvbnN0IHVsID0gYWRkRXZlbnRzVG9WaWV3KHByb2plY3RzVmlldyk7XG4gICAgbWFpbkRpdi5hcHBlbmRDaGlsZChoMSk7XG4gICAgbWFpbkRpdi5hcHBlbmRDaGlsZCh1bCk7XG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgJy4vYXBwLmpzJztcbmltcG9ydCAqIGFzIHZpZXdzIGZyb20gJy4vdmlld3MuanMnO1xuXG5jb25zdCBtYWluRGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50XCIpO1xuY29uc3QgaDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG5oMS50ZXh0Q29udGVudCA9IFwiTXkgUHJvamVjdHNcIjtcbmNvbnN0IHVsID0gdmlld3MucmVkcmF3U2NyZWVuKCk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9