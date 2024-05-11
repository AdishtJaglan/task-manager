import deleteIcon from './images/delete-icon-2.svg';

export class ProjectUI {
    static displayProject({ name }, id) {
        const projectNameContainer = document.querySelector(".project-names");
        const projectContainer = document.createElement("div");

        projectContainer.innerHTML = `
            <div class="project-names-container">
                <button data-name=${name} class="project-title">${name}</button>
                <img src="${deleteIcon}" alt="delete button" data-namefordeletion=${name} data-id="${id}" class="btn-delete-project">
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

    static reloadProject() {
        const projectNameContainer = document.querySelector(".project-names");

        projectNameContainer.innerHTML = " ";

        this.populateProject();
    }
}