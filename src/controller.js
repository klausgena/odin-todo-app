import { isToday, isPast, isFuture } from 'date-fns';
import Todo from './todo';
import Project from './project';
import DB from './db';
import * as views from './views';

const DB_NAME = 'ns-project-todos';

/**
 * gets all todos as twodimensional array starting with the
 * name of each project
 */
export function getAllTodos() {
  const allTodos = [];
  const projects = DB.listProjects();
  projects.forEach((project, index) => {
    const todos = [project.what, listTodosForProject(index)];
    allTodos.push(todos);
  });
  return allTodos;
}

/**
 * Returns array with all todos for a certain project
 */
function listTodosForProject(number) {
  const myProject = DB.getProjectByNumber(number);
  return myProject.which;
}

/**
 * Returns a list of all todos for a period (past, today, future)
 */
export function listTodosForPeriod(date) {
  const dateCheck = (when) => {
    if (date === 'today') {
      if (isToday(when)) {
        return true;
      }
    } else if (date === 'future') {
      if (isFuture(when)) {
        return true;
      }
    } else if (date === 'past') {
      if (isPast(when) && !isToday(when)) {
        return true;
      }
    }
    return false;
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

/**
 * Create a project and save it in the DB
 */
function projectCreate(name) {
  const project = new Project(name);
  DB.addProject(project);
  saveProjects(DB_NAME);
  return project;
}

/**
 * Create a todo and save it in the DB
 */
function todoCreate(what, when, project) {
  const todo = new Todo(what, when);
  project.add(todo);
  saveProjects(DB_NAME);
}

/**
 * Load data from storage or load dummy data
 */
function loadProjects(data) {
  DB.deleteProjects();
  const projectList = JSON.parse(localStorage.getItem(data));
  projectList.forEach((project) => {
    const newProject = projectCreate(project.what);
    project.todos.forEach((todo) => {
      todoCreate(todo.what, Number(todo.when), newProject);
    });
  });
}

/**
 * Save all DB data into local storage
 */
function saveProjects(data) {
  const allTodos = getAllTodos();
  const storageArray = [];
  allTodos.forEach((project) => {
    const newProject = { what: project[0], todos: [] };
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

/**
 * Create a dummy project (if DB is still empty at initalisation)
 * TODO belongs in app.js afaik
 */
function createDummyProject() {
  const projectList = [];
  const defaultProject = { what: 'Default', todos: [] };
  const defaultTodo = { what: 'Delete this todo', when: Date.now() };
  defaultProject.todos.push(defaultTodo);
  projectList.push(defaultProject);
  localStorage.setItem(DB_NAME, JSON.stringify(projectList));
}

/**
 * Redraw the screen on every DB change. Initialize with dummy data if DB empty.
 *
 * @param project number or overdue, today, future (for the main todo div)
 */
export function redrawScreen(numOrDate) {
  if (localStorage.getItem(DB_NAME) == null) {
    createDummyProject();
  }
  loadProjects(DB_NAME);
  const projects = DB.listProjects();
  views.renderProjectList(projects);
  switch (numOrDate) {
    case 'overdue':
      const overdueTodos = listTodosForPeriod('past');
      views.renderTitle('Overdue');
      views.renderTodos(overdueTodos);
      break;
    case 'today':
      const todayTodos = listTodosForPeriod('today');
      views.renderTitle('Today');
      views.renderTodos(todayTodos);
      break;
    case 'future':
      const futureTodos = listTodosForPeriod('future');
      views.renderTitle('Future');
      views.renderTodos(futureTodos);
      break;
    default:
      const projectTodos = listTodosForProject(numOrDate);
      views.renderTitle('Project Title'); // TODO function get project name
      views.renderTodos(projectTodos);
  }
}

/**
 * On click, get the modal data, create a todo, save the todo
 * in the database and redraw the screen.
 */
export function handleAddTaskEvent(what, when, projectID) {
  const parsedWhen = Date.parse(when);
  const project = DB.getProjectByNumber(projectID);
  todoCreate(what, parsedWhen, project);
  redrawScreen(projectID);
}

export function handleAddProjectEvent(what) {
  const project = new Project(what);
  saveProjects(DB_NAME);
  console.log(project.what);
  redrawScreen(0); // TODO set cookie!
}

export function handleDateViewEvent(date) {
  console.log(date);
}

// export function getNumberTodosForProject(projectIndex) {
//   return listTodosForProject(projectIndex).length;
// }

// export function listProjects() {
//   return DB.listProjects();
// }
// export function countTodosForPeriod(date) {
//   const todos = getTodosForPeriod(date);
//   let count = 0;
//   todos.forEach((project) => {
//     count += project.length;
//   });
//   return count;
// }

// // Project actions

// export function projectDelete(project) {
//   DB.deleteProject(project);
//   saveProjects('ns-todo-projects');
// }

// export function projectEdit(project, name) {
//   const myProject = project;
//   myProject.what = name;
//   saveProjects('ns-todo-projects');
// }

// export function projectAddTodo(project, todo) {
//   project.add(todo);
//   saveProjects('ns-todo-projects');
//   return project;
// }

// export function getProjectByNumber(number) {
//   return DB.getProjectByNumber(number);
// }

// export function getProjectCount() {
//   return DB.getProjectCount();
// }

// // Todo actions

// export function todoIsDone(todo) {
//   const thisTodo = todo;
//   thisTodo.done = 'Yes';
//   return thisTodo;
// }

// export function todoDelete(projectIndex, todoIndex) {
//   const myProject = getProjectByNumber(projectIndex);
//   myProject.delete(todoIndex);
//   saveProjects('ns-todo-projects');
//   return myProject;
// }

// export function todoEdit(todo, what, when, urgent) {
//   // TODO: think of some defaults
//   const thisTodo = todo;
//   thisTodo.what = what;
//   thisTodo.when = when;
//   thisTodo.urgent = urgent;
//   saveProjects('ns-todo-projects');
//   return todo;
// }

// export function projectTodoMarkDone(todoIndex, projectIndex) {
//   const project = getProjectByNumber(projectIndex);
//   const todo = project.todo(todoIndex);
//   todo.done = 'Yes';
//   saveProjects('ns-todo-projects');
// }
