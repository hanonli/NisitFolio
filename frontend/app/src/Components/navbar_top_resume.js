import React from 'react';
import { Link } from "react-router-dom";


class Resume_topNavbar extends React.Component {
	
	constructor(props) {
		super(props);
	 }
	
	componentDidMount() {

		const script = document.createElement("script");
		script.src = "assets/js/navbar_top_resume_script.js";
		document.body.appendChild(script);
		
	}

	
	render (){

		return (
			
			<div className="Resume_topNavbar" id='topNav'>
				
				<div  id='myresumetoppath'> 
						
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

export default Resume_topNavbar;
