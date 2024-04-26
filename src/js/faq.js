// document.addEventListener('DOMContentLoaded', function() {
//   const triggers = document.querySelectorAll('.ac-trigger, .accordion-btn');

//   triggers.forEach(trigger => {
//     trigger.addEventListener('click', function() {
//       const content = this.parentElement.nextElementSibling; // Find the next sibling of the parent element
//       content.classList.toggle('is-hidden');
//     });
//   });
// });

import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';

document.addEventListener('DOMContentLoaded', function() {
  new Accordion('.faq-list');
});