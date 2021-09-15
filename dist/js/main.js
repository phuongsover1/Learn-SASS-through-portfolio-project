const menuBtn = document.querySelector('.menu-btn');
const hamburger = document.querySelector('.menu-btn__burger');
const nav = document.querySelector('.nav');
const navMenu = document.querySelector('.menu-nav');
const menuItems = document.querySelectorAll('.menu-nav-item');
menuBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
    hamburger.classList.toggle('open');
    nav.classList.toggle('open');
    navMenu.classList.toggle('open');
    menuItems.forEach(item => item.classList.toggle('open'));
}