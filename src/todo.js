// TODO give each todo an unique ID
// TODO add each todo to a certain project (else: Default

class Todo {
    #what;
    #when;
    #isUrgent;
#isFinished;
#project;
    
    constructor(what, when, project="Default", isUrgent = 'No', isFinished = 'No') {
	this.#what = what;
	this.#when = when;
	this.#project = project;
	this.#isUrgent = isUrgent;
	console.log(`Successfully created todo ${what}`);
    }
    // getters
    get what() {
	return this.#what;
    }
    get when() {
	return this.#when;
    }
    get urgent() {
	return this.#isUrgent;
    }
    get done() {
	return this.#isFinished;
    }
    // setters
    set what(what) {
	this.#what = what;
    }
    set when(when) {
	this.#when = when;
    }
    set urgent(urgent) {
	this.#isUrgent = urgent;
    }
    set done() {
	this.#isFinished = 'Yes';
	return this.#isFinished;
}
export { Todo };
