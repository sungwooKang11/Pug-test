const opener = document.querySelector(".opener");
const envelope = document.querySelector(".envelope");
const letter = document.querySelector(".letter");
const warn = document.querySelector(".warn");

const openEnv = () => {  //봉투 열기
    opener.classList.add("active");
    letter.classList.add("popup");
    warn.classList.add("float");
}

envelope.addEventListener("click", openEnv);
opener.addEventListener("click", openEnv);
