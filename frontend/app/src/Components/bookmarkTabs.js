import React from 'react';
import { Link } from "react-router-dom";
import $ from 'jquery';
import BookmarkProfileGrid from './bookmarkProfileGrid';
import BookmarkWorkGrid from './bookmarkWorkGrid';
import BookmarkProfileList from './bookmarkProfileList';
import BookmarkWorkList from './bookmarkWorkList';
import TabBookmark from "./TabBookmark"; 
import cookie from 'react-cookies'
import { Redirect } from "react-router-dom";

class BookmarkTabs extends React.Component {
	constructor(props) {
		super(props);
		this.handleLoad = this.handleLoad.bind(this);
		
	 }
	
	componentDidMount() {
		window.addEventListener('load', this.handleLoad);
		console.log("YEAHXXX!");
		//var token = cookie.load('login-token')
		//console.log(token);
		//alert(cookie.load('login-user'));
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
				
			</div>
		);
	}
}

export default BookmarkTabs;
