
var x = document.getElementById("menu-items");

function openMenu() {
    if (window.innerWidth < 1300){
        if (x.style.display === "flex") {
            x.style.display = "none";
            document.body.style.overflow = "auto";
        } else {
            x.style.display = "flex";
            document.body.style.overflow = "hidden";
        }
    }
    
}

function windowResized() {
    if (window.matchMedia("(min-width: 1300px)").matches) {
        document.body.style.overflow = "auto";
    }
}

window.addEventListener("resize", windowResized);