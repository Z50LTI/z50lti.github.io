var menu = document.querySelector("nav");

document.getElementById("hamburger").addEventListener("click", () => {
  menu.style.opacity = "1";
  menu.style.transform = "translateY(0%)";

  document.body.style.overflow = "hidden";
});

document.getElementById("close").addEventListener("click", () => {
  document.body.style.overflow = "auto";
  menu.style.opacity = "0";
  menu.style.transform = "translateY(100%)";
});
