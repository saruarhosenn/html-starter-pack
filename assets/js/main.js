(function ($) {
  "use strict";
  /* ======= Sticky Menu ======= */
  var windows = $(window);
  var sticky = $(".header-sticky");
  windows.on("scroll", function () {
    var scroll = windows.scrollTop();
    if (scroll < 250) {
      sticky.removeClass("stick");
    } else {
      sticky.addClass("stick");
    }
  });

  /* ====== Open Mobile Menu ====== */
  $(".menu-open-btn").click(function () {
    $(".main-menu").addClass("navBar open-menu");
  });
  $(".menu-close-btn").click(function () {
    $(".main-menu").removeClass("navBar open-menu");
  });
  $(".menu-link").click(function () {
    $(".main-menu").removeClass("navBar open-menu");
  });

  /* ===== Wow JS ===== */
  new WOW().init();

  /* ===== AOS JS ===== */
  AOS.init();
})(jQuery);
