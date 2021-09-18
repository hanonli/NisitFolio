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
				<div class='row' id='myresumepath'> 
						<a href="#"> <img id='icon-myresume-education'  src="assets/images/ประวัติการศึกษา.png"></img> </a>
						<a href="#"> <img id='icon-myresume-certi'  src="assets/images/เกียรติบัตรและใบรับรอง.png"></img> </a>
						<a href="#"> <img id='icon-myresume-skill'  src="assets/images/ความถนัดและทักษะ.png"></img> </a>
						<a href="#"> <img id='icon-myresume'  src="assets/images/bookmark_1.png"></img> </a>
						<a href="#"> <img id='icon-myresume-work'  src="assets/images/ผลงานของฉัน.png"></img> </a>
						<a href="#"> <img id='icon-myresume-goal'  src="assets/images/เป้าหมายการทำงาน.png"></img> </a>
				</div>
				{/* <div className='sidenav-centered'>
					<button type="button" class="slide_button" id='slidenav'>
						<img id='icon-slide_right'  src="assets/images/slide_right.png"></img>
					</button>
					
				</div> */}
				
			</div>
			
		);
	}
}

export default Resume_sideNavbar;
