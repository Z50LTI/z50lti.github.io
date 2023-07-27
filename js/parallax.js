var velocity = 0.05; // Adjust this value to change the speed of the parallax effect

function update() {
    var pos = $(window).scrollTop();
    if (window.matchMedia("(min-width: 1301px)").matches) {
        $(".parallax").each(function () {
            var $element = $(this);
            // subtract some from the height b/c of the padding
            var height = $element.height() - 12700;
            $element.css("backgroundSize", "cover");
            $(this).css(
                "backgroundPosition",
                "50% " + Math.round((height - pos) * velocity) + "px"
            );
        });
    }else{
        var $element = $(".parallax");
        $element.css("backgroundSize", "contain");
        $element.css(
            "backgroundPosition",
            "50%" + "50%"
        );
    }
    
}


update();

$(window).bind("scroll resize", update);