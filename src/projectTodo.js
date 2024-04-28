import clearMainContent from "./clear";
import { v1 as uuidv1 } from 'uuid';
import { todos } from "./todo";

function handleForms(name) {
    const formContainer = document.querySelector(".daily-todo");
    formContainer.innerHTML = `
        <p>${name} todos</p>
        <button class="btn-project-todo">add todo</button>
    `;
}

function displayProjectTodo(name) {
    const keys = Object.keys(localStorage);
    const filteredKey = keys.filter(key => key.includes(`${name}`));

    for (let key of filteredKey) {
        let ptItem = JSON.parse(localStorage.getItem(key));

        todos.displayTodo(ptItem, key);
    }
}

export default function projectTodo() {
    const btn = document.querySelectorAll(".project-title");

    btn.forEach(button => {
        button.addEventListener("click", (e) => {
            let projectName = e.target.dataset.name;

            clearMainContent();
            displayProjectTodo(projectName);
            handleForms(projectName);

            const projectTodoContainer = document.querySelector("#todos");
            const projectTitle = document.createElement("p");

            projectTitle.textContent = projectName;
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

                let id = `${projectName}-${uuidv1()}`;
                let projectTodoItem = todos.newTodo(projectTodoTitle.value, projectTodoDescription.value, projectTodoDueDate.value, projectTodoPriority.value)
                let projectTodoJSON = JSON.stringify(projectTodoItem);

                todos.displayTodo(projectTodoItem, id);
                localStorage.setItem(id, projectTodoJSON);
            });
        });
    });


}

