"use strict";

jQuery(function(){

	const FIRST_VIEW_RIGHTBOX_HEIGHT = $('.first-view__right-box').outerHeight();

	$(window).scroll(function(){

		const FIRST_VIEW_HEIGHT = $(".first-view__image").outerHeight() - 50;

		if($(window).scrollTop() > FIRST_VIEW_HEIGHT){
			$("#main-title").addClass('logo-black');
		}else{
			$("#main-title").removeClass('logo-black');
		}

		if($(window).scrollTop() > FIRST_VIEW_RIGHTBOX_HEIGHT){
			$(".humburger-menu__button--line").css('background-color', 'black');
		}else{
			$(".humburger-menu__button--line").css('background-color', 'white');
		}
	});

	$('.humburger-menu__button').click(function () { 
		$(this).toggleClass('active');
		$("#main-title").toggleClass('logo-black');

		if($(this).hasClass('active')){
			$('.humburger-menu__nav').css('opacity','100');
			$('.humburger-menu__overlay').css('height', '100vh');
			$('.body').addClass('no-scroll');
			$(".humburger-menu__button--line").css('background-color', 'white');
			$("#main-title").removeClass('logo-black');
		}else{
			$('.humburger-menu__nav').css('opacity', '0');
			$('.humburger-menu__overlay').css('height', '0');
			$('.body').removeClass('no-scroll');

			if($(window).scrollTop() > FIRST_VIEW_RIGHTBOX_HEIGHT){
				$(".humburger-menu__button--line").css('background-color', 'black');
				$("#main-title").addClass('logo-black');
			}else{
				$(".humburger-menu__button--line").css('background-color', 'white');
				$("#main-title").removeClass('logo-black');

			}
		}
	});
});