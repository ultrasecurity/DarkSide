$(document).ready(function () {
    var owl = $('.owl-carousel2');
	owl.owlCarousel({
		loop:true,
		margin:25,
		autoplay:true,
		nav: false,
		dots: false,
		slideTransition: 'linear',
		autoplayTimeout: 3700,
		smartSpeed: 3700,
		animateIn: 'linear',
		animateOut: 'linear',
		autoplayHoverPause:true,
		responsive: {
				0: {
					items: 1,
					nav: true
				},
				600: {
					items: 2,
					nav: true
				},
				1300: {
					items: 4,
					nav: true
				},
				1600: {
					items:5,
					nav: true
				}
			}
	});
	
    var owl = $('.profiles');
	owl.owlCarousel({
		loop:true,
		margin:25,
		autoplay:true,
		nav: false,
		dots: false,
		slideTransition: 'linear',
		 autoplayTimeout: 1720,
		smartSpeed: 1500,
		animateIn: 'linear',
		animateOut: 'linear',
		autoplayHoverPause:true,
		responsive: {
				0: {
					items: 1,
					nav: true
				},
				600: {
					items: 2,
					nav: true
				},
				1300: {
					items: 4,
					nav: true
				}
			}
	});

});