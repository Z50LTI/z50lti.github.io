// Select all elements with the class name .drink-box
$(".allow-press .drink-box").click(function () {
    if (!$(this).find("img").hasClass("unselectable")) {
        // Add the class name .pressed to the clicked element
        $(this).addClass("pressed");
        // Remove the class name .pressed after 100ms
        setTimeout(() => {
            $(this).removeClass("pressed");
        }, 100);
    }
});