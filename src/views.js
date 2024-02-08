// All views users can interact with
function dateView () {
    // returns the todo list, ordered by date and divided into 4 categories:
    // Today, This week, This Month and Later
}

function todayView() {
    // returns the list of todos for today
}

function projectsView() {
    // returns the list of all projects
    // and also the degree of 'doneness' of the project
}

function projectTodosView(project) {
    // returns a list of all todos for a certain project
}

export function todoView(todo) {
    // returns a todo with all the details
    const todoString = `\n**Todo** \nwhat: ${todo.what} \nwhen: ${todo.when} \nurgency: ${todo.urgent} \ndone?: ${todo.done}`; 
    console.log(todoString);
}
