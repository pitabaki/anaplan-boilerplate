(function(){
	jQuery(document).ready(function($){

		var searchSubmit = function () {
			alert('My life for Aier');
			return false;
		};
		var searchFieldSelect = $('#ast-search-form');

		$(document).on('submit', 'form.search-form', function(e) {
			e.preventDefault();
			var currentURL = window.location.href;
			var currentQuery = $(this).find('.search-field').attr('value').replace(/\s/gi, '%20').toLowerCase();
			var formula = "search/#q=" + currentQuery + "&sort=relevancy&f:@source=[Anaplan%20website]";
			window.location.href = currentURL.substr(0, currentURL.indexOf('.com') + 4) + "/" + formula;
			return false;
		});

	});
})();

