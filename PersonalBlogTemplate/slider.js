$(document).ready(function() {
    doSliderResponsive();
    $(window).resize(function() {
        doSliderResponsive();
    });

    function doSliderResponsive() {
        var $currentWidth = $('div#carousel_hider').width();
        $('.carousel_element img').css({
            "width": $currentWidth + "px"
        });
    }

    var $elementsList = $('.carousel_list');
    var $currentValue = 0;
    var $maximumOffset = -200;
    var $middleOffset = -100;
    var $minimumOffset = 0;

    var $box3Position = ($maximumOffset - $currentValue);
    var $box2Position = ($maximumOffset - $currentValue) / 2;
    var $box1Position = ($minimumOffset + $currentValue);

    $('#box1').click(function() {
        $('#box_two').removeClass('active');
        $('#box_two').addClass('box');
        $('#box_three').removeClass('active');
        $('#box_three').addClass('box');
        $('#box_one').removeClass('box');
        $('#box_one').addClass('active');
        activateNavigationBoxByClick();
        $elementsList.animate({
            left: $box1Position + "%"
        }, 500);
    });

    $('#box2').click(function() {
        $('#box_one').removeClass('active');
        $('#box_one').addClass('box');
        $('#box_three').removeClass('active');
        $('#box_three').addClass('box');
        $('#box_two').removeClass('box');
        $('#box_two').addClass('active');
        activateNavigationBoxByClick();
        $elementsList.animate({
            left: $box2Position + "%"
        }, 500);
    });

    $('#box3').click(function() {
        $('#box_one').removeClass('active');
        $('#box_one').addClass('box');
        $('#box_two').removeClass('active');
        $('#box_two').addClass('box');
        $('#box_three').removeClass('box');
        $('#box_three').addClass('active');
        activateNavigationBoxByClick();
        $elementsList.animate({
            left: $box3Position + "%"
        }, 500);
    });

    function activateNavigationBoxByClick() {
        $('.active').attr('src', 'https://github.com/Stifler3110/first_steps/blob/master/PersonalBlogTemplate/images/box_selected.jpg?raw=true');
        $('.box').attr('src', 'https://github.com/Stifler3110/first_steps/blob/master/PersonalBlogTemplate/images/box_empty.jpg?raw=true');
    }

    function playSlides() {
        $play = setInterval(function() {
            if ($currentValue != $maximumOffset) {
                $currentValue -= 100;
                $elementsList.animate({
                    left: $currentValue + "%"
                }, 500);
                activateNavigationBoxes();
            } else {
                $currentValue += 200;
                $elementsList.animate({
                    left: $currentValue + "%"
                }, 500);
                activateNavigationBoxes();
            }
        }, 5000);
    }

    playSlides();

    $("#selectors").hover(function() {
        clearInterval($play);
    }, function() {
        playSlides();
    });

    $('#arrow_up').click(function() {
        if ($currentValue != $minimumOffset) {
            $currentValue += 100;
            $elementsList.animate({
                left: $currentValue + "%"
            }, 500);
            activateNavigationBoxes();
        } else {
            $currentValue -= 200;
            $elementsList.animate({
                left: $currentValue + "%"
            }, 500);
            activateNavigationBoxes();
        }
    });

    $('#arrow_down').click(function() {
        if ($currentValue != $maximumOffset) {
            $currentValue -= 100;
            $elementsList.animate({
                left: $currentValue + "%"
            }, 500);
            activateNavigationBoxes();
        } else {
            $currentValue += 200;
            $elementsList.animate({
                left: $currentValue + "%"
            }, 500);
            activateNavigationBoxes();
        }
    });

    function activateNavigationBoxes() {
        if ($currentValue == $minimumOffset) {
            $("#box_one").attr("src", "https://github.com/Stifler3110/first_steps/blob/master/PersonalBlogTemplate/images/box_selected.jpg?raw=true");
        } else {
            $("#box_one").attr("src", "https://github.com/Stifler3110/first_steps/blob/master/PersonalBlogTemplate/images/box_empty.jpg?raw=true");
        }
        if ($currentValue == $middleOffset) {
            $("#box_two").attr("src", "https://github.com/Stifler3110/first_steps/blob/master/PersonalBlogTemplate/images/box_selected.jpg?raw=true");
        } else {
            $("#box_two").attr("src", "https://github.com/Stifler3110/first_steps/blob/master/PersonalBlogTemplate/images/box_empty.jpg?raw=true");
        }
        if ($currentValue == $maximumOffset) {
            $("#box_three").attr("src", "https://github.com/Stifler3110/first_steps/blob/master/PersonalBlogTemplate/images/box_selected.jpg?raw=true");
        } else {
            $("#box_three").attr("src", "https://github.com/Stifler3110/first_steps/blob/master/PersonalBlogTemplate/images/box_empty.jpg?raw=true");
        }
    }
    
    activateNavigationBoxes();

});
