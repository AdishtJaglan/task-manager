import { v1 as uuidv1 } from 'uuid';
import { Todos } from "./todo";
import clearMainContent from "./clear";

class ProjectTodo {
    constructor(name) {
        this.name = name;
    }

    display() {
        const formContainer = document.querySelector(".daily-todo");
        formContainer.innerHTML = `
            <p>${this.name} todos</p>
            <button class="btn-project-todo">add todo</button>
        `;
    }

    displayTodo() {
        const keys = Object.keys(localStorage);
        const filteredKey = keys.filter(key => key.includes(`${this.name}`));

        for (let key of filteredKey) {
            let ptItem = JSON.parse(localStorage.getItem(key));

            Todos.displayTodo(ptItem, key);
        }
    }

    handleForms() {
        const projectTodoContainer = document.querySelector("#todos");
        const projectTitle = document.createElement("p");

        projectTitle.textContent = this.name;
        projectTodoContainer.appendChild(projectTitle);

        const makeProjectToDoBtn = document.querySelector(".btn-project-todo");
        const btnCloseProjectTodo = document.querySelector(".btn-close-project-todo");
        const projectTodoDialog = document.querySelector(".project-todo-dialog");
        const projectTodoForm = document.querySelector(".project-todo-form");

        makeProjectToDoBtn.addEventListener("click", () => {
            projectTodoDialog.showModal();
        });

        btnCloseProjectTodo.addEventListener("click", () => {
            projectTodoDialog.close();
        });

        projectTodoForm.addEventListener("submit", (e) => {
            e.preventDefault();

            const projectTodoTitle = document.querySelector("#project-todo-title");
            const projectTodoDueDate = document.querySelector("#project-todo-dueDate");
            const projectTodoDescription = document.querySelector("#project-todo-description");
            const projectTodoPriority = document.querySelector("#project-todo-priority");

            let id = `${this.name}-${uuidv1()}`;
            let projectTodoItem = Todos.newTodo(projectTodoTitle.value, projectTodoDescription.value, projectTodoDueDate.value, projectTodoPriority.value)
            let projectTodoJSON = JSON.stringify(projectTodoItem);

            Todos.displayTodo(projectTodoItem, id);
            localStorage.setItem(id, projectTodoJSON);
        });
    }
}

export default function projectTodo() {
    const btn = document.querySelectorAll(".project-title");

    btn.forEach(button => {
        button.addEventListener("click", (e) => {
            let projectName = e.target.dataset.name;

            clearMainContent();

            const projectTodoInstance = new ProjectTodo(projectName);
            projectTodoInstance.display();
            projectTodoInstance.displayTodo();
            projectTodoInstance.handleForms();
        });
    });
}