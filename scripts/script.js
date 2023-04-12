$(document).ready(function () {
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
        responsive: [
            {
                breakpoint: 425,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true
                }
            },
            {
                breakpoint: 375,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true
                }
            },
        ]
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
        responsive: [
            {
                breakpoint: 425,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true
                }
            },
            {
                breakpoint: 375,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true
                }
            },
        ]
    });

    let select = $('#names');
    let fullName = $('.FullName');
    let numberInput = $('.number-input');
    let email = $('.e-mail');

    let question = $('.question-name');
    let questionNumber = $('.question-number');
    let questionBtn = $('.question-form-btn');

    let questionError = $('.question-error');
    let questionNumberError = $('.question-number-error');

    let selectError = $('.names-error');
    let fullNameError = $('.FullName-error');
    let numberError = $('.number-input-error');
    let emailError = $('.e-mail-error');

    let num = /[0-9]/g;
    let str = /[". ,/!]/g;

    let hasError = false;
    // numberInput.oninput = function () {
    //     this.value = this.value.substring(0, 10);
    // }

    $('#form-btn').click(function (e) {
        e.preventDefault();

        if (select.val()) {
            selectError.hide();
        }

        if (fullName.val()) {
            fullNameError.hide();
        }

        if (numberInput.val()) {
            numberError.hide();
        }

        if (email.val()) {
            emailError.hide();
        }

        if (!select.val()) {
            selectError.show();
            return;
        }
        if (!fullName.val()) {
            fullNameError.show();
            return;
        }

        if (!numberInput.val()) {
            numberError.show();
            return;
        }

        if (!email.val()) {
            emailError.show();
        }


        // if (!hasError) {
        //     loader.css('display', 'flex');
        //     $.ajax({
        //         method: "POST",
        //         url: url,
        //         data: {name: name.val(), product: write.val(), number: number.val()}
        //     })
        //         .done(function (msg) {
        //             loader.hide();
        //             if (msg.success) {
        //                 alert('Ваш заказ принят!');
        //                 $('.order-macaroons-text').css('display', 'none');
        //                 $('.popup').show();
        //             }
        //
        //         });
        // }
    })

    questionBtn.click(function (e) {
        e.preventDefault();

        if (!question.val()) {
            questionError.show();
            return;
        }

        if (!questionNumber.val()) {
            questionNumberError.show();
        }

        if (question.val()) {
            questionError.hide();
        }
        if (questionNumber.val()) {
            questionNumberError.hide();
        }

    });
})


