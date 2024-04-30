import{A as q,S as h,N as k,a as L}from"./assets/vendor-7bb91979.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))r(n);new MutationObserver(n=>{for(const i of n)if(i.type==="childList")for(const s of i.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function o(n){const i={};return n.integrity&&(i.integrity=n.integrity),n.referrerPolicy&&(i.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?i.credentials="include":n.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(n){if(n.ep)return;n.ep=!0;const i=o(n);fetch(n.href,i)}})();new q(".accordion-container",{onOpen:function(){console.log("ok")}});new h(".swiper",{modules:[k],navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}});const m=document.querySelector(".covers-section"),E=e=>{const t=e.getBoundingClientRect();return t.top>=0&&t.left>=0&&t.bottom<=(window.innerHeight||document.documentElement.clientHeight)&&t.right<=(window.innerWidth||document.documentElement.clientWidth)},S=()=>m.classList.add("animate"),x=()=>m.classList.remove("animate");window.addEventListener("scroll",()=>{E(m)?S():x()});E(m)&&S();document.addEventListener("DOMContentLoaded",function(){document.querySelectorAll(".ac-header").forEach(t=>{t.addEventListener("click",()=>{const o=t.nextElementSibling;if(o){const r=o.querySelector(".faq-content"),n=t.querySelector("svg");r&&(r.classList.toggle("is-hidden"),r.classList.contains("is-hidden")?r.style.maxHeight=null:r.style.maxHeight=r.scrollHeight+"px"),n&&n.classList.toggle("rotate-180")}})})});const M=document.getElementById("menu-open_btn"),p=document.getElementById("mobile-menu"),P=document.getElementById("close-mobile-menu"),g=document.querySelector(".header-menu"),H=document.querySelector(".menu-text"),N=document.querySelector(".order-btn"),f=document.querySelector(".background"),A=document.querySelector(".header-logo"),w=()=>{f.classList.remove("background-visible"),g.classList.remove("header-menu_visible")},j=()=>{p.classList.remove("is-mobile-menu-open"),g.classList.remove("header-menu_visible")},I=(e,t)=>{const o=e.substring(1),r=document.getElementById(o);if(!r)return;const n=document.getElementsByTagName("header")[0].getBoundingClientRect().top,s=r.getBoundingClientRect().top-n;s<2e3&&(t=.8);const c=t*1e3,y=Math.ceil(s/20);let d=window.scrollY;const B=setInterval(()=>{d+=s/y,d=Math.min(Math.max(0,d),s),window.scrollTo(0,d),d===s&&clearInterval(B)},c/y)},b=e=>{if(e.preventDefault(),e.target.tagName==="A"){const t=e.target.getAttribute("href");I(t,2)}};g.addEventListener("click",e=>{j(),f.classList.toggle("background-visible"),b(e)});p.addEventListener("click",e=>{j(),b(e)});N.addEventListener("click",e=>{w(),b(e)});H.addEventListener("click",()=>{g.classList.toggle("header-menu_visible"),f.classList.toggle("background-visible")});M.addEventListener("click",()=>{p.classList.add("is-mobile-menu-open")});P.addEventListener("click",()=>{p.classList.remove("is-mobile-menu-open")});f.addEventListener("click",w);A.addEventListener("click",w);const O="https://portfolio-js.b.goit.study/api";document.addEventListener("DOMContentLoaded",async function(){try{const t=(await L(`${O}/projects`)).data;$(t);const o=new h(".swiper-container",{direction:"horizontal",keyboard:{enabled:!0,onlyInViewport:!0},touch:!0,navigation:{nextEl:".project-arrow-btn.arrow-right",prevEl:".project-arrow-btn.arrow-left"},slidesPerView:1,slidesPerGroup:1}),r=document.querySelector(".arrow-right"),n=document.querySelector(".arrow-left");r.addEventListener("click",function(){o.slideNext()}),n.addEventListener("click",function(){o.slidePrev()}),o.on("reachEnd",function(){r.disabled=!0}),o.on("reachBeginning",function(){n.disabled=!0}),o.on("fromEdge",function(){r.disabled=!1,n.disabled=!1})}catch(e){alert("An error occurred while getting projects"),console.error(e)}});function $(e){const t=e.map(o=>`
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
      `).join("");document.querySelector(".swiper-wrapper").innerHTML=t}const R="https://portfolio-js.b.goit.study/api";let l,u=[],a=0;async function T(){try{return(await L(`${R}/reviews`)).data}catch(e){return console.error("Error fetching reviews:",e),alert("An error occurred while getting reviews"),[]}}function v(e){const t=Math.min(e+4,u.length),r=u.slice(e,t).map(c=>`<ul class="reviews-list">
      <li class="swiper-slide reviews-item">
        <div class="reviews-card">
          <img
            class="photo"
            src="${c.avatar_url}" 
            alt="photo of ${c.author}"
            width="48"
            height="48"
          />
          <div class="div-reviews-info">
            <h3 class="reviews-person-name">${c.author}</h3>
            <p class="reviews-person-info">${c.review}</p>
          </div>
        </div>
      </li>
    </ul>`).join("");document.querySelector(".reviews-wrapper.swiper-wrapper").innerHTML=r;const n=document.querySelector(".btn-arrow-right"),i=document.querySelector(".btn-arrow-left");t>=u.length?n.disabled=!0:n.disabled=!1,e===0?i.disabled=!0:i.disabled=!1,document.querySelectorAll(".reviews-item").forEach(function(c){c.offsetWidth>window.innerWidth&&c.classList.add(".hidden")})}async function C(){u=await T(),v(a),l=new h(".reviews-swiper-container",{direction:"horizontal",keyboard:{enabled:!0,onlyInViewport:!0},touch:!0,slidesPerView:4,spaceBetween:20,navigation:{nextEl:".btn-arrow-right",prevEl:".btn-arrow-left"}});const t=document.querySelector(".btn-arrow-right"),o=document.querySelector(".btn-arrow-left");t.addEventListener("click",function(){console.log("Next button clicked"),a<u.length-4&&(a+=1,v(a),l.update(),l.slideNext())}),o.addEventListener("click",function(){console.log("Prev button clicked"),a>0&&(a-=1,v(a),l.update(),l.slidePrev())}),l.on("reachEnd",function(){t.disabled=!0}),l.on("reachBeginning",function(){o.disabled=!0}),l.on("slideChange",function(){t.disabled=!1,o.disabled=!1})}C();
//# sourceMappingURL=commonHelpers.js.map
