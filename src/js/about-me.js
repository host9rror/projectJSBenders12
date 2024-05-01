import Accordion from 'accordion-js';



import Swiper from 'swiper';
import { Navigation, Keyboard, Mousewheel } from 'swiper/modules';
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';

// ------Accordion--------

new Accordion('.accordion-container');


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