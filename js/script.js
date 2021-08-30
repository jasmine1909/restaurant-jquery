$(document).ready(function () {
  let bannerCount = 0;
  setInterval(function () {
    hideAllBanner();
    changeBannerCount();
    changeBanner();
  }, 8000);

  function hideAllBanner() {
    $(".banner-item").each(function (idx) {
      $(this).removeClass("active-banner");
    });
  }

  function changeBannerCount() {
    bannerCount++;
    if (bannerCount >= $(".banner-item").length) {
      bannerCount = 0;
    }
  }

  function changeBanner() {
    $(".banner-item").each(function (idx) {
      if (bannerCount == idx) {
        $(this).addClass("active-banner");
      }
    });
  }
  /*nav*/

  $("#navbar-toggler").click(function () {
    $(".navbar-collapse").slideToggle(700);
  });

  $(window).scroll(function () {
    let pos = $(window).scrollTop();
    if (pos >= 800) {
      $(".navbar").addClass("fix-navbar");
    } else ".navbar".removeClass("fix-navbar");
  });
});
