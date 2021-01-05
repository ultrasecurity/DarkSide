$(function(e){
  'use strict'

	/* Conversion */
    var ctx = $('#conversion');
	ctx.height(200);
	var myChart = new Chart(ctx, {
		type: 'line',
		data: {
			labels: ["Mon", "Tues", "Wed", "Thurs", "Fri", "Sat", "Sun"],
			type: 'line',
			datasets: [{
				label: "Conversions",
				data: [253, 256, 395, 204, 251, 458, 364, 145, 156, 250, 253, 278],
				backgroundColor: 'rgba(146,88,241,0.8)',
				borderColor: 'rgba(146,88,241,0.9)',
				borderWidth: 0,
				pointStyle: 'circle',
				pointRadius: 0,
				pointBorderColor: 'transparent',
				pointBackgroundColor: 'rgba(146,88,241,0.8)',
			}]
		},
		options: {
			responsive: true,
			maintainAspectRatio: false,
			tooltips: {
				mode: 'index',
				titleFontSize: 12,
				titleFontColor: 'rgba(0,0,0,0.9)',
				bodyFontColor: 'rgba(0,0,0,0.9)',
				backgroundColor: '#fff',
				bodyFontFamily: 'Montserrat',
				cornerRadius: 0,
				intersect: false,
			},
			legend: {
				display: false,
				labels: {
					usePointStyle: true,
					fontFamily: 'Montserrat',
				},
			},
			scales: {
				xAxes: [{
					ticks: {
						fontColor: "#546172",
					},
					display: true,
					gridLines: {
						color: 'rgba(255,255,255,0.05)'
					},
					scaleLabel: {
						display: false,
						labelString: '',
						fontColor: 'rgba(255,255,255,0.05)'
					}
				}],
				yAxes: [{
					ticks: {
						fontColor: "#546172",
					},
					display: true,
					gridLines: {
						display: false,
						drawBorder: true
					},
				}]
			},
			title: {
				display: false,
				text: 'Normal Legend'
			}
		}
	});
	/* Conversion end */

	/* sparkline_bar1 */
    $(".sparkline_bar1").sparkline([2, 4, 3, 4, 5, 4, 7, 8, 4, 6], {
		type: 'bar',
		height: 50,
		width:'100%',
		barWidth: 5,
		barSpacing:10,
		colorMap: {
			'9': '#a1a1a1'
		},
		barColor: '#2fd8c6'
	});
	/* sparkline_bar1 end */

	/* morris chart*/
	new Morris.Donut({
		  element: 'morrisBar8',
		  data: [
			{value: 50, label: 'Campaign1'},
			{value: 25, label: 'Campaign2'},
			{value: 15, label: 'Campaign3'}
		  ],
		  backgroundColor: '#293544',
			labelColor: '#d3d8e2',
		  colors: [
		'#1753fc ', '#9258f1', '#fdb901'

	  ],
		  formatter: function (x) { return x + "%"}
		}).on('click', function(i, row){
		  console.log(i, row);
	});

	/* lineChart1 */
	var ctx = $('#lineChart1');
	ctx.height(250);
	var myChart = new Chart(ctx, {
		type: 'bar',
		data: {
			labels: ["Mon", "Tues", "Wed", "Thurs", "Fri", "Sat", "Sun"],
			datasets: [{
				label: "Campaign",
				borderColor: "transparent",
				borderWidth: "4",
				backgroundColor: "#1753fc",
				data: [53, 46, 65, 56, 72, 46, 63],

			}]
		},
		options: {
			scales: {
				xAxes: [{
					ticks: {
						fontColor: "#546172",
					 },
					display: true,
					gridLines: {
						color: 'rgba(255,255,255,0.05)'
					}
				}],
				yAxes: [{
					ticks: {
						fontColor: "#546172",
					 },
					display: true,
					gridLines: {
						display: true,
						color: 'rgba(255,255,255,0.05)'
					}
				}]
			},
			legend: {
				display:false,
				labels: {
					fontColor: "#546172",
				},
			},
			responsive: true,
			maintainAspectRatio: false,
			tooltips: {
				mode: 'index',
				intersect: false,
			},
			tooltips: {},
			hover: {
				mode: 'nearest',
				intersect: true
			}
		}
	});
	/* lineChart1 end */

});

