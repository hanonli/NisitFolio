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
            background: this.props.color? this.props.color: "#FFCE55"
        };
		// const color = this.props.color? this.props.color : "#FFCE55" 
		return (
			
			<div className="Resume_sideNavbar" style={linestyle} id='sideNav'>
				
				<div  id='myresumepath'> 
				<div className='resumeicon'>
						<a  href='myresume#resume-header'>
							<div className='resumeblock' >
								<img id='icon-myresume-education'  src="assets/images/outline_account_circle_black_24dp.png"/> 
								<span class='resumetext'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ข้อมูลส่วนตัว</span>
							</div>
						</a>
					</div>
			
					<div className='resumeicon'>
						<a  href='myresume#resume-education'>
							<div className='resumeblock' >
								<img id='icon-myresume-education'  src="assets/images/ประวัติการศึกษา.png"/> 
								<span class='resumetext'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ประวัติการศึกษา</span>
							</div>
						</a>
					</div>

					<div className='resumeicon'>
						<a  href="myresume#resume-additionalskills">
							<div className='resumeblock'>
								<img id='icon-myresume-skill'  src="assets/images/ความถนัดและทักษะ.png"></img>  
								<span class='resumetext'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ทักษะที่โดดเด่น</span>
							</div>
						</a>
						
					</div>
					<div className='resumeicon'>
						<a  href="myresume#resume-work">
							<div className='resumeblock'>
								<img id='icon-myresume-work'  src="assets/images/ประวัติการทำงาน.png"></img>  
								<span class='resumetext'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ประวัติการทำงาน</span>
							</div>
						</a>
					</div>
						
					<div className='resumeicon'>
						<a  href="myresume#resume-certificate">
							<div className='resumeblock'>
								<img id='icon-myresume-certi'  src="assets/images/เกียรติบัตรและใบรับรอง.png"></img>  
								<span class='resumetext'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ใบรับรอง</span>
							</div>
						</a>
					</div>

					<div className='resumeicon'> 
						<a href="myresume#resume-resume">
							<div className='resumeblock'>
								<img id='icon-myresume-resume'  src="assets/images/ผลงานของฉัน.png"></img> 
								<span class='resumetext'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ผลงาน</span>
							</div> 
						</a>
					</div>
					
					<div className='resumeicon'>
						<a  href="myresume#resume-goal">
							<div className='resumeblock'>
								<img id='icon-myresume-goal'  src="assets/images/เป้าหมายการทำงาน.png"></img> 
								<span class='resumetext'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;เป้าหมายการทำงาน</span>
							</div>
						</a>

					</div>	
					
				</div>

				
			</div>
			
		);
	}
}

export default Resume_sideNavbar;
