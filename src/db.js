// Container for all projects and todos
// unique CLASS instance SINGLETON
let instance;
let projects = [];
class DB {
	constructor() {
		if (instance) {
			throw new Error("New instance cannot be created!");
		}
		instance = this;
	}
	addProject(project) {
		projects.push(project);
		console.log(`Project ${project.what} successfully added to DB!`);
	}
	deleteProject(project) {
		let index = projects.indexOf(project);
		if (index !== -1) {
			projects.splice(index, 1);
			console.log(`Project ${project.what} successfully removed from DB!`);
		}

	}
	listProjects() {
		return projects;
	}

	existsProject(name) {
		if (projects.find(project => project.what === name)) {
			return true;
		}
		return false;
	}

	getProjectByNumber(number) {
		return projects[number];
	}

	getProjectCount() {
		return projects.length;
	}

	saveProjects() {
		localStorage.setItem('ns-todo-app', JSON.stringify(projects));
		console.log(JSON.parse(JSON.stringify(projects)));
		console.log('Projects saved.');
	}

	loadProjects() {
		projects = JSON.parse(localStorage.getItem('ns-todo-app'));
		return projects;
	}
}
let DBInstance = Object.freeze(new DB());

export default DBInstance;
