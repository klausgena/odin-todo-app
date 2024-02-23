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
        console.log(`The project now contains ${this.count} todo items.`);
    }
    delete(todo) {
        this.#which.splice(index, 1);
        console.log(`Successfully deleted todo ${todo.what} from project ${this.#what}`);
        console.log(`The project now contains ${this.count} todo items.`);
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
export { Project };
