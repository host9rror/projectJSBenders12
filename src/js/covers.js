



const coversProjects = document.querySelector('.covers-projects');
const rows = document.querySelectorAll('.row');

const covers =
    [{
        mobile:'../img/covers/project-1.png', desktop:'../img/covers/project-1@2x.png',description:'project 1'},
        {mobile:'../img/covers/project-2.png', desktop:'../img/covers/project-2@2x.png',description:'project 2'},
        {mobile:'../img/covers/project-3.png', desktop:'../img/covers/project-3@2x.png',description:'project 3'},
      { mobile:'../img/covers/project-4.png', desktop:'../img/covers/project-4@2x.png',description:'project 4'},
      { mobile: '../img/covers/project-6.png', desktop:'../img/covers/project-6@2x.png',description:'project 6'},
        {mobile:'../img/covers/project-7.png', desktop:'../img/covers/project-7@2x.png',description:'project 7'},
        {mobile:'../img/covers/project-8.png', desktop:'../img/covers/project-8@2x.png',description:'project 8'},
        {mobile:'../img/covers/project-9.png', desktop:'../img/covers/project-9@2x.png',description:'project 9'},
        {mobile:'../img/covers/project-10.png', desktop:'../img/covers/project-10@2x.png',description:'project 10'},
        {mobile:'../img/covers/project-11.png', desktop:'../img/covers/project-11@2x.png',description:'project 11'},
  ]

     function coversItems(arr) {
  return arr.map(({ mobile, desktop, description }) =>
    `<li class="cover-item swiper-slide">
          <a class="covers-link" href="" data-desktop="${desktop}">
            <img class="covers-image" src="${mobile}" alt="${description}" width="" />
          </a>
        </li>`
  ).join('');
};




covers.forEach((cover, index) => {
const row = rows[Math.floor(index / 3)]; 
const imageHtml = coversItems([cover]);
row.innerHTML += imageHtml;
});



coversProjects.innerHTML = coversItems(covers);
const images = document.querySelectorAll('.covers-image');
  const screenWidth = window.innerWidth;
images.forEach(image => {
  const desktop = image.parentElement.getAttribute('data-desktop');
    const mobile = image.getAttribute('src');
  if (screenWidth < 768) {
    image.style.width = `100%`;
    image.setAttribute('src', mobile)

  } else {
    image.style.width = `100%`;
    image.setAttribute ('src', desktop)
  }
});

