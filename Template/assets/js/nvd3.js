/*-----nvd3-chart1-----*/

historicalBarChart = [
        {
            key: "Cumulative Return",
            values: [
                {
                    "label" : "A" ,
                    "value" : 24,
					"color":"#1753fc "
                } ,
                {
                    "label" : "B" ,
                    "value" : 10,
					"color":"#fdb901"
                } ,
                {
                    "label" : "C" ,
                    "value" : 35,
					"color":"#fc9197"
                } ,
                {
                    "label" : "D" ,
                    "value" : 150,
					"color":"#32cafe"
                } ,
                {
                    "label" : "E" ,
                    "value" : 120,
					"color":"#28afd0"
                } ,
                {
                    "label" : "F" ,
                    "value" : 95,
					"color":"#1753fc "
                } ,
                {
                    "label" : "G" ,
                    "value" : 13,
					"color":"#17a2b8"
                } ,
                {
                    "label" : "H" ,
                    "value" : 5,
					"color":"#ecb403"
                }
            ]
        }
    ];

    nv.addGraph(function() {
        var chart = nv.models.discreteBarChart()
            .x(function(d) { return d.label })
            .y(function(d) { return d.value })
            .staggerLabels(true)
            //.staggerLabels(historicalBarChart[0].values.length > 8)
            .showValues(true)
            .duration(250)
            ;

        d3.select('#nvd3-chart1 svg')
            .datum(historicalBarChart)
            .call(chart);

        nv.utils.windowResize(chart.update);
        return chart;
    });


/*-----nvd3-chart2-----*/
 var chart;
    nv.addGraph(function() {
        chart = nv.models.historicalBarChart();
        chart
            .margin({left: 50, bottom: 50})
            .useInteractiveGuideline(true)
            .duration(250)
            ;

        // chart sub-models (ie. xAxis, yAxis, etc) when accessed directly, return themselves, not the parent chart, so need to chain separately
        chart.xAxis
            .axisLabel("")
            .tickFormat(d3.format(',.1f'));

        chart.yAxis
            .axisLabel('')
            .tickFormat(d3.format(',.2f'));

        chart.showXAxis(true);

        d3.select('#nvd3-chart2')
            .datum(sinData())
            .transition()
            .call(chart);

        nv.utils.windowResize(chart.update);
        chart.dispatch.on('stateChange', function(e) { nv.log('New State:', JSON.stringify(e)); });
        return chart;
    });

    //Simple test data generators
    function sinAndCos() {
        var sin = [],
            cos = [];

        for (var i = 0; i < 10; i++) {
            sin.push({x: i, y: Math.sin(i/10)});
            cos.push({x: i, y: .5 * Math.cos(i/10)});
        }

        return [
            {values: sin, key: "Sine Wave", color: "#1753fc "},
            {values: cos, key: "Cosine Wave", color: "#1753fc "}
        ];
    }

    function sinData() {
        var sin = [];

        for (var i = 0; i < 10; i++) {
            sin.push({x: i, y: Math.sin(i/10) * Math.random() * 10});
        }

        return [{
            values: sin,
            key: "Sine Wave",
            color: "#1753fc "
        }];
    }


/*-----nvd3-chart3-----*/
	nv.addGraph(function() {
        var chart = nv.models.lineChart();
        var fitScreen = false;
        var width = 600;
        var height = 300;
        var zoom = 1;

        chart.useInteractiveGuideline(true);
        chart.xAxis
            .tickFormat(d3.format(',r'));

        chart.lines.dispatch.on("elementClick", function(evt) {
            console.log(evt);
        });

        chart.yAxis
            .axisLabel('Voltage (v)')
            .tickFormat(d3.format(',.2f'));

        d3.select('#nvd3-chart3 svg')
            .attr('perserveAspectRatio', 'xMinYMid')
            .attr('width', width)
            .attr('height', height)
            .datum(sinAndCos());

        setChartViewBox();
        resizeChart();

        nv.utils.windowResize(resizeChart);

        d3.select('#zoomIn').on('click', zoomIn);
        d3.select('#zoomOut').on('click', zoomOut);


        function setChartViewBox() {
            var w = width * zoom,
                h = height * zoom;

            chart
                .width(w)
                .height(h);

            d3.select('#nvd3-chart3 svg')
                .attr('viewBox', '0 0 ' + w + ' ' + h)
                .transition().duration(500)
                .call(chart);
        }

        function zoomOut() {
            zoom += .25;
            setChartViewBox();
        }

        function zoomIn() {
            if (zoom <= .5) return;
            zoom -= .25;
            setChartViewBox();
        }

        // This resize simply sets the SVG's dimensions, without a need to recall the chart code
        // Resizing because of the viewbox and perserveAspectRatio settings
        // This scales the interior of the chart unlike the above
        function resizeChart() {
            var container = d3.select('#nvd3-chart3');
            var svg = container.select('svg');

            if (fitScreen) {
                // resize based on container's width AND HEIGHT
                var windowSize = nv.utils.windowSize();
                svg.attr("width", windowSize.width);
                svg.attr("height", windowSize.height);
            } else {
                // resize based on container's width
                var aspect = chart.width() / chart.height();
                var targetWidth = parseInt(container.style('width'));
                svg.attr("width", targetWidth);
                svg.attr("height", Math.round(targetWidth / aspect));
            }
        }
        return chart;
    });

    function sinAndCos() {
        var sin = [],
            cos = [];

        for (var i = 0; i < 100; i++) {
            sin.push({x: i, y: Math.sin(i/10) });
            cos.push({x: i, y: .5 * Math.cos(i/10)});
        }

        return [
            {
                values: sin,
                key: "Sine Wave",
                color: "#1753fc "
            },
            {
                values: cos,
                key: "Cosine Wave",
                color: "#32cafe"
            }
        ];
    }




