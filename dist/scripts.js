jQuery(document).ready(function($){
    
    var lazyLoadImg = function ( arr, num, srcType ) {
        if ( num < arr.length ) {
            var imageSrc = arr.eq(num).attr("data-" + srcType);
            arr.eq(num).attr(srcType, imageSrc);
            arr.eq(num).css({"opacity":"1"});
            num++;
            lazyLoadImg(arr, num, srcType);
        }
    };

    lazyLoadImg( $("*[data-srcset]"), 0, 'srcset');
    lazyLoadImg( $("*[data-src]"), 0, 'src');

    /* INIT MENU SUPPORT */

    $("#nav-button").click(function () {
        if ($("#anaplan-nav").first().is(":hidden")) {
            $("#anaplan-nav").slideDown("fast");
        } else {
            $("#anaplan-nav").slideUp("fast");
        }
    });
    
	$('.drop-down-trigger').click(function (e) {
		e.preventDefault();
		console.log();
		if ( $(this).find('.sub-menu').first().is(":hidden") ) {
			$(this).find('.sub-menu').slideDown("fast");
		} else {
			$(this).find('.sub-menu').slideUp("fast");
		}
	});

});