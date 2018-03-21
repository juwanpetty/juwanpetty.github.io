feather.replace();

let bodyWrapper = document.querySelector('.js-body-wrapper');

let menuIcons = document.querySelectorAll('.js-menu-icon');
let menu = document.querySelector('.js-menu');

let footer = document.querySelector('footer');
let overlay = document.querySelector('.overlay');

function toggleMenu() {
    menu.classList.toggle('hidden');
    bodyWrapper.classList.toggle('hidden');
    console.log('toggled...');
}

for (let i = 0; i < menuIcons.length; i++) {
    menuIcons[i].addEventListener('click', (e) => {
        e.preventDefault();
        toggleMenu();
    });
}

window.onscroll = function(ev) {
    if ((window.innerHeight + window.scrollY) >= document.body.scrollHeight) {
        // you're at the bottom of the page
        console.log("Bottom of page");
        footer.classList.remove('hidden');
        overlay.classList.remove('hidden');
        bodyWrapper.classList.add('footer-visible');
    } else if ((window.innerHeight + window.scrollY) >= (document.body.scrollHeight - 100)) {
        console.log('Not on bottom');
        footer.classList.add('hidden');
        overlay.classList.add('hidden');
        bodyWrapper.classList.remove('footer-visible');
    }
};

