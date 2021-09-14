import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import $ from 'jquery';
import Navbar from './Components/navbar';
import ProfileHeader from './Components/profileHeader';
import ProfileContent from './Components/profileContent';
import reportWebVitals from './reportWebVitals';
import { Link } from "react-router-dom";
import cookie from 'react-cookies'

class Home extends React.Component {
	constructor(props) {
		super(props);
		this.handleLoad = this.handleLoad.bind(this);
		this.state = {
			render: false //Set render state to false
		}
	 }
	
	componentDidMount() {
		window.addEventListener('load', this.handleLoad);
		console.log("YEAHXXX!");
		
		var token = cookie.load('login-token')
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
				
				const script = document.createElement("script");
				script.src = "assets/js/home.js";
				document.body.appendChild(script);
			});
			
	}
	
	componentWillUnmount() { 
	   window.removeEventListener('load', this.handleLoad)  
	}
	
	handleLoad() {
		console.log("YEAH!");
	}
	
	render (){
		if(this.state.render) {
			return (
			  <div className="Home">
				<Navbar />
				
				<div className="Header">
					<header class="header">
						<div class="container">     
							<div class="row align-items-end">
								<div class="col-md-7">
									<img class="profile-image img-fluid float-start rounded-circle" data-bs-toggle="tooltip" data-bs-placement="top" title="อัพโหลดรูปโปรไฟล์" type='button' id="avatar" src="assets/images/profile_uk.png" alt="profile image" />
									<input type="file" class="sr-only" id="input" accept="image/*" name="image" hidden />
									<div class="profile-content">
										<h1 class="name" id="fetch-name"></h1>
										<div id="tags-container">
										</div>
									<h2 class="desc-s" id="fetch-desc"> </h2> 
									</div>
								</div>
								<div class="col-md-5">
									 <div class="lg-view float-end">
										<Link to="/editprofile">
											<a class="btn btn-cta-primary round profile-button grey margin-right-m" target="_blank">แก้ไขโปรไฟล์</a>
										</Link>        
										<a class="btn btn-cta-primary-yellow round profile-button" href="#" target="_blank">เพิ่มกิจกรรมของคุณ</a>
									</div>
									
									<div class="sm-view">
										<Link to="/editprofile">
											<a class="btn btn-cta-primary round profile-button grey margin-right-m" target="_blank">แก้ไขโปรไฟล์</a>
										</Link>        
										<a class="btn btn-cta-primary-yellow round profile-button" href="#" target="_blank">เพิ่มกิจกรรมของคุณ</a>
									</div>
									
								</div>
							</div>
						</div>
						
						<div class="container">
							<div class="alert" role="alert"></div>
							<div class="modal fade" id="modal" tabindex="-1" role="dialog" aria-labelledby="modalLabel" aria-hidden="true">
							  <div class="modal-dialog" role="document">
								<div class="modal-content">
								  <div class="modal-header">
									<h5 class="modal-title" id="modalLabel">ปรับแต่งรูปโปรไฟล์</h5>
								  </div>
								  <div class="modal-body">
									<div class="img-container">
									  <img id="image" src="https://avatars0.githubusercontent.com/u/3456749" />
									</div>
								  </div>
								  <div class="modal-footer">
									<a class="btn btn-cta-primary round profile-button grey" data-bs-dismiss="modal">ยกเลิก</a>
									<a class="btn btn-cta-primary-yellow round profile-button" id="crop">ใช้งานรูปภาพ</a>
								  </div>
								</div>
							  </div>
							</div>
					  </div>
					</header>
				</div>
				
				<ProfileContent />
			  </div>
			)
		}else{
			return (
			  ''
			)
		}
	}
}

export default Home;
