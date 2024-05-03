class Todo {
  #what;

  #when;

  #isUrgent;

  #isFinished;

  #project;

  constructor(
    what,
    when,
    project = 'Default',
    isUrgent = 'No',
    isFinished = 'No',
  ) {
    this.#what = what;
    this.#when = when;
    this.#project = project;
    this.#isUrgent = isUrgent;
    this.#isFinished = isFinished;
  }
  // getters

  get what() {
    return this.#what;
  }

  set what(what) {
    this.#what = what;
  }

  get when() {
    return this.#when;
  }

  set when(when) {
    this.#when = Date.parse(when);
  }

  get urgent() {
    return this.#isUrgent;
  }

  set urgent(yesNo) {
    this.#isUrgent = yesNo;
  }

  get done() {
    return this.#isFinished;
  }

  set done(yesNo) {
    this.#isFinished = yesNo;
  }

  get project() {
    return this.#project;
  }
}

export default Todo;
