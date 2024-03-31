import * as controller from './controller.js';
import * as events from './events.js';

import { formatDistanceToNow, isToday } from 'date-fns';


// helper functions

function createNumberSpan(number) {
    const span = document.createElement('span');
    span.setAttribute("class", "number");
    span.textContent = number;
    return span;
}

export function addIcon(iconName) {
    const i = document.createElement("i");
    const iconClass = `iconoir-${iconName}`;
    i.setAttribute("class", iconClass);
    return i;
}

// event handler views

function addTodoModal(sideYesNo) {

    // TODO make second modal for if is sidebar then add 
    // select with projects, else do not add.
    const modal = document.createElement("dialog");
    const form = document.createElement("form");
    const labelWhat = document.createElement("label");
    const labelWhen = document.createElement("label");
    const inputWhat = document.createElement("input");
    const inputWhen = document.createElement("input");
    const cancelButton = document.createElement("button");
    const submitButton = document.createElement("button");

    modal.setAttribute("id", "add-todo-dialog");
    form.setAttribute("method", "dialog");
    inputWhat.type = "text";
    inputWhen.type = "date";
    labelWhat.textContent = "Title";
    labelWhen.textContent = "Due Date";

    submitButton.setAttribute("class", "add-todo-button");
    submitButton.type = "button";
    cancelButton.setAttribute("id", "cancel-button");
    submitButton.textContent = "Submit";
    cancelButton.textContent = "Cancel";

    form.appendChild(labelWhat);
    form.appendChild(inputWhat);
    form.appendChild(labelWhen);
    form.appendChild(inputWhen);

    if (sideYesNo) {
        const labelProject = document.createElement("label");
        modal.setAttribute("id", "add-main-todo-dialog");
        labelProject.textContent = "Assign To Project";
        const selectProject = document.createElement("select");
        const projects = controller.listProjects();
        // fill the select with all existing projects
        projects.forEach((project, index) => {
            const option = document.createElement("option");
            option.value = index;
            option.textContent = project.what;
            selectProject.appendChild(option);
        })
        form.appendChild(labelProject);
        form.appendChild(selectProject);
    }

    form.appendChild(cancelButton);
    form.appendChild(submitButton);

    modal.appendChild(form);

    return modal;
}

function addProjectModal() {
    const modal = document.createElement("dialog");
    const form = document.createElement("form");
    const labelWhat = document.createElement("label");
    const inputWhat = document.createElement("input");

    inputWhat.type = "text";
    labelWhat.textContent = "What's the project about?";

    const cancelButton = document.createElement("button");
    const submitButton = document.createElement("button");

    cancelButton.textContent = "Cancel";
    submitButton.textContent = "Submit";
    submitButton.setAttribute("id", "submit-new-project");
    submitButton.type = "button";


    modal.setAttribute("id", "add-project-dialog");
    form.setAttribute("method", "dialog");

    form.appendChild(labelWhat);
    form.appendChild(inputWhat);
    form.appendChild(cancelButton);
    form.appendChild(submitButton);

    modal.appendChild(form);

    return modal;
}

function editTodoModal() {
    const modal = document.createElement("dialog");
    const form = document.createElement("form");

    modal.setAttribute("id", "edit-todo-dialog");
    form.setAttribute("method", "dialog");
}

// All views users can interact with
export function dateView(date) {
    // date view of the todo list: three options:
    // if date === today / future / past
    // share a lot of functionality with projectTodosView
    const dateTodos = controller.getTodosForPeriod(date);
    // is array with project indexes in first level
    const h2 = document.createElement("h2");
    const folderIcon = addIcon("folder");
    const projectWhat = `Todos For ${date.toUpperCase()}`;
    h2.appendChild(folderIcon);
    h2.textContent = projectWhat;
    const ul = document.createElement('ul');
    ul.appendChild(h2);
    dateTodos.forEach((projectIndex, index) => {
        const todos = projectIndex;
        if (todos == undefined) {
            console.log(`No todos for project ${index}`);
        }
        else if (todos.length > 0) {
            todos.forEach((todo, myIndex) => {
                const ulTodo = todoView(todo, myIndex, index); // add project Index
                ul.appendChild(ulTodo);
            });
        }
    });
    return ul;
}

export function simpleDueDate(todoWhen) {
    // show today, tomorrow, in 7 days, soon, next week, etc.
    // under the todo description in the main field. Returns a string.
    if (isToday(todoWhen)) {
        return "today";
    } else {
        return formatDistanceToNow(todoWhen, { addSuffix: true });
    }
}

export function projectsView() {
    // returns the list of all projects
    const projects = controller.listProjects();
    const ul = document.createElement("ul");
    //const addButton = document.createElement('button');
    projects.forEach((project, index) => {
        const li = document.createElement("li");
        const h3 = document.createElement('h3');
        const leftSpan = document.createElement('span');
        const plusIcon = addIcon("plus-circle");
        const projectWhat = document.createTextNode(project.what);
        leftSpan.setAttribute("data-project-index", index);
        leftSpan.appendChild(projectWhat);
        h3.appendChild(leftSpan);
        h3.setAttribute("class", "project-list-h3");
        h3.appendChild(createNumberSpan(controller.getNumberTodosForProject(index)));
        li.setAttribute("class", "project-list-li");
        h3.setAttribute("data-project-index", index);
        li.appendChild(h3);
        ul.appendChild(li);
    });
    return ul;
}

export function projectTodosView(index) {
    // returns a list of all todos for a certain project
    const myProject = controller.getProjectByNumber(index);
    const todos = controller.listTodosForProject(index);
    const addButton = document.createElement('button');
    const addTodoDialog = addTodoModal(false, index);
    const h2 = document.createElement("h2");
    const folderIcon = addIcon("folder");
    const projectWhat = document.createTextNode(myProject.what);
    h2.appendChild(folderIcon);
    h2.appendChild(projectWhat);
    h2.setAttribute("data-project-index", index);
    const ul = document.createElement('ul');
    ul.appendChild(h2);
    if (todos.length > 0) {
        todos.forEach((todo, myIndex) => {
            const ulTodo = todoView(todo, myIndex, index);
            ul.appendChild(ulTodo);
        });
    } else {
        console.log(`No todos for project ${index}`);
    }
    addButton.setAttribute("class", "todo-add");
    addButton.textContent = "+ ADD TODO";
    ul.appendChild(addButton);
    ul.appendChild(addTodoDialog);
    return ul;
}

export function todoView(todo, todoIndex, projectIndex) {
    // returns a todo with all the details
    const li = document.createElement('li');
    const dateSpan = document.createElement('span');
    const uiSpan = document.createElement('span');
    const contentSpan = document.createElement('span');
    const checkBox = document.createElement('input');
    const checked = (todo.done == 'Yes') ? true : false;
    const trashIcon = addIcon("trash");
    const editIcon = addIcon("edit");


    checkBox.type = 'checkbox';
    checkBox.setAttribute("data-todo-index", todoIndex);
    if (projectIndex) {
        checkBox.setAttribute("data-project-index", projectIndex);
    };
    checkBox.checked = checked;
    trashIcon.setAttribute("data-todo-index", todoIndex);
    trashIcon.setAttribute("data-project-index", projectIndex);
    uiSpan.appendChild(trashIcon);
    uiSpan.setAttribute("class", "todo-delete");
    contentSpan.setAttribute("class", "todo-description");
    contentSpan.textContent = todo.what;
    dateSpan.setAttribute("class", "date-span");
    li.appendChild(checkBox);
    li.appendChild(contentSpan);

    const span = document.createElement('span');
    span.textContent = simpleDueDate(todo.when);
    dateSpan.appendChild(span);

    const changeSpan = document.createElement('span');
    changeSpan.appendChild(editIcon);
    changeSpan.setAttribute("class", "todo-edit");
    changeSpan.setAttribute("data-todo-el-index", todoIndex);
    dateSpan.appendChild(changeSpan);
    dateSpan.appendChild(uiSpan);
    li.appendChild(dateSpan);


    return li;
}

export function addEventsToView(node) {
    const container = node;
    container.addEventListener('click', events.addTodoEvent);
    container.addEventListener('click', events.addProjectEvent);
    container.addEventListener('click', events.showProjectTodosEvent);
    container.addEventListener('click', events.showTodosByDateEvent);
    container.addEventListener('mouseover', events.trashIconOnMouseOver);
    container.addEventListener('click', events.markDoneTodoEvent);
    container.addEventListener('click', events.deleteTodoEvent);
    // container.addEventListener('click', events.deleteProjectEvent);
    // return container;
}

export function redrawScreen(projectIndex, date) {
    // save projects or make new
    if (localStorage.getItem('ns-todo-projects') == null) {
        const projectList = [];
        const defaultProject = { 'what': 'Default', 'todos': [] };
        const defaultTodo = { 'what': 'Delete this todo', 'when': Date.now() };
        defaultProject.todos.push(defaultTodo);
        projectList.push(defaultProject);

        localStorage.setItem('ns-todo-projects', JSON.stringify(projectList));
        controller.loadProjects('ns-todo-projects');
    }
    // checken of er projects zijn of of storage niet leeg is?
    // een flag voor changes????
    controller.loadProjects('ns-todo-projects');
    const mainDiv = document.getElementById("content");
    mainDiv.innerHTML = "";
    createSidebarComponent(mainDiv);
    if (projectIndex == undefined && date == undefined) {
        createMainContent(mainDiv, 0);
    } else if (projectIndex) {
        createMainContent(mainDiv, projectIndex);
    } else if (date) {
        createMainContent(mainDiv, 0, date);
    } else {
        createMainContent(mainDiv, 0);
    }
    addEventsToView(mainDiv);
}

function createMainContent(containerDiv, projectIndex, date) {
    // Creates the main content div with the todos of the selected project
    // or for the selected time period
    // default view = last project tasks? Today's tasks??
    const mainDiv = document.createElement("div");
    let tasksUl = "";
    if (date) {
        tasksUl = dateView(date);
    } else {
        tasksUl = projectTodosView(projectIndex);
    }

    // todo add project title in projecttodosviw function
    mainDiv.setAttribute("id", "main-tasks-div");
    mainDiv.appendChild(tasksUl);

    containerDiv.appendChild(mainDiv);
}


function createSidebarComponent(containerDiv) {
    // Creates the sidebar with project list, add task input, today, future
    const headerH1 = document.createElement("h1");
    const sidebarDiv = document.createElement("div");
    const addTaskDiv = document.createElement("div");
    const projectListDiv = document.createElement("div");
    const todayDiv = document.createElement("div");
    const futureDiv = document.createElement("div");
    const pastDiv = document.createElement("div");
    const addTaskP = document.createElement("p");
    const projectListUl = projectsView();
    const projectsH2 = document.createElement("h2");
    const todayH2 = document.createElement("h2");
    const futureH2 = document.createElement("h2");
    const pastH2 = document.createElement("h2");
    const addTodoDialog = addTodoModal(true);
    const addProjectDialog = addProjectModal();
    const addTaskPContent = document.createTextNode("Add a Task");
    const plusIcon = addIcon("plus-circle");
    const plusIcon2 = addIcon("plus-circle");

    addTaskDiv.setAttribute("id", "add-task");
    addTaskP.setAttribute("class", "add-task");
    sidebarDiv.setAttribute("id", "sidebar");
    pastDiv.setAttribute("id", "overdue-tasks");
    projectListDiv.setAttribute("id", "project-list");
    todayDiv.setAttribute("id", "tasks-for-today");
    futureDiv.setAttribute("id", "future-tasks");

    addTaskP.appendChild(addTaskPContent);
    addTaskP.appendChild(plusIcon2);
    addTaskDiv.appendChild(addTaskP);
    addTaskDiv.appendChild(addTodoDialog);
    todayH2.textContent = "Today's Tasks";
    todayH2.setAttribute("class", "date-view-today");
    todayH2.appendChild(createNumberSpan(controller.countTodosForPeriod("today")));
    futureH2.textContent = "Tasks For Later";
    futureH2.setAttribute('class', 'date-view-future');
    futureH2.appendChild(createNumberSpan(controller.countTodosForPeriod("future")));
    pastH2.textContent = "Overdue Tasks";
    pastH2.setAttribute('class', 'date-view-past');
    pastH2.appendChild(createNumberSpan(controller.countTodosForPeriod("past")));



    projectsH2.innerHTML = "Projects";
    projectsH2.setAttribute("id", "projects-h2");
    projectsH2.appendChild(plusIcon);
    todayDiv.appendChild(todayH2);
    futureDiv.appendChild(futureH2);
    pastDiv.appendChild(pastH2);
    projectListDiv.appendChild(projectsH2);
    projectListDiv.appendChild(projectListUl);
    headerH1.textContent = "My TODO list";

    sidebarDiv.appendChild(headerH1);
    sidebarDiv.appendChild(addTaskDiv);
    sidebarDiv.appendChild(pastDiv);
    sidebarDiv.appendChild(todayDiv);
    sidebarDiv.appendChild(futureDiv);
    sidebarDiv.appendChild(projectListDiv);
    sidebarDiv.appendChild(addProjectDialog);

    containerDiv.appendChild(sidebarDiv);
}

