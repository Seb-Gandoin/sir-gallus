let audio = document.getElementById("bg-music");
let playPauseButton = document.getElementById("play-pause-button");
let answerInput = document.getElementById("answer-input");
let popup = document.getElementById("popup");
let closeBtn = document.getElementsByClassName("close")[0];
let popup = document.querySelector('#popup-overlay');
let popupSound = new Audio();
popupSound.src = "assets/Popup.mp3";


playPauseButton.addEventListener("click", function () {
    if (audio.paused) {
        audio.play();
        playPauseButton.textContent = "pause";
    } else {
        audio.pause();
        playPauseButton.textContent = "play";
    }
});

answerInput.addEventListener("input", function () {
    if (answerInput.value.toLowerCase() === "Ombre") {
        popupText.textContent = "Le lapin sage, impressionné par la réponse, laissa passer Sir Gallus, lui offrant un talisman magique en récompense.";
        nextPageButton.style.display = "block";
        popup.style.display = "block";
    } else {
        popup.style.display = "none";
        nextPageButton.style.display = "none";
    }
});

nextPageButton.addEventListener("click", function () {
    window.location.href = "combat.html";
});

window.addEventListener("click", function (event) {
    if (event.target === popup) {
        popup.style.display = "none";
    }
});







/* let audio = document.getElementById("bg-music");
let playPauseButton = document.getElementById("play-pause-button");
let answerInput = document.getElementById("answer-input");
let popup = document.getElementById("popup");
let closeBtn = document.getElementsByClassName("close")[0];*/

playPauseButton.addEventListener("click", function () {
    if (audio.paused) {
        audio.play();
        playPauseButton.textContent = "pause";
    } else {
        audio.pause();
        playPauseButton.textContent = "play";
    }
});

answerInput.addEventListener("input", function () {
    if (answerInput.value.toLowerCase() === "Ombre") {
        popup.classList.add("open");
        popupSound.play();
    } else {
        popup.style.display = "none";
        nextPageButton.style.display = "none";
    }
});

nextPageButton.addEventListener("click", function () {
    window.location.href = "combat.html";
});

window.addEventListener("click", function (event) {
    if (event.target === popup) {
        popup.style.display = "none";
    }
});

answerInput.addEventListener("input", function () {
    if (answerInput.value.toLowerCase() === "ombre") {
        popup.classList.add("open");
        popupSound.play();
    }
});