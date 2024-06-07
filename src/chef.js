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

//Déplacement cochon
document.addEventListener('mousemove', (e) => {
    const image = document.querySelector('.chef');
    const { clientX: mouseX, clientY: mouseY } = e;
    const { innerWidth: windowWidth, innerHeight: windowHeight } = window;
    
    const xOffset = -(mouseX / windowWidth - 0.6) * 1000; 
    const yOffset = -(mouseY / windowHeight - 0.6) * 90;

    image.style.transform = `translateX(${xOffset}px) translateY(${yOffset}px)`;
});

// Clic
function swordSound() {
    let swordSound = new Audio();
    swordSound.src = "sounds/swordsound.mp3";
    swordSound.play();
    swordSound.volume = 0.1;
}


// Décompte + popup
let countdownElement = document.getElementById('countdown');
let countdown = 15; // secondes
let interval;

function startCountdown() {
    countdownElement.textContent = countdown;

    interval = setInterval(function() {
        countdown--;
        countdownElement.textContent = countdown;

        if (countdown <= 0) {
            clearInterval(interval);
            window.location.href = 'gameover2.html';
        }}, 1000);  
    }

function openPopup() {
    let popup = document.querySelector("#popup-overlay");
    popup.classList.add("open");
    popupSound.play();
    clearInterval(interval); // Arrête le décompte
    }

document.addEventListener('DOMContentLoaded', function() {
    startCountdown();
});


let popupSound = new Audio();
popupSound.src = "assets/Popup.mp3";


// Décompte seul
// document.addEventListener('DOMContentLoaded', function() {
//     let countdownElement = document.getElementById('countdown');
//     let countdown = 15; // seconds

//     countdownElement.textContent = countdown;

//     let interval = setInterval(function() {
//         countdown--;
//         countdownElement.textContent = countdown;

//         if (countdown <= 0) {
//             clearInterval(interval);
//             window.location.href = 'gameover2.html'; //lien redirection
//         }
//     }, 1000);
// });

// Popup seule
// let popup = document.querySelector('#popup-overlay');
// let popupSound = new Audio();
//     popupSound.src = "assets/Popup.mp3";
// function openPopup(){
//     let popup= document.querySelector("#popup-overlay");
//     popup.classList.add("open");
//     popupSound.play();

// }
