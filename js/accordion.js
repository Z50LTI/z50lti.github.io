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
            panel.style.transition = "max-height 0.25s ease-out";
            panel.style.maxHeight = null;
        } else {
            panel.style.transition = "max-height 0.25s ease-out";
            panel.style.maxHeight = "2000px";

        }
    });
}

// Get all the accordion buttons
var pb = document.getElementsByClassName("package-box");

// Loop through the buttons and add a click event listener
for (var i = 0; i < pb.length; i++) {

    pb[i].addEventListener("click", function () {
        // Toggle the "active" class
        this.classList.toggle("active");
        this.classList.toggle('rotate');

       
        /* var panel = this.nextElementSibling;

        if (panel.style.maxHeight) {
            panel.style.transition = "max-height 0.25s ease-out";
            panel.style.maxHeight = null;
        } else {
            panel.style.transition = "max-height 0.25s ease-out";
            panel.style.maxHeight = "auto";
        }  */
    });
}