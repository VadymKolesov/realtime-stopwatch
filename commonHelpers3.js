import{r as n,f as e,v as a}from"./assets/firebase-api-382ecb1f.js";import"./assets/vendor-451a0b16.js";n.loginForm.addEventListener("submit",u);n.loginInput.addEventListener("input",()=>{n.loginInput.classList.remove("login-input-required")});async function u(r){if(r.preventDefault(),!n.loginInput.value){e("Please, entrer a token","#"),n.loginInput.classList.add("login-input-required");return}try{n.loginBtn.innerHTML='<div class="lds-ring"><div></div><div></div><div></div><div></div></div>';const s=await a(),l=n.loginInput.value;let i=!1,t;for(let o of s)if(o.token===l){i=!0,t=o;break}i?(n.loginInput.classList.remove("login-input-required"),localStorage.setItem("log",JSON.stringify({...t,logIn:Date.now()})),location.pathname="/"):(n.loginInput.classList.add("login-input-required"),e("Wrong token","#"))}catch{e("Oops, something went wrong! Please, try again","#")}finally{n.loginBtn.innerHTML="Log in"}}
//# sourceMappingURL=commonHelpers3.js.map
