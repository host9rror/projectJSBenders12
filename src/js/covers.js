import Swiper from 'swiper';
// import Swiper styles
import 'swiper/css/bundle';

const swiper = new Swiper();

const coversProjects = document.querySelector('.covers-projects')

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
console.log(covers);
function coversItems(arr) {
  return arr.map(({ mobile, desktop, description }) =>
    `<li class="cover-item">
          <a class="covers-link" href="" data-desktop="${desktop}">
            <img class="covers-image" src="${mobile}" alt="${description}" width="" />
          </a>
        </li>`
  ).join('');

}
coversProjects.innerHTML = coversItems(covers);
const images = coversProjects.querySelector('.covers-image');
  const screenWidth = window.innerWidth;
image.forEach(image => {
  if (screenWidth < 768) {
    image.style.width = `${mobile}`;

  } else {
    image.style.width = `${desktop}`;
  }
});

