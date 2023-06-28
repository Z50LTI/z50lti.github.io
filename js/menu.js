var menu = document.getElementById("menu");
var isVisible = false;

var contact = document.getElementById("contact")
var previewTos = document.getElementById("previewTos")
var khwai = document.getElementById("khwai")
menu.style.display = "none";
var menubutton = document.getElementById("menu-button")


// Define the toggle function
/* function toggle() { */
    /* // Check if the media query matches
    if (mq.matches) {
        // The window width is less than or equal to 768px
        isVisible ? menu.style.right = "-340px" : menu.style.right = "0";
        isVisible = !isVisible
    } else { */
        // The window width is larger than 768px
        /* isVisible ? menu.style.right = "-340px" : menu.style.right = "50%";

        isVisible = !isVisible */
    



// Define the toggle function
function toggle() {

        isVisible ? menu.style.display = "none" : menu.style.display = "block";
    isVisible ? menubutton.src = "../images/icons/menu.svg" : menubutton.src = "../images/icons/close.svg";;
        isVisible = !isVisible;


}

function closeContact(){
    contact.style.display = "none";
    document.body.style.overflow = "auto";
    
}

function openContact() {
    document.body.style.overflow = "hidden";
    contact.style.display = "flex";
}


function closePreviewTos() {
    previewTos.style.display = "none";
    document.body.style.overflow = "auto";
}

function openPreviewTos() {
    document.body.style.overflow = "hidden";
    previewTos.style.display = "flex";
}

function closePreviewKhwai() {
    khwai.style.display = "none";
    document.body.style.overflow = "auto";
}

function openPreviewKhwai() {
    document.body.style.overflow = "hidden";
    khwai.style.display = "flex";
}

function share(){
    navigator.clipboard.writeText
        ("website url");
}