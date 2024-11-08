import{S as l,i as m}from"./assets/vendor-CNpq9t8i.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();const f=t=>`
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
    `,u="https://pixabay.com/api/",d=t=>{const o=new URLSearchParams({q:t,image_type:"photo",orientation:"horizontal",safesearch:!0,key:"46938898-491ce0dea342e81df1da49dcf"});return fetch(`${u}?${o}`).then(s=>{if(!s.ok)throw new Error(s.status);return s.json()})},n=document.querySelector(".search-form"),c=document.querySelector(".gallery");new l(".gallery a");const h=t=>{t.preventDefault();const o=n.elements.searchQuery.value.trim();d(o).then(s=>{s.hits.length===0&&(m.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),c.innerHTML="",n.reset());const i=s.hits.map(e=>f(e)).join("");c.innerHTML=i}).catch(s=>{console.log(s)})};n.addEventListener("submit",h);
//# sourceMappingURL=index.js.map
