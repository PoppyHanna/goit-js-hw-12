import{S as g,i as l}from"./assets/vendor-7659544d.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&a(o)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();function y(c){const n="https://pixabay.com",r="/api/",a=new URLSearchParams({key:"42342437-5c4c341e915bce4954251eee0",q:c,image_type:"photo",orientation:"horizontal",safesearch:!0}),e=n+r+"?"+a;return fetch(e).then(t=>{if(!t.ok)throw new Error("Error fetching data: "+t.status);return t.json()}).catch(t=>{console.error("Error fetching data:",t)})}function E(c){const n=document.querySelector(".js-container"),r=document.createDocumentFragment();n.innerHTML="",c.hits.forEach(e=>{const t=document.createElement("div");t.classList.add("image-card");const o=document.createElement("a");o.href=e.largeImageURL;const i=document.createElement("img");i.src=e.webformatURL,i.alt=e.tags,o.appendChild(i),t.appendChild(o);const s=document.createElement("div");s.classList.add("image-info");const d=document.createElement("span");d.textContent=`Likes: ${e.likes}`;const m=document.createElement("span");m.textContent=`Views: ${e.views}`;const u=document.createElement("span");u.textContent=`Comments: ${e.comments}`;const f=document.createElement("span");f.textContent=`Downloads: ${e.downloads}`,s.appendChild(d),s.appendChild(m),s.appendChild(u),s.appendChild(f),t.appendChild(s),r.appendChild(t)}),n.appendChild(r),new g(".js-container .image-card a",{captionsData:"alt",captionDelay:250}).refresh()}const L=document.getElementById("search-form"),h=document.querySelector(".js-container"),p=document.querySelector(".loader");L.addEventListener("submit",function(c){c.preventDefault();const n=document.getElementById("search-input").value.trim();if(!n){l.warning({title:"Warning",message:"Please enter a search images"});return}p.style.display="block",h.innerHTML="",y(n).then(r=>{r.hits.length===0?l.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"}):E(r)}).catch(r=>{h.innerHTML===""&&(console.error("Error fetching data:",r),l.error({title:"Error",message:"An error occurred while searching for images"}))}).finally(()=>{p.style.display="none"})});
//# sourceMappingURL=commonHelpers.js.map
