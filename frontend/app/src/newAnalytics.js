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
			
			topMainOvTotal: null,
			
			topMainOv1Job: null,
			topMainOv1Name: null,
			topMainOv1Percentage: null,
			topMainOv1Count: null,
			
			topMainOv2Job: null,
			topMainOv2Name: null,
			topMainOv2Percentage: null,
			topMainOv2Count: null,
			
			topMainOv2Job: null,
			topMainOv2Name: null,
			topMainOv2Percentage: null,
			topMainOv2Count: null,
			
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
		}
	 }
	
	componentDidMount() {
		window.addEventListener('load', this.handleLoad);
		console.log("YEAHXXX!");
		
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
		
		var rawMain = null;
		var rawAdditional = null;
		var mainFetched = false;
		var additionalFetched = false;
		var refThis = this;
		
		var fetcher = setInterval(Fetcher, 100);
		
		function Fetcher() {
			if(mainFetched && additionalFetched){ 
				clearInterval(fetcher);
				InitializeAnalytics();
			}
		}

		//fetch("http://localhost:2000/analytics/main/"+userID,{
		fetch("http://localhost:3000/temp_main",{
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
				mainFetched = true;
				
			}).catch((error) => {
				console.log(error);
			});
		
		fetch("http://localhost:3000/temp_add",{
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
				additionalFetched = true;
				
			}).catch((error) => {
				console.log(error);
			});
			
		function LargeMode(){
			$('.anl-tabs').addClass('anl-tabs-anim');
			$('.nana-flex').addClass('nana-flex-anim');
			$('.overall-left-box').addClass('overall-left-box-anim');
			$('.overall-right-box').addClass('overall-right-box-anim');
			$('.overall-upper-right-box').addClass('overall-upper-right-box-anim');
			$('.overall-lower-right-box').addClass('overall-lower-right-box-anim');
		}
		
		function NormalMode(){
			$('.anl-tabs').removeClass('anl-tabs-anim');
			$('.nana-flex').removeClass('nana-flex-anim');
			$('.overall-left-box').removeClass('overall-left-box-anim');
			$('.overall-right-box').removeClass('overall-right-box-anim');
			$('.overall-upper-right-box').removeClass('overall-upper-right-box-anim');
			$('.overall-lower-right-box').removeClass('overall-lower-right-box-anim');
		}
		
		function InitializeAnalytics(){
			refThis.setState({ render: true});
			SetupTabs();
			SetupOverview();
			
			$('#tab-1').on('click', function(){
				NormalMode();
				$('.tab-list-item-p').removeClass('tab-list-active');
				$('#tabT-1').addClass('tab-list-active');
			});
			
			$('#tab-2').on('click', function(){
				LargeMode();
				$('.tab-list-item-p').removeClass('tab-list-active');
				$('#tabT-2').addClass('tab-list-active');
			});
			
			$('#tab-3').on('click', function(){
				LargeMode();
				$('.tab-list-item-p').removeClass('tab-list-active');
				$('#tabT-3').addClass('tab-list-active');
			});
			
			$('#tab-4').on('click', function(){
				LargeMode();
				$('.tab-list-item-p').removeClass('tab-list-active');
				$('#tabT-4').addClass('tab-list-active');
			});
			
			$('#tab-5').on('click', function(){
				LargeMode();
				$('.tab-list-item-p').removeClass('tab-list-active');
				$('#tabT-5').addClass('tab-list-active');
			});
		}
		
		function SetupTabs(){
			if(rawMain.InterestedJobs.length == 3){
				$('#tabT-2').text(rawMain.InterestedJobs[0].THname);
				$('#tabT-3').text(rawMain.InterestedJobs[1].THname);
				$('#tabT-4').text(rawMain.InterestedJobs[2].THname);
				$('#tab-s1').hide();
				$('#tab-s2').hide();
				$('#tab-s3').hide();
			}else if(rawMain.InterestedJobs.length == 2){
				$('#tabT-2').text(rawMain.InterestedJobs[0].THname);
				$('#tabT-3').text(rawMain.InterestedJobs[1].THname);
				$('#tab-4').hide();
				$('#tab-s1').hide();
				$('#tab-s2').hide();
			}else if(rawMain.InterestedJobs.length == 1){
				$('#tabT-2').text(rawMain.InterestedJobs[0].THname);
				$('#tab-3').hide();
				$('#tab-4').hide();
				$('#tab-s1').hide();
			}else{
				$('#tabT-2').hide();
				$('#tab-3').hide();
				$('#tab-4').hide();
			}
		}
		
		function GetJobNameFromSkill(skill){
			var res = null;
			rawMain.InterestedJobs.every((jbs) => {
				rawMain[jbs.name].List.every((entry) => {
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
		}
		
		function FindUserPercentile(jsn,score){
			var lowCount = 0;
			var res = null;
			
			/*if(jsn.total == 1){
				res = 100;
				return res;
			}*/
			
			for (let i = 0; i < jsn.AllScore.length; i++) {
				if(jsn.AllScore[i] == score){ // user position
					res = lowCount/jsn.total;
					res *= 100;
				}
				lowCount += jsn.Count[i];
			}
			return res;
		}
		
		function SetupOverview(){
			var top3 = [{ percentage: -1 },{ percentage: -1 },{ percentage: -1 }];
			rawMain.InterestedJobs.forEach((jbs) => {
				rawMain[jbs.name].List.forEach((entry) => {
					if(entry.UserScore != null){
						//alert('job: '+entry.SkillName+' percentile: '+FindUserPercentile(entry,entry.UserScore));
						var newP = FindUserPercentile(entry,entry.UserScore);
					
						if(newP > top3[0].percentage){
							var temp = top3[0];
							var temp2 = top3[1];
							top3[0] = entry;
							top3[0].job = jbs.THname;
							top3[0].percentage = newP;
							top3[1] = temp;
							top3[2] = temp2;
						}else if(newP > top3[1].percentage){
							var temp = top3[1];
							top3[1] = entry;
							top3[1].job = jbs.THname;
							top3[1].percentage = newP;
							top3[2] = temp;
						}else if(newP > top3[2].percentage){
							top3[2] = entry;
							top3[2].job = jbs.THname;
							top3[2].percentage = newP;
						}
					}
				});
			});
			
			console.log(top3);
			
			refThis.setState({ 
				topMainOvTotal: rawMain.Overview.numberOfUser,
				topMainOv1Job: GetJobNameFromSkill(rawMain.Overview.List[0].SkillName),
				topMainOv1Name: rawMain.Overview.List[0].SkillName,
				topMainOv1Percentage: rawMain.Overview.List[0].percentage.toFixed(2),
				topMainOv1Count: rawMain.Overview.List[0].total,
				
				topMainOv2Job: GetJobNameFromSkill(rawMain.Overview.List[1].SkillName),
				topMainOv2Name: rawMain.Overview.List[1].SkillName,
				topMainOv2Percentage: rawMain.Overview.List[1].percentage.toFixed(2),
				topMainOv2Count: rawMain.Overview.List[1].total,
				
				topMainOv3Job: GetJobNameFromSkill(rawMain.Overview.List[2].SkillName),
				topMainOv3Name: rawMain.Overview.List[2].SkillName,
				topMainOv3Percentage: rawMain.Overview.List[2].percentage.toFixed(2),
				topMainOv3Count: rawMain.Overview.List[2].total,
				
				topMainJOv1Job: top3[0].job,
				topMainJOv1Name: top3[0].SkillName,
				topMainJOv1Score: top3[0].UserScore,
				topMainJOv1Percentage: top3[0].percentage.toFixed(2),
				topMainJOv1Count: top3[0].total,
				
				topMainJOv2Job: top3[1].job,
				topMainJOv2Name: top3[1].SkillName,
				topMainJOv2Score: top3[1].UserScore,
				topMainJOv2Percentage: top3[1].percentage.toFixed(2),
				topMainJOv2Count: top3[1].total,
				
				topMainJOv3Job: top3[2].job,
				topMainJOv3Name: top3[2].SkillName,
				topMainJOv3Score: top3[2].UserScore,
				topMainJOv3Percentage: top3[2].percentage.toFixed(2),
				topMainJOv3Count: top3[2].total,
			
				topAddOvTotal: rawAdditional.Overview.numberOfUsers,
				
				topAddOv1Name: rawAdditional.Overview.List[0].AdditionalSkill,
				topAddOv1Percentage: rawAdditional.Overview.List[0].percentage.toFixed(2),
				topAddOv1Count: rawAdditional.Overview.List[0].total,
				
				topAddOv2Name: rawAdditional.Overview.List[1].AdditionalSkill,
				topAddOv2Percentage: rawAdditional.Overview.List[1].percentage.toFixed(2),
				topAddOv2Count: rawAdditional.Overview.List[1].total,
				
				topAddOv3Name: rawAdditional.Overview.List[2].AdditionalSkill,
				topAddOv3Percentage: rawAdditional.Overview.List[2].percentage.toFixed(2),
				topAddOv3Count: rawAdditional.Overview.List[2].total
				
				
			});
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
							<hhf>Top 3 เทรนด์ทักษะเฉพาะทั้งหมด</hhf>
							<atf>จากตำแหน่งงานทั้งหมดที่คุณสนใจ</atf>
							<atf>คนที่เลือกตำแหน่งเดียวกับคุณส่วนใหญ่มีทักษะที่นิยม ดังนี้</atf>
							<div class="dg-zone">
								<azf>จากทั้งหมด {this.state.topMainOvTotal} คน</azf>
								<button class="btn btn-cta-primary round grey dropdown-toggle tab-dropdown-pad" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">งานที่ 1</button>
								<ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
								   <li><a class="dropdown-item" id="sort-time">งานที่ 1</a></li>
								   <li><a class="dropdown-item" id="sort-total">งานที่ 2</a></li>
								</ul>
							</div>
							<br></br>
							<div class="ana-sub-box-container">
								<div class="ana-sub-box-p">
									<div class="asb-container">
										<div class="asb-left">
											<hbf>#1</hbf>
											<atf>{this.state.topMainOv1Job}</atf>
											<af>{this.state.topMainOv1Name}</af>
										</div>
										<div class="asb-right">
											<muf>คิดเป็นร้อยละ</muf>
											<hhf>{this.state.topMainOv1Percentage}</hhf>
											<af>({this.state.topMainOv1Count} คน)</af>
										</div>
									</div>
								</div>
								<div class="ana-sub-box-p">
									<div class="asb-container">
										<div class="asb-left">
											<hbf>#2</hbf>
											<atf>{this.state.topMainOv2Job}</atf>
											<af>{this.state.topMainOv2Name}</af>
										</div>
										<div class="asb-right">
											<muf>คิดเป็นร้อยละ</muf>
											<hhf>{this.state.topMainOv2Percentage}</hhf>
											<af>({this.state.topMainOv2Count} คน)</af>
										</div>
									</div>
								</div>
								<div class="ana-sub-box-p">
									<div class="asb-container">
										<div class="asb-left">
											<hbf>#3</hbf>
											<atf>{this.state.topMainOv3Job}</atf>
											<af>{this.state.topMainOv3Name}</af>
										</div>
										<div class="asb-right">
											<muf>คิดเป็นร้อยละ</muf>
											<hhf>{this.state.topMainOv3Percentage}</hhf>
											<af>({this.state.topMainOv3Count} คน)</af>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="overall-right-box">
						<div class="overall-upper-right-box">
							<div class="obl-container2">
								<hhf>Top 3 เทรนด์ทักษะเฉพาะทั้งหมด</hhf>
								<div class="obs-container">
									<div class="obs-box obg">
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
									<div class="obs-box obg">
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
									<div class="obs-box obg">
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
					</div>
				</div>
			</div>
		);
	}
}

export default NewAnalytics;
