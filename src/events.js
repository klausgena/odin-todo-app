import * as views from './views.js';
import * as controller from './controller.js';

// EVENT HANDLERS

export function addTodoEvent(event) {

    const target = event.target;
    let modal = "";

    if (target.className == "add-task") {
        modal = document.getElementById("add-main-todo-dialog");
        modal.showModal();
        modal.addEventListener("click", function (event) {
            if (event.target.className == "add-todo-button") {
                const projectIndex = document.querySelector("#add-main-todo-dialog form select").value;
                const project = controller.getProjectByNumber(projectIndex);
                console.log(projectIndex);
                const what = document.querySelector("#add-main-todo-dialog form input").value;
                const when = Date.parse(document.querySelector("#add-main-todo-dialog form input+label+input").value);
                if (!what || !when) {
                    alert("no form data");
                }
                else {
                    controller.todoCreate(what, when, project);
                    views.redrawScreen(projectIndex);
                }
            }
        })
    }
    else if (target.className == "todo-add") {
        modal = document.getElementById("add-todo-dialog");
        modal.showModal();
        const projectIndex = modal.parentElement.firstChild.dataset.projectIndex;
        modal.addEventListener("click", function (event) {
            if (event.target.className == "add-todo-button") {
                const project = controller.getProjectByNumber(projectIndex);
                const what = document.querySelector("#add-todo-dialog form input").value;
                const when = Date.parse(document.querySelector("#add-todo-dialog form input+label+input").value);
                if (!what || !when) {
                    // todo make this more elegant
                    alert("Form data missing");
                }
                else {
                    controller.todoCreate(what, when, project);
                }
                views.redrawScreen(projectIndex);
            }
        })
    }
}

export function showProjectTodosEvent(event) {
    const target = event.target;
    if (target.className == "project-list-h3") {
        views.redrawScreen(target.dataset.projectIndex);
    }
}

export function showTodosByDateEvent(event) {
    const target = event.target;
    if (target.className == "date-view-today") {
        views.redrawScreen(0, "today");
    }
    else if (target.className == "date-view-future") {
        views.redrawScreen(0, "future");
    }
    else if (target.className == "date-view-past") {
        views.redrawScreen(0, "past");
    }
}

export function addProjectEvent(event) {
    // add a project in the GUI
    const target = event.target;
    if (target.id == "projects-h2") {
        const modal = document.getElementById("add-project-dialog");
        modal.showModal();
        modal.addEventListener('click', function (event) {
            if (event.target.id == "submit-new-project") {
                const what = document.querySelector("#add-project-dialog form input").value;
                if (!what) {
                    alert("Form Data MISSING");
                }
                else {
                    controller.projectCreate(what);
                    const projectIndex = controller.getProjectCount();
                    views.redrawScreen(projectIndex - 1);
                }
            }
        })
    }
}

export function deleteTodoEvent(event) {
    // delete a todo from the GUI
    const target = event.target;
    if (target.className == "iconoir-trash") {
        // style hover
        const projectIndex = target.dataset.projectIndex;
        const todoIndex = target.dataset.todoIndex;
        controller.todoDelete(projectIndex, todoIndex);
        views.redrawScreen(projectIndex);
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
        const projectIndex = target.dataset.projectIndex;
        const todoIndex = target.dataset.todoIndex;
        controller.projectTodoMarkDone(todoIndex, projectIndex);
        views.redrawScreen(projectIndex);
    }
}

export function editTodoElementEvent() {

}

export function toggleTreeEvent() {

}

export function trashIconOnMouseOver(event) {
    const target = event.target;
    const parent = target.parentNode.nodeName;
    if (target.className == "number" && parent == "H3") {
        const trashIcon = views.addIcon("trash");
        const number = target.textContent;
        target.textContent = "";
        target.appendChild(trashIcon);
        target.addEventListener("mouseleave", function () {
            setTimeout(function () {
                target.textContent = number;
            }, 150)
        });
    };
}
