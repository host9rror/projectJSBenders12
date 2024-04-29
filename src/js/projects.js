import Swiper from 'swiper';
import axios from 'axios';

const Base_URL = 'https://portfolio-js.b.goit.study/api';

document.addEventListener('DOMContentLoaded', async function () {
  try {
    const response = await axios(`${Base_URL}/projects`);
    const projects = response.data;
    renderProjects(projects);

    const swiper = new Swiper('.swiper-container', {
      direction: 'horizontal',
      keyboard: { enabled: true, onlyInViewport: true },
      touch: true,
      navigation: {
        nextEl: '.project-arrow-btn.arrow-right',
        prevEl: '.project-arrow-btn.arrow-left',
      },
      slidesPerView: 1, 
      slidesPerGroup: 1, 
    });

    const BtnNext = document.querySelector('.arrow-right');
    const BtnPrev = document.querySelector('.arrow-left');

    BtnNext.addEventListener('click', function () {
      swiper.slideNext();
    });
    BtnPrev.addEventListener('click', function () {
      swiper.slidePrev();
    });

    swiper.on('reachEnd', function () {
      BtnNext.disabled = true;
    });
    swiper.on('reachBeginning', function () {
      BtnPrev.disabled = true;
    });
    swiper.on('fromEdge', function () {
      BtnNext.disabled = false;
      BtnPrev.disabled = false;
    });
  } catch (error) {
    alert('An error occurred while getting projects');
    console.error(error);
  }
});

function renderProjects(projects) {
  const projectsList = projects
    .map(
      project => `
        <li class="swiper-slide project">
          <div class="project-content container">
            <h2 class="project-title">PROJECTS</h2>
            <div class="project-main-part">
              <ul class="project-list">
                <li class="project-list-item">#react</li>
                <li class="project-list-item">#js</li>
                <li class="project-list-item">#node js</li>
                <li class="project-list-item">#git</li>
              </ul>
              <h3 class="project-content-title">${project.title}</h3>
              <button class="project-content-btn">See project</button>
            </div>
            <div class="project-box">
              <img class="project-box-image" src="${project.imageSrc}" alt="${project.title}" />
            </div>
          </div>
        </li>
      `
    )
    .join('');

  document.querySelector('.swiper-wrapper').innerHTML = projectsList;
}
