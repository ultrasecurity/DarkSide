/* ---hightchart1----*/
$(function(e){
  'use strict';

		Highcharts.chart('hightchart1', {

			chart: {
				type: 'area'
			},
			title: {
				text: ''
			},
			exporting: { enabled: false },
			 credits: {
				  enabled: false
			  },
			xAxis: {
				allowDecimals: false,
				labels: {
					formatter: function () {
						return this.value; // clean, unformatted number for year
					}
				}
			},
			yAxis: {
				title: {
					text: 'values'
				},
				labels: {
					formatter: function () {
						return this.value / 1000 + 'k';
					}
				}
			},
			tooltip: {
				pointFormat: '{series.name} had stockpiled <b>{point.y:,.0f}</b><br/>warheads in {point.x}'
			},
			plotOptions: {
				area: {
					pointStart: 1982,
					marker: {
						enabled: false,
						symbol: 'circle',
						radius: 2,
						color:'#f6f6f6',
						states: {
							hover: {
								enabled: false
							}
						}
					}
				}
			},
			series: [{
				name: 'SALES',
				data: [
					369, 640, 1005, 1436, 2063, 3057, 4618, 6444, 9822, 15468,
					20434, 24126, 27387, 29459, 31056, 31982, 32040, 31233, 29224, 27342,
					26662, 26956, 27912, 28999, 28965, 27826, 25579, 25722, 24826, 24605,
					24304, 23464, 23708, 24099, 24357, 24237, 24401,2500
				],
				color:'#9258f1'
			}, {
				name: 'PROFIT',
				data: [
					 200, 426, 660, 869, 1060,
					1605, 2471, 3322, 4238, 5221, 6129, 7089, 8339, 9399, 10538,
					11643, 13092, 14478, 15915, 17385, 19055, 21205, 23044, 25393, 27935,
					30062, 32049, 33952, 35804, 37431, 39197, 45000, 43000, 41000, 39000,
					37000, 35000, 33000

				],
				color:'#1753fc '
			}]
		});
	});

$(function(e){
  'use strict';

  /* ---hightchart2----*/
  var data = [3.5, 3, 3.2, 3.1, 3.6, 3.9, 3.4, 3.4, 2.9, 3.1, 3.7, 3.4, 3, 3, 4,
    4.4, 3.9, 3.5, 3.8, 3.8, 3.4, 3.7, 3.6, 3.3, 3.4, 3, 3.4, 3.5, 3.4, 3.2,
    3.1, 3.4, 4.1, 4.2, 3.1, 3.2, 3.5, 3.6, 3, 3.4, 3.5, 2.3, 3.2, 3.5, 3.8, 3,
    3.8, 3.2, 3.7, 3.3, 3.2, 3.2, 4];

	Highcharts.chart('highchart2', {

		title: {
			text: ''
		},
		exporting: { enabled: false },
		credits: {
			enabled: false
		},
		xAxis: [{
			title: {
				text: 'Data'
			},
			alignTicks: false
		}, {
			title: {
				text: ''
			},
			alignTicks: false,
			opposite: true
		}],

		yAxis: [{
			title: { text: 'data1' }
		}, {
			title: { text: 'data2' },
			opposite: true
		}],

		series: [{
			name: 'data1',
			type: 'bellcurve',
			xAxis: 1,
			yAxis: 1,
			color:'#1753fc ',
			baseSeries: 1,
			zIndex: -1
		}, {
			name: 'data2',
			type: 'scatter',
			data: data,
			color:'#9258f1',
			marker: {
				radius: 2.5
			}
		}]
	});
});

$(function(e){
  'use strict';

	 /* ---hightchart3----*/

	Highcharts.chart('highchart3', {
		chart: {
			type: 'pie',
			options3d: {
				enabled: true,
				alpha: 45,
				beta: 0
			}
		},
		exporting: { enabled: false },
		credits: {
			enabled: false
		},
		title: {
			text: ''
		},
		tooltip: {
			pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
		},
		plotOptions: {
			pie: {
				allowPointSelect: true,
				cursor: 'pointer',
				depth: 35,
				dataLabels: {
					enabled: true,
					format: '{point.name}'
				}
			}
		},
		series: [{
			type: 'pie',
			name: 'Browser share',
			data: [
				['Firefox', 40.0],
				['IE', 20.8],
				{
					name: 'Chrome',
					y: 18.8,
					sliced: true,
					selected: true
				},
				['Safari', 12.5],
				['Opera', 6.2],
				['Others', 2]
			],
			colors: ['#1753fc ', '#9258f1', '#ecb403', '#24CBE5', '#64E572', '#FF9655', '#FFF263', '#6AF9C4']
		}]
	});


	/* ---hightchart4----*/

	Highcharts.chart('highchart4', {
		chart: {
			type: 'pie',
			options: {
				enabled: true,
				alpha: 45,
				beta: 0
			}
		},
		exporting: { enabled: false },
		credits: {
			enabled: false
		},
		title: {
			text: ''
		},
		tooltip: {
			pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
		},
		plotOptions: {
			pie: {
				allowPointSelect: true,
				cursor: 'pointer',
				depth: 35,
				dataLabels: {
					enabled: true,
					format: '{point.name}'
				}
			}
		},
		series: [{
			type: 'pie',
			name: 'Browser share',
			data: [
				['Sales', 40.0],
				['Profit', 40.8],
				['Growth', 20.5]
			],
			colors: ['#1753fc ', '#9258f1', '#ecb403']
		}]
	});

	/* ---hightchart5----*/

	Highcharts.chart('highchart5', {
		chart: {
			type: 'bar'
		},
		title: {
			text: ''
		},
		exporting: { enabled: false },
		credits: {
			enabled: false
		},
		subtitle: {
			text: ''
		},
		xAxis: {
			categories: ['growth', 'sales', 'profit', 'Emloyes'],
			title: {
				text: null
			}
		},
		yAxis: {
			min: 0,
			title: {
				text: '',
				align: 'high'
			},
			labels: {
				overflow: 'justify'
			}
		},
		tooltip: {
			valueSuffix: ' millions'
		},
		plotOptions: {
			bar: {
				dataLabels: {
					enabled: true
				}
			}
		},
		legend: {
			layout: 'vertical',
			align: 'right',
			verticalAlign: 'top',
			x: -40,
			y: 80,
			enabled: false,
			floating: true,
			borderWidth: 1,
			backgroundColor: ((Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'),
			shadow: true
		},
		colors: ['#ecb403', '#64E572' ,'#24CBE5', '#1753fc ', '#9258f1' ],
		credits: {
			enabled: false
		},
		series: [{
			name: 'Year 1800',
			data: [107, 31, 635, 203]
		}, {
			name: 'Year 1900',
			data: [133, 156, 947, 408]
		}, {
			name: 'Year 2000',
			data: [814, 841, 3714, 727]
		}, {
			name: 'Year 2010',
			data: [1216, 1001, 4436, 738]
		}, {
			name: 'Year 2018',
			data: [1500, 2051, 3526, 968]
		}]
	});

	/* ---hightchart6----*/

	Highcharts.chart('highchart6', {

		title: {
			text: ''
		},

		subtitle: {
			text: ''
		},
		exporting: { enabled: false },
		credits: {
			enabled: false
		},
		yAxis: {
			title: {
				text: 'Number of Employees'
			}
		},
		legend: {
			layout: 'horizontal',
			align: '',
			verticalAlign: 'middle',
			enabled: false
		},

		plotOptions: {
			series: {
				label: {
					connectorAllowed: false
				},
				pointStart: 2010
			}
		},

		series: [{
			name: 'Installation',
			data: [43934, 52503, 57177, 69658, 97031, 119931, 137133, 154175]
		}, {
			name: 'Manufacturing',
			data: [24916, 24064, 29742, 29851, 32490, 30282, 38121, 40434]
		}, {
			name: 'Sales & Distribution',
			data: [11744, 17722, 16005, 19771, 20185, 24377, 32147, 39387]
		}, {
			name: 'Project Development',
			data: [null, null, 7988, 12169, 15112, 22452, 34400, 34227]
		}],
		colors: ['#ecb403', '#24CBE5', '#9258f1' , '#1753fc ', '#ff5c75' ],
		responsive: {
			rules: [{
				condition: {
					maxWidth: 500
				},
				chartOptions: {
					legend: {
						layout: 'horizontal',
						align: 'center',
						verticalAlign: 'bottom'
					}
				}
			}]
		}

	});

	/* ---hightchart7----*/
	var chart = Highcharts.chart('highchart7', {

    title: {
        text: ''
    },

    subtitle: {
        text: 'Plain'
    },
	exporting: { enabled: false },
	credits: {
		enabled: false
	},
    xAxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    },
	colors: ['#1753fc ', '#9258f1', '#ecb403', '#24CBE5', '#64E572', '#FF9655', '#f1c40f', '#6AF9C4'],
    series: [{
        type: 'column',
        colorByPoint: true,
        data: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4],
        showInLegend: false
    }]

});


$('#plain').click(function () {
    chart.update({
        chart: {
            inverted: false,
            polar: false
        },
        subtitle: {
            text: 'Plain'
        }
    });
});

$('#inverted').click(function () {
    chart.update({
        chart: {
            inverted: true,
            polar: false
        },
        subtitle: {
            text: 'Inverted'
        }
    });
});

$('#polar').click(function () {
    chart.update({
        chart: {
            inverted: false,
            polar: true
        },
        subtitle: {
            text: 'Polar'
        }
    });
});


	/*----Hightchat8-----*/
	Highcharts.chart('Highchart8', {
		chart: {
			backgroundColor: 'transparent',
			type: 'line'
		},
		title: {
			text: ''
		},
		exporting: {
			enabled: false
		},
		credits: {
			enabled: false
		},
		subtitle: {
			text: ''
		},
		xAxis: {
			gridLineColor: 'rgba(0,0,0,0.03)',
			categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
			labels: {
				style: {
					color: '#bbc1ca',
				}
			}
		},
		yAxis: {
			gridLineColor: 'rgba(0,0,0,0.03)',
			title: {
				text: 'Temperature (°C)'
			},
			labels: {
				style: {
					color: '#bbc1ca',
				}
			}
		},
		plotOptions: {
			line: {
				dataLabels: {
					enabled: true
				},
				enableMouseTracking: false
			}
		},
		series: [{
			name: 'Tokyo',
			data: [7.0, 6.9, 9.5, 14.5, 18.4, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6],
			color: '#9258f1'
		}, {
			name: 'London',
			data: [3.9, 4.2, 5.7, 8.5, 11.9, 15.2, 17.0, 16.6, 14.2, 10.3, 6.6, 4.8],
			color: '#1753fc'
		}]
	});

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
			gridLineColor: 'rgba(0,0,0,0.03)',
			categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
			crosshair: true,
			labels: {
				style: {
					color: '#bbc1ca',
				}
			}
		}],
		yAxis: [{ // Primary yAxis
			gridLineColor: 'rgba(0,0,0,0.03)',
			labels: {
				format: '{value}°C',
				style: {
					color: '#bbc1ca',
				}
			},
			title: {
				text: 'Temperature',
				style: {
					color: '#bbc1ca',
				}
			}
		}, { // Secondary yAxis
			gridLineColor: 'rgba(0,0,0,0.03)',
			title: {
				text: 'Rainfall',
				style: {
					color: Highcharts.getOptions().colors[0]
				}
			},
			labels: {
				format: '{value} mm',
				style: {
					color: Highcharts.getOptions().colors[0]
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
			name: 'Rainfall',
			type: 'column',
			yAxis: 1,
			data: [49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4],
			color: '#1753fc',
			tooltip: {
				valueSuffix: ' mm'
			}
		}, {
			name: 'Temperature',
			type: 'spline',
			data: [7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6],
			color: '#9258f1',
			tooltip: {
				valueSuffix: '°C'
			}
		}]
	});

	/*----Hightchat10-----*/
	Highcharts.chart('Highchart10', {
		chart: {
			backgroundColor: 'transparent',
			type: 'column'
		},
		title: {
			text: ''
		},
		exporting: {
			enabled: false
		},
		credits: {
			enabled: false
		},
		yAxis: [{
			gridLineColor: 'rgba(0,0,0,0.03)',
			className: 'highcharts-color-0',
			title: {
				text: 'Primary axis'
			},
			labels: {
				style: {
					color: '#bbc1ca',
				}
			}
		}, {
			gridLineColor: 'rgba(0,0,0,0.03)',
			className: 'highcharts-color-1',
			opposite: true,
			title: {
				text: 'Secondary axis'
			},
			labels: {
				style: {
					color: '#bbc1ca',
				}
			}
		}],
		plotOptions: {
			column: {
				borderRadius: 5
			}
		},
		series: [{
			data: [1, 3, 2, 4],
			color: '#9258f1'
		}, {
			data: [324, 124, 547, 221],
			color: '#1753fc',
			yAxis: 1
		}]
	});


	/*----Hightchat11-----*/
	Highcharts.chart('Highchart11', {
		chart: {
			backgroundColor: 'transparent',
			type: 'pie'
		},
		title: {
			text: ''
		},
		exporting: {
			enabled: false
		},
		credits: {
			enabled: false
		},
		xAxis: {
			gridLineColor: 'rgba(0,0,0,0.03)',
			categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
			labels: {
				style: {
					color: '#bbc1ca',
				}
			}
		},
		series: [{
			type: 'pie',
			allowPointSelect: true,
			keys: ['name', 'y', 'selected', 'sliced'],
			data: [
				['Apples', 99.9, false],
				['Pears', 71.5, false],
				['Oranges', 106.4, false],
				['Plums', 129.2, false],
				['Bananas', 144.0, false],
				['Peaches', 176.0, false],
				['Prunes', 135.6, true, true],
				['Avocados', 148.5, false]
			],
			colors: ['#1753fc', ' #00b3ff', '#9258f1', '#fc0', '#ed2a00', '#004ced', '#00eda1', '#ed00c3', '#6AF9C4'],
			showInLegend: true
		}]
	});

 });