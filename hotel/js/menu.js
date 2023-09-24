var menu = document.getElementById('menu')
var body = document.body

function openMenu(){
    menu.style.display = "flex";
    body.style.overflow = "hidden"
}

function closeMenu(){
    menu.style.display = "none";
    body.style.overflow = "auto";
}

document.querySelectorAll('.menu-item').forEach(item => {
    item.addEventListener('click', event => {
        menu.style.display = "none";
        body.style.overflow = "auto";
    })});