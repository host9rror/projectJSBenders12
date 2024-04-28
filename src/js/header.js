const hamburgerBtn = document.getElementById('menu-open_btn');
const mobileMenu = document.getElementById('mobile-menu');
const closedMobileMenuBtn = document.getElementById('close-mobile-menu');


hamburgerBtn.addEventListener('click', () => {
    mobileMenu.classList.add('is-mobile-menu-open');
});

closedMobileMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.remove('is-mobile-menu-open');
});
