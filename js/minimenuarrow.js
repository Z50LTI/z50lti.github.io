// Get the drinks container and the drinks-scroll div

var drinks = document.querySelector(".drinks");
var arrowTop = document.querySelector(".arrow-top");
var arrowBottom = document.querySelector(".arrow-bottom");

// Add a scroll event listener to the drinks div
drinks.addEventListener("scroll", function () {
    // Check if the scroll position is at the top
    if (drinks.scrollTop <  60) {
        // Hide the arrow-top element
        arrowTop.style.display = "none";
    } else {
        // Show the arrow-top element
        arrowTop.style.display = "block";
    }

    if (drinks.scrollTop >= drinks.scrollHeight - drinks.clientHeight - 60) {
        // Hide the arrow-bottom element
        arrowBottom.style.display = "none";
    } else {
        // Show the arrow-bottom element
        arrowBottom.style.display = "block";
    }
});
