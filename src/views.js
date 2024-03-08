import * as controller from './controller.js';
import * as events from './events.js';

// helper functions

// event handler views

function addTodoModal() {

    // TODO make second modal for if is sidebar then add select with projects, else do not add.
    const modal = document.createElement("dialog");
    const form = document.createElement("form");
    const labelWhat = document.createElement("label");
    const labelWhen = document.createElement("label");
    const labelProject = document.createElement("label");
    const inputWhat = document.createElement("input");
    const inputWhen = document.createElement("input");
    const selectProject = document.createElement("select");
    const submitButton = document.createElement("button");
    const projects = controller.listProjects();
    // const newProjectOption = document.createElement("option");

    // fill the select with all existing projects
    projects.forEach((project, index) => {
        const option = document.createElement("option");
        option.value = index;
        option.textContent = project.what;
        selectProject.appendChild(option);
    })

    // NEEDED????
    // newProjectOption.textContent = "Create New Project";
    // newProjectOption.setAttribute("id", "create-new-project-opt");

    // selectProject.appendChild(newProjectOption);

    modal.setAttribute("id", "add-todo-dialog");
    form.setAttribute("method", "dialog");
    inputWhat.type = "text";
    inputWhen.type = "date";
    labelWhat.textContent = "Title";
    labelWhen.textContent = "Due Date";
    labelProject.textContent = "Assign To Project";
    submitButton.setAttribute("id", "add-todo-button");
    submitButton.textContent = "Submit";

    form.appendChild(labelWhat);
    form.appendChild(inputWhat);
    form.appendChild(labelWhen);
    form.appendChild(inputWhen);
    form.appendChild(labelProject);
    form.appendChild(selectProject);
    form.appendChild(submitButton);

    modal.appendChild(form);

    return modal;

}

function addProjectModal() {
    const modal = document.createElement("dialog");
    const form = document.createElement("form");

    modal.setAttribute("id", "add-project-dialog");
    form.setAttribute("method", "dialog");
}

function editTodoModal() {
    const modal = document.createElement("dialog");
    const form = document.createElement("form");

    modal.setAttribute("id", "edit-todo-dialog");
    form.setAttribute("method", "dialog");
}

// All views users can interact with
export function dateView() {
    // returns the todo list, ordered by date and divided into 4 categories:
    // Today, This week, This Month and Later
}

export function todayView() {
    // returns the list of todos for today
}

export function projectsView() {
    // returns the list of all projects
    const projects = controller.listProjects();
    const ul = document.createElement("ul");
    //const addButton = document.createElement('button');
    projects.forEach((project, index) => {
        const li = document.createElement("li");
        const h2 = document.createElement('h2');
        const delSpan = document.createElement('span');
        delSpan.textContent = ' (DEL)';
        delSpan.setAttribute("class", "project-delete");
        delSpan.setAttribute("data-project-index", index);
        h2.textContent = project.what;
        h2.appendChild(delSpan);
        li.appendChild(h2);
        ul.appendChild(li);
    });
    return ul;
}

export function projectTodosView(index) {
    // returns a list of all todos for a certain project
    const myProject = controller.getProjectByNumber(index);
    const todos = controller.listTodosForProject(index);
    const addButton = document.createElement('button');
    const h2 = document.createElement("h2");
    h2.textContent = myProject.what;
    const ul = document.createElement('ul');
    ul.appendChild(h2);
    if (todos.length > 0) {
        todos.forEach((todo, index) => {
            const ulTodo = todoView(todo, index);
            ul.appendChild(ulTodo);
        });
    } else {
        console.log(`No todos for project ${index}`);
    }
    addButton.setAttribute("class", "todo-add");
    addButton.textContent = "+ ADD TODO";
    ul.appendChild(addButton);
    return ul;
}

export function todoView(todo, index) {
    // returns a todo with all the details
    const li = document.createElement('li');
    const ulWhat = document.createElement('ul');
    const values = [todo.when, todo.urgent, todo.done];
    const h3 = document.createElement('h3');
    const uiSpan = document.createElement('span');
    const checkBox = document.createElement('input');
    const checked = (todo.done == 'Yes') ? true : false;
    checkBox.type = 'checkbox';
    checkBox.setAttribute("data-todo-index", index);
    checkBox.checked = checked;
    uiSpan.textContent = (" (DEL)");
    uiSpan.setAttribute("class", "todo-delete");
    uiSpan.setAttribute("data-todo-index", index);
    h3.textContent = todo.what;
    h3.appendChild(checkBox);
    h3.appendChild(uiSpan);
    values.forEach((value, index) => {
        const li = document.createElement('li');
        const changeSpan = document.createElement('span');
        changeSpan.textContent = " (EDIT)";
        changeSpan.setAttribute("class", "todo-edit");
        changeSpan.setAttribute("data-todo-el-index", index);
        li.textContent = value;
        li.appendChild(changeSpan);
        ulWhat.appendChild(li);
    });
    li.appendChild(h3);

    li.appendChild(ulWhat);
    return li;
}

export function addEventsToView(node) {
    const container = node;
    container.addEventListener('click', events.addTodoEvent);
    // container.addEventListener('click', events.addProjectEvent);
    // container.addEventListener('click', events.deleteTodoEvent);
    // container.addEventListener('click', events.deleteProjectEvent);
    // container.addEventListener('click', events.markDoneTodoEvent);
    // return container;
}

export function redrawScreen() {
    // TODO add 'content' parameter to redraw screen for main content !
    const mainDiv = document.getElementById("content");
    mainDiv.innerHTML = "";
    createSidebarComponent(mainDiv);
    createMainContent(mainDiv, "NULL FOR THE MOMENT");
    addEventsToView(mainDiv);
}


function createSidebarComponent(containerDiv) {
    // Creates the sidebar with project list, add task input, today, future
    const headerH1 = document.createElement("h1");
    const sidebarDiv = document.createElement("div");
    const addTaskDiv = document.createElement("div");
    const projectListDiv = document.createElement("div");
    const todayDiv = document.createElement("div");
    const futureDiv = document.createElement("div");
    const addTaskP = document.createElement("p");
    const projectListUl = projectsView();
    const projectsH2 = document.createElement("h2");
    const todayH2 = document.createElement("h2");
    const futureH2 = document.createElement("h2");
    const addTodoDialog = addTodoModal();

    sidebarDiv.setAttribute("id", "sidebar");
    addTaskDiv.setAttribute("id", "add-task");
    todayDiv.setAttribute("id", "today-div");
    futureDiv.setAttribute("id", "future-div");
    projectListDiv.setAttribute("id", "project-list");
    todayDiv.setAttribute("id", "tasks-for-today");
    futureDiv.setAttribute("id", "future-tasks");

    addTaskP.innerHTML = "Add a task <span class='fat-plus' id='add-task'>+</span>";
    addTaskDiv.appendChild(addTaskP);
    addTaskDiv.appendChild(addTodoDialog);
    todayH2.textContent = "Today's Tasks";
    futureH2.textContent = "Tasks for later";
    projectsH2.innerHTML = "Projects <span class='fat-plus' id='add-project'>+</span>";
    projectsH2.setAttribute("id", "projects-h2");
    todayDiv.appendChild(todayH2);
    futureDiv.appendChild(futureH2);
    projectListDiv.appendChild(projectsH2);
    projectListDiv.appendChild(projectListUl);
    headerH1.textContent = "My TODO list";

    sidebarDiv.appendChild(headerH1);
    sidebarDiv.appendChild(addTaskDiv);
    sidebarDiv.appendChild(todayDiv);
    sidebarDiv.appendChild(futureDiv);
    sidebarDiv.appendChild(projectListDiv);

    containerDiv.appendChild(sidebarDiv);
}

function createMainContent(containerDiv, content) {
    // Creates the main content div with the todos of the selected project
    // or for the selected time period
    // default view = last project tasks? Today's tasks??
    const mainDiv = document.createElement("div");
    const tasksUl = projectTodosView(0);

    // todo add project title in projecttodosviw function
    mainDiv.setAttribute("id", "main-tasks-div");
    mainDiv.appendChild(tasksUl);

    containerDiv.appendChild(mainDiv);
}
