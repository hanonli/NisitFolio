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
import ApplicationURL from './Components/path';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';
import thLocale from 'date-fns/locale/th';
import { uploadFile } from 'react-s3';
import { v4 as uuidv4 } from 'uuid';
import { isValidDate } from './Components/CheckValidDateFormat';

var certdata = [], workdata = [], jobdata = [],sideskilldata=[],list_tab1=[],list_tab2=[];
var list_of_high = [], list_of_aca = [];

/* THIS FILE IS FOR DATA-EDITING TEST, CAN'T USE FUNC RIGHT NOW*/
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

class Editprofile extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			data: [],
			render: false,
			statusRepass: false,
			statusParent: false
		}
	}

	componentDidMount() {
		window.addEventListener('load', this.handleLoad);
		/********************Zone Define variables & important functions ******************/
		certdata = []; workdata = []; jobdata = []; sideskilldata=[]; list_tab1=[]; list_tab2=[];
		var token = cookie.load('login-token')
		console.log('Your Token is: ' + token);
		var Datasetstate = this;

		/*window.onload = () => {
			//const myInput1 = document.getElementById('pass05');
			const myInput2 = document.getElementById('pass06');
			//myInput1.onpaste = e => e.preventDefault();
			myInput2.onpaste = e => e.preventDefault();
		}*/

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
				$('.edit-pass-now').hide();
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
				$('.edit-pass-now').hide();
			}
			console.log("Yahaha!");
			$('#tab-1').on('click', function () {
				$('.tab-content').hide();
				$('.tab-list-item').removeClass('tab-list-active');
				$('#tab-1').addClass('tab-list-active')
				$('#Edittab1-content').show();
				$('#basic-date-picker1').attr('placeholder', 'วัน/เดือน/ปี');
				$('.edit-pass-now').hide();
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

		$('#confirmEdit').click(async function () {
			var BDDate = $('#basic-date-picker1').val();
			var last_province = $('#province').val();
			var last_city = $('#townny').val();
			var last_aboutme = $('#aboutme2').val();
			if (RequireCount_pass == 1) {
				var last_first = $('#re01').val();
				var last_last = $('#re02').val();
				var last_gender = $('#sexgen').val();
				var last_pass = $('#pass05').val();
				console.log('You Pass!');
				Datasetstate.setState({ render: false });
				await UploadProfileToS3(file_profilepic);
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
				//console.log('grade = ' + last_grade);
				//console.log(last_eduyear);
				var FormEdit2 = {
					Password: last_pass,
					Firstname: last_first,
					Lastname: last_last,
					Birthday: BDDate,
					Gender: last_gender,
					AboutMe: last_aboutme,
					Province: last_province,
					City: last_city,
				}
				//console.log(FormEdit2);
				console.log(JSON.stringify(FormEdit2));
				console.log(FormEdit2);
				//PatchEditParent(FormEdit2);
			}
			else {
				console.log('You Wrong!');
				Datasetstate.setState({ render: true });
				$('.tab-content').hide();
				$('.tab-list-item').removeClass('tab-list-active');
				$('#tab-1').addClass('tab-list-active')
				$('#Edittab1-content').show();
			}
		});

		function UploadProfileToS3(file){
			uploadFile(file, config)
				.then(data => { 
					UploadProfile(data.location);
				})
				.catch(err => console.error(err))
		}

		function UploadProfile(picUrl){
			//alert(111);
				var datapic = {
					"ProfilePic":picUrl,
					"ProfilePicBase64":picUrl,
				}
				
				fetch(ApplicationURL.backend+"Datasetstateter/",{
				method: "PATCH",
				headers: {
					'Authorization': 'Bearer '+Datasetstate.state.token,
					"Access-Control-Allow-Origin": "*",
					"Access-Control-Allow-Methods": "*",
					"Access-Control-Allow-Credentials": true,
					"Content-Type": "application/json"
				},
				body: JSON.stringify(datapic),
			})
				.then(response => response.json())
				.then((datas) => {
					//console.log(datas);
					console.log('patch complete!');
				}).catch((error) => {
					console.log('Token Error!');
					//this.setState({ redirect: "/landing" });
				});
		}

		console.log("HELLO LV4!");
		var avatar11 = document.getElementById('avatar11');
		var image = document.getElementById('image');
		var input = document.getElementById('input');
		var $alert = $('.alert');
		var $modal = $('#modal');
		var cropper;
		var file_profilepic;

		avatar11.addEventListener('click', function () {
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
				initialAvatarURL = avatar11.src;
				avatar11.src = canvas.toDataURL();
				//console.log(avatar11.src);
				$alert.removeClass('alert-success alert-warning');
				canvas.toBlob(function (blob) {
					//var formData = new FormData();
					//formData.append('avatar', blob, 'avatar.jpg');
					//console.log("HELLO LV5!");
					file_profilepic = new File([blob], 'user_pf_' + uuidv4(), { lastModified: new Date().getTime(), type: blob.type });
					console.log(file_profilepic);
					UploadProfileToS3(file_profilepic);
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
				//console.log(FormDatasetstate);
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

		});

		/******************************** Rung Zone ***********************************/
	/*Tab2*/
		function GetProvince() {
			fetch("https://thaiaddressapi-thaikub.herokuapp.com/v1/thailand/provinces",
				{ method: "GET", })
				.then(response => response.json())
				//.then(response => response.result)
				.then((raw) => {
					//console.log(raw);
					//alert(Datasetstate.state.data.Province);
					raw.data.forEach((entry) => {
						//console.log(entry.province);
						var pro_now = entry.province;
						if(pro_now!=Datasetstate.state.data.Province){
							$('#province').append($('<option />').val(pro_now).html(pro_now));
						}
						else{
							//alert(Datasetstate.state.data.Province);
							$('#province').append($('<option />').val(pro_now).html(pro_now).attr('selected',true));
						}
					});
				}).catch((error) => {
					console.log(error);
				});

		}

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
					//console.log(raws);
					raws.data.forEach((entrys) => {
						//console.log(entrys);
						var dis_now = entrys;
						if(dis_now != Datasetstate.state.data.City){
							$('#townny').append($('<option />').val(dis_now).html(dis_now));
						}
						else{
							$('#townny').append($('<option />').val(dis_now).html(dis_now).attr('selected',true));
						}
						
					});

				}).catch((error) => {
					console.log(error);
				});

		}
		function PatchEditParent(pack) {
			console.log(pack);
			//console.log(pack);
			//console.log(JSON.stringify(pack));
			fetch(ApplicationURL.backend+"register",
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
					//console.log(response.message);
					if (!response.ok) {
						Datasetstate.setState({ render: false });
						throw Error(response.statusText);
					}
					else {
						console.log("ok");
						Datasetstate.setState({ render: true });
						alert('Patch Success');
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

		/**************************Zone GetDatas ***************************/
		function GetDatas() {
			return new Promise((resolve, reject) => {
				//var token = cookie.load('login-token')
				//console.log('Your Token is: ' + token);
				fetch(ApplicationURL.backend+"register/getinfo", {
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
						console.log('Datasetstate.state.data :');
						console.log(Datasetstate.state.data);
						/*Zone to use datas*/
						//console.log(Datasetstate.state.data.Degree);
						list_tab1.push({
							Firstname : Datasetstate.state.data.Firstname,
							Lastname : Datasetstate.state.data.Lastname,
							Email : Datasetstate.state.data.Email,
							Password : Datasetstate.state.data.Password,
							Gender : Datasetstate.state.data.Gender,
							ProfilePic : Datasetstate.state.data.ProfilePic,
							Birthday : Datasetstate.state.data.Birthday,
						});
						//console.log(list_tab1);
						list_tab2.push({
							Province : Datasetstate.state.data.Province,
							City : Datasetstate.state.data.City,
							Aboutme : Datasetstate.state.data.AboutMe,
						});
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
						});
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
							let reeggiist4_cb = false;
							if (Datasetstate.state.data.Work_End_Year[index] === 9999 && Datasetstate.state.data.Work_End_Month[index] === 99) {
								reeggiist4_cb = true;
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
								reeggiist4_cb: reeggiist4_cb,
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
						Datasetstate.state.data.AdditionalSkill_id.forEach((ele, index) => {
							sideskilldata.push({
								sideskill_id: ele,
								sideskillName: Datasetstate.state.data.SoftSkill[index],
								isFetch: true
							})
						});
						GetProvince();
						if(Datasetstate.state.data.Province != "" ){GetDistrict(Datasetstate.state.data.Province)};
						//alert(Datasetstate.state.data.AboutMe);
						/*if(Datasetstate.state.data.AboutMe != "" ){
							$('#aboutme2').val(Datasetstate.state.data.AboutMe);
						};*/
						resolve();
					});
				console.log('this is job data : ' + jobdata);
				//alert('Success!!');

			}
			)
		}
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
									<div class="topData2-content" id="SetstatusParentZone">
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
							<Edittab1 myprivate_data={list_tab1}/>
						</div>
						<div class="tab-content" id="Edittab2-content">
							<Edittab2 myaboutme_data={list_tab2}/>
						</div>
						<div class="tab-content" id="Edittab3-content">
							<Edittab3 myaca_data={list_of_aca} myhigh_data={list_of_high}/>
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
							<Edittab7 myssk_data={sideskilldata}/>
						</div>
					</div>
					<div class="col block-right">
						<button class="btn btn-cta-primary-yellowwide round profile-button" href="#" target="_blank" type="submit" id="confirmEdit">เสร็จสิ้น</button>
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