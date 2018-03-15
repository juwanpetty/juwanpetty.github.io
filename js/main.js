feather.replace();

let menuIcon = document.querySelector('.js-menu-icon');
let menu = document.querySelector('.js-menu');

function toggleMenu() {
    menu.classList.toggle('');
}

menuIcon.addEventListener('click', (e) => {
    e.preventDefault();
    toggleMenu();
});