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
		console.log("YEAHXXX!");
		var token = cookie.load('login-token')
		console.log(token);

		let params = new URLSearchParams(document.location.search.substring(1));
		console.log(params);
		let template = params.get("template");
		let basePdf =  basePdf1;
		console.log(template);
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
				console.log(datas[0]);
				console.log(datas[0].Owner);
				console.log(datas[0].AboutMe);
				console.log(datas[0].ProfilePic);
				console.log(datas[0].Email);
				
				this.setState({ render: true });
                const font = { tahomo };
				
				let position1 = 196.52;
				if (datas[0].additionalSkills[0].AdditionalSkill.length > 15){
					position1 = 195.02;
				}
				else if (datas[0].additionalSkills[0].AdditionalSkill.length > 30){
					position1 = 193.52;
				}

				let position2 = 196.52;
				if (datas[0].additionalSkills[1].AdditionalSkill.length > 15){
					position2 = 195.02;
				}
				else if (datas[0].additionalSkills[1].AdditionalSkill.length > 30){
					position2 = 193.52;
				}

				let position3 = 196.52;
				if (datas[0].additionalSkills[2].AdditionalSkill.length > 15){
					position3 = 195.02;
				}
				else if (datas[0].additionalSkills[2].AdditionalSkill.length > 30){
					position3 = 193.52;
				}

				let score1 = "";
				if (datas[0].interestedJob[0].Job_Score[0] >= 2.5 && datas[0].interestedJob[0].Job_Score[0] < 3.5){
					score1 = img2;
				}
				else if (datas[0].interestedJob[0].Job_Score[0] >= 3.5 && datas[0].interestedJob[0].Job_Score[0] < 4.5){
					score1 = img3;
				}
				else if (datas[0].interestedJob[0].Job_Score[0] >= 4.5 && datas[0].interestedJob[0].Job_Score[0] < 5.5){
					score1 = img4;
				}
				else if (datas[0].interestedJob[0].Job_Score[0] >= 5.5 && datas[0].interestedJob[0].Job_Score[0] < 6.5){
					score1 = img5;
				}
				else if (datas[0].interestedJob[0].Job_Score[0] >= 6.5 && datas[0].interestedJob[0].Job_Score[0] < 7.5){
					score1 = img6;
				}
				else if (datas[0].interestedJob[0].Job_Score[0] >= 7.5 && datas[0].interestedJob[0].Job_Score[0] < 8.5){
					score1 = img7;
				}
				else if (datas[0].interestedJob[0].Job_Score[0] >= 8.5 && datas[0].interestedJob[0].Job_Score[0] < 9.5){
					score1 = img8;
				}
				else if (datas[0].interestedJob[0].Job_Score[0] >= 9.5){
					score1 = img9;
				}

				let score2 = "";
				if (datas[0].interestedJob[0].Job_Score[1] >= 2.5 && datas[0].interestedJob[0].Job_Score[1] < 3.5){
					score2 = img2;
				}
				else if (datas[0].interestedJob[0].Job_Score[1] >= 3.5 && datas[0].interestedJob[0].Job_Score[1] < 4.5){
					score2 = img3;
				}
				else if (datas[0].interestedJob[0].Job_Score[1] >= 4.5 && datas[0].interestedJob[0].Job_Score[1] < 5.5){
					score2 = img4;
				}
				else if (datas[0].interestedJob[0].Job_Score[1] >= 5.5 && datas[0].interestedJob[0].Job_Score[1] < 6.5){
					score2 = img5;
				}
				else if (datas[0].interestedJob[0].Job_Score[1] >= 6.5 && datas[0].interestedJob[0].Job_Score[1] < 7.5){
					score2 = img6;
				}
				else if (datas[0].interestedJob[0].Job_Score[1] >= 7.5 && datas[0].interestedJob[0].Job_Score[1] < 8.5){
					score2 = img7;
				}
				else if (datas[0].interestedJob[0].Job_Score[1] >= 8.5 && datas[0].interestedJob[0].Job_Score[1] < 9.5){
					score2 = img8;
				}
				else if (datas[0].interestedJob[0].Job_Score[1] >= 9.5){
					score2 = img9;
				}				

				let score3 = "";
				if (datas[0].interestedJob[0].Job_Score[2] >= 2.5 && datas[0].interestedJob[0].Job_Score[2] < 3.5){
					score3 = img2;
				}
				else if (datas[0].interestedJob[0].Job_Score[2] >= 3.5 && datas[0].interestedJob[0].Job_Score[2] < 4.5){
					score3 = img3;
				}
				else if (datas[0].interestedJob[0].Job_Score[2] >= 4.5 && datas[0].interestedJob[0].Job_Score[2] < 5.5){
					score3 = img4;
				}
				else if (datas[0].interestedJob[0].Job_Score[2] >= 5.5 && datas[0].interestedJob[0].Job_Score[2] < 6.5){
					score3 = img5;
				}
				else if (datas[0].interestedJob[0].Job_Score[2] >= 6.5 && datas[0].interestedJob[0].Job_Score[2] < 7.5){
					score3 = img6;
				}
				else if (datas[0].interestedJob[0].Job_Score[2] >= 7.5 && datas[0].interestedJob[0].Job_Score[2] < 8.5){
					score3 = img7;
				}
				else if (datas[0].interestedJob[0].Job_Score[2] >= 8.5 && datas[0].interestedJob[0].Job_Score[2] < 9.5){
					score3 = img8;
				}
				else if (datas[0].interestedJob[0].Job_Score[2] >= 9.5){
					score3 = img9;
				}

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
				let par1 = "พอได้เล็กน้อย";
				let par2 = "พอได้เล็กน้อย";
				let par3 = "พอได้เล็กน้อย";
				if (datas[0].interestedJob[0].Job_Score[0] >= 5){
					par1 = "พื้นฐาน";	
				}
				else if (datas[0].interestedJob[0].Job_Score[0] >= 7.5){
					par1 = "ดี";	
				}
				else if (datas[0].interestedJob[0].Job_Score[0] == 10){
					par1 = "ยอดเยี่ยม";	
				}

				if (datas[0].interestedJob[0].Job_Score[1] >= 5){
					par2 = "พื้นฐาน";
				}
				else if (datas[0].interestedJob[0].Job_Score[1] >= 7.5){
					par2 = "ดี";	
				}
				else if (datas[0].interestedJob[0].Job_Score[1] == 10){
					par2 = "ยอดเยี่ยม";	
				}

				if (datas[0].interestedJob[0].Job_Score[2] >= 5){
					par3 = "พื้นฐาน";
				}
				else if (datas[0].interestedJob[0].Job_Score[2] >= 7.5){
					par3 = "ดี";	
				}
				else if (datas[0].interestedJob[0].Job_Score[2] == 10){
					par3 = "ยอดเยี่ยม";	
				}
				
				const myArr = datas[0].Owner.split(" ");

				const inputs = [{
				"ชื่อ":myArr[0],
				"นามสกุล":myArr[1],
				"tag":datas[0].interestedJob[0].Job_JobName,
				"Location":datas[0].Location,
				"AboutMe":datas[0].Aboutme,
				"Email":datas[0].Email,
				"ชื่องาน 1":datas[0].workHistorys[0].Work_JobName,
				"ประเภทงาน 1":datas[0].workHistorys[0].Work_JobType,
				"ชื่อบริษัท 1":datas[0].workHistorys[0].Work_Company,
				"ปีเริ่ม - ปีจบ 1":datas[0].workHistorys[0].Work_Start_Year	+ "-" + datas[0].workHistorys[0].Work_End_Year + "  |",
				"ข้อมูลงาน 1":datas[0].workHistorys[0].Work_Infomation,
				"ชื่องาน 2":datas[0].workHistorys[1].Work_JobName,
				"ประเภทงาน 2":datas[0].workHistorys[1].Work_JobType,
				"ชื่อบริษัท 2":datas[0].workHistorys[1].Work_Company,
				"ปีเริ่ม - ปีจบ 2":datas[0].workHistorys[1].Work_Start_Year	+ "-" + datas[0].workHistorys[1].Work_End_Year + "  |",
				"ข้อมูลงาน 2":datas[0].workHistorys[1].Work_Infomation,
				"ชื่องาน 3":datas[0].workHistorys[2].Work_JobName,
				"ประเภทงาน 3":datas[0].workHistorys[2].Work_JobType,
				"ชื่อบริษัท 3":datas[0].workHistorys[2].Work_Company,
				"ปีเริ่ม - ปีจบ 3":datas[0].workHistorys[2].Work_Start_Year	+ "-" + datas[0].workHistorys[2].Work_End_Year + "  |",
				"ข้อมูลงาน 3":datas[0].workHistorys[2].Work_Infomation,
				"ทักษะ 1":datas[0].interestedJob[0].Job_SkillName[0],
				"ทักษะ 2":datas[0].interestedJob[0].Job_SkillName[1],
				"ทักษะ 3":datas[0].interestedJob[0].Job_SkillName[2],
				"คะแนน 1":score1,
				"คะแนน 2":score2,
				"คะแนน 3":score3,
				"เกณฑ์ 1":par1,
				"เกณฑ์ 2":par2,
				"เกณฑ์ 3":par3,
				"เพิ่มเติม 1":datas[0].additionalSkills[0].AdditionalSkill,
				"เพิ่มเติม 2":datas[0].additionalSkills[1].AdditionalSkill,
				"เพิ่มเติม 3":datas[0].additionalSkills[2].AdditionalSkill,
				"ระดับ 1":datas[0].educationHistorys[0].Degree,
				"ปีจบ 1":datas[0].educationHistorys[0].Education_End_Year.toString() + "  |",
				"คณะ 1":datas[0].educationHistorys[0].Facalty,
				"สถานศึกษา 1 ":datas[0].educationHistorys[0].Academy,
				"เกรดเฉลี่ย 1":"เกรดเฉลี่ย",
				"เกรด 1":(datas[0].educationHistorys[0].Grade.toFixed(2)).toString(),
				"ระดับ 2":datas[0].educationHistorys[1].Degree,
				"ปีจบ 2":datas[0].educationHistorys[1].Education_End_Year.toString()+ "  |",
				"คณะ 2":datas[0].educationHistorys[1].Facalty,
				"สถานศึกษา 2":datas[0].educationHistorys[1].Academy,
				"เกรดเฉลี่ย 2":"เกรดเฉลี่ย",
				"เกรด 2":datas[0].educationHistorys[1].Grade.toFixed(2).toString(),
				"ระดับ 3":datas[0].educationHistorys[1].Degree,
				"ปีจบ 3":datas[0].educationHistorys[1].Education_End_Year.toString()+ "  |",
				"คณะ 3":datas[0].educationHistorys[1].Facalty,
				"สถานศึกษา 3":datas[0].educationHistorys[1].Academy,
				"เกรดเฉลี่ย 3":"เกรดเฉลี่ย",
				"เกรด 3":datas[0].educationHistorys[1].Grade.toFixed(2).toString(),
				"ชื่อเกียร์ติบัตร 1 ":datas[0].certificates[0].CertName,
				"ชื่อเกียร์ติบัตร 2":datas[0].certificates[1].CertName,
				"ชื่อเกียร์ติบัตร 3":datas[0].certificates[2].CertName,
				"ชื่อเกียร์ติบัตร 4":datas[0].certificates[3].CertName,
				"ชื่อเกียร์ติบัตร 5":datas[0].certificates[3].CertName,
				"ชื่อเกียร์ติบัตร 6":datas[0].certificates[3].CertName,
				"ปีเกียร์ติบัตร 1 ":datas[0].certificates[0].CertYear.toString(),
				"ปีเกียร์ติบัตร 2":datas[0].certificates[1].CertYear.toString(),
				"ปีเกียร์ติบัตร 3":datas[0].certificates[2].CertYear.toString(),
				"ปีเกียร์ติบัตร 4":datas[0].certificates[3].CertYear.toString(),
				"ปีเกียร์ติบัตร 5":datas[0].certificates[3].CertYear.toString(),
				"ปีเกียร์ติบัตร 6":datas[0].certificates[3].CertYear.toString(),
				"รูปภาพ":datas[0].ProfilePic}];

				//const inputs = [{"ชื่อ":"ชื่อ","tag":"tag","AboutMe":"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.","Email":"User@test.com","ประเภทงาน 1":"[ประเภทงาน]","ชื่อบริษัท 1":"[ชื่อบริษัท]","ปีเริ่ม - ปีจบ 1":"[ปีเริ่ม - ปีจบ]","ข้อมูลงาน 1":"Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.","ทักษะ 1":"ทักษะ 1","คะแนน 1":"คะแนน 1","เกณฑ์ 1":"เกณฑ์ 1","เพิ่มเติม 1":"เพิ่มเติม 1","เพิ่มเติม 2":"เพิ่มเติม 2","เพิ่มเติม 3":"เพิ่มเติม 3","ระดับ 1":"ระดับ 1","ปีจบ 1":"ปีจบ 1","คณะ 1":"คณะ 1","สถานศึกษา 1 ":"สถานศึกษา 1 ","เกรด 1":"เกรด 1","ชื่อเกียร์ติบัตร 1 ":"ชื่อเกียร์ติบัตร 1 ","ชื่อเกียร์ติบัตร 2":"ชื่อเกียร์ติบัตร 2","ชื่อเกียร์ติบัตร 3":"ชื่อเกียร์ติบัตร 3","ชื่อเกียร์ติบัตร 4":"ชื่อเกียร์ติบัตร 4","ปีเกียร์ติบัตร 1 ":"ปีเกียร์ติบัตร 1 ","ปีเกียร์ติบัตร 2":"ปีเกียร์ติบัตร 2","ปีเกียร์ติบัตร 3":"ปีเกียร์ติบัตร 3","ปีเกียร์ติบัตร 4":"ปีเกียร์ติบัตร 4","รูปภาพ":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBw8PDg0NDRANDRAPDw8NDhEQEBANEBEQFREWFhURFhMYHSggGBonJxUTITEjJSkrMS4uFx8zODMsNygtLjcBCgoKBQUFDgUFDisZExkrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrK//AABEIAMgAyAMBIgACEQEDEQH/xAAbAAEAAgMBAQAAAAAAAAAAAAAAAQYEBQcCA//EADYQAAICAAIFCAoCAwEAAAAAAAABAgMEEQUGITHREhZBUVNhcaITIiMyQlKBkbHBYnIzgqEV/8QAFAEBAAAAAAAAAAAAAAAAAAAAAP/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/AO4gAAAAAAAAAAAAAPLZj3aRph79tUfGaAyga3/3ML29X3MinH0z9yyuXhKIGUDymegAAAAAAAAAAAAAAAAAAAAAACD533xrjKc2oxis230ID1OSSbbSS2tvYkVrSutkIZww69I93LeyC8Os0mndOzxMnCOcKk9kdzl3y4GnAzMbpXEXP2lk2vlT5MfsjDAAAADOwWl8RS1yLJZfLJ8uP2ZaNFa1V2ZQvXopPYpb4PgUkAdZjJNJppno5/oDT8sO1XZnOlvdvcO9d3cX2q2M4qUWpRks01uaA9ggkAAAAAAAAAAAAAAAACGUXWzSztsdEH7Ot+tl8U+CLPrFjvQYec0/Wl6kP7Pp/JzgAAAAAAAAAAABZNUdLOE1hrH6k37Nv4ZdXgythNpprY1tT6mB1pEmv0JjfT4euzpy5M/7LYzYAAAAAAAAAAAAAAAhkkMCm69YjOdNXQoux+LeS/BVzc63Tzxli+WMF/zP9mmAAAAAAAAAAAAAALZqLiP89L/jYvw/0W5FC1Mnli8vmrmvtky/AAAAAAAAAAAAAAAhkkMDn2t0csZY+uMH5cv0aYs+vOHyspt6JRdb8U81+SsAAAAAAAAAAAAAAG91Mjni8/lrm/wi+oqOouH/AM9v9a1+X+i3ICQAAAAAAAAAAAAAAAarWTAenw84pZyj7SHiuj8nOTrTRQ9a9EOmx3QXs7Hm/wCM+leDA0IAAAAAAAAAABLPYtvUCxao6Jdk1iJr1IP1M/in1+CAs+gsF6DD11v3suVP+z2vgbFBEgAAAAAAAAAAAAAAAAD44nDxthKuaUoyWTTPsAOc6c0JPDSclnOpv1Z9XdLqZqjp2PxdFcWr5VxTWTUsnmvDpKBpd4VzzwvpEm9qayh/rntAwAAAAAAA2GiLMLGeeKjZPJ7EsnD6rewMjQOgp4hqc84VJ7ZdMu6PEv1FMYRjCCUYxWSS3JGNgNIYe1JUzg8l7q9Vr/UzQJAAAAAAAAAAAAAAAAIbDZXtPaxxpzqpynZub3xh49b7gNrpHSNWHjyrZKPUt8n4IqOk9abbM40+xj175v69Bo8RfOyTnZJzk97f4PmBM5uTcpNyb3tvN/cgAAAAAAAAAAm081mmtzWxm70brNfVkrH6aHVL314S4mkAHStGaWpxCzrl63TB7JL6GwTOT12SjJSg3GS2prY0XDQWsynyasS1GW6M90Zdz6mBaQQmSAAAAAAAAAIbBX9adM+gh6Kt+1mt/wAkevxAxdZtYOTysPQ/W3WTXw/xXeU8AAAAAAAAAAAAAAAAAAAALPqzrA4uNF7zjurm/h/i31FzizkpcdU9NctLDWv1kvZyfxRXwvvQFqBCJAAAAAAMTSOMjRVO2e6K2LrfQjmmLxErbJ2zecpPN8Df66aQ5dkcPF+rXtn3zfR9P2VsAAAAAAAAAAAAAAAAAAAAAAHquxxlGcXlKLUovqa6TyAOlaF0isRTGzYpe7NdUlvNic/1S0h6K9Vt5Quyg+pS+F/ov4EgAAfDGXquudkt0IuT+iPsaDXPE8jDchb7JqP+q2v9AUe+1znKctrnJyfizwAAAAAAAAAAAAAAAAAAAAAAAAAATyaa2NPNeJ07RGL9NRVb0yiuV/ZbGcxZctRsTnXbU/gkprwlv/AFpAAEMpmvVudtNfywlL6t5foubKBrjPPFyXVXBf8AMwNIAAAAAAAAAAAAAAAAAAAAAAAAAABvtS7uTinH565L6rbxNCbPVqWWMw/fJr7xYHR0AgANJpPVqrEWyulO2LkorKPJy2LLpQAGLzNp7W7ycBzNp7W7ycCQBHM2ntbvJwHM2ntbvJwJAEczae1u8nAczae1u8nAkARzNp7W7ycBzNp7W7ycCQBHM2ntbvJwHM2ntbvJwJAEczae1u8nAczae1u8nAkARzNp7W7ycBzNp7W7ycCQBHM2ntbvJwHM2ntbvJwJAEczae1u8nAczae1u8nAkARzNp7W7ycBzNp7W7ycCQBHM2ntbvJwPvgtVqqra7Y2WtwlyknyMn47AAN8iQAP/9k=","นามสกุล":"นามสกุล","Location":"Example Location","ทักษะ 2":"ทักษะ 2","คะแนน 2":"คะแนน 2","เกณฑ์ 2":"เกณฑ์ 2","ทักษะ 3":"ทักษะ 3","คะแนน  3":"คะแนน 3","เกณฑ์ 3":"เกณฑ์ 3","ชื่อเกียร์ติบัตร 5":"ชื่อเกียร์ติบัตร 5","ชื่อเกียร์ติบัตร 6":"ชื่อเกียร์ติบัตร 6","ปีเกียร์ติบัตร 5":"ปีเกียร์ติบัตร 5","ปีเกียร์ติบัตร 6":"ปีเกียร์ติบัตร 6","ระดับ 2":"ระดับ 2","ปีจบ 2":"ปีจบ 2","คณะ 2":"คณะ 2","สถานศึกษา 2":"สถานศึกษา 2","เกรด 2":"เกรด 2","ระดับ 3":"ระดับ 3","ปีจบ 3":"ปีจบ 3","คณะ 3":"คณะ 3","สถานศึกษา 3":"สถานศึกษา 3 ","เกรดเฉลี่ย 1":"เกรดเฉลี่ย ","เกรดเฉลี่ย 2":"เกรดเฉลี่ย ","เกรดเฉลี่ย 3":"เกรดเฉลี่ย ","ชื่องาน 1 ":"[ชื่องาน]","ประเภทงาน 2":"[ประเภทงาน]","ชื่อบริษัท 2":"[ชื่อบริษัท]","ปีเริ่ม - ปีจบ 2":"[ปีเริ่ม - ปีจบ]","ข้อมูลงาน 2":"Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.","ชื่องาน 2":"[ชื่องาน]","ประเภทงาน 3":"[ประเภทงาน]","ชื่อบริษัท 3":"[ชื่อบริษัท]","ปีเริ่ม - ปีจบ 3":"[ปีเริ่ม - ปีจบ]","ข้อมูลงาน 3":"Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.","ชื่องาน 3":"[ชื่องาน]"}];
  
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

