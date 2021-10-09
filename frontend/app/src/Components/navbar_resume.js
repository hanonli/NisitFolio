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
		const linestyle = {
            backgroundColor: this.props.colour? this.props.colour: "#FFCE55"
        };
		return (
			
			<div className="Resume_sideNavbar" id='sideNav'>
				
				<div  id='myresumepath'> 
					<a className='resumeicon' href='myresume#resume-education'>
						<div className='resumeblock' >
							<img id='icon-myresume-education'  src="assets/images/ประวัติการศึกษา.png"/> 
							<h1 id='resumetext'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ประวัติการศึกษา</h1>
						</div>
					</a>

					<a className='resumeicon' href="myresume#resume-additionalskills">
						<div className='resumeblock'>
							 <img id='icon-myresume-skill'  src="assets/images/ความถนัดและทักษะ.png"></img>  
							<h1 id='resumetext'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ทักษะที่โดดเด่น</h1>
						</div>
					</a>

					<a className='resumeicon' href="myresume#resume-work">
						<div className='resumeblock'>
							 <img id='icon-myresume-work'  src="assets/images/ประวัติการทำงาน.png"></img>  
							<h1 id='resumetext'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ประวัติการทำงาน</h1>
						</div>
					</a>

					<a className='resumeicon' href="myresume#resume-certificate">
						<div className='resumeblock'>
							 <img id='icon-myresume-certi'  src="assets/images/เกียรติบัตรและใบรับรอง.png"></img>  
							<h1 id='resumetext'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ใบรับรอง</h1>
						</div>
					</a>

					<a className='resumeicon' href="myresume#resume-resume">
						<div className='resumeblock'>
							 <img id='icon-myresume-resume'  src="assets/images/ผลงานของฉัน.png"></img> 
							<h1 id='resumetext'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ผลงาน</h1>
						</div> 
					</a>

					<a className='resumeicon' href="myresume#resume-goal">
						<div className='resumeblock'>
							 <img id='icon-myresume-goal'  src="assets/images/เป้าหมายการทำงาน.png"></img> 
							<h1 id='resumetext'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;เป้าหมายการทำงาน</h1>
						</div>
					</a>
					
				</div>

				
			</div>
			
		);
	}
}

export default Resume_sideNavbar;
