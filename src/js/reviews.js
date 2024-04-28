import Swiper from 'swiper';
import axios from 'axios';


const Base_URL = 'https://portfolio-js.b.goit.study/api';

const BtnNext = document.querySelector('.btn-arrow-right');
        const BtnPrev = document.querySelector('.btn-arrow-left');
        
        BtnNext.addEventListener('click', function () {
            swiper.slideNext();
        });
        BtnPrev.addEventListener('click', function () {
            swiper.slidePrev();
        });
        swiper.on('reachEnd', function () {
            BtnNext.disabled = true;
        });
        swiper.on('reachBeginning', function () {
            BtnPrev.disabled = true;
        });
        swiper.on('fromEdge', function () {
            BtnNext.disabled = false;
            BtnPrev.disabled = false;
        });


async function getReviews() {
    try {
        const response = await axios (`${Base_URL}/reviews`);
        const reviews = response.data;
        renderReviews(reviews);

    let swiper = new Swiper('.reviews-swiper-container', {
        direction: 'horizontal',
        
            keyboard: { enabled: true, onlyInViewport: true },
        touch: true,
        
            navigation: {
        nextEl: '.btn-arrow-right',
        prevEl: '.btn-arrow-left',
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
        }
    });
  
    } catch (error) {
        alert('An error occurred while getting reviews');
        document.querySelector('.swiper-wrapper').innerHTML = '<p>Not found</p>';
    }
}

function renderReviews(reviews) {
    const reviewsList = reviews.map(review =>
     `<ul class="reviews-list">
        <li class="swiper-slide">
        <div class="reviews-card">
        
        <img src="${review.avatar_url}" alt="${review.author}" class="photo">
        <h3 class="reviews-person-name">${review.author}</h3>
        <p class="reviews-person-info">${review.review}</p
       
        </div>
         </li>
     </ul>`).join('');
    
    document.querySelector('.swiper-wrapper').innerHTML = reviewsList;
}

getReviews();


