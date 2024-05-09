import todoIcon from './images/todo.png';
import closeIcon from './images/close.svg';

function addLogo() {
    const head = document.querySelector("nav p:nth-child(1)");
    const icon = new Image();

    icon.src = todoIcon;
    icon.classList.add("todo-icon");
    head.textContent = "ToDo";

    head.appendChild(icon);
}

function addCloseIcon() {
    const projectDialogHeader = document.querySelector(".project-header");
    const todoDialogHeaeder = document.querySelector(".header-container");

    const projectIconClose = new Image();
    const todoIconClose = new Image();

    todoIconClose.src = closeIcon;
    todoIconClose.classList.add("btn-close-todo");

    projectIconClose.src = closeIcon;
    projectIconClose.classList.add("project-close-icon");

    projectDialogHeader.appendChild(projectIconClose);
    todoDialogHeaeder.appendChild(todoIconClose);
}

export default function addIcons() {
    addLogo();
    addCloseIcon();
}