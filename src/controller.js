// All the actions users can undertake
import { isToday, isPast, isFuture } from 'date-fns';
import { Todo } from './todo';
import { Project } from './project';
import { default as DB } from './db';

// Todo actions
// TODO Make every function return something

export function todoIsDone(todo) {
  todo.done = 'Yes';
  return todo;
}

export function todoDelete(projectIndex, todoIndex) {
  const myProject = getProjectByNumber(projectIndex);
  myProject.delete(todoIndex);
  saveProjects('ns-todo-projects');
  return myProject;
}

export function todoCreate(what, when, project) {
  const todo = new Todo(what, when);
  project.add(todo);
  saveProjects('ns-todo-projects');
  return project;
}

export function todoEdit(todo, what, when, urgent) {
  // TODO: think of some defaults?
  todo.what = what;
  todo.when = when;
  todo.urgent = urgent;
  saveProjects('ns-todo-projects');
  return todo;
}

export function projectTodoMarkDone(todoIndex, projectIndex) {
  const project = getProjectByNumber(projectIndex);
  const todo = project.todo(todoIndex);
  todoIsDone(todo);
  saveProjects('ns-todo-projects');
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
    count += project.length;
  });
  return count;
}

export function getTodosForPeriod(date) {
  // return a list with all todos for today, future, past
  // TODO past also includes today (seconds ago)
  const dateCheck = function (when) {
    if (date === 'today') {
      if (isToday(when)) {
        return true;
      }
    } else if (date === 'future') {
      if (isFuture(when)) {
        return true;
      }
    } else if (date === 'past') {
      if (isPast(when) && !isToday(when)) {
        return true;
      }
    } else throw console.error('No or wrong date inserted');
  };
  const allTodos = getAllTodos();
  const todosForPeriod = [];
  allTodos.forEach((project, index) => {
    const projectTodos = allTodos[index][1];
    const periodTodos = projectTodos.filter((todo) => dateCheck(todo.when));
    todosForPeriod[index] = periodTodos;
  });
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
  });
  return allTodos;
}

export function listTodosByDate() {}

export function listProjects() {
  return DB.listProjects();
}

// Project actions

export function projectCreate(name) {
  const project = new Project(name);
  DB.addProject(project);
  saveProjects('ns-todo-projects');
  return project;
}

export function projectDelete(project) {
  DB.deleteProject(project);
  project = null;
  saveProjects('ns-todo-projects');
}

export function projectEdit(project, name) {
  project.what = name;
  saveProjects('ns-todo-projects');
}

export function projectAddTodo(project, todo) {
  project.add(todo);
  saveProjects('ns-todo-projects');
  return project;
}

export function getProjectByNumber(number) {
  return DB.getProjectByNumber(number);
}

export function getProjectCount() {
  return DB.getProjectCount();
}

export function saveProjects(data) {
  // get array with todo lists and project names
  const allTodos = getAllTodos();
  const storageArray = [];
  allTodos.forEach((project) => {
    const newProject = { what: project[0], todos: [] };
    // process todos
    project[1].forEach((todo) => {
      const myTodo = {
        what: todo.what,
        when: todo.when,
        urgent: todo.urgent,
        done: todo.done,
      };
      newProject.todos.push(myTodo);
    });
    storageArray.push(newProject);
  });
  localStorage.setItem(data, JSON.stringify(storageArray));
}

export function loadProjects(data) {
  DB.deleteProjects();
  const projectList = JSON.parse(localStorage.getItem(data));
  projectList.forEach((project) => {
    // initialize every project
    const newProject = projectCreate(project.what);
    project.todos.forEach((todo) => {
      // initialize every todo
      // todo: urgency etc.
      todoCreate(todo.what, Number(todo.when), newProject); // DEBUG
    });
  });
}
