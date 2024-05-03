// Container for all projects and todos
// unique CLASS instance SINGLETON
let instance;
const projects = [];
class DB {
  constructor() {
    if (instance) {
      throw new Error('New instance cannot be created!');
    }
    this.projects = projects;
    instance = this;
  }

  addProject(project) {
    this.projects.push(project);
  }

  deleteProject(project) {
    const index = this.projects.indexOf(project);
    if (index !== -1) {
      this.projects.splice(index, 1);
    }
  }

  listProjects() {
    return this.projects;
  }

  existsProject(name) {
    if (this.projects.find((project) => project.what === name)) {
      return true;
    }
    return false;
  }

  getProjectByNumber(number) {
    return this.projects[number];
  }

  getProjectCount() {
    return this.projects.length;
  }

  deleteProjects() {
    this.projects.splice(0, projects.length);
  }
}
const DBInstance = Object.freeze(new DB());

export default DBInstance;
