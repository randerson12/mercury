$(document).ready(function () {
  // Smooth Scrolling
  $('a[href=#]').click(function() {
    $('html,body').animate({scrollTop: 0}, 500);
  });
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top - $('nav').outerHeight()
        }, 500);
        return false;
      }
    }
  });

  // Fixed Navigation
  $(window).scroll(function() {
    if ($(this).scrollTop() > $('header > h1').height()) {
      $('nav').addClass('fixed-nav');
    } else {
      $('nav').removeClass('fixed-nav');
    }
  });
});
