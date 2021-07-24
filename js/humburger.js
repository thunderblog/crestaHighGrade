"use strict";

jQuery(function(){

	$(window).scroll(function(){

		const FIRST_VIEW_HEIGHT = $(".first-view__image").outerHeight() - 50;
		const FIRST_VIEW_RIGHTBOX_HEIGHT = $('.first-view__right-box').outerHeight();

		if($(window).scrollTop() > FIRST_VIEW_HEIGHT){
			$("#main-title").css('background-image', 'url(../img/site-logo-black.png)');
		}else{
			$("#main-title").css('background-image', 'url(../img/site-logo.png)');
		}

		if($(window).scrollTop() > FIRST_VIEW_RIGHTBOX_HEIGHT){
			$(".humburger-menu__button--line").css('background-color', 'black');
		}else{
			$(".humburger-menu__button--line").css('background-color', 'white');
		}


	});

});