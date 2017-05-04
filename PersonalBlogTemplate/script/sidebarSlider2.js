$(document).ready(function() {
    function doSliderResponsive() {
        var $currentWidth = $('div.sidebar_slider2_hider').width();
        $('.slider2_element img').css({
            "width": $currentWidth + "px"
        });
    }
    doSliderResponsive();

    $(window).resize(function() {
        doSliderResponsive();
    });

    var $elementsList = $('.sidebar_slider2_list');
    var $currentValue = 0;
    var $maximumOffset = -400;
    var $minimumOffset = 0;

    function playSlides() {
        setInterval(function() {
            if ($currentValue != $maximumOffset) {
                $currentValue -= 100;
                $elementsList.animate({
                    left: $currentValue + "%"
                }, 500);
            } else {
                $currentValue += 400;
                $elementsList.animate({
                    left: $currentValue + "%"
                }, 500);
            }
        }, 6000);
    }

    playSlides();

    $('#sidebar_slider2_leftArrow').click(function() {
        if ($currentValue != $minimumOffset) {
            $currentValue += 100;
            $elementsList.animate({
                left: $currentValue + "%"
            }, 500);
        } else {
            $currentValue -= 400;
            $elementsList.animate({
                left: $currentValue + "%"
            }, 500);
        }
    });

    $('#sidebar_slider2_rightArrow').click(function() {
        if ($currentValue != $maximumOffset) {
            $currentValue -= 100;
            $elementsList.animate({
                left: $currentValue + "%"
            }, 500);
        } else {
            $currentValue += 400;
            $elementsList.animate({
                left: $currentValue + "%"
            }, 500);
        }
    });

});
