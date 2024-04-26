// import Swiper JS
import Swiper from 'swiper';
// import Swiper styles
import 'swiper/css';

// core version + navigation, pagination modules:
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';


const accordionButtonEl = document.querySelector('.button-experience1');

const accordion = new Accordion('.accordion-container');

accordionButtonEl.addEventListener('click', () => {
  console.log('ok');
});