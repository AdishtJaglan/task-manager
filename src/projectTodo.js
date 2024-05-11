import { v1 as uuidv1 } from 'uuid';
import { format } from 'date-fns';
import { Todos } from "./todo";
import { TodoUI } from './todoUI';
import { ProjectTodoUI } from './projectTodoUI';
import clearMainContent from "./clear";
let projectName;

class ProjectTodo {
    constructor(name) {
        this.name = name;
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
            let formatDueDate = format(new Date(projectTodoDueDate.value), "dd-MM-yyyy");
            let projectTodoItem = Todos.newTodo(projectTodoTitle.value, projectTodoDescription.value, formatDueDate, projectTodoPriority.value, projectName);
            let projectTodoJSON = JSON.stringify(projectTodoItem);

            projectTodoTitle.value = "";
            projectTodoDescription.value = "";
            projectTodoDueDate.value = "";
            projectTodoPriority.value = "";

            projectTodoDialog.close();
            TodoUI.displayTodo(projectTodoItem, id);
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

            ProjectTodoUI.display(projectName);
            ProjectTodoUI.displayTodos(projectName);
            ProjectTodo.handleForms();
        }
    });
}