import{A as k,a as b,S as y}from"./assets/vendor-12a91897.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))s(n);new MutationObserver(n=>{for(const o of n)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function r(n){const o={};return n.integrity&&(o.integrity=n.integrity),n.referrerPolicy&&(o.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?o.credentials="include":n.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(n){if(n.ep)return;n.ep=!0;const o=r(n);fetch(n.href,o)}})();new k(".accordion-container",{duration:2500});const u=document.querySelector(".covers-section"),L=e=>{const t=e.getBoundingClientRect();return t.top>=0&&t.left>=0&&t.bottom<=(window.innerHeight||document.documentElement.clientHeight)&&t.right<=(window.innerWidth||document.documentElement.clientWidth)},E=()=>u.classList.add("animate"),q=()=>u.classList.remove("animate");window.addEventListener("scroll",()=>{L(u)?E():q()});L(u)&&E();const x=document.querySelectorAll(".ac-header");x.forEach(e=>{e.addEventListener("click",()=>{const t=e.nextElementSibling.querySelector(".faq-content"),r=e.querySelector("svg");t.classList.toggle("is-hidden"),t.classList.contains("is-hidden")?t.style.maxHeight=null:t.style.maxHeight=t.scrollHeight+"px",r.classList.toggle("rotate-180")})});const M=document.getElementById("menu-open_btn"),m=document.getElementById("mobile-menu"),P=document.getElementById("close-mobile-menu"),p=document.querySelector(".header-menu"),H=document.querySelector(".menu-text"),I=document.querySelector(".order-btn"),g=document.querySelector(".background"),A=document.querySelector(".header-logo"),h=()=>{g.classList.remove("background-visible"),p.classList.remove("header-menu_visible")},S=()=>{m.classList.remove("is-mobile-menu-open"),p.classList.remove("header-menu_visible")},N=(e,t)=>{const r=e.substring(1),s=document.getElementById(r);if(!s)return;const n=document.getElementsByTagName("header")[0].getBoundingClientRect().top,i=s.getBoundingClientRect().top-n;i<2e3&&(t=.8);const j=t*1e3,w=Math.ceil(i/20);let a=window.scrollY;const B=setInterval(()=>{a+=i/w,a=Math.min(Math.max(0,a),i),window.scrollTo(0,a),a===i&&clearInterval(B)},j/w)},v=e=>{if(e.preventDefault(),e.target.tagName==="A"){const t=e.target.getAttribute("href");N(t,2)}};p.addEventListener("click",e=>{S(),g.classList.toggle("background-visible"),v(e)});m.addEventListener("click",e=>{S(),v(e)});I.addEventListener("click",e=>{h(),v(e)});H.addEventListener("click",()=>{p.classList.toggle("header-menu_visible"),g.classList.toggle("background-visible")});M.addEventListener("click",()=>{m.classList.add("is-mobile-menu-open")});P.addEventListener("click",()=>{m.classList.remove("is-mobile-menu-open")});g.addEventListener("click",h);A.addEventListener("click",h);const $="https://portfolio-js.b.goit.study/api";document.addEventListener("DOMContentLoaded",async function(){try{const t=(await b(`${$}/projects`)).data;O(t);const r=new y(".swiper-container",{direction:"horizontal",keyboard:{enabled:!0,onlyInViewport:!0},touch:!0,navigation:{nextEl:".project-arrow-btn.arrow-right",prevEl:".project-arrow-btn.arrow-left"},slidesPerView:1,slidesPerGroup:1}),s=document.querySelector(".arrow-right"),n=document.querySelector(".arrow-left");s.addEventListener("click",function(){r.slideNext()}),n.addEventListener("click",function(){r.slidePrev()}),r.on("reachEnd",function(){s.disabled=!0}),r.on("reachBeginning",function(){n.disabled=!0}),r.on("fromEdge",function(){s.disabled=!1,n.disabled=!1})}catch(e){alert("An error occurred while getting projects"),console.error(e)}});function O(e){const t=e.map(r=>`
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
      `).join("");document.querySelector(".swiper-wrapper").innerHTML=t}const R="https://portfolio-js.b.goit.study/api";let c,d=[],l=0;async function T(){try{return(await b(`${R}/reviews`)).data}catch(e){return console.error("Error fetching reviews:",e),alert("An error occurred while getting reviews"),[]}}function f(e){const t=Math.min(e+4,d.length),s=d.slice(e,t).map(i=>`<ul class="reviews-list">
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
    </ul>`).join("");document.querySelector(".swiper-wrapper").innerHTML=s;const n=document.querySelector(".btn-arrow-right"),o=document.querySelector(".btn-arrow-left");t>=d.length?n.disabled=!0:n.disabled=!1,e===0?o.disabled=!0:o.disabled=!1}async function _(){d=await T(),f(l),c=new y(".reviews-swiper-container",{direction:"horizontal",keyboard:{enabled:!0,onlyInViewport:!0},touch:!0,slidesPerView:4,spaceBetween:20,navigation:{nextEl:".btn-arrow-right",prevEl:".btn-arrow-left"},pagination:{el:".swiper-pagination",clickable:!0}});const t=document.querySelector(".btn-arrow-right"),r=document.querySelector(".btn-arrow-left");t.addEventListener("click",function(){console.log("Next button clicked"),l<d.length-4&&(l+=1,f(l),c.update(),c.slideNext())}),r.addEventListener("click",function(){console.log("Prev button clicked"),l>0&&(l-=1,f(l),c.update(),c.slidePrev())}),c.on("reachEnd",function(){t.disabled=!0}),c.on("reachBeginning",function(){r.disabled=!0}),c.on("slideChange",function(){t.disabled=!1,r.disabled=!1})}_();
//# sourceMappingURL=commonHelpers.js.map
