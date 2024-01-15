var menu = document.getElementById('menu')

/* when the menu button is clicked, we add the "opened" class 
to the menu and store the state in localStorage */ 

document.getElementById('openMenu').addEventListener('click', () => {
    menu.classList.add("opened")
    localStorage.setItem('menuState', 'open');
    document.body.style.overflow = "hidden"
})

/* when the menu button is clicked, we remove the "opened" class 
from the menu and store the state in localStorage */ 

document.getElementById('closeMenu').addEventListener('click', () => {
    menu.classList.remove("opened")
    localStorage.setItem('menuState', 'closed');
    document.body.style.overflow = "auto"
})

var menulink = document.querySelectorAll(".menu-items a")


/* On document load, we check the menuState in the local storage, if it was opened, 
we add "opened" and "keepopened" class to the menu and remove it after 200ms */

document.addEventListener('DOMContentLoaded', (event) => {
    const menuState = localStorage.getItem('menuState');
    if (menuState === 'open') {
        menu.classList.add("opened")
        menu.classList.add("keepopened")
        document.body.style.overflow = "hidden"

        setTimeout(function () {
            menu.classList.remove("opened")
            menu.classList.remove("keepopened")
            localStorage.setItem('menuState', 'closed');
            document.body.style.overflow = "auto"
        }, 200);
    }
  });