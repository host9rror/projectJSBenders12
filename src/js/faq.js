const accordionHeaders = document.querySelectorAll('.ac-header');

accordionHeaders.forEach(header => {
  header.addEventListener('click', () => {
    const panel = header.nextElementSibling.querySelector('.faq-content'); 
    const svg = header.querySelector('svg'); 

    panel.classList.toggle('is-hidden');

    if (panel.classList.contains('is-hidden')) {
      panel.style.maxHeight = null; 
    } else {
      panel.style.maxHeight = panel.scrollHeight + 'px'; 
    }

    svg.classList.toggle('rotate-180');
  });
});
