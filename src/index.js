import _ from "lodash";
import './index.css';
import home, {  test } from './home';
import contact from './contact';
import menu from './menu';

const pages = {
    home : home(),
    contact : contact(),
    menu : menu()
};

const contentContainer = document.getElementById('content');
const heading = document.createElement('div'); heading.classList.add("header");
const logoButton = document.createElement('button');
const navigateMenu = document.createElement('div');
const menuButton = document.createElement('button');
const contactButton = document.createElement('button');



navigateMenu.classList.add('navigation-buttons');
logoButton.textContent = "WE SELL FOOD";
logoButton.setAttribute('id', 'home');

menuButton.textContent = "MENU"
menuButton.setAttribute('id', 'menu');

contactButton.textContent = "CONTACT"
contactButton.setAttribute('id', 'contact');

heading.appendChild(logoButton);
navigateMenu.appendChild(menuButton);
navigateMenu.appendChild(contactButton);
heading.appendChild(navigateMenu);

const container = document.createElement('div');
container.classList.add("container");
container.textContent="CONTENT DIV TO LOAD JS"
contentContainer.appendChild(heading);
contentContainer.appendChild(container); 
const buttons = document.querySelectorAll('.header button');
container.replaceChildren(home());


buttons.forEach( button => {
    button.addEventListener('click',(event) => {
        const funcNamee = button.getAttribute('id');
        container.replaceChildren(pages[`${funcNamee}`]);
    })

})

