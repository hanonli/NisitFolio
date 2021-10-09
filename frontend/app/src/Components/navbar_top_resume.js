import $, { data, get } from 'jquery';
import cookie from 'react-cookies';
import React from 'react';
import MyResumeContent from './myresumeContent.js';
import Resume_sideNavbar from './navbar_resume.js';
import LoadingL from './loadingL';
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
			ready  : false,
			loading : true,
		}

		// GET Parameter(userID) FROM URL 
		var sPageURL = window.location.search.substring(1)
		var isURLBlank = (sPageURL == '')
		if( !isURLBlank){
			var sParam = sPageURL.split('=')
			var temp_userid = sParam[1]
			this.setState({
				userID : temp_userid,
				owner : false,
			})
		}else{
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
					owner : true,
				})
				// console.log('this.state.userID1 :'+this.state.userID)
			});

		}
		
		
		// var resumeID = '6142398e3e8c5c1df01304cc'
	}

	injectScript = () =>{
		const script = document.createElement("script");
		script.src = "assets/js/navbar_top_resume_script.js";
		document.body.appendChild(script);

	}
		
	getResumeID(e=0){
		var userid = this.state.userID ;
		var index = e ;
		var owner = this.state.owner ;
		// console.log('getResumeID called')
		console.log('in getResumeID index is :' + index + ' userid is: ' + userid )
		fetch("http://localhost:2000/myresume/user/"+ userid,{
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
			console.log('in resumeid datas: ' + JSON.stringify(datas));

			// var a = datas[0]
			// var b = datas[1]
			// var c = datas[2]
			// console.log('in resumeid datas a: ' + JSON.stringify(a));
			// console.log('in resumeid datas b: ' + JSON.stringify(b));
			// console.log('in resumeid datas c: ' + JSON.stringify(c));			
			var Resumedata = datas[index]
			if(Resumedata === undefined){
				alert('there is no resumedata Redirect to last path')
				window.history.go(-1)
			}else{
				this.setState({
					resumeID : Resumedata._id,
					workHistorys : Resumedata.workHistorys,
					educationHistorys : Resumedata.educationHistorys,
					certificates : Resumedata.certificates,
					additionalSkills : Resumedata.additionalSkills,
					interestedJob : Resumedata.interestedJob,
					color : Resumedata.Color,
					privacy : Resumedata.Privacy,
					ready : true,
				})
			}

			// console.log('real resumeID:' + JSON.stringify(datas[0].ResumeId[index]))
			// this.setState({
			// 	resumeID : datas[0].ResumeId[index],
			// })
			
		})
	}

	getDatas(){
	// 	console.log('getDatas called')
	// 	console.log( 'in getDatas :' + this.state.resumeID)
	// 	fetch("http://localhost:2000/myresume/"+this.state.resumeID,{
	// 		method: "GET",
	// 		headers: {
	// 			"Access-Control-Allow-Origin": "*",
	// 			"Access-Control-Allow-Methods": "*",
	// 			"Access-Control-Allow-Credentials": true,
	// 			"Content-Type": "application/json"
	// 		},
	// 	})
	// 	.then(response => response.json())
	// 	.then((datas) => {
	// 		// console.log( 'in getDatas1 :' + JSON.stringify(datas))
	// 		this.setState({
	// 			workHistorys : datas.workHistorys,
	// 			educationHistorys : datas.educationHistorys,
	// 			certificates : datas.certificates,
	// 			additionalSkills : datas.additionalSkills,
	// 			interestedJob : datas.interestedJob,
	// 			color : datas.Color,
	// 			privacy : datas.Privacy,
	// 			ready : true,
	// 		})

	// 		// console.log( 'in getDatas2 :' + JSON.stringify(datas.educationHistorys))
	// 	});

	}

	handlePrivacy(){

	}

	portfoliotab1 = () => {
		// console.log('Porfoliotab1 is called')
		var index = 0;
		this.setState({
			resumeID : '',
			workHistorys : [],
			educationHistorys : [],
			certificates : [],
			additionalSkills : [],
			interestedJob : [],
			privacy : '',
			color : '',
			index : 0,
			ready  :  false,
			loading : true,
		});
		// console.log('call GetreumeID from tab1')
		this.getResumeID(index);
		// this.getDatas();
	}

	portfoliotab2 = () => {
		// console.log('Porfoliotab2 is called')
		// console.log('before change state: ' + JSON.stringify(this.state))
		var index = 1 ;
		this.setState({
			resumeID : '',
			workHistorys : [],
			educationHistorys : [],
			certificates : [],
			additionalSkills : [],
			interestedJob : [],
			privacy : '',
			color : '',
			index : 1,
			ready  :  false,
			loading : true,
		})
		this.getResumeID(index);
		// this.getDatas();
		// this.forceUpdate()
	}

	portfoliotab3 = () => {
		var index = 2;
		this.setState({
			resumeID : '',
			workHistorys : [],
			educationHistorys : [],
			certificates : [],
			additionalSkills : [],
			interestedJob : [],
			privacy : '',
			color : '',
			index : 2,
			ready  :  false,
			loading : true,
		})
		this.getResumeID(index);

	}

	handleSection1 = () => {
		if(this.state.owner){
			// console.log('you are owner1')
			return (
			<div className='resume_topnav' >
				<a className='topnav_section1' > 
					<img onClick={this.handlePrivacy()} className='icon-myresume' id='icon-myresume-lock' src="assets/images/outline_lock_black_24dp.png"/> 
				</a>
			</div>
			
			)
		}else{
			// console.log('you are outsider1')
			return (
			<div className='resume_topnav' >
				<a className='topnav_section1' > 
					<img className='icon-myresume' id='icon-myresume-lock-bookmark' src="assets/images/bookmark_2.png"/> 
				</a>
			</div>

			)
		}
	}

	handleSection2 = () => {
		if(this.state.owner){
			// console.log('you are owner2')
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
			// console.log('you are outsider2')
			return (
			<div className='resume_topnav' >
				<a className='topnav_section1' href='#myresume' > 
					<img id='icon-myresume-lock'  src="assets/images/bookmark_2.png"/> 
				</a>
			</div>

			)
		}
	}

	loadingScreen(){
		return( 
			<div>
				<LoadingL />
			</div>)
	}

	showingScreen(){
		return(
			<div>
				<Resume_sideNavbar/>
				<div className="Resume_topNavbar" id='topNav'>
					
					<div  className='myresumetoppath'> 
							{this.handleSection1()}
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
						<div className='resume_topnav' >
							<div className='resume_selectresume'> 
								<h1 className='resume_selectresume_block'> 
									&nbsp;<a  onClick={this.portfoliotab1}  id='resume_selectresume1'>ตำแหน่งงานที่ 1</a>&nbsp; <span className="resume_verticalline"></span> 
								</h1>
								<h1 className='resume_selectresume_block'> 	
									&nbsp;<a  onClick={this.portfoliotab2} id='resume_selectresume2'>ตำแหน่งงานที่ 2</a>&nbsp; <span className="resume_verticalline"></span> 
								</h1>
								<h1 className='resume_selectresume_block'> 
									&nbsp;<a  onClick={this.portfoliotab3} id='resume_selectresume3'>ตำแหน่งงานที่ 3</a>&nbsp;
								</h1>
							</div>
						</div>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
							{this.handleSection2()}
							{this.injectScript()}
					</div>

					<div>
						<div class="tab-content" id="myresume1-content">
							<MyResumeContent  state={this.state} />
						</div>
					</div>
	
				</div>

			</div>
			


		)

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
			console.log('update state')
			return true
		}else if(this.state.resumeID !== nextState.resumeID){
			// console.log(3)
			console.log('update state')
			return true
		}else if(this.state.educationHistorys === [] ){
			// console.log(3)
			console.log('update state')
			return true
		}else if( !this.state.ready){
			// console.log('status need to re-render')
			console.log('update state')
			return true
		}else if( this.state.loading){
			this.setState({
				loading : false
			})
			// console.log('update state')
			return true
		}

	
	}


	render (){

		if(this.state.userID !== ''  && this.state.resumeID === ''  ){
			// console.log('call getResumeID');
			this.getResumeID(this.state.index);
		}
		// console.log('in render() state before : ' + JSON.stringify(this.state))
		// if(this.state.resumeID !== '' && this.state.loading){
		// 	// alert('call getDatas');
		// 	this.getDatas();
		// }


		console.log('in render() state : ' + JSON.stringify(this.state))

		return (
			
			this.state.loading ? this.loadingScreen() : this.showingScreen() 
			// <div className="Resume_topNavbar" id='topNav'>
				
			// 	<div  className='myresumetoppath'> 
			// 		{this.handleSection1()}
			// 		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
			// 		<div className='resume_topnav' >
			// 			<div className='resume_selectresume'> 
			// 				<h1 className='resume_selectresume_block'> 
			// 					&nbsp;<a  className='active' onClick={this.portfoliotab1}  id='resume_selectresume1'>ตำแหน่งงานที่ 1</a>&nbsp; <span className="resume_verticalline"></span> 
			// 				</h1>
			// 				<h1 className='resume_selectresume_block'> 
			// 					&nbsp;<a  onClick={this.portfoliotab2} id='resume_selectresume2'>ตำแหน่งงานที่ 2</a>&nbsp; <span className="resume_verticalline"></span> 
			// 				</h1>
			// 				<h1 className='resume_selectresume_block'> 
			// 					&nbsp;<a  onClick={this.portfoliotab3} id='resume_selectresume3'>ตำแหน่งงานที่ 3</a>&nbsp;
			// 				</h1>
			// 			</div>
			// 		</div>
			// 		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
			// 		{this.handleSection2()}
			// 		{this.injectScript()}
			// 	</div>

			// 	<div>
			// 		<div class="tab-content" id="myresume1-content">
			// 			<MyResumeContent  state={this.state} />
			// 		</div>

				
			// 	</div>
	
			// </div>
			
			
		);
	}
}

export default Resume_topNavbar;
