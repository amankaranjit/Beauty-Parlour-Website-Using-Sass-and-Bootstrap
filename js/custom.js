//  Sticky Menu

$(window).scroll(function () {
    var window_top = $(window).scrollTop() + 1;
    if (window_top > 50) {
        $('.sticky_header').addClass('menu_fixed');
    } else {
        $('.sticky_header').removeClass('menu_fixed');
    }
});


//   banner

var swiper = new Swiper(".banner_slider", {
    pagination: {
        el: ".swiper-pagination",
    },
    autoplay: {
        delay: 5000,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

// testimonials

var swiper = new Swiper('.client_slider', {
    autoplay: {
        delay: 5000,
    },
    pagination: {
        el: '.swiper-pagination',
        dynamicBullets: true,
        clickable: true,
    },
    touch: {
        touchRatio: 1,
        touchAngle: 45,
        grabCursor: true,
    },
});