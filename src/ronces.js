// Clic
function swordSound() {
    let swordSound = new Audio();
    swordSound.src = "sounds/swordsound.mp3";
    swordSound.play();
}

//Retour accueil
function redirectToHome() {
    window.location.href = "accueil.html";
}

// Audio
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

//Popup
let popup = document.querySelector('#popup-overlay');
let popupSound = new Audio();
    popupSound.src = "assets/Popup.mp3";
function openPopup(){
    let popup= document.querySelector("#popup-overlay");
    popup.classList.add("open");
    popupSound.play();
}

//Ronces

const ronce1 = document.getElementById('ronce1');
const ronce2 = document.getElementById('ronce2');
const ronce3 = document.getElementById('ronce3');
const ronce4 = document.getElementById('ronce4');
const ronce5 = document.getElementById('ronce5');
const ronce6 = document.getElementById('ronce6');
const ronce7 = document.getElementById('ronce7');
const ronce8 = document.getElementById('ronce8');
const ronce9 = document.getElementById('ronce9');
const ronce10 = document.getElementById('ronce10');
const ronce11 = document.getElementById('ronce11');
const ronce12 = document.getElementById('ronce12');
    
    ronce1.addEventListener('click', () => {
        ronce1.style.display = 'none'; 
    });
    ronce2.addEventListener('click', () => {
        ronce2.style.display = 'none'; 
    });
    ronce3.addEventListener('click', () => {
        ronce3.style.display = 'none'; 
    });
    ronce4.addEventListener('click', () => {
        ronce4.style.display = 'none'; 
    });
    ronce5.addEventListener('click', () => {
        ronce5.style.display = 'none'; 
    });
    ronce6.addEventListener('click', () => {
        ronce6.style.display = 'none'; 
    });
    ronce7.addEventListener('click', () => {
        ronce7.style.display = 'none'; 
    });
    ronce8.addEventListener('click', () => {
        ronce8.style.display = 'none'; 
    });
    ronce9.addEventListener('click', () => {
        ronce9.style.display = 'none'; 
    });
    ronce10.addEventListener('click', () => {
        ronce10.style.display = 'none'; 
    });
    ronce11.addEventListener('click', () => {
        ronce11.style.display = 'none'; 
    });
    ronce12.addEventListener('click', () => {
        ronce12.style.display = 'none'; 
    });


