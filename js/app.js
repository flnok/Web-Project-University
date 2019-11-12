const on_click = () => {
    const menu = document.querySelector('.nav-menu');
    const menu_links = document.querySelector('.nav-links');
    const menu_items = document.querySelectorAll('.nav-links li');
    const navitems = document.querySelector('.navigation');
    const nav_items = document.querySelectorAll('.navigation .bar');



    menu.addEventListener('click', () => {
        //toggle nav
        menu_links.classList.toggle('nav-active');
        //animate
        menu_items.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `animate-nav-menu 1.5s ease ${index/7
                    + 0.3}`;
            }
        });
    });
};

const app = () => {
    on_click();
};

app();
////////////////////////////
$(document).ready(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 500) {
            $('#button-scroll-top').fadeIn('slow');
        } else {
            $('#button-scroll-top').fadeOut('slow');
        }
    });

    $("#button-scroll-top").click(function () {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    });
});
// ////////////////////////////
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

initDatePicker();

function initDatePicker() {
    if ($('.datepicker').length) {
        var datePickers = $('.datepicker');
        datePickers.each(function () {
            var dp = $(this);
            // Uncomment to use date as a placeholder
            var date = new Date();
            var dateM = date.getMonth() + 1;
            var dateD = date.getDate();
            var dateY = date.getFullYear();
            var dateFinal = dateM + '/' + dateD + '/' + dateY;
            var placeholder = dp.data('placeholder');
            dp.val(placeholder);
            dp.datepicker();
        });
    }
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("review-slides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

function changeNumber(obj) {

    if (obj.id == "downR" || obj.id == "upR") {
        var numberRoom = document.getElementById("number_room");
        var value = parseInt(numberRoom.value);
        if (obj.id == "downR") {
            value--;
        } else {
            value++;
        }
        if (value < 1) {
            value = 1;
        } else if (value > 10) {
            value = 10;
        }
        numberRoom.value = value;
    } else if (obj.id == "downG" || obj.id == "upG") {
        var numberGuest = document.getElementById("number_guest");
        var value = parseInt(numberGuest.value);
        if (obj.id == "downG") {
            value--;
        } else {
            value++;
        }
        if (value < 1) {
            value = 1;
        }
        numberGuest.value = value;
    }
}

// Google Map

function myMap() {
    var mapProp = {
        center: new google.maps.LatLng(10.762622, 106.660172),
        zoom: 12,
    };
    var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
}