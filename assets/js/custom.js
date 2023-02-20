/*=====================================================================
    ==========================  03-ScrollToptoBottom  =========================
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
    items: 1,
    loop: false,
    nav: false,
    dots: false,
    autoplay: false,
    smartSpeed: 700,
});

$('.review-carousel').owlCarousel({
    items: 1,
    loop: false,
    nav: true,
    navText: ["<i class='fa-solid fa-arrow-left'></i>", "<i class='fa-solid fa-arrow-right'></i>"],
    dots: false,
    autoplay: false,
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
function inVisible(element) {
    var WindowTop = $(window).scrollTop();
    var WindowBottom = WindowTop + $(window).height();
    var ElementTop = element.offset().top;
    var ElementBottom = ElementTop + element.height();

    if ((ElementBottom <= WindowBottom) && ElementTop >= WindowTop)
        animate(element);
}

function animate(element) {
    $('.counter').each(function () {
        var $this = $(this),
            countTo = $this.attr('data-count');

        $({ countNum: $this.text() }).animate({
            countNum: countTo
        },
            {
                duration: 2000,
                easing: 'linear',
                step: function () {
                    $this.text(Math.floor(this.countNum));
                },
                complete: function () {
                    $this.text(this.countNum);
                }
            });
    });
}

//When the document is ready
$(function () {
    $(window).scroll(function () {
        $("[data-count]").each(function () {
            inVisible($(this));
        });
    })
});





$('.navbar-toggler').click(function () {
    $(this).find('i').toggleClass('fa-bars-staggered fa-xmark');
    $('body').toggleClass("overflow-body");
});

