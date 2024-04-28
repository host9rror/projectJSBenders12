const hamburgerBtn = document.getElementById('menu-open_btn');
const mobileMenu = document.getElementById('mobile-menu');
const closedMobileMenuBtn = document.getElementById('close-mobile-menu');
const headerMenu = document.querySelector('.header-menu');
const headerMenuOpenBtn = document.querySelector('.menu-text');
const letsWorkTogetherBtn = document.querySelector('.order-btn');

const scrollToElement = (elementId, duration) => {
  const newId = elementId.substring(1);
  const element = document.getElementById(newId);

  if (!element) {
    return;
  }
  mobileMenu.classList.remove('is-mobile-menu-open');
  headerMenu.classList.remove('header-menu_visible');

  const headerY = document
    .getElementsByTagName('header')[0]
    .getBoundingClientRect().top;
  const elementY = element.getBoundingClientRect().top;

  const scrollDistance = elementY - headerY;

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
}

const getHref = event => {
  event.preventDefault();

  if (event.target.tagName === 'A') {
    const href = event.target.getAttribute('href');
    scrollToElement(href, 2);
  }
};

headerMenu.addEventListener('click', getHref);
mobileMenu.addEventListener('click', getHref);
letsWorkTogetherBtn.addEventListener('click', getHref);

headerMenuOpenBtn.addEventListener('click', () => {
  headerMenu.classList.toggle('header-menu_visible');
});

hamburgerBtn.addEventListener('click', () => {
  mobileMenu.classList.add('is-mobile-menu-open');
});

closedMobileMenuBtn.addEventListener('click', () => {
  mobileMenu.classList.remove('is-mobile-menu-open');
});
