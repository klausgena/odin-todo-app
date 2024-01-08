import { Todo } from './todo.js';
import { Project } from './project.js';

// Create a default project
const defaultProject = new Project("My TODO List");

// Create a dummy todo

const defaultTodo = new Todo('Create app', 'this week', 'Yes');
// add default todo to default project

defaultProject.add(defaultTodo);
