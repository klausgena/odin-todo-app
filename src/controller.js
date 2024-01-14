// All the actions users can undertake
import { Todo } from './todo.js';
import { Project } from './project.js';

// Todo actions

function todoIsDone (todo) {
    todo.done;
}

function todoDelete (todo) {
    todo = null;
}

function todoCreate (what, when) {
    const todo = new Todo(what, when);
    return todo;
}

function todoEdit (todo, what, when, urgent) {
    todo.what = what;
    todo.when = when;
    todo.urgent = urgent;    
}


// Project actions

function projectCreate () {}

function projectDelete () {}

function projectEdit () {}
