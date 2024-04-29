import{A as L,a as f,S as w}from"./assets/vendor-12a91897.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function n(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(r){if(r.ep)return;r.ep=!0;const o=n(r);fetch(r.href,o)}})();new L(".accordion-container",{duration:2500});const l=document.querySelector(".covers-section"),h=t=>{const e=t.getBoundingClientRect();return e.top>=0&&e.left>=0&&e.bottom<=(window.innerHeight||document.documentElement.clientHeight)&&e.right<=(window.innerWidth||document.documentElement.clientWidth)},v=()=>l.classList.add("animate"),E=()=>l.classList.remove("animate");window.addEventListener("scroll",()=>{h(l)?v():E()});h(l)&&v();const j=document.querySelectorAll(".ac-header");j.forEach(t=>{t.addEventListener("click",()=>{const e=t.nextElementSibling.querySelector(".faq-content"),n=t.querySelector("svg");e.classList.toggle("is-hidden"),e.classList.contains("is-hidden")?e.style.maxHeight=null:e.style.maxHeight=e.scrollHeight+"px",n.classList.toggle("rotate-180")})});const S=document.getElementById("menu-open_btn"),a=document.getElementById("mobile-menu"),B=document.getElementById("close-mobile-menu"),d=document.querySelector(".header-menu"),q=document.querySelector(".menu-text"),x=document.querySelector(".order-btn"),M=(t,e)=>{const n=t.substring(1),i=document.getElementById(n);if(!i)return;a.classList.remove("is-mobile-menu-open"),d.classList.remove("header-menu_visible");const r=document.getElementsByTagName("header")[0].getBoundingClientRect().top,s=i.getBoundingClientRect().top-r,b=e*1e3,g=Math.ceil(s/20);let c=window.scrollY;const y=setInterval(()=>{c+=s/g,c=Math.min(Math.max(0,c),s),window.scrollTo(0,c),c===s&&clearInterval(y)},b/g)},u=t=>{if(t.preventDefault(),t.target.tagName==="A"){const e=t.target.getAttribute("href");M(e,2)}};d.addEventListener("click",u);a.addEventListener("click",u);x.addEventListener("click",u);q.addEventListener("click",()=>{d.classList.toggle("header-menu_visible")});S.addEventListener("click",()=>{a.classList.add("is-mobile-menu-open")});B.addEventListener("click",()=>{a.classList.remove("is-mobile-menu-open")});const I="https://portfolio-js.b.goit.study/api";document.addEventListener("DOMContentLoaded",async function(){try{const e=(await f(`${I}/projects`)).data;P(e);const n=new w(".swiper-container",{direction:"horizontal",keyboard:{enabled:!0,onlyInViewport:!0},touch:!0,navigation:{nextEl:".project-arrow-btn.arrow-right",prevEl:".project-arrow-btn.arrow-left"},slidesPerView:1,slidesPerGroup:1}),i=document.querySelector(".arrow-right"),r=document.querySelector(".arrow-left");i.addEventListener("click",function(){n.slideNext()}),r.addEventListener("click",function(){n.slidePrev()}),n.on("reachEnd",function(){i.disabled=!0}),n.on("reachBeginning",function(){r.disabled=!0}),n.on("fromEdge",function(){i.disabled=!1,r.disabled=!1})}catch(t){alert("An error occurred while getting projects"),console.error(t)}});function P(t){const e=t.map(n=>`
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
              <h3 class="project-content-title">${n.title}</h3>
              <button class="project-content-btn">See project</button>
            </div>
            <div class="project-box">
              <img class="project-box-image" src="${n.imageSrc}" alt="${n.title}" />
            </div>
          </div>
        </li>
      `).join("");document.querySelector(".swiper-wrapper").innerHTML=e}const k="https://portfolio-js.b.goit.study/api",p=document.querySelector(".btn-arrow-right"),m=document.querySelector(".btn-arrow-left");p.addEventListener("click",function(){swiper.slideNext()});m.addEventListener("click",function(){swiper.slidePrev()});swiper.on("reachEnd",function(){p.disabled=!0});swiper.on("reachBeginning",function(){m.disabled=!0});swiper.on("fromEdge",function(){p.disabled=!1,m.disabled=!1});async function A(){try{const e=(await f(`${k}/reviews`)).data;H(e);let n=new w(".reviews-swiper-container",{direction:"horizontal",keyboard:{enabled:!0,onlyInViewport:!0},touch:!0,navigation:{nextEl:".btn-arrow-right",prevEl:".btn-arrow-left"},pagination:{el:".swiper-pagination",clickable:!0}})}catch{alert("An error occurred while getting reviews"),document.querySelector(".swiper-wrapper").innerHTML="<p>Not found</p>"}}function H(t){const e=t.map(n=>`<ul class="reviews-list">
        <li class="swiper-slide">
        <div class="reviews-card">
        
        <img src="${n.avatar_url}" alt="${n.author}" class="photo">
        <h3 class="reviews-person-name">${n.author}</h3>
        <p class="reviews-person-info">${n.review}</p
       
        </div>
         </li>
     </ul>`).join("");document.querySelector(".swiper-wrapper").innerHTML=e}A();
//# sourceMappingURL=commonHelpers.js.map
