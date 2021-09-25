import React from 'react';
import { Link } from "react-router-dom";
import './navbar_resume.css'


class Resume_topNavbar extends React.Component {
	
	constructor(props) {
		super(props);
		this.handleLoad = this.handleLoad.bind(this);
	 }
	
	componentDidMount() {
		window.addEventListener('load', this.handleLoad);
		const script = document.createElement("script");
		script.src = "assets/js/navbar_top_resume_script.js";
		document.body.appendChild(script);
		
	}

	handleLoad() {
		console.log("topNavbar script loaded!");
	 }
	
	render (){

		return (
			
			<div className="Resume_topNavbar" id='topNav'>
				
				<div  class='myresumetoppath'> 

					<div class='resume_topnav' >
						<a class='topnav_lock' href='#' > 
							<img id='icon-myresume-lock'  src="assets/images/outline_lock_black_24dp.png"/> 
						</a>
					</div>
					&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

					<div class='resume_topnav' >
						<div class='resume_selectjob'> 
							<h1 class='resume_selectjob_block'> 
								&nbsp;<a class='active' href='#' id='resume_selectjob1'>ตำแหน่งงานที่ 1</a>&nbsp; <span class="resume_verticalline"></span> 
							</h1>
							<h1 class='resume_selectjob_block'> 
								&nbsp;<a href='#' id='resume_selectjob2'>ตำแหน่งงานที่ 2</a>&nbsp; <span class="resume_verticalline"></span> 
							</h1>
							<h1 class='resume_selectjob_block'> 
								&nbsp;<a href='#' id='resume_selectjob3'>ตำแหน่งงานที่ 3</a>&nbsp;
							</h1>
						</div>
						
					</div>

				</div>
		
			</div>
			
		);
	}
}

export default Resume_topNavbar;
