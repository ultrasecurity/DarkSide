$(function(e){
  'use strict'


  /*----Hightchat9-----*/
	Highcharts.chart('Highchart9', {
		chart: {
			backgroundColor: 'transparent',
			zoomType: 'xy'
		},
		title: {
			text: ''
		},
		subtitle: {
			text: ''
		},
		exporting: {
			enabled: false
		},
		credits: {
			enabled: false
		},
		xAxis: [{
			gridLineColor: 'rgba(255,255,255,0.05)',
			categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
			crosshair: true,
			labels: {
				style: {
					color: '#546172',
				}
			}
		}],
		yAxis: [{ // Primary yAxis
			gridLineColor: 'rgba(255,255,255,0.05)',
			labels: {
				format: '{value}',
				style: {
					color: '#546172',
				}
			},
			title: {
				text: 'Revenue',
				style: {
					color: '#546172',
				}
			}
		}, { // Secondary yAxis
			gridLineColor: 'rgba(255,255,255,0.05)',
			title: {
				text: 'Cost',
				style: {
					color: '#546172',
				}
			},
			labels: {
				format: '{value} ',
				style: {
					color: '#546172',
				}
			},
			opposite: true
		}],
		tooltip: {
			shared: true
		},
		legend: {
			layout: 'vertical',
			align: 'left',
			x: 120,
			verticalAlign: 'top',
			y: 100,
			floating: true,
			backgroundColor: (Highcharts.theme && Highcharts.theme.legendBackgroundColor) || 'rgba(255,255,255,0.25)'
		},
		series: [{
			name: 'Cost',
			type: 'column',
			yAxis: 1,
			data: [49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4],
			color: '#1753fc',

		}, {
			name: 'Revenue',
			type: 'spline',
			data: [7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6],
			color: '#ec2d38',

		}]
	});

	//pie chart
	var ctx = document.getElementById("pieChart");
	ctx.height = 250;
	var myChart = new Chart(ctx, {
		type: 'pie',
		data: {
			datasets: [{
				data: [40, 35, 30],
				backgroundColor: ['#1753fc', '#ec2d38', '#9258f1'],
				hoverBackgroundColor: ['#1753fc', '#ec2d38', '#9258f1'],
				borderColor:'transparent',
			}],
			labels: ["Existing customers", "New Customers", "Visiting Customers"]
		},
		options: {
			responsive: true,
			maintainAspectRatio: false,
			legend: {
				labels: {
					fontColor: "#546172"
				},
			},
		}
	});

	/*--Apex charts--*/
	var options = {
		chart: {
			height: 300,
			type: 'bar',
		},
		plotOptions: {
			bar: {
				horizontal: true,
			}
		},
		dataLabels: {
			enabled: false
		},
		series: [{
			 name: 'Defect Rate',
			data: [895, 378, 892, 392, 937, 639, 467, 839, 927, 672,894, 649]
		}],
		xaxis: {
			categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
		},
		yaxis: {

		},
		colors: ['#1753fc'],
		tooltip: {

		}
	}

   var chart = new ApexCharts(
		document.querySelector("#chart"),
		options
	);

	chart.render();

});

