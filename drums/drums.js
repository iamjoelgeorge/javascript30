const keys = document.querySelectorAll(".key");

window.addEventListener("keydown", function(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);

    if (!audio) return; //stops the funciton from running if the key is not found

    audio.currentTime = 0;
    audio.play();
    key.classList.add("playing");
})

keys.forEach(key => key.addEventListener("transitionend", removeTransition));

function removeTransition(e) {
    if (e.propertyName !== "transform") return;
    this.classList.remove("playing");
}