import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Navbarlogo from './Components/navbarlogo';
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

var certdata = [], workdata = [], Color_Resume, firstchoosecolor = false;

class Editresume extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			data: [],
			render: true
		}
	}

	componentDidMount() {
		var list_of_high = [], list_of_aca = [];

		function get_high_id(list_of_high, x) {
			//var x = 1;
			list_of_high.forEach(ele => {
				ele["high_pos"] = x;
				console.log("x:", x);
				x++;
			});
			return list_of_high;
		}

		function get_aca_id(list_of_aca, x) {
			//var x = 1;
			list_of_aca.forEach(ele => {
				ele["aca_pos"] = x;
				console.log("x:", x);
				x++;
			});
			return list_of_aca;
		}

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
				this.setState({
					data: datas,
				})
				console.log('this.state.data :' + this.state.data);
				/*Zone to use datas*/
				console.log(this.state.data.Degree);
				this.state.data.Degree.forEach(element => {
					Color_Resume = this.state.data.Color_ResumeId ? this.state.data.Color_ResumeId : "";
					if (!("Color_ResumeId" in this.state.data)) {
						firstchoosecolor = true;
					}
					if (element == 'มัธยมศึกษาตอนปลาย' || element == 'ปวช.') {
						list_of_high.push({
							id: this.state.data.EducationHistory_id,
							high_pos: 0,
							high_name: this.state.data.Academy,
							high_faculty: 'none',
							high_degree: this.state.data.Degree,
							high_grade: this.state.data.Grade,
							high_field: this.state.data.Field_of_study,
							high_year: this.state.data.Education_End_Year,
						});
						get_high_id(list_of_high, 1);
						console.log(list_of_high);
					}
					else {
						list_of_aca.push({
							id: this.state.data.EducationHistory_id,
							aca_pos: 0,
							aca_name: this.state.data.Academy,
							aca_faculty: this.state.data.Facalty,
							aca_degree: this.state.data.Degree,
							aca_grade: this.state.data.Grade,
							aca_field: this.state.data.Field_of_study,
							aca_year: this.state.data.Education_End_Year,
						});
						get_aca_id(list_of_aca, 1);
						console.log(list_of_aca);
					}
				});
				this.state.data.Certificate_id.forEach((ele, index) => {
					certdata.push({
						Certificate_id: ele,
						CertName: this.state.data.CertName[index],
						CertPic: this.state.data.CertPic[index],
						CertYear: this.state.data.CertYear[index]
					})
				});
				this.state.data.WorkHistory_id.forEach((ele, index) => {
					workdata.push({
						WorkHistory_id: ele,
						Work_JobName: this.state.data.Work_JobName[index],
						Work_JobType: this.state.data.Work_JobType[index],
						Company: this.state.data.Company[index],
						Work_Start_Month: this.state.data.Work_Start_Month[index],
						Work_End_Month: this.state.data.Work_End_Month[index],
						Work_Start_Year: this.state.data.Work_Start_Year[index],
						Work_End_Year: this.state.data.Work_End_Year[index],
						SalaryType: this.state.data.SalaryType[index],
						Salary: this.state.data.Salary[index],
						Infomation: this.state.data.Infomation[index]
					})
				});
			});
		$(function () {
			$('.nameedit').text('"' + cookie.load('Job_EditName') + '"');
			console.log('Edit Job is ' + cookie.load('Job_EditName'));
			alert('Selected tab is ' + cookie.load('Edit_tabselect'));
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
				alert("Don't selected");
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
		});
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
									<div class="topData2-content">
										<h1 class="name inline">เลือกข้อมูลผู้ใช้ที่จะแสดง</h1>
										<h1 class="symboledit inline">.</h1>
										<h1 class="nameedit inline"></h1>
										<p class="btn-cta-primary-whitewide inline editbtn-resume" id="goToeditProfile">แก้ไขข้อมูล</p>
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
					<form class="needs-validation" novalidate>
						<div>
							<div class="tab-content" id="registab1-content">
								<Myresumedittemplate Color_Resume={Color_Resume} firstchoosecolor={firstchoosecolor} />
							</div>
							<div class="tab-content" id="registab2-content">
								<Chooseresume1 />
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
								<Chooseresume5 />
							</div>
						</div>
						<div class="col block-right2">
							<button class="btn btn-cta-primary-blackwide round profile-button" target="_blank" id="cancelChoose">ยกเลิก</button>
							<button class="btn btn-cta-primary-yellowwide round profile-button marginLEx1" href="/myresume" target="_blank" type="submit" id="confirmChoose">ยืนยัน</button>
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