jQuery(document).ready(function(n){var a=function(n,t,s){if(t<n.length){var i=n.eq(t).attr("data-"+s);n.eq(t).attr(s,i),n.eq(t).css({opacity:"1"}),a(n,++t,s)}};a(n("*[data-srcset]"),0,"srcset"),a(n("*[data-src]"),0,"src"),n("#nav-button").click(function(){n("#anaplan-nav").first().is(":hidden")?n("#anaplan-nav").slideDown("fast"):n("#anaplan-nav").slideUp("fast")}),n(".drop-down-trigger").click(function(a){a.preventDefault(),console.log(),n(this).find(".sub-menu").first().is(":hidden")?n(this).find(".sub-menu").slideDown("fast"):n(this).find(".sub-menu").slideUp("fast")})});