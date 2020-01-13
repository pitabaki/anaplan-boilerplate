jQuery(document).ready(function($){

    console.log('lazyload');
    var lazyLoadImg = function ( arr, num, srcType ) {
        if ( num < arr.length ) {
            var imageSrc = arr.eq(num).attr("data-" + srcType);
            arr.eq(num).attr(srcType, imageSrc);
            arr.eq(num).css({"opacity":"1"});
            num++;
            lazyLoadImg(arr, num);
        }
    };

    lazyLoadImg( $("*[data-srcset]"), 0, 'srcset');
    lazyLoadImg( $("*[data-src]"), 0, 'src');

    /* INIT MENU SUPPORT */
    var removeSubMenuTitle = function ( arr, num ) {
        if ( num < arr.length ) {
            arr.eq(num).find("> a").html("");
            num++;
            removeSubMenuTitle(arr, num);
        }
    };
    removeSubMenuTitle($(".sub-menu-title-hidden-right"), 0);

    var addMenuImage = function ( arr, num ) {
        if ( num < arr.length ) {
            var currentAnchor = arr.eq(num).find("> a");
            var originalHref = currentAnchor.attr("href");
            var newImg = document.createElement("IMG");
            newImg.src = originalHref;
            newImg.alt = "Upcoming Events";
            currentAnchor.html(newImg);
            currentAnchor.addClass("sub-menu-image");
            num++;
            addMenuImage(arr, num);
        }
    };

    addMenuImage($(".sub-menu-img"), 0);

    /* EVENTS */
    $(document).on("mouseover", "#primary-menu>.menu-item", function(e){
        e.preventDefault();
        $(this).addClass("active");
    });
    $(document).on("mouseout", "#primary-menu>.menu-item", function(e){
        e.preventDefault();
        $(this).removeClass("active");
    });
});