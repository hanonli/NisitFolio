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
			allow: true,
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
							<div class="pft-ibox">\
								<img class="pft-bg" src="assets/images/black.jpg" alt=""/>\
								<img class="pft-i" src="{img}" alt=""/>\
							</div>\
							<div class="hover-box">\
								<img class="pft-overlay" src="assets/images/black.jpg" alt=""/>\
								<img class="pft-lock-icon" src="{privacy}" alt=""/>\
								<img class="pft-del-icon" src="assets/images/white_bin.png" data-bs-toggle="modal" data-bs-target="#staticBackdrop" alt=""/>\
								<img class="pft-edit-icon" src="assets/images/whiteedit.png" alt=""/>\
								<div class="pft-name">{name}</div>\
								<div class="pft-date">{date}</div>\
							</div>\
						</div>'
		
		var pftId = [];
		var pftPrivacy = [];
		var pftVipData= [];
		
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
						
						// for PATCH
						var patchData = {};
						patchData['Port_Tag'] = data.Port_Tag;
						patchData['Port_Privacy'] = data.Port_Privacy;
						patchData['Pic'] = data.portfolioPictures[0].Pic;
						patchData['Description'] = data.portfolioPictures[0].Description;
						patchData['Port_Date'] = data.Port_Date;
						patchData['Port_Name'] = data.Port_Name;
						patchData['Port_Info'] = data.Port_Info;
						pftVipData.push(patchData);
						
						//console.log(data);
						console.log(data.Port_Name);
						var date = "ไม่ทราบวันที่";
						if(data.Port_Date != null) date = data.Port_Date;
						var privacyImg = null;
						
						if(data.Port_Privacy == 'Public'){
							privacyImg = "assets/images/outline_public_white_24dp.png";
							pftPrivacy.push(0);
						}else if(data.Port_Privacy == 'Members'){
							privacyImg = "assets/images/outline_people_white_24dp.png";
							pftPrivacy.push(1);
						}else{
							privacyImg = "assets/images/outline_lock_white_24dp.png";
							pftPrivacy.push(2);
						}
						
						var thumb = null;
						if(data.portfolioPictures[0].Pic[0] != null)
							thumb = data.portfolioPictures[0].Pic[0];
						else
							thumb = 'assets/images/emp_thumb.jpg';
						
						$('.pft-flex').append(pftDiv.replace('{id}',index).replace('{img}',thumb).replace('{name}',data.Port_Name).replace('{date}',date).replace('{privacy}',privacyImg));
						pftId.push(data._id);
						index += 1;	
					});
					
					$('.pft-edit-icon').on('click', function(e){
							e.stopPropagation();
							cookie.save('port-entry', 'edit', { path: '/' })
							cookie.save('port-focus', pftId[focusId], { path: '/' })
							refThis.setState({ redirect: "/editport" });
						});
						
						$('.pft-lock-icon').on('click', function(e){
							//alert('Clicked! id: '+pftId[focusId]);
							e.stopPropagation();
							var p2c = null;
							if(pftPrivacy[focusId] == 0){
								//alert('Change to Member');
								$(this).attr('src',"assets/images/outline_people_white_24dp.png");
								pftPrivacy[focusId] = 1;
								p2c = "Members";
							}else if(pftPrivacy[focusId] == 1){
								$(this).attr('src',"assets/images/outline_lock_white_24dp.png");
								p2c = "Private";
								pftPrivacy[focusId] = 2;
								//alert('Change to Private');
							}else{
								$(this).attr('src',"assets/images/outline_public_white_24dp.png");
								p2c = "Public";
								pftPrivacy[focusId] = 0;
								//alert('Change to Public');
							}
							pftVipData[focusId].Port_Privacy = p2c;
							console.log(pftVipData[focusId]);
							fetch("http://localhost:2000/portfolio/"+pftId[focusId],{
							method: "PATCH",
							headers: {
								'Authorization': 'Bearer '+token,
								"Access-Control-Allow-Origin": "*",
								"Access-Control-Allow-Methods": "*",
								"Access-Control-Allow-Credentials": true,
								"Content-Type": "application/json"
							},
							body: JSON.stringify(pftVipData[focusId]),
							})
							.then(response =>  {
								//console.log(datas);
								console.log(response);
								//refThis.setState({ redirect: "/portfolio" });
								//GetSearchBookmarkData();
							})
							.catch((error) => {
								console.log('add Error!');
								//this.setState({ redirect: "/landing" });
							});
							
							
						});
					
					$('.lb-container').on('mouseover', function(){
						  focusId = Number($(this).attr('id'));
						});
						
					$('.lb-container').on('click', function(){
						var cid = Number($(this).attr('id'));
						var pid =  pftId[cid];
						  refThis.setState({ redirect: "/portInfo/"+pid });
						});
						
					$('.pft-del-icon').on('click', function(e){
						 e.stopPropagation();
						});
					
					$('#empty-zone').on('click', function(){
						  cookie.save('port-entry', 'new', { path: '/' })
						  refThis.setState({ redirect: "/editport" });
					  });
					  
					$('#delete-port').on('click', function(){
						  $(window).unbind('scroll');
						  refThis.setState({ render: false });
						  fetch("http://localhost:2000/portfolio/"+pftId[focusId],{
							method: "DELETE",
							headers: {
								'Authorization': 'Bearer '+token,
								"Access-Control-Allow-Origin": "*",
								"Access-Control-Allow-Methods": "*",
								"Access-Control-Allow-Credentials": true,
								"Content-Type": "application/json"
							}
							})
							.then(response =>  {
								//console.log(datas);
								console.log(response);
								//$('#'+focusId).remove();
								//alert($('#pft-box').length);
								//if($('#pft-box').length < 1)
								window.location.reload();
								//setInterval(function() { console.log($('#pft-box div').length); }, 1000); 
									
								//refThis.setState({ redirect: "/portfolio" });
								//GetSearchBookmarkData();
							})
							.catch((error) => {
								console.log('add Error!');
								//this.setState({ redirect: "/landing" });
							});
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
				console.log(error);
				//this.setState({ redirect: "/landing" });
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
						<div class="pft-flex" id="pft-box">

						</div>
					</div>
					<br></br>
					
					 <div class="modal fade" id="staticBackdrop" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
						<div class="modal-dialog modal-dialog-centered">
							<div class="modal-content minisize">
								<h4 class="del-b">คุณต้องการลบผลงานนี้ ?</h4>
								<div class="centerverify">
									<a type="button" class="btn btn-cta-primary-svshort round profile-button grey margin-right-m" data-bs-dismiss="modal">ยกเลิก</a>
									<a id="delete-port" type="button" class="btn btn-cta-primary-yellowshort profile-button round" data-bs-dismiss="modal">ลบ</a>
								</div>
							</div>
						</div>
					</div>
					
				</div>
			);
		}
	}
}

export default PortRoot;
