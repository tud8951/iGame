$(function() {

    'use strict';

    // loader
    $("#loader-wrapper").fadeOut();

    // scroll to top
    $("#toTop").scrollToTop();

    // slider
    $(".slide-show").owlCarousel({
        items: 1,
        nav: true,
        loop: true,
        mouseDrag: false
    });

    // smooth scroll
    $("a").on('click', function(event) {

        if (this.hash !== "") {
            event.preventDefault();

            var hash = this.hash;

            $('html, body').animate({

                scrollTop: $(hash).offset().top

            }, 850, function() {

                window.location.hash = hash;

            });

        }

    });

    // filterizr
    $('.filtr-container').filterizr();

    // work filter
    $('.work-menu li').on('click', function() {
        $('.work-menu li').removeClass('active');
        $(this).addClass('active');
    });

    // team
    $(".team-slide").owlCarousel({
        itemsMobile: [360, 1],
        items: 2,
        loop: false,
        nav: false,
        dots: true,

        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            770: {
                items: 2,
                nav: false
            }
        }
    })

});