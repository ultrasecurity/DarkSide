$( function() {
	$('.count-down').countdown100({
		// Set Endtime here
		// Endtime must be > current time
		endtimeYear: 0,
		endtimeMonth: 0,
		endtimeDate: 35,
		endtimeHours: 18,
		endtimeMinutes: 0,
		endtimeSeconds: 0,
		timeZone: ""
		// ex:  timeZone: "America/New_York", can be empty
		// go to " http://momentjs.com/timezone/ " to get timezone
	});
});