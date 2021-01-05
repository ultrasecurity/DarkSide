/*---- chart----*/
$(function(e){
  'use strict';

 var bar1 = new Rickshaw.Graph({
    element: document.querySelector('#chart'),
    renderer: 'bar',
    max: 80,
    series: [{
      data: [
        { x: 0, y: 50 },
        { x: 1, y: 59 },
        { x: 2, y: 48 },
        { x: 3, y: 40 },
        { x: 4, y: 42 },
        { x: 5, y: 50 },
        { x: 6, y: 30 },
        { x: 7, y: 20 },
        { x: 8, y: 30 },
        { x: 9, y: 35 },
        { x: 10, y: 45 },
        { x: 11, y: 30 },
        { x: 12, y: 50 },
        { x: 13, y: 35 }
      ],
      color: '#26eda2'
    }]
  });
  bar1.render();

  // Responsive Mode
  new ResizeSensor($('.my-md-5'), function(){
    bar1.configure({
      width: $('#chart').width(),
      height: $('#chart').height()
    });
    bar1.render();
  });
});
  
 /*---- chart1----*/ 
$(function(e){
  'use strict';
	var seriesData = [ [], [], [] ];
	var random = new Rickshaw.Fixtures.RandomData(150);

	for (var i = 0; i < 700; i++) {
		random.addData(seriesData);
	}

	// instantiate our graph!

	var graph = new Rickshaw.Graph( {
		element: document.getElementById("chart1"),
		max: 400,
		renderer: 'area',
		series: [
			{
				color: "#0061da",
				data: seriesData[0],
				name: 'New York'
			}, {
				color: "#a01414",
				data: seriesData[1],
				name: 'London'
			}, {
				color: "#6060c0",
				data: seriesData[2],
				name: 'Tokyo'
			}
		]
	} );

	graph.render();

	var legend = new Rickshaw.Graph.Legend( {
		graph: graph,
		element: document.getElementById('legend')

	} );

});

/*---- chart2----*/
$(function(e){
  'use strict';
	/*---chart2---*/
	var graph = new Rickshaw.Graph({
		unstack: true,
		element: document.querySelector("#chart2"),
		min: 'auto',
		renderer: 'bar',
		series: [ {
			color: '#0061da',
			data: [ { x: 0, y: 20 }, { x: 1, y: 3 }, { x: 2, y: 15 }, { x: 3, y: 42 } ]
		}, {
			color: '#6060c0',
			data: [ { x: 0, y: 12 }, { x: 1, y: -20 }, { x: 2, y: 18 }, { x: 3, y: 8 } ]
		} ]
	});

	graph.render();
	
	var seriesData = [ [], [], [] ];
	var random = new Rickshaw.Fixtures.RandomData(150);

	for (var i = 0; i < 200; i++) {
		random.addData(seriesData);
		seriesData[0][i].r = 0|Math.random() * 2 + 8
		seriesData[1][i].r = 0|Math.random() * 5 + 5
		seriesData[2][i].r = 0|Math.random() * 8 + 2
	}

	/*---- chart3----*/

	var graph = new Rickshaw.Graph( {
		element: document.getElementById("chart3"),
		min: 'auto',
		renderer: 'scatterplot',
		series: [
			{
				color: "#0061da",
				data: seriesData[0],
				opacity: 0.7
			}, {
				color: "#26eda2",
				data: seriesData[1],
				opacity: 0.6
			}, {
				color: "#fc7303",
				data: seriesData[2]
			}
		]
	} );

	graph.renderer.dotSize = 5;
	new Rickshaw.Graph.HoverDetail({ graph: graph });
	graph.render();
	
	/*---- chart 4----*/
	var graph = new Rickshaw.Graph( {
		element: document.querySelector("#chart4"), 
			series: [{
				color: '#0061da',
				data: [ 
					{ x: 0, y: 40 }, 
					{ x: 1, y: 49 }, 
					{ x: 2, y: 38 }, 
					{ x: 3, y: 30 }, 
					{ x: 4, y: 32 } ]
			}]
		});
	graph.render();
	
	/*---- chart 5----*/
	var graph = new Rickshaw.Graph( {
	element: document.getElementById("chart5"),
	renderer: 'line',
			series: [
				{
					data: [ { x: 0, y: 100 }, { x: 1, y: 890 }, { x: 2, y: 38 }, { x: 3, y: 70 }, { x: 4, y: 32 } ],
					color: "#0061da"
				}, {
					data: [ { x: 0, y: 100 }, { x: 1, y: 500 }, { x: 2, y: 100 }, { x: 3, y: 520 }, { x: 4, y: 133 } ],
					color: "#26eda2"
				}, {
					data: [ { x: 0, y: 150 }, { x: 1, y: 390 }, { x: 2, y: 1000 }, { x: 3, y: 200 }, { x: 4, y: 230 } ],
					color: "#fc7303"
				}
			]
		} );

		graph.render();

	
	var random = new Rickshaw.Fixtures.RandomData(12 * 60 * 60);

	var series = [[]];

	for (var i = 0; i < 200; i++) {
	  random.addData(series);
	}
	var data = series[0]

	var min = Number.MAX_VALUE;
	var max = Number.MIN_VALUE;
	for (i = 0; i < series[0].length; i++) {
	  min = Math.min(min, series[0][i].y);
	  max = Math.max(max, series[0][i].y);
	}
	var logScale = d3.scale.log().domain([min/4, max]);
	var linearScale = d3.scale.linear().domain([min, max]).range(logScale.range());
	
	
	/*---- chart 6----*/
	var graph = new Rickshaw.Graph( {
	  element: document.getElementById("chart6"),
	  renderer: 'line',
	  series: [
		{
		  color: '#0061da',
		  data: JSON.parse(JSON.stringify(data)),
		  name: 'Log View',
		  scale: logScale
		},
		{
		  color: '#26eda2',
		  data: JSON.parse(JSON.stringify(data)),
		  name: 'Linear View',
		  scale: linearScale
		}
	  ]
	} );
	new Rickshaw.Graph.HoverDetail(
	{
	  graph: graph
	} );

	graph.render();
	
	/*---- chart 7----*/
	var graph = new Rickshaw.Graph( {
	element: document.getElementById("chart7"),
	renderer: 'line',
	series: [
		{
			data: [ { x: 0, y: 15 }, { x: 1, y: 25 }, { x: 2, y: 38 }, { x: 3, y: 30 }, { x: 4, y: 32 } ],
			color: '#0061da',
			strokeWidth: 10,
		}, {
			data: [ { x: 0, y: 19 }, { x: 1, y: 22 }, { x: 2, y: 32 }, { x: 3, y: 20 }, { x: 4, y: 21 } ],
			color: '#26eda2',
			strokeWidth: 10,
		}, {
			data: [ { x: 0, y: 39 }, { x: 1, y: 32 }, { x: 2, y: 12 }, { x: 3, y: 5 }, { x: 4, y: 12 } ],
			color: '#3985e5',
			strokeWidth: 15,
			opacity: 0.7
		}
	]
} );

graph.render();
});
