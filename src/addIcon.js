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
    const iconClose = new Image();

    iconClose.src = closeIcon;
    iconClose.classList.add("project-close-icon");

    projectDialogHeader.appendChild(iconClose);
}

export default function addIcons() {
    addLogo();
    addCloseIcon();
}