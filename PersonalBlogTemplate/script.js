$(document).ready(function() {
    var ArrowUp = $('#arrow_up');
    var ArrowDown = $('#arrow_down');
    var elementsList = $('.carousel_list');

    var pixelsOffset = 1634;
    var currentValue = 0;
    var elementsCount = elementsList.find('li').length;
    var minimumOffset = ((elementsCount - 4) * pixelsOffset);
    var maximumOffset = 0;

    ArrowUp.click(function() {
      if (currentValue != maximumOffset) {
        currentValue += 1634;
        elementsList.animate({ left : currentValue + "px"}, 500);
      }
    });

    ArrowDown.click(function() {
      if (currentValue != minimumOffset) {
        currentValue -= 1634;
        elementsList.animate({ left : currentValue + "px"}, 500);
      }
    });
});
