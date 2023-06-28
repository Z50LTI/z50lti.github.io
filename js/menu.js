var menu = document.getElementById("menu");
var menu2 = document.getElementById("menu-mobile2");
var isVisible = false;
var contact = document.getElementById("contact")
var previewTos = document.getElementById("previewTos")
var khwai = document.getElementById("khwai")
menu.style.display = "none";
menu2.style.display = "none";
var menubutton = document.getElementById("menu-button")
var menubutton2 = document.getElementById("menu-button2")


// Define the toggle function
function toggle() {

    isVisible ? menu.style.display = "none" : menu.style.display = "block";
    isVisible ? menubutton.src = "../images/icons/menu.svg" : menubutton.src = "../images/icons/close.svg";;
    isVisible = !isVisible;

}

// Define the toggle function
function toggleMobile() {

    isVisible ? menu2.style.display = "none" : menu2.style.display = "block";
    isVisible ? menubutton2.src = "../images/icons/menu.svg" : menubutton2.src = "../images/icons/close.svg";;
    isVisible = !isVisible;

}

function closeContact() {
    contact.style.display = "none";
    document.body.style.overflow = "auto";

}

function openContact() {
    document.body.style.overflow = "hidden";
    contact.style.display = "flex";
}


function closePreviewTos() {
    previewTos.style.display = "none";
    document.body.style.overflow = "auto";
}

function openPreviewTos() {
    document.body.style.overflow = "hidden";
    previewTos.style.display = "flex";
}

function closePreviewKhwai() {
    khwai.style.display = "none";
    document.body.style.overflow = "auto";
}

function openPreviewKhwai() {
    document.body.style.overflow = "hidden";
    khwai.style.display = "flex";
}

function share() {
    navigator.clipboard.writeText
        ("website url");

    document.getElementById('copied').classList.add('block');

    setTimeout(function () {
        document.getElementById('copied').classList.remove('block');
    }, 2000);
}



$(document).ready(function () {
    $(window).scroll(function (e) {
        let windowTop = $(this).scrollTop();
        $('#menu-desktop a').each(function (event) {

            if (window.matchMedia("(max-width: 768px)").matches) {
                if (windowTop >= $($(this).attr('href')).offset().top - 115) {
                    $('#menu-desktop .active').removeClass('active');

                    $(this).addClass('active');
                }
            } else {
                if (windowTop >= $($(this).attr('href')).offset().top - 100) {
                    $('#menu-desktop .active').removeClass('active');

                    $(this).addClass('active');
                }
            }

        });

        $('#menu-mobile2 a').each(function (event) {

            if (window.matchMedia("(max-width: 768px)").matches) {
                if (windowTop >= $($(this).attr('href')).offset().top - 115) {
                    $('#menu-mobile2 .active').removeClass('active');

                    $(this).addClass('active');
                }
            } else {
                if (windowTop >= $($(this).attr('href')).offset().top - 100) {
                    $('#menu-mobile2 .active').removeClass('active');

                    $(this).addClass('active');
                }
            }

        });


        $('.menu-items-mobile a').each(function (event) {
            if (windowTop >= $($(this).attr('href')).offset().top - 115) {
                $('.menu-items-mobile .mobile-active').removeClass('mobile-active');
                $(this).addClass('mobile-active');
                // Get the active element
                var activeElement = $('.menu-items-mobile .mobile-active');
                // Get the parent element
                var parentElement = activeElement.parent();
                // Calculate the new scroll position
                var newScrollPosition = activeElement[0].offsetLeft - (parentElement.width() / 2) + (activeElement.width() / 2) - 20;
                // Scroll to the new position after a small delay
                parentElement.scrollLeft(newScrollPosition);
            }
        });

    });


    $(window).on('resize', function () {
        // Check if the window width is less than or equal to 769px
        if ($(window).width() <= 769) {
            // Set the display property of .mobile elements to none
            if(isVisible){
                $('#menu-mobile2').css('display', 'block');
                $('.desktopmenu').css('display', '');
                menubutton.src = "../images/icons/close.svg";;
                menubutton2.src = "../images/icons/close.svg"
            }else{
                $('#menu-mobile2').css('display', '');
                $('.desktopmenu').css('display', '');
                menubutton.src = "../images/icons/menu.svg"
                menubutton2.src = "../images/icons/menu.svg"

            }

            
            

        } else {
            // Set the display property of .mobile elements back to their default value

            if (isVisible){
                $('#menu-mobile2').css('display', 'none');
                $('.desktopmenu').css('display', 'block');
                menubutton.src = "../images/icons/close.svg";;
                menubutton2.src = "../images/icons/close.svg"
            }else{
                $('#menu-mobile2').css('display', '');
                $('.desktopmenu').css('display', '');
                menubutton.src = "../images/icons/menu.svg"
                menubutton2.src = "../images/icons/menu.svg"
            }
            
        }
    });





});
