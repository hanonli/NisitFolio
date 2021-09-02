import React from 'react';
import { Link } from "react-router-dom";
import { Bar } from 'react-chartjs-2';
import { Chart } from 'chart.js';
import $ from 'jquery';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import BookmarkProfileGrid from './bookmarkProfileGrid';
import BookmarkWorkGrid from './bookmarkWorkGrid';
import BookmarkProfileList from './bookmarkProfileList';
import BookmarkWorkList from './bookmarkWorkList';
import TabBookmark from "./TabBookmark"; 

const data = {
  labels: ['ทักษะ B', 'ทักษะ A', 'ทักษะ C'],
  orders: ['#2', '#1', '#3'],
  percentages: ['xx.xx%', 'xx.xx%', 'xx.xx%'],
  datasets: [
    {
      label: '# จำนวน',
	  categoryPercentage: 0.9,
	  barPercentage: 1.0,
      data: [12, 17, 8],
      backgroundColor: [
        'rgba(1, 184, 170, 1)',
        'rgba(253, 98, 94, 1)',
        'rgba(242, 200, 15, 1)',
      ],
    },
  ],
};
const tooltip_config = {
	callbacks: {
		label: function(context) {
			console.log(context);
			//var label = context.dataset.label || '';
			var label = context.chart.data.orders[context.parsed.x] || '';
			
			if (label) {
				label += ': ';
			}
			if (context.parsed.y !== null) {
				//label += new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(context.parsed.y);
				label += context.chart.data.percentages[context.parsed.x];
			}
			
			var res = [label]
			res.push('  '+context.dataset.data[context.parsed.x]+' คน');
			
			return res;
		}
	}
};
const tooltip_config_vertical = {
	callbacks: {
		label: function(context) {
			console.log(context);
			//var label = context.dataset.label || '';
			var label = context.chart.data.orders[context.parsed.y] || '';
			
			if (label) {
				label += ': ';
			}
			if (context.parsed.x !== null) {
				//label += new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(context.parsed.y);
				label += context.chart.data.percentages[context.parsed.y];
			}
			
			var res = [label]
			res.push('  '+context.dataset.data[context.parsed.y]+' คน');
			
			return res;
		}
	}
};

class BookmarkTabs extends React.Component {
	constructor(props) {
		super(props);
		this.handleLoad = this.handleLoad.bind(this);
	 }
	
	componentDidMount() {
		const flag = new Image();
		const you = new Image();
		const avg = new Image();
		const dummy = new Image();
		flag.src = 'assets/images/flag-ch.png'; 
		you.src = 'assets/images/you-ch.png'; 
		avg.src = 'assets/images/avg-ch.png'; 
		dummy.src = 'assets/images/dummy.png'; 
		
		var currentColor = 'grey';
	
		var sumChart1Config = {
			type: 'bar',
			data: {
				  labels: ['ทักษะ B', 'ทักษะ A', 'ทักษะ C'],
				  orders: ['#2', '#1', '#3'],
				  percentages: ['xx.xx%', 'xx.xx%', 'xx.xx%'],
				  datasets: [
					{
					  label: '# จำนวน',
					  categoryPercentage: 0.9,
					  barPercentage: 1.0,
					  data: [12, 17, 8],
					  backgroundColor: [
						'rgba(1, 184, 170, 1)',
						'rgba(253, 98, 94, 1)',
						'rgba(242, 200, 15, 1)',
					  ],
					},
				  ],
			},
			plugins: [ChartDataLabels]
			,
			options: {
			  maintainAspectRatio: false,
			  layout: {
					padding: {
						top: 10
					}
				},
			   scales: {
					y: {
						grid: {
							borderColor: '#F4F4F4',
							display: false
						},
						ticks: {
							// Include a dollar sign in the ticks
							display:false
						}
					},
					x: {
						categoryPercentage: 0.1,
						barPercentage: 0.9,
						grid: {
							borderColor: '#F4F4F4',
							display: false
						},
						ticks: {
							// Include a dollar sign in the ticks
							display:false
						}
					}
				},
			  plugins: {
				legend: {
					display: false
				},
				tooltip: tooltip_config,
				datalabels: {
					display: true,
					color: "black",
					labels: {
					  topLabel: {
						align: "end",
						anchor: "end",
						font: function(context) {
						  var w = context.chart.width;
						  return {
							size: w < 512 ? 16 : 24,
							weight: 'bold',
						  };
						},
						formatter: function(value, context) {
							return context.chart.data.labels[context.dataIndex];
						}
					  },
					  middleLabel: {
						font: function(context) {
						  var w = context.chart.width;
						  return {
							size: w < 512 ? 32 : 48,
							weight: 'bold',
						  };
						},
						formatter: function(value, context) {
							return context.chart.data.orders[context.dataIndex];
						}
					  },subMiddleLabel: {
						align: 'end',
						anchor: 'center',
						offset: -50,
						font: function(context) {
						  var w = context.chart.width;
						  return {
							size: w < 512 ? 16 : 24,
							weight: 'bold',
						  };
						},
						formatter: function(value, context) {
							return context.chart.data.percentages[context.dataIndex];
						}
					  }
					}
				}
			  }
			}
		};
		var sumChart2aConfig = {
			type: 'bar',
			data: {
				  labels: ['ทักษะ B', 'ทักษะ A', 'ทักษะ C'],
				  orders: ['#2', '#1', '#3'],
				  percentages: ['xx.xx%', 'xx.xx%', 'xx.xx%'],
				  datasets: [
					{
					  label: '# จำนวน',
					  categoryPercentage: 0.9,
					  barPercentage: 1.0,
					  data: [12, 17, 8],
					  backgroundColor: [
						'rgba(1, 184, 170, 1)',
						'rgba(253, 98, 94, 1)',
						'rgba(242, 200, 15, 1)',
					  ],
					},
				  ],
			},
			plugins: [ChartDataLabels]
			,
			options: {
					  maintainAspectRatio: false,
					  //responsive: true,
					  /*legend: {
						display: false
					  },*/ 
					   layout: {
							padding: {
								top: 50
							}
						},
					   scales: {
							y: {
								grid: {
									borderColor: '#F4F4F4',
									display: false
								},
								ticks: {
									// Include a dollar sign in the ticks
									display:false
								}
							},
							x: {
								grid: {
									borderColor: '#F4F4F4',
									display: false
								},
								ticks: {
									// Include a dollar sign in the ticks
									display:false
								}
							}
						},
					  plugins: {
						legend: {
							display: false
						},
						tooltip: tooltip_config,
						datalabels: {
							display: true,
							color: "black",
							labels: {
							  topLabel: {
								align: "end",
								anchor: "end",
								font: function(context) {
								  var w = context.chart.width;
								  return {
									size: w < 512 ? 16 : 24,
									weight: 'bold',
								  };
								},
								formatter: function(value, context) {
									return context.chart.data.labels[context.dataIndex];
								}
							  }
							}
						}
					  }
			}
		};
		var sumChart2bConfig = {
			type: 'bar',
			data: {
				  labels: ['ทักษะ B', 'ทักษะ A', 'ทักษะ C'],
				  orders: ['#2', '#1', '#3'],
				  percentages: ['xx.xx%', 'xx.xx%', 'xx.xx%'],
				  datasets: [
					{
					  label: '# จำนวน',
					  categoryPercentage: 0.9,
					  barPercentage: 1.0,
					  data: [12, 17, 8],
					  backgroundColor: [
						'rgba(1, 184, 170, 1)',
						'rgba(253, 98, 94, 1)',
						'rgba(242, 200, 15, 1)',
					  ],
					},
				  ],
			},
			plugins: [ChartDataLabels]
			,
			options: {
					  maintainAspectRatio: false,
					  //responsive: true,
					  /*legend: {
						display: false
					  },*/ 
					   layout: {
							padding: {
								top: 50
							}
						},
					   scales: {
							y: {
								grid: {
									borderColor: '#F4F4F4',
									display: false
								},
								ticks: {
									// Include a dollar sign in the ticks
									display:false
								}
							},
							x: {
								grid: {
									borderColor: '#F4F4F4',
									display: false
								},
								ticks: {
									// Include a dollar sign in the ticks
									display:false
								}
							}
						},
					  plugins: {
						legend: {
							display: false
						},
						tooltip: tooltip_config,
						datalabels: {
							display: true,
							color: "black",
							labels: {
							  topLabel: {
								align: "end",
								anchor: "end",
								font: function(context) {
								  var w = context.chart.width;
								  return {
									size: w < 512 ? 16 : 24,
									weight: 'bold',
								  };
								},
								formatter: function(value, context) {
									return context.chart.data.labels[context.dataIndex];
								}
							  }
							}
						}
					  }
			}
		};
		var sumChart2cConfig = {
			type: 'bar',
			data: {
				  labels: ['ทักษะ B', 'ทักษะ A', 'ทักษะ C'],
				  orders: ['#2', '#1', '#3'],
				  percentages: ['xx.xx%', 'xx.xx%', 'xx.xx%'],
				  datasets: [
					{
					  label: '# จำนวน',
					  categoryPercentage: 0.9,
					  barPercentage: 1.0,
					  data: [12, 17, 8],
					  backgroundColor: [
						'rgba(1, 184, 170, 1)',
						'rgba(253, 98, 94, 1)',
						'rgba(242, 200, 15, 1)',
					  ],
					},
				  ],
			},
			plugins: [ChartDataLabels]
			,
			options: {
					  maintainAspectRatio: false,
					  //responsive: true,
					  /*legend: {
						display: false
					  },*/ 
					   layout: {
							padding: {
								top: 50
							}
						},
					   scales: {
							y: {
								grid: {
									borderColor: '#F4F4F4',
									display: false
								},
								ticks: {
									// Include a dollar sign in the ticks
									display:false
								}
							},
							x: {
								grid: {
									borderColor: '#F4F4F4',
									display: false
								},
								ticks: {
									// Include a dollar sign in the ticks
									display:false
								}
							}
						},
					  plugins: {
						legend: {
							display: false
						},
						tooltip: tooltip_config,
						datalabels: {
							display: true,
							color: "black",
							labels: {
							  topLabel: {
								align: "end",
								anchor: "end",
								font: function(context) {
								  var w = context.chart.width;
								  return {
									size: w < 512 ? 16 : 24,
									weight: 'bold',
								  };
								},
								formatter: function(value, context) {
									return context.chart.data.labels[context.dataIndex];
								}
							  }
							}
						}
					  }
			}
		};
		var sumChart3Config = {
			type: 'bar',
			data: {
				  labels: ['ทักษะ B', 'ทักษะ A', 'ทักษะ C'],
				  orders: ['#2', '#1', '#3'],
				  percentages: ['xx.xx%', 'xx.xx%', 'xx.xx%'],
				  datasets: [
					{
					  label: '# จำนวน',
					  categoryPercentage: 0.9,
					  barPercentage: 1.0,
					  data: [12, 17, 8],
					  backgroundColor: [
						'rgba(1, 184, 170, 1)',
						'rgba(253, 98, 94, 1)',
						'rgba(242, 200, 15, 1)',
					  ],
					},
				  ],
			}
			,
			options: {
					  maintainAspectRatio: false,
					  //responsive: true,
					  /*legend: {
						display: false
					  },*/ 
					   layout: {
							padding: {
								top: 50
							}
						},
					   scales: {
							y: {
								grid: {
									borderColor: '#F4F4F4',
									display: false
								},
								ticks: {
									// Include a dollar sign in the ticks
									display:false
								}
							},
							x: {
								grid: {
									borderColor: '#F4F4F4',
									display: false
								},
								ticks: {
									// Include a dollar sign in the ticks
									display:false
								}
							}
						},
					  plugins: {
						legend: {
							display: false
						},
						tooltip: tooltip_config
					  }
			}
		};
		var sumChart4Config = {
			type: 'bar',
			data: {
				  labels: ['ทักษะ B', 'ทักษะ A', 'ทักษะ C'],
				  orders: ['#2', '#1', '#3'],
				  percentages: ['xx.xx%', 'xx.xx%', 'xx.xx%'],
				  datasets: [
					{
					  label: '# จำนวน',
					  categoryPercentage: 0.9,
					  barPercentage: 1.0,
					  data: [12, 17, 8],
					  backgroundColor: [
						'rgba(1, 184, 170, 1)',
						'rgba(253, 98, 94, 1)',
						'rgba(242, 200, 15, 1)',
					  ],
					},
				  ],
			},
			plugins: [ChartDataLabels]
			,
			options: {
			  maintainAspectRatio: false,
				onClick: (e) => {
				const activePoints = sumChart4.getElementsAtEventForMode(e, 'nearest', { intersect: true }, false)
				if(activePoints.length < 1){
					console.log('Did not click at a bar');
				}else{
					//console.log(activePoints);
					const [{ index }] = activePoints;
					console.log('Click bar: '+sumChart4Config.data.labels[index]+',val: '+sumChart4Config.data.datasets[0].data[index]);
					$('.analytic-md-header').addClass("animate-analytic-md-header");
					$('.analytic-md-sub-header').addClass("animate-analytic-md-sub-header");
					$('.analytic-right-chart-label').addClass("animate-analytic-right-chart-label");
					$('.analytic-arrow-cls').addClass("animate-analytic-arrow-cls");
					
					$('#con-switch-1').removeClass("scroll-chart-container");
					$('#con-switch-2').removeClass("chart-container");
					
					$('#arc-label').text(sumChart4Config.data.labels[index]);
					$('.iAnalytic-Other').css({"color": sumChart4Config.data.datasets[0].backgroundColor[index]});
					sumChart6Config.data.datasets[0].borderColor = sumChart4Config.data.datasets[0].backgroundColor[index];
					sumChart6Config.data.datasets[0].fill.above = sumChart4Config.data.datasets[0].backgroundColor[index];
					sumChart6Config.data.datasets[0].fill.below = sumChart4Config.data.datasets[0].backgroundColor[index];
					sumChart5.destroy();
					sumChart5 = new Chart(ctx5, sumChart6Config);
				}
			  },
			  layout: {
					padding: {
						top: 10
					}
				},
			   scales: {
					y: {
						grid: {
							borderColor: 'rgba(255, 255, 255, 0)',
							display: false
						},
						ticks: {
							// Include a dollar sign in the ticks
							display:false
						}
					},
					x: {
						categoryPercentage: 0.1,
						barPercentage: 0.9,
						grid: {
							borderColor: 'rgba(255, 255, 255, 0)',
							display: false
						},
						ticks: {
							// Include a dollar sign in the ticks
							display:false
						}
					}
				},
			  plugins: {
				legend: {
					display: false
				},
				tooltip: tooltip_config,
				datalabels: {
					display: true,
					color: "black",
					labels: {
					  topLabel: {
						align: "end",
						anchor: "end",
						font: function(context) {
						  var w = context.chart.width;
						  return {
							size: w < 512 ? 16 : 24,
							weight: 'bold',
						  };
						},
						formatter: function(value, context) {
							return context.chart.data.labels[context.dataIndex];
						}
					  },
					  middleLabel: {
						font: function(context) {
						  var w = context.chart.width;
						  return {
							size: w < 512 ? 32 : 48,
							weight: 'bold',
						  };
						},
						formatter: function(value, context) {
							return context.chart.data.orders[context.dataIndex];
						}
					  },subMiddleLabel: {
						align: 'end',
						anchor: 'center',
						offset: -50,
						font: function(context) {
						  var w = context.chart.width;
						  return {
							size: w < 512 ? 16 : 24,
							weight: 'bold',
						  };
						},
						formatter: function(value, context) {
							return context.chart.data.percentages[context.dataIndex];
						}
					  }
					}
				}
			  }
			}
		};
		var sumChart5Config = {
			type: 'bar',
			data: {
				  labels: ['ทักษะ I', 'ทักษะ K', 'ทักษะ L','ทักษะ M', 'ทักษะ N', 'ทักษะ O','ทักษะ P', 'ทักษะ Q','ทักษะ I', 'ทักษะ K', 'ทักษะ L','ทักษะ M', 'ทักษะ N', 'ทักษะ O','ทักษะ P', 'ทักษะ Q'],
				  orders: ['#4', '#5', '#6','#7', '#8', '#9','#10', '#11', '#12','#4', '#5', '#6','#7', '#8', '#9','#10', '#11', '#12'],
				  percentages: ['xx.xx%', 'xx.xx%', 'xx.xx%','xx.xx%', 'xx.xx%', 'xx.xx%','xx.xx%', 'xx.xx%', 'xx.xx%','xx.xx%', 'xx.xx%', 'xx.xx%','xx.xx%', 'xx.xx%', 'xx.xx%','xx.xx%', 'xx.xx%', 'xx.xx%'],
				  datasets: [
					{
					  label: '# จำนวน',
					  categoryPercentage: 0.5,
					  barPercentage: 1,
					  data: [85, 75, 65, 45, 40, 35, 30, 20, 18, 16, 15, 13, 10, 8, 5, 2],
					  backgroundColor: [ '#21689C' ],
					  borderColor: '#21689C',
					  borderWidth: 2,
					  borderRadius:  Number.MAX_VALUE,
					},
				  ],
			}
			,
			options: {
					  maintainAspectRatio: false,
					  onClick: (e) => {
						const activePoints = sumChart5.getElementsAtEventForMode(e, 'nearest', { intersect: true }, false)
						if(activePoints.length < 1){
							console.log('Did not click at a bar');
					    }else{
							//console.log(activePoints);
							const [{ index }] = activePoints;
							console.log('Click bar: '+sumChart5Config.data.labels[index]+',val: '+sumChart5Config.data.datasets[0].data[index]);
							$('.analytic-md-header').addClass("animate-analytic-md-header");
							$('.analytic-md-sub-header').addClass("animate-analytic-md-sub-header");
							$('.analytic-right-chart-label').addClass("animate-analytic-right-chart-label");
							$('.analytic-arrow-cls').addClass("animate-analytic-arrow-cls");
							$('#arc-label').text(sumChart5Config.data.labels[index]);
							$('.iAnalytic-Other').css({"color": "#21689C"});
							
							$('#con-switch-1').removeClass("scroll-chart-container");
							$('#con-switch-2').removeClass("chart-container");
							
							sumChart6Config.data.datasets[0].borderColor = sumChart5Config.data.datasets[0].backgroundColor[0];
							sumChart6Config.data.datasets[0].fill.above = sumChart5Config.data.datasets[0].backgroundColor[0];
							sumChart6Config.data.datasets[0].fill.below = sumChart5Config.data.datasets[0].backgroundColor[0];
							sumChart5.destroy();
							sumChart5 = new Chart(ctx5, sumChart6Config);
						}
					  },
					   indexAxis: 'y',
					   scales: {
							y: {
								grid: {
									borderColor: 'rgba(55, 70, 73, 1)',
									display: false
								},
								ticks: {
									// Include a dollar sign in the ticks
									//display:false
								}
							},
							x: {
								grid: {
									borderColor: '#F4F4F4',
									display: false
								},
								ticks: {
									// Include a dollar sign in the ticks
									display:false
								}
							}
						},
					  plugins: {
						legend: {
							display: false
						},
						tooltip: tooltip_config_vertical
					  }
			}
		};
		var sumChart6Config = {
			type: 'line',
			data: {
				  labels: ['ไม่ได้','','','','','','','พอได้เล็กน้อย','','','','','','ดี','','','','','','ยอดเยี่ยม'],
				  orders: ['#2', '#1', '#3','#2', '#1', '#3','#2', '#1', '#3','#2', '#2', '#1', '#3','#2', '#1', '#3','#2', '#1', '#3','#2'],
				  percentages: ['xx.xx%', 'xx.xx%', 'xx.xx%','xx.xx%', 'xx.xx%', 'xx.xx%','xx.xx%', 'xx.xx%', 'xx.xx%','xx.xx%','xx.xx%', 'xx.xx%', 'xx.xx%','xx.xx%', 'xx.xx%', 'xx.xx%','xx.xx%', 'xx.xx%', 'xx.xx%','xx.xx%'],
				  datasets: [
					{
					  fill:  {
						target: 'origin',
						above: currentColor,   // Area will be red above the origin
						below: currentColor    // And blue below the origin
					  },
					  borderColor: currentColor,
					  pointStyle: [dummy,dummy,dummy,dummy,dummy,dummy,dummy,dummy,avg,dummy,dummy,dummy,flag,dummy,dummy,you,dummy,dummy,dummy,dummy],
					  //tension: 0.1,
					  //bezierCurve: true,
					  label: '# จำนวน',
					  //categoryPercentage: 0.9,
					  //barPercentage: 1.0,
					  data: [0, 1, 2,4, 7, 11,16, 22, 29,37, 46, 68,89,83,67,23,6,2,1,0],
					  /*backgroundColor: [
						'rgba(1, 184, 170, 1)',
						'rgba(253, 98, 94, 1)',
						'rgba(242, 200, 15, 1)',
					  ],*/
					},
				  ],
			}
			,
			options: {
					  tension: 0.4,
					  maintainAspectRatio: false,
					  //responsive: true,
					  /*legend: {
						display: false
					  },*/ 
					   /*elements: {
							point:{
								radius: 0
							}
					   },*/

					   scales: {
							y: {
								grid: {
									borderColor: '#F4F4F4',
									display: false
								},
								ticks: {
									// Include a dollar sign in the ticks
									display:false
								},
								min: 0,
								max: 120
							},
							x: {
								grid: {
									borderColor: '#F4F4F4',
									display: false
								},
								ticks: {
									// Include a dollar sign in the ticks
									//display:false,
									/*callback: function(val, index) {
									// Hide the label of every 2nd dataset
									return index % 2 === 0 ? this.getLabelForValue(val) : this.getLabelForValue(val);
									},
									color: 'red',*/
									autoSkip: false,
									maxRotation: 0,
									minRotation: 0,
									font: function(context) {
									  var w = context.chart.width;
									  return {
										family: "'Nunito','Kanit'",
										size: w < 512 ? 8 : 16,
										weight: 'bold',
									  };
									},
								}
							}
						},
					  plugins: {
						legend: {
							display: false
						},

						tooltip: tooltip_config
					  }
			}
		};
		var jobChartConfig = {
			type: 'bar',
			data: {
				  labels: ['ทักษะ B', 'ทักษะ A', 'ทักษะ C'],
				  orders: ['#2', '#1', '#3'],
				  percentages: ['xx.xx%', 'xx.xx%', 'xx.xx%'],
				  datasets: [
					{
					  label: '# จำนวน',
					  categoryPercentage: 0.9,
					  barPercentage: 1.0,
					  data: [12, 17, 8],
					  backgroundColor: [
						'rgba(1, 184, 170, 1)',
						'rgba(253, 98, 94, 1)',
						'rgba(242, 200, 15, 1)',
					  ],
					},
				  ],
			},
			plugins: [ChartDataLabels]
			,
			options: {
			  maintainAspectRatio: false,
				onClick: (e) => {
				const activePoints = jobChart.getElementsAtEventForMode(e, 'nearest', { intersect: true }, false)
				if(activePoints.length < 1){
					console.log('Did not click at a bar');
				}else{
					//console.log(activePoints);
					/*const [{ index }] = activePoints;
					console.log('Click bar: '+sumChart4Config.data.labels[index]+',val: '+sumChart4Config.data.datasets[0].data[index]);
					$('.analytic-md-header').addClass("animate-analytic-md-header");
					$('.analytic-md-sub-header').addClass("animate-analytic-md-sub-header");
					$('.analytic-right-chart-label').addClass("animate-analytic-right-chart-label");
					$('.analytic-arrow-cls').addClass("animate-analytic-arrow-cls");
					$('#arc-label').text(sumChart4Config.data.labels[index]);
					$('.iAnalytic-Other').css({"color": sumChart4Config.data.datasets[0].backgroundColor[index]});
					sumChart6Config.data.datasets[0].borderColor = sumChart4Config.data.datasets[0].backgroundColor[index];
					sumChart6Config.data.datasets[0].fill.above = sumChart4Config.data.datasets[0].backgroundColor[index];
					sumChart6Config.data.datasets[0].fill.below = sumChart4Config.data.datasets[0].backgroundColor[index];
					sumChart5.destroy();
					sumChart5 = new Chart(ctx5, sumChart6Config);*/
					const [{ index }] = activePoints;
					console.log('Click bar: '+jobChartConfig.data.labels[index]+',val: '+jobChartConfig.data.datasets[0].data[index]);
					
					setTimeout(function(){
						$('.yahaha23').addClass("animate-yahaha23");
						$('.yahaha12').addClass("animate-yahaha12");
						$('.yahaha13').addClass("animate-yahaha13");
						$('.yahaha14').addClass("animate-yahaha14");
						$('.yahaha15').addClass("animate-yahaha15");
						$('.yahaha17').addClass("animate-yahaha17");
						$('.yahaha18').addClass("animate-yahaha18");
						$('.yh-hide').addClass("animate-yh-hide");
						$('.job-lv2').addClass("animate-job-lv2");
						
						$('#arc-label-job').text(jobChartConfig.data.labels[index]);
						jobChart4Config.data.datasets[0].borderColor = jobChartConfig.data.datasets[0].backgroundColor[index];
						jobChart4Config.data.datasets[0].fill.above = jobChartConfig.data.datasets[0].backgroundColor[index];
						jobChart4Config.data.datasets[0].fill.below = jobChartConfig.data.datasets[0].backgroundColor[index];
							
						jobChart.destroy();
						jobChart2.destroy();
						jobChart = new Chart(ctxJ, jobChart2Config);
						jobChart2 = new Chart(ctxJ2, jobChart4Config);
					}, 50);
					
					
				}
			  },
			  layout: {
					padding: {
						top: 10
					}
				},
			   scales: {
					y: {
						grid: {
							borderColor: 'rgba(255, 255, 255, 0)',
							display: false
						},
						ticks: {
							// Include a dollar sign in the ticks
							display:false
						}
					},
					x: {
						categoryPercentage: 0.1,
						barPercentage: 0.9,
						grid: {
							borderColor: 'rgba(255, 255, 255, 0)',
							display: false
						},
						ticks: {
							// Include a dollar sign in the ticks
							display:false
						}
					}
				},
			  plugins: {
				legend: {
					display: false
				},
				tooltip: tooltip_config,
				datalabels: {
					display: true,
					color: "black",
					labels: {
					  topLabel: {
						align: "end",
						anchor: "end",
						font: function(context) {
						  var w = context.chart.width;
						  return {
							size: w < 512 ? 16 : 24,
							weight: 'bold',
						  };
						},
						formatter: function(value, context) {
							return context.chart.data.labels[context.dataIndex];
						}
					  },
					  middleLabel: {
						font: function(context) {
						  var w = context.chart.width;
						  return {
							size: w < 512 ? 32 : 48,
							weight: 'bold',
						  };
						},
						formatter: function(value, context) {
							return context.chart.data.orders[context.dataIndex];
						}
					  },subMiddleLabel: {
						align: 'end',
						anchor: 'center',
						offset: -50,
						font: function(context) {
						  var w = context.chart.width;
						  return {
							size: w < 512 ? 16 : 24,
							weight: 'bold',
						  };
						},
						formatter: function(value, context) {
							return context.chart.data.percentages[context.dataIndex];
						}
					  }
					}
				}
			  }
			}
		};
		var jobChart2Config = {
			type: 'bar',
			data: {
				  labels: ['ทักษะ B', 'ทักษะ A', 'ทักษะ C'],
				  orders: ['#2', '#1', '#3'],
				  percentages: ['xx.xx%', 'xx.xx%', 'xx.xx%'],
				  datasets: [
					{
					  label: '# จำนวน',
					  categoryPercentage: 0.9,
					  barPercentage: 1.0,
					  data: [12, 17, 8],
					  backgroundColor: [
						'rgba(1, 184, 170, 1)',
						'rgba(253, 98, 94, 1)',
						'rgba(242, 200, 15, 1)',
					  ],
					},
				  ],
			},
			plugins: [ChartDataLabels]
			,
			options: {
			  maintainAspectRatio: false,
				onClick: (e) => {
				const activePoints = jobChart.getElementsAtEventForMode(e, 'nearest', { intersect: true }, false)
				if(activePoints.length < 1){
					console.log('Did not click at a bar');
				}else{
					//console.log(activePoints);
					/*const [{ index }] = activePoints;
					console.log('Click bar: '+sumChart4Config.data.labels[index]+',val: '+sumChart4Config.data.datasets[0].data[index]);
					$('.analytic-md-header').addClass("animate-analytic-md-header");
					$('.analytic-md-sub-header').addClass("animate-analytic-md-sub-header");
					$('.analytic-right-chart-label').addClass("animate-analytic-right-chart-label");
					$('.analytic-arrow-cls').addClass("animate-analytic-arrow-cls");
					$('#arc-label').text(sumChart4Config.data.labels[index]);
					$('.iAnalytic-Other').css({"color": sumChart4Config.data.datasets[0].backgroundColor[index]});
					sumChart6Config.data.datasets[0].borderColor = sumChart4Config.data.datasets[0].backgroundColor[index];
					sumChart6Config.data.datasets[0].fill.above = sumChart4Config.data.datasets[0].backgroundColor[index];
					sumChart6Config.data.datasets[0].fill.below = sumChart4Config.data.datasets[0].backgroundColor[index];
					sumChart5.destroy();
					sumChart5 = new Chart(ctx5, sumChart6Config);*/
					/*setTimeout(function(){
						$('.yahaha23').addClass("animate-yahaha23");
						$('.yahaha12').addClass("animate-yahaha12");
						$('.yahaha13').addClass("animate-yahaha13");
						$('.yahaha14').addClass("animate-yahaha14");
						$('.yahaha15').addClass("animate-yahaha15");
						$('.yahaha17').addClass("animate-yahaha17");
						$('.yahaha18').addClass("animate-yahaha18");
						$('.yh-hide').addClass("animate-yh-hide");
						$('.job-lv2').addClass("animate-job-lv2");
						jobChart.destroy();
						jobChart2.destroy();
						jobChart = new Chart(ctxJ, jobChartConfig);
						jobChart2 = new Chart(ctxJ2, jobChart2Config);
					}, 50);*/
					
					
				}
			  },
			  layout: {
					padding: {
						top: 10
					}
				},
			   scales: {
					y: {
						grid: {
							borderColor: 'rgba(255, 255, 255, 0)',
							display: false
						},
						ticks: {
							// Include a dollar sign in the ticks
							display:false
						}
					},
					x: {
						categoryPercentage: 0.1,
						barPercentage: 0.9,
						grid: {
							borderColor: 'rgba(255, 255, 255, 0)',
							display: false
						},
						ticks: {
							// Include a dollar sign in the ticks
							display:false
						}
					}
				},
			  plugins: {
				legend: {
					display: false
				},
				tooltip: tooltip_config,
				datalabels: {
					display: true,
					color: "black",
					labels: {
					  topLabel: {
						align: "end",
						anchor: "end",
						font: function(context) {
						  var w = context.chart.width;
						  return {
							size: w < 512 ? 16 : 24,
							weight: 'bold',
						  };
						},
						formatter: function(value, context) {
							return context.chart.data.labels[context.dataIndex];
						}
					  },
					  middleLabel: {
						font: function(context) {
						  var w = context.chart.width;
						  return {
							size: w < 512 ? 32 : 48,
							weight: 'bold',
						  };
						},
						formatter: function(value, context) {
							return context.chart.data.orders[context.dataIndex];
						}
					  },subMiddleLabel: {
						align: 'end',
						anchor: 'center',
						offset: -50,
						font: function(context) {
						  var w = context.chart.width;
						  return {
							size: w < 512 ? 16 : 24,
							weight: 'bold',
						  };
						},
						formatter: function(value, context) {
							return context.chart.data.percentages[context.dataIndex];
						}
					  }
					}
				}
			  }
			}
		};
		var jobChart3Config = {
			type: 'bar',
			data: {
				  labels: ['ทักษะ I', 'ทักษะ K', 'ทักษะ L','ทักษะ M', 'ทักษะ N', 'ทักษะ O','ทักษะ P', 'ทักษะ Q','ทักษะ I', 'ทักษะ K', 'ทักษะ L','ทักษะ M', 'ทักษะ N', 'ทักษะ O','ทักษะ P', 'ทักษะ Q'],
				  orders: ['#4', '#5', '#6','#7', '#8', '#9','#10', '#11', '#12','#4', '#5', '#6','#7', '#8', '#9','#10', '#11', '#12'],
				  percentages: ['xx.xx%', 'xx.xx%', 'xx.xx%','xx.xx%', 'xx.xx%', 'xx.xx%','xx.xx%', 'xx.xx%', 'xx.xx%','xx.xx%', 'xx.xx%', 'xx.xx%','xx.xx%', 'xx.xx%', 'xx.xx%','xx.xx%', 'xx.xx%', 'xx.xx%'],
				  datasets: [
					{
					  label: '# จำนวน',
					  categoryPercentage: 0.5,
					  barPercentage: 1,
					  data: [85, 75, 65, 45, 40, 35, 30, 20, 18, 16, 15, 13, 10, 8, 5, 2],
					  backgroundColor: [ '#21689C' ],
					  borderColor: '#21689C',
					  borderWidth: 2,
					  borderRadius:  Number.MAX_VALUE,
					},
				  ],
			}
			,
			options: {
					  maintainAspectRatio: false,
					  onClick: (e) => {
						const activePoints = sumChart5.getElementsAtEventForMode(e, 'nearest', { intersect: true }, false)
						if(activePoints.length < 1){
							console.log('Did not click at a bar');
					    }else{
							//console.log(activePoints);
							/*const [{ index }] = activePoints;
							console.log('Click bar: '+sumChart5Config.data.labels[index]+',val: '+sumChart5Config.data.datasets[0].data[index]);
							$('.analytic-md-header').addClass("animate-analytic-md-header");
							$('.analytic-md-sub-header').addClass("animate-analytic-md-sub-header");
							$('.analytic-right-chart-label').addClass("animate-analytic-right-chart-label");
							$('.analytic-arrow-cls').addClass("animate-analytic-arrow-cls");
							$('#arc-label').text(sumChart5Config.data.labels[index]);
							$('.iAnalytic-Other').css({"color": "#21689C"});
							
							$('#con-switch-1').removeClass("scroll-chart-container");
							$('#con-switch-2').removeClass("chart-container");
							
							sumChart6Config.data.datasets[0].borderColor = sumChart5Config.data.datasets[0].backgroundColor[0];
							sumChart6Config.data.datasets[0].fill.above = sumChart5Config.data.datasets[0].backgroundColor[0];
							sumChart6Config.data.datasets[0].fill.below = sumChart5Config.data.datasets[0].backgroundColor[0];
							sumChart5.destroy();
							sumChart5 = new Chart(ctx5, sumChart6Config);*/
						}
					  },
					   indexAxis: 'y',
					   scales: {
							y: {
								grid: {
									borderColor: 'rgba(55, 70, 73, 1)',
									display: false
								},
								ticks: {
									// Include a dollar sign in the ticks
									//display:false
								}
							},
							x: {
								grid: {
									borderColor: '#F4F4F4',
									display: false
								},
								ticks: {
									// Include a dollar sign in the ticks
									display:false
								}
							}
						},
					  plugins: {
						legend: {
							display: false
						},
						tooltip: tooltip_config_vertical
					  }
			}
		};
		var jobChart4Config = {
			type: 'line',
			data: {
				  labels: ['ไม่ได้','','','','','','','พอได้เล็กน้อย','','','','','','ดี','','','','','','ยอดเยี่ยม'],
				  orders: ['#2', '#1', '#3','#2', '#1', '#3','#2', '#1', '#3','#2', '#2', '#1', '#3','#2', '#1', '#3','#2', '#1', '#3','#2'],
				  percentages: ['xx.xx%', 'xx.xx%', 'xx.xx%','xx.xx%', 'xx.xx%', 'xx.xx%','xx.xx%', 'xx.xx%', 'xx.xx%','xx.xx%','xx.xx%', 'xx.xx%', 'xx.xx%','xx.xx%', 'xx.xx%', 'xx.xx%','xx.xx%', 'xx.xx%', 'xx.xx%','xx.xx%'],
				  datasets: [
					{
					  fill:  {
						target: 'origin',
						above: currentColor,   // Area will be red above the origin
						below: currentColor    // And blue below the origin
					  },
					  borderColor: currentColor,
					  pointStyle: [dummy,dummy,dummy,dummy,dummy,dummy,dummy,dummy,avg,dummy,dummy,dummy,flag,dummy,dummy,you,dummy,dummy,dummy,dummy],
					  //tension: 0.1,
					  //bezierCurve: true,
					  label: '# จำนวน',
					  //categoryPercentage: 0.9,
					  //barPercentage: 1.0,
					  data: [0, 1, 2,4, 7, 11,16, 22, 29,37, 46, 68,89,83,67,23,6,2,1,0],
					  /*backgroundColor: [
						'rgba(1, 184, 170, 1)',
						'rgba(253, 98, 94, 1)',
						'rgba(242, 200, 15, 1)',
					  ],*/
					},
				  ],
			}
			,
			options: {
					  tension: 0.4,
					  maintainAspectRatio: false,
					  //responsive: true,
					  /*legend: {
						display: false
					  },*/ 
					   /*elements: {
							point:{
								radius: 0
							}
					   },*/

					   scales: {
							y: {
								grid: {
									borderColor: '#F4F4F4',
									display: false
								},
								ticks: {
									// Include a dollar sign in the ticks
									display:false
								},
								min: 0,
								max: 120
							},
							x: {
								grid: {
									borderColor: '#F4F4F4',
									display: false
								},
								ticks: {
									// Include a dollar sign in the ticks
									//display:false,
									/*callback: function(val, index) {
									// Hide the label of every 2nd dataset
									return index % 2 === 0 ? this.getLabelForValue(val) : this.getLabelForValue(val);
									},
									color: 'red',*/
									autoSkip: false,
									maxRotation: 0,
									minRotation: 0,
									font: function(context) {
									  var w = context.chart.width;
									  return {
										family: "'Nunito','Kanit'",
										size: w < 512 ? 8 : 16,
										weight: 'bold',
									  };
									},
								}
							}
						},
					  plugins: {
						legend: {
							display: false
						},

						tooltip: tooltip_config
					  }
			}
		};
		var hardChart2Config = {
			type: 'bar',
			data: {
				  labels: ['ทักษะ B', 'ทักษะ A', 'ทักษะ C'],
				  orders: ['#2', '#1', '#3'],
				  percentages: ['xx.xx%', 'xx.xx%', 'xx.xx%'],
				  datasets: [
					{
					  label: '# จำนวน',
					  categoryPercentage: 0.9,
					  barPercentage: 1.0,
					  data: [12, 17, 8],
					  backgroundColor: [
						'rgba(1, 184, 170, 1)',
						'rgba(253, 98, 94, 1)',
						'rgba(242, 200, 15, 1)',
					  ],
					},
				  ],
			},
			plugins: [ChartDataLabels]
			,
			options: {
			  maintainAspectRatio: false,
				onClick: (e) => {
				const activePoints = jobChart.getElementsAtEventForMode(e, 'nearest', { intersect: true }, false)
				if(activePoints.length < 1){
					console.log('Did not click at a bar');
				}else{
					//console.log(activePoints);
					/*const [{ index }] = activePoints;
					console.log('Click bar: '+sumChart4Config.data.labels[index]+',val: '+sumChart4Config.data.datasets[0].data[index]);
					$('.analytic-md-header').addClass("animate-analytic-md-header");
					$('.analytic-md-sub-header').addClass("animate-analytic-md-sub-header");
					$('.analytic-right-chart-label').addClass("animate-analytic-right-chart-label");
					$('.analytic-arrow-cls').addClass("animate-analytic-arrow-cls");
					$('#arc-label').text(sumChart4Config.data.labels[index]);
					$('.iAnalytic-Other').css({"color": sumChart4Config.data.datasets[0].backgroundColor[index]});
					sumChart6Config.data.datasets[0].borderColor = sumChart4Config.data.datasets[0].backgroundColor[index];
					sumChart6Config.data.datasets[0].fill.above = sumChart4Config.data.datasets[0].backgroundColor[index];
					sumChart6Config.data.datasets[0].fill.below = sumChart4Config.data.datasets[0].backgroundColor[index];
					sumChart5.destroy();
					sumChart5 = new Chart(ctx5, sumChart6Config);*/	
				}
			  },
			  layout: {
					padding: {
						top: 10
					}
				},
			   scales: {
					y: {
						grid: {
							borderColor: 'rgba(255, 255, 255, 0)',
							display: false
						},
						ticks: {
							// Include a dollar sign in the ticks
							display:false
						}
					},
					x: {
						categoryPercentage: 0.1,
						barPercentage: 0.9,
						grid: {
							borderColor: 'rgba(255, 255, 255, 0)',
							display: false
						},
						ticks: {
							// Include a dollar sign in the ticks
							display:false
						}
					}
				},
			  plugins: {
				legend: {
					display: false
				},
				tooltip: tooltip_config,
				datalabels: {
					display: true,
					color: "black",
					labels: {
					  topLabel: {
						align: "end",
						anchor: "end",
						font: function(context) {
						  var w = context.chart.width;
						  return {
							size: w < 512 ? 16 : 24,
							weight: 'bold',
						  };
						},
						formatter: function(value, context) {
							return context.chart.data.labels[context.dataIndex];
						}
					  },
					  middleLabel: {
						font: function(context) {
						  var w = context.chart.width;
						  return {
							size: w < 512 ? 32 : 48,
							weight: 'bold',
						  };
						},
						formatter: function(value, context) {
							return context.chart.data.orders[context.dataIndex];
						}
					  },subMiddleLabel: {
						align: 'end',
						anchor: 'center',
						offset: -50,
						font: function(context) {
						  var w = context.chart.width;
						  return {
							size: w < 512 ? 16 : 24,
							weight: 'bold',
						  };
						},
						formatter: function(value, context) {
							return context.chart.data.percentages[context.dataIndex];
						}
					  }
					}
				}
			  }
			}
		};
		
		
		var ctx1 = $('#sumChart1');
		var ctx2a = $('#sumChart2a');
		var ctx2b = $('#sumChart2b');
		var ctx2c = $('#sumChart2c');
		var ctx3 = $('#sumChart3');
		var ctx4 = $('#sumChart4');
		var ctx5 = $('#sumChart5');
		var ctxJ = $('#jobChart1');
		var ctxJ2 = $('#jobChart2');
		var ctxJ3 = $('#jobChart3');
		var ctxJ4 = $('#jobChart4');
		var ctxH1a = $('#hardChart1a');
		var ctxH1b = $('#hardChart1b');
		var ctxH1c = $('#hardChart1c');
		var ctxH2 = $('#hardChart2');
		var ctxH3 = $('#hardChart3');
		var sumChart1 = new Chart(ctx1, sumChart1Config);
		var sumChart2a = new Chart(ctx2a, sumChart2aConfig);
		var sumChart2b = new Chart(ctx2b, sumChart2bConfig);
		var sumChart2c = new Chart(ctx2c, sumChart2cConfig);
		var sumChart3 = new Chart(ctx3, sumChart3Config);
		var sumChart4 = new Chart();
		var sumChart5 = new Chart();
		var jobChart = new Chart();
		var jobChart2 = new Chart();
		var jobChart3 = new Chart();
		var jobChart4 = new Chart();
		var hardChart1a = new Chart();
		var hardChart1b = new Chart();
		var hardChart1c = new Chart();
		var hardChart2 = new Chart();
		var hardChart3 = new Chart();
		
		function ResetChartSum(){
			sumChart1.destroy();
			sumChart2a.destroy();
			sumChart2b.destroy();
			sumChart2c.destroy();
			sumChart3.destroy();
			sumChart1 = new Chart(ctx1, sumChart1Config);
			sumChart2a = new Chart(ctx2a, sumChart2aConfig);
			sumChart2b = new Chart(ctx2b, sumChart2bConfig);
			sumChart2c = new Chart(ctx2c, sumChart2cConfig);
			sumChart3 = new Chart(ctx3, sumChart3Config);
		}
		
		function ResetChartJob(){
			$('.yahaha23').removeClass("animate-yahaha23");
			$('.yahaha12').removeClass("animate-yahaha12");
			$('.yahaha13').removeClass("animate-yahaha13");
			$('.yahaha14').removeClass("animate-yahaha14");
			$('.yahaha15').removeClass("animate-yahaha15");
			$('.yahaha17').removeClass("animate-yahaha17");
			$('.yahaha18').removeClass("animate-yahaha18");
			$('.yh-hide').removeClass("animate-yh-hide");
			$('.job-lv2').removeClass("animate-job-lv2");
			$('.job-lv3').removeClass("animate-job-lv3");
			jobChart.destroy();
			jobChart = new Chart(ctxJ, jobChartConfig);
		}
		
		function ResetChartHard(){
			$('.hard-lv2').removeClass("animate-hard-lv2");
			$('.yahaha32').removeClass("animate-yahaha32");
			setTimeout(function() { $('.hard-lv1').css('display', ''); $('.hard-lv2').css('display', 'none'); }, 200);
			setTimeout(function() { $('.hard-lv1').removeClass("animate-hard-lv1"); }, 300);
			hardChart1a.destroy();
			hardChart1b.destroy();
			hardChart1c.destroy();
			hardChart1a = new Chart(ctxH1a, sumChart3Config);
			hardChart1b = new Chart(ctxH1b, sumChart3Config);
			hardChart1c = new Chart(ctxH1c, sumChart3Config);
			$('.hard-ct1').removeClass("animate-hard-ct1");
			$('.hard-ct2').removeClass("animate-hard-ct2");
			setTimeout(function() { $('.hard-ct1').css('display', ''); $('.hard-ct2').css('display', 'none'); }, 200);
			setTimeout(function() { $('.hard-ct1').removeClass("animate-hard-ct1"); }, 300);
		}
		
		//setInterval(function(){RefreshChart(myChart,config1)}, 1000);
		//setTimeout(function(){   $("#content1").fadeOut(500); }, 1000);
		
		var current_tab = 1;
		$(function(){
			//$('.fag').addClass("animate-fag");
			//$('.fac').addClass("animate-fac");
			
		   $('.tab-content').hide();
		   $('#content1').show();
		   $('#tab-1').on('click', function(){
			  $('.tab-content').hide();
			  $('.tab-list-item').removeClass('tab-list-active');
			  $('#tab-1').addClass('tab-list-active')
			  $('#content1').show();
			  current_tab = 1;
			  ResetChartSum();
			  $('.fat').removeClass("animate-fat");
			  $('.fag').removeClass("animate-fag");
			  $('.fac').removeClass("animate-fac");
		   });
		  
		   $('#tab-2').on('click', function(){
			  $('.tab-content').hide();
			  $('.tab-list-item').removeClass('tab-list-active');
			  $('#tab-2').addClass('tab-list-active')
			  $('#content2').show();
			  current_tab = 2;
			  $('.fag').addClass("animate-fag");
			  //jobChart.destroy();
			  setTimeout(function(){ $('.fat').addClass("animate-fat"); }, 10);
			  setTimeout(function(){ $('.fac').addClass("animate-fac"); }, 10);
			  setTimeout(function(){ ResetChartJob(); }, 5);
		   });
		  
		  $('#tab-3').on('click', function(){
			  $('.tab-content').hide();
			  $('.tab-list-item').removeClass('tab-list-active');
			  $('#tab-3').addClass('tab-list-active')
			  $('#content2').show();
			  current_tab = 3;
			  $('.fag').addClass("animate-fag");
			  setTimeout(function(){ $('.fat').addClass("animate-fat"); }, 10);
			  setTimeout(function(){ $('.fac').addClass("animate-fac"); }, 10);
			  setTimeout(function(){ ResetChartJob(); }, 5);
		  });
		  
		  $('#tab-4').on('click', function(){
			  $('.tab-content').hide();
			  $('.tab-list-item').removeClass('tab-list-active');
			  $('#tab-4').addClass('tab-list-active')
			  $('#content2').show();
			  current_tab = 4;
			  $('.fag').addClass("animate-fag");
			  setTimeout(function(){ $('.fat').addClass("animate-fat"); }, 10);
			  setTimeout(function(){ $('.fac').addClass("animate-fac"); }, 10);
			  setTimeout(function(){ ResetChartJob(); }, 5);
		  });
		  
		  $('#tab-5').on('click', function(){
			  $('.tab-content').hide();
			  $('.tab-list-item').removeClass('tab-list-active');
			  $('#tab-5').addClass('tab-list-active')
			  $('#content5').show();
			  current_tab = 5;
			  $('.fag').addClass("animate-fag");
			  setTimeout(function(){ $('.fat').addClass("animate-fat"); }, 10);
			  setTimeout(function(){ $('.fac').addClass("animate-fac"); }, 10);
			  setTimeout(function(){ ResetChartHard(); }, 5);
		  });
		  
		   $('#main1').on('click', function(){
			  sumChart4.destroy();
			  sumChart5.destroy();
			  setTimeout(function() { sumChart4 = new Chart(ctx4, sumChart4Config); },200);
			  setTimeout(function() { sumChart5 = new Chart(ctx5, sumChart5Config); },200);
		  });
		  
		   $('#main-lv2-back').on('click', function(){
			    $('.analytic-md-header').removeClass("animate-analytic-md-header");
				$('.analytic-md-sub-header').removeClass("animate-analytic-md-sub-header");
				$('.analytic-right-chart-label').removeClass("animate-analytic-right-chart-label");
				$('.analytic-arrow-cls').removeClass("animate-analytic-arrow-cls");
				$('#arc-label').text('อื่น ๆ');
				$('.iAnalytic-Other').css({"color": "rgba(55, 70, 73, 1)"});
				
				$('#con-switch-1').addClass("scroll-chart-container");
				$('#con-switch-2').addClass("chart-container");
				
				sumChart5.destroy();
				sumChart5 = new Chart(ctx5, sumChart5Config);
		  });
		  
		  $('#pop-up-close').on('click', function(){
				setTimeout(function() {  
					$('.analytic-md-header').removeClass("animate-analytic-md-header");
					$('.analytic-md-sub-header').removeClass("animate-analytic-md-sub-header");
					$('.analytic-right-chart-label').removeClass("animate-analytic-right-chart-label");
					$('.analytic-arrow-cls').removeClass("animate-analytic-arrow-cls");
					$('#arc-label').text('อื่น ๆ');
					$('.iAnalytic-Other').css({"color": "rgba(55, 70, 73, 1)"});
					$('#con-switch-1').addClass("scroll-chart-container");
					$('#con-switch-2').addClass("chart-container");
				},200);
			   
		  });
		  
		  $('#info-button').on('click', function(){
				$('.yahaha23').addClass("animate-yahaha23");
				$('.yahaha12').addClass("animate-yahaha12");
				$('.yahaha13').addClass("animate-yahaha13");
				$('.yahaha14').addClass("animate-yahaha14");
				$('.yahaha15').addClass("animate-yahaha15");
				$('.yahaha17').addClass("animate-yahaha17");
				$('.yahaha18').addClass("animate-yahaha18");
				$('.yh-hide').addClass("animate-yh-hide");
				$('.job-lv3').addClass("animate-job-lv3");
				jobChart.destroy();
				jobChart3.destroy();
				jobChart = new Chart(ctxJ, jobChart2Config);
				jobChart3 = new Chart(ctxJ3, jobChart3Config);
		  });
		  
		  $('#alv-close-button').on('click', function(){
				ResetChartJob();
		  });
		  
		  $('#alv-close-button2').on('click', function(){
				ResetChartJob();
		  });
		  
		  $('#hard1').on('click', function(){
				$('.hard-lv1').addClass("animate-hard-lv1");
				hardChart2.destroy();
				setTimeout(function() { $('.hard-lv1').css('display', 'none'); $('.hard-lv2').css('display', 'block'); }, 200);
				setTimeout(function() { $('.hard-lv2').addClass("animate-hard-lv2"); }, 300);
				setTimeout(function() {
					hardChart2 = new Chart(ctxH2, hardChart2Config);
				}, 400);
		  });
		  
		  $('#hard2').on('click', function(){
				$('.hard-lv1').addClass("animate-hard-lv1");
				hardChart2.destroy();
				setTimeout(function() { $('.hard-lv1').css('display', 'none'); $('.hard-lv2').css('display', 'block'); }, 200);
				setTimeout(function() { $('.hard-lv2').addClass("animate-hard-lv2"); }, 300);
				setTimeout(function() {
					hardChart2 = new Chart(ctxH2, hardChart2Config);
				}, 400);
		  });
		  
		  $('#hard3').on('click', function(){
				$('.hard-lv1').addClass("animate-hard-lv1");
				hardChart2.destroy();
				setTimeout(function() { $('.hard-lv1').css('display', 'none'); $('.hard-lv2').css('display', 'block'); }, 200);
				setTimeout(function() { $('.hard-lv2').addClass("animate-hard-lv2"); }, 300);
				setTimeout(function() {
					hardChart2 = new Chart(ctxH2, hardChart2Config);
				}, 400);
		  });
		  
		  $('#info-button-hard').on('click', function(){
				$('.hard-ct1').addClass("animate-hard-ct1");
				$('.yahaha32').addClass("animate-yahaha32");
				hardChart3.destroy();
				setTimeout(function() { $('.hard-ct1').css('display', 'none'); $('.hard-ct2').css('display', 'block'); }, 200);
				setTimeout(function() { $('.hard-ct2').addClass("animate-hard-ct2"); }, 300);
				setTimeout(function() {
					hardChart3 = new Chart(ctxH3, jobChart3Config);
				}, 400);
		  });
		  
		  $('#alv-close-button3').on('click', function(){
				ResetChartHard();
		  });
		  
		  $('#alv-close-button4').on('click', function(){
				$('.hard-ct2').removeClass("animate-hard-ct2");
				$('.yahaha32').removeClass("animate-yahaha32");
				setTimeout(function() { $('.hard-ct1').css('display', ''); $('.hard-ct2').css('display', 'none'); }, 200);
				setTimeout(function() { $('.hard-ct1').removeClass("animate-hard-ct1"); }, 300);
		  });
		});
	}

	componentWillUnmount() { 
	   window.removeEventListener('load', this.handleLoad)  
	}
	
	handleLoad() {
		console.log("YEAH!");
	 }
	
	render (){
		return (
			<div className="BookmarkTabs">
				<header class="header-white bookmark-header-fixed fat">
					<div class="container-fluid yahaha2">     
						<div class="row">
							<div class="col">
								<div class="topDataBk-content">
									<h1 class="name inline">Analytics</h1>
								</div>
							</div>
						</div>        
					</div>
				</header>
				<div class="tab-inline bookmark-tabs-fixed fag">
                    <div class="container-fluid yahaha3">
                        <div class="row">
                            <div class="col">
                                <ol class="tab-list">
                                 <li class="tab-list-item tab-list-active" id="tab-1" type="button">ภาพรวม</li>
                                 <li class="tab-list-item" id="tab-2" type="button">งานที่ 1</li>
                                 <li class="tab-list-item" id="tab-3" type="button">งานที่ 2</li>
								  <li class="tab-list-item" id="tab-4" type="button">งานที่ 3</li>
                                 <li class="tab-list-item" id="tab-5" type="button">ทักษะเสริม</li>
                                </ol>
                            </div>
						</div>
					</div>
				</div>
				
				<div class="tab-content" id="content1"> 
					<div class="container-fluid yahaha">
						<div class="row no-gutters yahaha24">
							<div class="col-5 analytics-clickable header round text-center justify-content-center" id="main1" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
								<div>
									<hf class="name">เทรนด์ทักษะเฉพาะในทุกงาน<br/>ที่คุณสนใจ<br/></hf>
									<nnf class="name">จากทั้งหมด xxx คน</nnf>
									<br></br><br></br>
								</div>
								<div class="container-fluid">
									<canvas id="sumChart1" width="100" height="450"></canvas>
								 </div>
							</div>
							<div class="col-7 ">
								<div class="col analytics-clickable header round wrapper text-center">
									<div>
										<hf class="name">เทรนด์ทักษะแบ่งตามงานที่คุณสนใจ</hf>
									</div>
									<div class="d-flex">
										<div class="container-fluid col-4">
											<div class="container-fluid p-0">
												<canvas id="sumChart2a" width="50" height="215"></canvas>
											</div>
											<div class="container-fluid p-0">
												<cf>งานที่ 1</cf>
											</div>
										</div>
										<div class="container-fluid col-4">
											<div class="container-fluid p-0">
												<canvas id="sumChart2b" width="50" height="215"></canvas>
											</div>
											<div class="container-fluid p-0">
												<cf>งานที่ 2</cf>
											</div>
										</div>
										<div class="container-fluid col-4">
											<div class="container-fluid p-0">
												<canvas id="sumChart2c" width="50" height="215"></canvas>
											</div>
											<div class="container-fluid p-0">
												<cf>งานที่ 3</cf>
											</div>
										</div>
									</div>
								</div>
								<div class="col analytics-clickable header round space-alt-1 wrapper">
									<div class="d-flex">
										<div class="col-5 container-fluid align-self-end">
											<div class="container-fluid">
												<canvas id="sumChart3" width="50" height="275"></canvas>
											</div>
										</div>
										<div class="col-6 container-fluid">
											<div class="text-extra">
												<hf>เทรนด์ทักษะเสริม<br/></hf>
												<nnf>จากทั้งหมด xxx คน</nnf>
												<hr></hr>
											</div>
											<div>
												<af>ทักษะเสริมของคุณ 3 ทักษะ<br/></af>
												<af class="analytic-spc"><i class="fas fa-square iAnalytic-Yellow"></i> Excel #1<br/></af>
												<af class="analytic-spc"><i class="fas fa-square iAnalytic-Yellow"></i> Word #2<br/></af>
												<af class="analytic-spc"><i class="fas fa-square iAnalytic-Yellow"></i> Photoshop #3<br/></af>
											</div>
										</div>
										<div class="col-1 container-fluid">
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					
					<div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
							  <div class="modal-dialog modal-dialog-centered modal-ku">
								<div class="modal-content round-s">
								  <div class="modal-header no-bottom-line">
									<button type="button" class="btn-close" id="pop-up-close" data-bs-dismiss="modal" aria-label="Close"></button>
								  </div>
								  <div class="modal-body">
									<div class="container-fluid align-self-end">
										<div class="row">
										    <div class="analytic-arrow-cls back" id="main-lv2-back"></div>
											<hf class="analytic-md-header">เทรนด์ทักษะเฉพาะในทุกงานที่คุณสนใจ<br/></hf>
											<nnf class="analytic-spc-s analytic-md-sub-header">คุณสามารถคลิกที่แท่งกราฟเพื่อดูรายละเอียดเพิ่มเติม</nnf>
											<br></br>
										</div>
										<div class="row">
											<div class="col-4 yahaha5 align-self-end">
												<canvas id="sumChart4" width="100" height="450"></canvas>
											</div>
											<div class="col-8 container-fluid">
												<div class="analytic-right-chart-label">
													<hf>
														<i class="fas fa-square iAnalytic-Other yahaha10"></i>
														<div class="inline" id="arc-label">อื่น ๆ</div>
													</hf>
												</div>
												<div class="header round">
													<div class="analytic-md-right-chart scroll-chart-container" id="con-switch-1">
														<div class="chart-container" id="con-switch-2">
															<canvas id="sumChart5" width="100" height="450"></canvas>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								  </div>
								  <div class="modal-footer no-top-line">
									
								  </div>
								</div>
							  </div>
					</div>
					
				</div> 
				
				<div class="tab-content fac" id="content2"> 
					<div class="container-fluid yahaha3">
						<div class="d-flex flex-row">
						    <div class="p-0 container-fluid header round align-self-end yahaha23 yahaha25">
								<div class="container-fluid align-self-end yahaha3">
									<div class="row wrapper2">
										<div class="yahaha14 container-fluid align-self-end yahaha7">
											<div class="yahaha5 yahaha18">
												<canvas id="jobChart1" width="100" height="450"></canvas>
											</div>
											<div>
												<br></br>
												<nnf class="analytic-spc-s yh-hide">*คลิกที่แท่งกราฟเพื่อดูรายละเอียดเพิ่มเติม</nnf>
												<br></br>
											</div>
										</div>
										<div class="yahaha15 container-fluid align-self-center yh-hide">
											<div class="vl"></div>
										</div>
										<div class="yahaha16 container-fluid">
											<div class="text-extra">
												<div class="yahaha17">
													<hhf><br/>เทรนด์ทักษะเฉพาะใน<br/>ผู้ที่สนใจงานที่ 1<br/></hhf>
												</div>
												<br></br>
												<nnf>จากทั้งหมด xxx คน</nnf>
												<br></br><br></br>
											</div>
											<div class="yahaha8">
												<aaf>ทักษะยอดนิยม<br/></aaf>
												<af>#1 <i class="fas fa-square iAnalytic-Yellow"></i> Excel xx.xx%<br/></af>
												<af>#2 <i class="fas fa-square iAnalytic-Yellow"></i> Word xx.xx%<br/></af>
												<af>#3 <i class="fas fa-square iAnalytic-Yellow"></i> Photoshop xx.xx%<br/></af>
											</div>
											<br></br>
											<aaf>ทักษะของฉัน<br/></aaf>
											<div class="header2 container-fluid text-center skill-not-found yahaha9">
												<mf>*เนื่องจากเราไม่พบทักษะของคุณ จึงแสดงทักษะโดยรวม<br/>แต่คุณสามารถแก้ไขโปรไฟล์เพื่อเพิ่มงานที่สนใจได้<br/></mf>
												<a class="btn btn-cta-primary-yellow round profile-button" href="#" target="_blank">เพิ่มทักษะ</a>
											</div>
											<div class="skill-found">
												<div class="yahaha8">
													<af>#1 <i class="fas fa-square iAnalytic-Yellow"></i> Excel xx.xx%<br/></af>
													<af>#2 <i class="fas fa-square iAnalytic-Yellow"></i> Word xx.xx%<br/></af>
													<af>#3 <i class="fas fa-square iAnalytic-Yellow"></i> Photoshop xx.xx%<br/></af>
												</div>
												<br></br>
												<div class="float-end yahaha6">
													<a class="btn btn-cta-primary round profile-button other margin-right-m" id="info-button" target="_blank">คลิกเพื่อดูอันดับอื่น ๆ</a> 
													<a class="btn btn-cta-primary-yellow round profile-button" id="other-button" target="_blank">แก้ไขทักษะ</a>
												</div>
											</div>
										</div>
									</div>
								</div>
						    </div>
						  <div class="p-0 container-fluid align-self-end yahaha12">
						  
						  </div>
						  <div class="p-0 container-fluid header round align-self-end yahaha13">
								<div class="float-end yahaha6 job-lv2 yahaha19">
									<a class="btn-close profile-button" id="alv-close-button" target="_blank"></a> 
								</div>
								<div class="text-extra yahaha21 job-lv2">
									<hf id="arc-label-job">ทักษะ A</hf>
									<br></br>
									<nnf>จากทั้งหมด xxx คน</nnf>
									<br></br>
								</div>
								<div class="animate-yahaha13 container-fluid align-self-end job-lv2">
									<div class="yahaha20">
										<canvas id="jobChart2" width="100" height="450"></canvas>
									</div>
								</div>

								<div class="float-end yahaha6 job-lv3 yahaha19">
									<a class="btn-close profile-button" id="alv-close-button2" target="_blank"></a> 
								</div>
								<div class="text-extra yahaha21 job-lv3">
									<hf>อันดับอื่น ๆ<br/></hf>
									<br></br>
								</div>
								<div class="animate-yahaha13 container-fluid align-self-end job-lv3">
									<div class="yahaha20">
										<div class="scroll-chart-container2">
											<div class="chart-container2">
												<canvas id="jobChart3" width="100" height="1450"></canvas>
											</div>
										</div>
									</div>
								</div>
						  </div>
						</div>
					</div> 
				</div>
				
				<div class="tab-content fac" id="content5"> 
					<div class="container-fluid yahaha">
						<div class="row no-gutters hard-lv1">
							<div class="col-4 text-center justify-content-center">
								<div class="header round analytics-clickable yahaha26" id="hard1">
									<div>
										<hf class="name">เทรนด์เสริมใน<br/>ผู้ที่สนใจงานที่ 1<br/></hf>
										<br></br><br></br>
									</div>
									<div class="container-fluid">
										<div class="yahaha22">
											<canvas id="hardChart1a" width="100" height="450"></canvas>
										</div>
									 </div>
								 </div>
							</div>
							<div class="col-4 text-center justify-content-center">
								<div class="header round analytics-clickable yahaha27" id="hard2">
									<div>
										<hf class="name">เทรนด์เสริมใน<br/>ผู้ที่สนใจงานที่ 2<br/></hf>
										<br></br><br></br>
									</div>
									<div class="container-fluid">
										<div class="yahaha22">
											<canvas id="hardChart1b" width="100" height="450"></canvas>
										</div>
									 </div>
								 </div>
							</div>
							<div class="col-4 text-center justify-content-center">
								<div class="header round analytics-clickable yahaha28" id="hard3">
									<div>
										<hf class="name">เทรนด์เสริมใน<br/>ผู้ที่สนใจงานที่ 3<br/></hf>
										<br></br><br></br>
									</div>
									<div class="container-fluid">
										<div class="yahaha22">
											<canvas id="hardChart1c" width="100" height="450"></canvas>
										</div>
									 </div>
								 </div>
							</div>
						</div>
						
						<div class="p-0 container-fluid header round align-self-end yahaha23 yahaha25 hard-lv2">
								<div class="container-fluid align-self-end yahaha3">
									<div class="row wrapper2">
										<div class="yahaha14 container-fluid align-self-end yahaha7">
											<hf class="yahaha32"><br/>เทรนด์ทักษะเฉพาะในผู้ที่สนใจงานที่ 1</hf>
											<br></br><br></br><br></br><br></br><br></br><br></br><br></br>
											<div class="yahaha5 yahaha18">
												<canvas id="hardChart2" width="100" height="450"></canvas>
											</div>
											<div>
												<br></br>
												
												<br></br>
											</div>
										</div>
										<div class="yahaha15 container-fluid align-self-center yh-hide">
											<div class="vl"></div>
										</div>
										<div class="yahaha31 yahaha16 container-fluid">
											<div class="hard-ct1">
												<div class="text-extra">
													<div class="yahaha17">
														<div class="float-end yahaha6 yahaha33">
															<a class="btn-close profile-button" id="alv-close-button3" target="_blank"></a> 
														</div>
														<hhf><br/>เทรนด์ทักษะเฉพาะใน<br/>ผู้ที่สนใจงานที่ 1<br/></hhf>
													</div>
													<br></br>
													<nnf>จากทั้งหมด xxx คน</nnf>
													<br></br><br></br>
												</div>
												<div class="yahaha8">
													<aaf>ทักษะยอดนิยม<br/></aaf>
													<af>#1 <i class="fas fa-square iAnalytic-Yellow"></i> Excel xx.xx%<br/></af>
													<af>#2 <i class="fas fa-square iAnalytic-Yellow"></i> Word xx.xx%<br/></af>
													<af>#3 <i class="fas fa-square iAnalytic-Yellow"></i> Photoshop xx.xx%<br/></af>
												</div>
												<br></br>
												<aaf>ทักษะของฉัน<br/></aaf>
												<div class="header2 container-fluid text-center skill-not-found yahaha9">
													<mf>*เนื่องจากเราไม่พบทักษะของคุณ จึงแสดงทักษะโดยรวม<br/>แต่คุณสามารถแก้ไขโปรไฟล์เพื่อเพิ่มงานที่สนใจได้<br/></mf>
													<a class="btn btn-cta-primary-yellow round profile-button" href="#" target="_blank">เพิ่มทักษะ</a>
												</div>
												<div class="skill-found">
													<div class="yahaha8">
														<af>#1 <i class="fas fa-square iAnalytic-Yellow"></i> Excel xx.xx%<br/></af>
														<af>#2 <i class="fas fa-square iAnalytic-Yellow"></i> Word xx.xx%<br/></af>
														<af>#3 <i class="fas fa-square iAnalytic-Yellow"></i> Photoshop xx.xx%<br/></af>
													</div>
													<br></br>
													<div class="float-end yahaha6">
														<a class="btn btn-cta-primary round profile-button other margin-right-m" id="info-button-hard" target="_blank">คลิกเพื่อดูอันดับอื่น ๆ</a> 
														<a class="btn btn-cta-primary-yellow round profile-button" id="other-button" target="_blank">แก้ไขทักษะ</a>
													</div>
												</div>
											</div>
											<div class="text-extra yahaha21 hard-ct2">
												<div class="float-end yahaha6 yahaha34">
													<a class="btn-close profile-button" id="alv-close-button4" target="_blank"></a> 
												</div>
												<hf>อันดับอื่น ๆ<br/></hf>
												<br></br>
											</div>
											<div class="yahaha30 container-fluid align-self-end hard-ct2">
													<div class="scroll-chart-container3">
														<div class="chart-container3">
															<canvas id="hardChart3" width="100" height="1450"></canvas>
														</div>
													</div>
												
											</div>
										</div>
									</div>
								</div>
						    </div>
					</div>
				</div>
			</div>
		);
	}
}

export default BookmarkTabs;
