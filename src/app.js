import * as controller from './controller.js';
import * as views from './views.js';

// Create a default project
const defaultProject = controller.projectCreate('@home');
// add second project and third project
const second = controller.projectCreate("@work");
const third = controller.projectCreate("@pc");

// Create a dummy todo
const defaultTodo = controller.todoCreate('This todo', 'Now', defaultProject);
const secondTodo = controller.todoCreate('This 2 todo', 'Today', second);
const thirdTodo = controller.todoCreate('This todo todo', 'Next week', third);
const fourthTodo = controller.todoCreate('Thisasdfa todo', 'Tomorrow', third);

views.todoView(defaultTodo);

controller.todoIsDone(defaultTodo);

// Check if todo state changed
views.todoView(defaultTodo);