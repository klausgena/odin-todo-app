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
const defaultProject = _controller_js__WEBPACK_IMPORTED_MODULE_0__.projectCreate('@home');
// add second project and third project
const second = _controller_js__WEBPACK_IMPORTED_MODULE_0__.projectCreate("@work");
const third = _controller_js__WEBPACK_IMPORTED_MODULE_0__.projectCreate("@pc");

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


function addTodoEvent(event) {
    const target = event.target;
    if (target.className == "todo-add") {
        const myProject = getProject(target);
        _controller_js__WEBPACK_IMPORTED_MODULE_1__.todoCreate("this todo stupid name fuck suck dick", "next month", myProject);
        _views_js__WEBPACK_IMPORTED_MODULE_0__.redrawScreen();
    }
}

function addProjectEvent(event) {
    // add a project in the GUI
    const target = event.target;
    if (target.id == "add-project") {
        _controller_js__WEBPACK_IMPORTED_MODULE_1__.projectCreate("New Fucking Project! YOUOHOU!");
        // TODO add modal or input fields
        _views_js__WEBPACK_IMPORTED_MODULE_0__.redrawScreen();
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
        const todos = projectTodosView(index);
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

function projectTodosView(index) {
    // returns a list of all todos for a certain project
    const todos = _controller_js__WEBPACK_IMPORTED_MODULE_0__.listTodosForProject(index);
    const addButton = document.createElement('button');
    const ul = document.createElement('ul');
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
    const checked = (todo.done == 'Yes') ? true : false;
    checkBox.type = 'checkbox';
    checkBox.setAttribute("data-todo-index", index);
    checkBox.checked = checked;
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
    container.addEventListener('click', _events_js__WEBPACK_IMPORTED_MODULE_1__.deleteTodoEvent);
    container.addEventListener('click', _events_js__WEBPACK_IMPORTED_MODULE_1__.deleteProjectEvent);
    container.addEventListener('click', _events_js__WEBPACK_IMPORTED_MODULE_1__.markDoneTodoEvent);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O1VDaEhBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7O0FDTmtCO0FBQ2tCOztBQUVwQztBQUNBO0FBQ0E7QUFDQSxXQUFXLG1EQUFrQixHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWFwcC8uL3NyYy9hcHAuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWFwcC8uL3NyYy9jb250cm9sbGVyLmpzIiwid2VicGFjazovL29kaW4tdG9kby1hcHAvLi9zcmMvZGIuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWFwcC8uL3NyYy9ldmVudHMuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWFwcC8uL3NyYy9wcm9qZWN0LmpzIiwid2VicGFjazovL29kaW4tdG9kby1hcHAvLi9zcmMvdG9kby5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tYXBwLy4vc3JjL3ZpZXdzLmpzIiwid2VicGFjazovL29kaW4tdG9kby1hcHAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWFwcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWFwcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL29kaW4tdG9kby1hcHAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9vZGluLXRvZG8tYXBwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIGNvbnRyb2xsZXIgZnJvbSAnLi9jb250cm9sbGVyLmpzJztcbmltcG9ydCAqIGFzIHZpZXdzIGZyb20gJy4vdmlld3MuanMnO1xuXG4vLyBDcmVhdGUgYSBkZWZhdWx0IHByb2plY3RcbmNvbnN0IGRlZmF1bHRQcm9qZWN0ID0gY29udHJvbGxlci5wcm9qZWN0Q3JlYXRlKCdAaG9tZScpO1xuLy8gYWRkIHNlY29uZCBwcm9qZWN0IGFuZCB0aGlyZCBwcm9qZWN0XG5jb25zdCBzZWNvbmQgPSBjb250cm9sbGVyLnByb2plY3RDcmVhdGUoXCJAd29ya1wiKTtcbmNvbnN0IHRoaXJkID0gY29udHJvbGxlci5wcm9qZWN0Q3JlYXRlKFwiQHBjXCIpO1xuXG4vLyBDcmVhdGUgYSBkdW1teSB0b2RvXG5jb25zdCBkZWZhdWx0VG9kbyA9IGNvbnRyb2xsZXIudG9kb0NyZWF0ZSgnVGhpcyB0b2RvJywgJ05vdycsIGRlZmF1bHRQcm9qZWN0KTtcbmNvbnN0IHNlY29uZFRvZG8gPSBjb250cm9sbGVyLnRvZG9DcmVhdGUoJ1RoaXMgMiB0b2RvJywgJ1RvZGF5Jywgc2Vjb25kKTtcbmNvbnN0IHRoaXJkVG9kbyA9IGNvbnRyb2xsZXIudG9kb0NyZWF0ZSgnVGhpcyB0b2RvIHRvZG8nLCAnTmV4dCB3ZWVrJywgdGhpcmQpO1xuY29uc3QgZm91cnRoVG9kbyA9IGNvbnRyb2xsZXIudG9kb0NyZWF0ZSgnVGhpc2FzZGZhIHRvZG8nLCAnVG9tb3Jyb3cnLCB0aGlyZCk7XG5cbnZpZXdzLnRvZG9WaWV3KGRlZmF1bHRUb2RvKTtcblxuY29udHJvbGxlci50b2RvSXNEb25lKGRlZmF1bHRUb2RvKTtcblxuLy8gQ2hlY2sgaWYgdG9kbyBzdGF0ZSBjaGFuZ2VkXG52aWV3cy50b2RvVmlldyhkZWZhdWx0VG9kbyk7IiwiLy8gQWxsIHRoZSBhY3Rpb25zIHVzZXJzIGNhbiB1bmRlcnRha2VcbmltcG9ydCB7IFRvZG8gfSBmcm9tICcuL3RvZG8uanMnO1xuaW1wb3J0IHsgUHJvamVjdCB9IGZyb20gJy4vcHJvamVjdC5qcyc7XG5pbXBvcnQgeyBkZWZhdWx0IGFzIERCIH0gZnJvbSAnLi9kYi5qcyc7XG5cbi8vIFRvZG8gYWN0aW9uc1xuLy8gVE9ETyBNYWtlIGV2ZXJ5IGZ1bmN0aW9uIHJldHVybiBzb21ldGhpbmdcblxuZXhwb3J0IGZ1bmN0aW9uIHRvZG9Jc0RvbmUodG9kbykge1xuICAgIHRvZG8uZG9uZSA9ICdZZXMnO1xuICAgIHJldHVybiB0b2RvO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdG9kb0RlbGV0ZShwcm9qZWN0LCB0b2RvSW5kZXgpIHtcbiAgICBwcm9qZWN0LmRlbGV0ZSh0b2RvSW5kZXgpO1xuICAgIHJldHVybiBwcm9qZWN0O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdG9kb0NyZWF0ZSh3aGF0LCB3aGVuLCBwcm9qZWN0KSB7XG4gICAgY29uc3QgdG9kbyA9IG5ldyBUb2RvKHdoYXQsIHdoZW4pO1xuICAgIHByb2plY3QuYWRkKHRvZG8pO1xuICAgIHJldHVybiBwcm9qZWN0O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdG9kb0VkaXQodG9kbywgd2hhdCwgd2hlbiwgdXJnZW50KSB7XG4gICAgLy8gVE9ETzogdGhpbmsgb2Ygc29tZSBkZWZhdWx0cz9cbiAgICB0b2RvLndoYXQgPSB3aGF0O1xuICAgIHRvZG8ud2hlbiA9IHdoZW47XG4gICAgdG9kby51cmdlbnQgPSB1cmdlbnQ7XG4gICAgcmV0dXJuIHRvZG87XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcm9qZWN0VG9kb01hcmtEb25lKHRvZG9JbmRleCwgcHJvamVjdEluZGV4KSB7XG4gICAgY29uc3QgcHJvamVjdCA9IGdldFByb2plY3RCeU51bWJlcihwcm9qZWN0SW5kZXgpO1xuICAgIGNvbnN0IHRvZG8gPSBwcm9qZWN0LnRvZG8odG9kb0luZGV4KTtcbiAgICB0b2RvSXNEb25lKHRvZG8pO1xuICAgIGNvbnNvbGUubG9nKGBUb2RvICR7dG9kby53aGF0fSBpcyBtYXJrZWQgYXMgZG9uZS5gKTtcbn1cblxuLy8gTGlzdHNcblxuZXhwb3J0IGZ1bmN0aW9uIGxpc3RUb2Rvc0ZvclByb2plY3QobnVtYmVyKSB7XG4gICAgY29uc3QgbXlQcm9qZWN0ID0gREIuZ2V0UHJvamVjdEJ5TnVtYmVyKG51bWJlcik7XG4gICAgcmV0dXJuIG15UHJvamVjdC53aGljaDtcbn1cblxuLy8gVE9ET1xuZXhwb3J0IGZ1bmN0aW9uIGxpc3RUb2Rvc0J5RGF0ZSgpIHsgfVxuXG5cbmV4cG9ydCBmdW5jdGlvbiBsaXN0UHJvamVjdHMoKSB7XG4gICAgcmV0dXJuIERCLmxpc3RQcm9qZWN0cygpO1xufVxuXG4vLyBQcm9qZWN0IGFjdGlvbnNcblxuZXhwb3J0IGZ1bmN0aW9uIHByb2plY3RDcmVhdGUobmFtZSkge1xuICAgIGNvbnN0IHByb2plY3QgPSBuZXcgUHJvamVjdChuYW1lKTtcbiAgICBEQi5hZGRQcm9qZWN0KHByb2plY3QpO1xuICAgIHJldHVybiBwcm9qZWN0O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcHJvamVjdERlbGV0ZShwcm9qZWN0KSB7XG4gICAgREIuZGVsZXRlUHJvamVjdChwcm9qZWN0KTtcbiAgICBwcm9qZWN0ID0gbnVsbDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByb2plY3RFZGl0KHByb2plY3QsIG5hbWUpIHtcbiAgICBwcm9qZWN0LndoYXQgPSBuYW1lO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcHJvamVjdEFkZFRvZG8ocHJvamVjdCwgdG9kbykge1xuICAgIHByb2plY3QuYWRkKHRvZG8pO1xuICAgIHJldHVybiBwcm9qZWN0O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0UHJvamVjdEJ5TnVtYmVyKG51bWJlcikge1xuICAgIHJldHVybiBEQi5nZXRQcm9qZWN0QnlOdW1iZXIobnVtYmVyKTtcbn0iLCIvLyBDb250YWluZXIgZm9yIGFsbCBwcm9qZWN0cyBhbmQgdG9kb3Ncbi8vIHVuaXF1ZSBDTEFTUyBpbnN0YW5jZSBTSU5HTEVUT05cbmxldCBpbnN0YW5jZTtcbmxldCBwcm9qZWN0cyA9IFtdO1xuY2xhc3MgREIge1xuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHRpZiAoaW5zdGFuY2UpIHtcblx0XHRcdHRocm93IG5ldyBFcnJvcihcIk5ldyBpbnN0YW5jZSBjYW5ub3QgYmUgY3JlYXRlZCFcIik7XG5cdFx0fVxuXHRcdGluc3RhbmNlID0gdGhpcztcblx0fVxuXHRhZGRQcm9qZWN0KHByb2plY3QpIHtcblx0XHRwcm9qZWN0cy5wdXNoKHByb2plY3QpO1xuXHRcdGNvbnNvbGUubG9nKGBQcm9qZWN0ICR7cHJvamVjdC53aGF0fSBzdWNjZXNzZnVsbHkgYWRkZWQgdG8gREIhYCk7XG5cdH1cblx0ZGVsZXRlUHJvamVjdChwcm9qZWN0KSB7XG5cdFx0bGV0IGluZGV4ID0gcHJvamVjdHMuaW5kZXhPZihwcm9qZWN0KTtcblx0XHRpZiAoaW5kZXggIT09IC0xKSB7XG5cdFx0XHRwcm9qZWN0cy5zcGxpY2UoaW5kZXgsIDEpO1xuXHRcdFx0Y29uc29sZS5sb2coYFByb2plY3QgJHtwcm9qZWN0LndoYXR9IHN1Y2Nlc3NmdWxseSByZW1vdmVkIGZyb20gREIhYCk7XG5cdFx0fVxuXG5cdH1cblx0bGlzdFByb2plY3RzKCkge1xuXHRcdHJldHVybiBwcm9qZWN0cztcblx0fVxuXG5cdGV4aXN0c1Byb2plY3QobmFtZSkge1xuXHRcdGlmIChwcm9qZWN0cy5maW5kKHByb2plY3QgPT4gcHJvamVjdC53aGF0ID09PSBuYW1lKSkge1xuXHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0fVxuXHRcdHJldHVybiBmYWxzZTtcblx0fVxuXG5cdGdldFByb2plY3RCeU51bWJlcihudW1iZXIpIHtcblx0XHRyZXR1cm4gcHJvamVjdHNbbnVtYmVyXTtcblx0fVxufVxubGV0IERCSW5zdGFuY2UgPSBPYmplY3QuZnJlZXplKG5ldyBEQigpKTtcblxuZXhwb3J0IGRlZmF1bHQgREJJbnN0YW5jZTtcbiIsImltcG9ydCAqIGFzIHZpZXdzIGZyb20gJy4vdmlld3MuanMnO1xuaW1wb3J0ICogYXMgY29udHJvbGxlciBmcm9tICcuL2NvbnRyb2xsZXIuanMnO1xuXG5mdW5jdGlvbiBnZXRQcm9qZWN0KHRhcmdldCkge1xuICAgIC8vIEdldHMgdGhlIHByb2plY3Qgb3V0IG9mIHRoZSBEb20gdHJlZVxuICAgIGNvbnN0IHByb2plY3RMaSA9IHRhcmdldC5jbG9zZXN0KFwiaDIgKyB1bFwiKS5wYXJlbnRFbGVtZW50O1xuICAgIGNvbnN0IHByb2plY3RJZCA9IHByb2plY3RMaS5xdWVyeVNlbGVjdG9yKFwic3BhblwiKS5kYXRhc2V0LnByb2plY3RJbmRleDtcbiAgICBjb25zdCBteVByb2plY3QgPSBjb250cm9sbGVyLmdldFByb2plY3RCeU51bWJlcihwcm9qZWN0SWQpO1xuICAgIHJldHVybiBteVByb2plY3Q7XG59XG5cbmZ1bmN0aW9uIGdldFByb2plY3RJbmRleCh0YXJnZXQpIHtcbiAgICAvLyBHZXRzIHRoZSBwcm9qZWN0IGluZGV4IG91dCBvZiB0aGUgRG9tIHRyZWVcbiAgICBjb25zdCBwcm9qZWN0TGkgPSB0YXJnZXQuY2xvc2VzdChcImgyICsgdWxcIikucGFyZW50RWxlbWVudDtcbiAgICByZXR1cm4gcHJvamVjdExpLnF1ZXJ5U2VsZWN0b3IoXCJzcGFuXCIpLmRhdGFzZXQucHJvamVjdEluZGV4O1xufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRUb2RvRXZlbnQoZXZlbnQpIHtcbiAgICBjb25zdCB0YXJnZXQgPSBldmVudC50YXJnZXQ7XG4gICAgaWYgKHRhcmdldC5jbGFzc05hbWUgPT0gXCJ0b2RvLWFkZFwiKSB7XG4gICAgICAgIGNvbnN0IG15UHJvamVjdCA9IGdldFByb2plY3QodGFyZ2V0KTtcbiAgICAgICAgY29udHJvbGxlci50b2RvQ3JlYXRlKFwidGhpcyB0b2RvIHN0dXBpZCBuYW1lIGZ1Y2sgc3VjayBkaWNrXCIsIFwibmV4dCBtb250aFwiLCBteVByb2plY3QpO1xuICAgICAgICB2aWV3cy5yZWRyYXdTY3JlZW4oKTtcbiAgICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRQcm9qZWN0RXZlbnQoZXZlbnQpIHtcbiAgICAvLyBhZGQgYSBwcm9qZWN0IGluIHRoZSBHVUlcbiAgICBjb25zdCB0YXJnZXQgPSBldmVudC50YXJnZXQ7XG4gICAgaWYgKHRhcmdldC5pZCA9PSBcImFkZC1wcm9qZWN0XCIpIHtcbiAgICAgICAgY29udHJvbGxlci5wcm9qZWN0Q3JlYXRlKFwiTmV3IEZ1Y2tpbmcgUHJvamVjdCEgWU9VT0hPVSFcIik7XG4gICAgICAgIC8vIFRPRE8gYWRkIG1vZGFsIG9yIGlucHV0IGZpZWxkc1xuICAgICAgICB2aWV3cy5yZWRyYXdTY3JlZW4oKTtcbiAgICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWxldGVUb2RvRXZlbnQoZXZlbnQpIHtcbiAgICAvLyBkZWxldGUgYSB0b2RvIGZyb20gdGhlIEdVSVxuICAgIGNvbnN0IHRhcmdldCA9IGV2ZW50LnRhcmdldDtcbiAgICBpZiAodGFyZ2V0LmNsYXNzTmFtZSA9PSBcInRvZG8tZGVsZXRlXCIpIHtcbiAgICAgICAgLy8gZ2V0IHRoZSBwcm9qZWN0XG4gICAgICAgIGNvbnN0IHByb2plY3QgPSBnZXRQcm9qZWN0KHRhcmdldCk7XG4gICAgICAgIGNvbnN0IGluZGV4ID0gdGFyZ2V0LmRhdGFzZXQudG9kb0luZGV4O1xuICAgICAgICBjb250cm9sbGVyLnRvZG9EZWxldGUocHJvamVjdCwgaW5kZXgpO1xuICAgICAgICB2aWV3cy5yZWRyYXdTY3JlZW4oKTtcbiAgICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWxldGVQcm9qZWN0RXZlbnQoZXZlbnQpIHtcbiAgICAvLyBkZWxldGUgYSBwcm9qZWN0IGZyb20gdGhlIEdVSVxuICAgIC8vIFRPRE8gQVNLIFlFUyBPUiBOTyBTVVJFPz8gREVMRVRFIG1ha2UgZnVuY3Rpb25cbiAgICBjb25zdCB0YXJnZXQgPSBldmVudC50YXJnZXQ7XG4gICAgaWYgKHRhcmdldC5jbGFzc05hbWUgPT0gXCJwcm9qZWN0LWRlbGV0ZVwiKSB7XG4gICAgICAgIGNvbnN0IGluZGV4ID0gdGFyZ2V0LmRhdGFzZXQucHJvamVjdEluZGV4O1xuICAgICAgICBjb25zdCBwcm9qZWN0ID0gY29udHJvbGxlci5nZXRQcm9qZWN0QnlOdW1iZXIoaW5kZXgpO1xuICAgICAgICBjb250cm9sbGVyLnByb2plY3REZWxldGUocHJvamVjdCk7XG4gICAgICAgIHZpZXdzLnJlZHJhd1NjcmVlbigpO1xuICAgIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1hcmtEb25lVG9kb0V2ZW50KGV2ZW50KSB7XG4gICAgLy8gbWFyayBhIHRvZG8gYXMgZG9uZSBpbiB0aGUgR1VJXG4gICAgY29uc3QgdGFyZ2V0ID0gZXZlbnQudGFyZ2V0O1xuICAgIGlmICh0YXJnZXQudHlwZSA9PSBcImNoZWNrYm94XCIpIHtcbiAgICAgICAgY29uc3QgcHJvamVjdEluZGV4ID0gZ2V0UHJvamVjdEluZGV4KHRhcmdldCk7XG4gICAgICAgIGNvbnN0IHRvZG9JbmRleCA9IHRhcmdldC5kYXRhc2V0LnRvZG9JbmRleDtcbiAgICAgICAgY29udHJvbGxlci5wcm9qZWN0VG9kb01hcmtEb25lKHRvZG9JbmRleCwgcHJvamVjdEluZGV4KTtcbiAgICAgICAgdmlld3MucmVkcmF3U2NyZWVuKCk7XG4gICAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZWRpdFRvZG9FbGVtZW50RXZlbnQoKSB7XG5cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRvZ2dsZVRyZWVFdmVudCgpIHtcblxufSIsImNsYXNzIFByb2plY3Qge1xuICAgICN3aGF0O1xuICAgICN3aGljaCA9IFtdO1xuXG4gICAgY29uc3RydWN0b3Iod2hhdCkge1xuICAgICAgICB0aGlzLiN3aGF0ID0gd2hhdDtcbiAgICAgICAgLy8gZXJyb3IgaWYgc3VjaCBhIHByb2plY3QgYWxyZWFkeSBleGlzdHNcbiAgICAgICAgY29uc29sZS5sb2coYFN1Y2Nlc3NmdWxseSBjcmVhdGVkIHByb2plY3QgJHt3aGF0fS5gKTtcbiAgICB9XG4gICAgYWRkKHRvZG8pIHtcbiAgICAgICAgdGhpcy4jd2hpY2gucHVzaCh0b2RvKTtcbiAgICAgICAgY29uc29sZS5sb2coYFN1Y2Nlc3NmdWxseSBhZGRlZCB0b2RvICR7dG9kby53aGF0fSB0byBwcm9qZWN0ICR7dGhpcy4jd2hhdH1gKTtcbiAgICAgICAgY29uc29sZS5sb2coYFRoZSBwcm9qZWN0IG5vdyBjb250YWlucyAke3RoaXMuY291bnR9IHRvZG8gaXRlbXMuYCk7XG4gICAgfVxuICAgIGRlbGV0ZShpbmRleCkge1xuICAgICAgICAvLyBkZWxldGUgYSB0b2RvIGFjY29yZGluZyB0byBpbmRleFxuICAgICAgICB0aGlzLiN3aGljaC5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICBjb25zb2xlLmxvZyhgU3VjY2Vzc2Z1bGx5IGRlbGV0ZWQgdG9kbyAke2luZGV4fSBmcm9tIHByb2plY3QgJHt0aGlzLiN3aGF0fWApO1xuICAgICAgICBjb25zb2xlLmxvZyhgVGhlIHByb2plY3Qgbm93IGNvbnRhaW5zICR7dGhpcy5jb3VudH0gdG9kbyBpdGVtcy5gKTtcbiAgICB9XG4gICAgdG9kbyhpbmRleCkge1xuICAgICAgICByZXR1cm4gdGhpcy4jd2hpY2hbaW5kZXhdO1xuICAgIH1cbiAgICBnZXQgY291bnQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLiN3aGljaC5sZW5ndGg7XG4gICAgfVxuXG4gICAgZ2V0IHdoYXQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLiN3aGF0O1xuICAgIH1cblxuICAgIGdldCB3aGljaCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuI3doaWNoO1xuICAgIH1cbn1cbmV4cG9ydCB7IFByb2plY3QgfTtcbiIsIi8vIFRPRE8gZ2l2ZSBlYWNoIHRvZG8gYW4gdW5pcXVlIElEXG4vLyBUT0RPIGFkZCBlYWNoIHRvZG8gdG8gYSBjZXJ0YWluIHByb2plY3QgKGVsc2U6IERlZmF1bHRcblxuY2xhc3MgVG9kbyB7XG4gICAgI3doYXQ7XG4gICAgI3doZW47XG4gICAgI2lzVXJnZW50O1xuICAgICNpc0ZpbmlzaGVkO1xuICAgICNwcm9qZWN0O1xuXG4gICAgY29uc3RydWN0b3Iod2hhdCwgd2hlbiwgcHJvamVjdCA9IFwiRGVmYXVsdFwiLCBpc1VyZ2VudCA9ICdObycsIGlzRmluaXNoZWQgPSAnTm8nKSB7XG4gICAgICAgIHRoaXMuI3doYXQgPSB3aGF0O1xuICAgICAgICB0aGlzLiN3aGVuID0gd2hlbjtcbiAgICAgICAgdGhpcy4jcHJvamVjdCA9IHByb2plY3Q7XG4gICAgICAgIHRoaXMuI2lzVXJnZW50ID0gaXNVcmdlbnQ7XG4gICAgICAgIHRoaXMuI2lzRmluaXNoZWQgPSBpc0ZpbmlzaGVkO1xuICAgICAgICBjb25zb2xlLmxvZyhgU3VjY2Vzc2Z1bGx5IGNyZWF0ZWQgdG9kbyAke3doYXR9YCk7XG4gICAgfVxuICAgIC8vIGdldHRlcnNcbiAgICBnZXQgd2hhdCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuI3doYXQ7XG4gICAgfVxuICAgIGdldCB3aGVuKCkge1xuICAgICAgICByZXR1cm4gdGhpcy4jd2hlbjtcbiAgICB9XG4gICAgZ2V0IHVyZ2VudCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuI2lzVXJnZW50O1xuICAgIH1cbiAgICBnZXQgZG9uZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuI2lzRmluaXNoZWQ7XG4gICAgfVxuICAgIC8vIHNldHRlcnNcbiAgICBzZXQgd2hhdCh3aGF0KSB7XG4gICAgICAgIHRoaXMuI3doYXQgPSB3aGF0O1xuICAgIH1cbiAgICBzZXQgd2hlbih3aGVuKSB7XG4gICAgICAgIHRoaXMuI3doZW4gPSB3aGVuO1xuICAgIH1cbiAgICBzZXQgdXJnZW50KHllc05vKSB7XG4gICAgICAgIHRoaXMuI2lzVXJnZW50ID0geWVzTm87XG4gICAgfVxuICAgIHNldCBkb25lKHllc05vKSB7XG4gICAgICAgIHRoaXMuI2lzRmluaXNoZWQgPSB5ZXNObztcbiAgICAgICAgcmV0dXJuIHRoaXMuI2lzRmluaXNoZWQ7XG4gICAgfVxufVxuZXhwb3J0IHsgVG9kbyB9O1xuIiwiaW1wb3J0ICogYXMgY29udHJvbGxlciBmcm9tICcuL2NvbnRyb2xsZXIuanMnO1xuaW1wb3J0ICogYXMgZXZlbnRzIGZyb20gJy4vZXZlbnRzLmpzJztcblxuLy8gQWxsIHZpZXdzIHVzZXJzIGNhbiBpbnRlcmFjdCB3aXRoXG5leHBvcnQgZnVuY3Rpb24gZGF0ZVZpZXcoKSB7XG4gICAgLy8gcmV0dXJucyB0aGUgdG9kbyBsaXN0LCBvcmRlcmVkIGJ5IGRhdGUgYW5kIGRpdmlkZWQgaW50byA0IGNhdGVnb3JpZXM6XG4gICAgLy8gVG9kYXksIFRoaXMgd2VlaywgVGhpcyBNb250aCBhbmQgTGF0ZXJcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRvZGF5VmlldygpIHtcbiAgICAvLyByZXR1cm5zIHRoZSBsaXN0IG9mIHRvZG9zIGZvciB0b2RheVxufVxuXG5leHBvcnQgZnVuY3Rpb24gcHJvamVjdHNWaWV3KCkge1xuICAgIC8vIHJldHVybnMgdGhlIGxpc3Qgb2YgYWxsIHByb2plY3RzXG4gICAgY29uc3QgcHJvamVjdHMgPSBjb250cm9sbGVyLmxpc3RQcm9qZWN0cygpO1xuICAgIGNvbnN0IHVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO1xuICAgIGNvbnN0IGFkZEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIHByb2plY3RzLmZvckVhY2goKHByb2plY3QsIGluZGV4KSA9PiB7XG4gICAgICAgIGNvbnN0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICAgICAgICBjb25zdCBoMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgICAgIGNvbnN0IGRlbFNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICAgIGRlbFNwYW4udGV4dENvbnRlbnQgPSAnIChERUwpJztcbiAgICAgICAgZGVsU3Bhbi5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInByb2plY3QtZGVsZXRlXCIpO1xuICAgICAgICBkZWxTcGFuLnNldEF0dHJpYnV0ZShcImRhdGEtcHJvamVjdC1pbmRleFwiLCBpbmRleCk7XG4gICAgICAgIGgyLnRleHRDb250ZW50ID0gcHJvamVjdC53aGF0O1xuICAgICAgICBoMi5hcHBlbmRDaGlsZChkZWxTcGFuKTtcbiAgICAgICAgbGkuYXBwZW5kQ2hpbGQoaDIpO1xuICAgICAgICAvLyBhcHBlbmQgbGlzdCB3aXRoIGFsbCBwcm9qZWN0IHRvZG9zXG4gICAgICAgIGNvbnN0IHRvZG9zID0gcHJvamVjdFRvZG9zVmlldyhpbmRleCk7XG4gICAgICAgIGlmICh0b2Rvcykge1xuICAgICAgICAgICAgbGkuYXBwZW5kQ2hpbGQodG9kb3MpO1xuICAgICAgICB9XG4gICAgICAgIHVsLmFwcGVuZENoaWxkKGxpKTtcbiAgICB9KTtcbiAgICBhZGRCdXR0b24udGV4dENvbnRlbnQgPSBcIisgQUREIFBST0pFQ1RcIjtcbiAgICBhZGRCdXR0b24uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJhZGQtcHJvamVjdFwiKTtcbiAgICB1bC5hcHBlbmRDaGlsZChhZGRCdXR0b24pO1xuICAgIHJldHVybiB1bDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByb2plY3RUb2Rvc1ZpZXcoaW5kZXgpIHtcbiAgICAvLyByZXR1cm5zIGEgbGlzdCBvZiBhbGwgdG9kb3MgZm9yIGEgY2VydGFpbiBwcm9qZWN0XG4gICAgY29uc3QgdG9kb3MgPSBjb250cm9sbGVyLmxpc3RUb2Rvc0ZvclByb2plY3QoaW5kZXgpO1xuICAgIGNvbnN0IGFkZEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGNvbnN0IHVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcbiAgICBpZiAodG9kb3MubGVuZ3RoID4gMCkge1xuICAgICAgICB0b2Rvcy5mb3JFYWNoKCh0b2RvLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgdWxUb2RvID0gdG9kb1ZpZXcodG9kbywgaW5kZXgpO1xuICAgICAgICAgICAgdWwuYXBwZW5kQ2hpbGQodWxUb2RvKTtcbiAgICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgY29uc29sZS5sb2coYE5vIHRvZG9zIGZvciBwcm9qZWN0ICR7aW5kZXh9YCk7XG4gICAgfVxuICAgIGFkZEJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInRvZG8tYWRkXCIpO1xuICAgIGFkZEJ1dHRvbi50ZXh0Q29udGVudCA9IFwiKyBBREQgVE9ET1wiO1xuICAgIHVsLmFwcGVuZENoaWxkKGFkZEJ1dHRvbik7XG4gICAgcmV0dXJuIHVsO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdG9kb1ZpZXcodG9kbywgaW5kZXgpIHtcbiAgICAvLyByZXR1cm5zIGEgdG9kbyB3aXRoIGFsbCB0aGUgZGV0YWlsc1xuICAgIGNvbnN0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICBjb25zdCB1bFdoYXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xuICAgIGNvbnN0IHZhbHVlcyA9IFt0b2RvLndoZW4sIHRvZG8udXJnZW50LCB0b2RvLmRvbmVdO1xuICAgIGNvbnN0IGgzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgICBjb25zdCB1aVNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgY29uc3QgY2hlY2tCb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIGNvbnN0IGNoZWNrZWQgPSAodG9kby5kb25lID09ICdZZXMnKSA/IHRydWUgOiBmYWxzZTtcbiAgICBjaGVja0JveC50eXBlID0gJ2NoZWNrYm94JztcbiAgICBjaGVja0JveC5zZXRBdHRyaWJ1dGUoXCJkYXRhLXRvZG8taW5kZXhcIiwgaW5kZXgpO1xuICAgIGNoZWNrQm94LmNoZWNrZWQgPSBjaGVja2VkO1xuICAgIHVpU3Bhbi50ZXh0Q29udGVudCA9IChcIiAoREVMKVwiKTtcbiAgICB1aVNwYW4uc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJ0b2RvLWRlbGV0ZVwiKTtcbiAgICB1aVNwYW4uc2V0QXR0cmlidXRlKFwiZGF0YS10b2RvLWluZGV4XCIsIGluZGV4KTtcbiAgICBoMy50ZXh0Q29udGVudCA9IHRvZG8ud2hhdDtcbiAgICBoMy5hcHBlbmRDaGlsZChjaGVja0JveCk7XG4gICAgaDMuYXBwZW5kQ2hpbGQodWlTcGFuKTtcbiAgICB2YWx1ZXMuZm9yRWFjaCgodmFsdWUsIGluZGV4KSA9PiB7XG4gICAgICAgIGNvbnN0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICAgICAgY29uc3QgY2hhbmdlU3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgICAgY2hhbmdlU3Bhbi50ZXh0Q29udGVudCA9IFwiIChFRElUKVwiO1xuICAgICAgICBjaGFuZ2VTcGFuLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwidG9kby1lZGl0XCIpO1xuICAgICAgICBjaGFuZ2VTcGFuLnNldEF0dHJpYnV0ZShcImRhdGEtdG9kby1lbC1pbmRleFwiLCBpbmRleCk7XG4gICAgICAgIGxpLnRleHRDb250ZW50ID0gdmFsdWU7XG4gICAgICAgIGxpLmFwcGVuZENoaWxkKGNoYW5nZVNwYW4pO1xuICAgICAgICB1bFdoYXQuYXBwZW5kQ2hpbGQobGkpO1xuICAgIH0pO1xuICAgIGxpLmFwcGVuZENoaWxkKGgzKTtcblxuICAgIGxpLmFwcGVuZENoaWxkKHVsV2hhdCk7XG4gICAgcmV0dXJuIGxpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkRXZlbnRzVG9WaWV3KHZpZXdGdW5jdGlvbikge1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IHZpZXdGdW5jdGlvbigpO1xuICAgIGNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGV2ZW50cy5hZGRUb2RvRXZlbnQpO1xuICAgIGNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGV2ZW50cy5hZGRQcm9qZWN0RXZlbnQpO1xuICAgIGNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGV2ZW50cy5kZWxldGVUb2RvRXZlbnQpO1xuICAgIGNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGV2ZW50cy5kZWxldGVQcm9qZWN0RXZlbnQpO1xuICAgIGNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGV2ZW50cy5tYXJrRG9uZVRvZG9FdmVudCk7XG4gICAgcmV0dXJuIGNvbnRhaW5lcjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlZHJhd1NjcmVlbigpIHtcbiAgICBjb25zdCBtYWluRGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50XCIpO1xuICAgIG1haW5EaXYuaW5uZXJIVE1MID0gXCJcIjtcbiAgICBjb25zdCBoMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgICBoMS50ZXh0Q29udGVudCA9IFwiTXkgUHJvamVjdHNcIjtcbiAgICBjb25zdCB1bCA9IGFkZEV2ZW50c1RvVmlldyhwcm9qZWN0c1ZpZXcpO1xuICAgIG1haW5EaXYuYXBwZW5kQ2hpbGQoaDEpO1xuICAgIG1haW5EaXYuYXBwZW5kQ2hpbGQodWwpO1xufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0ICcuL2FwcC5qcyc7XG5pbXBvcnQgKiBhcyB2aWV3cyBmcm9tICcuL3ZpZXdzLmpzJztcblxuY29uc3QgbWFpbkRpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudFwiKTtcbmNvbnN0IGgxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuaDEudGV4dENvbnRlbnQgPSBcIk15IFByb2plY3RzXCI7XG5jb25zdCB1bCA9IHZpZXdzLnJlZHJhd1NjcmVlbigpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==