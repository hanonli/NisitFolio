import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Navbarlogo from './Components/navbar';
import InformationHeader from './Components/informationHeader';
import reportWebVitals from './reportWebVitals';
import { Link } from "react-router-dom";
import Myresumedittemplate from "./Components/myresumeEditTemplate";
import Chooseresume1 from "./Components/chooseresume1";
import Editresume2 from "./Components/editresume2";
import Editresume3 from "./Components/editresume3";
import Chooseresume4 from "./Components/chooseresume4";
import Chooseresume5 from "./Components/chooseresume5";
import $ from 'jquery';
import cookie from 'react-cookies';
import LoadingS from './Components/loadingS';
import async from 'react-select/async';

var certdata = [], workdata = [], list_of_aca = [], list_of_high = [], sideskilldata = [];
var select_color_template = "#FFCE55";

class Editresume extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			data: [],
			render: true,
			Color_Resume: '',
			firstchoosecolor: false,
			resumeId: '',
		}
	}
	callbackFunction = (childData) => {
		this.setState({ Color_Resume: childData })
	}

	/*Zone to Submit EditResume */
	handleSubmitEdit = e => {
		alert(this.state.Color_Resume);
		var FormEdit = {
			"SoftSkillID": [],
			"CertID": certdata,
			"EducationID": [],
			"WorkID": workdata,
			"PortID": [],
			"Color": this.state.Color_Resume
		}
		console.log(FormEdit);
		alert('Confirm Edit Resume');
		//Editresume(FormEdit);
		//window.location = ("myresume");
	};

	componentDidMount() {
		var editresumeState = this;
		var list_of_high = [], list_of_aca = [];

		function get_high_id(list_of_high, x) {
			//var x = 1;
			list_of_high.forEach(ele => {
				ele["high_pos"] = x;
				//console.log("x:", x);
				x++;
			});
			return list_of_high;
		}

		function get_aca_id(list_of_aca, x) {
			//var x = 1;
			list_of_aca.forEach(ele => {
				ele["aca_pos"] = x;
				//console.log("x:", x);
				x++;
			});
			return list_of_aca;
		}
		function EditResume(pack) {
			fetch("http://localhost:2000/myresume/" + editresumeState.state.resumeId,
				{
					method: "PATCH",
					headers: {
						"Content-Type": "application/json",
						"Accept": "application/json"
					},
					body: JSON.stringify(pack)
				}
			)
				.then(function (response) {
					//window.location.pathname = '/emailverify'
					//alert(response.message);
					if (!response.ok) {
						throw Error(response.statusText);
					}
					else {
						console.log("ok");
						window.location.href = "http://localhost:3000/myresume/";
					}
					return response;
				}).catch(function (error) {
					console.log(error);
				});
		}

		/* Zone to get resume datas */
		function GetResumeData() {
			return new Promise((resolve,reject)=>{
			var token = cookie.load('login-token')
			console.log('Your Token is: ' + token);
			fetch("http://localhost:2000/myresume/myresume/foredit", {
				method: "GET",
				headers: {
					'Authorization': 'Bearer ' + token,
					"Access-Control-Allow-Origin": "*",
					"Access-Control-Allow-Methods": "*",
					"Access-Control-Allow-Credentials": true,
					"Content-Type": "application/json"
				},
			})
				.then(response => response.json())
				.then((datas) => {
					console.log('You Fetch Success!');
					console.log(datas);
					editresumeState.setState({
						data: datas,
					})
					console.log('editresumeState.state.data :' + editresumeState.state.data);
					/*Zone to use datas*/
					//console.log(editresumeState.state.data.Degree);
					//Color_Resume = editresumeState.state.data.Color_ResumeId ? editresumeState.state.data.Color_ResumeId : "";
					if (editresumeState.state.data.Color_ResumeId === undefined) {
						console.log("Color_ResumeId:", editresumeState.state.data.Color_ResumeId);
						editresumeState.setState({ firstchoosecolor: true });
					}
					else {
						editresumeState.setState({ Color_Resume: editresumeState.state.data.Color_ResumeId });
					}
					editresumeState.state.data.Job_JobName.forEach((ele, index) => {
						if (ele == cookie.load('Job_EditName')) {
							console.log('This Resume is : '+editresumeState.state.data.Resume_id[index]);
							return editresumeState.setState({ resumeId: editresumeState.state.data.Resume_id[index] });
							//alert(editresumeState.state.resumeId);
						}
						/*else{
							alert(index);
						}*/
					});
					editresumeState.state.data.Degree.forEach((element, index) => {
	
						if (element == 'มัธยมศึกษาตอนปลาย' || element == 'ปวช.') {
							list_of_high.push({
								id: editresumeState.state.data.EducationHistory_id[index],
								high_pos: 0,
								high_name: editresumeState.state.data.Academy[index],
								high_faculty: 'none',
								high_degree: editresumeState.state.data.Degree[index],
								high_grade: editresumeState.state.data.Grade[index],
								high_field: editresumeState.state.data.Field_of_study[index],
								high_year: editresumeState.state.data.Education_End_Year[index],
							});
							get_high_id(list_of_high, 1);
							console.log(list_of_high);
						}
						else {
							list_of_aca.push({
								id: editresumeState.state.data.EducationHistory_id[index],
								aca_pos: 0,
								aca_name: editresumeState.state.data.Academy[index],
								aca_faculty: editresumeState.state.data.Facalty[index],
								aca_degree: editresumeState.state.data.Degree[index],
								aca_grade: editresumeState.state.data.Grade[index],
								aca_field: editresumeState.state.data.Field_of_study[index],
								aca_year: editresumeState.state.data.Education_End_Year[index],
							});
							get_aca_id(list_of_aca, 1);
							console.log(list_of_aca);
						}
					});
					console.log("Certificate_ResumeId:", editresumeState.state.data.hasOwnProperty('Certificate_ResumeId'));
					editresumeState.state.data.Certificate_id.forEach((ele, index) => {
						certdata.push({
							Certificate_id: ele,
							CertName: editresumeState.state.data.CertName[index],
							CertPic: editresumeState.state.data.CertPic[index],
							CertYear: editresumeState.state.data.CertYear[index],
							isCheckCert: editresumeState.state.data.hasOwnProperty('Certificate_ResumeId') ? (editresumeState.state.data.Certificate_ResumeId.includes(ele) ? true : false) : false
						})
					});
					console.log("WorkHistory_ResumeId:", editresumeState.state.data.hasOwnProperty('WorkHistory_ResumeId'));
					editresumeState.state.data.WorkHistory_id.forEach((ele, index) => {
						workdata.push({
							WorkHistory_id: ele,
							Work_JobName: editresumeState.state.data.Work_JobName[index],
							Work_JobType: editresumeState.state.data.Work_JobType[index],
							Company: editresumeState.state.data.Company[index],
							Work_Start_Month: editresumeState.state.data.Work_Start_Month[index],
							Work_End_Month: editresumeState.state.data.Work_End_Month[index],
							Work_Start_Year: editresumeState.state.data.Work_Start_Year[index],
							Work_End_Year: editresumeState.state.data.Work_End_Year[index],
							SalaryType: editresumeState.state.data.SalaryType[index],
							Salary: editresumeState.state.data.Salary[index],
							Infomation: editresumeState.state.data.Infomation[index],
							isCheckWork: editresumeState.state.data.hasOwnProperty('WorkHistory_ResumeId') ? (editresumeState.state.data.WorkHistory_ResumeId.includes(ele) ? true : false) : false
						})
					});
					editresumeState.state.data.AdditionalSkill_id.forEach((ele, index) => {
						sideskilldata.push({
							sideskill_id: ele,
							sideskillName: editresumeState.state.data.SoftSkill[index],
							sideskillResume: editresumeState.state.data.AdditionalSkill_ResumeId[index]
						})
					});
					console.log(sideskilldata);
				});
				resolve();
			});
		}

		/* Zone to put check func */
		function CheckbeforeEdit(){
			return new Promise((resolve,reject)=>{
			console.log('Time to edit!!!');
			resolve();
			});
		}

		/* Zone to show html */
		$(async function () {
			await GetResumeData();
			$('.nameedit').text('"' + cookie.load('Job_EditName') + '"');
			console.log('Edit Job is ' + cookie.load('Job_EditName'));
			//alert('Selected tab is '+ cookie.load('Edit_tabselect'));
			var Tab_select = cookie.load('Edit_tabselect');
			$('.tab-content').hide();
			if (Tab_select == 1) {
				$('#registab1-content').show();
			}
			else if (Tab_select == 2) {
				$('#registab2-content').show();
				$('.tab-list-item').removeClass('tab-list-active');
				$('#tab-2').addClass('tab-list-active')
			}
			else if (Tab_select == 3) {
				$('#registab3-content').show();
				$('.tab-list-item').removeClass('tab-list-active');
				$('#tab-3').addClass('tab-list-active')
			}
			else if (Tab_select == 4) {
				$('#registab4-content').show();
				$('.tab-list-item').removeClass('tab-list-active');
				$('#tab-4').addClass('tab-list-active')
			}
			else if (Tab_select == 5) {
				$('#registab5-content').show();
				$('.tab-list-item').removeClass('tab-list-active');
				$('#tab-5').addClass('tab-list-active')
			}
			else if (Tab_select == 6) {
				$('#registab6-content').show();
				$('.tab-list-item').removeClass('tab-list-active');
				$('#tab-6').addClass('tab-list-active')
			}
			else {
				//alert("Don't selected");
				$('#registab1-content').show();
			}
			console.log("Yahaha!");
			$('#tab-1').on('click', function () {
				$('.tab-content').hide();
				$('.tab-list-item').removeClass('tab-list-active');
				$('#tab-1').addClass('tab-list-active')
				$('#registab1-content').show();
			});

			$('#tab-2').on('click', function () {
				$('.tab-content').hide();
				$('.tab-list-item').removeClass('tab-list-active');
				$('#tab-2').addClass('tab-list-active')
				$('#registab2-content').show();
			});

			$('#tab-3').on('click', function () {
				$('.tab-content').hide();
				$('.tab-list-item').removeClass('tab-list-active');
				$('#tab-3').addClass('tab-list-active')
				console.log("Eiei3");
				$('#registab3-content').show();
			});

			$('#tab-4').on('click', function () {
				$('.tab-content').hide();
				$('.tab-list-item').removeClass('tab-list-active');
				$('#tab-4').addClass('tab-list-active')
				$('#registab4-content').show();
			});

			$('#tab-5').on('click', function () {
				$('.tab-content').hide();
				$('.tab-list-item').removeClass('tab-list-active');
				$('#tab-5').addClass('tab-list-active')
				$('#registab5-content').show();
			});

			$('#tab-6').on('click', function () {
				$('.tab-content').hide();
				$('.tab-list-item').removeClass('tab-list-active');
				$('#tab-6').addClass('tab-list-active')
				$('#registab6-content').show();
			});
			await CheckbeforeEdit();
		});

		/* Zone to choose func */
		$(document).on("click", ".input-choose-certi1", function () {
			certdata = $('.input-choose-certi1:input[type=checkbox]:checked').map(function (_, el) {
				return $(el).val();
			}).get();
			console.log("susss222:", certdata);
		});

		$(document).on("change", ".input-choose-certi1", function () {
			if (certdata.length === 6) {
				$("#you-choose-list-resume-certi1").text("คุณเลือกครบ 6 รายการแล้ว");
				$("#you-choose-list-resume-certi1").addClass("you-choose-list-resume-red");
			}
			else if (certdata.length === 0) {
				$("#you-choose-list-resume-certi1").text("");
				$("#you-choose-list-resume-certi1").removeClass("you-choose-list-resume-red");
			}
			else {
				$("#you-choose-list-resume-certi1").text(`คุณเลือกไปแล้ว ${certdata.length} รายการ`);
				$("#you-choose-list-resume-certi1").removeClass("you-choose-list-resume-red");
			}
		});

		$(document).on("click", ".input-choose-work1", function () {
			workdata = $('.input-choose-work1:input[type=checkbox]:checked').map(function (_, el) {
				return $(el).val();
			}).get();
			console.log("susss:", workdata);
		});

		$(document).on("change", ".input-choose-work1", function () {
			if (workdata.length === 3) {
				$("#you-choose-list-resume-work11").text("คุณเลือกครบ 3 รายการแล้ว");
				$("#you-choose-list-resume-work11").addClass("you-choose-list-resume-red");
			}
			else if (workdata.length === 0) {
				$("#you-choose-list-resume-work11").text("");
				$("#you-choose-list-resume-work11").removeClass("you-choose-list-resume-red");
			}
			else {
				$("#you-choose-list-resume-work11").text(`คุณเลือกไปแล้ว ${workdata.length} รายการ`);
				$("#you-choose-list-resume-work11").removeClass("you-choose-list-resume-red");
			}
		});

		/* Zone Button on this page */
		$('#cancelChoose').on('click', function () {
			window.history.go(-1);
		});
		$('#goToeditProfile').on('click', function () {
			cookie.save('Edit_tabselect', '1');
			window.location = ("editprofile");
		})
	}

	componentWillUnmount() {
		window.removeEventListener('load', this.handleLoad)
		cookie.save('Edit_tabselect', '');
	}

	render() {
		if (this.state.render == true) {
			return (
				<div className="EditResume">
					<Navbarlogo />
					<header class="header-white">
						<div class="container">
							<div class="row align-items-end">
								<div class="col">
									<div class="topData2-content relatt">
										<h1 class="name inline">เลือกข้อมูลผู้ใช้ที่จะแสดง</h1>
										<h1 class="symboledit inline">.</h1>
										<h1 class="nameedit inline"></h1>
										<p class="btn-cta-primary-whitewide inline absoluteforedit" id="goToeditProfile">แก้ไขข้อมูล</p>
									</div>
								</div>
							</div>
						</div>
					</header>
					<ol class="tabs-list">
						<li class="tab-list-item tab-list-active" id="tab-1" type="button">เทมเพลต</li>
						<li class="tab-list-item" id="tab-2" type="button">ประวัติการศึกษา</li>
						<li class="tab-list-item" id="tab-3" type="button">ประวัติการทำงาน</li>
						<li class="tab-list-item" id="tab-4" type="button">ใบรับรอง</li>
						<li class="tab-list-item" id="tab-5" type="button">ผลงาน</li>
						<li class="tab-list-item" id="tab-6" type="button">ทักษะเสริม</li>
					</ol>
					<div class="underline_tabeditresume">
					</div>
					<form class="needs-validation" novalidate>
						<div>
							<div class="tab-content" id="registab1-content">
								<Myresumedittemplate Color_Resume={this.state.Color_Resume} firstchoosecolor={this.state.firstchoosecolor} parentCallback={this.callbackFunction} />
							</div>
							<div class="tab-content" id="registab2-content">
								<Chooseresume1 list_of_aca={list_of_aca} list_of_high={list_of_high} />
							</div>
							<div class="tab-content" id="registab3-content">
								<Editresume2 mywork_data={workdata} />
							</div>
							<div class="tab-content" id="registab4-content">
								<Editresume3 mycerti_data={certdata} />
							</div>
							<div class="tab-content" id="registab5-content">
								<Chooseresume4 />
							</div>
							<div class="tab-content" id="registab6-content">
								<Chooseresume5 sideskill_data={sideskilldata} />
							</div>
						</div>
						<div class="col block-right2">
							<button class="btn btn-cta-primary-blackwide round profile-button" target="_blank" id="cancelChoose">ยกเลิก</button>
							<button class="btn btn-cta-primary-yellowwide round profile-button marginLEx1" id="confirmChoose" onClick={this.handleSubmitEdit}>ยืนยัน</button>
						</div>
					</form>
				</div>
			);
		}
		else {
			return (
				<LoadingS />
			)
		}
	}
}

export default Editresume;