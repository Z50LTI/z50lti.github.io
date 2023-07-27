var video = document.getElementById("bannervideo");
var playButton = document.getElementById("play-button");
playButton.innerHTML = "&#9616;&nbsp;&#9612;";

playButton.addEventListener("click", function () {
    if (video.paused) {
        video.play();
        playButton.innerHTML = "&#9616;&nbsp;&#9612;";
    } else {
        video.pause();
        playButton.innerHTML = "&#9658;";
    }
});