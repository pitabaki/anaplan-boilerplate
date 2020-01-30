jQuery(document).ready(function($){
	//select element
	var groupSelect = $('.tg-element-8');

	//Months array
	var allMonths = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
	for ( var pmb = 0; pmb < groupSelect.length; pmb++ ) {

		//Grab current metadata date
		var currentDate = $('.tg-element-8').eq(pmb).html();
		currentDate = currentDate.substr(0, 10);

		//Create date variables for month, day, and year
		var currentYear = currentDate.substr(0,4);
		var currentDay = currentDate.substr(8, currentDate.length);
		var currentMonth = currentDate.substr(5, 2);

		//variables to print
		var printYear = currentYear;
		var printDay = currentDay;
		var printMonth = allMonths[parseInt(currentMonth) - 1];

		var printDateStr = printMonth + ' ' + printDay + ', ' + printYear;
		$('.tg-element-8').eq(pmb).html(printDateStr);
	}
});