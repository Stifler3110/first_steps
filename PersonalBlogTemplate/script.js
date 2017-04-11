$(document).ready(function() {
    var ArrowUp = $('#arrow_up');
    var ArrowDown = $('#arrow_down');
    var elementsList = $('.carousel_list');

    var pixelsOffset = 1634;
    var currentLeftValue = 0;
    var elementsCount = elementsList.find('li').length;
    var minimumOffset = ((elementsCount - 4) * pixelsOffset);
    var maximumOffset = 0;

    ArrowUp.click(function() {
      if (currentLeftValue != maximumOffset) {
        currentLeftValue += 1634;
        elementsList.animate({ left : currentLeftValue + "px"}, 500);
      }
    });

    ArrowDown.click(function() {
      if (currentLeftValue != minimumOffset) {
        currentLeftValue -= 1634;
        elementsList.animate({ left : currentLeftValue + "px"}, 500);
      }
    });

});
