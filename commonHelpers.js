import{c as L,a as r,b as v,s as g,r as t,o as y,l as h,d as S,e as b,f as i,g as c,h as d,i as D,j as I,k as w,m as B,n as a,p as E}from"./assets/firebase-api-af5d4e93.js";import{n as T}from"./assets/vendor-451a0b16.js";const q="/realtime-stopwatch/assets/edit-0c3c4362.svg";L();l();r("default_stopwatch_1");v("default_stopwatch_1");setInterval(()=>{const e=JSON.parse(localStorage.getItem("log")).user;g("default_stopwatch_1",{lastTime:Date.now(),user:e,isBusy:!0})},5e3);r("default_stopwatch_1");t.backBtn.addEventListener("click",y);t.logOutBtn.addEventListener("click",h);t.startBtn.addEventListener("click",H);t.stopBtn.addEventListener("click",M);t.stepsList.addEventListener("click",N);t.resetBtn.addEventListener("click",_);t.resetBackdrop.addEventListener("click",O);t.taskInput.addEventListener("input",()=>{t.taskInput.classList.remove("task-input-required")});t.taskForm.addEventListener("submit",F);t.navName.innerHTML=JSON.parse(localStorage.getItem("log")).user;S();b();async function H(){if(!localStorage.getItem("task")){t.taskInput.classList.add("task-input-required"),i("Please, enter the task","#task");return}const e=Date.now(),s=await c();t.taskInput.classList.remove("task-input-required"),d({...s,isStart:!0,start:e})}async function M(){const e=Date.now(),s=await c(),o=await D(),u=o.items.length>0?o.items.length+1:1,k=e-s.start,m=localStorage.getItem("task"),p=JSON.parse(localStorage.getItem("log")).user,f={id:T(),step:u,time:k,user:p,task:m};I(f),d({...s,isStart:!1,stop:e})}async function N(e){e.target.nodeName==="BUTTON"&&w(e.target.id)}function _(){t.resetBackdrop.classList.remove("visually-hidden"),document.querySelector("body").style.overflow="hidden",document.addEventListener("keydown",n)}function O(e){e.target.classList.contains("no-btn")||e.target.classList.contains("backdrop")?t.resetBackdrop.classList.add("visually-hidden"):e.target.classList.contains("yes-btn")&&(B(),t.resetBackdrop.classList.add("visually-hidden")),document.querySelector("body").style.overflow="visible",document.removeEventListener("keydown",n)}function n(e){e.code==="Escape"&&(t.resetBackdrop.classList.add("visually-hidden"),document.querySelector("body").style.overflow="visible",document.removeEventListener("keydown",n))}function F(e){if(e.preventDefault(),!t.taskInput.value){t.taskInput.classList.add("task-input-required"),i("Please, enter the task","#task");return}localStorage.setItem("task",t.taskInput.value),l()}function l(){if(!localStorage.getItem("task")){t.username.innerHTML=`Hi ${a()},`;return}t.taskWrap.insertAdjacentHTML("afterbegin",`<button type="button" class="edit-btn"><img class="edit-icon" src="${q}"/></button>`),t.taskForm.classList.add("task-form-hidden"),t.username.innerHTML=`Great ${a()}!`,t.taskFormDescription.innerHTML=`The task you'll be timing is "${E()}".`,document.querySelector(".edit-btn").addEventListener("click",$)}function $(){localStorage.removeItem("task"),document.querySelector(".edit-btn").remove(),t.taskForm.classList.remove("task-form-hidden"),t.username.innerHTML=`Hi ${a()},`,t.taskFormDescription.innerHTML='Before you begin, please enter the name of the task in the box below and click on the "Save" button.'}
//# sourceMappingURL=commonHelpers.js.map