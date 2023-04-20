import './home.css'

export default function home() {
const container = document.createElement('div');
container.classList.add("homepage");


const image = document.createElement('img');
image.classList.add("home","homepageImage");
image.setAttribute("alt","logo of the restaurant");
image.src="./logo.png";



container.appendChild(image);
return container;
}

