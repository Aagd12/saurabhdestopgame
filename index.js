let sound = document.querySelectorAll("input");
let body = document.querySelectorAll("body");
let audio = document.querySelectorAll("myaudio");

body.addEventListener("OnClick", () => {
    audio.play();
})