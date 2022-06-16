const actionFl = document.querySelector(".flowerCon");
const core = document.querySelector(".core");
const topL = document.querySelector(".topL");
const leftL = document.querySelector(".leftL");
const rightL = document.querySelector(".rightL");
const bottomL = document.querySelector(".bottomL");



const handleClick = () => {
    topL.classList.toggle("active");
    leftL.classList.toggle("active");
    rightL.classList.toggle("active");
    bottomL.classList.toggle("active");
    core.classList.toggle("disappear")
}

actionFl.addEventListener("click", handleClick);