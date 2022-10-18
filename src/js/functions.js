$(document).ready(function(){
  $(window).scroll(function() {    
    var scroll = $(window).scrollTop();
    if (scroll >= 100) {
        $("#header").addClass("sticky");
    }else{
      $("#header").removeClass("sticky");
    }
  });
  $(".slider-projects").slick({
    infinite: false,
    variableWidth: false,
    swipeToSlide: true,
    arrows: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  })
})


