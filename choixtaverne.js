let audio = document.getElementById("bg-music");
let playPauseButton = document.getElementById("play-pause-button");

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

function redirectToPage() {
    window.location.href = "ronces.html";
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
        setTimeout(() => {
            window.location.href = this.closest('a').href;
        }, 500);
    });
});