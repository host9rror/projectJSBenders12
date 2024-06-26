import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';
import Swiper from 'swiper';
import { Navigation, Keyboard, Mousewheel } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

// ------Accordion--------

new Accordion('.accordion-container', {
  showMultiple: true,
  openOnInit: [0],
});


// ------Swiper--------

new Swiper('.about-swiper', {
  loop: true,
  direction: 'horizontal',
  allowSlideNext: true,
  setWrapperSize: true,
  modules: [Navigation, Keyboard, Mousewheel],
  simulateTouch: true,
  grabCursor: true,
  spaceBetween: 0,
  speed: 1000,
  slideActiveClass: 'about-swiper-slide-active',
  navigation: {
    nextEl: '.skills-swiper-button',
  },
  breakpoints: {
    320: {
      slidesPerView: 2,
    },
    375: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    1440: {
      slidesPerView: 6,
    },
  },
  keyboard: {
    enabled: true,
  },
  mousewheel: {
    invert: true,
  },
});