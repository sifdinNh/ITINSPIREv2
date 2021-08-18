import jQuery from 'jquery';

(function( $ ) {
    "use strict";
    
    $('.woocommerce-form-coupon-toggle .showcoupon').on("click", function(){
        $(this).toggleClass( "active" );
        if ($(this).hasClass( "active" )) {
            $('.woocommerce-form-coupon').stop(true, true).slideDown();
        }else{
            $('.woocommerce-form-coupon').stop(true, true).slideUp();
        }
    });
    /* ========================================== 
	Sticky Header 1
	========================================== */
	$(window).on("scroll", function(){
		if ( $( '#site-header' ).hasClass( "sticky-header" ) ) {
			var site_header = $('#site-header').outerHeight() + 30;	
			
		    if ($(window).scrollTop() >= site_header) {	    	
		        $('.sticky-header .octf-main-header, .mobile-header-sticky .header_mobile').addClass('is-stuck');	        
		    }else {
		        $('.sticky-header .octf-main-header, .mobile-header-sticky .header_mobile').removeClass('is-stuck');		              
		    }
		}
	});

    /* ========================================== 
    Search on Header
    ========================================== */
    $('.toggle_search').on("click", function(){
        $(this).toggleClass( "active" );
        $('.h-search-form-field').toggleClass('show');
        if ($(this).find('i').hasClass( "flaticon-search" )) {
            $('.toggle_search > i').removeClass( "flaticon-search" ).addClass("flaticon-close");
        }else{
            $('.toggle_search > i').removeClass( "flaticon-close" ).addClass("flaticon-search");
        }
        $('.h-search-form-inner > form > input.search-field').focus();
    });

    /* ========================================== 
    Back To Top
    ========================================== */
    if ($('#back-to-top').length) {
        var scrollTrigger = 500, // px
            backToTop = function () {
                var scrollTop = $(window).scrollTop();
                if (scrollTop > scrollTrigger) {
                    $('#back-to-top').addClass('show');
                } else {
                    $('#back-to-top').removeClass('show');
                }
            };
        backToTop();
        $(window).on('scroll', function () {
            backToTop();
        });
        $('#back-to-top').on('click', function (e) {
            e.preventDefault();
            $('html,body').animate({
                scrollTop: 0
            }, 700);
        }); 
    }

    /* Counter */
    $(window).on('scroll', function() {
        $('.ot-counter').each(function() {
            var pos_y   = $(this).offset().top - window.innerHeight;
            var $this   = $(this).find('span.num'),
                countTo = $this.attr('data-to'),
                during  = parseInt( $this.attr('data-time') ),
                topOfWindow = $(window).scrollTop();

            if ( pos_y < topOfWindow ) {    
                $({
                    countNum: $this.text()
                }).animate({
                    countNum: countTo
                },
                {
                    duration: during,
                    easing: 'swing',
                    step: function() {
                        $this.text(Math.floor(this.countNum));
                    },
                    complete: function() {
                        $this.text(this.countNum);
                    }
                });
            }
        });

        $('.ot-counter2').each(function() {
            var pos_y   = $(this).offset().top - window.innerHeight;
            var $this   = $(this).find('span.num'),
                countTo = $this.attr('data-to'),
                during  = parseInt( $this.attr('data-time') ),
                topOfWindow = $(window).scrollTop();

            if ( pos_y < topOfWindow ) {    
                $({
                    countNum: $this.text()
                }).animate({
                    countNum: countTo
                },
                {
                    duration: during,
                    easing: 'swing',
                    step: function() {
                        $this.text(Math.floor(this.countNum));
                    },
                    complete: function() {
                        $this.text(this.countNum);
                    }
                });
            }
        });
        
        $('.ot-progress').each(function() {
            var pos_y = $(this).offset().top;
            var value = $(this).find(".progress-bar").data('percent');
            var topOfWindow = $(window).scrollTop();
            if (pos_y < topOfWindow + 900) {
                $(this).find(".progress-bar").css({
                    'width': value
                }, "slow");
            }
        });

        $('.circle-progress').each(function() {
            var bar_color = $(this).data('color');
            var bar_hei   = $(this).data('height');
            var bar_size  = $(this).data('size');
            var pos_y = $(this).offset().top;
            var topOfWindow = $(window).scrollTop();
            if (pos_y < topOfWindow + 900) {
                $(this).find('.inner-bar').easyPieChart({
                    barColor: bar_color,
                    trackColor: false,
                    scaleColor: false,
                    lineCap: 'square',
                    lineWidth: bar_hei,
                    size: bar_size,
                    animate: 1000,
                    onStart: $.noop,
                    onStop: $.noop,
                    easing: 'easeOutBounce',
                    onStep: function(from, to, percent) {
                    }
                });
            }
        });
    });


    $('.ot-accordions').each( function () {
        var allPanels = $(this).find('.acc-content');
        $(this).find('.acc-toggle').on( 'click', function(){

            var $this = $(this),
                $target = $this.next();

            if(!$target.hasClass('active')){
                allPanels.removeClass('active').slideUp(300);
                allPanels.parent().removeClass('current');
                $target.addClass('active').slideDown(300);
                $target.parent().addClass('current');
            }

            return false;
        });
        $(this).find('.acc-toggle:first').trigger('click');
    });


    $('.ot-tabs').each(function() {
        $(this).find('.tabs-heading li').first().addClass('current');
        $(this).find('.tab-content').first().addClass('current');
    });

    $('.tabs-heading li').on( 'click', function(){
        var tab_id = $(this).attr('data-tab');
        $(this).siblings().removeClass('current');
        $(this).parents('.ot-tabs').find('.tab-content').removeClass('current');
        $(this).addClass('current');
        $("#"+tab_id).addClass('current');
    });

    $('.message-box > i').on( 'click', function() {
        $(this).parent().fadeOut();
    });

    $('.ot-countdown').each( function() {
        var date   = $(this).data('date'),
            zone   = $(this).data('zone'),
            day    = $(this).data('day'),
            days   = $(this).data('days'),
            hour   = $(this).data('hour'),
            hours  = $(this).data('hours'),
            min    = $(this).data('min'),
            mins   = $(this).data('mins'),
            second = $(this).data('second'),
            seconds = $(this).data('seconds');
        $(this).countdown({
            date: date,
            offset: zone,
            day: day,
            days: days,
            hour: hour,
            hours: hours,
            minute: min,
            minutes: mins,
            second: second,
            seconds: seconds
        }, function () {
            alert('Done!');
        });
    });


    

    
  
    /*Portfolio Filter*/
    $(window).on("load", function () {
        if( $('#projects_grid').length > 0 ){
            var $container = $('#projects_grid'); 
            $container.isotope({ 
                itemSelector : '.project-item', 
                layoutMode : 'masonry'
            });

            var $optionSets = $('.project_filters'),
                $optionLinks = $optionSets.find('a');

            $optionLinks.click(function(){
                var $this = $(this);

                if ( $this.hasClass('selected') ) {
                    return false;
                }
                var $optionSet = $this.parents('.project_filters');
                    $optionSets.find('.selected').removeClass('selected');
                    $this.addClass('selected');

                var selector = $(this).attr('data-filter');
                    $container.isotope({ 
                        filter: selector 
                    });
                return false;
            });
        };    
    });


    
   

   
     
    $(window).on("load", function(){
    $('.projects-grid').each( function(){
        var $container = $(this); 
        $container.isotope({ 
            itemSelector : '.project-item', 
            animationEngine : 'css',
        });

        var $optionSets = $('.project_filters'),
            $optionLinks = $optionSets.find('a');

        $optionLinks.on('click', function(){
            var $this = $(this);

            if ( $this.hasClass('selected') ) {
                return false;
            }
            var $optionSet = $this.parents('.project_filters');
                $optionSets.find('.selected').removeClass('selected');
                $this.addClass('selected');

            var selector = $(this).attr('data-filter');
                $container.isotope({ 
                    filter: selector 
                });
            return false;
        });
    });
    });


})( jQuery );

