var overlays = document.getElementsByClassName("video-overlay");
var videos = document.querySelectorAll(".video video");

for (let i = 0; i < overlays.length; i++) {
  overlays[i].addEventListener("click", function () {
    this.style.display = "none";

    videos[i].setAttribute("controls", "");
    videos[i].play();
  });
}
