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
  const thisTodo = todo;
  thisTodo.done = 'Yes';
  return thisTodo;
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
  // TODO: think of some defaults
  const thisTodo = todo;
  thisTodo.what = what;
  thisTodo.when = when;
  thisTodo.urgent = urgent;
  saveProjects('ns-todo-projects');
  return todo;
}

function projectTodoMarkDone(todoIndex, projectIndex) {
  const project = getProjectByNumber(projectIndex);
  const todo = project.todo(todoIndex);
  todo.done = 'Yes';
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

// Project actions
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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YnBhY2s6Ly9vZGluLXRvZG8tYXBwLy4vc3JjL2FwcC5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tYXBwLy4vc3JjL2NvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWFwcC8uL3NyYy9kYi5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tYXBwLy4vc3JjL3Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWFwcC8uL3NyYy90b2RvLmpzIiwid2VicGFjazovL29kaW4tdG9kby1hcHAvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvaXNGdXR1cmUubWpzIiwid2VicGFjazovL29kaW4tdG9kby1hcHAvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvaXNQYXN0Lm1qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tYXBwLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2lzU2FtZURheS5tanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWFwcC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9pc1RvZGF5Lm1qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tYXBwLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL3N0YXJ0T2ZEYXkubWpzIiwid2VicGFjazovL29kaW4tdG9kby1hcHAvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvdG9EYXRlLm1qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tYXBwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL29kaW4tdG9kby1hcHAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL29kaW4tdG9kby1hcHAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9vZGluLXRvZG8tYXBwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWFwcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBjb250cm9sbGVyIGZyb20gJy4vY29udHJvbGxlcic7XG5cbi8vIENyZWF0ZSBhIGRlZmF1bHQgcHJvamVjdFxuY29uc3QgZGVmYXVsdFByb2plY3QgPSBjb250cm9sbGVyLnByb2plY3RDcmVhdGUoJ2hvbWUnKTtcbi8vIGFkZCBzZWNvbmQgcHJvamVjdCBhbmQgdGhpcmQgcHJvamVjdFxuY29uc3Qgc2Vjb25kID0gY29udHJvbGxlci5wcm9qZWN0Q3JlYXRlKCd3b3JrJyk7XG5jb25zdCB0aGlyZCA9IGNvbnRyb2xsZXIucHJvamVjdENyZWF0ZSgncGMnKTtcblxuLy8gQ3JlYXRlIGEgZHVtbXkgdG9kb1xuLy8gVE9ETyB0ZWggY3JlYXRlIGZ1bmN0aW9uIHNob3VsZCBoYXZlIHByb2plY3Qud2hhdCFcbi8vIGVsc2UgaXQga2VlcHMgYSBjb3B5IG9mIHRoZSBwcm9qZWN0IGluIGVhY2ggdG9kb1xuXG5jb250cm9sbGVyLnRvZG9DcmVhdGUoJ0RvIHRoZSBkaXNoZXMnLCAnMjAyNC0wMy0yMicsIGRlZmF1bHRQcm9qZWN0KTtcbmNvbnRyb2xsZXIudG9kb0NyZWF0ZSgnQ2hlY2sgbXkgZW1haWwnLCAnMjAyNC0wNi0xMCcsIHNlY29uZCk7XG5jb250cm9sbGVyLnRvZG9DcmVhdGUoJ0NyZWF0ZSBiYWNrdXAgZnJvbSBwYyB0byBTREQnLCAnMjAyNC0wNC0wNCcsIHRoaXJkKTtcbmNvbnRyb2xsZXIudG9kb0NyZWF0ZSgnQ2hlY2sgb24gRUJheSBmb3IgbmV3IGtleWJvYXJkJywgJzIwMjMtMDMtMjMnLCB0aGlyZCk7XG4iLCIvLyBBbGwgdGhlIGFjdGlvbnMgdXNlcnMgY2FuIHVuZGVydGFrZVxuaW1wb3J0IHsgaXNUb2RheSwgaXNQYXN0LCBpc0Z1dHVyZSB9IGZyb20gJ2RhdGUtZm5zJztcbmltcG9ydCBUb2RvIGZyb20gJy4vdG9kbyc7XG5pbXBvcnQgUHJvamVjdCBmcm9tICcuL3Byb2plY3QnO1xuaW1wb3J0IERCIGZyb20gJy4vZGInO1xuXG4vLyBUb2RvIGFjdGlvbnNcbi8vIFRPRE8gTWFrZSBldmVyeSBmdW5jdGlvbiByZXR1cm4gc29tZXRoaW5nXG5cbmV4cG9ydCBmdW5jdGlvbiB0b2RvSXNEb25lKHRvZG8pIHtcbiAgY29uc3QgdGhpc1RvZG8gPSB0b2RvO1xuICB0aGlzVG9kby5kb25lID0gJ1llcyc7XG4gIHJldHVybiB0aGlzVG9kbztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRvZG9EZWxldGUocHJvamVjdEluZGV4LCB0b2RvSW5kZXgpIHtcbiAgY29uc3QgbXlQcm9qZWN0ID0gZ2V0UHJvamVjdEJ5TnVtYmVyKHByb2plY3RJbmRleCk7XG4gIG15UHJvamVjdC5kZWxldGUodG9kb0luZGV4KTtcbiAgc2F2ZVByb2plY3RzKCducy10b2RvLXByb2plY3RzJyk7XG4gIHJldHVybiBteVByb2plY3Q7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0b2RvQ3JlYXRlKHdoYXQsIHdoZW4sIHByb2plY3QpIHtcbiAgY29uc3QgdG9kbyA9IG5ldyBUb2RvKHdoYXQsIHdoZW4pO1xuICBwcm9qZWN0LmFkZCh0b2RvKTtcbiAgc2F2ZVByb2plY3RzKCducy10b2RvLXByb2plY3RzJyk7XG4gIHJldHVybiBwcm9qZWN0O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdG9kb0VkaXQodG9kbywgd2hhdCwgd2hlbiwgdXJnZW50KSB7XG4gIC8vIFRPRE86IHRoaW5rIG9mIHNvbWUgZGVmYXVsdHNcbiAgY29uc3QgdGhpc1RvZG8gPSB0b2RvO1xuICB0aGlzVG9kby53aGF0ID0gd2hhdDtcbiAgdGhpc1RvZG8ud2hlbiA9IHdoZW47XG4gIHRoaXNUb2RvLnVyZ2VudCA9IHVyZ2VudDtcbiAgc2F2ZVByb2plY3RzKCducy10b2RvLXByb2plY3RzJyk7XG4gIHJldHVybiB0b2RvO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcHJvamVjdFRvZG9NYXJrRG9uZSh0b2RvSW5kZXgsIHByb2plY3RJbmRleCkge1xuICBjb25zdCBwcm9qZWN0ID0gZ2V0UHJvamVjdEJ5TnVtYmVyKHByb2plY3RJbmRleCk7XG4gIGNvbnN0IHRvZG8gPSBwcm9qZWN0LnRvZG8odG9kb0luZGV4KTtcbiAgdG9kby5kb25lID0gJ1llcyc7XG4gIHNhdmVQcm9qZWN0cygnbnMtdG9kby1wcm9qZWN0cycpO1xuICBjb25zb2xlLmxvZyhgVG9kbyAke3RvZG8ud2hhdH0gaXMgbWFya2VkIGFzIGRvbmUuYCk7XG59XG5cbi8vIExpc3RzXG5cbmV4cG9ydCBmdW5jdGlvbiBsaXN0VG9kb3NGb3JQcm9qZWN0KG51bWJlcikge1xuICBjb25zdCBteVByb2plY3QgPSBEQi5nZXRQcm9qZWN0QnlOdW1iZXIobnVtYmVyKTtcbiAgcmV0dXJuIG15UHJvamVjdC53aGljaDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldE51bWJlclRvZG9zRm9yUHJvamVjdChwcm9qZWN0SW5kZXgpIHtcbiAgcmV0dXJuIGxpc3RUb2Rvc0ZvclByb2plY3QocHJvamVjdEluZGV4KS5sZW5ndGg7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb3VudFRvZG9zRm9yUGVyaW9kKGRhdGUpIHtcbiAgY29uc3QgdG9kb3MgPSBnZXRUb2Rvc0ZvclBlcmlvZChkYXRlKTtcbiAgbGV0IGNvdW50ID0gMDtcbiAgdG9kb3MuZm9yRWFjaCgocHJvamVjdCkgPT4ge1xuICAgIGNvdW50ICs9IHByb2plY3QubGVuZ3RoO1xuICB9KTtcbiAgcmV0dXJuIGNvdW50O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0VG9kb3NGb3JQZXJpb2QoZGF0ZSkge1xuICAvLyByZXR1cm4gYSBsaXN0IHdpdGggYWxsIHRvZG9zIGZvciB0b2RheSwgZnV0dXJlLCBwYXN0XG4gIC8vIFRPRE8gcGFzdCBhbHNvIGluY2x1ZGVzIHRvZGF5IChzZWNvbmRzIGFnbylcbiAgY29uc3QgZGF0ZUNoZWNrID0gZnVuY3Rpb24gKHdoZW4pIHtcbiAgICBpZiAoZGF0ZSA9PT0gJ3RvZGF5Jykge1xuICAgICAgaWYgKGlzVG9kYXkod2hlbikpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChkYXRlID09PSAnZnV0dXJlJykge1xuICAgICAgaWYgKGlzRnV0dXJlKHdoZW4pKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoZGF0ZSA9PT0gJ3Bhc3QnKSB7XG4gICAgICBpZiAoaXNQYXN0KHdoZW4pICYmICFpc1RvZGF5KHdoZW4pKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0gZWxzZSB0aHJvdyBjb25zb2xlLmVycm9yKCdObyBvciB3cm9uZyBkYXRlIGluc2VydGVkJyk7XG4gIH07XG4gIGNvbnN0IGFsbFRvZG9zID0gZ2V0QWxsVG9kb3MoKTtcbiAgY29uc3QgdG9kb3NGb3JQZXJpb2QgPSBbXTtcbiAgYWxsVG9kb3MuZm9yRWFjaCgocHJvamVjdCwgaW5kZXgpID0+IHtcbiAgICBjb25zdCBwcm9qZWN0VG9kb3MgPSBhbGxUb2Rvc1tpbmRleF1bMV07XG4gICAgY29uc3QgcGVyaW9kVG9kb3MgPSBwcm9qZWN0VG9kb3MuZmlsdGVyKCh0b2RvKSA9PiBkYXRlQ2hlY2sodG9kby53aGVuKSk7XG4gICAgdG9kb3NGb3JQZXJpb2RbaW5kZXhdID0gcGVyaW9kVG9kb3M7XG4gIH0pO1xuICByZXR1cm4gdG9kb3NGb3JQZXJpb2Q7XG59XG5cbi8vIFRPRE9cblxuLy8gUHJvamVjdCBhY3Rpb25zXG5leHBvcnQgZnVuY3Rpb24gc2F2ZVByb2plY3RzKGRhdGEpIHtcbiAgLy8gZ2V0IGFycmF5IHdpdGggdG9kbyBsaXN0cyBhbmQgcHJvamVjdCBuYW1lc1xuICBjb25zdCBhbGxUb2RvcyA9IGdldEFsbFRvZG9zKCk7XG4gIGNvbnN0IHN0b3JhZ2VBcnJheSA9IFtdO1xuICBhbGxUb2Rvcy5mb3JFYWNoKChwcm9qZWN0KSA9PiB7XG4gICAgY29uc3QgbmV3UHJvamVjdCA9IHsgd2hhdDogcHJvamVjdFswXSwgdG9kb3M6IFtdIH07XG4gICAgLy8gcHJvY2VzcyB0b2Rvc1xuICAgIHByb2plY3RbMV0uZm9yRWFjaCgodG9kbykgPT4ge1xuICAgICAgY29uc3QgbXlUb2RvID0ge1xuICAgICAgICB3aGF0OiB0b2RvLndoYXQsXG4gICAgICAgIHdoZW46IHRvZG8ud2hlbixcbiAgICAgICAgdXJnZW50OiB0b2RvLnVyZ2VudCxcbiAgICAgICAgZG9uZTogdG9kby5kb25lLFxuICAgICAgfTtcbiAgICAgIG5ld1Byb2plY3QudG9kb3MucHVzaChteVRvZG8pO1xuICAgIH0pO1xuICAgIHN0b3JhZ2VBcnJheS5wdXNoKG5ld1Byb2plY3QpO1xuICB9KTtcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oZGF0YSwgSlNPTi5zdHJpbmdpZnkoc3RvcmFnZUFycmF5KSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsb2FkUHJvamVjdHMoZGF0YSkge1xuICBEQi5kZWxldGVQcm9qZWN0cygpO1xuICBjb25zdCBwcm9qZWN0TGlzdCA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oZGF0YSkpO1xuICBwcm9qZWN0TGlzdC5mb3JFYWNoKChwcm9qZWN0KSA9PiB7XG4gICAgLy8gaW5pdGlhbGl6ZSBldmVyeSBwcm9qZWN0XG4gICAgY29uc3QgbmV3UHJvamVjdCA9IHByb2plY3RDcmVhdGUocHJvamVjdC53aGF0KTtcbiAgICBwcm9qZWN0LnRvZG9zLmZvckVhY2goKHRvZG8pID0+IHtcbiAgICAgIC8vIGluaXRpYWxpemUgZXZlcnkgdG9kb1xuICAgICAgLy8gdG9kbzogdXJnZW5jeSBldGMuXG4gICAgICB0b2RvQ3JlYXRlKHRvZG8ud2hhdCwgTnVtYmVyKHRvZG8ud2hlbiksIG5ld1Byb2plY3QpOyAvLyBERUJVR1xuICAgIH0pO1xuICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldEFsbFRvZG9zKCkge1xuICAvLyBnZXRzIGFsbCB0b2RvcyBhcyB0d29kaW1lbnNpb25hbCBhcnJheSBzdGFydGluZyB3aXRoIHRoZVxuICAvLyBuYW1lIG9mIGVhY2ggcHJvamVjdFxuICBjb25zdCBhbGxUb2RvcyA9IFtdO1xuICBjb25zdCBwcm9qZWN0cyA9IGxpc3RQcm9qZWN0cygpO1xuICBwcm9qZWN0cy5mb3JFYWNoKChwcm9qZWN0LCBpbmRleCkgPT4ge1xuICAgIGNvbnN0IHRvZG9zID0gW3Byb2plY3Qud2hhdCwgbGlzdFRvZG9zRm9yUHJvamVjdChpbmRleCldO1xuICAgIGFsbFRvZG9zLnB1c2godG9kb3MpO1xuICB9KTtcbiAgcmV0dXJuIGFsbFRvZG9zO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbGlzdFRvZG9zQnlEYXRlKCkge31cblxuZXhwb3J0IGZ1bmN0aW9uIGxpc3RQcm9qZWN0cygpIHtcbiAgcmV0dXJuIERCLmxpc3RQcm9qZWN0cygpO1xufVxuXG4vLyBQcm9qZWN0IGFjdGlvbnNcblxuZXhwb3J0IGZ1bmN0aW9uIHByb2plY3RDcmVhdGUobmFtZSkge1xuICBjb25zdCBwcm9qZWN0ID0gbmV3IFByb2plY3QobmFtZSk7XG4gIERCLmFkZFByb2plY3QocHJvamVjdCk7XG4gIHNhdmVQcm9qZWN0cygnbnMtdG9kby1wcm9qZWN0cycpO1xuICByZXR1cm4gcHJvamVjdDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByb2plY3REZWxldGUocHJvamVjdCkge1xuICBEQi5kZWxldGVQcm9qZWN0KHByb2plY3QpO1xuICBwcm9qZWN0ID0gbnVsbDtcbiAgc2F2ZVByb2plY3RzKCducy10b2RvLXByb2plY3RzJyk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcm9qZWN0RWRpdChwcm9qZWN0LCBuYW1lKSB7XG4gIHByb2plY3Qud2hhdCA9IG5hbWU7XG4gIHNhdmVQcm9qZWN0cygnbnMtdG9kby1wcm9qZWN0cycpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcHJvamVjdEFkZFRvZG8ocHJvamVjdCwgdG9kbykge1xuICBwcm9qZWN0LmFkZCh0b2RvKTtcbiAgc2F2ZVByb2plY3RzKCducy10b2RvLXByb2plY3RzJyk7XG4gIHJldHVybiBwcm9qZWN0O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0UHJvamVjdEJ5TnVtYmVyKG51bWJlcikge1xuICByZXR1cm4gREIuZ2V0UHJvamVjdEJ5TnVtYmVyKG51bWJlcik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRQcm9qZWN0Q291bnQoKSB7XG4gIHJldHVybiBEQi5nZXRQcm9qZWN0Q291bnQoKTtcbn1cbiIsIi8vIENvbnRhaW5lciBmb3IgYWxsIHByb2plY3RzIGFuZCB0b2Rvc1xuLy8gdW5pcXVlIENMQVNTIGluc3RhbmNlIFNJTkdMRVRPTlxubGV0IGluc3RhbmNlO1xuY29uc3QgcHJvamVjdHMgPSBbXTtcbmNsYXNzIERCIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgaWYgKGluc3RhbmNlKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ05ldyBpbnN0YW5jZSBjYW5ub3QgYmUgY3JlYXRlZCEnKTtcbiAgICB9XG4gICAgdGhpcy5wcm9qZWN0cyA9IHByb2plY3RzO1xuICAgIGluc3RhbmNlID0gdGhpcztcbiAgfVxuXG4gIGFkZFByb2plY3QocHJvamVjdCkge1xuICAgIHRoaXMucHJvamVjdHMucHVzaChwcm9qZWN0KTtcbiAgfVxuXG4gIGRlbGV0ZVByb2plY3QocHJvamVjdCkge1xuICAgIGNvbnN0IGluZGV4ID0gdGhpcy5wcm9qZWN0cy5pbmRleE9mKHByb2plY3QpO1xuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgIHRoaXMucHJvamVjdHMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICB9XG4gIH1cblxuICBsaXN0UHJvamVjdHMoKSB7XG4gICAgcmV0dXJuIHRoaXMucHJvamVjdHM7XG4gIH1cblxuICBleGlzdHNQcm9qZWN0KG5hbWUpIHtcbiAgICBpZiAodGhpcy5wcm9qZWN0cy5maW5kKChwcm9qZWN0KSA9PiBwcm9qZWN0LndoYXQgPT09IG5hbWUpKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgZ2V0UHJvamVjdEJ5TnVtYmVyKG51bWJlcikge1xuICAgIHJldHVybiB0aGlzLnByb2plY3RzW251bWJlcl07XG4gIH1cblxuICBnZXRQcm9qZWN0Q291bnQoKSB7XG4gICAgcmV0dXJuIHRoaXMucHJvamVjdHMubGVuZ3RoO1xuICB9XG5cbiAgZGVsZXRlUHJvamVjdHMoKSB7XG4gICAgdGhpcy5wcm9qZWN0cy5zcGxpY2UoMCwgcHJvamVjdHMubGVuZ3RoKTtcbiAgfVxufVxuY29uc3QgREJJbnN0YW5jZSA9IE9iamVjdC5mcmVlemUobmV3IERCKCkpO1xuXG5leHBvcnQgZGVmYXVsdCBEQkluc3RhbmNlO1xuIiwiY2xhc3MgUHJvamVjdCB7XG4gICN3aGF0O1xuXG4gICN3aGljaCA9IFtdO1xuXG4gIGNvbnN0cnVjdG9yKHdoYXQpIHtcbiAgICB0aGlzLiN3aGF0ID0gd2hhdDtcbiAgICAvLyBUT0RPIGVycm9yIGlmIHN1Y2ggYSBwcm9qZWN0IGFscmVhZHkgZXhpc3RzXG4gIH1cblxuICBhZGQodG9kbykge1xuICAgIHRoaXMuI3doaWNoLnB1c2godG9kbyk7XG4gIH1cblxuICBkZWxldGUoaW5kZXgpIHtcbiAgICAvLyBkZWxldGUgYSB0b2RvIGFjY29yZGluZyB0byBpbmRleFxuICAgIHRoaXMuI3doaWNoLnNwbGljZShpbmRleCwgMSk7XG4gIH1cblxuICB0b2RvKGluZGV4KSB7XG4gICAgcmV0dXJuIHRoaXMuI3doaWNoW2luZGV4XTtcbiAgfVxuXG4gIGdldCBjb3VudCgpIHtcbiAgICByZXR1cm4gdGhpcy4jd2hpY2gubGVuZ3RoO1xuICB9XG5cbiAgZ2V0IHdoYXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuI3doYXQ7XG4gIH1cblxuICBnZXQgd2hpY2goKSB7XG4gICAgcmV0dXJuIHRoaXMuI3doaWNoO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFByb2plY3Q7XG4iLCJjbGFzcyBUb2RvIHtcbiAgI3doYXQ7XG5cbiAgI3doZW47XG5cbiAgI2lzVXJnZW50O1xuXG4gICNpc0ZpbmlzaGVkO1xuXG4gICNwcm9qZWN0O1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHdoYXQsXG4gICAgd2hlbixcbiAgICBwcm9qZWN0ID0gJ0RlZmF1bHQnLFxuICAgIGlzVXJnZW50ID0gJ05vJyxcbiAgICBpc0ZpbmlzaGVkID0gJ05vJyxcbiAgKSB7XG4gICAgdGhpcy4jd2hhdCA9IHdoYXQ7XG4gICAgdGhpcy4jd2hlbiA9IHdoZW47XG4gICAgdGhpcy4jcHJvamVjdCA9IHByb2plY3Q7XG4gICAgdGhpcy4jaXNVcmdlbnQgPSBpc1VyZ2VudDtcbiAgICB0aGlzLiNpc0ZpbmlzaGVkID0gaXNGaW5pc2hlZDtcbiAgfVxuICAvLyBnZXR0ZXJzXG5cbiAgZ2V0IHdoYXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuI3doYXQ7XG4gIH1cblxuICBzZXQgd2hhdCh3aGF0KSB7XG4gICAgdGhpcy4jd2hhdCA9IHdoYXQ7XG4gIH1cblxuICBnZXQgd2hlbigpIHtcbiAgICByZXR1cm4gdGhpcy4jd2hlbjtcbiAgfVxuXG4gIHNldCB3aGVuKHdoZW4pIHtcbiAgICB0aGlzLiN3aGVuID0gRGF0ZS5wYXJzZSh3aGVuKTtcbiAgfVxuXG4gIGdldCB1cmdlbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuI2lzVXJnZW50O1xuICB9XG5cbiAgc2V0IHVyZ2VudCh5ZXNObykge1xuICAgIHRoaXMuI2lzVXJnZW50ID0geWVzTm87XG4gIH1cblxuICBnZXQgZG9uZSgpIHtcbiAgICByZXR1cm4gdGhpcy4jaXNGaW5pc2hlZDtcbiAgfVxuXG4gIHNldCBkb25lKHllc05vKSB7XG4gICAgdGhpcy4jaXNGaW5pc2hlZCA9IHllc05vO1xuICB9XG5cbiAgZ2V0IHByb2plY3QoKSB7XG4gICAgcmV0dXJuIHRoaXMuI3Byb2plY3Q7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVG9kbztcbiIsImltcG9ydCB7IHRvRGF0ZSB9IGZyb20gXCIuL3RvRGF0ZS5tanNcIjtcblxuLyoqXG4gKiBAbmFtZSBpc0Z1dHVyZVxuICogQGNhdGVnb3J5IENvbW1vbiBIZWxwZXJzXG4gKiBAc3VtbWFyeSBJcyB0aGUgZ2l2ZW4gZGF0ZSBpbiB0aGUgZnV0dXJlP1xuICogQHB1cmUgZmFsc2VcbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIElzIHRoZSBnaXZlbiBkYXRlIGluIHRoZSBmdXR1cmU/XG4gKlxuICogQHR5cGVQYXJhbSBEYXRlVHlwZSAtIFRoZSBgRGF0ZWAgdHlwZSwgdGhlIGZ1bmN0aW9uIG9wZXJhdGVzIG9uLiBHZXRzIGluZmVycmVkIGZyb20gcGFzc2VkIGFyZ3VtZW50cy4gQWxsb3dzIHRvIHVzZSBleHRlbnNpb25zIGxpa2UgW2BVVENEYXRlYF0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL3V0YykuXG4gKlxuICogQHBhcmFtIGRhdGUgLSBUaGUgZGF0ZSB0byBjaGVja1xuICpcbiAqIEByZXR1cm5zIFRoZSBkYXRlIGlzIGluIHRoZSBmdXR1cmVcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gSWYgdG9kYXkgaXMgNiBPY3RvYmVyIDIwMTQsIGlzIDMxIERlY2VtYmVyIDIwMTQgaW4gdGhlIGZ1dHVyZT9cbiAqIGNvbnN0IHJlc3VsdCA9IGlzRnV0dXJlKG5ldyBEYXRlKDIwMTQsIDExLCAzMSkpXG4gKiAvLz0+IHRydWVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzRnV0dXJlKGRhdGUpIHtcbiAgcmV0dXJuICt0b0RhdGUoZGF0ZSkgPiBEYXRlLm5vdygpO1xufVxuXG4vLyBGYWxsYmFjayBmb3IgbW9kdWxhcml6ZWQgaW1wb3J0czpcbmV4cG9ydCBkZWZhdWx0IGlzRnV0dXJlO1xuIiwiaW1wb3J0IHsgdG9EYXRlIH0gZnJvbSBcIi4vdG9EYXRlLm1qc1wiO1xuXG4vKipcbiAqIEBuYW1lIGlzUGFzdFxuICogQGNhdGVnb3J5IENvbW1vbiBIZWxwZXJzXG4gKiBAc3VtbWFyeSBJcyB0aGUgZ2l2ZW4gZGF0ZSBpbiB0aGUgcGFzdD9cbiAqIEBwdXJlIGZhbHNlXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBJcyB0aGUgZ2l2ZW4gZGF0ZSBpbiB0aGUgcGFzdD9cbiAqXG4gKiBAdHlwZVBhcmFtIERhdGVUeXBlIC0gVGhlIGBEYXRlYCB0eXBlLCB0aGUgZnVuY3Rpb24gb3BlcmF0ZXMgb24uIEdldHMgaW5mZXJyZWQgZnJvbSBwYXNzZWQgYXJndW1lbnRzLiBBbGxvd3MgdG8gdXNlIGV4dGVuc2lvbnMgbGlrZSBbYFVUQ0RhdGVgXShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvdXRjKS5cbiAqXG4gKiBAcGFyYW0gZGF0ZSAtIFRoZSBkYXRlIHRvIGNoZWNrXG4gKlxuICogQHJldHVybnMgVGhlIGRhdGUgaXMgaW4gdGhlIHBhc3RcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gSWYgdG9kYXkgaXMgNiBPY3RvYmVyIDIwMTQsIGlzIDIgSnVseSAyMDE0IGluIHRoZSBwYXN0P1xuICogY29uc3QgcmVzdWx0ID0gaXNQYXN0KG5ldyBEYXRlKDIwMTQsIDYsIDIpKVxuICogLy89PiB0cnVlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc1Bhc3QoZGF0ZSkge1xuICByZXR1cm4gK3RvRGF0ZShkYXRlKSA8IERhdGUubm93KCk7XG59XG5cbi8vIEZhbGxiYWNrIGZvciBtb2R1bGFyaXplZCBpbXBvcnRzOlxuZXhwb3J0IGRlZmF1bHQgaXNQYXN0O1xuIiwiaW1wb3J0IHsgc3RhcnRPZkRheSB9IGZyb20gXCIuL3N0YXJ0T2ZEYXkubWpzXCI7XG5cbi8qKlxuICogQG5hbWUgaXNTYW1lRGF5XG4gKiBAY2F0ZWdvcnkgRGF5IEhlbHBlcnNcbiAqIEBzdW1tYXJ5IEFyZSB0aGUgZ2l2ZW4gZGF0ZXMgaW4gdGhlIHNhbWUgZGF5IChhbmQgeWVhciBhbmQgbW9udGgpP1xuICpcbiAqIEBkZXNjcmlwdGlvblxuICogQXJlIHRoZSBnaXZlbiBkYXRlcyBpbiB0aGUgc2FtZSBkYXkgKGFuZCB5ZWFyIGFuZCBtb250aCk/XG4gKlxuICogQHR5cGVQYXJhbSBEYXRlVHlwZSAtIFRoZSBgRGF0ZWAgdHlwZSwgdGhlIGZ1bmN0aW9uIG9wZXJhdGVzIG9uLiBHZXRzIGluZmVycmVkIGZyb20gcGFzc2VkIGFyZ3VtZW50cy4gQWxsb3dzIHRvIHVzZSBleHRlbnNpb25zIGxpa2UgW2BVVENEYXRlYF0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL3V0YykuXG4gKlxuICogQHBhcmFtIGRhdGVMZWZ0IC0gVGhlIGZpcnN0IGRhdGUgdG8gY2hlY2tcbiAqIEBwYXJhbSBkYXRlUmlnaHQgLSBUaGUgc2Vjb25kIGRhdGUgdG8gY2hlY2tcblxuICogQHJldHVybnMgVGhlIGRhdGVzIGFyZSBpbiB0aGUgc2FtZSBkYXkgKGFuZCB5ZWFyIGFuZCBtb250aClcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQXJlIDQgU2VwdGVtYmVyIDA2OjAwOjAwIGFuZCA0IFNlcHRlbWJlciAxODowMDowMCBpbiB0aGUgc2FtZSBkYXk/XG4gKiBjb25zdCByZXN1bHQgPSBpc1NhbWVEYXkobmV3IERhdGUoMjAxNCwgOCwgNCwgNiwgMCksIG5ldyBEYXRlKDIwMTQsIDgsIDQsIDE4LCAwKSlcbiAqIC8vPT4gdHJ1ZVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBBcmUgNCBTZXB0ZW1iZXIgYW5kIDQgT2N0b2JlciBpbiB0aGUgc2FtZSBkYXk/XG4gKiBjb25zdCByZXN1bHQgPSBpc1NhbWVEYXkobmV3IERhdGUoMjAxNCwgOCwgNCksIG5ldyBEYXRlKDIwMTQsIDksIDQpKVxuICogLy89PiBmYWxzZVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBBcmUgNCBTZXB0ZW1iZXIsIDIwMTQgYW5kIDQgU2VwdGVtYmVyLCAyMDE1IGluIHRoZSBzYW1lIGRheT9cbiAqIGNvbnN0IHJlc3VsdCA9IGlzU2FtZURheShuZXcgRGF0ZSgyMDE0LCA4LCA0KSwgbmV3IERhdGUoMjAxNSwgOCwgNCkpXG4gKiAvLz0+IGZhbHNlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc1NhbWVEYXkoZGF0ZUxlZnQsIGRhdGVSaWdodCkge1xuICBjb25zdCBkYXRlTGVmdFN0YXJ0T2ZEYXkgPSBzdGFydE9mRGF5KGRhdGVMZWZ0KTtcbiAgY29uc3QgZGF0ZVJpZ2h0U3RhcnRPZkRheSA9IHN0YXJ0T2ZEYXkoZGF0ZVJpZ2h0KTtcblxuICByZXR1cm4gK2RhdGVMZWZ0U3RhcnRPZkRheSA9PT0gK2RhdGVSaWdodFN0YXJ0T2ZEYXk7XG59XG5cbi8vIEZhbGxiYWNrIGZvciBtb2R1bGFyaXplZCBpbXBvcnRzOlxuZXhwb3J0IGRlZmF1bHQgaXNTYW1lRGF5O1xuIiwiaW1wb3J0IHsgaXNTYW1lRGF5IH0gZnJvbSBcIi4vaXNTYW1lRGF5Lm1qc1wiO1xuXG4vKipcbiAqIEBuYW1lIGlzVG9kYXlcbiAqIEBjYXRlZ29yeSBEYXkgSGVscGVyc1xuICogQHN1bW1hcnkgSXMgdGhlIGdpdmVuIGRhdGUgdG9kYXk/XG4gKiBAcHVyZSBmYWxzZVxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogSXMgdGhlIGdpdmVuIGRhdGUgdG9kYXk/XG4gKlxuICogQHR5cGVQYXJhbSBEYXRlVHlwZSAtIFRoZSBgRGF0ZWAgdHlwZSwgdGhlIGZ1bmN0aW9uIG9wZXJhdGVzIG9uLiBHZXRzIGluZmVycmVkIGZyb20gcGFzc2VkIGFyZ3VtZW50cy4gQWxsb3dzIHRvIHVzZSBleHRlbnNpb25zIGxpa2UgW2BVVENEYXRlYF0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL3V0YykuXG4gKlxuICogQHBhcmFtIGRhdGUgLSBUaGUgZGF0ZSB0byBjaGVja1xuICpcbiAqIEByZXR1cm5zIFRoZSBkYXRlIGlzIHRvZGF5XG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIElmIHRvZGF5IGlzIDYgT2N0b2JlciAyMDE0LCBpcyA2IE9jdG9iZXIgMTQ6MDA6MDAgdG9kYXk/XG4gKiBjb25zdCByZXN1bHQgPSBpc1RvZGF5KG5ldyBEYXRlKDIwMTQsIDksIDYsIDE0LCAwKSlcbiAqIC8vPT4gdHJ1ZVxuICovXG5leHBvcnQgZnVuY3Rpb24gaXNUb2RheShkYXRlKSB7XG4gIHJldHVybiBpc1NhbWVEYXkoZGF0ZSwgRGF0ZS5ub3coKSk7XG59XG5cbi8vIEZhbGxiYWNrIGZvciBtb2R1bGFyaXplZCBpbXBvcnRzOlxuZXhwb3J0IGRlZmF1bHQgaXNUb2RheTtcbiIsImltcG9ydCB7IHRvRGF0ZSB9IGZyb20gXCIuL3RvRGF0ZS5tanNcIjtcblxuLyoqXG4gKiBAbmFtZSBzdGFydE9mRGF5XG4gKiBAY2F0ZWdvcnkgRGF5IEhlbHBlcnNcbiAqIEBzdW1tYXJ5IFJldHVybiB0aGUgc3RhcnQgb2YgYSBkYXkgZm9yIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogUmV0dXJuIHRoZSBzdGFydCBvZiBhIGRheSBmb3IgdGhlIGdpdmVuIGRhdGUuXG4gKiBUaGUgcmVzdWx0IHdpbGwgYmUgaW4gdGhlIGxvY2FsIHRpbWV6b25lLlxuICpcbiAqIEB0eXBlUGFyYW0gRGF0ZVR5cGUgLSBUaGUgYERhdGVgIHR5cGUsIHRoZSBmdW5jdGlvbiBvcGVyYXRlcyBvbi4gR2V0cyBpbmZlcnJlZCBmcm9tIHBhc3NlZCBhcmd1bWVudHMuIEFsbG93cyB0byB1c2UgZXh0ZW5zaW9ucyBsaWtlIFtgVVRDRGF0ZWBdKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy91dGMpLlxuICpcbiAqIEBwYXJhbSBkYXRlIC0gVGhlIG9yaWdpbmFsIGRhdGVcbiAqXG4gKiBAcmV0dXJucyBUaGUgc3RhcnQgb2YgYSBkYXlcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gVGhlIHN0YXJ0IG9mIGEgZGF5IGZvciAyIFNlcHRlbWJlciAyMDE0IDExOjU1OjAwOlxuICogY29uc3QgcmVzdWx0ID0gc3RhcnRPZkRheShuZXcgRGF0ZSgyMDE0LCA4LCAyLCAxMSwgNTUsIDApKVxuICogLy89PiBUdWUgU2VwIDAyIDIwMTQgMDA6MDA6MDBcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHN0YXJ0T2ZEYXkoZGF0ZSkge1xuICBjb25zdCBfZGF0ZSA9IHRvRGF0ZShkYXRlKTtcbiAgX2RhdGUuc2V0SG91cnMoMCwgMCwgMCwgMCk7XG4gIHJldHVybiBfZGF0ZTtcbn1cblxuLy8gRmFsbGJhY2sgZm9yIG1vZHVsYXJpemVkIGltcG9ydHM6XG5leHBvcnQgZGVmYXVsdCBzdGFydE9mRGF5O1xuIiwiLyoqXG4gKiBAbmFtZSB0b0RhdGVcbiAqIEBjYXRlZ29yeSBDb21tb24gSGVscGVyc1xuICogQHN1bW1hcnkgQ29udmVydCB0aGUgZ2l2ZW4gYXJndW1lbnQgdG8gYW4gaW5zdGFuY2Ugb2YgRGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIENvbnZlcnQgdGhlIGdpdmVuIGFyZ3VtZW50IHRvIGFuIGluc3RhbmNlIG9mIERhdGUuXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIGFuIGluc3RhbmNlIG9mIERhdGUsIHRoZSBmdW5jdGlvbiByZXR1cm5zIGl0cyBjbG9uZS5cbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXMgYSBudW1iZXIsIGl0IGlzIHRyZWF0ZWQgYXMgYSB0aW1lc3RhbXAuXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIG5vbmUgb2YgdGhlIGFib3ZlLCB0aGUgZnVuY3Rpb24gcmV0dXJucyBJbnZhbGlkIERhdGUuXG4gKlxuICogKipOb3RlKio6ICphbGwqIERhdGUgYXJndW1lbnRzIHBhc3NlZCB0byBhbnkgKmRhdGUtZm5zKiBmdW5jdGlvbiBpcyBwcm9jZXNzZWQgYnkgYHRvRGF0ZWAuXG4gKlxuICogQHR5cGVQYXJhbSBEYXRlVHlwZSAtIFRoZSBgRGF0ZWAgdHlwZSwgdGhlIGZ1bmN0aW9uIG9wZXJhdGVzIG9uLiBHZXRzIGluZmVycmVkIGZyb20gcGFzc2VkIGFyZ3VtZW50cy4gQWxsb3dzIHRvIHVzZSBleHRlbnNpb25zIGxpa2UgW2BVVENEYXRlYF0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL3V0YykuXG4gKlxuICogQHBhcmFtIGFyZ3VtZW50IC0gVGhlIHZhbHVlIHRvIGNvbnZlcnRcbiAqXG4gKiBAcmV0dXJucyBUaGUgcGFyc2VkIGRhdGUgaW4gdGhlIGxvY2FsIHRpbWUgem9uZVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBDbG9uZSB0aGUgZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IHRvRGF0ZShuZXcgRGF0ZSgyMDE0LCAxLCAxMSwgMTEsIDMwLCAzMCkpXG4gKiAvLz0+IFR1ZSBGZWIgMTEgMjAxNCAxMTozMDozMFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBDb252ZXJ0IHRoZSB0aW1lc3RhbXAgdG8gZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IHRvRGF0ZSgxMzkyMDk4NDMwMDAwKVxuICogLy89PiBUdWUgRmViIDExIDIwMTQgMTE6MzA6MzBcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHRvRGF0ZShhcmd1bWVudCkge1xuICBjb25zdCBhcmdTdHIgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoYXJndW1lbnQpO1xuXG4gIC8vIENsb25lIHRoZSBkYXRlXG4gIGlmIChcbiAgICBhcmd1bWVudCBpbnN0YW5jZW9mIERhdGUgfHxcbiAgICAodHlwZW9mIGFyZ3VtZW50ID09PSBcIm9iamVjdFwiICYmIGFyZ1N0ciA9PT0gXCJbb2JqZWN0IERhdGVdXCIpXG4gICkge1xuICAgIC8vIFByZXZlbnQgdGhlIGRhdGUgdG8gbG9zZSB0aGUgbWlsbGlzZWNvbmRzIHdoZW4gcGFzc2VkIHRvIG5ldyBEYXRlKCkgaW4gSUUxMFxuICAgIHJldHVybiBuZXcgYXJndW1lbnQuY29uc3RydWN0b3IoK2FyZ3VtZW50KTtcbiAgfSBlbHNlIGlmIChcbiAgICB0eXBlb2YgYXJndW1lbnQgPT09IFwibnVtYmVyXCIgfHxcbiAgICBhcmdTdHIgPT09IFwiW29iamVjdCBOdW1iZXJdXCIgfHxcbiAgICB0eXBlb2YgYXJndW1lbnQgPT09IFwic3RyaW5nXCIgfHxcbiAgICBhcmdTdHIgPT09IFwiW29iamVjdCBTdHJpbmddXCJcbiAgKSB7XG4gICAgLy8gVE9ETzogQ2FuIHdlIGdldCByaWQgb2YgYXM/XG4gICAgcmV0dXJuIG5ldyBEYXRlKGFyZ3VtZW50KTtcbiAgfSBlbHNlIHtcbiAgICAvLyBUT0RPOiBDYW4gd2UgZ2V0IHJpZCBvZiBhcz9cbiAgICByZXR1cm4gbmV3IERhdGUoTmFOKTtcbiAgfVxufVxuXG4vLyBGYWxsYmFjayBmb3IgbW9kdWxhcml6ZWQgaW1wb3J0czpcbmV4cG9ydCBkZWZhdWx0IHRvRGF0ZTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0ICcuL2FwcCc7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=