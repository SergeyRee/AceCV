/* Responsive Menu */
const burgerIcon = document.querySelector('#menu-toggle');
const menu = document.querySelector('#mobile-nav');

burgerIcon.onclick = function() {
    menu.classList.toggle('mobile-nav-active')
};
