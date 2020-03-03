/*
*
* Custom js snippets for Ventcamp v2.0
* by Vivaco
*
*/

var Ventcamp;

;(function($){

    $(document).on('ready', function () {
        Ventcamp.init();
    });

})( jQuery );


// Main theme functions start
Ventcamp = {
    defaults: {
        log: false,
        styleSwitcher: false,
        animations: true,
        onePageNav: true,
        alwaysMobileMenuMode: false,
        mobileMenuMaxWidth: 768,
        smoothScroll: false,
        smoothScrollSpeed: 800,
        pseudoSelect: true,
        ajaxedForm: true,
        ajaxedFormSuccessMsg: 'Success',
        ajaxedFormErrorMsg: 'An error occured. Please try again later.',
        toastrPositionClass: 'toast-top-full-width'
    },

    mobileDevice: false,

    log: function (msg) {
        if ( this.options.log ) console.log('%cStartupLy Log: ' + msg, 'color: #1ac6ff');
    },

    buildStyleSwitcher: function () {
        var template = '<div class="style-switcher"><a href="#" class="style-toggle"><i class="fa fa-cog"></i></a><h6>Color palette</h6><ul class="template-set-color"><li><a data-color="Blue" class="color blue" href="#" title="style"></a></li><li><a data-color="Pink" class="color pink" href="#" title="main-pink"></a></li><li><a data-color="Green" class="color green" href="#" title="main-green"></a></li><li><a data-color="Berry" class="color berry" href="#" title="main-berry"></a></li><li><a data-color="Orange" class="color orange" href="#" title="main-orange"></a></li></ul><div class="template-animations-switch"><h6>Animations</h6><input id="animations_switch" type="checkbox" checked="checked" /><label for="animations_switch"><i></i></label></div></div>'

        $('body').append(template);
    },

    // check if site is laoded from mobile device
    checkMobile: function () {
        mobileDeviceOld = this.mobileDevice

        if ( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || $(window).width() < this.options.mobileMenuMaxWidth ) {
            this.mobileDevice = true;

            this.log('Mobile device');
        }else {
            this.mobileDevice = false;

            this.log('Desktop')
        }
    },

    // init animations on page
    initAnimations: function () {
        var _this = this;

        if ( this.mobileDevice || !this.options.animations ) {
            $('.animated').css('opacity', 1);

            this.log( 'Remove animations' );

            $('.animated .counter-block .count').not('.countdown .counter-block  .count').each(function () {
                $(this).text( $(this).data('to') );
            });

        }else if ( typeof $.fn.appear == 'function' ) {
            this.log( 'Init animations' );

            $('.animated').appear(function() {
                var $el = $(this),
                    animation = $el.data('animation'),
                    animationDelay = $el.data('delay') || 0,
                    animationDuration = $el.data('duration') || 1000;

                if ( _this.options.animations ) {
                    $el.css({
                        '-webkit-animation-delay': animationDelay + 'ms',
                        'animation-delay': animationDelay + 'ms',
                        '-webkit-animation-duration': animationDuration/1000 + 's',
                        'animation-duration': animationDuration/1000 + 's'
                    });

                    $el.addClass(animation);

                    _this.log( 'Play animation ' + animation + ' with delay = ' + animationDelay + 'ms and duration = ' + animationDuration + 'ms');

                    $el.one('webkitAnimationStart mozAnimationStart MSAnimationStart oanimationstart animationstart', function() {
                        if ( !$el.closest('.coundown').length ) {
                            if ( typeof $.fn.countTo == 'function' ) {
                                if ( $el.find('.count').length ) $el.find('.count').countTo();
                            } else {
                                this.log( 'Can\'t find jQuery.countTo function' );
                            }
                        }
                    });

                }else {
                    $el.removeClass('animated');

                    if ( !$el.closest('.coundown').length ) {
                        if ( typeof $.fn.countTo == 'function' ) {
                            if ( $el.find('.count').length ) $el.find('.count').countTo();
                        } else {
                            this.log( 'Can\'t find jQuery.countTo function' );
                        }
                    }
                }
            }, {accY: -150});

        }else {
            $('.animated').css('opacity', 1);

            this.log( 'Can\'t find jQuery.appear function' );
            this.log( 'Remove animations' );
        }

        if ( $('.counter-block').not('.animated').not('.animated .counter-block').not('.countdown .counter-block').length ) {
            $('.counter-block').not('.animated').not('.animated .counter-block').not('.countdown .counter-block').each( function () {
                if ( typeof $.fn.appear == 'function' && typeof $.fn.countTo == 'function' ) {
                    $(this).appear(function () {
                        $(this).find('.count').countTo();
                    });

                }else {
                    $(this).find('.count').text( $(this).find('.count').data('to') );

                }
            });
        }
    },

    calculateMenuSizes: function () {
        var _this = this,
            $dropdownItem = $('.navigation-item.dropdown'),
            $navbarCollapse = $('.navbar-collapse'),
            winHeight = window.innerHeight;

        if ( $dropdownItem.length ) {
            $dropdownItem.each( function () {
                var $this = $(this),
                    $dropdown = $this.find('.dropdown-menu'),
                    headerHeight = $dropdownItem.closest('header').outerHeight();

                if ( !_this.mobileDevice ) {
                    $dropdown.css( 'max-height', winHeight - headerHeight - 50 );

                }else {
                    $dropdown.css( 'max-height', '' );

                }
            });
        }

        if ( $navbarCollapse.length ) {
            $navbarCollapse.each( function () {
                if ( _this.mobileDevice ) {
                    var headerHeight = $(this).closest('header').outerHeight();

                    $(this).css('max-height', winHeight - headerHeight);
                }
            });
        }

    },

    windowHeightBlock: function () {
        var $blocks = $('.window-height'),
            height = window.innerHeight;

        if ( $blocks.length ) {
            $blocks.each(function () {
                $(this).css('min-height', height);
            });
        }

        this.log( 'Init window height blocks');
    },

    centeredBlock: function() {
        var $blocks = $('.centered-block');

        if ( $blocks.length ) {
            $blocks.each( function () {
                var $el = $(this),
                    $parent = $el.parent(),
                    elHeight = $el.outerHeight(),
                    parentHeight = $parent.outerHeight(),
                    padding = (parentHeight - elHeight) / 2;

                if ( padding >= 0 ) {
                    $parent.css({'padding-top': padding, 'padding-bottom': 0 });
                }
            });
        }

        this.log( 'Init centered blocks');
    },

    videoBackgroundInit: function () {
        var _this = this;

        $('.ytp-player-background').each( function() {
            var $el = $(this),
                $player,
                controlsTempalte;

            if ( $el.data('video') && $el.data('video').length ) {
                $el.css('background-image', 'url(https://i.ytimg.com/vi/' + $el.data('video') + '/maxresdefault.jpg)')
            }

            if( !_this.mobileDevice && typeof $.fn.YTPlayer == 'function' ) {
                _this.log( 'Init video background blocks');

                $player = $el.YTPlayer();
            } else {
                $el.addClass('no-video-bg');

                if ( typeof $.fn.YTPlayer != 'function' ) {
                    _this.log( 'Can\'t find jQuery.YTPlayer function. Video background blocks doesn\'t work.' );
                }else {
                    _this.log( 'Can\'t init video background blocks.');
                }
            }
        });
    },

    initPseudoSelect: function () {
        var $select = $('select');

        if ( $select.length ) {
            $select.each(this.makePseudoSelect);
        }
    },

    makePseudoSelect: function (i, el) {
        var $el = $(el),
            $options = $el.find('option'),
            $pseudoSelect = $('<div class="pseudo-select"></div>'),
            $input = $('<input type="text" />'),
            $field = $('<span class="pseudo-select-field"></span>'),
            $dropdown = $('<ul class="pseudo-select-dropdown"></ul>');

        $options.each(function () {
            $li = $('<li class="pseudo-select-dropdown-item"></li>');
            $li.data('value', this.value);
            $li.text(this.text);

            if ( this.disabled ) $li.addClass('disabled');
            if ( this.selected ) {
                $li.addClass('selected');
                $field.text(this.text);
                $input.attr('value', this.value);
            }

            $dropdown.append($li);
        });

        $el.after($pseudoSelect);
        $input.attr({ id: el.id, name: el.name });
        $pseudoSelect.append($input).append($field).append($dropdown);

        $el.remove();

        var closePseudoSelect = function () {
                $dropdown.stop(true, true).slideUp(150);
                setTimeout(function () { $el.removeClass('open'); }, 150);
            },
            openPseudoSelect = function () {
                $el.addClass('open');
                $dropdown.stop(true, true).slideDown(250);
            },
            selectItem = function ($li) {
                var value = $li.data('value'),
                    text = $li.text(),
                    dropdownHeight = $dropdown.outerHeight(),
                    elHeight = $li.outerHeight(),
                    scrollTop = $dropdown.scrollTop(),
                    elemPosition = $li.position().top;

                if ( elemPosition + elHeight > dropdownHeight ) {
                    $dropdown.scrollTop(elHeight + elemPosition - dropdownHeight + scrollTop);
                }else if ( elemPosition < 0 ) {
                    $dropdown.scrollTop(scrollTop + elemPosition);
                }

                $li.addClass('selected').siblings('li').removeClass('selected');
                $input.val(value);
                $field.text(text);
                $input.trigger('change');
            }

        $input.on('focus.pseudoSelect', openPseudoSelect);
        $input.on('blur.pseudoSelect', closePseudoSelect);

        $input.on('keydown', function (event) {
            var $li = $dropdown.find('li').not('.disabled'),
                $liSelected = $dropdown.find('li.selected').not('.disabled'),
                index = $.map($li, function (el, i) { if ( $(el).is('.selected')) { return i; } })[0],
                nextIndex = (index < $li.length - 1) ? index + 1 : 0,
                prevIndex = index - 1,
                $prev = $li.eq(prevIndex),
                $next = $li.eq(nextIndex);

            if ( event.keyCode == 38 ) {
                if ( $liSelected.length ) {
                    selectItem($prev);
                }else {
                    selectItem($li.last());
                }
            }

            if ( event.keyCode == 40 ) {
                if ( $liSelected.length ) {
                    selectItem($next);
                }else {
                    selectItem($li.first());
                }
            }

            if ( event.keyCode == 32 ) {
                if ( $el.is('.open') ) closePseudoSelect();
                else openPseudoSelect();
            }

            if ( event.keyCode != 13 && event.keyCode != 9 ) {
                return false;
            }
        });

        $field.on('click.pseudoSelect', function (event) {
            event.preventDefault();

            if ( !$el.is('.open') ) $input.trigger('focus');
        });

        $('body').on('click.pseudoSelect', function (event) {
            if ( !$(event.target).closest($field).length && $el.is('.open') ) closePseudoSelect();
        });

        $dropdown.on('mousedown.pseudoSelect click.pseudoSelect', 'li', function (event) {
            event.preventDefault();

            selectItem($(this));
            closePseudoSelect();
        });

        return $input;
    },

    // Tabs view
    tabNavToSelect: function() {
        $nav = $('.nav');

        var _this = this;

        $nav.each(function () {
            var $this = $(this),
                $active = $this.find('li.active > a'),
                $field = $('<span class="nav-current">' + $active.html() + '</span>');

            $this.wrapAll('<div class="nav-wrapper"></div>')

            $this.before($field);

            $field.on('click', function () {
                if ( !$this.is('.open') ) $this.stop(true, true).slideDown(250).addClass('open');
                else $this.stop(true, true).slideUp(150).removeClass('open');
            });

            $this.on('click', 'a', function () {
                $field.html($(this).html());
            });

            $('body').on('click', function (event) {
                $target = $(event.target);

                if ( !$target.closest($field).length && $this.is('.open') ) {
                    $this.stop(true, true).slideUp(150).removeClass('open');
                }
            });
        });
    },

    formInit: function () {
        var _this = this;

        this.log( 'Init ajaxed forms.' );

        if ( typeof toastr != 'undefined' ) {
            toastr.options = {
                positionClass: this.options.toastrPositionClass
            };

        }else {
            this.log( 'Can\'t find toastr. Form messages in alerts.' );
        }

        var validateOptions,
            submitHandler,
            doneHandler,
            failHandler;

        submitHandler = function (event) {
            var form = this;

            event.preventDefault();

            $.ajax({
                url: form.action,
                type: 'POST',
                data: $(form).serialize()
            }).done(function(msg) {
                doneHandler(msg, form);

            }).fail(function() {
                failHandler(form);

            });
        }

        validateOptions = {
            rules: {
                password: {
                    required: true,
                    minlength: 5
                },
                confirmPassword: {
                    required: true,
                    minlength: 5,
                    equalTo: '#password'
                }
            },

            messages: {
                password: {
                    required: 'Please provide a password',
                    minlength: 'Your password must be at least 5 characters long'
                },
                confirmPassword: {
                    required: 'Please provide a password',
                    minlength: 'Your password must be at least 5 characters long',
                    equalTo: 'Please enter the same password as above'
                }
            },

            submitHandler: function (form) {
                var $input = $(form).find('input[type="submit"]'),
                    $button = $(form).find('button[type="submit"]');

                if ( $button.length ) {
                    $button.append('<span class="loading fa fa-refresh"></span>');

                }else if ( $input ) {
                    $input.after('<span class="loading fa fa-refresh"></span>');

                }

                $.ajax({
                    url: form.action,
                    type: 'POST',
                    data: $(form).serialize()
                }).done(function(msg) {
                    $(form).find('.loading').remove();

                    doneHandler(msg, form);

                }).fail(function() {
                    $(form).find('.loading').remove();

                    failHandler(form);

                });
            }
        };

        doneHandler = function (msg, form) {
            if( msg === 'ok' ) {
                form.reset();

                if ( typeof toastr != 'undefined' ) toastr.success('Success');
                else alert('Success');

            } else {
                if ( typeof toastr != 'undefined' ) toastr.error('An error occured. Please try again later.');
                else alert('An error occured. Please try again later.');

                _this.log( 'Form message', msg );
            }
        };

        failHandler = function () {
            if ( typeof toastr != 'undefined' ) toastr.error('An error occured. Please try again later.');
            else alert('An error occured. Please try again later.');
        }

        if ( $('form').not('.mailchimp-form').not('.disable-ajax-form').length ) {
            $('form').not('.mailchimp-form').not('.disable-ajax-form').each(function() {
                if ( typeof $.fn.validate == 'function' ) {
                    $(this).validate(validateOptions);
                }else {
                    $(this).on('submit', submitHandler);

                    _this.log( 'Can\'t find jQuery.validate function.' );
                }
            });
        }

        if ( $('.mailchimp-form').length ) {
            $('.mailchimp-form').each(function() {
                $(this).on('submit', function(event) {
                    event.preventDefault();

                    var $form = $(this),
                        $input = $form.find('input[type="submit"]'),
                        $button = $form.find('button[type="submit"]'),
                        $fullnameField = '',
                        $emailField = $form.find('[name=NewsletterEmail]'),
                        $responseBlock = $form.find('.response'),
                        email = $emailField.val(),
                        first_name = '',
                        last_name = '';

                    if ($(this).find('[name=NewsletterName]') .length > 0){
                        $fullnameField = $form.find('[name=NewsletterName]');
                        fullname = $fullnameField.val().split(' '), // Gwt Full name and split it by space
                        first_name = fullname[0], // First part is the first name
                        last_name = fullname[1]; // Second part is Last name
                        if ( !last_name ) last_name = ''; //By chance they can input only their first name, then we should null the last name since there is none
                    } else {
                        first_name = '',
                        last_name = '';
                    }

                    if ( $button.length ) {
                        $button.append('<span class="loading fa fa-refresh"></span>');

                    }else if ( $input ) {
                        $input.after('<span class="loading fa fa-refresh"></span>');

                    }

                    $.ajax({
                        url: 'process-form-mailchimp.php',
                        data: 'ajax=true&email=' + escape(email) + '&fname=' + first_name +'&lname=' + last_name,

                        success: function(msg) {
                            $form.find('.loading').remove();

                            if ( msg.indexOf('Success') !=-1 ) {
                                $responseBlock.html('<span class="success-message">Success! You are now subscribed to our newsletter!</span>');
                            } else {
                                $responseBlock.html('<span class="error-message">' + msg + '</span>');
                            }
                        }
                    });
                });
            });
        }
    },

    // Google map
    initGoogleMap: function() {
        var _this = this;

        if ( $('.map').length ) {
            $('.map').each(function () {
                var mapEl = this;

                var map, marker, geocoder, service;

                var icon = '/assets/img/marker-46x46.png',
                    address,
                    markerLatLng,
                    offsetX,
                    offsetY,
                    relativeOffset,
                    balloons,
                    mapOptions = {
                        zoom: 14,
                        scrollwheel: false,
                        mapTypeControl: false
                    };

                function createMap () {
                    mapOptions.center = markerLatLng

                    map = new google.maps.Map(mapEl, mapOptions);

                    marker = new google.maps.Marker({
                        map: map,
                        icon: icon,
                        position: markerLatLng
                    });

                    map.addListener('projection_changed', function() {
                        centerMap(map, offsetX, offsetY, relativeOffset);
                    });

                    createBalloons();
                }

                function createBalloons () {
                    service = new google.maps.places.PlacesService(map);

                    if ( balloons ) {
                        for (var i = 0; i < balloons.length; i++) {
                            var balloon = balloons[i];

                            if ( typeof balloon == 'string' ) {
                                service.textSearch({
                                    location: markerLatLng,
                                    radius: 5000,
                                    query: balloon
                                }, function(results, status) {
                                    if (status == google.maps.places.PlacesServiceStatus.OK) {
                                        for (var i = 0, place; place = results[i]; i++) {
                                            service.getDetails({placeId: place.place_id}, createMarkers);
                                        };
                                    }
                                });
                            }
                        };
                    }
                }

                function createMarkers(place, status) {
                    if (status == google.maps.places.PlacesServiceStatus.OK) {
                        var innerContent;

                        innerContent = '<div class="balloon"><strong class="name">' + place.name + '</strong>';

                        if ( place.rating ) {
                            innerContent += '<ul class="list-inline rating">';

                            for (var i = 0; i < Math.floor(place.rating); i++) {
                                innerContent += '<li><span class="fa fa-star"></span></li>'
                            };

                            innerContent += '</ul>';
                        }

                        if ( place.adr_address ) {
                            innerContent += '<p class="address">' + place.adr_address + '</p>';
                        }

                        if ( place.international_phone_number ) {
                            innerContent += '<p class="phone">' + place.international_phone_number + '</p>';
                        }

                        innerContent += '</div>';

                        var infowindow = new google.maps.InfoWindow({
                            position: place.geometry.location,
                            maxWidth: 200,
                            content: innerContent,
                            disableAutoPan: true
                        });

                        infowindow.open(map);
                    }
                }

                function centerMap(map, offsetX, offsetY, relative) {
                    var offsetX = (typeof offsetX == 'number' ? offsetX : 0),
                        offsetY = (typeof offsetY == 'number' ? offsetY : 0),
                        zoom = map.getZoom(),
                        scale = Math.pow( 2, zoom ),
                        northEast = map.getBounds().getNorthEast(),
                        southWest = map.getBounds().getSouthWest(),
                        width = Math.abs( northEast.lng() - southWest.lng() ),
                        height = Math.abs( northEast.lat() - southWest.lat() ),
                        point1 = map.getProjection().fromLatLngToPoint( map.getCenter() ),
                        point2 = new google.maps.Point(
                            offsetX / scale,
                            offsetY / scale
                        ),
                        centerPoint = new google.maps.Point(
                            point1.x - point2.x,
                            point1.y - point2.y
                        ),
                        center = map.getProjection().fromPointToLatLng( centerPoint );

                    if ( relative ) {
                        center = new google.maps.LatLng(
                            map.getCenter().lat() + height * offsetY / 100,
                            map.getCenter().lng() - width * offsetX / 100
                        );
                    }

                    map.setCenter( center );
                }

                function successCallback (data) {
                    if ( typeof data == 'object' ) {
                        if ( data.mapZoom ) mapOptions.zoom = data.mapZoom;

                        if ( data.relativeOffset ) relativeOffset = true;

                        if ( data.offsetX ) offsetX = data.offsetX;
                        else offsetX = 0;

                        if ( data.offsetY ) offsetY = data.offsetY;
                        else offsetY = 0;

                        if ( data.markerImagePath && typeof data.markerImagePath == 'string' ) icon = data.markerImagePath;

                        if ( data.markerAddress && typeof data.markerAddress == 'string' ) address = data.markerAddress;
                        else if ( data.markerLatLng && typeof data.markerLatLng == 'object' ) markerLatLng = new google.maps.LatLng(data.markerLatLng[0], data.markerLatLng[1]);

                        if ( data.balloons && typeof data.balloons == 'object' && data.balloons.length ) balloons = data.balloons;
                    }

                    geocoder = new google.maps.Geocoder();

                    if ( typeof markerLatLng == 'object' ) {
                        createMap();

                    }else if ( typeof address == 'string' ) {
                        geocoder.geocode({ 'address': address }, function(results, status) {
                            markerLatLng = results[0].geometry.location;

                            createMap();
                        });
                    }
                }

                function failCallback () {
                    _this.log("Can't parse map settings!");

                    new google.maps.Map(mapEl, {
                        center: new google.maps.LatLng(0, 0),
                        zoom: 2
                    });
                }

                if ( $(this).data('settings') ) {
                    $.getJSON($(this).data('settings'), successCallback).fail(failCallback);

                }else {
                    failCallback();
                }
            });
        }
    },

    // count down timer
    countdownInit: function () {
        if ( $('.countdown').length ) {
            if ( typeof $.fn.countdown == 'function' ) {
                var futureDate = new Date();
                $countdown = $('.countdown');

                // count down 10 days from today
                futureDate.setDate( futureDate.getDate() + 10 );
                // or set specific date in the future
                // futureDate = new Date(2014, 7, 26);

                $countdown.countdown({
                    until: futureDate,
                    compact: true,
                    padZeroes: true,
                    layout: $('.countdown').html()
                });
            }else {
                this.log( 'Can\'t find jQuery.coundown function' );
            }
        }
    },

    masonryInit: function () {
        var _this = this;

        if ( $('.masonry').length && typeof $.fn.masonry == 'function' ) {
            $('.masonry').each(function () {
                var $container = $(this);

                $container.masonry({
                    itemSelector: '.masonry-item',
                    isAnimated: true,

                    columnWidth: function( containerWidth ) {
                        if ( containerWidth > 720 ) {
                            $container.removeClass('width400').removeClass('width720');
                            return containerWidth / 4;
                        }else if ( containerWidth > 400 ) {
                            $container.addClass('width720').removeClass('width400');
                            if ( $container.is('.speakers') ) return containerWidth / 2;
                            else return containerWidth / 3;
                        }else {
                            $container.addClass('width400').removeClass('width720');
                            if ( $container.is('.speakers') ) return containerWidth;
                            else return containerWidth / 2;
                        }
                    }
                });
            });
        }
    },

    gallerySliderInit: function () {
        var _this = this;

        if ( $('.gallery.light-slider').length && typeof $.fn.bxSlider == 'function' ) {
            $('.gallery.light-slider').each(function () {
                var $container = $(this),
                    $imgSLider = $container.find('.img-slider'),
                    $descrSlider = $container.find('.description-slider');

                $imgSLider.find('li > img').each(function () {
                    var $this = $(this),
                        $li = $this.parent(),
                        imgSrc = $this.attr('src');

                    $li.css('background-image', 'url("' + imgSrc + '")').data('imgSrc', imgSrc);
                    $this.remove();
                });

                if ( $imgSLider.length && $descrSlider.length ) {
                    function countImgMinHeight ($slide) {
                        var img = new Image();

                        img.src = $slide.data('imgSrc');

                        img.onload = function () {
                            height = this.height * $slide.outerWidth() / this.width
                            $imgSLider.css('min-height', height);

                            return height;
                        }

                        return img.onload;
                    }

                    $imgSLider.bxSlider({
                        pager: false,
                        controls: false,
                        mode: 'fade',
                        adaptiveHeight: true,

                        onSliderLoad: function (currentIndex) {
                            $slide = $imgSLider.find('> li').eq(currentIndex);

                            height = countImgMinHeight($slide);
                            console.log(height);
                        },

                        onSlideBefore: function ($slide) {
                            countImgMinHeight($slide);
                        }
                    });

                    $descrSlider.bxSlider({
                        controls: false,
                        adaptiveHeight: true,

                        onSlideBefore: function ($slideElement, oldIndex, newIndex) {
                            $imgSLider.goToSlide(newIndex);
                        }
                    });
                }
            });
        }
    },

    //sticky menu initialization
    stickMenu: function () {
        var $header = $('header');

        $header.css('min-height', $header.height());
        $header.addClass('fixed');
        $('.fade-in-on-stick').fadeIn();
    },

    unstickMenu: function () {
        var $header = $('header');

        $header.removeClass('fixed');
        $header.css('min-height', '');
        $('.fade-in-on-stick').fadeOut();
    },

    //one page menu navigation
    onePageNavInit: function () {
        var _this = this;

        if ( typeof $.fn.waypoint != 'undefined' ) {
            var $menuLinks = $('.navigation-list a').not('[href="#"]').filter(function () {
                    return /#\w+/.test(this.href);
                }),
                enterHandler = function( that, direction ) {
                    var id = that.id,
                        $item = $('.navigation-list a').filter(function () {
                            return this.href.indexOf('#' + that.id) > -1;
                        });

                    $('.navigation-list .active').removeClass('active');
                    $item.addClass('active');

                    // push anchor to browser URL
                    if ( _this.options.onePageNavHashChange ){
                        if ( history.pushState ) {
                            history.pushState(null, null, '#' + id);
                        }else {
                            _this.log('Browser don\'t support history API');
                        }
                    }
                },
                leaveHandler = function ( that, direction ) {
                    var $item = $('.navigation-list a').filter(function () {
                            return this.href.indexOf('#' + that.id) > -1;
                        });

                    $item.removeClass('active');
                };

            $menuLinks.each(function (index) {
                var href = this.href,
                    anchorId = href.substring(href.indexOf('#'), href.length),
                    $block = $(anchorId);

                if ( $block.length ) {
                    $block.waypoint(function (direction) {
                        if ( direction == 'down' ) {
                            enterHandler( this.element, direction );
                        }

                    }, { offset: 0 });

                    $block.waypoint(function (direction) {
                        if ( direction == 'down' ) {
                            leaveHandler( this.element, direction );

                        }else {
                            enterHandler( this.element, direction );
                        }

                    }, { offset: -$block.outerHeight() });

                    $block.waypoint(function (direction) {
                        if ( direction == 'up' ) {
                            leaveHandler( this.element, direction );
                        }

                    }, { offset: '100%' });
                }
            });

            $('body').waypoint(function () {
                var id = 'hero',
                    $item = $('.navigation-list a[href="#' + id + '"]');

                $('.navigation-list .active').removeClass('active');

                if ( $item.length ) {
                    $item.addClass('active');

                    if ( _this.options.onePageNavHashChange ){
                        if ( history.pushState ) {
                            history.pushState(null, null, '#' + id);
                        }else {
                            _this.log('Browser don\'t support history API');
                        }
                    }
                }
            }, { offset: -100 });

            $('body').on( 'click', 'a[href*="#"]', function (event) {
                var href = $(this).attr('href'),
                    anchorId = href.substring(href.indexOf('#'), href.length);

                if ( $(this).attr('data-toggle') && $(this).attr('data-toggle').length ) {
                    return;

                }

                if ( $(anchorId).length ) {
                    _this.anchorClickHandler(anchorId);

                    return false;
                }
            });

        }else {
            this.log( 'Can\'t find jQuery.waypoint function' );

        }
    },

    //custom smooth scrolling for all onpage anchors
    anchorClickHandler: function(anchorId) {
        var _this = this,
            offsetTop = $(anchorId).offset().top - $('.header').height(),
            $nav = $('.navigation-list'),
            $elems = $nav.find('a[href="' + anchorId + '"]');

        $('body, html').animate({
            scrollTop: offsetTop

        }, 450, function () {
            if ( _this.options.onePageNavHashChange ) {
                if ( history.pushState ) {
                    history.pushState(null, null, anchorId);

                }else {
                    window.location.hash = anchorId;

                }
            }

            $nav.find('.active').removeClass('active');
            $elems.addClass('active');
        });
    },

    checkHeaderStatus: function () {
        if ( $('header').length ) {
            var $header = $('header'),
                scrollTop = $(window).scrollTop(),
                headerTop = $header.offset().top;

            if ( scrollTop >= headerTop ) {
                this.stickMenu();

            }else {
                this.unstickMenu();
            }
        }
    },

    //onload handler
    windowLoadHeandler: function (event) {
        this.log('Window load handler');

        if ( window.location.hash.length ) {
            this.anchorClickHandler(window.location.hash);
        }

        if ( this.options.onePageNav ) {
            this.onePageNavInit();
        }

        this.checkHeaderStatus();

        this.masonryInit();

        this.hidePreloader();
    },

    //on resize handler
    windowResizeHandler: function (event) {
        this.checkMobile();

        this.windowHeightBlock();

        this.centeredBlock();

        this.calculateMenuSizes();
    },

    //on scroll handler
    windowScrollHandler: function (event) {
        this.checkHeaderStatus();
    },

    styleSwitcherHandler: function (event, $el) {
        event.preventDefault();

        var switcher = $('.style-switcher');

        if (switcher.hasClass('style-active')){
            switcher.animate({ marginLeft: '0' }, 200, 'linear');

        } else {
            switcher.animate({ marginLeft: '225' }, 200, 'linear');
        }

        switcher.toggleClass('style-active');
    },

    styleSwitcherColorHandler: function (event, $el) {
        var $this = $el,
            colorName = $this.attr('data-color');

        event.preventDefault();

        $('.style-switcher-css').remove();
        $('head').append('<link class="style-switcher-css" rel="stylesheet" type="text/css" href="assets/css/colors/' + colorName + '.css">');
    },

    styleSwitcherToggleAnimation: function (event, $el) {
        if ( $el.get(0).checked ) {
            $('.animated').css('opacity', '');
            this.options.animations = true;

        }else {
            $('.animated').css('opacity', 1);
            this.options.animations = false;
        }
    },

    //small back-to-top link function
    backToTopHandler: function () {
        $('html, body').animate({
            scrollTop: 0,
            easing: 'swing'
        }, 750);
    },

    setEventHandlers: function () {
        var _this = this;

        $(window).on('load', function (event) {
            _this.windowLoadHeandler(event);
        });

        $(window).on('resize', function (event) {
            _this.windowResizeHandler(event);
        });

        $(window).on('scroll', function (event) {
            _this.windowScrollHandler(event);
        });

        $('.back-to-top').on('click', function (event) {
            event.preventDefault();

            _this.backToTopHandler();
        });

        $('.navbar-collapse').on( 'mousewheel DOMMouseScroll', function (event) {
            if ( _this.mobileDevice ) {
                var e0 = event.originalEvent,
                    delta = e0.wheelDelta || -e0.detail;

                this.scrollTop -= delta;
                event.preventDefault();
            }
        });

        $('.style-toggle').on('click', function(event){
            _this.styleSwitcherHandler(event, $(this));
        });

        $('.style-switcher .color').on('click', function(event) {
            _this.styleSwitcherColorHandler(event, $(this));
        });

        $('#animations_switch').on('change', function(event){
            _this.styleSwitcherToggleAnimation(event, $(this));
        });

        this.log('Set event hendlers');
    },

    hidePreloader: function (callback) {
        var _this = this;

        $('.preloader-mask').delay(500).fadeOut(600);

        setTimeout(function() {
            _this.initAnimations();

        }, 700);

        if ( callback ) {
            callback();
        }
    },

    init: function (options) {
        this.options = $.extend(this.defaults, options, $('body').data());

        this.log('Init');

        this.checkMobile();

        this.tabNavToSelect();

        this.countdownInit();

        if ( this.options.styleSwitcher ) this.buildStyleSwitcher();

        if ( this.options.smoothScroll ) this.smoothScrollInit();

        if ( this.options.ajaxedForm ) this.formInit();

        if ( this.options.pseudoSelect ) this.initPseudoSelect();

        if ( typeof google != 'undefined') this.initGoogleMap();

        this.windowHeightBlock();

        this.centeredBlock();

        this.calculateMenuSizes();

        this.videoBackgroundInit();

        this.gallerySliderInit();

        this.setEventHandlers();
    }
}

$('.navigation-item').on( 'click', function (event) {
    if($('#navigation').hasClass('in')){
        $('#navigation').removeClass('in');
    }
});
