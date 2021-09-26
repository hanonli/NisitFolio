import $, { data } from 'jquery';
import cookie from 'react-cookies';
import React from 'react';
import MyResumeContent from './myresumeContent.js';
import { Link } from "react-router-dom";
import './navbar_resume.css'


class Resume_topNavbar extends React.Component {
	state = {
		userID : '',
		resumeID : '6142398e3e8c5c1df01304cc',
		workHistorys : [],
		educationHistorys : [],
		certificates : [],
		additionalskill : [],
		interestedjob : [],
		privacy : '',
		color : '',
	}
	
	constructor(props) {
		super(props);
		// var userID
		// var resumeID = '6142398e3e8c5c1df01304cc'
		// var workHistorys
		// var educationHistorys
		var token = cookie.load('login-token')
		
		fetch("http://localhost:2000/profile/",{
			method: "GET",
			headers: {
				'Authorization': 'Bearer '+token,	
				"Access-Control-Allow-Origin": "*",
				"Access-Control-Allow-Methods": "*",
				"Access-Control-Allow-Credentials": true,
				"Content-Type": "application/json"
			},
		})
		.then(response => response.text())
		.then((datas) => {
			this.setState({
				userID : datas,
			})
			console.log(this.state.userID)
		});
		

		fetch("http://localhost:2000/myresume/"+this.state.resumeID,{
			method: "GET",
			headers: {
				"Access-Control-Allow-Origin": "*",
				"Access-Control-Allow-Methods": "*",
				"Access-Control-Allow-Credentials": true,
				"Content-Type": "application/json"
			},
		})
		.then(response => response.json())
		.then((datas) => {

			this.setState({
				workHistorys : datas.workHistorys,
				educationHistorys : datas.educationHistorys,
				certificates : datas.certificates,
				additionalskill : datas.additionalskill,
				interestedjob : datas.interestedjob,
				color : datas.Color,
				privacy : datas.Privacy,
			})

		});

		
	 }

	 
	
	
	componentDidMount() {
		const script = document.createElement("script");
		script.src = "assets/js/navbar_top_resume_script.js";
		document.body.appendChild(script);
	}

	
	render (){
		if(!this.state){
			console.log('still no data');
		}else{
			console.log('data recieve')
		}
		
		console.log('certi: ' + JSON.stringify(this.state))
		return (
			
			<div className="Resume_topNavbar" id='topNav'>
				
				<div  className='myresumetoppath'> 

					<div className='resume_topnav' >
						<a className='topnav_lock' href='#' > 
							<img id='icon-myresume-lock'  src="assets/images/outline_lock_black_24dp.png"/> 
						</a>
					</div>
					&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
					<div className='resume_topnav' >
						<div className='resume_selectjob'> 
							<h1 className='resume_selectjob_block'> 
								&nbsp;<a className='active' href='#' id='resume_selectjob1'>ตำแหน่งงานที่ 1</a>&nbsp; <span className="resume_verticalline"></span> 
							</h1>
							<h1 className='resume_selectjob_block'> 
								&nbsp;<a href='#' id='resume_selectjob2'>ตำแหน่งงานที่ 2</a>&nbsp; <span className="resume_verticalline"></span> 
							</h1>
							<h1 className='resume_selectjob_block'> 
								&nbsp;<a href='#' id='resume_selectjob3'>ตำแหน่งงานที่ 3</a>&nbsp;
							</h1>
						</div>
						
					</div>
				</div>
				<div>
					<div class="tab-content" id="myresume1-content">
						<MyResumeContent  state={this.state} />
					</div>

				
				</div>
		
			</div>
			
		);
	}
}

export default Resume_topNavbar;
