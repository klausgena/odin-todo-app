/**
 * TODO add form validation
 */

import * as controller from './controller';

const addTaskDiv = document.getElementById('add-task');
const mainTaskModal = document.getElementById('add-main-todo-dialog');
const mainSubmitButton = document.getElementById('modal-submit-button');
const projectsH2 = document.getElementById('projects-h2');
const projectModal = document.getElementById('add-project-dialog');
const projectSubmitButton = document.getElementById('submit-new-project');
const addTodoButton = document.getElementById('add-todo-button');
const addTodoDialog = document.getElementById('add-todo-dialog');
const mainTodoSubmit = document.getElementById('main-todo-submit');
const overdueDiv = document.getElementById('overdue-tasks');
const todayDiv = document.getElementById('tasks-for-today');
const futureDiv = document.getElementById('future-tasks');

/**
 * Open the modals
 */

addTaskDiv.addEventListener('click', () => {
  mainTaskModal.showModal();
});
projectsH2.addEventListener('click', () => {
  projectModal.showModal();
});
addTodoButton.addEventListener('click', () => {
  addTodoDialog.showModal();
});

/**
 * Handle the modal submit process
 */

mainSubmitButton.addEventListener('click', (event) => {
  event.stopPropagation();
  /** Close the modal */
  mainTaskModal.close();
  /** Get the form data */
  const todoWhat = document.getElementById('main-todo-what').value;
  const todoWhen = document.getElementById('main-todo-when').value;
  const projectID = document.getElementById('main-todo-project').value;
  /** Send it to the controller */
  controller.handleAddTaskEvent(todoWhat, todoWhen, projectID);
});
projectSubmitButton.addEventListener('click', (event) => {
  const projectText = document.querySelector(
    '#add-project-dialog form input',
  ).value;
  event.stopPropagation();
  projectModal.close();
  controller.handleAddProjectEvent(projectText);
});
mainTodoSubmit.addEventListener('click', (event) => {
  event.stopPropagation();
  addTodoDialog.close();
  const todoWhat = document.querySelector('#add-todo-dialog form input').value;
  const todoWhen = document.querySelector(
    '#add-todo-dialog form input ~ input',
  ).value;
  const projectID = 0; // DEBUG TODO ADD LATER
  controller.handleAddTaskEvent(todoWhat, todoWhen, projectID);
});

/**
 * Date view event handlers
 */

overdueDiv.addEventListener('click', () => {
  controller.handleDateViewEvent('overdue');
});
todayDiv.addEventListener('click', () => {
  controller.handleDateViewEvent('today');
});
futureDiv.addEventListener('click', () => {
  controller.handleDateViewEvent('future');
});
