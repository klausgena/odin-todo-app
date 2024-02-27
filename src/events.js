import * as views from './views.js';

export function addTodoEvent(event) {
    const target = event.target;
    if (target.className == "todo-add") {
        const projectLi = target.closest("h2 + ul").parentElement;
        const projectId = projectLi.querySelector("span").dataset.projectIndex;
        alert(projectId);
    }
}

export function addProjectEvent() {

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

function redrawScreen() {

}