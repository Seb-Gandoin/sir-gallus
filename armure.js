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




let popup = document.querySelector('#popup-overlay');
let popupSound = new Audio();
    popupSound.src = "assets/Popup.mp3";
function openPopup(){
    let popup= document.querySelector("#popup-overlay");
    popup.classList.add("open");
    popupSound.play();
}