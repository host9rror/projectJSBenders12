import Swiper from "swiper";

const Base_URL = 'https://portfolio-js.b.goit.study/api';
// const review =
//     [
//         {
//             "_id": 1,
//             "author": "Natalia",
//             "avatar_url": "https://ftp.goit.study/img/avatars/4.jpg",
//             "review": "Work with was extraordinary! He turned out to be a very competent and responsible specialist. The projects were completed on time and the result exceeded my expectations."
//         },
//         {
//             "_id": 2,
//             "author": "Dmytro",
//             "avatar_url": "https://ftp.goit.study/img/avatars/5.jpg",
//             "review": "I have the honor to recommend him as an exceptional professional in his field. His knowledge and expertise are undeniable. Cooperation with him always brings impressive results."
//         },
//         {
//             "_id": 3,
//             "author": "Anna",
//             "avatar_url": "https://ftp.goit.study/img/avatars/6.jpg",
//             "review": "The developed project impresses with its quality and efficiency. The code is cleanly written and the functionality exceeds expectations. Extremely satisfied with the cooperation!"
//         },
//         {
//             "_id": 4,
//             "author": "Ivetta",
//             "avatar_url": "https://ftp.goit.study/img/avatars/8.jpg",
//             "review": "It's not the will to win that matters—everyone has that. It's the will to prepare to win that matters."
//         },
//         {
//             "_id": 5,
//             "author": "Andriy",
//             "avatar_url": "https://ftp.goit.study/img/avatars/9.jpg",
//             "review": "Working with him was an absolute pleasure. He demonstrated exceptional professionalism and skill in handling our project. Not only did he meet all deadlines, but he also went above and beyond to ensure the final product was flawless. Highly recommend his services."
//         },
//         {
//             "_id": 6,
//             "author": "Eduard",
//             "avatar_url": "https://ftp.goit.study/img/avatars/11.jpg",
//             "review": "I couldn't be happier with the outcome of our collaboration. He proved to be a reliable and proficient expert. The results speak for themselves - impeccable work delivered in a timely manner. Looking forward to future projects together!"
//         }
//     ];

const BtnNext = document.querySelector('.swiper-btn-next');
const BtnPrev = document.querySelector('.swiper-btn-prev');


const swiper = new Swiper('.reviews-swiper-container', {
    direction: 'horizontal',
    keyboard: {
        enabled: true,
        onlyInViewport: true,
    },
    navigation: {
        nextEl: BtnNext,
        prevEl: BtnPrev,
    },
});

async function getReviews() {
    try {
        const response = await fetch(`${Base_URL}/reviews`);
        if (!response.ok) {
            throw new Error('Failed to get reviews');
        }
        const reviews = await response.json();
        renderReviews(reviews);
    } catch (error) {
        alert('An error occurred while getting reviews');
        document.querySelector('.swiper-wrapper').innerHTML = '<p>Not found</p>';
    }
}

function renderReviews(reviews) {
    const reviewsList = reviews.map(review =>
        `<div class="review">
        <li class="reviews-card">
        <img src="${Base_URL}/${review.avatar_url}" alt="${review.author}">
        <h3>${review.author}</h3>
        <p>${review.review}</p>
        </li>
           
        </div>`).join('');
    
    document.querySelector('.swiper-wrapper').innerHTML = reviewsList;
}

document.addEventListener('DOMContentLoaded', getReviews);