
$(document).ready(function () {
  var elements = $('[data-tg]');

  $(window).scroll(() => {
      var screenHeight = $(window).height();
      console.log('scrolling');

      elements.each(function () {
          let elemPosition = $(this)[0].getBoundingClientRect();
          let offset = parseInt($(this).data('tg-offset')) || 0;

          if (screenHeight >= (elemPosition.top + offset)) {

              $(this).addClass('tg-animate');

          } else {

              $(this).removeClass('tg-animate');
             
          }
      });
  })
});