class Project {
    #what;
    #which = [];

    constructor(what) {
	this.#what = what;
	console.log(`Successfully created project ${what}.`);
    }
    add(todo) {
	this.#which.push(todo);
	console.log(`Successfully added todo ${todo.what} to project ${this.#what}`);
	console.log(`The project now contains ${this.countx} todo items.`);
    }
    get count() {
	return this.#which.length;
    }
}
export { Project };
