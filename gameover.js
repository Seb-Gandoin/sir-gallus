let audio = document.getElementById("bg-music");
let playPauseButton = document.getElementById("play-pause-button");
let closeBtn = document.getElementsByClassName("close")[0];


playPauseButton.addEventListener("click", function () {
    if (audio.paused) {
        audio.play();
        playPauseButton.textContent = "pause";
    } else {
        audio.pause();
        playPauseButton.textContent = "play";
    }
});