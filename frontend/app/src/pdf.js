import labelmake from "labelmake";
import React from 'react';
import LoadingL from './Components/loadingL';
import { Redirect } from "react-router-dom";
import cookie from 'react-cookies'
import tahomo from './font/tahomo';
import basePdf1 from "./pdf-template/template-red";
import basePdf2 from "./pdf-template/template-orange";
import basePdf3 from "./pdf-template/template-yellow";
import basePdf4 from "./pdf-template/template-navy";
import basePdf5 from "./pdf-template/template-blue";
import img from "./bar/js/score1";
import img2 from "./bar/js/score3";
import img3 from "./bar/js/score4";
import img4 from "./bar/js/score5";
import img5 from "./bar/js/score6";
import img6 from "./bar/js/score7";
import img7 from "./bar/js/score8";
import img8 from "./bar/js/score9";
import img9 from "./bar/js/score10";
var fs = require('fs');


class PDF extends React.Component {
	constructor(props) {
		super(props);
		this.handleLoad = this.handleLoad.bind(this);
		this.state = {
			render: false, //Set render state to false
			redirect: null
		}
	 }
	
	componentDidMount() {
		window.addEventListener('load', this.handleLoad);
		var token = cookie.load('login-token')

		let params = new URLSearchParams(document.location.search.substring(1));
		let template = params.get("template");
		let resume = params.get("resume");
		let basePdf =  basePdf1;
		if (template == "red"){
			basePdf = basePdf1;
		}
		else if (template == "orange"){
			basePdf = basePdf2;
		}
		else if (template == "yellow"){
			basePdf = basePdf3;
		}
		else if (template == "navy"){
			basePdf = basePdf4;
		}
		else if (template == "blue"){
			basePdf = basePdf5;
		}

		
		fetch("http://localhost:2000/myresume/",{
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
				var fill1 = "";
				if (datas[resume].First)
					fill1 =  datas[resume].First;

				var fill2 = "";
				if (datas[resume].Last)
					fill2 =  datas[resume].Last;

				var fill3 = "";
				if (datas[resume].interestedJob[0].Job_JobName)
					fill3 = datas[resume].interestedJob[0].Job_JobName;

				var fill4 = "";
				if (datas[resume].Location)
					fill4 = datas[resume].Location;

				var fill5 = "";
				if (datas[resume].AboutMe)
					fill5 = datas[resume].AboutMe;

				var fill6 = "";
				if (datas[resume].Email)
					fill6 = datas[resume].Email;


				var fill7 = "";
				var fill8 = "";
				var fill9 = "";
				var fill10 = "";
				var fill11 = "";
				if (datas[resume].workHistorys[0])
				{
					fill7 = datas[resume].workHistorys[0].Work_JobName ? datas[resume].workHistorys[0].Work_JobName : "";
					fill8 = datas[resume].workHistorys[0].Work_JobType ? datas[resume].workHistorys[0].Work_JobType : "";
					fill9 = datas[resume].workHistorys[0].Work_Company ? datas[resume].workHistorys[0].Work_Company : "";
					if (datas[resume].workHistorys[0].Work_Start_Year && datas[resume].workHistorys[0].Work_End_Year)
						fill10 = datas[resume].workHistorys[0].Work_Start_Year	+ "-" + datas[resume].workHistorys[0].Work_End_Year + "  |";
					fill11 = datas[resume].workHistorys[0].Work_Infomation ? datas[resume].workHistorys[0].Work_Infomation : "";
				}

				var fill12 = "";
				var fill13 = "";
				var fill14 = "";
				var fill15 = "";
				var fill16 = "";
				if (datas[resume].workHistorys[1])
				{
					fill12 = datas[resume].workHistorys[1].Work_JobName ? datas[resume].workHistorys[1].Work_JobName : "";
					fill13 = datas[resume].workHistorys[1].Work_JobType ? datas[resume].workHistorys[1].Work_JobType : "";
					fill14 = datas[resume].workHistorys[1].Work_Company ? datas[resume].workHistorys[1].Work_Company : "";
					if (datas[resume].workHistorys[1].Work_Start_Year && datas[resume].workHistorys[1].Work_End_Year)
						fill15 = datas[resume].workHistorys[1].Work_Start_Year	+ "-" + datas[resume].workHistorys[1].Work_End_Year + "  |";
					fill16 = datas[resume].workHistorys[1].Work_Infomation ? datas[resume].workHistorys[1].Work_Infomation : "";
				}

				var fill17 = "";
				var fill18 = "";
				var fill19 = "";
				var fill20 = "";
				var fill21 = "";
				if (datas[resume].workHistorys[2])
				{
					fill17 = datas[resume].workHistorys[2].Work_JobName ? datas[resume].workHistorys[2].Work_JobName : "";
					fill18 = datas[resume].workHistorys[2].Work_JobType ? datas[resume].workHistorys[2].Work_JobType : "";
					fill19 = datas[resume].workHistorys[2].Work_Company ? datas[resume].workHistorys[2].Work_Company : "";
					if (datas[resume].workHistorys[2].Work_Start_Year && datas[resume].workHistorys[2].Work_End_Year)
						fill20 = datas[resume].workHistorys[2].Work_Start_Year	+ "-" + datas[resume].workHistorys[2].Work_End_Year + "  |";
					fill21 = datas[resume].workHistorys[1].Work_Infomation ? datas[resume].workHistorys[1].Work_Infomation : "";
				}

				var fill22 = "";
				var fill25 = img;
				var fill28 = "";
				let score1 = 0;
				if (datas[resume].interestedJob[0])
				{
					fill22 = datas[resume].interestedJob[0].Job_SkillName[0] ? datas[resume].interestedJob[0].Job_SkillName[0] : "";
					score1 = datas[resume].interestedJob[0].Job_Score[0] ? datas[resume].interestedJob[0].Job_Score[0] : 0; 
					if (score1 >= 2.5 && score1 < 3.5)
						fill25 = img2;
					else if (score1 >= 3.5 && score1 < 4.5)
						fill25 = img3;
					else if (score1 >= 4.5 && score1 < 5.5)
						fill25 = img4;
					else if (score1 >= 5.5 && score1 < 6.5)
						fill25 = img5;
					else if (score1 >= 6.5 && score1 < 7.5)
						fill25 = img6;
					else if (score1 >= 7.5 && score1 < 8.5)
						fill25 = img7;
					else if (score1 >= 8.5 && score1 < 9.5)
						fill25 = img8;
					else if (score1 >= 9.5)
						fill25 = img9;
					
					if (score1 >= 2.5 && score1 < 5)
						fill28 = "พอได้เล็กน้อย";
				    else if (score1 >= 5 && score1 < 7.5)
						fill28 = "พื้นฐาน";
					else if (score1 >= 7.5 && score1 < 10)
						fill28 = "ดี";
					else if (score1 == 10)
						fill28 = "ดีเยี่ยม";

				}

				var fill23 = "";
				var fill26 = img;
				var fill29 = "";
				let score2 = 0;
				if (datas[resume].interestedJob[0])
				{
					fill23 = datas[resume].interestedJob[0].Job_SkillName[1] ? datas[resume].interestedJob[0].Job_SkillName[1] : "";
					score2 = datas[resume].interestedJob[0].Job_Score[1] ? datas[resume].interestedJob[0].Job_Score[1] : 0; 
					if (score2 >= 2.5 && score2 < 3.5)
						fill26 = img2;
					else if (score2 >= 3.5 && score2 < 4.5)
						fill26 = img3;
					else if (score2 >= 4.5 && score2 < 5.5)
						fill26 = img4;
					else if (score2 >= 5.5 && score2 < 6.5)
						fill26 = img5;
					else if (score2 >= 6.5 && score2 < 7.5)
						fill26 = img6;
					else if (score2 >= 7.5 && score2 < 8.5)
						fill26 = img7;
					else if (score2 >= 8.5 && score2 < 9.5)
						fill26 = img8;
					else if (score2 >= 9.5)
						fill26 = img9;
					
					if (score2 >= 2.5 && score2 < 5)
						fill29 = "พอได้เล็กน้อย";
				    else if (score2 >= 5 && score2 < 7.5)
						fill29 = "พื้นฐาน";
					else if (score2 >= 7.5 && score2 < 10)
						fill29 = "ดี";
					else if (score2 == 10)
						fill29 = "ดีเยี่ยม";

				}

				var fill24 = "";
				var fill27 = img;
				var fill30 = "";
				let score3 = 0;
				if (datas[resume].interestedJob[0])
				{
					fill24 = datas[resume].interestedJob[0].Job_SkillName[2] ? datas[resume].interestedJob[0].Job_SkillName[2] : "";
					score3 = datas[resume].interestedJob[0].Job_Score[2] ? datas[resume].interestedJob[0].Job_Score[2] : 0; 
					if (score3 >= 2.5 && score3 < 3.5)
						fill27 = img2;
					else if (score3 >= 3.5 && score3 < 4.5)
						fill27 = img3;
					else if (score3 >= 4.5 && score3 < 5.5)
						fill27 = img4;
					else if (score3 >= 5.5 && score3 < 6.5)
						fill27 = img5;
					else if (score3 >= 6.5 && score3 < 7.5)
						fill27 = img6;
					else if (score3 >= 7.5 && score3 < 8.5)
						fill27 = img7;
					else if (score3 >= 8.5 && score3 < 9.5)
						fill27 = img8;
					else if (score3 >= 9.5)
						fill27 = img9;
					
					if (score3 >= 2.5 && score3 < 5)
						fill30 = "พอได้เล็กน้อย";
				    else if (score3 >= 5 && score3 < 7.5)
						fill30 = "พื้นฐาน";
					else if (score3 >= 7.5 && score3 < 10)
						fill30 = "ดี";
					else if (score3 == 10)
						fill30 = "ดีเยี่ยม";

				}
	
				var fill31 = "";
				let position1 = 196.52;
				if (datas[resume].additionalSkills[0]){
					fill31 = datas[resume].additionalSkills[0].AdditionalSkill ? datas[resume].additionalSkills[0].AdditionalSkill : "";
					if (fill31.length > 15)
						position1 = 195.02;
					else if (fill31.length > 30)
						position1 = 193.52;
				}

				var fill32 = "";
				let position2 = 196.52;
				if (datas[resume].additionalSkills[1]){
					fill32 = datas[resume].additionalSkills[1].AdditionalSkill ? datas[resume].additionalSkills[1].AdditionalSkill : "";
					if (fill32.length > 15)
						position2 = 195.02;
					else if (fill32.length > 30)
						position2 = 193.52;
				}

				var fill33 = "";
				let position3 = 196.52;
				if (datas[resume].additionalSkills[2]){
					fill33 = datas[resume].additionalSkills[2].AdditionalSkill ? datas[resume].additionalSkills[2].AdditionalSkill : "";
					if (fill33.length > 15)
						position3 = 195.02;
					else if (fill33.length > 30)
						position3 = 193.52;
				}

				var fill34 = '';
				var fill35 = '';
				var fill36 = '';
				var fill37 = '';
				var fill38 = '';
				var fill39 = '';
				let grade1 = 0;
				if (datas[resume].educationHistorys[0]){
					fill34 = datas[resume].educationHistorys[0].Degree ? datas[resume].educationHistorys[0].Degree : "";
					if (datas[resume].educationHistorys[0].Education_End_Year != 0)
						fill35 = datas[resume].educationHistorys[0].Education_End_Year.toString() + "  |";
					fill36 = datas[resume].educationHistorys[0].Facalty ? datas[resume].educationHistorys[0].Facalty : "";
					fill37 = datas[resume].educationHistorys[0].Academy ? datas[resume].educationHistorys[0].Academy : "";
					grade1 = datas[resume].educationHistorys[0].Grade ? datas[resume].educationHistorys[0].Grade : 0;
					if (grade1 != 0){
						fill38 = "เกรดเฉลี่ย";
						fill39 = (datas[resume].educationHistorys[0].Grade.toFixed(2)).toString();
					}
			
				}

				var fill40 = '';
				var fill41 = '';
				var fill42 = '';
				var fill43 = '';
				var fill44 = '';
				var fill45 = '';
				let grade2 = 0;
				if (datas[resume].educationHistorys[1]){
					fill40 = datas[resume].educationHistorys[1].Degree ? datas[resume].educationHistorys[1].Degree : "";
					if (datas[resume].educationHistorys[1].Education_End_Year != 0)
						fill41 = datas[resume].educationHistorys[1].Education_End_Year.toString() + "  |";
					fill42 = datas[resume].educationHistorys[1].Facalty ? datas[resume].educationHistorys[1].Facalty : "";
					fill43 = datas[resume].educationHistorys[1].Academy ? datas[resume].educationHistorys[1].Academy : "";
					grade2 = datas[resume].educationHistorys[1].Grade ? datas[resume].educationHistorys[1].Grade : 0;
					if (grade2 != 0){
						fill44 = "เกรดเฉลี่ย";
						fill45 = (datas[resume].educationHistorys[0].Grade.toFixed(2)).toString();
					}
			
				}
				var fill46 = '';
				var fill47 = '';
				var fill48 = '';
				var fill49 = '';
				var fill50 = '';
				var fill51 = '';
				let grade3 = 0;
				if (datas[resume].educationHistorys[2]){
					fill46 = datas[resume].educationHistorys[2].Degree ? datas[resume].educationHistorys[2].Degree : "";
					if (datas[resume].educationHistorys[2].Education_End_Year != 0)
						fill47 = datas[resume].educationHistorys[2].Education_End_Year.toString() + "  |";
					fill48 = datas[resume].educationHistorys[2].Facalty ? datas[resume].educationHistorys[2].Facalty : "";
					fill49 = datas[resume].educationHistorys[2].Academy ? datas[resume].educationHistorys[2].Academy : "";
					grade3 = datas[resume].educationHistorys[2].Grade ? datas[resume].educationHistorys[2].Grade : 0;
					if (grade3 != 0){
						fill50 = "เกรดเฉลี่ย";
						fill51 = (datas[resume].educationHistorys[0].Grade.toFixed(2)).toString();
					}
			
				}

			    var fill52 = '';
				if (datas[resume].certificates[0])
					fill52 = datas[resume].certificates[0].CertName ? datas[resume].certificates[0].CertName : "";

				var fill53 = '';
				if (datas[resume].certificates[1])
					fill53 = datas[resume].certificates[1].CertName ? datas[resume].certificates[1].CertName : "";

				var fill54 = '';
				if (datas[resume].certificates[2])
					fill54 = datas[resume].certificates[2].CertName ? datas[resume].certificates[2].CertName : "";

				var fill55 = '';
				if (datas[resume].certificates[3])
					fill55 = datas[resume].certificates[3].CertName ? datas[resume].certificates[3].CertName : "";

				var fill56 = '';
				if (datas[resume].certificates[4])
					fill56 = datas[resume].certificates[4].CertName ? datas[resume].certificates[4].CertName : "";

				var fill57 = '';
				if (datas[resume].certificates[5])
					fill57 = datas[resume].certificates[5].CertName ? datas[resume].certificates[5].CertName : "";

			

				var fill58 = '';
				if (datas[resume].certificates[0])
					fill58 = datas[resume].certificates[0].CertYear.toString();
	
				var fill59 = '';
				if (datas[resume].certificates[1])
					fill59 = datas[resume].certificates[1].CertYear.toString();
				
				var fill60 = '';
				if (datas[resume].certificates[2])
					fill60 = datas[resume].certificates[2].CertYear.toString();
				
				var fill61 = '';
				if (datas[resume].certificates[3])
					fill61 = datas[resume].certificates[3].CertYear.toString();

				var fill62 = '';
				if (datas[resume].certificates[4])
					fill62 = datas[resume].certificates[4].CertYear.toString();

				var fill63 = '';
				if (datas[resume].certificates[5])
					fill63 = datas[resume].certificates[5].CertYear.toString();
				
				for (let i = 1; i < 64; i++) {
					console.log(`${`{fill${i}}`}`);
				}

				this.setState({ render: true });
                const font = { tahomo };
				

                (async () => {
                const template = {
                    fontName: 'tahomo',
                    basePdf,
					"schemas": [
						{
							"ชื่อ": {
								"type": "text",
								"position": {
									"x": 95.94,
									"y": 10.56
								},
								"width": 101.05,
								"height": 9.97,
								"alignment": "left",
								"fontSize": 26,
								"characterSpacing": 0,
								"lineHeight": 1,
								"fontColor": "#ffffff"
							},
							"tag": {
								"type": "text",
								"position": {
									"x": 95.94,
									"y": 40.52
								},
								"width": 100,
								"height": 6.39,
								"alignment": "left",
								"fontSize": 13,
								"characterSpacing": 0,
								"lineHeight": 1,
								"fontColor": "#ffffff"
							},
							"AboutMe": {
								"type": "text",
								"position": {
									"x": 90.81,
									"y": 57.42
								},
								"width": 108.56,
								"height": 18.37,
								"alignment": "left",
								"fontSize": 11,
								"characterSpacing": 0,
								"lineHeight": 1,
								"fontColor": "#ffffff"
							},
							"Email": {
								"type": "text",
								"position": {
									"x": 21.04,
									"y": 99.35
								},
								"width": 59.86,
								"height": 9.1,
								"alignment": "center",
								"fontSize": 11,
								"characterSpacing": 0,
								"lineHeight": 2.5,
								"fontColor": "#000000"
							},
							"ประเภทงาน 1": {
								"type": "text",
								"position": {
									"x": 139.05,
									"y": 175.82
								},
								"width": 26,
								"height": 4.88,
								"alignment": "left",
								"fontSize": 11,
								"characterSpacing": 0,
								"lineHeight": 1
							},
							"ชื่อบริษัท 1": {
								"type": "text",
								"position": {
									"x": 116.04,
									"y": 188.11
								},
								"width": 85.27,
								"height": 4.88,
								"alignment": "left",
								"fontSize": 11,
								"characterSpacing": 0,
								"lineHeight": 1
							},
							"ปีเริ่ม - ปีจบ 1": {
								"type": "text",
								"position": {
									"x": 116.04,
									"y": 175.82
								},
								"width": 27.59,
								"height": 4.88,
								"alignment": "left",
								"fontSize": 11,
								"characterSpacing": 0,
								"lineHeight": 1
							},
							"ข้อมูลงาน 1": {
								"type": "text",
								"position": {
									"x": 116.04,
									"y": 192.78
								},
								"width": 84.75,
								"height": 14.14,
								"alignment": "left",
								"fontSize": 11,
								"characterSpacing": 0,
								"lineHeight": 1.5
							},
							"ทักษะ 1": {
								"type": "text",
								"position": {
									"x": 10.22,
									"y": 142.01
								},
								"width": 145.01,
								"height": 5.14,
								"alignment": "left",
								"fontSize": 11,
								"characterSpacing": 0,
								"lineHeight": 1
							},
							"คะแนน 1": {
								"type": "image",
								"position": {
									"x": 10.22,
									"y": 148.89
								},
								"width": 65.16,
								"height": 5.67,
							},
							"เกณฑ์ 1": {
								"type": "text",
								"position": {
									"x": 78.16,
									"y": 149.09
								},
								"width": 24.94,
								"height": 5.4,
								"alignment": "left",
								"fontSize": 11,
								"characterSpacing": 0,
								"lineHeight": 1
							},
							"เพิ่มเติม 1": {
								"type": "text",
								"position": {
									"x": 3.18,
									"y": position1
								},
								"width": 29.96,
								"height": 11.22,
								"alignment": "center",
								"fontSize": 11,
								"characterSpacing": 0,
								"lineHeight": 0
							},
							"เพิ่มเติม 2": {
								"type": "text",
								"position": {
									"x": 38.88,
									"y": position2
								},
								"width": 29.16,
								"height": 11.22,
								"alignment": "center",
								"fontSize": 11,
								"characterSpacing": 0,
								"lineHeight": 0
							},
							"เพิ่มเติม 3": {
								"type": "text",
								"position": {
									"x": 74.38,
									"y": position3
								},
								"width": 28.11,
								"height": 11.22,
								"alignment": "center",
								"fontSize": 11,
								"characterSpacing": 0,
								"lineHeight": 0
							},
							"ระดับ 1": {
								"type": "text",
								"position": {
									"x": 129.62,
									"y": 100.18
								},
								"width": 24.00,
								"height": 3.82,
								"alignment": "left",
								"fontSize": 11,
								"characterSpacing": 0,
								"lineHeight": 1
							},
							"ปีจบ 1": {
								"type": "text",
								"position": {
									"x": 116.58,
									"y": 100.39
								},
								"width": 17.54,
								"height": 3.82,
								"alignment": "left",
								"fontSize": 11,
								"characterSpacing": 0,
								"lineHeight": 1
							},
							"คณะ 1": {
								"type": "text",
								"position": {
									"x": 116.25,
									"y": 105.98
								},
								"width": 36.06,
								"height": 3.82,
								"alignment": "left",
								"fontSize": 11,
								"characterSpacing": 0,
								"lineHeight": 1
							},
							"สถานศึกษา 1 ": {
								"type": "text",
								"position": {
									"x": 116.2,
									"y": 111.57
								},
								"width": 86.06,
								"height": 3.82,
								"alignment": "left",
								"fontSize": 11,
								"characterSpacing": 0,
								"lineHeight": 1
							},
							"เกรด 1": {
								"type": "text",
								"position": {
									"x": 194.89,
									"y": 105.98
								},
								"width": 17.54,
								"height": 3.82,
								"alignment": "left",
								"fontSize": 11,
								"characterSpacing": 0,
								"lineHeight": 1
							},
							"ชื่อเกียร์ติบัตร 1 ": {
								"type": "text",
								"position": {
									"x": 10.67,
									"y": 226.77
								},
								"width": 59.08,
								"height": 4.35,
								"alignment": "left",
								"fontSize": 11,
								"characterSpacing": 0,
								"lineHeight": 1
							},
							"ชื่อเกียร์ติบัตร 2": {
								"type": "text",
								"position": {
									"x": 10.67,
									"y": 235.33
								},
								"width": 58.81,
								"height": 4.07,
								"alignment": "left",
								"fontSize": 11,
								"characterSpacing": 0,
								"lineHeight": 1
							},
							"ชื่อเกียร์ติบัตร 3": {
								"type": "text",
								"position": {
									"x": 10.67,
									"y": 243.42
								},
								"width": 58.27,
								"height": 4.6,
								"alignment": "left",
								"fontSize": 11,
								"characterSpacing": 0,
								"lineHeight": 1
							},
							"ชื่อเกียร์ติบัตร 4": {
								"type": "text",
								"position": {
									"x": 10.67,
									"y": 252.04
								},
								"width": 57.48,
								"height": 3.8,
								"alignment": "left",
								"fontSize": 11,
								"characterSpacing": 0,
								"lineHeight": 1
							},
							"ปีเกียร์ติบัตร 1 ": {
								"type": "text",
								"position": {
									"x": 92.26,
									"y": 226.77
								},
								"width": 27.86,
								"height": 4.07,
								"alignment": "left",
								"fontSize": 11,
								"characterSpacing": 0,
								"lineHeight": 1
							},
							"ปีเกียร์ติบัตร 2": {
								"type": "text",
								"position": {
									"x": 92.26,
									"y": 235.33
								},
								"width": 27.86,
								"height": 4.07,
								"alignment": "left",
								"fontSize": 11,
								"characterSpacing": 0,
								"lineHeight": 1
							},
							"ปีเกียร์ติบัตร 3": {
								"type": "text",
								"position": {
									"x": 92.26,
									"y": 243.42
								},
								"width": 27.86,
								"height": 4.07,
								"alignment": "left",
								"fontSize": 11,
								"characterSpacing": 0,
								"lineHeight": 1
							},
							"ปีเกียร์ติบัตร 4": {
								"type": "text",
								"position": {
									"x": 92.26,
									"y": 252.04
								},
								"width": 27.86,
								"height": 4.07,
								"alignment": "left",
								"fontSize": 11,
								"characterSpacing": 0,
								"lineHeight": 1
							},
							"รูปภาพ": {
								"type": "image",
								"position": {
									"x": 0,
									"y": -3
								},
								"width": 81.87,
								"height": 81.87
							},
							"นามสกุล": {
								"type": "text",
								"position": {
									"x": 95.94,
									"y": 24.05
								},
								"width": 100,
								"height": 10.24,
								"alignment": "left",
								"fontSize": 26,
								"characterSpacing": 0,
								"lineHeight": 1,
								"fontColor": "#ffffff"
							},
							"Location": {
								"type": "text",
								"position": {
									"x": 21.04,
									"y": 111.53
								},
								"width": 59.86,
								"height": 9.36,
								"alignment": "center",
								"fontSize": 11,
								"characterSpacing": 0,
								"lineHeight": 2.5,
								"fontColor": "#000000"
							},
							"ทักษะ 2": {
								"type": "text",
								"position": {
									"x": 10.22,
									"y": 156.01
								},
								"width": 145.01,
								"height": 5.14,
								"alignment": "left",
								"fontSize": 11,
								"characterSpacing": 0,
								"lineHeight": 1
							},
							"คะแนน 2": {
								"type": "image",
								"position": {
									"x": 10.22,
									"y": 162.89
								},
								"width": 65.16,
								"height": 5.67,
							},
							"เกณฑ์ 2": {
								"type": "text",
								"position": {
									"x": 78.16,
									"y": 163.09
								},
								"width": 24.67,
								"height": 5.4,
								"alignment": "left",
								"fontSize": 11,
								"characterSpacing": 0,
								"lineHeight": 1
							},
							"ทักษะ 3": {
								"type": "text",
								"position": {
									"x": 10.22,
									"y": 170.01
								},
								"width": 145.01,
								"height": 5.14,
								"alignment": "left",
								"fontSize": 11,
								"characterSpacing": 0,
								"lineHeight": 1
							},
							"คะแนน 3": {
								"type": "image",
								"position": {
									"x": 10.22,
									"y": 176.89
								},
								"width": 65.16,
								"height": 5.67,
							},
							"เกณฑ์ 3": {
								"type": "text",
								"position": {
									"x": 78.16,
									"y": 177.09
								},
								"width": 24.41,
								"height": 5.39,
								"alignment": "left",
								"fontSize": 11,
								"characterSpacing": 0,
								"lineHeight": 1
							},
							"ชื่อเกียร์ติบัตร 5": {
								"type": "text",
								"position": {
									"x": 10.67,
									"y": 260.24
								},
								"width": 58.27,
								"height": 4.6,
								"alignment": "left",
								"fontSize": 11,
								"characterSpacing": 0,
								"lineHeight": 1
							},
							"ชื่อเกียร์ติบัตร 6": {
								"type": "text",
								"position": {
									"x": 10.67,
									"y": 268.86
								},
								"width": 57.74,
								"height": 3.8,
								"alignment": "left",
								"fontSize": 11,
								"characterSpacing": 0,
								"lineHeight": 1
							},
							"ปีเกียร์ติบัตร 5": {
								"type": "text",
								"position": {
									"x": 92.26,
									"y": 260.24
								},
								"width": 27.86,
								"height": 4.07,
								"alignment": "left",
								"fontSize": 11,
								"characterSpacing": 0,
								"lineHeight": 1
							},
							"ปีเกียร์ติบัตร 6": {
								"type": "text",
								"position": {
									"x": 92.26,
									"y": 268.86
								},
								"width": 27.86,
								"height": 4.07,
								"alignment": "left",
								"fontSize": 11,
								"characterSpacing": 0,
								"lineHeight": 1
							},
							"ระดับ 2": {
								"type": "text",
								"position": {
									"x": 129.62,
									"y": 122.56
								},
								"width": 24.00,
								"height": 3.82,
								"alignment": "left",
								"fontSize": 11,
								"characterSpacing": 0,
								"lineHeight": 1
							},
							"ปีจบ 2": {
								"type": "text",
								"position": {
									"x": 116,
									"y": 122.77
								},
								"width": 17.54,
								"height": 3.82,
								"alignment": "left",
								"fontSize": 11,
								"characterSpacing": 0,
								"lineHeight": 1
							},
							"คณะ 2": {
								"type": "text",
								"position": {
									"x": 115.67,
									"y": 128.36
								},
								"width": 36.06,
								"height": 3.82,
								"alignment": "left",
								"fontSize": 11,
								"characterSpacing": 0,
								"lineHeight": 1
							},
							"สถานศึกษา 2": {
								"type": "text",
								"position": {
									"x": 115.62,
									"y": 133.95
								},
								"width": 86.06,
								"height": 3.82,
								"alignment": "left",
								"fontSize": 11,
								"characterSpacing": 0,
								"lineHeight": 1
							},
							"เกรด 2": {
								"type": "text",
								"position": {
									"x": 194.89,
									"y": 128.36
								},
								"width": 17.54,
								"height": 3.82,
								"alignment": "left",
								"fontSize": 11,
								"characterSpacing": 0,
								"lineHeight": 1
							},
							"เกรด 3": {
								"type": "text",
								"position": {
									"x": 194.89,
									"y": 149.73
								},
								"width": 17.54,
								"height": 3.82,
								"alignment": "left",
								"fontSize": 11,
								"characterSpacing": 0,
								"lineHeight": 1
							},
							"ระดับ 3": {
								"type": "text",
								"position": {
									"x": 129.62,
									"y": 143.93
								},
								"width": 24.00,
								"height": 3.82,
								"alignment": "left",
								"fontSize": 11,
								"characterSpacing": 0,
								"lineHeight": 1
							},
							"ปีจบ 3": {
								"type": "text",
								"position": {
									"x": 116.21,
									"y": 144.14
								},
								"width": 17.54,
								"height": 3.82,
								"alignment": "left",
								"fontSize": 11,
								"characterSpacing": 0,
								"lineHeight": 1
							},
							"คณะ 3": {
								"type": "text",
								"position": {
									"x": 115.88,
									"y": 149.73
								},
								"width": 36.06,
								"height": 3.82,
								"alignment": "left",
								"fontSize": 11,
								"characterSpacing": 0,
								"lineHeight": 1
							},
							"สถานศึกษา 3": {
								"type": "text",
								"position": {
									"x": 115.83,
									"y": 155.32
								},
								"width": 86.06,
								"height": 3.82,
								"alignment": "left",
								"fontSize": 11,
								"characterSpacing": 0,
								"lineHeight": 1
							},
							"เกรดเฉลี่ย 1": {
								"type": "text",
								"position": {
									"x": 175.49,
									"y": 105.98
								},
								"width": 17.54,
								"height": 3.82,
								"alignment": "left",
								"fontSize": 11,
								"characterSpacing": 0,
								"lineHeight": 1
							},
							"เกรดเฉลี่ย 2": {
								"type": "text",
								"position": {
									"x": 175.49,
									"y": 128.36
								},
								"width": 17.54,
								"height": 3.82,
								"alignment": "left",
								"fontSize": 11,
								"characterSpacing": 0,
								"lineHeight": 1
							},
							"เกรดเฉลี่ย 3": {
								"type": "text",
								"position": {
									"x": 175.49,
									"y": 149.73
								},
								"width": 17.54,
								"height": 3.82,
								"alignment": "left",
								"fontSize": 11,
								"characterSpacing": 0,
								"lineHeight": 1
							},
							"ชื่องาน 1": {
								"type": "text",
								"position": {
									"x": 116.04,
									"y": 182.11
								},
								"width": 85.01,
								"height": 4.88,
								"alignment": "left",
								"fontSize": 11,
								"characterSpacing": 0,
								"lineHeight": 1
							},
							"ประเภทงาน 2": {
								"type": "text",
								"position": {
									"x": 139.05,
									"y": 214.82
								},
								"width": 26,
								"height": 4.88,
								"alignment": "left",
								"fontSize": 11,
								"characterSpacing": 0,
								"lineHeight": 1
							},
							"ชื่อบริษัท 2": {
								"type": "text",
								"position": {
									"x": 116.04,
									"y": 227.11
								},
								"width": 85.27,
								"height": 4.88,
								"alignment": "left",
								"fontSize": 11,
								"characterSpacing": 0,
								"lineHeight": 1
							},
							"ปีเริ่ม - ปีจบ 2": {
								"type": "text",
								"position": {
									"x": 116.04,
									"y": 214.82
								},
								"width": 27.59,
								"height": 4.88,
								"alignment": "left",
								"fontSize": 11,
								"characterSpacing": 0,
								"lineHeight": 1
							},
							"ข้อมูลงาน 2": {
								"type": "text",
								"position": {
									"x": 116.04,
									"y": 231.78
								},
								"width": 84.75,
								"height": 14.14,
								"alignment": "left",
								"fontSize": 11,
								"characterSpacing": 0,
								"lineHeight": 1.5
							},
							"ชื่องาน 2": {
								"type": "text",
								"position": {
									"x": 116.04,
									"y": 221.11
								},
								"width": 85.01,
								"height": 4.88,
								"alignment": "left",
								"fontSize": 11,
								"characterSpacing": 0,
								"lineHeight": 1
							},
							"ประเภทงาน 3": {
								"type": "text",
								"position": {
									"x": 139.05,
									"y": 253.82
								},
								"width": 26,
								"height": 4.88,
								"alignment": "left",
								"fontSize": 11,
								"characterSpacing": 0,
								"lineHeight": 1
							},
							"ชื่อบริษัท 3": {
								"type": "text",
								"position": {
									"x": 116.04,
									"y": 266.11
								},
								"width": 85.27,
								"height": 4.88,
								"alignment": "left",
								"fontSize": 11,
								"characterSpacing": 0,
								"lineHeight": 1
							},
							"ปีเริ่ม - ปีจบ 3": {
								"type": "text",
								"position": {
									"x": 116.04,
									"y": 253.82
								},
								"width": 27.59,
								"height": 4.88,
								"alignment": "left",
								"fontSize": 11,
								"characterSpacing": 0,
								"lineHeight": 1
							},
							"ข้อมูลงาน 3": {
								"type": "text",
								"position": {
									"x": 116.04,
									"y": 270.78
								},
								"width": 84.75,
								"height": 14.14,
								"alignment": "left",
								"fontSize": 11,
								"characterSpacing": 0,
								"lineHeight": 1.5
							},
							"ชื่องาน 3": {
								"type": "text",
								"position": {
									"x": 116.04,
									"y": 260.11
								},
								"width": 85.01,
								"height": 4.88,
								"alignment": "left",
								"fontSize": 11,
								"characterSpacing": 0,
								"lineHeight": 1
							}
						}
					]
				};

				const inputs = [{
				"ชื่อ":fill1,
				"นามสกุล":fill2,
				"tag":fill3,
				"Location":fill4,
				"AboutMe":fill5,
				"Email":fill6,
				"ชื่องาน 1":fill7,
				"ประเภทงาน 1":fill8,
				"ชื่อบริษัท 1":fill9,
				"ปีเริ่ม - ปีจบ 1":fill10,
				"ข้อมูลงาน 1":fill11,
				"ชื่องาน 2":fill12,
				"ประเภทงาน 2":fill13,
				"ชื่อบริษัท 2":fill14,
				"ปีเริ่ม - ปีจบ 2":fill15,
				"ข้อมูลงาน 2":fill16,
				"ชื่องาน 3":fill17,
				"ประเภทงาน 3":fill18,
				"ชื่อบริษัท 3":fill19,
				"ปีเริ่ม - ปีจบ 3":fill20,
				"ข้อมูลงาน 3":fill21,
				"ทักษะ 1":fill22,
				"ทักษะ 2":fill23,
				"ทักษะ 3":fill24,
				"คะแนน 1":fill25,
				"คะแนน 2":fill26,
				"คะแนน 3":fill27,
				"เกณฑ์ 1":fill28,
				"เกณฑ์ 2":fill29,
				"เกณฑ์ 3":fill30,
				"เพิ่มเติม 1":fill31,
				"เพิ่มเติม 2":fill32,
				"เพิ่มเติม 3":fill33,
				"ระดับ 1":fill34,
				"ปีจบ 1":fill35,
				"คณะ 1":fill36,
				"สถานศึกษา 1 ":fill37,
				"เกรดเฉลี่ย 1":fill38,
				"เกรด 1":fill39,
				"ระดับ 2":fill40,
				"ปีจบ 2":fill41,
				"คณะ 2":fill42,
				"สถานศึกษา 2":fill43,
				"เกรดเฉลี่ย 2":fill44,
				"เกรด 2":fill45,
				"ระดับ 3":fill46,
				"ปีจบ 3":fill47,
				"คณะ 3":fill48,
				"สถานศึกษา 3":fill49,
				"เกรดเฉลี่ย 3":fill50,
				"เกรด 3":fill51,
				"ชื่อเกียร์ติบัตร 1 ":fill52,
				"ชื่อเกียร์ติบัตร 2":fill53,
				"ชื่อเกียร์ติบัตร 3":fill54,
				"ชื่อเกียร์ติบัตร 4":fill55,
				"ชื่อเกียร์ติบัตร 5":fill56,
				"ชื่อเกียร์ติบัตร 6":fill57,
				"ปีเกียร์ติบัตร 1 ":fill58,
				"ปีเกียร์ติบัตร 2":fill59,
				"ปีเกียร์ติบัตร 3":fill60,
				"ปีเกียร์ติบัตร 4":fill61,
				"ปีเกียร์ติบัตร 5":fill62,
				"ปีเกียร์ติบัตร 6":fill63,
				"รูปภาพ":datas[resume].ProfilePic}];

				//const inputs = [{"ชื่อ":"ชื่อ","tag":"tag","AboutMe":"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.","Email":"User@test.com","ประเภทงาน 1":"[ประเภทงาน]","ชื่อบริษัท 1":"[ชื่อบริษัท]","ปีเริ่ม - ปีจบ 1":"[ปีเริ่ม - ปีจบ]","ข้อมูลงาน 1":"Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.","ทักษะ 1":"ทักษะ 1","คะแนน 1":"คะแนน 1","เกณฑ์ 1":"เกณฑ์ 1","เพิ่มเติม 1":"เพิ่มเติม 1","เพิ่มเติม 2":"เพิ่มเติม 2","เพิ่มเติม 3":"เพิ่มเติม 3","ระดับ 1":"ระดับ 1","ปีจบ 1":"ปีจบ 1","คณะ 1":"คณะ 1","สถานศึกษา 1 ":"สถานศึกษา 1 ","เกรด 1":"เกรด 1","ชื่อเกียร์ติบัตร 1 ":"ชื่อเกียร์ติบัตร 1 ","ชื่อเกียร์ติบัตร 2":"ชื่อเกียร์ติบัตร 2","ชื่อเกียร์ติบัตร 3":"ชื่อเกียร์ติบัตร 3","ชื่อเกียร์ติบัตร 4":"ชื่อเกียร์ติบัตร 4","ปีเกียร์ติบัตร 1 ":"ปีเกียร์ติบัตร 1 ","ปีเกียร์ติบัตร 2":"ปีเกียร์ติบัตร 2","ปีเกียร์ติบัตร 3":"ปีเกียร์ติบัตร 3","ปีเกียร์ติบัตร 4":"ปีเกียร์ติบัตร 4","รูปภาพ":"data:image/jpeg;base64,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","นามสกุล":"นามสกุล","Location":"Example Location","ทักษะ 2":"ทักษะ 2","คะแนน 2":"คะแนน 2","เกณฑ์ 2":"เกณฑ์ 2","ทักษะ 3":"ทักษะ 3","คะแนน  3":"คะแนน 3","เกณฑ์ 3":"เกณฑ์ 3","ชื่อเกียร์ติบัตร 5":"ชื่อเกียร์ติบัตร 5","ชื่อเกียร์ติบัตร 6":"ชื่อเกียร์ติบัตร 6","ปีเกียร์ติบัตร 5":"ปีเกียร์ติบัตร 5","ปีเกียร์ติบัตร 6":"ปีเกียร์ติบัตร 6","ระดับ 2":"ระดับ 2","ปีจบ 2":"ปีจบ 2","คณะ 2":"คณะ 2","สถานศึกษา 2":"สถานศึกษา 2","เกรด 2":"เกรด 2","ระดับ 3":"ระดับ 3","ปีจบ 3":"ปีจบ 3","คณะ 3":"คณะ 3","สถานศึกษา 3":"สถานศึกษา 3 ","เกรดเฉลี่ย 1":"เกรดเฉลี่ย ","เกรดเฉลี่ย 2":"เกรดเฉลี่ย ","เกรดเฉลี่ย 3":"เกรดเฉลี่ย ","ชื่องาน 1 ":"[ชื่องาน]","ประเภทงาน 2":"[ประเภทงาน]","ชื่อบริษัท 2":"[ชื่อบริษัท]","ปีเริ่ม - ปีจบ 2":"[ปีเริ่ม - ปีจบ]","ข้อมูลงาน 2":"Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.","ชื่องาน 2":"[ชื่องาน]","ประเภทงาน 3":"[ประเภทงาน]","ชื่อบริษัท 3":"[ชื่อบริษัท]","ปีเริ่ม - ปีจบ 3":"[ปีเริ่ม - ปีจบ]","ข้อมูลงาน 3":"Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.","ชื่องาน 3":"[ชื่องาน]"}];
				//const inputs = [{"ชื่อ":"ชื่อ","tag":"tag","AboutMe":"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.","Email":"User@test.com","ประเภทงาน 1":"[ประเภทงาน]","ชื่อบริษัท 1":"[ชื่อบริษัท]","ปีเริ่ม - ปีจบ 1":"[ปีเริ่ม - ปีจบ]","ข้อมูลงาน 1":"Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.","ทักษะ 1":"ทักษะ 1","คะแนน 1":"คะแนน 1","เกณฑ์ 1":"เกณฑ์ 1","เพิ่มเติม 1":"เพิ่มเติม 1","เพิ่มเติม 2":"เพิ่มเติม 2","เพิ่มเติม 3":"เพิ่มเติม 3","ระดับ 1":"ระดับ 1","ปีจบ 1":"ปีจบ 1","คณะ 1":"คณะ 1","สถานศึกษา 1 ":"สถานศึกษา 1 ","เกรด 1":"เกรด 1","ชื่อเกียร์ติบัตร 1 ":"ชื่อเกียร์ติบัตร 1 ","ชื่อเกียร์ติบัตร 2":"ชื่อเกียร์ติบัตร 2","ชื่อเกียร์ติบัตร 3":"ชื่อเกียร์ติบัตร 3","ชื่อเกียร์ติบัตร 4":"ชื่อเกียร์ติบัตร 4","ปีเกียร์ติบัตร 1 ":"ปีเกียร์ติบัตร 1 ","ปีเกียร์ติบัตร 2":"ปีเกียร์ติบัตร 2","ปีเกียร์ติบัตร 3":"ปีเกียร์ติบัตร 3","ปีเกียร์ติบัตร 4":"ปีเกียร์ติบัตร 4","รูปภาพ":"data:image/jpeg;base64,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","นามสกุล":"นามสกุล","Location":"Example Location","ทักษะ 2":"ทักษะ 2","คะแนน 2":"คะแนน 2","เกณฑ์ 2":"เกณฑ์ 2","ทักษะ 3":"ทักษะ 3","คะแนน  3":"คะแนน 3","เกณฑ์ 3":"เกณฑ์ 3","ชื่อเกียร์ติบัตร 5":"ชื่อเกียร์ติบัตร 5","ชื่อเกียร์ติบัตร 6":"ชื่อเกียร์ติบัตร 6","ปีเกียร์ติบัตร 5":"ปีเกียร์ติบัตร 5","ปีเกียร์ติบัตร 6":"ปีเกียร์ติบัตร 6","ระดับ 2":"ระดับ 2","ปีจบ 2":"ปีจบ 2","คณะ 2":"คณะ 2","สถานศึกษา 2":"สถานศึกษา 2","เกรด 1 copy":"เกรด 1","ระดับ 3":"ระดับ 3","ปีจบ 3":"ปีจบ 3","คณะ 3":"คณะ 3","สถานศึกษา 3":"สถานศึกษา 3 ","เกรด 1 copy copy":"เกรด 1","เกรดเฉลี่ย 1":"เกรดเฉลี่ย ","เกรดเฉลี่ย 2":"เกรดเฉลี่ย ","เกรดเฉลี่ย 3":"เกรดเฉลี่ย ","ชื่องาน 1 ":"[ชื่องาน]","ประเภทงาน 1 copy":"[ประเภทงาน]","ชื่อบริษัท 1 copy":"[ชื่อบริษัท]","ปีเริ่ม - ปีจบ 1 copy":"[ปีเริ่ม - ปีจบ]","ข้อมูลงาน 1 copy":"Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.","ชื่องาน 1  copy":"[ชื่องาน]","ประเภทงาน 1 copy copy":"[ประเภทงาน]","ชื่อบริษัท 1 copy copy":"[ชื่อบริษัท]","ปีเริ่ม - ปีจบ 1 copy copy":"[ปีเริ่ม - ปีจบ]","ข้อมูลงาน 1 copy copy":"Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.","ชื่องาน 1  copy copy":"[ชื่องาน]"}];
  
				const pdf = await labelmake({ template, inputs, font });
                const blob = new Blob([pdf.buffer], { type: 'application/pdf' });
                document.getElementById('iframe').src = URL.createObjectURL(blob);
                })();
				
			}).catch((error) => {
				console.log('Token Error!');
				//this.setState({ redirect: "/landing" });
			});		
	}
	
	componentWillUnmount() { 
	   window.removeEventListener('load', this.handleLoad)  
	}
	
	handleLoad() {
		console.log("YEAH!");
	}
	render (){
		if (this.state.redirect) {
			return <Redirect to={this.state.redirect} />
		}
		
		if(this.state.render) {
			return (
            <html>
            <body>
            <iframe id="iframe" width="100%" height="900"></iframe>
            </body>
            </html>
			)
		}else{
			return (
			  <LoadingL />
			)
		}
	}
}

export default PDF;

