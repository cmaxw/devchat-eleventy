/*
	Template Name: Vinazine
	Author: Themewinter
	Author URI: https://themeforest.net/user/tripples
	Description: vinazine
   Version: 1.0

   ================================
   table of content
   =================================
   1.   dropdown menu
   2.   breking news slider
   3.   featured post slider
   4.   Most populer slider
   5.   Gallery popup
   6.   video popup
   7.   video slider

*/

$(function ($) {
    "use strict";




    $(window).on('load', function() {

        /*==========================================================
                    4. Preloader
        =======================================================================*/
        setTimeout(() => {
            $('#preloader').addClass('loaded');
        }, 1000);
    });

    $('.preloader-cancel-btn').on('click', function(event) {
		event.preventDefault();
		if (!$('#preloader').hasClass('loaded')) {
			$('#preloader').addClass('loaded');
		}
   });
   



    /**-------------------------------------------------
     *Fixed HEader
     *----------------------------------------------------**/
       $(window).on('scroll', function () {

            /**Fixed header**/
            if ($(window).scrollTop() > 250) {
               $('.ts-menu-sticky').addClass('sticky fade_down_effect');
            } else {
               $('.ts-menu-sticky').removeClass('sticky fade_down_effect');
            }
      });

     /* ----------------------------------------------------------- */
	/*  index search
    /* ----------------------------------------------------------- */

    if ($(".header-search").length > 0) {
        var todg = true;
        $(".header-search >a").on("click", function (e) {
            e.preventDefault();
            if (todg) {
                $(".header-search-form").fadeIn("slow");
                todg = false;
            } else {
                $(".header-search-form").fadeOut("slow");
                todg = true;
            }
        });

        $(document).on('mouseup', function (e) {
            var container = $(".header-search");

            if (!container.is(e.target) && container.has(e.target).length === 0) {
                $(".header-search-form").fadeOut("slow");
                todg = true;
            }

        });
    }


    /*======================== 
         navigation 
    ==========================*/
    if ($('.ts-main-menu').length > 0) {
        $(".ts-main-menu").navigation({
            effect: "fade",
            mobileBreakpoint: 992,
        });
    }

    /*======================== 
        breaking news  
   ==========================*/
    if ($('#breaking_slider').length > 0) {
        $('#breaking_slider').owlCarousel({
            items: 1,
            loop: true,
            dots: false,
            nav: true,
            animateOut: 'slideOutDown',
            animateIn: 'flipInX',
            autoplayTimeout: 5000,
            autoplay: true,
        })
    }

    /*======================== 
        featured post  
   ==========================*/
    if ($('#featured-slider').length > 0) {
        $('#featured-slider').owlCarousel({
            loop: true,
            items: 1,
            dots: false,
            nav: true,
            autoplayTimeout: 5000,
            autoplay: true,
            animateOut: 'slideOutLeft',
            navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
            responsiveClass: true
        });
    }
    /*======================== 
        featured slider 2 
   ==========================*/
    if ($('#featured-slider-2').length > 0) {
        $('#featured-slider-2').owlCarousel({
            loop: true,
            items: 1,
            dots: true,
            nav: false,
            responsiveClass: true,
            animateOut: 'slideOutLeft',

        });
    }
    /*======================== 
        featured slider 3
   ==========================*/
    if ($('#featured-slider-3').length > 0) {
        $('#featured-slider-3').owlCarousel({
            items: 1,
            dots: true,
            nav: false,
            animateOut: 'slideOutLeft',
            autoplay: true,
            responsiveClass: true,
        });
    }
    /*======================== 
        featured slider 3
   ==========================*/
    if ($('#featured-slider-4').length > 0) {
        $('#featured-slider-4').owlCarousel({
            items: 1,
            dots: false,
            nav: true,
            animateOut: 'slideOutLeft',
            autoplay: true,
            responsiveClass: true,
            navText: ["<i class='icon-arrow-left'></i>", "<i class='icon-arrow-right'></i>"],
        });
    }
    /*======================== 
        featured slider 5
   ==========================*/
    if ($('#featured-slider-5').length > 0) {
        $('#featured-slider-5').owlCarousel({
            items: 1,
            dots: true,
            nav: false,
            animateOut: 'slideOutLeft',
            autoplay: true,
            responsiveClass: true,
        });
    }
    /*======================== 
        most populer  
   ==========================*/
    if ($('.most-populers').length > 0) {
        $('.most-populers').owlCarousel({
            items: 3,
            dots: false,
            loop: true,
            nav: true,
            margin: 30,
            navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
            responsive: {
                // breakpoint from 0 up
                0: {
                    items: 1,
                },
                // breakpoint from 480 up
                480: {
                    items: 2,
                },
                // breakpoint from 768 up
                768: {
                    items: 2,
                },
                // breakpoint from 768 up
                1200: {
                    items: 3,
                }
            }
        });
    }

    /*======================== 
        hot topics 
   ==========================*/
    if ($('#hot-topics-slider').length > 0) {
        $('#hot-topics-slider').owlCarousel({
            nav: false,
            items: 4,
            margin: 30,
            reponsiveClass: true,
            dots: true,
            responsive: {
                // breakpoint from 0 up
                0: {
                    items: 1,
                },
                // breakpoint from 480 up
                480: {
                    items: 2,
                },
                // breakpoint from 768 up
                768: {
                    items: 2,
                },
                // breakpoint from 768 up
                1200: {
                    items: 4,
                }
            }
        });
    }
    /*======================== 
      more news slider
   ==========================*/
    if ($('#more-news-slider').length > 0) {
        $('#more-news-slider').owlCarousel({
            nav: false,
            items: 3,
            margin: 30,
            reponsiveClass: true,
            dots: true,
            slideSpeed: 600,
            responsive: {
                // breakpoint from 0 up
                0: {
                    items: 1,
                },
                // breakpoint from 480 up
                480: {
                    items: 2,
                },
                // breakpoint from 768 up
                768: {
                    items: 2,
                },
                // breakpoint from 768 up
                1200: {
                    items: 3,
                }
            }

        });
    }

     /* ----------------------------------------------------------- */
	/*  hero banner slider on sport index
    /* ----------------------------------------------------------- */
    if ($("#hero-slider").length > 0) {
        $("#hero-slider").owlCarousel({
            margin: 10,
            loop: true,
            dots: true,
            nav: true,
            autoplay: true,
            items: 1,
            animateOut: 'slideOutLeft',
            navText: ["<i class='icon-arrow-left'></i>", "<i class='icon-arrow-right'></i>"],
        });

        $('#hero-slider .owl-dots').wrap('<div class="container slider-dot-item"><div class="row"><div class="col-lg-9"></div></div></div>');
        $('#hero-slider .owl-nav').wrap('<div class="container slider-arrow-item"><div class="row"><div class="col-lg-9"></div></div></div>');
    }
    /* ----------------------------------------------------------- */
	/*  post slider
    /* ----------------------------------------------------------- */

    $("#post-slider1").owlCarousel({
        margin: 10,
        loop: true,
        dots: false,
        nav: true,
        autoplay: true,
        autoplaySpeed: 3000,
        items: 1,
        animateOut: 'fadeOut',
        navText: ["<i class='icon-arrow-left'></i>", "<i class='icon-arrow-right'></i>"],
    });

    /* ----------------------------------------------------------- */
	/*  blog post slider for blog page
    /* ----------------------------------------------------------- */

    $(".blog-post-slider-item").owlCarousel({
        margin: 10,
        dots: false,
        nav: true,
        items: 1,
        animateOut: 'fadeOut',
        navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
    });

    /* ----------------------------------------------------------- */
	/*  marquee slider
	/* ----------------------------------------------------------- */
    if ($('.slick.marquee').length > 0) {
        $('.slick.marquee').slick({
            speed: 5000,
            autoplay: true,
            autoplaySpeed: 0,
            centerMode: true,
            cssEase: 'linear',
            slidesToShow: 1,
            slidesToScroll: 1,
            variableWidth: true,
            infinite: true,
            initialSlide: 1,
            arrows: false,
            buttons: false
        });
    }
    /* ----------------------------------------------------------- */
	/*  breking news slider
	/* ----------------------------------------------------------- */
    if ($('#breaking_slider1').length > 0) {
        $('#breaking_slider1').slick({
            speed: 10000,
            autoplay: true,
            autoplaySpeed: 0,
            centerMode: true,
            centerPadding: '100px',
            cssEase: 'linear',
            slidesToShow: 1,
            slidesToScroll: 1,
            variableWidth: true,
            infinite: true,
            initialSlide: 1,
            arrows: false,
            buttons: false,
            vertical: true
        });
    }


    /* ----------------------------------------------------------- */
	/*  Popup
	/* ----------------------------------------------------------- */

    if ($('.gallery-popup').length > 0) {
        $('.gallery-popup').magnificPopup({
            type: 'image',
            mainClass: 'mfp-with-zoom',
            zoom: {
                enabled: true, // By default it's false, so don't forget to enable it

                duration: 300, // duration of the effect, in milliseconds
                easing: 'ease-in-out', // CSS transition easing function

                opener: function (openerElement) {
                    return openerElement.is('img') ? openerElement : openerElement.find('img');
                }
            }
        });
    }

    /* ----------------------------------------------------------- */
	/*  single post video
    /* ----------------------------------------------------------- */
    if ($('.ts-play-btn').length > 0) {
        $('.ts-play-btn').magnificPopup({
            type: 'iframe',
            mainClass: 'mfp-with-zoom',
            zoom: {
                enabled: true, // By default it's false, so don't forget to enable it

                duration: 300, // duration of the effect, in milliseconds
                easing: 'ease-in-out', // CSS transition easing function

                opener: function (openerElement) {
                    return openerElement.is('img') ? openerElement : openerElement.find('img');
                }
            }
        });
    }

    if ($('.ts-video-btn').length > 0) {
        $('.ts-video-btn').magnificPopup({
            type: 'iframe',
            mainClass: 'mfp-with-zoom',
            zoom: {
                enabled: true, // By default it's false, so don't forget to enable it

                duration: 300, // duration of the effect, in milliseconds
                easing: 'ease-in-out', // CSS transition easing function

                opener: function (openerElement) {
                    return openerElement.is('img') ? openerElement : openerElement.find('img');
                }
            }
        });

    }


    if ($('.ts-video-icon').length > 0) {
        $('.ts-video-icon').magnificPopup({
            type: 'iframe',
            mainClass: 'mfp-with-zoom',
            zoom: {
                enabled: true, // By default it's false, so don't forget to enable it

                duration: 300, // duration of the effect, in milliseconds
                easing: 'ease-in-out', // CSS transition easing function

                opener: function (openerElement) {
                    return openerElement.is('img') ? openerElement : openerElement.find('img');
                }
            }
        });

    }

    $(document).ready(function () {

        var s = $('.video-slider'),
            sWrapper = s.find('.slider-wrapper'),
            sItem = s.find('.slide'),
            btn = s.find('.slider-link'),
            sWidth = sItem.width(),
            sCount = sItem.length,
            slide_date = s.find('.slide-date'),
            slide_title = s.find('.slide-title'),
            slide_text = s.find('.slide-text'),
            slide_more = s.find('.slide-more'),
            slide_image = s.find('.slide-image img'),
            sTotalWidth = sCount * sWidth;

        sWrapper.css('width', sTotalWidth);
        sWrapper.css('width', sTotalWidth);

        var clickCount = 0;

        btn.on('click', function (e) {
            e.preventDefault();

            if ($(this).hasClass('next')) {

                (clickCount < (sCount - 1)) ? clickCount++ : clickCount = 0;
            } else if ($(this).hasClass('prev')) {

                (clickCount > 0) ? clickCount-- : (clickCount = sCount - 1);
            }
            TweenMax.to(sWrapper, 0.4, { x: '-' + (sWidth * clickCount) })


            //CONTENT ANIMATIONS

            var fromProperties = { autoAlpha: 0, x: '-50', y: '-10' };
            var toProperties = { autoAlpha: 0.8, x: '0', y: '0' };

            TweenLite.fromTo(slide_image, 1, { autoAlpha: 0, y: '40' }, { autoAlpha: 1, y: '0' });
            TweenLite.fromTo(slide_date, 0.4, fromProperties, toProperties);
            TweenLite.fromTo(slide_title, 0.6, fromProperties, toProperties);
            TweenLite.fromTo(slide_text, 0.8, fromProperties, toProperties);
            TweenLite.fromTo(slide_more, 1, fromProperties, toProperties);

        });

    });


    if ($("#video-tab-scrollbar").length > 0) {
        $("#video-tab-scrollbar").mCustomScrollbar({
            mouseWheel: true,
            scrollButtons: { enable: true }
        });
    }
   

});