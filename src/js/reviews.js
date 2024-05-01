import Swiper from 'swiper';
import axios from 'axios';

const Base_URL = 'https://portfolio-js.b.goit.study/api';
let swiper;
let allReviews = [];
let currentIndex = 0;
let visibleCards;

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

async function renderReviews(startIndex) {
  const endIndex = Math.min(startIndex + visibleCards, allReviews.length);
  const reviewsSlice = allReviews.slice(startIndex, endIndex);

  const reviewsList = reviewsSlice.map(review =>
    `<li class="reviews-item">
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
    </li>`).join('');

  document.querySelector('.reviews-list').innerHTML = reviewsList;

  const BtnNext = document.querySelector('.btn-arrow-right');
  const BtnPrev = document.querySelector('.btn-arrow-left');

  BtnNext.disabled = endIndex >= allReviews.length;
  BtnPrev.disabled = startIndex === 0;

  const cards = document.querySelectorAll('.reviews-item');
  cards.forEach((card, index) => {
    card.classList.toggle('hidden', index >= visibleCards);
  });
}


async function showMoreReviews() {
  visibleCards += 2;
  renderReviews(currentIndex);
}

async function initSwiper() {
  const reviews = await fetchReviews();
  allReviews = reviews;

  setVisibleCards();

  renderReviews(currentIndex);

  swiper = new Swiper('.reviews-swiper-container', {
    direction: 'horizontal',
    keyboard: { enabled: true, onlyInViewport: true },
    touch: true,
    slidesPerView: visibleCards,
    spaceBetween: 20,
    navigation: {
      nextEl: '.btn-arrow-right',
      prevEl: '.btn-arrow-left',
    },
    breakpoints: {
      375: { slidesPerView: 1 },
      768: { slidesPerView: 2 },
      1280: { slidesPerView: 4, spaceBetween: 0 },
      1440: { slidesPerView: 4, spaceBetween: 0 }
    }
  });

  const BtnNext = document.querySelector('.btn-arrow-right');
  const BtnPrev = document.querySelector('.btn-arrow-left');

  BtnNext.addEventListener('click', () => {
    if (currentIndex < allReviews.length - visibleCards) {
      currentIndex++;
      renderReviews(currentIndex);
      swiper.update();
      swiper.slideNext();
    }
  });

  BtnPrev.addEventListener('click', () => {
    if (currentIndex > 0) {
      currentIndex--;
      renderReviews(currentIndex);
      swiper.update();
      swiper.slidePrev();
    }
  });

  swiper.on('reachEnd', () => { BtnNext.disabled = true; });
  swiper.on('reachBeginning', () => { BtnPrev.disabled = true; });
  swiper.on('slideChange', () => {
    BtnNext.disabled = false;
    BtnPrev.disabled = false;
  });
}

function setVisibleCards() {
  if (window.innerWidth >= 1280) {
    visibleCards = 4;
  } else if (window.innerWidth >= 769) {
    visibleCards = 3;
  } else if (window.innerWidth >= 376) {
    visibleCards = 2;
  } else {
    visibleCards = 1;
  }
}

document.addEventListener('DOMContentLoaded', initSwiper);

window.addEventListener('resize', () => {
  setVisibleCards();
  renderReviews(currentIndex);
});
