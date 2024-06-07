let audio = document.getElementById("bg-music");
let playPauseButton = document.getElementById("play-pause-button");
audio.volume = 0.5;
playPauseButton.addEventListener("click", function () {
    if (audio.paused) {
        audio.play();
        playPauseButton.textContent = "⏸";
    } else {
        audio.pause();
        playPauseButton.textContent = "♬";
    }
});

function redirectToHome() {
    window.location.href = "accueil.html";
}

function redirectToPage() {
    window.location.href = "03bis.html";
}

let answerInput = document.getElementById("answer-input");
let popup = document.querySelector('#popup-overlay');
let popupSound = new Audio();
popupSound.src = "assets/assets_Popup.mp3";
answerInput.addEventListener("change", function () {
    console.log("poulet")
    if (answerInput.value.toLowerCase() === "ombre") {
        console.log("poulet2")
        popup.classList.add("open");
        popupSound.play();
    }
});








