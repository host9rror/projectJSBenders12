// import Swiper from 'swiper';
// import 'swiper/swiper-bundle.css';

document.addEventListener('DOMContentLoaded', function () {
  const swiper = new Swiper('.project', {
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
    nextEl: '.about-swiper-button-next',
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

  const nextButton = document.querySelector('.arrow-right');
  const prevButton = document.querySelector('.arrow-left');

  nextButton.addEventListener('click', () => {
    swiper.slideNext();
  });

  prevButton.addEventListener('click', () => {
    swiper.slidePrev();
  });

  function hideInactiveSlideContent(swiper) {
    swiper.slides.map((slide, index) => {
      const projectContent = slide.querySelector('.project-content');
      projectContent.style.display = index === swiper.activeIndex ? 'flex' : 'none';
    });
  }

  hideInactiveSlideContent(swiper);

  swiper.on('slideChange', () => {
    hideInactiveSlideContent(swiper);
  });
});
