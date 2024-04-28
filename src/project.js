import { todos } from "./todo";
import { v1 as uuidv1, validate as uuidValidate } from 'uuid';

class project extends todos {
    constructor(name, title = " ", description = " ", dueDate = " ", priority = " ") {
        super(title, description, dueDate, priority);
        this.name = name;
    }

    static newProject(name, title = " ", description = " ", dueDate = " ", priority = " ") {
        const proj = new project(name, title, description, dueDate, priority);

        return proj;
    }

    static displayProject(projObj, id) {
        const projectNameContainer = document.querySelector(".project-names");
        const projectContainer = document.createElement("div");

        projectContainer.innerHTML = `
            <button onclick="showTodo('${id}')">${projObj.name}</button>
        `

        projectNameContainer.appendChild(projectContainer);
    }

    static populateProject() {
        const ids = Object.keys(localStorage);
        const projectIds = ids.filter(id => id.includes("project"));

        for (let key of projectIds) {
            const lsProjectItem = JSON.parse(localStorage.getItem(key));

            this.displayProject(lsProjectItem, key);
        }
    }
}

export default function makeProject() {
    project.populateProject();

    const makeProjectButton = document.querySelector(".projects button");
    const projectDialog = document.querySelector(".project-dialog");
    const btnCloseProject = document.querySelector(".btn-close-project");
    const projectForm = document.querySelector(".project-form");

    makeProjectButton.addEventListener("click", () => {
        projectDialog.showModal();
    });

    btnCloseProject.addEventListener("click", () => {
        projectDialog.close();
    });

    projectForm.addEventListener("submit", (e) => {
        e.preventDefault();

        const projectName = document.querySelector("#name");

        let id = uuidv1();
        let projectItem = new project(projectName.value);
        project.displayProject(projectItem);

        let projectItemJSON = JSON.stringify(projectItem);
        localStorage.setItem(`project-${id}`, projectItemJSON);
    });
}