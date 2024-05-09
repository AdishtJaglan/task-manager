import { Todos } from './todo';
import { TodoUI } from './todoUI';
import clearMainContent from './clear';

export default function filterChoice() {
    const allTodos = document.querySelector(".all-todos");
    const weeklyTodo = document.querySelector(".weekly-todos");
    const monthlyTodo = document.querySelector(".monthly-todos");

    allTodos.addEventListener("click", () => {
        clearMainContent();

        const keys = Object.keys(localStorage);
        const todoKeys = keys.filter(key => !(key.includes("project")));

        for (let key of todoKeys) {
            let tdItem = JSON.parse(localStorage.getItem(key));

            TodoUI.displayTodo(tdItem, key);
        }
    });

    weeklyTodo.addEventListener("click", () => {
        Todos.filterByDueDate(7);
    });

    monthlyTodo.addEventListener("click", () => {
        Todos.filterByDueDate(31);
    });
}