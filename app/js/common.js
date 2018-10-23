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