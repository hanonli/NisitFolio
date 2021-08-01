import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Navbar from './Components/navbar';
import BookmarkTabs from './Components/bookmarkTabs';
import BookmarkHeader from './Components/bookmarkHeader';
import reportWebVitals from './reportWebVitals';

class Bookmark extends React.Component {
	constructor(props) {
		super(props);
		this.handleLoad = this.handleLoad.bind(this);
	 }
	
	componentDidMount() {
		window.addEventListener('load', this.handleLoad);
		console.log("YEAHXXX!");
		const script = document.createElement("script");
		script.src = "assets/js/bookmark.js";
		document.body.appendChild(script);
		
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
					<div class="grid">
					  <h4><strong>Grid headline</strong></h4>
					  <p>Eng Content</p>
					</div>
					<div class="list">
					  <h4><strong>List headline</strong></h4>
					  <p>Hindi Content</p>
					</div>
					<BookmarkHeader />
					<BookmarkTabs />
			</div>
		);
	}
}

export default Bookmark;
