const hamburgerBtn = document.getElementById('menu-open_btn');
const mobileMenu = document.getElementById('mobile-menu');
const closedMobileMenuBtn = document.getElementById('close-mobile-menu');
const headerMenu = document.querySelector('.header-menu');
const headerMenuOpenBtn = document.querySelector('.menu-text');
const letsWorkTogetherBtn = document.querySelector('.order-btn');
const background = document.querySelector('.background');
const headerLogo = document.querySelector('.header-logo');

const setHeaderBgHide = () => {
  background.classList.remove('background-visible');
  headerMenu.classList.remove('header-menu_visible');
};

const setMobileAndHeaderMenuHide = () => {
  mobileMenu.classList.remove('is-mobile-menu-open');
  headerMenu.classList.remove('header-menu_visible');
};

const scrollToElement = (elementId, duration) => {
  const newId = elementId.substring(1);
  const element = document.getElementById(newId);
  
  if (!element) {
    return;
  }

  const headerY = document
    .getElementsByTagName('header')[0]
    .getBoundingClientRect().top;
  const elementY = element.getBoundingClientRect().top;
  const scrollDistance = elementY - headerY;

  if (scrollDistance < 2000) {
    duration = 0.8
  }

  const scrollTime = duration * 1000;
  const steps = Math.ceil(scrollDistance / 20);
  let currentY = window.scrollY;

  const intervalId = setInterval(() => {
    currentY += scrollDistance / steps;
    currentY = Math.min(Math.max(0, currentY), scrollDistance);
    window.scrollTo(0, currentY);

    if (currentY === scrollDistance) {
      clearInterval(intervalId);
    }
  }, scrollTime / steps);
};

const getHref = event => {
  event.preventDefault();

  if (event.target.tagName === 'A') {
    const href = event.target.getAttribute('href');
    scrollToElement(href, 2);
  }
};

headerMenu.addEventListener('click', event => {
  setMobileAndHeaderMenuHide();
  background.classList.toggle('background-visible');
  getHref(event);
});

mobileMenu.addEventListener('click', event => {
  setMobileAndHeaderMenuHide();
  getHref(event);
});

letsWorkTogetherBtn.addEventListener('click', event => {
  setHeaderBgHide();
  getHref(event);
});

headerMenuOpenBtn.addEventListener('click', () => {
  headerMenu.classList.toggle('header-menu_visible');
  background.classList.toggle('background-visible');
});

hamburgerBtn.addEventListener('click', () => {
  mobileMenu.classList.add('is-mobile-menu-open');
});

closedMobileMenuBtn.addEventListener('click', () => {
  mobileMenu.classList.remove('is-mobile-menu-open');
});

background.addEventListener('click', setHeaderBgHide);
headerLogo.addEventListener('click', setHeaderBgHide);
