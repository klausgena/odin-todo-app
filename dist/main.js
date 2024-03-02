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
    const target = event.target;
    if (target.className == "project-delete") {
        const index = target.dataset.projectIndex;
        const project = _controller_js__WEBPACK_IMPORTED_MODULE_1__.getProjectByNumber(index);
        _controller_js__WEBPACK_IMPORTED_MODULE_1__.projectDelete(project);
        _views_js__WEBPACK_IMPORTED_MODULE_0__.redrawScreen();
    }

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
        // error if such a project already exists
        console.log(`Successfully created project ${what}.`);
    }
    add(todo) {
        this.#which.push(todo);
        console.log(`Successfully added todo ${todo.what} to project ${this.#what}`);
        console.log(`The project now contains ${this.count} todo items.`);
    }
    delete(index) {
        this.#which.splice(index, 1);
        console.log(`Successfully deleted todo ${index} from project ${this.#what}`);
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
        delSpan.textContent = ' (ADEL)';
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
    container.addEventListener('click', _events_js__WEBPACK_IMPORTED_MODULE_1__.deleteTodoEvent);
    container.addEventListener('click', _events_js__WEBPACK_IMPORTED_MODULE_1__.deleteProjectEvent);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7O0FDTmtCO0FBQ2tCOztBQUVwQztBQUNBO0FBQ0E7QUFDQSxXQUFXLG1EQUFrQixHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWFwcC8uL3NyYy9hcHAuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWFwcC8uL3NyYy9jb250cm9sbGVyLmpzIiwid2VicGFjazovL29kaW4tdG9kby1hcHAvLi9zcmMvZGIuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWFwcC8uL3NyYy9ldmVudHMuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWFwcC8uL3NyYy9wcm9qZWN0LmpzIiwid2VicGFjazovL29kaW4tdG9kby1hcHAvLi9zcmMvdG9kby5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tYXBwLy4vc3JjL3ZpZXdzLmpzIiwid2VicGFjazovL29kaW4tdG9kby1hcHAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWFwcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWFwcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL29kaW4tdG9kby1hcHAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9vZGluLXRvZG8tYXBwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIGNvbnRyb2xsZXIgZnJvbSAnLi9jb250cm9sbGVyLmpzJztcbmltcG9ydCAqIGFzIHZpZXdzIGZyb20gJy4vdmlld3MuanMnO1xuXG4vLyBDcmVhdGUgYSBkZWZhdWx0IHByb2plY3RcbmNvbnN0IGRlZmF1bHRQcm9qZWN0ID0gY29udHJvbGxlci5wcm9qZWN0Q3JlYXRlKCdNeSBwcm9qZWN0Jyk7XG4vLyBhZGQgc2Vjb25kIHByb2plY3QgYW5kIHRoaXJkIHByb2plY3RcbmNvbnN0IHNlY29uZCA9IGNvbnRyb2xsZXIucHJvamVjdENyZWF0ZShcIk15IHNlY29uZCBwcm9qZWN0XCIpO1xuY29uc3QgdGhpcmQgPSBjb250cm9sbGVyLnByb2plY3RDcmVhdGUoXCJUaGlyZCBwcm9qZWN0IGlzIHRvZG8gbGlzdFwiKTtcblxuLy8gQ3JlYXRlIGEgZHVtbXkgdG9kb1xuY29uc3QgZGVmYXVsdFRvZG8gPSBjb250cm9sbGVyLnRvZG9DcmVhdGUoJ1RoaXMgdG9kbycsICdOb3cnLCBkZWZhdWx0UHJvamVjdCk7XG5jb25zdCBzZWNvbmRUb2RvID0gY29udHJvbGxlci50b2RvQ3JlYXRlKCdUaGlzIDIgdG9kbycsICdUb2RheScsIHNlY29uZCk7XG5jb25zdCB0aGlyZFRvZG8gPSBjb250cm9sbGVyLnRvZG9DcmVhdGUoJ1RoaXMgdG9kbyB0b2RvJywgJ05leHQgd2VlaycsIHRoaXJkKTtcbmNvbnN0IGZvdXJ0aFRvZG8gPSBjb250cm9sbGVyLnRvZG9DcmVhdGUoJ1RoaXNhc2RmYSB0b2RvJywgJ1RvbW9ycm93JywgdGhpcmQpO1xuXG52aWV3cy50b2RvVmlldyhkZWZhdWx0VG9kbyk7XG5cbmNvbnRyb2xsZXIudG9kb0lzRG9uZShkZWZhdWx0VG9kbyk7XG5cbi8vIENoZWNrIGlmIHRvZG8gc3RhdGUgY2hhbmdlZFxudmlld3MudG9kb1ZpZXcoZGVmYXVsdFRvZG8pOyIsIi8vIEFsbCB0aGUgYWN0aW9ucyB1c2VycyBjYW4gdW5kZXJ0YWtlXG5pbXBvcnQgeyBUb2RvIH0gZnJvbSAnLi90b2RvLmpzJztcbmltcG9ydCB7IFByb2plY3QgfSBmcm9tICcuL3Byb2plY3QuanMnO1xuaW1wb3J0IHsgZGVmYXVsdCBhcyBEQiB9IGZyb20gJy4vZGIuanMnO1xuXG4vLyBUb2RvIGFjdGlvbnNcbi8vIFRPRE8gTWFrZSBldmVyeSBmdW5jdGlvbiByZXR1cm4gc29tZXRoaW5nXG5cbmV4cG9ydCBmdW5jdGlvbiB0b2RvSXNEb25lKHRvZG8pIHtcbiAgICB0b2RvLmRvbmUgPSAneWVzJztcbiAgICByZXR1cm4gdG9kbztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRvZG9EZWxldGUocHJvamVjdCwgdG9kb0luZGV4KSB7XG4gICAgcHJvamVjdC5kZWxldGUodG9kb0luZGV4KTtcbiAgICByZXR1cm4gcHJvamVjdDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRvZG9DcmVhdGUod2hhdCwgd2hlbiwgcHJvamVjdCkge1xuICAgIGNvbnN0IHRvZG8gPSBuZXcgVG9kbyh3aGF0LCB3aGVuKTtcbiAgICBwcm9qZWN0LmFkZCh0b2RvKTtcbiAgICByZXR1cm4gcHJvamVjdDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRvZG9FZGl0KHRvZG8sIHdoYXQsIHdoZW4sIHVyZ2VudCkge1xuICAgIC8vIFRPRE86IHRoaW5rIG9mIHNvbWUgZGVmYXVsdHM/XG4gICAgdG9kby53aGF0ID0gd2hhdDtcbiAgICB0b2RvLndoZW4gPSB3aGVuO1xuICAgIHRvZG8udXJnZW50ID0gdXJnZW50O1xuICAgIHJldHVybiB0b2RvO1xufVxuXG4vLyBMaXN0c1xuXG5leHBvcnQgZnVuY3Rpb24gbGlzdFRvZG9zRm9yUHJvamVjdChudW1iZXIpIHtcbiAgICBjb25zdCBteVByb2plY3QgPSBEQi5nZXRQcm9qZWN0QnlOdW1iZXIobnVtYmVyKTtcbiAgICByZXR1cm4gbXlQcm9qZWN0LndoaWNoO1xufVxuXG4vLyBUT0RPXG5leHBvcnQgZnVuY3Rpb24gbGlzdFRvZG9zQnlEYXRlKCkgeyB9XG5cblxuZXhwb3J0IGZ1bmN0aW9uIGxpc3RQcm9qZWN0cygpIHtcbiAgICByZXR1cm4gREIubGlzdFByb2plY3RzKCk7XG59XG5cbi8vIFByb2plY3QgYWN0aW9uc1xuXG5leHBvcnQgZnVuY3Rpb24gcHJvamVjdENyZWF0ZShuYW1lKSB7XG4gICAgY29uc3QgcHJvamVjdCA9IG5ldyBQcm9qZWN0KG5hbWUpO1xuICAgIERCLmFkZFByb2plY3QocHJvamVjdCk7XG4gICAgcmV0dXJuIHByb2plY3Q7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcm9qZWN0RGVsZXRlKHByb2plY3QpIHtcbiAgICBEQi5kZWxldGVQcm9qZWN0KHByb2plY3QpO1xuICAgIHByb2plY3QgPSBudWxsO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcHJvamVjdEVkaXQocHJvamVjdCwgbmFtZSkge1xuICAgIHByb2plY3Qud2hhdCA9IG5hbWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcm9qZWN0QWRkVG9kbyhwcm9qZWN0LCB0b2RvKSB7XG4gICAgcHJvamVjdC5hZGQodG9kbyk7XG4gICAgcmV0dXJuIHByb2plY3Q7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRQcm9qZWN0QnlOdW1iZXIobnVtYmVyKSB7XG4gICAgcmV0dXJuIERCLmdldFByb2plY3RCeU51bWJlcihudW1iZXIpO1xufSIsIi8vIENvbnRhaW5lciBmb3IgYWxsIHByb2plY3RzIGFuZCB0b2Rvc1xuLy8gdW5pcXVlIENMQVNTIGluc3RhbmNlIFNJTkdMRVRPTlxubGV0IGluc3RhbmNlO1xubGV0IHByb2plY3RzID0gW107XG5jbGFzcyBEQiB7XG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdGlmIChpbnN0YW5jZSkge1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKFwiTmV3IGluc3RhbmNlIGNhbm5vdCBiZSBjcmVhdGVkIVwiKTtcblx0XHR9XG5cdFx0aW5zdGFuY2UgPSB0aGlzO1xuXHR9XG5cdGFkZFByb2plY3QocHJvamVjdCkge1xuXHRcdHByb2plY3RzLnB1c2gocHJvamVjdCk7XG5cdFx0Y29uc29sZS5sb2coYFByb2plY3QgJHtwcm9qZWN0LndoYXR9IHN1Y2Nlc3NmdWxseSBhZGRlZCB0byBEQiFgKTtcblx0fVxuXHRkZWxldGVQcm9qZWN0KHByb2plY3QpIHtcblx0XHRsZXQgaW5kZXggPSBwcm9qZWN0cy5pbmRleE9mKHByb2plY3QpO1xuXHRcdGlmIChpbmRleCAhPT0gLTEpIHtcblx0XHRcdHByb2plY3RzLnNwbGljZShpbmRleCwgMSk7XG5cdFx0XHRjb25zb2xlLmxvZyhgUHJvamVjdCAke3Byb2plY3Qud2hhdH0gc3VjY2Vzc2Z1bGx5IHJlbW92ZWQgZnJvbSBEQiFgKTtcblx0XHR9XG5cblx0fVxuXHRsaXN0UHJvamVjdHMoKSB7XG5cdFx0cmV0dXJuIHByb2plY3RzO1xuXHR9XG5cblx0ZXhpc3RzUHJvamVjdChuYW1lKSB7XG5cdFx0aWYgKHByb2plY3RzLmZpbmQocHJvamVjdCA9PiBwcm9qZWN0LndoYXQgPT09IG5hbWUpKSB7XG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHR9XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG5cblx0Z2V0UHJvamVjdEJ5TnVtYmVyKG51bWJlcikge1xuXHRcdHJldHVybiBwcm9qZWN0c1tudW1iZXJdO1xuXHR9XG59XG5sZXQgREJJbnN0YW5jZSA9IE9iamVjdC5mcmVlemUobmV3IERCKCkpO1xuXG5leHBvcnQgZGVmYXVsdCBEQkluc3RhbmNlO1xuIiwiaW1wb3J0ICogYXMgdmlld3MgZnJvbSAnLi92aWV3cy5qcyc7XG5pbXBvcnQgKiBhcyBjb250cm9sbGVyIGZyb20gJy4vY29udHJvbGxlci5qcyc7XG5cbmZ1bmN0aW9uIGdldFByb2plY3QodGFyZ2V0KSB7XG4gICAgLy8gR2V0cyB0aGUgcHJvamVjdCBvdXQgb2YgdGhlIERvbSB0cmVlXG4gICAgY29uc3QgcHJvamVjdExpID0gdGFyZ2V0LmNsb3Nlc3QoXCJoMiArIHVsXCIpLnBhcmVudEVsZW1lbnQ7XG4gICAgY29uc3QgcHJvamVjdElkID0gcHJvamVjdExpLnF1ZXJ5U2VsZWN0b3IoXCJzcGFuXCIpLmRhdGFzZXQucHJvamVjdEluZGV4O1xuICAgIGNvbnN0IG15UHJvamVjdCA9IGNvbnRyb2xsZXIuZ2V0UHJvamVjdEJ5TnVtYmVyKHByb2plY3RJZCk7XG4gICAgcmV0dXJuIG15UHJvamVjdDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZFRvZG9FdmVudChldmVudCkge1xuICAgIGNvbnN0IHRhcmdldCA9IGV2ZW50LnRhcmdldDtcbiAgICBpZiAodGFyZ2V0LmNsYXNzTmFtZSA9PSBcInRvZG8tYWRkXCIpIHtcbiAgICAgICAgY29uc3QgbXlQcm9qZWN0ID0gZ2V0UHJvamVjdCh0YXJnZXQpO1xuICAgICAgICBjb250cm9sbGVyLnRvZG9DcmVhdGUoXCJ0aGlzIHRvZG8gc3R1cGlkIG5hbWUgZnVjayBzdWNrIGRpY2tcIiwgXCJuZXh0IG1vbnRoXCIsIG15UHJvamVjdCk7XG4gICAgICAgIHZpZXdzLnJlZHJhd1NjcmVlbigpO1xuICAgIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZFByb2plY3RFdmVudChldmVudCkge1xuICAgIC8vIGFkZCBhIHByb2plY3QgaW4gdGhlIEdVSVxuICAgIGNvbnN0IHRhcmdldCA9IGV2ZW50LnRhcmdldDtcbiAgICBpZiAodGFyZ2V0LmlkID09IFwiYWRkLXByb2plY3RcIikge1xuICAgICAgICBjb250cm9sbGVyLnByb2plY3RDcmVhdGUoXCJOZXcgRnVja2luZyBQcm9qZWN0ISBZT1VPSE9VIVwiKTtcbiAgICAgICAgLy8gVE9ETyBhZGQgbW9kYWwgb3IgaW5wdXQgZmllbGRzXG4gICAgICAgIHZpZXdzLnJlZHJhd1NjcmVlbigpO1xuICAgIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlbGV0ZVRvZG9FdmVudChldmVudCkge1xuICAgIC8vIGRlbGV0ZSBhIHRvZG8gZnJvbSB0aGUgR1VJXG4gICAgY29uc3QgdGFyZ2V0ID0gZXZlbnQudGFyZ2V0O1xuICAgIGlmICh0YXJnZXQuY2xhc3NOYW1lID09IFwidG9kby1kZWxldGVcIikge1xuICAgICAgICAvLyBnZXQgdGhlIHByb2plY3RcbiAgICAgICAgY29uc3QgcHJvamVjdCA9IGdldFByb2plY3QodGFyZ2V0KTtcbiAgICAgICAgY29uc3QgaW5kZXggPSB0YXJnZXQuZGF0YXNldC50b2RvSW5kZXg7XG4gICAgICAgIGNvbnRyb2xsZXIudG9kb0RlbGV0ZShwcm9qZWN0LCBpbmRleCk7XG4gICAgICAgIHZpZXdzLnJlZHJhd1NjcmVlbigpO1xuICAgIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlbGV0ZVByb2plY3RFdmVudChldmVudCkge1xuICAgIC8vIGRlbGV0ZSBhIHByb2plY3QgZnJvbSB0aGUgR1VJXG4gICAgY29uc3QgdGFyZ2V0ID0gZXZlbnQudGFyZ2V0O1xuICAgIGlmICh0YXJnZXQuY2xhc3NOYW1lID09IFwicHJvamVjdC1kZWxldGVcIikge1xuICAgICAgICBjb25zdCBpbmRleCA9IHRhcmdldC5kYXRhc2V0LnByb2plY3RJbmRleDtcbiAgICAgICAgY29uc3QgcHJvamVjdCA9IGNvbnRyb2xsZXIuZ2V0UHJvamVjdEJ5TnVtYmVyKGluZGV4KTtcbiAgICAgICAgY29udHJvbGxlci5wcm9qZWN0RGVsZXRlKHByb2plY3QpO1xuICAgICAgICB2aWV3cy5yZWRyYXdTY3JlZW4oKTtcbiAgICB9XG5cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1hcmtEb25lVG9kb0V2ZW50KCkge1xuXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBlZGl0VG9kb0VsZW1lbnRFdmVudCgpIHtcblxufVxuXG5leHBvcnQgZnVuY3Rpb24gdG9nZ2xlVHJlZUV2ZW50KCkge1xuXG59IiwiY2xhc3MgUHJvamVjdCB7XG4gICAgI3doYXQ7XG4gICAgI3doaWNoID0gW107XG5cbiAgICBjb25zdHJ1Y3Rvcih3aGF0KSB7XG4gICAgICAgIHRoaXMuI3doYXQgPSB3aGF0O1xuICAgICAgICAvLyBlcnJvciBpZiBzdWNoIGEgcHJvamVjdCBhbHJlYWR5IGV4aXN0c1xuICAgICAgICBjb25zb2xlLmxvZyhgU3VjY2Vzc2Z1bGx5IGNyZWF0ZWQgcHJvamVjdCAke3doYXR9LmApO1xuICAgIH1cbiAgICBhZGQodG9kbykge1xuICAgICAgICB0aGlzLiN3aGljaC5wdXNoKHRvZG8pO1xuICAgICAgICBjb25zb2xlLmxvZyhgU3VjY2Vzc2Z1bGx5IGFkZGVkIHRvZG8gJHt0b2RvLndoYXR9IHRvIHByb2plY3QgJHt0aGlzLiN3aGF0fWApO1xuICAgICAgICBjb25zb2xlLmxvZyhgVGhlIHByb2plY3Qgbm93IGNvbnRhaW5zICR7dGhpcy5jb3VudH0gdG9kbyBpdGVtcy5gKTtcbiAgICB9XG4gICAgZGVsZXRlKGluZGV4KSB7XG4gICAgICAgIHRoaXMuI3doaWNoLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgIGNvbnNvbGUubG9nKGBTdWNjZXNzZnVsbHkgZGVsZXRlZCB0b2RvICR7aW5kZXh9IGZyb20gcHJvamVjdCAke3RoaXMuI3doYXR9YCk7XG4gICAgICAgIGNvbnNvbGUubG9nKGBUaGUgcHJvamVjdCBub3cgY29udGFpbnMgJHt0aGlzLmNvdW50fSB0b2RvIGl0ZW1zLmApO1xuICAgIH1cbiAgICBnZXQgY291bnQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLiN3aGljaC5sZW5ndGg7XG4gICAgfVxuXG4gICAgZ2V0IHdoYXQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLiN3aGF0O1xuICAgIH1cblxuICAgIGdldCB3aGljaCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuI3doaWNoO1xuICAgIH1cbn1cbmV4cG9ydCB7IFByb2plY3QgfTtcbiIsIi8vIFRPRE8gZ2l2ZSBlYWNoIHRvZG8gYW4gdW5pcXVlIElEXG4vLyBUT0RPIGFkZCBlYWNoIHRvZG8gdG8gYSBjZXJ0YWluIHByb2plY3QgKGVsc2U6IERlZmF1bHRcblxuY2xhc3MgVG9kbyB7XG4gICAgI3doYXQ7XG4gICAgI3doZW47XG4gICAgI2lzVXJnZW50O1xuICAgICNpc0ZpbmlzaGVkO1xuICAgICNwcm9qZWN0O1xuXG4gICAgY29uc3RydWN0b3Iod2hhdCwgd2hlbiwgcHJvamVjdCA9IFwiRGVmYXVsdFwiLCBpc1VyZ2VudCA9ICdObycsIGlzRmluaXNoZWQgPSAnTm8nKSB7XG4gICAgICAgIHRoaXMuI3doYXQgPSB3aGF0O1xuICAgICAgICB0aGlzLiN3aGVuID0gd2hlbjtcbiAgICAgICAgdGhpcy4jcHJvamVjdCA9IHByb2plY3Q7XG4gICAgICAgIHRoaXMuI2lzVXJnZW50ID0gaXNVcmdlbnQ7XG4gICAgICAgIHRoaXMuI2lzRmluaXNoZWQgPSBpc0ZpbmlzaGVkO1xuICAgICAgICBjb25zb2xlLmxvZyhgU3VjY2Vzc2Z1bGx5IGNyZWF0ZWQgdG9kbyAke3doYXR9YCk7XG4gICAgfVxuICAgIC8vIGdldHRlcnNcbiAgICBnZXQgd2hhdCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuI3doYXQ7XG4gICAgfVxuICAgIGdldCB3aGVuKCkge1xuICAgICAgICByZXR1cm4gdGhpcy4jd2hlbjtcbiAgICB9XG4gICAgZ2V0IHVyZ2VudCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuI2lzVXJnZW50O1xuICAgIH1cbiAgICBnZXQgZG9uZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuI2lzRmluaXNoZWQ7XG4gICAgfVxuICAgIC8vIHNldHRlcnNcbiAgICBzZXQgd2hhdCh3aGF0KSB7XG4gICAgICAgIHRoaXMuI3doYXQgPSB3aGF0O1xuICAgIH1cbiAgICBzZXQgd2hlbih3aGVuKSB7XG4gICAgICAgIHRoaXMuI3doZW4gPSB3aGVuO1xuICAgIH1cbiAgICBzZXQgdXJnZW50KHllc05vKSB7XG4gICAgICAgIHRoaXMuI2lzVXJnZW50ID0geWVzTm87XG4gICAgfVxuICAgIHNldCBkb25lKHllc05vKSB7XG4gICAgICAgIHRoaXMuI2lzRmluaXNoZWQgPSB5ZXNObztcbiAgICAgICAgcmV0dXJuIHRoaXMuI2lzRmluaXNoZWQ7XG4gICAgfVxufVxuZXhwb3J0IHsgVG9kbyB9O1xuIiwiaW1wb3J0ICogYXMgY29udHJvbGxlciBmcm9tICcuL2NvbnRyb2xsZXIuanMnO1xuaW1wb3J0ICogYXMgZXZlbnRzIGZyb20gJy4vZXZlbnRzLmpzJztcblxuLy8gQWxsIHZpZXdzIHVzZXJzIGNhbiBpbnRlcmFjdCB3aXRoXG5leHBvcnQgZnVuY3Rpb24gZGF0ZVZpZXcoKSB7XG4gICAgLy8gcmV0dXJucyB0aGUgdG9kbyBsaXN0LCBvcmRlcmVkIGJ5IGRhdGUgYW5kIGRpdmlkZWQgaW50byA0IGNhdGVnb3JpZXM6XG4gICAgLy8gVG9kYXksIFRoaXMgd2VlaywgVGhpcyBNb250aCBhbmQgTGF0ZXJcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRvZGF5VmlldygpIHtcbiAgICAvLyByZXR1cm5zIHRoZSBsaXN0IG9mIHRvZG9zIGZvciB0b2RheVxufVxuXG5leHBvcnQgZnVuY3Rpb24gcHJvamVjdHNWaWV3KCkge1xuICAgIC8vIHJldHVybnMgdGhlIGxpc3Qgb2YgYWxsIHByb2plY3RzXG4gICAgY29uc3QgcHJvamVjdHMgPSBjb250cm9sbGVyLmxpc3RQcm9qZWN0cygpO1xuICAgIGNvbnN0IHVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO1xuICAgIGNvbnN0IGFkZEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIHByb2plY3RzLmZvckVhY2goKHByb2plY3QsIGluZGV4KSA9PiB7XG4gICAgICAgIGNvbnN0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICAgICAgICBjb25zdCBoMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgICAgIGNvbnN0IGRlbFNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICAgIGRlbFNwYW4udGV4dENvbnRlbnQgPSAnIChBREVMKSc7XG4gICAgICAgIGRlbFNwYW4uc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJwcm9qZWN0LWRlbGV0ZVwiKTtcbiAgICAgICAgZGVsU3Bhbi5zZXRBdHRyaWJ1dGUoXCJkYXRhLXByb2plY3QtaW5kZXhcIiwgaW5kZXgpO1xuICAgICAgICBoMi50ZXh0Q29udGVudCA9IHByb2plY3Qud2hhdDtcbiAgICAgICAgaDIuYXBwZW5kQ2hpbGQoZGVsU3Bhbik7XG4gICAgICAgIGxpLmFwcGVuZENoaWxkKGgyKTtcbiAgICAgICAgLy8gYXBwZW5kIGxpc3Qgd2l0aCBhbGwgcHJvamVjdCB0b2Rvc1xuICAgICAgICBjb25zdCB0b2RvcyA9IHByb2plY3RUb2Rvc1ZpZXcoaW5kZXgpO1xuICAgICAgICBpZiAodG9kb3MpIHtcbiAgICAgICAgICAgIGxpLmFwcGVuZENoaWxkKHRvZG9zKTtcbiAgICAgICAgfVxuICAgICAgICB1bC5hcHBlbmRDaGlsZChsaSk7XG4gICAgfSk7XG4gICAgYWRkQnV0dG9uLnRleHRDb250ZW50ID0gXCIrIEFERCBQUk9KRUNUXCI7XG4gICAgYWRkQnV0dG9uLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiYWRkLXByb2plY3RcIik7XG4gICAgdWwuYXBwZW5kQ2hpbGQoYWRkQnV0dG9uKTtcbiAgICByZXR1cm4gdWw7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcm9qZWN0VG9kb3NWaWV3KGluZGV4KSB7XG4gICAgLy8gcmV0dXJucyBhIGxpc3Qgb2YgYWxsIHRvZG9zIGZvciBhIGNlcnRhaW4gcHJvamVjdFxuICAgIGNvbnN0IHRvZG9zID0gY29udHJvbGxlci5saXN0VG9kb3NGb3JQcm9qZWN0KGluZGV4KTtcbiAgICBjb25zdCBhZGRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBjb25zdCB1bCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG4gICAgaWYgKHRvZG9zLmxlbmd0aCA+IDApIHtcbiAgICAgICAgdG9kb3MuZm9yRWFjaCgodG9kbywgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHVsVG9kbyA9IHRvZG9WaWV3KHRvZG8sIGluZGV4KTtcbiAgICAgICAgICAgIHVsLmFwcGVuZENoaWxkKHVsVG9kbyk7XG5cblxuICAgICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBjb25zb2xlLmxvZyhgTm8gdG9kb3MgZm9yIHByb2plY3QgJHtpbmRleH1gKTtcbiAgICB9XG4gICAgYWRkQnV0dG9uLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwidG9kby1hZGRcIik7XG4gICAgYWRkQnV0dG9uLnRleHRDb250ZW50ID0gXCIrIEFERCBUT0RPXCI7XG4gICAgdWwuYXBwZW5kQ2hpbGQoYWRkQnV0dG9uKTtcbiAgICByZXR1cm4gdWw7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0b2RvVmlldyh0b2RvLCBpbmRleCkge1xuICAgIC8vIHJldHVybnMgYSB0b2RvIHdpdGggYWxsIHRoZSBkZXRhaWxzXG4gICAgY29uc3QgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIGNvbnN0IHVsV2hhdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG4gICAgY29uc3QgdmFsdWVzID0gW3RvZG8ud2hlbiwgdG9kby51cmdlbnQsIHRvZG8uZG9uZV07XG4gICAgY29uc3QgaDMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICAgIGNvbnN0IHVpU3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICBjb25zdCBjaGVja0JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgY2hlY2tCb3gudHlwZSA9ICdjaGVja2JveCc7XG4gICAgY2hlY2tCb3guc2V0QXR0cmlidXRlKFwiZGF0YS10b2RvLWluZGV4XCIsIGluZGV4KTtcbiAgICB1aVNwYW4udGV4dENvbnRlbnQgPSAoXCIgKERFTClcIik7XG4gICAgdWlTcGFuLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwidG9kby1kZWxldGVcIik7XG4gICAgdWlTcGFuLnNldEF0dHJpYnV0ZShcImRhdGEtdG9kby1pbmRleFwiLCBpbmRleCk7XG4gICAgaDMudGV4dENvbnRlbnQgPSB0b2RvLndoYXQ7XG4gICAgaDMuYXBwZW5kQ2hpbGQoY2hlY2tCb3gpO1xuICAgIGgzLmFwcGVuZENoaWxkKHVpU3Bhbik7XG4gICAgdmFsdWVzLmZvckVhY2goKHZhbHVlLCBpbmRleCkgPT4ge1xuICAgICAgICBjb25zdCBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgICAgIGNvbnN0IGNoYW5nZVNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICAgIGNoYW5nZVNwYW4udGV4dENvbnRlbnQgPSBcIiAoRURJVClcIjtcbiAgICAgICAgY2hhbmdlU3Bhbi5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInRvZG8tZWRpdFwiKTtcbiAgICAgICAgY2hhbmdlU3Bhbi5zZXRBdHRyaWJ1dGUoXCJkYXRhLXRvZG8tZWwtaW5kZXhcIiwgaW5kZXgpO1xuICAgICAgICBsaS50ZXh0Q29udGVudCA9IHZhbHVlO1xuICAgICAgICBsaS5hcHBlbmRDaGlsZChjaGFuZ2VTcGFuKTtcbiAgICAgICAgdWxXaGF0LmFwcGVuZENoaWxkKGxpKTtcbiAgICB9KTtcbiAgICBsaS5hcHBlbmRDaGlsZChoMyk7XG5cbiAgICBsaS5hcHBlbmRDaGlsZCh1bFdoYXQpO1xuICAgIHJldHVybiBsaTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZEV2ZW50c1RvVmlldyh2aWV3RnVuY3Rpb24pIHtcbiAgICBjb25zdCBjb250YWluZXIgPSB2aWV3RnVuY3Rpb24oKTtcbiAgICBjb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBldmVudHMuYWRkVG9kb0V2ZW50KTtcbiAgICBjb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBldmVudHMuYWRkUHJvamVjdEV2ZW50KTtcbiAgICBjb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBldmVudHMuZGVsZXRlVG9kb0V2ZW50KTtcbiAgICBjb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBldmVudHMuZGVsZXRlUHJvamVjdEV2ZW50KTtcbiAgICByZXR1cm4gY29udGFpbmVyO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVkcmF3U2NyZWVuKCkge1xuICAgIGNvbnN0IG1haW5EaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnRcIik7XG4gICAgbWFpbkRpdi5pbm5lckhUTUwgPSBcIlwiO1xuICAgIGNvbnN0IGgxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICAgIGgxLnRleHRDb250ZW50ID0gXCJNeSBQcm9qZWN0c1wiO1xuICAgIGNvbnN0IHVsID0gYWRkRXZlbnRzVG9WaWV3KHByb2plY3RzVmlldyk7XG4gICAgbWFpbkRpdi5hcHBlbmRDaGlsZChoMSk7XG4gICAgbWFpbkRpdi5hcHBlbmRDaGlsZCh1bCk7XG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgJy4vYXBwLmpzJztcbmltcG9ydCAqIGFzIHZpZXdzIGZyb20gJy4vdmlld3MuanMnO1xuXG5jb25zdCBtYWluRGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50XCIpO1xuY29uc3QgaDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG5oMS50ZXh0Q29udGVudCA9IFwiTXkgUHJvamVjdHNcIjtcbmNvbnN0IHVsID0gdmlld3MucmVkcmF3U2NyZWVuKCk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9