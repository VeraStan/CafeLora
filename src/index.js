import './index.html';
import './style.css';

console.log('funguju!');

const nav = document.querySelector('nav');
const navlinks = document.querySelectorAll('nav a');

document.querySelector('#nav-btn').addEventListener('click', () => {
  nav.classList.toggle('nav-closed');
});

navlinks.forEach((navlink) => {
  navlink.addEventListener('click', () => {
    nav.classList.toggle('nav-closed');
  });
});
