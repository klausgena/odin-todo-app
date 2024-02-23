import * as controller from './controller.js';

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
    projects.forEach(project => {
        const li = document.createElement("li");
        const h2 = document.createElement('h2');
        h2.textContent = project.what;
        li.appendChild(h2);
        // TODO append list with all project todos
        const todos = projectTodosView(project);
        if (todos) {
            li.appendChild(todos);
        }
        else {
            const string = "No todos for this project";
            const p = document.createElement('p');
            p.textContent = string;
            li.appendChild(p);
        }
        ul.appendChild(li);
    });
    return ul;
}

export function projectTodosView(project) {
    // returns a list of all todos for a certain project
    const todos = controller.listTodosForProject(project.what);
    if (todos.length > 0) {
        const ul = document.createElement('ul');
        todos.forEach(todo => {
            const ulTodo = todoView(todo);
            ul.appendChild(ulTodo);
        });
        return ul;
    } else {
        console.log(`No todos for project ${project.what}`);
        // to check if there are todos?
        return false;
    }
}

export function todoView(todo) {
    // returns a todo with all the details
    const ul = document.createElement('ul');
    const ulWhat = document.createElement('ul');
    const liWhen = document.createElement('li');
    const liUrgent = document.createElement('li');
    const liDone = document.createElement('li');
    const h3 = document.createElement('h3');

    h3.textContent = todo.what;
    liWhen.textContent = todo.when;
    liUrgent.textContent = todo.urgent;
    liDone.textContent = todo.done;

    ulWhat.appendChild(liWhen);
    ulWhat.appendChild(liUrgent);
    ulWhat.appendChild(liDone);

    ul.appendChild(h3);
    ul.appendChild(ulWhat);

    return ul;
}
