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
			
			topMainJOv2Job: null,
			topMainJOv2Name: null,
			topMainJOv2Score: null,
			topMainJOv2Percentage: null,
			topMainJOv2Count: null,
			
			topMainJOv3Job: null,
			topMainJOv3Name: null,
			topMainJOv3Score: null,
			topMainJOv3Percentage: null,
			topMainJOv3Count: null,
			
			rightJobTotal: null,
			rightJobName: null,
			rightJobSkillName: null,
			rightJobScore: null,
			rightJobPercentage: null,
			rightJobCount: null,
			rightJobPercentile: null,
			rightJobMean: null,
			rightJobMode: null,
			
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
		flag.src = 'assets/images/flag-ch.png'; 
		flagRv.src = 'assets/images/flag-ch-rv.png'; 
		you.src = 'assets/images/you-ch.png'; 
		avg.src = 'assets/images/avg-ch.png'; 
		dummy.src = 'assets/images/dummy.png'; 
		avgYou.src = 'assets/images/avg-you.png'; 
		
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
		var disGraphMax = 1;
		
		var lineChartConfig = {
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
									//borderColor: '#F4F4F4',
									display: false
								},
								ticks: {
									// Include a dollar sign in the ticks
									//display:false
									 callback: function(val, index) {
										// Hide the label of every 2nd dataset
										//return index % 2 === 0 ? this.getLabelForValue(val) : '';
										return rawScore.includes(val) && val > 0 ? this.getLabelForValue(parseInt(val))+' คน' : '';
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
						tooltip: {
							 enabled: false
						}

						//tooltip: tooltip_config
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
		
		fetch("http://localhost:3000/temp_cache",{
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
		
		function InitializeAnalytics(){
			refThis.setState({ render: true});
			SetupTabs();
			SetupOverview();
			
			$('#tab-1').on('click', function(){
				NormalMode();
				SetupOverview();
				$('.tab-list-item-p').removeClass('tab-list-active');
				$('#tabT-1').addClass('tab-list-active');
			});
			
			$('#tab-2').on('click', function(){
				LargeMode();
				SetupJob(1);
				$('.tab-list-item-p').removeClass('tab-list-active');
				$('#tabT-2').addClass('tab-list-active');
			});
			
			$('#tab-3').on('click', function(){
				LargeMode();
				SetupJob(2);
				$('.tab-list-item-p').removeClass('tab-list-active');
				$('#tabT-3').addClass('tab-list-active');
			});
			
			$('#tab-4').on('click', function(){
				LargeMode();
				SetupJob(3);
				$('.tab-list-item-p').removeClass('tab-list-active');
				$('#tabT-4').addClass('tab-list-active');
			});
			
			$('#tab-5').on('click', function(){
				LargeModeAdd();
				SetupAdd();
				$('.tab-list-item-p').removeClass('tab-list-active');
				$('#tabT-5').addClass('tab-list-active');
			});
			
			$('#p1').on('click', function(){
				SetupPopup('p1');
			});
			
			$('#p2').on('click', function(){
				SetupPopup('p2');
			});
			
			$('#p3').on('click', function(){
				SetupPopup('p3');
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
		}
		
		function SetupOverview(){
			$('.right-job-box').hide();
			$('.overall-lower-right-box').show();
			$('.overall-upper-right-box').show();
			
			$('#dropdownMenuButton1').hide();
			
			$('.ana-sub-box-p').removeClass('obc');
			$('.ana-sub-box-p').addClass('obp');
			
			refThis.setState({ 
				leftBoxHeader: 'Top 3 เทรนด์ทักษะเฉพาะทั้งหมด',
				leftBoxDesc1: 'จากตำแหน่งงานทั้งหมดที่คุณสนใจ',
				leftBoxDesc2: 'คนที่เลือกตำแหน่งเดียวกับคุณส่วนใหญ่มีทักษะที่นิยม ดังนี้',
				leftBoxOvTotal: rawData.Main.Overview.numberOfUser,
				leftBox1Job: rawData.Main.Overview.List[0].Job_Name,
				leftBox1Name: rawData.Main.Overview.List[0].SkillName,
				leftBox1Percentage: rawData.Main.Overview.List[0].percentage.toFixed(2),
				leftBox1Count: rawData.Main.Overview.List[0].total,
				
				leftBox2Job: rawData.Main.Overview.List[1].Job_Name,
				leftBox2Name: rawData.Main.Overview.List[1].SkillName,
				leftBox2Percentage: rawData.Main.Overview.List[1].percentage.toFixed(2),
				leftBox2Count: rawData.Main.Overview.List[1].total,
				
				leftBox3Job: rawData.Main.Overview.List[2].Job_Name,
				leftBox3Name: rawData.Main.Overview.List[2].SkillName,
				leftBox3Percentage: rawData.Main.Overview.List[2].percentage.toFixed(2),
				leftBox3Count: rawData.Main.Overview.List[2].total,
		
				topMainJOv1Job: rawData.Main.yourBest3[0].Job_Name,
				topMainJOv1Name: rawData.Main.yourBest3[0].SkillName,
				topMainJOv1Score: rawData.Main.yourBest3[0].UserScore,
				topMainJOv1Percentage: rawData.Main.yourBest3[0].percentile,
				topMainJOv1Count: rawData.Main.yourBest3[0].total,
				
				topMainJOv2Job: rawData.Main.yourBest3[1].Job_Name,
				topMainJOv2Name: rawData.Main.yourBest3[1].SkillName,
				topMainJOv2Score: rawData.Main.yourBest3[1].UserScore,
				topMainJOv2Percentage: rawData.Main.yourBest3[1].percentile,
				topMainJOv2Count: rawData.Main.yourBest3[1].total,
				
				topMainJOv3Job: rawData.Main.yourBest3[2].Job_Name,
				topMainJOv3Name: rawData.Main.yourBest3[2].SkillName,
				topMainJOv3Score: rawData.Main.yourBest3[2].UserScore,
				topMainJOv3Percentage: rawData.Main.yourBest3[2].percentile,
				topMainJOv3Count: rawData.Main.yourBest3[2].total,
			
				topAddOvTotal: rawData.Additional.Overview.numberOfUsers,
				
				topAddOv1Name: rawData.Additional.Overview.List[0].Type,
				topAddOv1Percentage: rawData.Additional.Overview.List[0].percentage.toFixed(2),
				topAddOv1Count: rawData.Additional.Overview.List[0].total,
				
				topAddOv2Name: rawData.Additional.Overview.List[1].Type,
				topAddOv2Percentage: rawData.Additional.Overview.List[1].percentage.toFixed(2),
				topAddOv2Count: rawData.Additional.Overview.List[1].total,
				
				topAddOv3Name: rawData.Additional.Overview.List[2].Type,
				topAddOv3Percentage: rawData.Additional.Overview.List[2].percentage.toFixed(2),
				topAddOv3Count: rawData.Additional.Overview.List[2].total
				
				
			});
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
			
			if(rawData.Additional[keyName].List.length == 3){
				$('.newSkl1').hide();
				$('.newSkl2').hide();
			}else if(rawData.Additional[keyName].List.length == 2){
				$('.newSkl2').hide();
			}else if(rawData.Additional[keyName].List.length == 1){
				
			}else{
				alert('User has no skill!');
			}
			
			/*
			refThis.setState({ 
				//rightBox1AddType: 
				//rightBox1AddName
				//rightBox1AddPercentage
				//rightBox1AddCount
			});*/
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
				
				leftBox1Job: rawData.Additional[keyName].List[0].Type,
				leftBox1Name: rawData.Additional[keyName].List[0].AdditionalSkill,
				leftBox1Percentage: rawData.Additional[keyName].List[0].percentage.toFixed(2),
				leftBox1Count: rawData.Additional[keyName].List[0].total,
				
				leftBox2Job: rawData.Additional[keyName].List[1].Type,
				leftBox2Name: rawData.Additional[keyName].List[1].AdditionalSkill,
				leftBox2Percentage: rawData.Additional[keyName].List[1].percentage.toFixed(2),
				leftBox2Count: rawData.Additional[keyName].List[1].total,
				
				leftBox3Job: rawData.Additional[keyName].List[2].Type,
				leftBox3Name: rawData.Additional[keyName].List[2].AdditionalSkill,
				leftBox3Percentage: rawData.Additional[keyName].List[2].percentage.toFixed(2),
				leftBox3Count: rawData.Additional[keyName].List[2].total,
			});
		}
		
		function SetupAdd(){
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
			
			$('.obl-container3').hide();
			$('.obl-container-add').show();

			$('.ana-sub-box-p').removeClass('obp');
			$('.ana-sub-box-p').addClass('obc');
		}
		
		function UpdateFocusJob(id){
			var md = null;
			if(jobKeyVal[focusJob].Mode.length == 2){
				$('.md-hid').show();
				md = jobKeyVal[focusJob].Mode[0].toFixed(2)+','+ jobKeyVal[focusJob].Mode[1].toFixed(2)+'คะแนน';
			}else if(jobKeyVal[focusJob].Mode.length == 1){
				$('.md-hid').show();
				md = jobKeyVal[focusJob].Mode[0].toFixed(2)+' คะแนน';
			}else{
				$('.md-hid').hide();
			}
			refThis.setState({ 
				rightJobName: THname,
				rightJobSkillName: focusJob,
				rightJobScore: jobKeyVal[focusJob].UserScore,
				rightJobPercentage: jobKeyVal[focusJob].percentage.toFixed(2),
				rightJobCount: jobKeyVal[focusJob].total,
				rightJobPercentile: jobKeyVal[focusJob].percentile.toFixed(2),
				rightJobMean: jobKeyVal[focusJob].Mean.toFixed(2),
				rightJobMode: md
			});
			
			var ccr = null;
			if(id == 's1') {
				ccr = 'rgb(212,177,205)';
				$('.jbox').addClass('obp');
				$('.jbox').removeClass('obg');
				$('.jbox').removeClass('oby');
			}else if(id == 's2') {
				ccr = 'rgb(195,219,197)';
				$('.jbox').removeClass('obp');
				$('.jbox').addClass('obg');
				$('.jbox').removeClass('oby');
			}else {
				ccr = 'rgb(255,230,167)';
				$('.jbox').removeClass('obp');
				$('.jbox').removeClass('obg');
				$('.jbox').addClass('oby');
			}
			lineChartConfig.data.datasets[0].borderColor = ccr;
			lineChartConfig.data.datasets[0].fill.above = ccr;
			lineChartConfig.data.datasets[0].fill.below = ccr;
			GenerateDistributionChartData(jobKeyVal[focusJob]);
			lineChartConfig.data.labels = vLabels;
			lineChartConfig.data.datasets[0].data = rawScore;
			lineChartConfig.data.percentages = ['xx.xx%'];
			lineChartConfig.data.datasets[0].pointStyle = vPoints;
			lineChartConfig.options.scales.y.max = disGraphMax;
			
			ctx = document.getElementById("jobChart").getContext("2d");
			if(lineChart != null){
				lineChart.update();
			}else{
				lineChart = new Chart(ctx, lineChartConfig);
			}
		}
		
		function SetupPopup(id){
			var dataSet = null; var total = null; var ccr = null; var jKey = null; var sKey = null;
			if(id == 'p1'){
				ccr = 'rgb(212,177,205)';
				$('.icc').css('background','rgb(212,177,205)');
				total = rawData.Main.Overview.numberOfUser;
				dataSet = rawData.Main.Overview.List[0];
			}else if(id == 'p2'){
				ccr = 'rgb(212,177,205)';
				$('.icc').css('background','rgb(212,177,205)');
				total = rawData.Main.Overview.numberOfUser;
				dataSet = rawData.Main.Overview.List[1];
			}else if(id == 'p3'){
				ccr = 'rgb(212,177,205)';
				$('.icc').css('background','rgb(212,177,205)');
				total = rawData.Main.Overview.numberOfUser;
				dataSet = rawData.Main.Overview.List[2];
			}else if(id == 'g1'){
				ccr = 'rgb(195,219,197)';
				$('.icc').css('background','rgb(195,219,197');
				jKey = rawData.Main.yourBest3[0].Job_Name;
				sKey = rawData.Main.yourBest3[0].SkillName;
				total = rawData.Main[jKey].numberOfUsers;
				rawData.Main[jKey].List.every((entry) => {
					if(entry.SkillName == sKey){
						dataSet = entry;
						return false;
					}
					return true;
				});
			}else if(id == 'g2'){
				ccr = 'rgb(195,219,197)';
				$('.icc').css('background','rgb(195,219,197');
				jKey = rawData.Main.yourBest3[1].Job_Name;
				sKey = rawData.Main.yourBest3[1].SkillName;
				total = rawData.Main[jKey].numberOfUsers;
				rawData.Main[jKey].List.every((entry) => {
					if(entry.SkillName == sKey){
						dataSet = entry;
						return false;
					}
					return true;
				});
			}else if(id == 'g3'){
				ccr = 'rgb(195,219,197)';
				$('.icc').css('background','rgb(195,219,197');
				jKey = rawData.Main.yourBest3[2].Job_Name;
				sKey = rawData.Main.yourBest3[2].SkillName;
				total = rawData.Main[jKey].numberOfUsers;
				rawData.Main[jKey].List.every((entry) => {
					if(entry.SkillName == sKey){
						dataSet = entry;
						return false;
					}
					return true;
				});
			}
			
			var md = null;
			if(dataSet.Mode.length == 2){
				$('.md-hid').show();
				md = dataSet.Mode[0].toFixed(2)+','+ dataSet.Mode[1].toFixed(2)+'คะแนน';
			}else if(dataSet.Mode.length == 1){
				$('.md-hid').show();
				md = dataSet.Mode[0].toFixed(2)+' คะแนน';
			}else{
				$('.md-hid').hide();
			}
			refThis.setState({ 
				rightJobName: dataSet.Job_Name,
				rightJobSkillName: dataSet.SkillName,
				rightJobScore: dataSet.UserScore,
				//rightJobPercentage: dataSet.percentage.toFixed(2),
				//rightJobCount: dataSet.total,
				popupDescPercentage:  dataSet.percentage.toFixed(2),
				popupDescCount: dataSet.total,
				rightJobPercentile: dataSet.percentile.toFixed(2),
				rightJobMean: dataSet.Mean.toFixed(2),
				rightJobMode: md
			});
			
			lineChartConfig.data.datasets[0].borderColor = ccr;
			lineChartConfig.data.datasets[0].fill.above = ccr;
			lineChartConfig.data.datasets[0].fill.below = ccr;
			GenerateDistributionChartData(dataSet);
			lineChartConfig.data.labels = vLabels;
			lineChartConfig.data.datasets[0].data = rawScore;
			lineChartConfig.data.percentages = ['xx.xx%'];
			lineChartConfig.data.datasets[0].pointStyle = vPoints;
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
						vLabels.push(['พอได้','เล็กน้อย']);
					}else if(scores[i] == 5){
						vLabels.push('พอใช้');
					}else if(scores[i] == 7.5){
						vLabels.push('ดี');
					}else if(scores[i] == 10){
						vLabels.push('ยอดเยี่ยม');
					}else{
						if(scores[i] == youScr || scores[i] == mean || scores[i] == mode1 || scores[i] == mode2){ // show important score value
							if(scores[i] == youScr)
								vLabels.push([scores[i]+' คะแนน','('+entry.percentile.toFixed(2)+'%)']);
							else
								vLabels.push(scores[i]+' คะแนน');
						}else{
							vLabels.push('');
						}
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
					vLabels.unshift(['พอได้','เล็กน้อย']);
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
				if(rawData.Main.mySkills.includes(entry.SkillName)){
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
				
				leftBox1Job: THname,
				leftBox1Name: rawData.Main[THname].List[0].SkillName,
				leftBox1Percentage: rawData.Main[THname].List[0].percentage.toFixed(2),
				leftBox1Count: rawData.Main[THname].List[0].total,
				
				leftBox2Job: THname,
				leftBox2Name: rawData.Main[THname].List[1].SkillName,
				leftBox2Percentage: rawData.Main[THname].List[1].percentage.toFixed(2),
				leftBox2Count: rawData.Main[THname].List[1].total,
				
				leftBox3Job: THname,
				leftBox3Name: rawData.Main[THname].List[2].SkillName,
				leftBox3Percentage: rawData.Main[THname].List[2].percentage.toFixed(2),
				leftBox3Count: rawData.Main[THname].List[2].total,
				
				rightJobTotal: rawData.Main[THname].numberOfUsers
			});
			
			UpdateFocusJob('s1');
			
			$('.overall-lower-right-box').hide();
			$('.overall-upper-right-box').hide();
			$('.right-job-box').show();
			
			$('.obl-container3').show();
			$('.obl-container-add').hide();

			$('.ana-sub-box-p').removeClass('obp');
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
				$('#tabT-2').hide();
				$('#tab-3').hide();
				$('#tab-4').hide();
			}
		}
		
		/*function GetJobNameFromSkill(skill){
			var res = null;
			rawData.Main.InterestedJobs.every((jbs) => {
				rawData.Main[jbs.name].List.every((entry) => {
					if(entry.SkillName == skill){
						res = jbs.THname;
						return false;
					}
					return true;
				});
				if(res != null) 
					return false;
				return true;
			});
			return res;
		}*/
		
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
								<div class="topDataBk-content">
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
						<a class="btn btn-cta-primary-yellow round profile-button" id="new-port" target="_blank">แก้ไขทักษะตนเอง</a>
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
								<button class="btn btn-cta-primary round grey dropdown-toggle tab-dropdown-pad" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">งานที่ 1</button>
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
											<af>{this.state.leftBox1Name}</af>
										</div>
										<div class="asb-right">
											<muf>คิดเป็นร้อยละ</muf>
											<hhf>{this.state.leftBox1Percentage}</hhf>
											<af>({this.state.leftBox1Count} คน)</af>
										</div>
									</div>
								</div>
								<div class="ana-sub-box-p obp" id="p2" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
									<div class="asb-container">
										<div class="asb-left">
											<hbf>#2</hbf>
											<atf>{this.state.leftBox2Job}</atf>
											<af>{this.state.leftBox2Name}</af>
										</div>
										<div class="asb-right">
											<muf>คิดเป็นร้อยละ</muf>
											<hhf>{this.state.leftBox2Percentage}</hhf>
											<af>({this.state.leftBox2Count} คน)</af>
										</div>
									</div>
								</div>
								<div class="ana-sub-box-p obp" id="p3" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
									<div class="asb-container">
										<div class="asb-left">
											<hbf>#3</hbf>
											<atf>{this.state.leftBox3Job}</atf>
											<af>{this.state.leftBox3Name}</af>
										</div>
										<div class="asb-right">
											<muf>คิดเป็นร้อยละ</muf>
											<hhf>{this.state.leftBox3Percentage}</hhf>
											<af>({this.state.leftBox3Count} คน)</af>
										</div>
									</div>
								</div>
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
													<af>{this.state.topMainJOv1Name}</af>
												</div>
											</div>
											<div class="asb-lower">
												<muf>คะแนนของคุณ {this.state.topMainJOv1Score} คะแนน</muf>
												<div class="asb-l1">
													<af>สูงกว่า</af>
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
													<af>{this.state.topMainJOv2Name}</af>
												</div>
											</div>
											<div class="asb-lower">
												<muf>คะแนนของคุณ {this.state.topMainJOv2Score} คะแนน</muf>
												<div class="asb-l1">
													<af>สูงกว่า</af>
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
													<af>{this.state.topMainJOv3Name}</af>
												</div>
											</div>
											<div class="asb-lower">
												<muf>คะแนนของคุณ {this.state.topMainJOv3Score} คะแนน</muf>
												<div class="asb-l1">
													<af>สูงกว่า</af>
													<hbf class="spc1">{this.state.topMainJOv3Percentage}%</hbf>
												</div>
												<muf>ของคนทั้งหมด {this.state.topMainJOv3Count} คนที่เลือกทักษะนี้</muf>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div class="overall-lower-right-box">
							<div class="obl-container2">
								<hhf>Top 3 เทรนด์ทักษะเสริมทั้งหมด</hhf>
								<af>จากผู้ใช้ทุกคนในระบบ คนส่วนใหญ่มีทักษะเสริมที่นิยม ดังนี้</af>
								<akf>จากทั้งหมด {this.state.topAddOvTotal} คน</akf>
								<div class="obs-container">
									<div class="obs-box obo">
										<div class="asb-container2">
											<div class="asb-la">
												<hdf>#1</hdf>
												<af>{this.state.topAddOv1Name}</af>
											</div>
											<muf class="asb-lb">คิดเป็นร้อยละ</muf>
											<div class="asb-lc">
												<hbf>{this.state.topAddOv1Percentage}</hbf>
												<af class="spc1">({this.state.topAddOv1Count} คน)</af>
											</div>
										</div>
									</div>
									<div class="obs-box obo">
										<div class="asb-container2">
											<div class="asb-la">
												<hdf>#2</hdf>
												<af>{this.state.topAddOv2Name}</af>
											</div>
											<muf class="asb-lb">คิดเป็นร้อยละ</muf>
											<div class="asb-lc">
												<hbf>{this.state.topAddOv2Percentage}</hbf>
												<af class="spc1">({this.state.topAddOv2Count} คน)</af>
											</div>
										</div>
									</div>
									<div class="obs-box obo">
										<div class="asb-container2">
											<div class="asb-la">
												<hdf>#3</hdf>
												<af>{this.state.topAddOv3Name}</af>
											</div>
											<muf class="asb-lb">คิดเป็นร้อยละ</muf>
											<div class="asb-lc">
												<hbf>{this.state.topAddOv3Percentage}</hbf>
												<af class="spc1">({this.state.topAddOv3Count} คน)</af>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						
						<div class="right-job-box">
							<div class="obl-container3">
								<div class="dg-zone2">
									<hhf>วิเคราะห์คะแนนทักษะ</hhf>
									<button class="btn btn-cta-primary round grey dropdown-toggle tab-dropdown-pad" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false">งานที่ 1</button>
									<ul class="dropdown-menu" aria-labelledby="dropdownMenuButton2" id="dropdownContainer2">
									   
									</ul>
								</div>
								<akf>จากทั้งหมด {this.state.rightJobTotal} คน</akf>
								<br></br>
								
								<div class="obj-container">
									<div class="obs-box jbox obp">
										<div class="asb-container2">
											<div class="asb-pa">
												<hdf>{this.state.rightJobName}</hdf>
												<af>{this.state.rightJobSkillName}</af>
											</div>
											<muf class="asb-pb">{this.state.rightJobScore} คะแนน</muf>
										</div>
									</div>
									<div class="obs-box jbox obp">
										<div class="asb-container2">
											<amf>ในตำแหน่งงานเดียวกัน</amf>
											<amf>ทักษะนี้มีความนิยมคิดเป็น</amf>
											<hhf>{this.state.rightJobPercentage}%</hhf>
											<amf class="asb-pb">({this.state.rightJobCount} คน)</amf>
										</div>
									</div>
									<div class="obs-box jbox obp">
										<div class="asb-container2">
											<br></br>
											<amf>คุณมีคะแนนทักษะนี้สูงกว่าคน</amf>
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
							
							
							<div class="obl-container-add">
								<div class="dg-zone2">
									<hhf>วิเคราะห์ทักษะเสริม</hhf>
								</div>
								<akf>จากทั้งหมด {this.state.topAddOvTotal} คน</akf>
								<br></br><br></br><br></br>
								<div class="dg-zone">
								<azf></azf>
									<button class="btn btn-cta-primary round grey dropdown-toggle tab-dropdown-pad" type="button" id="dropdownMenuButton3" data-bs-toggle="dropdown" aria-expanded="false">งานที่ 1</button>
									<ul class="dropdown-menu" id="dropdownContainer3" aria-labelledby="dropdownMenuButton3">
										
									</ul>
								</div>
								<div class="ana-sub-box-container2">
									<div class="ana-sub-box-o obo">
										<div class="asb-container">
											<div class="asb-left">
												<atf>{this.state.rightBox1AddType}</atf>
												<af>{this.state.rightBox1AddName}</af>
											</div>
											<div class="asb-right">
												<amf>ในตำแหน่งงานเดียวกัน</amf>
												<amf>ทักษะนี้มีความนิยมคิดเป็น</amf>
												<hhf>{this.state.rightBox1AddPercentage}%</hhf>
												<amf class="asb-pb">({this.state.rightBox1AddCount} คน)</amf>
											</div>
										</div>
									</div>
									<div class="ana-sub-box-o obo">
										<div class="asb-container">
											<div class="asb-left">
												<atf>{this.state.rightBox2AddType}</atf>
												<af>{this.state.rightBox2AddName}</af>
											</div>
											<div class="asb-right">
												<amf>ในตำแหน่งงานเดียวกัน</amf>
												<amf>ทักษะนี้มีความนิยมคิดเป็น</amf>
												<hhf>{this.state.rightBox2AddPercentage}%</hhf>
												<amf class="asb-pb">({this.state.rightBox2AddCount} คน)</amf>
											</div>
										</div>
									</div>
									<div class="ana-sub-box-o obo">
										<div class="asb-container">
											<div class="asb-left">
												<atf>{this.state.rightBox3AddType}</atf>
												<af>{this.state.rightBox3AddName}</af>
											</div>
											<div class="asb-right">
												<amf>ในตำแหน่งงานเดียวกัน</amf>
												<amf>ทักษะนี้มีความนิยมคิดเป็น</amf>
												<hhf>{this.state.rightBox3AddPercentage}%</hhf>
												<amf class="asb-pb">({this.state.rightBox3AddCount} คน)</amf>
											</div>
										</div>
									</div>
									<div class="ana-sub-box-o newSkl1 obu">
										<div class="asb-container-c">
											<amf>เพิ่มข้อมูล</amf>
										</div>
									</div>
									<div class="ana-sub-box-o newSkl2 obu">
										<div class="asb-container-c">
											<amf>เพิ่มข้อมูล</amf>
										</div>
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
							<af class="analytic-spc-s analytic-md-sub-header">จากคนทั้งหมด {this.state.rightJobTotal} คน ที่สนใจตำแหน่งงานเดียวกัน</af>
							<div class="ap-flex">
								<div class="apv-flex">
									<div class="analytic-right-chart-label2">
										<div class="ia-box">
											<div class="iaa">
												<div class="icc">
													
												</div>
											</div>
											<div class="ibb">
												<muf id="arc-label">{this.state.rightJobName}</muf>
												<muf class="" id="arc-label">{this.state.rightJobSkillName}</muf>
											</div>
										</div>
									</div>
								
									<div class="arc-z">
										<div class="sp-text2">
											<muf >ค่าเฉลี่ย</muf>
										</div>
										<div class="sp-text2 md-hid">
											<muf class="md-hid">ค่าฐานนิยม</muf>
										</div>
										<div class="sp-text2">
											<muf >คะแนนของคุณ</muf>
										</div>
									</div>
									<div class="arc-x">
										<div class="sp-text2">
											<muf >คือ {this.state.rightJobMean} คะแนน</muf>
										</div>
										<div class="sp-text2 md-hid">
											<muf class="md-hid">คือ {this.state.rightJobMode}</muf>
										</div>
										<div class="sp-text2">
											<muf >คือ {this.state.rightJobScore} คะแนน</muf>
										</div>
										<div class="sp-text2">
											<muf >อยู่ที่ตำแหน่ง {this.state.rightJobPercentile}%</muf>
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