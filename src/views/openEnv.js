const opener = document.querySelector(".opener");
const envelope = document.querySelector(".envelope");

const openEnv = () => {
    opener.classList.toggle("active");
}

envelope.addEventListener("click", openEnv);