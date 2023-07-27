/* // Get all the input elements from the document
var inputs = document.querySelectorAll("input");

// Define a function to encode the input
function encodeHTML(input) {
    return input.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");
}

// Loop through each input element and add an event listener that encodes the input value on change
inputs.forEach(function (input) {
    input.addEventListener("change", function () {
        input.value = encodeHTML(input.value);
        console.log(input.value)
    });
});
 */

// Get all the input elements from the document
var inputs = document.querySelectorAll("input");

// Define a function to validate the input
function validateInput(input) {
    // Check if the input value contains any HTML special characters
    if (input.value.match(/[<>"']/)) {
        // If yes, show an error message and clear the input value
        alert("Invalid input. Please do not enter any <, >, \", or ' characters.");
        input.value = "";
    }
}

// Loop through each input element and add an event listener that validates the input value on change
inputs.forEach(function (input) {
    input.addEventListener("input", function () {
        validateInput(input);
    });
});
