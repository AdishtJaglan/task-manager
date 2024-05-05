import { v1 as uuidv1, validate as uuidValidate } from 'uuid';
import deleteIcon from './images/delete-icon-2.svg';
import expandIcon from './images/expand.svg';

export class Todos {
    constructor(title, description, dueDate, priority) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
    }

    static newTodo(title, description, dueDate, priority) {
        const todo = new Todos(title, description, dueDate, priority);

        return todo;
    }

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
                <img src="${expandIcon}" class="btn-expand-todo">
            </div>
        </div>
        `
        todoContainer.appendChild(newTodoContainer);
    }

    static populateTodos() {
        for (let key in localStorage) {
            if (uuidValidate(key)) {
                const lsItem = JSON.parse(localStorage.getItem(key));

                this.displayTodo(lsItem, key);
            }
        }
    }

    static deleteTodo(id) {
        localStorage.removeItem(id);
        const todoToDelete = document.querySelector(`[data-id="${id}]"`);

        if (todoToDelete) {
            todoToDelete.closest("div").remove();
        }

        this.reloadTodos();
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

export default function makeToDo() {
    Todos.populateTodos();

    const makeToDoButton = document.querySelector(".daily-todo button");
    const btnCloseTodo = document.querySelector(".btn-close-todo");
    const todoDialog = document.querySelector(".todo-dialog");
    const todoForm = document.querySelector(".todo-form");

    makeToDoButton.addEventListener("click", () => {
        todoDialog.showModal();
    });

    btnCloseTodo.addEventListener("click", () => {
        todoDialog.close();
    });

    todoForm.addEventListener("submit", (e) => {
        e.preventDefault();

        const todoTitle = document.querySelector("#todo-title");
        const todoDueDate = document.querySelector("#todo-dueDate");
        const todoDescription = document.querySelector("#todo-description");
        const todoPriority = document.querySelector("#todo-priority");

        let id = uuidv1();
        let item = Todos.newTodo(todoTitle.value, todoDescription.value, todoDueDate.value, todoPriority.value);
        let itemJSON = JSON.stringify(item);

        Todos.displayTodo(item, id);
        localStorage.setItem(`${id}`, itemJSON);

        todoTitle.value = "";
        todoDescription.value = "";
        todoDueDate.value = "";
        todoPriority.value = "";
        todoDialog.close();
    });

    document.addEventListener("click", (e) => {
        if (e.target.classList.contains("btn-delete-todo")) {
            const todoId = e.target.dataset.id;

            Todos.deleteTodo(todoId);
        }
    });
}