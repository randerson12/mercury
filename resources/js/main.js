$(document).ready(function () {
  // Smooth Scrolling
  $('a[href=#]').click(function(e) {
    e.preventDefault();
    $('html,body').animate({scrollTop: 0}, 500);
  });
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        var offset = ($('nav').outerHeight());
        if ($('nav').hasClass('fixed-nav') === false) {
            offset = offset + 64;
        }
        $('html,body').animate({
            scrollTop: (target.offset().top - offset)
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
