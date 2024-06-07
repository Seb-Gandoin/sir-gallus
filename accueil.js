let audio4 = document.getElementById("bg-music-accueil");
let playPauseButton = document.getElementById("play-pause-button");
console.log(audio4)
audio4.volume = 0.3;
playPauseButton.addEventListener("click", function () {
    if (audio4.paused) {
        audio4.play();
        playPauseButton.textContent = "𝅛 𝅛";
    } else {
        audio4.pause();
        playPauseButton.textContent = "♬";
    }
});

let audio3 = document.getElementById("flash");
let survol = document.querySelector(".game1");
audio3.volume = 0.5;
survol.addEventListener("hover", function () {
        audio3.play();
});

let audio1 = new Audio("sounds/OldFriends.mp3");
audio1.autoplay = true;
audio1.play();
