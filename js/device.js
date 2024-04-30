var faqItems = document.querySelectorAll(".faq-item");

function isTouchDevice() {
  return "ontouchstart" in window || navigator.maxTouchPoints;
}

function addActive() {
  for (var j = 0; j < faqItems.length; j++) {
    faqItems[j].classList.remove("active");
  }

  this.classList.add("active");
}

function checkDevice() {
  if (isTouchDevice()) {
    for (var i = 0; i < faqItems.length; i++) {
      faqItems[i].addEventListener("click", addActive);
    }
  } else {
    for (var i = 0; i < faqItems.length; i++) {
      faqItems[i].removeEventListener("click", addActive);
      faqItems[i].classList.remove("active");
    }
  }
}

checkDevice();

var resizeTimer;

window.addEventListener("resize", function () {
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(function () {
    checkDevice();
  }, 250);
});
