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
import Registab6 from "./Components/registab6";
import Registab7 from "./Components/registab7";
import $ from 'jquery';
import cookie from 'react-cookies';
import LoadingS from './Components/loadingS';

class Editresume extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			data : [],
			render : false
		}
	}

	componentDidMount() {
		var list_of_high=[],list_of_aca=[];

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
        console.log('Your Token is: '+token);
		fetch("http://localhost:2000/register/getinfo",{
			method: "GET",
			headers: {
				'Authorization': 'Bearer '+token,	
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
				data : datas,
			})
			 console.log('this.state.data :'+this.state.data);
			 /*Zone to use datas*/
			 console.log(this.state.data.Degree);
			 this.state.data.Degree.forEach(element => {
			if(element=='มัธยมศึกษาตอนปลาย'||element=='ปวช.'){
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
			else{
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

            $('#tab-6').on('click', function () {
				$('.tab-content').hide();
				$('.tab-list-item').removeClass('tab-list-active');
				$('#tab-6').addClass('tab-list-active')
				$('#registab6-content').show();
			});
		});
	}

	render() {
		if(this.state.render==true){
			return (
				<div className="EditResume">
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
					<ol class="tabs-list">
						<li class="tab-list-item tab-list-active" id="tab-1" type="button">ประวัติการศึกษา</li>
						<li class="tab-list-item" id="tab-2" type="button">ประวัติการทำงาน</li>
						<li class="tab-list-item" id="tab-3" type="button">ใบรับรอง</li>
						<li class="tab-list-item" id="tab-4" type="button">งานที่สนใจ</li>
						<li class="tab-list-item" id="tab-5" type="button">ทักษะเสริม</li>
					</ol>
					<form class="needs-validation" novalidate>
						<div>
                            <div class="tab-content" id="registab1-content">
								<Registab7 />
							</div>
							<div class="tab-content" id="registab2-content">
								<Chooseresume1 />
							</div>
							<div class="tab-content" id="registab3-content">
								<Chooseresume2 />
							</div>
							<div class="tab-content" id="registab4-content">
								<Chooseresume3 />
							</div>
							<div class="tab-content" id="registab5-content">
								<Registab6 />
							</div>
							<div class="tab-content" id="registab6-content">
								<Registab7 />
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
		else{
			return (
				<LoadingS />
			)
		}
	}
}		

export default Editresume;