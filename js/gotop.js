// Back to top
$(document).ready(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 20) {
      $('#back-to-top').fadeIn();
    } else {
      $('#back-to-top').fadeOut();
    }
  });
  // Scroll to the top of the page on click
  $('#back-to-top').click(function () {
    $("html, body").animate({
      scrollTop: 0
    }, 1000);
    return false;
  });
});