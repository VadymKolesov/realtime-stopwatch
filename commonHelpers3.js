import{r as e,f as i,u as l}from"./assets/firebase-api-62666e0f.js";import"./assets/vendor-451a0b16.js";e.loginForm.addEventListener("submit",u);e.loginInput.addEventListener("input",()=>{e.loginInput.classList.remove("login-input-required")});async function u(r){if(r.preventDefault(),!e.loginInput.value){i("Please, entrer a token","#"),e.loginInput.classList.add("login-input-required");return}const s=await l(),a=e.loginInput.value;let t=!1,o;for(let n of s)if(n.token===a){t=!0,o=n;break}if(!t)e.loginInput.classList.add("login-input-required"),i("Wrong token","#");else{e.loginInput.classList.remove("login-input-required"),localStorage.setItem("log",JSON.stringify({...o,logIn:Date.now()}));const n=location.pathname.split("/");location.pathname=`/${n[1]}`}}
//# sourceMappingURL=commonHelpers3.js.map
