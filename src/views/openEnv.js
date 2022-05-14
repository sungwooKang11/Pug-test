const opener = document.querySelector(".opener");
const envelope = document.querySelector(".envelope");
const letter = document.querySelector(".letter");

const openEnv = () => {
    opener.classList.add("active");
    letter.classList.add("popup");
}

const letterPage = document.querySelector(".letterPage");
const backBtn = document.querySelector(".backBtn");
const clicker = document.querySelector(".clicker");

const openModal = () => {
    letterPage.classList.remove("hidden");
}

const removeModal = () => {
    letterPage.classList.add("hidden");
}

envelope.addEventListener("click", openEnv);
opener.addEventListener("click", openEnv);
clicker.addEventListener("click", openModal);
backBtn.addEventListener("click", removeModal);




