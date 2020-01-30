jQuery(document).ready(function($){

	var init = function() {

		( $(window).innerWidth() >= 1228 ) ? indexNum = 0 : indexNum = 1;

		window.onbeforeunload = function () {
				window.scrollTo(0, 0);
		};

		var triggerNum = 0;

		var animationTriggerLoop = function ( elem, num, gearPosition ) {
			var checkOffset = elem.eq(num).css('top');
			var classTriggerId = elem.eq(num).attr('data-trigger');
			if ( parseInt(checkOffset) < parseInt(gearPosition) && $("#" + classTriggerId).hasClass("active") === false ) {
				$("#" + classTriggerId).addClass("active");
			} else if ( num < elem.length ) {
				num++;
				animationTriggerLoop(elem, num, gearPosition);
			}
		};

		var animationTriggered = function ( elem, num, offsetAmount, gearPosition ) {
			var checkOffset = elem.eq(num).css('top');
			var classTriggerId = elem.eq(num).attr('data-trigger');
			var triggerType = elem.eq(num).attr('data-type');
			if ( parseInt(checkOffset) - 100 < parseInt(gearPosition) && $("#" + classTriggerId).hasClass("active") === false ) {
				$("#" + classTriggerId).addClass("active");
				triggerNum++;
			}
		};

		var activateClass = function ( elem, num ) {
			var elemId = $('#' + elem[num]);
			if ( num < elem.length ) {
				elemId.addClass('active');
				num++;
				setTimeout(function(){
					activateClass(elem, num);
				}, 200);
			}
		};

		var current = 0;

		var guideTriggers = [
			{
				"previous" : "vertical",
				"next" : "horizontal",
				"triggerTop":"415",
				"destinationLeft":"0",
				"previousLeft":"0",
				"animationTriggered":""
			},	{
				"previous" : "horizontal",
				"next" : "vertical",
				"triggerTop":"415",
				"destinationLeft":"310",
				"previousLeft":"0",
				"animationTriggered":""
			},	{
				"previous" : "vertical",
				"next" : "horizontal",
				"triggerTop":"815",
				"destinationLeft":"-370",
				"previousLeft":"310",
				"animationTriggered":[
					"anaplan-text-graphic-2","anaplan-text-graphic-3"
				]
			},	{
				"previous" : "horizontal",
				"next" : "vertical",
				"triggerTop":"815",
				"destinationLeft":"-370",
				"previousLeft":"310",
				"animationTriggered":[
					"anaplan-text-graphic-2","anaplan-text-graphic-3"
				]
			},	{
				"previous" : "vertical",
				"next" : "horizontal",
				"triggerTop":"1255",
				"destinationLeft":"365",
				"previousLeft":"-370",
				"animationTriggered":["anaplan-infographic-building-door-animation-inactive-1","anaplan-infographic-building-door-animation-inactive-2","anaplan-infographic-building-door-animation-inactive-3","anaplan-infographic-building-door-animation-inactive-4","anaplan-infographic-building-door-animation-inactive-5","anaplan-infographic-building-door-animation-inactive-6","anaplan-infographic-building-door-animation-inactive-7","anaplan-infographic-building-door-animation-inactive-8","anaplan-infographic-building-door-animation-inactive-9","anaplan-text-sign-0"]
			},	{
				"previous" : "horizontal",
				"next" : "vertical",
				"triggerTop":"1255",
				"destinationLeft":"365",
				"previousLeft":"-370",
				"animationTriggered":["anaplan-infographic-building-door-animation-inactive-1","anaplan-infographic-building-door-animation-inactive-2","anaplan-infographic-building-door-animation-inactive-3","anaplan-infographic-building-door-animation-inactive-4","anaplan-infographic-building-door-animation-inactive-5","anaplan-infographic-building-door-animation-inactive-6","anaplan-infographic-building-door-animation-inactive-7","anaplan-infographic-building-door-animation-inactive-8","anaplan-infographic-building-door-animation-inactive-9","anaplan-text-sign-0"]
			},	{
				"previous" : "vertical",
				"next" : "horizontal",
				"triggerTop":"1705",
				"destinationLeft":"-370",
				"previousLeft":"365",
				"animationTriggered":["anaplan-infographic-bar-animation-inactive-10","anaplan-infographic-bar-animation-inactive-9","anaplan-infographic-bar-animation-inactive-8","anaplan-infographic-bar-animation-inactive-7","anaplan-infographic-bar-animation-inactive-6","anaplan-infographic-bar-animation-inactive-5","anaplan-infographic-bar-animation-inactive-4","anaplan-infographic-bar-animation-inactive-3","anaplan-infographic-bar-animation-inactive-2","anaplan-infographic-bar-animation-inactive-1","anaplan-text-sign-1"]
			},	{
				"previous" : "horizontal",
				"next" : "vertical",
				"triggerTop":"1705",
				"destinationLeft":"-370",
				"previousLeft":"365",
				"animationTriggered":["anaplan-infographic-bar-animation-inactive-10","anaplan-infographic-bar-animation-inactive-9","anaplan-infographic-bar-animation-inactive-8","anaplan-infographic-bar-animation-inactive-7","anaplan-infographic-bar-animation-inactive-6","anaplan-infographic-bar-animation-inactive-5","anaplan-infographic-bar-animation-inactive-4","anaplan-infographic-bar-animation-inactive-3","anaplan-infographic-bar-animation-inactive-2","anaplan-infographic-bar-animation-inactive-1","anaplan-text-sign-1"]
			},	{
				"previous" : "vertical",
				"next" : "horizontal",
				"triggerTop":"2155",
				"destinationLeft":"365",
				"previousLeft":"-370",
				"animationTriggered":["anaplan-infographic-person-animation-inactive-1","anaplan-infographic-person-animation-inactive-2","anaplan-infographic-person-animation-inactive-3","anaplan-infographic-person-animation-inactive-4","anaplan-infographic-person-animation-inactive-5","anaplan-infographic-person-animation-inactive-6","anaplan-infographic-person-animation-inactive-7","anaplan-infographic-person-animation-inactive-8","anaplan-infographic-person-animation-inactive-9","anaplan-infographic-person-animation-inactive-10","anaplan-text-sign-2"]
			},	{
				"previous" : "horizontal",
				"next" : "vertical",
				"triggerTop":"2155",
				"destinationLeft":"365",
				"previousLeft":"-370",
				"animationTriggered":["anaplan-infographic-person-animation-inactive-1","anaplan-infographic-person-animation-inactive-2","anaplan-infographic-person-animation-inactive-3","anaplan-infographic-person-animation-inactive-4","anaplan-infographic-person-animation-inactive-5","anaplan-infographic-person-animation-inactive-6","anaplan-infographic-person-animation-inactive-7","anaplan-infographic-person-animation-inactive-8","anaplan-infographic-person-animation-inactive-9","anaplan-infographic-person-animation-inactive-10","anaplan-text-sign-2"]
			},	{
				"previous" : "vertical",
				"next" : "horizontal",
				"triggerTop":"2610",
				"destinationLeft":"-345",
				"previousLeft":"365",
				"animationTriggered":["anaplan-infographic-light-bulb-animation-inactive-10","anaplan-infographic-light-bulb-animation-inactive-9","anaplan-infographic-light-bulb-animation-inactive-8","anaplan-infographic-light-bulb-animation-inactive-7","anaplan-infographic-light-bulb-animation-inactive-6","anaplan-infographic-light-bulb-animation-inactive-5","anaplan-infographic-light-bulb-animation-inactive-4","anaplan-infographic-light-bulb-animation-inactive-3","anaplan-infographic-light-bulb-animation-inactive-2","anaplan-infographic-light-bulb-animation-inactive-1","anaplan-text-sign-3"]
			},	{
				"previous" : "horizontal",
				"next" : "vertical",
				"triggerTop":"2610",
				"destinationLeft":"-345",
				"previousLeft":"365",
				"animationTriggered":["anaplan-infographic-light-bulb-animation-inactive-10","anaplan-infographic-light-bulb-animation-inactive-9","anaplan-infographic-light-bulb-animation-inactive-8","anaplan-infographic-light-bulb-animation-inactive-7","anaplan-infographic-light-bulb-animation-inactive-6","anaplan-infographic-light-bulb-animation-inactive-5","anaplan-infographic-light-bulb-animation-inactive-4","anaplan-infographic-light-bulb-animation-inactive-3","anaplan-infographic-light-bulb-animation-inactive-2","anaplan-infographic-light-bulb-animation-inactive-1","anaplan-text-sign-3"]
			}
		];

		var heroBackgroundOverlay = $('.elementor-background-overlay').eq(0),
			infographicContainer = $("#anaplan-infographic-container");

		var indexNum = 0;

		( $(window).innerWidth() >= 1228 ) ? indexNum = 0 : indexNum = 1;

		var infographicGroundHeightTotal = $("#anaplan-infographic-ground").find('img').eq(indexNum).height() + parseInt($("#anaplan-infographic-ground").css("margin-top"));

		var SetContainerHeight = function( target, itemHeight, pads ) {
			( typeof pads === "undefined" ) ? pads = 0 : pads;
			target.css({"height": itemHeight + pads + "px"});
		};

		var SetContainerHeightLoop = function () {
			if ( infographicGroundHeightTotal === 0 ) {
				infographicGroundHeightTotal = $("#anaplan-infographic-ground").find('img').height() + parseInt($("#anaplan-infographic-ground").css("margin-top"));
				setTimeout(function(){
					SetContainerHeightLoop();
				}, 500);
			} else {
				SetContainerHeight(infographicContainer, infographicGroundHeightTotal, 150);
			}
		};

		var offsetAmt = parseFloat( $(window).scrollTop() + window.innerHeight ) / 2;
		var itemBeingTracked = parseFloat($('#anaplan-guide-gear').find('img').eq(0).offset().top) + offsetAmt;
		var guideStart = parseFloat($('#anaplan-guide-gear').find('img').eq(0).offset().top);

		$('#anaplan-guide-gear').find('img').eq(0).attr('data-start', guideStart);

		var ClassReveal = function( item, activeClass ){
			//var itemBeingTracked = parseFloat(item.offset().top) + offsetAmt;
			if ( parseFloat( $(window).scrollTop() + window.innerHeight ) >= itemBeingTracked ) {
				item.addClass(activeClass);
			} else {
				item.removeClass(activeClass);
			}
		};

		var ClassLoop = function( items, activeClass, num ) {
			if ( num < items.length ) {
				ClassReveal(items.eq(num), activeClass);
				num++;
				ClassLoop(items, activeClass, num);
			}
		};

		SetContainerHeightLoop();
		heroBackgroundOverlay.addClass('active');

		var elementTravel = function( elem, triggers ) {
			var direction = elem.attr("data-direction");
			var elemStart = elem.attr("data-start");
			var elemTop = elem.css('top');
			var elemLeft = elem.css('left');
			var guideTrigger = triggers[current];

			var elemTop = elem.css('top');
			var windowScrollTop = $(window).scrollTop() - elemStart + offsetAmt;

			if ( parseInt(elemTop) >= guideTrigger.triggerTop && current < triggers.length ) {
				elem.attr("data-direction", guideTrigger.next);
			}
			if ( elem.hasClass('active') && direction === "vertical" && windowScrollTop > parseInt(elemTop) ) {
				elem.css({'top' : $(window).scrollTop() - elemStart + offsetAmt + "px"});
				if ( current + 1 >= triggers.length ) {
					setTimeout(function(){
						elem.css({'top': guideTrigger[guideTrigger.length - 1].triggerTop});
						elem.removeClass('active');
					}, 200);
				}
			} else if ( elem.hasClass('active') && direction === "horizontal" ) {
				current++;
				guideTrigger = triggers[current];
				elem.css({
					'left' : guideTrigger.destinationLeft + 'px',
					'top' : guideTrigger.triggerTop
				});
				if ( triggers[current].animationTriggered.length >= 1 ) {
					activateClass(triggers[current].animationTriggered, 0);
				}
				if ( current + 1 < triggers.length ) {
					elem.attr("data-direction", guideTrigger.next);
					setTimeout(function(){
						current++;
					}, 300);
				}
			}
		};

		var simpleTravel = function( elem, stop ) {
			var elemStart = elem.attr("data-start");
			var elemTop = elem.css('top');
			var windowScrollTop = $(window).scrollTop() - elemStart + offsetAmt;
			if ( elem.hasClass('active') && windowScrollTop > parseInt(elemTop) && parseInt(elemTop) <= parseInt(stop) + 400 ) {
				elem.css({'top' : $(window).scrollTop() - elemStart + offsetAmt + "px"});
			}
		};

		var windowScrollTopPrevious = 0;
		var scrollInit = function() {
			$(window).scroll(function(){


			/*



			REMOVE THIS SECTION WHEN < 1228 has been finalized


			*/


			if ( $(window).innerWidth() < 1228 ) {
				return false;
			}


			/*



			END REMOVE THIS SECTION WHEN < 1228 has been finalized


			*/

				var windowInnerWidth = $(window).innerWidth();
				var gear = $("#anaplan-guide-gear").find("img").eq(0);
				var gearTopPosition = gear.css("top");
				ClassLoop($('#anaplan-guide-gear').find('img'), "active", 0);



				if ( windowInnerWidth >= 1228 ) {
					elementTravel(gear, guideTriggers);
					if ( triggerNum < $(".animation-trigger").length) {
						animationTriggered($(".animation-trigger"), triggerNum, itemBeingTracked, gearTopPosition);
					}
				} else {
					console.log('should scroll');
					var animationTriggerMobileLength = $('.animation-trigger-mobile').length;
					simpleTravel(gear, $('.animation-trigger-mobile').eq(animationTriggerMobileLength - 1).css('top'));
					animationTriggerLoop($(".animation-trigger-mobile"), 0, gearTopPosition);
				}

			});
		};
		scrollInit();

	};

	/*



	REMOVE THIS SECTION WHEN < 1228 has been finalized


	*/


	if ( $(window).innerWidth() < 1228 ) {
		var heroBackgroundOverlay = $('.elementor-background-overlay').eq(0);
		heroBackgroundOverlay.addClass('active');
		return false;
	} else {
		init();
	}

	$(window).resize(function(){
		if ( $(window).innerWidth() < 1228 ) {
			return false;
		} else {
			init();
		}
	});


	/*



	END REMOVE THIS SECTION WHEN < 1228 has been finalized


	*/

});