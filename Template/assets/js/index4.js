$(function(e){
  'use strict'

   /*echart2*/
  var chartdata = [
    {
      name: 'InPatients',
      type: 'bar',
      data: [10, 15, 9, 18, 10, 15, 13]
    },
    {
      name: 'OutPatients',
      type: 'bar',
      data: [10, 14, 10, 15, 9, 25, 18]
    }
  ];

  var chart = document.getElementById('echart1');
  var barChart = echarts.init(chart);

  var option = {
    grid: {
      top: '6',
      right: '0',
      bottom: '17',
      left: '25',
    },
    xAxis: {
      data: [ 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun'],
      axisLine: {
        lineStyle: {
          color: 'rgba(0,0,0,0.03)'
        }
      },
      axisLabel: {
        fontSize: 10,
        color: '#bbc1ca'
      }
    },
	tooltip: {
		show: true,
		showContent: true,
		alwaysShowContent: true,
		triggerOn: 'mousemove',
		trigger: 'axis',
		axisPointer:
		{
			label: {
				show: false,
			}
		}

	},
    yAxis: {
      splitLine: {
        lineStyle: {
          color: 'rgba(0,0,0,0.03)'
        }
      },
      axisLine: {
        lineStyle: {
          color: 'rgba(0,0,0,0.03)'
        }
      },
      axisLabel: {
        fontSize: 10,
        color: '#bbc1ca'
      }
    },
    series: chartdata,
    color:[ '#1753fc ', '#9258f1',]
  };

  barChart.setOption(option);

  /*--echart-1---*/

	var myChart2 = echarts.init(document.getElementById('echart-1'));
	var option2 = {
		title: {
			text: '',
			subtext: '',
			x: 'center'
		},
		tooltip: {
			trigger: 'item',
			formatter: "{a} <br/>{b} : {c} ({d}%)"
		},
		legend: {
			x: 'center',
			y: 'bottom',
			data: ['Very Excellent', 'Excellent', 'Very Good', 'Good', 'Average', 'Poor', 'Very Poor', 'Bad'],
			textStyle: {
				color: '#bbc1ca'
			}
		},
		toolbox: {
			show: true,
			feature: {
				mark: {
					show: true
				},
				dataView: {
					show: true,
					readOnly: false
				},
				magicType: {
					show: true,
					type: ['pie']
				},
				restore: {
					show: true
				},
				saveAsImage: {
					show: true
				}
			}
		},
		calculable: true,
		series: [{
			name: '',
			type: 'pie',
			radius: [20, 110],
			center: ['50%', '50%'],
			roseType: 'radius',
			label: {
				normal: {
					show: false
				},
				emphasis: {
					show: true
				}
			},
			lableLine: {
				normal: {
					show: false
				},
				emphasis: {
					show: true
				}
			},
			data: [{
				value: 10,
				name: 'Very Excellent'
			}, {
				value: 5,
				name: 'Excellent'
			}, {
				value: 15,
				name: 'Very Good'
			}, {
				value: 25,
				name: 'Good'
			}, {
				value: 20,
				name: 'Average'
			}, {
				value: 25,
				name: 'Poor'
			}, {
				value: 30,
				name: 'Very Poor'
			}, {
				value: 40,
				name: 'Bad'
			}]
		}, ],
		color: ['#ed2a00', '#004ced', '#00eda1', '#ed00c3', '#ad59ff', ' #fdb901','#1753fc ', '#9258f1']
	};
	myChart2.setOption(option2);
	/*--echart-1---*/

	/*-----echart6-----*/
	var chartdata3 = [
		{
		  name: 'sales',
		  type: 'bar',
		  stack: 'Donors',
		  data: [14, 18, 20, 14, 29, 21]
		},
	];
	var chart6 = document.getElementById('echart6');
	var barChart6 = echarts.init(chart6);

	var option6 = {
		grid: {
		  top: '6',
		  right: '10',
		  bottom: '17',
		  left: '32',
		},
		tooltip: {
			show: true,
			showContent: true,
			alwaysShowContent: true,
			triggerOn: 'mousemove',
			trigger: 'axis',
			axisPointer:
			{
				label: {
					show: false,
				}
			}

		},
		xAxis: {
		  type: 'value',
		  axisLine: {
			lineStyle: {
			  color: 'rgba(0,0,0,0.03)'
			}
		  },
		  axisLabel: {
			fontSize: 10,
			color: '#bbc1ca'
		  }
		},
		yAxis: {
		  type: 'category',
		   data: ['USA', 'UK', 'India', 'Australia', 'Brazil', 'Italy'],
		  splitLine: {
			lineStyle: {
			  color: 'rgba(0,0,0,0.03)'
			}
		  },
		  axisLine: {
			lineStyle: {
			  color: 'rgba(0,0,0,0.03)'
			}
		  },
		  axisLabel: {
			fontSize: 10,
			color: '#bbc1ca'
		  }
		},
		series: chartdata3,
		color:[ '#1753fc ']
	  };
	  barChart6.setOption(option6);
	  
	   var ctx = document.getElementById( "AreaChart1" );
		var myChart = new Chart( ctx, {
			type: 'line',
			data: {
				labels: ['Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun'],
				type: 'line',
				datasets: [ {
					data: [45, 55, 32, 67, 49, 72, 52],
					label: 'Admissions',
					backgroundColor: 'rgb(255,255,255,0.1)',
					borderColor: 'rgba(255,255,255,0.8)',
					borderWidth: '3',
					pointBorderColor: 'transparent',
					pointBackgroundColor: 'transparent',
				}
				]
			},
			options: {

				maintainAspectRatio: false,
				legend: {
					display: false
				},
				responsive: true,
				tooltips: {
					mode: 'index',
					titleFontSize: 12,
					titleFontColor: '#7886a0',
					bodyFontColor: '#7886a0',
					backgroundColor: '#fff',
					titleFontFamily: 'Montserrat',
					bodyFontFamily: 'Montserrat',
					cornerRadius: 3,
					intersect: false,
				},
				scales: {
					xAxes: [ {
						gridLines: {
							color: 'transparent',
							zeroLineColor: 'transparent'
						},
						ticks: {
							fontSize: 2,
							fontColor: 'transparent'
						}
					} ],
					yAxes: [ {
						display:false,
						ticks: {
							display: false,
						}
					} ]
				},
				title: {
					display: false,
				},
				elements: {
					line: {
						borderWidth: 1
					},
					point: {
						radius: 4,
						hitRadius: 10,
						hoverRadius: 4
					}
				}
			}
		} );
		
		 var ctx = document.getElementById( "AreaChart2" );
		var myChart = new Chart( ctx, {
			type: 'line',
			data: {
				labels: ['Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun'],
				type: 'line',
				datasets: [ 
				{
					data: [50, 63, 80, 85, 76, 90, 150],
					label: 'Re Admissions',
					backgroundColor: 'rgb(255,255,255,0.1)',
					borderColor: 'rgba(255,255,255,0.8)',
					borderWidth: '3',
					pointBorderColor: 'transparent',
					pointBackgroundColor: 'transparent',
				}
				]
			},
			options: {

				maintainAspectRatio: false,
				legend: {
					display: false
				},
				responsive: true,
				tooltips: {
					mode: 'index',
					titleFontSize: 12,
					titleFontColor: '#7886a0',
					bodyFontColor: '#7886a0',
					backgroundColor: '#fff',
					titleFontFamily: 'Montserrat',
					bodyFontFamily: 'Montserrat',
					cornerRadius: 3,
					intersect: false,
				},
				scales: {
					xAxes: [ {
						gridLines: {
							color: 'transparent',
							zeroLineColor: 'transparent'
						},
						ticks: {
							fontSize: 2,
							fontColor: 'transparent'
						}
					} ],
					yAxes: [ {
						display:false,
						ticks: {
							display: false,
						}
					} ]
				},
				title: {
					display: false,
				},
				elements: {
					line: {
						borderWidth: 1
					},
					point: {
						radius: 4,
						hitRadius: 10,
						hoverRadius: 4
					}
				}
			}
		} );

	  /* sparkline_bar1 */
		$(".sparkline_bar1").sparkline([3, 4, 3, 4, 5, 4,7,8,4,6,8,5,2, 4, 3, 4, 5, 4,7,8,4,6,8,5,6,8,5], {
			type: 'bar',
			height: 67,
			width:50,
			barWidth: 5,
			barSpacing: 9,
			colorMap: {
				'9': '#a1a1a1'
			},
			barColor: '#f59393'
		});
		/* sparkline_bar1 end */

		/* sparkline_bar2 */
		$(".sparkline_bar2").sparkline([3, 4, 3, 4, 5, 4,7,8,4,6,8,5,7, 4, 3, 4, 5, 4,7,8,4,6,8,5,6,8,5], {
			type: 'bar',
			height: 67,
			width:50,
			barWidth: 5,
			barSpacing: 9,
			colorMap: {
				'9': '#a1a1a1'
			},
			barColor: '#7adafb'
		});
		/* sparkline_bar2 end */

});

