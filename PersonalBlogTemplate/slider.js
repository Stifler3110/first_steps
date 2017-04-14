$(document).ready(function() {
    $(window).resize(function() {
        doSliderResponsive();
    });
    if (window.matchMedia('(max-width: 2000px)').matches) {
        doSliderResponsive();
    }

    function doSliderResponsive() {
        var currentWidth = $('div#carousel_hider').width();
        $('.carousel_element img').css({
            "width": currentWidth + "px"
        });
    }

    var elementsList = $('.carousel_list');

    var pixelsOffset = 100;
    var currentValue = 0;
    var elementsCount = elementsList.find('li').length;
    var maximumOffset = -200;
    var minimumOffset = 0;

    $('#arrow_up').click(function() {
        if (currentValue != minimumOffset) {
            currentValue += 100;
            elementsList.animate({
                left: currentValue + "%"
            }, 500);
        } else {
            currentValue -= 200;
            elementsList.animate({
                left: currentValue + "%"
            }, 500);
        }
    });

    $('#arrow_down').click(function() {
        if (currentValue != maximumOffset) {
            currentValue -= 100;
            elementsList.animate({
                left: currentValue + "%"
            }, 500);
        } else {
            currentValue += 200;
            elementsList.animate({
                left: currentValue + "%"
            }, 500);
        }
    });
});
