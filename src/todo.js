const todoList = [];

export default class todos {
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
}