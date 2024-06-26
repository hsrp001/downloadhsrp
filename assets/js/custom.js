// Custom JavaScript
$(document).ready(function() {
    "use strict";
 
	// sticky header
	function headerSticky(){
		var windowPos=$(window).scrollTop();
		if( windowPos>20){
			$('.fixed-top').addClass("on-scroll");
			$('.light-nav-on-scroll').addClass("ck-menu-light").removeClass("ck-menu-dark");
			$('.dark-nav-on-scroll').addClass("ck-menu-dark").removeClass("ck-menu-light");
		} else {
			$('.fixed-top').removeClass("on-scroll");
			$('.light-nav-on-load').addClass("ck-menu-light").removeClass("ck-menu-dark");
			$('.dark-nav-on-load').addClass("ck-menu-dark").removeClass("ck-menu-light");
		}
	}
	headerSticky();
	$(window).scroll(headerSticky);
	
	// main menu
	$('.main-navigation .sf-menu').superfish({
		delay: 100,                   
		animation: { opacity: 'show', height: 'show' },
		speed: 300,      
	});
	
	// menudropdown auto align      
	var wapoMainWindowWidth = $(window).width();
	$('.sf-menu ul li').mouseover(function(){
		// checks if third level menu exist         
		var subMenuExist = $(this).find('.sub-menu').length;            
		if( subMenuExist > 0){
			var subMenuWidth = $(this).find('.sub-menu').width();
			var subMenuOffset = $(this).find('.sub-menu').parent().offset().left + subMenuWidth;
	
			// if sub menu is off screen, give new position
			if((subMenuOffset + subMenuWidth) > wapoMainWindowWidth){                  
				var newSubMenuPosition = subMenuWidth;
				$(this).find('.sub-menu').css({
					left: -newSubMenuPosition,
					top: '0',
				});
			}
		}
	 }); // menu ends
		 	
	// scrollspy
	$('body').scrollspy({
		offset:	170,
		target:	'.ck-scrollspy'
	});
	
	// nav scroll	
	if($('#ck-header-global').length){
		var navoffset = $('#ck-header-global').height();
		$('.ck-nav a[href^="#"], .ck-scroll-link').on("click", function(e) {
			event.preventDefault();  
			$('html, body').animate({
				scrollTop: $($(this).attr('href')).offset().top - navoffset - 37
			}, "slow","easeInSine");
		});
	} else {
		$('.ck-scroll-link').on("click", function(e) {
			event.preventDefault();  
			$('html, body').animate({
				scrollTop: $($(this).attr('href')).offset().top
			}, "slow","easeInSine");
		});
	}

	// responsive header nav scroll
	var mnavoffset = $('.ck-responsive-header').height();
	var scroll = new SmoothScroll('.ck-responsive-header-menu a', {
		speed: 500,
		speedAsDuration: true,
		offset: mnavoffset + 15
	});
		
	// responsive menu
	$('.main-navigation .ck-nav').slicknav({
		label:"",
		prependTo: '.ck-responsive-header-menu',
		closedSymbol: '',
		openedSymbol: '',
		allowParentLinks:"true",  
		menuButton: '#ck-menu-button',
		closeOnClick:true
	});
	// responsive scrollspy
	$('.slicknav_nav').addClass("ck-scrollspy")
			
	// responsive menu button
	$("#ck-menu-button").on("click", function(e) { 
		$(".slicknav_nav").slideToggle(); 
	}); 
		
	// responsive menu hamburger
	var $hamburger = $("#ck-menu-button");
		$hamburger.on("click", function(e) {
		$hamburger.toggleClass("is-active");
	});
	
	// sectionAnchor
	function sectionAnchor() {
	var navoffset = $('#ck-header-global').height();
		var hash = window.location.hash;
		if (hash != '') {
			setTimeout(function() {
				$('html, body').stop().animate({
					scrollTop: $(hash).offset().top - navoffset - 37
				}, 800, 'easeInSine');
				history.pushState('', document.title, window.location.pathname);
			}, 500);
		}
	} sectionAnchor();
	
	// responsiveAnchor 
	var windowWidth=$(window).width();
	if(windowWidth<992){
		function responsiveAnchor() {
		var mnavoffset = $('.ck-responsive-header').height();
			var hash = window.location.hash;
			if (hash != '') {
				setTimeout(function() {
					$('html, body').stop().animate({
						scrollTop: $(hash).offset().top - mnavoffset - 15
					}, 800, 'easeInSine');
					history.pushState('', document.title, window.location.pathname);
				}, 500);
			}
		} responsiveAnchor();
	}
	
	// sticky tabs
	if ($(".ck-sticky-tabs-wrapper").length > 0) {
		var tabs_container = $(".ck-sticky-tabs-wrapper");
		var tabs_nav = $(".ck-sticky-tabs-nav");
		var offset = tabs_container.offset().top;
		$(window).scroll(function(event) {
			var scroll = $(window).scrollTop();
			var total = tabs_container.height() + offset - 200;
			if (scroll > total) {
				tabs_nav.addClass('ck-sticky-tabs-hide')
			}
			if (scroll < total) {
				tabs_nav.removeClass('ck-sticky-tabs-hide')
			}
		});
	}

	// sticky tabs scroll 
	var taboffset = $('#ck-header-global').height();
	var taboffset2 = $('.ck-sticky-tabs-nav').height();
	
	$('.ck-sticky-tabs li a').click(function(event){  
		event.preventDefault();    
		$('html, body').animate({
			scrollTop: $($(this).attr('href')).offset().top - taboffset - taboffset2
		}, "slow","easeInSine");
	});

	// testimonial
	$('.ck-testimonial-slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		dots: true,
		infinite:true,
		autoplay: true,
		autoplaySpeed: 4000,
		fade: true,
		speed: 1000
	});

	// img slider 3col
	$('.ck-img-slider-3col').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		arrows: false,
		dots: false,
		infinite:true,
		autoplay: true,
		autoplaySpeed: 4000,
		responsive: [
		{
		  breakpoint: 768,
		  settings: {
			slidesToShow: 2,
			slidesToScroll: 1
		  }
		},
	  ]
	});
	
	// img slider 2col
	$('.ck-img-slider-2col').slick({
		slidesToShow: 2,
		slidesToScroll: 1,
		arrows: false,
		dots: false,
		infinite:true,
		autoplay: true,
		autoplaySpeed: 4500,
		responsive: [
		{
		  breakpoint: 768,
		  settings: {
			slidesToShow: 2,
			slidesToScroll: 1
		  }
		},
	  ]
	});
	
	// img slider 1col
	$('.ck-img-slider-1col').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: true,
		dots: false,
		infinite:true,
		autoplay: true,
		fade: true,
		speed: 1500,
		autoplaySpeed: 4500,
		responsive: [
		{
		  breakpoint: 768,
		  settings: {
			slidesToShow: 1,
			slidesToScroll: 1
		  }
		},
	  ]
	});

	// wow animations
	if( $(window).outerWidth() >= 767 ) {
		new WOW().init({
			mobile: false,
		});
	}
	
	// parallax
	if( $(window).outerWidth() >= 767 ) {	 
		$(".parallax").parallaxie({
			speed: 0.60,
			size: 'auto',
		});
		$(".parallax.parallax-slow").parallaxie({
			speed: 0.30,
		});
	}

	// video popup
	$('.ck-video-popup').venobox(); 
	
	// Popup video
	$(".popup-video").magnificPopup({
		disableOn: 320,
		type: 'iframe',
		mainClass: 'mfp-fade',
		removalDelay: 150,
		preloader: false,
		fixedContentPos: false
	});

	// Popup image
	$('.popup-image').magnificPopup({
		type: 'image',
	});
	
	// Popup gallery
	$('.popup-gallery').magnificPopup({
		type: 'image',
		mainClass: 'mfp-fade',
		removalDelay: 150,
		gallery: {
			enabled: true
		},
	});
	
	// counter
	$(".ck-counter").appear(function () {
    	$(".counting-number").countTo();
    });
	
	//Contact form
	$(function () {
		var v = $("#contactform").validate({
			submitHandler: function (form) {
				$(form).ajaxSubmit({
					target: "#result",
					clearForm: true
				});
			}
		});
	});
	//To clear message field on page refresh (you may clear other fields too, just give the 'id to input field' in html and mention it here, as below)
	$('#contactform #message').val('');
	
}); // document ready

// on load
$(window).on('load', function(){ 
	// preloader
	$('.ck-preloader').delay(400).fadeOut(500);
}); // close on load