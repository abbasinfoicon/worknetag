
/*========================================================================================================
================================ Sticky header ===================================================================
===========================================================================================================*/

$(window).scroll(function () {
    var scroll = $(window).scrollTop();

    if (scroll > 1) {
        $('.header').addClass('sticky');
        $('.menu').addClass('menuSticky');
    } else {
        $('.header').removeClass('sticky');
        $('.menu').removeClass('menuSticky');
    }
});

/*=====================================================================
    ==========================  ScrollToptoBottom  =========================
    ========================================================================*/

$(window).scroll(function () {
    if ($(this).scrollTop() > 400) {
        $('#scroll').fadeIn();
    } else {
        $('#scroll').fadeOut();
    }
});
$('#scroll').click(function () {
    $("html, body").animate({ scrollTop: 0 }, 600);
    return false;
});

/*========================================================================================================
================================ slider-home owlCarousel ===================================================================
===========================================================================================================*/

$('.slider-home').owlCarousel({
    animateIn: 'fadeIn',
    animateOut: 'fadeOut',
    items: 1,
    loop: true,
    nav: false,
    dots: false,
    autoplay: true,
    smartSpeed: 700, 
    mouseDrag: false,
    touchDrag: false
});

$('.review-carousel').owlCarousel({
    items: 1,
    loop: false,
    nav: true,
    navText: ["<i class='fa-solid fa-arrow-left'></i>", "<i class='fa-solid fa-arrow-right'></i>"],
    dots: false,
    autoplay: true,
    autoplayTimeout: 10000,
    autoplayHoverPause: false,
    smartSpeed: 700,
});

$('.testimonial-carousel').owlCarousel({
    loop: true,
    responsiveClass: true,
    nav: true,
    margin: 0,
    autoplayTimeout: 4000,
    smartSpeed: 400,
    center: true,
    navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
    responsive: {
        0: {
            items: 1,
        },
        600: {
            items: 5
        },
        1200: {
            items: 5
        }
    }
});



/*========================================================================================================
================================ COUNTER ===================================================================
===========================================================================================================*/



var a = 0;
$(window).scroll(function () {

    var oTop = $('.counter').offset().top - window.innerHeight;
    if (a == 0 && $(window).scrollTop() > oTop) {
        $('.counter').each(function () {
            var $this = $(this),
                countTo = $this.attr('data-count');
            $({ countNum: $this.text() }).animate({
                countNum: countTo
            },
                {
                    duration: 2000,
                    easing: 'swing',
                    step: function () {
                        $this.text(Math.floor(this.countNum));
                    },
                    complete: function () {
                        $this.text(this.countNum);
                    }
                });
        });

        a = 1;
    }

});



/*========================================================================================================
================================ Toggle Menu ===================================================================
===========================================================================================================*/


$('.navbar-toggler').click(function () {
    $(this).find('i').toggleClass('fa-bars-staggered fa-xmark');
    $('body').toggleClass("overflow-body");
});

/*========================================================================================================
================================ input file ===================================================================
===========================================================================================================*/


const realFileBtn = document.getElementById("real-file");
const customBtn = document.getElementById("custom-button");
const customTxt = document.getElementById("custom-text");

customBtn.addEventListener("click", function () {
    realFileBtn.click();
});

realFileBtn.addEventListener("change", function () {
    if (realFileBtn.value) {
        customTxt.innerHTML = realFileBtn.value.match(
            /[\/\\]([\w\d\s\.\-\(\)]+)$/
        )[1];
    } else {
        customTxt.innerHTML = "No file chosen, yet.";
    }
});
