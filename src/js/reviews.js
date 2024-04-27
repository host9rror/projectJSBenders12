import Swiper from "swiper";
import axios from 'axios';

const Base_URL = 'https://portfolio-js.b.goit.study/api';

// document.addEventListener('DOMContentLoaded', async () => {}
    const BtnNext = document.querySelector('.btn-arrow-right');
    const BtnPrev = document.querySelector('.btn-arrow-left');

    async function getReviews() {
    try {
        const response = await axios.get(`${Base_URL}/reviews`);
    
        const reviews = response.data;
        renderReviews(reviews);

        let swiper = new Swiper('.reviews-swiper-container.swiper-container', {
        direction: 'horizontal',
        keyboard: {enabled: true, onlyInViewport: true},
            navigation: {
                nextEl: '.btn-arrow-right',
                prevEl: '.btn-arrow-left'},
 });
        BtnNext.addEventListener('click', function () {
            swiper.slideNext();
        });
        BtnPrev.addEventListener('click', function () {
            swiper.slidePrev();
        });
    } catch (error) {
        alert('An error occurred while getting reviews');
        document.querySelector('.swiper-wrapper').innerHTML = '<p>Not found</p>';
    }
}

function renderReviews(reviews) {
    const reviewsList = reviews.map(review =>
        `<div class="review">
        <li class="swiper-slide">
        <img src="${Base_URL}/${review.avatar_url}" alt="${review.author}">
        <h3>${review.author}</h3>
        <p>${review.review}</p>
        </li>
        </div>`).join('');
    
    document.querySelector('.swiper-wrapper').innerHTML = reviewsList;
}

getReviews();

