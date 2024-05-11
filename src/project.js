import { v1 as uuidv1 } from 'uuid';
import { ProjectUI } from './projectUI';

class Project {
    constructor(name) {
        this.name = name;
    }

    static newProject(name) {
        const proj = new Project(name);

        return proj;
    }

    static deleteProject(id, name) {
        const projectKey = Object.keys(localStorage);
        const filteredProjectKeys = projectKey.filter(keys => keys.includes(`${name}`));

        for (let keys of filteredProjectKeys) {
            localStorage.removeItem(keys);
        }

        localStorage.removeItem(id);

        const projectToDelete = document.querySelector(`[data-id="${id}]"`);
        if (projectToDelete) {
            projectToDelete.closest("div").remove();
        }

        window.location.reload();
        ProjectUI.reloadProject();
    }
}

export default function makeProject() {
    ProjectUI.populateProject();

    const makeProjectButton = document.querySelector(".daily-make-project");
    const projectDialog = document.querySelector(".project-dialog");
    const btnCloseProject = document.querySelector(".project-close-icon");
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

        ProjectUI.displayProject(projectItem, id);
        localStorage.setItem(id, projectItemJSON);

        projectName.value = "";
        projectDialog.close();
    });

    document.addEventListener("click", (e) => {
        if (e.target.classList.contains("btn-delete-project")) {
            const projectId = e.target.dataset.id;
            const projectName = e.target.dataset.namefordeletion;

            Project.deleteProject(projectId, projectName);
        }
    });
}