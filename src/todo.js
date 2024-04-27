const todoList = [];

class todos {
    constructor(title, description, dueDate, priority) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
    }

    static newTodo(title, description, dueDate, priority) {
        const todo = new todos(title, description, dueDate, priority);
        todoList.push(todo);

        return todoList;
    }

    static displayTodo(title, description, dueDate, priority) {
        const todoContainer = document.querySelector("#todos");
        const newTodoContainer = document.createElement("div");

        newTodoContainer.innerHTML = `
        <div>
            <p>${title}</p>
            <p>${description}</p>
            <p>${dueDate}</p>
            <button>test</button>
        </div>
        `
        todoContainer.appendChild(newTodoContainer);
    }
}

export default function makeToDo() {
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

        todos.newTodo(todoTitle.value, todoDescription.value, todoDueDate.value, todoPriority.value);
        todos.displayTodo(todoTitle.value, todoDescription.value, todoDueDate.value, todoPriority.value);
    });
}