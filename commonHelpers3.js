import{r as n,f as e,u as l}from"./assets/firebase-api-a01a59e8.js";import"./assets/vendor-451a0b16.js";n.loginForm.addEventListener("submit",u);n.loginInput.addEventListener("input",()=>{n.loginInput.classList.remove("login-input-required")});async function u(r){if(r.preventDefault(),!n.loginInput.value){e("Please, entrer a token","#"),n.loginInput.classList.add("login-input-required");return}try{n.loginBtn.innerHTML='<div class="lds-ring"><div></div><div></div><div></div><div></div></div>';const s=await l(),a=n.loginInput.value;let t=!1,o;for(let i of s)if(i.token===a){t=!0,o=i;break}if(!t)n.loginInput.classList.add("login-input-required"),e("Wrong token","#");else{n.loginInput.classList.remove("login-input-required"),localStorage.setItem("log",JSON.stringify({...o,logIn:Date.now()}));const i=location.pathname.split("/");location.pathname=`/${i[1]}`}}catch{e("Oops, something went wrong! Please, try again","#")}finally{n.loginBtn.innerHTML="Log in"}}
//# sourceMappingURL=commonHelpers3.js.map
