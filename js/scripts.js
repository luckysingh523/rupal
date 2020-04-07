$('.front_slider').owlCarousel({
    loop:true,
    margin:0,
	dots:true,
    nav:false,
	autoplay:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})


$('.vision_slider').owlCarousel({
    loop:true,
    margin:0,
    dots:true,
    nav:false,
    autoplay:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})


$('.brand_slider').owlCarousel({
    loop:true,
    margin:30,
    dots:false,
    nav:true,
    autoplay:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
})


$( ".nav-icon" ).click(function() {
  $( ".side-menu" ).addClass( "left");
   $( ".overlay" ).addClass( "show");
});


$( ".close-menu" ).click(function() {
  $( ".side-menu" ).removeClass( "left");
   $( ".overlay" ).removeClass( "show");
});




$(window).scroll(function () {
  if ( $(this).scrollTop() > 0 && !$('header').hasClass('sticky') ) {
    $('header').addClass('sticky');

   } else if ( $(this).scrollTop() <= 0 ) {
    $('header').removeClass('sticky');

  }
});

