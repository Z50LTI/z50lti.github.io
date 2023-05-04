// Get all the accordion buttons
var acc = document.getElementsByClassName("accordion");

// Loop through the buttons and add a click event listener
for (var i = 0; i < acc.length; i++) {

    acc[i].addEventListener("click", function () {
        // Toggle the "active" class
        this.classList.toggle("active");
        this.classList.toggle('rotate');

        // Get the panel element next to the button
        var panel = this.nextElementSibling;

        if (panel.style.maxHeight) {
            panel.style.transition = "max-height 0.1s ease-out";
            panel.style.maxHeight = null;
        } else {
            panel.style.transition = "max-height 3s ease-out";
            panel.style.maxHeight = "2000px";

        }
    });
}