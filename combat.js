// Son quand on tape
// function swordSound () {
//     let swordSound = new Audio();
//     swordSound.src = "assets/swordsound.mp3";
//     swordSound.play();
// }


// Redirection pop-up
let clickCount = 0;
const requiredClicks = 15;
const renardor = document.querySelector('.renardor');
let popup = document.querySelector('#popup-overlay');

renardor.addEventListener('click', function() {
    clickCount++;
    console.log(`Image cliquée ${clickCount} fois`);

    if (clickCount >= requiredClicks) {
        popup.classList.add("open");
    }
});

// Si popup classique :

// let popup = document.querySelector('#popup-overlay');
// function openPopup(){
//     let popup= document.querySelector("#popup-overlay");
//     popup.classList.add("open");
// }
// // 


// Confettis
let defaults = {
    spread: 360,
    ticks: 50,
    gravity: 0,
    decay: 0.64,
    startVelocity: 30,
    colors: ['7c121d', 'a21725', '47080f', 'b30203', 'e60305']
};

function shoot(x, y) {
    confetti({
        ...defaults,
        particleCount: 10,
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
    swordSound.src = "assets/swordsound.mp3";
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

