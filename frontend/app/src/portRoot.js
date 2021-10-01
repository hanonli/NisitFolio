import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Navbar from './Components/navbar';
import LoadingS from './Components/loadingS';
import reportWebVitals from './reportWebVitals';
import cookie from 'react-cookies';
import { Redirect } from "react-router-dom";
import $ from 'jquery';

class PortRoot extends React.Component {
	constructor(props) {
		super(props);
		this.handleLoad = this.handleLoad.bind(this);
		this.state = {
			render: false, //Set render state to false
			allow: false,
			redirect: null,
			portEmpty: true
		}
	 }
	
	componentDidMount() {
		window.addEventListener('load', this.handleLoad);
		console.log("YEAHXXX!");
		window.addEventListener('load', this.handleLoad);
		console.log("YEAHXXX!");
		
		var pftDiv = '<div class="lb-container" id={id}>\
							<img class="pft-i" src="{img}" alt=""/>\
							<div class="hover-box">\
								<img class="pft-overlay" src="assets/images/black.jpg" alt=""/>\
								<img class="pft-lock-icon" src="assets/images/outline_lock_white_24dp.png" alt=""/>\
								<img class="pft-del-icon" src="assets/images/white_bin.png" alt=""/>\
								<img class="pft-edit-icon" src="assets/images/whiteedit.png" alt=""/>\
								<div class="pft-name">{name}</div>\
								<div class="pft-date">{date}</div>\
							</div>\
						</div>'
		
		var pftId = [];
		
		var token = cookie.load('login-token');
		var refThis = this;
		var focusId = null;
		
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
				this.setState({ render: true });
				if(datas.length < 1){ //no port
					this.setState({ portEmpty: true });
					
					$('#empty-zone').on('click', function(){
						  cookie.save('port-entry', 'new', { path: '/' })
						  refThis.setState({ redirect: "/editport" });
					  });

				}else{
					this.setState({ portEmpty: false });
					var index=0;
					datas.forEach((data) => {
						//console.log(data);
						var date = "ไม่ทราบวันที่";
						if(data.Port_Date != null) date = data.Port_Date;
						$('.pft-flex').append(pftDiv.replace('{id}',index).replace('{img}',data.portfolioPictures[0].Pic[0]).replace('{name}',data.Port_Name).replace('{date}',date));
						pftId.push(data._id);
						index += 1;
						
						
						$('.pft-edit-icon').on('click', function(){
							cookie.save('port-entry', 'edit', { path: '/' })
							cookie.save('port-focus', pftId[focusId], { path: '/' })
							refThis.setState({ redirect: "/editport" });
						});
						
					});
					
					$('.lb-container').on('mouseover', function(){
						  focusId = Number($(this).attr('id'));
						});
					
					$('#empty-zone').on('click', function(){
						  cookie.save('port-entry', 'new', { path: '/' })
						  refThis.setState({ redirect: "/editport" });
					  });
					
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
		
		if(!this.state.allow) return (
			<div className="Underconstruction">
				< Navbar/>
				<header class="bookmark-header-fixed fat bgs">
					<div class="container-fluid yahaha2">     
						<div class="row">
							<div class="col">
								<div class="topDataBk-content text-center">
									<h1 class="name inline">You don't have permission to access this page!</h1>
								</div>
							</div>
						</div>        
					</div>
				</header>
			</div>
		);
		
		if(!this.state.render) return (
			<LoadingS />
		);
		
		if(this.state.portEmpty){
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

						</div>
					</div>
					<br></br>
				</div>
			);
		}
	}
}

export default PortRoot;
