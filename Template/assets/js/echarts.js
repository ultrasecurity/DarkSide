$(function(e){
  'use strict'
  /*-----echart2-----*/

  var chartdata = [
    {
      name: 'sales',
      type: 'bar',
      data: [10, 15, 9, 18, 10, 15]
    },
    {
      name: 'profit',
      type: 'line',
	  smooth:true,
      data: [8, 5, 25, 10, 10]
    },
    {
      name: 'growth',
      type: 'bar',
      data: [10, 14, 10, 15, 9, 25]
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
      data: [ '2014', '2015', '2016', '2017', '2018'],
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
    color:[ '#1753fc ','#fa626b', '#32cafe',]
  };

  barChart.setOption(option);


  /*-----echart1-----*/
  var chartdata2 = [
    {
      name: 'sales',
      type: 'line',
	  smooth: true,
      data: [12, 25, 12, 35, 12, 38],
	  color:[ '#1753fc ']
    },
    {
      name: 'Profit',
      type: 'line',
	  smooth: true,
	  size:10,
      data: [8, 12, 28, 10, 10, 12],
	  color:[ '#32cafe']
    }
  ];

  var chart2 = document.getElementById('echart2');
  var barChart2 = echarts.init(chart2);

  var option2 = {
    grid: {
      top: '6',
      right: '0',
      bottom: '17',
      left: '25',
    },
    xAxis: {
      data: [ '2014', '2015', '2016', '2017', '2018'],
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
    series: chartdata2
  };
  barChart2.setOption(option2);




  /*-----echart3-----*/

  var option3 = {
    grid: {
      top: '6',
      right: '0',
      bottom: '17',
      left: '32',
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
      data: [ '2014', '2015', '2016', '2017', '2018'],
      splitLine: {
        lineStyle: {
          color: 'rgba(0,0,0,0.03)'
        }
      },
      axisLine: {
        lineStyle: {
          color: '#c0dfd8'
        }
      },
      axisLabel: {
        fontSize: 10,
        color: '#bbc1ca'
      }
    },
    series: chartdata,
	color:[ '#1753fc ','#fa626b', '#32cafe',]
	};

  var chart3 = document.getElementById('echart3');
  var barChart3 = echarts.init(chart3);
  barChart3.setOption(option3);


  /*-----echart4-----*/

  var option4 = {
    grid: {
      top: '6',
      right: '0',
      bottom: '17',
      left: '32',
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
      data: [ '2014', '2015', '2016', '2017', '2018'],
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
    series: chartdata2,
    color:[ '#1753fc ', '#32cafe','#ecb403']
  };

  var chart4 = document.getElementById('echart4');
  var barChart4 = echarts.init(chart4);
  barChart4.setOption(option4);


  /*-----echart5-----*/

  var chartdata3 = [
    {
      name: 'sales',
      type: 'bar',
      stack: 'Stack',
      data: [14, 18, 20, 14, 29, 21, 25, 14, 24]
    },
    {
      name: 'Profit',
      type: 'bar',
      stack: 'Stack',
      data: [12, 14, 15, 50, 24, 24, 10, 20 ,30]
    }
  ];

  var option5 = {
    grid: {
      top: '6',
      right: '0',
      bottom: '17',
      left: '25',
    },
    xAxis: {
      data: ['2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018'],
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
	color:[ '#1753fc ', '#32cafe']
  };

  var chart5 = document.getElementById('echart5');
  var barChart5 = echarts.init(chart5);
  barChart5.setOption(option5);


  /*-----echart6-----*/
	 var chartdata3 = [
    {
      name: 'sales',
      type: 'bar',
      stack: 'Stack',
      data: [14, 18, 20, 14, 29, 21, 25, 14, 24]
    },
    {
      name: 'Profit',
      type: 'bar',
      stack: 'Stack',
      data: [12, 14, 15, 50, 24, 24, 10, 20 ,30]
    }
  ];
  var option6 = {
    grid: {
      top: '6',
      right: '10',
      bottom: '17',
      left: '32',
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
       data: ['2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018'],
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
	color:[ '#1753fc ', '#32cafe']
  };

  var chart6 = document.getElementById('echart6');
  var barChart6 = echarts.init(chart6);
  barChart6.setOption(option6);


  /*-----echart7-----*/

  var chartdata4 = [
    {
      name: 'data',
      type: 'line',
      data: [20, 20, 36, 18, 15, 20, 25, 20]
    }
  ];

  var option7 = {
    grid: {
      top: '6',
      right: '0',
      bottom: '17',
      left: '25',
    },
    xAxis: {
      data: [ '2011', '2012', '2013', '2014', '2015', '2016','2017', '2018'],
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
    series: chartdata4,
	color:[ '#1753fc ']
  };

  var chart7 = document.getElementById('echart7');
  var lineChart = echarts.init(chart7);
  lineChart.setOption(option7);


  /*-----echart8-----*/
  var chartdata5 = [
    {
      name: 'data',
      type: 'line',
      smooth: true,
      data: [20, 20, 36, 18, 15, 20, 25, 20]
    }
  ];

  var option8 = {
    grid: {
      top: '6',
      right: '0',
      bottom: '17',
      left: '25',
    },
    xAxis: {
      data: [ '2011', '2012', '2013', '2014', '2015', '2016','2017', '2018'],
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
    series: chartdata5,
    color:[ '#32cafe']
  };

  var chart8 = document.getElementById('echart8');
  var lineChart2 = echarts.init(chart8);
  lineChart2.setOption(option8);

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
			data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],
			textStyle: {
				color: 'rgba(0,0,0,0.3)'
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
				name: 'Jan'
			}, {
				value: 5,
				name: 'Feb'
			}, {
				value: 15,
				name: 'Mar'
			}, {
				value: 25,
				name: 'Apr'
			}, {
				value: 20,
				name: 'May'
			}, {
				value: 25,
				name: 'Jun'
			}, {
				value: 30,
				name: 'Jul'
			}, {
				value: 40,
				name: 'Aug'
			}]
		}, ],
		color: ['#ed2a00', '#004ced', '#00eda1', '#ed00c3', '#ad59ff', ' #00b3ff', '#00d9bf', '#fc0']
	};
	myChart2.setOption(option2);
	/*--echart-1---*/

	/*--echart-2---*/
	var myChart6 = echarts.init(document.getElementById('echart-2'));
	var base = +new Date(1968, 9, 3);
	var oneDay = 24 * 3600 * 1000;
	var date = [];
	var data = [Math.random() * 300];
	for (var i = 1; i < 20000; i++) {
		var now = new Date(base += oneDay);
		date.push([now.getFullYear(), now.getMonth() + 1, now.getDate()].join('/'));
		data.push(Math.round((Math.random() - 0.5) * 20 + data[i - 1]));
	}
	var option6 = {
		tooltip: {
			trigger: 'axis',
			position: function(pt) {
				return [pt[0], '10%'];
			}
		},
		toolbox: {
			feature: {
				restore: {},
				saveAsImage: {}
			}
		},
		title: {
			left: 'center',
			text: '',
		},
		xAxis: {
			type: 'category',
			boundaryGap: false,
			data: date,
			axisLabel: {
				color: 'rgba(0,0,0,0.5)'
			},
		},
		yAxis: {
			type: 'value',
			boundaryGap: [0, '100%'],
			axisLine: {
				onZero: false,
				lineStyle: {
				  color: 'rgba(0,0,0,0.1)'
				}
			},
			axisLabel: {
				color: 'rgba(0,0,0,0.5)'
			},
			splitLine: {
				show: true,
				lineStyle: {
				  color: 'rgba(0,0,0,0.1)'
				}
			},
		},
		grid: {
			x: 40,
			y: 20,
			x2: 40,
			y2: 20
		},
		dataZoom: [{
			type: 'inside',
			start: 0,
			end: 10
		}, {
			start: 0,
			end: 10,
			handleSize: '100%',
			handleStyle: {
				color: '#fff',
				shadowBlur: 10,
				shadowColor: 'rgba(0, 0, 0, 0.6)',
				shadowOffsetX: 2,
				shadowOffsetY: 2
			},

		}],
		series: [{
			name: '',
			type: 'line',
			smooth: true,
			symbol: 'none',
			sampling: 'average',
			itemStyle: {
				color: '#23dbcf'
			},
			areaStyle: {
				color: new echarts.graphic.LinearGradient([{
					offset: 0,
					color: '#ad59ff'
				}, {
					offset: 1,
					color: '#7748fc'
				}])
			},
			data: data
		}],
		color: ['#ad59ff']
	};
	myChart6.setOption(option6);
	/*--echart-2---*/

	/*--echart-3---*/
	var myChart7 = echarts.init(document.getElementById('echart-3'));
	var option7 = {
		title: {
			text: '',
			subtext: '',
			x: 'center'
		},
		tooltip: {
			trigger: 'item',
			formatter: "{a} <br/>{b} : {c} ({d}%)"
		},
		toolbox: {
			feature: {
				restore: {},
				saveAsImage: {}
			}
		},
		legend: {
			x: 'center',
			y: 'bottom',
			data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],
			textStyle: {
				color: 'rgba(0,0,0,0.3)'
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
					type: ['pie', 'funnel']
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
			radius: [30, 110],
			center: ['50%', '50%'],
			roseType: 'area',
			data: [{
				value: 10,
				name: 'Jan'
			}, {
				value: 5,
				name: 'Feb'
			}, {
				value: 15,
				name: 'Mar'
			}, {
				value: 25,
				name: 'Apr'
			}, {
				value: 20,
				name: 'May'
			}, {
				value: 35,
				name: 'Jun'
			}, {
				value: 30,
				name: 'Jul'
			}, {
				value: 40,
				name: 'Aug'
			}]
		}],
		color: ['#ed2a00', '#004ced', '#00eda1', '#ed00c3', '#ad59ff', ' #00b3ff', '#00d9bf', '#fc0']
	};
	myChart7.setOption(option7);
	/*--echart-3---*/

	/*--echart-4---*/
	var myChart8 = echarts.init(document.getElementById('echart-4'));
	var option8 = {
		tooltip: {
			formatter: "{a} <br/>{b} : {c}%"
		},
		toolbox: {
			feature: {
				restore: {},
				saveAsImage: {}
			}
		},
		series: [{
			name: '',
			type: 'gauge',
			splitNumber: 10,
			splitLine: {
				show: true,
				lineStyle: {
				  color: 'rgba(0,0,0,0.1)'
				}
			},
			axisLine: {
				lineStyle: {
					color: [
						[0.2, '#ad59ff'],
						[0.8, '#00d9bf'],
						[1, '#fc0']
					],
					width: 20
				}
			},
			axisTick: {
				splitNumber: 10,
				length: 12,
				lineStyle: {
					color: 'auto'
				}
			},
			detail: {
				formatter: '{value}%'
			},
			data: [{
				value: 50,
				name: ''
			}],
		}],
	};
	setInterval(function() {
		option11.series[0].data[0].value = (Math.random() * 100).toFixed(2) - 0;
		myChart11.setOption(option10, true);
	}, 2000);
	myChart8.setOption(option8);
	/*--echart-4 ---*/

});