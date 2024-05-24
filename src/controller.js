// // All the actions users can undertake
// import { isToday, isPast, isFuture } from 'date-fns';
// import Todo from './todo';
// import Project from './project';
// import DB from './db';
// import * as views from './views';

// // Operations on all Todos
// // TODO every function talks to model, but also to DOM

// function addEventsToView(node) {
//   const container = node;
//   container.addEventListener('click', events.addTodoEvent);
//   container.addEventListener('click', events.addProjectEvent);
//   container.addEventListener('click', events.showProjectTodosEvent);
//   container.addEventListener('click', events.showTodosByDateEvent);
//   container.addEventListener('mouseover', events.trashIconOnMouseOver);
//   container.addEventListener('click', events.markDoneTodoEvent);
//   container.addEventListener('click', events.deleteTodoEvent);
//   container.addEventListener('click', events.deleteProjectEvent);
// }

// function redrawScreen(projectIndex, date) {
//   // save projects for make new
//   if (localStorage.getItem('ns-todo-projects') == null) {
//     const projectList = [];
//     const defaultProject = { what: 'Default', todos: [] };
//     const defaultTodo = { what: 'Delete this todo', when: Date.now() };
//     defaultProject.todos.push(defaultTodo);
//     projectList.push(defaultProject);

//     localStorage.setItem('ns-todo-projects', JSON.stringify(projectList));
//     loadProjects('ns-todo-projects');
//   }
//   // checken of er projects zijn of of storage niet leeg is?
//   // een flag voor changes????
//   loadProjects('ns-todo-projects');
//   const mainDiv = document.getElementById('content');
//   mainDiv.innerHTML = '';
//   views.createSidebarComponent(mainDiv);
//   if (projectIndex === undefined && date === undefined) {
//     views.createMainContent(mainDiv, 0);
//   } else if (projectIndex) {
//     views.createMainContent(mainDiv, projectIndex);
//   } else if (date) {
//     views.createMainContent(mainDiv, 0, date);
//   } else {
//     views.createMainContent(mainDiv, 0);
//   }
//   addEventsToView(mainDiv);
// }

// export function listTodosForProject(number) {
//   const myProject = DB.getProjectByNumber(number);
//   return myProject.which;
// }

// export function getNumberTodosForProject(projectIndex) {
//   return listTodosForProject(projectIndex).length;
// }

// export function listProjects() {
//   return DB.listProjects();
// }

// export function getAllTodos() {
//   // gets all todos as twodimensional array starting with the
//   // name of each project
//   const allTodos = [];
//   const projects = listProjects();
//   projects.forEach((project, index) => {
//     const todos = [project.what, listTodosForProject(index)];
//     allTodos.push(todos);
//   });
//   // TODO REFACTOR VIEW Function: show all todos
//   return allTodos;
// }

// export function getTodosForPeriod(date) {
//   // return a list with all todos for today, future, past
//   // TODO: past also includes today (seconds ago)
//   const dateCheck = (when) => {
//     if (date === 'today') {
//       if (isToday(when)) {
//         return true;
//       }
//     } else if (date === 'future') {
//       if (isFuture(when)) {
//         return true;
//       }
//     } else if (date === 'past') {
//       if (isPast(when) && !isToday(when)) {
//         return true;
//       }
//     }
//     return false; // TODO: check if this works
//   };
//   const allTodos = getAllTodos();
//   const todosForPeriod = [];
//   allTodos.forEach((project, index) => {
//     const projectTodos = allTodos[index][1];
//     const periodTodos = projectTodos.filter((todo) => dateCheck(todo.when));
//     todosForPeriod[index] = periodTodos;
//   });
//   return todosForPeriod;
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

// export function saveProjects(data) {
//   // get array with todo lists and project names
//   const allTodos = getAllTodos();
//   const storageArray = [];
//   allTodos.forEach((project) => {
//     const newProject = { what: project[0], todos: [] };
//     // process todos
//     project[1].forEach((todo) => {
//       const myTodo = {
//         what: todo.what,
//         when: todo.when,
//         urgent: todo.urgent,
//         done: todo.done,
//       };
//       newProject.todos.push(myTodo);
//     });
//     storageArray.push(newProject);
//   });
//   localStorage.setItem(data, JSON.stringify(storageArray));
// }

// export function projectCreate(name) {
//   const project = new Project(name);
//   DB.addProject(project);
//   saveProjects('ns-todo-projects');
//   return project;
// }

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

// export function todoCreate(what, when, project) {
//   const todo = new Todo(what, when);
//   project.add(todo);
//   saveProjects('ns-todo-projects');
//   redrawScreen(projectIndex);
//   // return project;
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

// export function loadProjects(data) {
//   DB.deleteProjects();
//   const projectList = JSON.parse(localStorage.getItem(data));
//   projectList.forEach((project) => {
//     // initialize every project
//     const newProject = projectCreate(project.what);
//     project.todos.forEach((todo) => {
//       // initialize every todo
//       // todo: urgency etc.
//       todoCreate(todo.what, Number(todo.when), newProject); // DEBUG
//     });
//   });
// }
