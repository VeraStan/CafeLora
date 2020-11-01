import './index.html';
import './style.css';
import Layer from './Layer';

console.log('funguju!');

/* navigace */

const nav = document.querySelector('nav');
const navLinks = document.querySelectorAll('nav a');

document.querySelector('#nav-btn').addEventListener('click', () => {
  nav.classList.toggle('nav-closed');
});

navLinks.forEach((navLink) => {
  navLink.addEventListener('click', () => {
    nav.classList.toggle('nav-closed');
  });
});

const drinkCup = document.querySelector('.drink__cup');
let orderButton = document.querySelector('.order-btn');

/* objednávka:  */

let ordered = false;

orderButton.addEventListener('click', () => {
  drinkCup.classList.toggle('drink__cup--selected');
  if (ordered === true) {
    ordered = false;
    orderButton.textContent = 'Objednat';
  } else {
    ordered = true;
    orderButton.textContent = 'Zrušit';
  }
});

/* ingredience jako komponenty */

const ingredients = [
  { color: '#feeeca', label: 'mléčná pěna' },
  { color: '#fed7b0', label: 'teplé mléko' },
  { color: '#613916', label: 'espresso' },
];

const drinkInfo = document.querySelector('.drink__info');

drinkInfo.innerHTML += Layer(ingredients[0]);

/* const drinkInfo = document.querySelector(".drink__info")
const ingredients = [

] */
