// All the actions users can undertake
import { Todo } from './todo.js';
import { Project } from './project.js';
import { default as DB } from './db.js';

// Todo actions
// TODO Make every function return something

export function todoIsDone(todo) {
    todo.done = 'yes';
    return todo;
}

export function todoDelete(todo) {
    todo = null;
    return todo;
}

export function todoCreate(what, when) {
    const todo = new Todo(what, when);
    return todo;
}

export function todoEdit(todo, what, when, urgent) {
    // TODO: think of some defaults?
    todo.what = what;
    todo.when = when;
    todo.urgent = urgent;
    return todo;
}

// Lists

export function listTodosForProject(projectName) {
    const myProject = DB.getProject(projectName);
    return myProject.which;
}

// TODO
export function listTodosByDate() { }


export function listProjects() {
    return DB.listProjects();
}

// Project actions

export function projectCreate(name) {
    const project = new Project(name);
    DB.addProject(project);
    return project;
}

export function projectDelete(project) {
    // TODO remove all TODO's from project???
    DB.deleteProject(project);
    project = null;
}

export function projectEdit(project, name) {
    project.what = name;
}

export function projectAddTodo(project, todo) {
    project.add(todo);
}
