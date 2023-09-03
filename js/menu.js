var menu = document.getElementById('menu')
var body = document.body;

function openMenu(){
    menu.style.display = "flex";
    body.style.overflow = "hidden";
}

function closeMenu() {
    menu.style.display = "none";
    body.style.overflow = "auto";
}

const menuitems = document.querySelectorAll('.menu-item');

menuitems.forEach(item => {
    item.addEventListener('click', () => {
        closeMenu()
    });
});
