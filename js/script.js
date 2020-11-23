/* Responsive Menu */
const burgerIcon = document.querySelector('#menu-toggle');
const menu = document.querySelector('#mobile-nav');

burgerIcon.onclick = function() {
    menu.classList.toggle('mobile-nav-active')
};
/* /Responsive Menu */

/* Active MEnu Items*/
window.addEventListener('scroll', () => {
    let scrollDistance = window.scrollY;

    console.log(scrollDistance);

    document.querySelectorAll('section').forEach((el, i) => {
        if(el.offsetTop - document.querySelector('.header').clientHeight <= scrollDistance) {
            document.querySelectorAll('nav a').forEach((el) => {
                if (el.classList.contains('nav__link-active')) {
                    el.classList.remove('nav__link-active');
                }
            });

            document.querySelectorAll('nav li')[i].querySelector('a').classList.add('nav__link-active')
        }
    });
});
/* /Active MEnu Items*/