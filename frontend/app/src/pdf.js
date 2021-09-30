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
				const inputs = [{"ชื่อ-นามสกุล":"Comrade General","tag":"[comrade]","AboutMe":"Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.","Email":"Comrade@gmail.com","ประเภทงาน 1":"[ประเภทงาน]","ชื่อบริษัท 1":"[ชื่อบริษัท]","ปีเริ่ม - ปีจบ 1":"[ปีเริ่ม - ปีจบ]","ข้อมูลงาน 1":"Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.","ประเภทงาน 2":"[ประเภทงาน]","ชื่อบริษัท 2":"[ชื่อบริษัท]","ปีเริ่ม - ปีจบ 2":"[ปีเริ่ม - ปีจบ]","ข้อมูลงาน 2":"Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.","ประเภทงาน 3":"[ประเภทงาน]","ชื่อบริษัท 3":"[ชื่อบริษัท]","ปีเริ่ม - ปีจบ 3":"[ปีเริ่ม - ปีจบ]","ข้อมูลงาน 3":"Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.","ทักษะ 1":"ทักษะ 1","ทักษะ 2":"ทักษะ 2","ทักษะ 3":"ทักษะ 3","คะแนน 1":"คะแนน 1","คะแนน 2":"คะแนน 2","คะแนน 3":"คะแนน 3","เกณฑ์ 1":"เกณฑ์ 1","เกณฑ์ 2":"เกณฑ์ 2","เกณฑ์ 3":"เกณฑ์ 3","เพิ่มเติม 1":"เพิ่มเติม 1","เพิ่มเติม 2":"เพิ่มเติม 2","เพิ่มเติม 3":"เพิ่มเติม 3","เป้าหมายการทำงาน 1":"Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.","เป้าหมายการทำงาน 2":"Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.","เป้าหมายการทำงาน 3":"Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.","ระดับ 1":"ระดับ 1","ปีจบ 1":"ปีจบ 1","คณะ 1":"คณะ 1","สถานศึกษา 1 ":"สถานศึกษา 1 ","เกรด 1":"เกรด 1","ระดับ 2":"ระดับ 2","ปีจบ 2":"ปีจบ 2","คณะ 2":"คณะ 2","สถานศึกษา 2":"สถานศึกษา 2","เกรด 2":"เกรด 2","ชื่อเกียร์ติบัตร 1 ":"ชื่อเกียร์ติบัตร 1 ","ชื่อเกียร์ติบัตร 2":"ชื่อเกียร์ติบัตร 2","ชื่อเกียร์ติบัตร 3":"ชื่อเกียร์ติบัตร 3","ชื่อเกียร์ติบัตร 4":"ชื่อเกียร์ติบัตร 4","ปีเกียร์ติบัตร 1 ":"ปีเกียร์ติบัตร 1 ","ปีเกียร์ติบัตร 2":"ปีเกียร์ติบัตร 2","ปีเกียร์ติบัตร 3":"ปีเกียร์ติบัตร 3","ปีเกียร์ติบัตร 4":"ปีเกียร์ติบัตร 4","รูปภาพ":"data:image/jpeg;base64,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"}];
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

