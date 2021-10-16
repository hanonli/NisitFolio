import $, { data, get } from 'jquery';
import cookie from 'react-cookies';
import React from 'react';
import MyResumeNothing1 from './myresumeNothing1.js'
import MyResumeNothing2 from './myresumeNothing2.js'
import MyResumeNothing3 from './myresumeNothing3.js'
import MyResumeContent from './myresumeContent.js';
import Resume_sideNavbar from './navbar_resume.js';
import SharingPopup from './sharingpopup';
import LoadingL from './loadingL';
import { Link } from "react-router-dom";
import './navbar_resume.css'


class Resume_topNavbar extends React.Component {
	
	
	constructor(props) {
		super(props);

		this.state = {
			userID : '',
			resumeID : '',
			jobname1 : '',
			jobname2 : '',
			jobname3 : '',
			workHistorys : [],
			educationHistorys : [],
			certificates : [],
			additionalSkills : [],
			interestedJob : [],
			privacy : '',
			color : '',
			index : 0,
			owner : '',
			firstname: '',
			lastname: '',
			is_owner :  false,
			profilepic : null,
			aboutme : '',
			ready  : false,
			loading : true,
			fetch : true,
		}

		// GET Parameter(userID) FROM URL 
		
		
		
		// var resumeID = '6142398e3e8c5c1df01304cc'
	}

	injectScript = () =>{
		const script = document.createElement("script");
		script.src = "assets/js/navbar_top_resume_script.js";
		document.body.appendChild(script);
	}
		
	getResumeID(e){
		var userid = this.state.userID ;
		var index = e;
		var owner = this.state.is_owner ;
		// console.log('in resumeid index1: ' + index);
		// console.log('in resumeid e1: ' + e);
		// console.log('in resumeid state.index1: ' + this.state.index);
		// console.log('getResumeID called')
		// console.log('in getResumeID index is :' + index + ' userid is: ' + userid )
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
			// var index = e;
			// console.log('real resumeID:' + JSON.stringify(datas[0].ResumeId[0]))
			// console.log('in resumeid datas: ' + JSON.stringify(datas));
			var index = this.state.index
			var resume1 = datas[0] ? datas[0] : undefined
			var resume2 = datas[1] ? datas[1] : undefined
			var resume3 = datas[2] ? datas[2] : undefined
			var job1 = resume1 ? resume1.interestedJob[0].Job_JobName : 'ยังไม่มีตำแหน่งงาน'
			var job2 = resume2 ? resume2.interestedJob[0].Job_JobName : 'ยังไม่มีตำแหน่งงาน'
			var job3 = resume3 ? resume3.interestedJob[0].Job_JobName :'ยังไม่มีตำแหน่งงาน'

			// console.log('in resumeid datas a: ' + JSON.stringify(a));
			// console.log('in resumeid datas b: ' + JSON.stringify(b));
			// console.log('in resumeid datas c: ' + JSON.stringify(c));			
			var Resumedata = datas[index];
			// console.log('Resumedata is: ' + JSON.stringify(Resumedata));
			// console.log('in resumeid index2: ' + index);
			// console.log('in resumeid e2: ' + e);
			// console.log('in resumeid state.index2: ' + this.state.index);
			// console.log('in resumeid Resumedatas1: ' + JSON.stringify(datas[index]));
			// console.log('in resumeid Resumedatas2: ' + JSON.stringify(Resumedata));	
			if(Resumedata == undefined ){
				// console.log('there is no resumedata Redirect to last path')
				// console.log('resumeid this.state.loading: '+this.state.loading)
				// console.log('resumeid this.state.ready: '+this.state.ready)
				// console.log('resumeid this.state.fetcf: '+this.state.fetch)
				this.setState({
					loading : false,
					ready : true,
					fetch : false,
				});
				// window.history.go(-1)	
			}else{
				this.setState({
					resumeID : Resumedata._id,
					jobname1 : job1,
					jobname2 : job2,
					jobname3 : job3,
					workHistorys : Resumedata.workHistorys ? Resumedata.workHistorys : [],
					educationHistorys : Resumedata.educationHistorys ? Resumedata.educationHistorys : [],
					certificates : Resumedata.certificates ?  Resumedata.certificates : [],
					additionalSkills : Resumedata.additionalSkills ? Resumedata.additionalSkills : [],
					interestedJob : Resumedata.interestedJob ? Resumedata.interestedJob : [],
					color : Resumedata.Color ? Resumedata.Color : '#FFCE55',
					privacy : Resumedata.Privacy,
					hometown : Resumedata.Location? Resumedata.Location: '',
					portfolio : Resumedata.portfolios? Resumedata.portfolios: [],
					owner : Resumedata.Owner ? Resumedata.Owner : '',
					firstname: Resumedata.First ? Resumedata.First : '',
					lastname: Resumedata.Last ? Resumedata.Last : '',
					profilepic : Resumedata.ProfilePic !== null ? Resumedata.ProfilePic : '',
					aboutme : Resumedata.Aboutme !== null ? Resumedata.Aboutme : '',
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
			jobname1 : '',
			jobname2 : '',
			jobname3 : '',
			workHistorys : [],
			educationHistorys : [],
			certificates : [],
			additionalSkills : [],
			interestedJob : [],	
			privacy : '',
			portfolio : [],
			color : '',
			hometown : '',
			index : 0,
			ready  : false,
			loading : true,
			fetch : true,
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
			jobname1 : '',
			jobname2 : '',
			jobname3 : '',
			workHistorys : [],
			educationHistorys : [],
			certificates : [],
			additionalSkills : [],
			interestedJob : [],
			privacy : '',
			portfolio : [],
			color : '',
			hometown : '',
			index : 1,
			ready  : false,
			loading : true,
			fetch : true,
		})
		this.getResumeID(index);
		// this.getDatas();
		// this.forceUpdate()
	}

	portfoliotab3 = () => {
		var index = 2;
		this.setState({
			resumeID : '',
			jobname1 : '',
			jobname2 : '',
			jobname3 : '',
			workHistorys : [],
			educationHistorys : [],
			certificates : [],
			additionalSkills : [],
			interestedJob : [],
			privacy : '',
			portfolio : [],
			color : '',
			hometown : '',
			index : 2,
			ready  : false,
			loading : true,
			fetch : true,
		})
		this.getResumeID(index);

	}	

	handleSection1 = () => {
		if(this.state.is_owner){
			// console.log('you are owner1')
			if(this.state.privacy == 'Private'){
				return (
					<div className='resume_topnav' >
						<div className='topnav_section1'>
							<a  > 
								<img onClick={this.handlePrivacy()} id='icon-myresume-lock' src="assets/images/outline_lock_black_24dp.png"/> 
							</a>
						</div>
						
					</div>
					)
			}else if(this.state.privacy == 'Public'){
				return (
					<div className='resume_topnav' >
						<div className='topnav_section1'>
							<a > 
								<img onClick={this.handlePrivacy()} id='icon-myresume-lock' src="assets/images/outline_lock_black_24dp.png"/> 
							</a>

						</div>
						
					</div>
					)
			}
			

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
		if(this.state.is_owner){
			// console.log('you are owner2')
			return (
				<div className='resume_selectoption'> 

						<div className='topnav_section2'>
							<a> 
								&nbsp;
								<img id='icon-myresume-edit' src="assets/images/blackedit.png"/> 
							</a>
							<span className='resume_verticalline2'> </span>
							<a> 
								<img class="obj-icon tooltips-item"  id='icon-myresume-share' src="assets/images/outline_ios_share_black_48dp.png" type="button" data-bs-toggle="modal" toggle-type="dynamic" data-bs-target="#sharingResume" alt="" width="30" height="30"/>
								{/* <img id='icon-myresume-share' src="assets/images/outline_ios_share_black_48dp.png"/>  */}
								{/* <span id='icon-myresume-share'> <SharingPopup></SharingPopup></span> */}
								&nbsp;
							</a>

						</div>
						
						
						{/* <SharingPopup></SharingPopup> */}
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

	resumeNothing(){
		var index = this.state.index
		if(index==0){
			return(
				<>
					<MyResumeNothing1/>
				</>
			)
		}else if(index==1){
			return(
				<>
					<MyResumeNothing2/>
				</>
			)
		}else if(index==2){
			return(
				<>
					<MyResumeNothing3/>
				</>
			)
		}
	}

	content(){
		if(this.state.fetch == true){
			return(
				<>
					<div class="tab-content" id="myresume1-content">
						<MyResumeContent  state={this.state} />
					</div>
				</>
			)
		}else{
			return(
				<>
					{this.resumeNothing()}
				</>
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
					<SharingPopup/>
					
					<div className="Resume_topNavbar" id='topNav'>
						
						<div  className='myresumetoppath'> 
								{this.handleSection1()}
								&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
							<div className='resume_topnav' >
								<div className='resume_selectresume'> 
									<h1 className='resume_selectresume_block'> 
										&nbsp;<a  onClick={this.portfoliotab1}  id='resume_selectresume1'>{this.state.jobname1}</a>&nbsp; <span className="resume_verticalline"></span> 
									</h1>
									<h1 className='resume_selectresume_block'> 	
										&nbsp;<a  onClick={this.portfoliotab2} id='resume_selectresume2'>{this.state.jobname2}</a>&nbsp; <span className="resume_verticalline"></span> 
									</h1>
									<h1 className='resume_selectresume_block'> 
										&nbsp;<a  onClick={this.portfoliotab3} id='resume_selectresume3'>{this.state.jobname3}</a>&nbsp;
									</h1>
								</div>
							</div>
								&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
								{this.handleSection2()}
								{this.injectScript()}
						</div>


						{this.content()}
						
		
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
		
		// var ssid = this.props.userid
		
		var ssid = cookie.load('search-userid')
		// console.log('sessionid: '+ ssid)
		// console.log('sessionid: '+ JSON.stringify(ssid))
		
		// var sPageURL = window.location.search.substring(1)
		// var isURLBlank = (sPageURL == '')
		// console.log(sPageURL)
		// console.log(isURLBlank)
		// console.log( 'not undefined: '+ (ssid != 'undefined'))
		// console.log( 'not blank: '+ (ssid != ''))
		// console.log(( undefined))
		// console.log(( null))
		if( ssid != 'undefined' && ssid != ''){
			// console.log('case1')
			// console.log('ssid incase1: '+ ssid)
			
			this.setState({
				userID : ssid,
				is_owner : false,		
			})
		}else{
			// console.log('case2')

			var token = cookie.load('login-token')
			// console.log('token: ' + token)	
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
					is_owner : true,
				})
				// console.log('this.state.userID1 :'+this.state.userID)
			});

		}
	}

	componentWillUnmount(){		
		cookie.save('search-userid', '' );
	}
	
	
	shouldComponentUpdate(nextProps, nextState){
		// alert( nextState == this.state )
		if(this.state.userID==''){
			// console.log('update state')
			return true
		}
		// else if(this.state.userID != nextState.userID){
		// 	console.log('update userid')
		// 	return true
		// }
		else if(this.state.resumeID != nextState.resumeID){
			// console.log(3)
			// console.log('update state resumeid')
			return true
		}else if(this.state.index != nextState.index){
			// console.log(3)
			// console.log('update state resumeid')
			return true
		}else if(this.state.color != nextState.color ){
			// console.log(3)
			// console.log('update state color')
			return true
			
		}else if( !this.state.ready){
			// console.log('status need to re-render')
			// console.log('update state ready')
			return true
		}else if( this.state.loading){
			this.setState({
				loading : false
			})
			// console.log('update state loading')
			return true
		}else if( this.state.fetch != nextState.fetch){
			// console.log('update state fetch')
			return true
		}else{
			console.log('not update')
		}

	
	}


	render (){
		const linestyle = {
            backgroundColor: this.state.color? this.state.color: "#FFCE55"
        };
		// this.getResumeID(this.state.index);
		if(this.state.userID != ''  && this.state.resumeID == ''  ){
			// console.log('call getResumeID');
			this.getResumeID(this.state.index);
		}
		// console.log('in render() state before : ' + JSON.stringify(this.state))
		// if(this.state.resumeID !== '' && this.state.loading){
		// 	// alert('call getDatas');
		// 	this.getDatas();
		// }


		console.log('in render() state : ' + JSON.stringify(this.state))
		console.log('in render() skil : ' + JSON.stringify(this.state.additionalSkills))
		// console.log('render this.state.loading: '+this.state.loading)
		// console.log('render this.state.ready: '+this.state.ready)
		// console.log('render this.state.fetch: '+this.state.fetch)

		return (
			
			this.state.loading ? this.loadingScreen() : this.showingScreen() 
			// this.state.loading ? this.loadingScreen() : this.state.fetch? this.showingScreen() : this.resumeNothing()
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
