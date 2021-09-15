import React from 'react';
import { Link } from "react-router-dom";

class Resume_sideNavbar extends React.Component {
	constructor(props) {
		super(props);
		this.handleLoad = this.handleLoad.bind(this);
	 }
	
	componentDidMount() {
		window.addEventListener('load', this.handleLoad);
		const script = document.createElement("script");
		// script.src = "assets/js/navbar.js";
		// document.body.appendChild(script);
		
	}

	
	handleLoad() {
		console.log("Navbar script loaded!");
	 }
	
	render (){
		return (
			<div className="Resume_sideNavbar">
				<a href='#'>About</a>
			</div>
		);
	}
}

export default Resume_sideNavbar;
