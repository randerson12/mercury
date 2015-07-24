$(document).ready(function () {
  // Smooth Scrolling
  $('a[href=#]').click(function(e) {
    e.preventDefault();
    $('html,body').animate({scrollTop: 0}, 500);
  });
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var duration = 250;
      var target = $(this.hash);
      var setTarget = $('[name=' + this.hash.slice(1) +']');
      var theTarget = $('#' + this.hash.slice(1)).offset().top;

      if (theTarget > 750) {
          duration = 500;
      } else if (theTarget > 1500) {
          duration = 1000;
      }

      target = target.length ? target : setTarget;

      if (target.length) {
        var offset = ($('nav').outerHeight());

        if ($('nav').hasClass('fixed-nav') === false) {
            offset = offset + 64;
        }

        $('html,body').animate({
            scrollTop: (target.offset().top - offset)
        }, duration);

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
