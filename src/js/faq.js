document.addEventListener('DOMContentLoaded', function() {
  const accordionHeaders = document.querySelectorAll('.ac-header');

  accordionHeaders.forEach(header => {
      header.addEventListener('click', () => {
          const panel = header.nextElementSibling;

          if (panel) {
              const content = panel.querySelector('.faq-content');
              const svg = header.querySelector('svg');

              if (content) {
                  content.classList.toggle('is-hidden');

                  if (content.classList.contains('is-hidden')) {
                      content.style.maxHeight = null;
                  } else {
                      content.style.maxHeight = content.scrollHeight + 'px';
                  }
              }

              if (svg) {
                  svg.classList.toggle('rotate-180');
              }
          }
      });
  });
});
