import * as views from './views.js';
import * as controller from './controller.js';


// HELPER FUNCTIONS

function getProject(target) {
    // Gets the project out of the Dom tree
    const projectLi = target.closest("h2 + ul").parentElement;
    const projectId = projectLi.querySelector("span").dataset.projectIndex;
    const myProject = controller.getProjectByNumber(projectId);
    return myProject;
}

function getProjectIndex(target) {
    // Gets the project index out of the Dom tree
    const projectLi = target.closest("h2 + ul").parentElement;
    return projectLi.querySelector("span").dataset.projectIndex;
}

// EVENT HANDLERS

export function addTodoEvent(event) {
    const target = event.target;
    if (target.id == "add-task") {
        const modal = document.getElementById("add-main-todo-dialog");
        modal.showModal();
    }
    else if (target.className == "todo-add") {
        const modal = document.getElementById("add-todo-dialog");
        modal.showModal();
    }
    //const myProject = getProject(target);
    // myProject = 0; // dummy TODO edit
    // if no project then select, else active project
    // controller.todoCreate("this todo stupid name fuck suck dick", "next month", myProject);
    //views.redrawScreen();

    // todo if submit option is CREATE NUEW PROJECT, then what?

}

export function addProjectEvent(event) {
    // add a project in the GUI
    const target = event.target;
    if (target.id == "add-project") {
        const modal = document.getElementById("add-project-dialog");
        modal.showModal();
        controller.projectCreate("New Fucking Project! YOUOHOU!");
        // TODO add modal or input fields
        // views.redrawScreen();
    }
}

export function deleteTodoEvent(event) {
    // delete a todo from the GUI
    const target = event.target;
    if (target.className == "todo-delete") {
        // get the project
        const project = getProject(target);
        const index = target.dataset.todoIndex;
        controller.todoDelete(project, index);
        views.redrawScreen();
    }
}

export function deleteProjectEvent(event) {
    // delete a project from the GUI
    // TODO ASK YES OR NO SURE?? DELETE make function
    const target = event.target;
    if (target.className == "project-delete") {
        const index = target.dataset.projectIndex;
        const project = controller.getProjectByNumber(index);
        controller.projectDelete(project);
        views.redrawScreen();
    }
}

export function markDoneTodoEvent(event) {
    // mark a todo as done in the GUI
    const target = event.target;
    if (target.type == "checkbox") {
        const projectIndex = getProjectIndex(target);
        const todoIndex = target.dataset.todoIndex;
        controller.projectTodoMarkDone(todoIndex, projectIndex);
        views.redrawScreen();
    }
}

export function editTodoElementEvent() {

}

export function toggleTreeEvent() {

}