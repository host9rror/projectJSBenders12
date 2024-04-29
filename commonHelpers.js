import{A as q,a as y,S as L}from"./assets/vendor-12a91897.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))i(n);new MutationObserver(n=>{for(const o of n)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function r(n){const o={};return n.integrity&&(o.integrity=n.integrity),n.referrerPolicy&&(o.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?o.credentials="include":n.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(n){if(n.ep)return;n.ep=!0;const o=r(n);fetch(n.href,o)}})();new q(".accordion-container",{duration:2500});const m=document.querySelector(".covers-section"),E=e=>{const t=e.getBoundingClientRect();return t.top>=0&&t.left>=0&&t.bottom<=(window.innerHeight||document.documentElement.clientHeight)&&t.right<=(window.innerWidth||document.documentElement.clientWidth)},S=()=>m.classList.add("animate"),k=()=>m.classList.remove("animate");window.addEventListener("scroll",()=>{E(m)?S():k()});E(m)&&S();const x=document.querySelectorAll(".ac-header");x.forEach(e=>{e.addEventListener("click",()=>{const t=e.nextElementSibling.querySelector(".faq-content"),r=e.querySelector("svg");t.classList.toggle("is-hidden"),t.classList.contains("is-hidden")?t.style.maxHeight=null:t.style.maxHeight=t.scrollHeight+"px",r.classList.toggle("rotate-180")})});const M=document.getElementById("menu-open_btn"),p=document.getElementById("mobile-menu"),P=document.getElementById("close-mobile-menu"),g=document.querySelector(".header-menu"),H=document.querySelector(".menu-text"),A=document.querySelector(".order-btn"),f=document.querySelector(".background"),I=document.querySelector(".header-logo"),v=()=>{f.classList.remove("background-visible"),g.classList.remove("header-menu_visible")},j=()=>{p.classList.remove("is-mobile-menu-open"),g.classList.remove("header-menu_visible")},N=(e,t)=>{const r=e.substring(1),i=document.getElementById(r);if(!i)return;const n=document.getElementsByTagName("header")[0].getBoundingClientRect().top,s=i.getBoundingClientRect().top-n;s<2e3&&(t=.8);const c=t*1e3,b=Math.ceil(s/20);let d=window.scrollY;const B=setInterval(()=>{d+=s/b,d=Math.min(Math.max(0,d),s),window.scrollTo(0,d),d===s&&clearInterval(B)},c/b)},w=e=>{if(e.preventDefault(),e.target.tagName==="A"){const t=e.target.getAttribute("href");N(t,2)}};g.addEventListener("click",e=>{j(),f.classList.toggle("background-visible"),w(e)});p.addEventListener("click",e=>{j(),w(e)});A.addEventListener("click",e=>{v(),w(e)});H.addEventListener("click",()=>{g.classList.toggle("header-menu_visible"),f.classList.toggle("background-visible")});M.addEventListener("click",()=>{p.classList.add("is-mobile-menu-open")});P.addEventListener("click",()=>{p.classList.remove("is-mobile-menu-open")});f.addEventListener("click",v);I.addEventListener("click",v);const $="https://portfolio-js.b.goit.study/api";document.addEventListener("DOMContentLoaded",async function(){try{const t=(await y(`${$}/projects`)).data;O(t);const r=new L(".swiper-container",{direction:"horizontal",keyboard:{enabled:!0,onlyInViewport:!0},touch:!0,navigation:{nextEl:".project-arrow-btn.arrow-right",prevEl:".project-arrow-btn.arrow-left"},slidesPerView:1,slidesPerGroup:1}),i=document.querySelector(".arrow-right"),n=document.querySelector(".arrow-left");i.addEventListener("click",function(){r.slideNext()}),n.addEventListener("click",function(){r.slidePrev()}),r.on("reachEnd",function(){i.disabled=!0}),r.on("reachBeginning",function(){n.disabled=!0}),r.on("fromEdge",function(){i.disabled=!1,n.disabled=!1})}catch(e){alert("An error occurred while getting projects"),console.error(e)}});function O(e){const t=e.map(r=>`
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
      `).join("");document.querySelector(".swiper-wrapper").innerHTML=t}const R="https://portfolio-js.b.goit.study/api";let l,u=[],a=0;async function T(){try{return(await y(`${R}/reviews`)).data}catch(e){return console.error("Error fetching reviews:",e),alert("An error occurred while getting reviews"),[]}}function h(e){const t=Math.min(e+4,u.length),i=u.slice(e,t).map(c=>`<ul class="reviews-list">
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
    </ul>`).join("");document.querySelector(".swiper-wrapper").innerHTML=i;const n=document.querySelector(".btn-arrow-right"),o=document.querySelector(".btn-arrow-left");t>=u.length?n.disabled=!0:n.disabled=!1,e===0?o.disabled=!0:o.disabled=!1,document.querySelectorAll(".swiper-slide").forEach(c=>{c.style.display="inline-block",c.style.overflow="hidden",c.style.whiteSpace="normal"})}async function _(){u=await T(),h(a),l=new L(".reviews-swiper-container",{direction:"horizontal",keyboard:{enabled:!0,onlyInViewport:!0},touch:!0,slidesPerView:4,spaceBetween:20,navigation:{nextEl:".btn-arrow-right",prevEl:".btn-arrow-left"}});const t=document.querySelector(".btn-arrow-right"),r=document.querySelector(".btn-arrow-left");t.addEventListener("click",function(){console.log("Next button clicked"),a<u.length-4&&(a+=1,h(a),l.update(),l.updateSize(),l.slideNext())}),r.addEventListener("click",function(){console.log("Prev button clicked"),a>0&&(a-=1,h(a),l.update(),l.updateSize(),l.slidePrev())}),l.on("reachEnd",function(){t.disabled=!0}),l.on("reachBeginning",function(){r.disabled=!0}),l.on("slideChange",function(){t.disabled=!1,r.disabled=!1})}_();
//# sourceMappingURL=commonHelpers.js.map
