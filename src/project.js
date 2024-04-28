import { v1 as uuidv1, validate as uuidValidate } from 'uuid';

class Project {
    constructor(name) {
        this.name = name;
    }

    static newProject(name) {
        const proj = new Project(name);

        return proj;
    }

    static displayProject({ name }, id) {
        const projectNameContainer = document.querySelector(".project-names");
        const projectContainer = document.createElement("div");

        projectContainer.innerHTML = `
            <div>
                <button data-name=${name} class="project-title">${name}</button>
                <button class="btn-delete-project" data-id="${id}">delete</button>
            </div>
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

    static deleteProject(id) {
        localStorage.removeItem(id);

        const projectToDelete = document.querySelector(`[data-id="${id}]"`);
        if (projectToDelete) {
            projectToDelete.closest("div").remove();
        }

        this.reloadProject();
    }

    static reloadProject() {
        const projectNameContainer = document.querySelector(".project-names");

        projectNameContainer.innerHTML = " ";

        this.populateProject();
    }
}

export default function makeProject() {
    Project.populateProject();

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

        let id = `project-${uuidv1()}`;
        let projectItem = new Project(projectName.value);
        let projectItemJSON = JSON.stringify(projectItem);

        Project.displayProject(projectItem, id);
        localStorage.setItem(id, projectItemJSON);

        projectName.value = "";
        projectDialog.close();
    });

    document.addEventListener("click", (e) => {
        if (e.target.classList.contains("btn-delete-project")) {
            const projectId = e.target.dataset.id;

            Project.deleteProject(projectId);
        }
    });
}