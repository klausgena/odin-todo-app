// All the actions users can undertake
import { Todo } from './todo.js';
import { Project } from './project.js';
import { default as DB } from './db.js';
import { formatDistanceToNow, isToday, isPast, isFuture } from 'date-fns';

// Todo actions
// TODO Make every function return something

export function todoIsDone(todo) {
    todo.done = 'Yes';
    return todo;
}

export function todoDelete(project, todoIndex) {
    project.delete(todoIndex);
    return project;
}

export function todoCreate(what, when, project) {
    const todo = new Todo(what, when);
    project.add(todo);
    return project;
}

export function todoEdit(todo, what, when, urgent) {
    // TODO: think of some defaults?
    todo.what = what;
    todo.when = when;
    todo.urgent = urgent;
    return todo;
}

export function projectTodoMarkDone(todoIndex, projectIndex) {
    const project = getProjectByNumber(projectIndex);
    const todo = project.todo(todoIndex);
    todoIsDone(todo);
    console.log(`Todo ${todo.what} is marked as done.`);
}

// Lists

export function listTodosForProject(number) {
    const myProject = DB.getProjectByNumber(number);
    return myProject.which;
}

export function getNumberTodosForProject(projectIndex) {
    return listTodosForProject(projectIndex).length;
}

export function countTodosForPeriod(date) {
    const todos = getTodosForPeriod(date);
    let count = 0;
    todos.forEach((project) => {
        console.log(project);
        count = count + project.length;
    })
    console.log(count);
    return count;
}

export function getTodosForPeriod(date) {
    // return a list with all todos for today, future, past
    // TODO past also includes today (seconds ago)
    const dateCheck = function (when) {
        if (date === "today") {
            if (isToday(when)) {
                return true;
            }
        }
        else if (date === "future") {
            if (isFuture(when)) {
                return true;
            }
        }
        else if (date === "past") {
            if (isPast(when)) {
                return true;
            }
        }
        else throw console.error("No or wrong date inserted");
    };
    const allTodos = getAllTodos();
    const todosForPeriod = [];
    allTodos.forEach((project, index) => {
        const projectTodos = allTodos[index][1];
        const periodTodos = projectTodos.filter((todo) => dateCheck(todo.when));
        todosForPeriod[index] = periodTodos;

    })
    return todosForPeriod;
}

// TODO

export function getAllTodos() {
    // gets all todos as twodimensional array starting with the 
    // name of each project
    const allTodos = [];
    const projects = listProjects();
    projects.forEach((project, index) => {
        const todos = [project.what, listTodosForProject(index)];
        allTodos.push(todos);
    })
    return allTodos;
}

export function listTodosByDate() {

}


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
    DB.deleteProject(project);
    project = null;
}

export function projectEdit(project, name) {
    project.what = name;
}

export function projectAddTodo(project, todo) {
    project.add(todo);
    return project;
}

export function getProjectByNumber(number) {
    return DB.getProjectByNumber(number);
}

export function getProjectCount() {
    return DB.getProjectCount();
}