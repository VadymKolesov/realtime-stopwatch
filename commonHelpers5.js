import{D as n,A as L,r as t,E as a,F as d,G as y,H as p,I as m,c as v,o as B,l as f,J as g,K as h,L as w,M as k,N as S}from"./assets/firebase-api-382ecb1f.js";import{n as b}from"./assets/vendor-451a0b16.js";async function E(){const e=await n();if(e.isReady<2){const s=e.isReady+1;localStorage.setItem("readyID",s),L(t.readyBtn),a({...e,isReady:s})}}async function D(){const e=await n(),s=Date.now();a({...e,isStart:!0,start:s})}async function I(){const e=JSON.parse(localStorage.getItem("log")).user,s=await n(),o=await d(),c=await y(),i=Date.now(),r=o.items.length>0?o.items.length+1:1,l=i-s.start,u={id:b(),user:e,task:c,step:r,time:l};p(u),a({...s,isReady:0,isStart:!1,stop:i})}function N(){t.resetBackdrop.classList.remove("visually-hidden"),document.querySelector("body").style.overflow="hidden",t.resetBackdrop.addEventListener("click",R),t.listBtns.classList.add("button-hidden"),document.addEventListener("keydown",O)}function R(e){(e.target.classList.contains("reset-backdrop")||e.target.classList.contains("no-btn"))&&(document.querySelector("body").style.overflow="auto",t.resetBackdrop.classList.add("visually-hidden"),t.listBtns.classList.remove("button-hidden")),e.target.classList.contains("yes-btn")&&(document.querySelector("body").style.overflow="auto",t.resetBackdrop.classList.add("visually-hidden"),m())}function O(e){e.keyCode===27&&(document.querySelector("body").style.overflow="auto",t.resetBackdrop.classList.add("visually-hidden"),t.listBtns.classList.remove("button-hidden"))}v();t.readyBtn.addEventListener("click",E);t.startBtn.addEventListener("click",D);t.stopBtn.addEventListener("click",I);t.resetBtn.addEventListener("click",N);t.backBtn.addEventListener("click",B);t.logOutBtn.addEventListener("click",f);t.stepsList.addEventListener("click",T);t.sendBtn.addEventListener("click",H);document.addEventListener("scroll",P);g();h();w();const q=t.stepsList.getBoundingClientRect().top,C=window.innerHeight;t.navName.innerHTML=JSON.parse(localStorage.getItem("log")).user;t.taskForm.addEventListener("submit",J);function J(e){e.preventDefault(),k(t.taskInput.value)}function P(){const e=window.scrollY;t.listBtns&&e>=q-C?t.listBtns.classList.remove("button-hidden"):t.listBtns.classList.add("button-hidden")}async function T(e){e.target.nodeName==="BUTTON"&&S(e.target.id)}async function H(){t.sendBackdrop.classList.remove("visually-hidden");const e=await d();e.type="realtime-stop-watch",t.listBtns.classList.add("button-hidden");try{const s=await fetch("https://script.google.com/macros/s/AKfycbwQfPNpDsZK7s3qT5Jt8PBS7B2YnK_ILFqPV65fPhuc7J9jd8vJYz4g8oSnoR0GqPSE/exec",{method:"POST",body:JSON.stringify(e)})}catch{onErrorToast("Oops. Something went wrong.","#")}finally{t.listBtns.classList.remove("button-hidden"),t.sendBackdrop.classList.add("visually-hidden")}}
//# sourceMappingURL=commonHelpers5.js.map
