import './menu.css';

export default function menu() {
    const container = document.createElement('div');
container.classList.add("menu");


const contentElement = document.createElement('div');
contentElement.classList.add("contentElement");
contentElement.textContent="MENU";


container.appendChild(contentElement);
return container;
}