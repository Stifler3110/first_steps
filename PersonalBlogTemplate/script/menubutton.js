$(document).ready(function() {

            $('#menu_bar').hover(
                function() {
                    $('.menu_bar_mobile').css({
                        'display': 'block'
                    });
                },
                function() {
                    $('.menu_bar_mobile').css({
                        'display': 'none'
                    });
                });
                $('.menu_bar_mobile').hover(
                    function() {
                        $('.menu_bar_mobile').css({
                            'display': 'block'
                        });
                    },
                    function() {
                        $('.menu_bar_mobile').css({
                            'display': 'none'
                        });
                    });
            });
