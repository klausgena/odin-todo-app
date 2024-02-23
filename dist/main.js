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



const mainDiv = document.getElementById("content");
const h1 = document.createElement("h1");
h1.textContent = "My Projects";
const ul = _views_js__WEBPACK_IMPORTED_MODULE_1__.projectsView();

mainDiv.appendChild(h1);
mainDiv.appendChild(ul);

// add events
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O1VDaEdBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7O0FDTmtCO0FBQ2tCOztBQUVwQztBQUNBO0FBQ0E7QUFDQSxXQUFXLG1EQUFrQjs7QUFFN0I7QUFDQTs7QUFFQSxhIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWFwcC8uL3NyYy9hcHAuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWFwcC8uL3NyYy9jb250cm9sbGVyLmpzIiwid2VicGFjazovL29kaW4tdG9kby1hcHAvLi9zcmMvZGIuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWFwcC8uL3NyYy9wcm9qZWN0LmpzIiwid2VicGFjazovL29kaW4tdG9kby1hcHAvLi9zcmMvdG9kby5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tYXBwLy4vc3JjL3ZpZXdzLmpzIiwid2VicGFjazovL29kaW4tdG9kby1hcHAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWFwcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWFwcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL29kaW4tdG9kby1hcHAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9vZGluLXRvZG8tYXBwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIGNvbnRyb2xsZXIgZnJvbSAnLi9jb250cm9sbGVyLmpzJztcbmltcG9ydCAqIGFzIHZpZXdzIGZyb20gJy4vdmlld3MuanMnO1xuXG4vLyBDcmVhdGUgYSBkZWZhdWx0IHByb2plY3RcbmNvbnN0IGRlZmF1bHRQcm9qZWN0ID0gY29udHJvbGxlci5wcm9qZWN0Q3JlYXRlKCdNeSBwcm9qZWN0Jyk7XG4vLyBhZGQgc2Vjb25kIHByb2plY3QgYW5kIHRoaXJkIHByb2plY3RcbmNvbnN0IHNlY29uZCA9IGNvbnRyb2xsZXIucHJvamVjdENyZWF0ZShcIk15IHNlY29uZCBwcm9qZWN0XCIpO1xuY29uc3QgdGhpcmQgPSBjb250cm9sbGVyLnByb2plY3RDcmVhdGUoXCJUaGlyZCBwcm9qZWN0IGlzIHRvZG8gbGlzdFwiKTtcblxuLy8gQ3JlYXRlIGEgZHVtbXkgdG9kb1xuY29uc3QgZGVmYXVsdFRvZG8gPSBjb250cm9sbGVyLnRvZG9DcmVhdGUoJ1RoaXMgdG9kbycsICdOb3cnLCBkZWZhdWx0UHJvamVjdCk7XG5jb25zdCBzZWNvbmRUb2RvID0gY29udHJvbGxlci50b2RvQ3JlYXRlKCdUaGlzIDIgdG9kbycsICdUb2RheScsIHNlY29uZCk7XG5jb25zdCB0aGlyZFRvZG8gPSBjb250cm9sbGVyLnRvZG9DcmVhdGUoJ1RoaXMgdG9kbyB0b2RvJywgJ05leHQgd2VlaycsIHRoaXJkKTtcbmNvbnN0IGZvdXJ0aFRvZG8gPSBjb250cm9sbGVyLnRvZG9DcmVhdGUoJ1RoaXNhc2RmYSB0b2RvJywgJ1RvbW9ycm93JywgdGhpcmQpO1xuXG52aWV3cy50b2RvVmlldyhkZWZhdWx0VG9kbyk7XG5cbmNvbnRyb2xsZXIudG9kb0lzRG9uZShkZWZhdWx0VG9kbyk7XG5cbi8vIENoZWNrIGlmIHRvZG8gc3RhdGUgY2hhbmdlZFxudmlld3MudG9kb1ZpZXcoZGVmYXVsdFRvZG8pOyIsIi8vIEFsbCB0aGUgYWN0aW9ucyB1c2VycyBjYW4gdW5kZXJ0YWtlXG5pbXBvcnQgeyBUb2RvIH0gZnJvbSAnLi90b2RvLmpzJztcbmltcG9ydCB7IFByb2plY3QgfSBmcm9tICcuL3Byb2plY3QuanMnO1xuaW1wb3J0IHsgZGVmYXVsdCBhcyBEQiB9IGZyb20gJy4vZGIuanMnO1xuXG4vLyBUb2RvIGFjdGlvbnNcbi8vIFRPRE8gTWFrZSBldmVyeSBmdW5jdGlvbiByZXR1cm4gc29tZXRoaW5nXG5cbmV4cG9ydCBmdW5jdGlvbiB0b2RvSXNEb25lKHRvZG8pIHtcbiAgICB0b2RvLmRvbmUgPSAneWVzJztcbiAgICByZXR1cm4gdG9kbztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRvZG9EZWxldGUocHJvamVjdCwgdG9kb0luZGV4KSB7XG4gICAgcHJvamVjdC5kZWxldGUodG9kb0luZGV4KTtcbiAgICByZXR1cm4gcHJvamVjdDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRvZG9DcmVhdGUod2hhdCwgd2hlbiwgcHJvamVjdCkge1xuICAgIGNvbnN0IHRvZG8gPSBuZXcgVG9kbyh3aGF0LCB3aGVuKTtcbiAgICBwcm9qZWN0LmFkZCh0b2RvKTtcbiAgICByZXR1cm4gcHJvamVjdDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRvZG9FZGl0KHRvZG8sIHdoYXQsIHdoZW4sIHVyZ2VudCkge1xuICAgIC8vIFRPRE86IHRoaW5rIG9mIHNvbWUgZGVmYXVsdHM/XG4gICAgdG9kby53aGF0ID0gd2hhdDtcbiAgICB0b2RvLndoZW4gPSB3aGVuO1xuICAgIHRvZG8udXJnZW50ID0gdXJnZW50O1xuICAgIHJldHVybiB0b2RvO1xufVxuXG4vLyBMaXN0c1xuXG5leHBvcnQgZnVuY3Rpb24gbGlzdFRvZG9zRm9yUHJvamVjdChwcm9qZWN0TmFtZSkge1xuICAgIGNvbnN0IG15UHJvamVjdCA9IERCLmdldFByb2plY3QocHJvamVjdE5hbWUpO1xuICAgIHJldHVybiBteVByb2plY3Qud2hpY2g7XG59XG5cbi8vIFRPRE9cbmV4cG9ydCBmdW5jdGlvbiBsaXN0VG9kb3NCeURhdGUoKSB7IH1cblxuXG5leHBvcnQgZnVuY3Rpb24gbGlzdFByb2plY3RzKCkge1xuICAgIHJldHVybiBEQi5saXN0UHJvamVjdHMoKTtcbn1cblxuLy8gUHJvamVjdCBhY3Rpb25zXG5cbmV4cG9ydCBmdW5jdGlvbiBwcm9qZWN0Q3JlYXRlKG5hbWUpIHtcbiAgICBjb25zdCBwcm9qZWN0ID0gbmV3IFByb2plY3QobmFtZSk7XG4gICAgREIuYWRkUHJvamVjdChwcm9qZWN0KTtcbiAgICByZXR1cm4gcHJvamVjdDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByb2plY3REZWxldGUocHJvamVjdCkge1xuICAgIERCLmRlbGV0ZVByb2plY3QocHJvamVjdCk7XG4gICAgcHJvamVjdCA9IG51bGw7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcm9qZWN0RWRpdChwcm9qZWN0LCBuYW1lKSB7XG4gICAgcHJvamVjdC53aGF0ID0gbmFtZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByb2plY3RBZGRUb2RvKHByb2plY3QsIHRvZG8pIHtcbiAgICBwcm9qZWN0LmFkZCh0b2RvKTtcbiAgICByZXR1cm4gcHJvamVjdDtcbn1cbiIsIi8vIENvbnRhaW5lciBmb3IgYWxsIHByb2plY3RzIGFuZCB0b2Rvc1xuLy8gdW5pcXVlIENMQVNTIGluc3RhbmNlIFNJTkdMRVRPTlxubGV0IGluc3RhbmNlO1xubGV0IHByb2plY3RzID0gW107XG5jbGFzcyBEQiB7XG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdGlmIChpbnN0YW5jZSkge1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKFwiTmV3IGluc3RhbmNlIGNhbm5vdCBiZSBjcmVhdGVkIVwiKTtcblx0XHRcdC8vIFRPRE8gZXJyb3IgaWYgbmFtZSBleGlzdHMgYWxyZWFkeVxuXHRcdH1cblx0XHRpbnN0YW5jZSA9IHRoaXM7XG5cdH1cblx0YWRkUHJvamVjdChwcm9qZWN0KSB7XG5cdFx0cHJvamVjdHMucHVzaChwcm9qZWN0KTtcblx0XHRjb25zb2xlLmxvZyhgUHJvamVjdCAke3Byb2plY3Qud2hhdH0gc3VjY2Vzc2Z1bGx5IGFkZGVkIHRvIERCIWApO1xuXHR9XG5cdGRlbGV0ZVByb2plY3QocHJvamVjdCkge1xuXHRcdGxldCBpbmRleCA9IHByb2plY3RzLmluZGV4T2YocHJvamVjdCk7XG5cdFx0aWYgKGluZGV4ICE9PSAtMSkge1xuXHRcdFx0cHJvamVjdHMuc3BsaWNlKGluZGV4LCAxKTtcblx0XHRcdGNvbnNvbGUubG9nKGBQcm9qZWN0ICR7cHJvamVjdC53aGF0fSBzdWNjZXNzZnVsbHkgcmVtb3ZlZCBmcm9tIERCIWApO1xuXHRcdH1cblxuXHR9XG5cdGxpc3RQcm9qZWN0cygpIHtcblx0XHRyZXR1cm4gcHJvamVjdHM7XG5cdH1cblxuXHRnZXRQcm9qZWN0KG5hbWUpIHtcblx0XHRjb25zdCBteVByb2plY3QgPSBwcm9qZWN0cy5maW5kKHByb2plY3QgPT4gcHJvamVjdC53aGF0ID09PSBuYW1lKTtcblx0XHRyZXR1cm4gbXlQcm9qZWN0O1xuXHR9XG59XG5sZXQgREJJbnN0YW5jZSA9IE9iamVjdC5mcmVlemUobmV3IERCKCkpO1xuXG5leHBvcnQgZGVmYXVsdCBEQkluc3RhbmNlO1xuIiwiY2xhc3MgUHJvamVjdCB7XG4gICAgI3doYXQ7XG4gICAgI3doaWNoID0gW107XG5cbiAgICBjb25zdHJ1Y3Rvcih3aGF0KSB7XG4gICAgICAgIHRoaXMuI3doYXQgPSB3aGF0O1xuICAgICAgICBjb25zb2xlLmxvZyhgU3VjY2Vzc2Z1bGx5IGNyZWF0ZWQgcHJvamVjdCAke3doYXR9LmApO1xuICAgIH1cbiAgICBhZGQodG9kbykge1xuICAgICAgICB0aGlzLiN3aGljaC5wdXNoKHRvZG8pO1xuICAgICAgICBjb25zb2xlLmxvZyhgU3VjY2Vzc2Z1bGx5IGFkZGVkIHRvZG8gJHt0b2RvLndoYXR9IHRvIHByb2plY3QgJHt0aGlzLiN3aGF0fWApO1xuICAgICAgICBjb25zb2xlLmxvZyhgVGhlIHByb2plY3Qgbm93IGNvbnRhaW5zICR7dGhpcy5jb3VudH0gdG9kbyBpdGVtcy5gKTtcbiAgICB9XG4gICAgZGVsZXRlKHRvZG8pIHtcbiAgICAgICAgdGhpcy4jd2hpY2guc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgY29uc29sZS5sb2coYFN1Y2Nlc3NmdWxseSBkZWxldGVkIHRvZG8gJHt0b2RvLndoYXR9IGZyb20gcHJvamVjdCAke3RoaXMuI3doYXR9YCk7XG4gICAgICAgIGNvbnNvbGUubG9nKGBUaGUgcHJvamVjdCBub3cgY29udGFpbnMgJHt0aGlzLmNvdW50fSB0b2RvIGl0ZW1zLmApO1xuICAgIH1cbiAgICBnZXQgY291bnQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLiN3aGljaC5sZW5ndGg7XG4gICAgfVxuXG4gICAgZ2V0IHdoYXQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLiN3aGF0O1xuICAgIH1cblxuICAgIGdldCB3aGljaCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuI3doaWNoO1xuICAgIH1cbn1cbmV4cG9ydCB7IFByb2plY3QgfTtcbiIsIi8vIFRPRE8gZ2l2ZSBlYWNoIHRvZG8gYW4gdW5pcXVlIElEXG4vLyBUT0RPIGFkZCBlYWNoIHRvZG8gdG8gYSBjZXJ0YWluIHByb2plY3QgKGVsc2U6IERlZmF1bHRcblxuY2xhc3MgVG9kbyB7XG4gICAgI3doYXQ7XG4gICAgI3doZW47XG4gICAgI2lzVXJnZW50O1xuICAgICNpc0ZpbmlzaGVkO1xuICAgICNwcm9qZWN0O1xuXG4gICAgY29uc3RydWN0b3Iod2hhdCwgd2hlbiwgcHJvamVjdCA9IFwiRGVmYXVsdFwiLCBpc1VyZ2VudCA9ICdObycsIGlzRmluaXNoZWQgPSAnTm8nKSB7XG4gICAgICAgIHRoaXMuI3doYXQgPSB3aGF0O1xuICAgICAgICB0aGlzLiN3aGVuID0gd2hlbjtcbiAgICAgICAgdGhpcy4jcHJvamVjdCA9IHByb2plY3Q7XG4gICAgICAgIHRoaXMuI2lzVXJnZW50ID0gaXNVcmdlbnQ7XG4gICAgICAgIHRoaXMuI2lzRmluaXNoZWQgPSBpc0ZpbmlzaGVkO1xuICAgICAgICBjb25zb2xlLmxvZyhgU3VjY2Vzc2Z1bGx5IGNyZWF0ZWQgdG9kbyAke3doYXR9YCk7XG4gICAgfVxuICAgIC8vIGdldHRlcnNcbiAgICBnZXQgd2hhdCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuI3doYXQ7XG4gICAgfVxuICAgIGdldCB3aGVuKCkge1xuICAgICAgICByZXR1cm4gdGhpcy4jd2hlbjtcbiAgICB9XG4gICAgZ2V0IHVyZ2VudCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuI2lzVXJnZW50O1xuICAgIH1cbiAgICBnZXQgZG9uZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuI2lzRmluaXNoZWQ7XG4gICAgfVxuICAgIC8vIHNldHRlcnNcbiAgICBzZXQgd2hhdCh3aGF0KSB7XG4gICAgICAgIHRoaXMuI3doYXQgPSB3aGF0O1xuICAgIH1cbiAgICBzZXQgd2hlbih3aGVuKSB7XG4gICAgICAgIHRoaXMuI3doZW4gPSB3aGVuO1xuICAgIH1cbiAgICBzZXQgdXJnZW50KHllc05vKSB7XG4gICAgICAgIHRoaXMuI2lzVXJnZW50ID0geWVzTm87XG4gICAgfVxuICAgIHNldCBkb25lKHllc05vKSB7XG4gICAgICAgIHRoaXMuI2lzRmluaXNoZWQgPSB5ZXNObztcbiAgICAgICAgcmV0dXJuIHRoaXMuI2lzRmluaXNoZWQ7XG4gICAgfVxufVxuZXhwb3J0IHsgVG9kbyB9O1xuIiwiaW1wb3J0ICogYXMgY29udHJvbGxlciBmcm9tICcuL2NvbnRyb2xsZXIuanMnO1xuXG4vLyBBbGwgdmlld3MgdXNlcnMgY2FuIGludGVyYWN0IHdpdGhcbmV4cG9ydCBmdW5jdGlvbiBkYXRlVmlldygpIHtcbiAgICAvLyByZXR1cm5zIHRoZSB0b2RvIGxpc3QsIG9yZGVyZWQgYnkgZGF0ZSBhbmQgZGl2aWRlZCBpbnRvIDQgY2F0ZWdvcmllczpcbiAgICAvLyBUb2RheSwgVGhpcyB3ZWVrLCBUaGlzIE1vbnRoIGFuZCBMYXRlclxufVxuXG5leHBvcnQgZnVuY3Rpb24gdG9kYXlWaWV3KCkge1xuICAgIC8vIHJldHVybnMgdGhlIGxpc3Qgb2YgdG9kb3MgZm9yIHRvZGF5XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcm9qZWN0c1ZpZXcoKSB7XG4gICAgLy8gcmV0dXJucyB0aGUgbGlzdCBvZiBhbGwgcHJvamVjdHNcbiAgICBjb25zdCBwcm9qZWN0cyA9IGNvbnRyb2xsZXIubGlzdFByb2plY3RzKCk7XG4gICAgY29uc3QgdWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XG4gICAgY29uc3QgYWRkQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgcHJvamVjdHMuZm9yRWFjaCgocHJvamVjdCwgaW5kZXgpID0+IHtcbiAgICAgICAgY29uc3QgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gICAgICAgIGNvbnN0IGgyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICAgICAgY29uc3QgZGVsU3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgICAgZGVsU3Bhbi50ZXh0Q29udGVudCA9ICcgKERFTCknO1xuICAgICAgICBkZWxTcGFuLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwicHJvamVjdC1kZWxldGVcIik7XG4gICAgICAgIGRlbFNwYW4uc2V0QXR0cmlidXRlKFwiZGF0YS1wcm9qZWN0LWluZGV4XCIsIGluZGV4KTtcbiAgICAgICAgaDIudGV4dENvbnRlbnQgPSBwcm9qZWN0LndoYXQ7XG4gICAgICAgIGgyLmFwcGVuZENoaWxkKGRlbFNwYW4pO1xuICAgICAgICBsaS5hcHBlbmRDaGlsZChoMik7XG4gICAgICAgIC8vIGFwcGVuZCBsaXN0IHdpdGggYWxsIHByb2plY3QgdG9kb3NcbiAgICAgICAgY29uc3QgdG9kb3MgPSBwcm9qZWN0VG9kb3NWaWV3KHByb2plY3QpO1xuICAgICAgICBpZiAodG9kb3MpIHtcbiAgICAgICAgICAgIGxpLmFwcGVuZENoaWxkKHRvZG9zKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IHN0cmluZyA9IFwiTm8gdG9kb3MgZm9yIHRoaXMgcHJvamVjdFwiO1xuICAgICAgICAgICAgY29uc3QgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgICAgIHAudGV4dENvbnRlbnQgPSBzdHJpbmc7XG4gICAgICAgICAgICBsaS5hcHBlbmRDaGlsZChwKTtcbiAgICAgICAgfVxuICAgICAgICB1bC5hcHBlbmRDaGlsZChsaSk7XG4gICAgfSk7XG4gICAgYWRkQnV0dG9uLnRleHRDb250ZW50ID0gXCIrIEFERCBQUk9KRUNUXCI7XG4gICAgYWRkQnV0dG9uLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiYWRkLXByb2plY3RcIik7XG4gICAgdWwuYXBwZW5kQ2hpbGQoYWRkQnV0dG9uKTtcbiAgICByZXR1cm4gdWw7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcm9qZWN0VG9kb3NWaWV3KHByb2plY3QpIHtcbiAgICAvLyByZXR1cm5zIGEgbGlzdCBvZiBhbGwgdG9kb3MgZm9yIGEgY2VydGFpbiBwcm9qZWN0XG4gICAgY29uc3QgdG9kb3MgPSBjb250cm9sbGVyLmxpc3RUb2Rvc0ZvclByb2plY3QocHJvamVjdC53aGF0KTtcbiAgICBpZiAodG9kb3MubGVuZ3RoID4gMCkge1xuICAgICAgICBjb25zdCB1bCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG4gICAgICAgIHRvZG9zLmZvckVhY2goKHRvZG8sIGluZGV4KSA9PiB7XG4gICAgICAgICAgICBjb25zdCB1bFRvZG8gPSB0b2RvVmlldyh0b2RvLCBpbmRleCk7XG4gICAgICAgICAgICB1bC5hcHBlbmRDaGlsZCh1bFRvZG8pO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHVsO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGBObyB0b2RvcyBmb3IgcHJvamVjdCAke3Byb2plY3Qud2hhdH1gKTtcbiAgICAgICAgLy8gdG8gY2hlY2sgaWYgdGhlcmUgYXJlIHRvZG9zP1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gdG9kb1ZpZXcodG9kbywgaW5kZXgpIHtcbiAgICAvLyByZXR1cm5zIGEgdG9kbyB3aXRoIGFsbCB0aGUgZGV0YWlsc1xuICAgIGNvbnN0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICBjb25zdCB1bFdoYXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xuICAgIGNvbnN0IHZhbHVlcyA9IFt0b2RvLndoZW4sIHRvZG8udXJnZW50LCB0b2RvLmRvbmVdO1xuICAgIGNvbnN0IGgzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgICBjb25zdCB1aVNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgY29uc3QgYWRkQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgY29uc3QgY2hlY2tCb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIGNoZWNrQm94LnR5cGUgPSAnY2hlY2tib3gnO1xuICAgIGNoZWNrQm94LnNldEF0dHJpYnV0ZShcImRhdGEtdG9kby1pbmRleFwiLCBpbmRleCk7XG4gICAgdWlTcGFuLnRleHRDb250ZW50ID0gKFwiIChERUwpXCIpO1xuICAgIHVpU3Bhbi5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInRvZG8tZGVsZXRlXCIpO1xuICAgIHVpU3Bhbi5zZXRBdHRyaWJ1dGUoXCJkYXRhLXRvZG8taW5kZXhcIiwgaW5kZXgpO1xuICAgIGgzLnRleHRDb250ZW50ID0gdG9kby53aGF0O1xuICAgIGgzLmFwcGVuZENoaWxkKGNoZWNrQm94KTtcbiAgICBoMy5hcHBlbmRDaGlsZCh1aVNwYW4pO1xuICAgIHZhbHVlcy5mb3JFYWNoKCh2YWx1ZSwgaW5kZXgpID0+IHtcbiAgICAgICAgY29uc3QgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgICAgICBjb25zdCBjaGFuZ2VTcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgICBjaGFuZ2VTcGFuLnRleHRDb250ZW50ID0gXCIgKEVESVQpXCI7XG4gICAgICAgIGNoYW5nZVNwYW4uc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJ0b2RvLWVkaXRcIik7XG4gICAgICAgIGNoYW5nZVNwYW4uc2V0QXR0cmlidXRlKFwiZGF0YS10b2RvLWVsLWluZGV4XCIsIGluZGV4KTtcbiAgICAgICAgbGkudGV4dENvbnRlbnQgPSB2YWx1ZTtcbiAgICAgICAgbGkuYXBwZW5kQ2hpbGQoY2hhbmdlU3Bhbik7XG4gICAgICAgIHVsV2hhdC5hcHBlbmRDaGlsZChsaSk7XG4gICAgfSk7XG4gICAgbGkuYXBwZW5kQ2hpbGQoaDMpO1xuICAgIGFkZEJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInRvZG8tYWRkXCIpO1xuICAgIGFkZEJ1dHRvbi50ZXh0Q29udGVudCA9IFwiKyBBREQgVE9ET1wiO1xuICAgIHVsV2hhdC5hcHBlbmRDaGlsZChhZGRCdXR0b24pO1xuICAgIGxpLmFwcGVuZENoaWxkKHVsV2hhdCk7XG4gICAgcmV0dXJuIGxpO1xufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgJy4vYXBwLmpzJztcbmltcG9ydCAqIGFzIHZpZXdzIGZyb20gJy4vdmlld3MuanMnO1xuXG5jb25zdCBtYWluRGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50XCIpO1xuY29uc3QgaDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG5oMS50ZXh0Q29udGVudCA9IFwiTXkgUHJvamVjdHNcIjtcbmNvbnN0IHVsID0gdmlld3MucHJvamVjdHNWaWV3KCk7XG5cbm1haW5EaXYuYXBwZW5kQ2hpbGQoaDEpO1xubWFpbkRpdi5hcHBlbmRDaGlsZCh1bCk7XG5cbi8vIGFkZCBldmVudHMiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=