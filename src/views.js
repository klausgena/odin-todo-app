import { formatDistanceToNow, isToday } from 'date-fns';

/**
 * Renders the list of projects in the sidebar
 */
export function renderProjectList(projects) {
  const projectUl = document.querySelector('#projects-h2 + ul');
  // first empty existing content
  projectUl.textContent = '';
  projects.forEach((project) => {
    const projectLi = document.createElement('li');
    const projectH3 = document.createElement('h3');
    projectLi.setAttribute('class', 'project-list-li');
    projectH3.setAttribute('class', 'project-list-h3');
    projectH3.textContent = project.what;
    projectLi.appendChild(projectH3);
    projectUl.appendChild(projectLi);
  });
}

/**
 * Render the title of the main div
 */
export function renderTitle(title) {
  // first empty existing content
  document.querySelector('#main-tasks-div ul h2 span').remove();
  const titleH2 = document.querySelector('#main-tasks-div ul h2');
  const titleSpan = document.createElement('span');
  titleSpan.textContent = title;
  titleH2.append(titleSpan);
}

/**
 * Render the todos in the main div
 */
export function simpleDueDate(todoWhen) {
  // show today, tomorrow, in 7 days, soon, next week, etc.
  // under the todo description in the main field. Returns a string.
  if (isToday(todoWhen)) {
    return 'today';
  }
  return formatDistanceToNow(todoWhen, { addSuffix: true });
}

export function renderTodos(todos) {
  const mainUl = document.querySelector('#main-tasks-div ul');
  // first empty existing content (avoid duplicates)
  document.querySelectorAll('#main-tasks-div ul li').forEach((e) => e.remove());
  todos.forEach((todo) => {
    const todoLi = document.createElement('li');
    const todoSpan = document.createElement('span');
    const dateSpan = document.createElement('span');
    const checkBox = document.createElement('input');
    checkBox.setAttribute('type', 'checkbox');
    todoSpan.setAttribute('class', 'todo-description');
    dateSpan.setAttribute('class', 'date-span');
    todoSpan.textContent = todo.what;
    dateSpan.textContent = simpleDueDate(todo.when);
    todoLi.appendChild(checkBox);
    todoLi.appendChild(todoSpan);
    todoLi.appendChild(dateSpan);
    mainUl.appendChild(todoLi);
  });
}

// // helper functions

// function createNumberSpan(number) {
//   const span = document.createElement('span');
//   span.setAttribute('class', 'number');
//   span.textContent = number;
//   return span;
// }

// export function addIcon(iconName) {
//   const i = document.createElement('i');
//   const iconClass = `iconoir-${iconName}`;
//   i.setAttribute('class', iconClass);
//   return i;
// }

// export function fillProjectSelect(projects) {
//   // TODO REFACTOR: only fill the project select on every load
//   // fill the select with all existing projects
//   projects.forEach((project, index) => {
//     const option = document.createElement('option');
//     option.value = index;
//     option.textContent = project.what;
//     selectProject.appendChild(option);
//   });
//   form.appendChild(selectProject);
// }

// export function dateView(date, dateTodos) {
//   // date view of the todo list: three options:
//   // if date === today / future / past
//   // If clicked, show todo's for those dates
//   // in the main content div
//   const projectWhat = `Todos For ${date.toUpperCase()}`;
//   // todo: get the h2 from the index. static file
//   h2.textContent = projectWhat;
//   // todo: get the ul from the static index.html
//   dateTodos.forEach((projectIndex, index) => {
//     const todos = projectIndex;
//     if (todos === undefined) {
//       // TODO Do something
//     } else if (todos.length > 0) {
//       todos.forEach((todo, myIndex) => {
//         const ulTodo = todoView(todo, myIndex, index); // add project Index
//         ul.appendChild(ulTodo);
//       });
//     }
//   });
// }

// export function projectsView(projects) {
//   // returns the list of all projects
//   // TODO REFACTOR const projects = controller.listProjects();
//   //  TODO get the existing UL
//   projects.forEach((project, index, todoNumber) => {
//     const li = document.createElement('li');
//     const h3 = document.createElement('h3');
//     const leftSpan = document.createElement('span');
//     const projectWhat = document.createTextNode(project.what);
//     leftSpan.setAttribute('data-project-index', index);
//     leftSpan.appendChild(projectWhat);
//     h3.appendChild(leftSpan);
//     h3.setAttribute('class', 'project-list-h3');
//     h3.appendChild(
//       // TODO REFACTOR createNumberSpan(controller.getNumberTodosForProject(index)),
//       createNumberSpan(todoNumber),
//     );
//     li.setAttribute('class', 'project-list-li');
//     h3.setAttribute('data-project-index', index);
//     li.appendChild(h3);
//     ul.appendChild(li);
//   });
//   return ul;
// }

// export function todoView(todo, todoIndex, projectIndex) {
//   // returns a todo with all the details
//   // CAn this be refactored?
//   const li = document.createElement('li');
//   const dateSpan = document.createElement('span');
//   const uiSpan = document.createElement('span');
//   const contentSpan = document.createElement('span');
//   const checkBox = document.createElement('input');
//   const checked = todo.done === 'Yes';
//   const trashIcon = addIcon('trash');
//   const editIcon = addIcon('edit');

//   checkBox.type = 'checkbox';
//   checkBox.setAttribute('data-todo-index', todoIndex);
//   if (projectIndex) {
//     checkBox.setAttribute('data-project-index', projectIndex);
//   }
//   checkBox.checked = checked;
//   trashIcon.setAttribute('data-todo-index', todoIndex);
//   trashIcon.setAttribute('data-project-index', projectIndex);
//   uiSpan.appendChild(trashIcon);
//   uiSpan.setAttribute('class', 'todo-delete');
//   contentSpan.setAttribute('class', 'todo-description');
//   contentSpan.textContent = todo.what;
//   dateSpan.setAttribute('class', 'date-span');
//   li.appendChild(checkBox);
//   li.appendChild(contentSpan);

//   const span = document.createElement('span');
//   span.textContent = simpleDueDate(todo.when);
//   dateSpan.appendChild(span);

//   const changeSpan = document.createElement('span');
//   changeSpan.appendChild(editIcon);
//   changeSpan.setAttribute('class', 'todo-edit');
//   changeSpan.setAttribute('data-todo-el-index', todoIndex);
//   dateSpan.appendChild(changeSpan);
//   dateSpan.appendChild(uiSpan);
//   li.appendChild(dateSpan);

//   return li;
// }

// export function projectTodosView(index, project, projectTodos) {
//   // returns a list of all todos for a certain project
//   // TODO refactor const myProject = controller.getProjectByNumber(index);
//   const myProject = project;
//   // TODO REfactor  const todos = controller.listTodosForProject(index);
//   // TODO refactor get the static h2
//   const projectWhat = document.createTextNode(myProject.what);
//   h2.appendChild(projectWhat);
//   h2.setAttribute('data-project-index', index);
//   // todo get the UL in static
//   ul.appendChild(h2);
//   if (todos.length > 0) {
//     todos.forEach((todo, myIndex) => {
//       const ulTodo = todoView(todo, myIndex, index);
//       ul.appendChild(ulTodo);
//     });
//   } else {
//     // TODO no todos for this project, add somewhere?
//   }
// }
