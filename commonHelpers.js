import{A as k,S as v,N as q,a as y}from"./assets/vendor-7bb91979.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))s(n);new MutationObserver(n=>{for(const r of n)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function o(n){const r={};return n.integrity&&(r.integrity=n.integrity),n.referrerPolicy&&(r.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?r.credentials="include":n.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(n){if(n.ep)return;n.ep=!0;const r=o(n);fetch(n.href,r)}})();new k(".accordion-container",{onOpen:function(){console.log("ok")}});new v(".swiper",{modules:[q],navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}});const u=document.querySelector(".covers-section"),L=e=>{const t=e.getBoundingClientRect();return t.top>=0&&t.left>=0&&t.bottom<=(window.innerHeight||document.documentElement.clientHeight)&&t.right<=(window.innerWidth||document.documentElement.clientWidth)},E=()=>u.classList.add("animate"),x=()=>u.classList.remove("animate");window.addEventListener("scroll",()=>{L(u)?E():x()});L(u)&&E();const M=document.querySelectorAll(".ac-header");M.forEach(e=>{e.addEventListener("click",()=>{const t=e.nextElementSibling.querySelector(".faq-content"),o=e.querySelector("svg");t.classList.toggle("is-hidden"),t.classList.contains("is-hidden")?t.style.maxHeight=null:t.style.maxHeight=t.scrollHeight+"px",o.classList.toggle("rotate-180")})});const P=document.getElementById("menu-open_btn"),m=document.getElementById("mobile-menu"),H=document.getElementById("close-mobile-menu"),p=document.querySelector(".header-menu"),N=document.querySelector(".menu-text"),I=document.querySelector(".order-btn"),g=document.querySelector(".background"),A=document.querySelector(".header-logo"),h=()=>{g.classList.remove("background-visible"),p.classList.remove("header-menu_visible")},S=()=>{m.classList.remove("is-mobile-menu-open"),p.classList.remove("header-menu_visible")},O=(e,t)=>{const o=e.substring(1),s=document.getElementById(o);if(!s)return;const n=document.getElementsByTagName("header")[0].getBoundingClientRect().top,i=s.getBoundingClientRect().top-n;i<2e3&&(t=.8);const j=t*1e3,b=Math.ceil(i/20);let a=window.scrollY;const B=setInterval(()=>{a+=i/b,a=Math.min(Math.max(0,a),i),window.scrollTo(0,a),a===i&&clearInterval(B)},j/b)},w=e=>{if(e.preventDefault(),e.target.tagName==="A"){const t=e.target.getAttribute("href");O(t,2)}};p.addEventListener("click",e=>{S(),g.classList.toggle("background-visible"),w(e)});m.addEventListener("click",e=>{S(),w(e)});I.addEventListener("click",e=>{h(),w(e)});N.addEventListener("click",()=>{p.classList.toggle("header-menu_visible"),g.classList.toggle("background-visible")});P.addEventListener("click",()=>{m.classList.add("is-mobile-menu-open")});H.addEventListener("click",()=>{m.classList.remove("is-mobile-menu-open")});g.addEventListener("click",h);A.addEventListener("click",h);const $="https://portfolio-js.b.goit.study/api";document.addEventListener("DOMContentLoaded",async function(){try{const t=(await y(`${$}/projects`)).data;R(t);const o=new v(".swiper-container",{direction:"horizontal",keyboard:{enabled:!0,onlyInViewport:!0},touch:!0,navigation:{nextEl:".project-arrow-btn.arrow-right",prevEl:".project-arrow-btn.arrow-left"},slidesPerView:1,slidesPerGroup:1}),s=document.querySelector(".arrow-right"),n=document.querySelector(".arrow-left");s.addEventListener("click",function(){o.slideNext()}),n.addEventListener("click",function(){o.slidePrev()}),o.on("reachEnd",function(){s.disabled=!0}),o.on("reachBeginning",function(){n.disabled=!0}),o.on("fromEdge",function(){s.disabled=!1,n.disabled=!1})}catch(e){alert("An error occurred while getting projects"),console.error(e)}});function R(e){const t=e.map(o=>`
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
              <h3 class="project-content-title">${o.title}</h3>
              <button class="project-content-btn">See project</button>
            </div>
            <div class="project-box">
              <img class="project-box-image" src="${o.imageSrc}" alt="${o.title}" />
            </div>
          </div>
        </li>
      `).join("");document.querySelector(".swiper-wrapper").innerHTML=t}const T="https://portfolio-js.b.goit.study/api";let c,d=[],l=0;async function _(){try{return(await y(`${T}/reviews`)).data}catch(e){return console.error("Error fetching reviews:",e),alert("An error occurred while getting reviews"),[]}}function f(e){const t=Math.min(e+4,d.length),s=d.slice(e,t).map(i=>`<ul class="reviews-list">
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
    </ul>`).join("");document.querySelector(".reviews-wrapper").innerHTML=s;const n=document.querySelector(".btn-arrow-right"),r=document.querySelector(".btn-arrow-left");t>=d.length?n.disabled=!0:n.disabled=!1,e===0?r.disabled=!0:r.disabled=!1}async function C(){d=await _(),f(l),c=new v(".reviews-swiper-container",{direction:"horizontal",keyboard:{enabled:!0,onlyInViewport:!0},touch:!0,slidesPerView:4,spaceBetween:20,navigation:{nextEl:".btn-arrow-right",prevEl:".btn-arrow-left"}});const t=document.querySelector(".btn-arrow-right"),o=document.querySelector(".btn-arrow-left");t.addEventListener("click",function(){console.log("Next button clicked"),l<d.length-4&&(l+=1,f(l),c.update(),c.updateSize(),c.slideNext())}),o.addEventListener("click",function(){console.log("Prev button clicked"),l>0&&(l-=1,f(l),c.update(),c.updateSize(),c.slidePrev())}),c.on("reachEnd",function(){t.disabled=!0}),c.on("reachBeginning",function(){o.disabled=!0}),c.on("slideChange",function(){t.disabled=!1,o.disabled=!1})}C();
//# sourceMappingURL=commonHelpers.js.map
