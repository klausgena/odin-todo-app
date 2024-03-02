import * as views from './views.js';
import * as controller from './controller.js';

function getProject(target) {
    // Gets the project out of the Dom tree
    const projectLi = target.closest("h2 + ul").parentElement;
    const projectId = projectLi.querySelector("span").dataset.projectIndex;
    const myProject = controller.getProjectByNumber(projectId);
    return myProject;
}

export function addTodoEvent(event) {
    const target = event.target;
    if (target.className == "todo-add") {
        const myProject = getProject(target);
        controller.todoCreate("this todo stupid name fuck suck dick", "next month", myProject);
        views.redrawScreen();
    }
}

export function addProjectEvent(event) {
    // add a project in the GUI
    const target = event.target;
    if (target.id == "add-project") {
        controller.projectCreate("New Fucking Project! YOUOHOU!");
        // TODO add modal or input fields
        views.redrawScreen();
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
    const target = event.target;
    if (target.className == "project-delete") {
        const index = target.dataset.projectIndex;
        const project = controller.getProjectByNumber(index);
        controller.projectDelete(project);
        views.redrawScreen();
    }

}

export function markDoneTodoEvent() {

}

export function editTodoElementEvent() {

}

export function toggleTreeEvent() {

}