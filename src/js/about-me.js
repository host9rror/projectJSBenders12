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
  onOpen: function () {
    console.log('ok');
  },
});



// ------Swiper--------



const swiper = new Swiper('.swiper', {
  // Optional parameters
  modules: [Navigation],
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});