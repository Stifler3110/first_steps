$(document).ready(function() {
    function doSliderResponsive() {
        var $currentWidth = $('div.sidebar_slider1_hider').width();
        $('.slider1_element img').css({
            "width": $currentWidth + "px"
        });
    }
    doSliderResponsive();

    $(window).resize(function() {
        doSliderResponsive();
    });

    var $elementsList = $('.sidebar_slider1_list');
    var $currentValue = 0;
    var $maximumOffset = -300;
    var $minimumOffset = 0;

    function playSlides() {
        setInterval(function() {
            if ($currentValue != $maximumOffset) {
                $currentValue -= 100;
                $elementsList.animate({
                    left: $currentValue + "%"
                }, 500);
            } else {
                $currentValue += 300;
                $elementsList.animate({
                    left: $currentValue + "%"
                }, 500);
            }
        }, 6000);
    }

    playSlides();
});
