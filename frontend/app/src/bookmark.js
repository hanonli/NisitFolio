import React from 'react';
import ReactDOM from 'react-dom';
//import './index.css';
import Navbar from './Components/navbar';
import BookmarkTabs from './Components/bookmarkTabs';
import BookmarkHeader from './Components/bookmarkHeader';
import reportWebVitals from './reportWebVitals';
import cookie from 'react-cookies';
import { Redirect } from "react-router-dom";
import $ from 'jquery';

class Bookmark extends React.Component {
	constructor(props) {
		super(props);
		this.handleLoad = this.handleLoad.bind(this);
		this.state = {
			render: false, //Set render state to false
			redirect: null,
			userId: '0'
		}
	 }
	
	componentDidMount() {
		window.addEventListener('load', this.handleLoad);
		console.log("YEAHXXX!");
		window.addEventListener('load', this.handleLoad);
		console.log("YEAHXXX!");
		//var token = cookie.load('login-token')
		//console.log(token);
		//alert(cookie.load('login-user'));
		var x = cookie.load('login-user');
		console.log(x);
		
		
		if(x == 'none'){
			//alert(707);
			this.setState({ redirect: "/landing" });
		}else{
			//alert(808);
			console.log(cookie.load('login-user'));
			this.setState({userId : cookie.load('login-user')});
			setTimeout(function() {
				$.getScript('assets/js/search-bookmark.js');
			}, 500);
			
		}
		
	}
	
	componentWillUnmount() { 
	   window.removeEventListener('load', this.handleLoad)  
	}
	
	handleLoad() {
		console.log("YEAH!");
	 }
	
	render (){
		if(this.state.redirect) {
			return <Redirect to={this.state.redirect} />
		}
		
		return (
			<div className="Bookmark">
			<link rel="stylesheet" href="assets/css/bookmark.css" />
					<Navbar /> <br></br>
					
					<header class="lg-view header-white bookmark-header-fixed">
						<div class="container-fluid yahaha2">     
							<div class="row">
								<div class="col">
									<div class="topDataBk-content">
										<h1 class="name inline">Bookmark</h1>
										<h1></h1>
									</div>
								</div>
							</div>        
						</div>
					</header>
				
					<div id='cachedId'>{this.state.userId}</div>
			
				<div class="sbm-flex tabs-list-sbm">
					<div class="smb-1a extra-underline">
						<li class="tab-list-item-p tab-list-active" id="tab-1" type="button">ทั้งหมด</li> 
					</div>
					<div class="smb-1a extra-underline">
						<li class="tab-list-item-p" id="tab-2" type="button">ผู้ใช้</li>
					</div>
					<div class="smb-1a extra-underline">
						<li class="tab-list-item-p" id="tab-3" type="button">ผลงาน</li>
					</div>
					<div class="smb-2 extra-underline">
						<img class="layout-toggle gridOn tab-hid-zone extra-sp" src="assets/images/outline_format_list_bulleted_black_48dp 3.png" alt="" width="30" height="30" type="button" />
						<div class="tab-hid-zone" id="result-count">
							จำนวน 0 รายการ
						</div>
					</div>
				</div>
				
	
				<div class="tab-content bookmark-content-scroll" id="content1"> 
					<div class="">
					

						<div class="grid mixed-grid-container sbma-flex" id="fffuuu">

						</div>
						
						<div class="list mixed-list-container sbma-flex">
						
						</div>
						
					</div>
				</div> 
				<div class="tab-content bookmark-content-scroll" id="content2"> 
					<div class="">
					  <div class="grid profile-grid-container sbma-flex">
							
						</div>
						
						<div class="list profile-list-container sbma-flex">
							
						</div>
					</div>
				</div> 
				<div class="tab-content bookmark-content-scroll" id="content3"> 
					
						<div class="grid work-grid-container sbma-flex">
							
						</div>
						
						<div class="list work-list-container sbma-flex">
							
						</div>
					
				</div> 
			</div>
		);
	}
}

export default Bookmark;
