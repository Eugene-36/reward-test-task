!function(){"use strict";const e="active",t=document.getElementById("header-nav"),n=document.getElementById("burger");t.addEventListener("click",(function(t){const n=t.target.closest(".header-nav-wrapper");n&&n.classList.toggle(e)})),n.addEventListener("click",(function(){n.classList.toggle(e),t.classList.toggle(e)})),function(e,t){const n=document.querySelector(".nav-header");function c(){const c=window.scrollY;n.style.background=c>e?t:""}window.addEventListener("scroll",c),c()}(5,"#fff")}();