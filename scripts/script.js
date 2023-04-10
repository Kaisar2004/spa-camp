$(document).ready(function (){
    $('.galleries-img').magnificPopup({
        type: 'image',
        mainClass: 'mfp-with-zoom', // this class is for CSS animation below

        zoom: {
            enabled: true,

            duration: 300,
            easing: 'ease-in-out',


            function(openerElement) {
                return openerElement.is('img') ? openerElement : openerElement.find('img');
            }
        }

    });

    $('.booking-types').slick({
        lazyLoad: 'ondemand',
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: true,
        draggable: true,
        swipe: true,
    });

    $('.galleries').slick({
        dots: true,
        draggable: true,
        swipe: true,
    });

    $('.reviews').slick({
        // lazyLoad: 'ondemand',
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: true,
        draggable: true,
        swipe: true,
    });




})


