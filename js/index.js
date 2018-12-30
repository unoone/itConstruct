$(document).ready(function () {
    const show_mobile_version = () => {
        logo_mobile();
        menu_mobile();
        main_content_mobile();
    }
    const show_desktop_version = () => {
        logo_desktop();
        menu_desktop();
        main_content_desktop();
    }
    const logo_mobile = () => {
        $('#phone-number').insertBefore($('#email'));
        $('.logo-wrapper').append($('.contacts')).append($('.info-title'));
    }
    const menu_mobile = () => {
        $('#menu').css('display', 'none');
        $('#catalog-menu').css('display', 'none');
        $('#catalog-mobile').append($('#catalog-menu'));
        replace_in_catalog_menu_mobile();
    }
    const replace_in_catalog_menu_mobile = () => {
        $('#menu-item5').insertBefore($('#menu-item3'));
        $('#menu-item4').insertBefore($('#menu-item3'));
        $('#menu-item7').insertBefore($('#menu-item3'));
        $('#menu-item6').insertBefore($('#menu-item3'));
    }
    const main_content_mobile = () => {
        $('#content-items').after($('#side-menu'));
    }
    const logo_desktop = () => {
        $('#email').insertBefore($('#phone-number'));
        $('.info').append($('.contacts'));
        $('.title-wrapper').append($('.info-title'));
    }
    menu_desktop = () => {
        $('#menu').css('display', 'flex');
        replace_in_catalog_desktop();
    }
    const replace_in_catalog_desktop = () => {
        $('#menu-item4').insertBefore($('#menu-item5'));
        $('#menu-item6').insertBefore($('#menu-item7'));
        $('#menu-item3').insertBefore($('#menu-item4'));
    }
    const main_content_desktop = () => {
        $('#catalog').append($('#catalog-menu'));
        $('#catalog-menu').css('display', 'block');
        $('#main-content').append($('#side-menu'));
        $('#side-menu').insertBefore($('#content'));
    }
    $('#menu-button').on('click', () => {
        $('#menu').toggle('slow');
    });
    $('#catalog-button').on('click', () => {
        $("#catalog-button").toggleClass('focus')
        $('#catalog-menu').toggle('slow');
    })
    $('.input-auth').focusout(function () {
        this.value !== "" && $(this).css('background', '#e7eeef');

    })
    var win_w = $(window).width();
    if (win_w <= 480) {
        show_mobile_version();
    }

    $(window).resize(function () {
        var w = $(window).width();
        if (w <= 480) {
            show_mobile_version();
        } else {
            show_desktop_version();
        }
    });
});