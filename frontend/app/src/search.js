import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Navbar from './Components/navbar';
import BookmarkTabs from './Components/bookmarkTabs';
import SearchHeader from './Components/searchHeader';
import reportWebVitals from './reportWebVitals';
import cookie from 'react-cookies'
import { Redirect } from "react-router-dom";
import $ from 'jquery';

class Search extends React.Component {
	constructor(props) {
		super(props);
		this.handleLoad = this.handleLoad.bind(this);
		this.state = {
			render: false, //Set render state to false
			userId: '0',
			tpId: 'user'
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
			console.log('search by public');
			//alert('search by public');
			//this.setState({ redirect: "/landing" });
			this.setState({userId : '1'}); // dummy user
			this.setState({tpId : 'public'});
			setTimeout(function() {
				$.getScript('assets/js/search-bookmark.js');
			}, 500);
			
		}else{
			//alert(808);
			console.log('search by user');
			//alert('search by user');
			//console.log(cookie.load('login-user'));
			this.setState({userId : cookie.load('login-user')});
			this.setState({tpId : 'user'});
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
		return (
			<div className="Home">
			<link rel="stylesheet" href="assets/css/bookmark.css" />
				<Navbar /> <br></br>
				<SearchHeader />
				<div id='cachedId'>{this.state.userId}</div>
				<div id='tpId'>{this.state.tpId}</div>
			
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

export default Search;
