import{a as C,S as v,i as l}from"./assets/vendor-da186403.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&c(o)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function c(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();async function E(s,n=1,r=15){const c="https://pixabay.com",e="/api/",t=new URLSearchParams({key:"42342437-5c4c341e915bce4954251eee0",q:s,image_type:"photo",orientation:"horizontal",safesearch:!0,page:n,per_page:r}),o=c+e+"?"+t;try{const a=await C.get(o);if(!a.data.hits)throw new Error("Error fetching data: No hits");return a.data}catch(a){throw console.error("Error fetching data:",a),a}}function w(s){const n=document.querySelector(".js-container"),r=document.createDocumentFragment();n.innerHTML="",s.hits.forEach(e=>{const t=document.createElement("div");t.classList.add("image-card");const o=document.createElement("a");o.href=e.largeImageURL;const a=document.createElement("img");a.src=e.webformatURL,a.alt=e.tags,o.appendChild(a),t.appendChild(o);const i=document.createElement("div");i.classList.add("image-info");const f=document.createElement("span");f.textContent=`Likes: ${e.likes}`;const h=document.createElement("span");h.textContent=`Views: ${e.views}`;const y=document.createElement("span");y.textContent=`Comments: ${e.comments}`;const g=document.createElement("span");g.textContent=`Downloads: ${e.downloads}`,i.appendChild(f),i.appendChild(h),i.appendChild(y),i.appendChild(g),t.appendChild(i),r.appendChild(t)}),n.appendChild(r),new v(".js-container .image-card a",{captionsData:"alt",captionDelay:250}).refresh()}const S=document.getElementById("search-form"),p=document.querySelector(".js-container"),m=document.querySelector(".loader"),d=document.getElementById("load-more-btn");let u=1,L="",b=0;S.addEventListener("submit",async function(s){s.preventDefault();const n=document.getElementById("search-input").value.trim();if(!n){l.warning({title:"Warning",message:"Please enter a search images"});return}m.style.display="block",p.innerHTML="",d.style.display="none",u=1,L=n;try{const r=await E(n,u);r.hits.length===0?l.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"}):(b=r.totalHits,w(r),r.hits.length>=15&&(d.style.display="block"))}catch{p.innerHTML===""&&l.error({title:"Error",message:"An error occurred while searching for images"})}finally{m.style.display="none"}});d.addEventListener("click",async function(s){s.preventDefault(),m.style.display="block";try{u++;const n=await E(L,u);if(n.hits.length>0){const r=document.querySelector(".image-card").getBoundingClientRect().height;w(n),window.scrollBy({top:r*2,behavior:"smooth"})}}catch{d.style.display="none",l.warning({title:"Warning",message:"No more images to load"})}finally{p.querySelectorAll(".image-card").length>=b&&(d.style.display="none",l.info({title:"Info",message:"We're sorry, but you've reached the end of search results."})),m.style.display="none"}});
//# sourceMappingURL=commonHelpers.js.map
