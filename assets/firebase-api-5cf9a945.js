import{i as d,g as l,o as g,d as n,a as f,s as r}from"./vendor-451a0b16.js";import{e as m,d as b,r as i,f as o}from"./refs-bd35c26c.js";const u={apiKey:"AIzaSyCuVjEugcofQtVmUyg1Bm1vmoIkKJ7-dfU",authDomain:"timer-b359e.firebaseapp.com",databaseURL:"https://timer-b359e-default-rtdb.europe-west1.firebasedatabase.app",projectId:"timer-b359e",storageBucket:"timer-b359e.appspot.com",messagingSenderId:"544796112036",appId:"1:544796112036:web:dea584d81b16885d642231"},v=d(u),c=l(v);async function w(t){if(t.isStart){m(i.stopBtn),b(i.startBtn);return}m(i.startBtn),b(i.stopBtn)}let D;const L=t=>{t.isStart?D=setInterval(()=>{const s=Date.now()-t.start;y(s)},10):t.isStart||clearInterval(D)};function y(t){const{minutes:a,secunds:s,milisecunds:e}=o(t);i.watch.innerHTML=`${a}:${s},${e}`}const B=t=>{t.length>0?i.listBtns.classList.add("btns-list-visible"):i.listBtns.classList.remove("btns-list-visible");const a=t.map(s=>`
    <li class="step-item">
      <div>
        <p class="step">Step ${s.step}</p>
        
        <p class="time">${o(s.time).minutes}:${o(s.time).secunds},${o(s.time).milisecunds}</p>
      </div>
      <button id="${s.id}" type="button" class="delete-btn">Delete</button>
    </li>
  `).join("");i.stepsList.innerHTML=a};function I(){const t=d(u),a=l(t);g(n(a,"data","Default"),s=>{const e=s.data();w(e),L(e)})}async function $(){const t=d(u),a=l(t);g(n(a,"list","Default"),s=>{const e=s.data().items.reverse();B(e)})}async function k(){const t=n(c,"data","Default");return(await f(t)).data()}async function R(t){await r(n(c,"data","Default"),{...t})}async function p(){const t=n(c,"list","Default");return(await f(t)).data()}async function U(t){const a=await p();r(n(c,"list","Default"),{items:[...a.items,t]})}async function j(t){const s=(await p()).items.filter(e=>e.id!==t);for(let e=0;e<s.length;e++)e===0&&s.step,s[e].step=e+1;r(n(c,"list","Default"),{items:s})}async function M(t){await p(),r(n(c,"list","Default"),{items:[]})}async function T(){const t=n(c,"users","tokens");return(await f(t)).data().data}export{$ as a,p as b,I as c,U as d,j as e,T as f,k as g,M as r,R as s};
//# sourceMappingURL=firebase-api-5cf9a945.js.map
