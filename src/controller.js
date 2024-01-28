// All the actions users can undertake
import { Todo } from './todo.js';
import { Project } from './project.js';

// Todo actions

export function todoIsDone (todo) {
    todo.done;
}

export function todoDelete (todo) {
    todo = null;
}

export function todoCreate (what, when) {
    const todo = new Todo(what, when);
    return todo;
}

export function todoEdit (todo, what, when, urgent) {
    // TODO: think of some defaults?
    todo.what = what;
    todo.when = when;
    todo.urgent = urgent;    
}

// Lists


// TODO
export function listTodos () {}
// TODO
export function listProjects () {}

// Project actions

export function projectCreate (name) {
    const project = new Project(name);
    return project;
}

export function projectDelete (project) {
    project = null;
}

export function projectEdit (project, name) {
    project.what = name;
}

