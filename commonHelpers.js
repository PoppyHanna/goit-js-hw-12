import{a as x,S as C,i as f}from"./assets/vendor-da186403.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))d(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const r of t.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&d(r)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function d(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();async function w(c,n=1,o=15){const d="https://pixabay.com",e="/api/",t=new URLSearchParams({key:"42342437-5c4c341e915bce4954251eee0",q:c,image_type:"photo",orientation:"horizontal",safesearch:!0,page:n,per_page:o}),r=d+e+"?"+t;try{const a=await x.get(r);if(!a.data.hits)throw new Error("Error fetching data: No hits");return a.data}catch(a){throw console.error("Error fetching data:",a),a}}function I(c){const n=document.querySelector(".js-container"),o=document.createDocumentFragment();c.hits.forEach(e=>{const t=document.createElement("li");t.classList.add("image-card");const r=document.createElement("div");r.classList.add("li-cont");const a=document.createElement("a");a.href=e.largeImageURL;const i=document.createElement("img");i.classList.add("pic-card"),i.src=e.webformatURL,i.alt=e.tags,a.appendChild(i),r.appendChild(a);const l=document.createElement("div");l.classList.add("item-text");const s=document.createElement("ul");s.classList.add("image-info");const m=document.createElement("li");m.textContent=`Likes: ${e.likes}`;const u=document.createElement("li");u.textContent=`Views: ${e.views}`;const p=document.createElement("li");p.textContent=`Comments: ${e.comments}`;const h=document.createElement("li");h.textContent=`Downloads: ${e.downloads}`,s.appendChild(m),s.appendChild(u),s.appendChild(p),s.appendChild(h),l.appendChild(s),r.appendChild(l),t.appendChild(r),o.appendChild(t)}),n.appendChild(o),new C(".js-container .image-card a",{captionsData:"alt",captionDelay:250}).refresh()}function S(c){const n=document.querySelector(".js-container"),o=document.createDocumentFragment();c.hits.forEach(e=>{const t=document.createElement("li");t.classList.add("image-card");const r=document.createElement("div");r.classList.add("li-cont");const a=document.createElement("a");a.href=e.largeImageURL;const i=document.createElement("img");i.classList.add("pic-card"),i.src=e.webformatURL,i.alt=e.tags,a.appendChild(i),r.appendChild(a);const l=document.createElement("div");l.classList.add("item-text");const s=document.createElement("ul");s.classList.add("image-info");const m=document.createElement("li");m.textContent=`Likes: ${e.likes}`;const u=document.createElement("li");u.textContent=`Views: ${e.views}`;const p=document.createElement("li");p.textContent=`Comments: ${e.comments}`;const h=document.createElement("li");h.textContent=`Downloads: ${e.downloads}`,s.appendChild(m),s.appendChild(u),s.appendChild(p),s.appendChild(h),l.appendChild(s),r.appendChild(l),t.appendChild(r),o.appendChild(t)}),n.appendChild(o),new C(".js-container .image-card a",{captionsData:"alt",captionDelay:250}).refresh()}const D=document.getElementById("search-form"),L=document.querySelector(".js-container"),g=document.querySelector(".loader"),y=document.getElementById("load-more-btn");let E=1,b="",v=0;D.addEventListener("submit",async function(c){c.preventDefault();const n=document.getElementById("search-input").value.trim();if(!n){f.warning({title:"Warning",message:"Please enter a search images"});return}g.style.display="block",y.style.display="none",E=1,b=n;try{const o=await w(n,E);o.hits.length===0?f.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"}):(v=o.totalHits,I(o),o.hits.length>=15&&(y.style.display="block"))}catch{L.innerHTML===""&&f.error({title:"Error",message:"An error occurred while searching for images"})}finally{g.style.display="none"}});y.addEventListener("click",async function(c){c.preventDefault(),g.style.display="block";try{E++;const n=await w(b,E);if(n.hits.length>0){const o=document.querySelector(".image-card").getBoundingClientRect().height;S(n),window.scrollBy({top:o*2,behavior:"smooth"})}}catch{y.style.display="none",f.warning({title:"Warning",message:"No more images to load"})}finally{L.querySelectorAll(".image-card").length>=v&&(y.style.display="none",f.info({title:"Info",message:"We're sorry, but you've reached the end of search results."})),g.style.display="none"}});
//# sourceMappingURL=commonHelpers.js.map
