$(document).ready(function() {
    function doContentResponsive() {
        if (window.matchMedia('(max-width: 768px)').matches) {
            $('.sidebar_slider2_arrows').css({
                'display': 'none'
            });
        }

        if (window.matchMedia('(max-width: 500px)').matches) {
            $('.sidebar_wrapper').css({
                'display': 'none'
            });
            $('.main_content').css({
                'width': '100%'
            });
            $('.header_wrapper').css({
                'display': 'none'
            });
            $('.header_background img').css({
                'height': '1em'
            });
        }
      }


    doContentResponsive();

    $(window).resize(function() {
        doContentResponsive();
    });

});
