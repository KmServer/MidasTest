import "./import/modules";

$(function () {
    $('.mobile-menu').on('click', function () {
        $('.modal_menu').removeClass('hide');
    });

    $('.mobile-menu-close').on('click', function () {
        $('.modal_menu').addClass('hide');
    });
});
