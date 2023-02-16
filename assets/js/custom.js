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



/*========================================================================================================
================================ COUNTER ===================================================================
===========================================================================================================*/
$('.counter').each(function () {
    var $this = $(this),
        countTo = $this.attr('data-count');

    $({ countNum: $this.text() }).animate({
        countNum: countTo
    },

        {

            duration: 8000,
            easing: 'linear',
            step: function () {
                $this.text(Math.floor(this.countNum));
            },
            complete: function () {
                $this.text(this.countNum);
                //alert('finished');
            }

        });

});

