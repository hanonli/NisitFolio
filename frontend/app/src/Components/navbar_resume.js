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
						<div className='resumeblock' >
							<a className='resumeicon' href="#resume-education"> 
								<img id='icon-myresume-education'  src="assets/images/ประวัติการศึกษา.png"/> 
							</a>
						ประวัติการศึกษา
						</div>

						<div className='resumeblock'>
							<a className='resumeicon' href="#"> <img id='icon-myresume-skill'  src="assets/images/ความถนัดและทักษะ.png"></img>  </a>
							ทักษะที่โดดเด่น
						</div>

						<div className='resumeblock'>
							<a className='resumeicon' href="#"> <img id='icon-myresume-work'  src="assets/images/ประวัติการทำงาน.png"></img>  </a>
							ประวัติการทำงาน
						</div>

						<div className='resumeblock'>
							<a className='resumeicon' href="#resume-certificate"> <img id='icon-myresume-certi'  src="assets/images/เกียรติบัตรและใบรับรอง.png"></img>  </a>
							ใบรับรอง
						</div>


						<div className='resumeblock'>
							<a className='resumeicon' href="#"> <img id='icon-myresume-resume'  src="assets/images/ผลงานของฉัน.png"></img>  </a>
							ผลงาน
						</div>
						<div className='resumeblock'>
							<a className='resumeicon' href="#"> <img id='icon-myresume-goal'  src="assets/images/เป้าหมายการทำงาน.png"></img>  </a>
							เป้าหมายการทำงาน
						</div>
						
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
