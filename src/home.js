import './home.css'
import food1 from './food/food1.png';
import food2 from './food/food2.png';
import food3 from './food/food3.png';
import food4 from './food/food4.png';
import homelogo from './home/logo.png'

function setElement(elementtag, text, classString ) {
    const element = document.createElement(elementtag); // quote text
    element.textContent = text;
    element.classList.add(classString);
    return element;
}

function setImageElement( srclink, altText, classString ) {

    const image = document.createElement('img'); // logo image
    image.classList.add('home',classString);
    image.setAttribute('alt',altText);
    image.src=srclink;
    return image;
}

function prepFood ( srclink, altText, classString, text ) {
    const foodCard = document.createElement('div');
    foodCard.classList.add('foodCard');

    const image = document.createElement('img'); // logo image
    image.classList.add('home',classString);
    image.setAttribute('alt',altText);
    image.src=srclink;
    foodCard.appendChild(image);

    const foodText = document.createElement('div');
    foodText.textContent = text;
    foodCard.appendChild(foodText);

    return foodCard;
}

export default function home() {
    const container = document.createElement('div');
    container.classList.add('homepage');

    const image = setImageElement( homelogo, 'logo of the restaurant', 'homepageImage'); // logo

    const herotext = setElement('div', 'Come enjoy foods that are DEFINITELY delicious, the foods are DEFINITELY not poisonous.', 'herotext' ) // hero Text

    const quoteText = document.createElement('div');
    quoteText.classList.add('home','quoteContainer');
    quoteText.appendChild(setElement('article', 'The food was truly SOMETHIG!', 'quoteText' )); // quote text
    quoteText.appendChild(setElement('article', 'The food really made me reflect on my life...', 'quoteText' ));


    const foodDiv = document.createElement('div');
    foodDiv.classList.add('home','foodDisplay');
    foodDiv.appendChild(prepFood(food1, "sample picture of food #1", "foodpic", "surely a tasty food" ));
    foodDiv.appendChild(prepFood(food2, "sample picture of food #2", "foodpic", "surely a tasty food" ));
    foodDiv.appendChild(prepFood(food3, "sample picture of food #3", "foodpic", "surely a tasty food" ));
    foodDiv.appendChild(prepFood(food4, "sample picture of food #4", "foodpic", "surely a tasty food" ));

    container.appendChild(image);
    container.appendChild(herotext);
    container.appendChild(quoteText);
    container.appendChild(foodDiv);
    
    return container;
}

