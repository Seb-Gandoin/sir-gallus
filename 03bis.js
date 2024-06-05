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
    window.location.href = "armure.html";
}
