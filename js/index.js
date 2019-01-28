$(document).ready(function () {
    const show_mobile_version = () => {
        logo_mobile();
        hyphen_mobile();
        menu_mobile();
        main_content_mobile();
        description_mobile();
    }
    const show_desktop_version = () => {
        logo_desktop();
        hyphen_desktop();
        menu_desktop();
        main_content_desktop();
        description_desktop();
    }
    const logo_mobile = () => {
        $('#phone-number').insertBefore($('#email'));
        $('.logo-wrapper').append($('.contacts')).append($('.info-title'));
    }
    const hyphen_mobile = () => {
        $('#hyphen').html('-');
        $('#hyphen').css('display', "inline");
    }
    const menu_mobile = () => {
        $('#menu').css('display', 'none');
        $('#catalog-menu').css('display', 'none');
        $('#catalog-mobile').append($('#catalog-menu'));
        $("#menu-delivery").insertBefore($("#menu-news"));
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
        $("#news-menu>li:nth-child(1) a").html('Поздравительная речь президента международной корпорации Хуа Шэн господина Ли Вея в Международн…');
        $("#news-menu>li:nth-child(5) a").html('Сотрудники иркутского филиала отметили китайский новый');
    }
    const description_mobile = () => {
        $('#data1').html($('#data1').html() + $('#data2').html());
        $('#data1').addClass('paragraph');
        $('#data1').css('display', "block");
        $('#data2').empty();
    }
    const logo_desktop = () => {
        $('#email').insertBefore($('#phone-number'));
        $('.info').append($('.contacts'));
        $('.title-wrapper').append($('.info-title'));
    }
    const hyphen_desktop = () => {
        $('#hyphen').html('—');
        $('#hyphen').css('display', "inline");
    }
    menu_desktop = () => {
        $('#menu').css('display', 'flex');
        $("#menu-news").insertBefore($("#menu-delivery"));
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
        $("#news-menu>li:nth-child(1) a").html('Поздравительная речь президента международной корпорации Хуа Шэн господина Ли Вея в Международный…');
        $("#news-menu>li:nth-child(5) a").html('Сотрудники иркутского филиала отметили китайский новый год');
    }
    const description_desktop = () => {
        $('#data1').removeClass('paragraph');
        $('#data1').html('Японские ножи - это прекрасный выбор, который говорит о требовательности покупателя к высокому качеству ножа и о его превосходном вкусе. Кстати, нужно отметить, что японские ножи предназначены не только для японской, но и для европейской, а также любой другой кухни. В известных ресторанах крупнейших городов во всем мире используют именно японские ножи. Японские ножи -это профессиональные инструменты для японской кухни (купить японские ножи Вы можете у нас).');
        $('#data2').html('Интернет магазин "Chef" предлагает купить японские ножи (ножи касуми, масахиро), нож для суши. У нас есть японские ножи из дамасской стали (ножи masahiro, касуми). ');
        $('#data1').css('display', "inline");
        $('#data2').css('display', "inline");
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
    } else {
        show_desktop_version();
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