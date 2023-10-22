$(function () {

	// Cache some selectors

	var clock = $('#clock'),
		alarm = clock.find('.alarm'),
		ampm = clock.find('.ampm');

	// Map digits to their names (this will be an array)
	var digit_to_name = 'zero one two three four five six seven eight nine'.split(' ');

	// This object will hold the digit elements
	var digits = {};

	// Positions for the hours, minutes, and seconds
	var positions = [
		'h1', 'h2', ':', 'm1', 'm2', ':', 's1', 's2'
	];

	// Generate the digits with the needed markup,
	// and add them to the clock

	var digit_holder = clock.find('.digits');

	$.each(positions, function () {

		if (this == ':') {
			digit_holder.append('<div class="dots">');
		}
		else {

			var pos = $('<div>');

			for (var i = 1; i < 8; i++) {
				pos.append('<span class="d' + i + '">');
			}

			// Set the digits as key:value pairs in the digits object
			digits[this] = pos;

			// Add the digit elements to the page
			digit_holder.append(pos);
		}

	});

	// Add the weekday names

	var weekday_names = 'MON TUE WED THU FRI SAT SUN'.split(' '),
		weekday_holder = clock.find('.weekdays');

	$.each(weekday_names, function () {
		weekday_holder.append('<span>' + this + '</span>');
	});

	var weekdays = clock.find('.weekdays span');

	// Run a timer every second and update the clock


	

	})();

	// Switch the theme

	//$('a.button').click(function () {
	//	clock.toggleClass('light dark');
	//});



	$('#scroll').click(function () {
		var scrollPosition = $('#one').offset().top;

		$('html, body').animate({
			scrollTop: scrollPosition
		}, 1500);
	});

	$('#tzoker').click(function(event) {
		var bgArray = [];
		var bgResult = [];
		var bgNum;

		var min = document.getElementById("min").value;
		var max = document.getElementById("max").value;
		var choice = 1;

		for (i = min; i <= max; i++) {
			bgArray.push(i);
		}
		for (i = 0; i < choice; i++) {
			bgNum = Math.floor(Math.random() * bgArray.length);
			bgResult.push(bgArray[bgNum]); // 랜덤으로 선택된 숫자 순서대로 bgReult에 저장
			bgArray.splice(bgNum, 1);    // 선택된 숫자 bgArray에서 삭제, 중복 선택 방지
		}

		bgResult = bgResult.join(', ');
		$('#random').html(bgResult);
	});
});
