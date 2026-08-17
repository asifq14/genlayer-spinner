const button=document.querySelector("#toggle");
const spinner=document.querySelector(".spinner");
button.addEventListener("click",()=>{
 const paused=spinner.classList.toggle("is-paused");
 document.body.classList.toggle("paused",paused);
 button.textContent=paused?"Resume animation":"Pause animation";
});
