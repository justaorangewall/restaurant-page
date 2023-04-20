import './menu.css';
import food1 from './food/food1.png';
import food2 from './food/food2.png';
import food3 from './food/food3.png';
import food4 from './food/food4.png';
import food5 from './food/food5.png';
import food6 from './food/food6.png';
import food7 from './food/food7.png';
import food8 from './food/food8.png';

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

export default function menu() {
        const container = document.createElement('div');
    container.classList.add("menu");


    const contentElement = document.createElement('div');
    contentElement.classList.add("contentElement");
    contentElement.textContent="MENU";


    container.appendChild(prepFood(food1, "sample picture of food #1", "foodpic", "surely a tasty food $9.99" ));
    container.appendChild(prepFood(food2, "sample picture of food #2", "foodpic", "surely a tasty food $9.99" ));
    container.appendChild(prepFood(food3, "sample picture of food #3", "foodpic", "surely a tasty food $9.99" ));
    container.appendChild(prepFood(food4, "sample picture of food #4", "foodpic", "surely a tasty food $9.99" ));
    container.appendChild(prepFood(food5, "sample picture of food #1", "foodpic", "surely a tasty food $9.99" ));
    container.appendChild(prepFood(food6, "sample picture of food #2", "foodpic", "surely a tasty food $9.99" ));
    container.appendChild(prepFood(food7, "sample picture of food #3", "foodpic", "surely a tasty food $9.99" ));
    container.appendChild(prepFood(food8, "sample picture of food #4", "foodpic", "surely a tasty food $9.99" ));

return container;
}