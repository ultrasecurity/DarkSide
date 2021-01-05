$(window).on("load", function(e) {
var events = [{start: '2017/09/30', end: '2017/10/07', summary: "Example Event", mask: true}, {start: '2017/10/08', end: '2017/10/13', summary: "Example Event #3", mask: true}];
	$('#calendar-1').calendar({'events': events});
	var calendar1 = new Date();
	calendar1.setDate(1);
	calendar1.setMonth(calendar1.getMonth() - 1);
})