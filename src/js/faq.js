// import Accordion from 'accordion-js';
// import 'accordion-js/dist/accordion.min.css';

// document.addEventListener("DOMContentLoaded", function() {
//   const accordion = new Accordion('.faq-list', {
//     duration: 300,
//     beforeToggle: function(toggleElement, panel) {
//       const svg = toggleElement.querySelector('svg');
//       if (panel.classList.contains('is-visible')) {
//         svg.classList.remove('rotate-180');
//       } else {
//         svg.classList.add('rotate-180');
//       }
//     }
//   });
// });

const accordionHeaders = document.querySelectorAll('.ac-header');

accordionHeaders.forEach(header => {
  header.addEventListener('click', () => {
    const panel = header.nextElementSibling.querySelector('.faq-content'); 
    const svg = header.querySelector('svg'); 

    panel.classList.toggle('is-hidden');

    svg.classList.toggle('rotate-180');
  });
});
