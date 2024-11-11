import{S as m,i as d}from"./assets/vendor-CNpq9t8i.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function r(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(e){if(e.ep)return;e.ep=!0;const s=r(e);fetch(e.href,s)}})();const f=t=>`
    <a class="gallery-link" href="${t.largeImageURL}">    
                   <div class="gallery-item">
                       <img class="gallery-item__image" src="${t.webformatURL}" alt="${t.tags}" loading="lazy" />
                       <div class="info">
                           <p class="info__item">
                           <b class="info__item-name">Likes</b>
                           ${t.likes}
                           </p>
                           <p class="info__item">
                           <b class="info__item-name">Views</b>
                           ${t.views}
                           </p>
                           <p class="info__item">
                           <b class="info__item-name">Comments</b>
                           ${t.comments}
                           </p>
                           <p class="info__item">
                           <b class="info__item-name">Downloads</b>
                           ${t.downloads}
                           </p>
                       </div>
                   </div>
               </a>
    `,u="https://pixabay.com/api/",h=t=>{const o=new URLSearchParams({q:t,image_type:"photo",orientation:"horizontal",safesearch:!0,key:"46938898-491ce0dea342e81df1da49dcf"});return fetch(`${u}?${o}`).then(r=>{if(!r.ok)throw new Error(r.status);return r.json()})},n=document.querySelector(".search-form"),c=document.querySelector(".gallery"),l=document.querySelector(".loader");let p=new m(".gallery a");const y=t=>{t.preventDefault();const o=n.elements.searchQuery.value.trim();l.classList.remove("is-hidden"),h(o).then(r=>{r.hits.length===0&&(d.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),c.innerHTML="",n.reset());const i=r.hits.map(e=>f(e)).join("");c.innerHTML=i,p.refresh()}).catch(r=>{console.log(r)}).finally(r=>{l.classList.add("is-hidden")})};n.addEventListener("submit",y);
//# sourceMappingURL=index.js.map
