import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Navbar from './Components/navbar';
import LoadingS from './Components/loadingS';
import reportWebVitals from './reportWebVitals';
import cookie from 'react-cookies';
import { Redirect } from "react-router-dom";
import { withRouter } from "react-router";
import $ from 'jquery';

class PortInfo extends React.Component {
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
		
		const portId = this.props.match.params.id;
        console.log(portId);
		
		var pftDiv = '<div class="lb-container" id={id}>\
							<img class="pft-i" src="{img}" alt=""/>\
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
		
		var token = cookie.load('login-token');
		var refThis = this;
		var focusId = null;
		
		fetch("http://localhost:2000/portfolio/"+portId,{
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
			.then((data) => {
				console.log(data);
				GetUserProfilePic(data.UserId);
				GetUserPortfolio(data.UserId);
				this.setState({ render: true });
				$('#port-name').text(data.Port_Name);
				
				if(data.Port_date != null) $('#port-date').text(data.Port_Date);
				else $('#port-date').text('ไม่ทราบวันที่');
				
				$('#port-owner').text(data.Owner);
				$('#port-desc').text(data.Port_Info);
				
				var pdd=1;
				data.portfolioPictures[0].Pic.forEach((entry) => {
					$('#port-pic-'+pdd).attr('src',entry);
					pdd += 1;
				});
				
				var tagCount = data.Port_Tag.length;
				if(tagCount == 0){
					$('#port-tag1').hide();
					$('#port-tag2').hide();
					$('#port-tag3').hide();
				}else if(tagCount == 1){
					$('#port-tag1').text(data.Port_Tag[0]);
					$('#port-tag2').hide();
					$('#port-tag3').hide();
				}else if(tagCount == 2){
					$('#port-tag1').text(data.Port_Tag[0]);
					$('#port-tag2').text(data.Port_Tag[1]);
					$('#port-tag3').hide();
				}else if(tagCount == 3){
					$('#port-tag1').text(data.Port_Tag[0]);
					$('#port-tag2').text(data.Port_Tag[1]);
					$('#port-tag3').text(data.Port_Tag[2]);
				}

				$('#port-owner-b').text(data.Owner);

				
			}).catch((error) => {
				console.log('Token Error!');
				console.log(error);
				//this.setState({ redirect: "/landing" });
			});
		
		function GetUserProfilePic(uid){
			fetch("http://localhost:2000/portfolio/header/"+uid,{
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
			.then((data) => {
				//console.log(data);
				//refThis.setState({ render: true });
				$('#avatar').attr('src',data.ProfilePic);
				
			}).catch((error) => {
				console.log('Token Error!');
				console.log(error);
				//this.setState({ redirect: "/landing" });
			});
		}
		
		function GetUserPortfolio(uid){
			fetch("http://localhost:2000/portfolio/user/"+uid,{
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
				refThis.setState({ render: true });
				var index=0;
					datas.forEach((data) => {
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
							var patchData = {};
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
							patchData.Port_Privacy = p2c;
							/*fetch("http://localhost:2000/portfolio/"+pftId[focusId],{
							method: "PATCH",
							headers: {
								'Authorization': 'Bearer '+token,
								"Access-Control-Allow-Origin": "*",
								"Access-Control-Allow-Methods": "*",
								"Access-Control-Allow-Credentials": true,
								"Content-Type": "application/json"
							},
							body: JSON.stringify(patchData),
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
							});*/
						});
					
					$('.lb-container').on('mouseover', function(){
						  focusId = Number($(this).attr('id'));
						});
						
					$('.lb-container').on('click', function(e){
						  var cid = Number($(this).attr('id'));
						  var pid =  pftId[cid];
						  refThis.setState({ redirect: "/portInfo/"+pid+'/reload' });

						});	
					
					$('.pft-del-icon').on('click', function(e){
						 e.stopPropagation();
						});
					
					$('.tag').on('click', function(e){
						cookie.save('search-entry', $(this).text(), { path: '/' })
						refThis.setState({ redirect: '/search' });
						e.stopPropagation();
						});
						
					$('#delete-port').on('click', function(){
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
						
					var item = document.getElementById("h-scroll");
					  /*window.addEventListener("wheel", function (e) {
						if (e.deltaY > 0) 
							item.scrollLeft += 100;
						else 
							item.scrollLeft -= 100;
					  });*/
					  
					  item.addEventListener("wheel", (evt) => {
						    var maxScrollLeft = item.scrollWidth - item.clientWidth;
							//console.log('max: '+maxScrollLeft);
							//console.log('current: '+item.scrollLeft);
							if(evt.deltaY > 0){
								//console.log('wheel down');
								if(item.scrollLeft < maxScrollLeft-1){
									console.log('go right');
									evt.preventDefault();
									item.scrollLeft += evt.deltaY;
								}else{ // max right
									$('.swf-flex').css('padding','0 10% 0 0');
								}
							}else{
								//console.log('wheel up');
								if(item.scrollLeft > 0){
									console.log('go left');
									evt.preventDefault();
									item.scrollLeft += evt.deltaY;
								}else{ // max left
									$('.swf-flex').css('padding','0 0 0 10%');
								}
							}
							
							//console.log(item.scrollLeft);
					  });

				
			}).catch((error) => {
				console.log('Token Error!');
				console.log(error);
				//this.setState({ redirect: "/landing" });
			});
		}
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
		
		return (
				<div className="PortInfo">
					<Navbar />
					
					<img class="pf-hi" src="assets/images/pheader.jpg" />
					
					<br></br><br></br>
					
					<div class="pfti-flex">
						<hf id="port-name">ชื่อหัวข้ออะไรสักอย่าง สุดแล้วแต่คุณท่านจะตั้ง</hf>
						<div class="pfic-flex">
							<img class="tooltips-item obj-icon" src="assets/images/bookmark_2.png" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Bookmark" type="button" alt="" width="45" height="45"/>
							<img class="tooltips-item obj-icon" src="assets/images/outline_forward_to_inbox_black_48dp.png" data-bs-toggle="tooltip" data-bs-placement="bottom" title="ติดต่อ" type="button" alt="" width="45" height="45"/>
						</div>
					</div>
					
					<div class="pfmn-flex">
						<img class="tooltips-item obj-icon" src="assets/images/clock.png" type="button" alt="" width="25" height="25"/>
						<akf id="port-date">21/02/2xxx</akf>
						<img class="tooltips-item obj-icon" src="assets/images/idv.png" type="button" alt="" width="25" height="25"/>
						<akf id="port-owner">ชื่อ นามสกุล</akf>
					</div>
					
					<br></br>
					
					<div class="pftx-flex">
						<div class="pf-dtext" id="port-desc">ผีฝากถุงข้าวสารให้ฉันีฝากถุงข้าวสารให้ฉันีฝากถุงข้าวสารให้ฉันีฝากถุงข้าวสารให้ฉันีฝากถุงข้าวสารให้ฉันีฝากถุงข้าวสารให้ฉันีฝากถุงข้าวสารให้ฉันีฝากถุงข้าวสารให้ฉันีฝากถุงข้าวสารให้ฉันีฝากถุงข้าวสารให้ฉันีฝากถุงข้าวสารให้ฉันีฝากถุงข้าวสารให้ฉันีฝากถุงข้าวสารให้ฉันีฝากถุงข้าวสารให้ฉันีฝากถุงข้าวสารให้ฉันีฝากถุงข้าวสารให้ฉันีฝากถุงข้าวสารให้ฉันีฝากถุงข้าวสารให้ฉันีฝากถุงข้าวสารให้ฉันีฝากถุงข้าวสารให้ฉันีฝากถุงข้าวสารให้ฉันีฝากถุงข้าวสารให้ฉันีฝากถุงข้าวสารให้ฉันีฝากถุงข้าวสารให้ฉันีฝากถุงข้าวสารให้ฉันีฝากถุงข้าวสารให้ฉันีฝากถุงข้าวสารให้ฉัน</div>
					</div>
					
					<br></br><br></br><br></br><br></br>
					
					<div class="swf-flex">
						<div class="scrolling-wrapper-flexbox" id="h-scroll">
							<img class="pft-c" id="port-pic-1" src="assets/images/emp_thumb.jpg" alt=""/>
							<img class="pft-c" id="port-pic-2" src="assets/images/emp_thumb.jpg" alt=""/>
							<img class="pft-c" id="port-pic-3" src="assets/images/emp_thumb.jpg" alt=""/>
							<img class="pft-c" id="port-pic-4" src="assets/images/emp_thumb.jpg" alt=""/>
							<img class="pft-c" id="port-pic-5" src="assets/images/emp_thumb.jpg" alt=""/>
						</div>
					</div>

					
					<br></br><br></br><br></br><br></br>
					
					<div class="anf-flex">
						<mdf >ไฟล์แนบ</mdf>
						<img src="assets/images/sample_attach.png" alt="" width="450" height="200" />
						<mef >ตำแหน่งงานที่เกี่ยวข้อง</mef>
						<div class="ptag-flex">
							<a class="lg-view pft btn btn-cta-secondary btn-small round no-margin tag" id="port-tag1" target="_blank">tag1</a>
							<a class="lg-view pft btn btn-cta-secondary btn-small round no-margin tag" id="port-tag2" target="_blank">tag2</a>
							<a class="lg-view pft btn btn-cta-secondary btn-small round no-margin tag" id="port-tag3" target="_blank">tag3</a>
						</div>
						<br></br>
						<div class="ds1" />
						<img class="profile-image img-fluid float-start rounded-circle" id="avatar" src="assets/images/profile_uk.png" alt="profile image" />
						<af >ผลงานอื่นที่คุณอาจสนใจของ</af>
						<mhf id="port-owner-b">ชื่อ นามสกุล</mhf>
					</div>
					
					<br></br><br></br><br></br>
					
					<div class="pft-flex" id="pft-box">
						
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

export default PortInfo;
