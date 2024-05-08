import todoIcon from './images/todo.png';

export default function addIcons() {
    const head = document.querySelector("nav p:nth-child(1)");
    const icon = new Image();
    icon.src = todoIcon;
    icon.classList.add("todo-icon");
    head.textContent = "ToDo";

    head.appendChild(icon);
}