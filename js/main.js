// scroll top header
$(document).scroll(function() {
    if($(document).scrollTop() > 150) {
      $('.header-top').addClass('header-active');
      $('.logo').addClass('logo-active');
      $('.nav-top ul li a').addClass('nav-top-a');
    }
    else {
      $('.header-top').removeClass('header-active');
      $('.logo').removeClass('logo-active');
      $('.nav-top ul li a').removeClass('nav-top-a');	
    }
  })

// hamburger menu & sidebar navigation
$('.menu').click (function(){
  $(this).toggleClass('open');
  $('.nav-top').toggleClass('nav-top-active');
});

// scroll animation
$(".scroll").click(function(){
  $("body, html").animate({ "scrollTop":$("#guide").offset().top - 50 }
    ,1000);
});
