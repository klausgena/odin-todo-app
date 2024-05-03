class Project {
  #what;

  #which = [];

  constructor(what) {
    this.#what = what;
    // error if such a project already exists
  }

  add(todo) {
    this.#which.push(todo);
  }

  delete(index) {
    // delete a todo according to index
    this.#which.splice(index, 1);
  }

  todo(index) {
    return this.#which[index];
  }

  get count() {
    return this.#which.length;
  }

  get what() {
    return this.#what;
  }

  get which() {
    return this.#which;
  }
}

export default Project;
