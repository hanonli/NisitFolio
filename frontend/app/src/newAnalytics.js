import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Link } from "react-router-dom";
import { Bar } from 'react-chartjs-2';
import { Chart } from 'chart.js';
import Navbar from './Components/navbar';
import reportWebVitals from './reportWebVitals';
import LoadingS from './Components/loadingS';
import { Redirect } from "react-router-dom";
import cookie from 'react-cookies'
import $ from 'jquery';
import ChartDataLabels from 'chartjs-plugin-datalabels';


class NewAnalytics extends React.Component {
	constructor(props) {
		super(props);
		this.handleLoad = this.handleLoad.bind(this);
		this.state = {
			render: false, //Set render state to false
			allow: true,
			redirect: null,
			
			topAddOvTotal: null,
			topAddTotal: null,
			
			topAddOv1Name: null,
			topAddOv1Percentage: null,
			topAddOv1Count: null,
			
			topAddOv2Name: null,
			topAddOv2Percentage: null,
			topAddOv2Count: null,
			
			topAddOv3Name: null,
			topAddOv3Percentage: null,
			topAddOv3Count: null,
			
			leftBoxHeader: 'Top 3 เทรนด์ทักษะเฉพาะทั้งหมด',
			leftBoxDesc1: 'จากตำแหน่งงานทั้งหมดที่คุณสนใจ',
			leftBoxDesc2: 'คนที่เลือกตำแหน่งเดียวกับคุณส่วนใหญ่มีทักษะที่นิยม ดังนี้',
			leftBoxOvTotal: null,
			
			leftBox1Job: null,
			leftBox1Name: null,
			leftBox1Percentage: null,
			leftBox1Count: null,
			
			leftBox2Job: null,
			leftBox2Name: null,
			leftBox2Percentage: null,
			leftBox2Count: null,
			
			leftBox3Job: null,
			leftBox3Name: null,
			leftBox3Percentage: null,
			leftBox3Count: null,

			topMainJOv1Job: null,
			topMainJOv1Name: null,
			topMainJOv1Score: null,
			topMainJOv1Percentage: null,
			topMainJOv1Count: null,
			topMainJOv1Label: null,
			
			topMainJOv2Job: null,
			topMainJOv2Name: null,
			topMainJOv2Score: null,
			topMainJOv2Percentage: null,
			topMainJOv2Label: null,
			
			topMainJOv3Job: null,
			topMainJOv3Name: null,
			topMainJOv3Score: null,
			topMainJOv3Percentage: null,
			topMainJOv3Count: null,
			topMainJOv3Label: null,
			
			rightJobTotal: null,
			rightJobName: null,
			rightJobSkillName: null,
			rightJobScore: null,
			rightJobPercentage: null,
			rightJobCount: null,
			rightJobPercentile: null,
			rightJobMean: null,
			rightJobMode: null,
			rightJobPLabel: null,
			
			rightBox1AddType: null,
			rightBox1AddName: null,
			rightBox1AddPercentage: null,
			rightBox1AddCount: null,
			
			rightBox2AddType: null,
			rightBox2AddName: null,
			rightBox2AddPercentage: null,
			rightBox2AddCount: null,
			
			rightBox3AddType: null,
			rightBox3AddName: null,
			rightBox3AddPercentage: null,
			rightBox3AddCount: null,
			
			popJobTotal: null,
			popJobName: null,
			popJobSkillName: null,
			popJobScore: null,
			popJobPercentile: null,
			popJobMean: null,
			popJobMode: null,
			popupDescPercentage: null,
			popupDescCount: null
		}
	 }
	
	componentDidMount() {
		window.addEventListener('load', this.handleLoad);
		console.log("YEAHXXX!");
		
		
		const flag = new Image();
		const flagRv = new Image();
		const you = new Image();
		const avg = new Image();
		const avgYou = new Image();
		const dummy = new Image();
		flag.src = 'assets/images/flag-ch2.png'; 
		flagRv.src = 'assets/images/flag-ch-rv2.png'; 
		you.src = 'assets/images/you-ch2.png'; 
		avg.src = 'assets/images/avg-ch2.png'; 
		dummy.src = 'assets/images/dummy.png'; 
		avgYou.src = 'assets/images/avg-you2.png'; 
		
		var ctx = $('#jobChart');
		var ctxP = $('#jobChart2');
		var lineChart = null;
		var lineChartP = null;
		
		var triggerAddOverview = false;
		var currentColor = 'rgb(212,177,205)';

		var jobKeyVal = {};
		var focusJob = null;
		var THname = null;
		
		var rawScore = [];
		var vLabels = [];
		var vPoints = [];
		var vLS = [];
		var disGraphMax = 1;
		
		var meanIsScore = false;
		
		var tooltip_config = {
			titleFont: { family: "'Nunito','Kanit'", },
			bodyFont: { family: "'Nunito','Kanit'", },
			footerFont: { family: "'Nunito','Kanit'", },
			
			filter: function (tooltipItem) {
				console.log(tooltipItem);
				//alert(88);
				console.log(vPoints);
				
				if(vPoints[tooltipItem.dataIndex] != dummy && tooltipItem.raw > 0){
					/*if(vPoints[tooltipItem.dataIndex] == avg){
						if(meanIsScore) return true;
						return false;
					}*/
					return true;
				}
				
				return false;
			},
			
			callbacks: {
				title: function() {},
				label: function(context) {
					console.log(context);
					//var label = context.dataset.label || '';
					/*var label = context.chart.data.orders[context.parsed.x] || '';
					
					if (label) {
						label += ': ';
					}
					if (context.parsed.y !== null) {
						//label += new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(context.parsed.y);
						label += context.chart.data.percentages[context.parsed.x];
					}
				
					var res = [label]
					//res.push('  '+context.dataset.data[context.parsed.x]+' คน');
					res.push('  '+context.dataset._vLS[context.parsed.x]+ ' คะแนน');*/
					var res = [];
					if(vPoints[context.parsed.x] == avg){
						res.push('ค่าเฉลี่ย');
						res.push(context.dataset._vLS[context.parsed.x]+' คะแนน');
					}else if(vPoints[context.parsed.x] == flag || vPoints[context.parsed.x] == flagRv){
						res.push('ค่าฐานนิยม');
						res.push(context.dataset._vLS[context.parsed.x]+' คะแนน');
					}else if(vPoints[context.parsed.x] == you || vPoints[context.parsed.x] == avgYou){
						res.push('คะแนนของคุณ');
						res.push(context.dataset._vLS[context.parsed.x]+' คะแนน'+' ('+refThis.state.rightJobPercentile+'%)');
					}else{
						res.push(context.dataset.data[context.parsed.x]+' คน');
						res.push(context.dataset._vLS[context.parsed.x]+' คะแนน');
					}
					
					return res;
				}
			}
		};
		
		var lineChartConfig = {
			type: 'line',
			data: {
				  labels: ['ไม่ได้','','','','','','','พอได้เล็กน้อย','','','','','','ดี','','','','','','ยอดเยี่ยม'],
				  orders: ['#2', '#1', '#3','#2', '#1', '#3','#2', '#1', '#3','#2', '#2', '#1', '#3','#2', '#1', '#3','#2', '#1', '#3','#2'],
				  _vLS: [],
				  percentages: ['xx.xx%', 'xx.xx%', 'xx.xx%','xx.xx%', 'xx.xx%', 'xx.xx%','xx.xx%', 'xx.xx%', 'xx.xx%','xx.xx%','xx.xx%', 'xx.xx%', 'xx.xx%','xx.xx%', 'xx.xx%', 'xx.xx%','xx.xx%', 'xx.xx%', 'xx.xx%','xx.xx%'],
				  datasets: [
					{
					  fill:  {
						target: 'origin',
						above: currentColor,   // Area will be red above the origin
						below: currentColor    // And blue below the origin
					  },
					  borderColor: 'rgb(172, 129, 163)',
					  pointStyle: ['circle','circle','circle','circle','circle','circle','circle','circle',avg,'circle','circle','circle',flag,'circle','circle',you,'circle','circle','circle','circle'],
					  pointBorderColor: 'rgb(172, 129, 163)',
					  pointBackgroundColor: 'rgb(172, 129, 163)',
					  pointRadius: 5,
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
					  tension: 0,
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
				  /*layout: {
						padding: {
							right: 200
						}
					},*/
					   scales: {
							y: {
								grid: {
									//borderColor: '#F4F4F4',
									display: false
								},
								ticks: {
									// Include a dollar sign in the ticks
									//display:false
									 callback: function(val, index) {
										// Hide the label of every 2nd dataset
										//return index % 2 === 0 ? this.getLabelForValue(val) : '';
										return val % 1 === 0 && rawScore.includes(val) && val > 0 ? val+' คน' : '';
									  },
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
						/*tooltip: {
							 enabled: false
						}*/

						tooltip: tooltip_config,
					  }
						
					   
			}
		};
		
		
		
		
		
		
		
		var userID = null;
		//var userID = '614e14097f9f24b335174047'; var x = userID;
		var x = cookie.load('login-user');
		if(x == 'none'){
			//alert(707);
			this.setState({ redirect: "/landing" });
		}else{
			//alert(808);
			userID = x;
		}
		
		var rawData= null;
		var refThis = this;
		
		var currentTab = 1;
		
		fetch("http://localhost:2000/analytics/cache/"+userID,{
		//fetch("http://localhost:3000/temp_cache",{
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
				rawData = datas;
				InitializeAnalytics();
				
			}).catch((error) => {
				console.log(error);
			});
			
		function LargeMode(){
			$('.anl-tabs').addClass('anl-tabs-anim');
			$('.nana-flex').addClass('nana-flex-anim');
			$('.overall-left-box').removeClass('overall-left-box-anim2');
			$('.overall-right-box').removeClass('overall-right-box-anim2');
			$('.overall-left-box').addClass('overall-left-box-anim');
			$('.overall-right-box').addClass('overall-right-box-anim');
			$('.overall-upper-right-box').addClass('overall-upper-right-box-anim');
			$('.overall-lower-right-box').addClass('overall-lower-right-box-anim');
		}
		
		function LargeModeAdd(){
			$('.anl-tabs').addClass('anl-tabs-anim');
			$('.nana-flex').addClass('nana-flex-anim');
			$('.overall-left-box').removeClass('overall-left-box-anim');
			$('.overall-right-box').removeClass('overall-right-box-anim');
			$('.overall-left-box').addClass('overall-left-box-anim2');
			$('.overall-right-box').addClass('overall-right-box-anim2');
			$('.overall-upper-right-box').addClass('overall-upper-right-box-anim');
			$('.overall-lower-right-box').addClass('overall-lower-right-box-anim');
		}
		
		function NormalMode(){
			$('.anl-tabs').removeClass('anl-tabs-anim');
			$('.nana-flex').removeClass('nana-flex-anim');
			$('.overall-left-box').removeClass('overall-left-box-anim');
			$('.overall-right-box').removeClass('overall-right-box-anim');
			$('.overall-left-box').removeClass('overall-left-box-anim2');
			$('.overall-right-box').removeClass('overall-right-box-anim2');
			$('.overall-upper-right-box').removeClass('overall-upper-right-box-anim');
			$('.overall-lower-right-box').removeClass('overall-lower-right-box-anim');
		}
		
		function DisablePopup(){
			$('#p1').attr('data-bs-toggle',null);
			$('#p1').attr('data-bs-target',null);
			$('#p2').attr('data-bs-toggle',null);
			$('#p2').attr('data-bs-target',null);
			$('#p3').attr('data-bs-toggle',null);
			$('#p3').attr('data-bs-target',null);
		}
		
		function EnablePopup(){
			$('#p1').attr('data-bs-toggle','modal');
			$('#p1').attr('data-bs-target','#staticBackdrop');
			$('#p2').attr('data-bs-toggle','modal');
			$('#p2').attr('data-bs-target','#staticBackdrop');
			$('#p3').attr('data-bs-toggle','modal');
			$('#p3').attr('data-bs-target','#staticBackdrop');
		}
		
		function InitializeAnalytics(){
			refThis.setState({ render: true});
			SetupTabs();
			SetupOverview();
			
			$('#tab-1').on('click', function(){
				currentTab = 1;
				EnablePopup();
				NormalMode();
				SetupOverview();
				$('.tab-list-item-p').removeClass('tab-list-active');
				$('#tabT-1').addClass('tab-list-active');
				$('.ana-head').removeClass('ana-head-anim');
			});
			
			$('#tab-2').on('click', function(){
				currentTab = 2;
				EnablePopup();
				LargeMode();
				SetupJob(1);
				$('.tab-list-item-p').removeClass('tab-list-active');
				$('#tabT-2').addClass('tab-list-active');
				$('.ana-head').addClass('ana-head-anim');
			});
			
			$('#tab-3').on('click', function(){
				currentTab = 3;
				EnablePopup();
				LargeMode();
				SetupJob(2);
				$('.tab-list-item-p').removeClass('tab-list-active');
				$('#tabT-3').addClass('tab-list-active');
				$('.ana-head').addClass('ana-head-anim');
			});
			
			$('#tab-4').on('click', function(){
				currentTab = 4;
				EnablePopup();
				LargeMode();
				SetupJob(3);
				$('.tab-list-item-p').removeClass('tab-list-active');
				$('#tabT-4').addClass('tab-list-active');
				$('.ana-head').addClass('ana-head-anim');
			});
			
			$('#tab-5').on('click', function(){
				currentTab = 5;
				DisablePopup();
				LargeModeAdd();
				SetupAdd();
				$('.tab-list-item-p').removeClass('tab-list-active');
				$('#tabT-5').addClass('tab-list-active');
				$('.ana-head').addClass('ana-head-anim');
			});
			
			$('#p1').on('click', function(){
				if(currentTab == 1) 
					SetupPopup('p1');
				else if(currentTab != 1 && currentTab != 5)
					SetupPopup('c1');
			});
			
			$('#p2').on('click', function(){
				if(currentTab == 1)
					SetupPopup('p2');
				else if(currentTab != 1 && currentTab != 5)
					SetupPopup('c2');
			});
			
			$('#p3').on('click', function(){
				if(currentTab == 1) 
					SetupPopup('p3');
				else if(currentTab != 1 && currentTab != 5)
					SetupPopup('c3');
			});
			
			$('#g1').on('click', function(){
				SetupPopup('g1');
			});
			
			$('#g2').on('click', function(){
				SetupPopup('g2');
			});
			
			$('#g3').on('click', function(){
				SetupPopup('g3');
			});
			
			$('.edit-job').on('click', function(){
				cookie.save('Edit_tabselect', 6);
				refThis.setState({ redirect: "/editprofile" });
			});
			
			$('.edit-add').on('click', function(){
				cookie.save('Edit_tabselect', 7);
				refThis.setState({ redirect: "/editprofile" });
			});
					
		}
		
		function SetupOverview(){
			$('.right-job-box').hide();
			$('.overall-lower-right-box').show();
			$('.overall-upper-right-box').show();
			$('.obl-container-add').hide();
			$('.obl-container-add-none').hide();
			$('.obl-container-add-no-jobL').hide();
			$('.obl-container-add-no-jobR').hide();
			
			$('#dropdownMenuButton1').hide();
			
			$('.ana-sub-box-p').removeClass('obc');
			$('.ana-sub-box-p').removeClass('obcs');
			$('.ana-sub-box-p').addClass('obp');
			
			if(rawData.Main.yourBest3[0] == null || rawData.Main.yourBest3[1] == null || rawData.Main.yourBest3[2] == null){ // don't show best 3
				$('.obl-container2').hide();
				$('.obl-container2-none').show();
			}else{ // show best 3
				$('.obl-container2').show();
				$('.obl-container2-none').hide();
				
				refThis.setState({ 
					topMainJOv1Job: rawData.Main.yourBest3[0].Job_Name,
					topMainJOv1Name: rawData.Main.yourBest3[0].SkillName,
					topMainJOv1Score: rawData.Main.yourBest3[0].UserScore.toFixed(1),
					topMainJOv1Percentage: rawData.Main.yourBest3[0].percentile == 0 ? rawData.Main.yourBest3[0].p.toFixed(2) : rawData.Main.yourBest3[0].percentile.toFixed(2),
					topMainJOv1Label: rawData.Main.yourBest3[0].percentile == 0 ? 'ต่ำกว่า' : 'สูงกว่า',
					topMainJOv1Count: rawData.Main.yourBest3[0].total,
					
					topMainJOv2Job: rawData.Main.yourBest3[1].Job_Name,
					topMainJOv2Name: rawData.Main.yourBest3[1].SkillName,
					topMainJOv2Score: rawData.Main.yourBest3[1].UserScore.toFixed(1),
					topMainJOv2Percentage: rawData.Main.yourBest3[1].percentile == 0 ? rawData.Main.yourBest3[1].p.toFixed(2) : rawData.Main.yourBest3[1].percentile.toFixed(2),
					topMainJOv2Label: rawData.Main.yourBest3[1].percentile == 0 ? 'ต่ำกว่า' : 'สูงกว่า',
					topMainJOv2Count: rawData.Main.yourBest3[1].total,
					
					topMainJOv3Job: rawData.Main.yourBest3[2].Job_Name,
					topMainJOv3Name: rawData.Main.yourBest3[2].SkillName,
					topMainJOv3Score: rawData.Main.yourBest3[2].UserScore.toFixed(1),
					topMainJOv3Percentage: rawData.Main.yourBest3[2].percentile == 0 ? rawData.Main.yourBest3[2].p.toFixed(2) : rawData.Main.yourBest3[2].percentile.toFixed(2),
					topMainJOv3Label: rawData.Main.yourBest3[2].percentile == 0 ? 'ต่ำกว่า' : 'สูงกว่า',
					topMainJOv3Count: rawData.Main.yourBest3[2].total,
				});
			}
			
			if(rawData.Main.InterestedJobs.length < 1){
				$('.obl-container').hide();
				$('.obl-container-none').show();
			}else{
				$('.obl-container').show();
				$('.obl-container-none').hide();
			}
			
			refThis.setState({ 
				leftBoxHeader: 'Top 3 เทรนด์ทักษะเฉพาะทั้งหมด',
				leftBoxDesc1: 'จากตำแหน่งงานทั้งหมดที่คุณสนใจ',
				leftBoxDesc2: 'คนที่เลือกตำแหน่งเดียวกับคุณส่วนใหญ่มีทักษะที่นิยม ดังนี้',
				leftBoxOvTotal: rawData.Main.Overview.numberOfUser,
			});
			
			var iList = rawData.Main.Overview.List;
			
			if(iList.length == 0){
				$('#p1').hide();
				$('#p2').hide();
				$('#p3').hide();
			}else if(iList.length == 1){
				$('#p1').show();
				$('#p2').hide();
				$('#p3').hide();
			}else if(iList.length == 2){
				$('#p1').show();
				$('#p2').show();
				$('#p3').hide();
			}else{
				$('#p1').show();
				$('#p2').show();
				$('#p3').show();
			}

			if(iList.length > 0){
				refThis.setState({ 
					leftBox1Job: rawData.Main.Overview.List[0].Job_Name,
					leftBox1Name: rawData.Main.Overview.List[0].SkillName,
					leftBox1Percentage: rawData.Main.Overview.List[0].percentage.toFixed(2),
					leftBox1Count: rawData.Main.Overview.List[0].total
				});
			}
			if(iList.length > 1){
				refThis.setState({ 
					leftBox2Job: rawData.Main.Overview.List[1].Job_Name,
					leftBox2Name: rawData.Main.Overview.List[1].SkillName,
					leftBox2Percentage: rawData.Main.Overview.List[1].percentage.toFixed(2),
					leftBox2Count: rawData.Main.Overview.List[1].total
				});
			}
			if(iList.length > 2){
				refThis.setState({ 
					leftBox3Job: rawData.Main.Overview.List[2].Job_Name,
					leftBox3Name: rawData.Main.Overview.List[2].SkillName,
					leftBox3Percentage: rawData.Main.Overview.List[2].percentage.toFixed(2),
					leftBox3Count: rawData.Main.Overview.List[2].total
				});
			}
			
			iList = rawData.Additional.Overview.List;
			
			if(iList.length < 3){
				$('.obl-container2l').hide();
				$('.obl-container2l-none').show();
			}else{
				$('.obl-container2l').show();
				$('.obl-container2l-none').hide();
				
				refThis.setState({ 
				topAddOvTotal: rawData.Additional.Overview.numberOfUsers,
				
				topAddOv1Name: iList[0].Type,
				topAddOv1Percentage: iList[0].percentage.toFixed(2),
				topAddOv1Count: iList[0].total,
				
				topAddOv2Name: iList[1].Type,
				topAddOv2Percentage: iList[1].percentage.toFixed(2),
				topAddOv2Count: iList[1].total,
				
				topAddOv3Name: iList[2].Type,
				topAddOv3Percentage: iList[2].percentage.toFixed(2),
				topAddOv3Count: iList[2].total
			});
			}
		}
		
		function UpdateAddJobR(id){
			var keyName = null;
			if(id == 'b1'){
				keyName = rawData.Additional.InterestedJobs[0].name;
			}else if(id == 'b2'){
				keyName = rawData.Additional.InterestedJobs[1].name;
			}else{
				keyName = rawData.Additional.InterestedJobs[2].name;
			}
			
			if(rawData.Additional.mySkills.length == 3){
				$('.mySkl1').show();
				$('.mySkl2').show();
				$('.mySkl3').show();
				$('.newSkl1').hide();
				$('.newSkl2').hide();
			}else if(rawData.Additional.mySkills.length == 2){
				$('.mySkl1').show();
				$('.mySkl2').show();
				$('.mySkl3').hide();
				$('.newSkl1').show();
				$('.newSkl2').hide();
			}else if(rawData.Additional.mySkills.length == 1){
				$('.mySkl1').show();
				$('.mySkl2').hide();
				$('.mySkl3').hide();
				$('.newSkl1').show();
				$('.newSkl2').show();
			}else{
				//alert('User has no skill!');
				return;
			}
			
			refThis.setState({ topAddTotal: rawData.Additional[keyName].numberOfUsers });
			
			var i=1;
			rawData.Additional[keyName].List.forEach((entry) => {
				if(entry.isMySkill){
					if(i == 1){
						refThis.setState({ 
							rightBox1AddType: entry.Type,
							rightBox1AddName: entry.AdditionalSkill,
							rightBox1AddPercentage: entry.percentage.toFixed(2),
							rightBox1AddCount: entry.total
						});
					}else if(i == 2){
						refThis.setState({ 
							rightBox2AddType: entry.Type,
							rightBox2AddName: entry.AdditionalSkill,
							rightBox2AddPercentage: entry.percentage.toFixed(2),
							rightBox2AddCount: entry.total
						});
					}else{
						refThis.setState({ 
							rightBox3AddType: entry.Type,
							rightBox3AddName: entry.AdditionalSkill,
							rightBox3AddPercentage: entry.percentage.toFixed(2),
							rightBox3AddCount: entry.total
						});
					}
					i += 1;
				}
			});
		}
		
		function UpdateAddJobL(id){
			var keyName = null;
			if(id == 'a1'){
				keyName = rawData.Additional.InterestedJobs[0].name;
			}else if(id == 'a2'){
				keyName = rawData.Additional.InterestedJobs[1].name;
			}else{
				keyName = rawData.Additional.InterestedJobs[2].name;
			}
			
			refThis.setState({ 
				leftBoxHeader: 'Top 3 เทรนด์ทักษะเสริมยอดนิยม',
				leftBoxDesc1: 'ในกลุ่มคนที่สนใจตำแหน่งงานเดียวกัน',
				leftBoxDesc2: 'ส่วนใหญ่มีทักษะเสริมที่นิยม คิดเป็นร้อยละ ดังนี้',
				leftBoxOvTotal: rawData.Additional[keyName].numberOfUsers,
			});
			
			var iList = rawData.Additional[keyName].List;
			
			if(iList.length == 0){
				$('#p1').hide();
				$('#p2').hide();
				$('#p3').hide();
			}else if(iList.length == 1){
				$('#p1').show();
				$('#p2').hide();
				$('#p3').hide();
			}else if(iList.length == 2){
				$('#p1').show();
				$('#p2').show();
				$('#p3').hide();
			}else{
				$('#p1').show();
				$('#p2').show();
				$('#p3').show();
			}
			
			if(iList.length > 0){
				refThis.setState({ 
					leftBox1Job: iList[0].Type,
					leftBox1Name: iList[0].AdditionalSkill,
					leftBox1Percentage: iList[0].percentage.toFixed(2),
					leftBox1Count: iList[0].total
				});
			}
			if(iList.length > 1){
				refThis.setState({ 
					leftBox2Job: iList[1].Type,
					leftBox2Name: iList[1].AdditionalSkill,
					leftBox2Percentage: iList[1].percentage.toFixed(2),
					leftBox2Count: iList[1].total
				});
			}
			if(iList.length > 2){
				refThis.setState({ 
					leftBox3Job: iList[2].Type,
					leftBox3Name: iList[2].AdditionalSkill,
					leftBox3Percentage: iList[2].percentage.toFixed(2),
					leftBox3Count: iList[2].total,
				});
			}
		}
		
		function SetupAdd(){
			if(rawData.Additional.InterestedJobs.length > 0){
				
				$('.nsb').click(function(){
						cookie.save('Edit_tabselect', 7);
					refThis.setState({ redirect: "/editprofile" });
				});
				
				$('#dropdownMenuButton1').show();
				THname = rawData.Additional.InterestedJobs[0].THname;
				
				$('#dropdownMenuButton1').text(rawData.Additional.InterestedJobs[0].THname);
				$('#dropdownMenuButton3').text(rawData.Additional.InterestedJobs[0].THname);
				focusJob = rawData.Additional.InterestedJobs[0].THname;
				
				$('#dropdownContainer1').empty();
				$('#dropdownContainer3').empty();
				var i=1;
				rawData.Additional.InterestedJobs.forEach((entry) => {
					var div = '<li><div class="dropdown-item ia" id="a'+i+'">'+entry.THname+'</div></li>';
					var div2 = '<li><div class="dropdown-item ib" id="b'+i+'">'+entry.THname+'</div></li>';
					$('#dropdownContainer1').append(div);
					$('#dropdownContainer3').append(div2);
					i += 1;
				});
				
				$(".ia").click(function(){
				  $("#dropdownMenuButton1").text($(this).text());
				  $("#dropdownMenuButton1").val($(this).text());
				  focusJob = $(this).text();
				  UpdateAddJobL($(this).attr('id'));
				});
				
				$(".ib").click(function(){
				  $("#dropdownMenuButton3").text($(this).text());
				  $("#dropdownMenuButton3").val($(this).text());
				  focusJob = $(this).text();
				  UpdateAddJobR($(this).attr('id'));
				});
				
				UpdateAddJobL('a1');
				UpdateAddJobR('b1');

				$('.overall-lower-right-box').hide();
				$('.overall-upper-right-box').hide();
				$('.right-job-box').show();
				
				$('.obl-container').show();
				$('.obl-container-none').hide();
				
				$('.obl-container3').hide();
				$('.obl-container3-none').hide();
				if(rawData.Additional.mySkills.length > 0){
					$('.obl-container-add-none').hide();
					$('.obl-container-add').show();
				}else{
					$('.obl-container-add').hide();
					$('.obl-container-add-none').show();
				}

				$('.ana-sub-box-p').removeClass('obp');
				$('.ana-sub-box-p').removeClass('obc');
				$('.ana-sub-box-p').addClass('obcs');
			}else{
				$('.overall-lower-right-box').hide();
				$('.overall-upper-right-box').hide();
				$('.right-job-box').show();
				$('.obl-container').hide();
				$('.obl-container-none').hide();
				
				$('.obl-container3').hide();
				$('.obl-container3-none').hide();
				
				$('.obl-container-none').hide();
				$('.obl-container-add').hide();
				$('.obl-container-add-none').hide();
				$('.obl-container-add-no-jobL').show();
				$('.obl-container-add-no-jobR').show();
			}
		}
		
		function UpdateFocusJob(id){
			var md = null;
			if(jobKeyVal[focusJob].Mode.length == 2){
				$('.md-hid').show();
				md = jobKeyVal[focusJob].Mode[0].toFixed(2)+' และ '+ jobKeyVal[focusJob].Mode[1].toFixed(2)+' คะแนน';
			}else if(jobKeyVal[focusJob].Mode.length == 1){
				$('.md-hid').show();
				md = jobKeyVal[focusJob].Mode[0].toFixed(2)+' คะแนน';
			}else{
				//alert('hide');
				$('.md-hid').hide();
			}
			console.log( jobKeyVal[focusJob] );
			refThis.setState({ 
				rightJobName: THname,
				rightJobSkillName: focusJob,
				rightJobScore: jobKeyVal[focusJob].UserScore.toFixed(1),
				rightJobPercentage: jobKeyVal[focusJob].percentage.toFixed(2),
				rightJobCount: jobKeyVal[focusJob].total,
				rightJobPercentile: jobKeyVal[focusJob].percentile == 0 ? jobKeyVal[focusJob].p.toFixed(2) : jobKeyVal[focusJob].percentile.toFixed(2),
				rightJobPLabel: jobKeyVal[focusJob].percentile == 0 ? 'ต่ำกว่า' : 'สูงกว่า',
				rightJobMean: jobKeyVal[focusJob].Mean.toFixed(2),
				rightJobMode: md
			});
			
			var ccr = null;
			var ccd = null;
			if(id == 's1') {
				ccr = 'rgb(212,177,205)';
				ccd = 'rgb(162,127,155)';
				$('.jbox').addClass('obps');
				$('.jbox').removeClass('obgs');
				$('.jbox').removeClass('oby');
			}else if(id == 's2') {
				ccr = 'rgb(195,219,197)';
				ccd = 'rgb(145,169,147)';
				$('.jbox').removeClass('obps');
				$('.jbox').addClass('obgs');
				$('.jbox').removeClass('oby');
			}else {
				ccr = 'rgb(255,230,167)';
				ccd = 'rgb(205,170,117)';
				$('.jbox').removeClass('obps');
				$('.jbox').removeClass('obgs');
				$('.jbox').addClass('oby');
			}
			lineChartConfig.data.datasets[0].borderColor = ccd;
			lineChartConfig.data.datasets[0].pointBorderColor = ccd;
			lineChartConfig.data.datasets[0].pointBackgroundColor = ccd;
			
			lineChartConfig.data.datasets[0].fill.above = ccr;
			lineChartConfig.data.datasets[0].fill.below = ccr;
			//lineChartConfig.data.datasets[0].borderColor = ccd;
			GenerateDistributionChartData(jobKeyVal[focusJob]);
			lineChartConfig.data.labels = vLabels;
			lineChartConfig.data.datasets[0].data = rawScore;
			lineChartConfig.data.percentages = ['xx.xx%'];
			lineChartConfig.data.datasets[0].pointStyle = vPoints;
			lineChartConfig.data.datasets[0]._vLS = vLS;
			lineChartConfig.options.scales.y.max = disGraphMax;
			
			ctx = document.getElementById("jobChart").getContext("2d");
			if(lineChart != null){
				lineChart.update();
			}else{
				lineChart = new Chart(ctx, lineChartConfig);
			}
		}
		
		function SetupPopup(id){
			var dataSet = null; var total = null; var ccr = null; var ccd = null; var jKey = null; var sKey = null; var descTotal = null;

			if(id == 'p1'){
				ccr = 'rgb(212,177,205)';
				ccd = 'rgb(162,127,155)';
				$('.icc').css('background','rgb(212,177,205)');
				total = rawData.Main.Overview.numberOfUser;
				dataSet = rawData.Main.Overview.List[0];
				jKey = rawData.Main.Overview.List[0].Job_Name;
				descTotal = rawData.Main[jKey].numberOfUsers;
			}else if(id == 'p2'){
				ccr = 'rgb(212,177,205)';
				ccd = 'rgb(162,127,155)';
				$('.icc').css('background','rgb(212,177,205)');
				total = rawData.Main.Overview.numberOfUser;
				dataSet = rawData.Main.Overview.List[1];
				jKey = rawData.Main.Overview.List[1].Job_Name;
				descTotal = rawData.Main[jKey].numberOfUsers;
			}else if(id == 'p3'){
				ccr = 'rgb(212,177,205)';
				ccd = 'rgb(162,127,155)';
				$('.icc').css('background','rgb(212,177,205)');
				total = rawData.Main.Overview.numberOfUser;
				dataSet = rawData.Main.Overview.List[2];
				jKey = rawData.Main.Overview.List[2].Job_Name;
				descTotal = rawData.Main[jKey].numberOfUsers;
			}else if(id == 'g1'){
				ccr = 'rgb(195,219,197)';
				ccd = 'rgb(145,169,127)';
				$('.icc').css('background','rgb(195,219,197');
				jKey = rawData.Main.yourBest3[0].Job_Name;
				sKey = rawData.Main.yourBest3[0].SkillName;
				total = rawData.Main[jKey].numberOfUsers;
				descTotal = rawData.Main[jKey].numberOfUsers;
				rawData.Main[jKey].List.every((entry) => {
					if(entry.SkillName == sKey){
						dataSet = entry;
						return false;
					}
					return true;
				});
			}else if(id == 'g2'){
				ccr = 'rgb(195,219,197)';
				ccd = 'rgb(145,169,127)';
				$('.icc').css('background','rgb(195,219,197');
				jKey = rawData.Main.yourBest3[1].Job_Name;
				sKey = rawData.Main.yourBest3[1].SkillName;
				total = rawData.Main[jKey].numberOfUsers;
				descTotal = rawData.Main[jKey].numberOfUsers;
				rawData.Main[jKey].List.every((entry) => {
					if(entry.SkillName == sKey){
						dataSet = entry;
						return false;
					}
					return true;
				});
			}else if(id == 'g3'){
				ccr = 'rgb(195,219,197)';
				ccd = 'rgb(145,169,127)';
				$('.icc').css('background','rgb(195,219,197');
				jKey = rawData.Main.yourBest3[2].Job_Name;
				sKey = rawData.Main.yourBest3[2].SkillName;
				total = rawData.Main[jKey].numberOfUsers;
				descTotal = rawData.Main[jKey].numberOfUsers;
				rawData.Main[jKey].List.every((entry) => {
					if(entry.SkillName == sKey){
						dataSet = entry;
						return false;
					}
					return true;
				});
			}else if(id == 'c1'){
				ccr = 'rgb(182,222,234)';
				ccd = 'rgb(132,172,184)';
				$('.icc').css('background','rgb(182,222,234)');
				if(currentTab == 2) jKey = rawData.Main.InterestedJobs[0].THname;
				else if(currentTab == 3) jKey = rawData.Main.InterestedJobs[1].THname;
				else if(currentTab == 4) jKey = rawData.Main.InterestedJobs[2].THname;
				total = rawData.Main[jKey].numberOfUsers;
				dataSet = rawData.Main[jKey].List[0];
				descTotal = rawData.Main[jKey].numberOfUsers;
			}else if(id == 'c2'){
				ccr = 'rgb(182,222,234)';
				ccd = 'rgb(132,172,184)';
				$('.icc').css('background','rgb(182,222,234)');
				if(currentTab == 2) jKey = rawData.Main.InterestedJobs[0].THname;
				else if(currentTab == 3) jKey = rawData.Main.InterestedJobs[1].THname;
				else if(currentTab == 4) jKey = rawData.Main.InterestedJobs[2].THname;
				total = rawData.Main[jKey].numberOfUsers;
				dataSet = rawData.Main[jKey].List[1];
				descTotal = rawData.Main[jKey].numberOfUsers;
			}else if(id == 'c3'){
				ccr = 'rgb(182,222,234)';
				ccd = 'rgb(132,172,184)';
				$('.icc').css('background','rgb(182,222,234)');
				if(currentTab == 2) jKey = rawData.Main.InterestedJobs[0].THname;
				else if(currentTab == 3) jKey = rawData.Main.InterestedJobs[1].THname;
				else if(currentTab == 4) jKey = rawData.Main.InterestedJobs[2].THname;
				total = rawData.Main[jKey].numberOfUsers;
				dataSet = rawData.Main[jKey].List[2];
				descTotal = rawData.Main[jKey].numberOfUsers;
			}
			
			var md = null;
			if(dataSet.Mode.length == 2){
				$('.mdp-hid').show();
				md = dataSet.Mode[0].toFixed(2)+' และ '+ dataSet.Mode[1].toFixed(2)+' คะแนน';
			}else if(dataSet.Mode.length == 1){
				$('.mdp-hid').show();
				md = dataSet.Mode[0].toFixed(2)+' คะแนน';
			}else{
				$('.mdp-hid').hide();
			}
			
			//alert(dataSet.percentile);
			//alert(dataSet.p);
			refThis.setState({ 
				popJobTotal: descTotal,
				popJobName: jKey,
				popJobSkillName: dataSet.SkillName,
				//rightJobPercentage: dataSet.percentage.toFixed(2),
				//rightJobCount: dataSet.total,
				popupDescPercentage:  dataSet.percentage.toFixed(2),
				popupDescCount: dataSet.total,
				popJobMean: dataSet.Mean.toFixed(2),
				popJobMode: md
			});
			
			if(dataSet.UserScore != null){
				$('.youp-hid').show();
				refThis.setState({  
					popJobScore: dataSet.UserScore.toFixed(2), 
					popJobPercentile: dataSet.percentile == 0 ? dataSet.p.toFixed(2) : dataSet.percentile.toFixed(2),
				});
			}else{
				$('.youp-hid').hide();
			}
			lineChartConfig.data.datasets[0].borderColor = ccd;
			lineChartConfig.data.datasets[0].pointBorderColor = ccd;
			lineChartConfig.data.datasets[0].pointBackgroundColor = ccd;
			
			//lineChartConfig.data.datasets[0].borderColor = ccr;
			lineChartConfig.data.datasets[0].fill.above = ccr;
			lineChartConfig.data.datasets[0].fill.below = ccr;
			GenerateDistributionChartData(dataSet);
			lineChartConfig.data.labels = vLabels;
			lineChartConfig.data.datasets[0].data = rawScore;
			lineChartConfig.data.percentages = ['xx.xx%'];
			lineChartConfig.data.datasets[0].pointStyle = vPoints;
			lineChartConfig.data.datasets[0]._vLS = vLS;
			lineChartConfig.options.scales.y.max = disGraphMax;
			
			ctxP = document.getElementById("jobChart2").getContext("2d");
			if(lineChartP != null){
				lineChartP.update();
			}else{
				setTimeout(function() { lineChartP = new Chart(ctxP, lineChartConfig); }, 100);
				
			}
		}
		
		function GenerateDistributionChartData(entry){
				disGraphMax = 0;
				vLS = [];
				
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
				var youScr = null;
				
				var z1Count=0;
				var z2Count=0;
				var z3Count=0;
				
				refThis.setState({ mainFocusSkillCount: entry.total });
				console.log('match bar clicked: '+entry.SkillName);
				
				mean = Number(entry.Mean.toFixed(2));
				if(entry.UserScore != null)
					youScr = entry.UserScore.toFixed(1);
				var meanPos=0; var addMean = true; meanIsScore = false;
				for (let i = 0; i < entry.AllScore.length; i++) {
					if(entry.AllScore[i] == mean){
						addMean = false;
						meanIsScore = true;
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
					vLS.push(scores[i]);
					if(scores[i] == 2.5){
						vLabels.push(['พอได้','เล็กน้อย']);
					}else if(scores[i] == 5){
						vLabels.push('พอใช้');
					}else if(scores[i] == 7.5){
						vLabels.push('ดี');
					}else if(scores[i] == 10){
						vLabels.push('ยอดเยี่ยม');
					}else{
						if(scores[i] == youScr || scores[i] == mean || scores[i] == mode1 || scores[i] == mode2){ // show important score value
							if(scores[i] == youScr){
								var pct = entry.percentile == 0 ? entry.p.toFixed(2) : entry.percentile.toFixed(2);
								//vLabels.push([scores[i]+' คะแนน','('+pct+'%)']);
								vLabels.push('');
							}else{
								//vLabels.push(scores[i]+' คะแนน');
								vLabels.push('');
							}
						}else{
							vLabels.push('');
						}
					}
					
					if(scores[i] >= 10){ // fix pic bug at max
						vPoints.push('circle');
					}else{
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
							vPoints.push('circle');
						}
					}
				}

				if(!scores.includes(2.5)){
					scores.unshift(2.5);
					count.unshift(0);
					vLabels.unshift(['พอได้','เล็กน้อย']);
					vPoints.unshift(dummy);
					vLS.unshift(-1);
				}
				
				if(!scores.includes(10)){
					scores.push(10);
					count.push(0);
					vLabels.push('ยอดเยี่ยม');
					vPoints.push(dummy);
					vLS.push(-1);
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
						vLS.splice(goodIndex+1, 0, -1);
					}else{
						scores.splice(goodIndex, 0, 'SP1');
						var dumGood = 0;
						if(z1Count > 0 && z2Count > 0)
							dumGood = (count[goodIndex-1] + count[goodIndex]) / 2;
						count.splice(goodIndex, 0, dumGood);
						vLabels.splice(goodIndex, 0, 'พอใช้');
						vPoints.splice(goodIndex, 0, dummy);
						vLS.splice(goodIndex, 0, -1);
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
						vLS.splice(betterIndex, 0, -1);
					}else{
						scores.splice(betterIndex, 0, 'SP2');
						var dumGood = 0;
						if(z2Count > 0 && z3Count > 0)
							dumGood = (count[betterIndex-1] + count[betterIndex]) / 2;
						count.splice(betterIndex, 0, dumGood);
						vLabels.splice(betterIndex, 0, 'ดี');
						vPoints.splice(betterIndex, 0, dummy);
						vLS.splice(betterIndex, 0, -1);
					}
				}
				
				rawScore = count;

				console.log(scores);
				console.log(count);
				console.log(vLabels);
				console.log(vPoints);
		}
		
		function SetupJob(id){
			$('#dropdownMenuButton1').hide();
			THname = rawData.Main.InterestedJobs[id-1].THname;
			
			var skillList = [];
			rawData.Main[THname].List.forEach((entry) => {
				if(rawData.Main.mySkills.includes(entry.SkillName) && entry.UserScore != null){
					skillList.push(entry.SkillName);
					jobKeyVal[entry.SkillName] = entry;
				}
			});
			
			$('#dropdownMenuButton2').text(skillList[0]);
			focusJob = skillList[0];
			
			$('#dropdownContainer2').empty();
			var i=1;
			skillList.forEach((entry) => {
				var div = '<li><div class="dropdown-item" id="s'+i+'">'+entry+'</div></li>';
				$('#dropdownContainer2').append(div);
				i += 1;
			});
			
			$(".dropdown-item").click(function(){
			  $("#dropdownMenuButton2").text($(this).text());
			  $("#dropdownMenuButton2").val($(this).text());
			  focusJob = $(this).text();
			  UpdateFocusJob($(this).attr('id'));
		    });
			
			refThis.setState({ 
				leftBoxHeader: 'Top 3 เทรนด์ทักษะยอดนิยม',
				leftBoxDesc1: 'ในกลุ่มคนที่สนใจตำแหน่งงาน'+ THname,
				leftBoxDesc2: 'ส่วนใหญ่มีทักษะที่นิยม คิดเป็นร้อยละ ดังนี้',
				leftBoxOvTotal: rawData.Main[THname].numberOfUsers,
				rightJobTotal: rawData.Main[THname].numberOfUsers
			});
			
			var iList = rawData.Main[THname].List;
			
			if(iList.length == 0){
				$('#p1').hide();
				$('#p2').hide();
				$('#p3').hide();
			}else if(iList.length == 1){
				$('#p1').show();
				$('#p2').hide();
				$('#p3').hide();
			}else if(iList.length == 2){
				$('#p1').show();
				$('#p2').show();
				$('#p3').hide();
			}else{
				$('#p1').show();
				$('#p2').show();
				$('#p3').show();
			}
			
			if(iList.length > 0){
				refThis.setState({ 
					leftBox1Job: THname,
					leftBox1Name: iList[0].SkillName,
					leftBox1Percentage: iList[0].percentage.toFixed(2),
					leftBox1Count: iList[0].total,
				});
			}
			if(iList.length > 1){
				refThis.setState({ 
					leftBox2Job: THname,
					leftBox2Name: iList[1].SkillName,
					leftBox2Percentage: iList[1].percentage.toFixed(2),
					leftBox2Count: iList[1].total,
				});
			}
			if(iList.length > 2){
				refThis.setState({ 
					leftBox3Job: THname,
					leftBox3Name: iList[2].SkillName,
					leftBox3Percentage: iList[2].percentage.toFixed(2),
					leftBox3Count: iList[2].total,
				});
			}

			$('.overall-lower-right-box').hide();
			$('.overall-upper-right-box').hide();
			$('.right-job-box').show();
			
			$('.obl-container').show();
			$('.obl-container-none').hide();
			
			if(skillList.length > 0){
				$('.obl-container3').show();
				$('.obl-container3-none').hide();
				
				UpdateFocusJob('s1');
			}else{
				$('.obl-container3').hide();
				$('.obl-container3-none').show();
			}
			$('.obl-container-add').hide();
			$('.obl-container-add-none').hide();

			$('.ana-sub-box-p').removeClass('obp');
			$('.ana-sub-box-p').removeClass('obcs');
			$('.ana-sub-box-p').addClass('obc');
		}
		
		function SetupTabs(){
			if(rawData.Main.InterestedJobs.length == 3){
				$('#tabT-2').text(rawData.Main.InterestedJobs[0].THname);
				$('#tabT-3').text(rawData.Main.InterestedJobs[1].THname);
				$('#tabT-4').text(rawData.Main.InterestedJobs[2].THname);
				$('#tab-s1').hide();
				$('#tab-s2').hide();
				$('#tab-s3').hide();
			}else if(rawData.Main.InterestedJobs.length == 2){
				$('#tabT-2').text(rawData.Main.InterestedJobs[0].THname);
				$('#tabT-3').text(rawData.Main.InterestedJobs[1].THname);
				$('#tab-4').hide();
				$('#tab-s1').hide();
				$('#tab-s2').hide();
			}else if(rawData.Main.InterestedJobs.length == 1){
				$('#tabT-2').text(rawData.Main.InterestedJobs[0].THname);
				$('#tab-3').hide();
				$('#tab-4').hide();
				$('#tab-s1').hide();
			}else{
				$('#tab-2').hide();
				$('#tab-3').hide();
				$('#tab-4').hide();
			}
		}
	}
	
	componentWillUnmount() { 
	   window.removeEventListener('load', this.handleLoad)  
	}
	
	handleLoad() {
		console.log("YEAH!");
	 }
	
	render (){
		if(this.state.redirect) {
			return <Redirect to={this.state.redirect} />
		}
		
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
			<div className="Analytics">
				<link rel="stylesheet" href="assets/css/bookmark.css" />
				<Navbar />
				
				<br></br>
				<header class="header-white bookmark-header-fixed fat">
					<div class="container-fluid yahaha2">     
						<div class="row">
							<div class="col">
								<div class="topDataBk-content ana-head">
									<h1 class="name inline">Analytics</h1>
								</div>
							</div>
						</div>        
					</div>
				</header>
				
				<div class="sbm-flex tabs-list-sbm anl-tabs">
					<div class="smb-1a" id="tab-1">
						<li class="tab-list-item-p tab-list-active" id="tabT-1" type="button">ภาพรวม</li> 
					</div>
					<div class="smb-1a" id="tab-2">
						<li class="tab-list-item-p" id="tabT-2" type="button">งานที่ 1</li>
					</div>
					<div class="smb-1a" id="tab-3">
						<li class="tab-list-item-p" id="tabT-3" type="button">งานที่ 2</li>
					</div>
					<div class="smb-1a" id="tab-4">
						<li class="tab-list-item-p" id="tabT-4" type="button">งานที่ 3</li>
					</div>
					<div class="smb-1a" id="tab-5">
						<li class="tab-list-item-p" id="tabT-5" type="button">ทักษะเสริม</li>
					</div>
					
					<div class="smb-1a" id="tab-s1"></div>
					<div class="smb-1a" id="tab-s2"></div>
					<div class="smb-1a" id="tab-s3"></div>
					
					<div class="smb-2a" id="tab-2">
						<a class="btn bcp-white round-ss profile-button edit-job" id="new-port" target="_blank">แก้ไขข้อมูล</a>
					</div>
				</div>
				
				<br></br>
				<div class="nana-flex">
					<div class="overall-left-box">
						<div class="obl-container">
							<hhf>{this.state.leftBoxHeader}</hhf>
							<atf>{this.state.leftBoxDesc1}</atf>
							<atf>{this.state.leftBoxDesc2}</atf>
							<div class="dg-zone">
								<azf>จากทั้งหมด {this.state.leftBoxOvTotal} คน</azf>
								<button class="btn btn-cta-primary round grey dropdown-toggle tab-dropdown-pad-flex" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">งานที่ 1</button>
								<ul class="dropdown-menu" id="dropdownContainer1" aria-labelledby="dropdownMenuButton1">
								   <li><a class="dropdown-item" id="sort-time">งานที่ 1</a></li>
								   <li><a class="dropdown-item" id="sort-total">งานที่ 2</a></li>
								</ul>
							</div>
							<br></br>
							<div class="ana-sub-box-container">
								<div class="ana-sub-box-p obp" id="p1" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
									<div class="asb-container">
										<div class="asb-left">
											<hbf>#1</hbf>
											<atf>{this.state.leftBox1Job}</atf>
											<naf>{this.state.leftBox1Name}</naf>
										</div>
										<div class="asb-right">
											<muf>คิดเป็นร้อยละ</muf>
											<hhf>{this.state.leftBox1Percentage}</hhf>
											<naf>({this.state.leftBox1Count} คน)</naf>
										</div>
									</div>
								</div>
								<div class="ana-sub-box-p obp" id="p2" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
									<div class="asb-container">
										<div class="asb-left">
											<hbf>#2</hbf>
											<atf>{this.state.leftBox2Job}</atf>
											<naf>{this.state.leftBox2Name}</naf>
										</div>
										<div class="asb-right">
											<muf>คิดเป็นร้อยละ</muf>
											<hhf>{this.state.leftBox2Percentage}</hhf>
											<naf>({this.state.leftBox2Count} คน)</naf>
										</div>
									</div>
								</div>
								<div class="ana-sub-box-p obp" id="p3" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
									<div class="asb-container">
										<div class="asb-left">
											<hbf>#3</hbf>
											<atf>{this.state.leftBox3Job}</atf>
											<naf>{this.state.leftBox3Name}</naf>
										</div>
										<div class="asb-right">
											<muf>คิดเป็นร้อยละ</muf>
											<hhf>{this.state.leftBox3Percentage}</hhf>
											<naf>({this.state.leftBox3Count} คน)</naf>
										</div>
									</div>
								</div>
							</div>
						</div>
						
						<div class="obl-container-none">
							<hrf>Top 3 เทรนด์ทักษะเฉพาะทั้งหมด</hrf>
							<ktf>จากตำแหน่งงานทั้งหมดที่คุณสนใจ</ktf>
							<ktf>คนที่เลือกตำแหน่งเดียวกับคุณส่วนใหญ่มีทักษะที่นิยม ดังนี้</ktf>
							<div class="add-none">
								<kf>เพิ่มตำแหน่งงานที่คุณสนใจ</kf>
								<kf>เพื่อดูการวิเคราะห์ข้อมูลทางสถิติโดยเทียบกับผู้ใช้งานคนอื่นในระบบ</kf>
								<a class="btn btn-cta-primary-yellow round profile-button edit-job" id="new-port" target="_blank">เพิ่มตำแหน่งงาน</a>
							</div>
						</div>
						
						<div class="obl-container-add-no-jobL">
							<hrf>Top 3 เทรนด์ทักษะเสริมยอดนิยม</hrf>
							<ktf>ในกลุ่มคนที่สนใจตำแหน่งงานเดียวกัน</ktf>
							<ktf>ส่วนใหญ่มีทักษะเสริมที่นิยม คิดเป็นร้อยละ ดังนี้</ktf>
							<div class="add-none">
								<kf>เพิ่มตำแหน่งงานที่คุณสนใจ</kf>
								<kf>เพื่อดูการวิเคราะห์ข้อมูลทางสถิติโดยเทียบกับผู้ใช้งานคนอื่นในระบบ</kf>
								<a class="btn btn-cta-primary-yellow round profile-button edit-job" id="new-port" target="_blank">เพิ่มตำแหน่งงาน</a>
							</div>
						</div>
						
					</div>
					<div class="overall-right-box">
						<div class="overall-upper-right-box">
							<div class="obl-container2">
								<hhf>Top 3 คะแนนทักษะที่โดดเด่นทั้งหมดของคุณ</hhf>
								<div class="obs-container">
									<div class="obs-box obg" id="g1" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
										<div class="asb-container2">
											<div class="asb-upper">
												<hbf class="asb-a">#1</hbf>
												<div class="asb-b">
													<atf>{this.state.topMainJOv1Job}</atf>
													<naf>{this.state.topMainJOv1Name}</naf>
												</div>
											</div>
											<div class="asb-lower">
												<muf>คะแนนของคุณ {this.state.topMainJOv1Score} คะแนน</muf>
												<div class="asb-l1">
													<naf>{this.state.topMainJOv1Label}</naf>
													<hbf class="spc1">{this.state.topMainJOv1Percentage}%</hbf>
												</div>
												<muf>ของคนทั้งหมด {this.state.topMainJOv1Count} คนที่เลือกทักษะนี้</muf>
											</div>
										</div>
									</div>
									<div class="obs-box obg" id="g2" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
										<div class="asb-container2">
											<div class="asb-upper">
												<hbf class="asb-a">#2</hbf>
												<div class="asb-b">
													<atf>{this.state.topMainJOv2Job}</atf>
													<naf>{this.state.topMainJOv2Name}</naf>
												</div>
											</div>
											<div class="asb-lower">
												<muf>คะแนนของคุณ {this.state.topMainJOv2Score} คะแนน</muf>
												<div class="asb-l1">
													<naf>{this.state.topMainJOv2Label}</naf>
													<hbf class="spc1">{this.state.topMainJOv2Percentage}%</hbf>
												</div>
												<muf>ของคนทั้งหมด {this.state.topMainJOv2Count} คนที่เลือกทักษะนี้</muf>
											</div>
										</div>
									</div>
									<div class="obs-box obg" id="g3" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
										<div class="asb-container2">
											<div class="asb-upper">
												<hbf class="asb-a">#3</hbf>
												<div class="asb-b">
													<atf>{this.state.topMainJOv3Job}</atf>
													<naf>{this.state.topMainJOv3Name}</naf>
												</div>
											</div>
											<div class="asb-lower">
												<muf>คะแนนของคุณ {this.state.topMainJOv3Score} คะแนน</muf>
												<div class="asb-l1">
													<naf>{this.state.topMainJOv3Label}</naf>
													<hbf class="spc1">{this.state.topMainJOv3Percentage}%</hbf>
												</div>
												<muf>ของคนทั้งหมด {this.state.topMainJOv3Count} คนที่เลือกทักษะนี้</muf>
											</div>
										</div>
									</div>
								</div>
							</div>
							
							<div class="obl-container2-none">
								<div class="dg-zone2">
									<hrf>วิเคราะห์คะแนนทักษะ</hrf>
								</div>
								<div class="add-none">
									<kf>เพิ่มทักษะที่ถนัดในตำแหน่งงานของคุณ</kf>
									<kf>เพื่อดูการวิเคราะห์ข้อมูลทางสถิติโดยเทียบกับผู้ใช้งานคนอื่นในระบบ</kf>
									<a class="btn btn-cta-primary-yellow round profile-button edit-job" id="new-port" target="_blank">เพิ่มทักษะ</a>
								</div>
							</div>
							
						</div>
						<div class="overall-lower-right-box">
							<div class="obl-container2l">
								<hhf>Top 3 เทรนด์ทักษะเสริมทั้งหมด</hhf>
								<naf>จากผู้ใช้ทุกคนในระบบ คนส่วนใหญ่มีทักษะเสริมที่นิยม ดังนี้</naf>
								<akf>จากทั้งหมด {this.state.topAddOvTotal} คน</akf>
								<div class="obs-container">
									<div class="obs-box obo">
										<div class="asb-container2">
											<div class="asb-la">
												<hdf>#1</hdf>
												<naf>{this.state.topAddOv1Name}</naf>
											</div>
											<muf class="asb-lb">คิดเป็นร้อยละ</muf>
											<div class="asb-lc">
												<hbf>{this.state.topAddOv1Percentage}</hbf>
												<naf class="spc1">({this.state.topAddOv1Count} คน)</naf>
											</div>
										</div>
									</div>
									<div class="obs-box obo">
										<div class="asb-container2">
											<div class="asb-la">
												<hdf>#2</hdf>
												<naf>{this.state.topAddOv2Name}</naf>
											</div>
											<muf class="asb-lb">คิดเป็นร้อยละ</muf>
											<div class="asb-lc">
												<hbf>{this.state.topAddOv2Percentage}</hbf>
												<naf class="spc1">({this.state.topAddOv2Count} คน)</naf>
											</div>
										</div>
									</div>
									<div class="obs-box obo">
										<div class="asb-container2">
											<div class="asb-la">
												<hdf>#3</hdf>
												<naf>{this.state.topAddOv3Name}</naf>
											</div>
											<muf class="asb-lb">คิดเป็นร้อยละ</muf>
											<div class="asb-lc">
												<hbf>{this.state.topAddOv3Percentage}</hbf>
												<naf class="spc1">({this.state.topAddOv3Count} คน)</naf>
											</div>
										</div>
									</div>
								</div>
							</div>
							
							<div class="obl-container2l-none">
								<div class="dg-zone2">
									<hrf>Top 3 เทรนด์ทักษะเสริมทั้งหมด</hrf>
								</div>
								<div class="add-none">
									<kf>ขออถัย แต่ข้อมูลทักษะเสริมในระบบไม่เพียงพอที่จะแสดงผลนี้</kf>
								</div>
							</div>
						</div>
						
						<div class="right-job-box">
							<div class="obl-container3">
								<div class="dg-zone2">
									<hhf>วิเคราะห์คะแนนทักษะ</hhf>
									<button class="btn btn-cta-primary round grey dropdown-toggle tab-dropdown-pad-flex" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false">งานที่ 1</button>
									<ul class="dropdown-menu" aria-labelledby="dropdownMenuButton2" id="dropdownContainer2">
									   
									</ul>
								</div>
								<akf>จากทั้งหมด {this.state.rightJobTotal} คน</akf>
								<br></br>
								
								<div class="obj-container">
									<div class="obs-box jbox obps">
										<div class="asb-container2">
											<div class="asb-pa">
												<hdf>{this.state.rightJobName}</hdf>
												<naf>{this.state.rightJobSkillName}</naf>
											</div>
											<muf class="asb-pb">{this.state.rightJobScore} คะแนน</muf>
										</div>
									</div>
									<div class="obs-box jbox obps">
										<div class="asb-container2">
											<amf>ในตำแหน่งงานเดียวกัน</amf>
											<amf>ทักษะนี้มีความนิยมคิดเป็น</amf>
											<hhf>{this.state.rightJobPercentage}%</hhf>
											<amf class="asb-pb">({this.state.rightJobCount} คน)</amf>
										</div>
									</div>
									<div class="obs-box jbox obps">
										<div class="asb-container2">
											<br></br>
											<amf>คุณมีคะแนนทักษะนี้{this.state.rightJobPLabel}คน</amf>
											<hhf>{this.state.rightJobPercentile}%</hhf>
											<amf class="asb-pb">ที่มีทักษะเดียวกัน</amf>
										</div>
									</div>
								</div>
								
								<br></br>
								<div class="sp-text">
									<muf class="sp-tc1">ค่าเฉลี่ย</muf>
									<muf class="sp-tc2">คือ {this.state.rightJobMean} คะแนน</muf>
								</div>
								<div class="sp-text">
									<muf class="sp-tc1 md-hid">ค่าฐานนิยม</muf>
									<muf class="sp-tc2 md-hid">คือ {this.state.rightJobMode}</muf>
									<muf class="sp-tc-g">จำนวนคน</muf>
								</div>
								
								<div class="an-chart-container" id ="lc-container">
									<canvas id="jobChart" width="100" height="1450"></canvas>
								</div>
							</div>
							
							<div class="obl-container3-none">
								<div class="dg-zone2">
									<hrf>วิเคราะห์คะแนนทักษะ</hrf>
								</div>
								<div class="add-none">
									<kf>เพิ่มทักษะที่ถนัดในตำแหน่งงานของคุณ</kf>
									<kf>เพื่อดูการวิเคราะห์ข้อมูลทางสถิติโดยเทียบกับผู้ใช้งานคนอื่นในระบบ</kf>
									<a class="btn btn-cta-primary-yellow round profile-button edit-job" id="new-port" target="_blank">เพิ่มทักษะ</a>
								</div>
							</div>
							
							<div class="obl-container-add">
								<div class="dg-zone2">
									<hhf>วิเคราะห์ทักษะเสริม</hhf>
								</div>
								<akf>จากทั้งหมด {this.state.topAddTotal} คน</akf>
								<br></br><br></br><br></br>
								<div class="dg-zone">
								<azf></azf>
									<button class="btn btn-cta-primary round grey dropdown-toggle tab-dropdown-pad-flex" type="button" id="dropdownMenuButton3" data-bs-toggle="dropdown" aria-expanded="false">งานที่ 1</button>
									<ul class="dropdown-menu" id="dropdownContainer3" aria-labelledby="dropdownMenuButton3">
										
									</ul>
								</div>
								<div class="ana-sub-box-container2">
									<div class="ana-sub-box-o mySkl1 obo">
										<div class="asb-container">
											<div class="asb-add">
												<atf>{this.state.rightBox1AddType}</atf>
												<naf>{this.state.rightBox1AddName}</naf>
												<naf></naf><naf></naf>
											</div>
											<div class="asb-right">
												<amf>ในตำแหน่งงานเดียวกัน</amf>
												<amf>ทักษะนี้มีความนิยมคิดเป็น</amf>
												<hhf>{this.state.rightBox1AddPercentage}%</hhf>
												<amf class="asb-pb">({this.state.rightBox1AddCount} คน)</amf>
											</div>
										</div>
									</div>
									<div class="ana-sub-box-o mySkl2 obo">
										<div class="asb-container">
											<div class="asb-add">
												<atf>{this.state.rightBox2AddType}</atf>
												<naf>{this.state.rightBox2AddName}</naf>
											</div>
											<div class="asb-right">
												<amf>ในตำแหน่งงานเดียวกัน</amf>
												<amf>ทักษะนี้มีความนิยมคิดเป็น</amf>
												<hhf>{this.state.rightBox2AddPercentage}%</hhf>
												<amf class="asb-pb">({this.state.rightBox2AddCount} คน)</amf>
											</div>
										</div>
									</div>
									<div class="ana-sub-box-o mySkl3 obo">
										<div class="asb-container">
											<div class="asb-add">
												<atf>{this.state.rightBox3AddType}</atf>
												<naf>{this.state.rightBox3AddName}</naf>
											</div>
											<div class="asb-right">
												<amf>ในตำแหน่งงานเดียวกัน</amf>
												<amf>ทักษะนี้มีความนิยมคิดเป็น</amf>
												<hhf>{this.state.rightBox3AddPercentage}%</hhf>
												<amf class="asb-pb">({this.state.rightBox3AddCount} คน)</amf>
											</div>
										</div>
									</div>
									<div class="ana-sub-box-o nsb newSkl1 obu">
										<div class="asb-container-c">
											<img src="assets/images/plus.png" width='36px' height="36px" alt=""/>
											<naf>เพิ่มทักษะ</naf>
										</div>
									</div>
									<div class="ana-sub-box-o nsb newSkl2 obu">
										<div class="asb-container-c">
											<img src="assets/images/plus.png" width='36px' height="36px" alt=""/>
											<naf>เพิ่มทักษะ</naf>
										</div>
									</div>
								</div>
							</div>
							
							
							<div class="obl-container-add-none">
								<div class="dg-zone2">
									<hrf>วิเคราะห์ทักษะเสริม</hrf>
								</div>
								<div class="add-none">
									<kf>เพิ่มทักษะเสริมที่ถนัด</kf>
									<kf>เพื่อดูการวิเคราะห์ข้อมูลทางสถิติโดยเทียบกับผู้ใช้งานคนอื่นในระบบ</kf>
									<a class="btn btn-cta-primary-yellow round profile-button edit-add" id="new-port" target="_blank">เพิ่มทักษะเสริม</a>
								</div>
							</div>
							
							<div class="obl-container-add-no-jobR">
								<hrf>วิเคราะห์ทักษะเสริม</hrf>
								<div class="add-none">
									<kf>เพิ่มตำแหน่งงานที่คุณสนใจ</kf>
									<kf>เพื่อดูการวิเคราะห์ข้อมูลทางสถิติโดยเทียบกับผู้ใช้งานคนอื่นในระบบ</kf>
									<a class="btn btn-cta-primary-yellow round profile-button add-job" id="new-port" target="_blank">เพิ่มตำแหน่งงาน</a>
								</div>
							</div>


						</div>
					</div>
				</div>
				
				
				<div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
				  <div class="modal-dialog modal-dialog-centered modal-ku">
					<div class="modal-content round-s">
					  <div class="modal-header no-bottom-line">
						<div id="pop-up-close" data-bs-dismiss="modal" aria-label="Close">
						<div class="transition-component" id="cross-fadegone">
							<img class="registab3_btnplus icon-plus-circleA bottom alt-fadegone4" type="button" src="assets/images/close_hover.png" />
							<img class="registab3_btnplus icon-plus-circleA top alt-fadegone4" type="button" id="add_aca" src="assets/images/close_normal.png" />
						</div>
						</div>
					  </div>
					  <div class="modal-body">
						<div class="">
							<div class="analytic-arrow-cls back" id="main-lv2-back"></div>
							<hhf class="analytic-md-header2">กราฟแสดงการกระจายตัวของคะแนนทักษะ<br/></hhf>
							<naf class="analytic-spc-s analytic-md-sub-header">จากคนทั้งหมด {this.state.popJobTotal} คน ที่สนใจตำแหน่งงานเดียวกัน</naf>
							<div class="ap-flex">
								<div class="apv-flex">
									<div class="analytic-right-chart-label2">
										<div class="ia-box">
											<div class="iaa">
												<div class="icc">
													<muf class="pkh">จำนวนคน</muf>
												</div>
											</div>
											<div class="ibb">
												<mzf id="arc-label">{this.state.popJobName}</mzf>
												<muf class="" id="arc-label">{this.state.popJobSkillName}</muf>
											</div>
										</div>
									</div>
								
									<div class="arc-z">
										<div class="sp-text2">
											<muf >ค่าเฉลี่ย</muf>
										</div>
										<div class="sp-text2 mdp-hid">
											<muf class="mdp-hid">ค่าฐานนิยม</muf>
										</div>
										<div class="sp-text2 youp-hid">
											<muf >คะแนนของคุณ</muf>
										</div>
									</div>
									<div class="arc-x">
										<div class="sp-text2">
											<muf >คือ {this.state.popJobMean} คะแนน</muf>
										</div>
										<div class="sp-text2 mdp-hid">
											<muf class="mdp-hid">คือ {this.state.popJobMode}</muf>
										</div>
										<div class="sp-text2 youp-hid">
											<muf >คือ {this.state.popJobScore} คะแนน</muf>
										</div>
										<div class="sp-text2 youp-hid">
											<muf >อยู่ที่ตำแหน่ง {this.state.popJobPercentile}%</muf>
										</div>
									</div>
									
								</div>
								<div class="apu-flex">
									<div class="an-chart-container2" id ="lc-container2">
										<canvas id="jobChart2"></canvas>
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
		);
	}
}

export default NewAnalytics;
