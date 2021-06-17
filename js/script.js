// JS-функция определения поддержки WebP
function testWebP(callback) {

    var webP = new Image();
    webP.onload = webP.onerror = function () {
        callback(webP.height == 2);
    };
    webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}

testWebP(function (support) {

    if (support == true) {
        document.querySelector('body').classList.add('webp');
    } else {
        document.querySelector('body').classList.add('no-webp');
    }
});

const menu = document.querySelector('.nav'),
    burger = document.querySelector('.burger'),
    overlay = document.querySelector('.overlay'),
    navMenu = document.querySelector('.nav__menu'),
    navBack = document.querySelector('.submenu__back');

burger.addEventListener('click', () => {
    menu.classList.add('open');
    overlay.classList.add('open');
});

overlay.addEventListener('click', () => {
    overlay.classList.remove('open');
    menu.classList.remove('open');
    navMenu.classList.remove('transformation');
});

navBack.addEventListener('click', () => {
    navMenu.classList.remove('transformation');
});

menu.addEventListener('click', (e) => {
    if (e.target.classList.contains('menu__link') && !e.target.classList.contains('menu__link-dropdown')) {
        e.preventDefault();
        menu.classList.remove('open');
        overlay.classList.remove('open');
    }
    if (e.target.classList.contains('menu__link-dropdown')) {
        e.preventDefault();
        e.target.closest('.nav__menu').classList.add('transformation');
        e.target.closest('.menu__item').querySelector('.submenu').classList.add('transformation');
    }
});
