import './app.js';
import * as views from './views.js';
// import * as events from './events.js';

const mainDiv = document.getElementById("content");
const h1 = document.createElement("h1");
h1.textContent = "My Projects";
const ul = views.redrawScreen();