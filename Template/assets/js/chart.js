var color = Chart.helpers.color;
	function createConfig(legendPosition, colorName) {
		return {
			type: 'line',
			data: {
				labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
				datasets: [{
					label: 'My First dataset',
					data: [
						randomScalingFactor(),
						randomScalingFactor(),
						randomScalingFactor(),
						randomScalingFactor(),
						randomScalingFactor(),
						randomScalingFactor(),
						randomScalingFactor()
					],
					backgroundColor: color(window.chartColors[colorName]).alpha(0.5).rgbString(),
					borderColor: window.chartColors[colorName],
					borderWidth: 1
				}]
			},
			
			options: {
				responsive: true,
				maintainAspectRatio: false,
				legend: {
					position: 'bottom',
				},
				
				scales: {
					xAxes: [{
						display: true,
						scaleLabel: {
							display: true,
							labelString: 'Month'
						}
					}],
					yAxes: [{
						display: true,
						scaleLabel: {
							display: true,
							labelString: 'Value'
						}
					}]
				},
				
			}
		};
	}

	window.onload = function() {
		[{
			id: 'chart-legend-top',
			legendPosition: 'top',
			color: 'purple'
		}, {
			id: 'chart-legend-right',
			legendPosition: 'right',
			color: 'blue'
		}, {
			id: 'chart-legend-bottom',
			legendPosition: 'bottom',
			color: 'green'
		}, {
			id: 'chart-legend-left',
			legendPosition: 'left',
			color: 'orange'
		}].forEach(function(details) {
			var ctx = document.getElementById(details.id).getContext('2d');
			var config = createConfig(details.legendPosition, details.color);
			new Chart(ctx, config);
			ctx.shadowColor = '#ccc';
			ctx.shadowBlur = 10;
			ctx.shadowOffsetX = 8;
			ctx.shadowOffsetY = 8;
		});
	};