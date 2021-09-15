import React from 'react';
import { Link } from "react-router-dom";

class Navbar extends React.Component {
	constructor(props) {
		super(props);
		this.handleLoad = this.handleLoad.bind(this);
	 }
	
	componentDidMount() {
		window.addEventListener('load', this.handleLoad);
		console.log("Mounted Navbar script!");
		const script = document.createElement("script");
		script.src = "assets/js/navbar.js";
		document.body.appendChild(script);
		
	}

	
	handleLoad() {
		console.log("Navbar script loaded!");
	 }
	
	render (){
		return (
			<div className="Navbar">
				<nav class="navbar-2 navbar-no-vertical-padding navbar-expand-lg navbar-light bg-light ">
				
				</nav>
			</div>
		);
	}
}

export default Navbar;
