import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */let t={email:"",message:""};const a=document.querySelector(".feedback-form");function o(){const e=JSON.parse(localStorage.getItem("feedback-form-state"));if(e!==null){t=e;for(const l in e)a.elements[l].value=e[l]}}o();function r(e){e.target.name==="email"?t.email=e.target.value:t.message=e.target.value,localStorage.setItem("feedback-form-state",JSON.stringify(t))}function m(e){if(e.preventDefault(),t.email===""||t.message===""){alert("Fill please all fields");return}else console.log(t);a.reset(),localStorage.removeItem("feedback-form-state"),t={email:"",message:""}}a.addEventListener("input",r);a.addEventListener("submit",m);
//# sourceMappingURL=commonHelpers2.js.map
