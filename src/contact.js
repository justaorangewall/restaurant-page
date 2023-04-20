import './contact.css'

export default function menu() {
    const container = document.createElement('div');
container.classList.add("menu");


const contentElement = document.createElement('div');
contentElement.classList.add("contentElement");
contentElement.textContent="CONTACT";


container.appendChild(contentElement);
return container;
}