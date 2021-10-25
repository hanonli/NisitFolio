import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Navbar from './Components/navbar';
//import DataHeader from './Components/dataHeader';
import reportWebVitals from './reportWebVitals';
import Tabs from "./Components/Tabs";
import { Link } from "react-router-dom";
import $ from 'jquery';
import cookie from 'react-cookies';
import Edittab1 from "./Components/edittab1";
import Edittab2 from "./Components/edittab2";
import Edittab3 from "./Components/edittab3";
import Edittab4 from "./Components/edittab4";
import Edittab5 from "./Components/edittab5";
import Edittab6 from "./Components/edittab6";
import Edittab7 from "./Components/edittab7";
import LoadingS from './Components/loadingS';

var certdata = [], workdata = [], jobdata = [];
var list_of_high = [], list_of_aca = [];
/* THIS FILE IS FOR DATA-EDITING TEST, CAN'T USE FUNC RIGHT NOW*/
class Editprofile extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			data: [],
			render: false,
		}
	}

	componentDidMount() {
		window.addEventListener('load', this.handleLoad);
		certdata = []; workdata = []; jobdata = [];
		//const script = document.createElement("script");
		//script.src = "assets/js/#.js";
		//document.body.appendChild(script);
		var Datasetstate = this;
		$(async function () {
			//alert('Selected tab is ' + cookie.load('Edit_tabselect'));
			await GetDatas();
			Datasetstate.setState({ render: true });
			var Tab_select = cookie.load('Edit_tabselect');
			//alert(Tab_select);
			$('.tab-content').hide();
			if (Tab_select == 1) {
				$('#Edittab1-content').show();
				$('#basic-date-picker1').attr('placeholder', 'วัน/เดือน/ปี');
				$('.reset-pass').hide();
			}
			else if (Tab_select == 2) {
				$('#Edittab2-content').show();
				$('.tab-list-item').removeClass('tab-list-active');
				$('#tab-2').addClass('tab-list-active')
			}
			else if (Tab_select == 3) {
				$('#Edittab3-content').show();
				$('.tab-list-item').removeClass('tab-list-active');
				$('#tab-3').addClass('tab-list-active')
			}
			else if (Tab_select == 4) {
				$('#Edittab4-content').show();
				$('.tab-list-item').removeClass('tab-list-active');
				$('#tab-4').addClass('tab-list-active')
			}
			else if (Tab_select == 5) {
				$('#Edittab5-content').show();
				$('.tab-list-item').removeClass('tab-list-active');
				$('#tab-5').addClass('tab-list-active')
			}
			else if (Tab_select == 6) {
				$('#Edittab6-content').show();
				$('.tab-list-item').removeClass('tab-list-active');
				$('#tab-6').addClass('tab-list-active')
			}
			else if (Tab_select == 7) {
				$('#Edittab7-content').show();
				$('.tab-list-item').removeClass('tab-list-active');
				$('#tab-7').addClass('tab-list-active')
			}
			else {
				//alert("Don't selected");
				$('#Edittab1-content').show();
				$('#basic-date-picker1').attr('placeholder', 'วัน/เดือน/ปี');
				$('.reset-pass').hide();
			}
			console.log("Yahaha!");
			$('#tab-1').on('click', function () {
				$('.tab-content').hide();
				$('.tab-list-item').removeClass('tab-list-active');
				$('#tab-1').addClass('tab-list-active')
				$('#Edittab1-content').show();
				$('#basic-date-picker1').attr('placeholder', 'วัน/เดือน/ปี');
				$('.reset-pass').hide();
			});

			$('#tab-2').on('click', function () {
				$('.tab-content').hide();
				$('.tab-list-item').removeClass('tab-list-active');
				$('#tab-2').addClass('tab-list-active')
				$('#Edittab2-content').show();
			});

			$('#tab-3').on('click', function () {
				$('.tab-content').hide();
				$('.tab-list-item').removeClass('tab-list-active');
				$('#tab-3').addClass('tab-list-active')
				console.log("Eiei3");
				$('#Edittab3-content').show();
			});

			$('#tab-4').on('click', function () {
				$('.tab-content').hide();
				$('.tab-list-item').removeClass('tab-list-active');
				$('#tab-4').addClass('tab-list-active')
				$('#Edittab4-content').show();
			});

			$('#tab-5').on('click', function () {
				$('.tab-content').hide();
				$('.tab-list-item').removeClass('tab-list-active');
				$('#tab-5').addClass('tab-list-active')
				$('#Edittab5-content').show();
			});

			$('#tab-6').on('click', function () {
				$('.tab-content').hide();
				$('.tab-list-item').removeClass('tab-list-active');
				$('#tab-6').addClass('tab-list-active')
				$('#Edittab6-content').show();
			});

			$('#tab-7').on('click', function () {
				$('.tab-content').hide();
				$('.tab-list-item').removeClass('tab-list-active');
				$('#tab-7').addClass('tab-list-active')
				$('#Edittab7-content').show();
			});

		});
		function GetProvince() {
			fetch("https://thaiaddressapi-thaikub.herokuapp.com/v1/thailand/provinces",
				{ method: "GET", })
				.then(response => response.json())
				//.then(response => response.result)
				.then((raw) => {
					//console.log(raw);
					raw.data.forEach((entry) => {
						//console.log(entry.province);
						var pro_now = entry.province;
						$('#province').append($('<option />').val(pro_now).html(pro_now));
					});
				}).catch((error) => {
					console.log(error);
				});

		}
		GetProvince();

		function removeOptions(selectElement) {
			var i, L = selectElement.options.length - 1;
			for (i = L; i >= 1; i--) {
				selectElement.remove(i);
			}
		}

		$('#province').change(function () {
			var selectedText1 = $(Datasetstate).find("option:selected").text();
			console.log(selectedText1);
			removeOptions(document.getElementById('townny'));
			GetDistrict(selectedText1);
		});

		function GetDistrict(text) {
			fetch("https://thaiaddressapi-thaikub.herokuapp.com/v1/thailand/provinces/" + text + '/district',
				{ method: "GET", })
				.then(response => response.json())
				//.then(response => response.result)
				.then((raws) => {
					console.log(raws);
					raws.data.forEach((entrys) => {
						//console.log(entrys);
						var dis_now = entrys;
						$('#townny').append($('<option />').val(dis_now).html(dis_now));
					});

				}).catch((error) => {
					console.log(error);
				});

		}

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
		function GetDatas() {
			return new Promise((resolve, reject) => {
				var token = cookie.load('login-token')
				console.log('Your Token is: ' + token);
				fetch("http://localhost:2000/register/getinfo", {
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
						Datasetstate.setState({
							data: datas,
						})
						console.log('Datasetstate.state.data :' + Datasetstate.state.data);
						/*Zone to use datas*/
						/*console.log(Datasetstate.state.data.Degree);
						Datasetstate.state.data.Degree.forEach(element => {
							if (element == 'มัธยมศึกษาตอนปลาย' || element == 'ปวช.') {
								list_of_high.push({
									id: Datasetstate.state.data.EducationHistory_id,
									high_pos: 0,
									high_name: Datasetstate.state.data.Academy,
									high_faculty: 'none',
									high_degree: Datasetstate.state.data.Degree,
									high_grade: Datasetstate.state.data.Grade,
									high_field: Datasetstate.state.data.Field_of_study,
									high_year: Datasetstate.state.data.Education_End_Year,
								});
								get_high_id(list_of_high, 1);
								console.log(list_of_high);
							}
							else {
								list_of_aca.push({
									id: Datasetstate.state.data.EducationHistory_id,
									aca_pos: 0,
									aca_name: Datasetstate.state.data.Academy,
									aca_faculty: Datasetstate.state.data.Facalty,
									aca_degree: Datasetstate.state.data.Degree,
									aca_grade: Datasetstate.state.data.Grade,
									aca_field: Datasetstate.state.data.Field_of_study,
									aca_year: Datasetstate.state.data.Education_End_Year,
								});
								get_aca_id(list_of_aca, 1);
								console.log(list_of_aca);
							}
						});*/
						Datasetstate.state.data.Certificate_id.forEach((ele, index) => {
							certdata.push({
								Certificate_id: ele,
								CertName: Datasetstate.state.data.CertName[index],
								CertPic: Datasetstate.state.data.CertPic[index],
								CertYear: Datasetstate.state.data.CertYear[index],
								isFetch: true,
								token: token
							})
						});
						Datasetstate.state.data.WorkHistory_id.forEach((ele, index) => {
							let regist4_cb = false;
							if (Datasetstate.state.data.Work_End_Year[index] === 9999 && Datasetstate.state.data.Work_End_Month[index] === 99) {
								regist4_cb = true;
							}
							workdata.push({
								WorkHistory_id: ele,
								Work_JobName: Datasetstate.state.data.Work_JobName[index],
								Work_JobType: Datasetstate.state.data.Work_JobType[index],
								Company: Datasetstate.state.data.Company[index],
								Work_Start_Month: Datasetstate.state.data.Work_Start_Month[index],
								Work_End_Month: Datasetstate.state.data.Work_End_Month[index],
								Work_Start_Year: Datasetstate.state.data.Work_Start_Year[index],
								Work_End_Year: Datasetstate.state.data.Work_End_Year[index],
								SalaryType: Datasetstate.state.data.SalaryType[index],
								Salary: Datasetstate.state.data.Salary[index],
								Infomation: Datasetstate.state.data.Infomation[index],
								regist4_cb: regist4_cb,
								token: token,
								isFetch: true
							})
						});
						Datasetstate.state.data.InterestedJob_id.forEach((ele, index) => {
							jobdata.push({
								InterestedJob_id: ele,
								Job_JobName: Datasetstate.state.data.Job_JobName[index],
								Job_Score1: Datasetstate.state.data.Job_Score[index][0] ? parseFloat(Datasetstate.state.data.Job_Score[index][0]) : parseFloat(2.5),
								Job_Score2: Datasetstate.state.data.Job_Score[index][1] ? parseFloat(Datasetstate.state.data.Job_Score[index][1]) : parseFloat(2.5),
								Job_Score3: Datasetstate.state.data.Job_Score[index][2] ? parseFloat(Datasetstate.state.data.Job_Score[index][2]) : parseFloat(2.5),
								Job_SkillName1: Datasetstate.state.data.Job_SkillName[index][0] ? Datasetstate.state.data.Job_SkillName[index][0] : "none",
								Job_SkillName2: Datasetstate.state.data.Job_SkillName[index][1] ? Datasetstate.state.data.Job_SkillName[index][1] : "none",
								Job_SkillName3: Datasetstate.state.data.Job_SkillName[index][2] ? Datasetstate.state.data.Job_SkillName[index][2] : "none",
								Job_Objective1: Datasetstate.state.data.Job_Objective[index][0] !== "none" ? Datasetstate.state.data.Job_Objective[index][0] : "",
								Job_Objective2: Datasetstate.state.data.Job_Objective[index][1] !== "none" ? Datasetstate.state.data.Job_Objective[index][1] : "",
								Job_Objective3: Datasetstate.state.data.Job_Objective[index][2] !== "none" ? Datasetstate.state.data.Job_Objective[index][2] : "",
								Job_Pos: index + 1,
								token: token,
								isFetch: true
							})
						});
					});
				console.log('Datasetstate is job data : ' + jobdata);
				//alert('Success!!');
				resolve();
			}
			)
		}

		$('#cancelChoose').on('click', function () {
			window.history.go(-1);
		});
		$('#confirmEdit').on('click', function () {
			window.location = ("home");
		})
	}

	componentWillUnmount() {
		window.removeEventListener('load', this.handleLoad)
		cookie.save('Edit_tabselect', '');
		$(document).unbind();
	}

	render() {
		if (this.state.render == true) {
			return (
				<div className="Editprofile">
					<Navbar />
					<header class="header-white">
						<div class="container">
							<div class="row align-items-end">
								<div class="col">
									<div class="topData2-content">
										<h1 class="name">ข้อมูลผู้ใช้</h1>
										<h1></h1>
									</div>
								</div>
							</div>
						</div>
					</header>
					<ol class="tabs-list">
						<li class="tab-list-item tab-list-active" id="tab-1" type="button">ข้อมูลสำคัญ<label class="red_markTitle">*</label></li>
						<li class="tab-list-item" id="tab-2" type="button">ข้อมูลเพิ่มเติม</li>
						<li class="tab-list-item" id="tab-3" type="button">ประวัติการศึกษา</li>
						<li class="tab-list-item" id="tab-4" type="button">ประวัติการทำงาน</li>
						<li class="tab-list-item" id="tab-5" type="button">ใบรับรอง</li>
						<li class="tab-list-item" id="tab-6" type="button">งานที่สนใจ</li>
						<li class="tab-list-item" id="tab-7" type="button">ทักษะเสริม</li>
					</ol>
					<div class="underline-tabJob2">
					</div>
					<div>
						<div class="tab-content" id="Edittab1-content">
							<Edittab1 />
						</div>
						<div class="tab-content" id="Edittab2-content">
							<Edittab2 />
						</div>
						<div class="tab-content" id="Edittab3-content">
							<Edittab3 />
						</div>
						<div class="tab-content" id="Edittab4-content">
							<Edittab4 mywork_data={workdata} />
						</div>
						<div class="tab-content" id="Edittab5-content">
							<Edittab5 mycerti_data={certdata} />
						</div>
						<div class="tab-content" id="Edittab6-content">
							<Edittab6 myjob_data={jobdata} />
						</div>
						<div class="tab-content" id="Edittab7-content">
							<Edittab7 />
						</div>
					</div>
					<div class="col block-right2">
						<button class="btn btn-cta-primary-blackwide round profile-button" target="_blank" type="button" id="cancelChoose">ยกเลิก</button>
						<button class="btn btn-cta-primary-yellowwide round profile-button marginLEx1" type="button" id="confirmEdit">ยืนยัน</button>
					</div>
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

export default Editprofile;