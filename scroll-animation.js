(self["webpackChunkone_stop_ndt"] = self["webpackChunkone_stop_ndt"] || []).push([["/js/scroll-animation"],{

    /***/ "./resources/assets/js/scroll-animation.js":
    /*!*************************************************!*\
      !*** ./resources/assets/js/scroll-animation.js ***!
      \*************************************************/
    /***/ (() => {
    
    $(document).ready(function () {
      var elements = $('[data-tg]');
      $(window).scroll(function () {
        var screenHeight = $(window).height();
        elements.each(function () {
          var elemPosition = $(this)[0].getBoundingClientRect();
          var offset = parseInt($(this).data('tg-offset')) || 0;
          if (screenHeight >= elemPosition.top + offset) {
            $(this).addClass('tg-animate');
          } else {
            $(this).removeClass('tg-animate');
          }
        });
      });
    });
    
    /***/ })
    
    },
    /******/ __webpack_require__ => { // webpackRuntimeModules
    /******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
    /******/ var __webpack_exports__ = (__webpack_exec__("./resources/assets/js/scroll-animation.js"));
    /******/ }
    ]);