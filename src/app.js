import * as controller from './controller.js';
import * as views from './views.js';

// Create a default project
const defaultProject = controller.projectCreate('My Todo List');

// Create a dummy todo
const defaultTodo = controller.todoCreate('This app', 'Now');

views.todoView(defaultTodo);

controller.todoIsDone(defaultTodo);

// Check if todo state changed
views.todoView(defaultTodo);

// add default todo to default project
controller.projectAddTodo(defaultProject, defaultTodo);

// add second project and third project
controller.projectCreate("My second TODO list");
controller.projectCreate("Third");

// list todos for project
views.projectTodosView("My Todo List");

// check DB
views.projectsView();

// remove project from DB
controller.projectDelete(defaultProject);

// check DB
views.projectsView();

// show todos for defaultproject
views.projectTodosView('My second TODO list');