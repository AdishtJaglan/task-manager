import { TodoUI } from "./todoUI";

export class ProjectTodoUI {
    static display(projectName) {
        const formContainer = document.querySelector(".daily-todo");
        formContainer.innerHTML = `
            <p>${projectName} todos</p>
            <button class="btn-project-todo">add todo</button>
        `;
    }

    static displayTodos(projectName) {
        const keys = Object.keys(localStorage);
        const filteredKey = keys.filter(key => key.includes(`${projectName}`)); ``

        for (let key of filteredKey) {
            let ptItem = JSON.parse(localStorage.getItem(key));

            TodoUI.displayTodo(ptItem, key);
        }
    }
}