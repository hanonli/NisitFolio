import $, { data, get } from 'jquery';
import cookie from 'react-cookies';
import React from 'react';
import MyResumeNothing from './myresumeNothing.js'
import MyResumeNothingforUser from './myresumeNothingforuser.js'
import MyResumeLimitforUser from './myresumeLimitforuser.js'
import MyResumeContent from './myresumeContent.js';
import Resume_sideNavbar from './navbar_resume.js';
import SharingPopup from './sharingpopup';
import LoadingL from './loadingL';
import { Link } from "react-router-dom";
import './navbar_resume.css'

const Activestyle = {
	backgroundColor : "#bcbcbc",
};
const ActiveFontstyle  = {
	color : "white",
};

const DisableFontstyle  = {
	color : "#bcbcbc",
};

const DefaultFontstyle  = {
	color : "black",
};

class Resume_topNavbar extends React.Component {


	constructor(props) {
		super(props);

		this.state = {
			userID: '',
			targetuserID: '',
			resumeID: '',
			jobname1: '',
			jobname2: '',
			jobname3: '',
			workHistorys: [],
			educationHistorys: [],
			certificates: [],
			additionalSkills: [],
			interestedJob: [],
			privacy: '',
			color: '',
			index: 0,
			owner: '',
			firstname: '',
			lastname: '',
			is_owner: false,
			profilepic: null,
			aboutme: '',
			ready: false,
			loading: true,
			fetch: true,
		}

		// GET Parameter(targetuserID) FROM URL 

		// var resumeID = '6142398e3e8c5c1df01304cc'
	}

	injectScript = () => {
		const script = document.createElement("script");
		script.src = "assets/js/navbar_top_resume_script.js";
		document.body.appendChild(script);
	}

	getResumeID(e) {
		var userid = this.state.targetuserID;
		var index = e;
		var owner = this.state.is_owner;
		// console.log('in resumeid index1: ' + index);
		// console.log('in resumeid e1: ' + e);
		// console.log('in resumeid state.index1: ' + this.state.index);
		// console.log('getResumeID called')
		// console.log('in getResumeID index is :' + index + ' userid is: ' + userid )
		fetch("http://localhost:2000/myresume/user/" + userid, {
			method: "GET",
			headers: {
				"Access-Control-Allow-Origin": "*",
				"Access-Control-Allow-Methods": "*",
				"Access-Control-Allow-Credentials": true,
				"Content-Type": "application/json"
			},
		})
		.then(response => {return response.json() ;} )
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
			var job3 = resume3 ? resume3.interestedJob[0].Job_JobName : 'ยังไม่มีตำแหน่งงาน'

			// console.log('in resumeid datas a: ' + JSON.stringify(resume1));
			// console.log('in resumeid datas b: ' + JSON.stringify(resume2));
			// console.log('in resumeid datas c: ' + JSON.stringify(resume3));			
			var Resumedata = datas[index];
			// console.log('Resumedata is: ' + JSON.stringify(Resumedata));
			// console.log('in resumeid index2: ' + index);
			// console.log('in resumeid e2: ' + e);
			// console.log('in resumeid state.index2: ' + this.state.index);
			// console.log('in resumeid Resumedatas1: ' + JSON.stringify(datas[index]));
			// console.log('in resumeid Resumedatas2: ' + JSON.stringify(Resumedata));
			this.setState({
				jobname1 : job1,
				jobname2 : job2,
				jobname3 : job3,
			});
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
					aboutme : Resumedata.AboutMe !== null ? Resumedata.AboutMe : '',
					ready : true,
				})
			}

			})
	}

	getDatas() {


	}


	changePrivacy = (message) => {
		console.log('begin change prvacy')
		var resumeid = this.state.resumeID
		var token = cookie.load('login-token')
		fetch("http://localhost:2000/myresume/" + resumeid, {
			method: "PATCH",
			headers: {
				'Authorization': 'Bearer ' + token,
				"Access-Control-Allow-Origin": "*",
				"Access-Control-Allow-Methods": "*",
				"Access-Control-Allow-Credentials": true,
				"Content-Type": "application/json",
				},
			body: JSON.stringify(message)
		})
		.then(response =>{ console.log( 'PATCH Privacy status: '+response.status) ; return response.json();})

		console.log('end change privay')
		// .then(data => {console.log('data after PATCH'+JSON.stringify(data))} )
	}

	handlePrivacy = () => {
		// var userid = this.state.targetuserID	
		// var index = this.state.index
		// console.log('handlePrivacy called')
		// document.getElementById('icon-myresume-private').src =  'assets/images/outline_grid_view_black_48dp2.png' ;

		if (this.state.privacy == 'Private') {
			var message = { "Resume_Privacy" : "Members"}
			this.changePrivacy(message)
			console.log('change loading to Members')
			this.setState({
				privacy: 'Members'
			})
		} else if (this.state.privacy == 'Member' || this.state.privacy == 'Members') {
			var message = { "Resume_Privacy" : "Public"}
			
			this.changePrivacy(message)
			console.log('change loading to Public')
			this.setState({
				privacy: 'Public'
			})
		} else if (this.state.privacy == 'Public') {
			var message = { "Resume_Privacy" : "Private"}
			
			this.changePrivacy(message)
			console.log('change loading to Private')
			this.setState({
				privacy: 'Private'
			})
		}

	}

	handleEdit = () =>{
		cookie.save('Edit_tabselect',1);
		window.location = 'editresume'
	}

	handleBookmark = () =>{
		var pic_src = document.getElementById("icon-myresume-bookmark").src
		// console.log('pic: '+pic_src);
		if ( pic_src == "http://localhost:3000/assets/images/bookmark_1.png") {
			fetch("http://localhost:2000/bookmark/saveBookmark/",{
				method: "POST",
				body: {
					'userID' : this.state.userID,
					'thatUserId' : this.state.targetuserID,
					'type' : 'profile',
				}
			})
            document.getElementById("icon-myresume-bookmark").src = "http://localhost:3000/assets/images/bookmark_2.png";
        }
        else {
			fetch("http://localhost:2000/bookmark/saveBookmark/",{
				method: "DELETE",
				body: {
					'userID' : this.state.userID,
					'thatUserId' : this.state.targetuserID,
					'type' : 'profile',
				}
			})
            document.getElementById("icon-myresume-bookmark").src = "http://localhost:3000/assets/images/bookmark_1.png";
        }
	}

	portfoliotab1 = () => {
		// console.log('Porfoliotab1 is called')
		var index = 0;
		this.setState({
			resumeID: '',
			jobname1: '',
			jobname2: '',
			jobname3: '',
			workHistorys: [],
			educationHistorys: [],
			certificates: [],
			additionalSkills: [],
			interestedJob: [],
			privacy: '',
			portfolio: [],
			color: '',
			hometown: '',
			index: 0,
			ready: false,
			loading: true,
			fetch: true,
		});
		// console.log('call GetreumeID from tab1')
		this.getResumeID(index);
		// this.getDatas();
	}

	portfoliotab2 = () => {
		// console.log('Porfoliotab2 is called')
		// console.log('before change state: ' + JSON.stringify(this.state))
		var index = 1;
		this.setState({
			resumeID: '',
			jobname1: '',
			jobname2: '',
			jobname3: '',
			workHistorys: [],
			educationHistorys: [],
			certificates: [],
			additionalSkills: [],
			interestedJob: [],
			privacy: '',
			portfolio: [],
			color: '',
			hometown: '',
			index: 1,
			ready: false,
			loading: true,
			fetch: true,
		})
		this.getResumeID(index);
		// this.getDatas();
		// this.forceUpdate()
	}

	portfoliotab3 = () => {
		var index = 2;
		this.setState({
			resumeID: '',
			jobname1: '',
			jobname2: '',
			jobname3: '',
			workHistorys: [],
			educationHistorys: [],
			certificates: [],
			additionalSkills: [],
			interestedJob: [],
			privacy: '',
			portfolio: [],
			color: '',
			hometown: '',
			index: 2,
			ready: false,
			loading: true,
			fetch: true,
		})
		this.getResumeID(index);

	}

	handleSection1 = () => {
		
			if (this.state.privacy == 'Private') {
				return (
					<div className='resume_topnav' >
						<div className='topnav_section1' type='button' onClick={ this.state.is_owner ? this.handlePrivacy : null } >

							<img  id='icon-myresume-private' src="assets/images/outline_lock_black_24dp.png" />

						</div>

					</div>
				)
			}
			else if (this.state.privacy == 'Members' ) {
				return (
					<div className='resume_topnav' >
						<div className='topnav_section1' type='button' onClick={ this.state.is_owner ? this.handlePrivacy : null}>

							<img  id='icon-myresume-member' src="assets/images/outline_people_black_24dp.png" />

						</div>

					</div>
				)
			}
			else if (this.state.privacy == 'Public') {
				return (
					<div className='resume_topnav' >
						<div className='topnav_section1' type='button' onClick={ this.state.is_owner ? this.handlePrivacy : null}>

							<img  id='icon-myresume-public' src="assets/images/outline_public_black_24dp.png" />

						</div>

					</div>
				)
			}
			else{
				return (
					<div className='resume_topnav' >
						<div className='topnav_section1' type='button'>

							<img  id='icon-myresume-public' src="assets/images/outline_grid_view_black_48dp 2.png" />

						</div>

					</div>
					)
			}
			
	}

	handleSection2 = () => {
		var login_token = cookie.load('login-token') != "undefined" ? cookie.load('login-token') : ''
		if (this.state.is_owner) {
				// console.log('you are owner2')
			return (
				<div className='resume_selectoption' >
					<div className='resume_selectoption_block'>
						<div type='button' onClick={this.handleEdit} >
							<img  id='icon-myresume-edit' src="assets/images/blackedit.png"/>
						</div>
									
					</div>
					
					<span className='resume_verticalline2'> </span>

					<div className='resume_selectoption_block'>
						<div type='button'>
							<img   id='icon-myresume-share' 	src="assets/images/outline_ios_share_black_48dp.png"data-bs-toggle="modal" toggle-type="dynamic" data-bs-target="#sharingResume" alt="" />
						</div>
						
									
					</div>
								
				</div>

			)
		}
		else if( login_token != 'none' ){
			// console.log('login-tokenfdfdf :' + login_token)
			return (
				<div className='resume_selectoption' >
					<div className='resume_selectoption_block'>
						<div type='button' onClick={this.handleBookmark} >
							<img  id='icon-myresume-bookmark' src="assets/images/bookmark_1.png"/>
						</div>
									
					</div>
					
					<span className='resume_verticalline2'> </span>

					<div className='resume_selectoption_block'>
						<div type='button'>
							<img   id='icon-myresume-share' 	src="assets/images/outline_ios_share_black_48dp.png"data-bs-toggle="modal" toggle-type="dynamic" data-bs-target="#sharingResume" alt="" />
						</div>
					</div>
								
				</div>
			)
		}
		else{
			return (
				<div className='resume_selectoption' >
					<div className='resume_selectoption_block'>
						<div type='button' onClick={this.handleBookmark} >
							<img  id='icon-myresume-bookmark' src="assets/images/bookmark_1.png"/>
						</div>
									
					</div>
					
					<span className='resume_verticalline2'> </span>

					<div className='resume_selectoption_block'>
						<div type='button'>
							<img   id='icon-myresume-share' 	src="assets/images/outline_ios_share_black_48dp.png"data-bs-toggle="modal" toggle-type="dynamic" data-bs-target="#sharingResume" alt="" />
						</div>
					</div>
								
				</div>
			)

		}
	}

	content() {
		var user_token = cookie.load('login-token') != 'undefined' ? cookie.load('login-token') : 'none'
		// console.log('user-token in content: ' + JSON.stringify(user_token))
		if (this.state.fetch == true) {
			if(this.state.is_owner || this.state.privacy == 'Public' || (this.state.privacy == 'Members' && user_token != 'none') ){
				return (
					<>
						<div class="tab-content" id="myresume1-content">
							<MyResumeContent state={this.state} />
						</div>
					</>
				)
			}
			else if(this.state.privacy == 'Members'){
				return (
					<>
						<MyResumeLimitforUser/>
					</>
				)
			}
			else if(this.state.privacy == 'Private'){
				return (
					<>
						<MyResumeLimitforUser/>
					</>
				)
			}

		}
		else if(this.state.is_owner) {
			cookie.save('Edit_tabselect', 6);
			return (
				<>
					<MyResumeNothing />
				</>
			)
		}
		else{
			return (
				<>
					<MyResumeNothingforUser/>
				</>
			)
		}

	}

	loadingScreen() {
		return (
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
									<div className='resume_selectresume_block'> 
										<div type='button' className='resume_selectresume_text' style={this.state.index == 0 && this.state.jobname1 != 'ยังไม่มีตำแหน่งงาน' ? Activestyle : null}>
											<text  id='resume_selectresume1' style={this.state.jobname1 != 'ยังไม่มีตำแหน่งงาน' ?  this.state.index == 0 ? ActiveFontstyle : DefaultFontstyle : DisableFontstyle} onClick={this.state.jobname1 != 'ยังไม่มีตำแหน่งงาน' || this.state.is_owner ? this.portfoliotab1 : null} >{this.state.jobname1}</text> 
										</div>
										<div className='resume_selectresume_text' >
											<span className="resume_verticalline"></span>
										</div>
										
									</div>
									<div className='resume_selectresume_block'> 		
										<div type='button' className='resume_selectresume_text' style={this.state.index == 1 && this.state.jobname2 != 'ยังไม่มีตำแหน่งงาน' ? Activestyle : null}>
											<text  id='resume_selectresume2' style={this.state.jobname2 != 'ยังไม่มีตำแหน่งงาน' ? this.state.index == 1 ? ActiveFontstyle : DefaultFontstyle : DisableFontstyle} onClick={this.state.jobname2 != 'ยังไม่มีตำแหน่งงาน' || this.state.is_owner ? this.portfoliotab2 : null} >{this.state.jobname2}</text> 
										</div>
										<div className='resume_selectresume_text' >
											<span className="resume_verticalline"></span>
										</div>

									</div>
									<div className='resume_selectresume_block'> 
										<div type='button' className='resume_selectresume_text' style={this.state.index == 2 && this.state.jobname3 != 'ยังไม่มีตำแหน่งงาน'? Activestyle : null}>
											<text  id='resume_selectresume3' style={this.state.jobname3 != 'ยังไม่มีตำแหน่งงาน' ? this.state.index == 2 ? ActiveFontstyle : DefaultFontstyle : DisableFontstyle} onClick={this.state.jobname3 != 'ยังไม่มีตำแหน่งงาน' || this.state.is_owner ? this.portfoliotab3 : null} >{this.state.jobname3}</text> 
										</div>
									</div>
								</div>
							</div>
								&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
								{this.handleSection2()}
						</div>
					</div>
					{this.injectScript()}
					{this.content()}
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
		var token = cookie.load('login-token')
		var ssid = cookie.load('search-userid') != 'undefined' ? cookie.load('search-userid') : 'none'
		// console.log('sessionid search-userid: '+ ssid)
		// console.log('sessionid from search-userid: '+ JSON.stringify(ssid))
		var sPageURL = window.location.search.substring(1)
		var isURLBlank = (sPageURL == '')
		// console.log(sPageURL)
		// console.log(isURLBlank)
		// console.log( 'not undefined: '+ (ssid != 'undefined'))
		// console.log( 'not blank: '+ (ssid != ''))
		// console.log(( undefined))
		// console.log(( null))
		fetch("http://localhost:2000/profile/", {
				method: "GET",
				headers: {
					'Authorization': 'Bearer ' + token,
					"Access-Control-Allow-Origin": "*",
					"Access-Control-Allow-Methods": "*",
					"Access-Control-Allow-Credentials": true,
					"Content-Type": "application/json"
				},
			})
				.then(response => response.text())
				.then((datas) => {
					this.setState({
						userID: datas,
					})
				});

		if ( ssid != 'none') {
			// console.log('case1')
			// console.log('ssid incase1: '+ ssid)
			this.setState({
				targetuserID: ssid,
				is_owner: false,
			})
		} else {
			// console.log('case2')
			// console.log('token: ' + token)
			var token = cookie.load('login-token')
			fetch("http://localhost:2000/profile/", {
				method: "GET",
				headers: {
					'Authorization': 'Bearer ' + token,
					"Access-Control-Allow-Origin": "*",
					"Access-Control-Allow-Methods": "*",
					"Access-Control-Allow-Credentials": true,
					"Content-Type": "application/json"
				},
			})
				.then(response => response.text())
				.then((datas) => {
					this.setState({
						targetuserID: datas,
						is_owner: true,
					})
					// console.log('this.state.userID1 :'+this.state.targetuserID)
				});

		}
	}

	componentWillUnmount() {
		cookie.save('search-userid', '');
	}


	shouldComponentUpdate(nextProps, nextState) {
		// alert( nextState == this.state )
		if (this.state.targetuserID == '') {
			// console.log('update state')
			return true
		}
		else if (this.state.privacy != nextState.privacy) {
			// console.log('update privacy')
			return true
		}
		else if (this.state.resumeID != nextState.resumeID) {
			// console.log(3)
			// console.log('update state resumeid')
			return true
		} else if (this.state.index != nextState.index) {
			// console.log(3)
			// console.log('update state resumeid')
			return true
		} else if (this.state.color != nextState.color) {
			// console.log(3)
			// console.log('update state color')
			return true

		} else if (!this.state.ready) {
			// console.log('status need to re-render')
			// console.log('update state ready')
			return true
		} else if (this.state.loading) {
			this.setState({
				loading: false
			})
			// console.log('update state loading')
			return true
		} else if (this.state.fetch != nextState.fetch) {
			// console.log('update state fetch')
			return true
		} else {
			// console.log('not update')
			return false
		}


	}


	render (){
		// this.getResumeID(this.state.index);
		if (this.state.targetuserID != '' && this.state.resumeID == '') {
			// console.log('call getResumeID');
			this.getResumeID(this.state.index);
		}
		// console.log('in render() state before : ' + JSON.stringify(this.state))
		// if(this.state.resumeID !== '' && this.state.loading){
		// 	// alert('call getDatas');
		// 	this.getDatas();
		// }


		console.log('in render() state : ' + JSON.stringify(this.state))	
		// console.log('in render() skil : ' + JSON.stringify(this.state.additionalSkills))
		// console.log('render this.state.loading: '+this.state.loading)
		// console.log('render this.state.ready: '+this.state.ready)
		// console.log('render this.state.fetch: '+this.state.fetch)

		return (

			this.state.loading ? this.loadingScreen() : this.showingScreen()
			// this.state.loading ? this.loadingScreen() : this.state.fetch? this.showingScreen() : this.resumeNothing()
		);
	}
}

export default Resume_topNavbar;
