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
		script.src = "assets/js/home.js";
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
				<Navbar /> <br></br>
				<BookmarkHeader />
				<BookmarkTabs />
			</div>
		);
	}
}

export default Bookmark;
