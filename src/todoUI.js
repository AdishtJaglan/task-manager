import { Todos } from './todo';
import { validate as uuidValidate } from 'uuid';
import deleteIcon from './images/delete-icon-2.svg';
import expandIcon from './images/expand.svg';

export class TodoUI {
    static displayTodo(todoObj, id) {
        const todoContainer = document.querySelector("#todos");
        const newTodoContainer = document.createElement("div");
        const style = getPriorityColor(todoObj.priority);

        newTodoContainer.innerHTML = `
        <div class="todo-card">
            <div class="todo-headings">  
                <div class="heading">
                <p class="todo-title">${todoObj.title}</p>
                <button class="todo-priority" style="background-color:${style}"></button>
                </div>
                <p class="todo-dueDate">${todoObj.dueDate}</p>
            </div>
            
            <div class="todo-actions">
                <img src="${deleteIcon}" alt="delete button" data-id="${id}" class="btn-delete-todo">
                <img src="${expandIcon}" data-infoId="${id}" class="btn-expand-todo">
            </div>
        </div>
        `
        todoContainer.appendChild(newTodoContainer);
    }

    static displayTodoInfo(id) {
        const lsItem = JSON.parse(localStorage.getItem(id));
        const infoDialog = document.createElement("dialog");
        const body = document.querySelector("body");
        const style = getPriorityColor(lsItem.priority);

        infoDialog.classList.add("info-dialog");
        infoDialog.innerHTML = `
        <div class="info-container">
            <div class="info-heading">
                <p>${lsItem.title}</p>
                <button class="todo-priority" style="background-color:${style}"></button>
            </div>
        
            <p>${lsItem.dueDate}</p>
            <p>${lsItem.description}</p>
            <button class="btn-info-close">close</button>
        </div>
        `;

        body.appendChild(infoDialog);
        infoDialog.showModal();

        const closeInfoBtn = infoDialog.querySelector(".btn-info-close");
        closeInfoBtn.addEventListener("click", () => {
            infoDialog.close();
            infoDialog.remove();
        });
    }

    static populateTodos() {
        for (let key in localStorage) {
            if (uuidValidate(key)) {
                const lsItem = JSON.parse(localStorage.getItem(key));

                this.displayTodo(lsItem, key);
            }
        }
    }

    static populateProjectTodos(projectName) {
        const keys = Object.keys(localStorage);
        const filteredKey = keys.filter(key => key.includes(`${projectName}`));

        for (let key of filteredKey) {
            let ptItem = JSON.parse(localStorage.getItem(key));

            this.displayTodo(ptItem, key);
        }
    }

    static reloadProjectTodos(projectName) {
        const todoContainer = document.querySelector("#todos");
        todoContainer.innerHTML = " ";

        this.populateProjectTodos(projectName);
    }

    static reloadTodos() {
        const todoContainer = document.querySelector("#todos");
        todoContainer.innerHTML = " ";

        this.populateTodos();
    }
}


function getPriorityColor(priority) {
    switch (priority) {
        case "high":
            return "#d00000";
        case "medium":
            return "#FFA500";
        default:
            return "#aacc00";
    }
}