const background = document.querySelector(".background");
const hamburger = document.querySelector(".hamburgerBtn");
const high =document.querySelector(".high");
const mid =document.querySelector(".mid");
const low =document.querySelector(".low");
const menu =document.querySelector(".menu");
const backBtn = document.querySelector(".backBtn");


hamburger.onclick= () => {
    background.classList.toggle("active");
    hamburger.classList.toggle("active");
    menu.classList.toggle("active");
    high.classList.toggle("active");
    mid.classList.toggle("active");
    low.classList.toggle("active");
}       

// reset = () => {
//     hamburger.classList.remove("active");
//     menu.classList.remove("active");
// }

// backBtn.addEventListener("click", reset);