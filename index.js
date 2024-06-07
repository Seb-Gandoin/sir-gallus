let audio = document.getElementById("bg-music");
let playPauseButton = document.getElementById("play-pause-button");

audio.volume = 0.1;
playPauseButton.addEventListener("click", function () {
    if (audio.paused) {
        audio.play();
        playPauseButton.textContent = "𝅛 𝅛";
    } else {
        audio.pause();
        playPauseButton.textContent = "♬";
    }
});

function redirectToPage() {
    window.location.href = "accueil.html";
}