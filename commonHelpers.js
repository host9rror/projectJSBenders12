import{A as j,S,N as q,K as x,M as P,a as C}from"./assets/vendor-67234e59.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))r(n);new MutationObserver(n=>{for(const s of n)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function o(n){const s={};return n.integrity&&(s.integrity=n.integrity),n.referrerPolicy&&(s.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?s.credentials="include":n.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(n){if(n.ep)return;n.ep=!0;const s=o(n);fetch(n.href,s)}})();new j(".accordion-container");new S(".about-swiper",{loop:!0,direction:"horizontal",allowSlideNext:!0,setWrapperSize:!0,modules:[q,x,P],simulateTouch:!0,grabCursor:!0,spaceBetween:0,speed:1e3,navigation:{nextEl:".skills-swiper-button"},breakpoints:{320:{slidesPerView:2},375:{slidesPerView:2},768:{slidesPerView:3},1440:{slidesPerView:6}},keyboard:{enabled:!0},mousewheel:{invert:!0}});const w=document.querySelector(".covers-section"),M=e=>{const t=e.getBoundingClientRect();return t.top>=0&&t.left>=0&&t.bottom<=(window.innerHeight||document.documentElement.clientHeight)&&t.right<=(window.innerWidth||document.documentElement.clientWidth)},H=()=>w.classList.add("animate"),$=()=>w.classList.remove("animate");window.addEventListener("scroll",()=>{M(w)?H():$()});M(w)&&H();document.addEventListener("DOMContentLoaded",function(){document.querySelectorAll(".ac-header").forEach(t=>{t.addEventListener("click",()=>{const o=t.nextElementSibling;if(o){const r=o.querySelector(".faq-content"),n=t.querySelector("svg");r&&(r.classList.toggle("is-hidden"),r.classList.contains("is-hidden")?r.style.maxHeight=null:r.style.maxHeight=r.scrollHeight+"px"),n&&n.classList.toggle("rotate-180")}})})});const O=document.getElementById("menu-open_btn"),h=document.getElementById("mobile-menu"),T=document.getElementById("close-mobile-menu"),b=document.querySelector(".header-menu"),W=document.querySelector(".menu-text"),z=document.querySelector(".order-btn"),y=document.querySelector(".background"),_=document.querySelector(".header-logo"),B=()=>{y.classList.remove("background-visible"),b.classList.remove("header-menu_visible")},I=()=>{h.classList.remove("is-mobile-menu-open"),b.classList.remove("header-menu_visible")},D=(e,t)=>{const o=e.substring(1),r=document.getElementById(o);if(!r)return;const n=document.getElementsByTagName("header")[0].getBoundingClientRect().top,i=r.getBoundingClientRect().top-n;i<2e3&&(t=.8);const c=t*1e3,g=Math.ceil(i/20);let u=window.scrollY;const A=setInterval(()=>{u+=i/g,u=Math.min(Math.max(0,u),i),window.scrollTo(0,u),u===i&&clearInterval(A)},c/g)},k=e=>{if(e.preventDefault(),e.target.tagName==="A"){const t=e.target.getAttribute("href");D(t,2)}};b.addEventListener("click",e=>{I(),y.classList.toggle("background-visible"),k(e)});h.addEventListener("click",e=>{I(),k(e)});z.addEventListener("click",e=>{B(),k(e)});W.addEventListener("click",()=>{b.classList.toggle("header-menu_visible"),y.classList.toggle("background-visible")});O.addEventListener("click",()=>{h.classList.add("is-mobile-menu-open")});T.addEventListener("click",()=>{h.classList.remove("is-mobile-menu-open")});y.addEventListener("click",B);_.addEventListener("click",B);const f=new S(".project",{loop:!0,slidesPerGroup:1,direction:"horizontal",allowSlideNext:!0,setWrapperSize:!0,modules:[q,x,P],simulateTouch:!0,grabCursor:!0,slidesPerView:1,spaceBetween:0,speed:1e3,navigation:{nextEl:".project-arrow-next",prevEl:".project-arrow-prev"},keyboard:{enabled:!0},mousewheel:{invert:!0}}),Y=document.querySelector(".project-arrow-next"),F=document.querySelector(".project-arrow-prev");Y.addEventListener("click",()=>{f.slideNext()});F.addEventListener("click",()=>{f.slidePrev()});function N(e){e.slides.map((t,o)=>{const r=t.querySelector(".project-content");r.style.display=o===e.activeIndex?"flex":"none"})}N(f);f.on("slideChange",()=>{N(f)});const K="https://portfolio-js.b.goit.study/api";let l,m=[],a=0,d;async function U(){try{return(await C(`${K}/reviews`)).data}catch(e){return console.error("Error fetching reviews:",e),alert("An error occurred while getting reviews"),[]}}async function v(e){const t=Math.min(e+d,m.length),r=m.slice(e,t).map(c=>`<li class="reviews-item">
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
    </li>`).join("");document.querySelector(".reviews-list").innerHTML=r;const n=document.querySelector(".btn-arrow-right"),s=document.querySelector(".btn-arrow-left");n.disabled=t>=m.length,s.disabled=e===0,document.querySelectorAll(".reviews-item").forEach((c,g)=>{c.classList.toggle("hidden",g>=d)})}async function G(){m=await U(),R(),v(a),l=new S(".reviews-swiper-container",{direction:"horizontal",keyboard:{enabled:!0,onlyInViewport:!0},touch:!0,slidesPerView:d,spaceBetween:20,navigation:{nextEl:".btn-arrow-right",prevEl:".btn-arrow-left"},breakpoints:{375:{slidesPerView:1},768:{slidesPerView:2},1280:{slidesPerView:4}}});const t=document.querySelector(".btn-arrow-right"),o=document.querySelector(".btn-arrow-left");t.addEventListener("click",()=>{a<m.length-d&&(a++,v(a),l.update(),l.slideNext())}),o.addEventListener("click",()=>{a>0&&(a--,v(a),l.update(),l.slidePrev())}),l.on("reachEnd",()=>{t.disabled=!0}),l.on("reachBeginning",()=>{o.disabled=!0}),l.on("slideChange",()=>{t.disabled=!1,o.disabled=!1})}function R(){window.innerWidth>=1280?d=4:window.innerWidth>=769?d=3:window.innerWidth>=376?d=2:d=1}document.addEventListener("DOMContentLoaded",G);window.addEventListener("resize",()=>{R(),v(a)});const J="https://portfolio-js.b.goit.study/api";async function Q({input:e,message:t}){try{return(await C.post(`${J}/requests`,{email:e,comment:t})).data}catch(o){return o.response.data.message}}const X={footerForm:document.querySelector(".footer-form"),footerResponceHeader:document.querySelector(".footer-modal-header"),footerResponceParagr:document.querySelector(".footer-modal-p"),footerBtnClose:document.querySelector(".footer-close-btn"),footerBackdrop:document.querySelector(".backdrop")},{footerForm:V,footerResponceHeader:Z,footerResponceParagr:L,footerBtnClose:ee,footerBackdrop:E}=X;V.addEventListener("submit",e=>{e.preventDefault(),ne(e.target.elements.email.value,e.target.elements.comment.value),te()});function te(){window.addEventListener("keydown",e=>{e.code==="Escape"&&p()}),E.addEventListener("click",e=>{e.target===E&&p()}),ee.addEventListener("click",p)}async function ne(e,t){const o=e.trim(),r=t.trim();try{const n=await Q({input:o,message:r});if(console.log(n),typeof n=="string"){L.textContent=n,p();return}oe(n),p(),V.reset()}catch(n){console.log(n)}}function oe({title:e,message:t}){t||(L.textContent=`${t}`),Z.textContent=`${e}`,L.textContent=`${t}`}function p(){E.classList.toggle("backdrop-hidden")}
//# sourceMappingURL=commonHelpers.js.map
