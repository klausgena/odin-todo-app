class Todo {
    #what;
    #when;
    #isUrgent;
#isFinished;
    
    constructor(what, when, isUrgent, isFinished = 'No') {
	this.#what = what;
	this.#when = when;
	this.#isUrgent = isUrgent;
	console.log(`Successfully created todo ${what}`);
    }
    get what() {
	return this.#what;
    }
}
export { Todo };
