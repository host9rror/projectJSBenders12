import Swiper from 'swiper';
import axios from 'axios';

const Base_URL = 'https://portfolio-js.b.goit.study/api';
let swiper;
let allReviews = [];
let currentIndex = 0;

async function fetchReviews() {
  try {
    const response = await axios(`${Base_URL}/reviews`);
    return response.data;
  } catch (error) {
    console.error('Error fetching reviews:', error);
    alert('An error occurred while getting reviews');
    return [];
  }
}

function renderReviews(startIndex) {
  const endIndex = Math.min(startIndex + 4, allReviews.length);
  const reviewsSlice = allReviews.slice(startIndex, endIndex);

  const reviewsList = reviewsSlice.map(review =>
    `<ul class="reviews-list">
      <li class="swiper-slide reviews-item">
        <div class="reviews-card">
          <img
            class="photo"
            src="${review.avatar_url}" 
            alt="photo of ${review.author}"
            width="48"
            height="48"
          />
          <div class="div-reviews-info">
            <h3 class="reviews-person-name">${review.author}</h3>
            <p class="reviews-person-info">${review.review}</p>
          </div>
        </div>
      </li>
    </ul>`).join('');

  document.querySelector('.reviews-wrapper').innerHTML = reviewsList;


  const BtnNext = document.querySelector('.btn-arrow-right');
  const BtnPrev = document.querySelector('.btn-arrow-left');

  if (endIndex >= allReviews.length) {
    BtnNext.disabled = true; 
  } else {
    BtnNext.disabled = false;
  }

  if (startIndex === 0) {
    BtnPrev.disabled = true; 
  } else {
    BtnPrev.disabled = false;
  }
  // для стилізації всіх слайдів, щоб не вилазили
  // const swiperSlides = document.querySelectorAll('.swiper-slide');
  // swiperSlides.forEach(slide => {
  //   slide.style.display = 'inline-block'; 
  //   slide.style.overflow = 'hidden';
  //   slide.style.whiteSpace = 'normal'; 
  // });
  // 
}

async function initSwiper() {
  const reviews = await fetchReviews();
  allReviews = reviews;

  renderReviews(currentIndex);

  swiper = new Swiper('.reviews-swiper-container', {
    direction: 'horizontal',
    keyboard: { enabled: true, onlyInViewport: true },
    touch: true,
    slidesPerView: 4,
    spaceBetween: 20,
    navigation: {
      nextEl: '.btn-arrow-right',
      prevEl: '.btn-arrow-left',
    },
  });

  const BtnNext = document.querySelector('.btn-arrow-right');
  const BtnPrev = document.querySelector('.btn-arrow-left');

  BtnNext.addEventListener('click', function () {
    console.log("Next button clicked");
    if (currentIndex < allReviews.length - 4) {
      currentIndex += 1;
      renderReviews(currentIndex);
      swiper.update();
      swiper.updateSize();
      swiper.slideNext();
    }
  });
  BtnPrev.addEventListener('click', function () {
    console.log("Prev button clicked");
    if (currentIndex > 0) {
      currentIndex -= 1;
      renderReviews(currentIndex);
      swiper.update();
      swiper.updateSize();
      swiper.slidePrev();
    }
  });

  swiper.on('reachEnd', function () {
    BtnNext.disabled = true;
  });
  swiper.on('reachBeginning', function () {
    BtnPrev.disabled = true;
  });
  swiper.on('slideChange', function () {
    BtnNext.disabled = false;
    BtnPrev.disabled = false;
  });
}

initSwiper();