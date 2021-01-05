 $(function() {
 	"use strict";
 	$('#calendar1').fullCalendar({
 		header: {
 			left: 'prev,next today',
 			center: 'title',
 			right: 'month,agendaWeek,agendaDay'
 		},
 		defaultDate: '2019-03-01',
 		navLinks: true, // can click day/week names to navigate views
 		selectable: true,
 		selectHelper: true,
 		select: function(start, end) {
 			var title = prompt('Event Title:');
 			var eventData;
 			if (title) {
 				eventData = {
 					title: title,
 					start: start,
 					end: end
 				};
 				$('#calendar1').fullCalendar('renderEvent', eventData, true); // stick? = true
 			}
 			$('#calendar1').fullCalendar('unselect');
 		},
 		editable: true,
 		eventLimit: true, // allow "more" link when too many events
 		events: [{
 			title: 'All Day Event',
 			start: '2019-11-01'
 		}, {
 			title: 'Long Event',
 			start: '2019-03-07',
 			end: '2019-02-10'
 		}, {
 			id: 999,
 			title: 'Repeating Event',
 			start: '2019-01-09T16:00:00'
 		}, {
 			id: 999,
 			title: 'Repeating Event',
 			start: '2019-02-16T16:00:00'
 		}, {
 			title: 'Conference',
 			start: '2019-01-11',
 			end: '2019-01-13'
 		}, {
 			title: 'Meeting',
 			start: '2019-02-12T10:30:00',
 			end: '2019-02-12T12:30:00'
 		}, {
 			title: 'Lunch',
 			start: '2019-03-12T12:00:00'
 		}, {
 			title: 'Meeting',
 			start: '2019-03-12T14:30:00'
 		}, {
 			title: 'Happy Hour',
 			start: '2019-01-12T17:30:00'
 		}, {
 			title: 'Dinner',
 			start: '2019-02-12T20:00:00'
 		}, {
 			title: 'Birthday Party',
 			start: '2019-01-13T07:00:00'
 		}, {
 			title: 'Click for Google',
 			url: 'http://google.com/',
 			start: '2019-03-28'
 		}]
 	});
 	$('#calendar').fullCalendar({
 		header: {
 			left: 'prev,next today',
 			center: 'title',
 			right: 'listDay,listWeek,month'
 		},
 		// customize the button names,
 		// otherwise they'd all just say "list"
 		views: {
 			listDay: {
 				buttonText: 'list day'
 			},
 			listWeek: {
 				buttonText: 'list week'
 			}
 		},
 		defaultView: 'listWeek',
 		defaultDate: '2019-03-12',
 		navLinks: true, // can click day/week names to navigate views
 		editable: true,
 		eventLimit: true, // allow "more" link when too many events boYSIqMee+p4uAjskftSrErYaF9PDNDn+EGSzR9N2BspYI8=
		//feCz66HNQhyoUIndT6pXQpWta+PA3e1h3yExMyH1EsOo6f8PXnNPyHGLRfchOSF9WSX7exs=
 		events: [{
 			title: 'All Day Event',
 			start: '2019-01-01'
 		}, {
 			title: 'Long Event',
 			start: '2019-02-07',
 			end: '2019-03-10'
 		}, {
 			id: 999,
 			title: 'Repeating Event',
 			start: '2019-02-09T16:00:00'
 		}, {
 			id: 999,
 			title: 'Repeating Event',
 			start: '2019-03-16T16:00:00'
 		}, {
 			title: 'Conference',
 			start: '2019-02-11',
 			end: '2019-02-13'
 		}, {
 			title: 'Meeting',
 			start: '2019-02-12T10:30:00',
 			end: '2019-02-12T12:30:00'
 		}, {
 			title: 'Lunch',
 			start: '2019-03-12T12:00:00'
 		}, {
 			title: 'Meeting',
 			start: '2019-04-12T14:30:00'
 		}, {
 			title: 'Happy Hour',
 			start: '2019-05-12T17:30:00'
 		}, {
 			title: 'Dinner',
 			start: '2019-06-12T20:00:00'
 		}, {
 			title: 'Birthday Party',
 			start: '2019-03-13T07:00:00'
 		}, {
 			title: 'Click for Google',
 			url: 'http://google.com/',
 			start: '2019-02-28'
 		}]
 	});
 	$('#calendar2').fullCalendar({
 		header: {
 			left: 'prev,next today',
 			center: 'title',
 			right: 'month,agendaWeek,agendaDay,listMonth'
 		},
 		defaultDate: '2019-03-12',
 		navLinks: true, // can click day/week names to navigate views
 		businessHours: true, // display business hours
 		editable: true,
 		events: [{
 				title: 'Business Lunch',
 				start: '2019-03-03T13:00:00',
 				constraint: 'businessHours'
 			}, {
 				title: 'Meeting',
 				start: '2019-03-13T11:00:00',
 				constraint: 'availableForMeeting', // defined below
 				color: '#f35e90'
 			}, {
 				title: 'Conference',
 				start: '2019-03-18',
 				end: '2019-03-20',
 				color: '#9258f1'
 			}, {
 				title: 'Party',
 				start: '2019-03-29T20:00:00',
 				color: '#22c865'
 			},
 			// areas where "Meeting" must be dropped
 			{
 				id: 'availableForMeeting',
 				start: '2019-03-11T10:00:00',
 				end: '2019-03-11T16:00:00',
 				rendering: 'background',
 				color: '#5e72e4'
 			}, {
 				id: 'availableForMeeting',
 				start: '2019-03-13T10:00:00',
 				end: '2019-03-13T16:00:00',
 				rendering: 'background'
 			},
 			// red areas where no events can be dropped
 			{
 				start: '2019-03-24',
 				end: '2019-03-28',
 				overlap: false,
 				rendering: 'background',
 				color: 'rgba(107,122,144,0.1)'
 			}, {
 				start: '2019-03-06',
 				end: '2019-03-11',
 				overlap: false,
 				rendering: 'background',
 				color: 'rgba(107,122,144,0.1)'
 			}
 		]
 	});

});