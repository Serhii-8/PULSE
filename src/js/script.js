$(document).ready(function () {
	$(".carousel__inner").slick({
		speed: 1200,
		adaptiveHeight: false,
		prevArrow:
			'<button type="button" class="slick-prev"><img src="img/carousel/arrow_left.png"></button>',
		nextArrow:
			'<button type="button" class="slick-next"><img src="img/carousel/arrow_right.png"></button>',
		responsive: [
			{
				breakpoint: 992,
				settings: {
					dots: false,
					arrows: false,
				},
			},
		],
	});
});
