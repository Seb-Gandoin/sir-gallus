let audio = document.getElementById("bg-music");
let playPauseButton = document.getElementById("play-pause-button");
playPauseButton.addEventListener("click", function () {
    if (audio.paused) {
        audio.play();
        playPauseButton.textContent = "⏸";
    } else {
        audio.pause();
        playPauseButton.textContent = "♬";
    }
});

function redirectToHome() {
    window.location.href = "accueil.html";
}

function redirectToPage() {
    window.location.href = "armure.html";
}

const buttons = document.querySelectorAll('.zoomButton');

buttons.forEach(button => {
    button.addEventListener('click', function (event) {
        event.preventDefault();
        this.innerText = "C'est parti";
        this.classList.add('zoomed');
        setTimeout(() => {
            window.location.href = this.closest('a').href;
        }, 500);
    });
});