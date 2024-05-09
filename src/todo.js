import { v1 as uuidv1, validate as uuidValidate } from 'uuid';
import { format, isWithinInterval } from 'date-fns';
import { TodoUI } from './todoUI';
import clearMainContent from './clear';


export class Todos {
    constructor(title, description, dueDate, priority, projectName) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.projectName = projectName;
    }

    static newTodo(title, description, dueDate, priority, projectName) {
        const todo = new Todos(title, description, dueDate, priority, projectName);

        return todo;
    }

    static deleteTodo(id) {
        const item = JSON.parse(localStorage.getItem(id));

        if (item.projectName != 0) {
            localStorage.removeItem(id);
            const todoToDelete = document.querySelector(`[data-id="${id}]"`);

            if (todoToDelete) {
                todoToDelete.closest("div").remove();
            }

            TodoUI.reloadProjectTodos(item.projectName);
        } else {
            localStorage.removeItem(id);
            const todoToDelete = document.querySelector(`[data-id="${id}]"`);

            if (todoToDelete) {
                todoToDelete.closest("div").remove();
            }

            TodoUI.reloadTodos();
        }
    }

    static filterByDueDate(range) {
        clearMainContent();

        const today = new Date();
        const endDate = new Date();
        const filteredTodos = [];

        endDate.setDate(today.getDate() + range);

        const keys = Object.keys(localStorage);
        const todoKeys = keys.filter(key => !(key.includes("project")));

        for (let key of todoKeys) {
            const todoString = localStorage.getItem(key);

            if (todoString) {
                const todo = JSON.parse(todoString);

                const dueDateParts = todo.dueDate.split('-');
                const dueDate = new Date(dueDateParts[2], dueDateParts[1] - 1, dueDateParts[0]);

                if (isWithinInterval(dueDate, { start: today, end: endDate })) {
                    filteredTodos.push({ id: key, todo });
                }
            }
        }

        filteredTodos.forEach(({ id, todo }) => {
            TodoUI.displayTodo(todo, id);
        });
    }

}

export default function makeToDo() {
    TodoUI.populateTodos();

    const makeToDoButton = document.querySelector(".daily-make-todo");
    const btnCloseTodo = document.querySelector(".btn-close-todo");
    const todoDialog = document.querySelector(".todo-dialog");
    const todoForm = document.querySelector(".todo-form");

    makeToDoButton.addEventListener("click", () => {
        todoDialog.showModal();
    });

    btnCloseTodo.addEventListener("click", () => {
        todoDialog.close();
    });

    // submitting form and storing data local storage
    todoForm.addEventListener("submit", (e) => {
        e.preventDefault();

        const todoTitle = document.querySelector("#todo-title");
        const todoDueDate = document.querySelector("#todo-dueDate");
        const todoDescription = document.querySelector("#todo-description");
        const todoPriority = document.querySelector("#todo-priority");

        let id = uuidv1();
        let formattedDueDate = format(new Date(todoDueDate.value), "dd-MM-yyyy");
        let item = Todos.newTodo(todoTitle.value, todoDescription.value, formattedDueDate, todoPriority.value, 0);
        let itemJSON = JSON.stringify(item);

        TodoUI.displayTodo(item, id);
        localStorage.setItem(`${id}`, itemJSON);

        todoTitle.value = "";
        todoDescription.value = "";
        todoDueDate.value = "";
        todoPriority.value = "";
        todoDialog.close();
    });

    // listening for delete button & expand view click
    document.addEventListener("click", (e) => {
        if (e.target.classList.contains("btn-delete-todo")) {
            const todoId = e.target.dataset.id;

            Todos.deleteTodo(todoId);
        } else if (e.target.classList.contains("btn-expand-todo")) {
            const todoId = e.target.dataset.infoid;

            TodoUI.displayTodoInfo(todoId);
        }
    });
}