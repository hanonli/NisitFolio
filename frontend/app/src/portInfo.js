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
import { OverlayTrigger, Overlay, Tooltip, Button } from 'react-bootstrap';

class PortInfo extends React.Component {
	constructor(props) {
		super(props);
		this.handleLoad = this.handleLoad.bind(this);
		this.state = {
			render: false, //Set render state to false
			allow: true,
			redirect: null,
			portEmpty: true,
			tooltip1: '...',
			tooltip2: 'ติดต่อ',
			show1: false,
			show2: false,
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
								<img class="pft-lock-icon {hidden1}" src="{privacy}" alt=""/>\
								<img class="pft-del-icon {hidden2}" src="assets/images/white_bin.png" data-bs-toggle="modal" data-bs-target="#staticBackdrop" alt=""/>\
								<img class="{var-ic}" id="{var-id}" src="{var-ic-img}" alt=""/>\
								<div class="pft-name">{name}</div>\
								<div class="pft-date">{date}</div>\
							</div>\
						</div>'
		
		var pftId = [];
		var pftPrivacy = [];
		var pftVipData= [];
		
		var token = cookie.load('login-token');
		var userId = cookie.load('login-user');
		
		var refThis = this;
		var focusId = null;
		
		var portfolioData = null;
		var userData = null;
		var userPortData = null;
		var userBmData = null;
		var thatUserId = null;
		
		var bookmarked = false;
		//var pftBookmark = [];
		
		var f1 = false; var f2 = false; var f3 = false; var f4 = false;
		
		var fetcher = setInterval(Fetcher, 100);
		
		function Fetcher() {
			//console.log('f1: '+f1+'f2: '+f2+'f3: '+f3);
			if(f1 && f2 && f3 && f4){ 
				clearInterval(fetcher);
				//alert('Complete!');
				InitializePortInfo();
			}else{
				
			}
		}
		
		function AddBookmark(targetUser, portName){
			var addData = {};
			addData['userId'] = userId;
			addData['type'] = 'work';
			addData['thatUserId'] = targetUser;
			addData['projectName'] = portName;
			
			fetch("http://localhost:2000/bookmark/saveBookmark",{
				method: "POST",
				headers: {
					"Access-Control-Allow-Origin": "*",
					"Access-Control-Allow-Methods": "*",
					"Access-Control-Allow-Credentials": true,
					"Content-Type": "application/json"
				},
				body: JSON.stringify(addData),
			})
				.then(response =>  {
					//console.log(datas);
					console.log(response);
					//GetSearchBookmarkData();
				})
				.catch((error) => {
					console.log('add Error!');
					//this.setState({ redirect: "/landing" });
				});
		}
		
		function DeleteBookmark(targetUser, portName){
			var delData = {};
			delData['userId'] = userId;
			delData['type'] = 'work';
			delData['thatUserId'] = targetUser;
			delData['projectName'] = portName;
			
			fetch("http://localhost:2000/bookmark/saveBookmark",{
				method: "DELETE",
				headers: {
					"Access-Control-Allow-Origin": "*",
					"Access-Control-Allow-Methods": "*",
					"Access-Control-Allow-Credentials": true,
					"Content-Type": "application/json"
				},
				body: JSON.stringify(delData),
			})
				.then(response =>  {
					//console.log(datas);
					console.log(response);
				})
				.catch((error) => {
					console.log('delete Error!');
					//this.setState({ redirect: "/landing" });
				});
		}
		
		function AddBookmarkClickFunc(){
			//alert('add bookmark!');
			bookmarked = true;
			$('#uic-1').attr('src','assets/images/bookmark_2.png');
			//$('#uic-1').attr('title','ยกเลิกการบันทึก');
			//$('#tooltip-uic-1').text('ยกเลิกการบันทึก');
			setTimeout(function() { refThis.setState({ tooltip1: 'ยกเลิกการบันทึก' }); }, 500); 
			AddBookmark(thatUserId,portfolioData.Port_Name);
			$('#uic-1').off('click');
			$('#uic-1').on('mouseover', function(){
			  refThis.setState({ show1: true });
			});
				
			$('#uic-1').on('mouseleave', function(){
			  refThis.setState({ show1: false });
			});
			$("#uic-1").click(function() {
				refThis.setState({ show1: false });
				RemoveBookmarkClickFunc();
			});
		}
		
		function RemoveBookmarkClickFunc(){
			//alert('delete bookmark!');
			bookmarked = false;
			$('#uic-1').attr('src','assets/images/bookmark_1.png');
			//$('#uic-1').attr('title','บันทึก');
			//$('#tooltip-uic-1').text('บันทึก');
			
			setTimeout(function() { refThis.setState({ tooltip1: 'บันทึก' }); }, 500); 
			DeleteBookmark(thatUserId,portfolioData.Port_Name);
			$('#uic-1').off('click');
			$('#uic-1').on('mouseover', function(){
			  refThis.setState({ show1: true });
			});
				
			$('#uic-1').on('mouseleave', function(){
			  refThis.setState({ show1: false });
			});
			$("#uic-1").click(function() {
				refThis.setState({ show1: false });
				AddBookmarkClickFunc();
			});
		}
		
		function AddBookmarkClickFuncSub(){
			//alert('add bookmark!');
			//pftBookmark[focusId] = true;
			$('#bm-'+focusId).attr('src','assets/images/bookmark_2.png');
			//alert('add: '+userPortData[focusId].Port_Name+' from user: '+userPortData[focusId].Owner);
			AddBookmark(userPortData[focusId].UserId, userPortData[focusId].Port_Name);
			$('#bm-'+focusId).off('click');
			$('#bm-'+focusId).click(function(e) {
				e.stopPropagation();
				RemoveBookmarkClickFuncSub();
			});
		}
		
		function RemoveBookmarkClickFuncSub(){
			//alert('add bookmark!');
			//pftBookmark[focusId] = true;
			$('#bm-'+focusId).attr('src','assets/images/bookmark_1.png');
			//alert('delete: '+userPortData[focusId].Port_Name+' from user: '+userPortData[focusId].Owner);
			DeleteBookmark(userPortData[focusId].UserId, userPortData[focusId].Port_Name);
			$('#bm-'+focusId).off('click');
			$('#bm-'+focusId).click(function(e) {
				e.stopPropagation();
				AddBookmarkClickFuncSub();
			});
		}
		
		function InitializePortInfo(){
			console.log(portfolioData);
				refThis.setState({ render: true });
				
				if(portfolioData.UserId == userId){ //user is viewing user's port
					$('#uic-1').attr('src','assets/images/black_edit2.png');
					$("#uic-1").click(function() {
						cookie.save('port-entry', 'edit', { path: '/' })
						cookie.save('port-focus', portId, { path: '/' })
						refThis.setState({ redirect: "/editport" });
					});
					//$('#uic-1').attr('title', 'แก้ไข')
					refThis.setState({ tooltip1: 'แก้ไข' });
					$('#uic-1').on('mouseover', function(){
					  refThis.setState({ show1: true });
					});
						
					$('#uic-1').on('mouseleave', function(){
					  refThis.setState({ show1: false });
					});
					$("#uic-1").click(function() {
						refThis.setState({ show1: false });
					});
					
					$('#uic-2').attr('src','assets/images/bin.png');
					$('#uic-2').attr('data-bs-target','#staticBackdropM');
					$('#uic-2').attr('data-bs-toggle','modal');
					//$('#uic-2').attr('title', 'ลบ')
					refThis.setState({ tooltip2: 'ลบ' });
					/*if(portfolioData.Port_Privacy == 'Public'){
						$('#uic-2').attr('src','assets/images/outline_public_black_24dp.png');
						$('#uic-2').attr('title','เปลี่ยนความเป็นส่วนตัว');
					}else if(portfolioData.Port_Privacy == 'Members'){
						$('#uic-2').attr('src','assets/images/outline_people_black_24dp.png');
						$('#uic-2').attr('title','เปลี่ยนความเป็นส่วนตัว');
					}else{
						$('#uic-2').attr('src','assets/images/outline_lock_black_24dp.png');
						$('#uic-2').attr('title','เปลี่ยนความเป็นส่วนตัว');
					}*/
				}else{
					userBmData.every((entry) => {
						if(entry.id == portId){
							bookmarked = true; 
							return false;
						}
						return true;
					});
					if(bookmarked){
						AddBookmarkClickFunc();
					}else{
						RemoveBookmarkClickFunc();
					}
					
					$('#uic-2').attr('data-bs-target','#staticBackdropE');
					$('#uic-2').attr('data-bs-toggle','modal');
				}
				
				$('#port-name').text(portfolioData.Port_Name);
				
				if(portfolioData.Port_Date != null) 
					$('#port-date').text(portfolioData.Port_Date);
				else 
					$('#port-date').text('ไม่ทราบวันที่');
				
				$('#port-owner').text(portfolioData.Owner);
				$('#port-desc').text(portfolioData.Port_Info);
				
				var pdd=1;
				portfolioData.portfolioPictures[0].Pic.forEach((entry) => {
					$('#port-pic-'+pdd).attr('src',entry);
					pdd += 1;
				});
				
				var tagCount = portfolioData.Port_Tag.length;
				if(tagCount == 0){
					$('#port-tag1').hide();
					$('#port-tag2').hide();
					$('#port-tag3').hide();
				}else if(tagCount == 1){
					$('#port-tag1').text(portfolioData.Port_Tag[0]);
					$('#port-tag2').hide();
					$('#port-tag3').hide();
				}else if(tagCount == 2){
					$('#port-tag1').text(portfolioData.Port_Tag[0]);
					$('#port-tag2').text(portfolioData.Port_Tag[1]);
					$('#port-tag3').hide();
				}else if(tagCount == 3){
					$('#port-tag1').text(portfolioData.Port_Tag[0]);
					$('#port-tag2').text(portfolioData.Port_Tag[1]);
					$('#port-tag3').text(portfolioData.Port_Tag[2]);
				}

				$('#port-owner-b').text(portfolioData.Owner);
				
				$('#avatar').attr('src',userData.ProfilePic);
				$('#port-user-email').text(userData.Email);
				
				//refThis.setState({ render: true });
				var index=0;
					userPortData.forEach((data) => {
						if(data._id == portId) { index += 1; pftId.push(data._id); pftVipData.push({}); pftPrivacy.push(portfolioData.Port_Privacy); return; } // ignore viewing port
						//console.log(data);
						
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
						if(data.portfolioPictures[0].Pic.length > 0)
							thumb = data.portfolioPictures[0].Pic[0];
						else
							thumb = 'assets/images/emp_thumb.jpg';
						
						var vi = null; var vii = null; var hid = ''; var vid = null;
						if(portfolioData.UserId == userId){ //user is viewing user's port
							vi = 'pft-edit-icon';
							vii = 'assets/images/whiteedit.png';
							vid = '';
						}else{
							vi = 'pft-bookmark-icon';
							vid = 'bm-'+index;
							var _bookmarked = false;
							userBmData.every((entry) => {
								if(entry.id == data._id){
									_bookmarked = true; 
									return false;
								}
								return true;
							});
							//pftBookmark.push(_bookmarked);
							if(_bookmarked){
								vii = 'assets/images/bookmark_2.png';
							
							}else{
								vii = 'assets/images/bookmark_1.png';
								
							}
							
							
							hid = 'ic-hidden';
						}
						
						$('.pft-flex').append(pftDiv.replace('{id}',index).replace('{img}',thumb).replace('{name}',data.Port_Name)
							.replace('{date}',date).replace('{privacy}',privacyImg).replace('{var-ic}',vi)
							.replace('{var-ic-img}',vii).replace('{hidden1}',hid).replace('{hidden2}',hid).replace('{var-id}',vid));
							
						focusId = index;
						if(_bookmarked){
							AddBookmarkClickFuncSub();
						}else{
							RemoveBookmarkClickFuncSub();
						}
						
						//alert(data._id);
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
					  
					  $('#delete-main-port').on('click', function(){
						  refThis.setState({ render: false });
						  fetch("http://localhost:2000/portfolio/"+portId,{
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
								//window.location.reload();
								//setInterval(function() { console.log($('#pft-box div').length); }, 1000); 
									
								refThis.setState({ redirect: "/portfolio" });
								//GetSearchBookmarkData();
							})
							.catch((error) => {
								console.log('add Error!');
								//this.setState({ redirect: "/landing" });
							});
					  });
					  
						$('#clipboard').on('click', function(){
							navigator.clipboard.writeText($('#port-user-email').text());
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
		}
		
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
				portfolioData = data;
				//alert('f1!');
				f1 = true;
				thatUserId = data.UserId;
				GetUserHeader(thatUserId);
				GetUserPortfolio(thatUserId);
				GetUserBookmarkData();
			}).catch((error) => {
				console.log('Token Error!');
				console.log(error);
				//this.setState({ redirect: "/landing" });
			});
		
		function GetUserBookmarkData(){
			fetch("http://localhost:2000/bookmark/"+userId+"&&time",{
				method: "GET",
				headers: {
					"Access-Control-Allow-Origin": "*",
					"Access-Control-Allow-Methods": "*",
					"Access-Control-Allow-Credentials": true,
					"Content-Type": "application/json"},
			})
			.then(response => response.json())
			//.then(response => response.result)
			.then((datas) => {
				userBmData = datas;
				f4 = true;
			}).catch((error) => {
				  console.log(error);
				});
		}
		
		function GetUserHeader(uid){
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
				userData = data;
				f2 = true;
				//alert('f2!');
				
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
				userPortData = datas;
				f3 = true;
				//alert('f3!');
			}).catch((error) => {
				console.log('Token Error!');
				console.log(error);
				//this.setState({ redirect: "/landing" });
			});
		}
	}
	
	componentWillUnmount() { 
	   window.removeEventListener('load', this.handleLoad);
	   //$(window).unbind('scroll');
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
							<OverlayTrigger key={'bottom'} placement={'bottom'} show={this.state.show1} overlay={ <Tooltip id='tooltip-uic-1'>{this.state.tooltip1}</Tooltip> }>
								<img class="tooltips-item obj-icon" id="uic-1" src="assets/images/bookmark_2.png" type="button" alt="" width="45" height="45"/>
							</OverlayTrigger>
							<OverlayTrigger key={'bottom'} placement={'bottom'} overlay={ <Tooltip id='tooltip-uic-2'>{this.state.tooltip2}</Tooltip> }>
								<img class="tooltips-item obj-icon" id="uic-2" src="assets/images/outline_forward_to_inbox_black_48dp.png" type="button" alt="" width="45" height="45"/>
							</OverlayTrigger>
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
						
					<div class="modal fade" id="staticBackdropM" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
						<div class="modal-dialog modal-dialog-centered">
							<div class="modal-content minisize">
								<h4 class="del-b">คุณต้องการลบผลงานนี้ ?</h4>
								<div class="centerverify">
									<a type="button" class="btn btn-cta-primary-svshort round profile-button grey margin-right-m" data-bs-dismiss="modal">ยกเลิก</a>
									<a id="delete-main-port" type="button" class="btn btn-cta-primary-yellowshort profile-button round" data-bs-dismiss="modal">ลบ</a>
								</div>
							</div>
						</div>
					</div>
						
						
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
					
					<div class="modal fade" id="staticBackdropE" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
						<div class="modal-dialog modal-lg modal-dialog-centered">
							<div class="modal-content md-round">
								<div class="e-flex">
									<div class="yahahaCf" data-bs-dismiss="modal">
										<div class="transition-component" id="cross-fadegone">
											<img class="icon-plus-circleA bottom alt-fadegone" type="button" src="assets/images/close_hover.png" />
											<img class="icon-plus-circleA top alt-fadegone" type="button" id="add_aca" src="assets/images/close_normal.png" />
										</div> 
									</div>
									<div class="e-wrapper">
										<div class="email-box">
											<af id="port-user-email">Nutawut.n@ku.th</af>
											<img class="tooltips-item obj-icon cb-icon" id="clipboard" src="assets/images/outline_content_copy_black_48dp.png" type="button" alt="" width="25" height="25"/>
										</div>
									</div>
									<af>หรือ</af>
									<a id="delete-port" type="button" class="btn btn-cta-primary-yellow profile-button round" data-bs-dismiss="modal">ไปยังระบบอีเมลของคุณเพื่อติดต่อโดยตรง</a>
								</div>
								
							</div>
						</div>
					</div>
				</div>
			);
	}
}

export default PortInfo;
