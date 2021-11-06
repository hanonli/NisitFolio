import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Navbarlogo from './Components/navbar';
import InformationHeader from './Components/informationHeader';
import reportWebVitals from './reportWebVitals';
import { Link } from "react-router-dom";
import Chooseresume1 from "./Components/chooseresume1";
import Editresume2 from "./Components/editresume2";
import Editresume3 from "./Components/editresume3";
import Chooseresume4 from "./Components/chooseresume4";
import Chooseresume5 from "./Components/chooseresume5";
import $ from 'jquery';
import cookie from 'react-cookies';
import LoadingS from './Components/loadingS';
import ApplicationURL from './Components/path';

var list_of_aca = [], list_of_high = [], sideskilldata = [];
var select_color_template = "#ffce55";
var myTemplate = {
	"#ff7370": "assets/images/previewRR.png",
	"#fe9666": "assets/images/previewRO.png",
	"#ffce55": "assets/images/previewRY.png",
	"#01b8aa": "assets/images/previewRG.png",
	"#32a3c7": "assets/images/previewRB.png",
}

class Editresume extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			data: [],
			render: false,
			Color_Resume: '',
			firstchoosecolor: false,
			resumeId: "",
			selectedOption: "",
			sample_template: "",
		}
	}

	handleChange = e => {
		this.setState({
			selectedOption: e.target.value,
			sample_template: myTemplate[e.target.value]
		});
		select_color_template = e.target.value; //ใช้ตัวแปรนี้แทน
		console.log("choose color:", select_color_template);
		//console.log("choose color2:", this.state.value_color);
	};

	componentDidMount() {
		var editresumeState = this;
		//select_color_template = "#ffce55";
		var choose_aca = [], choose_high = [], choose_sideskill = [], choose_certi = [], choose_work = [];
		var tmp1 = [], tmp2 = [], list_of_year_certi = {}, year_before_certi, year_before_work = -1, list_of_year_work = {}, certdata = [], workdata = [];
		var token = cookie.load('login-token')
		console.log('Your Token is: ' + token);
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
		/*Zone to Submit EditResume */
		function SubmitEdit() {
			//alert(this.state.Color_Resume);
			//editresumeState.setState({port_choose: cookie.load('choose_Port')});
			var last_port = cookie.load('choose_Port');
			//console.log('last_port : ',last_port);
			console.log(select_color_template);
			choose_aca.forEach(ele => {
				choose_high.push(ele);
			});
			var FormEdit = {
				"SoftSkillID": choose_sideskill,
				"CertID": choose_certi,
				"EducationID": choose_high,
				"WorkID": choose_work,
				"PortID": last_port,
				"Color": select_color_template
			}
			console.log(FormEdit);
			//alert('Confirm Edit Resume');
			editresumeState.setState({ render: false });
			EditResume(FormEdit);
			//window.location = ("myresume");
			//window.location.href = "http://localhost:3000/myresume";
		}

		function EditResume(pack) {
			console.log(editresumeState.state.resumeId);
			fetch(ApplicationURL.backend+"myresume/" + editresumeState.state.resumeId,
				{
					method: "PATCH",
					headers: {
						'Authorization': 'Bearer ' + token,
						"Access-Control-Allow-Origin": "*",
						"Access-Control-Allow-Methods": "*",
						"Access-Control-Allow-Credentials": true,
						"Content-Type": "application/json"
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
						window.location.pathname = '/myresume'
						//editresumeState.props.history.push('/emailverify');
						//editresumeState.setState({ render: true });
						//window.location.href = "http://localhost:3000/myresume";
					}
					return response;
				}).catch(function (error) {
					console.log(error);
				});
		}

		/* Zone to get resume datas */
		function GetResumeData() {
			return new Promise((resolve, reject) => {
				fetch(ApplicationURL.backend+"myresume/myresume/foredit", {
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
						//console.log('editresumeState.state.data :' + editresumeState.state.data);
						/*Zone to use datas*/
						//console.log(editresumeState.state.data.Degree);
						//Color_Resume = editresumeState.state.data.Color_ResumeId ? editresumeState.state.data.Color_ResumeId : "";
						if (editresumeState.state.data.Color_ResumeId !== undefined) {
							editresumeState.setState({ selectedOption: editresumeState.state.data.Color_ResumeId, sample_template: myTemplate[editresumeState.state.data.Color_ResumeId] });
							select_color_template = editresumeState.state.data.Color_ResumeId;
						}
						else {
							editresumeState.setState({ selectedOption: "#ffce55", sample_template: myTemplate["#ffce55"] });
						}
						editresumeState.state.data.Job_JobName.forEach((ele, index) => {
							if (ele == cookie.load('Job_EditName')) {
								console.log('This Resume is : ' + editresumeState.state.data.Resume_id[index]);
								cookie.save('ResumeIdForEdit', editresumeState.state.data.Resume_id[index])
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
									isCheckHigh: editresumeState.state.data.EducationHistory_ResumeId[index].includes(editresumeState.state.resumeId) ? 'checked' : "defaultChecked"
								});
								get_high_id(list_of_high, 1);
								//console.log(list_of_high);
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
									isCheckAca: editresumeState.state.data.EducationHistory_ResumeId[index].includes(editresumeState.state.resumeId) ? 'checked' : "defaultChecked"
								});
								get_aca_id(list_of_aca, 1);
								//console.log(list_of_aca);
							}
						});
						//console.log("Certificate_ResumeId:", editresumeState.state.data.hasOwnProperty('Certificate_ResumeId'));
						editresumeState.state.data.Certificate_id.forEach((ele, index) => {
							certdata.push({
								Certificate_id: ele,
								CertName: editresumeState.state.data.CertName[index],
								CertPic: editresumeState.state.data.CertPic[index],
								CertYear: editresumeState.state.data.CertYear[index],
								isCheckCert: editresumeState.state.data.Certificate_ResumeId[index].includes(editresumeState.state.resumeId) ? 'checked' : ""
							})
						});
						//console.log("WorkHistory_ResumeId:", editresumeState.state.data.hasOwnProperty('WorkHistory_ResumeId'));
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
								isCheckWork: editresumeState.state.data.WorkHistory_ResumeId[index].includes(editresumeState.state.resumeId) ? 'checked' : ""
							})
						});
						editresumeState.state.data.AdditionalSkill_id.forEach((ele, index) => {
							sideskilldata.push({
								sideskill_id: ele,
								sideskillName: editresumeState.state.data.SoftSkill[index],
								sideskillResume: editresumeState.state.data.AdditionalSkill_ResumeId[index],
								isCheckSS: editresumeState.state.data.AdditionalSkill_ResumeId[index].includes(editresumeState.state.resumeId) ? 'checked' : "defaultChecked"
							})
						});
						//console.log(sideskilldata);
						resolve();
					});
			});
		}

		function compareValues(key, order = 'asc') {
			return function innerSort(a, b) {
				if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
					// property doesn't exist on either object
					return 0;
				}
				var varA = (typeof a[key] === 'string')
					? a[key].toUpperCase() : a[key];
				var varB = (typeof b[key] === 'string')
					? b[key].toUpperCase() : b[key];

				let comparison = 0;
				if (varA > varB) {
					comparison = 1;
				} else if (varA < varB) {
					comparison = -1;
				}
				return (
					(order === 'desc') ? (comparison * -1) : comparison
				);
			};
		}

		/* Zone to show html */
		$(async function () {
			console.log('Start Fetch!!');
			if(cookie.load('Job_EditName')==''){
				window.history.back();
				return;
			}
			await GetResumeData();
			editresumeState.setState({ render: true });

			/* Zone Button on this page */
			$('#cancelChoose').on('click', function () {
				//alert("YES SIR!!");
				//editresumeState.props.history.push('/myresume');
				window.location.pathname = "/myresume";
			});
			$('#goToeditProfile').on('click', function () {
				//alert("YES SIR!!");
				cookie.save('Edit_tabselect', '1');
				//window.location = ("editprofile");
				//editresumeState.props.history.push('/editprofile');
				window.location.pathname = "/editprofile";
			});
			$('#submiteditt').on('click', function () {
				//alert("YES SIR!!");
				SubmitEdit();
			});
			console.log('Start Page!!');
			$('.nameedit').text(cookie.load('Job_EditName'));
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
			//console.log("Yahaha!");
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


			list_of_high.forEach(ele => {
				var grid_high1 = '<input\
									class="myresume-choose-high1"\
									id="{xyy}"\
									type="checkbox"\
									value="{ele.high_idvalue}"\
									{isCheckHigh}\
									hidden\
								/>\
								<label class="" for="{forxyy}" id="list-high-22">\
									<div class="t3-content1 row">\
										<div class="col-4">\
											<div class="font-titlet3_2 font-boldt3">{degree_high}</div>\
											<div class="font-titlet3_2 font-khotboldt3">{year_high}</div>\
										</div>\
										<div class="col-8">\
											<div class="font-titlet3_2">{field_high}</div>\
											<div class="font-titlet3_2">{name_high}</div>\
											<div class="font-titlet3_2">เกรด {grade_high}</div>\
										</div>\
									</div>\
									<div class="icon-checkboxct2"><img height="50" src="assets/images/check_black.png" ></img></div>\
								</label>';
				grid_high1 = grid_high1.replace("{ele.high_id}", ele.id);
				grid_high1 = grid_high1.replace("{xyy}", `xyy` + ele.id);
				grid_high1 = grid_high1.replace("{ele.high_idvalue}", ele.id);
				grid_high1 = grid_high1.replace("{isCheckHigh}", ele.isCheckHigh);
				grid_high1 = grid_high1.replace("{forxyy}", `xyy` + ele.id);
				grid_high1 = grid_high1.replace("{no_high}", ele["high_pos"]);
				grid_high1 = grid_high1.replace("{degree_high}", ele["high_degree"]);
				grid_high1 = grid_high1.replace("{name_high}", ele["high_name"]);
				if (ele["high_grade"] == "0.00" || ele["high_grade"] == "0") {
					grid_high1 = grid_high1.replace("{grade_high}", '-');
				}
				else {
					grid_high1 = grid_high1.replace("{grade_high}", ele["high_grade"]);
				}
				if (ele["high_field"] == "none") {
					grid_high1 = grid_high1.replace("{field_high}", '-');
				}
				grid_high1 = grid_high1.replace("{field_high}", ele["high_field"]);
				if (ele["high_year"] == "0") {
					grid_high1 = grid_high1.replace("{year_high}", '-');
				}
				else if (ele["high_year"] == "9999") {
					grid_high1 = grid_high1.replace("{year_high}", 'กำลังศึกษา');
				}
				else {
					grid_high1 = grid_high1.replace("{year_high}", ele["high_year"]);
				}
				$(".list-of-high").append(grid_high1);
				//console.log(`list_of_high:`, list_of_high);
			});
			list_of_aca.forEach(ele => {
				var grid_aca1 = '<input\
					class="myresume-choose-aca1"\
					id="{xxy}"\
					type="checkbox"\
					value="{ele.aca_idvalue}"\
					{isCheckAca}\
					hidden\
				/>\
				<label class="" for="{forxxy}" id="list-aca-22">\
					<div class="t3-content1 row">\
						<div class="col-3">\
							<div class="font-titlet3_1 font-boldt3">{degree_aca}</div>\
							<div class="font-titlet3_1 font-khotboldt3">{year_aca}</div>\
						</div>\
						<div class="col-9">\
							<div class="font-titlet3_1">{field_aca}</div>\
							<div class="font-titlet3_1">{faculty_aca}</div>\
							<div class="font-titlet3_1">{name_aca}</div>\
							<div class="font-titlet3_1">เกรด {grade_aca}</div>\
						</div>\
					</div>\
					<div class="icon-checkboxct1"><img height="50" src="assets/images/check_black.png" ></img></div>\
				</label>';
				grid_aca1 = grid_aca1.replace("{ele.aca_id}", ele.id);
				grid_aca1 = grid_aca1.replace("{xxy}", `xxy` + ele.id);
				grid_aca1 = grid_aca1.replace("{ele.aca_idvalue}", ele.id);
				grid_aca1 = grid_aca1.replace("{isCheckAca}", ele.isCheckAca);
				grid_aca1 = grid_aca1.replace("{forxxy}", `xxy` + ele.id);
				grid_aca1 = grid_aca1.replace("{no_aca}", ele["aca_pos"]);
				grid_aca1 = grid_aca1.replace("{degree_aca}", ele["aca_degree"]);
				grid_aca1 = grid_aca1.replace("{name_aca}", ele["aca_name"]);
				grid_aca1 = grid_aca1.replace("{faculty_aca}", ele["aca_faculty"]);
				if (ele["aca_grade"] == "0.00" || ele["aca_grade"] == "0") {
					grid_aca1 = grid_aca1.replace("{grade_aca}", '-');
				}
				else {
					grid_aca1 = grid_aca1.replace("{grade_aca}", ele["aca_grade"]);
				}
				if (ele["aca_field"] == "none") {
					grid_aca1 = grid_aca1.replace("{field_aca}", '-');
				}
				else {
					grid_aca1 = grid_aca1.replace("{field_aca}", ele["aca_field"]);
				}
				if (ele["aca_year"] == 0) {
					grid_aca1 = grid_aca1.replace("{year_aca}", '-');
				}
				else if (ele["aca_year"] == 9999) {
					grid_aca1 = grid_aca1.replace("{year_aca}", 'กำลังศึกษา');
				}
				else {
					grid_aca1 = grid_aca1.replace("{year_aca}", ele["aca_year"]);
				}
				$(".list-of-aca").append(grid_aca1);
				//console.log(`list_of_aca:`, list_of_aca);
			});
			//console.log('Sideskill_data : ', sideskilldata);
			sideskilldata.forEach(ele => {
				//alert(ele.sideskillName);
				//isCheck_sideskill[ele.sideskill_id] = false;
				var ddt7_un = ` <div id={ele.sideskill_id}>\
				<input\
					class="myresume-choose-ssl1"\
					id="{xxx}"\
					type="checkbox"\
					value="{ele.sideskill_idvalue}"\
					{isCheckSS}\
					hidden\
				/>\
				<label class="dropbtn-box margin-bottom1" for="{forxxx}" id="list-ssl-22">\
					<div class="textT7B">{ele.sideskillName}
					<div class="icon-checkboxct6"><img height="35" src="assets/images/check_black.png" ></img></div>\
					</div>\
				</label>\
			</div >`;
				ddt7_un = ddt7_un.replace("{ele.sideskill_id}", ele.sideskill_id);
				ddt7_un = ddt7_un.replace("{xxx}", `xxx` + ele.sideskill_id);
				ddt7_un = ddt7_un.replace("{ele.sideskill_idvalue}", ele.sideskill_id);
				ddt7_un = ddt7_un.replace("{isCheckSS}", ele.isCheckSS);
				ddt7_un = ddt7_un.replace("{forxxx}", `xxx` + ele.sideskill_id);
				ddt7_un = ddt7_un.replace("{ele.sideskillName}", ele.sideskillName);
				$(".dropdowntap7").append(ddt7_un);
			});
			var count_ssk = $(".myresume-choose-ssl1:input:checkbox:checked").length;
			//alert(count_ssk);
			//console.log($(".myresume-choose-ssl1:input:checkbox:checked").length);
			//console.log(choose_sideskill);
			if ($(".myresume-choose-ssl1:input:checkbox:checked").length == 3) {
				$("#dangerzonect6").text("คุณเลือกครบ 3 รายการแล้ว");
				$("#dangerzonect6").addClass("you-choose-list-resume-red");
				var bol = $(".myresume-choose-ssl1:input:checkbox:checked").length >= 3;
				$(".myresume-choose-ssl1:input:checkbox").not(":checked").attr("disabled", bol);
			}
			else {
				$("#dangerzonect6").text(`คุณเลือกไปแล้ว ${$(".myresume-choose-ssl1:input:checkbox:checked").length} รายการ`);
				$("#dangerzonect6").removeClass("you-choose-list-resume-red");
			}
			//console.log($(".myresume-choose-aca1:input:checkbox:checked").length );
			//console.log($(".myresume-choose-high1:input:checkbox:checked"));
			var count_edu = $(".myresume-choose-aca1:input:checkbox:checked").length + $(".myresume-choose-high1:input:checkbox:checked").length;
			if (count_edu == 6) {
				$("#dangerzonect1").text("คุณเลือกครบ 3 รายการแล้ว");
				$("#dangerzonect1").addClass("you-choose-list-resume-red");
				var bol = (count_edu >= 3);
				$(".myresume-choose-aca1:input:checkbox").not(":checked").attr("disabled", bol);
				$(".myresume-choose-high1:input:checkbox").not(":checked").attr("disabled", bol);
			}
			else {
				$("#dangerzonect1").text(`คุณเลือกไปแล้ว ${count_edu} รายการ`);
				$("#dangerzonect1").removeClass("you-choose-list-resume-red");
			}
			//alert(count_edu);

			/*--------------------------------------- WORK HISTORY ----------------------------------------*/
			tmp2 = [...workdata];
			tmp2.sort(compareValues('Work_Start_Year', 'desc'));
			tmp2.forEach(ele => {
				let grid_work2 = `<div id="{ele.WorkHistory_id}">\
                                        <input\
                                            class="input-choose-work1"\
                                            id="{yyyele.WorkHistory_id}"\
                                            type="checkbox"\
                                            value="{ele.WorkHistory_id}"\
                                            {ischeck}\
                                            hidden\
                                        />\
                                        <label class="t4-content" id="list-work-22" for="{yyyxxcxele.WorkHistory_id}">\
                                            <h5 class="col font-titlet4 font-boldt31">{ele.Work_JobName}</h5>\
                                            <div class="row">\
                                                <div class="col font-titlet4_1">\
                                                    <div class="font-titlet4_1 font-boldt3">{company_work}</div>\
                                                    <div class="font-titlet4_1">เริ่มต้น {ele.Work_Start_Month}/{ele.Work_Start_Year}</div>\
                                                    <div class="font-titlet4_1">สิ้นสุด {month_endwork}/{year_endwork}</div>\
                                                </div>\
                                                <div class="col-2 newline-text123">{ele.Infomation}</div>\
                                            </div>\
                                            <div class="row">\
                                                <div class="col-3 font-salary font-boldt3">{ele.Salary_type}</div>\
                                                <div class="col font-titlet4_2">{salary_work} บาท</div>\
                                            </div>\
                                            <img class="icon-checkbox1112" height="110" src="assets/images/check_black.png" oncontextmenu="return false;" ondragstart="return false;"></img>\
                                        </label>\
                                    </div>`;
				let headyearworkkk1 = `<div id="{show-year25}">\
                                            <h1 id="textOfyear_certi">{ele.Work_Start_Year}</h1>\
                                       </div>\
                                       <div class="content-work1111" id="{contentYear}">`;
				grid_work2 = grid_work2.replace("{ele.WorkHistory_id}", ele.WorkHistory_id);
				grid_work2 = grid_work2.replace("{yyyele.WorkHistory_id}", "yyy" + ele.WorkHistory_id);
				grid_work2 = grid_work2.replace("{ele.WorkHistory_id}", ele.WorkHistory_id);
				grid_work2 = grid_work2.replace("{ischeck}", ele.isCheckWork);
				grid_work2 = grid_work2.replace("{yyyxxcxele.WorkHistory_id}", "yyy" + ele.WorkHistory_id);
				grid_work2 = grid_work2.replace("{ele.Work_JobName}", ele.Work_JobName);
				if (ele.Company == "none" || ele.Company == "") {
					grid_work2 = grid_work2.replace("{company_work}", "");
				}
				else {
					grid_work2 = grid_work2.replace("{company_work}", ele.Company);
				}
				if (ele.Work_Start_Month < 10) {
					grid_work2 = grid_work2.replace("{ele.Work_Start_Month}", `0` + ele.Work_Start_Month);
				}
				else {
					grid_work2 = grid_work2.replace("{ele.Work_Start_Month}", ele.Work_Start_Month);
				}
				grid_work2 = grid_work2.replace("{ele.Work_Start_Year}", ele.Work_Start_Year);
				if (ele.Work_End_Month === 99 && ele.Work_End_Year === 9999) {
					grid_work2 = grid_work2.replace("สิ้นสุด {month_endwork}/{year_endwork}", "ยังอยู่ในงาน");
				}
				else if ((ele.Work_End_Month === 0 && ele.Work_End_Year === 0) || (ele.Work_End_Month === null && ele.Work_End_Year === null)) {
					grid_work2 = grid_work2.replace("สิ้นสุด {month_endwork}/{year_endwork}", "");
				}
				else if (ele.Work_End_Month === 0 && ele.Work_End_Year != 0) {
					grid_work2 = grid_work2.replace("{month_endwork}", "-");
					grid_work2 = grid_work2.replace("{year_endwork}", ele.Work_End_Year);
				}
				else if (ele.Work_End_Month != 0 && ele.Work_End_Year === 0) {
					if (ele.Work_End_Month <= 9) {
						grid_work2 = grid_work2.replace("{month_endwork}", "0" + ele.Work_End_Month);
					}
					else {
						grid_work2 = grid_work2.replace("{month_endwork}", ele.Work_End_Month);
					}
					grid_work2 = grid_work2.replace("{year_endwork}", "-");
				}
				else {
					if (ele.Work_End_Month <= 9) {
						grid_work2 = grid_work2.replace("{month_endwork}", "0" + ele.Work_End_Month);
					}
					else {
						grid_work2 = grid_work2.replace("{month_endwork}", ele.Work_End_Month);
					}
					grid_work2 = grid_work2.replace("{year_endwork}", ele.Work_End_Year);
				}
				grid_work2 = grid_work2.replace("{ele.Salary_type}", ele.SalaryType);
				if ((ele.SalaryType === "ไม่ระบุ" || ele.SalaryType === "") && (ele.Salary === 0 || ele.Salary === null)) {
					grid_work2 = grid_work2.replace("{salary_work} บาท", "");
				}
				else if (ele.SalaryType != "ไม่ระบุ" && ele.Salary === 0 && (ele.Salary === 0 || ele.Salary === null)) {
					grid_work2 = grid_work2.replace("{salary_work}", "-");
				}
				else {
					grid_work2 = grid_work2.replace("{salary_work}", ele.Salary);
				}
				grid_work2 = grid_work2.replace("{ele.Infomation}", ele.Infomation);
				if (year_before_work != ele.Work_Start_Year) {
					list_of_year_work[ele.Work_Start_Year] = 1;
					year_before_work = ele.Work_Start_Year;
					headyearworkkk1 = headyearworkkk1.replace("{show-year25}", `fhshsmhm_` + String(ele.Work_Start_Year));
					headyearworkkk1 = headyearworkkk1.replace("{ele.Work_Start_Year}", String(ele.Work_Start_Year));
					headyearworkkk1 = headyearworkkk1.replace("{contentYear}", `contentYear-workresume_` + String(ele.Work_Start_Year));
					$(".myresume-choose-work11").append(headyearworkkk1);
				}
				else {
					list_of_year_work[ele.Work_Start_Year] += 1;
				}
				$(`#contentYear-workresume_` + String(ele.Work_Start_Year)).append(grid_work2);
			});
			if ($(".input-choose-work1:input[type=checkbox]:checked").length == 3) {
				$("#you-choose-list-resume-work11").text("คุณเลือกครบ 3 รายการแล้ว");
				$("#you-choose-list-resume-work11").addClass("you-choose-list-resume-red");
				var bol = $(".input-choose-work1:input[type=checkbox]:checked").length >= 3;
				$(".input-choose-work1:input:checkbox").not(":checked").attr("disabled", bol);
			}
			else {
				$("#you-choose-list-resume-work11").text(`คุณเลือกไปแล้ว ${$(".input-choose-work1:input[type=checkbox]:checked").length} รายการ`);
				$("#you-choose-list-resume-work11").removeClass("you-choose-list-resume-red");
			}


			/*--------------------------------------- CERTI ----------------------------------------*/
			tmp1 = [...certdata];
			tmp1.sort(compareValues('CertYear', 'desc'));
			tmp1.forEach(ele => {
				//isCheck_certi[ele.Certificate_id] = false;
				let grid_certi2 = ` <div id={ele.Certificate_id}>\
                                    <input\
                                        class="input-choose-certi1"\
                                        id="{xxx}"\
                                        type="checkbox"\
                                        value="{ele.Certificate_idvalue}"\
                                        {ischeck}\
                                        hidden\
                                    />\
                                    <label id="list-certi33" class="card_certi-resume" for="{forxxx}">\
                                        <h1 id="name-of-certi">{ele.CertName}</h1>\
                                        <h1 id="year-of-certi">{ele.CertYear}</h1>\
                                        <div class="pos-pic-of-certi">\
                                            <img height="142" src="{ele.CertPic}" id="border_certi" oncontextmenu="return false;" ondragstart="return false;" ></img>\
                                        </div>\
                                        <div class="icon-checkbox1111"><img height="110" src="assets/images/check_black.png" oncontextmenu="return false;" ondragstart="return false;" ></img></div>\
                                    </label>\
                                </div >`;
				let headOfyear1234 = `  <div id="{show-year-resume-certi}"><h1 id="textOfyear_certi">{ele.CertYear}</h1></div>\
                                    <div class="content-certi1-resume" id="{contentYear}"></div>`;
				grid_certi2 = grid_certi2.replace("{xxx}", `xxx` + ele.Certificate_id);
				grid_certi2 = grid_certi2.replace("{ele.Certificate_idvalue}", ele.Certificate_id);
				//grid_certi2 = grid_certi2.replace("{isCheck_certi}", ele.isCheckCert);
				grid_certi2 = grid_certi2.replace("{ischeck}", ele.isCheckCert);
				grid_certi2 = grid_certi2.replace("{forxxx}", `xxx` + ele.Certificate_id);
				grid_certi2 = grid_certi2.replace("{ele.CertName}", ele.CertName);
				grid_certi2 = grid_certi2.replace("{ele.CertYear}", String(ele.CertYear));
				grid_certi2 = grid_certi2.replace("{ele.CertPic}", ele.CertPic);
				if (year_before_certi != ele.CertYear) {
					list_of_year_certi[ele.CertYear] = 1;
					year_before_certi = ele.CertYear;
					headOfyear1234 = headOfyear1234.replace("{ele.CertYear}", String(ele.CertYear));
					headOfyear1234 = headOfyear1234.replace("{contentYear}", `year-choose-tem-` + String(ele.CertYear));
					headOfyear1234 = headOfyear1234.replace("{show-year-resume-certi}", String(ele.CertYear));
					$(".myresume-choose-certi11").append(headOfyear1234);
				}
				else {
					list_of_year_certi[ele.CertYear] += 1;
				}
				$("#year-choose-tem-" + String(ele.CertYear)).append(grid_certi2);
			});
			if ($(".input-choose-certi1:input[type=checkbox]:checked").length == 6) {
				$("#you-choose-list-resume-certi1").text("คุณเลือกครบ 6 รายการแล้ว");
				$("#you-choose-list-resume-certi1").addClass("you-choose-list-resume-red");
				var bol = $(".input-choose-certi1:input[type=checkbox]:checked").length >= 6;
				$(".input-choose-certi1:input[type=checkbox]:checkbox").not(":checked").attr("disabled", bol);
			}
			else {
				$("#you-choose-list-resume-certi1").text(`คุณเลือกไปแล้ว ${$(".input-choose-certi1:input[type=checkbox]:checked").length} รายการ`);
				$("#you-choose-list-resume-certi1").removeClass("you-choose-list-resume-red");
			}

			/*-------------------------------ZoneUpdate Choose&Check_before_edit-------------------------------*/
			choose_work = $('.input-choose-work1:input[type=checkbox]:checked').map(function (_, el) {
				return $(el).val();
			}).get();
			choose_certi = $('.input-choose-certi1:input[type=checkbox]:checked').map(function (_, el) {
				return $(el).val();
			}).get();
			choose_high = $('.myresume-choose-high1:input[type=checkbox]:checked').map(function (_, el) {
				return $(el).val();
			}).get();
			choose_aca = $('.myresume-choose-aca1:input[type=checkbox]:checked').map(function (_, el) {
				return $(el).val();
			}).get();
			choose_sideskill = $('.myresume-choose-ssl1:input[type=checkbox]:checked').map(function (_, el) {
				return $(el).val();
			}).get();
			//console.log("choose_work:", choose_work);
			//console.log("choose_certi:", choose_certi);
			console.log("select_color_template:", select_color_template);
		});

		/* Zone to choose func */
		$(document).on("click", ".myresume-choose-high1", function () {
			choose_high = $('.myresume-choose-high1:input[type=checkbox]:checked').map(function (_, el) {
				return $(el).val();
			}).get();
			console.log("choosehigh :", choose_high);
		});

		$(document).on("click", ".myresume-choose-high1:input:checkbox", function () {
			var bol = $(".myresume-choose-high1:input:checkbox:checked").length + $(".myresume-choose-aca1:input:checkbox:checked").length >= 6;
			$(".myresume-choose-high1:input:checkbox").not(":checked").attr("disabled", bol);
			$(".myresume-choose-aca1:input:checkbox").not(":checked").attr("disabled", bol);
		});

		$(document).on("click", ".myresume-choose-aca1", function () {
			choose_aca = $('.myresume-choose-aca1:input[type=checkbox]:checked').map(function (_, el) {
				return $(el).val();
			}).get();
			console.log("chooseaca :", choose_aca);
		});

		$(document).on("click", ".myresume-choose-aca1:input:checkbox", function () {
			var bol = $(".myresume-choose-high1:input:checkbox:checked").length + $(".myresume-choose-aca1:input:checkbox:checked").length >= 6;
			$(".myresume-choose-high1:input:checkbox").not(":checked").attr("disabled", bol);
			$(".myresume-choose-aca1:input:checkbox").not(":checked").attr("disabled", bol);
		});
		$(document).on("change", ".myresume-choose-high1", function () {
			var choose_edu_now = choose_aca.length + choose_high.length;
			//alert(choose_aca.length +' + '+ choose_high.length + ' = ' +choose_edu_now);
			if (choose_edu_now == 3) {
				$("#dangerzonect1").text("คุณเลือกครบ 3 รายการแล้ว");
				$("#dangerzonect1").addClass("you-choose-list-resume-red");
			}
			else if (choose_edu_now == 0) {
				$("#dangerzonect1").text("");
				$("#dangerzonect1").removeClass("you-choose-list-resume-red");
			}
			else {
				$("#dangerzonect1").text(`คุณเลือกไปแล้ว ${choose_edu_now} รายการ`);
				$("#dangerzonect1").removeClass("you-choose-list-resume-red");
			}
		});

		$(document).on("change", ".myresume-choose-aca1", function () {
			var choose_edu_now = choose_aca.length + choose_high.length;
			//alert(choose_aca.length +' + '+ choose_high.length + ' = ' +choose_edu_now);
			if (choose_edu_now == 3) {
				$("#dangerzonect1").text("คุณเลือกครบ 3 รายการแล้ว");
				$("#dangerzonect1").addClass("you-choose-list-resume-red");
			}
			else if (choose_edu_now == 0) {
				$("#dangerzonect1").text("");
				$("#dangerzonect1").removeClass("you-choose-list-resume-red");
			}
			else {
				$("#dangerzonect1").text(`คุณเลือกไปแล้ว ${choose_edu_now} รายการ`);
				$("#dangerzonect1").removeClass("you-choose-list-resume-red");
			}
		});

		$(document).on("click", ".input-choose-work1", function () {
			choose_work = $('.input-choose-work1:input[type=checkbox]:checked').map(function (_, el) {
				return $(el).val();
			}).get();
			console.log("choose_work :", choose_work);
		});

		$(document).on("click", ".input-choose-work1:input:checkbox", function () {
			var bol = $(".input-choose-work1:input:checkbox:checked").length >= 3;
			$(".input-choose-work1:input:checkbox").not(":checked").attr("disabled", bol);
		});

		$(document).on("change", ".input-choose-work1", function () {
			if (choose_work.length === 3) {
				$("#you-choose-list-resume-work11").text("คุณเลือกครบ 3 รายการแล้ว");
				$("#you-choose-list-resume-work11").addClass("you-choose-list-resume-red");
			}
			else if (choose_work.length === 0) {
				$("#you-choose-list-resume-work11").text("");
				$("#you-choose-list-resume-work11").removeClass("you-choose-list-resume-red");
			}
			else {
				$("#you-choose-list-resume-work11").text(`คุณเลือกไปแล้ว ${choose_work.length} รายการ`);
				$("#you-choose-list-resume-work11").removeClass("you-choose-list-resume-red");
			}
		});

		$(document).on("click", ".input-choose-certi1", function () {
			choose_certi = $('.input-choose-certi1:input[type=checkbox]:checked').map(function (_, el) {
				return $(el).val();
			}).get();
			console.log("choose_cert :", choose_certi);
		});

		$(document).on("click", ".input-choose-certi1:input:checkbox", function () {
			var bol = $(".input-choose-certi1:input:checkbox:checked").length >= 6;
			$(".input-choose-certi1:input:checkbox").not(":checked").attr("disabled", bol);
		});

		$(document).on("change", ".input-choose-certi1", function () {
			if (choose_certi.length === 6) {
				$("#you-choose-list-resume-certi1").text("คุณเลือกครบ 6 รายการแล้ว");
				$("#you-choose-list-resume-certi1").addClass("you-choose-list-resume-red");
			}
			else if (choose_certi.length === 0) {
				$("#you-choose-list-resume-certi1").text("");
				$("#you-choose-list-resume-certi1").removeClass("you-choose-list-resume-red");
			}
			else {
				$("#you-choose-list-resume-certi1").text(`คุณเลือกไปแล้ว ${choose_certi.length} รายการ`);
				$("#you-choose-list-resume-certi1").removeClass("you-choose-list-resume-red");
			}
		});

		$(document).on("click", ".myresume-choose-ssl1", function () {
			choose_sideskill = $('.myresume-choose-ssl1:input[type=checkbox]:checked').map(function (_, el) {
				return $(el).val();
			}).get();
			console.log("choose_sideskill :", choose_sideskill);
		});

		$(document).on("click", ".myresume-choose-ssl1:input:checkbox", function () {
			var bol = $(".myresume-choose-ssl1:input:checkbox:checked").length >= 3;
			$(".myresume-choose-ssl1:input:checkbox").not(":checked").attr("disabled", bol);
		});

		$(document).on("change", ".myresume-choose-ssl1", function () {
			if (choose_sideskill.length === 3) {
				$("#dangerzonect6").text("คุณเลือกครบ 3 รายการแล้ว");
				$("#dangerzonect6").addClass("you-choose-list-resume-red");
			}
			else if (choose_sideskill.length === 0) {
				$("#dangerzonect6").text("");
				$("#dangerzonect6").removeClass("you-choose-list-resume-red");
			}
			else {
				$("#dangerzonect6").text(`คุณเลือกไปแล้ว ${choose_sideskill.length} รายการ`);
				$("#dangerzonect6").removeClass("you-choose-list-resume-red");
			}
		});
	}

	componentWillUnmount() {
		window.removeEventListener('load', this.handleLoad)
		cookie.save('Edit_tabselect', '');
		cookie.save('Job_EditName','');
		cookie.save("choose_Port","");
		$(document).unbind();
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
										<p class="btn bcp-white round-ss profile-button edit-job inline absoluteforedit" id="goToeditProfile">แก้ไขโปรไฟล์</p>
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
								<div class="myresumeEditTemplate">
									<div class="Editresume-box-content6">
										<div class="layout-edit-template">
											<div class="sample-color-edit-template">
												<img src={this.state.sample_template} width="245px" oncontextmenu="return false;" ondragstart="return false;"></img>
											</div>
											<div class="choose-color-edit-template11">
												<h1 id="text-edit-color-template11">เลือกสีที่เข้ากันและบ่งบอกถึงตัวคุณ</h1>
												<h5 id="describe-template11-edit">สีของเทมเพลตจะใช้กับทุกตำแหน่งงาน</h5>
												<div class="grid-edit-template">

													<div>
														<input
															id="edit-template-color-FFCE55"
															value="#ffce55"
															onChange={this.handleChange}
															checked={this.state.selectedOption === "#ffce55"}
															type="radio"
														/>
														<label id="color-edit-template1" class="edit-template-color-FFCE55" for="edit-template-color-FFCE55">
															<div class="circle-color-template-FFCE55-edit"></div>
															<div class="text-template33">เหลือง (ค่าเริ่มต้น)</div>
														</label>
													</div>

													<div>
														<input
															id="edit-template-color-FE9666"
															value="#fe9666"
															onChange={this.handleChange}
															checked={this.state.selectedOption === "#fe9666"}
															type="radio"
														/>
														<label id="color-edit-template1" class="edit-template-color-FE9666" for="edit-template-color-FE9666">
															<div class="circle-color-template-FE9666-edit"></div>
															<div class="text-template22">ส้ม</div>
														</label>
													</div>

													<div>
														<input
															id="edit-template-color-FF7370"
															value="#ff7370"
															onChange={this.handleChange}
															checked={this.state.selectedOption === "#ff7370"}
															type="radio"
														/>
														<label id="color-edit-template1" class="edit-template-color-FF7370" for="edit-template-color-FF7370">
															<div class="circle-color-template-FF7370-edit"></div>
															<div class="text-template11">ชมพู</div>
														</label>
													</div>

													<div>
														<input
															id="edit-template-color-32A3C7"
															value="#32a3c7"
															onChange={this.handleChange}
															checked={this.state.selectedOption === "#32a3c7"}
															type="radio"
														/>
														<label id="color-edit-template1" class="edit-template-color-32A3C7" for="edit-template-color-32A3C7">
															<div class="circle-color-template-32A3C7-edit"></div>
															<div class="text-template55">ฟ้า</div>
														</label>
													</div>

													<div>
														<input
															id="edit-template-color-01B8AA"
															value="#01b8aa"
															onChange={this.handleChange}
															checked={this.state.selectedOption === "#01b8aa"}
															type="radio"
														/>
														<label id="color-edit-template1" class="edit-template-color-01B8AA" for="edit-template-color-01B8AA">
															<div class="circle-color-template-01B8AA-edit"></div>
															<div class="text-template44">เขียว</div>
														</label>
													</div>

												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div class="tab-content" id="registab2-content">
								<Chooseresume1 />
							</div>
							<div class="tab-content" id="registab3-content">
								<Editresume2 />
							</div>
							<div class="tab-content" id="registab4-content">
								<Editresume3 />
							</div>
							<div class="tab-content" id="registab5-content">
								<Chooseresume4 />
							</div>
							<div class="tab-content" id="registab6-content">
								<Chooseresume5 />
							</div>
						</div>
						<div class="col block-right2">
							<button class="btn btn-cta-primary-blackwide round profile-button" type="button" id="cancelChoose">ยกเลิก</button>
							<button class="btn btn-cta-primary-yellowwide round profile-button marginLEx1" type="button" id="submiteditt" >ยืนยัน</button>
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