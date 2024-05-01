import Swiper from 'swiper';
import { Navigation, Keyboard, Mousewheel } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const swiper = new Swiper('.project', {
  loop: true,
  slidesPerGroup: 1,
  direction: 'horizontal',
  allowSlideNext: true,
  setWrapperSize: true,
  modules: [Navigation, Keyboard, Mousewheel],
  simulateTouch: true,
  grabCursor: true,
  slidesPerView: 1,
  spaceBetween: 0,
  speed: 1000,
  navigation: {
    nextEl: '.project-arrow-next',
    prevEl: '.project-arrow-prev',
  },
  keyboard: {
    enabled: true,
  },
  mousewheel: {
    invert: true,
  },
});

const nextButton = document.querySelector('.project-arrow-next');
const prevButton = document.querySelector('.project-arrow-prev');

nextButton.addEventListener('click', () => {
  swiper.slideNext();
});

prevButton.addEventListener('click', () => {
  swiper.slidePrev();
});

function hideInactiveSlideContent(swiper) {
  swiper.slides.map((slide, index) => {
    const projectContent = slide.querySelector('.project-content');
    projectContent.style.display =
      index === swiper.activeIndex ? 'flex' : 'none';
  });
}

hideInactiveSlideContent(swiper);

swiper.on('slideChange', () => {
  hideInactiveSlideContent(swiper);
});
