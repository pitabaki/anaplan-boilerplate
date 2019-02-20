jQuery(document).ready(function($){

    if ( ($("*[data-form-id]") !== undefined || typeof $("*[data-form-id]") !== "undefined") && $("*[data-form-id]").length > 0 ) {
        var click = 0;

        $(document).on("mouseenter", ".uael-trigger.elementor-button-link", function(e){
            var modalID = "#modal-" + $(this).attr("data-modal");

            var formID = $(modalID).find(".form-data").eq(0).attr("data-form-id"),
                formReferrer = $(modalID).find(".form-data").eq(0).attr("data-referral"),
                formDestination = $(modalID).find(".form-data").eq(0).attr("data-destination");

            var formElement = document.createElement("form");
            formElement.id = "mktoForm_" + formID;

            if ( $(modalID).find("form").length === 0 ) {
                $(modalID).find(".uael-text-editor").eq(0).append(formElement);
            }

            MktoForms2.loadForm("//app-abc.marketo.com", "637-RMT-015", formID);

            MktoForms2.whenReady(function (form){
                form.addHiddenFields({
                    LastFormURL:formReferrer,  
                    _mktoReferrer:formReferrer 
                });
                form.onSubmit(function() {
                    console.log(form.getValues());
                    history.pushState(formReferrer, "temporary page" + click , formReferrer);
                    click++;
                });
                form.onSuccess(function(values, followUpUrl){
                    console.log(formDestination);
                    console.log(values);
                    window.location.href = formDestination;
                    return false;
                });
            });

        });

        $(document).on("click", ".uael-modal-close.elementor-clickable", function(e){
            var parentWrapper = $(this).parent(".uael-modal-parent-wrapper");
            parentWrapper.find("form").remove();
        });

    }

    /*if ( $('#nav-about-menu').find(".elementor-column").length < 2 ) {
        $('#nav-about-menu').parents(".jet-sub-mega-menu").addClass("jet-sub-mega-menu-50");
    }*/

    var addJetSubMegaMenu50 = function( arr, num ) {
        if ( num < arr.length ) {
            arr.eq(num).find(".jet-sub-mega-menu").addClass("jet-sub-mega-menu-50");
            num++;
            addJetSubMegaMenu50(arr, num);
        }
    };

    var addJetSubMegaMenu50Left = function( arr, num ) {
        if ( num < arr.length ) {
            arr.eq(num).find(".jet-sub-mega-menu").addClass("jet-sub-mega-menu-50--left");
            num++;
            addJetSubMegaMenu50Left(arr, num);
        }
    };

    addJetSubMegaMenu50($(".jet-menu-50"), 0);
    addJetSubMegaMenu50Left($(".jet-menu-50--left"), 0);
    addJetSubMegaMenu50Left($(".jet-jet-menu-50--left"), 0);

    /*
    var currentURL = window.location.href;

    if ( currentURL.indexOf('/jp/') !== -1 || currentURL.indexOf('/fr/') !== -1  || currentURL.indexOf('/de/') !== -1 ) {
        if ( $('.search-above-header').eq(0) !== undefined ) {
            $('.search-above-header').eq(0).css({'display':'none'});
        }
    }*/

    var currentURL = window.location.href;
    if ( currentURL.indexOf('/search/') !== -1 ) {
        $('.jet-mobile-menu-cover').eq(0).css({'display':'none'});
    }

    var attachJetMenuSpan = function(elem, num) {
        var spanAttachment = "<span class='jet-menu-mobile-trigger'></span><span class='jet-menu-mobile-trigger--right jet-dropdown-arrow fa fa-angle-down'></span>";
        if ( num < elem.length ) {
            if ( elem.eq(num).find(".jet-sub-mega-menu").length > 0 ) {
                elem.eq(num).append(spanAttachment);
            }
            num++;
            attachJetMenuSpan(elem, num);
        }
    };

    attachJetMenuSpan($('.jet-menu-item'), 0);

    var touchClickInteractions = function (e) {
        var currentSelection = $(e.target);
        if ( $('.jet-menu-container').eq(0).hasClass('jet-mobile-menu-active-state') === true ) {
            if ( currentSelection.hasClass("jet-dropdown-arrow") === true ) {
                if ( currentSelection.parents("li").hasClass("jet-menu-hover") === true ) {
                    currentSelection.parents("li").removeClass("jet-menu-hover");
                } else {
                    currentSelection.parents("li").addClass("jet-menu-hover");
                }
            } else if ( currentSelection.hasClass("jet-mobile-menu-toggle-button") === true || currentSelection.hasClass("jet-menu-toggle__icon") === true ) {
                if ( $("body").hasClass("jet-mobile-open") === true ) {
                    $("body").removeClass("jet-mobile-open");
                } else {
                    $("body").addClass("jet-mobile-open");
                }
            } else if ( currentSelection.hasClass("jet-menu-title") === true ) {
                window.location.href = currentSelection.parents("a").attr("href");
            } else if ( currentSelection.hasClass("jet-mobile-menu-cover") === true ) {
                $("body").removeClass("jet-mobile-open");
            }
            return false;
        } else if ( currentSelection.hasClass("jet-mobile-menu-cover") === true ) {
            $("body").removeClass("jet-mobile-open");
        } else {
            return true;
        }
    };

    setInterval(function(){
        if ( $(".jet-mobile-menu-active-state").length > 0 && $(".jet-mobile-open").length < 1 ) {
            $("body").addClass("jet-mobile-open");
        } else if ( $(".jet-mobile-menu-active-state").length < 1 &&  $(".jet-mobile-open").length > 0 ) {
            $("body").removeClass("jet-mobile-open");
        }
    }, 500);

    /*
    $(".top-level-link").click(function(e){
        e.preventDefault();
        return false;
    });*/

    $(".jet-menu-mobile-trigger").click(function(e){
        e.preventDefault();
        var parentLi = $(this).parents("li");
        var childAnchor = parentLi.find("a");
        window.location.href = childAnchor.attr("href");
    });

    /*
    $(document).on("click", ".jet-dropdown-arrow", function(e){
        e.preventDefault();
        if ( $(this).parents("li").hasClass("jet-menu-hover") === true ) {
            $(this).parents("li").removeClass("jet-menu-hover");
        } else {
            $(this).parents("li").addClass("jet-menu-hover");
        }
        return false;
    });*/

    $(document).on("mouseup touchend", ".jet-dropdown-arrow", function(e){
        e.preventDefault();
        if ( $(this).parents("li").hasClass("jet-menu-hover") === true ) {
            $(this).parents("li").removeClass("jet-menu-hover");
        } else {
            $(this).parents("li").addClass("jet-menu-hover");
        }
        return false;
    });

    /*
    $(document).on("touchend", ".jet-dropdown-arrow", function(e){
        if ( $(this).parents("li").hasClass("jet-menu-hover") === true ) {
            $(this).parents("li").removeClass("jet-menu-hover");
        } else {
            $(this).parents("li").addClass("jet-menu-hover");
        }
    });*/

    $(document).on("touchend", ".top-level-link", function(e){
        e.preventDefault();
        return false;
    });

    $(document).on("touchstart", ".top-level-link", function(e){
        e.preventDefault();
        return false;
    });

    $(document).on("touchend", ".top-level-link", function(e){
        e.preventDefault();
        return false;
    });

    /*
    $(document).on("mouseup touchend",".uael-overlay", function(e){
        console.log("clicking");
		var thisParent = $(this).parent(".uael-modal-parent-wrapper");
		var clickTarget = thisParent.find(".uael-close-icon");
		clickTarget.trigger("click");
	});*/

    /*$("body").click(function(e){
        e.preventDefault();
        touchClickInteractions(e);
        return false;
    });*/

    /*$(document).on("touchend", "body", function(e){
        e.preventDefault();
        touchClickInteractions(e);
        return false;
    });*/

    var targetLocked = $(".target-blank");
    for ( var xtc = 0; xtc < targetLocked.length; xtc++ ) {
        targetLocked.eq(xtc).find("a").attr("target","_blank");
    }

    /*
    
    SEARCH
    
    */

    //Markup declaration
    var searchMarkup = "<li id='menu-item-search' class='menu-item'>"
            +"<div class='user-select'>"
            +"<div class='ast-search-icon'>"
            +"<a class='slide-search astra-search-icon' href='#'>"
            +"<span class='screen-reader-text'>Search</span>"
            +"</a>"
            +"</div>"
            +"<div class='ast-search-menu-icon slide-search' id='ast-search-form'>"
            +"<form role='search' method='get' class='search-form' action='https://" + location.host + "'>"
            +"<label>"
            +"<span class='screen-reader-text'>Search for:</span>"
            +"<input type='search' class='search-field' placeholder='Search …' value='' name='s'>"
            +"</label>"
            +"<input type='submit' class='search-submit' value='Search'>"
            +"</form>"
            +"</div>"
            +"</div>"
            +"</li>";
    //Search interactivity
    /*$('.astra-search-icon').click(function(event){
        var searchContainer = $(this).parents('.search-above-header');
        if ( !searchContainer.hasClass('search-form--expand') ) {
            event.preventDefault();
            searchContainer.addClass('search-form--expand');
        }
    });
    $('.ast-search-menu-icon').click(function(event){
        var currentSearch = $('.search-field').eq(0).attr('value');
        var searchContainer = $(this).parents('.search-above-header');
        if ( searchContainer.hasClass('search-form--expand') && currentSearch === '' ) {
            event.preventDefault();
            searchContainer.removeClass('search-form--expand');
            $('#ast-search-form').removeClass('ast-dropdown-active');
        }
    });*/
    //Window dependencies
    var addDropDownSearch = function() {
        if ( $('#menu-item-search').length === 0 ) {
            $(searchMarkup).appendTo('#primary-menu');
        }
    };
    var removeDropDownSearch = function() {
        if ( $('#menu-item-search').length > 0 ) {
            $('#menu-item-search').remove();
        }
    };
    var addSubDropDownSearch = function() {
        if ( window.innerWidth <= 921) {
            addDropDownSearch();
        } else {
            removeDropDownSearch();
        }
    };
    $(window).resize(function(e){
        addSubDropDownSearch();
    });
    addSubDropDownSearch();

    /*
    
    END SEARCH
    
    */
    viewport =  $('#hidden-footer-div').visible( true );
    if (viewport) {
        // setTimeout(function(){ 
        // jQuery("#sticky-footer-bar").fadeIn('slow');
        //jQuery('#sticky-footer-bar').css({"position":"inherit","transition-delay":".1s","z-index":"999"}); }, 10);
        } else {
        $("#sticky-footer-bar").fadeIn('fast');
        $('#sticky-footer-bar').css({"position":"fixed","width":"100%","bottom":"0","transition-delay":".1s","z-index":"999"});
        }
        $(window).scroll(function() {
    
    var offset = $("#hidden-footer-div").offset();
    var w = $(window);

    var get_current_offset = offset.top-w.scrollTop();
    viewport =  $('#hidden-footer-div').visible( true );

    //$('#sticky-footer-bar').offset().top - 90 ;

    if (viewport) {
        setTimeout(function(){
            $("#sticky-footer-bar").fadeIn('fast');
            $('#sticky-footer-bar').css({
                "position":"inherit",
                "transition-delay":".1s",
                "z-index":"999"
            });
        }, 10);
    } else {
        if (get_current_offset > 50 ) {
            $("#sticky-footer-bar").fadeIn('fast');
            $('#sticky-footer-bar').css({
                "position":"fixed",
                "width":"100%",
                "bottom":"0",
                "transition-delay":".1s",
                "z-index":"999"
            });
        }
    }
    });
});