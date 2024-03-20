import{c as L,r as t,o as f,l as v,a as r,g as a,b as g}from"./assets/refs-bd35c26c.js";import{c as y,a as S,g as i,s as c,b,d as h,e as D,r as E}from"./assets/firebase-api-5cf9a945.js";import{n as I}from"./assets/vendor-451a0b16.js";const B="/realtime-stopwatch/assets/edit-0c3c4362.svg";L();d();t.backBtn.addEventListener("click",f);t.logOutBtn.addEventListener("click",v);t.startBtn.addEventListener("click",T);t.stopBtn.addEventListener("click",w);t.stepsList.addEventListener("click",q);t.resetBtn.addEventListener("click",H);t.resetBackdrop.addEventListener("click",M);t.taskInput.addEventListener("input",()=>{t.taskInput.classList.remove("task-input-required")});t.taskForm.addEventListener("submit",N);t.navName.innerHTML=JSON.parse(localStorage.getItem("log")).user;y();S();async function T(){if(!localStorage.getItem("task")){t.taskInput.classList.add("task-input-required"),r("Please, enter the task","#task");return}const e=Date.now(),s=await i();t.taskInput.classList.remove("task-input-required"),c({...s,isStart:!0,start:e})}async function w(){const e=Date.now(),s=await i(),o=await b(),l=o.items.length>0?o.items.length+1:1,u=e-s.start,k=localStorage.getItem("task"),m=JSON.parse(localStorage.getItem("log")).user,p={id:I(),step:l,time:u,user:m,task:k};h(p),c({...s,isStart:!1,stop:e})}async function q(e){e.target.nodeName==="BUTTON"&&D(e.target.id)}function H(){t.resetBackdrop.classList.remove("visually-hidden"),document.querySelector("body").style.overflow="hidden",document.addEventListener("keydown",n)}function M(e){e.target.classList.contains("no-btn")||e.target.classList.contains("backdrop")?t.resetBackdrop.classList.add("visually-hidden"):e.target.classList.contains("yes-btn")&&(E(),t.resetBackdrop.classList.add("visually-hidden")),document.querySelector("body").style.overflow="visible",document.removeEventListener("keydown",n)}function n(e){e.code==="Escape"&&(t.resetBackdrop.classList.add("visually-hidden"),document.querySelector("body").style.overflow="visible",document.removeEventListener("keydown",n))}function N(e){if(e.preventDefault(),!t.taskInput.value){t.taskInput.classList.add("task-input-required"),r("Please, enter the task","#task");return}localStorage.setItem("task",t.taskInput.value),d()}function d(){if(!localStorage.getItem("task")){t.username.innerHTML=`Hi ${a()},`;return}t.taskWrap.insertAdjacentHTML("afterbegin",`<button type="button" class="edit-btn"><img class="edit-icon" src="${B}"/></button>`),t.taskForm.classList.add("task-form-hidden"),t.username.innerHTML=`Great ${a()}!`,t.taskFormDescription.innerHTML=`The task you'll be timing is "${g()}".`,document.querySelector(".edit-btn").addEventListener("click",F)}function F(){localStorage.removeItem("task"),document.querySelector(".edit-btn").remove(),t.taskForm.classList.remove("task-form-hidden"),t.username.innerHTML=`Hi ${a()},`,t.taskFormDescription.innerHTML='Before you begin, please enter the name of the task in the box below and click on the "Save" button.'}
//# sourceMappingURL=commonHelpers.js.map
