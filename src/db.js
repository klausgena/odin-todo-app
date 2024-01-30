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
    addProject (project) {
	projects.push(project);
	console.log(`Project ${project.what} successfully added to DB!`);
    }
    deleteProject (project) {
	let index = projects.indexOf(project);
	if (index !== -1) {
	    projects.splice(index, 1);
	    console.log(`Project ${project.what} successfully removed from DB!`);
	}
	
    }
    listProjects () {
	console.log("Projects: ");
	projects.forEach((project) => console.log(project.what));
	console.log("***");
    }
}
    let DBInstance = Object.freeze(new DB());
    
    export default DBInstance;
