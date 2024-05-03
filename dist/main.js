/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _controller__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./controller */ "./src/controller.js");


// Create a default project
const defaultProject = _controller__WEBPACK_IMPORTED_MODULE_0__.projectCreate('home');
// add second project and third project
const second = _controller__WEBPACK_IMPORTED_MODULE_0__.projectCreate('work');
const third = _controller__WEBPACK_IMPORTED_MODULE_0__.projectCreate('pc');

// Create a dummy todo
// TODO teh create function should have project.what!
// else it keeps a copy of the project in each todo

_controller__WEBPACK_IMPORTED_MODULE_0__.todoCreate('Do the dishes', '2024-03-22', defaultProject);
_controller__WEBPACK_IMPORTED_MODULE_0__.todoCreate('Check my email', '2024-06-10', second);
_controller__WEBPACK_IMPORTED_MODULE_0__.todoCreate('Create backup from pc to SDD', '2024-04-04', third);
_controller__WEBPACK_IMPORTED_MODULE_0__.todoCreate('Check on EBay for new keyboard', '2023-03-23', third);


/***/ }),

/***/ "./src/controller.js":
/*!***************************!*\
  !*** ./src/controller.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   countTodosForPeriod: () => (/* binding */ countTodosForPeriod),
/* harmony export */   getAllTodos: () => (/* binding */ getAllTodos),
/* harmony export */   getNumberTodosForProject: () => (/* binding */ getNumberTodosForProject),
/* harmony export */   getProjectByNumber: () => (/* binding */ getProjectByNumber),
/* harmony export */   getProjectCount: () => (/* binding */ getProjectCount),
/* harmony export */   getTodosForPeriod: () => (/* binding */ getTodosForPeriod),
/* harmony export */   listProjects: () => (/* binding */ listProjects),
/* harmony export */   listTodosByDate: () => (/* binding */ listTodosByDate),
/* harmony export */   listTodosForProject: () => (/* binding */ listTodosForProject),
/* harmony export */   loadProjects: () => (/* binding */ loadProjects),
/* harmony export */   projectAddTodo: () => (/* binding */ projectAddTodo),
/* harmony export */   projectCreate: () => (/* binding */ projectCreate),
/* harmony export */   projectDelete: () => (/* binding */ projectDelete),
/* harmony export */   projectEdit: () => (/* binding */ projectEdit),
/* harmony export */   projectTodoMarkDone: () => (/* binding */ projectTodoMarkDone),
/* harmony export */   saveProjects: () => (/* binding */ saveProjects),
/* harmony export */   todoCreate: () => (/* binding */ todoCreate),
/* harmony export */   todoDelete: () => (/* binding */ todoDelete),
/* harmony export */   todoEdit: () => (/* binding */ todoEdit),
/* harmony export */   todoIsDone: () => (/* binding */ todoIsDone)
/* harmony export */ });
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/isToday.mjs");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/isFuture.mjs");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/isPast.mjs");
/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo */ "./src/todo.js");
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project */ "./src/project.js");
/* harmony import */ var _db__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./db */ "./src/db.js");
// All the actions users can undertake





// Todo actions
// TODO Make every function return something

function todoIsDone(todo) {
  todo.done = 'Yes';
  return todo;
}

function todoDelete(projectIndex, todoIndex) {
  const myProject = getProjectByNumber(projectIndex);
  myProject.delete(todoIndex);
  saveProjects('ns-todo-projects');
  return myProject;
}

function todoCreate(what, when, project) {
  const todo = new _todo__WEBPACK_IMPORTED_MODULE_0__["default"](what, when);
  project.add(todo);
  saveProjects('ns-todo-projects');
  return project;
}

function todoEdit(todo, what, when, urgent) {
  // TODO: think of some defaults?
  todo.what = what;
  todo.when = when;
  todo.urgent = urgent;
  saveProjects('ns-todo-projects');
  return todo;
}

function projectTodoMarkDone(todoIndex, projectIndex) {
  const project = getProjectByNumber(projectIndex);
  const todo = project.todo(todoIndex);
  todoIsDone(todo);
  saveProjects('ns-todo-projects');
  console.log(`Todo ${todo.what} is marked as done.`);
}

// Lists

function listTodosForProject(number) {
  const myProject = _db__WEBPACK_IMPORTED_MODULE_2__["default"].getProjectByNumber(number);
  return myProject.which;
}

function getNumberTodosForProject(projectIndex) {
  return listTodosForProject(projectIndex).length;
}

function countTodosForPeriod(date) {
  const todos = getTodosForPeriod(date);
  let count = 0;
  todos.forEach((project) => {
    count += project.length;
  });
  return count;
}

function getTodosForPeriod(date) {
  // return a list with all todos for today, future, past
  // TODO past also includes today (seconds ago)
  const dateCheck = function (when) {
    if (date === 'today') {
      if ((0,date_fns__WEBPACK_IMPORTED_MODULE_3__.isToday)(when)) {
        return true;
      }
    } else if (date === 'future') {
      if ((0,date_fns__WEBPACK_IMPORTED_MODULE_4__.isFuture)(when)) {
        return true;
      }
    } else if (date === 'past') {
      if ((0,date_fns__WEBPACK_IMPORTED_MODULE_5__.isPast)(when) && !(0,date_fns__WEBPACK_IMPORTED_MODULE_3__.isToday)(when)) {
        return true;
      }
    } else throw console.error('No or wrong date inserted');
  };
  const allTodos = getAllTodos();
  const todosForPeriod = [];
  allTodos.forEach((project, index) => {
    const projectTodos = allTodos[index][1];
    const periodTodos = projectTodos.filter((todo) => dateCheck(todo.when));
    todosForPeriod[index] = periodTodos;
  });
  return todosForPeriod;
}

// TODO

function getAllTodos() {
  // gets all todos as twodimensional array starting with the
  // name of each project
  const allTodos = [];
  const projects = listProjects();
  projects.forEach((project, index) => {
    const todos = [project.what, listTodosForProject(index)];
    allTodos.push(todos);
  });
  return allTodos;
}

function listTodosByDate() {}

function listProjects() {
  return _db__WEBPACK_IMPORTED_MODULE_2__["default"].listProjects();
}

// Project actions

function projectCreate(name) {
  const project = new _project__WEBPACK_IMPORTED_MODULE_1__["default"](name);
  _db__WEBPACK_IMPORTED_MODULE_2__["default"].addProject(project);
  saveProjects('ns-todo-projects');
  return project;
}

function projectDelete(project) {
  _db__WEBPACK_IMPORTED_MODULE_2__["default"].deleteProject(project);
  project = null;
  saveProjects('ns-todo-projects');
}

function projectEdit(project, name) {
  project.what = name;
  saveProjects('ns-todo-projects');
}

function projectAddTodo(project, todo) {
  project.add(todo);
  saveProjects('ns-todo-projects');
  return project;
}

function getProjectByNumber(number) {
  return _db__WEBPACK_IMPORTED_MODULE_2__["default"].getProjectByNumber(number);
}

function getProjectCount() {
  return _db__WEBPACK_IMPORTED_MODULE_2__["default"].getProjectCount();
}

function saveProjects(data) {
  // get array with todo lists and project names
  const allTodos = getAllTodos();
  const storageArray = [];
  allTodos.forEach((project) => {
    const newProject = { what: project[0], todos: [] };
    // process todos
    project[1].forEach((todo) => {
      const myTodo = {
        what: todo.what,
        when: todo.when,
        urgent: todo.urgent,
        done: todo.done,
      };
      newProject.todos.push(myTodo);
    });
    storageArray.push(newProject);
  });
  localStorage.setItem(data, JSON.stringify(storageArray));
}

function loadProjects(data) {
  _db__WEBPACK_IMPORTED_MODULE_2__["default"].deleteProjects();
  const projectList = JSON.parse(localStorage.getItem(data));
  projectList.forEach((project) => {
    // initialize every project
    const newProject = projectCreate(project.what);
    project.todos.forEach((todo) => {
      // initialize every todo
      // todo: urgency etc.
      todoCreate(todo.what, Number(todo.when), newProject); // DEBUG
    });
  });
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
const projects = [];
class DB {
  constructor() {
    if (instance) {
      throw new Error('New instance cannot be created!');
    }
    this.projects = projects;
    instance = this;
  }

  addProject(project) {
    this.projects.push(project);
  }

  deleteProject(project) {
    const index = this.projects.indexOf(project);
    if (index !== -1) {
      this.projects.splice(index, 1);
    }
  }

  listProjects() {
    return this.projects;
  }

  existsProject(name) {
    if (this.projects.find((project) => project.what === name)) {
      return true;
    }
    return false;
  }

  getProjectByNumber(number) {
    return this.projects[number];
  }

  getProjectCount() {
    return this.projects.length;
  }

  deleteProjects() {
    this.projects.splice(0, projects.length);
  }
}
const DBInstance = Object.freeze(new DB());

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DBInstance);


/***/ }),

/***/ "./src/project.js":
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class Project {
  #what;

  #which = [];

  constructor(what) {
    this.#what = what;
    // TODO error if such a project already exists
  }

  add(todo) {
    this.#which.push(todo);
  }

  delete(index) {
    // delete a todo according to index
    this.#which.splice(index, 1);
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Project);


/***/ }),

/***/ "./src/todo.js":
/*!*********************!*\
  !*** ./src/todo.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class Todo {
  #what;

  #when;

  #isUrgent;

  #isFinished;

  #project;

  constructor(
    what,
    when,
    project = 'Default',
    isUrgent = 'No',
    isFinished = 'No',
  ) {
    this.#what = what;
    this.#when = when;
    this.#project = project;
    this.#isUrgent = isUrgent;
    this.#isFinished = isFinished;
  }
  // getters

  get what() {
    return this.#what;
  }

  set what(what) {
    this.#what = what;
  }

  get when() {
    return this.#when;
  }

  set when(when) {
    this.#when = Date.parse(when);
  }

  get urgent() {
    return this.#isUrgent;
  }

  set urgent(yesNo) {
    this.#isUrgent = yesNo;
  }

  get done() {
    return this.#isFinished;
  }

  set done(yesNo) {
    this.#isFinished = yesNo;
  }

  get project() {
    return this.#project;
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Todo);


/***/ }),

/***/ "./node_modules/date-fns/isFuture.mjs":
/*!********************************************!*\
  !*** ./node_modules/date-fns/isFuture.mjs ***!
  \********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   isFuture: () => (/* binding */ isFuture)
/* harmony export */ });
/* harmony import */ var _toDate_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toDate.mjs */ "./node_modules/date-fns/toDate.mjs");


/**
 * @name isFuture
 * @category Common Helpers
 * @summary Is the given date in the future?
 * @pure false
 *
 * @description
 * Is the given date in the future?
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The date to check
 *
 * @returns The date is in the future
 *
 * @example
 * // If today is 6 October 2014, is 31 December 2014 in the future?
 * const result = isFuture(new Date(2014, 11, 31))
 * //=> true
 */
function isFuture(date) {
  return +(0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_0__.toDate)(date) > Date.now();
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isFuture);


/***/ }),

/***/ "./node_modules/date-fns/isPast.mjs":
/*!******************************************!*\
  !*** ./node_modules/date-fns/isPast.mjs ***!
  \******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   isPast: () => (/* binding */ isPast)
/* harmony export */ });
/* harmony import */ var _toDate_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toDate.mjs */ "./node_modules/date-fns/toDate.mjs");


/**
 * @name isPast
 * @category Common Helpers
 * @summary Is the given date in the past?
 * @pure false
 *
 * @description
 * Is the given date in the past?
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The date to check
 *
 * @returns The date is in the past
 *
 * @example
 * // If today is 6 October 2014, is 2 July 2014 in the past?
 * const result = isPast(new Date(2014, 6, 2))
 * //=> true
 */
function isPast(date) {
  return +(0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_0__.toDate)(date) < Date.now();
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isPast);


/***/ }),

/***/ "./node_modules/date-fns/isSameDay.mjs":
/*!*********************************************!*\
  !*** ./node_modules/date-fns/isSameDay.mjs ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   isSameDay: () => (/* binding */ isSameDay)
/* harmony export */ });
/* harmony import */ var _startOfDay_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./startOfDay.mjs */ "./node_modules/date-fns/startOfDay.mjs");


/**
 * @name isSameDay
 * @category Day Helpers
 * @summary Are the given dates in the same day (and year and month)?
 *
 * @description
 * Are the given dates in the same day (and year and month)?
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param dateLeft - The first date to check
 * @param dateRight - The second date to check

 * @returns The dates are in the same day (and year and month)
 *
 * @example
 * // Are 4 September 06:00:00 and 4 September 18:00:00 in the same day?
 * const result = isSameDay(new Date(2014, 8, 4, 6, 0), new Date(2014, 8, 4, 18, 0))
 * //=> true
 *
 * @example
 * // Are 4 September and 4 October in the same day?
 * const result = isSameDay(new Date(2014, 8, 4), new Date(2014, 9, 4))
 * //=> false
 *
 * @example
 * // Are 4 September, 2014 and 4 September, 2015 in the same day?
 * const result = isSameDay(new Date(2014, 8, 4), new Date(2015, 8, 4))
 * //=> false
 */
function isSameDay(dateLeft, dateRight) {
  const dateLeftStartOfDay = (0,_startOfDay_mjs__WEBPACK_IMPORTED_MODULE_0__.startOfDay)(dateLeft);
  const dateRightStartOfDay = (0,_startOfDay_mjs__WEBPACK_IMPORTED_MODULE_0__.startOfDay)(dateRight);

  return +dateLeftStartOfDay === +dateRightStartOfDay;
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isSameDay);


/***/ }),

/***/ "./node_modules/date-fns/isToday.mjs":
/*!*******************************************!*\
  !*** ./node_modules/date-fns/isToday.mjs ***!
  \*******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   isToday: () => (/* binding */ isToday)
/* harmony export */ });
/* harmony import */ var _isSameDay_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isSameDay.mjs */ "./node_modules/date-fns/isSameDay.mjs");


/**
 * @name isToday
 * @category Day Helpers
 * @summary Is the given date today?
 * @pure false
 *
 * @description
 * Is the given date today?
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The date to check
 *
 * @returns The date is today
 *
 * @example
 * // If today is 6 October 2014, is 6 October 14:00:00 today?
 * const result = isToday(new Date(2014, 9, 6, 14, 0))
 * //=> true
 */
function isToday(date) {
  return (0,_isSameDay_mjs__WEBPACK_IMPORTED_MODULE_0__.isSameDay)(date, Date.now());
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isToday);


/***/ }),

/***/ "./node_modules/date-fns/startOfDay.mjs":
/*!**********************************************!*\
  !*** ./node_modules/date-fns/startOfDay.mjs ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   startOfDay: () => (/* binding */ startOfDay)
/* harmony export */ });
/* harmony import */ var _toDate_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toDate.mjs */ "./node_modules/date-fns/toDate.mjs");


/**
 * @name startOfDay
 * @category Day Helpers
 * @summary Return the start of a day for the given date.
 *
 * @description
 * Return the start of a day for the given date.
 * The result will be in the local timezone.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The original date
 *
 * @returns The start of a day
 *
 * @example
 * // The start of a day for 2 September 2014 11:55:00:
 * const result = startOfDay(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Tue Sep 02 2014 00:00:00
 */
function startOfDay(date) {
  const _date = (0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_0__.toDate)(date);
  _date.setHours(0, 0, 0, 0);
  return _date;
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (startOfDay);


/***/ }),

/***/ "./node_modules/date-fns/toDate.mjs":
/*!******************************************!*\
  !*** ./node_modules/date-fns/toDate.mjs ***!
  \******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   toDate: () => (/* binding */ toDate)
/* harmony export */ });
/**
 * @name toDate
 * @category Common Helpers
 * @summary Convert the given argument to an instance of Date.
 *
 * @description
 * Convert the given argument to an instance of Date.
 *
 * If the argument is an instance of Date, the function returns its clone.
 *
 * If the argument is a number, it is treated as a timestamp.
 *
 * If the argument is none of the above, the function returns Invalid Date.
 *
 * **Note**: *all* Date arguments passed to any *date-fns* function is processed by `toDate`.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param argument - The value to convert
 *
 * @returns The parsed date in the local time zone
 *
 * @example
 * // Clone the date:
 * const result = toDate(new Date(2014, 1, 11, 11, 30, 30))
 * //=> Tue Feb 11 2014 11:30:30
 *
 * @example
 * // Convert the timestamp to date:
 * const result = toDate(1392098430000)
 * //=> Tue Feb 11 2014 11:30:30
 */
function toDate(argument) {
  const argStr = Object.prototype.toString.call(argument);

  // Clone the date
  if (
    argument instanceof Date ||
    (typeof argument === "object" && argStr === "[object Date]")
  ) {
    // Prevent the date to lose the milliseconds when passed to new Date() in IE10
    return new argument.constructor(+argument);
  } else if (
    typeof argument === "number" ||
    argStr === "[object Number]" ||
    typeof argument === "string" ||
    argStr === "[object String]"
  ) {
    // TODO: Can we get rid of as?
    return new Date(argument);
  } else {
    // TODO: Can we get rid of as?
    return new Date(NaN);
  }
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (toDate);


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
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app */ "./src/app.js");


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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ZG8tYXBwLy4vc3JjL2FwcC5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tYXBwLy4vc3JjL2NvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWFwcC8uL3NyYy9kYi5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tYXBwLy4vc3JjL3Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWFwcC8uL3NyYy90b2RvLmpzIiwid2VicGFjazovL29kaW4tdG9kby1hcHAvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvaXNGdXR1cmUubWpzIiwid2VicGFjazovL29kaW4tdG9kby1hcHAvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvaXNQYXN0Lm1qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tYXBwLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2lzU2FtZURheS5tanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWFwcC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9pc1RvZGF5Lm1qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tYXBwLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL3N0YXJ0T2ZEYXkubWpzIiwid2VicGFjazovL29kaW4tdG9kby1hcHAvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvdG9EYXRlLm1qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tYXBwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL29kaW4tdG9kby1hcHAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL29kaW4tdG9kby1hcHAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9vZGluLXRvZG8tYXBwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWFwcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBjb250cm9sbGVyIGZyb20gJy4vY29udHJvbGxlcic7XG5cbi8vIENyZWF0ZSBhIGRlZmF1bHQgcHJvamVjdFxuY29uc3QgZGVmYXVsdFByb2plY3QgPSBjb250cm9sbGVyLnByb2plY3RDcmVhdGUoJ2hvbWUnKTtcbi8vIGFkZCBzZWNvbmQgcHJvamVjdCBhbmQgdGhpcmQgcHJvamVjdFxuY29uc3Qgc2Vjb25kID0gY29udHJvbGxlci5wcm9qZWN0Q3JlYXRlKCd3b3JrJyk7XG5jb25zdCB0aGlyZCA9IGNvbnRyb2xsZXIucHJvamVjdENyZWF0ZSgncGMnKTtcblxuLy8gQ3JlYXRlIGEgZHVtbXkgdG9kb1xuLy8gVE9ETyB0ZWggY3JlYXRlIGZ1bmN0aW9uIHNob3VsZCBoYXZlIHByb2plY3Qud2hhdCFcbi8vIGVsc2UgaXQga2VlcHMgYSBjb3B5IG9mIHRoZSBwcm9qZWN0IGluIGVhY2ggdG9kb1xuXG5jb250cm9sbGVyLnRvZG9DcmVhdGUoJ0RvIHRoZSBkaXNoZXMnLCAnMjAyNC0wMy0yMicsIGRlZmF1bHRQcm9qZWN0KTtcbmNvbnRyb2xsZXIudG9kb0NyZWF0ZSgnQ2hlY2sgbXkgZW1haWwnLCAnMjAyNC0wNi0xMCcsIHNlY29uZCk7XG5jb250cm9sbGVyLnRvZG9DcmVhdGUoJ0NyZWF0ZSBiYWNrdXAgZnJvbSBwYyB0byBTREQnLCAnMjAyNC0wNC0wNCcsIHRoaXJkKTtcbmNvbnRyb2xsZXIudG9kb0NyZWF0ZSgnQ2hlY2sgb24gRUJheSBmb3IgbmV3IGtleWJvYXJkJywgJzIwMjMtMDMtMjMnLCB0aGlyZCk7XG4iLCIvLyBBbGwgdGhlIGFjdGlvbnMgdXNlcnMgY2FuIHVuZGVydGFrZVxuaW1wb3J0IHsgaXNUb2RheSwgaXNQYXN0LCBpc0Z1dHVyZSB9IGZyb20gJ2RhdGUtZm5zJztcbmltcG9ydCBUb2RvIGZyb20gJy4vdG9kbyc7XG5pbXBvcnQgUHJvamVjdCBmcm9tICcuL3Byb2plY3QnO1xuaW1wb3J0IHsgZGVmYXVsdCBhcyBEQiB9IGZyb20gJy4vZGInO1xuXG4vLyBUb2RvIGFjdGlvbnNcbi8vIFRPRE8gTWFrZSBldmVyeSBmdW5jdGlvbiByZXR1cm4gc29tZXRoaW5nXG5cbmV4cG9ydCBmdW5jdGlvbiB0b2RvSXNEb25lKHRvZG8pIHtcbiAgdG9kby5kb25lID0gJ1llcyc7XG4gIHJldHVybiB0b2RvO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdG9kb0RlbGV0ZShwcm9qZWN0SW5kZXgsIHRvZG9JbmRleCkge1xuICBjb25zdCBteVByb2plY3QgPSBnZXRQcm9qZWN0QnlOdW1iZXIocHJvamVjdEluZGV4KTtcbiAgbXlQcm9qZWN0LmRlbGV0ZSh0b2RvSW5kZXgpO1xuICBzYXZlUHJvamVjdHMoJ25zLXRvZG8tcHJvamVjdHMnKTtcbiAgcmV0dXJuIG15UHJvamVjdDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRvZG9DcmVhdGUod2hhdCwgd2hlbiwgcHJvamVjdCkge1xuICBjb25zdCB0b2RvID0gbmV3IFRvZG8od2hhdCwgd2hlbik7XG4gIHByb2plY3QuYWRkKHRvZG8pO1xuICBzYXZlUHJvamVjdHMoJ25zLXRvZG8tcHJvamVjdHMnKTtcbiAgcmV0dXJuIHByb2plY3Q7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0b2RvRWRpdCh0b2RvLCB3aGF0LCB3aGVuLCB1cmdlbnQpIHtcbiAgLy8gVE9ETzogdGhpbmsgb2Ygc29tZSBkZWZhdWx0cz9cbiAgdG9kby53aGF0ID0gd2hhdDtcbiAgdG9kby53aGVuID0gd2hlbjtcbiAgdG9kby51cmdlbnQgPSB1cmdlbnQ7XG4gIHNhdmVQcm9qZWN0cygnbnMtdG9kby1wcm9qZWN0cycpO1xuICByZXR1cm4gdG9kbztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByb2plY3RUb2RvTWFya0RvbmUodG9kb0luZGV4LCBwcm9qZWN0SW5kZXgpIHtcbiAgY29uc3QgcHJvamVjdCA9IGdldFByb2plY3RCeU51bWJlcihwcm9qZWN0SW5kZXgpO1xuICBjb25zdCB0b2RvID0gcHJvamVjdC50b2RvKHRvZG9JbmRleCk7XG4gIHRvZG9Jc0RvbmUodG9kbyk7XG4gIHNhdmVQcm9qZWN0cygnbnMtdG9kby1wcm9qZWN0cycpO1xuICBjb25zb2xlLmxvZyhgVG9kbyAke3RvZG8ud2hhdH0gaXMgbWFya2VkIGFzIGRvbmUuYCk7XG59XG5cbi8vIExpc3RzXG5cbmV4cG9ydCBmdW5jdGlvbiBsaXN0VG9kb3NGb3JQcm9qZWN0KG51bWJlcikge1xuICBjb25zdCBteVByb2plY3QgPSBEQi5nZXRQcm9qZWN0QnlOdW1iZXIobnVtYmVyKTtcbiAgcmV0dXJuIG15UHJvamVjdC53aGljaDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldE51bWJlclRvZG9zRm9yUHJvamVjdChwcm9qZWN0SW5kZXgpIHtcbiAgcmV0dXJuIGxpc3RUb2Rvc0ZvclByb2plY3QocHJvamVjdEluZGV4KS5sZW5ndGg7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb3VudFRvZG9zRm9yUGVyaW9kKGRhdGUpIHtcbiAgY29uc3QgdG9kb3MgPSBnZXRUb2Rvc0ZvclBlcmlvZChkYXRlKTtcbiAgbGV0IGNvdW50ID0gMDtcbiAgdG9kb3MuZm9yRWFjaCgocHJvamVjdCkgPT4ge1xuICAgIGNvdW50ICs9IHByb2plY3QubGVuZ3RoO1xuICB9KTtcbiAgcmV0dXJuIGNvdW50O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0VG9kb3NGb3JQZXJpb2QoZGF0ZSkge1xuICAvLyByZXR1cm4gYSBsaXN0IHdpdGggYWxsIHRvZG9zIGZvciB0b2RheSwgZnV0dXJlLCBwYXN0XG4gIC8vIFRPRE8gcGFzdCBhbHNvIGluY2x1ZGVzIHRvZGF5IChzZWNvbmRzIGFnbylcbiAgY29uc3QgZGF0ZUNoZWNrID0gZnVuY3Rpb24gKHdoZW4pIHtcbiAgICBpZiAoZGF0ZSA9PT0gJ3RvZGF5Jykge1xuICAgICAgaWYgKGlzVG9kYXkod2hlbikpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChkYXRlID09PSAnZnV0dXJlJykge1xuICAgICAgaWYgKGlzRnV0dXJlKHdoZW4pKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoZGF0ZSA9PT0gJ3Bhc3QnKSB7XG4gICAgICBpZiAoaXNQYXN0KHdoZW4pICYmICFpc1RvZGF5KHdoZW4pKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0gZWxzZSB0aHJvdyBjb25zb2xlLmVycm9yKCdObyBvciB3cm9uZyBkYXRlIGluc2VydGVkJyk7XG4gIH07XG4gIGNvbnN0IGFsbFRvZG9zID0gZ2V0QWxsVG9kb3MoKTtcbiAgY29uc3QgdG9kb3NGb3JQZXJpb2QgPSBbXTtcbiAgYWxsVG9kb3MuZm9yRWFjaCgocHJvamVjdCwgaW5kZXgpID0+IHtcbiAgICBjb25zdCBwcm9qZWN0VG9kb3MgPSBhbGxUb2Rvc1tpbmRleF1bMV07XG4gICAgY29uc3QgcGVyaW9kVG9kb3MgPSBwcm9qZWN0VG9kb3MuZmlsdGVyKCh0b2RvKSA9PiBkYXRlQ2hlY2sodG9kby53aGVuKSk7XG4gICAgdG9kb3NGb3JQZXJpb2RbaW5kZXhdID0gcGVyaW9kVG9kb3M7XG4gIH0pO1xuICByZXR1cm4gdG9kb3NGb3JQZXJpb2Q7XG59XG5cbi8vIFRPRE9cblxuZXhwb3J0IGZ1bmN0aW9uIGdldEFsbFRvZG9zKCkge1xuICAvLyBnZXRzIGFsbCB0b2RvcyBhcyB0d29kaW1lbnNpb25hbCBhcnJheSBzdGFydGluZyB3aXRoIHRoZVxuICAvLyBuYW1lIG9mIGVhY2ggcHJvamVjdFxuICBjb25zdCBhbGxUb2RvcyA9IFtdO1xuICBjb25zdCBwcm9qZWN0cyA9IGxpc3RQcm9qZWN0cygpO1xuICBwcm9qZWN0cy5mb3JFYWNoKChwcm9qZWN0LCBpbmRleCkgPT4ge1xuICAgIGNvbnN0IHRvZG9zID0gW3Byb2plY3Qud2hhdCwgbGlzdFRvZG9zRm9yUHJvamVjdChpbmRleCldO1xuICAgIGFsbFRvZG9zLnB1c2godG9kb3MpO1xuICB9KTtcbiAgcmV0dXJuIGFsbFRvZG9zO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbGlzdFRvZG9zQnlEYXRlKCkge31cblxuZXhwb3J0IGZ1bmN0aW9uIGxpc3RQcm9qZWN0cygpIHtcbiAgcmV0dXJuIERCLmxpc3RQcm9qZWN0cygpO1xufVxuXG4vLyBQcm9qZWN0IGFjdGlvbnNcblxuZXhwb3J0IGZ1bmN0aW9uIHByb2plY3RDcmVhdGUobmFtZSkge1xuICBjb25zdCBwcm9qZWN0ID0gbmV3IFByb2plY3QobmFtZSk7XG4gIERCLmFkZFByb2plY3QocHJvamVjdCk7XG4gIHNhdmVQcm9qZWN0cygnbnMtdG9kby1wcm9qZWN0cycpO1xuICByZXR1cm4gcHJvamVjdDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByb2plY3REZWxldGUocHJvamVjdCkge1xuICBEQi5kZWxldGVQcm9qZWN0KHByb2plY3QpO1xuICBwcm9qZWN0ID0gbnVsbDtcbiAgc2F2ZVByb2plY3RzKCducy10b2RvLXByb2plY3RzJyk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcm9qZWN0RWRpdChwcm9qZWN0LCBuYW1lKSB7XG4gIHByb2plY3Qud2hhdCA9IG5hbWU7XG4gIHNhdmVQcm9qZWN0cygnbnMtdG9kby1wcm9qZWN0cycpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcHJvamVjdEFkZFRvZG8ocHJvamVjdCwgdG9kbykge1xuICBwcm9qZWN0LmFkZCh0b2RvKTtcbiAgc2F2ZVByb2plY3RzKCducy10b2RvLXByb2plY3RzJyk7XG4gIHJldHVybiBwcm9qZWN0O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0UHJvamVjdEJ5TnVtYmVyKG51bWJlcikge1xuICByZXR1cm4gREIuZ2V0UHJvamVjdEJ5TnVtYmVyKG51bWJlcik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRQcm9qZWN0Q291bnQoKSB7XG4gIHJldHVybiBEQi5nZXRQcm9qZWN0Q291bnQoKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNhdmVQcm9qZWN0cyhkYXRhKSB7XG4gIC8vIGdldCBhcnJheSB3aXRoIHRvZG8gbGlzdHMgYW5kIHByb2plY3QgbmFtZXNcbiAgY29uc3QgYWxsVG9kb3MgPSBnZXRBbGxUb2RvcygpO1xuICBjb25zdCBzdG9yYWdlQXJyYXkgPSBbXTtcbiAgYWxsVG9kb3MuZm9yRWFjaCgocHJvamVjdCkgPT4ge1xuICAgIGNvbnN0IG5ld1Byb2plY3QgPSB7IHdoYXQ6IHByb2plY3RbMF0sIHRvZG9zOiBbXSB9O1xuICAgIC8vIHByb2Nlc3MgdG9kb3NcbiAgICBwcm9qZWN0WzFdLmZvckVhY2goKHRvZG8pID0+IHtcbiAgICAgIGNvbnN0IG15VG9kbyA9IHtcbiAgICAgICAgd2hhdDogdG9kby53aGF0LFxuICAgICAgICB3aGVuOiB0b2RvLndoZW4sXG4gICAgICAgIHVyZ2VudDogdG9kby51cmdlbnQsXG4gICAgICAgIGRvbmU6IHRvZG8uZG9uZSxcbiAgICAgIH07XG4gICAgICBuZXdQcm9qZWN0LnRvZG9zLnB1c2gobXlUb2RvKTtcbiAgICB9KTtcbiAgICBzdG9yYWdlQXJyYXkucHVzaChuZXdQcm9qZWN0KTtcbiAgfSk7XG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGRhdGEsIEpTT04uc3RyaW5naWZ5KHN0b3JhZ2VBcnJheSkpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbG9hZFByb2plY3RzKGRhdGEpIHtcbiAgREIuZGVsZXRlUHJvamVjdHMoKTtcbiAgY29uc3QgcHJvamVjdExpc3QgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKGRhdGEpKTtcbiAgcHJvamVjdExpc3QuZm9yRWFjaCgocHJvamVjdCkgPT4ge1xuICAgIC8vIGluaXRpYWxpemUgZXZlcnkgcHJvamVjdFxuICAgIGNvbnN0IG5ld1Byb2plY3QgPSBwcm9qZWN0Q3JlYXRlKHByb2plY3Qud2hhdCk7XG4gICAgcHJvamVjdC50b2Rvcy5mb3JFYWNoKCh0b2RvKSA9PiB7XG4gICAgICAvLyBpbml0aWFsaXplIGV2ZXJ5IHRvZG9cbiAgICAgIC8vIHRvZG86IHVyZ2VuY3kgZXRjLlxuICAgICAgdG9kb0NyZWF0ZSh0b2RvLndoYXQsIE51bWJlcih0b2RvLndoZW4pLCBuZXdQcm9qZWN0KTsgLy8gREVCVUdcbiAgICB9KTtcbiAgfSk7XG59XG4iLCIvLyBDb250YWluZXIgZm9yIGFsbCBwcm9qZWN0cyBhbmQgdG9kb3Ncbi8vIHVuaXF1ZSBDTEFTUyBpbnN0YW5jZSBTSU5HTEVUT05cbmxldCBpbnN0YW5jZTtcbmNvbnN0IHByb2plY3RzID0gW107XG5jbGFzcyBEQiB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIGlmIChpbnN0YW5jZSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdOZXcgaW5zdGFuY2UgY2Fubm90IGJlIGNyZWF0ZWQhJyk7XG4gICAgfVxuICAgIHRoaXMucHJvamVjdHMgPSBwcm9qZWN0cztcbiAgICBpbnN0YW5jZSA9IHRoaXM7XG4gIH1cblxuICBhZGRQcm9qZWN0KHByb2plY3QpIHtcbiAgICB0aGlzLnByb2plY3RzLnB1c2gocHJvamVjdCk7XG4gIH1cblxuICBkZWxldGVQcm9qZWN0KHByb2plY3QpIHtcbiAgICBjb25zdCBpbmRleCA9IHRoaXMucHJvamVjdHMuaW5kZXhPZihwcm9qZWN0KTtcbiAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICB0aGlzLnByb2plY3RzLnNwbGljZShpbmRleCwgMSk7XG4gICAgfVxuICB9XG5cbiAgbGlzdFByb2plY3RzKCkge1xuICAgIHJldHVybiB0aGlzLnByb2plY3RzO1xuICB9XG5cbiAgZXhpc3RzUHJvamVjdChuYW1lKSB7XG4gICAgaWYgKHRoaXMucHJvamVjdHMuZmluZCgocHJvamVjdCkgPT4gcHJvamVjdC53aGF0ID09PSBuYW1lKSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGdldFByb2plY3RCeU51bWJlcihudW1iZXIpIHtcbiAgICByZXR1cm4gdGhpcy5wcm9qZWN0c1tudW1iZXJdO1xuICB9XG5cbiAgZ2V0UHJvamVjdENvdW50KCkge1xuICAgIHJldHVybiB0aGlzLnByb2plY3RzLmxlbmd0aDtcbiAgfVxuXG4gIGRlbGV0ZVByb2plY3RzKCkge1xuICAgIHRoaXMucHJvamVjdHMuc3BsaWNlKDAsIHByb2plY3RzLmxlbmd0aCk7XG4gIH1cbn1cbmNvbnN0IERCSW5zdGFuY2UgPSBPYmplY3QuZnJlZXplKG5ldyBEQigpKTtcblxuZXhwb3J0IGRlZmF1bHQgREJJbnN0YW5jZTtcbiIsImNsYXNzIFByb2plY3Qge1xuICAjd2hhdDtcblxuICAjd2hpY2ggPSBbXTtcblxuICBjb25zdHJ1Y3Rvcih3aGF0KSB7XG4gICAgdGhpcy4jd2hhdCA9IHdoYXQ7XG4gICAgLy8gVE9ETyBlcnJvciBpZiBzdWNoIGEgcHJvamVjdCBhbHJlYWR5IGV4aXN0c1xuICB9XG5cbiAgYWRkKHRvZG8pIHtcbiAgICB0aGlzLiN3aGljaC5wdXNoKHRvZG8pO1xuICB9XG5cbiAgZGVsZXRlKGluZGV4KSB7XG4gICAgLy8gZGVsZXRlIGEgdG9kbyBhY2NvcmRpbmcgdG8gaW5kZXhcbiAgICB0aGlzLiN3aGljaC5zcGxpY2UoaW5kZXgsIDEpO1xuICB9XG5cbiAgdG9kbyhpbmRleCkge1xuICAgIHJldHVybiB0aGlzLiN3aGljaFtpbmRleF07XG4gIH1cblxuICBnZXQgY291bnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuI3doaWNoLmxlbmd0aDtcbiAgfVxuXG4gIGdldCB3aGF0KCkge1xuICAgIHJldHVybiB0aGlzLiN3aGF0O1xuICB9XG5cbiAgZ2V0IHdoaWNoKCkge1xuICAgIHJldHVybiB0aGlzLiN3aGljaDtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBQcm9qZWN0O1xuIiwiY2xhc3MgVG9kbyB7XG4gICN3aGF0O1xuXG4gICN3aGVuO1xuXG4gICNpc1VyZ2VudDtcblxuICAjaXNGaW5pc2hlZDtcblxuICAjcHJvamVjdDtcblxuICBjb25zdHJ1Y3RvcihcbiAgICB3aGF0LFxuICAgIHdoZW4sXG4gICAgcHJvamVjdCA9ICdEZWZhdWx0JyxcbiAgICBpc1VyZ2VudCA9ICdObycsXG4gICAgaXNGaW5pc2hlZCA9ICdObycsXG4gICkge1xuICAgIHRoaXMuI3doYXQgPSB3aGF0O1xuICAgIHRoaXMuI3doZW4gPSB3aGVuO1xuICAgIHRoaXMuI3Byb2plY3QgPSBwcm9qZWN0O1xuICAgIHRoaXMuI2lzVXJnZW50ID0gaXNVcmdlbnQ7XG4gICAgdGhpcy4jaXNGaW5pc2hlZCA9IGlzRmluaXNoZWQ7XG4gIH1cbiAgLy8gZ2V0dGVyc1xuXG4gIGdldCB3aGF0KCkge1xuICAgIHJldHVybiB0aGlzLiN3aGF0O1xuICB9XG5cbiAgc2V0IHdoYXQod2hhdCkge1xuICAgIHRoaXMuI3doYXQgPSB3aGF0O1xuICB9XG5cbiAgZ2V0IHdoZW4oKSB7XG4gICAgcmV0dXJuIHRoaXMuI3doZW47XG4gIH1cblxuICBzZXQgd2hlbih3aGVuKSB7XG4gICAgdGhpcy4jd2hlbiA9IERhdGUucGFyc2Uod2hlbik7XG4gIH1cblxuICBnZXQgdXJnZW50KCkge1xuICAgIHJldHVybiB0aGlzLiNpc1VyZ2VudDtcbiAgfVxuXG4gIHNldCB1cmdlbnQoeWVzTm8pIHtcbiAgICB0aGlzLiNpc1VyZ2VudCA9IHllc05vO1xuICB9XG5cbiAgZ2V0IGRvbmUoKSB7XG4gICAgcmV0dXJuIHRoaXMuI2lzRmluaXNoZWQ7XG4gIH1cblxuICBzZXQgZG9uZSh5ZXNObykge1xuICAgIHRoaXMuI2lzRmluaXNoZWQgPSB5ZXNObztcbiAgfVxuXG4gIGdldCBwcm9qZWN0KCkge1xuICAgIHJldHVybiB0aGlzLiNwcm9qZWN0O1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFRvZG87XG4iLCJpbXBvcnQgeyB0b0RhdGUgfSBmcm9tIFwiLi90b0RhdGUubWpzXCI7XG5cbi8qKlxuICogQG5hbWUgaXNGdXR1cmVcbiAqIEBjYXRlZ29yeSBDb21tb24gSGVscGVyc1xuICogQHN1bW1hcnkgSXMgdGhlIGdpdmVuIGRhdGUgaW4gdGhlIGZ1dHVyZT9cbiAqIEBwdXJlIGZhbHNlXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBJcyB0aGUgZ2l2ZW4gZGF0ZSBpbiB0aGUgZnV0dXJlP1xuICpcbiAqIEB0eXBlUGFyYW0gRGF0ZVR5cGUgLSBUaGUgYERhdGVgIHR5cGUsIHRoZSBmdW5jdGlvbiBvcGVyYXRlcyBvbi4gR2V0cyBpbmZlcnJlZCBmcm9tIHBhc3NlZCBhcmd1bWVudHMuIEFsbG93cyB0byB1c2UgZXh0ZW5zaW9ucyBsaWtlIFtgVVRDRGF0ZWBdKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy91dGMpLlxuICpcbiAqIEBwYXJhbSBkYXRlIC0gVGhlIGRhdGUgdG8gY2hlY2tcbiAqXG4gKiBAcmV0dXJucyBUaGUgZGF0ZSBpcyBpbiB0aGUgZnV0dXJlXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIElmIHRvZGF5IGlzIDYgT2N0b2JlciAyMDE0LCBpcyAzMSBEZWNlbWJlciAyMDE0IGluIHRoZSBmdXR1cmU/XG4gKiBjb25zdCByZXN1bHQgPSBpc0Z1dHVyZShuZXcgRGF0ZSgyMDE0LCAxMSwgMzEpKVxuICogLy89PiB0cnVlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc0Z1dHVyZShkYXRlKSB7XG4gIHJldHVybiArdG9EYXRlKGRhdGUpID4gRGF0ZS5ub3coKTtcbn1cblxuLy8gRmFsbGJhY2sgZm9yIG1vZHVsYXJpemVkIGltcG9ydHM6XG5leHBvcnQgZGVmYXVsdCBpc0Z1dHVyZTtcbiIsImltcG9ydCB7IHRvRGF0ZSB9IGZyb20gXCIuL3RvRGF0ZS5tanNcIjtcblxuLyoqXG4gKiBAbmFtZSBpc1Bhc3RcbiAqIEBjYXRlZ29yeSBDb21tb24gSGVscGVyc1xuICogQHN1bW1hcnkgSXMgdGhlIGdpdmVuIGRhdGUgaW4gdGhlIHBhc3Q/XG4gKiBAcHVyZSBmYWxzZVxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogSXMgdGhlIGdpdmVuIGRhdGUgaW4gdGhlIHBhc3Q/XG4gKlxuICogQHR5cGVQYXJhbSBEYXRlVHlwZSAtIFRoZSBgRGF0ZWAgdHlwZSwgdGhlIGZ1bmN0aW9uIG9wZXJhdGVzIG9uLiBHZXRzIGluZmVycmVkIGZyb20gcGFzc2VkIGFyZ3VtZW50cy4gQWxsb3dzIHRvIHVzZSBleHRlbnNpb25zIGxpa2UgW2BVVENEYXRlYF0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL3V0YykuXG4gKlxuICogQHBhcmFtIGRhdGUgLSBUaGUgZGF0ZSB0byBjaGVja1xuICpcbiAqIEByZXR1cm5zIFRoZSBkYXRlIGlzIGluIHRoZSBwYXN0XG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIElmIHRvZGF5IGlzIDYgT2N0b2JlciAyMDE0LCBpcyAyIEp1bHkgMjAxNCBpbiB0aGUgcGFzdD9cbiAqIGNvbnN0IHJlc3VsdCA9IGlzUGFzdChuZXcgRGF0ZSgyMDE0LCA2LCAyKSlcbiAqIC8vPT4gdHJ1ZVxuICovXG5leHBvcnQgZnVuY3Rpb24gaXNQYXN0KGRhdGUpIHtcbiAgcmV0dXJuICt0b0RhdGUoZGF0ZSkgPCBEYXRlLm5vdygpO1xufVxuXG4vLyBGYWxsYmFjayBmb3IgbW9kdWxhcml6ZWQgaW1wb3J0czpcbmV4cG9ydCBkZWZhdWx0IGlzUGFzdDtcbiIsImltcG9ydCB7IHN0YXJ0T2ZEYXkgfSBmcm9tIFwiLi9zdGFydE9mRGF5Lm1qc1wiO1xuXG4vKipcbiAqIEBuYW1lIGlzU2FtZURheVxuICogQGNhdGVnb3J5IERheSBIZWxwZXJzXG4gKiBAc3VtbWFyeSBBcmUgdGhlIGdpdmVuIGRhdGVzIGluIHRoZSBzYW1lIGRheSAoYW5kIHllYXIgYW5kIG1vbnRoKT9cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIEFyZSB0aGUgZ2l2ZW4gZGF0ZXMgaW4gdGhlIHNhbWUgZGF5IChhbmQgeWVhciBhbmQgbW9udGgpP1xuICpcbiAqIEB0eXBlUGFyYW0gRGF0ZVR5cGUgLSBUaGUgYERhdGVgIHR5cGUsIHRoZSBmdW5jdGlvbiBvcGVyYXRlcyBvbi4gR2V0cyBpbmZlcnJlZCBmcm9tIHBhc3NlZCBhcmd1bWVudHMuIEFsbG93cyB0byB1c2UgZXh0ZW5zaW9ucyBsaWtlIFtgVVRDRGF0ZWBdKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy91dGMpLlxuICpcbiAqIEBwYXJhbSBkYXRlTGVmdCAtIFRoZSBmaXJzdCBkYXRlIHRvIGNoZWNrXG4gKiBAcGFyYW0gZGF0ZVJpZ2h0IC0gVGhlIHNlY29uZCBkYXRlIHRvIGNoZWNrXG5cbiAqIEByZXR1cm5zIFRoZSBkYXRlcyBhcmUgaW4gdGhlIHNhbWUgZGF5IChhbmQgeWVhciBhbmQgbW9udGgpXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEFyZSA0IFNlcHRlbWJlciAwNjowMDowMCBhbmQgNCBTZXB0ZW1iZXIgMTg6MDA6MDAgaW4gdGhlIHNhbWUgZGF5P1xuICogY29uc3QgcmVzdWx0ID0gaXNTYW1lRGF5KG5ldyBEYXRlKDIwMTQsIDgsIDQsIDYsIDApLCBuZXcgRGF0ZSgyMDE0LCA4LCA0LCAxOCwgMCkpXG4gKiAvLz0+IHRydWVcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQXJlIDQgU2VwdGVtYmVyIGFuZCA0IE9jdG9iZXIgaW4gdGhlIHNhbWUgZGF5P1xuICogY29uc3QgcmVzdWx0ID0gaXNTYW1lRGF5KG5ldyBEYXRlKDIwMTQsIDgsIDQpLCBuZXcgRGF0ZSgyMDE0LCA5LCA0KSlcbiAqIC8vPT4gZmFsc2VcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQXJlIDQgU2VwdGVtYmVyLCAyMDE0IGFuZCA0IFNlcHRlbWJlciwgMjAxNSBpbiB0aGUgc2FtZSBkYXk/XG4gKiBjb25zdCByZXN1bHQgPSBpc1NhbWVEYXkobmV3IERhdGUoMjAxNCwgOCwgNCksIG5ldyBEYXRlKDIwMTUsIDgsIDQpKVxuICogLy89PiBmYWxzZVxuICovXG5leHBvcnQgZnVuY3Rpb24gaXNTYW1lRGF5KGRhdGVMZWZ0LCBkYXRlUmlnaHQpIHtcbiAgY29uc3QgZGF0ZUxlZnRTdGFydE9mRGF5ID0gc3RhcnRPZkRheShkYXRlTGVmdCk7XG4gIGNvbnN0IGRhdGVSaWdodFN0YXJ0T2ZEYXkgPSBzdGFydE9mRGF5KGRhdGVSaWdodCk7XG5cbiAgcmV0dXJuICtkYXRlTGVmdFN0YXJ0T2ZEYXkgPT09ICtkYXRlUmlnaHRTdGFydE9mRGF5O1xufVxuXG4vLyBGYWxsYmFjayBmb3IgbW9kdWxhcml6ZWQgaW1wb3J0czpcbmV4cG9ydCBkZWZhdWx0IGlzU2FtZURheTtcbiIsImltcG9ydCB7IGlzU2FtZURheSB9IGZyb20gXCIuL2lzU2FtZURheS5tanNcIjtcblxuLyoqXG4gKiBAbmFtZSBpc1RvZGF5XG4gKiBAY2F0ZWdvcnkgRGF5IEhlbHBlcnNcbiAqIEBzdW1tYXJ5IElzIHRoZSBnaXZlbiBkYXRlIHRvZGF5P1xuICogQHB1cmUgZmFsc2VcbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIElzIHRoZSBnaXZlbiBkYXRlIHRvZGF5P1xuICpcbiAqIEB0eXBlUGFyYW0gRGF0ZVR5cGUgLSBUaGUgYERhdGVgIHR5cGUsIHRoZSBmdW5jdGlvbiBvcGVyYXRlcyBvbi4gR2V0cyBpbmZlcnJlZCBmcm9tIHBhc3NlZCBhcmd1bWVudHMuIEFsbG93cyB0byB1c2UgZXh0ZW5zaW9ucyBsaWtlIFtgVVRDRGF0ZWBdKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy91dGMpLlxuICpcbiAqIEBwYXJhbSBkYXRlIC0gVGhlIGRhdGUgdG8gY2hlY2tcbiAqXG4gKiBAcmV0dXJucyBUaGUgZGF0ZSBpcyB0b2RheVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBJZiB0b2RheSBpcyA2IE9jdG9iZXIgMjAxNCwgaXMgNiBPY3RvYmVyIDE0OjAwOjAwIHRvZGF5P1xuICogY29uc3QgcmVzdWx0ID0gaXNUb2RheShuZXcgRGF0ZSgyMDE0LCA5LCA2LCAxNCwgMCkpXG4gKiAvLz0+IHRydWVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzVG9kYXkoZGF0ZSkge1xuICByZXR1cm4gaXNTYW1lRGF5KGRhdGUsIERhdGUubm93KCkpO1xufVxuXG4vLyBGYWxsYmFjayBmb3IgbW9kdWxhcml6ZWQgaW1wb3J0czpcbmV4cG9ydCBkZWZhdWx0IGlzVG9kYXk7XG4iLCJpbXBvcnQgeyB0b0RhdGUgfSBmcm9tIFwiLi90b0RhdGUubWpzXCI7XG5cbi8qKlxuICogQG5hbWUgc3RhcnRPZkRheVxuICogQGNhdGVnb3J5IERheSBIZWxwZXJzXG4gKiBAc3VtbWFyeSBSZXR1cm4gdGhlIHN0YXJ0IG9mIGEgZGF5IGZvciB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFJldHVybiB0aGUgc3RhcnQgb2YgYSBkYXkgZm9yIHRoZSBnaXZlbiBkYXRlLlxuICogVGhlIHJlc3VsdCB3aWxsIGJlIGluIHRoZSBsb2NhbCB0aW1lem9uZS5cbiAqXG4gKiBAdHlwZVBhcmFtIERhdGVUeXBlIC0gVGhlIGBEYXRlYCB0eXBlLCB0aGUgZnVuY3Rpb24gb3BlcmF0ZXMgb24uIEdldHMgaW5mZXJyZWQgZnJvbSBwYXNzZWQgYXJndW1lbnRzLiBBbGxvd3MgdG8gdXNlIGV4dGVuc2lvbnMgbGlrZSBbYFVUQ0RhdGVgXShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvdXRjKS5cbiAqXG4gKiBAcGFyYW0gZGF0ZSAtIFRoZSBvcmlnaW5hbCBkYXRlXG4gKlxuICogQHJldHVybnMgVGhlIHN0YXJ0IG9mIGEgZGF5XG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFRoZSBzdGFydCBvZiBhIGRheSBmb3IgMiBTZXB0ZW1iZXIgMjAxNCAxMTo1NTowMDpcbiAqIGNvbnN0IHJlc3VsdCA9IHN0YXJ0T2ZEYXkobmV3IERhdGUoMjAxNCwgOCwgMiwgMTEsIDU1LCAwKSlcbiAqIC8vPT4gVHVlIFNlcCAwMiAyMDE0IDAwOjAwOjAwXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzdGFydE9mRGF5KGRhdGUpIHtcbiAgY29uc3QgX2RhdGUgPSB0b0RhdGUoZGF0ZSk7XG4gIF9kYXRlLnNldEhvdXJzKDAsIDAsIDAsIDApO1xuICByZXR1cm4gX2RhdGU7XG59XG5cbi8vIEZhbGxiYWNrIGZvciBtb2R1bGFyaXplZCBpbXBvcnRzOlxuZXhwb3J0IGRlZmF1bHQgc3RhcnRPZkRheTtcbiIsIi8qKlxuICogQG5hbWUgdG9EYXRlXG4gKiBAY2F0ZWdvcnkgQ29tbW9uIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IENvbnZlcnQgdGhlIGdpdmVuIGFyZ3VtZW50IHRvIGFuIGluc3RhbmNlIG9mIERhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBDb252ZXJ0IHRoZSBnaXZlbiBhcmd1bWVudCB0byBhbiBpbnN0YW5jZSBvZiBEYXRlLlxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpcyBhbiBpbnN0YW5jZSBvZiBEYXRlLCB0aGUgZnVuY3Rpb24gcmV0dXJucyBpdHMgY2xvbmUuXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIGEgbnVtYmVyLCBpdCBpcyB0cmVhdGVkIGFzIGEgdGltZXN0YW1wLlxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpcyBub25lIG9mIHRoZSBhYm92ZSwgdGhlIGZ1bmN0aW9uIHJldHVybnMgSW52YWxpZCBEYXRlLlxuICpcbiAqICoqTm90ZSoqOiAqYWxsKiBEYXRlIGFyZ3VtZW50cyBwYXNzZWQgdG8gYW55ICpkYXRlLWZucyogZnVuY3Rpb24gaXMgcHJvY2Vzc2VkIGJ5IGB0b0RhdGVgLlxuICpcbiAqIEB0eXBlUGFyYW0gRGF0ZVR5cGUgLSBUaGUgYERhdGVgIHR5cGUsIHRoZSBmdW5jdGlvbiBvcGVyYXRlcyBvbi4gR2V0cyBpbmZlcnJlZCBmcm9tIHBhc3NlZCBhcmd1bWVudHMuIEFsbG93cyB0byB1c2UgZXh0ZW5zaW9ucyBsaWtlIFtgVVRDRGF0ZWBdKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy91dGMpLlxuICpcbiAqIEBwYXJhbSBhcmd1bWVudCAtIFRoZSB2YWx1ZSB0byBjb252ZXJ0XG4gKlxuICogQHJldHVybnMgVGhlIHBhcnNlZCBkYXRlIGluIHRoZSBsb2NhbCB0aW1lIHpvbmVcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQ2xvbmUgdGhlIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSB0b0RhdGUobmV3IERhdGUoMjAxNCwgMSwgMTEsIDExLCAzMCwgMzApKVxuICogLy89PiBUdWUgRmViIDExIDIwMTQgMTE6MzA6MzBcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQ29udmVydCB0aGUgdGltZXN0YW1wIHRvIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSB0b0RhdGUoMTM5MjA5ODQzMDAwMClcbiAqIC8vPT4gVHVlIEZlYiAxMSAyMDE0IDExOjMwOjMwXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB0b0RhdGUoYXJndW1lbnQpIHtcbiAgY29uc3QgYXJnU3RyID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGFyZ3VtZW50KTtcblxuICAvLyBDbG9uZSB0aGUgZGF0ZVxuICBpZiAoXG4gICAgYXJndW1lbnQgaW5zdGFuY2VvZiBEYXRlIHx8XG4gICAgKHR5cGVvZiBhcmd1bWVudCA9PT0gXCJvYmplY3RcIiAmJiBhcmdTdHIgPT09IFwiW29iamVjdCBEYXRlXVwiKVxuICApIHtcbiAgICAvLyBQcmV2ZW50IHRoZSBkYXRlIHRvIGxvc2UgdGhlIG1pbGxpc2Vjb25kcyB3aGVuIHBhc3NlZCB0byBuZXcgRGF0ZSgpIGluIElFMTBcbiAgICByZXR1cm4gbmV3IGFyZ3VtZW50LmNvbnN0cnVjdG9yKCthcmd1bWVudCk7XG4gIH0gZWxzZSBpZiAoXG4gICAgdHlwZW9mIGFyZ3VtZW50ID09PSBcIm51bWJlclwiIHx8XG4gICAgYXJnU3RyID09PSBcIltvYmplY3QgTnVtYmVyXVwiIHx8XG4gICAgdHlwZW9mIGFyZ3VtZW50ID09PSBcInN0cmluZ1wiIHx8XG4gICAgYXJnU3RyID09PSBcIltvYmplY3QgU3RyaW5nXVwiXG4gICkge1xuICAgIC8vIFRPRE86IENhbiB3ZSBnZXQgcmlkIG9mIGFzP1xuICAgIHJldHVybiBuZXcgRGF0ZShhcmd1bWVudCk7XG4gIH0gZWxzZSB7XG4gICAgLy8gVE9ETzogQ2FuIHdlIGdldCByaWQgb2YgYXM/XG4gICAgcmV0dXJuIG5ldyBEYXRlKE5hTik7XG4gIH1cbn1cblxuLy8gRmFsbGJhY2sgZm9yIG1vZHVsYXJpemVkIGltcG9ydHM6XG5leHBvcnQgZGVmYXVsdCB0b0RhdGU7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCAnLi9hcHAnO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9