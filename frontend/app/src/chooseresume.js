import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Navbarlogo from './Components/navbarlogo';
import InformationHeader from './Components/informationHeader';
import reportWebVitals from './reportWebVitals';
import { Link } from "react-router-dom";
import Chooseresume1 from "./Components/chooseresume1";
import Chooseresume2 from "./Components/chooseresume2";
import Chooseresume3 from "./Components/chooseresume3";
import Chooseresume4 from "./Components/chooseresume4";
import Chooseresume5 from "./Components/chooseresume5";
import $ from 'jquery';
import cookie from 'react-cookies';
import LoadingS from './Components/loadingS';

var certdata = [], workdata = [];

class Chooseresume extends React.Component {

	constructor(props) {
		super(props);
		this.handleLoad = this.handleLoad.bind(this);
		this.state = {
			data: [],
			render: true,
			list_of_aca: [],
		}
	}

	componentDidMount() {
		window.addEventListener('load', this.handleLoad);
		var list_of_high = [];

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

		function show_all_aca(list_of_aca) {
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
									<div class="layer_icon1" id={no-list-aca} type='button'>\
									</div>\
								</div>`;
				grid_aca2 = grid_aca2.replace("{no-list-aca}", ele["id"]);
				grid_aca1 = grid_aca1.replace("{no_aca}", ele["aca_pos"]);
				//grid_aca1 = grid_aca1.replace("{name_aca}", ele["aca_name"]);
				grid_aca1 = grid_aca1.replace("{degree_aca}", ele["aca_degree"]);
				//grid_aca1 = grid_aca1.replace("{field_aca}", ele["aca_field"]);
				//grid_aca1 = grid_aca1.replace("{faculty_aca}", ele["aca_faculty"]);
				//grid_aca1 = grid_aca1.replace("{year_aca}", ele["aca_year"]);
				grid_aca1 = grid_aca1.replace("{name_aca}", ele["aca_name"]);
				grid_aca1 = grid_aca1.replace("{faculty_aca}", ele["aca_faculty"]);
				if(ele["aca_grade"]=="0.00"){
				grid_aca1 = grid_aca1.replace("{grade_aca}", '-');
				}
				else{
				grid_aca1 = grid_aca1.replace("{grade_aca}", ele["aca_grade"]);
				}
				if(ele["aca_field"]=="none"){
				grid_aca1 = grid_aca1.replace("{field_aca}", '-');
				}
				else{
				grid_aca1 = grid_aca1.replace("{field_aca}", ele["aca_field"]);
				}
				if(ele["aca_year"]=="0"){
				grid_aca1 = grid_aca1.replace("{year_aca}", '-');
				}
				else if(ele["aca_year"]=="9999"){
				grid_aca1 = grid_aca1.replace("{year_aca}", 'กำลังศึกษา');
				}
				else{
				grid_aca1 = grid_aca1.replace("{year_aca}", ele["aca_year"]);
				}
				$(".list-of-aca").append(grid_aca1 + grid_aca2);
				console.log(`list_of_aca:`, list_of_aca);
			});
		}

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
				console.log(datas);
				this.setState({
					data: datas,
				})
				//console.log('this.state.data :' + this.state.data);
				/*Zone to use datas*/
				//console.log(this.state.data.Degree);
				this.state.data.Degree.forEach((element,index) => {
					if (element == 'มัธยมศึกษาตอนปลาย' || element == 'ปวช.') {
						list_of_high.push({
							id: this.state.data.EducationHistory_id[index],
							high_pos: 0,
							high_name: this.state.data.Academy[index],
							high_faculty: 'none',
							high_degree: this.state.data.Degree[index],
							high_grade: this.state.data.Grade[index],
							high_field: this.state.data.Field_of_study[index],
							high_year: this.state.data.Education_End_Year[index],
						});
						get_high_id(list_of_high, 1);
						console.log(list_of_high);
					}
					else {
						this.state.list_of_aca.push({
							id: this.state.data.EducationHistory_id[index],
							aca_pos: 0,
							aca_name: this.state.data.Academy[index],
							aca_faculty: this.state.data.Facalty[index],
							aca_degree: this.state.data.Degree[index],
							aca_grade: this.state.data.Grade[index],
							aca_field: this.state.data.Field_of_study[index],
							aca_year: this.state.data.Education_End_Year[index],
						});
						get_aca_id(this.state.list_of_aca, 1);
						//console.log(this.state.list_of_aca);
					}
				});
				if(this.state.list_of_aca!=[]){
					console.log('My ACA NOT EMPTY!');
					show_all_aca(this.state.list_of_aca);
				}
				/*if(list_of_high!=[]){
					show_all_high();
				}*/
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
			$('.tab-content').hide();
			$('#registab1-content').show();
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

		});
		setTimeout(() => {
			var id_list_aca_check='';
		$('.layer_icon1').on('click',function(){
			id_list_aca_check = $(this).parents().attr('id');
  			alert(`checked:`, id_list_aca_check);
		},3000);
		})
		
	}

	handleLoad() {
		console.log("YEAH!");
	}

	render() {
		if (this.state.render == true) {
			return (
				<div className="ChooseResume">
					<Navbarlogo />
					<header class="header-white">
						<div class="container">
							<div class="row align-items-end">
								<div class="col">
									<div class="topData2-content">
										<h1 class="name inline">เลือกข้อมูลผู้ใช้ที่จะแสดง</h1>
									</div>
								</div>
							</div>
						</div>
					</header>
					<ol class="tabs-list getLeft">
						<li class="tab-list-item tab-list-active" id="tab-1" type="button">ประวัติการศึกษา</li>
						<li class="tab-list-item" id="tab-2" type="button">ประวัติการทำงาน</li>
						<li class="tab-list-item" id="tab-3" type="button">ใบรับรอง</li>
						<li class="tab-list-item" id="tab-4" type="button">ผลงาน</li>
						<li class="tab-list-item" id="tab-5" type="button">ทักษะเสริม</li>
					</ol>
					<form class="needs-validation" novalidate>
						<div>
							<div class="tab-content" id="registab1-content">
								<Chooseresume1 list_of_aca={this.state.list_of_aca}/>
							</div>
							<div class="tab-content" id="registab2-content">
								<Chooseresume2 mywork_data={workdata} />
							</div>
							<div class="tab-content" id="registab3-content">
								<Chooseresume3 mycerti_data={certdata} />
							</div>
							<div class="tab-content" id="registab4-content">
								<Chooseresume4 />
							</div>
							<div class="tab-content" id="registab5-content">
								<Chooseresume5 />
							</div>
						</div>
						<div class="col block-right2">
							<button class="btn btn-cta-primary-blackwide round profile-button" href="/choosenothing" target="_blank" id="cancelChoose">ยกเลิก</button>
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

export default Chooseresume;