
// подключение common.js

$(document).ready( function() {
    // checkbox
    // var data = $('.check').each(function () {
    //    return $(this).data('check') + '.txt';
    // });
    var checkTxt = $('.check .txt').width();
    // console.log(data);
    $('.check').each(function () {
       var checkTxt = $(this).find('.txt').width();
        $(this).css('width', checkTxt + 20);
    })
    

    // для инициализации tooltips
    // $( document ).tooltip({
    //   track: true
    // }); 

    // скролл по ссылке с атрибутом href 
    // $(".header_nav a[href*='#']").on("click", function(e) {
    //     e.preventDefault();
    //     var anchor = $(this);
    //     $('html, body').stop().animate({
    //         scrollTop: $(anchor.attr('href')).offset().top
    //     }, 500);
    //     return false;
    // });

    // Скролл по классу .scroll_to и атрибуту data-scroll у кнопки к примеру (data-scroll="куда скроллим" в элементе куда скроллим ставим id потом впишем в куда скроллим)
    // $(".scroll_to").on("clcik", function(e) {
    //     e.preventDefault();
    //     var anchor = $(this);
    //     $('html, body').stop().animate({
    //         scrollTop: $("#" + anchor.data('scroll')).offset().top
    //     }, 500);
    //     return false;
    // });

    //  Активация слайдера
    // $(".owl-carousel").owlCarousel({
    //     loop: true,
    //     items: 1,
    //     dots: true
    // });

    // Кастомные кнопки управления слайдером
    // var owl = $('.owl-carousel');
    // owl.owlCarousel();
    // // Go to the next item
    // $('.customNextBtn').click(function() {
    //     owl.trigger('next.owl.carousel', [700]);
    // });
    // // Go to the previous item
    // $('.customPrevBtn').click(function() {
    //     // With optional speed parameter
    //     // Parameters has to be in square bracket '[]'
    //     owl.trigger('prev.owl.carousel', [700]);
    // });  
    

});

$(window).resize(function() {

});

$(window).scroll(function() {
    
});

