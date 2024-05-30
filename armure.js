let popup = document.querySelector('#popup-overlay');
let popupSound = new Audio();
    popupSound.src = "assets/Popup.mp3";
function openPopup(){
    let popup= document.querySelector("#popup-overlay");
    popup.classList.add("open");
    popupSound.play();
}