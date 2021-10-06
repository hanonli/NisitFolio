import labelmake from "labelmake";
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import $, { data } from 'jquery';
import Navbar from './Components/navbar';
import ProfileHeader from './Components/profileHeader';
import ProfileContent from './Components/profileContent';
import LoadingL from './Components/loadingL';
import reportWebVitals from './reportWebVitals';
import { Link } from "react-router-dom";
import { Redirect } from "react-router-dom";
import cookie from 'react-cookies'
import tahomo from './tahomo';
import basePdf from "./template-1";
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

                (async () => {
                const template = {
                    fontName: 'tahomo',
                    basePdf,
					"schemas": [
						{
							"ชื่อ-นามสกุล": {
								"type": "text",
								"position": {
									"x": 100.17,
									"y": 16.03
								},
								"width": 100,
								"height": 15,
								"alignment": "center",
								"fontSize": 34,
								"characterSpacing": 0,
								"lineHeight": 1,
								"fontColor": "#5b4837"
							},
							"tag": {
								"type": "text",
								"position": {
									"x": 99.9,
									"y": 32.61
								},
								"width": 100,
								"height": 6.39,
								"alignment": "right",
								"fontSize": 13,
								"characterSpacing": 0,
								"lineHeight": 1,
								"fontColor": "#5b4837"
							},
							"AboutMe": {
								"type": "text",
								"position": {
									"x": 99.74,
									"y": 42.07
								},
								"width": 101.15,
								"height": 16.26,
								"alignment": "left",
								"fontSize": 10,
								"characterSpacing": 0,
								"lineHeight": 1
							},
							"Email": {
								"type": "text",
								"position": {
									"x": 110.47,
									"y": 60.8
								},
								"width": 74.15,
								"height": 14.4,
								"alignment": "center",
								"fontSize": 12,
								"characterSpacing": 0,
								"lineHeight": 3,
								"fontColor": "#ffffff"
							},
							"ประเภทงาน 1": {
								"type": "text",
								"position": {
									"x": 115.1,
									"y": 110.6
								},
								"width": 19.39,
								"height": 4.88,
								"alignment": "left",
								"fontSize": 9,
								"characterSpacing": 0,
								"lineHeight": 1
							},
							"ชื่อบริษัท 1": {
								"type": "text",
								"position": {
									"x": 137.54,
									"y": 110.82
								},
								"width": 19.39,
								"height": 4.88,
								"alignment": "left",
								"fontSize": 9,
								"characterSpacing": 0,
								"lineHeight": 1
							},
							"ปีเริ่ม - ปีจบ 1": {
								"type": "text",
								"position": {
									"x": 159.98,
									"y": 111.03
								},
								"width": 19.39,
								"height": 4.88,
								"alignment": "left",
								"fontSize": 9,
								"characterSpacing": 0,
								"lineHeight": 1
							},
							"ข้อมูลงาน 1": {
								"type": "text",
								"position": {
									"x": 114.92,
									"y": 118.49
								},
								"width": 84.75,
								"height": 14.14,
								"alignment": "left",
								"fontSize": 10,
								"characterSpacing": 0,
								"lineHeight": 1
							},
							"ประเภทงาน 2": {
								"type": "text",
								"position": {
									"x": 115.31,
									"y": 136.21
								},
								"width": 19.39,
								"height": 4.88,
								"alignment": "left",
								"fontSize": 9,
								"characterSpacing": 0,
								"lineHeight": 1
							},
							"ชื่อบริษัท 2": {
								"type": "text",
								"position": {
									"x": 137.75,
									"y": 136.43
								},
								"width": 19.39,
								"height": 4.88,
								"alignment": "left",
								"fontSize": 9,
								"characterSpacing": 0,
								"lineHeight": 1
							},
							"ปีเริ่ม - ปีจบ 2": {
								"type": "text",
								"position": {
									"x": 160.19,
									"y": 136.64
								},
								"width": 19.39,
								"height": 4.88,
								"alignment": "left",
								"fontSize": 9,
								"characterSpacing": 0,
								"lineHeight": 1
							},
							"ข้อมูลงาน 2": {
								"type": "text",
								"position": {
									"x": 115.13,
									"y": 144.1
								},
								"width": 84.75,
								"height": 14.14,
								"alignment": "left",
								"fontSize": 10,
								"characterSpacing": 0,
								"lineHeight": 1
							},
							"ประเภทงาน 3": {
								"type": "text",
								"position": {
									"x": 114.99,
									"y": 162.09
								},
								"width": 19.39,
								"height": 4.88,
								"alignment": "left",
								"fontSize": 9,
								"characterSpacing": 0,
								"lineHeight": 1
							},
							"ชื่อบริษัท 3": {
								"type": "text",
								"position": {
									"x": 137.43,
									"y": 162.3
								},
								"width": 19.39,
								"height": 4.88,
								"alignment": "left",
								"fontSize": 9,
								"characterSpacing": 0,
								"lineHeight": 1
							},
							"ปีเริ่ม - ปีจบ 3": {
								"type": "text",
								"position": {
									"x": 159.87,
									"y": 162.52
								},
								"width": 19.39,
								"height": 4.88,
								"alignment": "left",
								"fontSize": 9,
								"characterSpacing": 0,
								"lineHeight": 1
							},
							"ข้อมูลงาน 3": {
								"type": "text",
								"position": {
									"x": 114.81,
									"y": 169.97
								},
								"width": 84.75,
								"height": 14.14,
								"alignment": "left",
								"fontSize": 10,
								"characterSpacing": 0,
								"lineHeight": 1
							},
							"ทักษะ 1": {
								"type": "text",
								"position": {
									"x": 18.21,
									"y": 112.4
								},
								"width": 19.39,
								"height": 4.88,
								"alignment": "left",
								"fontSize": 9,
								"characterSpacing": 0,
								"lineHeight": 1
							},
							"ทักษะ 2": {
								"type": "text",
								"position": {
									"x": 18.15,
									"y": 122.14
								},
								"width": 19.39,
								"height": 4.88,
								"alignment": "left",
								"fontSize": 9,
								"characterSpacing": 0,
								"lineHeight": 1
							},
							"ทักษะ 3": {
								"type": "text",
								"position": {
									"x": 18.1,
									"y": 132.92
								},
								"width": 19.39,
								"height": 4.88,
								"alignment": "left",
								"fontSize": 9,
								"characterSpacing": 0,
								"lineHeight": 1
							},
							"คะแนน 1": {
								"type": "text",
								"position": {
									"x": 42.76,
									"y": 112.61
								},
								"width": 19.39,
								"height": 4.88,
								"alignment": "left",
								"fontSize": 9,
								"characterSpacing": 0,
								"lineHeight": 1
							},
							"คะแนน 2": {
								"type": "text",
								"position": {
									"x": 42.44,
									"y": 122.61
								},
								"width": 19.39,
								"height": 4.88,
								"alignment": "left",
								"fontSize": 9,
								"characterSpacing": 0,
								"lineHeight": 1
							},
							"คะแนน 3": {
								"type": "text",
								"position": {
									"x": 42.12,
									"y": 133.67
								},
								"width": 19.39,
								"height": 4.88,
								"alignment": "left",
								"fontSize": 9,
								"characterSpacing": 0,
								"lineHeight": 1
							},
							"เกณฑ์ 1": {
								"type": "text",
								"position": {
									"x": 68.9,
									"y": 113.08
								},
								"width": 19.39,
								"height": 4.88,
								"alignment": "left",
								"fontSize": 9,
								"characterSpacing": 0,
								"lineHeight": 1
							},
							"เกณฑ์ 2": {
								"type": "text",
								"position": {
									"x": 68.31,
									"y": 123.61
								},
								"width": 19.39,
								"height": 4.88,
								"alignment": "left",
								"fontSize": 9,
								"characterSpacing": 0,
								"lineHeight": 1
							},
							"เกณฑ์ 3": {
								"type": "text",
								"position": {
									"x": 67.72,
									"y": 133.4
								},
								"width": 19.39,
								"height": 4.88,
								"alignment": "left",
								"fontSize": 9,
								"characterSpacing": 0,
								"lineHeight": 1
							},
							"เพิ่มเติม 1": {
								"type": "text",
								"position": {
									"x": 23.22,
									"y": 168.27
								},
								"width": 15.42,
								"height": 4.88,
								"alignment": "left",
								"fontSize": 9,
								"characterSpacing": 0,
								"lineHeight": 1
							},
							"เพิ่มเติม 2": {
								"type": "text",
								"position": {
									"x": 52.27,
									"y": 168.74
								},
								"width": 15.42,
								"height": 4.88,
								"alignment": "left",
								"fontSize": 9,
								"characterSpacing": 0,
								"lineHeight": 1
							},
							"เพิ่มเติม 3": {
								"type": "text",
								"position": {
									"x": 81.85,
									"y": 168.43
								},
								"width": 15.42,
								"height": 4.88,
								"alignment": "left",
								"fontSize": 9,
								"characterSpacing": 0,
								"lineHeight": 1
							},
							"เป้าหมายการทำงาน 1": {
								"type": "text",
								"position": {
									"x": 115.02,
									"y": 197.17
								},
								"width": 84.75,
								"height": 14.14,
								"alignment": "left",
								"fontSize": 10,
								"characterSpacing": 0,
								"lineHeight": 1
							},
							"เป้าหมายการทำงาน 2": {
								"type": "text",
								"position": {
									"x": 114.7,
									"y": 216.96
								},
								"width": 84.75,
								"height": 14.14,
								"alignment": "left",
								"fontSize": 10,
								"characterSpacing": 0,
								"lineHeight": 1
							},
							"เป้าหมายการทำงาน 3": {
								"type": "text",
								"position": {
									"x": 114.43,
									"y": 236.22
								},
								"width": 84.75,
								"height": 14.14,
								"alignment": "left",
								"fontSize": 10,
								"characterSpacing": 0,
								"lineHeight": 1
							},
							"ระดับ 1": {
								"type": "text",
								"position": {
									"x": 20.57,
									"y": 194.99
								},
								"width": 17.54,
								"height": 3.82,
								"alignment": "left",
								"fontSize": 9,
								"characterSpacing": 0,
								"lineHeight": 1
							},
							"ปีจบ 1": {
								"type": "text",
								"position": {
									"x": 43.53,
									"y": 195.2
								},
								"width": 17.54,
								"height": 3.82,
								"alignment": "left",
								"fontSize": 9,
								"characterSpacing": 0,
								"lineHeight": 1
							},
							"คณะ 1": {
								"type": "text",
								"position": {
									"x": 20.2,
									"y": 202.29
								},
								"width": 17.54,
								"height": 3.82,
								"alignment": "left",
								"fontSize": 9,
								"characterSpacing": 0,
								"lineHeight": 1
							},
							"สถานศึกษา 1 ": {
								"type": "text",
								"position": {
									"x": 20.15,
									"y": 209.38
								},
								"width": 21.77,
								"height": 3.82,
								"alignment": "left",
								"fontSize": 9,
								"characterSpacing": 0,
								"lineHeight": 1
							},
							"เกรด 1": {
								"type": "text",
								"position": {
									"x": 72.05,
									"y": 201.23
								},
								"width": 17.54,
								"height": 3.82,
								"alignment": "left",
								"fontSize": 9,
								"characterSpacing": 0,
								"lineHeight": 1
							},
							"ระดับ 2": {
								"type": "text",
								"position": {
									"x": 20.52,
									"y": 216.9
								},
								"width": 17.54,
								"height": 3.82,
								"alignment": "left",
								"fontSize": 9,
								"characterSpacing": 0,
								"lineHeight": 1
							},
							"ปีจบ 2": {
								"type": "text",
								"position": {
									"x": 43.48,
									"y": 217.11
								},
								"width": 17.54,
								"height": 3.82,
								"alignment": "left",
								"fontSize": 9,
								"characterSpacing": 0,
								"lineHeight": 1
							},
							"คณะ 2": {
								"type": "text",
								"position": {
									"x": 20.15,
									"y": 224.2
								},
								"width": 17.54,
								"height": 3.82,
								"alignment": "left",
								"fontSize": 9,
								"characterSpacing": 0,
								"lineHeight": 1
							},
							"สถานศึกษา 2": {
								"type": "text",
								"position": {
									"x": 20.1,
									"y": 231.29
								},
								"width": 21.77,
								"height": 3.82,
								"alignment": "left",
								"fontSize": 9,
								"characterSpacing": 0,
								"lineHeight": 1
							},
							"เกรด 2": {
								"type": "text",
								"position": {
									"x": 72,
									"y": 223.14
								},
								"width": 17.54,
								"height": 3.82,
								"alignment": "left",
								"fontSize": 9,
								"characterSpacing": 0,
								"lineHeight": 1
							},
							"ชื่อเกียร์ติบัตร 1 ": {
								"type": "text",
								"position": {
									"x": 19.93,
									"y": 248.32
								},
								"width": 26.8,
								"height": 4.35,
								"alignment": "left",
								"fontSize": 9,
								"characterSpacing": 0,
								"lineHeight": 1
							},
							"ชื่อเกียร์ติบัตร 2": {
								"type": "text",
								"position": {
									"x": 19.87,
									"y": 254.88
								},
								"width": 26.79,
								"height": 4.08,
								"alignment": "left",
								"fontSize": 9,
								"characterSpacing": 0,
								"lineHeight": 1
							},
							"ชื่อเกียร์ติบัตร 3": {
								"type": "text",
								"position": {
									"x": 19.82,
									"y": 261.97
								},
								"width": 26.79,
								"height": 4.6,
								"alignment": "left",
								"fontSize": 9,
								"characterSpacing": 0,
								"lineHeight": 1
							},
							"ชื่อเกียร์ติบัตร 4": {
								"type": "text",
								"position": {
									"x": 20.29,
									"y": 269.59
								},
								"width": 25.47,
								"height": 3.81,
								"alignment": "left",
								"fontSize": 9,
								"characterSpacing": 0,
								"lineHeight": 1
							},
							"ปีเกียร์ติบัตร 1 ": {
								"type": "text",
								"position": {
									"x": 72,
									"y": 247.47
								},
								"width": 26.8,
								"height": 4.35,
								"alignment": "left",
								"fontSize": 9,
								"characterSpacing": 0,
								"lineHeight": 1
							},
							"ปีเกียร์ติบัตร 2": {
								"type": "text",
								"position": {
									"x": 71.94,
									"y": 254.03
								},
								"width": 26.79,
								"height": 4.08,
								"alignment": "left",
								"fontSize": 9,
								"characterSpacing": 0,
								"lineHeight": 1
							},
							"ปีเกียร์ติบัตร 3": {
								"type": "text",
								"position": {
									"x": 71.89,
									"y": 261.12
								},
								"width": 26.79,
								"height": 4.6,
								"alignment": "left",
								"fontSize": 9,
								"characterSpacing": 0,
								"lineHeight": 1
							},
							"ปีเกียร์ติบัตร 4": {
								"type": "text",
								"position": {
									"x": 72.36,
									"y": 268.74
								},
								"width": 25.47,
								"height": 3.81,
								"alignment": "left",
								"fontSize": 9,
								"characterSpacing": 0,
								"lineHeight": 1
							},
							"รูปภาพ": {
								"type": "image",
								"position": {
									"x": 18.52,
									"y": 10.58
								},
								"width": 65.95,
								"height": 64.94
							}
						}
					]
				};
				let cal1 = "พอใช้";
				let cal2 = "พอใช้";
				let cal3 = "พอใช้";
				if (datas[0].interestedJob[0].Job_Score[0] > 5){
					cal1 = "ดีมาก";	
				}
				if (datas[0].interestedJob[0].Job_Score[1] > 5){
					cal2 = "ดีมาก";
				}
				if (datas[0].interestedJob[0].Job_Score[2] > 5){
					cal3 = "ดีมาก";
				}
				
				const inputs = [{"ชื่อ-นามสกุล":datas[0].Owner,
				"tag":datas[0].interestedJob.Job_JobName,
				"AboutMe":datas[0].Aboutme,
				"Email":datas[0].Email,
				"ประเภทงาน 1":datas[0].workHistorys[0].Work_JobName,
				"ชื่อบริษัท 1":datas[0].workHistorys[0].Work_Company,
				"ปีเริ่ม - ปีจบ 1":datas[0].workHistorys[0].Work_Start_Year	+ "-" + datas[0].workHistorys[0].Work_End_Year,
				"ข้อมูลงาน 1":datas[0].workHistorys[0].Work_Infomation,
				"ประเภทงาน 2":datas[0].workHistorys[1].Work_JobName,
				"ชื่อบริษัท 2":datas[0].workHistorys[1].Work_Company,
				"ปีเริ่ม - ปีจบ 2":datas[0].workHistorys[1].Work_Start_Year	+ "-" + datas[0].workHistorys[1].Work_End_Year,
				"ข้อมูลงาน 2":datas[0].workHistorys[1].Work_Infomation,
				"ประเภทงาน 3":datas[0].workHistorys[2].Work_JobName,
				"ชื่อบริษัท 3":datas[0].workHistorys[2].Work_Company,
				"ปีเริ่ม - ปีจบ 3":datas[0].workHistorys[2].Work_Start_Year	+ "-" + datas[0].workHistorys[2].Work_End_Year,
				"ข้อมูลงาน 3":datas[0].workHistorys[2].Work_Infomation,
				"ทักษะ 1":datas[0].interestedJob[0].Job_SkillName[0],
				"ทักษะ 2":datas[0].interestedJob[0].Job_SkillName[1],
				"ทักษะ 3":datas[0].interestedJob[0].Job_SkillName[2],
				"คะแนน 1":datas[0].interestedJob[0].Job_Score[0].toString(),
				"คะแนน 2":datas[0].interestedJob[0].Job_Score[1].toString(),
				"คะแนน 3":datas[0].interestedJob[0].Job_Score[2].toString(),
				"เกณฑ์ 1":cal1,
				"เกณฑ์ 2":cal2,
				"เกณฑ์ 3":cal3,
				"เพิ่มเติม 1":datas[0].additionalSkills[0].AdditionalSkill,
				"เพิ่มเติม 2":datas[0].additionalSkills[1].AdditionalSkill,
				"เพิ่มเติม 3":datas[0].additionalSkills[2].AdditionalSkill,
				"เป้าหมายการทำงาน 1":datas[0].interestedJob[0].Job_Objective[0],
				"เป้าหมายการทำงาน 2":datas[0].interestedJob[0].Job_Objective[1],
				"เป้าหมายการทำงาน 3":datas[0].interestedJob[0].Job_Objective[2],
				"ระดับ 1":datas[0].educationHistorys[0].Degree,
				"ปีจบ 1":datas[0].educationHistorys[0].Education_End_Year.toString(),
				"คณะ 1":datas[0].educationHistorys[0].Facalty,
				"สถานศึกษา 1 ":datas[0].educationHistorys[0].Academy,
				"เกรด 1":datas[0].educationHistorys[0].Grade.toString(),
				"ระดับ 2":datas[0].educationHistorys[1].Degree,
				"ปีจบ 2":datas[0].educationHistorys[1].Education_End_Year.toString(),
				"คณะ 2":datas[0].educationHistorys[1].Facalty,
				"สถานศึกษา 2":datas[0].educationHistorys[1].Academy,
				"เกรด 2":datas[0].educationHistorys[1].Grade.toString(),
				"ชื่อเกียร์ติบัตร 1 ":datas[0].certificates[0].CertName,
				"ชื่อเกียร์ติบัตร 2":datas[0].certificates[1].CertName,
				"ชื่อเกียร์ติบัตร 3":datas[0].certificates[2].CertName,
				"ชื่อเกียร์ติบัตร 4":datas[0].certificates[3].CertName,
				"ปีเกียร์ติบัตร 1 ":datas[0].certificates[0].CertYear.toString(),
				"ปีเกียร์ติบัตร 2":datas[0].certificates[1].CertYear.toString(),
				"ปีเกียร์ติบัตร 3":datas[0].certificates[2].CertYear.toString(),
				"ปีเกียร์ติบัตร 4":datas[0].certificates[3].CertYear.toString(),
				"รูปภาพ":datas[0].ProfilePic}];
				//const inputs = [{"ชื่อ-นามสกุล":datas[0].Owner,"tag":"[comrade]","AboutMe":datas[0].AboutMe,"Email":datas[0].Email,"ประเภทงาน 1":"[ประเภทงาน]","ชื่อบริษัท 1":"[ชื่อบริษัท]","ปีเริ่ม - ปีจบ 1":"[ปีเริ่ม - ปีจบ]","ข้อมูลงาน 1":"Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.","ประเภทงาน 2":"[ประเภทงาน]","ชื่อบริษัท 2":"[ชื่อบริษัท]","ปีเริ่ม - ปีจบ 2":"[ปีเริ่ม - ปีจบ]","ข้อมูลงาน 2":"Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.","ประเภทงาน 3":"[ประเภทงาน]","ชื่อบริษัท 3":"[ชื่อบริษัท]","ปีเริ่ม - ปีจบ 3":"[ปีเริ่ม - ปีจบ]","ข้อมูลงาน 3":"Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.","ทักษะ 1":"ทักษะ 1","ทักษะ 2":"ทักษะ 2","ทักษะ 3":"ทักษะ 3","คะแนน 1":"คะแนน 1","คะแนน 2":"คะแนน 2","คะแนน 3":"คะแนน 3","เกณฑ์ 1":"เกณฑ์ 1","เกณฑ์ 2":"เกณฑ์ 2","เกณฑ์ 3":"เกณฑ์ 3","เพิ่มเติม 1":"เพิ่มเติม 1","เพิ่มเติม 2":"เพิ่มเติม 2","เพิ่มเติม 3":"เพิ่มเติม 3","เป้าหมายการทำงาน 1":"Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.","เป้าหมายการทำงาน 2":"Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.","เป้าหมายการทำงาน 3":"Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.","ระดับ 1":"ระดับ 1","ปีจบ 1":"ปีจบ 1","คณะ 1":"คณะ 1","สถานศึกษา 1 ":"สถานศึกษา 1 ","เกรด 1":"เกรด 1","ระดับ 2":"ระดับ 2","ปีจบ 2":"ปีจบ 2","คณะ 2":"คณะ 2","สถานศึกษา 2":"สถานศึกษา 2","เกรด 2":"เกรด 2","ชื่อเกียร์ติบัตร 1 ":"ชื่อเกียร์ติบัตร 1 ","ชื่อเกียร์ติบัตร 2":"ชื่อเกียร์ติบัตร 2","ชื่อเกียร์ติบัตร 3":"ชื่อเกียร์ติบัตร 3","ชื่อเกียร์ติบัตร 4":"ชื่อเกียร์ติบัตร 4","ปีเกียร์ติบัตร 1 ":"ปีเกียร์ติบัตร 1 ","ปีเกียร์ติบัตร 2":"ปีเกียร์ติบัตร 2","ปีเกียร์ติบัตร 3":"ปีเกียร์ติบัตร 3","ปีเกียร์ติบัตร 4":"ปีเกียร์ติบัตร 4","รูปภาพ":datas[0].ProfilePic}];
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

