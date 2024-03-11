import * as controller from './controller.js';

// Create a default project
const defaultProject = controller.projectCreate('@home');
// add second project and third project
const second = controller.projectCreate("@work");
const third = controller.projectCreate("@pc");

// Create a dummy todo
const defaultTodo = controller.todoCreate('Do the dishes', 'Now', defaultProject);
const secondTodo = controller.todoCreate('Check my email', 'Today', second);
const thirdTodo = controller.todoCreate('Create backup from pc to SDD', 'Next week', third);
const fourthTodo = controller.todoCreate('Check on EBay for new keyboard', 'Tomorrow', third);