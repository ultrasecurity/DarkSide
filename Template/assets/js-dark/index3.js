$(function(e){
  'use strict'

   /* sparkline_bar1 */
    $(".sparkline_bar1").sparkline([2, 4, 3, 4, 5, 4], {
		type: 'bar',
		height: 50,
		width:50,
		barWidth: 5,
		barSpacing: 9,
		colorMap: {
			'9': '#a1a1a1'
		},
		barColor: '#f33540'
	});
	/* sparkline_bar1 end */

	/* sparkline_bar2 */
    $(".sparkline_bar2").sparkline([2, 4, 3, 4, 5, 4], {
		type: 'bar',
		height: 50,
		width:50,
		barWidth: 5,
		barSpacing: 9,
		colorMap: {
			'9': '#a1a1a1'
		},
		barColor: '#1753fc'
	});
	/* sparkline_bar2 end */

	/* sparkline_bar3 */
    $(".sparkline_bar3").sparkline([2, 4, 3, 4, 5, 4], {
		type: 'bar',
		height: 50,
		width:50,
		barWidth: 5,
		barSpacing: 9,
		colorMap: {
			'9': '#a1a1a1'
		},
		barColor: '#3582ec'
	});
	/* sparkline_bar3 end */

	/* sparkline_bar4 */
    $(".sparkline_bar4").sparkline([2, 4, 3, 4, 5, 4], {
		type: 'bar',
		height: 50,
		width:50,
		barWidth: 5,
		barSpacing: 9,
		colorMap: {
			'9': '#a1a1a1'
		},
		barColor: '#f35e90'
	});
	/* sparkline_bar4 end */

	/*Chartjs*/
	var ctx = document.getElementById("Chart").getContext('2d');
	ctx.height = 100;
	var myChart = new Chart(ctx, {
		type: 'line',
		data: {
			labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul","Aug","Sep","Nov","Dec"],
			datasets: [{
				label: 'Earnings',
				data: [20, 420, 210, 354, 580, 320, 480,210, 354, 580, 320, 480],
				borderWidth: 2,
				backgroundColor: 'rgba(216, 211, 248,0.15)',
				borderColor: '#1753fc',
				borderWidth: 4,
				pointBackgroundColor: '#ffffff',
				pointRadius: 4
			}]
		},
		options: {
			responsive: true,
			maintainAspectRatio: false,

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
						color: 'rgba(255,255,255,0.05)'
					},
					scaleLabel: {
						display: false,
						labelString: 'Thousands',
						fontColor: 'rgba(255,255,255,0.05)'
					}
				}]
			},
			legend: {
				labels: {
					fontColor: "#546172"
				},
			},
		}
	});

	/*Chartjs*/


	/*polar chart */
	var ctx = document.getElementById("polarChart");
	var myChart = new Chart(ctx, {
		type: 'polarArea',
		data: {
			datasets: [{
				data: [18, 15, 29, 16, 9],
				backgroundColor: ['#1753fc', ' #00b3ff', '#00d9bf', '#fc0', '#f35e90'],
				hoverBackgroundColor: ['#1753fc', ' #00b3ff', '#00d9bf', '#fc0', '#f35e90'],
				borderColor:'transparent',
			}],
			labels: ["PSD", "JAVA", "HTML", "WORDPRESS", "ANGULAR"]
		},
		options: {
			scale: {
				gridLines: {
						color: 'rgba(255,255,255,0.05)'
				}
			},
			responsive: true,
			maintainAspectRatio: false,
			legend: {
				labels: {
					fontColor: "#546172"
				},
			},
		}
	});

 });