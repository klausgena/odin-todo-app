import * as controller  from './controller.js';

// Create a default project
const defaultProject = controller.projectCreate('My Todo List');

// Create a dummy todo

const defaultTodo = controller.todoCreate('This app', 'Now');
// add default todo to default project

controller.todoIsDone(defaultTodo);

controller.projectAddTodo(defaultProject, defaultTodo);
