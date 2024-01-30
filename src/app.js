import * as controller  from './controller.js';
import * as views from './views.js';
import { default as DB }
from './db.js';

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

// add second project
controller.projectCreate("My second TODO list");

// check DB
controller.listProjects();

// remove project from DB
controller.projectDelete(defaultProject);

// check DB

controller.listProjects();
