import React from 'react';
import { Link } from "react-router-dom";
import BookmarkProfileGrid from './bookmarkProfileGrid';
import BookmarkWorkGrid from './bookmarkWorkGrid';
import BookmarkProfileList from './bookmarkProfileList';
import BookmarkWorkList from './bookmarkWorkList';
import TabBookmark from "./TabBookmark"; 
import cookie from 'react-cookies'

class BookmarkTabs extends React.Component {
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
		//var token = cookie.load('login-token')
		//console.log(token);
		//alert(cookie.load('login-user'));
		this.setState({userId : cookie.load('login-user')});
			
	}
	
	componentWillUnmount() { 
	   window.removeEventListener('load', this.handleLoad)  
	}
	
	handleLoad() {
		console.log("YEAH!");
	}
	
	
	render (){
		return (
			<div className="BookmarkTabs">
				<div id='cachedId'>{this.state.userId}</div>
			
				<div class="sbm-flex tabs-list-sbm">
					<div class="smb-1a">
						<li class="tab-list-item-p tab-list-active" id="tab-1" type="button">ทั้งหมด</li> 
					</div>
					<div class="smb-1a">
						<li class="tab-list-item-p" id="tab-2" type="button">ผู้ใช้</li>
					</div>
					<div class="smb-1a">
						<li class="tab-list-item-p" id="tab-3" type="button">ผลงาน</li>
					</div>
					<div class="smb-2">
						<img class="layout-toggle gridOn tab-hid-zone" src="assets/images/outline_format_list_bulleted_black_48dp 3.png" alt="" width="40" height="40" type="button" />
						<button class="btn btn-cta-primary round grey dropdown-toggle tab-dropdown-pad" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">เรียงตามล่าสุด</button>
						<ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
						   <li><a class="dropdown-item" id="sort-time">เรียงตามล่าสุด</a></li>
						   <li><a class="dropdown-item" id="sort-total">เรียงตามความนิยม</a></li>
						</ul>
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

export default BookmarkTabs;
