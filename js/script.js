/* Responsive Menu */
const burgerIcon = document.querySelector('#menu-toggle');
const menu = document.querySelector('#mobile-nav');

burgerIcon.onclick = function() {
    menu.classList.toggle('mobile-nav-active')
};

/* Active MEnu Items*/

window.addEventListener('scroll', () => {
    let scrollDistance = window.scrollY;

    console.log(scrollDistance);

    document.querySelectorAll('section').forEach((el, i) => {
        if(el.offsetTop - document.querySelector('.header').clientHeight <= scrollDistance) {
            document.querySelectorAll('nav a').forEach((el) => {
                if (el.classList.contains('nav-active')) {
                    el.classList.remove('active');
                }
            });

            document.querySelectorAll('nav li')[i].querySelector('a').classList.add('active')
        }
    });
});