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
		fetch("https://nisitfolio-backend.herokuapp.com/myresume/user/" + userid, {
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

	Redirect_Register = () => {
		window.location = 'register' ;
	}

	Redirect_Login = () => {
		window.location = 'landing' ;
	}

	changePrivacy = (message) => {
		console.log('begin change prvacy')
		var resumeid = this.state.resumeID
		var token = cookie.load('login-token')
		fetch("https://nisitfolio-backend.herokuapp.com/myresume/" + resumeid, {
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
		// document.getElementById('icon-myresume-private').src =  '/assets/images/outline_grid_view_black_48dp2.png' ;
		var locate =  window.location.origin 
		if (this.state.privacy == 'Private') {
			
			var pic_src = document.getElementById("icon-myresume-private").src
            document.getElementById("icon-myresume-private").src = locate + "/assets/images/outline_cached_black_24dp.png";

			var message = { "Resume_Privacy" : "Members"}
			this.changePrivacy(message)
			console.log('change loading to Members')
			this.setState({
				privacy: 'Members'
			})
		} else if (this.state.privacy == 'Member' || this.state.privacy == 'Members') {
			var pic_src = document.getElementById("icon-myresume-member").src
            document.getElementById("icon-myresume-member").src = locate + "/assets/images/outline_cached_black_24dp.png";

			var message = { "Resume_Privacy" : "Public"}
			this.changePrivacy(message)
			console.log('change loading to Public')
			this.setState({
				privacy: 'Public'
			})
		} else if (this.state.privacy == 'Public') {
			var pic_src = document.getElementById("icon-myresume-public").src
            document.getElementById("icon-myresume-public").src = locate + "/assets/images/outline_cached_black_24dp.png";
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

	BookmarkforUser = () =>{
		var pic_src = document.getElementById("icon-myresume-bookmark").src
		// console.log('pic: '+pic_src);
		if ( pic_src == window.location.origin + "/assets/images/bookmark_1.png") {
			fetch("https://nisitfolio-backend.herokuapp.com/bookmark/saveBookmark",{
				method: "POST",
				headers: {
					"Access-Control-Allow-Origin": "*",
					"Access-Control-Allow-Methods": "*",
					"Access-Control-Allow-Credentials": true,
					"Content-Type": "application/json",
					},
				body: JSON.stringify(
					{
					'userId' : this.state.userID,
					'thatUserId' : this.state.targetuserID,
					'type' : 'profile',
					}
				)
			})
			.then(response => console.log('create : '+JSON.stringify(response.status) ))
            document.getElementById("icon-myresume-bookmark").src = window.location.origin + "/assets/images/bookmark_2.png";
        }
        else {
			fetch("https://nisitfolio-backend.herokuapp.com/bookmark/saveBookmark",{
				method: "DELETE",
				headers: {
					"Access-Control-Allow-Origin": "*",
					"Access-Control-Allow-Methods": "*",
					"Access-Control-Allow-Credentials": true,
					"Content-Type": "application/json",
					},
				body: JSON.stringify(
					{
					'userId' : this.state.userID,
					'thatUserId' : this.state.targetuserID,
					'type' : 'profile',
					}
				)
			})
			.then(response => console.log('delete : '+JSON.stringify(response.status) ))
            document.getElementById("icon-myresume-bookmark").src = window.location.origin + "/assets/images/bookmark_1.png";
        }
	}

	BookmarkforGuest = () =>{		
		$('#staticBackdropB').modal('show');
	}

	handleBookmark = () =>{
		if(this.state.userID != 'none'){
			this.BookmarkforUser();
		}else{
			this.BookmarkforGuest();
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

							<img  id='icon-myresume-private' src="/assets/images/outline_lock_black_24dp.png" />

						</div>

					</div>
				)
			}
			else if (this.state.privacy == 'Members' ) {
				return (
					<div className='resume_topnav' >
						<div className='topnav_section1' type='button' onClick={ this.state.is_owner ? this.handlePrivacy : null}>

							<img  id='icon-myresume-member' src="/assets/images/outline_people_black_24dp.png" />

						</div>

					</div>
				)
			}
			else if (this.state.privacy == 'Public') {
				return (
					<div className='resume_topnav' >
						<div className='topnav_section1' type='button' onClick={ this.state.is_owner ? this.handlePrivacy : null}>

							<img  id='icon-myresume-public' src="/assets/images/outline_public_black_24dp.png" />

						</div>

					</div>
				)
			}
			else{
				return (
					<div className='resume_topnav' >
						<div className='topnav_section1' type='button'>

							<img  id='icon-myresume-public' src="/assets/images/outline_grid_view_black_48dp 2.png" />

						</div>
					</div>
					)
			}
			
	}

	handleSection2 = () => {
		console.log('login token1:'+ cookie.load('login-token'))
		var login_token = cookie.load('login-token') != undefined ? cookie.load('login-token') : 'none'
		console.log('login token2:'+login_token)
		if (this.state.is_owner) {
				// console.log('you are owner2')
			return (
				<div className='resume_selectoption' >
					<div className='resume_selectoption_block'>
						<div type='button' onClick={this.state.fetch ? this.handleEdit : null} >
							<img  id='icon-myresume-edit' src="/assets/images/blackedit.png"/>
						</div>
									
					</div>	
					
					<span className='resume_verticalline2'> </span>

					<div className='resume_selectoption_block'>
						<div type='button'>
							<img   id='icon-myresume-share' 	src="/assets/images/outline_ios_share_black_48dp.png"data-bs-toggle="modal" toggle-type="dynamic" data-bs-target="#sharingResume" alt="" />
						</div>
						
									
					</div>
								
				</div>

			)
		}
		else if( login_token != 'none' ){
			// console.log('login-tokenfdfdf :' + login_token)
			console.log('userud ub fe:'+this.state.userID)
			fetch("https://nisitfolio-backend.herokuapp.com/bookmark/" + this.state.userID +'&&total',{
				method: "GET",
				headers: {
					"Access-Control-Allow-Origin": "*",
					"Access-Control-Allow-Methods": "*",
					"Access-Control-Allow-Credentials": true,
					"Content-Type": "application/json",
					},
			})
			.then(response => response.json() )
			.then((datas) => {
				var data_range = datas.length
				console.log('range of bookmark is: '+data_range)
				for ( var i = 0 ; i < data_range ; i++ ){
					var data = datas[i]
					console.log('compare ' + data.thatUserId + ' ' + cookie.load('search-userid'))
					if(data.thatUserId == cookie.load('search-userid')){
						console.log('found similar userid in bookmark')
						console.log('found simislar one this pateern is beig use')
						return (
							<div className='resume_selectoption' >
								<div className='resume_selectoption_block'>
									<div type='button' onClick={this.handleBookmark} >
										<img  id='icon-myresume-bookmark' src={ window.location.origin + "/assets/images/bookmark_2.png" }/>
									</div>
												
								</div>
								
								<span className='resume_verticalline2'> </span>
			
								<div className='resume_selectoption_block'>
									<div type='button'>
										<img   id='icon-myresume-share' 	src={ window.location.origin + "/assets/images/outline_ios_share_black_48dp.png"}data-bs-toggle="modal" toggle-type="dynamic" data-bs-target="#sharingResume" alt="" />
									</div>
								</div>
											
							</div>
						)
					}else{
						console.log('not found simislar one')
					}
				}
				// console.log('datas of bookamrk: '+JSON.stringify(datas))
				// console.log('bookmark length: '+JSON.stringify(datas.length))
			})
			console.log('not found simislar one this pateern is beig use')
			return (
				<div className='resume_selectoption' >
					<div className='resume_selectoption_block'>
						<div type='button' onClick={this.handleBookmark} >
							<img  id='icon-myresume-bookmark' src={ window.location.origin + "/assets/images/bookmark_1.png"}/>
						</div>
									
					</div>
					
					<span className='resume_verticalline2'> </span>

					<div className='resume_selectoption_block'>
						<div type='button'>
							<img   id='icon-myresume-share' 	src={ window.location.origin + "/assets/images/outline_ios_share_black_48dp.png"} data-bs-toggle="modal" toggle-type="dynamic" data-bs-target="#sharingResume" alt="" />
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
							<img  id='icon-myresume-bookmark' src={ window.location.origin + "/assets/images/bookmark_1.png" }/>
						</div>
									
					</div>
					
					<span className='resume_verticalline2'> </span>

					<div className='resume_selectoption_block'>
						<div type='button' >
							<img   id='icon-myresume-share' 	src={ window.location.origin + "/assets/images/outline_ios_share_black_48dp.png" } data-bs-toggle={ this.state.fetch ? "modal" : null } toggle-type="dynamic" data-bs-target="#sharingResume" alt="" />
						</div>
					</div>
								
				</div>
			)

		}
	}

	content() {
		var login_token = cookie.load('login-token') != undefined ? cookie.load('login-token') : 'none'

		// console.log('user-token in content: ' + JSON.stringify(user_token))
		if (this.state.fetch) {
			if(this.state.is_owner || this.state.privacy == 'Public' || (this.state.privacy == 'Members' && login_token != 'none') ){
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
					<div class="modal fade" id="staticBackdropB" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
						<div class="modal-dialog modal-dialog-centered">
							<div class="modal-content minisize">
								<h4 class="del-b">คุณต้องเข้าสู่ระบบก่อนกด Bookmark ?</h4>
								<div class="centerverify">
									<a type="button" class="btn btn-cta-primary-svshort round profile-button grey margin-right-m"  onClick={this.Redirect_Login} data-bs-dismiss="modal">เข้าสู่ระบบ</a>
									<a type="button" class="btn btn-cta-primary-yellowshort profile-button round" onClick={this.Redirect_Register} data-bs-dismiss="modal">สมัครสมาชิก</a>
								</div>
							</div>
						</div>
					</div>
					<SharingPopup/>
					<div className="Resume_topNavbar" id='topNav'>
						<div  className='myresumetoppath'> 
								{this.handleSection1()}
								&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
							<div className='resume_topnav' >
								<div className='resume_selectresume'> 
									<div className='resume_selectresume_block'> 
										<div type='button' className='resume_selectresume_text' style={this.state.index == 0 && this.state.jobname1 != 'ยังไม่มีตำแหน่งงาน' ? Activestyle : null}>
											<text  id='resume_selectresume1' style={this.state.jobname1 != 'ยังไม่มีตำแหน่งงาน' ?  this.state.index == 0 ? ActiveFontstyle : DefaultFontstyle : DisableFontstyle} onClick={this.state.jobname1 != 'ยังไม่มีตำแหน่งงาน' || this.state.is_owner ? this.state.index == 0 ? null : this.portfoliotab1 : null} >{this.state.jobname1}</text> 
										</div>
										<div className='resume_selectresume_text' >
											<span className="resume_verticalline"></span>
										</div>
										
									</div>
									<div className='resume_selectresume_block'> 		
										<div type='button' className='resume_selectresume_text' style={this.state.index == 1 && this.state.jobname2 != 'ยังไม่มีตำแหน่งงาน' ? Activestyle : null}>
											<text  id='resume_selectresume2' style={this.state.jobname2 != 'ยังไม่มีตำแหน่งงาน' ? this.state.index == 1 ? ActiveFontstyle : DefaultFontstyle : DisableFontstyle} onClick={this.state.jobname2 != 'ยังไม่มีตำแหน่งงาน' || this.state.is_owner ? this.state.index == 1 ? null : this.portfoliotab2 : null} >{this.state.jobname2}</text> 
										</div>
										<div className='resume_selectresume_text' >
											<span className="resume_verticalline"></span>
										</div>

									</div>
									<div className='resume_selectresume_block'> 
										<div type='button' className='resume_selectresume_text' style={this.state.index == 2 && this.state.jobname3 != 'ยังไม่มีตำแหน่งงาน'? Activestyle : null}>
											<text  id='resume_selectresume3' style={this.state.jobname3 != 'ยังไม่มีตำแหน่งงาน' ? this.state.index == 2 ? ActiveFontstyle : DefaultFontstyle : DisableFontstyle} onClick={this.state.jobname3 != 'ยังไม่มีตำแหน่งงาน' || this.state.is_owner ? this.state.index == 2 ? null : this.portfoliotab3 : null} >{this.state.jobname3}</text> 
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
		// console.log('searc:' + cookie.load('search-userid'))
		var search_userID = cookie.load('search-userid') != '' ? cookie.load('search-userid') : 'none'
		// console.log('sessionid search-userid: '+ search_userID)
		// console.log('sessionid from search-userid: '+ JSON.stringify(ssid))
		var sPageURL = window.location.search.substring(1)
		var isURLBlank = (sPageURL == '')
		// console.log(sPageURL)
		// console.log(isURLBlank)
		// console.log( 'not undefined: '+ (ssid != 'undefined'))
		// console.log( 'not blank: '+ (ssid != ''))
		// console.log(( undefined))
		// console.log(( null))
		fetch("https://nisitfolio-backend.herokuapp.com/profile/", {
				method: "GET",
				headers: {
					'Authorization': 'Bearer ' + token,
					"Access-Control-Allow-Origin": "*",
					"Access-Control-Allow-Methods": "*",
					"Access-Control-Allow-Credentials": true,
					"Content-Type": "application/json"
				},
			})
				.then(response => response.text() )
				.then((datas) => {
					this.setState({
						userID: datas != "{\"statusCode\":401,\"message\":\"Unauthorized\"}" ? datas : 'none',
					})
				})
		if ( search_userID != 'none') {
			console.log('case1')
			// console.log('ssid incase1: '+ ssid)
			
			this.setState({
				targetuserID: search_userID,
				is_owner: false,
			})
		} else {
			console.log('case2')
			// console.log('token: ' + token)
			var token = cookie.load('login-token')
			fetch("https://nisitfolio-backend.herokuapp.com/profile/", {
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
