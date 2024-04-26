document.addEventListener("DOMContentLoaded", function() {
  const faqHeadings = document.querySelectorAll(".faq-heading");

  faqHeadings.forEach(function(heading) {
    heading.addEventListener("click", function() {
      const content = this.nextElementSibling;

      // Toggle the 'is-hidden' class
      content.classList.toggle("is-hidden");

      // Toggle the rotation of the arrow icon
      const arrowIcon = this.querySelector(".accordion-btn svg");
      arrowIcon.classList.toggle("rotate-180");
    });
  });
});

