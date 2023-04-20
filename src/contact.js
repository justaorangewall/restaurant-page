import './contact.css'
import owner from './owner.png';

function setElement(elementtag, text ) {
    const element = document.createElement(elementtag); // quote text
    element.textContent = text;
    return element;
}

export default function menu() {
    const container = document.createElement('div');
container.classList.add("contact");


const headshot = document.createElement('img');
headshot.classList.add("ownerpic");
headshot.setAttribute('src',owner);
headshot.setAttribute('alt', 'head shot of the owner');

const contactInfo = document.createElement('div');
contactInfo.classList.add("contactInfo");

contactInfo.appendChild(setElement('div', 'Address: 111 OverHere Rd' ));
contactInfo.appendChild(setElement('div', 'Name: JustAOrangeWall'));
contactInfo.appendChild(setElement('div', 'Age: S-E-C-R-E-T' ));
contactInfo.appendChild(setElement('div', 'email: owner@restaurant.com'));
contactInfo.appendChild(setElement('div', 'Tel: 123-1234-1234 '));

container.appendChild(headshot);
container.appendChild(contactInfo);
return container;
}