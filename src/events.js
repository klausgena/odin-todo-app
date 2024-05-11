import * as controller from './controller';

// EVENT HANDLERS

function showTodoModal(target) {
  const modal = document.getElementById('add-todo-dialog');
  modal.showModal();
  const { projectIndex } = modal.parentElement.firstChild.dataset;
  modal.addEventListener('click', () => {
    if (target.className === 'add-todo-button') {
      const project = controller.getProjectByNumber(projectIndex);
      const what = document.querySelector('#add-todo-dialog form input').value;
      const when = Date.parse(
        document.querySelector('#add-todo-dialog form input+label+input').value,
      );
      if (!what || !when) {
        // TODO Add form validation
      } else {
        controller.todoCreate(what, when, project);
      }
      controller.redrawScreen(projectIndex);
    }
  });
}

// TODO function showProjectModal(target) {}

export function addTodoEvent(event) {
  const { target } = event;
  let modal = '';

  if (target.className === 'add-task') {
    modal = document.getElementById('add-main-todo-dialog');
    modal.showModal();
    modal.addEventListener('click', () => {
      if (event.target.className === 'add-todo-button') {
        const projectIndex = document.querySelector(
          '#add-main-todo-dialog form select',
        ).value;
        const project = controller.getProjectByNumber(projectIndex);
        const what = document.querySelector(
          '#add-main-todo-dialog form input',
        ).value;
        const when = Date.parse(
          document.querySelector('#add-main-todo-dialog form input+label+input')
            .value,
        );
        if (!what || !when) {
          //   TODO Add field validation
        } else {
          controller.todoCreate(what, when, project);
          controller.redrawScreen(projectIndex);
        }
      }
    });
  } else if (target.className === 'todo-add') {
    showTodoModal(target);
  }
}

export function showProjectTodosEvent(event) {
  const { target } = event;
  if (target.className === 'project-list-h3') {
    controller.redrawScreen(target.dataset.projectIndex);
  }
}

export function showTodosByDateEvent(event) {
  const { target } = event;
  if (target.className === 'date-view-today') {
    controller.redrawScreen(0, 'today');
  } else if (target.className === 'date-view-future') {
    controller.redrawScreen(0, 'future');
  } else if (target.className === 'date-view-past') {
    controller.redrawScreen(0, 'past');
  }
}

export function addProjectEvent(event) {
  // add a project in the GUI
  const { target } = event;
  if (target.id === 'projects-h2') {
    const modal = document.getElementById('add-project-dialog');
    modal.showModal();
    modal.addEventListener('click', () => {
      if (event.target.id === 'submit-new-project') {
        const what = document.querySelector(
          '#add-project-dialog form input',
        ).value;
        if (!what) {
          // TODO form validation
        } else {
          controller.projectCreate(what);
          const projectIndex = controller.getProjectCount();
          controller.redrawScreen(projectIndex - 1);
        }
      }
    });
  }
}

export function deleteTodoEvent(event) {
  // delete a todo from the GUI
  const { target } = event;
  if (
    target.className === 'iconoir-trash' &&
    target.parentNode.className === 'todo-delete'
  ) {
    // style hover
    const { projectIndex } = target.dataset;
    const { todoIndex } = target.dataset;
    controller.todoDelete(projectIndex, todoIndex);
    controller.redrawScreen(projectIndex);
  }
}

export function deleteProjectEvent(event) {
  // delete a project from the GUI
  // TODO ASK YES OR NO SURE?
  const { target } = event;
  if (target.className === 'iconoir-trash') {
    const index = target.parentNode.parentNode.dataset.projectIndex; // h3
    const project = controller.getProjectByNumber(index);
    controller.projectDelete(project);
    controller.redrawScreen();
  }
}

export function markDoneTodoEvent(event) {
  // mark a todo as done in the GUI
  const { target } = event;
  if (target.type === 'checkbox') {
    const { projectIndex } = target.dataset;
    const { todoIndex } = target.dataset;
    controller.projectTodoMarkDone(todoIndex, projectIndex);
    controller.redrawScreen(projectIndex);
  }
}

// TODO rewrite as css animation

export function addIcon(iconName) {
  const i = document.createElement('i');
  const iconClass = `iconoir-${iconName}`;
  i.setAttribute('class', iconClass);
  return i;
}

export function trashIconOnMouseOver(event) {
  const { target } = event;
  const parent = target.parentNode.nodeName;
  if (target.className === 'number' && parent === 'H3') {
    const trashIcon = addIcon('trash');
    const number = target.textContent;
    target.textContent = '';
    target.appendChild(trashIcon);
    target.addEventListener('mouseleave', () => {
      setTimeout(() => {
        target.textContent = number;
      }, 150);
    });
  }
}
