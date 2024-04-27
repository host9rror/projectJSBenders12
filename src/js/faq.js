document.addEventListener('DOMContentLoaded', function() {
  const triggers = document.querySelectorAll('.ac-trigger, .accordion-btn');

  triggers.forEach(trigger => {
    trigger.addEventListener('click', function() {
      const content = this.parentElement.nextElementSibling; 
      content.classList.toggle('is-hidden');

      const svg = this.parentElement.querySelector('svg'); 
      
      if (content.classList.contains('is-hidden')) {
        svg.classList.remove('rotate-180');
      } else {
        svg.classList.add('rotate-180');
      }
    });
  });
});


// import Accordion from 'accordion-js';

// document.addEventListener('DOMContentLoaded', function() {
//   const accordion = new Accordion('.faq-accordion-container', {
//     open: false,
//     collapsible: true,
//     multiple: false,
//     event: 'click',
//    selector: {
//       trigger: '.ac-trigger',
//       content: '.faq-content'
//     },
//     callback: {
//       open: function(event) {
//         const svg = event.target.closest('.faq-heading').querySelector('svg');
//         svg.classList.add('rotate-180');
//       },
//       close: function(event) {
//         const svg = event.target.closest('.faq-heading').querySelector('svg');
//         svg.classList.remove('rotate-180');
//       }
//     }
//   });
// });
