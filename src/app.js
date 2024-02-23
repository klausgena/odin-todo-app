import * as controller from './controller.js';
import * as views from './views.js';

// Create a default project
const defaultProject = controller.projectCreate('My Todo List');

// Create a dummy todo
const defaultTodo = controller.todoCreate('This app', 'Now');
const secondTodo = controller.todoCreate('This 2 app', 'Today');
const thirdTodo = controller.todoCreate('This sdfasf app', 'Next week');
const fourthTodo = controller.todoCreate('Thisasdfa  app', 'Tomorrow');

views.todoView(defaultTodo);

controller.todoIsDone(defaultTodo);

// Check if todo state changed
views.todoView(defaultTodo);

// add default todo to default project
controller.projectAddTodo(defaultProject, defaultTodo);

// add second project and third project
controller.projectCreate("My second TODO list");
controller.projectCreate("Third");
controller.projectAddTodo(defaultProject, secondTodo);
controller.projectAddTodo(defaultProject, thirdTodo);
controller.projectAddTodo(defaultProject, fourthTodo);


// list todos for project
//views.projectTodosView("My Todo List");

// check DB
//views.projectsView();

// remove project from DB
//controller.projectDelete(defaultProject);

// check DB
//views.projectsView();

// show todos for defaultproject
//views.projectTodosView('My second TODO list');