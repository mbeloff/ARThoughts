$(document).ready(function() {
  // Transition effect for navbar
  $(window).scroll(function() {
    // checks if window is scrolled more than 500px, adds/removes solid class
    if($(this).scrollTop() > 100) {
        $('.navbar').addClass('solid');
    } else {
        $('.navbar').removeClass('solid');
    }
  });
});


//scroll to section
$('a[href^="#"]').on('click', function(event) {
  var target = $(this.getAttribute('href'));
  if( target.length ) {
      event.preventDefault();
      $('html, body').stop().animate({
          scrollTop: target.offset().top - 130
      }, 10);
  }
});

$('#home').on('click', function(event) {
  var target = $(this.getAttribute('href'));
  if( target.length ) {
      event.preventDefault();
      $('html, body').stop().animate({
          scrollTop: target.offset().top
      }, 10);
  }
});

//toggle elements

  $("#full-toggle, #nav-full-toggle").click(function(){
    $("#halfday").slideUp(300,function(){
      $("#fullday").slideToggle(300);
    });    
    $(document.querySelector("#full-toggle")).toggleClass("active");
    $(document.querySelector("#half-toggle")).removeClass("active");
  })

  $("#half-toggle, #nav-half-toggle").click(function(){    
    $("#fullday").slideUp(300,function(){
      $("#halfday").slideToggle(300);
    });     
    $(document.querySelector("#half-toggle")).toggleClass("active");  
    $(document.querySelector("#full-toggle")).removeClass("active");     
  })

