var common = {
	init: function() {
		common.main();
		common.owl();
	},
	main: function(){

		// $('.menu-trigger').click(function(event){
		// 	event.preventDefault();
		// 	$('header').toggleClass('open');
		// })
		

		$('.anchor').click(function(event){
			event.preventDefault();
			var id  = $(this).attr('href'),
			top = $(id).offset().top;
			$('body,html').animate({scrollTop: top}, 1000);
		});

		// $('.form-call').click(function(event){
		// 	event.preventDefault();
		// 	$('#formPopup').addClass('active');
		// });

		// $('.popup-close').click(function(event){
		// 	event.preventDefault();
		// 	$('.popup-wrapper').removeClass('active');
		// });
	},
	owl: function(){
		var headSlider = $('.head-slider').owlCarousel({
			nav:true,
			dots: true,
			loop: true,
			smartSpeed: 1000,
			animateOut: 'fadeOut',
			animateIn: 'fadeInRight',
			dotsContainer: '.head-slider-dots',
			navContainer: '.head-slider-arrows',
			dotsEach:true,
			responsive:{
				0:{
					items:1
				},
				768:{
					items: 1
				},
				1301: {
					items:1,
				}
			}
		});

		$('.customers-slider').owlCarousel({
			nav: false,
			dots: true,
			items: 3,
			smartSpeed: 1000,
			margin: 60,
			animateOut: 'fadeOut',
			animateIn: 'fadeInRight',
			responsive:{
				0:{
					items:1
				},
				661:{
					items: 2,
					margin: 15
				},
				767: {
					items: 2
				},
				1371: {
					items:3,
				}
			}
		});

		
		$('.elements-slider').owlCarousel({
			nav:true,
			dots: true,
			loop: true,
			animateOut: 'fadeOut',
			smartSpeed: 1000,
			responsive:{
				0:{
					items:1
				},
				768:{
					items: 1
				},
				1301: {
					items:1,
				}
			}
		});
		


		$('.head-slider-arrows .owl-next').click(function() {
			headSlider.trigger('next.owl.carousel');
		})

		$('.head-slider-arrows .owl-prev').click(function() {
			headSlider.trigger('prev.owl.carousel', [300]);
		})

		$('.head-slider-dots').on('click', '.owl-dot', function(e) {
			e.preventDefault();
			headSlider.trigger('to.owl.carousel', [$(this).index(), 1000]);
		});

	}

};

(function() {
	common.init();
}());
