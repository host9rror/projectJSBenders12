import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';


import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';



// -----------------------------------------------------------------------------------------------------

// ------Accordion--------

new Accordion('.accordion-container', {
  duration: 2500,
});




// ------Swiper--------



// const swiper = new Swiper('.swiper', {
//   // Optional parameters

//   navigation: {
//     nextEl: '.swiper-button-next',
//     prevEl: '.swiper-button-prev',
//   },
// });