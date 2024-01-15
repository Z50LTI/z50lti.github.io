
let mouseCursor = document.querySelector(".cursor");

window.addEventListener('DOMContentLoaded', cursor);
window.addEventListener('mousemove', cursor);
document.addEventListener('mouseenter', () => mouseCursor.style.display = 'block');
document.addEventListener('mouseleave', () => mouseCursor.style.display = 'none');


if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|Windows Phone/i.test(navigator.userAgent)) {
    mouseCursor.style.display = 'none';
} else {
    mouseCursor.style.display = 'block';
}

function cursor(e) {
    mouseCursor.style.top = "calc(" + e.clientY + "px - 1rem)";
    mouseCursor.style.left = "calc(" + e.clientX + "px - 1rem)";
}


const links = document.querySelectorAll('a, .icon, h1, h2, h3, h4, p, logo');

links.forEach(x => {
    x.addEventListener('mouseenter', () => {
        mouseCursor.classList.add('hover');
    });

    x.addEventListener('mouseleave', () => {
        mouseCursor.classList.remove('hover');
    });

})