let audio = document.getElementById("bg-music");
let playPauseButton = document.getElementById("play-pause-button");
console.log(audio)
audio.volume = 0.5;
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
    window.location.href = "03bis.html";
}

function redirectToHome() {
    window.location.href = "accueil.html";
}

/*
document.getElementById('zoomButton').addEventListener('click', function (event) {
    event.preventDefault();
    this.innerText = "C'est parti";
    this.classList.add('zoomed');
    setTimeout(() => {
        window.location.href = document.getElementById('zoomLink').href;
    }, 500);
});
*/


const buttons = document.querySelectorAll('.zoomButton');

buttons.forEach(button => {
    button.addEventListener('click', function (event) {
        event.preventDefault();
        this.innerText = "C'est parti";
        this.classList.add('zoomed');
    });
});

let popup = document.querySelector('#popup-overlay');
let popupSound = new Audio();
    popupSound.src = "assets/Popup.mp3";
function openPopup(){
    let popup= document.querySelector("#popup-overlay");
    popup.classList.add("open");
    popupSound.play();
}

function closePopup(){
    let popup= document.querySelector("#popup-overlay");
    popup.classList.remove("open");
}