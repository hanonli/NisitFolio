import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Navbarlogo from './Components/navbarlogo';
import InformationHeader from './Components/informationHeader';
import reportWebVitals from './reportWebVitals';
import { Link } from "react-router-dom";
import Registab1 from "./Components/registab1";
import Registab2 from "./Components/registab2";
import Registab3 from "./Components/registab3";
import Registab4 from "./Components/registab4";
import Registab5 from "./Components/registab5";
import Registab6 from "./Components/registab6";
import Registab7 from "./Components/registab7";
import $ from 'jquery';
import cookie from 'react-cookies'
import LoadingS from './Components/loadingS';
import { uploadFile } from 'react-s3';
import { v4 as uuidv4 } from 'uuid';
import ApplicationURL from './Components/path';

const S3_BUCKET = 'nisitfolio';
const REGION = 'ap-southeast-1';
const ACCESS_KEY = 'AKIAWGHRNY32XLWEVA62';
const SECRET_ACCESS_KEY = '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';
const DIR_NAME = 'images';

const config = {
	bucketName: S3_BUCKET,
	region: REGION,
	accessKeyId: ACCESS_KEY,
	secretAccessKey: SECRET_ACCESS_KEY,
	dirName: DIR_NAME,
}

class Register extends React.Component {

	constructor(props) {
		super(props);
		this.handleLoad = this.handleLoad.bind(this);
		this.state = {
			render: false, //Set render state to false
			redirect: null
		}
	}

	componentDidMount() {
		var regis = this;
		window.addEventListener('load', this.handleLoad);
		console.log("YEAHXXX!");
		console.log(window.location.origin);
		var uploadurl;
		function UploadToS3(_img) {
			return new Promise((resolve, reject) => {

				uploadFile(_img, config)
					.then(data => {
						uploadurl = data.location;
						//alert(current_i+' push! (from file)');
						resolve();

					})
					.catch(err => console.error(err))


			});
		}

		function Checkemail() {
			return new Promise((resolve, reject) => {
				fetch(ApplicationURL.backend+"valid/" + $('#re03').val(),
					{
						method: "GET",
						headers: {
							"Content-Type": "application/json",
							"Accept": "application/json"
						},
					}
				)
					.then(function (response) {
						//window.location.pathname = '/emailverify'
						console.log(response);
						//alert(checkcaseEmail);
						if (!response.ok) {
							if (response.statusText == 'Unauthorized' && checkcaseEmail == 1) {
								//alert("ใช้อีเมลนี้ได้จ้า");
								$('#re03').removeClass('is-invalid');
								$('#re03').addClass('is-valid');
								//alert(RequestCount_email);
								RequestCount_email = 1;
								resolve();
								//alert(RequestCount_email);
								//$('#toggleEmailW').hide();
							}
						}
						else {
							//alert("มีอีเมลนี้แล้วในระบบ");
							//window.location.href = "http://localhost:3000/emailverify";
							$('#re03').removeClass('is-valid');
							$('#re03').addClass('is-invalid');
							$('#re03').removeClass('margin-bottom1');
							//$('#re03').addClass('margin-bottom2');
							$('#toggleEmailW').show();
							RequestCount_email = 0;
							regis.setState({ render: false });
							resolve();
						}
						//alert(RequestCount_email);
						//return response,RequestCount_email;
					})
			});
		}

		/* *************** For Rung tabs *************** */
		var last_avatar = "assets/images/profile_uk.png";

		window.onload = () => {
			//const myInput1 = document.getElementById('pass05');
			const myInput2 = document.getElementById('pass06');
			//myInput1.onpaste = e => e.preventDefault();
			myInput2.onpaste = e => e.preventDefault();
		}

		/*Tabs New*/
		$(function () {
			$('.tab-content').hide();
			$('#registab1-content').show();
			$('#continue2').show();
			$('#basic-date-picker1').attr('placeholder', 'วัน/เดือน/ปี');
			$('#ddt7s').hide();
			$('#toggleEmailW').hide();
			console.log("Yahaha!");
			$('#tab-1').on('click', function () {
				$('.tab-content').hide();
				$('.tab-list-item').removeClass('tab-list-active');
				$('#tab-1').addClass('tab-list-active')
				$('#registab1-content').show();
				$('#basic-date-picker1').attr('placeholder', 'วัน/เดือน/ปี');
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

			$('#tab-7').on('click', function () {
				$('.tab-content').hide();
				$('.tab-list-item').removeClass('tab-list-active');
				$('#tab-7').addClass('tab-list-active')
				$('#registab7-content').show();
			});

		});

		/*Tab1*/
		var RequestCount_email = 0;
		$('#continue2').click(async function () {
			$('#ssl1').removeClass('borderred');
			$('#ssl2').removeClass('borderred');
			$('#ssl3').removeClass('borderred');
			var RequestCount_email = 0;
			var BDDate = $('#basic-date-picker1').val();
			var last_province = $('#province').val();
			var last_city = $('#townny').val();
			var last_aboutme = $('#aboutme2').val();
			var last_sideskill = [];
			var last_typesideskill = [];
			var ssss1 = cookie.load('sideskill1');
			var tssss1 = cookie.load('typesideskill1');
			var ssss2 = cookie.load('sideskill2');
			var tssss2 = cookie.load('typesideskill2');
			var ssss3 = cookie.load('sideskill3');
			var tssss3 = cookie.load('typesideskill3');
			console.log('type' + tssss1 + '+' + tssss2 + '+' + tssss3);
			console.log('skill' + ssss1 + '+' + ssss2 + '+' + ssss3);
			var checkTab7 = 0;
			if (ssss1 == '') {
				var last_sideskill = [];
				var last_typesideskill = [];
				checkTab7 = 1;
			}
			else if (ssss1 == ssss2 && ssss1 == ssss3) {
				regis.setState({ render: false });
				$('.tab-content').hide();
				$('.tab-list-item').removeClass('tab-list-active');
				$('#tab-7').addClass('tab-list-active')
				$('#registab7-content').show();
				$('#ssl1').addClass('borderred');
				$('#ssl2').addClass('borderred');
				$('#ssl3').addClass('borderred');
				checkTab7 = 0;
			}
			else if (ssss1 == ssss2 && ssss1 != "" && ssss2 != "") {
				regis.setState({ render: false });
				$('.tab-content').hide();
				$('.tab-list-item').removeClass('tab-list-active');
				$('#tab-7').addClass('tab-list-active')
				$('#registab7-content').show();
				$('#ssl1').addClass('borderred');
				$('#ssl2').addClass('borderred');
				checkTab7 = 0;
			}
			else if (ssss1 == ssss3 && ssss1 != "" && ssss3 != "") {
				regis.setState({ render: false });
				$('.tab-content').hide();
				$('.tab-list-item').removeClass('tab-list-active');
				$('#tab-7').addClass('tab-list-active')
				$('#registab7-content').show();
				$('#ssl1').addClass('borderred');
				$('#ssl3').addClass('borderred');
				checkTab7 = 0;
			}
			else if (ssss3 == ssss2 && ssss3 != "" && ssss2 != "") {
				regis.setState({ render: false });
				$('.tab-content').hide();
				$('.tab-list-item').removeClass('tab-list-active');
				$('#tab-7').addClass('tab-list-active')
				$('#registab7-content').show();
				$('#ssl3').addClass('borderred');
				$('#ssl2').addClass('borderred');
				checkTab7 = 0;
			}
			else if (ssss2 == '') {
				var last_sideskill = [ssss1];
				var last_typesideskill = [tssss1];
				checkTab7 = 1;
			}
			else if (ssss3 == '') {
				var last_sideskill = [ssss1, ssss2];
				var last_typesideskill = [tssss1, tssss2];
				checkTab7 = 1;
			}
			else {
				var last_sideskill = [ssss1, ssss2, ssss3];
				var last_typesideskill = [tssss1, tssss2, tssss3];
				checkTab7 = 1;
			}
			if ($('#re03').val() != "") {
				console.log(ApplicationURL.backend+"kuay/" + $('#re03').val())
				await Checkemail();
			}
			if ($('#re03').hasClass('is-valid')) {
				RequestCount_email = 1;
			}
			//alert(RequireCount_pass +'+' +RequestCount_email+'+'+checkTab7);
			if (RequireCount_pass == 1 && RequestCount_email == 1 && checkTab7 == 1) {
				var last_email = $('#re03').val();
				var last_first = $('#re01').val();
				var last_last = $('#re02').val();
				var last_gender = $('#sexgen').val();
				var last_pass = $('#pass05').val();
				console.log('You Pass!');
				cookie.save('Email-verify', $('#re03').val());
				//alert($('#re03').val());
				var last_certname = [], last_certpic = [], last_certyear = [];
				var saveEmail = cookie.load('Email-verify');
				//console.log(avatar1.src);
				regis.setState({ render: true });
				if (avatar1.src == "assets/images/Circleuploadprofile.png") {
					last_avatar = "assets/images/profile_uk.png";
				}
				else {
					await UploadToS3(file_profilepic);
					last_avatar = uploadurl;
				}
				/* Await Loop before send */
				await Promise.all(list_of_certi.map(async entryy => {
					//list_of_certi.forEach(async (entryy) => {
					await UploadToS3(entryy.file_pic);
					console.log('###upload url: ' + entryy.file_pic);
					last_certpic.push(uploadurl);
					last_certname.push(entryy.name_certi);
					last_certyear.push(entryy.year_certi);
				}));
				console.log('continue after upload');

				if (last_province == null) {
					last_province = '';
				}
				if (last_city == null) {
					last_city = '';
				}
				if (last_aboutme == null) {
					last_aboutme = '';
				}
				var last_jobname = [], last_jobskill = [], last_jobscore = [], last_jobobj = [];
				//console.log(list_of_job);
				list_of_job.forEach((entry) => {
					//console.log(entry);
					var total_skill_score = [];
					last_jobname.push(entry.name_job);
					if (entry.skill1 == "none" && entry.skill2 == "none" && entry.skill3 != "none") {
						entry.skill1 = entry.skill3;
						entry.score_skill1 = entry.score_skill3;
						entry.skill3 = "none";
						entry.score_skill3 = "2.5";
					}
					else if (entry.skill1 == "none" && entry.skill2 != "none" && entry.skill3 == "none") {
						entry.skill1 = entry.skill2;
						entry.score_skill1 = entry.score_skill2;
						entry.skill2 = "none";
						entry.score_skill2 = "2.5";
					}
					else if (entry.skill1 == "none" && entry.skill2 != "none" && entry.skill3 != "none") {
						entry.skill1 = entry.skill2;
						entry.score_skill1 = entry.score_skill2;
						entry.skill2 = entry.skill3;
						entry.score_skill2 = entry.score_skill3;
						entry.skill3 = "none";
						entry.score_skill3 = "2.5";
					}
					else if (entry.skill1 != "none" && entry.skill2 == "none" && entry.skill3 != "none") {
						entry.skill2 = entry.skill3;
						entry.score_skill2 = entry.score_skill3;
						entry.skill3 = "none";
						entry.score_skill3 = "2.5";
					}
					//last_jobskill.push([entry.skill1, entry.skill2, entry.skill3]);
					var total_jobskill = [];
					if (entry.skill1 != "none") {
						entry.score_skill1 = Number(parseFloat(entry.score_skill1).toFixed(1));
						total_skill_score.push(entry.score_skill1);
						total_jobskill.push(entry.skill1);
					}
					/*else {
						total_skill_score.push(0);
					}*/
					if (entry.skill2 != "none") {
						entry.score_skill2 = Number(parseFloat(entry.score_skill2).toFixed(1));
						total_skill_score.push(entry.score_skill2);
						total_jobskill.push(entry.skill2);
					}
					/*else {
						total_skill_score.push(0);
					}*/

					if (entry.skill3 != "none") {
						entry.score_skill3 = Number(parseFloat(entry.score_skill3).toFixed(1));
						total_skill_score.push(entry.score_skill3);
						total_jobskill.push(entry.skill3);
					}
					/*else {
						total_skill_score.push(0);
					}*/
					last_jobscore.push(total_skill_score);
					last_jobskill.push(total_jobskill);
					if (entry.obj1 == "" && entry.obj2 == "" && entry.obj3 != "") {
						entry.obj1 = entry.obj3;
						entry.obj3 = "";
					}
					else if (entry.obj1 == "" && entry.obj2 != "" && entry.obj3 == "") {
						entry.obj1 = entry.obj2;
						entry.obj2 = "";
					}
					else if (entry.obj1 == "" && entry.obj2 != "" && entry.obj3 != "") {
						entry.obj1 = entry.obj2;
						entry.obj2 = entry.obj3;
						entry.obj3 = "";
					}
					else if (entry.obj1 != "" && entry.obj2 == "" && entry.obj3 != "") {
						entry.obj2 = entry.obj3;
						entry.obj3 = "";
					}
					last_jobobj.push([entry.obj1, entry.obj2, entry.obj3]);
				});
				//console.log(list_of_certi);
				/*list_of_certi.forEach((entryy) => {
				//console.log(entryy);
				last_certname.push(entryy.name_certi);
				last_certpic.push(entryy.path_file_certi);
				last_certyear.push(entryy.year_certi);
				});*/
				var last_degree = [], last_faculty = [], last_fos = [], last_aca = [], last_grade = [], last_eduyear = [];
				list_of_aca.forEach((entry) => {
					//console.log(entry);
					last_degree.push(entry.aca_degree);
					last_faculty.push(entry.aca_faculty);
					last_fos.push(entry.aca_field);
					last_aca.push(entry.aca_name);
					//last_grade.push(parseFloat(entry.aca_grade));
					last_eduyear.push(entry.aca_year);
					//var total_grade_aca = new Float32Array(1);
					//total_grade_aca[0] = entry.aca_grade;
					//console.log(total_grade_aca[0]);
					//last_grade.push(total_grade_aca[0]);
					last_grade.push(Number.parseFloat(entry.aca_grade));
				});
				list_of_high.forEach((entry) => {
					//console.log(entry);
					last_degree.push(entry.high_degree);
					last_faculty.push(entry.high_faculty);
					last_fos.push(entry.high_field);
					last_aca.push(entry.high_name);
					//last_grade.push(entry.high_grade);
					last_eduyear.push(entry.high_year);
					//var total_grade_high = new Float32Array(1);
					//total_grade_high[0] = entry.high_grade;
					//last_grade.push(total_grade_high[0]);
					last_grade.push(Number.parseFloat(entry.high_grade));
				});
				//console.log('grade = ' + last_grade);
				//console.log(last_eduyear);
				//console.log(last_jobname);
				var last_poswork = [], last_typework = [], last_company = [], last_typesalary = [], last_salary = [], last_yearstart = [], last_monthstart = [], last_yearend = [], last_monthend = [], last_inform = [];
				list_of_work.forEach((entry) => {
					//console.log(entry);
					last_poswork.push(entry.pos_work);
					last_typework.push(entry.type_work);
					last_company.push(entry.company_work);
					last_typesalary.push(entry.type_salary_work);
					last_salary.push(entry.salary_work);
					last_yearstart.push(entry.year_startwork);
					last_monthstart.push(entry.month_startwork);
					last_inform.push(entry.inform_work);
					if (entry.regist4_cb == true) {
						last_yearend.push(9999);
						last_monthend.push(99);
					}
					else if (entry.year_endwork == NaN) {
						last_yearend.push(0);
						last_monthend.push(0);
					}
					else {
						last_yearend.push(entry.year_endwork);
						last_monthend.push(entry.month_endwork);
					}
				});
				//alert(saveEmail);
				//window.location.pathname = '/emailverify'
				console.log(last_certpic);
				var FormRegis2 = {
					Email: last_email,
					Password: last_pass,
					ProfilePic: last_avatar,
					Firstname: last_first,
					Lastname: last_last,
					Birthday: BDDate,
					Gender: last_gender,
					AboutMe: last_aboutme,
					Email2nd: "-",
					Country: "ประเทศไทย",
					Province: last_province,
					City: last_city,
					SoftSkill: last_sideskill,
					SoftSkillType: last_typesideskill,
					CertName: last_certname,
					CertPic: last_certpic,
					CertYear: last_certyear,
					Degree: last_degree,
					Facalty: last_faculty,
					Field_of_study: last_fos,
					Academy: last_aca,
					Grade: last_grade,
					Education_End_Year: last_eduyear,
					Work_JobName: last_poswork,
					Work_JobType: last_typework,
					Company: last_company,
					Work_Start_Month: last_monthstart,
					Work_End_Month: last_monthend,
					Work_Start_Year: last_yearstart,
					Work_End_Year: last_yearend,
					Salary: last_salary,
					SalaryType: last_typesalary,
					Infomation: last_inform,
					Job_JobName: last_jobname,
					Job_SkillName: last_jobskill,
					Job_Score: last_jobscore,
					Job_Objective: last_jobobj,
				}
				//console.log(FormRegis2);
				console.log(JSON.stringify(FormRegis2));
				console.log(FormRegis2);
				PostRegis(FormRegis2);
			}
			else {
				console.log('You Wrong!');
				regis.setState({ render: false });
				$('.tab-content').hide();
				$('.tab-list-item').removeClass('tab-list-active');
				$('#tab-1').addClass('tab-list-active')
				$('#registab1-content').show();
			}
		});

		/*"use strict";
			console.log("HELLO LV3!");
		*/
		console.log("HELLO LV4!");
		var avatar1 = document.getElementById('avatar1');
		var image = document.getElementById('image');
		var input = document.getElementById('input');
		var $alert = $('.alert');
		var $modal = $('#modal');
		var cropper;
		var file_profilepic;

		avatar1.addEventListener('click', function () {
			input.click();
			// console.log("Click on profile!");
		});

		input.addEventListener('change', function (e) {
			var files = e.target.files;
			var done = function (url) {
				input.value = '';
				image.src = url;
				$alert.hide();
				$modal.modal('show');
			};
			var reader;
			if (files && files.length > 0) {
				file_profilepic = files[0];

				if (URL) {
					done(URL.createObjectURL(file_profilepic));
				} else if (FileReader) {
					reader = new FileReader();
					reader.onload = function () {
						done(reader.result);
					};
					reader.readAsDataURL(file_profilepic);
				}
			}
		});

		$modal.on('shown.bs.modal', function () {
			cropper = new window.Cropper(image, {
				aspectRatio: 1,
				viewMode: 1,
			});
		}).on('hidden.bs.modal', function () {
			cropper.destroy();
			cropper = null;
		});

		document.getElementById('crop').addEventListener('click', function () {
			var initialAvatarURL;
			var canvas;

			$modal.modal('hide');
			if (cropper) {
				canvas = cropper.getCroppedCanvas({
					minWidth: 150,
					minHeight: 150,
					maxWidth: 2048,
					maxHeight: 2048,
				});
				initialAvatarURL = avatar1.src;
				avatar1.src = canvas.toDataURL();
				//console.log(avatar1.src);
				$alert.removeClass('alert-success alert-warning');
				canvas.toBlob(function (blob) {
					//var formData = new FormData();
					//formData.append('avatar', blob, 'avatar.jpg');
					//console.log("HELLO LV5!");
					file_profilepic = new File([blob], 'newuser_pf_' + uuidv4(), { lastModified: new Date().getTime(), type: blob.type });
					console.log(file_profilepic);
					//UploadProfileToS3(file);
				});
			}
		});

		var ret1 = document.getElementById('re01');
		ret1.addEventListener('keyup', function () {
			var valt1 = $('#re01').val();
			//console.log('Name : ' + valt1);
			if (valt1 == '') {
				$('#re01').removeClass('is-valid');
				$('#re01').addClass('is-invalid');
				//console.log(FormRegis);
			}
			else {
				$('#re01').removeClass('is-invalid');
				$('#re01').addClass('is-valid');
			}
		});
		var ret2 = document.getElementById('re02');
		ret2.addEventListener('keyup', function () {
			var valt1 = $('#re02').val();
			//console.log('Surname : ' + valt1);
			if (valt1 == '') {
				$('#re02').removeClass('is-valid');
				$('#re02').addClass('is-invalid');
			}
			else {
				$('#re02').removeClass('is-invalid');
				$('#re02').addClass('is-valid');
			}
		});
		var ret3 = document.getElementById('re03');
		var checkcaseEmail = 0;
		ret3.addEventListener('keyup', function () {
			var input = $(this);
			//console.log('Email : ' + input);
			var re = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
			var is_email = re.test(input.val());
			if (is_email) {
				input.removeClass("is-invalid").addClass("is-valid");
				checkcaseEmail = 1;
			}
			else {
				input.removeClass("is-valid").addClass("is-invalid");
				checkcaseEmail = 0;
			}
		});
		var passw = 0;
		var min_pass_count = 8;
		var max_pass_count = 20;
		var RequireCount_pass = 0;
		function checkPass() {
			var textEntered1, textEntered2, checknow, result1;
			textEntered1 = document.getElementById('pass05').value;
			textEntered2 = document.getElementById('pass06').value;
			checknow = textEntered1.length;
			if (textEntered2 == '') {
				//console.log('Password Typing...');
				//console.log('Length : ' + checknow);
				if (checknow < min_pass_count) {
					$('#pass05').removeClass('is-valid');
					$('#pass05').addClass('is-invalid');
				}
				else if (checknow > max_pass_count) {
					$('#pass05').removeClass('is-valid');
					$('#pass05').addClass('is-invalid');
				}
				else {
					$('#pass05').removeClass('is-invalid');
					$('#pass05').addClass('is-valid');
				}
			}
			else if (textEntered1 == textEntered2) {
				console.log('Password TRUE');
				if (checknow < min_pass_count) {
					$('#pass05').removeClass('is-valid');
					$('#pass05').addClass('is-invalid');
					RequireCount_pass = 0;
				}
				else if (checknow > max_pass_count) {
					$('#pass05').removeClass('is-valid');
					$('#pass05').addClass('is-invalid');
					$('#pass06').removeClass('is-valid');
					$('#pass06').addClass('is-invalid');
					RequireCount_pass = 0;
				}
				else {
					$('#pass05').removeClass('is-invalid');
					$('#pass05').addClass('is-valid');
					$('#pass06').removeClass('is-invalid');
					$('#pass06').addClass('is-valid');
					RequireCount_pass = 1;
				}
			}
			else {
				console.log('Password FALSE');
				/*$('#pass06').addClass('red_markEp2');*/
				//console.log('Length false : ' + checknow);
				if (checknow < min_pass_count) {
					$('#pass05').removeClass('is-valid');
					$('#pass05').addClass('is-invalid');
				}
				else if (checknow > max_pass_count) {
					$('#pass05').removeClass('is-valid');
					$('#pass05').addClass('is-invalid');
				}
				else {
					$('#pass05').removeClass('is-invalid');
					$('#pass05').addClass('is-valid');
				}
				$('#pass06').removeClass('is-valid');
				$('#pass06').addClass('is-invalid');
			}
		}
		var pa1 = document.getElementById('pass05');
		var pa2 = document.getElementById('pass06');
		pa1.addEventListener('keyup', checkPass, false);
		pa2.addEventListener('keyup', checkPass, false);

		/*Tab2*/
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
			var selectedText1 = $(this).find("option:selected").text();
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

		function PostRegis(pack) {
			console.log(pack);
			//console.log(pack);
			//console.log(JSON.stringify(pack));
			fetch(ApplicationURL.backend+"register",
				{
					method: "POST",
					headers: {
						"Content-Type": "application/json",
						"Accept": "application/json"
					},
					body: JSON.stringify(pack)
				}
			)
				.then(function (response) {
					//window.location.pathname = '/emailverify'
					//console.log(response.message);
					if (!response.ok) {
						regis.setState({ render: false });
						throw Error(response.statusText);
					}
					else {
						console.log("ok");
						regis.setState({ render: true });
						window.location.pathname = '/emailverify'
						//console.log(response);
					}
					//return response;
				}).catch(function (error) {
					console.log(error);
				});
		}

		/*Tab3*/
		var startYear3 = 1970;
		var endYear3 = new Date().getFullYear();
		for (var i = endYear3; i > startYear3; i--) {
			$('#year_higher').append($('<option />').val(i).html(i));
			$('#year_secondary').append($('<option />').val(i).html(i));
			$('#year_startwork').append($('<option />').val(i).html(i));
			$('#year_endwork').append($('<option />').val(i).html(i));
		}
		var list_of_aca = [];

		function get_aca_id(list_of_aca, x) {
			//var x = 1;
			list_of_aca.forEach(ele => {
				ele["aca_pos"] = x;
				console.log("x:", x);
				x++;
			});
			return list_of_aca;
		}

		function create_UUID() {
			var dt = new Date().getTime();
			var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
				var r = (dt + Math.random() * 16) % 16 | 0;
				dt = Math.floor(dt / 16);
				return (c == 'x' ? r : (r & 0x3 | 0x8)).toString(16);
			});
			return uuid;
		}

		var choose_function3 = -1; //default

		function show_all_aca() {

			list_of_aca.forEach(ele => {
				var grid_aca1 = '<div class="t3-content1 row">\
								<div class="col-3">\
									<div class="font-titlet3_1 font-boldt3">{degree_aca}</div>\
									<div class="font-titlet3_1 font-khotboldt3">{year_aca}</div>\
								</div>\
								<div class="col-9">\
									<div class="font-titlet3_1">{field_aca}</div>\
									<div class="font-titlet3_1">{faculty_aca}</div>\
									<div class="font-titlet3_1">{name_aca}</div>\
									<div class="font-titlet3_1">เกรด {grade_aca}</div>\
								</div>';

				var grid_aca2 = `
								<div class="layer_icon1" id={no-list-aca}>\
									<button type="button" class="btn button1" id="edit-aca"><img src="assets/images/blackedit.png" width="27" height="27"></img></button>\
									<button type="button" class="btn button2" id="del-aca"><img src="assets/images/bin.png" width="30" height="30"></img></button>\
								</div>\
							</div>`;
				grid_aca2 = grid_aca2.replace("{no-list-aca}", ele["id"]);
				grid_aca1 = grid_aca1.replace("{no_aca}", ele["aca_pos"]);
				//grid_aca1 = grid_aca1.replace("{name_aca}", ele["aca_name"]);
				grid_aca1 = grid_aca1.replace("{degree_aca}", ele["aca_degree"]);
				grid_aca1 = grid_aca1.replace("{name_aca}", ele["aca_name"]);
				grid_aca1 = grid_aca1.replace("{faculty_aca}", ele["aca_faculty"]);
				if (ele["aca_grade"] == "0.00") {
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
				if (ele["aca_year"] == "0") {
					grid_aca1 = grid_aca1.replace("{year_aca}", '-');
				}
				else if (ele["aca_year"] == "9999") {
					grid_aca1 = grid_aca1.replace("{year_aca}", 'กำลังศึกษา');
				}
				else {
					grid_aca1 = grid_aca1.replace("{year_aca}", ele["aca_year"]);
				}
				$(".list-of-aca").append(grid_aca1 + grid_aca2);
				console.log(`list_of_aca:`, list_of_aca);
			});
		}
		$(document).ready(function () {
			show_all_aca();
		});

		//func add new aca form
		$(document).on("click", "#add_aca", function () {
			$("#aca_name").removeClass("is-invalid");
			$("#aca_degree").removeClass("is-invalid");
			$("#aca_faculty").removeClass("is-invalid");
			$('#aca_grade').removeClass('is-invalid');
			choose_function3 = 2;
			$('#registab3Modal1').modal('toggle');
			$('#aca_degree').prop('selectedIndex', 0);
			$('#year_secondary').prop('selectedIndex', 0);
			$('#aca_name').val('');
			$('#aca_faculty').val('');
			$('#aca_field').val('');
			$('#aca_grade').val('');
		});

		//func edit aca
		var for_editaca, id_list_aca_edit, id_list_aca_del;
		$(document).on("click", "#edit-aca", function () {
			$("#aca_name").removeClass("is-invalid");
			$("#aca_degree").removeClass("is-invalid");
			$("#aca_faculty").removeClass("is-invalid");
			$('#aca_grade').removeClass('is-invalid');
			id_list_aca_edit = $(this).parents().attr('id');
			console.log(`edit:`, id_list_aca_edit);
			choose_function3 = 1;
			$('#registab3Modal1').modal('toggle');
			$('#submit-aca').text('ยืนยัน');
			console.log(`choose: ${choose_function3}`);
			for_editaca = list_of_aca.find(function (post, index_del) {
				if (post.id == id_list_aca_edit) {
					//console.log("Wow!!");
					return true;
				}
			});
			console.log(`for_editaca:`, for_editaca);
			$("#aca_name").val(for_editaca["aca_name"]);
			$("#aca_faculty").val(for_editaca["aca_faculty"]);
			if (for_editaca["aca_field"] == 'none') {
				$("#aca_field").val('');
			}
			else {
				$("#aca_field").val(for_editaca["aca_field"]);
			}
			if (for_editaca["aca_grade"] == '0.00') {
				$("#aca_grade").val('');
			}
			else {
				$("#aca_grade").val(for_editaca["aca_grade"]);
			}
			document.getElementById("aca_degree").selectedIndex = for_editaca["aca_degree_select"];
			document.getElementById("year_secondary").selectedIndex = for_editaca["aca_year_select"];
		});


		$(document).on("click", "#del-aca", function () {
			id_list_aca_del = $(this).parents().attr('id');
			console.log("id_list_aca111:", id_list_aca_del);
			$('#Modal_remove_aca').modal('toggle');
		});

		$(document).on('click', "#sub_del_aca", function () {
			var removeIndexA = list_of_aca.findIndex(function (post, index_del) {
				if (post.id == id_list_aca_del)
					return true;
			});
			console.log("id_list_aca:", id_list_aca_del);
			list_of_aca.splice(removeIndexA, 1);
			console.log(`delete aca id:`, removeIndexA);
			$('#Modal_remove_aca').modal('hide');
			$(".list-of-aca").empty();
			console.log(list_of_aca);
			get_aca_id(list_of_aca, 1);
			show_all_aca()
			if (list_of_aca.length != 3) {
				$('#aca_danger').text('ท่านสามารถเพิ่มประวัติการศึกษาได้สูงสุด 3 อัน');
				$('#aca_danger').removeClass('red_markOnly');
				$('.icon-plus-circleA').show();
			}
		});


		$(document).on('hide.bs.modal', "#registab3Modal1", function () {
			$('#aca_degree').prop('selectedIndex', 0);
			$('#aca_name').val('');
			$('#aca_faculty').val('');
			$('#aca_field').val('');
			$('#aca_grade').val('');
			//$('#aca_name').attr("placeholder", "สถานศีกษา*").placeholder();
			//$('#aca_faculty').attr("placeholder", "คณะ").placeholder();
			//$('aca_field').attr("placeholder", "สาขาวิชา*").placeholder();
			//$('#aca_grade').attr("placeholder", "เกรดเฉลี่ยสะสม").placeholder();
			$('#year_secondary').prop('selectedIndex', 0);
		});

		$(document).on('click', "#can_aca_del", function () {
			$('#Modal_remove_aca').modal('hide');
		});

		$(document).on("change", "#aca_degree", function () {
			if (document.getElementById("aca_degree").selectedIndex != 0) {
				$("#aca_degree").removeClass("is-invalid");
			}
		});

		document.getElementById("submit-aca").addEventListener("click", function () {
			$("#aca_name").removeClass("is-invalid");
			$("#aca_degree").removeClass("is-invalid");
			$("#aca_faculty").removeClass("is-invalid");
			$('#aca_grade').removeClass('is-invalid');
			var name_aca1 = document.getElementById("aca_name").value;
			var degree_aca1 = document.getElementById("aca_degree").value;
			var faculty_aca1 = document.getElementById("aca_faculty").value;
			var field_aca1 = document.getElementById("aca_field").value;
			var grade_aca1 = document.getElementById("aca_grade").value;
			var year_aca1 = document.getElementById("year_secondary").value;
			$('#submit_aca').text = 'ยืนยัน';
			var checkcase1 = true;
			if (document.getElementById("aca_name").value == '') {
				//alert("submit aca wrong!");
				$("#aca_name").addClass("is-invalid");
				checkcase1 = false;
			}
			if (document.getElementById("aca_degree").value == '') {
				//alert("submit aca wrong!");
				$("#aca_degree").addClass("is-invalid");
				checkcase1 = false;
			}
			if (document.getElementById("aca_faculty").value == '') {
				//alert("submit aca wrong!");
				$("#aca_faculty").addClass("is-invalid");
				checkcase1 = false;
			}
			if (grade_aca1 > 4 || grade_aca1 < 0) {
				$("#aca_grade").addClass("is-invalid");
				checkcase1 = false;
			}
			if (checkcase1) {
				if (field_aca1 == '') {
					field_aca1 = 'none';
				}
				if (grade_aca1 == '') {
					grade_aca1 = 0;
				}
				if (year_aca1 == '') {
					year_aca1 = 0;
				}
				if (choose_function3 == 1) { //edit aca after add
					console.log("edit!!!!!!");
					for_editaca["aca_name"] = name_aca1;
					for_editaca["aca_degree_select"] = $("#aca_degree").prop('selectedIndex');
					for_editaca["aca_year_select"] = $("#year_secondary").prop('selectedIndex');
					for_editaca["aca_faculty"] = faculty_aca1;
					for_editaca["aca_degree"] = degree_aca1;
					for_editaca["aca_grade"] = parseFloat(grade_aca1).toFixed(2);
					for_editaca["aca_field"] = field_aca1;
					for_editaca["year_secondary"] = parseInt(year_aca1);
					for_editaca["aca_year"] = parseInt(year_aca1);
				}
				else if (choose_function3 == 2) { //add aca in list
					list_of_aca.push({
						id: create_UUID(),
						aca_pos: 0,
						aca_name: name_aca1,
						aca_faculty: faculty_aca1,
						aca_degree: degree_aca1,
						aca_degree_select: $("#aca_degree").prop('selectedIndex'),
						aca_year: parseInt(year_aca1),
						aca_year_select: $("#year_secondary").prop('selectedIndex'),
						aca_grade: parseFloat(grade_aca1).toFixed(2),
						aca_field: field_aca1,
						//aca_year: parseInt(year_aca),
					});
					get_aca_id(list_of_aca, 1);
					console.log(list_of_aca);
				}
				console.log("testfloat11:", Number.parseFloat(grade_aca1).toFixed(2));
				$('#aca_degree').prop('selectedIndex', 0);
				$("#year_secondary").prop('selectedIndex', 0);
				$('#aca_name').val('');
				$('#aca_faculty').val('');
				$('#aca_field').val('');
				$('#aca_grade').val('');
				$('#registab3Modal1').modal('hide');
				$(".list-of-aca").empty();
				list_of_aca.sort(function (x, y) {
					return y.aca_year - x.aca_year;
				});
				show_all_aca()
				if (list_of_aca.length == 3) {
					$('#aca_danger').text('*ท่านเพิ่มประวัติการศึกษาครบจำนวนแล้ว');
					$('#aca_danger').addClass('red_markOnly');
					$('.icon-plus-circleA').hide();
				}
			}
		});

		//For Higher

		var list_of_high = [];

		function get_high_id(list_of_high, x) {
			//var x = 1;
			list_of_high.forEach(ele => {
				ele["high_pos"] = x;
				console.log("x:", x);
				x++;
			});
			return list_of_high;
		}

		var choose_function3_2 = -1; //default

		function show_all_high() {

			list_of_high.forEach(ele => {
				var grid_high1 = '<div class="t3-content1 row">\
								<div class="col-4">\
									<div class="font-titlet3_2 font-boldt3">{degree_high}</div>\
									<div class="font-titlet3_2 font-khotboldt3">{year_high}</div>\
								</div>\
								<div class="col-8">\
									<div class="font-titlet3_2">{field_high}</div>\
									<div class="font-titlet3_2">{name_high}</div>\
									<div class="font-titlet3_2">เกรด {grade_high}</div>\
								</div>';

				var grid_high2 = `
								<div class="layer_icon1" id={no-list-high}>\
									<button type="button" class="btn button1" id="edit-high"><img src="assets/images/blackedit.png" width="27" height="27"></img></button>\
									<button type="button" class="btn button2" id="del-high"><img src="assets/images/bin.png" width="30" height="30"></img></button>\
								</div>\
							</div>`;
				grid_high2 = grid_high2.replace("{no-list-high}", ele["id"]);
				grid_high1 = grid_high1.replace("{no_high}", ele["high_pos"]);
				grid_high1 = grid_high1.replace("{degree_high}", ele["high_degree"]);
				// if (ele["high_name"].length > 34) {
				//   grid_high1 = grid_high1.replace("{name_high}", ele["high_name"].slice(0, 34) + "...");
				// }
				// else {
				//   grid_high1 = grid_high1.replace("{name_high}", ele["high_name"]);
				// }

				grid_high1 = grid_high1.replace("{name_high}", ele["high_name"]);
				if (ele["high_grade"] == "0.00") {
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
				$(".list-of-high").append(grid_high1 + grid_high2);
				console.log(`list_of_high:`, list_of_high);
			});
		}
		$(document).ready(function () {
			show_all_high();
		});

		//func add new high form
		$(document).on("click", "#add_high", function () {
			$("#high_degree").removeClass("is-invalid");
			$("#high_name").removeClass("is-invalid");
			$("#high_grade").removeClass("is-invalid");
			choose_function3_2 = 2;
			$('#registab3Modal2').modal('toggle');
			$('#high_degree').prop('selectedIndex', 0);
			$('#year_higher').prop('selectedIndex', 0);
			$('#high_name').val('');
			$('#high_field').val('');
			$('#high_grade').val('');
		});

		//func edit high
		var for_edithigh, id_list_high_edit, id_list_high_del;
		$(document).on("click", "#edit-high", function () {
			$("#high_degree").removeClass("is-invalid");
			$("#high_name").removeClass("is-invalid");
			$("#high_grade").removeClass("is-invalid");
			id_list_high_edit = $(this).parents().attr('id');
			console.log(`edit:`, id_list_high_edit);
			choose_function3_2 = 1;
			$('#registab3Modal2').modal('toggle');
			$('#submit-high').text('ยืนยัน');
			console.log(`choose: ${choose_function3_2}`);
			for_edithigh = list_of_high.find(function (post, index_del) {
				if (post.id == id_list_high_edit) {
					//console.log("Wow!!");
					return true;
				}
			});
			console.log(`for_edithigh:`, for_edithigh);
			$("#high_name").val(for_edithigh["high_name"]);
			if (for_edithigh["high_field"] == 'none') {
				$("#high_field").val('');
			}
			else {
				$("#high_field").val(for_edithigh["high_field"]);
			}
			if (for_edithigh["high_grade"] == '0.00') {
				$("#high_grade").val('');
			}
			else {
				$("#high_grade").val(for_edithigh["high_grade"]);
			}
			document.getElementById("high_degree").selectedIndex = for_edithigh["high_degree_select"];
			document.getElementById("year_higher").selectedIndex = for_edithigh["high_year_select"];
		});


		$(document).on("click", "#del-high", function () {
			id_list_high_del = $(this).parents().attr('id');
			console.log("id_list_high112:", id_list_high_del);
			$('#Modal_remove_high').modal('toggle');
		});

		$(document).on('click', "#sub_del_high", function () {
			var removeIndexA = list_of_high.findIndex(function (post, index_del) {
				if (post.id == id_list_high_del)
					return true;
			});
			console.log("id_list_high:", id_list_high_del);
			list_of_high.splice(removeIndexA, 1);
			console.log(`delete high id:`, removeIndexA);
			$('#Modal_remove_high').modal('hide');
			$(".list-of-high").empty();
			console.log(list_of_high);
			get_high_id(list_of_high, 1);
			show_all_high()
			if (list_of_high.length != 3) {
				$('#high_danger').text('ท่านสามารถเพิ่มประวัติการศึกษาได้สูงสุด 3 อัน');
				$('#high_danger').removeClass('red_markOnly');
				$('.icon-plus-circleH').show();
			}
		});


		$(document).on('hide.bs.modal', "#registab3Modal2", function () {
			$('#high_degree').prop('selectedIndex', 0);
			$('#high_name').val('');
			$('#high_field').val('');
			$('#high_grade').val('');
			$('#year_higher').prop('selectedIndex', 0);
		});

		$(document).on('click', "#can_high_del", function () {
			$('#Modal_remove_high').modal('hide');
		});

		$(document).on("change", "#high_degree", function () {
			if (document.getElementById("high_degree").selectedIndex != 0) {
				$("#high_degree").removeClass("is-invalid");
			}
		});

		document.getElementById("submit-high").addEventListener("click", function () {
			var name_high = document.getElementById("high_name").value;
			var degree_high = document.getElementById("high_degree").value;
			var field_high = document.getElementById("high_field").value;
			var grade_high = document.getElementById("high_grade").value;
			var year_high = document.getElementById("year_higher").value;
			$('#submit_high').text = 'ยืนยัน';
			var checkformT3 = true;
			//console.log('high_name : '+ $("#high_name").val());
			if (document.getElementById("high_name").value == "") {
				//alert("submit high wrong!");
				$("#high_name").addClass("is-invalid");
				checkformT3 = false;
			}
			if (document.getElementById("high_degree").value == '') {
				//alert("submit high wrong!");
				$("#high_degree").addClass("is-invalid");
				checkformT3 = false;
			}
			if (grade_high > 4 || grade_high < 0) {
				$("#high_grade").addClass("is-invalid");
				checkformT3 = false;
			}
			if (checkformT3) {
				if (field_high == '') {
					field_high = 'none';
				}
				if (grade_high == '') {
					grade_high = 0;
				}
				if (year_high == '') {
					year_high = 0;
				}
				if (choose_function3_2 == 1) { //edit high after add
					console.log("edit!!!!!!");
					for_edithigh["high_name"] = name_high;
					for_edithigh["high_degree_select"] = $("#high_degree").prop('selectedIndex');
					for_edithigh["high_year_select"] = $("#year_higher").prop('selectedIndex');
					for_edithigh["high_degree"] = degree_high;
					for_edithigh["high_grade"] = parseFloat(grade_high).toFixed(2);
					for_edithigh["high_field"] = field_high;
					//for_edithigh["year_higher"] = parseInt(year_high);
					for_edithigh["high_year"] = parseInt(year_high);
				}
				else if (choose_function3_2 == 2) { //add high in list
					list_of_high.push({
						id: create_UUID(),
						high_pos: 0,
						high_name: name_high,
						high_faculty: 'none',
						high_degree: degree_high,
						high_degree_select: $("#high_degree").prop('selectedIndex'),
						high_year_select: $("#year_higher").prop('selectedIndex'),
						high_grade: parseFloat(grade_high).toFixed(2),
						high_field: field_high,
						high_year: parseInt(year_high),
					});
					get_high_id(list_of_high, 1);
					console.log(list_of_high);
				}
				$('#high_degree').prop('selectedIndex', 0);
				$("#year_higher").prop('selectedIndex', 0);
				$('#high_name').val('');
				$('#high_field').val('');
				$('#high_grade').val('');
				$('#registab3Modal2').modal('hide');
				$(".list-of-high").empty();
				list_of_high.sort(function (x, y) {
					return y.high_year - x.high_year;
				});
				//console.table(list_of_high);
				show_all_high()
				if (list_of_high.length == 3) {
					$('#high_danger').text('*ท่านเพิ่มประวัติการศึกษาครบจำนวนแล้ว');
					$('#high_danger').addClass('red_markOnly');
					$('.icon-plus-circleH').hide();
				}
			}
		});
		/* Tab 4 */
		/*---- generate code ID ----*/
		function create_UUID() {
			var dt = new Date().getTime();
			var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
				var r = (dt + Math.random() * 16) % 16 | 0;
				dt = Math.floor(dt / 16);
				return (c == 'x' ? r : (r & 0x3 | 0x8)).toString(16);
			});
			return uuid;
		}

		/*------order list------*/
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

		function isNumberTab4(n) {
			return /^-?[\d.]+(?:e-?\d+)?$/.test(n);
		}

		var backup_year_endwork = 0, backup_month_endwork = 0, backup_salary = "";
		var list_of_work = []; //list of work
		var list_of_year_work = {}; //check year
		var year_before_work;
		var choose_function = -1; //default stutus before add(2) or edit(1)
		var for_edit;

		function show_work() {
			year_before_work = -1;
			list_of_year_work = {};
			list_of_work.sort(compareValues('year_startwork', 'desc'));
			list_of_work.forEach(ele => {
				let grid_work1 = `<div class="t4-content" id="{no_work}">\
										<h5 class="col font-titlet4 font-boldt31">{pos_work}</h5>\
										<div class="row">\
											<div class="col font-titlet4_1">\
												<div class="font-titlet4_1 font-boldt3">{company_work}</div>\
												<div class="font-titlet4_1">เริ่มต้น {month_startwork}/{year_startwork}</div>`;

				let grid_work2 = `<div class="font-titlet4_1">สิ้นสุด {month_endwork}/{year_endwork}</div>`;

				let grid_work3 = `</div>\
											<div class="col-2 newline-text123">{inform_work}</div>\
										</div>\
										<div class="row">\
											<div class="col-3 font-salary font-boldt3">{type_salary}</div>\
											<div class="col font-titlet4_2">{salary_work} บาท</div>\
										</div>\
										<div class="layer_icon2">\
											<div class="set-layer_icon2">\
												<button type="button" class="btn" id="edit-work"><img src="assets/images/blackedit.png" width="35" height="35"></img></button>\
												<button type="button" class="btn" id="del-work"><img src="assets/images/bin.png" width="50" height="50"></img></button>\                               
											</div>\
										</div>\
									</div>`;
				let headOfyear1234 = `<div id="{show-year}" >\
											<h1 id="textOfyear_work">{head-year}</h1>\
										</div>\
										<div class="content-work1111" id="{contentYear}"></div>`;
				grid_work1 = grid_work1.replace("{no_work}", ele["id"]);
				grid_work1 = grid_work1.replace("{pos_work}", ele["pos_work"]);
				if (ele["company_work"] != "") {
					grid_work1 = grid_work1.replace("{company_work}", ele["company_work"]);
				}
				else {
					grid_work1 = grid_work1.replace("{company_work}", "");
				}
				if (ele["month_startwork"] < 10) {
					grid_work1 = grid_work1.replace("{month_startwork}", `0` + ele["month_startwork"]);
				}
				else {
					grid_work1 = grid_work1.replace("{month_startwork}", ele["month_startwork"]);
				}
				grid_work1 = grid_work1.replace("{year_startwork}", ele["year_startwork"]);
				if (ele["regist4_cb"] == true) {
					grid_work2 = grid_work2.replace("สิ้นสุด {month_endwork}/{year_endwork}", `ยังอยู่ในงาน`);
				}
				else {
					if (Number.isNaN(ele["month_endwork"]) == true && Number.isNaN(ele["year_endwork"]) == true) {
						grid_work2 = "";
					}
					else if (Number.isNaN(ele["month_endwork"]) == true && Number.isNaN(ele["year_endwork"]) == false) {
						grid_work2 = grid_work2.replace("{month_endwork}", `-`);
						grid_work2 = grid_work2.replace("{year_endwork}", ele["year_endwork"]);
					}
					else if (Number.isNaN(ele["year_endwork"]) == true && Number.isNaN(ele["month_endwork"]) == false) {
						grid_work2 = grid_work2.replace("{year_endwork}", `-`);
						if (ele["month_endwork"] < 10) {
							grid_work2 = grid_work2.replace("{month_endwork}", `0` + ele["month_endwork"]);
						}
						else {
							grid_work2 = grid_work2.replace("{month_endwork}", ele["month_endwork"]);
						}
					}
					else {
						if (ele["month_endwork"] < 10) {
							grid_work2 = grid_work2.replace("{month_endwork}", `0` + ele["month_endwork"]);
						}
						else {
							grid_work2 = grid_work2.replace("{month_endwork}", ele["month_endwork"]);
						}
						grid_work2 = grid_work2.replace("{year_endwork}", ele["year_endwork"]);
					}
				}
				grid_work3 = grid_work3.replace("{type_salary}", ele["type_salary_work"]);
				if (ele["type_salary_work"] != "ไม่ระบุ" && ele["type_salary_work_select"] != 0) {
					if (Number.isNaN(ele["salary_work"]) == false) {
						grid_work3 = grid_work3.replace("{salary_work}", ele["salary_work"]);
					}
					else {
						grid_work3 = grid_work3.replace("{salary_work}", "-");
					}
				}
				else {
					grid_work3 = grid_work3.replace("{salary_work} บาท", "");
				}
				grid_work3 = grid_work3.replace("{inform_work}", ele["inform_work"]);
				if (year_before_work != ele["year_startwork"]) {
					//console.log(`change year!!!!`);
					list_of_year_work[ele["year_startwork"]] = 1;
					year_before_work = ele["year_startwork"];
					headOfyear1234 = headOfyear1234.replace("{show-year}", `yearOf_` + String(ele["year_startwork"]));
					headOfyear1234 = headOfyear1234.replace("{head-year}", String(ele["year_startwork"]));
					headOfyear1234 = headOfyear1234.replace("{contentYear}", `contentYear-work_` + String(ele["year_startwork"]));
					$(".box-box-box-work1").append(headOfyear1234);
				}
				else {
					list_of_year_work[ele["year_startwork"]] += 1;
				}
				$("#contentYear-work_" + String(ele["year_startwork"])).append(grid_work1 + grid_work2 + grid_work3);
			});
		}

		//open modal to add work
		$(document).on("click", ".registab4_formbox", function () {
			choose_function = 2;
			$('#registab4Modal').modal('toggle');
			$("#salary_work").prop("disabled", true);
			document.querySelector('#submit-work').innerText = 'เพิ่ม';
		});

		var id_list_work_edit;

		//open modal to edit work
		$(document).on("click", "#edit-work", function () {
			choose_function = 1;
			id_list_work_edit = $(this).parents().parents().parents().attr('id');
			console.log("id_list_work111:", id_list_work_edit);
			$('#registab4Modal').modal('toggle');
			document.querySelector('#submit-work').innerText = 'ตกลง';
			for_edit = list_of_work.find(function (post, index_del) {
				if (post.id == id_list_work_edit)
					return true;
			});
			//document.getElementById("jobtype_work").value = for_edit.type_work;
			document.getElementById("jobtype_work").selectedIndex = for_edit.type_work_select;
			document.getElementById("jobname_work").value = for_edit.pos_work;
			document.getElementById("company_work").value = for_edit.company_work;
			//document.getElementById("salarytype_work").value = for_edit.type_salary_work;
			document.getElementById("salarytype_work").selectedIndex = for_edit.type_salary_work_select;
			if (Number.isNaN(for_edit.salary_work) == false) {
				document.getElementById("salary_work").value = for_edit.salary_work;
			}
			else {
				document.getElementById("salary_work").value = '';
			}
			if (for_edit.type_salary_work == "ไม่ระบุ" || for_edit.type_salary_work_select == 0) {
				$("#salary_work").prop("disabled", true);
				document.getElementById("salary_work").value = "";
			}
			else {
				$("#salary_work").prop("disabled", false);
			}
			//document.getElementById("year_startwork").value = for_edit.year_startwork;
			document.getElementById("year_startwork").selectedIndex = for_edit.year_startwork_select;
			//document.getElementById("month_startwork").value = for_edit.month_startwork;
			document.getElementById("month_startwork").selectedIndex = for_edit.month_startwork_select;
			//document.getElementById("year_endwork").value = for_edit.year_endwork;
			document.getElementById("year_endwork").selectedIndex = for_edit.year_endwork_select;
			//document.getElementById("month_endwork").value = for_edit.month_endwork;
			document.getElementById("month_endwork").selectedIndex = for_edit.month_endwork_select;
			backup_year_endwork = for_edit["backup_year_endwork"];
			backup_month_endwork = for_edit["backup_month_endwork"];
			//backup_salary = for_edit["backup_salary"];
			$('#regist4_cb').prop('checked', for_edit.regist4_cb);
			if (for_edit.regist4_cb == true) {
				$("#year_endwork").prop("disabled", true);
				$("#month_endwork").prop("disabled", true);
			}
			document.getElementById("inform_work").value = for_edit.inform_work;
		});

		//open modal to delete certi (uncomplete!!!!!!!!!!!!!!!!!!!)
		var id_list_work_del;
		$(document).on("click", "#del-work", function () {
			id_list_work_del = $(this).parents().parents().parents().attr('id');
			$('#Modal_remove_work').modal('toggle');
		});

		$(document).on("click", "#sub_del_work", function () {
			var removeIndex = list_of_work.findIndex(function (post, index_del) {
				if (post.id == id_list_work_del)
					return true;
			});
			list_of_year_work[list_of_work[removeIndex]["year_startwork"]] -= 1;
			if (list_of_year_work[list_of_work[removeIndex]["year_startwork"]] == 0) {
				$(`#yearOf_` + String(list_of_work[removeIndex]["year_startwork"])).remove();
			}
			list_of_work.splice(removeIndex, 1);
			$(`#` + id_list_work_del).remove();
			$('#Modal_remove_work').modal('hide');
		});

		$(document).on("click", "#can_del_work", function () {
			$('#Modal_remove_work').modal('hide');
		});

		//change status 
		$(document).on('change', "#regist4_cb", function () {
			if ($('#regist4_cb').prop('checked') == true) {
				/*$("#year_endwork").addClass("dis_input444");
				$("#month_endwork").addClass("dis_input444");*/
				$("#year_endwork").prop("disabled", true);
				$("#month_endwork").prop("disabled", true);
				backup_year_endwork = document.getElementById("year_endwork").selectedIndex;
				backup_month_endwork = document.getElementById("month_endwork").selectedIndex;
				document.getElementById("year_endwork").selectedIndex = "0";
				document.getElementById("month_endwork").selectedIndex = "0";
			}
			else {
				/*$("#year_endwork").removeClass("dis_input444");
				$("#month_endwork").removeClass("dis_input444");*/
				$("#year_endwork").prop("disabled", false);
				$("#month_endwork").prop("disabled", false);
				$("#year_endwork").removeClass("is-invalid");
				$("#month_endwork").removeClass("is-invalid");
				document.getElementById("year_endwork").selectedIndex = backup_year_endwork;
				document.getElementById("month_endwork").selectedIndex = backup_month_endwork;
			}
		});

		$(document).on('change', "#jobtype_work", function () {
			if (document.getElementById("jobtype_work").selectedIndex != 0) {
				$("#jobtype_work").removeClass("is-invalid");
			}
		});

		$(document).on('change', "#jobname_work", function () {
			if (document.getElementById("jobname_work").selectedIndex != 0) {
				$("#jobname_work").removeClass("is-invalid");
			}
		});

		$(document).on('change', "#year_startwork", function () {
			if (document.getElementById("year_startwork").selectedIndex != 0) {
				$("#year_startwork").removeClass("is-invalid");
			}
		});

		$(document).on('change', "#month_startwork", function () {
			if (document.getElementById("month_startwork").selectedIndex != 0) {
				$("#month_startwork").removeClass("is-invalid");
			}
		});

		$(document).on('change', "#year_endwork", function () {
			if (document.getElementById("year_endwork").selectedIndex != 0) {
				$("#year_endwork").removeClass("is-invalid");
			}
		});

		$(document).on('change', "#month_endwork", function () {
			if (document.getElementById("month_endwork").selectedIndex != 0) {
				$("#month_endwork").removeClass("is-invalid");
			}
		});

		$(document).on('change', "#salary_work", function () {
			if (Number.isNaN(parseInt(document.getElementById("salary_work").value)) == false) {
				$("#salary_work").removeClass("is-invalid");
			}
		});

		$(document).on('change', "#salarytype_work", function () {
			if ($("#salarytype_work").val() == "ไม่ระบุ" || document.getElementById("salarytype_work").selectedIndex == "0") {
				//backup_salary = document.getElementById("salary_work").value;
				$("#salary_work").prop("disabled", true);
				document.getElementById("salary_work").value = "";
			}
			else {
				$("#salary_work").prop("disabled", false);
				//document.getElementById("salary_work").value = backup_salary;
			}
		});

		//submit data to list 
		$(document).on('click', "#submit-work", function () {
			var type_work = document.getElementById("jobtype_work").value;
			//var type_work_select = document.getElementById("jobtype_work").selectedIndex;
			var pos_work = document.getElementById("jobname_work").value;
			var company_work = document.getElementById("company_work").value;
			var type_salary_work = document.getElementById("salarytype_work").value;
			// var type_salary_work_select = document.getElementById("salarytype_work").selectedIndex;
			var salary_work = document.getElementById("salary_work").value;
			var year_startwork = document.getElementById("year_startwork").value;
			//var year_startwork_select = document.getElementById("year_startwork").selectedIndex;
			var month_startwork = document.getElementById("month_startwork").value;
			//var month_startwork_select = document.getElementById("month_startwork").selectedIndex;
			var year_endwork = document.getElementById("year_endwork").value;
			//var year_endwork_select = document.getElementById("year_endwork").selectedIndex;
			var month_endwork = document.getElementById("month_endwork").value;
			//var month_endwork_select = document.getElementById("month_endwork").selectedIndex;
			var regist4_cb = $('#regist4_cb').prop('checked');
			var inform_work = document.getElementById("inform_work").value;
			if (document.getElementById("jobtype_work").selectedIndex == 0 && document.getElementById("jobname_work").value == "" && document.getElementById("year_startwork").value == "" && document.getElementById("month_startwork").value == "") {
				$("#jobtype_work").addClass("is-invalid");
				$("#jobname_work").addClass("is-invalid");
				$("#year_startwork").addClass("is-invalid");
				$("#month_startwork").addClass("is-invalid");
			}
			else if (document.getElementById("jobname_work").value == "" && document.getElementById("year_startwork").value == "" && document.getElementById("month_startwork").value == "") {
				$("#jobname_work").addClass("is-invalid");
				$("#year_startwork").addClass("is-invalid");
				$("#month_startwork").addClass("is-invalid");
			}
			else if (document.getElementById("jobtype_work").selectedIndex == 0 && document.getElementById("year_startwork").value == "" && document.getElementById("month_startwork").value == "") {
				$("#jobtype_work").addClass("is-invalid");
				$("#year_startwork").addClass("is-invalid");
				$("#month_startwork").addClass("is-invalid");
			}
			else if (document.getElementById("jobtype_work").selectedIndex == 0 && document.getElementById("jobname_work").value == "" && document.getElementById("year_startwork").value == "" && document.getElementById("month_startwork").value == "") {
				$("#jobtype_work").addClass("is-invalid");
				$("#jobname_work").addClass("is-invalid");
				$("#month_startwork").addClass("is-invalid");
			}
			else if (document.getElementById("jobtype_work").selectedIndex == 0 && document.getElementById("jobname_work").value == "" && document.getElementById("year_startwork").value == "") {
				$("#jobtype_work").addClass("is-invalid");
				$("#jobname_work").addClass("is-invalid");
				$("#year_startwork").addClass("is-invalid");
			}
			else if (document.getElementById("jobtype_work").selectedIndex == 0 && document.getElementById("jobname_work").value == "") {
				$("#jobtype_work").addClass("is-invalid");
				$("#jobname_work").addClass("is-invalid");
			}
			else if (document.getElementById("jobtype_work").selectedIndex == 0 && document.getElementById("year_startwork").value == "") {
				$("#jobtype_work").addClass("is-invalid");
				$("#year_startwork").addClass("is-invalid");
			}
			else if (document.getElementById("jobtype_work").selectedIndex == 0 && document.getElementById("month_startwork").value == "") {
				$("#jobtype_work").addClass("is-invalid");
				$("#month_startwork").addClass("is-invalid");
			}
			else if (document.getElementById("jobname_work").value == "" && document.getElementById("year_startwork").value == "") {
				$("#jobname_work").addClass("is-invalid");
				$("#year_startwork").addClass("is-invalid");
			}
			else if (document.getElementById("jobname_work").value == "" && document.getElementById("month_startwork").value == "") {
				$("#jobname_work").addClass("is-invalid");
				$("#month_startwork").addClass("is-invalid");
			}
			else if (document.getElementById("year_startwork").value == "" && document.getElementById("month_startwork").value == "") {
				$("#year_startwork").addClass("is-invalid");
				$("#month_startwork").addClass("is-invalid");
			}
			else if (document.getElementById("jobtype_work").selectedIndex == 0) {
				$("#jobtype_work").addClass("is-invalid");
			}
			else if (document.getElementById("jobname_work").value == "") {
				$("#jobname_work").addClass("is-invalid");
			}
			else if (document.getElementById("year_startwork").value == "") {
				$("#year_startwork").addClass("is-invalid");
			}
			else if (document.getElementById("month_startwork").value == "") {
				$("#month_startwork").addClass("is-invalid");
			}
			else if ((document.getElementById("salary_work").value != "" && isNumberTab4(document.getElementById("salary_work").value) == false) || parseInt(document.getElementById("salary_work").value) < 0) {
				$("#salary_work").addClass("is-invalid");
			}
			else if ($('#regist4_cb').prop('checked') == false && parseInt(document.getElementById("year_endwork").value) < parseInt(document.getElementById("year_startwork").value)) {
				$("#year_endwork").addClass("is-invalid");
			}
			else if ($('#regist4_cb').prop('checked') == false && parseInt(document.getElementById("year_endwork").value) == parseInt(document.getElementById("year_startwork").value) && parseInt(document.getElementById("month_endwork").value) < parseInt(document.getElementById("month_startwork").value)) {
				$("#month_endwork").addClass("is-invalid");
			}
			else {
				if (choose_function == 1) {
					for_edit["type_workt"] = type_work;
					for_edit["type_work_select"] = document.getElementById("jobtype_work").selectedIndex;
					for_edit["pos_work"] = pos_work;
					for_edit["company_work"] = company_work;
					for_edit["type_salary_work"] = type_salary_work;
					for_edit["type_salary_work_select"] = document.getElementById("salarytype_work").selectedIndex;
					for_edit["salary_work"] = parseInt(salary_work);
					for_edit["year_startwork"] = parseInt(year_startwork);
					for_edit["year_startwork_select"] = document.getElementById("year_startwork").selectedIndex;
					for_edit["month_startwork"] = parseInt(month_startwork);
					for_edit["month_startwork_select"] = document.getElementById("month_startwork").selectedIndex;
					for_edit["year_endwork"] = parseInt(year_endwork);
					for_edit["year_endwork_select"] = document.getElementById("year_endwork").selectedIndex;
					for_edit["month_endwork"] = parseInt(month_endwork);
					for_edit["month_endwork_select"] = document.getElementById("month_endwork").selectedIndex;
					for_edit["regist4_cb"] = regist4_cb;
					for_edit["inform_work"] = inform_work;
					for_edit["backup_year_endwork"] = backup_year_endwork;
					for_edit["backup_month_endwork"] = backup_month_endwork;
					//for_edit["backup_salary"] = backup_salary;
				}
				else if (choose_function == 2) {
					//console.log(`add!!!!!`);
					list_of_work.push({
						id: create_UUID(),
						type_work: type_work,
						type_work_select: document.getElementById("jobtype_work").selectedIndex,
						pos_work: pos_work,
						company_work: company_work,
						type_salary_work: type_salary_work,
						type_salary_work_select: document.getElementById("salarytype_work").selectedIndex,
						salary_work: parseInt(salary_work),
						year_startwork: parseInt(year_startwork),
						year_startwork_select: document.getElementById("year_startwork").selectedIndex,
						month_startwork: parseInt(month_startwork),
						month_startwork_select: document.getElementById("month_startwork").selectedIndex,
						year_endwork: parseInt(year_endwork),
						year_endwork_select: document.getElementById("year_endwork").selectedIndex,
						month_endwork: parseInt(month_endwork),
						month_endwork_select: document.getElementById("month_endwork").selectedIndex,
						regist4_cb: regist4_cb,
						inform_work: inform_work,
						backup_year_endwork: backup_year_endwork,
						backup_month_endwork: backup_month_endwork,
					});
				}
				console.log(`list_of_work:`, list_of_work);
				$("#registab4Modal").modal("hide"); //success!!!!!
				$(".box-box-box-work1").empty();
				show_work();
			}
		});

		//hide modal
		$(document).on('click', "#hide-modal-work", function () {
			$("#registab4Modal").modal("hide");
		});

		//clear modal
		$(document).on('hide.bs.modal', "#registab4Modal", function () {
			document.getElementById("jobtype_work").selectedIndex = "0";
			document.getElementById("jobname_work").value = "";
			document.getElementById("company_work").value = "";
			document.getElementById("salarytype_work").selectedIndex = "0";
			document.getElementById("salary_work").value = "";
			document.getElementById("year_startwork").selectedIndex = "0";
			document.getElementById("month_startwork").selectedIndex = "0";
			document.getElementById("year_endwork").selectedIndex = "0";
			document.getElementById("month_endwork").selectedIndex = "0";
			$('#regist4_cb').prop('checked', false);
			/*$("#year_endwork").removeClass("dis_input4");
			$("#month_endwork").removeClass("dis_input4");*/
			$("#year_endwork").prop("disabled", false);
			$("#month_endwork").prop("disabled", false);
			$("#jobtype_work").removeClass("is-invalid");
			$("#jobname_work").removeClass("is-invalid");
			$("#year_startwork").removeClass("is-invalid");
			$("#month_startwork").removeClass("is-invalid");
			$("#salary_work").removeClass("is-invalid");
			$("#salary_work").prop("disabled", true);
			document.getElementById("inform_work").value = "";
			backup_year_endwork = 0;
			backup_month_endwork = 0;
			//backup_salary = "";
		});
		/* Tab5 */
		/*----year option----*/
		$(document).ready(function () {
			var startYear = 1990;
			var endYear = new Date().getFullYear();
			for (let i = endYear; i > startYear; i--) {
				$('#yearpicker_111').append($('<option />').val(i).html(i));
			}
		});

		/*----upload img----*/

		$(document).ready(function () {
			$('#to_upload112').on('click', function () {
				$('#image-upload112').click();
			});
		});

		/*---- generate code ID ----*/
		function create_UUID() {
			var dt = new Date().getTime();
			var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
				var r = (dt + Math.random() * 16) % 16 | 0;
				dt = Math.floor(dt / 16);
				return (c == 'x' ? r : (r & 0x3 | 0x8)).toString(16);
			});
			return uuid;
		}

		var list_of_certi = []; //list of certi 

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

		// show list certi
		var list_of_year_certi = {}; //check year
		var year_before_certi
		function show_certi() {
			year_before_certi = -1;
			var id_pos;
			list_of_year_certi = {};
			list_of_certi.sort(compareValues('year_certi', 'desc'));
			list_of_certi.forEach(ele => {
				let grid_certi = `<div class="card_certi" id="{no_certi}">\
											<h1 id="name-of-certi">{name-certi}</h1>\
											<h1 id="year-of-certi">{year-certi}</h1>\
											<div class="pos-pic-of-certi">\
												<img height="142" src="{pic-of-certi}" id="border_certi" oncontextmenu="return false;" ondragstart="return false;"></img>\
											</div>\
											<div class="layer-button-certi">\
												<div class="set-layer-button-certi">\
													<button type="button" class="btn" id="edit-certi"><img src="assets/images/blackedit.png" width="35" height="35" oncontextmenu="return false;" ondragstart="return false;"></img></button>\
													<button type="button" class="btn" id="del-certi"><img src="assets/images/bin.png" width="50" height="50" oncontextmenu="return false;" ondragstart="return false;"></img></button>\                                    
												</div>\
											</div>\
										</div>`;
				let headOfyear1234 = `<div id="{show-year}" >\
												<h1 id="textOfyear_certi">{head-year}</h1>\
										</div>\
										<div class="content-certi1" id="{contentYear}"></div>`;

				grid_certi = grid_certi.replace("{no_certi}", ele["id"]);
				grid_certi = grid_certi.replace("{name-certi}", ele["name_certi"]);
				grid_certi = grid_certi.replace("{year-certi}", ele["year_certi"]);
				grid_certi = grid_certi.replace("{pic-of-certi}", ele["path_file_certi"]);

				if (year_before_certi != ele["year_certi"]) {
					//console.log(`change year!!!!`);
					list_of_year_certi[ele["year_certi"]] = 1;
					year_before_certi = ele["year_certi"];
					headOfyear1234 = headOfyear1234.replace("{show-year}", `yearOf_` + String(ele["year_certi"]));
					headOfyear1234 = headOfyear1234.replace("{head-year}", String(ele["year_certi"]));
					headOfyear1234 = headOfyear1234.replace("{contentYear}", `contentYear_` + String(ele["year_certi"]));
					$(".box-box-box").append(headOfyear1234);
				}
				else {
					list_of_year_certi[ele["year_certi"]] += 1;
				}
				$("#contentYear_" + String(ele["year_certi"])).append(grid_certi);
			});
			//console.log(`list_of_year_certi:`, list_of_year_certi);
		}

		$(document).ready(function () {
			show_certi();
			$("#icon-upload-112").remove();
			$("#text-upload-112").remove();
			$("#text-upload-116").remove();
			console.log("hello576");
		});

		var picOfCerti = '', file_picOfCerti = '';

		$(document).on('change', "#image-upload112", function () {
			$('.for_upload112').empty();
			var path_img = document.getElementById("image-upload112");
			if (path_img.files.length == 0) return;
			if (path_img.files[0].type == "image/jpeg" || path_img.files[0].type == "image/jpg" || path_img.files[0].type == "image/png") {
				console.log("path_img.files", path_img.files);
				//file_picOfCerti = path_img.files[0];
				file_picOfCerti = new File([path_img.files[0]], 'newuser_ct_' + uuidv4(), { type: path_img.files[0].type });
				console.log(file_picOfCerti);
				var reader = new FileReader();
				reader.onload = function (e) {
					//$("#preview_before_upload").remove();
					picOfCerti = e.target.result;
					$("#preview_before_upload").attr('src', e.target.result);
				};
				reader.readAsDataURL(path_img.files[0]);
				//picOfCerti = readURL(document.getElementById("image-upload112"));
				//console.log("picOfCerti:", picOfCerti);
				$("#icon-upload-112").remove();
				$("#text-upload-112").remove();
				$("#text-upload-116").remove();
				$(".for_upload112").append('<img id="preview_before_upload" oncontextmenu="return false;" ondragstart="return false;"></img>');
				$("#to_upload112").removeClass("error_select_certi");
			}
		});

		var choose_function = -1; //default
		var for_edit;
		var id_list_certi_edit;

		//open modal to edit certi
		$(document).on("click", "#edit-certi", function () {
			choose_function = 1;
			//console.log(`chosoe: ${choose_function}`);
			id_list_certi_edit = $(this).parents().parents().parents().attr('id');
			//console.log("id_list_certi111:", id_list_certi_edit);
			$('#exampleModal11112').modal('toggle');
			$("#nm_certi").removeClass("is-invalid");
			$("#yearpicker_111").removeClass("is-invalid");
			$("#preview_before_upload").remove();
			$("#icon-upload-112").remove();
			$("#text-upload-112").remove();
			$("#text-upload-116").remove();
			document.querySelector('#submit-certi').innerText = 'ยืนยัน';
			for_edit = list_of_certi.find(function (post, index_del) {
				if (post.id == id_list_certi_edit)
					return true;
			});
			//console.log(`for_edit:`, for_edit);
			document.getElementById("nm_certi").value = for_edit["name_certi"];
			document.getElementById("yearpicker_111").selectedIndex = for_edit["year_certi_select"];
			picOfCerti = for_edit["path_file_certi"];
			$(".for_upload112").append(`<img src="` + picOfCerti + `" id="preview_before_upload" oncontextmenu="return false;" ondragstart="return false;"></img>`);

		});

		//open modal to add certi
		$(document).on("click", ".frame_add_certi", function () {
			$("#icon-upload-112").remove();
			$("#text-upload-112").remove();
			$("#text-upload-116").remove();
			choose_function = 2;
			//console.log(`chosoe: ${choose_function}`);
			$('#exampleModal11112').modal('toggle');
			$("#preview_before_upload").remove();
			$("#nm_certi").removeClass("is-invalid");
			$("#yearpicker_111").removeClass("is-invalid");
			$('.for_upload112').append(`<img id="icon-upload-112" src="assets/images/upload_file.png" width="85px" height="85px" class="up_img" oncontextmenu="return false;" ondragstart="return false;"></img>`);
			$('.for_upload112').append(`<h2 class="text_up5" id="text-upload-112">อัพโหลดใบรับรองของคุณได้ที่นี่</h2>`);
			$('.for_upload112').append(`<h2 class="text_up5-1" id="text-upload-116">(ไฟล์สกุล jpg jpeg หรือ png เท่านั้น)</h2>`);
			$('#submit-certi').text('เพิ่ม');
			document.querySelector('#submit-certi').innerText = 'เพิ่ม';
		});

		//open modal to delete certi (uncomplete!!!!!!!!!!!!!!!!!!!)
		var id_list_certi_del;
		$(document).on("click", "#del-certi", function () {
			id_list_certi_del = $(this).parents().parents().parents().attr('id');
			//console.log("id_list_certi111:", id_list_certi_del);
			$('#exampleModal_remove_certi').modal('toggle');
			//console.log(`list_of_year_certi:`, list_of_year_certi);
		});

		$(document).on('click', "#summit-to-delete-certi", function () {
			var removeIndex = list_of_certi.findIndex(function (post, index_del) {
				if (post.id == id_list_certi_del)
					return true;
			});
			//console.log("id_list_certi:", id_list_certi);
			//console.log("removeIndex:", list_of_certi[removeIndex])
			list_of_year_certi[list_of_certi[removeIndex]["year_certi"]] -= 1;
			if (list_of_year_certi[list_of_certi[removeIndex]["year_certi"]] == 0) {
				$(`#yearOf_` + String(list_of_certi[removeIndex]["year_certi"])).remove();
			}
			list_of_certi.splice(removeIndex, 1);
			//console.log(`delete _certi id:`, removeIndex);
			$(`#` + id_list_certi_del).remove();
			//console.log(`list_of_certi:`, list_of_certi);
			$("#preview_before_upload").remove();
			$("#icon-upload-112").remove();
			$("#text-upload-112").remove();
			$("#text-upload-116").remove();
			$("#exampleModal_remove_certi").modal("hide");
			console.log(`list_of_year_certi:`, list_of_year_certi);
		});

		$(document).on("change", "#nm_certi", function () {
			if (document.getElementById("nm_certi").value != "") {
				$("#nm_certi").removeClass("is-invalid");
			}
		});

		$(document).on("change", "#yearpicker_111", function () {
			if (document.getElementById("yearpicker_111").selectedIndex != 0) {
				$("#yearpicker_111").removeClass("is-invalid");
			}
		});

		var name_certi, year_certi;
		$(document).on('click', "#submit-certi", function () {
			name_certi = document.getElementById("nm_certi").value;
			year_certi = document.getElementById("yearpicker_111").value;
			//file_pic_certi = document.getElementById("image-upload112");
			if (document.getElementById("nm_certi").value == "" && year_certi == "" && picOfCerti == '') {
				$("#nm_certi").addClass("is-invalid");
				$("#yearpicker_111").addClass("is-invalid");
				$("#to_upload112").addClass("error_select_certi");
			}
			else if (year_certi == "") {
				$("#yearpicker_111").addClass("is-invalid");
			}
			else if (document.getElementById("nm_certi").value == "") {
				//alert("error!!!!");
				$("#nm_certi").addClass("is-invalid");
			}
			else if (picOfCerti == '' && choose_function == 2) {
				$("#to_upload112").addClass("error_select_certi");
			}
			else {
				if (choose_function == 1) {
					console.log("edit!!!!!!");
					console.log(`list_of_certi:`, list_of_certi);
					for_edit["name_certi"] = name_certi;
					for_edit["year_certi"] = parseInt(year_certi);
					for_edit["path_file_certi"] = picOfCerti;
					for_edit["file_pic"] = file_picOfCerti;
					for_edit["year_certi_select"] = $("#yearpicker_111").prop('selectedIndex');
					var list_edit11 = document.getElementById(id_list_certi_edit);
					//console.log("id_list_certi_edit:", id_list_certi_edit);
				}
				else if (choose_function == 2) {
					//console.log("add!!!!!!")
					var id_of_certi = create_UUID();
					list_of_certi.push({
						id: id_of_certi,
						name_certi: name_certi,
						year_certi: parseInt(year_certi),
						year_certi_select: $("#yearpicker_111").prop('selectedIndex'),
						path_file_certi: picOfCerti,
						file_pic: file_picOfCerti
					});
				}
				$("#nm_certi").val("");
				$("#yearpicker_111").prop('selectedIndex', 0);
				$("#exampleModal11112").modal("hide");
				$(".box-box-box").empty();
				console.log(`list_of_certi:`, list_of_certi);
				show_certi();
				$("#preview_before_upload").remove();
				$("#icon-upload-112").remove();
				$("#text-upload-112").remove();
				$("#text-upload-116").remove();
				picOfCerti = '';
				file_picOfCerti = '';
			}
		});

		$(document).on('click', "#hide-modal-certi", function () {
			$("#exampleModal11112").modal("hide");
		});

		$(document).on('hide.bs.modal', "#exampleModal11112", function () {
			$('#yearpicker_111').prop('selectedIndex', 0);
			$("#nm_certi").val("");
			$("#preview_before_upload").remove();
			$("#icon-upload-112").remove();
			$("#text-upload-112").remove();
			$("#text-upload-116").remove();
			$("#to_upload112").removeClass("error_select_certi");
			picOfCerti = '';
			file_picOfCerti = '';
		});

		$(document).on('click', "#hide-delete-certi", function () {
			$('#exampleModal_remove_certi').modal('hide');
		});
		/*------------------------ REGISTER TAB 6 ------------------------*/
		/*---------------- TAB IN MODAL ---------------*/
		var tabId;
		$(document).on('click', '.tabs_pop li', function () {
			$('.tabs_pop li').removeClass('current2');
			$('.tab-pane_pop').removeClass('current2');
			tabId = $(this).attr('data-tab1');
			//console.log(`tabId:`, tabId);
			//console.log(`this is!!:`, this);
			$(this).addClass('current2');
			$('#' + tabId).addClass('current2');
		});

		/*---------------- list item job interest ----------------*/
		var list_of_job = []; //list of job

		function get_job_id(list_of_job, x) {
			//var x = 1;
			list_of_job.forEach(ele => {
				ele["job_pos"] = x;
				//console.log("x:", x);
				x++;
			});
			return list_of_job;
		}

		function create_UUID() {
			var dt = new Date().getTime();
			var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
				var r = (dt + Math.random() * 16) % 16 | 0;
				dt = Math.floor(dt / 16);
				return (c == 'x' ? r : (r & 0x3 | 0x8)).toString(16);
			});
			return uuid;
		}

		var choose_function = -1; //default
		var id_list_job;

		function show_all_job() {

			list_of_job.forEach(ele => {
				var grid_Job1 = `<div class="frame_job" >\
										<div class="job-column-1" >\
											<h1 id="job-position">ตำแหน่งงานที่ {no_job}</h1>\
											<h1 id="job-name">{name_job}</h1>\
										</div >\
										<div class="head-skill">\
											<h1 id="mySkil-job">ทักษะของฉัน</h1>\
										</div>\                                
										<div class="my-skill-content">\
											<div class="each-skill-job">`;

				var grid_Job_skill1 = `	    <p id="skill1-job">{skill1}</p>`;

				var grid_Job_skill2 = `	    <p id="skill2-job">{skill2}</p>`;

				var grid_Job_skill3 = `     <p id="skill3-job">{skill3}</p>`;

				var grid_Job2 = `	    </div>\
										</div>\
										<div class="layer_icon" id="{no_list}">\
											<div class="set-layer-button-job">\
												<button type="button" class="btn" id="edit-job"><img src="assets/images/blackedit.png" width="35" height="35" oncontextmenu="return false;" ondragstart="return false;"></img></button>\
												<button type="button" class="btn" id="del-job"><img src="assets/images/bin.png" width="50" height="50" oncontextmenu="return false;" ondragstart="return false;"></img></button>\
											</div>\
										</div>\
									</div>\
									</div>\
								</div>`;
				grid_Job2 = grid_Job2.replace("{no_list}", ele["id"]);
				grid_Job1 = grid_Job1.replace("{no_job}", ele["job_pos"]);
				grid_Job1 = grid_Job1.replace("{name_job}", ele["name_job"]);
				if (ele["skill1"] == "none" && ele["skill2"] == "none" && ele["skill3"] == "none") {
					grid_Job1 = grid_Job1.replace(`<h1 id="mySkil-job">ทักษะของฉัน</h1>`, "");
				}
				if (ele["skill1"] != "none") {
					if (ele["skill1"].length > 12) {
						grid_Job_skill1 = grid_Job_skill1.replace("{skill1}", ele["skill1"].slice(0, 11) + "...");
					}
					else {
						grid_Job_skill1 = grid_Job_skill1.replace("{skill1}", ele["skill1"]);
					}
				}
				else {
					grid_Job_skill1 = "";
				}
				if (ele["skill2"] != "none") {
					if (ele["skill2"].length > 12) {
						grid_Job_skill2 = grid_Job_skill2.replace("{skill2}", ele["skill2"].slice(0, 11) + "...");
					}
					else {
						grid_Job_skill2 = grid_Job_skill2.replace("{skill2}", ele["skill2"]);
					}
				}
				else {
					grid_Job_skill2 = "";
				}
				if (ele["skill3"] != "none") {
					if (ele["skill3"].length > 12) {
						grid_Job_skill3 = grid_Job_skill3.replace("{skill3}", ele["skill3"].slice(0, 11) + "...");
					}
					else {
						grid_Job_skill3 = grid_Job_skill3.replace("{skill3}", ele["skill3"]);
					}
				}
				else {
					grid_Job_skill3 = "";
				}

				$(".list-of-job").append(grid_Job1 + grid_Job_skill1 + grid_Job_skill2 + grid_Job_skill3 + grid_Job2);
			});
			console.log(`list_of_job:`, list_of_job);
		}

		$(document).ready(function () {
			show_all_job();
			$(".step-marks").remove();
			$(".step-labels").remove();
			$("#input_mySlider1").remove();
			$("#input_mySlider2").remove();
			$("#input_mySlider3").remove();
		});

		// setup slider HTML, then call the following method with the values
		function setupSlider(id, vals, initialVal) {
			$(`#${id}`).append($('<div>').addClass('step-marks'));
			$(`#${id}`).append($('<div>').addClass('step-labels'));
			$(`#${id}`).append($('<input type="range" step="0.1" id="' + 'input_' + id + '">'));

			var min = 2.5;
			var max = 10;

			// initialise slider vals
			$(`#${id} input[type=range]`).attr({ min: min, max: max }).val(initialVal);

			vals.forEach((x, i) => {
				if (i < vals.length - 1) {
					$(`#${id} .step-marks`).append($("<div>"));
				}
				var label = $("<span>").text(x).on('click', () => $(`#${id} input[type=range]`).val(i));
				$(`#${id} .step-labels`).append(label);
			});

			var length = vals.length;
			var multiply = length / (length - 1);
			var widthVal = `calc(100% * ${multiply} - 25px)`;
			var marginVal = `calc(${widthVal} / ${length * -2} + 10px)`;

			$(`#${id} .step-labels`).css("width", widthVal);
			$(`#${id} .step-labels`).css("margin-left", marginVal);
			$(`#${id}`).show();
		}

		/*---slider range----*/
		var score_slider1, score_slider2, score_slider3, pre_click_slider1 = -1, pre_click_slider2 = -1, pre_click_slider3 = -1;

		function set_slider_range1(value1) {
			pre_click_slider1 = -1;
			setupSlider('mySlider1', ["พอได้เล็กน้อย", "พื้นฐาน", "ดี", "ยอดเยี่ยม"], value1);
			if (document.getElementById("each_skill1").value == 'none') {
				document.getElementById("input_mySlider1").disabled = true;
			}
			else {
				document.getElementById("input_mySlider1").disabled = false;
			}
			document.getElementById("each_skill1").addEventListener("click", function () {
				var skill_job_1 = document.getElementById("each_skill1").value;
				if (skill_job_1 != 'none' && skill_job_1 != pre_click_slider1) {
					document.getElementById("input_mySlider1").disabled = false;
					document.getElementById("input_mySlider1").value = "6.25";
					document.getElementById("input_mySlider1").style.background = 'linear-gradient(to right, #f0a143 0%, #f0a143 ' + 50 + '%, #c4c4c4 ' + 50 + '%, #c4c4c4 100%)';
					pre_click_slider1 = skill_job_1;
					score_slider1 = "6.25";
				}
				else if (skill_job_1 == 'none') {
					document.getElementById("input_mySlider1").disabled = true;
					document.getElementById("input_mySlider1").value = "2.5";
					document.getElementById("input_mySlider1").style.background = 'linear-gradient(to right, #f0a143 0%, #f0a143 ' + 0 + '%, #c4c4c4 ' + 0 + '%, #c4c4c4 100%)';
					pre_click_slider1 = -1;
					score_slider1 = "2.5";
				}
			});
			$(document).on("click", "#reset-skill1", function () {
				$("#each_skill1").prop('selectedIndex', 0);
				document.getElementById("input_mySlider1").value = "2.5";
				document.getElementById("input_mySlider1").disabled = true;
				document.getElementById("input_mySlider1").style.background = 'linear-gradient(to right, #f0a143 0%, #f0a143 ' + 0 + '%, #c4c4c4 ' + 0 + '%, #c4c4c4 100%)';
				pre_click_slider1 = -1;
				score_slider1 = "2.5";
			});
			var slider1 = document.getElementById("input_mySlider1");
			slider1.style.background = 'linear-gradient(to right, #f0a143 0%, #f0a143 ' + (slider1.value - 2.5) / 7.5 * 100 + '%, #c4c4c4 ' + (slider1.value - 2.5) / 7.5 * 100 + '%, #c4c4c4 100%)';

			slider1.oninput = function () {
				//console.log('skill1:', slider1.value);
				score_slider1 = parseFloat(slider1.value).toFixed(1);
				//score_slider1 = slider1.value;
				slider1.style.background = 'linear-gradient(to right, #f0a143 0%, #f0a143 ' + (slider1.value - 2.5) / 7.5 * 100 + '%, #c4c4c4 ' + (slider1.value - 2.5) / 7.5 * 100 + '%, #c4c4c4 100%)';
			}
		}

		function set_slider_range2(value2) {
			pre_click_slider2 = -1;
			setupSlider('mySlider2', ["พอได้เล็กน้อย", "พื้นฐาน", "ดี", "ยอดเยี่ยม"], value2);
			if (document.getElementById("each_skill2").value == 'none') {
				document.getElementById("input_mySlider2").disabled = true;
			}
			else {
				document.getElementById("input_mySlider2").disabled = false;
			}
			document.getElementById("each_skill2").addEventListener("click", function () {
				var skill_job_2 = document.getElementById("each_skill2").value;
				if (skill_job_2 != 'none' && skill_job_2 != pre_click_slider2) {
					document.getElementById("input_mySlider2").disabled = false;
					document.getElementById("input_mySlider2").value = "6.25";
					document.getElementById("input_mySlider2").style.background = 'linear-gradient(to right, #0fe17c 0%, #0fe17c ' + 50 + '%, #c4c4c4 ' + 50 + '%, #c4c4c4 100%)';
					pre_click_slider2 = skill_job_2;
					score_slider2 = "6.25";
				}
				else if (skill_job_2 == 'none') {
					document.getElementById("input_mySlider2").disabled = true;
					document.getElementById("input_mySlider2").value = "2.5";
					document.getElementById("input_mySlider2").style.background = 'linear-gradient(to right, #0fe17c 0%, #0fe17c ' + 0 + '%, #c4c4c4 ' + 0 + '%, #c4c4c4 100%)';
					pre_click_slider2 = -1;
					score_slider2 = "2.5";
				}
			});
			$(document).on("click", "#reset-skill2", function () {
				$("#each_skill2").prop('selectedIndex', 0);
				document.getElementById("input_mySlider2").disabled = true;
				document.getElementById("input_mySlider2").value = "2.5";
				document.getElementById("input_mySlider2").style.background = 'linear-gradient(to right, #0fe17c 0%, #0fe17c ' + 0 + '%, #c4c4c4 ' + 0 + '%, #c4c4c4 100%)';
				pre_click_slider2 = -1;
				score_slider2 = "2.5";
			});
			var slider2 = document.getElementById("input_mySlider2");
			slider2.style.background = 'linear-gradient(to right, #0fe17c 0%, #0fe17c ' + (slider2.value - 2.5) / 7.5 * 100 + '%, #c4c4c4 ' + (slider2.value - 2.5) / 7.5 * 100 + '%, #c4c4c4 100%)';
			slider2.oninput = function () {
				//console.log('skill2:', slider2.value);
				//score_slider2 = slider2.value;
				score_slider2 = parseFloat(slider2.value).toFixed(1);
				slider2.style.background = 'linear-gradient(to right, #0fe17c 0%, #0fe17c ' + (slider2.value - 2.5) / 7.5 * 100 + '%, #c4c4c4 ' + (slider2.value - 2.5) / 7.5 * 100 + '%, #c4c4c4 100%)';
			}
		}

		function set_slider_range3(value3) {
			pre_click_slider3 = -1;
			setupSlider('mySlider3', ["พอได้เล็กน้อย", "พื้นฐาน", "ดี", "ยอดเยี่ยม"], value3);
			if (document.getElementById("each_skill3").value == 'none') {
				document.getElementById("input_mySlider3").disabled = true;
			}
			else {
				document.getElementById("input_mySlider3").disabled = false;
			}
			document.getElementById("each_skill3").addEventListener("click", function () {
				var skill_job_3 = document.getElementById("each_skill3").value;
				if (skill_job_3 != 'none' && skill_job_3 != pre_click_slider3) {
					document.getElementById("input_mySlider3").disabled = false;
					document.getElementById("input_mySlider3").value = "6.25";
					document.getElementById("input_mySlider3").style.background = 'linear-gradient(to right, #c98a11 0%, #c98a11 ' + 50 + '%, #c4c4c4 ' + 50 + '%, #c4c4c4 100%)';
					pre_click_slider3 = skill_job_3;
					score_slider3 = "6.25";
				}
				else if (skill_job_3 == 'none') {
					document.getElementById("input_mySlider3").disabled = true;
					document.getElementById("input_mySlider3").value = "2.5";
					document.getElementById("input_mySlider3").style.background = 'linear-gradient(to right, #c98a11 0%, #c98a11 ' + 0 + '%, #c4c4c4 ' + 0 + '%, #c4c4c4 100%)';
					pre_click_slider3 = -1;
					score_slider3 = "2.5";
				}
			});
			$(document).on("click", "#reset-skill3", function () {
				$("#each_skill3").prop('selectedIndex', 0);
				document.getElementById("input_mySlider3").disabled = true;
				document.getElementById("input_mySlider3").value = "2.5";
				document.getElementById("input_mySlider3").style.background = 'linear-gradient(to right, #c98a11 0%, #c98a11 ' + 0 + '%, #c4c4c4 ' + 0 + '%, #c4c4c4 100%)';
				pre_click_slider3 = -1;
				score_slider3 = "2.5";
			});
			var slider3 = document.getElementById("input_mySlider3");
			slider3.style.background = 'linear-gradient(to right, #c98a11 0%, #c98a11 ' + (slider3.value - 2.5) / 7.5 * 100 + '%, #c4c4c4 ' + (slider3.value - 2.5) / 7.5 * 100 + '%, #c4c4c4 100%)';
			slider3.oninput = function () {
				//console.log('skill3:', slider3.value);
				//score_slider3 = slider3.value;
				score_slider3 = parseFloat(slider3.value).toFixed(1);
				slider3.style.background = 'linear-gradient(to right, #c98a11 0%, #c98a11 ' + (slider3.value - 2.5) / 7.5 * 100 + '%, #c4c4c4 ' + (slider3.value - 2.5) / 7.5 * 100 + '%, #c4c4c4 100%)';
			}
		}

		function removeOptionsJob(selectElement) {
			var i, L = selectElement.options.length - 1;
			for (let i = L; i >= 1; i--) {
				selectElement.remove(i);
			}
		}

		var mapEngNameJob = {};

		function GetJob(text) {
			fetch(ApplicationURL.backend+"register/jobtitle",
				{ method: "GET", })
				.then(response => response.json())
				//.then(response => response.result)
				.then((raws) => {
					//console.log(raws);
					raws.forEach((eleJob) => {
						var job_now = eleJob.THName;
						var job_now_eng = eleJob.Name;
						//console.log(job_now);
						$('#nm_job').append($('<option />').val(job_now).html(job_now));
						mapEngNameJob[job_now] = job_now_eng;
					});

				}).catch((error) => {
					console.log(error);
				});
		}
		GetJob();
		var jobname2findskill;
		function GetSkill(jobname2findskill) {
			fetch(ApplicationURL.backend+`register/` + jobname2findskill + `/skill`,
				{ method: "GET", })
				.then(response => response.json())
				//.then(response => response.result)
				.then((raws) => {
					//console.log(raws);
					raws.forEach((eleSkill, index) => {
						var skill_now = eleSkill.skill;
						//var job_now_eng = eleSkill.Name;
						$('#each_skill1').append($('<option />').val(skill_now).html(skill_now));
						$('#each_skill2').append($('<option />').val(skill_now).html(skill_now));
						$('#each_skill3').append($('<option />').val(skill_now).html(skill_now));
					});
				}).catch((error) => {
					console.log(error);
				});
		}

		$(document).on("change", "#each_skill2", function () {
			if (document.getElementById("each_skill2").value == document.getElementById("each_skill1").value) {
				$("#each_skill2").addClass("is-invalid");
			}
			else {
				$("#each_skill2").removeClass("is-invalid");
			}
		});

		$(document).on("change", "#each_skill3", function () {
			if (document.getElementById("each_skill3").value == document.getElementById("each_skill1").value || document.getElementById("each_skill3").value == document.getElementById("each_skill2").value) {
				$("#each_skill3").addClass("is-invalid");
			}
			else {
				$("#each_skill3").removeClass("is-invalid");
			}
		});

		$(document).on("change", "#nm_job", function () {
			if (document.getElementById("nm_job").selectedIndex != 0) {
				$("#nm_job").removeClass("is-invalid");
				$('#each_skill1').prop("disabled", false);
				$('#each_skill1').removeClass("dis_input3");
				$('#each_skill2').prop("disabled", false);
				$('#each_skill2').removeClass("dis_input3");
				$('#each_skill3').prop("disabled", false);
				$('#each_skill3').removeClass("dis_input3");
				$('#obj-job-01').prop("disabled", false);
				$("#obj-job-01").removeClass("dis_input3");
				let tomapjobeng = mapEngNameJob[document.getElementById("nm_job").value];
				//console.log("mapEngNameJob:", mapEngNameJob);
				//console.log("tomapjobeng:", tomapjobeng);
				$("#each_skill1").prop('selectedIndex', 0);
				$("#each_skill2").prop('selectedIndex', 0);
				$("#each_skill3").prop('selectedIndex', 0);
				removeOptionsJob(document.getElementById("each_skill1"));
				removeOptionsJob(document.getElementById("each_skill2"));
				removeOptionsJob(document.getElementById("each_skill3"));
				GetSkill(jobname2findskill = tomapjobeng);

			}
			$(".step-marks").remove();
			$(".step-labels").remove();
			$("#input_mySlider1").remove();
			$("#input_mySlider2").remove();
			$("#input_mySlider3").remove();
			set_slider_range1(2.5);
			set_slider_range2(2.5);
			set_slider_range3(2.5);
		});

		$(document).on("click", ".frame_add_job_interest", function () {
			/*$('#tab01').addClass('current2');
			$('.tabs_pop li').addClass('current2');
			$('.tab-pane_pop').addClass('current2');*/
			$('#each_skill1').prop("disabled", true);
			$('#each_skill1').addClass("dis_input3");
			$('#each_skill2').prop("disabled", true);
			$('#each_skill2').addClass("dis_input3");
			$('#each_skill3').prop("disabled", true);
			$('#each_skill3').addClass("dis_input3");
			$("#nm_job").removeClass("is-invalid");
			choose_function = 2;
			if (list_of_job.length < 3) {
				$('#exampleModalJob').modal('toggle');
			}
			set_slider_range1(2.5);
			set_slider_range2(2.5);
			set_slider_range3(2.5);
			$('#submit-job11').text('เพิ่ม');
			$("#obj-job-01").val('');
			$("#pos-del-obj-button1").hide();
			$("#obj-job-02").val('');
			$("#pos-del-obj-button2").hide();
			$("#obj-job-03").val('');
			$("#pos-del-obj-button3").hide();
			$('#obj-job-01').prop("disabled", true);
			$("#obj-job-01").addClass("dis_input3");
			$('#obj-job-02').prop("disabled", true);
			$("#obj-job-02").addClass("dis_input3");
			$('#obj-job-03').prop("disabled", true);
			$("#obj-job-03").addClass("dis_input3");
		});

		var for_edit, id_list_job_edit;
		$(document).on("click", "#edit-job", function () {
			$("#nm_job").removeClass("is-invalid");
			id_list_job_edit = $(this).parents().parents().attr('id');
			//console.log(`edit:`, id_list_job_edit);
			for_edit = list_of_job.find(function (post, index_del) {
				if (post.id == id_list_job_edit)
					return true;
			});
			$('#each_skill1').prop("disabled", false);
			$('#each_skill1').removeClass("dis_input3");
			$('#each_skill2').prop("disabled", false);
			$('#each_skill2').removeClass("dis_input3");
			$('#each_skill3').prop("disabled", false);
			$('#each_skill3').removeClass("dis_input3");
			document.getElementById("nm_job").selectedIndex = for_edit["name_job_select"];
			let tomapjobeng = mapEngNameJob[document.getElementById("nm_job").value];
			GetSkill(jobname2findskill = tomapjobeng);
			set_slider_range1(for_edit["score_skill1"]);
			set_slider_range2(for_edit["score_skill2"]);
			set_slider_range3(for_edit["score_skill3"]);
			choose_function = 1;
			$('#submit-job11').text('ยืนยัน');
			$('#obj-job-01').prop("disabled", false);
			$("#obj-job-01").removeClass("dis_input3");
			$("#obj-job-01").val(for_edit["obj1"]);
			$("#obj-job-02").val(for_edit["obj2"]);
			$("#obj-job-03").val(for_edit["obj3"]);

			if (for_edit["obj1"] == "") {
				$("#pos-del-obj-button1").hide();
			}
			else {
				$("#pos-del-obj-button1").show();
			}
			if (for_edit["obj2"] == "") {
				$("#pos-del-obj-button2").hide();
			}
			else {
				$("#pos-del-obj-button2").show();
			}
			if (for_edit["obj3"] == "") {
				$("#pos-del-obj-button3").hide();
			}
			else {
				$("#pos-del-obj-button3").show();
			}

			if ($("#obj-job-01").val() != "") {
				$('#obj-job-02').prop("disabled", false);
				$("#obj-job-02").removeClass("dis_input3");
				if ($("#obj-job-02").val() != "") {
					$('#obj-job-03').prop("disabled", false);
					$("#obj-job-03").removeClass("dis_input3");
				}
				else {
					$('#obj-job-03').prop("disabled", true);
					$("#obj-job-03").addClass("dis_input3");
				}
			}

			$('#exampleModalJob').modal('toggle');
			setTimeout(function () {
				if (for_edit["skill1"] != "none") {
					$("#each_skill1").prop('selectedIndex', for_edit["skill1_select"]);
					document.getElementById("input_mySlider1").disabled = false;
				}
				if (for_edit["skill2"] != "none") {
					$("#each_skill2").prop('selectedIndex', for_edit["skill2_select"]);
					document.getElementById("input_mySlider2").disabled = false;
				}
				if (for_edit["skill3"] != "none") {
					$("#each_skill3").prop('selectedIndex', for_edit["skill3_select"]);
					document.getElementById("input_mySlider3").disabled = false;
				}
			}, 280);
		});

		document.getElementById("submit-job11").addEventListener("click", function () {
			var name_job = document.getElementById("nm_job").value;
			var skill_job_1 = document.getElementById("each_skill1").value;
			var skill_job_2 = document.getElementById("each_skill2").value;
			var skill_job_3 = document.getElementById("each_skill3").value;
			var obj_job_1 = document.getElementById("obj-job-01").value;
			var obj_job_2 = document.getElementById("obj-job-02").value;
			var obj_job_3 = document.getElementById("obj-job-03").value;
			var score_slider11 = document.getElementById("input_mySlider1").value;
			var score_slider12 = document.getElementById("input_mySlider2").value;
			var score_slider13 = document.getElementById("input_mySlider3").value;
			var push2list = {};
			if (document.getElementById("nm_job").value == '') {
				//alert("kuay");
				$("#nm_job").addClass("is-invalid");
			}
			else if ((skill_job_2 == skill_job_1 || skill_job_3 == skill_job_1 || skill_job_2 == skill_job_3) && skill_job_1 != 'none' && skill_job_2 != 'none' && skill_job_3 != 'none') {
				//$("#each_skill2").addClass("is-invalid");
				//can't submit
			}
			else if (list_of_job.findIndex(e => e.name_job === document.getElementById("nm_job").value) != -1 && choose_function == 2) {
				$("#nm_job").addClass("is-invalid");
			}
			else {
				if (skill_job_1 == 'none') {
					score_slider11 = "2.5";
				}
				if (skill_job_2 == 'none') {
					score_slider12 = "2.5";
				}
				if (skill_job_3 == 'none') {
					score_slider13 = "2.5";
				}
				if (choose_function == 1) { //edit job after add
					console.log("edit!!!!!!");
					for_edit["name_job"] = name_job;
					for_edit["name_job_select"] = $("#nm_job").prop('selectedIndex');
					for_edit["skill1"] = skill_job_1;
					for_edit["skill1_select"] = document.getElementById("each_skill1").selectedIndex;
					for_edit["score_skill1"] = parseFloat(score_slider11).toFixed(1);
					for_edit["skill2"] = skill_job_2;
					for_edit["skill2_select"] = document.getElementById("each_skill2").selectedIndex;
					for_edit["score_skill2"] = parseFloat(score_slider12).toFixed(1);
					for_edit["skill3"] = skill_job_3;
					for_edit["skill3_select"] = document.getElementById("each_skill3").selectedIndex;
					for_edit["score_skill3"] = parseFloat(score_slider13).toFixed(1);
					for_edit["obj1"] = obj_job_1;
					for_edit["obj2"] = obj_job_2;
					for_edit["obj3"] = obj_job_3;
				}
				else if (choose_function == 2) { //add job in list
					push2list = {
						id: create_UUID(),
						job_pos: 0,
						name_job: name_job,
						name_job_select: $("#nm_job").prop('selectedIndex'),
						skill1: skill_job_1,
						skill1_select: document.getElementById("each_skill1").selectedIndex,
						score_skill1: parseFloat(score_slider11).toFixed(1),
						skill2: skill_job_2,
						skill2_select: document.getElementById("each_skill2").selectedIndex,
						score_skill2: parseFloat(score_slider12).toFixed(1),
						skill3: skill_job_3,
						skill3_select: document.getElementById("each_skill3").selectedIndex,
						score_skill3: parseFloat(score_slider13).toFixed(1),
						obj1: obj_job_1,
						obj2: obj_job_2,
						obj3: obj_job_3
					}
					list_of_job.push(push2list);
					get_job_id(list_of_job, 1);
					console.log(list_of_job);
				}
				$('#nm_job').prop('selectedIndex', 0);
				$("#obj-job-01").val('');
				$("#pos-del-obj-button1").hide();
				$("#obj-job-02").val('');
				$("#pos-del-obj-button2").hide();
				$("#obj-job-03").val('');
				$("#pos-del-obj-button3").hide();
				$('#exampleModalJob').modal('hide');
				$(".list-of-job").empty();
				show_all_job()
				$(".step-marks").remove();
				$(".step-labels").remove();
				$("#input_mySlider1").remove();
				$("#input_mySlider2").remove();
				$("#input_mySlider3").remove();
				if (list_of_job.length < 3) {
					$(".limit-job-pos-3").removeClass("limit-job-pos-3-red");
					$('.limit-job-pos-3').text('ท่านสามารถเพิ่มตำแหน่งงานที่สนใจได้สูงสุด 3 อัน');
				}
				else {
					$(".frame_add_job_interest").hide();
					$(".limit-job-pos-3").addClass("limit-job-pos-3-red");
					$('.limit-job-pos-3').text('*ท่านเพิ่มตำแหน่งงานที่สนใจครบจำนวนแล้ว');
				}
			}
		});

		var id_list_job_del;

		$(document).on("click", "#del-job", function () {
			id_list_job_del = $(this).parents().parents().attr('id');
			//console.log("id_list_job111:", id_list_job_del);
			$('#exampleModal_remove_job').modal('toggle');
		});

		$(document).on('click', "#summit-to-delete", function () {
			var removeIndex = list_of_job.findIndex(function (post, index_del) {
				if (post.id == id_list_job_del)
					return true;
			});
			//console.log("id_list_job:", id_list_job_del);
			list_of_job.splice(removeIndex, 1);
			//console.log(`delete job id:`, removeIndex);
			$('#exampleModal_remove_job').modal('hide');
			$(".list-of-job").empty();
			//console.log(list_of_job);
			get_job_id(list_of_job, 1);
			show_all_job()
			$(".step-marks").remove();
			$(".step-labels").remove();
			$("#input_mySlider1").remove();
			$("#input_mySlider2").remove();
			$("#input_mySlider3").remove();
			if (list_of_job.length < 3) {
				$(".frame_add_job_interest").show();
				$(".limit-job-pos-3").removeClass("limit-job-pos-3-red");
				$('.limit-job-pos-3').text('ท่านสามารถเพิ่มตำแหน่งงานที่สนใจได้สูงสุด 3 อัน');
			}
		});

		$(document).on('click', "#hide-modal-tab6", function () {
			$('#exampleModalJob').modal('hide');
		});

		$(document).on('hide.bs.modal', "#exampleModalJob", function () {
			$("#obj-job-01").val('');
			$("#obj-job-02").val('');
			$("#obj-job-03").val('');
			$('#nm_job').prop('selectedIndex', 0);
			$(".step-marks").remove();
			$(".step-labels").remove();
			$("#input_mySlider1").remove();
			$("#input_mySlider2").remove();
			$("#input_mySlider3").remove();
			$("#each_skill1").prop('selectedIndex', 0);
			$("#each_skill2").prop('selectedIndex', 0);
			$("#each_skill3").prop('selectedIndex', 0);
			removeOptionsJob(document.getElementById("each_skill1"));
			removeOptionsJob(document.getElementById("each_skill2"));
			removeOptionsJob(document.getElementById("each_skill3"));

			if (tabId == "tab02") {
				$('.tabs_pop li').removeClass('current2');
				$('.tab-pane_pop').removeClass('current2');
				$('#prayut-nha-hee').addClass('current2');
				$('#tab01').addClass('current2');
			}
		});

		$(document).on('click', "#hide-modal-delete", function () {
			$('#exampleModal_remove_job').modal('hide');
		});

		/*--- textarea obj ----*/
		$("#pos-del-obj-button1").hide();
		$("#pos-del-obj-button2").hide();
		$("#pos-del-obj-button3").hide();

		$(document).on("click", "#pos-del-obj-button1", function () {
			if ($("#obj-job-02").val() == "" && $("#obj-job-03").val() == "") {
				$("#obj-job-01").val('');
				$("#pos-del-obj-button1").hide();
				$('#obj-job-02').prop("disabled", true);
				$("#obj-job-02").addClass("dis_input3");
			}
			else {
				if ($("#obj-job-02").val() != "" && $("#obj-job-03").val() != "") {
					$("#obj-job-01").val($("#obj-job-02").val());
					$("#obj-job-02").val($("#obj-job-03").val());
					$("#obj-job-03").val('');
					$("#pos-del-obj-button3").hide();
					$('#obj-job-03').prop("disabled", true);
					$("#obj-job-03").addClass("dis_input3");
				}
				else if ($("#obj-job-02").val() != "" && $("#obj-job-03").val() == "") {
					$("#obj-job-01").val($("#obj-job-02").val());
					$("#obj-job-02").val('');
					$("#pos-del-obj-button2").hide();
					$('#obj-job-03').prop("disabled", true);
					$("#obj-job-03").addClass("dis_input3");
				}
			}
		});

		$(document).on("click", "#pos-del-obj-button2", function () {
			if ($("#obj-job-01").val() != "" && $("#obj-job-03").val() != "") {
				$("#obj-job-02").val($("#obj-job-03").val());
				$("#obj-job-03").val('');
				$("#pos-del-obj-button3").hide();
			}
			else if ($("#obj-job-01").val() != "" && $("#obj-job-03").val() == "") {
				$("#obj-job-02").val('');
				$("#pos-del-obj-button2").hide();
				$('#obj-job-03').prop("disabled", true);
				$("#obj-job-03").addClass("dis_input3");
			}
		});

		$(document).on("click", "#pos-del-obj-button3", function () {
			$("#obj-job-03").val('');
			$("#pos-del-obj-button3").hide();
		});

		$(document).on("change", "#obj-job-01", function () {
			if ($("#obj-job-01").val() != "") {
				$("#pos-del-obj-button1").show();
				$('#obj-job-02').prop("disabled", false);
				$("#obj-job-02").removeClass("dis_input3");
			}
			else {
				$("#pos-del-obj-button1").hide();
				if ($("#obj-job-02").val() == "") {
					$('#obj-job-02').prop("disabled", true);
					$("#obj-job-02").addClass("dis_input3");
				}
			}
		});
		$(document).on("change", "#obj-job-02", function () {
			if ($("#obj-job-02").val() != "") {
				$("#pos-del-obj-button2").show();
				$('#obj-job-03').prop("disabled", false);
				$("#obj-job-03").removeClass("dis_input3");
			}
			else {
				$("#pos-del-obj-button2").hide();
				if ($("#obj-job-03").val() == "") {
					$('#obj-job-03').prop("disabled", true);
					$("#obj-job-03").addClass("dis_input3");
				}
			}
		});
		$(document).on("change", "#obj-job-03", function () {
			if ($("#obj-job-03").val() != "") {
				$("#pos-del-obj-button3").show();
			}
			else {
				$("#pos-del-obj-button3").hide();
			}
		});
	}

	componentWillUnmount() {
		window.removeEventListener('load', this.handleLoad)
		$(document).unbind();
	}

	handleLoad() {
		console.log("YEAH!");
	}


	render() {
		if (this.state.render) {
			return (
				<LoadingS />
			)
		}
		else {
			return (
				<div className="Register">
					<Navbarlogo />
					<InformationHeader />
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
					<form class="needs-validation" novalidate autocomplete="off">
						<div>
							<div class="tab-content" id="registab1-content">
								<Registab1 />
							</div>
							<div class="tab-content" id="registab2-content">
								<Registab2 />
							</div>
							<div class="tab-content" id="registab3-content">
								<Registab3 />
							</div>
							<div class="tab-content" id="registab4-content">
								<Registab4 />
							</div>
							<div class="tab-content" id="registab5-content">
								<Registab5 />
							</div>
							<div class="tab-content" id="registab6-content">
								<Registab6 />
							</div>
							<div class="tab-content" id="registab7-content">
								<Registab7 />
							</div>
						</div>
						<div class="col block-right">
							<button class="btn btn-cta-primary-yellowwide round profile-button" href="#" target="_blank" type="submit" id="continue2">ยืนยัน</button>
						</div>
					</form>
				</div>
			);
		}
	}
}

export default Register;