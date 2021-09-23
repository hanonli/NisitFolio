import React from 'react';
import { Link } from "react-router-dom";


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
						<a class='topnav_lock' > 
							<img id='icon-myresume-lock'  src="assets/images/outline_lock_black_24dp.png"/> 
						</a>
					</div>
					&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

					<div class='resume_topnav' >
						<div class='resume_selectjob'> 
							<h1 class='resume_selectjob_text'>  &nbsp;ตำแหน่งงานที่ 1&nbsp; <span id="resume_verticalline"></span> &nbsp;ตำแหน่งงานที่ 2&nbsp; <span id="resume_verticalline"></span> &nbsp;ตำแหน่งงานที่ 3&nbsp;</h1>
						</div>
						
					</div>

				</div>
		
			</div>
			
		);
	}
}

export default Resume_topNavbar;
