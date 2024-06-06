// // Musique de fond avec boutton
// let playButton = document.querySelector(".sonButton");
// let playSong = false;
// let audio = new Audio("assets/open_2.mp3");

// playButton.addEventListener('click', function(){
            
//     if (!playSong) {
//         audio.play();
//         playSong = true;
//     } else if (playSong === true) {
//         audio.pause()
//         playSong = false;
//     }
//     })

// Audio
let audio = document.getElementById("bg-music");
let playPauseButton = document.getElementById("play-pause-button");
let closeBtn = document.getElementsByClassName("close")[0];

audio.volume = 0.4;
playPauseButton.addEventListener("click", function () {
    if (audio.paused) {
        audio.play();
        playPauseButton.textContent = "pause";
    } else {
        audio.pause();
        playPauseButton.textContent = "play";
    }
});

//Retour accueil
function redirectToHome() {
    window.location.href = "accueil.html";
}

// Redirection pop-up au bout de X clicks
let clickCount = 0;
const requiredClicks = 30;
const bulleClicks = 15;
const renardor = document.querySelector('.renardor');
const bulleArgh = document.querySelector("#bulleArgh");
let popup = document.querySelector('#popup-overlay');
let popupSound = new Audio();
    popupSound.src = "assets/Popup.mp3";

renardor.addEventListener('click', function() {
    clickCount++;
    console.log(`Image cliquée ${clickCount} fois`);

    if (clickCount === bulleClicks) {
        bulleArgh.classList.add("open");
    }
   
    else if (clickCount >= requiredClicks) {
        popup.classList.add("open");
        popupSound.play();
    }
});

// Si popup classique :

// let popup = document.querySelector('#popup-overlay');
// let popupSound = new Audio();
//     popupSound.src = "assets/Popup.mp3";
// function openPopup(){
//     let popup= document.querySelector("#popup-overlay");
//     popup.classList.add("open");
//     popupSound.play();
// }
// // 


// Clic souris sur Renardor - Confettis + son 
let defaults = {
    spread: 360,
    ticks: 50,
    gravity: 5,
    decay: 0.64,
    startVelocity: 30,
    colors: ['7c121d', 'a21725', '47080f', 'b30203', 'e60305']
};

function shoot(x, y) {
    confetti({
        ...defaults,
        particleCount: 5,
        scalar: 1,
        shapes: ['star'],
        origin: { x: x / window.innerWidth, y: y / window.innerHeight }
    });

    confetti({
        ...defaults,
        particleCount: 5,
        scalar: 0.75,
        shapes: ['star'],
        origin: { x: x / window.innerWidth, y: y / window.innerHeight }
    });
}

function swordSound() {
    let swordSound = new Audio();
    swordSound.src = "sounds/swordsound.mp3";
    swordSound.play();
}


function handleClick(event) {
    var x = event.clientX;
    var y = event.clientY;
    
    swordSound();
    setTimeout(() => shoot(x, y), 0);
    setTimeout(() => shoot(x, y), 50);
    setTimeout(() => shoot(x, y), 100);
}

document.querySelector('.renardor').addEventListener('click', handleClick);


// déplacement renardor + animation click
document.addEventListener('mousemove', (e) => {
    const image = document.querySelector('.renardor');
    const { clientX: mouseX, clientY: mouseY } = e;
    const { innerWidth: windowWidth, innerHeight: windowHeight } = window;
    
    const xOffset = -(mouseX / windowWidth - 0.5) * 80; 
    const yOffset = -(mouseY / windowHeight - 0.5) * 80;

    image.style.transform = `translateX(${xOffset}px) translateY(${yOffset}px)`;
});
document.querySelector('.renardor').addEventListener('mousedown', () => {
    const image = document.querySelector('.renardor');
    image.style.transform += ' scale(0.93)';
});

document.querySelector('.renardor').addEventListener('mouseup', () => {
    const image = document.querySelector('.renardor');
    image.style.transform = image.style.transform.replace(' scale(0.93)', '');
});


// Son quand on tape seul
// function swordSound () {
//     let swordSound = new Audio();
//     swordSound.src = "assets/swordsound.mp3";
//     swordSound.play();
// }