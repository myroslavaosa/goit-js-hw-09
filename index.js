import{S as g}from"./assets/vendor-CgTBfC_f.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function c(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(t){if(t.ep)return;t.ep=!0;const o=c(t);fetch(t.href,o)}})();const d=[{preview:"https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820__480.jpg",original:"https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820_1280.jpg",description:"Hokkaido Flower"},{preview:"https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg",description:"Container Haulage Freight"},{preview:"https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg",description:"Aerial Beach View"},{preview:"https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg",original:"https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg",description:"Flower Blooms"},{preview:"https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg",original:"https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg",description:"Alpine Mountains"},{preview:"https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg",description:"Mountain Lake Sailing"},{preview:"https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg",description:"Alpine Spring Meadows"},{preview:"https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg",description:"Nature Landscape"},{preview:"https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg",description:"Lighthouse Coast Sea"}],m={galleryList:document.querySelector(".gallery")};function h(e){return`<li class="gallery-item">
  <a class="gallery-link" href="${e.original}">
    <img
      class="gallery-image"
      src="${e.preview}"
      alt="${e.description}"
      title="${e.description}"
    />
  </a>
</li>`}function u(e){return e.map(h).join("")}const f=u(d);m.galleryList.innerHTML=f;let l=new g(".gallery a");l.on("show.simplelightbox",function(){});l.on("error.simplelightbox",function(e){console.log(e)});const s={email:"",message:""},a=document.querySelector(".feedback-form");document.querySelector("input");document.querySelector("textarea");const p=JSON.parse(localStorage.getItem("feedback-form-state"))||{};a.elements.email.value=p.email||"";a.elements.message.value=p.message||"";a.addEventListener("input",()=>{s.email=a.elements.email.value,s.message=a.elements.message.value,localStorage.setItem("feedback-form-state",JSON.stringify(s))});a.addEventListener("submit",e=>{if(e.preventDefault(),e.target.elements.email.value===""||e.target.elements.message.value===""){alert("Fill please all fields");return}console.log(e.target.elements.email.value,e.target.elements.message.value),a.reset(),localStorage.clear()});a.addEventListener("focus",e=>{(e.target.tagName==="INPUT"||e.target.tagName==="TEXTAREA")&&e.target.value===""&&(e.target.placeholder="Type area")},!0);a.addEventListener("blur",e=>{(e.target.tagName==="INPUT"||e.target.tagName==="TEXTAREA")&&e.target.placeholder==="Type area"&&(e.target.placeholder="")},!0);
//# sourceMappingURL=index.js.map
