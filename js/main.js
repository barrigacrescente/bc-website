$(document).ready(function(){
  //microinteraction landing headline
  $(".header-content").hide();
  $(".header-content").fadeIn(1000);
  //menu hamburger
  $(".icon-hamburguer-menu").on("click", function() {
    $(".navegation-link-content").slideToggle();
  });
  //scroll to top show
  $(document).scroll(function(){
    if ($(this).scrollTop() > 400) {
        $('.go-top').fadeIn();
    } else {
        $('.go-top').fadeOut();
    }
  });
  //scroll to top action
  $('.go-top').each(function(){
      $(this).click(function(){
          $('html,body').animate({ scrollTop: 0 }, 'slow');
          return false;
      });
  });

  $('.btn-subscription').click(function(){
      $('html, body').animate({
          scrollTop: $( $(this).attr('href') ).offset().top
      }, 800);
      return false;
  });
});//wrapper end
