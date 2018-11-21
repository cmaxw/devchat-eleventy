 
;(function ( $, window, document, undefined ){
 
    $.navigation = function(element, options){
 
        var defaults = {
            responsive: true,
            mobileBreakpoint: 767,
            showDuration: 300,
            hideDuration: 300,
            showDelayDuration: 0,
            hideDelayDuration: 0,
            submenuTrigger: "hover",
            effect: "fade",
            submenuIndicator: true,
			submenuIndicatorTrigger: false,
            hideSubWhenGoOut: true,
            visibleSubmenusOnMobile: false,
            overlay: true,
            overlayColor: "rgba(0, 0, 0, 0.7)",
            hidden: false,
			hiddenOnMobile: false,
            offCanvasSide: "left",
			offCanvasCloseButton: true,
			animationOnShow: "",
			animationOnHide: "",
			hideScrollBar: true,
            onInit: function() {},
			onLandscape: function() {},
			onPortrait: function() {},
            onShowOffCanvas: function() {},
            onHideOffCanvas: function() {}
        };
 
        var plugin = this,
            bigScreenFlag = Number.MAX_VALUE,
            smallScreenFlag = 1,
            clickTouchEvents = "click.nav touchstart.nav",
            hoverShowEvents = "mouseenter focusin",
            hoverHideEvents = "mouseleave focusout";
        plugin.settings = {};
        var $element = $(element), element = element;
        
        if($(element).find(".nav-search").length > 0){
            $(element).find(".nav-search").find("form").prepend("<span class='nav-search-close-button' tabindex='0'>&#10005;</span>");
        }
 
        plugin.init = function(){
            plugin.settings = $.extend({}, defaults, options);
			
			if(plugin.settings.offCanvasCloseButton){
				$(element).find(".nav-menus-wrapper").prepend("<span class='nav-menus-wrapper-close-button'>&#10005;</span>");
			}
            
            if(plugin.settings.offCanvasSide == "right"){
                $(element).find(".nav-menus-wrapper").addClass("nav-menus-wrapper-right");
            }
            
            if(plugin.settings.hidden){
                $(element).addClass("navigation-hidden");
                plugin.settings.mobileBreakpoint = 99999;
            }
            
            checkSubmenus();
            
            $(element).find(".nav-toggle").on("click touchstart", function(e){
                e.stopPropagation(); 
                e.preventDefault();
                plugin.showOffcanvas();
                if(options !== undefined){
                    plugin.callback("onShowOffCanvas");
                }
            });
            
            $(element).find(".nav-menus-wrapper-close-button").on("click touchstart", function(){
                plugin.hideOffcanvas();
                if(options !== undefined){
                    plugin.callback("onHideOffCanvas");
                }
            });         
 
            $(element).find(".nav-search-button, .nav-search-close-button").on("click touchstart keydown", function(e){
                e.stopPropagation(); 
                e.preventDefault();
				var code = e.keyCode || e.which;
				if(e.type === "click" || e.type === "touchstart" || (e.type === "keydown" && code == 13)){
					plugin.toggleSearch();
				}
				else{
					if(code == 9){
						$(e.target).blur();
					}
				}
            });
            
            $(window).resize(function(){
                plugin.initNavigationMode(windowWidth());
                fixSubmenuRightPosition();
				if(plugin.settings.hiddenOnMobile){
					hideNavbarPortrait();
				}
            });
            
            plugin.initNavigationMode(windowWidth());
			
			if(plugin.settings.hiddenOnMobile){
				hideNavbarPortrait();
			}
			
			if(plugin.settings.overlay){
                $(element).append("<div class='nav-overlay-panel'></div>");
			}
			
			if($(element).find(".megamenu-tabs").length > 0){
                activateTabs();
            }
            
            if(options !== undefined){
                plugin.callback("onInit");
            }
        };
		
		// reset submenus
		var resetSubmenus = function(){
			$(element).find(".nav-submenu").hide(0);
			$(element).find("li").removeClass("focus");
		};
        
        // check the existence of submenus/add indicators to them
        var checkSubmenus = function(){
            $(element).find("li").each(function(){
                if($(this).children(".nav-dropdown,.megamenu-panel").length > 0){
                    $(this).children(".nav-dropdown,.megamenu-panel").addClass("nav-submenu");
                    if(plugin.settings.submenuIndicator){
                        $(this).children("a").append(
                            "<span class='submenu-indicator'>" + 
                                "<span class='submenu-indicator-chevron'></span>" +
                            "</span>"
                        );
                    }
                }
            });
        };
		
		//hide navbar on portrait mode
		var hideNavbarPortrait = function(){
			if($(element).hasClass("navigation-portrait")){
				$(element).addClass("navigation-hidden");
			}
			else{
				$(element).removeClass("navigation-hidden");
			}
		};
        
        // show a submenu
        plugin.showSubmenu = function(parentItem, submenuEffect){
            if(windowWidth() > plugin.settings.mobileBreakpoint){
                $(element).find(".nav-search").find("form").fadeOut();
            }
            if(submenuEffect == "fade"){
                $(parentItem).children(".nav-submenu")
                    .stop(true, true)
                    .delay(plugin.settings.showDelayDuration)
                    .fadeIn(plugin.settings.showDuration)
					.removeClass(plugin.settings.animationOnHide)
					.addClass(plugin.settings.animationOnShow);
            }
            else{
                $(parentItem).children(".nav-submenu")
                    .stop(true, true)
                    .delay(plugin.settings.showDelayDuration)
                    .slideDown(plugin.settings.showDuration)
					.removeClass(plugin.settings.animationOnHide)
					.addClass(plugin.settings.animationOnShow);
            }
			$(parentItem).addClass("focus");
        };
        
        // hide a submenu
        plugin.hideSubmenu = function(parentItem, submenuEffect){
            if(submenuEffect == "fade"){
                $(parentItem).find(".nav-submenu")
                    .stop(true, true)
                    .delay(plugin.settings.hideDelayDuration)
                    .fadeOut(plugin.settings.hideDuration)
					.removeClass(plugin.settings.animationOnShow)
					.addClass(plugin.settings.animationOnHide);
            }
            else{
                $(parentItem).find(".nav-submenu")
                    .stop(true, true)
                    .delay(plugin.settings.hideDelayDuration)
                    .slideUp(plugin.settings.hideDuration)
					.removeClass(plugin.settings.animationOnShow)
					.addClass(plugin.settings.animationOnHide);
            }
			$(parentItem).removeClass("focus").find(".focus").removeClass("focus");
        };
        
        // show the overlay panel
        var showOverlay = function(){
			if(plugin.settings.hideScrollBar){
				$("body").addClass("no-scroll");
			}
            if(plugin.settings.overlay){
                $(element).find(".nav-overlay-panel")
                    .css("background-color", plugin.settings.overlayColor)
                    .fadeIn(300)
                    .on("click touchstart", function(){
                        plugin.hideOffcanvas();
                    });
            }
        };
        
        // hide the overlay panel
        var hideOverlay = function(){
			if(plugin.settings.hideScrollBar){
				$("body").removeClass("no-scroll");
			}
            if(plugin.settings.overlay){
                $(element).find(".nav-overlay-panel").fadeOut(400);
            }
        };
 
        // show offcanvas
        plugin.showOffcanvas = function(){
            showOverlay();
            if(plugin.settings.offCanvasSide == "left"){
                $(element).find(".nav-menus-wrapper").css("transition-property", "left").addClass("nav-menus-wrapper-open");
            }
            else{
                $(element).find(".nav-menus-wrapper").css("transition-property", "right").addClass("nav-menus-wrapper-open");
            }
        };
        
        // hide offcanvas 
        plugin.hideOffcanvas = function(){          
            $(element).find(".nav-menus-wrapper").removeClass("nav-menus-wrapper-open")
                .on("webkitTransitionEnd moztransitionend transitionend oTransitionEnd", function(){
                    $(element).find(".nav-menus-wrapper")
                        .css("transition-property", "none")
                        .off();
            });
            hideOverlay();
        };
        
        // toggle offcanvas
        plugin.toggleOffcanvas = function(){
            if(windowWidth() <= plugin.settings.mobileBreakpoint){
                if($(element).find(".nav-menus-wrapper").hasClass("nav-menus-wrapper-open")){
                    plugin.hideOffcanvas();
                    if(options !== undefined){
                        plugin.callback("onHideOffCanvas");
                    }
                }
                else{
                    plugin.showOffcanvas();
                    if(options !== undefined){
                        plugin.callback("onShowOffCanvas");
                    }
                }
            }
        };
        
        // show/hide the search form
        plugin.toggleSearch = function(){
            if($(element).find(".nav-search").find("form").css("display") == "none"){
                $(element).find(".nav-search").find("form").fadeIn(200);
				$(element).find(".nav-search").find("input").focus();
            }
            else{
                $(element).find(".nav-search").find("form").fadeOut(200);
				$(element).find(".nav-search").find("input").blur();
            }
        };
        
        // set the navigation mode and others configs
        plugin.initNavigationMode = function(screenWidth){
            if(plugin.settings.responsive){
                if(screenWidth <= plugin.settings.mobileBreakpoint && bigScreenFlag > plugin.settings.mobileBreakpoint){
                    $(element).addClass("navigation-portrait").removeClass("navigation-landscape");
                    portraitMode();
					if(options !== undefined){
						plugin.callback("onPortrait");
					}
                }
                if(screenWidth > plugin.settings.mobileBreakpoint && smallScreenFlag <= plugin.settings.mobileBreakpoint){
                    $(element).addClass("navigation-landscape").removeClass("navigation-portrait");
                    landscapeMode();
                    hideOverlay();
                    plugin.hideOffcanvas();
					if(options !== undefined){
						plugin.callback("onLandscape");
					}
                }
                bigScreenFlag = screenWidth;
                smallScreenFlag = screenWidth;
            }
            else{
				$(element).addClass("navigation-landscape");
                landscapeMode();
				if(options !== undefined){
					plugin.callback("onLandscape");
				}
            }
        };
        
         // hide submenus/form when click/touch outside
        var goOut = function(){
            $("html").on("click.body touchstart.body", function(e){
                if($(e.target).closest(".navigation").length === 0){
					$(element).find(".nav-submenu").fadeOut();
					$(element).find(".focus").removeClass("focus");
                    $(element).find(".nav-search").find("form").fadeOut();
                }
            });
        };
        
        // return the window's width
        var windowWidth = function(){
            return window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
        };
        
        // unbind events
        var unbindEvents = function(mode){
			if(mode == "landscape")
				$(element).find(".nav-menu").find("li, a").off(clickTouchEvents)
			else
                $(element).find(".nav-menu").find("li, a").off(hoverShowEvents).off(hoverHideEvents);
        };
        
        // fix submenu right position
        var fixSubmenuRightPosition = function(){
            if(windowWidth() > plugin.settings.mobileBreakpoint){
                var navWidth = $(element).outerWidth();
                $(element).find(".nav-menu").children("li").children(".nav-submenu").each(function(){
                    if($(this).parent().position().left + $(this).outerWidth() > navWidth){
                        $(this).css("right", 0);
                    }
                    else{
                        $(this).css("right", "auto");
                    }
                });
            }
        };
        
        // activate the tabs
        var activateTabs = function(){          
            function initTabs(tabs){
                var navs = $(tabs).children(".megamenu-tabs-nav").children("li");
                var panes = $(tabs).children(".megamenu-tabs-pane");
                $(navs).on("mouseenter.tabs click.tabs touchstart.tabs", function(e){
                    e.stopPropagation(); 
                    e.preventDefault();
                    $(navs).removeClass("active");
                    $(this).addClass("active");
                    $(panes).hide(0).removeClass("active");
                    $(panes[$(this).index()]).show(0).addClass("active");
                });
            }
            
            if($(element).find(".megamenu-tabs").length > 0){
                var navigationTabs = $(element).find(".megamenu-tabs");
                for(var i = 0; i < navigationTabs.length; i++){
                    initTabs(navigationTabs[i]);
                }
            }
        };
        
        // set the landscape mode
        var landscapeMode = function(){
            unbindEvents("landscape");
            resetSubmenus();
            if(navigator.userAgent.match(/Mobi/i) || navigator.maxTouchPoints > 0 || plugin.settings.submenuTrigger == "click"){
                $(element).find(".nav-menu, .nav-dropdown").children("li").children("a").on(clickTouchEvents, function(e){
                    plugin.hideSubmenu($(this).parent("li").siblings("li"), plugin.settings.effect);
                    $(this).closest(".nav-menu").siblings(".nav-menu").find(".nav-submenu").fadeOut(plugin.settings.hideDuration);
                    if($(this).siblings(".nav-submenu").length > 0){
                        e.stopPropagation(); 
                        e.preventDefault();
                        if($(this).siblings(".nav-submenu").css("display") == "none"){
                            plugin.showSubmenu($(this).parent("li"), plugin.settings.effect);
                            fixSubmenuRightPosition();
							return false; 
                        }
                        else{
                            plugin.hideSubmenu($(this).parent("li"), plugin.settings.effect);
                        }
                        if($(this).attr("target") === "_blank" || $(this).attr("target") === "blank"){
                            window.open($(this).attr("href"));
                        }
                        else{
							if($(this).attr("href") === "#" || $(this).attr("href") === "" || $(this).attr("href") === "javascript:void(0)"){
								return false;
							}
							else{
								window.location.href = $(this).attr("href");
							}
                        }
                    }
                });
            }
            else{
                $(element).find(".nav-menu").find("li").on(hoverShowEvents, function(){
                    plugin.showSubmenu(this,  plugin.settings.effect);
                    fixSubmenuRightPosition();
                }).on(hoverHideEvents, function(){
                    plugin.hideSubmenu(this, plugin.settings.effect);
                });
            }
			if(plugin.settings.hideSubWhenGoOut){
				goOut();
			}
        };
        
        // set the portrait mode
        var portraitMode = function(){
            unbindEvents("portrait");
            resetSubmenus();
            if(plugin.settings.visibleSubmenusOnMobile){
                $(element).find(".nav-submenu").show(0);
            }
            else{
                $(element).find(".submenu-indicator").removeClass("submenu-indicator-up");
                if(plugin.settings.submenuIndicator && plugin.settings.submenuIndicatorTrigger){
                    $(element).find(".submenu-indicator").on(clickTouchEvents, function(e){
                        e.stopPropagation(); 
                        e.preventDefault();
                        plugin.hideSubmenu($(this).parent("a").parent("li").siblings("li"), "slide");
						plugin.hideSubmenu($(this).closest(".nav-menu").siblings(".nav-menu").children("li"), "slide");
                        if($(this).parent("a").siblings(".nav-submenu").css("display") == "none"){
                            $(this).addClass("submenu-indicator-up");
                            $(this).parent("a").parent("li").siblings("li").find(".submenu-indicator").removeClass("submenu-indicator-up");
							$(this).closest(".nav-menu").siblings(".nav-menu").find(".submenu-indicator").removeClass("submenu-indicator-up");
                            plugin.showSubmenu($(this).parent("a").parent("li"), "slide");
                            return false; 
                        }
                        else{
                            $(this).parent("a").parent("li").find(".submenu-indicator").removeClass("submenu-indicator-up");
                            plugin.hideSubmenu($(this).parent("a").parent("li"), "slide");
                        }
                    });
                }
                else{
					$(element).find(".nav-menu, .nav-dropdown").children("li").children("a").each(function(){
						if($(this).siblings(".nav-submenu").length > 0){
							$(this).on(clickTouchEvents, function(e){
								e.stopPropagation(); 
								e.preventDefault();
								plugin.hideSubmenu($(this).parent("li").siblings("li"), plugin.settings.effect);
								plugin.hideSubmenu($(this).closest(".nav-menu").siblings(".nav-menu").children("li"), "slide");
								if($(this).siblings(".nav-submenu").css("display") == "none"){
									$(this).children(".submenu-indicator").addClass("submenu-indicator-up");
									$(this).parent("li").siblings("li").find(".submenu-indicator").removeClass("submenu-indicator-up");
									$(this).closest(".nav-menu").siblings(".nav-menu").find(".submenu-indicator").removeClass("submenu-indicator-up");
									plugin.showSubmenu($(this).parent("li"), "slide");
									return false; 
								}
								else{
									$(this).parent("li").find(".submenu-indicator").removeClass("submenu-indicator-up");
									plugin.hideSubmenu($(this).parent("li"), "slide");
								}
								if($(this).attr("target") === "_blank" || $(this).attr("target") === "blank"){
									window.open($(this).attr("href"));
								}
								else{
									if($(this).attr("href") === "#" || $(this).attr("href") === "" || $(this).attr("href") === "javascript:void(0)"){
										return false;
									}
									else{
										window.location.href = $(this).attr("href");
									}
								}
							});
						}
					});
                }
            }
        };
        
        plugin.callback = function(func) {
            if (options[func] !== undefined) {
                options[func].call(element);
            }
        };
 
        plugin.init();
 
    };
 
    $.fn.navigation = function(options){
        return this.each(function(){
            if (undefined === $(this).data("navigation")){
                var plugin = new $.navigation(this, options);
                $(this).data("navigation", plugin);
            }
        });
    };
 
})( jQuery, window, document );
