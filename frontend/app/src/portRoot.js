import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Navbar from './Components/navbar';
import reportWebVitals from './reportWebVitals';
import cookie from 'react-cookies'
import { Redirect } from "react-router-dom";
import $ from 'jquery';

class PortRoot extends React.Component {
	constructor(props) {
		super(props);
		this.handleLoad = this.handleLoad.bind(this);
		this.state = {
			render: false, //Set render state to false
			redirect: null,
			portEmpty: true
		}
	 }
	
	componentDidMount() {
		window.addEventListener('load', this.handleLoad);
		console.log("YEAHXXX!");
		window.addEventListener('load', this.handleLoad);
		console.log("YEAHXXX!");

		var token = cookie.load('login-token');
		var refThis = this;
		
		fetch("http://localhost:2000/portfolio/",{
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
				if(datas.length < 1){ //no port
					this.setState({ portEmpty: true });
					
					$('#empty-zone').on('click', function(){
						  refThis.setState({ redirect: "/editport" });
					  });
					  
				}else{
					this.setState({ portEmpty: false });
					
					$(window).scroll(function() {
					  console.log("scroll!");

					// .scrollTop() retrieves vertical position of the scroll bar for the first element in a set of matched elements
					var scroll = $(window).scrollTop();

					var objectSelect = $('#anim-pos');
					
					// .offset() retrieves current position of element relative to document
					var objectPosition = objectSelect.offset().top;

					if (scroll > objectPosition+100) {
						console.log("PostAnim");
						$('.pt-header').addClass('pt-header-anim');
						$('.pt-name').addClass('pt-name-anim');
						$('.pt-pad').addClass('pt-pad-anim');
						$('.pf-fx').addClass('pf-fx-anim');
					} else {
						console.log("PreAnim");
						$('.pt-header').removeClass('pt-header-anim');
						$('.pt-name').removeClass('pt-name-anim');
						$('.pt-pad').removeClass('pt-pad-anim');
						$('.pf-fx').removeClass('pf-fx-anim');
					}
				  });
				  
				  $(".dynamic-footer-arrow").click(function() {
						$('html, body').animate({
							scrollTop: $("#anim-pos").offset().top+120
						}, 1);
					});
				}
				
				
				
			}).catch((error) => {
				console.log('Token Error!');
				this.setState({ redirect: "/landing" });
			});

		
	}
	
	componentWillUnmount() { 
	   window.removeEventListener('load', this.handleLoad);
	   $(window).unbind('scroll');
	}
	
	handleLoad() {
		console.log("YEAH!");
	 }
	
	render (){
		if (this.state.redirect) {
			return <Redirect to={this.state.redirect} />
		}
		
		if(!this.state.portEmpty){
			return (
				<div className="PortRoot">
					<Navbar /> <br></br>
					<header class="header-white lg-view bookmark-header-fixed">
						<div class="container-fluid yahaha2">     
							<div class="row">
								<div class="col">
									<div class="topDataBk-content">
										<h1 class="name inline">Portfolio</h1>
										<h1></h1>
									</div>
								</div>
							</div>        
						</div>
					</header>
					<br></br>
					<div class="nf-flex">
						<header class="header header-azure nf-header round" id="empty-zone">
							<img class="nf-i" src="assets/images/outline_add_black_24dp hd.png" alt=""/>
							<abf class="nf-n">เพิ่มผลงานเจ๋ง ๆ ของคุณได้ที่นี่</abf>
						</header>
					</div>
				</div>
			);
		}else{
			return (
				<div className="PortRoot">
					<Navbar /> <br></br>
					<header class="header-white lg-view bookmark-header-fixed pt-header">
						<div class="container-fluid yahaha2">     
							<div class="row">
								<div class="col">
									<div class="topDataBk-content">
										<h1 class="name inline pt-name">Portfolio</h1>
										<h1></h1>
									</div>
								</div>
							</div>        
						</div>
						<a class="btn btn-cta-primary-yellow round profile-button pf-fx" target="_blank">เพิ่มกิจกรรมของคุณ</a>
					</header>
					<div class="pt-pad"></div>
					<div class="nf-flex">
						<header class="header header-azure hf-header round" id="empty-zone">
							<img class="hf-i" src="assets/images/outline_add_black_24dp hd.png" alt=""/>
							<abf class="hf-n" id="anim-pos">เพิ่มผลงานเจ๋ง ๆ ของคุณได้ที่นี่</abf>
						</header>
					</div>
					<br></br><br></br>
					<div class="port-box">
						<br></br>
						<div class="dfa-flex">
							<img class="dynamic-footer-arrow" src="assets/images/arrow_up1.png"></img>
							<div class="dynamic-footer-label">ผลงานของคุณ</div>
						</div>
						<br></br>
						<div class="pft-flex">
							<div class="lb-container">
								<img class="pft-i" src="assets/images/4ktestimage.jpg" alt=""/>
								<div class="hover-box">
									<img class="pft-overlay" src="assets/images/black.jpg" alt=""/>
									<img class="pft-lock-icon" src="assets/images/outline_lock_white_24dp.png" alt=""/>
									<img class="pft-del-icon" src="assets/images/white_bin.png" alt=""/>
									<img class="pft-edit-icon" src="assets/images/whiteedit.png" alt=""/>
									<div class="pft-name">ชื่อผลงานสุดแสนจะยาวเหยียดงูจงอางเดินสามขาไปจิกไก่ชน</div>
									<div class="pft-date">26 มิถุนายน 2564</div>
								</div>
							</div>
							<div class="lb-container">
								<img class="pft-i" src="assets/images/4ktestimage.jpg" alt=""/>
								<div class="hover-box">
									<img class="pft-overlay" src="assets/images/black.jpg" alt=""/>
									<img class="pft-lock-icon" src="assets/images/outline_lock_white_24dp.png" alt=""/>
									<img class="pft-del-icon" src="assets/images/white_bin.png" alt=""/>
									<img class="pft-edit-icon" src="assets/images/whiteedit.png" alt=""/>
									<div class="pft-name">ชื่อผลงานสุดแสนจะยาวเหยียดงูจงอางเดินสามขาไปจิกไก่ชน</div>
									<div class="pft-date">26 มิถุนายน 2564</div>
								</div>
							</div>
							<div class="lb-container">
								<img class="pft-i" src="assets/images/4ktestimage.jpg" alt=""/>
								<div class="hover-box">
									<img class="pft-overlay" src="assets/images/black.jpg" alt=""/>
									<img class="pft-lock-icon" src="assets/images/outline_lock_white_24dp.png" alt=""/>
									<img class="pft-del-icon" src="assets/images/white_bin.png" alt=""/>
									<img class="pft-edit-icon" src="assets/images/whiteedit.png" alt=""/>
									<div class="pft-name">ชื่อผลงานสุดแสนจะยาวเหยียดงูจงอางเดินสามขาไปจิกไก่ชน</div>
									<div class="pft-date">26 มิถุนายน 2564</div>
								</div>
							</div>
							<div class="lb-container">
								<img class="pft-i" src="assets/images/4ktestimage.jpg" alt=""/>
								<div class="hover-box">
									<img class="pft-overlay" src="assets/images/black.jpg" alt=""/>
									<img class="pft-lock-icon" src="assets/images/outline_lock_white_24dp.png" alt=""/>
									<img class="pft-del-icon" src="assets/images/white_bin.png" alt=""/>
									<img class="pft-edit-icon" src="assets/images/whiteedit.png" alt=""/>
									<div class="pft-name">ชื่อผลงานสุดแสนจะยาวเหยียดงูจงอางเดินสามขาไปจิกไก่ชน</div>
									<div class="pft-date">26 มิถุนายน 2564</div>
								</div>
							</div>
							<div class="lb-container">
								<img class="pft-i" src="assets/images/4ktestimage.jpg" alt=""/>
								<div class="hover-box">
									<img class="pft-overlay" src="assets/images/black.jpg" alt=""/>
									<img class="pft-lock-icon" src="assets/images/outline_lock_white_24dp.png" alt=""/>
									<img class="pft-del-icon" src="assets/images/white_bin.png" alt=""/>
									<img class="pft-edit-icon" src="assets/images/whiteedit.png" alt=""/>
									<div class="pft-name">ชื่อผลงานสุดแสนจะยาวเหยียดงูจงอางเดินสามขาไปจิกไก่ชน</div>
									<div class="pft-date">26 มิถุนายน 2564</div>
								</div>
							</div>
							<div class="lb-container">
								<img class="pft-i" src="assets/images/4ktestimage.jpg" alt=""/>
								<div class="hover-box">
									<img class="pft-overlay" src="assets/images/black.jpg" alt=""/>
									<img class="pft-lock-icon" src="assets/images/outline_lock_white_24dp.png" alt=""/>
									<img class="pft-del-icon" src="assets/images/white_bin.png" alt=""/>
									<img class="pft-edit-icon" src="assets/images/whiteedit.png" alt=""/>
									<div class="pft-name">ชื่อผลงานสุดแสนจะยาวเหยียดงูจงอางเดินสามขาไปจิกไก่ชน</div>
									<div class="pft-date">26 มิถุนายน 2564</div>
								</div>
							</div>
							<div class="lb-container">
								<img class="pft-i" src="assets/images/4ktestimage.jpg" alt=""/>
								<div class="hover-box">
									<img class="pft-overlay" src="assets/images/black.jpg" alt=""/>
									<img class="pft-lock-icon" src="assets/images/outline_lock_white_24dp.png" alt=""/>
									<img class="pft-del-icon" src="assets/images/white_bin.png" alt=""/>
									<img class="pft-edit-icon" src="assets/images/whiteedit.png" alt=""/>
									<div class="pft-name">ชื่อผลงานสุดแสนจะยาวเหยียดงูจงอางเดินสามขาไปจิกไก่ชน</div>
									<div class="pft-date">26 มิถุนายน 2564</div>
								</div>
							</div>
						</div>
					</div>
					<br></br>
				</div>
			);
		}
	}
}

export default PortRoot;
