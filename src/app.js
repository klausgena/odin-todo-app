import * as controller from './controller.js';

// Create a default project
const defaultProject = controller.projectCreate('home');
// add second project and third project
const second = controller.projectCreate("work");
const third = controller.projectCreate("pc");

// Create a dummy todo
const defaultTodo = controller.todoCreate('Do the dishes', "2024-03-22", defaultProject);
const secondTodo = controller.todoCreate('Check my email', "2024-06-10", second);
const thirdTodo = controller.todoCreate('Create backup from pc to SDD', "2024-04-04", third);
const fourthTodo = controller.todoCreate('Check on EBay for new keyboard', "2023-03-23", third);