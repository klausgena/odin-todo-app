import * as views from './views.js';
import * as controller from './controller.js';

export function addTodoEvent(event) {
    const target = event.target;
    if (target.className == "todo-add") {
        const projectLi = target.closest("h2 + ul").parentElement;
        const projectId = projectLi.querySelector("span").dataset.projectIndex;
        const myProject = controller.getProjectByNumber(projectId);
        // add modal or input fields
        controller.todoCreate("this todo stupid name fuck suck dick", "next month", myProject);
        views.redrawScreen();
    }
}

export function addProjectEvent(event) {
    // add functionality
    const target = event.target;
    if (target.id == "add-project") {
        alert('Add project');
        // add modal
        views.redrawScreen();
        alert("redran");
    }
}

export function deleteTodoEvent() {

}

export function deleteProjectEvent() {

}

export function markDoneTodoEvent() {

}

export function editTodoElementEvent() {

}

export function toggleTreeEvent() {

}