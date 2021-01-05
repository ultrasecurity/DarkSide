/*---- placeholder1----*/
$(function() {
		var sin = [], cos = [];
		for (var i = 0; i < 14; i += 0.1) {
			sin.push([i, Math.sin(i)]);
			cos.push([i, Math.cos(i)]);
		}

		plot = $.plot("#placeholder1", [
			{ data: sin },
			{ data: cos}

		], {
			series: {
				lines: {
					show: true
				}
			},
			 lines: {
				show: true,
				fill: true,
				fillColor: { colors: [{ opacity: 0.7 }, { opacity: 0.7}] }
			},
			crosshair: {
				mode: "x"
			},
			grid: {
				hoverable: false,
				autoHighlight: false,
				borderColor: "rgba(0,0,0,0.03)",
				verticalLines:false,
				horizontalLines:false
			},
			colors: ['#1753fc ', '#32cafe'],
			yaxis: {
				min: -1.2,
				max: 1.2,
				tickLength: 0
			},
			xaxis: {
			  tickLength: 0
			}
		});
});

/*---- placeholder2----*/
$(function() {

		var sin = [],
			cos = [];

		for (var i = 0; i < 14; i += 0.5) {
			sin.push([i, Math.sin(i)]);
			cos.push([i, Math.cos(i)]);
		}

		var plot = $.plot("#placeholder2", [
			{ data: sin, label: "data1"},
			{ data: cos, label: "data2"}
		], {
			series: {
				lines: {
					show: true
				},
				points: {
					show: true
				}
			},
			grid: {
				hoverable: true,
				clickable: true,
				borderColor: "rgba(0,0,0,0.03)",
				verticalLines:false,
				horizontalLines:false
			},
			colors: ['#1753fc ', '#32cafe'],
			yaxis: {
				min: -1.2,
				max: 1.2,
				tickLength: 0
			},
			xaxis: {
			  tickLength: 0
			}
		});
});

/*---- placeholder3----*/
$(function() {

		var males = {"15%": [[2, 88.0], [3, 93.3], [4, 102.0], [5, 108.5], [6, 115.7], [7, 115.6], [8, 124.6], [9, 130.3], [10, 134.3], [11, 141.4], [12, 146.5], [13, 151.7], [14, 159.9], [15, 165.4], [16, 167.8], [17, 168.7], [18, 169.5], [19, 168.0]], "90%": [[2, 96.8], [3, 105.2], [4, 113.9], [5, 120.8], [6, 127.0], [7, 133.1], [8, 139.1], [9, 143.9], [10, 151.3], [11, 161.1], [12, 164.8], [13, 173.5], [14, 179.0], [15, 182.0], [16, 186.9], [17, 185.2], [18, 186.3], [19, 186.6]], "25%": [[2, 89.2], [3, 94.9], [4, 104.4], [5, 111.4], [6, 117.5], [7, 120.2], [8, 127.1], [9, 132.9], [10, 136.8], [11, 144.4], [12, 149.5], [13, 154.1], [14, 163.1], [15, 169.2], [16, 170.4], [17, 171.2], [18, 172.4], [19, 170.8]], "10%": [[2, 86.9], [3, 92.6], [4, 99.9], [5, 107.0], [6, 114.0], [7, 113.5], [8, 123.6], [9, 129.2], [10, 133.0], [11, 140.6], [12, 145.2], [13, 149.7], [14, 158.4], [15, 163.5], [16, 166.9], [17, 167.5], [18, 167.1], [19, 165.3]], "mean": [[2, 91.9], [3, 98.5], [4, 107.1], [5, 114.4], [6, 120.6], [7, 124.7], [8, 131.1], [9, 136.8], [10, 142.3], [11, 150.0], [12, 154.7], [13, 161.9], [14, 168.7], [15, 173.6], [16, 175.9], [17, 176.6], [18, 176.8], [19, 176.7]], "75%": [[2, 94.5], [3, 102.1], [4, 110.8], [5, 117.9], [6, 124.0], [7, 129.3], [8, 134.6], [9, 141.4], [10, 147.0], [11, 156.1], [12, 160.3], [13, 168.3], [14, 174.7], [15, 178.0], [16, 180.2], [17, 181.7], [18, 181.3], [19, 182.5]], "85%": [[2, 96.2], [3, 103.8], [4, 111.8], [5, 119.6], [6, 125.6], [7, 131.5], [8, 138.0], [9, 143.3], [10, 149.3], [11, 159.8], [12, 162.5], [13, 171.3], [14, 177.5], [15, 180.2], [16, 183.8], [17, 183.4], [18, 183.5], [19, 185.5]], "50%": [[2, 91.9], [3, 98.2], [4, 106.8], [5, 114.6], [6, 120.8], [7, 125.2], [8, 130.3], [9, 137.1], [10, 141.5], [11, 149.4], [12, 153.9], [13, 162.2], [14, 169.0], [15, 174.8], [16, 176.0], [17, 176.8], [18, 176.4], [19, 177.4]]};

		var females = {"15%": [[2, 84.8], [3, 93.7], [4, 100.6], [5, 105.8], [6, 113.3], [7, 119.3], [8, 124.3], [9, 131.4], [10, 136.9], [11, 143.8], [12, 149.4], [13, 151.2], [14, 152.3], [15, 155.9], [16, 154.7], [17, 157.0], [18, 156.1], [19, 155.4]], "90%": [[2, 95.6], [3, 104.1], [4, 111.9], [5, 119.6], [6, 127.6], [7, 133.1], [8, 138.7], [9, 147.1], [10, 152.8], [11, 161.3], [12, 166.6], [13, 167.9], [14, 169.3], [15, 170.1], [16, 172.4], [17, 169.2], [18, 171.1], [19, 172.4]], "25%": [[2, 87.2], [3, 95.9], [4, 101.9], [5, 107.4], [6, 114.8], [7, 121.4], [8, 126.8], [9, 133.4], [10, 138.6], [11, 146.2], [12, 152.0], [13, 153.8], [14, 155.7], [15, 158.4], [16, 157.0], [17, 158.5], [18, 158.4], [19, 158.1]], "10%": [[2, 84.0], [3, 91.9], [4, 99.2], [5, 105.2], [6, 112.7], [7, 118.0], [8, 123.3], [9, 130.2], [10, 135.0], [11, 141.1], [12, 148.3], [13, 150.0], [14, 150.7], [15, 154.3], [16, 153.6], [17, 155.6], [18, 154.7], [19, 153.1]], "mean": [[2, 90.2], [3, 98.3], [4, 105.2], [5, 112.2], [6, 119.0], [7, 125.8], [8, 131.3], [9, 138.6], [10, 144.2], [11, 151.3], [12, 156.7], [13, 158.6], [14, 160.5], [15, 162.1], [16, 162.9], [17, 162.2], [18, 163.0], [19, 163.1]], "75%": [[2, 93.2], [3, 101.5], [4, 107.9], [5, 116.6], [6, 122.8], [7, 129.3], [8, 135.2], [9, 143.7], [10, 148.7], [11, 156.9], [12, 160.8], [13, 163.0], [14, 165.0], [15, 165.8], [16, 168.7], [17, 166.2], [18, 167.6], [19, 168.0]], "85%": [[2, 94.5], [3, 102.8], [4, 110.4], [5, 119.0], [6, 125.7], [7, 131.5], [8, 137.9], [9, 146.0], [10, 151.3], [11, 159.9], [12, 164.0], [13, 166.5], [14, 167.5], [15, 168.5], [16, 171.5], [17, 168.0], [18, 169.8], [19, 170.3]], "50%": [[2, 90.2], [3, 98.1], [4, 105.2], [5, 111.7], [6, 118.2], [7, 125.6], [8, 130.5], [9, 138.3], [10, 143.7], [11, 151.4], [12, 156.7], [13, 157.7], [14, 161.0], [15, 162.0], [16, 162.8], [17, 162.2], [18, 162.8], [19, 163.3]]};

		var dataset = [
			{ label: "Female mean", data: females["mean"], lines: { show: true }, color: "rgb(50, 202, 254)" },
			{ id: "f15%", data: females["15%"], lines: { show: true, lineWidth: 0, fill: false }, color: "rgb(50, 202, 254)" },
			{ id: "f25%", data: females["25%"], lines: { show: true, lineWidth: 0, fill: 0.2 }, color: "rgb(50, 202, 254)", fillBetween: "f15%" },
			{ id: "f50%", data: females["50%"], lines: { show: true, lineWidth: 0.5, fill: 0.4, shadowSize: 0 }, color: "rgb(50, 202, 254)", fillBetween: "f25%" },
			{ id: "f75%", data: females["75%"], lines: { show: true, lineWidth: 0, fill: 0.4 }, color: "rgb(50, 202, 254)", fillBetween: "f50%" },
			{ id: "f85%", data: females["85%"], lines: { show: true, lineWidth: 0, fill: 0.2 }, color: "rgb(50, 202, 254)", fillBetween: "f75%" },

			{ label: "Male mean", data: males["mean"], lines: { show: true }, color: "rgb(255, 104, 92)" },
			{ id: "m15%", data: males["15%"], lines: { show: true, lineWidth: 0, fill: false }, color: "rgb(255, 104, 92)" },
			{ id: "m25%", data: males["25%"], lines: { show: true, lineWidth: 0, fill: 0.2 }, color: "rgb(255, 104, 92)", fillBetween: "m15%" },
			{ id: "m50%", data: males["50%"], lines: { show: true, lineWidth: 0.5, fill: 0.4, shadowSize: 0 }, color: "rgb(255, 104, 92)", fillBetween: "m25%" },
			{ id: "m75%", data: males["75%"], lines: { show: true, lineWidth: 0, fill: 0.4 }, color: "rgb(255, 104, 92)", fillBetween: "m50%" },
			{ id: "m85%", data: males["85%"], lines: { show: true, lineWidth: 0, fill: 0.2 }, color: "rgb(255, 104, 92", fillBetween: "m75%" }
		];

		$.plot($("#placeholder3"), dataset, {
			grid: {
				borderColor: "rgba(0,0,0,0.03)",
			},

			xaxis: {
				tickDecimals: 0,
				tickLength: 0
			},
			yaxis: {
				tickLength: 0,
				tickFormatter: function (v) {
					return v + " cm";
				}
			},
			legend: {
				position: "se"
			}
		});
});

/*---- placeholder4----*/
$(function() {

		// We use an inline data source in the example, usually data would
		// be fetched from a server

		var data = [],
			totalPoints = 300;

		function getRandomData() {

			if (data.length > 0)
				data = data.slice(1);

			// Do a random walk

			while (data.length < totalPoints) {

				var prev = data.length > 0 ? data[data.length - 1] : 50,
					y = prev + Math.random() * 10 - 5;

				if (y < 0) {
					y = 0;
				} else if (y > 100) {
					y = 100;
				}

				data.push(y);
			}

			var res = [];
			for (var i = 0; i < data.length; ++i) {
				res.push([i, data[i]])
			}

			return res;
		}

		var updateInterval = 30;
		$("#updateInterval").val(updateInterval).change(function () {
			var v = $(this).val();
			if (v && !isNaN(+v)) {
				updateInterval = +v;
				if (updateInterval < 1) {
					updateInterval = 1;
				} else if (updateInterval > 2000) {
					updateInterval = 2000;
				}
				$(this).val("" + updateInterval);
			}
		});

		var plot = $.plot("#placeholder4", [ getRandomData() ], {
			series: {
				shadowSize: 0	// Drawing is faster without shadows
			},
			grid: {
				borderColor: "rgba(0,0,0,0.03)",
			},
			colors: ["#1753fc "],
			yaxis: {
				min: 0,
				max: 100,
				tickLength: 0
			},
			xaxis: {
				tickLength: 0,
				show: false
			}
		});

		function update() {
			plot.setData([getRandomData()]);
			plot.draw();
			setTimeout(update, updateInterval);
		}

		update();

});

/*---- placeholder5----*/
$(function() {

		var d1 = [];
		for (var i = 0; i < 14; i += 0.5) {
			d1.push([i, Math.sin(i)]);
		}

		var d2 = [[0, 3], [4, 8], [8, 5], [9, 13]];

		var d3 = [];
		for (var i = 0; i < 14; i += 0.5) {
			d3.push([i, Math.cos(i)]);
		}

		var d4 = [];
		for (var i = 0; i < 14; i += 0.1) {
			d4.push([i, Math.sqrt(i * 10)]);
		}

		var d5 = [];
		for (var i = 0; i < 14; i += 0.5) {
			d5.push([i, Math.sqrt(i)]);
		}

		var d6 = [];
		for (var i = 0; i < 14; i += 0.5 + Math.random()) {
			d6.push([i, Math.sqrt(2*i + Math.sin(i) + 5)]);
		}

		$.plot("#placeholder5", [{

			data: d1,
			lines: { show: true, fill: true }
		}, {
			data: d2,
			bars: { show: true }
		}, {
			data: d3,
			points: { show: true }
		}, {
			data: d4,
			lines: { show: true }
		}, {
			data: d5,
			lines: { show: true },
			points: { show: true }
		}, {
			data: d6,
			lines: { show: true, steps: true }
		}]);
});

/*---- placeholder6----*/
$(function() {

		var d1 = [];
		for (var i = 0; i <= 10; i += 1) {
			d1.push([i, parseInt(Math.random() * 30)]);
		}

		var d2 = [];
		for (var i = 0; i <= 10; i += 1) {
			d2.push([i, parseInt(Math.random() * 30)]);
		}

		var d3 = [];
		for (var i = 0; i <= 10; i += 1) {
			d3.push([i, parseInt(Math.random() * 30)]);
		}

		var stack = 0,
			bars = true,
			lines = false,
			steps = false;

		function plotWithOptions() {
			$.plot("#placeholder6", [ d1, d2, d3 ], {
				series: {

					stack: stack,
					lines: {
						show: lines,
						fill: true,
						steps: steps
					},
					bars: {
						show: bars,
						barWidth: 0.6
					}
				},
				grid: {
					borderColor: "rgba(0,0,0,0.03)",
				},
				colors: ['#1753fc ', '#32cafe'],
				yaxis: {
					tickLength: 0
				},
				xaxis: {
					tickLength: 0,
					show: false
				}
			});
		}

		plotWithOptions();

		$(".stackControls button").click(function (e) {
			e.preventDefault();
			stack = $(this).text() == "With stacking" ? true : null;
			plotWithOptions();
		});

		$(".graphControls button").click(function (e) {
			e.preventDefault();
			bars = $(this).text().indexOf("Bars") != -1;
			lines = $(this).text().indexOf("Lines") != -1;
			steps = $(this).text().indexOf("steps") != -1;
			plotWithOptions();
		});


	});
	$(function() {
		var data = [],
			series = Math.floor(Math.random() * 4) + 3;

		for (var i = 0; i < series; i++) {
			data[i] = {
				label: "Series" + (i + 1),
				data: Math.floor(Math.random() * 100) + 1
			}
		}

		var placeholder = $("#placeholder");

		$("#example-1").click(function() {

			placeholder.unbind();

			$("#title").text("Default pie chart");
			$("#description").text("The default pie chart with no options set.");

			$.plot(placeholder, data, {
				series: {
					pie: {
						show: true
					}

				},
				colors: ['#1753fc ', '#32cafe', '#45aaf2', '#ecb403', '#e86a91'],

			});

		});

		$("#example-2").click(function() {

			placeholder.unbind();

			$("#title").text("Default without legend");
			$("#description").text("The default pie chart when the legend is disabled. Since the labels would normally be outside the container, the chart is resized to fit.");

			$.plot(placeholder, data, {
				series: {
					pie: {
						show: true
					}
				},
				colors: ['#1753fc ', '#32cafe', '#45aaf2', '#ecb403', '#e86a91'],
				legend: {
					show: false
				}
			});

		});

		$("#example-3").click(function() {

			placeholder.unbind();

			$("#title").text("Custom Label Formatter");
			$("#description").text("Added a semi-transparent background to the labels and a custom labelFormatter function.");

			$.plot(placeholder, data, {
				series: {
					pie: {
						show: true,
						radius: 1,
						label: {
							show: true,
							radius: 1,
							formatter: labelFormatter,
							background: {
								opacity: 0.8
							}
						}
					}
				},
				colors: ['#1753fc ', '#32cafe', '#45aaf2', '#ecb403', '#e86a91'],
				legend: {
					show: false
				}
			});
		});

		$("#example-4").click(function() {

			placeholder.unbind();

			$("#title").text("Label Radius");
			$("#description").text("Slightly more transparent label backgrounds and adjusted the radius values to place them within the pie.");

			$.plot(placeholder, data, {
				series: {
					pie: {
						show: true,
						radius: 1,
						label: {
							show: true,
							radius: 3/4,
							formatter: labelFormatter,
							background: {
								opacity: 0.5
							}
						}
					}
				},
				colors: ['#1753fc ', '#32cafe', '#45aaf2', '#ecb403', '#64E572'],
				legend: {
					show: false
				}
			});
		});

		$("#example-5").click(function() {

			placeholder.unbind();

			$("#title").text("Label Styles #1");
			$("#description").text("Semi-transparent, black-colored label background.");

			$.plot(placeholder, data, {
				series: {
					pie: {
						show: true,
						radius: 1,
						label: {
							show: true,
							radius: 3/4,
							formatter: labelFormatter,
							background: {
								opacity: 0.5,
								color: "#000"
							}
						}
					}
				},
				colors: ['#1753fc ', '#32cafe', '#45aaf2', '#ecb403', '#e86a91'],
				legend: {
					show: false
				}
			});
		});

		$("#example-6").click(function() {

			placeholder.unbind();

			$("#title").text("Label Styles #2");
			$("#description").text("Semi-transparent, black-colored label background placed at pie edge.");

			$.plot(placeholder, data, {
				series: {
					pie: {
						show: true,
						radius: 3/4,
						label: {
							show: true,
							radius: 3/4,
							formatter: labelFormatter,
							background: {
								opacity: 0.5,
								color: "#000"
							}
						}
					}
				},
				colors: ['#1753fc ', '#32cafe', '#45aaf2', '#ecb403', '#e86a91'],
				legend: {
					show: false
				}
			});

		});

		$("#example-7").click(function() {

			placeholder.unbind();

			$("#title").text("Hidden Labels");
			$("#description").text("Labels can be hidden if the slice is less than a given percentage of the pie (10% in this case).");

			$.plot(placeholder, data, {
				series: {
					pie: {
						show: true,
						radius: 1,
						label: {
							show: true,
							radius: 2/3,
							formatter: labelFormatter,
							threshold: 0.1
						}
					}
				},
				colors: ['#1753fc ', '#32cafe', '#45aaf2', '#ecb403', '#e86a91'],
				legend: {
					show: false
				}
			});

		});

		$("#example-8").click(function() {

			placeholder.unbind();

			$("#title").text("Combined Slice");
			$("#description").text("Multiple slices less than a given percentage (5% in this case) of the pie can be combined into a single, larger slice.");

			$.plot(placeholder, data, {
				series: {
					pie: {
						show: true,
						combine: {
							color: "#999",
							threshold: 0.05
						}
					}
				},
				colors: ['#1753fc ', '#32cafe', '#45aaf2', '#ecb403', '#e86a91'],
				legend: {
					show: false
				}
			});

		});

		$("#example-9").click(function() {

			placeholder.unbind();

			$("#title").text("Rectangular Pie");
			$("#description").text("The radius can also be set to a specific size (even larger than the container itself).");

			$.plot(placeholder, data, {
				series: {
					pie: {
						show: true,
						radius: 500,
						label: {
							show: true,
							formatter: labelFormatter,
							threshold: 0.1
						}
					}
				},
				colors: ['#1753fc ', '#32cafe', '#45aaf2', '#ecb403', '#e86a91'],
				legend: {
					show: false
				}
			});

		});

		$("#example-10").click(function() {

			placeholder.unbind();

			$("#title").text("Tilted Pie");
			$("#description").text("The pie can be tilted at an angle.");

			$.plot(placeholder, data, {
				series: {
					pie: {
						show: true,
						radius: 1,
						tilt: 0.5,
						label: {
							show: true,
							radius: 1,
							formatter: labelFormatter,
							background: {
								opacity: 0.8
							}
						},
						combine: {
							color: "#999",
							threshold: 0.1
						}
					}
				},
				colors: ['#1753fc ', '#32cafe', '#45aaf2', '#ecb403', '#e86a91'],
				legend: {
					show: false
				}
			});

		});

		$("#example-11").click(function() {

			placeholder.unbind();

			$("#title").text("Donut Hole");
			$("#description").text("A donut hole can be added.");

			$.plot(placeholder, data, {
				series: {
					pie: {
						innerRadius: 0.5,
						show: true
					}
				}
			});


		});
		$("#example-1").click();

	});

	// A custom label formatter used by several of the plots

	function labelFormatter(label, series) {
		return "<div style='font-size:8pt; text-align:center; padding:2px; color:white;'>" + label + "<br/>" + Math.round(series.percent) + "%</div>";
	}

	//

	function setCode(lines) {
		$("#code").text(lines.join("\n"));
	}