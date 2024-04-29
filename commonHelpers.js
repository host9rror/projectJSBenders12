import{A as S,a as w,S as v}from"./assets/vendor-12a91897.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))s(n);new MutationObserver(n=>{for(const o of n)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function r(n){const o={};return n.integrity&&(o.integrity=n.integrity),n.referrerPolicy&&(o.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?o.credentials="include":n.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(n){if(n.ep)return;n.ep=!0;const o=r(n);fetch(n.href,o)}})();new S(".accordion-container",{duration:2500});const u=document.querySelector(".covers-section"),b=t=>{const e=t.getBoundingClientRect();return e.top>=0&&e.left>=0&&e.bottom<=(window.innerHeight||document.documentElement.clientHeight)&&e.right<=(window.innerWidth||document.documentElement.clientWidth)},y=()=>u.classList.add("animate"),j=()=>u.classList.remove("animate");window.addEventListener("scroll",()=>{b(u)?y():j()});b(u)&&y();const B=document.querySelectorAll(".ac-header");B.forEach(t=>{t.addEventListener("click",()=>{const e=t.nextElementSibling.querySelector(".faq-content"),r=t.querySelector("svg");e.classList.toggle("is-hidden"),e.classList.contains("is-hidden")?e.style.maxHeight=null:e.style.maxHeight=e.scrollHeight+"px",r.classList.toggle("rotate-180")})});const q=document.getElementById("menu-open_btn"),m=document.getElementById("mobile-menu"),x=document.getElementById("close-mobile-menu"),f=document.querySelector(".header-menu"),P=document.querySelector(".menu-text"),M=document.querySelector(".order-btn"),k=(t,e)=>{const r=t.substring(1),s=document.getElementById(r);if(!s)return;m.classList.remove("is-mobile-menu-open"),f.classList.remove("header-menu_visible");const n=document.getElementsByTagName("header")[0].getBoundingClientRect().top,i=s.getBoundingClientRect().top-n,L=e*1e3,h=Math.ceil(i/20);let a=window.scrollY;const E=setInterval(()=>{a+=i/h,a=Math.min(Math.max(0,a),i),window.scrollTo(0,a),a===i&&clearInterval(E)},L/h)},g=t=>{if(t.preventDefault(),t.target.tagName==="A"){const e=t.target.getAttribute("href");k(e,2)}};f.addEventListener("click",g);m.addEventListener("click",g);M.addEventListener("click",g);P.addEventListener("click",()=>{f.classList.toggle("header-menu_visible")});q.addEventListener("click",()=>{m.classList.add("is-mobile-menu-open")});x.addEventListener("click",()=>{m.classList.remove("is-mobile-menu-open")});const I="https://portfolio-js.b.goit.study/api";document.addEventListener("DOMContentLoaded",async function(){try{const e=(await w(`${I}/projects`)).data;N(e);const r=new v(".swiper-container",{direction:"horizontal",keyboard:{enabled:!0,onlyInViewport:!0},touch:!0,navigation:{nextEl:".project-arrow-btn.arrow-right",prevEl:".project-arrow-btn.arrow-left"},slidesPerView:1,slidesPerGroup:1}),s=document.querySelector(".arrow-right"),n=document.querySelector(".arrow-left");s.addEventListener("click",function(){r.slideNext()}),n.addEventListener("click",function(){r.slidePrev()}),r.on("reachEnd",function(){s.disabled=!0}),r.on("reachBeginning",function(){n.disabled=!0}),r.on("fromEdge",function(){s.disabled=!1,n.disabled=!1})}catch(t){alert("An error occurred while getting projects"),console.error(t)}});function N(t){const e=t.map(r=>`
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
              <h3 class="project-content-title">${r.title}</h3>
              <button class="project-content-btn">See project</button>
            </div>
            <div class="project-box">
              <img class="project-box-image" src="${r.imageSrc}" alt="${r.title}" />
            </div>
          </div>
        </li>
      `).join("");document.querySelector(".swiper-wrapper").innerHTML=e}const A="https://portfolio-js.b.goit.study/api";let c,d=[],l=0;async function $(){try{return(await w(`${A}/reviews`)).data}catch(t){return console.error("Error fetching reviews:",t),alert("An error occurred while getting reviews"),[]}}function p(t){const e=Math.min(t+4,d.length),s=d.slice(t,e).map(i=>`<ul class="reviews-list">
      <li class="swiper-slide reviews-item">
        <div class="reviews-card">
          <img
            class="photo"
            src="${i.avatar_url}" 
            alt="photo of ${i.author}"
            width="48"
            height="48"
          />
          <div class="div-reviews-info">
            <h3 class="reviews-person-name">${i.author}</h3>
            <p class="reviews-person-info">${i.review}</p>
          </div>
        </div>
      </li>
    </ul>`).join("");document.querySelector(".swiper-wrapper").innerHTML=s;const n=document.querySelector(".btn-arrow-right"),o=document.querySelector(".btn-arrow-left");e>=d.length?n.disabled=!0:n.disabled=!1,t===0?o.disabled=!0:o.disabled=!1}async function H(){d=await $(),p(l),c=new v(".reviews-swiper-container",{direction:"horizontal",keyboard:{enabled:!0,onlyInViewport:!0},touch:!0,slidesPerView:4,spaceBetween:20,navigation:{nextEl:".btn-arrow-right",prevEl:".btn-arrow-left"},pagination:{el:".swiper-pagination",clickable:!0}});const e=document.querySelector(".btn-arrow-right"),r=document.querySelector(".btn-arrow-left");e.addEventListener("click",function(){console.log("Next button clicked"),l<d.length-4&&(l+=1,p(l),c.update(),c.slideNext())}),r.addEventListener("click",function(){console.log("Prev button clicked"),l>0&&(l-=1,p(l),c.update(),c.slidePrev())}),c.on("reachEnd",function(){e.disabled=!0}),c.on("reachBeginning",function(){r.disabled=!0}),c.on("slideChange",function(){e.disabled=!1,r.disabled=!1})}H();
//# sourceMappingURL=commonHelpers.js.map
