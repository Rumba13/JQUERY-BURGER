"use strict";
$(function () {
	let burg = $('.burger__icon');
	let burgmenu = $('.burger__menu');

	burg.click(function () {
		console.log(screen.width);
		if (screen.width < 700) {
			burgmenu.toggleClass('active');
		} else {
			burgmenu.removeClass('active');
		}

	});
	$(window).on('resize', function () {
		if (screen.width > 700) {
			burgmenu.removeClass('active');
		}
	});


});