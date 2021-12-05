window.addEventListener("DOMContentLoaded", () => {
	const menu = document.querySelector(".header"),
		hamburger = document.querySelector(".header__hamburger");

	hamburger.addEventListener("click", () => {
		hamburger.classList.toggle("header__hamburger_active");
		menu.classList.toggle("header_active");
	});
});

$(document).ready(function () {
	$(".carousel__inner").slick({
		speed: 1200,
		// adaptiveHeight: true,
		prevArrow:
      "<button type=\"button\" class=\"slick-prev\"><img src=\"icons/left-arrow.png\" /></button>",
		nextArrow:
      "<button type=\"button\" class=\"slick-next\"><img src=\"icons/right-arrow.png\" /></button>",
		responsive: [
			{
				breakpoint: 992,
				settings: {
					dots: true,
					arrows: false,
				},
			},
		],
	});
});
