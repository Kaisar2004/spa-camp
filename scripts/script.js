$(document).ready(function () {
    $("#my-accordion").accordionjs({
        closeAble   : true,

        // Close other sections.(data-close-other)
        closeOther  : true,

        // Animation Speed.(data-slide-speed)
        slideSpeed  : 150,

        // The section open on first init. A number from 1 to X or false.(data-active-index)
        activeIndex : false,

        openSection: function( section ){},

        beforeOpenSection: function( section ){},
    });

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
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true
                }
            },
            {
                breakpoint: 425,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true
                }
            },
            {
                breakpoint: 375,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true
                }
            },
            {
                breakpoint: 321,
                settings: {
                    slidesToShow: 1,
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
                breakpoint: 1023,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true
                }
            },
            {
                breakpoint: 630,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true
                }
            },
            {
                breakpoint: 425,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true
                }
            },
            {
                breakpoint: 375,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true
                }
            },
            {
                breakpoint: 321,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true
                }
            },
        ]
    });
    let select = $('#names');
    let numberInput = $('.number-input');
    let email = document.querySelector('.e-mail')
    let fullName = document.querySelector('.FullName');
    let question = document.querySelector('.question-name');
    let questionNumber = $('.question-number');
    let questionBtn = $('.question-form-btn');
    let checkBox = document.getElementById('checkbox');
    let questionError = $('.question-error');
    let questionNumberError = $('.question-number-error');
    let selectError = $('.names-error');
    let fullNameError = $('.FullName-error');
    let numberError = $('.number-input-error');
    let emailError = $('.e-mail-error');
    let form = document.getElementById('form');
    let formBtn = document.getElementById('form-btn');
    let qForm = document.getElementById('question-form-action');
    let qBtn = document.getElementById('question-btn');
    let num = /[0-9]/g;
    let str = /["._=+,/!?-@()]/g;
    let hasError = false;
    let isChecked = document.getElementById('checkbox');
    fullName.oninput = function () {
        this.value = this.value.replace(num, '');
        this.value = this.value.replace(str, '');
    }
    question.oninput = function () {
        this.value = this.value.replace(num, '');
        this.value = this.value.replace(str, '');
    }
    $('#form-btn').click(function (e) {
        e.preventDefault();
        if (select.val()) {
            selectError.hide();
        }
        if (fullName.value) {
            fullNameError.css('display', 'none');
        }
        if (numberInput.val()) {
            numberError.hide();
        }
        if (email.value) {
            emailError.css('display', 'none');
        }
        if (!select.val()) {
            selectError.show();
            return;
        }
        if (!fullName.value) {
            fullNameError.css('display', 'block');
            return;
        }
        if (!numberInput.val()) {
            numberError.show();
            return;
        }
        if (!email.value) {
            emailError.css('display', 'block');
            return;
        }
        if (checkBox.checked !== true) {
            alert('Для продолжения необходимо согласиться с обратками ваших данных и условиями использования!');
            return;
        }
        if (select.val() && fullName.value && numberInput.val() && email.value && checkBox.checked !== '') {
            alert('Ваша заявка принята! ожидайте звонка');
        }
        if (select.val && fullName.value && numberInput.val() && email.value) {
            $.ajax({
                method: "POST",
                url: 'mail.php',
                data: {date: select.val(), name: fullName.value, number: numberInput.val(), email: email.value}
            })
                .done(function (msg) {
                    if (msg.success) {
                        alert('Ваша заявка принят!');
                    }
                });
        }
    })
    formBtn.addEventListener('click', () => form.reset());


    questionBtn.click(function (e) {

        e.preventDefault();
        if (!question.value) {
            questionError.css('display', 'block');
            return;
        }
        if (!questionNumber.val()) {
            questionNumberError.show();
        }
        if (question.value) {
            questionError.css('display', 'none');
        }
        if (questionNumber.val()) {
            questionNumberError.hide();
        }

        if (question.value && questionNumber.val()) {
            alert('Ваша заявка принята! ожидайте звонка')
        }
        if (question.value && questionNumber.val) {
            $.ajax({
                method: "POST",
                url: 'question.php',

                data: {Qname: question.value, QuestionNumber: questionNumber.val()}
            })
                .done(function (msg) {
                    if (msg.success) {
                        alert('Ваша заявка принят!');
                    }
                });
        }
    });
    qBtn.addEventListener('click', () => qForm.reset());
})