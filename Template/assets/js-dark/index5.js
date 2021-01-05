$(function(e){
  'use strict'

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
          color: 'rgba(255,255,255,0.05)'
        }
      },
      axisLabel: {
        fontSize: 10,
        color: '#546172'
      }
    },
    yAxis: {
      splitLine: {
        lineStyle: {
          color: 'rgba(255,255,255,0.05)'
        }
      },
      axisLine: {
        lineStyle: {
          color: 'rgba(255,255,255,0.05)'
        }
      },
      axisLabel: {
        fontSize: 10,
        color: '#546172'
      }
    },
    series: chartdata5,
    color:[ '#9258f1']
  };

  var chart8 = document.getElementById('echart8');
  var lineChart2 = echarts.init(chart8);
  lineChart2.setOption(option8);
  
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
          color: 'rgba(255,255,255,0.05)'
        }
      },
      axisLabel: {
        fontSize: 10,
        color: '#546172'
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
          color: 'rgba(255,255,255,0.05)'
        }
      },
      axisLine: {
        lineStyle: {
          color: 'rgba(255,255,255,0.05)'
        }
      },
      axisLabel: {
        fontSize: 10,
        color: '#546172'
      }
    },
    series: chartdata,
    color:[ '#1753fc ','#fa626b', '#9258f1',]
  };

  barChart.setOption(option);

	/*---- morrisBar9----*/
	new Morris.Donut({
	  element: 'morrisBar9',
	  data: [
		{value: 35, label: 'Mens'},
		{value: 25, label: 'Womens'},
		{value: 15, label: 'Electronics'},
		{value: 15, label: 'Baby&Kids'},
		{value: 10, label: 'Home&Furniture'},
	  ],
	   backgroundColor: '#293544',
		labelColor: '#d3d8e2',
	  colors: [
		'#1753fc ', '#9258f1', '#fdb901', '#fc9197', '#17a2b8', '#ecb403'

	  ],
	  formatter: function (x) { return x + "%"}
	});

});










