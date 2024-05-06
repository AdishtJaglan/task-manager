import { v1 as uuidv1 } from 'uuid';
import { Todos } from "./todo";
import clearMainContent from "./clear";
let projectName;

class ProjectTodo {
    constructor(name) {
        this.name = name;
    }

    static display(projectName) {
        const formContainer = document.querySelector(".daily-todo");
        formContainer.innerHTML = `
            <p>${projectName} todos</p>
            <button class="btn-project-todo">add todo</button>
        `;
    }

    static displayTodos(projectName) {
        const keys = Object.keys(localStorage);
        const filteredKey = keys.filter(key => key.includes(`${projectName}`));

        for (let key of filteredKey) {
            let ptItem = JSON.parse(localStorage.getItem(key));

            Todos.displayTodo(ptItem, key);
        }
    }

    static handleForms() {
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
            e.stopImmediatePropagation();

            const projectTodoTitle = document.querySelector("#project-todo-title");
            const projectTodoDueDate = document.querySelector("#project-todo-dueDate");
            const projectTodoDescription = document.querySelector("#project-todo-description");
            const projectTodoPriority = document.querySelector("#project-todo-priority");

            let id = `${projectName}-${uuidv1()}`;
            let projectTodoItem = Todos.newTodo(projectTodoTitle.value, projectTodoDescription.value, projectTodoDueDate.value, projectTodoPriority.value);
            let projectTodoJSON = JSON.stringify(projectTodoItem);

            Todos.displayTodo(projectTodoItem, id);
            localStorage.setItem(id, projectTodoJSON);
        });
    }
}

export default function projectTodo() {
    const projectTitleContainer = document.querySelector(".project-names");

    projectTitleContainer.addEventListener("click", (e) => {
        if (e.target.classList.contains("project-title")) {
            e.stopImmediatePropagation();

            projectName = e.target.dataset.name;

            clearMainContent();

            ProjectTodo.display(projectName);
            ProjectTodo.displayTodos(projectName);
            ProjectTodo.handleForms();
        }
    });
}