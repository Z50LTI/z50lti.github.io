var menu = document.getElementById("menu")

document.getElementById("hamburgermenu").addEventListener("click", () => {
    menu.style.display = "flex";
    document.body.style.overflow = "hidden"
})

document.getElementById("close").addEventListener("click", () => {
    menu.style.display = "none";
    document.body.style.overflow = "auto"
})

