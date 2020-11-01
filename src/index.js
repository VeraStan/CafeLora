import './index.html';
import './style.css';

console.log('funguju!');

const nav = document.querySelector('nav');
const navLinks = document.querySelectorAll('nav a');
let ordered = false;

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
