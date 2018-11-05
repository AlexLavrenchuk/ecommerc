$(document).ready(function(){
  
	$('.slider').slick({
		slidesToShow: 4,
		slidesToScroll: 2,
    arrows: false,
		dots: true,
	  	dotsClass: "my-dots",

	  	 responsive: [
    {
      breakpoint: 993,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
      }
    },
    {
      breakpoint: 769,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
      }
    },
    {
      breakpoint: 577,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
      }
    }
  ]
	});
});

/////////////login////////////
$('.submit-button').click(function(){
  $('.show-blok-login').show();
  $('.show-blok-logout').hide();
  $(".shopping-cart-notification").css("background", "#95c85a");
});
$('.button-margin-logout').click(function(){
  $('.show-blok-logout').show();
  $('.show-blok-login').hide();
  $(".shopping-cart-notification").css("background", "#e74c3c");
});



/////////////////// 
$('.view-selection .fa-th-list').click(function(){
  $('.card-deck').addClass('card-deck-list');
  $('.fa-th-list').addClass('active-switcher');
  $('.fa-th-large').removeClass('active-switcher');
});

$('.view-selection .fa-th-large').click(function(){
  $('.card-deck').removeClass('card-deck-list');
  $('.fa-th-list').removeClass('active-switcher');
  $('.fa-th-large').addClass('active-switcher');
});

$('.top-10 .btn-search-green').click(function(){
  $('.top-10 .card').addClass('visible-tablet');
});

////////range////////// 
var softSlider = document.getElementById('soft');

noUiSlider.create(softSlider, {
    start: 50,
    range: {
        min: 0,
        max: 100
    },
    pips: {
        mode: 'values',
        values: [20, 80],
        density: 4
    }
});

