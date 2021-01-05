$(function(e){
  'use strict'

		//Sparkline charts
			$(".sparkline_one").sparkline([2, 4, 3, 4, 5, 4, 5, 4, 3, 4, 5, 6, 4, 5, 6, 3, 5, 4, 5, 4, 5, 4, 3, 4, 5, 6, 7, 5, 4, 3, 5, 6], {
				type: 'bar',
				height: '125',
				barWidth: 13,
				colorMap: {

				},
				barSpacing: 2,
				barColor: '#00bcd4'
			});


			$(".sparkline_two").sparkline([2, 4, 3, 4, 5, 4, 5, 4, 3, 4, 5, 6, 7, 5, 4, 3, 5, 6], {
				type: 'bar',
				height: '40',
				barWidth: 9,
				colorMap: {
				},
				barSpacing: 2,
				barColor: '#00e682'
			});


			$(".sparkline_three").sparkline([2, 4, 3, 4, 5, 4, 5, 4, 3, 4, 5, 6, 7, 5, 4, 3, 5, 6], {
				type: 'line',
				width: '260',
				height: '90',
				lineColor: '#22e840',
				fillColor: '#c2efc9',
				lineWidth: 2,
				spotColor: '#00e682',
				minSpotColor: '#00e682'
			});


			$(".sparkline11").sparkline([3, 4, 3, 4, 5, 4, 5, 4, 3, 4, 6, 2, 4], {
				type: 'bar',
				height: '43',
				barWidth: 5,
				colorMap: {
					'7': '#a1a1a1'
				},
				barSpacing: 1,
				barColor: '#920b7f'
			});
			
			$(".sparkline12").sparkline([3, 4, 3, 4, 5, 4, 5, 4, 3, 4, 6, 2, 4, 3, 4, 5, 4, 5, 4, 3], {
				type: 'bar',
				height: '43',
				barWidth: 12,
				colorMap: {
					'7': '#a1a1a1'
				},
				barSpacing: 1,
				barColor: '#ffa22b'
			});
			$(".sparkline11a").sparkline([9, 6, 4, 9, 3, 5, 2, 4, 8, 5, 9, 2, 4, 3, 4, 5, 4, 5, 4, 3], {
				type: 'bar',
				height: '180',
				barWidth: 10,
				colorMap: {
					'7': '#a1a1a1'
				},
				barSpacing: 1,
				barColor: '#5458b3 '
			});
			$(".sparkline11b").sparkline([3, 4, 3, 4, 5, 4, 5, 4, 3, 4, 6, 2, 4, 3, 4, 5, 4, 5, 4, 3], {
				type: 'bar',
				height: '43',
				barWidth: 12,
				colorMap: {
					'7': '#a1a1a1'
				},
				barSpacing: 1,
				barColor: '#ffa22b'
			});
			$(".sparkline11c").sparkline([3, 4, 3, 4, 5, 4, 5, 4, 3, 4, 6, 2, 4, 3, 4, 5, 4, 5, 4, 3], {
				type: 'bar',
				width: '200',
				height: '43',
				barWidth: 12,
				colorMap: {
					'7': '#a1a1a1'
				},
				barSpacing: 1,
				barColor: '#ffa22b'
			});
			$(".sparkline14").sparkline([3, 4, 3, 4, 5, 4, 5, 4, 3, 4, 6, 2, 4, 3, 4, 5, 4, 5, 4, 3], {
				type: 'bar',
				width: '270',
				height: '93',
				barWidth: 12,
				colorMap: {
					'7': '#a1a1a1'
				},
				barSpacing: 1,
				barColor: '#ffa22b'
			});
			$(".sparkline15").sparkline([3, 4, 3, 4, 5, 4, 5, 4, 3, 4, 6, 2, 4, 3, 4, 5, 4, 5, 4, 3], {
				type: 'bar',
				width: '270',
				height: '93',
				barWidth: 12,
				colorMap: {
					'7': '#a1a1a1'
				},
				barSpacing: 1,
				barColor: '#5458b3'
			});
			
			$(".sparkline16").sparkline([ 5, 4, 3, 5, 6, 2, 4, 3, 4,4, 6, 2, 4], {
				type: 'bar',
				width: '270',
				height: '93',
				barWidth: 8,
				colorMap: {
					'7': '#a1a1a1'
				},
				barSpacing: 6,
				barColor: '#ffb209'
			});
			
			$(".sparkline17").sparkline([ 5, 4, 3, 4, 8, 5, 4, 3, 5, 6, 2, 4, 3, 4, 5, 4, 5, 4], {
				type: 'bar',
				width: '200',
				height: '130',
				barWidth: 9,
				colorMap: {
					'7': '#a1a1a1'
				},
				barSpacing: 7,
				barColor: '#ffb209'
			});
			
			$(".sparkline22").sparkline([2, 4, 3, 4, 7, 5, 4, 3, 5, 6, 2, 4, 3, 4, 5, 4, 5, 4, 3, 4, 6], {
				type: 'line',
				height: '40',
				width: '100',
				lineColor: '#3e1088',
				fillColor: '#ffffff',
				lineWidth: 3,
				spotColor: '#ffa22b',
				minSpotColor: '#ffa22b'
			});

			$(".sparkline23").sparkline([2, 4, 3, 4, 7, 5, 4, 3, 5, 6, 2, 4, 3, 4, 5, 4, 5, 4, 3, 4, 6], {
				type: 'line',
				height: '90',
				width: '260',
				lineColor: '#01b8ff',
				fillColor: '#ffffff',
				lineWidth: 3,
				spotColor: '#ffb209',
				minSpotColor: '#ffa22b'
			});


			
			
			$(".sparkline_bar28").sparkline([2, 4, 3, 4, 5, 4, 5, 4, 3, 4, 5, 6, 4, 5, 6, 3, 5], {
				type: 'bar',
				height: 80,
				width:250,
				colorMap: {
					'9': '#a1a1a1'
				},
				barColor: '#5458b3'
			});
			
			
			
			$(".sparkline_bar2").sparkline([2, 1, 3, 4, 3, 4, 3, 4, 3, 4, 3, 2, 1], {
				type: 'bar',
				height: 40,
				width:120,
				colorMap: {
					'9': '#a1a1a1'
				},
				barColor: '#01b8ff'
			});
			
			$(".sparkline_bar3").sparkline([5, 2, 4, 5, 8, 3, 4, 6, 8, 3, 3, 2, 3], {
				type: 'bar',
				height: 40,
				width:120,
				colorMap: {
					'9': '#a1a1a1'
				},
				barColor: '#f47b25'
			});
			
            $(".sparkline_bar4").sparkline([5, 2, 4, 5, 8, 3, 4, 6, 8, 3, 3, 2, 3], {
				type: 'bar',
				height: 40,
				width:120,
				colorMap: {
					'9': '#a1a1a1'
				},
				barColor: '#ff473d'
			});

			$(".sparkline_area").sparkline([2, 4, 3, 4, 5, 4, 5, 4, 3, 4, 5, 6], {
				type: 'line',
				width: 50,
				height: 50,
				lineColor: '#f47b25',
				fillColor: '#f5b78a',
				spotColor: '#f44336',
				minSpotColor: '#f44336',
				maxSpotColor: '#f44336',
				highlightSpotColor: '#f44336',
				highlightLineColor: '#f44336',
				spotRadius: 2.5,
				width: 85
			});
			
			$(".sparkline_area2").sparkline([5, 2, 4, 5, 8, 3, 4, 6, 8, 3, 3, 2], {
				type: 'line',
				width: 50,
				height: 90,
				lineColor: '#b03cd5',
				fillColor: '#e8baf7',
				spotColor: '#f44336',
				minSpotColor: '#f44336',
				maxSpotColor: '#f44336',
				highlightSpotColor: '#f44336',
				highlightLineColor: '#f44336',
				spotRadius: 2.5,
				width: 260
			});
			
			$(".sparkline_area1").sparkline([2, 4, 3, 4, 5, 4, 5, 4, 3, 4, 5, 6, 4, 5, 6, 3, 5], {
				type: 'line',
				width: 50,
				height: 50,
				lineColor: '#ffa22b',
				fillColor: '#ffa22b',
				spotColor: '#f44336',
				minSpotColor: '#f44336',
				maxSpotColor: '#f44336',
				highlightSpotColor: '#f44336',
				highlightLineColor: '#f44336',
				spotRadius: 2.5,
				width: 280,
				height:165
			});
           

			$(".sparkline_line").sparkline([2, 4, 3, 4, 5, 4, 5, 4, 3, 4, 5, 6, 4, 5, 6, 3, 5], {
				type: 'line',
				lineColor: '#5458b3',
				fillColor: '#a9ace6',
				width: 80,
				height: 50,
				spotColor: '#f44336',
				minSpotColor: '#f44336'
			});


			$(".sparkline_pie").sparkline([1, 1, 2,1], {
				type: 'pie',
				width: 50,
				height: 50,
				sliceColors: ['#f47b25','#3e1088','#920b7f']
			});
			
			$(".sparkline_pie2").sparkline([1, 1, 2, 1], {
				type: 'pie',
				width: 140,
				height: 140,
				sliceColors: ['#01b8ff','#f47b25','#5458b3','#ffb209']
			});


			$(".sparkline_discreet").sparkline([4, 6, 7, 7, 4, 3, 2, 1, 4, 4, 2, 4, 3, 7, 8, 9, 7, 6, 4, 3], {
				type: 'discrete',
				barWidth: 3,
				lineColor: '#5458b3',
				width: 80,
				height: 50,
			});

	});
		//---Knob chart
			$(".knob").knob({
				  change: function(value) {
					//console.log("change : " + value);
				  },
				  release: function(value) {
					//console.log(this.$.attr('value'));
					console.log("release : " + value);
				  },
				  cancel: function() {
					console.log("cancel : ", this);
				  },
				  /*format : function (value) {
				   return value + '%';
				   },*/
				  draw: function() {

					// "tron" case
					if (this.$.data('skin') == 'tron') {

					  this.cursorExt = 0.3;

					  var a = this.arc(this.cv) // Arc
						,
						pa // Previous arc
						, r = 1;

					  this.g.lineWidth = this.lineWidth;

					  if (this.o.displayPrevious) {
						pa = this.arc(this.v);
						this.g.beginPath();
						this.g.strokeStyle = this.pColor;
						this.g.arc(this.xy, this.xy, this.radius - this.lineWidth, pa.s, pa.e, pa.d);
						this.g.stroke();
					  }

					  this.g.beginPath();
					  this.g.strokeStyle = r ? this.o.fgColor : this.fgColor;
					  this.g.arc(this.xy, this.xy, this.radius - this.lineWidth, a.s, a.e, a.d);
					  this.g.stroke();

					  this.g.lineWidth = 2;
					  this.g.beginPath();
					  this.g.strokeStyle = this.o.fgColor;
					  this.g.arc(this.xy, this.xy, this.radius - this.lineWidth + 1 + this.lineWidth * 2 / 3, 0, 2 * Math.PI, false);
					  this.g.stroke();

					  return false;
					}
				  }

				});



	//gauge chart
	var chart_gauge_settings = {
		  lines: 12,
		  angle: 0,
		  lineWidth: 0.4,
		  pointer: {
			  length: 0.75,
			  strokeWidth: 0.042,
			  color: '#e3edfc'
		  },
		  limitMax: 'false',
		  colorStart: '#ffa22b',
		  colorStop: '#ffa22b',
		  strokeColor: '#e9e9e9',
		  generateGradient: true
	  };


		if ($('#chart_gauge_01').length){

			var chart_gauge_01_elem = document.getElementById('chart_gauge_01');
			var chart_gauge_01 = new Gauge(chart_gauge_01_elem).setOptions(chart_gauge_settings);

		}


		if ($('#gauge-text').length){

			chart_gauge_01.maxValue = 6000;
			chart_gauge_01.animationSpeed = 32;
			chart_gauge_01.set(3200);
			chart_gauge_01.setTextField(document.getElementById("gauge-text"));

		}

		if ($('#chart_gauge_02').length){

			var chart_gauge_02_elem = document.getElementById('chart_gauge_02');
			var chart_gauge_02 = new Gauge(chart_gauge_02_elem).setOptions(chart_gauge_settings);

		}
		if ($('#gauge-text2').length){

			chart_gauge_02.maxValue = 9000;
			chart_gauge_02.animationSpeed = 32;
			chart_gauge_02.set(2400);
			chart_gauge_02.setTextField(document.getElementById("gauge-text2"));

		}

		if ($('#chart_gauge_03').length){

			var chart_gauge_03_elem = document.getElementById('chart_gauge_03');
			var chart_gauge_03 = new Gauge(chart_gauge_03_elem).setOptions(chart_gauge_settings);

		}
		if ($('#gauge-text3').length){

			chart_gauge_03.maxValue = 6000;
			chart_gauge_03.animationSpeed = 53;
			chart_gauge_03.set(5400);
			chart_gauge_03.setTextField(document.getElementById("gauge-text3"));

		}




