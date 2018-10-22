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
        arrows: false,
      }
    },
    {
      breakpoint: 769,
      settings: {
        slidesToShow: 2,
        arrows: false,
      }
    },
    {
      breakpoint: 577,
      settings: {
        slidesToShow: 1,
        arrows: false,
      }
    }
  ]
	});
});