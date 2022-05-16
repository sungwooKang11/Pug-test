const opener = document.querySelector(".opener");
const envelope = document.querySelector(".envelope");
const letter = document.querySelector(".letter");

const openEnv = () => {  //봉투 열기
    opener.classList.add("active");
    letter.classList.add("popup");
}


const letterPage = document.querySelector(".letterPage");
const backBtn = document.querySelector(".backBtn");
const clicker = document.querySelector(".clicker");

const openModal = () => {   //편지 세부창 열기
    letterPage.classList.remove("hidden");
}

const removeModal = () => {   //편지 세부창 닫기
    letterPage.classList.add("hidden");
}

envelope.addEventListener("click", openEnv);
opener.addEventListener("click", openEnv);
clicker.addEventListener("click", openModal);
backBtn.addEventListener("click", removeModal);




