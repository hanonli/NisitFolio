import React from 'react';
import { Link } from "react-router-dom";
import './navbar_resume.css'

class Resume_sideNavbar extends React.Component {
	constructor(props) {
		super(props);
		this.handleLoad = this.handleLoad.bind(this);
	 }
	
	componentDidMount() {
		window.addEventListener('load', this.handleLoad);
		const script = document.createElement("script");
		script.src = "assets/js/navbar_resume_script.js";
		document.body.appendChild(script);
		
	}
	
	handleLoad() {
		console.log("Navbar script loaded!");
	 }
	
	render (){
		return (
			<div className="Resume_sideNavbar" id='sideNav'>
				<div className='sidenav-centered'>
					<button type="button" class="slide_button" id='slidenav'>
						<img id='icon-slide_right'  src="assets/images/slide_right.png"></img>
					</button>
				</div>
				
			</div>
			
		);
	}
}

export default Resume_sideNavbar;
