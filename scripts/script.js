$(document).ready(function (){
    // $('.booking-types').slick({
    //     slidesToShow: 3,
    //     slidesToScroll: 1,
    //     dots: true,
    //     speed: 1000,
    //     adaptiveHeight: true,
    //     draggable: true,
    //     swipe: true,
    // });

    $('.booking-types').slick({
        lazyLoad: 'ondemand',
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: true,
        draggable: true,
        swipe: true,
    });

})


