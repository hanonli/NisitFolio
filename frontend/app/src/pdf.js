import labelmake from "labelmake";
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import $ from 'jquery';
import Navbar from './Components/navbar';
import ProfileHeader from './Components/profileHeader';
import ProfileContent from './Components/profileContent';
import LoadingL from './Components/loadingL';
import reportWebVitals from './reportWebVitals';
import { Link } from "react-router-dom";
import { Redirect } from "react-router-dom";
import cookie from 'react-cookies'
import tahomo from './tahomo';
import basePdf from "./template";
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
		
		fetch("http://localhost:2000/homepage/",{
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
				//console.log(datas);
				console.log(datas.Firstname);
				console.log(datas.Lastname);
				console.log(datas.AboutMe);
				console.log(datas.ProfilePic);
				console.log(datas.Job_JobName);
				
				this.setState({ render: true });
				
				$('#fetch-name').text(datas.Firstname+' '+datas.Lastname);
				$('#fetch-desc').text(datas.AboutMe);
				$('#avatar').attr("src", datas.ProfilePic);
				datas.Job_JobName.forEach((entry) => {
					console.log('HHHH');
					$('#tags-container').append('<a class="btn btn-cta-secondary btn-small round margin-right-s" href="#" target="_blank">'+entry+'</a>');
				});
				
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
                                    "x": 94.88,
                                    "y": 21.32
                                },
                                "width": 100,
                                "height": 15,
                                "alignment": "center",
                                "fontSize": 47,
                                "characterSpacing": 0,
                                "lineHeight": 1,
                                "fontColor": "#e8cc11"
                            },
                            "Tag": {
                                "type": "text",
                                "position": {
                                    "x": 86.15,
                                    "y": 42.67
                                },
                                "width": 61.89,
                                "height": 9.31,
                                "alignment": "left",
                                "fontSize": 20,
                                "characterSpacing": 0,
                                "lineHeight": 1,
                                "fontColor": "#0a0a0a"
                            },
                            "รูป": {
                                "type": "image",
                                "position": {
                                    "x": 11.48,
                                    "y": 16.77
                                },
                                "width": 51.85,
                                "height": 46.75
                            }
                        }
                    ]
                };
                const inputs = [
                    { "ชื่อ-นามสกุล": datas.Firstname+" "+datas.Lastname, "Tag": datas.Job_JobName[0],"รูป": datas.ProfilePic },
                ];
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

