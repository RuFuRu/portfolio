(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&o(l)}).observe(document,{childList:!0,subtree:!0});function n(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(e){if(e.ep)return;e.ep=!0;const r=n(e);fetch(e.href,r)}})();function i(){const s={x:0,y:0},t=document.querySelectorAll(".cursor-circle");t.forEach(o=>{o.x=0,o.y=0}),window.addEventListener("mousemove",o=>{s.x=o.pageX,s.y=o.pageY}),window.addEventListener("click",()=>{let o=3;t[0].setAttribute("style",`transform: scale(${o});`);const e=setInterval(()=>{t[0].setAttribute("style",`transform: scale(${(o-=.2).toFixed(2)})`),t[0].getAttribute("style")==="transform: scale(0.20)"&&clearInterval(e)},30)});function n(){let o=s.x,e=s.y;t.forEach((r,l)=>{r.style.left=o-12+"px",r.style.top=e-12+"px",r.style.scale=(t.length-l)/t.length,r.x=o,r.y=e;const c=t[l+1]||t[0];o+=(c.x-o)*.5,e+=(c.y-e)*.5}),requestAnimationFrame(n)}n()}function a(){const s=document.querySelectorAll(".projects-grid-item-container > img");console.log(s),s.forEach(t=>{const n=t.parentElement.querySelector(".projects-overlay");t.addEventListener("mouseover",()=>{n.setAttribute("style","display: block")}),t.addEventListener("mouseout",()=>{n.removeAttribute("style")})})}function u(){const s=document.querySelector(".scroll-further"),t=document.documentElement,n=setInterval(()=>{t.scrollTop>=300&&(s.classList.add("inactive"),clearInterval(n))},300)}i();a();u();
