const nav =document.querySelector("#nav");
const Abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");

Abrir.addEventListener("click", () =>{
    nav.classList.add("visible")
})

cerrar.addEventListener("click",() => { 
   nav.classList.remove("visible");
})