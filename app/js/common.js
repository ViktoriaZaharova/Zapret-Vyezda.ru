$('.js-example-basic-single').select2({
    width: '100%'
});

$(document).ready(function () {

    $('.form-quiz__content').slick({
        slidesToShow: 1,
        fade: true,
        swipe: false,
        infinite: false,
        adaptiveHeight: true,
        appendArrows: '.form-quiz__nav',
        prevArrow: '<button type="button" class="slick-prev btn btn-accent"></button>',
        nextArrow: '<button type="button" class="slick-next btn btn-accent">Перейти к шагу <div class="counter-slide">\n' +
            '                          <div class="counter-slide__cp">1 </div>\n' +
            '                          <div class="counter-slide__default">из </div> <span></span>\n' +
            '                        </div></button>'
    });


    var formSlider = $('.form-quiz__content');

    $('.counter-slide__default').text("из" + " " + formSlider.slick("getSlick").slideCount);

    formSlider.on('afterChange', function (event, slick, currentSlide) {
        $(".counter-slide__cp").text(currentSlide < 10 ? `${currentSlide + 1}` : currentSlide + 1);
    });

    //progressbar
    function setProgress(index) {
        var calc = ((index + 1) / (formSlider.slick('getSlick').slideCount)) * 100;
    }

    formSlider.on('beforeChange', function (event, slick, currentSlide, nextSlide) {
        setProgress(nextSlide);
    });

    setProgress(0);
});


$(".form-quiz__content").on("afterChange", function (event) {
    if ($(this).find('.slick-slide').last().hasClass('slick-active')) {
        // $('.form-quiz').addClass('form-quiz-result');
        $('.form-quiz__nav').hide();
        $('.example-box').fadeIn();
        $('.form-quiz-info').hide();
        $('.box-instructions').fadeIn();
        $('.btn-submit').css('display', 'flex');

        $(document).ready(function () {
            setInterval(function() {
                $('.result-status').css('opacity', 1);
                $('.icon-hidden').fadeIn();
                $('.result-of-checking-total h2').css('opacity', 1);
                $('.loader-icon').fadeOut();
            }, 5000);
        });
    }

});


$('.btn-burger').on('click', function () {
    $('.mobile-menu').fadeToggle();
});

$('.btn-close').on('click', function () {
    $('.mobile-menu').fadeOut();
});

// активная ссылка меню
$('.menu li a').each(function () {
    let location = window.location.href;
    let link = this.href;
    if (location === link) {
        $(this).addClass('current');
    }
});
// end

$(".input-toggle").on('click', function () {
    var id = $(this).attr('data-tab'),
        content = $('.input-tab[data-tab="'+ id +'"]');

    $('.input-toggle.active').removeClass('active'); // 1
    $(this).addClass('active'); // 2

    $('.input-tab.active').removeClass('active'); // 3
    content.addClass('active'); // 4
});



$(function () {
    //Сменим язык календаря на русский
    $.datepicker.setDefaults(
        {
            closeText: 'Закрыть',
            prevText: '',
            currentText: 'Сегодня',
            monthNames: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь',
                'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
            monthNamesShort: ['Янв', 'Фев', 'Мар', 'Апр', 'Май', 'Июн',
                'Июл', 'Авг', 'Сен', 'Окт', 'Ноя', 'Дек'],
            dayNames: ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота'],
            dayNamesShort: ['вск', 'пнд', 'втр', 'срд', 'чтв', 'птн', 'сбт'],
            dayNamesMin: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
            weekHeader: 'Не',
            dateFormat: 'dd.mm.yy',
            firstDay: 1,
            isRTL: false,
            showMonthAfterYear: false,
            yearSuffix: ''
        });
    //Добавим код календаря
    $('.datepicker').datepicker({
        showOtherMonths: true,
        selectOtherMonths: true,
    });
});

$('.datepicker').inputmask({
    alias: "datetime",
    inputFormat: "dd.mm.yyyy",
    outputFormat: "dd.mm.yyyy",
    placeholder: "дд.мм.гггг",
    min: '01.01.1920',
    // max: maxDate,
    showMaskOnHover: false,
});

$('[name="phone"]').inputmask('+7(999)999-99-99');



