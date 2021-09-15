import React from 'react';
import cookie from 'react-cookies';
import SharingPopup from './sharingpopup';
import MyResume1 from './myresume1';
import MyResume2 from './myresume2';
import MyResume3 from './myresume3';
import MyResumeEx from './myResumeEx';
import './myresume.css';

class MyResumeContent extends React.Component {
	constructor(props) {
		super(props);
		this.handleLoad = this.handleLoad.bind(this);
	 }
	
	componentDidMount() {
		/*Func GET UserID To Get Resume from UserId and then find ResumeId to show*/
		var token = cookie.load('login-token')
		fetch("http://localhost:2000/profile/",{
			method: "GET",
			headers: {
				'Authorization': 'Bearer '+token,
				"Access-Control-Allow-Origin": "*",
				"Access-Control-Allow-Methods": "*",
				"Access-Control-Allow-Credentials": true,
				"Content-Type": "application/json"
			},
		})
		.then(function(response) {
			return response.text().then(function(text) {
              console.log("UserID : "+ text);
			});
		 });
		 
		window.addEventListener('load', this.handleLoad);
		console.log("YEAHXXX!");
		const script = document.createElement("script");
		script.src = "assets/js/myresume.js";
		document.body.appendChild(script);
		
	}
	
	componentWillUnmount() { 
	   window.removeEventListener('load', this.handleLoad)  
	}
	
	handleLoad() {
		console.log("YEAH!");
	 }
	render (){
		return (
			<div className="MyResumeContent">
				<h1>Example</h1>
				<MyResumeEx></MyResumeEx>
				<h1>MyResume Content Space</h1>
				<MyResume1></MyResume1>
				<MyResume2></MyResume2>
				<MyResume3></MyResume3>
				<h1>Testing Sharing Space</h1>
				<SharingPopup></SharingPopup>
			</div>
		);
	}
}

export default MyResumeContent;
