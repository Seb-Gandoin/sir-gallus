let audio = document.getElementById("bg-music");
let playPauseButton = document.getElementById("play-pause-button");
playPauseButton.addEventListener("click", function () {
    if (audio.paused) {
        audio.play();
        playPauseButton.textContent = "pause";
    } else {
        audio.pause();
        playPauseButton.textContent = "play";
    }
});

function redirectToPage() {
    window.location.href = "03bis.html";
}

let answerInput = document.getElementById("answer-input");
/*
let closeBtn = document.getElementsByClassName("close")[0];
*/
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








