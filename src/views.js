import * as controller from './controller.js';

// All views users can interact with
export function dateView () {
    // returns the todo list, ordered by date and divided into 4 categories:
    // Today, This week, This Month and Later
}

export function todayView() {
    // returns the list of todos for today
}

export function projectsView() {
    // returns the list of all projects
    console.log(controller.listProjects());
    // TODO and also the degree of 'doneness' of the project
}

export function projectTodosView(project) {
    // returns a list of all todos for a certain project
    const todos = controller.listTodosForProject(project);
    console.log(todos);
}

export function todoView(todo) {
    // returns a todo with all the details
    const todoString = `\n**Todo** \nwhat: ${todo.what} \nwhen: ${todo.when} \nurgency: ${todo.urgent} \ndone?: ${todo.done}`; 
    console.log(todoString);
}
