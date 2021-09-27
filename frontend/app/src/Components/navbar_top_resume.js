import $, { data, get } from 'jquery';
import cookie from 'react-cookies';
import React from 'react';
import MyResumeContent from './myresumeContent.js';
import { Link } from "react-router-dom";
import './navbar_resume.css'


class Resume_topNavbar extends React.Component {
	
	
	constructor(props) {
		super(props);

		this.state = {
			userID : '',
			resumeID : '',
			workHistorys : [],
			educationHistorys : [],
			certificates : [],
			additionalskill : [],
			interestedjob : [],
			privacy : '',
			color : '',
			index : 0,
			stat  : 'unready'
		}

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
				userID : datas
			})
			// console.log('this.state.userID1 :'+this.state.userID)
		});
		
		// console.log('in contructs'+this.state.userID)
		// var userID
		// var resumeID = '6142398e3e8c5c1df01304cc'
		// var workHistorys
		// var educationHistorys
	}
		
	getDatas(){
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
		
	getResumeID(e){
		const userid = this.state.userID
		const index = e
		console.log('in getResumeID index is :' + index + ' userid is: ' + userid )
		fetch("http://localhost:2000/portfolio/user/"+ userid,{
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
			// console.log('real resumeID:' + JSON.stringify(datas[0].ResumeId[0]))
			this.setState({
				resumeID : datas[index].ResumeId[0],
				stat : 'ready',
			})
		});
	}

	portfoliotab1 = () => {
		var index = 0;
		this.setState({
			index : 0,
		});
		this.getResumeID(index);
		this.getDatas();
	}

	portfoliotab2 = () => {
		var index = 1;
		this.setState({
			index : 1,
		})
		console.log('indexfff',index)
		this.getResumeID(index);
		this.getDatas();

	}

	portfoliotab3 = () => {
		var index = 2;
		this.setState({
			index : 2,
		})
		this.getResumeID(index);
		this.getDatas();

	}

	
	componentDidMount() {

		console.log('topnav start mount')
		window.addEventListener('load', this.handleLoad);
		const script = document.createElement("script");
		script.src = "assets/js/navbar_top_resume_script.js";
		document.body.appendChild(script);

		console.log('topnav stop mount')
		
	}
	
	shouldComponentUpdate(nextProps, nextState){
		// alert( nextState == this.state )
		if(this.state.resumeID===''){
			// console.log(1)
			return true
		}else if(this.state.color === '' ){
			// console.log(2)
			return true

		}else if(this.state.resumeID !== nextState.resumeID){
			// console.log(3)
			return true
		}else if(this.state.color !== nextState.color){
			// console.log(3)
			return true
		}else{
			// console.log(4)
			return false
		}
	
	}


	render (){

		if(this.state.userID !== ''  && this.state.resumeID === ''  ){
			// console.log('call getResumeID');
			this.getResumeID(this.state.index);
		}else{
			// console.log('getResumeID not called')
			// console.log(this.state.resumeID)
		}
		if(this.state.resumeID !== ''){
			// console.log('call getDatas');
			this.getDatas();
		}else{
			// console.log('getDatas not called')
		}



		console.log('state : ' + JSON.stringify(this.state))

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
								&nbsp;<a className='active' href='#' onClick={this.portfoliotab1} id='resume_selectjob1'>ตำแหน่งงานที่ 1</a>&nbsp; <span className="resume_verticalline"></span> 
							</h1>
							<h1 className='resume_selectjob_block'> 
								&nbsp;<a href='#'  onClick={this.portfoliotab2} id='resume_selectjob2'>ตำแหน่งงานที่ 2</a>&nbsp; <span className="resume_verticalline"></span> 
							</h1>
							<h1 className='resume_selectjob_block'> 
								&nbsp;<a href='#'  onClick={this.portfoliotab3} id='resume_selectjob3'>ตำแหน่งงานที่ 3</a>&nbsp;
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
