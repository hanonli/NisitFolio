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
import LoadingS from './loadingS';
import TabBookmark from "./TabBookmark"; 
import cookie from 'react-cookies'

const tooltip_config = {
	titleFont: { family: "'Nunito','Kanit'", },
	bodyFont: { family: "'Nunito','Kanit'", },
	footerFont: { family: "'Nunito','Kanit'", },
	
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
	titleFont: { family: "'Nunito','Kanit'", },
	bodyFont: { family: "'Nunito','Kanit'", },
	footerFont: { family: "'Nunito','Kanit'", },
	
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

const tooltip_config_vertical_formatted = {
	titleFont: { family: "'Nunito','Kanit'", },
	bodyFont: { family: "'Nunito','Kanit'", },
	footerFont: { family: "'Nunito','Kanit'", },
	
	callbacks: {
		title: function(tooltipItems, data) {
			var tooltipItem = tooltipItems[0];
			var txt = tooltipItem.chart.data.hoverLabels[tooltipItem.parsed.y];
			return txt;
		},
		
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
		this.state = {
			render: false, //Set render state to false
			allow: true,
			
			overviewMainCount: 0,
			mainFocusName: '',
			mainFocusCount: 0,
			mainFocusSkillCount: 0,
			main1OverallName: 'xx.xx',
			main2OverallName: 'xx.xx',
			main3OverallName: 'xx.xx',
			main1OverallPercentage: 'xx.xx',
			main2OverallPercentage: 'xx.xx',
			main3OverallPercentage: 'xx.xx',
			main1MyName: 'xx.xx',
			main2MyName: 'xx.xx',
			main3MyName: 'xx.xx',
			main1MyPercentage: 'xx.xx',
			main2MyPercentage: 'xx.xx',
			main3MyPercentage: 'xx.xx',
			main1MyCount: 'x',
			main2MyCount: 'x',
			main3MyCount: 'x',
			
			addRank1: 1,
			addRank2: 1,
			addRank3: 1,
			
			overviewHardCount: 0,
			addOverviewText: 'ทักษะเสริมของคุณ',
			addOverSection: 'analytic-spc topOvSkl-hide',
			hard1Name: 'ที่ 1',
			hard2Name: 'ที่ 2',
			hard3Name: 'ที่ 3',
			hardFocusName: 'รวมทุกอาชีพ',
			hardFocusCount: 0,
			hard1OverallName: 'xx.xx',
			hard2OverallName: 'xx.xx',
			hard3OverallName: 'xx.xx',
			hard1OverallPercentage: 'xx.xx',
			hard2OverallPercentage: 'xx.xx',
			hard3OverallPercentage: 'xx.xx',
			hard1MyName: 'xx.xx',
			hard2MyName: 'xx.xx',
			hard3MyName: 'xx.xx',
			hard1MyPercentage: 'xx.xx',
			hard2MyPercentage: 'xx.xx',
			hard3MyPercentage: 'xx.xx',
			hard1MyCount: 'x',
			hard2MyCount: 'x',
			hard3MyCount: 'x'
		}
	 }
	
	componentDidMount() {
		var userID = null;
		//var userID = '614e14097f9f24b335174051'; var x = userID;
		var x = cookie.load('login-user');
		if(x == 'none'){
			//alert(707);
			this.setState({ redirect: "/landing" });
		}else{
			//alert(808);
			userID = x;
		}
		
		const flag = new Image();
		const flagRv = new Image();
		const you = new Image();
		const avg = new Image();
		const avgYou = new Image();
		const dummy = new Image();
		flag.src = 'assets/images/flag-ch.png'; 
		flagRv.src = 'assets/images/flag-ch-rv.png'; 
		you.src = 'assets/images/you-ch.png'; 
		avg.src = 'assets/images/avg-ch.png'; 
		dummy.src = 'assets/images/dummy.png'; 
		avgYou.src = 'assets/images/avg-you.png'; 
		
		var currentColor = 'grey';

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
		var sumChart1 = new Chart();
		var sumChart2a = new Chart();
		var sumChart2b = new Chart();
		var sumChart2c = new Chart();
		var sumChart3 = new Chart();
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
		
		var currentlyHasNoSkill = false;
		var currentlyHasNoAddSkill = false;
		
		var jobMixed;
		var dataMixed;
		var ord;
		var pct;
		var bgc;
		var idd = 0;
		
		var mainJobMixed;
		var mainData;
		var mainOrd;
		var mainPct;
		var mainColor;
		var idm = 0;
		var formattedJobMixed = [];
		
		var mainFocusScore = [];
		var mainFocusAverage = 50;
		var mainFocusMode = 20;
		var mainFocusMe = 80;
		var norBool = false;
		
		var current_tab = 1;
		//var userID = '614e14097f9f24b335174047';
		var addJobList = [];
		var mainJobList = [];
		var jobMixed = [];
		var rawAdditional = {};
		var rawMain = {};
		var refThis = this;
		
		var rawScore = [];
		var vLabels = [];
		var vPoints = [];
		var disGraphMax = 1;
		
		function ReuseAbleFuncMainOverview(){
			//console.log(idm);
			//console.log(mainJobList);
			//console.log(mainJobList[idm]);
			
			//refThis.setState({ mainFocusName: mainJobList[idm].THname });
			//refThis.setState({ mainFocusCount: rawMain[mainJobList[idm].THname].numberOfUsers });
			
			
			var jList = rawMain.Overview.List;
			refThis.setState({ main1OverallName: jList[0].SkillName, 
				main1OverallPercentage: jList[0].percentage.toFixed(2), main1OverallCount: jList[0].total});
			refThis.setState({ main2OverallName: jList[1].SkillName, 
				main2OverallPercentage: jList[1].percentage.toFixed(2), main2OverallCount: jList[1].total});
			refThis.setState({ main3OverallName: jList[2].SkillName, 
				main3OverallPercentage: jList[2].percentage.toFixed(2), main3OverallCount: jList[2].total});
			
			var myCount = 0; var index = 0; var pickedColor = 0;
			var unmatchedName = [];
			var unmatchedPercentage = [];
			var unmatchedCount = [];
			
			jList.every((entry) => {
				var match = false;
				rawMain.mySkills.forEach((ms) => {
					//console.log(ms);
					console.log('compare: '+entry.SkillName+' with '+ms);
					if(entry.SkillName == ms) match = true;
				});

				if(match){ // found mySkill in JList
					if(myCount == 0){ // first skill
						refThis.setState({ main1MyName: entry.SkillName, 
							main1MyPercentage: entry.percentage.toFixed(2), main1MyCount: entry.total});
					}else if(myCount == 1){ // second skill
						refThis.setState({ main2MyName: entry.SkillName, 
							main2MyPercentage: entry.percentage.toFixed(2), main1MyCount: entry.total});
						$('#myMainSkl2').show();
					}else{ // third skill
						refThis.setState({ main3MyName: entry.SkillName, 
							main3MyPercentage: entry.percentage.toFixed(2), main1MyCount: entry.total});
					}
					myCount = myCount + 1;
					console.log('Found count: '+myCount);
					console.log('Found idx: '+index);
					
					if(index > 2){ // matched & not in top three of overall
						unmatchedName.push(entry.SkillName);
						unmatchedPercentage.push(entry.percentage.toFixed(2));
						unmatchedCount.push(entry.total);
						console.log(unmatchedName);
					}
				}
				if(myCount == jList.length) return false;
				index = index + 1;
				return true
			});
			
			mainJobMixed = [refThis.state.main2OverallName,refThis.state.main1OverallName,refThis.state.main3OverallName];
			mainData = [refThis.state.main2OverallCount,refThis.state.main1OverallCount,refThis.state.main3OverallCount];
			mainOrd = ['#2', '#1', '#3'];
			mainPct = [refThis.state.main2OverallPercentage+'%',refThis.state.main1OverallPercentage+'%', refThis.state.main3OverallPercentage+'%'];
			mainColor = ['rgba(1, 184, 170, 1)','rgba(253, 98, 94, 1)','rgba(242, 200, 15, 1']

			formattedJobMixed = [];
			for(var k in mainJobMixed) {
			   formattedJobMixed.push(mainJobMixed[k].replace(' ','\n'));
			}

			//$('.hard-lv1').addClass("animate-hard-lv1");
		}
	
		function ReuseAbleFuncAddOverview(){
				//refThis.setState({ hardFocusName: addJobList[idd].THname });
				//refThis.setState({ hardFocusCount: rawAdditional[addJobList[idd].name].numberOfUsers });
				
				var jList = rawAdditional.Overview.List;
				refThis.setState({ hard1OverallName: jList[0].AdditionalSkill, 
					hard1OverallPercentage: jList[0].percentage.toFixed(2), hard1OverallCount: jList[0].total});
				refThis.setState({ hard2OverallName: jList[1].AdditionalSkill, 
					hard2OverallPercentage: jList[1].percentage.toFixed(2), hard2OverallCount: jList[1].total});
				refThis.setState({ hard3OverallName: jList[2].AdditionalSkill, 
					hard3OverallPercentage: jList[2].percentage.toFixed(2), hard3OverallCount: jList[2].total});
				
				var myCount = 0; var index = 0; var pickedColor = 0;
				var unmatchedName = [];
				var unmatchedPercentage = [];
				var unmatchedCount = [];
				var unmatchedOrder = [];
				
				$('#myOvSkl1').hide();
				$('#myOvSkl2').hide();
				$('#myOvSkl3').hide();
				refThis.setState({ hard1MyName: 'unknown', hard1MyPercentage: '0.00%', hard1MyCount: 0});
				refThis.setState({ hard2MyName: 'unknown', hard2MyPercentage: '0.00%', hard2MyCount: 0});
				refThis.setState({ hard3MyName: 'unknown', hard3MyPercentage: '0.00%', hard3MyCount: 0});
				if(rawAdditional.mySkills.length == 0){
					// no skills
					currentlyHasNoAddSkill = true;
				}else{
					currentlyHasNoAddSkill = false;
					//$('.skill-found').show();
				}
				if(rawAdditional.mySkills.length > 0){
					$('#myOvSkl1').show();
				}
				if(rawAdditional.mySkills.length > 1){
					$('#myOvSkl2').show();
				}
				if(rawAdditional.mySkills.length > 2){
					$('#myOvSkl3').show();
				}
				//Reset
				//$('#analytic-lower-buttons').show();
				//$('#skl-not-found').addClass('skill-not-found');
				var idx=0;
				jList.every((entry) => {
					idx += 1;
					var match = false;
					rawAdditional.mySkills.forEach((ms) => {
						//console.log(ms);
						console.log('compare: '+entry.AdditionalSkill+' with '+ms);
						if(entry.AdditionalSkill == ms) match = true;
					});

					if(match){ // found mySkill in JList
						if(myCount == 0){ // first skill
							refThis.setState({ hard1MyName: entry.AdditionalSkill, 
								addRank1: idx,
								hard1MyPercentage: entry.percentage.toFixed(2), hard1MyCount: entry.total});
							if(index == 0){
								$('#myOvSklc1').css("color", "rgba(253, 98, 94, 1)");
								$('#mySklc1').css("color", "rgba(253, 98, 94, 1)");
								console.log('set-color1 red!');
							}else if(index == 1){
								$('#myOvSklc1').css("color", "rgba(1, 184, 170, 1)");
								$('#mySklc1').css("color", "rgba(1, 184, 170, 1)");
								console.log('set-color1 green!');
							}else if(index == 2){
								$('#myOvSklc1').css("color", "rgba(242, 200, 15, 1)");
								$('#mySklc1').css("color", "rgba(242, 200, 15, 1)");
								console.log('set-color1 Yellow!');
							}else{
								pickedColor += 1;
								$('#myOvSklc1').css("color", "rgba(138, 212, 235, 1)");
								$('#mySklc1').css("color", "rgba(138, 212, 235, 1)");
								console.log('set-color1 azure!');
							}
						}else if(myCount == 1){ // second skill
							console.log('set-color2!');
							refThis.setState({ hard2MyName: entry.AdditionalSkill, 
								addRank2: idx,
								hard2MyPercentage: entry.percentage.toFixed(2), hard1MyCount: entry.total});
							if(index == 1){
								$('#myOvSklc2').css("color", "rgba(1, 184, 170, 1)");
								$('#mySklc2').css("color", "rgba(1, 184, 170, 1)");
								console.log('set-color2 green!');
							}else if(index == 2){
								$('#myOvSklc2').css("color", "rgba(242, 200, 15, 1)");
								$('#mySklc2').css("color", "rgba(242, 200, 15, 1)");
								console.log('set-color2 Yellow!');
							}else{
								if(pickedColor == 0){
									$('#myOvSklc2').css("color", "rgba(138, 212, 235, 1)");
									$('#mySklc2').css("color", "rgba(138, 212, 235, 1)");
									console.log('set-color2 azure!');
								}else{
									$('#myOvSklc2').css("color", "rgba(166, 105, 153, 1)");
									$('#mySklc2').css("color", "rgba(166, 105, 153, 1)");
									console.log('set-color2 purple!');
								}
								pickedColor += 1;
							}
						}else{ // third skill
							console.log('set-color3!');
							refThis.setState({ hard3MyName: entry.AdditionalSkill, 
								addRank3: idx,
								hard3MyPercentage: entry.percentage.toFixed(2), hard1MyCount: entry.total});
							if(index == 2){
								$('#myOvSklc3').css("color", "rgba(242, 200, 15, 1)");
								$('#mySklc3').css("color", "rgba(242, 200, 15, 1)");
							}else{
								if(pickedColor == 0){
									$('#myOvSklc3').css("color", "rgba(138, 212, 235, 1)");
									$('#mySklc3').css("color", "rgba(138, 212, 235, 1)");
								}else if(pickedColor == 1){
									$('#myOvSklc3').css("color", "rgba(166, 105, 153, 1)");
									$('#mySklc3').css("color", "rgba(166, 105, 153, 1)");
								}else{
									$('#myOvSklc3').css("color", "rgba(254, 150, 102, 1)");
									$('#mySklc3').css("color", "rgba(254, 150, 102, 1)");
								}
								pickedColor += 1;
							}
						}

						myCount = myCount + 1;
						console.log('Found count: '+myCount);
						console.log('Found idx: '+index);
						
						if(index > 2){ // matched & not in top three of overall
							unmatchedName.push(entry.AdditionalSkill);
							unmatchedPercentage.push(entry.percentage.toFixed(2));
							unmatchedCount.push(entry.total);
							unmatchedOrder.push('#'+idx);
							console.log(unmatchedName);
						}
					}

					if(myCount == jList.length) return false;
					index = index + 1;
					return true
				});
				
				jobMixed = [refThis.state.hard2OverallName,refThis.state.hard1OverallName,refThis.state.hard3OverallName];
				dataMixed = [refThis.state.hard2OverallCount,refThis.state.hard1OverallCount,refThis.state.hard3OverallCount];
				ord = ['#2', '#1', '#3'];
				pct = [refThis.state.hard2OverallPercentage+'%',refThis.state.hard1OverallPercentage+'%', refThis.state.hard3OverallPercentage+'%'];
				bgc = ['rgba(1, 184, 170, 1)','rgba(253, 98, 94, 1)','rgba(242, 200, 15, 1']
				if(unmatchedName.length == 1){
					jobMixed.push(unmatchedName[0]);
					ord.push(unmatchedOrder[0]);
					pct.push(unmatchedPercentage[0]+'%');
					dataMixed.push(unmatchedCount[0]);
					bgc.push('rgba(138, 212, 235, 1)');
				}else if(unmatchedName.length == 2){
					jobMixed.unshift(unmatchedName[0]);
					jobMixed.push(unmatchedName[1]);
					ord.unshift(unmatchedOrder[0]);
					ord.push(unmatchedOrder[1]);
					pct.unshift(unmatchedPercentage[0]+'%');
					pct.push(unmatchedPercentage[1]+'%');
					dataMixed.unshift(unmatchedCount[0]);
					dataMixed.push(unmatchedCount[1]);
					bgc.unshift('rgba(138, 212, 235, 1)');
					bgc.push('rgba(166, 105, 153, 1)');
				}else if(unmatchedName.length == 3){
					jobMixed.unshift(unmatchedName[0]);
					jobMixed.push(unmatchedName[1]);
					jobMixed.push(unmatchedName[2]);
					ord.unshift(unmatchedOrder[0]);
					ord.push(unmatchedOrder[1]);
					ord.push(unmatchedOrder[2]);
					pct.unshift(unmatchedPercentage[0]+'%');
					pct.push(unmatchedPercentage[1]+'%');
					pct.push(unmatchedPercentage[2]+'%');
					dataMixed.unshift(unmatchedCount[0]);
					dataMixed.push(unmatchedCount[1]);
					dataMixed.push(unmatchedCount[2]);
					bgc.unshift('rgba(138, 212, 235, 1)');
					bgc.push('rgba(166, 105, 153, 1)');
					bgc.push('rgba(254, 150, 102, 1)');
				}else{
					// all matched
				}
				formattedJobMixed = [];
				for(var k in jobMixed) {
				   formattedJobMixed.push(jobMixed[k].replace(' ','\n'));
				}
			}
			
		function ReuseAbleFuncMain(){
			console.log(idm);
			console.log(mainJobList);
			console.log(mainJobList[idm]);
			refThis.setState({ mainFocusName: mainJobList[idm].THname });
			refThis.setState({ mainFocusCount: rawMain[mainJobList[idm].name].numberOfUsers });

			var jList = rawMain[mainJobList[idm].name].List;
			refThis.setState({ main1OverallName: jList[0].SkillName, 
				main1OverallPercentage: jList[0].percentage.toFixed(2), main1OverallCount: jList[0].total});
			refThis.setState({ main2OverallName: jList[1].SkillName, 
				main2OverallPercentage: jList[1].percentage.toFixed(2), main2OverallCount: jList[1].total});
			refThis.setState({ main3OverallName: jList[2].SkillName, 
				main3OverallPercentage: jList[2].percentage.toFixed(2), main3OverallCount: jList[2].total});
			
			var myCount = 0; var index = 0; var pickedColor = 0; var matchCount = 0;
			var unmatchedName = [];
			var unmatchedPercentage = [];
			var unmatchedCount = [];
			var unmatchedOrder = [];
			
			$('#myMainSkl1').hide();
			$('#myMainSkl2').hide();
			$('#myMainSkl3').hide();
			//Reset
			$('#analytic-lower-buttons-main').show(); //show default lower right buttons
			$('#skl-not-found-main').addClass('skill-not-found'); //hide lower right not found block
			$('#analytic-lower-buttons-main-not-found').hide(); // hide graph buttons
			
			if(rawMain.mySkills.length == 0){
				//$('#mySkl1').show();
				currentlyHasNoSkill = true;
				/*$('#skl-not-found').removeClass('skill-not-found');
				$('.skill-found').hide();
				$('#analytic-lower-buttons').hide();*/
			}else{
				currentlyHasNoSkill = false;
				//$('.skill-found').show();
			}
			
			var idx=0;
			jList.every((entry) => {
				idx += 1;
				var match = false;
				rawMain.mySkills.forEach((ms) => {
					//console.log(ms);
					console.log('compare: '+entry.SkillName+' with '+ms);
					if(entry.SkillName == ms) match = true;
				});

				if(match){ // found mySkill in JList
					matchCount += 1;
					if(myCount == 0){ // first skill
						refThis.setState({ main1MyName: entry.SkillName, 
							main1MyPercentage: entry.percentage.toFixed(2), main1MyCount: entry.total});
						if(index == 0){
							$('#myMainSklc1').css("color", "rgba(253, 98, 94, 1)");
							console.log('set-color1 red!');
						}else if(index == 1){
							$('#myMainSklc1').css("color", "rgba(1, 184, 170, 1)");
							console.log('set-color1 green!');
						}else if(index == 2){
							$('#myMainSklc1').css("color", "rgba(242, 200, 15, 1)");
							console.log('set-color1 Yellow!');
						}else{
							pickedColor += 1;
							$('#myMainSklc1').css("color", "rgba(138, 212, 235, 1)");
							console.log('set-color1 azure!');
						}
						$('#myMainSkl1').show();
					}else if(myCount == 1){ // second skill
						console.log('set-color2!');
						refThis.setState({ main2MyName: entry.SkillName, 
							main2MyPercentage: entry.percentage.toFixed(2), main1MyCount: entry.total});
						if(index == 1){
							$('#myMainSklc2').css("color", "rgba(1, 184, 170, 1)");
							console.log('set-color2 green!');
						}else if(index == 2){
							$('#myMainSklc2').css("color", "rgba(242, 200, 15, 1)");
							console.log('set-color2 Yellow!');
						}else{
							if(pickedColor == 0){
								$('#myMainSklc2').css("color", "rgba(138, 212, 235, 1)");
								console.log('set-color2 azure!');
							}else{
								$('#myMainSklc2').css("color", "rgba(166, 105, 153, 1)");
								console.log('set-color2 purple!');
							}
							pickedColor += 1;
						}
						$('#myMainSkl2').show();
					}else{ // third skill
						console.log('set-color3!');
						refThis.setState({ main3MyName: entry.SkillName, 
							main3MyPercentage: entry.percentage.toFixed(2), main1MyCount: entry.total});
						if(index == 2){
							$('#myMainSklc3').css("color", "rgba(242, 200, 15, 1)");
						}else{
							if(pickedColor == 0){
								$('#myMainSklc3').css("color", "rgba(138, 212, 235, 1)");
							}else if(pickedColor == 1){
								$('#myMainSklc3').css("color", "rgba(166, 105, 153, 1)");
							}else{
								$('#myMainSklc3').css("color", "rgba(254, 150, 102, 1)");
							}
							pickedColor += 1;
						}
						$('#myMainSkl3').show();
					}
					myCount = myCount + 1;
					console.log('Found count: '+myCount);
					console.log('Found idx: '+index);
					console.log('pickedColor count: '+pickedColor);
					
					if(index > 2){ // matched & not in top three of overall
						unmatchedName.push(entry.SkillName);
						unmatchedPercentage.push(entry.percentage.toFixed(2));
						unmatchedCount.push(entry.total);
						console.log(unmatchedName);
						unmatchedOrder.push('#'+idx);
					}
				}
				if(myCount == jList.length) return false;
				index = index + 1;
				return true
			});
			
			if(matchCount == 0){ // no myskill matched
				alert('NO SKL!');
				//no skills
				$('#skl-not-found-main').removeClass('skill-not-found'); //show lower right not found block
				$('.skill-found').hide();
				$('#analytic-lower-buttons-main').hide(); //hide default lower right buttons
				$('#analytic-lower-buttons-main-not-found').show(); // show graph buttons
			}else{
				$('.skill-found').show();
			}
			
			mainJobMixed = [refThis.state.main2OverallName,refThis.state.main1OverallName,refThis.state.main3OverallName];
			mainData = [refThis.state.main2OverallCount,refThis.state.main1OverallCount,refThis.state.main3OverallCount];
			mainOrd = ['#2', '#1', '#3'];
			mainPct = [refThis.state.main2OverallPercentage+'%',refThis.state.main1OverallPercentage+'%', refThis.state.main3OverallPercentage+'%'];
			mainColor = ['rgba(1, 184, 170, 1)','rgba(253, 98, 94, 1)','rgba(242, 200, 15, 1']
			if(unmatchedName.length == 1){
				mainJobMixed.push(unmatchedName[0]);
				mainOrd.push(unmatchedOrder[0]);
				mainPct.push(unmatchedPercentage[0]+'%');
				mainData.push(unmatchedCount[0]);
				mainColor.push('rgba(138, 212, 235, 1)');
			}else if(unmatchedName.length == 2){
				mainJobMixed.unshift(unmatchedName[0]);
				mainJobMixed.push(unmatchedName[1]);
				mainOrd.unshift(unmatchedOrder[0]);
				mainOrd.push(unmatchedOrder[1]);
				mainPct.unshift(unmatchedPercentage[0]+'%');
				mainPct.push(unmatchedPercentage[1]+'%');
				mainData.unshift(unmatchedCount[0]);
				mainData.push(unmatchedCount[1]);
				mainColor.unshift('rgba(138, 212, 235, 1)');
				mainColor.push('rgba(166, 105, 153, 1)');
			}else if(unmatchedName.length == 3){
				mainJobMixed.unshift(unmatchedName[0]);
				mainJobMixed.push(unmatchedName[1]);
				mainJobMixed.push(unmatchedName[2]);
				mainOrd.unshift(unmatchedOrder[0]);
				mainOrd.push(unmatchedOrder[1]);
				mainOrd.push(unmatchedOrder[2]);
				mainPct.unshift(unmatchedPercentage[0]+'%');
				mainPct.push(unmatchedPercentage[1]+'%');
				mainPct.push(unmatchedPercentage[2]+'%');
				mainData.unshift(unmatchedCount[0]);
				mainData.push(unmatchedCount[1]);
				mainData.push(unmatchedCount[2]);
				mainColor.unshift('rgba(138, 212, 235, 1)');
				mainColor.push('rgba(166, 105, 153, 1)');
				mainColor.push('rgba(254, 150, 102, 1)');
			}else{
				// all matched
			}
			formattedJobMixed = [];
			for(var k in mainJobMixed) {
			   formattedJobMixed.push(mainJobMixed[k].replace(' ','\n'));
			}

			//$('.hard-lv1').addClass("animate-hard-lv1");
		}
		
		function ReuseAbleFuncAdd(){
			refThis.setState({ hardFocusName: addJobList[idd].THname });
			refThis.setState({ hardFocusCount: rawAdditional[addJobList[idd].name].numberOfUsers });
			
			var jList = rawAdditional[addJobList[idd].name].List;
			refThis.setState({ hard1OverallName: jList[0].AdditionalSkill, 
				hard1OverallPercentage: jList[0].percentage.toFixed(2), hard1OverallCount: jList[0].total});
			refThis.setState({ hard2OverallName: jList[1].AdditionalSkill, 
				hard2OverallPercentage: jList[1].percentage.toFixed(2), hard2OverallCount: jList[1].total});
			refThis.setState({ hard3OverallName: jList[2].AdditionalSkill, 
				hard3OverallPercentage: jList[2].percentage.toFixed(2), hard3OverallCount: jList[2].total});
			
			var myCount = 0; var index = 0; var pickedColor = 0;
			var unmatchedName = [];
			var unmatchedPercentage = [];
			var unmatchedCount = [];
			var unmatchedOrder = [];
			
			$('#mySkl1').hide();
			$('#mySkl2').hide();
			$('#mySkl3').hide();
			refThis.setState({ hard1MyName: 'unknown', hard1MyPercentage: '0.00%', hard1MyCount: 0});
			refThis.setState({ hard2MyName: 'unknown', hard2MyPercentage: '0.00%', hard2MyCount: 0});
			refThis.setState({ hard3MyName: 'unknown', hard3MyPercentage: '0.00%', hard3MyCount: 0});
			//Reset
			$('#analytic-lower-buttons').show(); // show default lower-right buttons
			$('#skl-not-found').addClass('skill-not-found'); // hide lower-right not found block
			$('#analytic-lower-buttons-not-found').hide(); // hide graph lower button

			if(rawAdditional.mySkills.length == 0){
				//alert('add skill not found!');
				//$('#mySkl1').show();
				currentlyHasNoAddSkill = true;
				$('#skl-not-found-add').removeClass('skill-not-found'); // show lower-right not found block
				$('.skill-found').hide();
				$('#analytic-lower-buttons').hide(); // hide default lower-right buttons
				$('#analytic-lower-buttons-not-found').show();
			}else{
				currentlyHasNoAddSkill = false;
				//alert('add skill found!');
				$('.skill-found').show();
			}
			if(rawAdditional.mySkills.length > 0){
				$('#mySkl1').show();
			}
			if(rawAdditional.mySkills.length > 1){
				$('#mySkl2').show();
			}
			if(rawAdditional.mySkills.length > 2){
				$('#mySkl3').show();
			}
			
			var idx=0;
			jList.every((entry) => {
				idx += 1;
				var match = false;
				rawAdditional.mySkills.forEach((ms) => {
					//console.log(ms);
					console.log('compare: '+entry.AdditionalSkill+' with '+ms);
					if(entry.AdditionalSkill == ms) match = true;
				});

				if(match){ // found mySkill in JList
					if(myCount == 0){ // first skill
						refThis.setState({ hard1MyName: entry.AdditionalSkill, 
							hard1MyPercentage: entry.percentage.toFixed(2), hard1MyCount: entry.total});
						if(index == 0){
							$('#mySklc1').css("color", "rgba(253, 98, 94, 1)");
							console.log('set-color1 red!');
						}else if(index == 1){
							$('#mySklc1').css("color", "rgba(1, 184, 170, 1)");
							console.log('set-color1 green!');
						}else if(index == 2){
							$('#mySklc1').css("color", "rgba(242, 200, 15, 1)");
							console.log('set-color1 Yellow!');
						}else{
							pickedColor += 1;
							$('#mySklc1').css("color", "rgba(138, 212, 235, 1)");
							console.log('set-color1 azure!');
						}
					}else if(myCount == 1){ // second skill
						console.log('set-color2!');
						refThis.setState({ hard2MyName: entry.AdditionalSkill, 
							hard2MyPercentage: entry.percentage.toFixed(2), hard1MyCount: entry.total});
						if(index == 1){
							$('#mySklc2').css("color", "rgba(1, 184, 170, 1)");
							console.log('set-color2 green!');
						}else if(index == 2){
							$('#mySklc2').css("color", "rgba(242, 200, 15, 1)");
							console.log('set-color2 Yellow!');
						}else{
							if(pickedColor == 0){
								$('#mySklc2').css("color", "rgba(138, 212, 235, 1)");
								console.log('set-color2 azure!');
							}else{
								$('#mySklc2').css("color", "rgba(166, 105, 153, 1)");
								console.log('set-color2 purple!');
							}
							pickedColor += 1;
						}
					}else{ // third skill
						console.log('set-color3!');
						refThis.setState({ hard3MyName: entry.AdditionalSkill, 
							hard3MyPercentage: entry.percentage.toFixed(2), hard1MyCount: entry.total});
						if(index == 2){
							$('#mySklc3').css("color", "rgba(242, 200, 15, 1)");
							console.log('set-color3 yellow!');
						}else{
							if(pickedColor == 0){
								$('#mySklc3').css("color", "rgba(138, 212, 235, 1)");
								console.log('set-color3 azure!');
							}else if(pickedColor == 1){
								$('#mySklc3').css("color", "rgba(166, 105, 153, 1)");
								console.log('set-color3 purple!');
							}else{
								$('#mySklc3').css("color", "rgba(254, 150, 102, 1)");
								console.log('set-color3 orange!');
							}
							pickedColor += 1;
						}
					}

					myCount = myCount + 1;
					console.log('Found count: '+myCount);
					console.log('Found idx: '+index);
					
					if(index > 2){ // matched & not in top three of overall
						unmatchedName.push(entry.AdditionalSkill);
						unmatchedPercentage.push(entry.percentage.toFixed(2));
						unmatchedCount.push(entry.total);
						unmatchedOrder.push('#'+idx);
						console.log(unmatchedName);
					}
				}

				if(myCount == jList.length) return false;
				index = index + 1;
				return true
			});
			
			jobMixed = [refThis.state.hard2OverallName,refThis.state.hard1OverallName,refThis.state.hard3OverallName];
			dataMixed = [refThis.state.hard2OverallCount,refThis.state.hard1OverallCount,refThis.state.hard3OverallCount];
			ord = ['#2', '#1', '#3'];
			pct = [refThis.state.hard2OverallPercentage+'%',refThis.state.hard1OverallPercentage+'%', refThis.state.hard3OverallPercentage+'%'];
			bgc = ['rgba(1, 184, 170, 1)','rgba(253, 98, 94, 1)','rgba(242, 200, 15, 1']
			if(unmatchedName.length == 1){
				jobMixed.push(unmatchedName[0]);
				ord.push(unmatchedOrder[0]);
				pct.push(unmatchedPercentage[0]+'%');
				dataMixed.push(unmatchedCount[0]);
				bgc.push('rgba(138, 212, 235, 1)');
			}else if(unmatchedName.length == 2){
				jobMixed.unshift(unmatchedName[0]);
				jobMixed.push(unmatchedName[1]);
				ord.unshift(unmatchedOrder[0]);
				ord.push(unmatchedOrder[1]);
				pct.unshift(unmatchedPercentage[0]+'%');
				pct.push(unmatchedPercentage[1]+'%');
				dataMixed.unshift(unmatchedCount[0]);
				dataMixed.push(unmatchedCount[1]);
				bgc.unshift('rgba(138, 212, 235, 1)');
				bgc.push('rgba(166, 105, 153, 1)');
			}else if(unmatchedName.length == 3){
				jobMixed.unshift(unmatchedName[0]);
				jobMixed.push(unmatchedName[1]);
				jobMixed.push(unmatchedName[2]);
				ord.unshift(unmatchedOrder[0]);
				ord.push(unmatchedOrder[1]);
				ord.push(unmatchedOrder[2]);
				pct.unshift(unmatchedPercentage[0]+'%');
				pct.push(unmatchedPercentage[1]+'%');
				pct.push(unmatchedPercentage[2]+'%');
				dataMixed.unshift(unmatchedCount[0]);
				dataMixed.push(unmatchedCount[1]);
				dataMixed.push(unmatchedCount[2]);
				bgc.unshift('rgba(138, 212, 235, 1)');
				bgc.push('rgba(166, 105, 153, 1)');
				bgc.push('rgba(254, 150, 102, 1)');
			}else{
				// all matched
			}
			formattedJobMixed = [];
			for(var k in jobMixed) {
			   formattedJobMixed.push(jobMixed[k].replace(' ','\n'));
			}
		}
			
		function AdditionalSkillManager(){
			//$('#hardHeader1').text('งานที่ 1'); $('#hardHeader2').text('งานที่ 1');
			
			if(rawAdditional.InterestedJobs.length > 0)
				ReuseAbleFuncAdd();
			else
				ReuseAbleFuncAddOverview();
			
			$('.hard-lv1').addClass("animate-hard-lv1");
			
			var hardChart2Config = {
				type: 'bar',
				data: {
					  labels: formattedJobMixed,
					  orders: ord,
					  percentages: pct,
					  datasets: [
						{
						  label: '# จำนวน',
						  categoryPercentage: 0.9,
						  barPercentage: 1.0,
						  data: dataMixed,
						  backgroundColor: bgc,
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
							top: 100
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
								size: w < 512 ? 12 : 18,
								weight: 'bold',
								family: "'Nunito','Kanit'",
							  };
							},
							formatter: function(value, context) {
								var text = context.chart.data.labels[context.dataIndex];
								if(context.chart.data.labels.length > 4 )
									return '';
								
								if(text.length < 13){
									return text;
								}else{
									return text.substring(0,13)+'...';
									//return text.substring(0,20)+'\n'+text.substring(20,text.length);
								}
							}
						  },
						  middleLabel: {
							font: function(context) {
							  var w = context.chart.width;
							  return {
								size: w < 512 ? 24 : 32,
								weight: 'bold',
								family: "'Nunito','Kanit'",
							  };
							},
							formatter: function(value, context) {
								var val = context.chart.data.orders[context.dataIndex];
								if(val == '#1' || val == '#2' || val == '#3')
									return val;
								else
									return '';
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
								family: "'Nunito','Kanit'",
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
			
			$("#hardChart2").remove();
			$("#hc2-container").append('<canvas id="hardChart2" width="100" height="450"></canvas>');
			var ctxH2 = document.getElementById("hardChart2").getContext("2d");
			setTimeout(function() { $('.hard-lv1').css('display', 'none'); $('.hard-lv2').css('display', 'block'); }, 200);
			setTimeout(function() { $('.hard-lv2').addClass("animate-hard-lv2"); }, 300);
			setTimeout(function() {
				console.log(hardChart2Config);
				hardChart2 = new Chart(ctxH2, hardChart2Config); console.log(hardChart2);
			}, 400);
		}

		function GenerateDistributionChartData(config,index,key){
				disGraphMax = 0;
				
				/* for testing */
				/*var scores = [5.5,7.5,7.7];
				var count = [2,8,1];
				
				var mean = 9;
				var mode1 = -1;
				var mode2 = -1;
				var youScr = null;*/
				
				/* real input */
				var scores = [];
				var count = [];
				
				var mean = 8.4;
				var mode1 = -1;
				var mode2 = -1;
				var youScr = 2.6;
				
				var z1Count=0;
				var z2Count=0;
				var z3Count=0;
				
				var jList = null;
				
				if(key == 'overview'){
					jList = rawMain.Overview.List;
				}else{
					jList = rawMain[mainJobList[key].name].List
				}

				jList.every((entry) => {
					if(entry.SkillName == config.data.labels[index].replace('\n',' ')){ // this skill wasn't shown
						refThis.setState({ mainFocusSkillCount: entry.total });
						console.log('match bar clicked: '+entry.SkillName);
						
						mean = Number(entry.Mean.toFixed(2));
						youScr = entry.UserScore;
						var meanPos=0; var addMean = true;
						for (let i = 0; i < entry.AllScore.length; i++) {
							if(entry.AllScore[i] == mean){
								addMean = false;
								break;
							}		
						}
						if(addMean){ // add mean as vertice
							console.log('search for mean');
							var foundMean=false;
							for (let i = 0; i < entry.AllScore.length; i++) {				
								if(!foundMean && entry.AllScore[i] > mean){
									meanPos = i;
									foundMean = true;
								}
								scores.push(entry.AllScore[i]);
								count.push(entry.Count[i]);
							}
							scores.splice(meanPos, 0, mean);
							var dumMean = 0;
							dumMean = (count[meanPos-1] + count[meanPos]) / 2;
							//alert(dumMean);
							count.splice(meanPos, 0, dumMean);
						}else{
							console.log('mean is already include');
							for (let i = 0; i < entry.AllScore.length; i++) {			
								scores.push(entry.AllScore[i]);
								count.push(entry.Count[i]);
							}
						}
						
						
						if(entry.Mode.length > 0){ // display flag (mode pos)
							if(entry.Mode.length < 2){ // display single flag
								mode1 = entry.Mode[0];
							}else{ // display two flags
								mode1 = entry.Mode[0];
								mode2 = entry.Mode[1];
							}
						}
						
						return false;
					}
					return true;
				});
				
				console.log(scores);
				
				vLabels = [];
				vPoints = [];
				
				for (let i = 0; i < count.length; i++) {
					if(count[i] > disGraphMax) disGraphMax = count[i];
					
					if(scores[i] < 5) 
						z1Count += 1;
					else if(scores[i] < 7.5) 
						z2Count += 1;
					else if(scores[i] < 10) 
						z3Count += 1;
				}
				
				disGraphMax *= 1.5;
				
				//alert(disGraphMax);
				
				for (let i = 0; i < scores.length; i++) {
					if(scores[i] == 2.5){
						vLabels.push('พอได้เล็กน้อย');
					}else if(scores[i] == 5){
						vLabels.push('พอใช้');
					}else if(scores[i] == 7.5){
						vLabels.push('ดี');
					}else if(scores[i] == 10){
						vLabels.push('ยอดเยี่ยม');
					}else{
						//if(scores[i] == youScr || scores[i] == mean || scores[i] == mode1 || scores[i] == mode2)
							vLabels.push(scores[i]);
						//else
						//	vLabels.push('');
					}
					
					if(scores[i] == youScr){
						console.log('set you! at: '+i);
						if(scores[i] == mean)
							vPoints.push(avgYou);
						else
							vPoints.push(you);
					}else if(scores[i] == mean){
						console.log('set mean! at: '+i);
						vPoints.push(avg);
					}else if(scores[i] == mode1 && mode1 != -1){
						console.log('set mode1! at: '+i);
						if(mode2 != -1)
							vPoints.push(flagRv);
						else
							vPoints.push(flag);
					}else if(scores[i] == mode2 && mode2 != -1){
						console.log('set mode2! at: '+i);
						vPoints.push(flag);
					}else{
						console.log('set dummy! at: '+i);
						vPoints.push(dummy);
					}
				}

				if(!scores.includes(2.5)){
					scores.unshift(2.5);
					count.unshift(0);
					vLabels.unshift('พอได้เล็กน้อย');
					vPoints.unshift(dummy);
				}
				
				if(!scores.includes(10)){
					scores.push(10);
					count.push(0);
					vLabels.push('ยอดเยี่ยม');
					vPoints.push(dummy);
				}
				
				var goodIndex=0;
				if(!scores.includes(5)){
					for (let i = 0; i < scores.length; i++) {
					  console.log('check 5 => val: '+scores[i]);
					  if(scores[i] > 5){ 
						goodIndex = i;
						break;
					  }
					}
					
					if(goodIndex == 0){ // only 2.5
						scores.splice(goodIndex+1, 0, 'SP1');
						var dumGood = 0;
						if(z1Count > 0 && z2Count > 0)
							dumGood = (count[goodIndex] + count[goodIndex+1]) / 2;
						count.splice(goodIndex+1, 0, dumGood);
						vLabels.splice(goodIndex+1, 0, 'พอใช้');
						vPoints.splice(goodIndex+1, 0, dummy);
					}else{
						scores.splice(goodIndex, 0, 'SP1');
						var dumGood = 0;
						if(z1Count > 0 && z2Count > 0)
							dumGood = (count[goodIndex-1] + count[goodIndex]) / 2;
						count.splice(goodIndex, 0, dumGood);
						vLabels.splice(goodIndex, 0, 'พอใช้');
						vPoints.splice(goodIndex, 0, dummy);
					}
				}
				
				
				var betterIndex=0;
				if(!scores.includes(7.5)){
					for (let i = 0; i < scores.length; i++) {
					  console.log('check 7.5,, i: '+i+'+ => val: '+scores[i]);
					  if(scores[i] == 'SP1') continue;
					  if(scores[i] > 7.5){ 
						betterIndex = i;
						break;
					  }
					}
					if(betterIndex == scores.length-1){ // only 10
						scores.splice(betterIndex, 0, 'SP2');
						var dumGood = 0;
						if(z2Count > 0 && z3Count > 0)
							dumGood = (count[betterIndex-1] + count[betterIndex]) / 2;
						count.splice(betterIndex, 0, dumGood);
						vLabels.splice(betterIndex, 0, 'ดี');
						vPoints.splice(betterIndex, 0, dummy);
					}else{
						scores.splice(betterIndex, 0, 'SP2');
						var dumGood = 0;
						if(z2Count > 0 && z3Count > 0)
							dumGood = (count[betterIndex-1] + count[betterIndex]) / 2;
						count.splice(betterIndex, 0, dumGood);
						vLabels.splice(betterIndex, 0, 'ดี');
						vPoints.splice(betterIndex, 0, dummy);
					}
				}
				
				rawScore = count;
				/*for (let i = 0; i < scores.length; i++) {
					rawScore[i]
				}*/
				
				
				console.log(scores);
				console.log(count);
				console.log(vLabels);
				console.log(vPoints);
			
			    /*rawScore = [0,1,2,1,1.5,2,1.5,1,2,5,4,1,0];
				
				vLabels = ['กาก','3','3.7','4.2','ได้บ้าง','6.2','ดี','8','8.1','8.4','8.7','9.5','ยอดเยี่ยม'];
				
				vPoints = [dummy,dummy,,dummy,dummy,dummy,dummy,dummy,avgYou,dummy,flag,dummy,dummy,dummy];*/
				
				/*
				var jList = rawMain.Overview.List;
				var userScore = -1;
				var mean = -1;
				jList.every((entry) => {
					if(entry.SkillName == config.data.labels[index].replace('\n',' ')){ // this skill wasn't shown
						refThis.setState({ mainFocusSkillCount: entry.total });
						console.log('match bar clicked: '+entry.SkillName);
						//rawScore = entry.AllScore;
						
						if(entry.Mode.length > 0){ // display flag (mode pos)
							if(entry.Mode.length < 2){ // display single flag
								var mode = entry.Mode[0].toFixed(1)*10;
								vPoints[mode-1] = flag;
							}else{ // display two flags
								var mode1 = entry.Mode[0].toFixed(1)*10;
								var mode2 = entry.Mode[1].toFixed(1)*10;
								vPoints[mode1-1] = flagRv;
								vPoints[mode2-1] = flag;
							}
						}
						
						if(entry.UserScore !== null){
							userScore = entry.UserScore.toFixed(1)*10;
							vPoints[userScore-1] = you;
						}
						
						mean = entry.Mean.toFixed(1)*10;
						if(vPoints[mean-1] == you) //stack
							vPoints[mean-1] = avgYou;
						else
							vPoints[mean-1] = avg;
						
						var i=0;
						for(var k in entry.AllScore) {
						   var temp = entry.AllScore[k].toFixed(1)*10; 
						   //rawScore.push(entry.AllScore[k].toFixed(1)*10);
						   rawScore[temp] = entry.Count[i];
						   if(entry.Count[i] > disGraphMax) disGraphMax = entry.Count[i];
						   i++;
						}
						disGraphMax = disGraphMax*1.5;
						return false;
					}
					return true;
				});
				
				console.log(rawScore);*/
				
				//rawScore = rawScore.filter(function(e) { return e !== 0 })
				
				/*var pos=0; var step=0; var currentScore=0;
				for(var k in rawScore) {
					if(rawScore[k] == 0 && k != 99){
						step += 1;
					}else{
						var x = 0;
						var stepVal = 0;
						console.log('stepVal: '+stepVal);
						console.log('compare next score: '+rawScore[k]+' with: '+currentScore);
						
						if(rawScore[k] < rawScore[pos+x]){ // current < old => go down
							stepVal = -( (rawScore[pos+x]-rawScore[k]) / step);
							console.log('down to: '+stepVal);
						}else if(rawScore[k] > rawScore[pos+x]){ // current > old => go up
							stepVal = (rawScore[k]-rawScore[pos+x]) / step;
						}
						console.log('step count: '+step+' step val: '+stepVal);
						console.log('current index (k): '+k);
						while(x != step && pos+x < k){
							//console.log('pos'+pos);
							//console.log('x:'+x);
							
							rawScore[pos+x] = currentScore+stepVal*x;
							console.log('step at: '+(pos+x)+' value: '+rawScore[pos+x]);
							x += 1;
						}
						var c1 = pos+x;
						console.log('break! x: '+x+' step: '+step+' pos+x: '+c1+' k: '+k);
						step = 1;
						pos = parseInt(k, 10);
						currentScore = rawScore[k];
						console.log('END STEP FOR: '+k);
						
					}
				}*/
				
				//console.log(filteredScore);
		}
		
		function MainSkillManager(){
			//$('#hardHeader1').text('งานที่ 1'); $('#hardHeader2').text('งานที่ 1');
			
			ReuseAbleFuncMain();
			
			var jobChartConfig = {
				type: 'bar',
				data: {
					  labels: formattedJobMixed,
					  orders: mainOrd,
					  percentages: mainPct,
					  datasets: [
						{
						  label: '# จำนวน',
						  categoryPercentage: 0.9,
						  barPercentage: 1.0,
						  data: mainData,
						  backgroundColor: mainColor,
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
						
						$('#analytic-lower-buttons-main-not-found').hide();
						
						const [{ index }] = activePoints;
						console.log('Click bar: '+jobChartConfig.data.labels[index]+',val: '+jobChartConfig.data.datasets[0].data[index]);
						//alert('bar clicked!');
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
							$("#jobChart1").remove();
							$("#chart-container-job").append('<canvas id="jobChart1" width="100" height="450"></canvas>');
							ctxJ = document.getElementById("jobChart1").getContext("2d");
							setTimeout(function() {
								jobChart = new Chart(ctxJ, jobChartConfig);
							}, 10);
							
							GenerateDistributionChartData(jobChartConfig,index,idm);
							
							jobChart4Config.data.labels = vLabels;
							jobChart4Config.data.datasets[0].data = rawScore;
							jobChart4Config.data.percentages = ['xx.xx%'];
							jobChart4Config.data.datasets[0].pointStyle = vPoints;
							jobChart4Config.options.scales.y.max = disGraphMax;
							jobChart2.update();
							/*jobChart2.destroy();
							$("#jobChart2").remove();
							$("#job-distribution-container").append('<canvas id="jobChart2" width="100" height="450"></canvas>');
							ctxJ2 = document.getElementById("jobChart2").getContext("2d");
							setTimeout(function() {
								jobChart2 = new Chart(ctxJ2, jobChart4Config);
							}, 10);*/
						}, 50);
						
						
					}
				  },
				  layout: {
						padding: {
							top: 75
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
								size: w < 512 ? 12 : 18,
								weight: 'bold',
								family: "'Nunito','Kanit'",
							  };
							},
							formatter: function(value, context) {
								var text = context.chart.data.labels[context.dataIndex];
								if(context.chart.data.labels.length > 4 )
									return '';
								
								if(text.length < 13){
									return text;
								}else{
									return text.substring(0,13)+'...';
									//return text.substring(0,20)+'\n'+text.substring(20,text.length);
								}
							}
						  },
						  middleLabel: {
							font: function(context) {
							  var w = context.chart.width;
							  return {
								size: w < 512 ? 24 : 32,
								weight: 'bold',
								family: "'Nunito','Kanit'",
							  };
							},
							formatter: function(value, context) {
								var val = context.chart.data.orders[context.dataIndex];
								if(val == '#1' || val == '#2' || val == '#3')
									return val;
								else
									return '';
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
								family: "'Nunito','Kanit'",
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
			
			jobChart.destroy();
			$("#jobChart1").remove();
			$("#chart-container-job").append('<canvas id="jobChart1" width="100" height="450"></canvas>');
			ctxJ = document.getElementById("jobChart1").getContext("2d");
			//jobChart.destroy();

				jobChart = new Chart(ctxJ, jobChartConfig);

			
			/*$("#hardChart2").remove();
			$("#hc2-container").append('<canvas id="hardChart2" width="100" height="450"></canvas>');
			var ctxH2 = document.getElementById("hardChart2").getContext("2d");
			setTimeout(function() { $('.hard-lv1').css('display', 'none'); $('.hard-lv2').css('display', 'block'); }, 200);
			setTimeout(function() { $('.hard-lv2').addClass("animate-hard-lv2"); }, 300);
			setTimeout(function() {
				console.log(hardChart2Config);
				hardChart2 = new Chart(ctxH2, hardChart2Config); console.log(hardChart2);
			}, 400);*/
		}
		
		function ResetChartSum(){
			sumChart1.destroy();
			var sumChart1Config = {
				type: 'bar',
				data: {
					  labels: mainJobMixed,
					  orders: mainOrd,
					  percentages: mainPct,
					  datasets: [
						{
						  label: '# จำนวน',
						  categoryPercentage: 0.9,
						  barPercentage: 1.0,
						  data: mainData,
						  backgroundColor: mainColor,
						},
					  ],
				},
				plugins: [ChartDataLabels]
				,
				options: {
				  maintainAspectRatio: false,
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
								size: w < 512 ? 12 : 18,
								weight: 'bold',
								family: "'Nunito','Kanit'",
							  };
							},
							formatter: function(value, context) {
								var text = context.chart.data.labels[context.dataIndex];
								if(context.chart.data.labels.length > 4 )
									return '';
								
								if(text.length < 13){
									return text;
								}else{
									return text.substring(0,13)+'...';
									//return text.substring(0,20)+'\n'+text.substring(20,text.length);
								}
							}
						  },
						  middleLabel: {
							font: function(context) {
							  var w = context.chart.width;
							  return {
								size: w < 512 ? 32 : 48,
								weight: 'bold',
								family: "'Nunito','Kanit'",
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
								family: "'Nunito','Kanit'",
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
			
			sumChart1 = new Chart(ctx1, sumChart1Config);
			
			$('#overall-job-container').empty();
			sumChart2a.destroy();
			sumChart2b.destroy();
			sumChart2c.destroy();
			$("#sumChart2a").remove();
			$("#sumChart2b").remove();
			$("#sumChart2c").remove();
			if(mainJobList.length == 3){
				var entry = '<div class="container-fluid col-4">\
								<div class="container-fluid p-0" id="chart-container-s2a">\
									<canvas id="sumChart2a" width="50" height="215"></canvas>\
								</div>\
								<div class="container-fluid p-0">\
									<cf id="job-name1">งานที่ 1</cf>\
								</div>\
							</div>\
							<div class="container-fluid col-4">\
								<div class="container-fluid p-0" id="chart-container-s2b">\
									<canvas id="sumChart2b" width="50" height="215"></canvas>\
								</div>\
								<div class="container-fluid p-0">\
									<cf id="job-name2">งานที่ 2</cf>\
								</div>\
							</div>\
							<div class="container-fluid col-4">\
								<div class="container-fluid p-0" id="chart-container-s2c">\
									<canvas id="sumChart2c" width="50" height="215"></canvas>\
								</div>\
								<div class="container-fluid p-0">\
									<cf id="job-name3">งานที่ 3</cf>\
								</div>\
							</div>'
							
				$('#overall-job-container').append(entry);
				document.getElementById("job-name1").innerHTML = mainJobList[0].THname;
				document.getElementById("job-name2").innerHTML = mainJobList[1].THname;
				document.getElementById("job-name3").innerHTML = mainJobList[2].THname;
				ctx2a = document.getElementById("sumChart2a").getContext("2d");
				ctx2b = document.getElementById("sumChart2b").getContext("2d");
				ctx2c = document.getElementById("sumChart2c").getContext("2d");
			}else if(mainJobList.length == 2){
				var entry = '<div class="container-fluid col-2">\
								</div>\
							</div>\
							<div class="container-fluid col-4">\
								<div class="container-fluid p-0" id="chart-container-s2a">\
									<canvas id="sumChart2a" width="50" height="215"></canvas>\
								</div>\
								<div class="container-fluid p-0">\
									<cf id="job-name1">งานที่ 1</cf>\
								</div>\
							</div>\
							<div class="container-fluid col-4">\
								<div class="container-fluid p-0" id="chart-container-s2b">\
									<canvas id="sumChart2b" width="50" height="215"></canvas>\
								</div>\
								<div class="container-fluid p-0">\
									<cf id="job-name2">งานที่ 2</cf>\
								</div>\
							</div>\
							<div class="container-fluid col-2">\
								</div>'
				$('#overall-job-container').append(entry);
				document.getElementById("job-name1").innerHTML = mainJobList[0].THname;
				document.getElementById("job-name2").innerHTML = mainJobList[1].THname;
				ctx2a = document.getElementById("sumChart2a").getContext("2d");
				ctx2b = document.getElementById("sumChart2b").getContext("2d");
			}else if(mainJobList.length == 1){
				var entry = '<div class="container-fluid col-4">\
								</div>\
							</div>\
							<div class="container-fluid col-4">\
								<div class="container-fluid p-0" id="chart-container-s2a">\
									<canvas id="sumChart2a" width="50" height="215"></canvas>\
								</div>\
								<div class="container-fluid p-0">\
									<cf id="job-name1">งานที่ 1</cf>\
								</div>\
							</div>\
							<div class="container-fluid col-4">\
								</div>'
							
				$('#overall-job-container').append(entry);
				document.getElementById("job-name1").innerHTML = mainJobList[0].THname;
				ctx2a = document.getElementById("sumChart2a").getContext("2d");
			}else{
				// no jobs
				var entry = '<div class="container-fluid text-center">\
								<div class="col d-flex flex-column align-items-center">\
										<img class="not-found-icon-mini" src="assets/images/outline_cancel_grey_24dp 1.png" alt=""/>\
									</div>\
								<mf>ขออภัยด้วย แต่เราไม่พบข้อมูลงานที่คุณสนใจ<br/>และคุณสามารถแก้ไขโปรไฟล์เพื่อเพิ่มงานที่คุณสนใจได้ที่นี่<br/></mf>\
								<a class="btn btn-cta-primary-yellow round profile-button" href="#" target="_blank">แก้ไขโปรไฟล์</a>\
							</div>'
				$('#overall-job-container').append(entry);
			}		
			if(mainJobList.length > 0){
				idm = 0;
				ReuseAbleFuncMain();
				var sumChart2aConfig = {
					type: 'bar',
					data: {
						  labels: mainJobMixed,
						  orders: mainOrd,
						  percentages: mainPct,
						  datasets: [
							{
							  label: '# จำนวน',
							  categoryPercentage: 0.9,
							  barPercentage: 1.0,
							  data: mainData,
							  backgroundColor: mainColor,
							},
						  ],
					},
					options: {
							  maintainAspectRatio: false,
							  //responsive: true,
							  /*legend: {
								display: false
							  },*/ 
							   layout: {
									padding: {
										top: 0
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
				sumChart2a = new Chart(ctx2a, sumChart2aConfig);
			}
			if(mainJobList.length > 1){
				idm = 1;
				ReuseAbleFuncMain();
				var sumChart2bConfig = {
					type: 'bar',
					data: {
						  labels: mainJobMixed,
						  orders: mainOrd,
						  percentages: mainPct,
						  datasets: [
							{
							  label: '# จำนวน',
							  categoryPercentage: 0.9,
							  barPercentage: 1.0,
							  data: mainData,
							  backgroundColor: mainColor,
							},
						  ],
					},
					options: {
							  maintainAspectRatio: false,
							  //responsive: true,
							  /*legend: {
								display: false
							  },*/ 
							   layout: {
									padding: {
										top: 0
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
				sumChart2b = new Chart(ctx2b, sumChart2bConfig);
			}
			if(mainJobList.length > 2){
				idm = 2;
				ReuseAbleFuncMain();
				var sumChart2cConfig = {
					type: 'bar',
					data: {
						  labels: mainJobMixed,
						  orders: mainOrd,
						  percentages: mainPct,
						  datasets: [
							{
							  label: '# จำนวน',
							  categoryPercentage: 0.9,
							  barPercentage: 1.0,
							  data: mainData,
							  backgroundColor: mainColor,
							},
						  ],
					},
					options: {
							  maintainAspectRatio: false,
							  //responsive: true,
							  /*legend: {
								display: false
							  },*/ 
							   layout: {
									padding: {
										top: 0
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
				sumChart2c = new Chart(ctx2c, sumChart2cConfig);
			}
			
			/*sumChart2a = new Chart(ctx2a, sumChart2aConfig);
			sumChart2b = new Chart(ctx2b, sumChart2bConfig);
			sumChart2c = new Chart(ctx2c, sumChart2cConfig);*/

			sumChart3.destroy();
			var sumChart3Config = {
			type: 'bar',
			data: {
				  labels: jobMixed,
				  orders: ord,
				  percentages: pct,
				  datasets: [
					{
					  label: '# จำนวน',
					  categoryPercentage: 0.9,
					  barPercentage: 1.0,
					  data: dataMixed,
					  backgroundColor: bgc,
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
			ctx3 = document.getElementById("sumChart3").getContext("2d");
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
			if(currentlyHasNoSkill) $('#analytic-lower-buttons-main-not-found').show();
			
			if(rawMain.InterestedJobs.length > 0)
				MainSkillManager();
		}
		
		function ResetChartHard(){
			$('.hard-lv2').removeClass("animate-hard-lv2");
			$('.yahaha32').removeClass("animate-yahaha32");
			setTimeout(function() { $('.hard-lv1').css('display', ''); $('.hard-lv2').css('display', 'none'); }, 200);
			setTimeout(function() { $('.hard-lv1').removeClass("animate-hard-lv1"); }, 300);
			
			if(currentlyHasNoAddSkill) $('#analytic-lower-buttons-not-found').show();
			
			hardChart1a.destroy();
			hardChart1b.destroy();
			hardChart1c.destroy();
			$("#hardChart1a").remove();
			$("#hardChart1b").remove();
			$("#hardChart1c").remove();
			if(addJobList.length == 3){
				$("#chart-container-p11").append('<canvas id="hardChart1a" width="100" height="450"></canvas>');
				$("#chart-container-p12").append('<canvas id="hardChart1b" width="100" height="450"></canvas>');
				$("#chart-container-p13").append('<canvas id="hardChart1c" width="100" height="450"></canvas>');
				ctxH1a = document.getElementById("hardChart1a").getContext("2d");
				ctxH1b = document.getElementById("hardChart1b").getContext("2d");
				ctxH1c = document.getElementById("hardChart1c").getContext("2d");
			}else if(addJobList.length == 2){
				$("#chart-container-p21").append('<canvas id="hardChart1a" width="100" height="450"></canvas>');
				$("#chart-container-p22").append('<canvas id="hardChart1b" width="100" height="450"></canvas>');
				ctxH1a = document.getElementById("hardChart1a").getContext("2d");
				ctxH1b = document.getElementById("hardChart1b").getContext("2d");
			}else if(addJobList.length == 1){
				idd = 0;
			    AdditionalSkillManager();
			}else{
				// no jobs
				//alert('999');
				AdditionalSkillManager();
			}
			
			if(mainJobList.length > 0){
				idd = 0;
				ReuseAbleFuncAdd();
				var hardChartPreview1Config = {
					type: 'bar',
					data: {
						  labels: formattedJobMixed,
						  orders: ord,
						  percentages: pct,
						  datasets: [
							{
							  label: '# จำนวน',
							  categoryPercentage: 0.9,
							  barPercentage: 1.0,
							  data: dataMixed,
							  backgroundColor: bgc,
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
										top: 0
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
				hardChart1a = new Chart(ctxH1a, hardChartPreview1Config);
			}
			if(mainJobList.length > 1){
				idd = 1;
				ReuseAbleFuncAdd();
				var hardChartPreview2Config = {
					type: 'bar',
					data: {
						  labels: formattedJobMixed,
						  orders: ord,
						  percentages: pct,
						  datasets: [
							{
							  label: '# จำนวน',
							  categoryPercentage: 0.9,
							  barPercentage: 1.0,
							  data: dataMixed,
							  backgroundColor: bgc,
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
										top: 0
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
				hardChart1b = new Chart(ctxH1b, hardChartPreview2Config);
			}
			if(mainJobList.length > 2){
				idd = 2;
				ReuseAbleFuncAdd();
				var hardChartPreview3Config = {
					type: 'bar',
					data: {
						  labels: formattedJobMixed,
						  orders: ord,
						  percentages: pct,
						  datasets: [
							{
							  label: '# จำนวน',
							  categoryPercentage: 0.9,
							  barPercentage: 1.0,
							  data: dataMixed,
							  backgroundColor: bgc,
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
										top: 0
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
				hardChart1c = new Chart(ctxH1c, hardChartPreview3Config);
			}

			$('.hard-ct1').removeClass("animate-hard-ct1");
			$('.hard-ct2').removeClass("animate-hard-ct2");
			setTimeout(function() { $('.hard-ct1').css('display', ''); $('.hard-ct2').css('display', 'none'); }, 200);
			setTimeout(function() { $('.hard-ct1').removeClass("animate-hard-ct1"); }, 300);
		}
		
		//setInterval(function(){RefreshChart(myChart,config1)}, 1000);
		//setTimeout(function(){   $("#content1").fadeOut(500); }, 1000);

		function Tab1Func(){
			 $('.tab-content').hide();
			  $('.tab-list-item').removeClass('tab-list-active');
			  $('#tab-1').addClass('tab-list-active');
			  $('#content1').show();
			  current_tab = 1;
			  if(rawAdditional.InterestedJobs.length > 0)
				ReuseAbleFuncAdd();
			  if(rawMain.mySkills.length > 0)
				ReuseAbleFuncMainOverview();
			  ReuseAbleFuncAddOverview();
			  ResetChartSum();
			  $('.fat').removeClass("animate-fat");
			  $('.fag').removeClass("animate-fag");
			  $('.fac').removeClass("animate-fac");
		}
		
		function InitializeAnalytics(){
			ctx1 = $('#sumChart1');
			ctx2a = $('#sumChart2a');
			ctx2b = $('#sumChart2b');
			ctx2c = $('#sumChart2c');
			ctx3 = $('#sumChart3');
			ctx4 = $('#sumChart4');
			ctx5 = $('#sumChart5');
			ctxJ = $('#jobChart1');
			ctxJ2 = $('#jobChart2');
			ctxJ3 = $('#jobChart3');
			ctxJ4 = $('#jobChart4');
			ctxH1a = $('#hardChart1a');
			ctxH1b = $('#hardChart1b');
			ctxH1c = $('#hardChart1c');
			ctxH2 = $('#hardChart2');
			ctxH3 = $('#hardChart3');
			jobChart2 = new Chart(ctxJ2, jobChart4Config);
			
			//$('.fag').addClass("animate-fag");
			//$('.fac').addClass("animate-fac");
		   $('.tab-content').hide();
		   $('#content1').show();
		   $('#tab-1').on('click', function(){
			 Tab1Func();
		   });
		  
		   $('#tab-2').on('click', function(){
			  $('.tab-content').hide();
			  $('.tab-list-item').removeClass('tab-list-active');
			  $('#tab-2').addClass('tab-list-active');
			  $('#content2').show();
			  current_tab = 2;
			  //$('#jobHeader').text('งานที่ 1');
			  $('.fag').addClass("animate-fag");
			  //jobChart.destroy();
			  setTimeout(function(){ $('.fat').addClass("animate-fat"); }, 10);
			  setTimeout(function(){ $('.fac').addClass("animate-fac"); }, 10);
			  idm = 0;
			  setTimeout(function(){ ResetChartJob(); }, 5);
		   });
		  
		  $('#tab-3').on('click', function(){
			  $('.tab-content').hide();
			  $('.tab-list-item').removeClass('tab-list-active');
			  $('#tab-3').addClass('tab-list-active');
			  $('#content2').show();
			  current_tab = 3;
			  //$('#jobHeader').text('งานที่ 2');
			  $('.fag').addClass("animate-fag");
			  setTimeout(function(){ $('.fat').addClass("animate-fat"); }, 10);
			  setTimeout(function(){ $('.fac').addClass("animate-fac"); }, 10);
			  idm = 1;
			  setTimeout(function(){ ResetChartJob(); }, 5);
		  });
		  
		  $('#tab-4').on('click', function(){
			  $('.tab-content').hide();
			  $('.tab-list-item').removeClass('tab-list-active');
			  $('#tab-4').addClass('tab-list-active');
			  $('#content2').show();
			  current_tab = 4;
			  //$('#jobHeader').text('งานที่ 3');
			  $('.fag').addClass("animate-fag");
			  setTimeout(function(){ $('.fat').addClass("animate-fat"); }, 10);
			  setTimeout(function(){ $('.fac').addClass("animate-fac"); }, 10);
			  idm = 2;
			  setTimeout(function(){ ResetChartJob(); }, 5);
		  });
		  
		  $('#tab-5').on('click', function(){
			  $('.tab-content').hide();
			  
			  $('#analytic-lower-buttons-not-found').hide();
			  ResetChartJob();
			  
			  //Reset
			  $('#preview-3').addClass("hard-pv-3");
			  $('#preview-2').addClass("hard-pv-2");
			  
			  if(addJobList.length == 3){
				  $('#preview-3').removeClass("hard-pv-3");
			  }else if(addJobList.length == 2){
				  $('#preview-2').removeClass("hard-pv-2");
			  }else if(addJobList.length == 1){
				  
			  }else{ // no interested job
				  
			  }
			  
			  
			  $('.tab-list-item').removeClass('tab-list-active');
			  $('#tab-5').addClass('tab-list-active');
			  $('#content5').show();
			  current_tab = 5;
			  $('.fag').addClass("animate-fag");
			  setTimeout(function(){ $('.fat').addClass("animate-fat"); }, 10);
			  setTimeout(function(){ $('.fac').addClass("animate-fac"); }, 10);
			  //setTimeout(function(){ ResetChartHard(); }, 5);
			  ResetChartHard();
		  });
		  
		  $("body").on("contextmenu", function(e) {
              return false;
            });
		  
		   $('#main1').on('click', function(){
			  sumChart4.destroy();
			  //setTimeout(function() { sumChart4 = new Chart(ctx4, sumChart4Config); },200);
			  ReuseAbleFuncMainOverview();
			  var sumChart4Config = {
				type: 'bar',
				data: {
					  labels: mainJobMixed,
					  orders: mainOrd,
					  percentages: mainPct,
					  datasets: [
						{
						  label: '# จำนวน',
						  categoryPercentage: 0.9,
						  barPercentage: 1.0,
						  data: mainData,
						  backgroundColor: mainColor,
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
						
						//WTF GenerateDistributionChartDataOverview(sumChart4Config,index);
						GenerateDistributionChartData(sumChart4Config,index,'overview');
						
						sumChart6Config.data.labels = vLabels;
						sumChart6Config.data.datasets[0].data = rawScore;
						sumChart6Config.data.percentages = ['xx.xx%'];
						sumChart6Config.data.datasets[0].pointStyle = vPoints;
						sumChart6Config.options.scales.y.max = disGraphMax;
						/* for debug
						sumChart6Config.data.labels = ['aa','a','a','a'];
						sumChart6Config.data.datasets[0].data = [0,4,6,0];
						sumChart6Config.data.percentages = ['xx.xx%'];
						sumChart6Config.data.datasets[0].pointStyle = [dummy];
						sumChart6Config.options.scales.y.max = 10;
						*/
						jobChart2.update();
						//alert(5555);
						sumChart5.destroy();
						sumChart5 = new Chart(ctx5, sumChart6Config);
					}
				  },
				  layout: {
						padding: {
							top: 50
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
								size: w < 512 ? 16 : 22,
								weight: 'bold',
								family: "'Nunito','Kanit'",
							  };
							},
							formatter: function(value, context) {
								var text = context.chart.data.labels[context.dataIndex];
								if(context.chart.data.labels.length > 4 )
									return '';
								
								if(text.length < 13){
									return text;
								}else{
									return text.substring(0,13)+'...';
									//return text.substring(0,20)+'\n'+text.substring(20,text.length);
								}
							}
						  },
						  middleLabel: {
							font: function(context) {
							  var w = context.chart.width;
							  return {
								size: w < 512 ? 32 : 48,
								weight: 'bold',
								family: "'Nunito','Kanit'",
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
								family: "'Nunito','Kanit'",
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
			  setTimeout(function() { sumChart4 = new Chart(ctx4, sumChart4Config); },100);
			  
			  sumChart5Operation();
		  });
		  
		  function sumChart5Operation(){
			  sumChart5.destroy();
			  
			    var remJobs = []; var remOrders = []; var remPercentages = []; var remData = [];
				var extra = mainJobMixed.length+1;
				var jList = rawMain.Overview.List;
				//console.log(mainJobMixed);
				jList.forEach((entry) => {
					if(!mainJobMixed.includes(entry.SkillName)){ // this skill wasn't shown
						remJobs.push(entry.SkillName);
						console.log('find error: '+entry.SkillName);
						console.log('get %: '+entry.percentage);
						//remOrders.push('#'+extra);
						remOrders.push('#'+extra);
						if(entry.percentage == null){ // bugs from bk
							remPercentages.push(entry.Percentage.toFixed(2)+'%');
						}else{
							remPercentages.push(entry.percentage.toFixed(2)+'%');
						}
						console.log('pass: '+entry.SkillName);
						remData.push(entry.total);
						extra += 1;
					}
				});

				console.log(remJobs);

				if(remJobs.length > 11){
					//$("#con-switch-2").removeClass('chart-container2s');
					$("#con-switch-2").addClass('chart-container');
					$("#con-switch-1").addClass('scroll-chart-container');
				}else{
					$("#con-switch-2").removeClass('chart-container');
					$("#con-switch-1").removeClass('scroll-chart-container');
					$("#con-switch-2").css('height', remJobs.length*45.54 + "px");
				}
			  
			  var sumChart5Config = {
				type: 'bar',
				data: {
					  labels: remJobs,
					  orders: remOrders,
					  percentages: remPercentages,
					  datasets: [
						{
						  label: '# จำนวน',
						  categoryPercentage: 0.5,
						  barPercentage: 1,
						  data: remData,
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
								/*$('.analytic-md-header').addClass("animate-analytic-md-header");
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
		
			  setTimeout(function() { sumChart5 = new Chart(ctx5, sumChart5Config); },100);
		  }
		  
		   $('#main-lv2-back').on('click', function(){
			    $('.analytic-md-header').removeClass("animate-analytic-md-header");
				$('.analytic-md-sub-header').removeClass("animate-analytic-md-sub-header");
				$('.analytic-right-chart-label').removeClass("animate-analytic-right-chart-label");
				$('.analytic-arrow-cls').removeClass("animate-analytic-arrow-cls");
				$('#arc-label').text('อื่น ๆ');
				$('.iAnalytic-Other').css({"color": "rgba(55, 70, 73, 1)"});
				
				$('#con-switch-1').addClass("scroll-chart-container");
				$('#con-switch-2').addClass("chart-container");
				
				 sumChart5Operation();
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
		  
		   $('#info-button-not-found').on('click', function(){
			   $('#analytic-lower-buttons-main-not-found').hide();
		   });
		   
		   $('#info-hard-button-not-found').on('click', function(){
			   $('#analytic-lower-buttons-not-found').hide();
		   });
		  
		  $('.info-button').on('click', function(){
				$('.yahaha23').addClass("animate-yahaha23");
				$('.yahaha12').addClass("animate-yahaha12");
				$('.yahaha13').addClass("animate-yahaha13");
				$('.yahaha14').addClass("animate-yahaha14");
				$('.yahaha15').addClass("animate-yahaha15");
				$('.yahaha17').addClass("animate-yahaha17");
				$('.yahaha18').addClass("animate-yahaha18");
				$('.yh-hide').addClass("animate-yh-hide");
				$('.job-lv3').addClass("animate-job-lv3");
				
				var jobChart2Config = {
						type: 'bar',
						data: {
							  labels: formattedJobMixed,
							  orders: mainOrd,
							  percentages: mainPct,
							  datasets: [
								{
								  label: '# จำนวน',
								  categoryPercentage: 0.9,
								  barPercentage: 1.0,
								  data: mainData,
								  backgroundColor: mainColor,
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
									top: 50
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
										size: w < 512 ? 12 : 18,
										weight: 'bold',
										family: "'Nunito','Kanit'",
									  };
									},
									formatter: function(value, context) {
										var text = context.chart.data.labels[context.dataIndex];
										if(context.chart.data.labels.length > 4 )
											return '';
										
										if(text.length < 13){
											return text;
										}else{
											return text.substring(0,13)+'...';
											//return text.substring(0,20)+'\n'+text.substring(20,text.length);
										}
									}
								  },
								  middleLabel: {
									font: function(context) {
									  var w = context.chart.width;
									  return {
										size: w < 512 ? 32 : 48,
										weight: 'bold',
										family: "'Nunito','Kanit'",
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
										family: "'Nunito','Kanit'",
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
				
				var remJobs = []; var remOrders = []; var remPercentages = []; var remData = [];
				var extra = mainJobMixed.length+1;
				var jList = rawMain[mainJobList[idm].name].List;
				console.log(mainJobMixed);
				jList.forEach((entry) => {
					//alert(entry.SkillName);
					if(!mainJobMixed.includes(entry.SkillName)){ // this skill wasn't shown
						//alert('was not show: '+entry.SkillName);
						remJobs.push(entry.SkillName);
						//remOrders.push('#'+extra);
						remOrders.push('#'+extra);
						remPercentages.push(entry.percentage.toFixed(2)+'%');
						remData.push(entry.total);
						extra += 1;
					}
				});
				
				console.log(remJobs);
				
				if(remJobs.length > 11){
					$("#mc-container").removeClass('chart-container2s');
					$("#mc-container").addClass('chart-container2');
					$("#mc-scroll-container").addClass('scroll-chart-container2');
				}else{
					$("#mc-container").removeClass('chart-container2');
					$("#mc-scroll-container").removeClass('scroll-chart-container2');
					$("#mc-container").css('height', remJobs.length*54.54 + "px");
				}
				
				var jobChart3Config = {
						type: 'bar',
						data: {
							  labels: remJobs,
							  orders: remOrders,
							  percentages: remPercentages,
							  datasets: [
								{
								  label: '# จำนวน',
								  categoryPercentage: 0.5,
								  barPercentage: 1,
								  data: remData,
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
				
				
				jobChart.destroy();
				jobChart = new Chart(ctxJ, jobChart2Config);
				jobChart3.destroy();
				jobChart3 = new Chart(ctxJ3, jobChart3Config);
		  });
		  
		  $('#alv-close-button').on('click', function(){
				ResetChartJob();
		  });
		  
		  $('#alv-close-button2').on('click', function(){
				ResetChartJob();
		  });
		  
		  $('.hard1').on('click', function(){
			    idd = 0;
			    AdditionalSkillManager();
		  });
		  
		  $('.hard2').on('click', function(){
			    idd = 1;
			    AdditionalSkillManager();
		  });
		  
		  $('.hard3').on('click', function(){
			    idd = 2;
			    AdditionalSkillManager();
		  });
		  
		  $('.info-button-hard').on('click', function(){
				$('.hard-ct1').addClass("animate-hard-ct1");
				$('.yahaha32').addClass("animate-yahaha32");
				//hardChart3.destroy();
				var remJobs = []; var remJobsFormat = []; var remOrders = []; var remPercentages = []; var remData = [];
					var extra = jobMixed.length+1;
					var jList;
					if(rawAdditional.InterestedJobs.length > 0)
						jList = rawAdditional[addJobList[idd].name].List;
					else
						jList = rawAdditional.Overview.List;
					console.log(jobMixed);
					jList.forEach((entry) => {
						if(!jobMixed.includes(entry.AdditionalSkill)){ // this skill wasn't shown
							var formatJob = entry.AdditionalSkill;
							if(formatJob.length > 16)  formatJob = formatJob.substring(0,16)+'...';
							remJobsFormat.push(formatJob);
							remJobs.push(entry.AdditionalSkill);
							//remOrders.push('#'+extra);
							remOrders.push('#'+extra);
							remPercentages.push(entry.percentage.toFixed(2)+'%');
							remData.push(entry.total);
							extra += 1;
						}
					});
					
					console.log(remJobs);
					
					if(remJobs.length > 11){
						$("#hc3-container").removeClass('chart-container3s');
						$("#hc3-container").addClass('chart-container3');
						$("#hc3-scroll-container").addClass('scroll-chart-container3');
					}else{
						$("#hc3-container").removeClass('chart-container3');
						$("#hc3-scroll-container").removeClass('scroll-chart-container3');
						$("#hc3-container").css('height', remJobs.length*54.54 + "px");
					}
					
					var hardChart3Config = {
						type: 'bar',
						data: {
							  labels: remJobsFormat,
							  orders: remOrders,
							  percentages: remPercentages,
							  hoverLabels: remJobs,
							  datasets: [
								{
								  label: '# จำนวน',
								  categoryPercentage: 0.5,
								  barPercentage: 1,
								  data: remData,
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
								  /*layout: {
										padding: {
											top: 20
										}
									},*/
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
									tooltip: tooltip_config_vertical_formatted
								  }
						}
					};
				
				$("#hardChart3").remove();
				$("#hc3-container").append('<canvas id="hardChart3" width="100" height="450"></canvas>');
				var ctxH3 = document.getElementById("hardChart3").getContext("2d");
				
				setTimeout(function() { $('.hard-ct1').css('display', 'none'); $('.hard-ct2').css('display', 'block'); }, 200);
				setTimeout(function() { $('.hard-ct2').addClass("animate-hard-ct2"); }, 300);
				setTimeout(function() { hardChart3 = new Chart(ctxH3, hardChart3Config); }, 400);
		  });
		  
		  $('#alv-close-button3').on('click', function(){
				ResetChartHard();
		  });
		  
		  $('#alv-close-button4').on('click', function(){
				$('.hard-ct2').removeClass("animate-hard-ct2");
				$('.yahaha32').removeClass("animate-yahaha32");
				if(currentlyHasNoAddSkill) $('#analytic-lower-buttons-not-found').show();
				setTimeout(function() { $('.hard-ct1').css('display', ''); $('.hard-ct2').css('display', 'none'); }, 200);
				setTimeout(function() { $('.hard-ct1').removeClass("animate-hard-ct1"); }, 300);
		  });
		};
		
		var fetchFinish=0;
		
		function OnFetchEnd(){
				
				//ShowAdditionalInterfaceLv1
				refThis.setState({ addOverSection: 'analytic-spc topOvSkl-hide' });
				if(rawAdditional.mySkills.length < 1){
					refThis.setState({ addOverviewText: 'ทักษะยอดนิยม ' });
					refThis.setState({ addOverSection: 'analytic-spc' });
				}
				if(addJobList.length == 1){
					console.log('1 job detected!');
					refThis.setState({ addOverviewText: 'ทักษะเสริมของคุณ '+rawAdditional.mySkills.length+' ทักษะ'});
					refThis.setState({ hard1Name: addJobList[0].THname });
				}else if(addJobList.length == 2){
					console.log('2 job detected!');
					refThis.setState({ addOverviewText: 'ทักษะเสริมของคุณ '+rawAdditional.mySkills.length+' ทักษะ'});
					refThis.setState({ hard1Name: addJobList[0].THname, hard2Name: addJobList[1].THname });
				}else if(addJobList.length == 3){
					console.log('3 job detected!');
					refThis.setState({ addOverviewText: 'ทักษะเสริมของคุณ '+rawAdditional.mySkills.length+' ทักษะ'});
					refThis.setState({ hard1Name: addJobList[0].THname, hard2Name: addJobList[1].THname,  hard3Name: addJobList[2].THname});
				}else{
					console.log('no add job detected!');
				}

				/*datas.InterestedJobs.forEach((entry) => {
					console.log(entry.replace('+',' '));
				});*/
				console.log(rawAdditional.Overview);
				refThis.setState({ overviewHardCount: rawAdditional.Overview.numberOfUsers });
			
			
				refThis.setState({ render: true});
				InitializeAnalytics();
				
				//ShowAdditionalInterfaceLv1
				$('.main-not-found').hide();
				if(mainJobList.length == 1){
					console.log('1 job detected!');
					refThis.setState({ main1Name: mainJobList[0].THname });
					$('#tab-2').text(refThis.state.main1Name);
					$('#tab-3').hide();
					$('#tab-4').hide();
				}else if(mainJobList.length == 2){
					console.log('2 job detected!');
					refThis.setState({ main1Name: mainJobList[0].THname, main2Name: mainJobList[1].THname });
					$('#tab-2').text(refThis.state.main1Name);
					$('#tab-3').text(refThis.state.main2Name);
					$('#tab-4').hide();
				}else if(mainJobList.length == 3){
					console.log('3 job detected!');
					refThis.setState({ main1Name: mainJobList[0].THname, main2Name: mainJobList[1].THname,  main3Name: mainJobList[2].THname});
					$('#tab-2').text(refThis.state.main1Name);
					$('#tab-3').text(refThis.state.main2Name);
					$('#tab-4').text(refThis.state.main3Name);
				}else{
					$('.main-found').hide();
					$('.main-not-found').show();
					console.log('no job detected!');
					$('#tab-2').hide();
					$('#tab-3').hide();
					$('#tab-4').hide();
				}

				/*datas.InterestedJobs.forEach((entry) => {
					console.log(entry.replace('+',' '));
				});*/
				refThis.setState({ overviewMainCount: rawMain.Overview.numberOfUser });
				
				
				//setTimeout(function() { Tab1Func(); }, 1000);
				Tab1Func();
		}
		
		//fetch("http://localhost:3000/temp_main",{
		fetch("http://localhost:2000/analytics/main/"+userID,{
			//fetch("http://localhost:3000/samples_json_for_testing (must upload to server first/temp_main",{
			method: "GET",
			headers: {
				"Access-Control-Allow-Origin": "*",
				"Access-Control-Allow-Methods": "*",
				"Access-Control-Allow-Credentials": true,
				"Content-Type": "application/json"},
			})
			.then(response => response.json())
			//.then(response => response.result)
			.then((datas) => {
				console.log(datas);
				rawMain = datas;
				mainJobList = datas.InterestedJobs;
				//mainJobList = [];
				fetchFinish += 1;
				if(fetchFinish > 1) OnFetchEnd();
				
			}).catch((error) => {
				console.log(error);
			});
		
		//fetch("http://localhost:3000/temp_add",{
		fetch("http://localhost:2000/analytics/additional/"+userID,{
			method: "GET",
			headers: {
				"Access-Control-Allow-Origin": "*",
				"Access-Control-Allow-Methods": "*",
				"Access-Control-Allow-Credentials": true,
				"Content-Type": "application/json"},
			})
			.then(response => response.json())
			//.then(response => response.result)
			.then((datas) => {
				console.log(datas);
				rawAdditional = datas;
				//rawAdditional.mySkills = [];
				addJobList = datas.InterestedJobs;
				fetchFinish += 1;
				if(fetchFinish > 1) OnFetchEnd();
				
			}).catch((error) => {
				console.log(error);
			});
	}

	componentWillUnmount() { 
	   window.removeEventListener('load', this.handleLoad)  
	}
	
	handleLoad() {
		console.log("YEAH!");
	 }
	
	render (){
		if(!this.state.render) return (
			<LoadingS />
		);
		
		if(!this.state.allow) return (
			<div className="BookmarkTabs">
				<header class="bookmark-header-fixed fat bgs">
					<div class="container-fluid yahaha2">     
						<div class="row">
							<div class="col">
								<div class="topDataBk-content text-center">
									<h1 class="name inline">You don't have permission to access this page!</h1>
								</div>
							</div>
						</div>        
					</div>
				</header>
			</div>
		);
		
		return (
			<div className="BookmarkTabs">
				<br></br>
				<header class="header-white bookmark-header-fixed fat">
					<div class="container-fluid yahaha2">     
						<div class="row">
							<div class="col">
								<div class="topDataBk-content">
									<h1 class="name inline">Analytics (WIP)</h1>
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
						
							<div class="col-5 analytics-clickable header round text-center justify-content-center main-found" id="main1" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
								<div>
									<hf class="name">เทรนด์ทักษะเฉพาะในทุกงาน<br/>ที่คุณสนใจ<br/></hf>
									<nnf class="name">จากทั้งหมด {this.state.overviewMainCount} คน</nnf>
									<br></br><br></br>
								</div>
								<div class="container-fluid">
									<canvas id="sumChart1" width="100" height="450"></canvas>
								 </div>
							</div>
							<div class="col-5 analytics-clickable header round text-center justify-content-center main-not-found" >
								<br></br><br></br><br></br><br></br>
								<div>
									<hff class="name">เทรนด์ทักษะเฉพาะในทุกงาน<br/>ที่คุณสนใจ<br/></hff>
								</div>
								<br></br>
								<div class="container-fluid text-center">
									<div class="col d-flex flex-column align-items-center">
										<img class="not-found-icon-mini" src="assets/images/outline_cancel_grey_24dp 1.png" alt=""/>
									</div>
									<br></br>
									<mff>ขออภัยด้วย แต่เราไม่พบข้อมูลงานที่คุณสนใจ<br/>และคุณสามารถแก้ไขโปรไฟล์เพื่อเพิ่มงานที่คุณสนใจได้ที่นี่<br/></mff>
									<br></br>
									<Link to="/editprofile">
										<a class="btn btn-cta-primary-yellow round profile-button" target="_blank">แก้ไขโปรไฟล์</a>
									</Link>
								</div>
							</div>
							
							<div class="col-7 ">
							
								<div class="col analytics-clickable header round wrapper text-center main-found">
									<div>
										<hf class="name">เทรนด์ทักษะแบ่งตามงานที่คุณสนใจ</hf>
									</div>
									<div class="d-flex" id="overall-job-container">
										
									</div>
								</div>
								<div class="col analytics-clickable header round wrapper text-center main-not-found">
									
									<div class="nf-box-flex text-center">
										<hff class="name">เทรนด์ทักษะแบ่งตามงานที่คุณสนใจ</hff>
											<img class="not-found-icon-mini2" src="assets/images/outline_cancel_grey_24dp 1.png" alt=""/>
										<mff>ขออภัยด้วย แต่เราไม่พบข้อมูลงานที่คุณสนใจ<br/>และคุณสามารถแก้ไขโปรไฟล์เพื่อเพิ่มงานที่คุณสนใจได้ที่นี่<br/></mff>
										<Link to="/editprofile">
											<a class="btn btn-cta-primary-yellow round profile-button" target="_blank">แก้ไขโปรไฟล์</a>
										</Link>
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
												<nnf>จากทั้งหมด {this.state.overviewHardCount} คน</nnf>
												<hr></hr>
											</div>
											<div>
												<af>{this.state.addOverviewText}<br/></af>
												<af class="analytic-spc" id="myOvSkl1"><i class="fas fa-square" id="myOvSklc1"></i> {this.state.hard1MyName} #{this.state.addRank1}<br/></af>
												<af class="analytic-spc" id="myOvSkl2"><i class="fas fa-square" id="myOvSklc2"></i> {this.state.hard2MyName} #{this.state.addRank2}<br/></af>
												<af class="analytic-spc" id="myOvSkl3"><i class="fas fa-square" id="myOvSklc3"></i> {this.state.hard3MyName} #{this.state.addRank3}<br/></af>
												
												<af class={this.state.addOverSection} id="topOvSkl1"><i class="fas fa-square iAnalytic-red" id="topOvSklc1"></i> {this.state.hard1OverallName} #1<br/></af>
												<af class={this.state.addOverSection} id="topOvSkl2"><i class="fas fa-square iAnalytic-green" id="topOvSklc2"></i> {this.state.hard2OverallName} #2<br/></af>
												<af class={this.state.addOverSection} id="topOvSkl3"><i class="fas fa-square iAnalytic-Yellow" id="topyOvSklc3"></i> {this.state.hard3OverallName} #3<br/></af>
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
											<div class="yahaha5 yahaha18" id="chart-container-job">
												
											</div>
											<div>
												<br></br>
												<div class="text-center" id="analytic-lower-buttons-main-not-found">
													<a class="btn btn-cta-primary round profile-button other info-button" id="info-button-not-found" target="_blank">คลิกเพื่อดูอันดับอื่น ๆ<br/></a> 
												</div>
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
													<hhf><br/>เทรนด์ทักษะเฉพาะ<br/></hhf>
													<hhf id="jobHeader">{this.state.mainFocusName}</hhf>
													<br></br>
												</div>
												<br></br>
												<nnf>จากทั้งหมด {this.state.mainFocusCount} คน</nnf>
												<br></br><br></br>
											</div>
											<div class="yahaha8">
												<aaf>ทักษะยอดนิยม<br/></aaf>
												<af id="overallMainSkl1">#1 <i class="fas fa-square iAnalytic-red" id="overallMainSklc1"></i> {this.state.main1OverallName} {this.state.main1OverallPercentage}%<br/></af>
												<af id="overallMainSkl2">#2 <i class="fas fa-square iAnalytic-green" id="overallMainSklc2"></i> {this.state.main2OverallName} {this.state.main2OverallPercentage}%<br/></af>
												<af id="overallMainSkl3">#3 <i class="fas fa-square iAnalytic-Yellow" id="overallMainSklc3"></i> {this.state.main3OverallName} {this.state.main3OverallPercentage}%<br/></af>
											</div>
											<br></br>
											<aaf>ทักษะของฉัน<br/></aaf>
											<div class="header2 container-fluid text-center skill-not-found yahaha9" id="skl-not-found-main">
												<mf>*เนื่องจากเราไม่พบทักษะของคุณ จึงแสดงทักษะโดยรวม<br/>แต่คุณสามารถแก้ไขโปรไฟล์เพื่อเพิ่มงานที่สนใจได้<br/></mf>
												<a class="btn btn-cta-primary-yellow round profile-button" href="#" target="_blank">เพิ่มทักษะ</a>
											</div>
											<div class="skill-found">
												<div class="yahaha8">
													<af id="myMainSkl1"><i class="fas fa-square" id="myMainSklc1"></i> {this.state.main1MyName} {this.state.main1MyPercentage}%</af>
													<br></br>
													<af id="myMainSkl2"><i class="fas fa-square" id="myMainSklc2"></i> {this.state.main2MyName} {this.state.main2MyPercentage}%</af>
													<br></br>
													<af id="myMainSkl3"><i class="fas fa-square" id="myMainSklc3"></i> {this.state.main3MyName} {this.state.main3MyPercentage}%</af>
													<br></br><br></br>
												</div>
												<div class="yahaha6" id="analytic-lower-buttons-main">
													<a class="btn btn-cta-primary round profile-button other margin-right-m info-button" target="_blank">คลิกเพื่อดูอันดับอื่น ๆ</a> 
													<Link to="/editprofile">
															<a class="btn btn-cta-primary-yellow round profile-button" id="other-button" target="_blank">แก้ไขทักษะ</a>
													</Link>
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
									<nnf>จากทั้งหมด {this.state.mainFocusSkillCount} คน</nnf>
									<br></br>
								</div>
								<div class="animate-yahaha13 container-fluid align-self-end job-lv2">
									<div class="yahaha20" id="job-distribution-container">
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
										<div class="scroll-chart-container2" id="mc-scroll-container">
											<div class="chart-container2" id="mc-container">
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
						<div class="row no-gutters hard-lv1 hard-pv-3" id="preview-3">
							<div class="col-4 text-center justify-content-center">
								<div class="header round analytics-clickable yahaha26 hard1">
									<div class="yahaha35">
										<hf class="name">{this.state.hard1Name}<br/></hf>
										<br></br><br></br>
									</div>
									<div class="container-fluid">
										<div class="yahaha22" id="chart-container-p11">
											
										</div>
									 </div>
								 </div>
							</div>
							<div class="col-4 text-center justify-content-center">
								<div class="header round analytics-clickable yahaha27 hard2">
									<div class="yahaha35">
										<hf class="name">{this.state.hard2Name}<br/></hf>
										<br></br><br></br>
									</div>
									<div class="container-fluid">
										<div class="yahaha22" id="chart-container-p12">
											
										</div>
									 </div>
								 </div>
							</div>
							<div class="col-4 text-center justify-content-center">
								<div class="header round analytics-clickable yahaha28 hard3">
									<div class="yahaha35">
										<hf class="name">{this.state.hard3Name}<br/></hf>
										<br></br><br></br>
									</div>
									<div class="container-fluid">
										<div class="yahaha22" id="chart-container-p13">
											
										</div>
									 </div>
								 </div>
							</div>
						</div>
						
						<div class="row no-gutters hard-lv1 hard-pv-2" id="preview-2">
							<div class="col-6 text-center justify-content-center">
								<div class="header round analytics-clickable yahaha26 hard1">
									<div class="yahaha35">
										<hf class="name">{this.state.hard1Name}<br/></hf>
										<br></br><br></br>
									</div>
									<div class="container-fluid">
										<div class="yahaha22" id="chart-container-p21">
											
										</div>
									 </div>
								 </div>
							</div>
							<div class="col-6 text-center justify-content-center">
								<div class="header round analytics-clickable yahaha28 hard2">
									<div class="yahaha35">
										<hf class="name">{this.state.hard2Name}<br/></hf>
										<br></br><br></br>
									</div>
									<div class="container-fluid">
										<div class="yahaha22" id="chart-container-p22">
											
										</div>
									 </div>
								 </div>
							</div>
						</div>
						
						<div class="p-0 container-fluid header round align-self-end yahaha23 yahaha25 hard-lv2">
								<div class="container-fluid align-self-end yahaha3">
									<div class="row wrapper2">
										<div class="yahaha14 container-fluid align-self-end text-center yahaha7">
											 
											<hf class="yahaha32"><br/>เทรนด์ทักษะเสริมในผู้ที่สนใจ</hf>
											<hf class="yahaha32" id="hardHeader2">งาน<br/>{this.state.hardFocusName}</hf>
											<br></br>
											<div class="yahaha5 yahaha36" id="hc2-container">
												
											</div>
											<div class="text-center" id="analytic-lower-buttons-not-found">
												<a class="btn btn-cta-primary round profile-button other info-button-hard yahaha37" id="info-hard-button-not-found" target="_blank">คลิกเพื่อดูอันดับอื่น ๆ<br/></a> 
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
														<hhf><br/>เทรนด์ทักษะเสริม<br/></hhf>
														<hhf id="hardHeader1">{this.state.hardFocusName}</hhf>
													</div>
													<br></br>
													<nnf>จากทั้งหมด {this.state.hardFocusCount} คน</nnf>
													<br></br><br></br>
												</div>
												<div class="yahaha8">
													<aaf>ทักษะยอดนิยม<br/></aaf>
													<af>#1 <i class="fas fa-square iAnalytic-red"></i> {this.state.hard1OverallName} {this.state.hard1OverallPercentage}%<br/></af>
													<af>#2 <i class="fas fa-square iAnalytic-green"></i> {this.state.hard2OverallName} {this.state.hard2OverallPercentage}%<br/></af>
													<af>#3 <i class="fas fa-square iAnalytic-Yellow"></i> {this.state.hard3OverallName} {this.state.hard3OverallPercentage}%<br/></af>
												</div>
												<br></br>
												<aaf>ทักษะของฉัน<br/></aaf>
												<div class="header2 container-fluid text-center skill-not-found yahaha9" id="skl-not-found-add">
													<mf>*เนื่องจากเราไม่พบทักษะของคุณ จึงแสดงทักษะโดยรวม<br/>แต่คุณสามารถแก้ไขโปรไฟล์เพื่อเพิ่มงานที่สนใจได้<br/></mf>
													<a class="btn btn-cta-primary-yellow round profile-button" href="#" target="_blank">เพิ่มทักษะ</a>
												</div>
												<div class="skill-found">
													<div class="yahaha8">
														<af id="mySkl1"><i class="fas fa-square" id="mySklc1"></i> {this.state.hard1MyName} {this.state.hard1MyPercentage}%</af>
														<br></br>
														<af id="mySkl2"><i class="fas fa-square" id="mySklc2"></i> {this.state.hard2MyName} {this.state.hard2MyPercentage}%</af>
														<br></br>
														<af id="mySkl3"><i class="fas fa-square" id="mySklc3"></i> {this.state.hard3MyName} {this.state.hard3MyPercentage}%</af>
														<br></br><br></br>
													</div>
													<div class="yahaha6" id="analytic-lower-buttons">
														<a class="btn btn-cta-primary round profile-button other margin-right-m info-button-hard" id="info-button-hard" target="_blank">คลิกเพื่อดูอันดับอื่น ๆ</a> 
														<Link to="/editprofile">
															<a class="btn btn-cta-primary-yellow round profile-button" id="other-button" target="_blank">แก้ไขทักษะ</a>
														</Link>
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
													<div class="scroll-chart-container3" id="hc3-scroll-container">
														<div class="chart-container3" id ="hc3-container">
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
