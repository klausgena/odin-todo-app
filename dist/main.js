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


function addTodoEvent(event) {
    const target = event.target;
    if (target.className == "todo-add") {
        const projectLi = target.closest("h2 + ul").parentElement;
        const projectId = projectLi.querySelector("span").dataset.projectIndex;
        alert(projectId);
    }
}

function addProjectEvent() {

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

function redrawScreen() {

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
/* harmony import */ var _events_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./events.js */ "./src/events.js");




const mainDiv = document.getElementById("content");
const h1 = document.createElement("h1");
h1.textContent = "My Projects";
const ul = _views_js__WEBPACK_IMPORTED_MODULE_1__.projectsView();

mainDiv.appendChild(h1);
mainDiv.appendChild(ul);
document.addEventListener('click', _events_js__WEBPACK_IMPORTED_MODULE_2__.addTodoEvent);
// add events
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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a0IsK0RBQThCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxNQUFNO0FBQ04sNENBQTRDLGFBQWE7QUFDekQ7QUFDQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztVQ2hHQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7QUNOa0I7QUFDa0I7QUFDRTs7QUFFdEM7QUFDQTtBQUNBO0FBQ0EsV0FBVyxtREFBa0I7O0FBRTdCO0FBQ0E7QUFDQSxtQ0FBbUMsb0RBQW1CO0FBQ3RELGEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vZGluLXRvZG8tYXBwLy4vc3JjL2FwcC5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tYXBwLy4vc3JjL2NvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWFwcC8uL3NyYy9kYi5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tYXBwLy4vc3JjL2V2ZW50cy5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tYXBwLy4vc3JjL3Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWFwcC8uL3NyYy90b2RvLmpzIiwid2VicGFjazovL29kaW4tdG9kby1hcHAvLi9zcmMvdmlld3MuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWFwcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9vZGluLXRvZG8tYXBwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tYXBwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWFwcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL29kaW4tdG9kby1hcHAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgY29udHJvbGxlciBmcm9tICcuL2NvbnRyb2xsZXIuanMnO1xuaW1wb3J0ICogYXMgdmlld3MgZnJvbSAnLi92aWV3cy5qcyc7XG5cbi8vIENyZWF0ZSBhIGRlZmF1bHQgcHJvamVjdFxuY29uc3QgZGVmYXVsdFByb2plY3QgPSBjb250cm9sbGVyLnByb2plY3RDcmVhdGUoJ015IHByb2plY3QnKTtcbi8vIGFkZCBzZWNvbmQgcHJvamVjdCBhbmQgdGhpcmQgcHJvamVjdFxuY29uc3Qgc2Vjb25kID0gY29udHJvbGxlci5wcm9qZWN0Q3JlYXRlKFwiTXkgc2Vjb25kIHByb2plY3RcIik7XG5jb25zdCB0aGlyZCA9IGNvbnRyb2xsZXIucHJvamVjdENyZWF0ZShcIlRoaXJkIHByb2plY3QgaXMgdG9kbyBsaXN0XCIpO1xuXG4vLyBDcmVhdGUgYSBkdW1teSB0b2RvXG5jb25zdCBkZWZhdWx0VG9kbyA9IGNvbnRyb2xsZXIudG9kb0NyZWF0ZSgnVGhpcyB0b2RvJywgJ05vdycsIGRlZmF1bHRQcm9qZWN0KTtcbmNvbnN0IHNlY29uZFRvZG8gPSBjb250cm9sbGVyLnRvZG9DcmVhdGUoJ1RoaXMgMiB0b2RvJywgJ1RvZGF5Jywgc2Vjb25kKTtcbmNvbnN0IHRoaXJkVG9kbyA9IGNvbnRyb2xsZXIudG9kb0NyZWF0ZSgnVGhpcyB0b2RvIHRvZG8nLCAnTmV4dCB3ZWVrJywgdGhpcmQpO1xuY29uc3QgZm91cnRoVG9kbyA9IGNvbnRyb2xsZXIudG9kb0NyZWF0ZSgnVGhpc2FzZGZhIHRvZG8nLCAnVG9tb3Jyb3cnLCB0aGlyZCk7XG5cbnZpZXdzLnRvZG9WaWV3KGRlZmF1bHRUb2RvKTtcblxuY29udHJvbGxlci50b2RvSXNEb25lKGRlZmF1bHRUb2RvKTtcblxuLy8gQ2hlY2sgaWYgdG9kbyBzdGF0ZSBjaGFuZ2VkXG52aWV3cy50b2RvVmlldyhkZWZhdWx0VG9kbyk7IiwiLy8gQWxsIHRoZSBhY3Rpb25zIHVzZXJzIGNhbiB1bmRlcnRha2VcbmltcG9ydCB7IFRvZG8gfSBmcm9tICcuL3RvZG8uanMnO1xuaW1wb3J0IHsgUHJvamVjdCB9IGZyb20gJy4vcHJvamVjdC5qcyc7XG5pbXBvcnQgeyBkZWZhdWx0IGFzIERCIH0gZnJvbSAnLi9kYi5qcyc7XG5cbi8vIFRvZG8gYWN0aW9uc1xuLy8gVE9ETyBNYWtlIGV2ZXJ5IGZ1bmN0aW9uIHJldHVybiBzb21ldGhpbmdcblxuZXhwb3J0IGZ1bmN0aW9uIHRvZG9Jc0RvbmUodG9kbykge1xuICAgIHRvZG8uZG9uZSA9ICd5ZXMnO1xuICAgIHJldHVybiB0b2RvO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdG9kb0RlbGV0ZShwcm9qZWN0LCB0b2RvSW5kZXgpIHtcbiAgICBwcm9qZWN0LmRlbGV0ZSh0b2RvSW5kZXgpO1xuICAgIHJldHVybiBwcm9qZWN0O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdG9kb0NyZWF0ZSh3aGF0LCB3aGVuLCBwcm9qZWN0KSB7XG4gICAgY29uc3QgdG9kbyA9IG5ldyBUb2RvKHdoYXQsIHdoZW4pO1xuICAgIHByb2plY3QuYWRkKHRvZG8pO1xuICAgIHJldHVybiBwcm9qZWN0O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdG9kb0VkaXQodG9kbywgd2hhdCwgd2hlbiwgdXJnZW50KSB7XG4gICAgLy8gVE9ETzogdGhpbmsgb2Ygc29tZSBkZWZhdWx0cz9cbiAgICB0b2RvLndoYXQgPSB3aGF0O1xuICAgIHRvZG8ud2hlbiA9IHdoZW47XG4gICAgdG9kby51cmdlbnQgPSB1cmdlbnQ7XG4gICAgcmV0dXJuIHRvZG87XG59XG5cbi8vIExpc3RzXG5cbmV4cG9ydCBmdW5jdGlvbiBsaXN0VG9kb3NGb3JQcm9qZWN0KHByb2plY3ROYW1lKSB7XG4gICAgY29uc3QgbXlQcm9qZWN0ID0gREIuZ2V0UHJvamVjdChwcm9qZWN0TmFtZSk7XG4gICAgcmV0dXJuIG15UHJvamVjdC53aGljaDtcbn1cblxuLy8gVE9ET1xuZXhwb3J0IGZ1bmN0aW9uIGxpc3RUb2Rvc0J5RGF0ZSgpIHsgfVxuXG5cbmV4cG9ydCBmdW5jdGlvbiBsaXN0UHJvamVjdHMoKSB7XG4gICAgcmV0dXJuIERCLmxpc3RQcm9qZWN0cygpO1xufVxuXG4vLyBQcm9qZWN0IGFjdGlvbnNcblxuZXhwb3J0IGZ1bmN0aW9uIHByb2plY3RDcmVhdGUobmFtZSkge1xuICAgIGNvbnN0IHByb2plY3QgPSBuZXcgUHJvamVjdChuYW1lKTtcbiAgICBEQi5hZGRQcm9qZWN0KHByb2plY3QpO1xuICAgIHJldHVybiBwcm9qZWN0O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcHJvamVjdERlbGV0ZShwcm9qZWN0KSB7XG4gICAgREIuZGVsZXRlUHJvamVjdChwcm9qZWN0KTtcbiAgICBwcm9qZWN0ID0gbnVsbDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByb2plY3RFZGl0KHByb2plY3QsIG5hbWUpIHtcbiAgICBwcm9qZWN0LndoYXQgPSBuYW1lO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcHJvamVjdEFkZFRvZG8ocHJvamVjdCwgdG9kbykge1xuICAgIHByb2plY3QuYWRkKHRvZG8pO1xuICAgIHJldHVybiBwcm9qZWN0O1xufVxuIiwiLy8gQ29udGFpbmVyIGZvciBhbGwgcHJvamVjdHMgYW5kIHRvZG9zXG4vLyB1bmlxdWUgQ0xBU1MgaW5zdGFuY2UgU0lOR0xFVE9OXG5sZXQgaW5zdGFuY2U7XG5sZXQgcHJvamVjdHMgPSBbXTtcbmNsYXNzIERCIHtcblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0aWYgKGluc3RhbmNlKSB7XG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoXCJOZXcgaW5zdGFuY2UgY2Fubm90IGJlIGNyZWF0ZWQhXCIpO1xuXHRcdFx0Ly8gVE9ETyBlcnJvciBpZiBuYW1lIGV4aXN0cyBhbHJlYWR5XG5cdFx0fVxuXHRcdGluc3RhbmNlID0gdGhpcztcblx0fVxuXHRhZGRQcm9qZWN0KHByb2plY3QpIHtcblx0XHRwcm9qZWN0cy5wdXNoKHByb2plY3QpO1xuXHRcdGNvbnNvbGUubG9nKGBQcm9qZWN0ICR7cHJvamVjdC53aGF0fSBzdWNjZXNzZnVsbHkgYWRkZWQgdG8gREIhYCk7XG5cdH1cblx0ZGVsZXRlUHJvamVjdChwcm9qZWN0KSB7XG5cdFx0bGV0IGluZGV4ID0gcHJvamVjdHMuaW5kZXhPZihwcm9qZWN0KTtcblx0XHRpZiAoaW5kZXggIT09IC0xKSB7XG5cdFx0XHRwcm9qZWN0cy5zcGxpY2UoaW5kZXgsIDEpO1xuXHRcdFx0Y29uc29sZS5sb2coYFByb2plY3QgJHtwcm9qZWN0LndoYXR9IHN1Y2Nlc3NmdWxseSByZW1vdmVkIGZyb20gREIhYCk7XG5cdFx0fVxuXG5cdH1cblx0bGlzdFByb2plY3RzKCkge1xuXHRcdHJldHVybiBwcm9qZWN0cztcblx0fVxuXG5cdGdldFByb2plY3QobmFtZSkge1xuXHRcdGNvbnN0IG15UHJvamVjdCA9IHByb2plY3RzLmZpbmQocHJvamVjdCA9PiBwcm9qZWN0LndoYXQgPT09IG5hbWUpO1xuXHRcdHJldHVybiBteVByb2plY3Q7XG5cdH1cbn1cbmxldCBEQkluc3RhbmNlID0gT2JqZWN0LmZyZWV6ZShuZXcgREIoKSk7XG5cbmV4cG9ydCBkZWZhdWx0IERCSW5zdGFuY2U7XG4iLCJpbXBvcnQgKiBhcyB2aWV3cyBmcm9tICcuL3ZpZXdzLmpzJztcblxuZXhwb3J0IGZ1bmN0aW9uIGFkZFRvZG9FdmVudChldmVudCkge1xuICAgIGNvbnN0IHRhcmdldCA9IGV2ZW50LnRhcmdldDtcbiAgICBpZiAodGFyZ2V0LmNsYXNzTmFtZSA9PSBcInRvZG8tYWRkXCIpIHtcbiAgICAgICAgY29uc3QgcHJvamVjdExpID0gdGFyZ2V0LmNsb3Nlc3QoXCJoMiArIHVsXCIpLnBhcmVudEVsZW1lbnQ7XG4gICAgICAgIGNvbnN0IHByb2plY3RJZCA9IHByb2plY3RMaS5xdWVyeVNlbGVjdG9yKFwic3BhblwiKS5kYXRhc2V0LnByb2plY3RJbmRleDtcbiAgICAgICAgYWxlcnQocHJvamVjdElkKTtcbiAgICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRQcm9qZWN0RXZlbnQoKSB7XG5cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlbGV0ZVRvZG9FdmVudCgpIHtcblxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVsZXRlUHJvamVjdEV2ZW50KCkge1xuXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtYXJrRG9uZVRvZG9FdmVudCgpIHtcblxufVxuXG5leHBvcnQgZnVuY3Rpb24gZWRpdFRvZG9FbGVtZW50RXZlbnQoKSB7XG5cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRvZ2dsZVRyZWVFdmVudCgpIHtcblxufVxuXG5mdW5jdGlvbiByZWRyYXdTY3JlZW4oKSB7XG5cbn0iLCJjbGFzcyBQcm9qZWN0IHtcbiAgICAjd2hhdDtcbiAgICAjd2hpY2ggPSBbXTtcblxuICAgIGNvbnN0cnVjdG9yKHdoYXQpIHtcbiAgICAgICAgdGhpcy4jd2hhdCA9IHdoYXQ7XG4gICAgICAgIGNvbnNvbGUubG9nKGBTdWNjZXNzZnVsbHkgY3JlYXRlZCBwcm9qZWN0ICR7d2hhdH0uYCk7XG4gICAgfVxuICAgIGFkZCh0b2RvKSB7XG4gICAgICAgIHRoaXMuI3doaWNoLnB1c2godG9kbyk7XG4gICAgICAgIGNvbnNvbGUubG9nKGBTdWNjZXNzZnVsbHkgYWRkZWQgdG9kbyAke3RvZG8ud2hhdH0gdG8gcHJvamVjdCAke3RoaXMuI3doYXR9YCk7XG4gICAgICAgIGNvbnNvbGUubG9nKGBUaGUgcHJvamVjdCBub3cgY29udGFpbnMgJHt0aGlzLmNvdW50fSB0b2RvIGl0ZW1zLmApO1xuICAgIH1cbiAgICBkZWxldGUodG9kbykge1xuICAgICAgICB0aGlzLiN3aGljaC5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICBjb25zb2xlLmxvZyhgU3VjY2Vzc2Z1bGx5IGRlbGV0ZWQgdG9kbyAke3RvZG8ud2hhdH0gZnJvbSBwcm9qZWN0ICR7dGhpcy4jd2hhdH1gKTtcbiAgICAgICAgY29uc29sZS5sb2coYFRoZSBwcm9qZWN0IG5vdyBjb250YWlucyAke3RoaXMuY291bnR9IHRvZG8gaXRlbXMuYCk7XG4gICAgfVxuICAgIGdldCBjb3VudCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuI3doaWNoLmxlbmd0aDtcbiAgICB9XG5cbiAgICBnZXQgd2hhdCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuI3doYXQ7XG4gICAgfVxuXG4gICAgZ2V0IHdoaWNoKCkge1xuICAgICAgICByZXR1cm4gdGhpcy4jd2hpY2g7XG4gICAgfVxufVxuZXhwb3J0IHsgUHJvamVjdCB9O1xuIiwiLy8gVE9ETyBnaXZlIGVhY2ggdG9kbyBhbiB1bmlxdWUgSURcbi8vIFRPRE8gYWRkIGVhY2ggdG9kbyB0byBhIGNlcnRhaW4gcHJvamVjdCAoZWxzZTogRGVmYXVsdFxuXG5jbGFzcyBUb2RvIHtcbiAgICAjd2hhdDtcbiAgICAjd2hlbjtcbiAgICAjaXNVcmdlbnQ7XG4gICAgI2lzRmluaXNoZWQ7XG4gICAgI3Byb2plY3Q7XG5cbiAgICBjb25zdHJ1Y3Rvcih3aGF0LCB3aGVuLCBwcm9qZWN0ID0gXCJEZWZhdWx0XCIsIGlzVXJnZW50ID0gJ05vJywgaXNGaW5pc2hlZCA9ICdObycpIHtcbiAgICAgICAgdGhpcy4jd2hhdCA9IHdoYXQ7XG4gICAgICAgIHRoaXMuI3doZW4gPSB3aGVuO1xuICAgICAgICB0aGlzLiNwcm9qZWN0ID0gcHJvamVjdDtcbiAgICAgICAgdGhpcy4jaXNVcmdlbnQgPSBpc1VyZ2VudDtcbiAgICAgICAgdGhpcy4jaXNGaW5pc2hlZCA9IGlzRmluaXNoZWQ7XG4gICAgICAgIGNvbnNvbGUubG9nKGBTdWNjZXNzZnVsbHkgY3JlYXRlZCB0b2RvICR7d2hhdH1gKTtcbiAgICB9XG4gICAgLy8gZ2V0dGVyc1xuICAgIGdldCB3aGF0KCkge1xuICAgICAgICByZXR1cm4gdGhpcy4jd2hhdDtcbiAgICB9XG4gICAgZ2V0IHdoZW4oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLiN3aGVuO1xuICAgIH1cbiAgICBnZXQgdXJnZW50KCkge1xuICAgICAgICByZXR1cm4gdGhpcy4jaXNVcmdlbnQ7XG4gICAgfVxuICAgIGdldCBkb25lKCkge1xuICAgICAgICByZXR1cm4gdGhpcy4jaXNGaW5pc2hlZDtcbiAgICB9XG4gICAgLy8gc2V0dGVyc1xuICAgIHNldCB3aGF0KHdoYXQpIHtcbiAgICAgICAgdGhpcy4jd2hhdCA9IHdoYXQ7XG4gICAgfVxuICAgIHNldCB3aGVuKHdoZW4pIHtcbiAgICAgICAgdGhpcy4jd2hlbiA9IHdoZW47XG4gICAgfVxuICAgIHNldCB1cmdlbnQoeWVzTm8pIHtcbiAgICAgICAgdGhpcy4jaXNVcmdlbnQgPSB5ZXNObztcbiAgICB9XG4gICAgc2V0IGRvbmUoeWVzTm8pIHtcbiAgICAgICAgdGhpcy4jaXNGaW5pc2hlZCA9IHllc05vO1xuICAgICAgICByZXR1cm4gdGhpcy4jaXNGaW5pc2hlZDtcbiAgICB9XG59XG5leHBvcnQgeyBUb2RvIH07XG4iLCJpbXBvcnQgKiBhcyBjb250cm9sbGVyIGZyb20gJy4vY29udHJvbGxlci5qcyc7XG5cbi8vIEFsbCB2aWV3cyB1c2VycyBjYW4gaW50ZXJhY3Qgd2l0aFxuZXhwb3J0IGZ1bmN0aW9uIGRhdGVWaWV3KCkge1xuICAgIC8vIHJldHVybnMgdGhlIHRvZG8gbGlzdCwgb3JkZXJlZCBieSBkYXRlIGFuZCBkaXZpZGVkIGludG8gNCBjYXRlZ29yaWVzOlxuICAgIC8vIFRvZGF5LCBUaGlzIHdlZWssIFRoaXMgTW9udGggYW5kIExhdGVyXG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0b2RheVZpZXcoKSB7XG4gICAgLy8gcmV0dXJucyB0aGUgbGlzdCBvZiB0b2RvcyBmb3IgdG9kYXlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByb2plY3RzVmlldygpIHtcbiAgICAvLyByZXR1cm5zIHRoZSBsaXN0IG9mIGFsbCBwcm9qZWN0c1xuICAgIGNvbnN0IHByb2plY3RzID0gY29udHJvbGxlci5saXN0UHJvamVjdHMoKTtcbiAgICBjb25zdCB1bCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtcbiAgICBjb25zdCBhZGRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBwcm9qZWN0cy5mb3JFYWNoKChwcm9qZWN0LCBpbmRleCkgPT4ge1xuICAgICAgICBjb25zdCBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgICAgICAgY29uc3QgaDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgICAgICBjb25zdCBkZWxTcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgICBkZWxTcGFuLnRleHRDb250ZW50ID0gJyAoREVMKSc7XG4gICAgICAgIGRlbFNwYW4uc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJwcm9qZWN0LWRlbGV0ZVwiKTtcbiAgICAgICAgZGVsU3Bhbi5zZXRBdHRyaWJ1dGUoXCJkYXRhLXByb2plY3QtaW5kZXhcIiwgaW5kZXgpO1xuICAgICAgICBoMi50ZXh0Q29udGVudCA9IHByb2plY3Qud2hhdDtcbiAgICAgICAgaDIuYXBwZW5kQ2hpbGQoZGVsU3Bhbik7XG4gICAgICAgIGxpLmFwcGVuZENoaWxkKGgyKTtcbiAgICAgICAgLy8gYXBwZW5kIGxpc3Qgd2l0aCBhbGwgcHJvamVjdCB0b2Rvc1xuICAgICAgICBjb25zdCB0b2RvcyA9IHByb2plY3RUb2Rvc1ZpZXcocHJvamVjdCk7XG4gICAgICAgIGlmICh0b2Rvcykge1xuICAgICAgICAgICAgbGkuYXBwZW5kQ2hpbGQodG9kb3MpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgY29uc3Qgc3RyaW5nID0gXCJObyB0b2RvcyBmb3IgdGhpcyBwcm9qZWN0XCI7XG4gICAgICAgICAgICBjb25zdCBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICAgICAgcC50ZXh0Q29udGVudCA9IHN0cmluZztcbiAgICAgICAgICAgIGxpLmFwcGVuZENoaWxkKHApO1xuICAgICAgICB9XG4gICAgICAgIHVsLmFwcGVuZENoaWxkKGxpKTtcbiAgICB9KTtcbiAgICBhZGRCdXR0b24udGV4dENvbnRlbnQgPSBcIisgQUREIFBST0pFQ1RcIjtcbiAgICBhZGRCdXR0b24uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJhZGQtcHJvamVjdFwiKTtcbiAgICB1bC5hcHBlbmRDaGlsZChhZGRCdXR0b24pO1xuICAgIHJldHVybiB1bDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByb2plY3RUb2Rvc1ZpZXcocHJvamVjdCkge1xuICAgIC8vIHJldHVybnMgYSBsaXN0IG9mIGFsbCB0b2RvcyBmb3IgYSBjZXJ0YWluIHByb2plY3RcbiAgICBjb25zdCB0b2RvcyA9IGNvbnRyb2xsZXIubGlzdFRvZG9zRm9yUHJvamVjdChwcm9qZWN0LndoYXQpO1xuICAgIGlmICh0b2Rvcy5sZW5ndGggPiAwKSB7XG4gICAgICAgIGNvbnN0IHVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcbiAgICAgICAgdG9kb3MuZm9yRWFjaCgodG9kbywgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHVsVG9kbyA9IHRvZG9WaWV3KHRvZG8sIGluZGV4KTtcbiAgICAgICAgICAgIHVsLmFwcGVuZENoaWxkKHVsVG9kbyk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gdWw7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgY29uc29sZS5sb2coYE5vIHRvZG9zIGZvciBwcm9qZWN0ICR7cHJvamVjdC53aGF0fWApO1xuICAgICAgICAvLyB0byBjaGVjayBpZiB0aGVyZSBhcmUgdG9kb3M/XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0b2RvVmlldyh0b2RvLCBpbmRleCkge1xuICAgIC8vIHJldHVybnMgYSB0b2RvIHdpdGggYWxsIHRoZSBkZXRhaWxzXG4gICAgY29uc3QgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIGNvbnN0IHVsV2hhdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG4gICAgY29uc3QgdmFsdWVzID0gW3RvZG8ud2hlbiwgdG9kby51cmdlbnQsIHRvZG8uZG9uZV07XG4gICAgY29uc3QgaDMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICAgIGNvbnN0IHVpU3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICBjb25zdCBhZGRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBjb25zdCBjaGVja0JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgY2hlY2tCb3gudHlwZSA9ICdjaGVja2JveCc7XG4gICAgY2hlY2tCb3guc2V0QXR0cmlidXRlKFwiZGF0YS10b2RvLWluZGV4XCIsIGluZGV4KTtcbiAgICB1aVNwYW4udGV4dENvbnRlbnQgPSAoXCIgKERFTClcIik7XG4gICAgdWlTcGFuLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwidG9kby1kZWxldGVcIik7XG4gICAgdWlTcGFuLnNldEF0dHJpYnV0ZShcImRhdGEtdG9kby1pbmRleFwiLCBpbmRleCk7XG4gICAgaDMudGV4dENvbnRlbnQgPSB0b2RvLndoYXQ7XG4gICAgaDMuYXBwZW5kQ2hpbGQoY2hlY2tCb3gpO1xuICAgIGgzLmFwcGVuZENoaWxkKHVpU3Bhbik7XG4gICAgdmFsdWVzLmZvckVhY2goKHZhbHVlLCBpbmRleCkgPT4ge1xuICAgICAgICBjb25zdCBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgICAgIGNvbnN0IGNoYW5nZVNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICAgIGNoYW5nZVNwYW4udGV4dENvbnRlbnQgPSBcIiAoRURJVClcIjtcbiAgICAgICAgY2hhbmdlU3Bhbi5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInRvZG8tZWRpdFwiKTtcbiAgICAgICAgY2hhbmdlU3Bhbi5zZXRBdHRyaWJ1dGUoXCJkYXRhLXRvZG8tZWwtaW5kZXhcIiwgaW5kZXgpO1xuICAgICAgICBsaS50ZXh0Q29udGVudCA9IHZhbHVlO1xuICAgICAgICBsaS5hcHBlbmRDaGlsZChjaGFuZ2VTcGFuKTtcbiAgICAgICAgdWxXaGF0LmFwcGVuZENoaWxkKGxpKTtcbiAgICB9KTtcbiAgICBsaS5hcHBlbmRDaGlsZChoMyk7XG4gICAgYWRkQnV0dG9uLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwidG9kby1hZGRcIik7XG4gICAgYWRkQnV0dG9uLnRleHRDb250ZW50ID0gXCIrIEFERCBUT0RPXCI7XG4gICAgdWxXaGF0LmFwcGVuZENoaWxkKGFkZEJ1dHRvbik7XG4gICAgbGkuYXBwZW5kQ2hpbGQodWxXaGF0KTtcbiAgICByZXR1cm4gbGk7XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCAnLi9hcHAuanMnO1xuaW1wb3J0ICogYXMgdmlld3MgZnJvbSAnLi92aWV3cy5qcyc7XG5pbXBvcnQgKiBhcyBldmVudHMgZnJvbSAnLi9ldmVudHMuanMnO1xuXG5jb25zdCBtYWluRGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50XCIpO1xuY29uc3QgaDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG5oMS50ZXh0Q29udGVudCA9IFwiTXkgUHJvamVjdHNcIjtcbmNvbnN0IHVsID0gdmlld3MucHJvamVjdHNWaWV3KCk7XG5cbm1haW5EaXYuYXBwZW5kQ2hpbGQoaDEpO1xubWFpbkRpdi5hcHBlbmRDaGlsZCh1bCk7XG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGV2ZW50cy5hZGRUb2RvRXZlbnQpO1xuLy8gYWRkIGV2ZW50cyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==