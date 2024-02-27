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
        // add modal or input fields
        _controller_js__WEBPACK_IMPORTED_MODULE_1__.todoCreate("this todo stupid name fuck suck dick", "next month", myProject);
        _views_js__WEBPACK_IMPORTED_MODULE_0__.redrawScreen();
    }
}

function addProjectEvent(event) {
    // add functionality
    const target = event.target;
    if (target.id == "add-project") {
        alert('Add project');
        // add modal
        _views_js__WEBPACK_IMPORTED_MODULE_0__.redrawScreen();
        alert("redran");
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
        else {
            const string = "No todos for this project";
            const p = document.createElement('p');
            p.textContent = string;
            li.appendChild(p);
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
    if (todos.length > 0) {
        const ul = document.createElement('ul');
        todos.forEach((todo, index) => {
            const ulTodo = todoView(todo, index);
            ul.appendChild(ulTodo);
        });
        return ul;
    } else {
        console.log(`No todos for project ${project.what}`);
        // to check if there are todos?
        return false;
    }
}

function todoView(todo, index) {
    // returns a todo with all the details
    const li = document.createElement('li');
    const ulWhat = document.createElement('ul');
    const values = [todo.when, todo.urgent, todo.done];
    const h3 = document.createElement('h3');
    const uiSpan = document.createElement('span');
    const addButton = document.createElement('button');
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
    addButton.setAttribute("class", "todo-add");
    addButton.textContent = "+ ADD TODO";
    ulWhat.appendChild(addButton);
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


// import * as events from './events.js';

const mainDiv = document.getElementById("content");
const h1 = document.createElement("h1");
h1.textContent = "My Projects";
const ul = _views_js__WEBPACK_IMPORTED_MODULE_1__.redrawScreen();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWFwcC8uL3NyYy9jb250cm9sbGVyLmpzIiwid2VicGFjazovL29kaW4tdG9kby1hcHAvLi9zcmMvZGIuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWFwcC8uL3NyYy9ldmVudHMuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWFwcC8uL3NyYy9wcm9qZWN0LmpzIiwid2VicGFjazovL29kaW4tdG9kby1hcHAvLi9zcmMvdG9kby5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tYXBwLy4vc3JjL3ZpZXdzLmpzIiwid2VicGFjazovL29kaW4tdG9kby1hcHAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWFwcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWFwcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL29kaW4tdG9kby1hcHAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9vZGluLXRvZG8tYXBwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIGNvbnRyb2xsZXIgZnJvbSAnLi9jb250cm9sbGVyLmpzJztcbmltcG9ydCAqIGFzIHZpZXdzIGZyb20gJy4vdmlld3MuanMnO1xuXG4vLyBDcmVhdGUgYSBkZWZhdWx0IHByb2plY3RcbmNvbnN0IGRlZmF1bHRQcm9qZWN0ID0gY29udHJvbGxlci5wcm9qZWN0Q3JlYXRlKCdNeSBwcm9qZWN0Jyk7XG4vLyBhZGQgc2Vjb25kIHByb2plY3QgYW5kIHRoaXJkIHByb2plY3RcbmNvbnN0IHNlY29uZCA9IGNvbnRyb2xsZXIucHJvamVjdENyZWF0ZShcIk15IHNlY29uZCBwcm9qZWN0XCIpO1xuY29uc3QgdGhpcmQgPSBjb250cm9sbGVyLnByb2plY3RDcmVhdGUoXCJUaGlyZCBwcm9qZWN0IGlzIHRvZG8gbGlzdFwiKTtcblxuLy8gQ3JlYXRlIGEgZHVtbXkgdG9kb1xuY29uc3QgZGVmYXVsdFRvZG8gPSBjb250cm9sbGVyLnRvZG9DcmVhdGUoJ1RoaXMgdG9kbycsICdOb3cnLCBkZWZhdWx0UHJvamVjdCk7XG5jb25zdCBzZWNvbmRUb2RvID0gY29udHJvbGxlci50b2RvQ3JlYXRlKCdUaGlzIDIgdG9kbycsICdUb2RheScsIHNlY29uZCk7XG5jb25zdCB0aGlyZFRvZG8gPSBjb250cm9sbGVyLnRvZG9DcmVhdGUoJ1RoaXMgdG9kbyB0b2RvJywgJ05leHQgd2VlaycsIHRoaXJkKTtcbmNvbnN0IGZvdXJ0aFRvZG8gPSBjb250cm9sbGVyLnRvZG9DcmVhdGUoJ1RoaXNhc2RmYSB0b2RvJywgJ1RvbW9ycm93JywgdGhpcmQpO1xuXG52aWV3cy50b2RvVmlldyhkZWZhdWx0VG9kbyk7XG5cbmNvbnRyb2xsZXIudG9kb0lzRG9uZShkZWZhdWx0VG9kbyk7XG5cbi8vIENoZWNrIGlmIHRvZG8gc3RhdGUgY2hhbmdlZFxudmlld3MudG9kb1ZpZXcoZGVmYXVsdFRvZG8pOyIsIi8vIEFsbCB0aGUgYWN0aW9ucyB1c2VycyBjYW4gdW5kZXJ0YWtlXG5pbXBvcnQgeyBUb2RvIH0gZnJvbSAnLi90b2RvLmpzJztcbmltcG9ydCB7IFByb2plY3QgfSBmcm9tICcuL3Byb2plY3QuanMnO1xuaW1wb3J0IHsgZGVmYXVsdCBhcyBEQiB9IGZyb20gJy4vZGIuanMnO1xuXG4vLyBUb2RvIGFjdGlvbnNcbi8vIFRPRE8gTWFrZSBldmVyeSBmdW5jdGlvbiByZXR1cm4gc29tZXRoaW5nXG5cbmV4cG9ydCBmdW5jdGlvbiB0b2RvSXNEb25lKHRvZG8pIHtcbiAgICB0b2RvLmRvbmUgPSAneWVzJztcbiAgICByZXR1cm4gdG9kbztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRvZG9EZWxldGUocHJvamVjdCwgdG9kb0luZGV4KSB7XG4gICAgcHJvamVjdC5kZWxldGUodG9kb0luZGV4KTtcbiAgICByZXR1cm4gcHJvamVjdDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRvZG9DcmVhdGUod2hhdCwgd2hlbiwgcHJvamVjdCkge1xuICAgIGNvbnN0IHRvZG8gPSBuZXcgVG9kbyh3aGF0LCB3aGVuKTtcbiAgICBwcm9qZWN0LmFkZCh0b2RvKTtcbiAgICByZXR1cm4gcHJvamVjdDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRvZG9FZGl0KHRvZG8sIHdoYXQsIHdoZW4sIHVyZ2VudCkge1xuICAgIC8vIFRPRE86IHRoaW5rIG9mIHNvbWUgZGVmYXVsdHM/XG4gICAgdG9kby53aGF0ID0gd2hhdDtcbiAgICB0b2RvLndoZW4gPSB3aGVuO1xuICAgIHRvZG8udXJnZW50ID0gdXJnZW50O1xuICAgIHJldHVybiB0b2RvO1xufVxuXG4vLyBMaXN0c1xuXG5leHBvcnQgZnVuY3Rpb24gbGlzdFRvZG9zRm9yUHJvamVjdChwcm9qZWN0TmFtZSkge1xuICAgIGNvbnN0IG15UHJvamVjdCA9IERCLmdldFByb2plY3QocHJvamVjdE5hbWUpO1xuICAgIHJldHVybiBteVByb2plY3Qud2hpY2g7XG59XG5cbi8vIFRPRE9cbmV4cG9ydCBmdW5jdGlvbiBsaXN0VG9kb3NCeURhdGUoKSB7IH1cblxuXG5leHBvcnQgZnVuY3Rpb24gbGlzdFByb2plY3RzKCkge1xuICAgIHJldHVybiBEQi5saXN0UHJvamVjdHMoKTtcbn1cblxuLy8gUHJvamVjdCBhY3Rpb25zXG5cbmV4cG9ydCBmdW5jdGlvbiBwcm9qZWN0Q3JlYXRlKG5hbWUpIHtcbiAgICBjb25zdCBwcm9qZWN0ID0gbmV3IFByb2plY3QobmFtZSk7XG4gICAgREIuYWRkUHJvamVjdChwcm9qZWN0KTtcbiAgICByZXR1cm4gcHJvamVjdDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByb2plY3REZWxldGUocHJvamVjdCkge1xuICAgIERCLmRlbGV0ZVByb2plY3QocHJvamVjdCk7XG4gICAgcHJvamVjdCA9IG51bGw7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcm9qZWN0RWRpdChwcm9qZWN0LCBuYW1lKSB7XG4gICAgcHJvamVjdC53aGF0ID0gbmFtZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByb2plY3RBZGRUb2RvKHByb2plY3QsIHRvZG8pIHtcbiAgICBwcm9qZWN0LmFkZCh0b2RvKTtcbiAgICByZXR1cm4gcHJvamVjdDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFByb2plY3RCeU51bWJlcihudW1iZXIpIHtcbiAgICByZXR1cm4gREIuZ2V0UHJvamVjdEJ5TnVtYmVyKG51bWJlcik7XG59IiwiLy8gQ29udGFpbmVyIGZvciBhbGwgcHJvamVjdHMgYW5kIHRvZG9zXG4vLyB1bmlxdWUgQ0xBU1MgaW5zdGFuY2UgU0lOR0xFVE9OXG5sZXQgaW5zdGFuY2U7XG5sZXQgcHJvamVjdHMgPSBbXTtcbmNsYXNzIERCIHtcblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0aWYgKGluc3RhbmNlKSB7XG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoXCJOZXcgaW5zdGFuY2UgY2Fubm90IGJlIGNyZWF0ZWQhXCIpO1xuXHRcdFx0Ly8gVE9ETyBlcnJvciBpZiBuYW1lIGV4aXN0cyBhbHJlYWR5XG5cdFx0fVxuXHRcdGluc3RhbmNlID0gdGhpcztcblx0fVxuXHRhZGRQcm9qZWN0KHByb2plY3QpIHtcblx0XHRwcm9qZWN0cy5wdXNoKHByb2plY3QpO1xuXHRcdGNvbnNvbGUubG9nKGBQcm9qZWN0ICR7cHJvamVjdC53aGF0fSBzdWNjZXNzZnVsbHkgYWRkZWQgdG8gREIhYCk7XG5cdH1cblx0ZGVsZXRlUHJvamVjdChwcm9qZWN0KSB7XG5cdFx0bGV0IGluZGV4ID0gcHJvamVjdHMuaW5kZXhPZihwcm9qZWN0KTtcblx0XHRpZiAoaW5kZXggIT09IC0xKSB7XG5cdFx0XHRwcm9qZWN0cy5zcGxpY2UoaW5kZXgsIDEpO1xuXHRcdFx0Y29uc29sZS5sb2coYFByb2plY3QgJHtwcm9qZWN0LndoYXR9IHN1Y2Nlc3NmdWxseSByZW1vdmVkIGZyb20gREIhYCk7XG5cdFx0fVxuXG5cdH1cblx0bGlzdFByb2plY3RzKCkge1xuXHRcdHJldHVybiBwcm9qZWN0cztcblx0fVxuXG5cdGdldFByb2plY3QobmFtZSkge1xuXHRcdC8vIE5FRURFRD8/P1xuXHRcdGNvbnN0IG15UHJvamVjdCA9IHByb2plY3RzLmZpbmQocHJvamVjdCA9PiBwcm9qZWN0LndoYXQgPT09IG5hbWUpO1xuXHRcdHJldHVybiBteVByb2plY3Q7XG5cdH1cblxuXHRnZXRQcm9qZWN0QnlOdW1iZXIobnVtYmVyKSB7XG5cdFx0cmV0dXJuIHByb2plY3RzW251bWJlcl07XG5cdH1cbn1cbmxldCBEQkluc3RhbmNlID0gT2JqZWN0LmZyZWV6ZShuZXcgREIoKSk7XG5cbmV4cG9ydCBkZWZhdWx0IERCSW5zdGFuY2U7XG4iLCJpbXBvcnQgKiBhcyB2aWV3cyBmcm9tICcuL3ZpZXdzLmpzJztcbmltcG9ydCAqIGFzIGNvbnRyb2xsZXIgZnJvbSAnLi9jb250cm9sbGVyLmpzJztcblxuZXhwb3J0IGZ1bmN0aW9uIGFkZFRvZG9FdmVudChldmVudCkge1xuICAgIGNvbnN0IHRhcmdldCA9IGV2ZW50LnRhcmdldDtcbiAgICBpZiAodGFyZ2V0LmNsYXNzTmFtZSA9PSBcInRvZG8tYWRkXCIpIHtcbiAgICAgICAgY29uc3QgcHJvamVjdExpID0gdGFyZ2V0LmNsb3Nlc3QoXCJoMiArIHVsXCIpLnBhcmVudEVsZW1lbnQ7XG4gICAgICAgIGNvbnN0IHByb2plY3RJZCA9IHByb2plY3RMaS5xdWVyeVNlbGVjdG9yKFwic3BhblwiKS5kYXRhc2V0LnByb2plY3RJbmRleDtcbiAgICAgICAgY29uc3QgbXlQcm9qZWN0ID0gY29udHJvbGxlci5nZXRQcm9qZWN0QnlOdW1iZXIocHJvamVjdElkKTtcbiAgICAgICAgLy8gYWRkIG1vZGFsIG9yIGlucHV0IGZpZWxkc1xuICAgICAgICBjb250cm9sbGVyLnRvZG9DcmVhdGUoXCJ0aGlzIHRvZG8gc3R1cGlkIG5hbWUgZnVjayBzdWNrIGRpY2tcIiwgXCJuZXh0IG1vbnRoXCIsIG15UHJvamVjdCk7XG4gICAgICAgIHZpZXdzLnJlZHJhd1NjcmVlbigpO1xuICAgIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZFByb2plY3RFdmVudChldmVudCkge1xuICAgIC8vIGFkZCBmdW5jdGlvbmFsaXR5XG4gICAgY29uc3QgdGFyZ2V0ID0gZXZlbnQudGFyZ2V0O1xuICAgIGlmICh0YXJnZXQuaWQgPT0gXCJhZGQtcHJvamVjdFwiKSB7XG4gICAgICAgIGFsZXJ0KCdBZGQgcHJvamVjdCcpO1xuICAgICAgICAvLyBhZGQgbW9kYWxcbiAgICAgICAgdmlld3MucmVkcmF3U2NyZWVuKCk7XG4gICAgICAgIGFsZXJ0KFwicmVkcmFuXCIpO1xuICAgIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlbGV0ZVRvZG9FdmVudCgpIHtcblxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVsZXRlUHJvamVjdEV2ZW50KCkge1xuXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtYXJrRG9uZVRvZG9FdmVudCgpIHtcblxufVxuXG5leHBvcnQgZnVuY3Rpb24gZWRpdFRvZG9FbGVtZW50RXZlbnQoKSB7XG5cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRvZ2dsZVRyZWVFdmVudCgpIHtcblxufSIsImNsYXNzIFByb2plY3Qge1xuICAgICN3aGF0O1xuICAgICN3aGljaCA9IFtdO1xuXG4gICAgY29uc3RydWN0b3Iod2hhdCkge1xuICAgICAgICB0aGlzLiN3aGF0ID0gd2hhdDtcbiAgICAgICAgY29uc29sZS5sb2coYFN1Y2Nlc3NmdWxseSBjcmVhdGVkIHByb2plY3QgJHt3aGF0fS5gKTtcbiAgICB9XG4gICAgYWRkKHRvZG8pIHtcbiAgICAgICAgdGhpcy4jd2hpY2gucHVzaCh0b2RvKTtcbiAgICAgICAgY29uc29sZS5sb2coYFN1Y2Nlc3NmdWxseSBhZGRlZCB0b2RvICR7dG9kby53aGF0fSB0byBwcm9qZWN0ICR7dGhpcy4jd2hhdH1gKTtcbiAgICAgICAgY29uc29sZS5sb2coYFRoZSBwcm9qZWN0IG5vdyBjb250YWlucyAke3RoaXMuY291bnR9IHRvZG8gaXRlbXMuYCk7XG4gICAgfVxuICAgIGRlbGV0ZSh0b2RvKSB7XG4gICAgICAgIHRoaXMuI3doaWNoLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgIGNvbnNvbGUubG9nKGBTdWNjZXNzZnVsbHkgZGVsZXRlZCB0b2RvICR7dG9kby53aGF0fSBmcm9tIHByb2plY3QgJHt0aGlzLiN3aGF0fWApO1xuICAgICAgICBjb25zb2xlLmxvZyhgVGhlIHByb2plY3Qgbm93IGNvbnRhaW5zICR7dGhpcy5jb3VudH0gdG9kbyBpdGVtcy5gKTtcbiAgICB9XG4gICAgZ2V0IGNvdW50KCkge1xuICAgICAgICByZXR1cm4gdGhpcy4jd2hpY2gubGVuZ3RoO1xuICAgIH1cblxuICAgIGdldCB3aGF0KCkge1xuICAgICAgICByZXR1cm4gdGhpcy4jd2hhdDtcbiAgICB9XG5cbiAgICBnZXQgd2hpY2goKSB7XG4gICAgICAgIHJldHVybiB0aGlzLiN3aGljaDtcbiAgICB9XG59XG5leHBvcnQgeyBQcm9qZWN0IH07XG4iLCIvLyBUT0RPIGdpdmUgZWFjaCB0b2RvIGFuIHVuaXF1ZSBJRFxuLy8gVE9ETyBhZGQgZWFjaCB0b2RvIHRvIGEgY2VydGFpbiBwcm9qZWN0IChlbHNlOiBEZWZhdWx0XG5cbmNsYXNzIFRvZG8ge1xuICAgICN3aGF0O1xuICAgICN3aGVuO1xuICAgICNpc1VyZ2VudDtcbiAgICAjaXNGaW5pc2hlZDtcbiAgICAjcHJvamVjdDtcblxuICAgIGNvbnN0cnVjdG9yKHdoYXQsIHdoZW4sIHByb2plY3QgPSBcIkRlZmF1bHRcIiwgaXNVcmdlbnQgPSAnTm8nLCBpc0ZpbmlzaGVkID0gJ05vJykge1xuICAgICAgICB0aGlzLiN3aGF0ID0gd2hhdDtcbiAgICAgICAgdGhpcy4jd2hlbiA9IHdoZW47XG4gICAgICAgIHRoaXMuI3Byb2plY3QgPSBwcm9qZWN0O1xuICAgICAgICB0aGlzLiNpc1VyZ2VudCA9IGlzVXJnZW50O1xuICAgICAgICB0aGlzLiNpc0ZpbmlzaGVkID0gaXNGaW5pc2hlZDtcbiAgICAgICAgY29uc29sZS5sb2coYFN1Y2Nlc3NmdWxseSBjcmVhdGVkIHRvZG8gJHt3aGF0fWApO1xuICAgIH1cbiAgICAvLyBnZXR0ZXJzXG4gICAgZ2V0IHdoYXQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLiN3aGF0O1xuICAgIH1cbiAgICBnZXQgd2hlbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuI3doZW47XG4gICAgfVxuICAgIGdldCB1cmdlbnQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLiNpc1VyZ2VudDtcbiAgICB9XG4gICAgZ2V0IGRvbmUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLiNpc0ZpbmlzaGVkO1xuICAgIH1cbiAgICAvLyBzZXR0ZXJzXG4gICAgc2V0IHdoYXQod2hhdCkge1xuICAgICAgICB0aGlzLiN3aGF0ID0gd2hhdDtcbiAgICB9XG4gICAgc2V0IHdoZW4od2hlbikge1xuICAgICAgICB0aGlzLiN3aGVuID0gd2hlbjtcbiAgICB9XG4gICAgc2V0IHVyZ2VudCh5ZXNObykge1xuICAgICAgICB0aGlzLiNpc1VyZ2VudCA9IHllc05vO1xuICAgIH1cbiAgICBzZXQgZG9uZSh5ZXNObykge1xuICAgICAgICB0aGlzLiNpc0ZpbmlzaGVkID0geWVzTm87XG4gICAgICAgIHJldHVybiB0aGlzLiNpc0ZpbmlzaGVkO1xuICAgIH1cbn1cbmV4cG9ydCB7IFRvZG8gfTtcbiIsImltcG9ydCAqIGFzIGNvbnRyb2xsZXIgZnJvbSAnLi9jb250cm9sbGVyLmpzJztcbmltcG9ydCAqIGFzIGV2ZW50cyBmcm9tICcuL2V2ZW50cy5qcyc7XG5cbi8vIEFsbCB2aWV3cyB1c2VycyBjYW4gaW50ZXJhY3Qgd2l0aFxuZXhwb3J0IGZ1bmN0aW9uIGRhdGVWaWV3KCkge1xuICAgIC8vIHJldHVybnMgdGhlIHRvZG8gbGlzdCwgb3JkZXJlZCBieSBkYXRlIGFuZCBkaXZpZGVkIGludG8gNCBjYXRlZ29yaWVzOlxuICAgIC8vIFRvZGF5LCBUaGlzIHdlZWssIFRoaXMgTW9udGggYW5kIExhdGVyXG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0b2RheVZpZXcoKSB7XG4gICAgLy8gcmV0dXJucyB0aGUgbGlzdCBvZiB0b2RvcyBmb3IgdG9kYXlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByb2plY3RzVmlldygpIHtcbiAgICAvLyByZXR1cm5zIHRoZSBsaXN0IG9mIGFsbCBwcm9qZWN0c1xuICAgIGNvbnN0IHByb2plY3RzID0gY29udHJvbGxlci5saXN0UHJvamVjdHMoKTtcbiAgICBjb25zdCB1bCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtcbiAgICBjb25zdCBhZGRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBwcm9qZWN0cy5mb3JFYWNoKChwcm9qZWN0LCBpbmRleCkgPT4ge1xuICAgICAgICBjb25zdCBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgICAgICAgY29uc3QgaDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgICAgICBjb25zdCBkZWxTcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgICBkZWxTcGFuLnRleHRDb250ZW50ID0gJyAoREVMKSc7XG4gICAgICAgIGRlbFNwYW4uc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJwcm9qZWN0LWRlbGV0ZVwiKTtcbiAgICAgICAgZGVsU3Bhbi5zZXRBdHRyaWJ1dGUoXCJkYXRhLXByb2plY3QtaW5kZXhcIiwgaW5kZXgpO1xuICAgICAgICBoMi50ZXh0Q29udGVudCA9IHByb2plY3Qud2hhdDtcbiAgICAgICAgaDIuYXBwZW5kQ2hpbGQoZGVsU3Bhbik7XG4gICAgICAgIGxpLmFwcGVuZENoaWxkKGgyKTtcbiAgICAgICAgLy8gYXBwZW5kIGxpc3Qgd2l0aCBhbGwgcHJvamVjdCB0b2Rvc1xuICAgICAgICBjb25zdCB0b2RvcyA9IHByb2plY3RUb2Rvc1ZpZXcocHJvamVjdCk7XG4gICAgICAgIGlmICh0b2Rvcykge1xuICAgICAgICAgICAgbGkuYXBwZW5kQ2hpbGQodG9kb3MpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgY29uc3Qgc3RyaW5nID0gXCJObyB0b2RvcyBmb3IgdGhpcyBwcm9qZWN0XCI7XG4gICAgICAgICAgICBjb25zdCBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICAgICAgcC50ZXh0Q29udGVudCA9IHN0cmluZztcbiAgICAgICAgICAgIGxpLmFwcGVuZENoaWxkKHApO1xuICAgICAgICB9XG4gICAgICAgIHVsLmFwcGVuZENoaWxkKGxpKTtcbiAgICB9KTtcbiAgICBhZGRCdXR0b24udGV4dENvbnRlbnQgPSBcIisgQUREIFBST0pFQ1RcIjtcbiAgICBhZGRCdXR0b24uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJhZGQtcHJvamVjdFwiKTtcbiAgICB1bC5hcHBlbmRDaGlsZChhZGRCdXR0b24pO1xuICAgIHJldHVybiB1bDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByb2plY3RUb2Rvc1ZpZXcocHJvamVjdCkge1xuICAgIC8vIHJldHVybnMgYSBsaXN0IG9mIGFsbCB0b2RvcyBmb3IgYSBjZXJ0YWluIHByb2plY3RcbiAgICBjb25zdCB0b2RvcyA9IGNvbnRyb2xsZXIubGlzdFRvZG9zRm9yUHJvamVjdChwcm9qZWN0LndoYXQpO1xuICAgIGlmICh0b2Rvcy5sZW5ndGggPiAwKSB7XG4gICAgICAgIGNvbnN0IHVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcbiAgICAgICAgdG9kb3MuZm9yRWFjaCgodG9kbywgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHVsVG9kbyA9IHRvZG9WaWV3KHRvZG8sIGluZGV4KTtcbiAgICAgICAgICAgIHVsLmFwcGVuZENoaWxkKHVsVG9kbyk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gdWw7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgY29uc29sZS5sb2coYE5vIHRvZG9zIGZvciBwcm9qZWN0ICR7cHJvamVjdC53aGF0fWApO1xuICAgICAgICAvLyB0byBjaGVjayBpZiB0aGVyZSBhcmUgdG9kb3M/XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0b2RvVmlldyh0b2RvLCBpbmRleCkge1xuICAgIC8vIHJldHVybnMgYSB0b2RvIHdpdGggYWxsIHRoZSBkZXRhaWxzXG4gICAgY29uc3QgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIGNvbnN0IHVsV2hhdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG4gICAgY29uc3QgdmFsdWVzID0gW3RvZG8ud2hlbiwgdG9kby51cmdlbnQsIHRvZG8uZG9uZV07XG4gICAgY29uc3QgaDMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICAgIGNvbnN0IHVpU3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICBjb25zdCBhZGRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBjb25zdCBjaGVja0JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgY2hlY2tCb3gudHlwZSA9ICdjaGVja2JveCc7XG4gICAgY2hlY2tCb3guc2V0QXR0cmlidXRlKFwiZGF0YS10b2RvLWluZGV4XCIsIGluZGV4KTtcbiAgICB1aVNwYW4udGV4dENvbnRlbnQgPSAoXCIgKERFTClcIik7XG4gICAgdWlTcGFuLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwidG9kby1kZWxldGVcIik7XG4gICAgdWlTcGFuLnNldEF0dHJpYnV0ZShcImRhdGEtdG9kby1pbmRleFwiLCBpbmRleCk7XG4gICAgaDMudGV4dENvbnRlbnQgPSB0b2RvLndoYXQ7XG4gICAgaDMuYXBwZW5kQ2hpbGQoY2hlY2tCb3gpO1xuICAgIGgzLmFwcGVuZENoaWxkKHVpU3Bhbik7XG4gICAgdmFsdWVzLmZvckVhY2goKHZhbHVlLCBpbmRleCkgPT4ge1xuICAgICAgICBjb25zdCBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgICAgIGNvbnN0IGNoYW5nZVNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICAgIGNoYW5nZVNwYW4udGV4dENvbnRlbnQgPSBcIiAoRURJVClcIjtcbiAgICAgICAgY2hhbmdlU3Bhbi5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInRvZG8tZWRpdFwiKTtcbiAgICAgICAgY2hhbmdlU3Bhbi5zZXRBdHRyaWJ1dGUoXCJkYXRhLXRvZG8tZWwtaW5kZXhcIiwgaW5kZXgpO1xuICAgICAgICBsaS50ZXh0Q29udGVudCA9IHZhbHVlO1xuICAgICAgICBsaS5hcHBlbmRDaGlsZChjaGFuZ2VTcGFuKTtcbiAgICAgICAgdWxXaGF0LmFwcGVuZENoaWxkKGxpKTtcbiAgICB9KTtcbiAgICBsaS5hcHBlbmRDaGlsZChoMyk7XG4gICAgYWRkQnV0dG9uLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwidG9kby1hZGRcIik7XG4gICAgYWRkQnV0dG9uLnRleHRDb250ZW50ID0gXCIrIEFERCBUT0RPXCI7XG4gICAgdWxXaGF0LmFwcGVuZENoaWxkKGFkZEJ1dHRvbik7XG4gICAgbGkuYXBwZW5kQ2hpbGQodWxXaGF0KTtcbiAgICByZXR1cm4gbGk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRFdmVudHNUb1ZpZXcodmlld0Z1bmN0aW9uKSB7XG4gICAgY29uc3QgY29udGFpbmVyID0gdmlld0Z1bmN0aW9uKCk7XG4gICAgY29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZXZlbnRzLmFkZFRvZG9FdmVudCk7XG4gICAgY29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZXZlbnRzLmFkZFByb2plY3RFdmVudCk7XG4gICAgcmV0dXJuIGNvbnRhaW5lcjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlZHJhd1NjcmVlbigpIHtcbiAgICBjb25zdCBtYWluRGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50XCIpO1xuICAgIG1haW5EaXYuaW5uZXJIVE1MID0gXCJcIjtcbiAgICBjb25zdCBoMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgICBoMS50ZXh0Q29udGVudCA9IFwiTXkgUHJvamVjdHNcIjtcbiAgICBjb25zdCB1bCA9IGFkZEV2ZW50c1RvVmlldyhwcm9qZWN0c1ZpZXcpO1xuICAgIG1haW5EaXYuYXBwZW5kQ2hpbGQoaDEpO1xuICAgIG1haW5EaXYuYXBwZW5kQ2hpbGQodWwpO1xufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0ICcuL2FwcC5qcyc7XG5pbXBvcnQgKiBhcyB2aWV3cyBmcm9tICcuL3ZpZXdzLmpzJztcbi8vIGltcG9ydCAqIGFzIGV2ZW50cyBmcm9tICcuL2V2ZW50cy5qcyc7XG5cbmNvbnN0IG1haW5EaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnRcIik7XG5jb25zdCBoMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbmgxLnRleHRDb250ZW50ID0gXCJNeSBQcm9qZWN0c1wiO1xuY29uc3QgdWwgPSB2aWV3cy5yZWRyYXdTY3JlZW4oKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=