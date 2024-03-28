// function openMenu(){
//     document.getElementById("btn-open-menu").style.display = "none";
//     document.getElementById("nav1").style.display = "flex";
//     document.getElementById("btn-close-menu").style.display = "block";
// }

// function closeMenu(){
//     document.getElementById("btn-open-menu").style.display = "block";
//     document.getElementById("nav1").style.display = "none";
//     document.getElementById("btn-close-menu").style.display = "none";
// }

const nav = document.querySelector("#nav");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");

abrir.addEventListener("click", () => {
    nav.classList.add("visible");
})

cerrar.addEventListener("click", () => {
    nav.classList.remove("visible");
})