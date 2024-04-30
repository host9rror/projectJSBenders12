// import Swiper from 'swiper';
// import 'swiper/swiper-bundle.css';

document.addEventListener('DOMContentLoaded', function () {
  const swiper = new Swiper('.project', {
    speed: 400,
    spaceBetween: 100,
    direction: 'horizontal',
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
