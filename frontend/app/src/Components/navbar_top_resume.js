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
			additionalSkills : [],
			interestedJob : [],
			privacy : '',
			color : '',
			index : 0,
			owner :  false,
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
				userID : datas,
			})
			// console.log('this.state.userID1 :'+this.state.userID)
		});
		
		// var resumeID = '6142398e3e8c5c1df01304cc'
	}

	injectScript = () =>{
		const script = document.createElement("script");
		script.src = "assets/js/navbar_top_resume_script.js";
		document.body.appendChild(script);

	}
		
	getResumeID(e=0){
		const userid = this.state.userID ;
		const index = e ;
		const owner = this.state.owner ;
		// console.log('getResumeID called')
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
			// console.log(JSON.stringify(datas));
			// console.log('real resumeID:' + JSON.stringify(datas[0].ResumeId[index]))
			this.setState({
				resumeID : datas[0].ResumeId[index],
			})

		}).catch(function() {
			if(owner){
				console.log("You haven't created this part, Please create first");
				window.location = ("editprofile");
			}else{
				console.log('This portfolio is not exist!');
			}
			
		});
		

	}

	getDatas(){
		console.log('getDatas called')
		console.log( 'in getDatas :' + this.state.resumeID)
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
			// console.log( 'in getDatas1 :' + JSON.stringify(datas))
			if(datas.UserId == this.state.userID){
				this.setState({
					owner : true,
				})
			}else{
				this.setState({
					owner : false,
				})
			}
			this.setState({
				workHistorys : datas.workHistorys,
				educationHistorys : datas.educationHistorys,
				certificates : datas.certificates,
				additionalSkills : datas.additionalSkills,
				interestedJob : datas.interestedJob,
				color : datas.Color,
				privacy : datas.Privacy,
				stat : 'ready'
			})
			// console.log( 'in getDatas2 :' + JSON.stringify(datas.educationHistorys))
		});

	}

	portfoliotab1 = () => {
		// console.log('Porfoliotab1 is called')
		var index = 0;
		this.setState({
			workHistorys : [],
			educationHistorys : [],
			certificates : [],
			additionalSkills : [],
			interestedJob : [],
			privacy : '',
			color : '',
			index : 0,
			stat  : 'unready'
		});
		// console.log('call GetreumeID from tab1')
		this.getResumeID(index);
		// this.getDatas();
	}

	portfoliotab2 = () => {
		// console.log('Porfoliotab2 is called')
		var index = 1 ;
		this.setState({
			workHistorys : [],
			educationHistorys : [],
			certificates : [],
			additionalSkills : [],
			interestedJob : [],
			privacy : '',
			color : '',
			index : 1,
			stat  : 'unready'
		})
		// console.log('indexfff',index)
		// console.log('call GetreumeID from tab2')
		this.getResumeID(index);
		// this.getDatas();
		// this.forceUpdate()
	}

	portfoliotab3 = () => {
		var index = 2;
		this.setState({
			workHistorys : [],
			educationHistorys : [],
			certificates : [],
			additionalSkills : [],
			interestedJob : [],
			privacy : '',
			color : '',
			index : 2,
			stat  : 'unready'
		})
		this.getResumeID(index);

	}

	handleSection1 = () => {
		if(this.state.owner){
			console.log('you are owner1')
			return (
			<div className='resume_topnav' >
				<a className='topnav_section1' href='#' > 
					<img className='icon-myresume' id='icon-myresume-lock' src="assets/images/outline_lock_black_24dp.png"/> 
				</a>
			</div>
			
			)
		}else{
			console.log('you are outsider1')
			return (
			<div className='resume_topnav' >
				<a className='topnav_section1' href='#' > 
					<img className='icon-myresume' id='icon-myresume-lock-bookmark' src="assets/images/bookmark_2.png"/> 
				</a>
			</div>

			)
		}
	}

	handleSection2 = () => {
		if(this.state.owner){
			console.log('you are owner2')
			return (
				<div className='resume_topnav' >

					<div className='resume_selectoption'> 

						<a className='topnav_section2'> 
							&nbsp;
							<img className='icon-myresume' id='icon-myresume-edit' src="assets/images/blackedit.png"/> 
							&nbsp;
						</a>
						<span className='resume_verticalline2'> </span>
						<a className='topnav_section2'> 

							<img className='icon-myresume' id='icon-myresume-share' src="assets/images/outline_ios_share_black_48dp.png"/> 
						</a>
						&nbsp;
					</div>
				</div>
			)
		}else{
			console.log('you are outsider2')
			return (
			<div className='resume_topnav' >
				<a className='topnav_section1' href='#' > 
					<img id='icon-myresume-lock'  src="assets/images/bookmark_2.png"/> 
				</a>
			</div>

			)
		}
	}



	
	componentDidMount() {
		// console.log('topnav start mount')
		window.addEventListener('load', this.handleLoad);
		const script = document.createElement("script");
		script.src = "assets/js/navbar_top_resume_script.js";
		document.body.appendChild(script);

		// console.log('topnav stop mount')
		// console.log( 'before update state :' + JSON.stringify(this.state))
	}
	
	
	shouldComponentUpdate(nextProps, nextState){
		// alert( nextState == this.state )
		if(this.state.resumeID===''){
			return true
		}else if(this.state.resumeID !== nextState.resumeID){
			// console.log(3)
			return true
		}else if(this.state.educationHistorys === [] ){
			// console.log(3)
			return true
		}else if(this.state.stat !== 'ready'){
			// console.log('status need to re-render')
			return true
		}else{
			// console.log('status dont need to re-render')
			return false
		}

	
	}


	render (){

		if(this.state.userID !== ''  && this.state.resumeID === ''  ){
			// console.log('call getResumeID');
			this.getResumeID(this.state.index);
		}
		// console.log('in render() state before : ' + JSON.stringify(this.state))
		if(this.state.resumeID !== '' && this.state.stat === 'unready' ){
			// alert('call getDatas');
			this.getDatas();
		}


		// console.log('in render() state : ' + JSON.stringify(this.state))

		return (
			
			<div className="Resume_topNavbar" id='topNav'>
				
				<div  className='myresumetoppath'> 
					{this.handleSection1()}
					&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
					<div className='resume_topnav' >
						<div className='resume_selectjob'> 
							<h1 className='resume_selectjob_block'> 
								&nbsp;<a className='active' onClick={this.portfoliotab1} id='resume_selectjob1'>ตำแหน่งงานที่ 1</a>&nbsp; <span className="resume_verticalline"></span> 
							</h1>
							<h1 className='resume_selectjob_block'> 
								&nbsp;<a  onClick={this.portfoliotab2} id='resume_selectjob2'>ตำแหน่งงานที่ 2</a>&nbsp; <span className="resume_verticalline"></span> 
							</h1>
							<h1 className='resume_selectjob_block'> 
								&nbsp;<a  onClick={this.portfoliotab3} id='resume_selectjob3'>ตำแหน่งงานที่ 3</a>&nbsp;
							</h1>
						</div>
					</div>
					&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
					{/* {this.handleSection2()} */}
					{this.handleSection2()}
					{this.injectScript()}
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
