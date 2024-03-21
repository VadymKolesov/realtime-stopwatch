import{i as p,g as f,T as w,o as h,d as r,a as m,s as u}from"./vendor-451a0b16.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))s(a);new MutationObserver(a=>{for(const o of a)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&s(l)}).observe(document,{childList:!0,subtree:!0});function n(a){const o={};return a.integrity&&(o.integrity=a.integrity),a.referrerPolicy&&(o.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?o.credentials="include":a.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(a){if(a.ep)return;a.ep=!0;const o=n(a);fetch(a.href,o)}})();const y={apiKey:"AIzaSyCuVjEugcofQtVmUyg1Bm1vmoIkKJ7-dfU",authDomain:"timer-b359e.firebaseapp.com",databaseURL:"https://timer-b359e-default-rtdb.europe-west1.firebasedatabase.app",projectId:"timer-b359e",storageBucket:"timer-b359e.appspot.com",messagingSenderId:"544796112036",appId:"1:544796112036:web:dea584d81b16885d642231"},L=p(y),c=f(L),q="/realtime-stopwatch/assets/warning-9b7d5026.svg",d=t=>{const o=Math.floor(t%864e5%36e5/6e4).toString().padStart(2,"0"),l=Math.floor(t%864e5%36e5%6e4/1e3).toString().padStart(2,"0"),I=t.toString().substr(t.toString().length-3,3);return{minutes:o,secunds:l,milisecunds:I}},b=t=>{t.disabled=!1,t.classList.remove("inactive-btn"),t.classList.add("active-btn")},S=t=>{t.disabled=!0,t.classList.add("inactive-btn"),t.classList.remove("active-btn")};function j(){if(!localStorage.getItem("log")||Date.now()-JSON.parse(localStorage.getItem("log")).logIn>864e5){localStorage.removeItem("log");const t=location.pathname.split("/");location.pathname=`/${t[1]}/login.html`}}function x(){const t=location.pathname.split("/");location.pathname=`/${t[1]}`}function F(){localStorage.removeItem("log");const t=location.pathname.split("/");location.pathname=`/${t[1]}/login.html`}function R(){return JSON.parse(localStorage.getItem("log")).user.split(" ")[0]}function A(){return localStorage.getItem("task")}function C(t,e){const n=document.createElement("p");n.insertAdjacentHTML("afterbegin",`<a href="${e}"><div class="alert-error"><img src="${q}"/><p>${t}</p></div></a>`),w({duration:2e3,node:n,className:"info",gravity:"bottom",position:"center",stopOnFocus:!1,style:{borderRadius:"15px",boxShadow:"rgba(0, 0, 0, 0.2) 0px 5px 15px",background:"linear-gradient(170deg,rgba(255, 255, 255, 1) 0%,rgba(245, 245, 245, 1) 100%)"}}).showToast()}async function D(t,e){document.getElementById(t)&&(document.getElementById(t).classList.remove("isNotBusy"),document.getElementById(t).classList.add("isBusy"),document.getElementById(t).parentElement.parentElement.firstElementChild.insertAdjacentHTML("beforeend",`<p class="user-busy-link">${e}</p>`),document.getElementById(t).parentElement.parentElement.style.pointerEvents="none")}function k(t){document.getElementById(t)&&(document.getElementById(t).classList.add("isNotBusy"),document.getElementById(t).classList.remove("isBusy"),document.getElementById(t).parentElement.parentElement.style.pointerEvents="all")}const i={readyBtn:document.querySelector(".ready-content"),startBtn:document.querySelector(".start-btn"),stopBtn:document.querySelector(".stop-btn"),watch:document.querySelector(".timer-clock"),readyContent:document.querySelector(".ready-btn"),loader:document.querySelector(".loader-wrap"),readyUsers:document.querySelector(".ready-users"),stepsList:document.querySelector(".steps-list"),listBtns:document.querySelector(".list-btns"),resetBtn:document.querySelector(".reset-btn"),sendBtn:document.querySelector(".send-btn"),resetBackdrop:document.querySelector(".reset-backdrop"),sendBackdrop:document.querySelector(".send-backdrop"),noBtn:document.querySelector(".no-btn"),yesBtn:document.querySelector(".yes-btn"),taskInput:document.querySelector(".task-input"),loginForm:document.querySelector(".login-form"),loginInput:document.querySelector(".login-input"),loginBtn:document.querySelector(".login-btn"),backBtn:document.querySelector(".back-btn"),logOutBtn:document.querySelector(".log-out-btn"),username:document.querySelector(".username"),taskWrap:document.querySelector(".task-wrap"),taskForm:document.querySelector(".task-form"),taskFormDescription:document.querySelector(".task-description"),navName:document.querySelector(".nav-name")};async function E(t){if(t.isStart){b(i.stopBtn),S(i.startBtn);return}b(i.startBtn),S(i.stopBtn)}let B;const $=t=>{t.isStart?B=setInterval(()=>{const n=Date.now()-t.start;O(n)},10):t.isStart||clearInterval(B)};function O(t){const{minutes:e,secunds:n,milisecunds:s}=d(t);i.watch.innerHTML=`${e}:${n},${s}`}const T=t=>{t.length>0?i.listBtns.classList.add("btns-list-visible"):i.listBtns.classList.remove("btns-list-visible");const e=t.map(n=>`
    <li class="step-item">
      <div>
        <p class="step">Step ${n.step}</p>
        
        <p class="time">${d(n.time).minutes}:${d(n.time).secunds},${d(n.time).milisecunds}</p>
      </div>
      <button id="${n.id}" type="button" class="delete-btn">Delete</button>
    </li>
  `).join("");i.stepsList.innerHTML=e};function H(){const t=p(y),e=f(t);h(r(e,"data","Default"),n=>{const s=n.data();E(s),$(s)})}async function J(){const t=p(y),e=f(t);h(r(e,"list","Default"),n=>{const s=n.data().items.reverse();T(s)})}async function P(){const t=r(c,"data","Default");return(await m(t)).data()}async function K(t){await u(r(c,"data","Default"),{...t})}async function g(){const t=r(c,"list","Default");return(await m(t)).data()}async function W(t){const e=await g();u(r(c,"list","Default"),{items:[...e.items,t]})}async function z(t){const n=(await g()).items.filter(s=>s.id!==t);for(let s=0;s<n.length;s++)s===0&&n.step,n[s].step=s+1;u(r(c,"list","Default"),{items:n})}async function V(t){await g(),u(r(c,"list","Default"),{items:[]})}async function Q(){const t=r(c,"users","tokens");return(await m(t)).data().data}async function N(t,e){await u(r(c,"online",t),{item:e})}async function v(t){const e=r(c,"online",t);return(await m(e)).data().item}async function G(t){const e=await v(t);if(Date.now()-e.lastTime<3e4){D(t,e.user);return}else{const s={...e,user:"",isBusy:!1};N(t,s),k(t)}}async function X(t){const e=await v(t),n=JSON.parse(localStorage.getItem("log")).user,s=e.user;if(e.isBusy&&n!==s){const a=location.pathname.split("/");location.pathname=`/${a[1]}`}}export{G as a,X as b,j as c,H as d,J as e,C as f,P as g,K as h,g as i,W as j,z as k,F as l,V as m,R as n,x as o,A as p,Q as q,i as r,N as s};
//# sourceMappingURL=firebase-api-fdd5c21b.js.map
