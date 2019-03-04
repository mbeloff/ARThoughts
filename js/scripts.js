$(document).ready(function () {
  // Transition effect for navbar
  $(window).scroll(function () {
    // checks if window is scrolled more than 100px, adds/removes solid class
    if ($(this).scrollTop() > 100) {
      $('.navbar').addClass('solid');
    } else {
      $('.navbar').removeClass('solid');
    }
  });

  //toggle workshop extra info
  $("#full-toggle, #nav-full-toggle").click(function () {
    $("#halfday").slideUp(300, function () {
      $("#fullday").slideToggle(300, );
    });
    $(document.querySelector("#full-toggle")).toggleClass("active");
    $(document.querySelector("#half-toggle")).removeClass("active");
  })

  $("#half-toggle, #nav-half-toggle").click(function () {
    $("#fullday").slideUp(300, function () {
      $("#halfday").slideToggle(300, );
    });
    $(document.querySelector("#half-toggle")).toggleClass("active");
    $(document.querySelector("#full-toggle")).removeClass("active");
  })

  //toggle subnav
  $(".subnavbtn").mouseover(function () {
    $(".subnav-content").addClass("shownav");
    $(".subnavbtn").addClass("highlightnav");
  })

  $(".subnav-content").mouseleave(function () {
    $(".subnav-content").removeClass("shownav");
    $(".subnavbtn").removeClass("highlightnav");
  })



  // scroll to section
  jQuery(function ($) {
    $('a[href*="#"]:not([href="#"])').click(function (e) {
      if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') || location.hostname == this.hostname) {
        var target = $(this.hash);
        headerHeight = 120;
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
          $('html,body').stop().animate({
            scrollTop: target.offset().top - headerHeight
          }, 10);
        }
      }
    });
  });

  jQuery(document).ready(function ($) {
    var hash = window.location.hash
    if (hash == '' || hash == '#' || hash == undefined) return false;
    var target = $(hash);
    headerHeight = 120;
    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
    if (target.length) {
      $('html,body').stop().animate({
        scrollTop: target.offset().top - headerHeight
      }, 10);
    }
  });


  
});