let audio = document.getElementById("bg-music");
let playPauseButton = document.getElementById("play-pause-button");
let closeBtn = document.getElementsByClassName("close")[0];


playPauseButton.addEventListener("click", function() {
    if (audio.paused) {
        audio.play();
        playPauseButton.textContent = "𝅛 𝅛";
    } else {
        audio.pause();
        playPauseButton.textContent = "♬";
    }
});

function redirectToHome() {
    window.location.href = "accueil.html";
}

function openBubble1() {
    let bulleLapin = document.querySelector(".Bubble1");
    bulleLapin.classList.add("open");
}

function openBubble2() {
    let bulleCanard = document.querySelector(".Bubble2");
    bulleCanard.classList.add("open");
}

function openBubble3() {
    let bullePingouin = document.querySelector(".Bubble3");
    bullePingouin.classList.add("open");
}

function openBubble4() {
    let bulleCochon = document.querySelector(".Bubble4");
    bulleCochon.classList.add("open");
}