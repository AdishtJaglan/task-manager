import { v1 as uuidv1, validate as uuidValidate } from 'uuid';

export class todos {
    constructor(title, description, dueDate, priority) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
    }

    static newTodo(title, description, dueDate, priority) {
        const todo = new todos(title, description, dueDate, priority);

        return todo;
    }

    static displayTodo(todoObj, id) {
        const todoContainer = document.querySelector("#todos");
        const newTodoContainer = document.createElement("div");

        newTodoContainer.innerHTML = `
        <div>
            <p>${todoObj.title}</p>
            <p>${todoObj.description}</p>
            <p>${todoObj.dueDate}</p>
            <button>${todoObj.priority}</button>
            <button data-id="${id}" class="btn-delete-todo">delete</button>
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

export default function makeToDo() {
    todos.populateTodos();

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
        let item = todos.newTodo(todoTitle.value, todoDescription.value, todoDueDate.value, todoPriority.value);
        todos.displayTodo(item, id);

        let itemJSON = JSON.stringify(item);
        localStorage.setItem(`${id}`, itemJSON);
    });

    document.addEventListener("click", (e) => {
        if (e.target.classList.contains("btn-delete-todo")) {
            const todoId = e.target.dataset.id;

            todos.deleteTodo(todoId);
        }
    });
}