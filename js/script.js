/* Responsive Menu */
const burgerIcon = document.querySelector('#menu-toggle');
const menu = document.querySelector('#mobile-nav');

burgerIcon.onclick = function() {
    menu.classList.toggle('mobile-nav-active')
};

const navItem = document.querySelectorAll('.nav__item');

navItem.onclick = navItem.classList.add('nav__item-active');

console.log(navItem);