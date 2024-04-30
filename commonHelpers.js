import{A as x,S as b,N as M,a as E}from"./assets/vendor-7bb91979.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))i(n);new MutationObserver(n=>{for(const o of n)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function r(n){const o={};return n.integrity&&(o.integrity=n.integrity),n.referrerPolicy&&(o.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?o.credentials="include":n.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(n){if(n.ep)return;n.ep=!0;const o=r(n);fetch(n.href,o)}})();new x(".accordion-container",{onOpen:function(){console.log("ok")}});new b(".swiper",{modules:[M],navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}});const v=document.querySelector(".covers-section"),S=e=>{const t=e.getBoundingClientRect();return t.top>=0&&t.left>=0&&t.bottom<=(window.innerHeight||document.documentElement.clientHeight)&&t.right<=(window.innerWidth||document.documentElement.clientWidth)},j=()=>v.classList.add("animate"),P=()=>v.classList.remove("animate");window.addEventListener("scroll",()=>{S(v)?j():P()});S(v)&&j();document.addEventListener("DOMContentLoaded",function(){document.querySelectorAll(".ac-header").forEach(t=>{t.addEventListener("click",()=>{const r=t.nextElementSibling;if(r){const i=r.querySelector(".faq-content"),n=t.querySelector("svg");i&&(i.classList.toggle("is-hidden"),i.classList.contains("is-hidden")?i.style.maxHeight=null:i.style.maxHeight=i.scrollHeight+"px"),n&&n.classList.toggle("rotate-180")}})})});const H=document.getElementById("menu-open_btn"),w=document.getElementById("mobile-menu"),A=document.getElementById("close-mobile-menu"),f=document.querySelector(".header-menu"),I=document.querySelector(".menu-text"),N=document.querySelector(".order-btn"),h=document.querySelector(".background"),O=document.querySelector(".header-logo"),y=()=>{h.classList.remove("background-visible"),f.classList.remove("header-menu_visible")},B=()=>{w.classList.remove("is-mobile-menu-open"),f.classList.remove("header-menu_visible")},C=(e,t)=>{const r=e.substring(1),i=document.getElementById(r);if(!i)return;const n=document.getElementsByTagName("header")[0].getBoundingClientRect().top,s=i.getBoundingClientRect().top-n;s<2e3&&(t=.8);const c=t*1e3,p=Math.ceil(s/20);let u=window.scrollY;const k=setInterval(()=>{u+=s/p,u=Math.min(Math.max(0,u),s),window.scrollTo(0,u),u===s&&clearInterval(k)},c/p)},L=e=>{if(e.preventDefault(),e.target.tagName==="A"){const t=e.target.getAttribute("href");C(t,2)}};f.addEventListener("click",e=>{B(),h.classList.toggle("background-visible"),L(e)});w.addEventListener("click",e=>{B(),L(e)});N.addEventListener("click",e=>{y(),L(e)});I.addEventListener("click",()=>{f.classList.toggle("header-menu_visible"),h.classList.toggle("background-visible")});H.addEventListener("click",()=>{w.classList.add("is-mobile-menu-open")});A.addEventListener("click",()=>{w.classList.remove("is-mobile-menu-open")});h.addEventListener("click",y);O.addEventListener("click",y);const $="https://portfolio-js.b.goit.study/api";document.addEventListener("DOMContentLoaded",async function(){try{const t=(await E(`${$}/projects`)).data;R(t);const r=new b(".swiper-container",{direction:"horizontal",keyboard:{enabled:!0,onlyInViewport:!0},touch:!0,navigation:{nextEl:".project-arrow-btn.arrow-right",prevEl:".project-arrow-btn.arrow-left"},slidesPerView:1,slidesPerGroup:1}),i=document.querySelector(".arrow-right"),n=document.querySelector(".arrow-left");i.addEventListener("click",function(){r.slideNext()}),n.addEventListener("click",function(){r.slidePrev()}),r.on("reachEnd",function(){i.disabled=!0}),r.on("reachBeginning",function(){n.disabled=!0}),r.on("fromEdge",function(){i.disabled=!1,n.disabled=!1})}catch(e){alert("An error occurred while getting projects"),console.error(e)}});function R(e){const t=e.map(r=>`
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
      `).join("");document.querySelector(".swiper-wrapper").innerHTML=t}const V="https://portfolio-js.b.goit.study/api";let l,m=[],a=0,d;async function T(){try{return(await E(`${V}/reviews`)).data}catch(e){return console.error("Error fetching reviews:",e),alert("An error occurred while getting reviews"),[]}}async function g(e){const t=Math.min(e+d,m.length),i=m.slice(e,t).map(c=>`<li class="reviews-item">
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
    </li>`).join("");document.querySelector(".reviews-list").innerHTML=i;const n=document.querySelector(".btn-arrow-right"),o=document.querySelector(".btn-arrow-left");n.disabled=t>=m.length,o.disabled=e===0,document.querySelectorAll(".reviews-item").forEach((c,p)=>{c.classList.toggle("hidden",p>=d)})}async function _(){m=await T(),q(),g(a),l=new b(".reviews-swiper-container",{direction:"horizontal",keyboard:{enabled:!0,onlyInViewport:!0},touch:!0,slidesPerView:d,spaceBetween:20,navigation:{nextEl:".btn-arrow-right",prevEl:".btn-arrow-left"},breakpoints:{375:{slidesPerView:1},768:{slidesPerView:2},1280:{slidesPerView:4}}});const t=document.querySelector(".btn-arrow-right"),r=document.querySelector(".btn-arrow-left");t.addEventListener("click",()=>{a<m.length-d&&(a++,g(a),l.update(),l.slideNext())}),r.addEventListener("click",()=>{a>0&&(a--,g(a),l.update(),l.slidePrev())}),l.on("reachEnd",()=>{t.disabled=!0}),l.on("reachBeginning",()=>{r.disabled=!0}),l.on("slideChange",()=>{t.disabled=!1,r.disabled=!1})}function q(){window.innerWidth>=1280?d=4:window.innerWidth>=769?d=3:window.innerWidth>=376?d=2:d=1}document.addEventListener("DOMContentLoaded",_);window.addEventListener("resize",()=>{q(),g(a)});
//# sourceMappingURL=commonHelpers.js.map
