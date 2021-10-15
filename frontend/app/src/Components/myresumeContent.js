import React from 'react';
import cookie from 'react-cookies';
import SharingPopup from './sharingpopup';
import Resume_sideNavbar from './navbar_resume.js';
import MyResume1 from './myresume1';
import MyResume2 from './myresume2';
import MyResume3 from './myresume3';
import MyresumeWorkGoals from './myresumeworkgoals';
import MyResumePort from './myresumeport';
import MyResumeEx from './myResumeEx';
import './myresume.css';

class MyResumeContent extends React.Component {
	constructor(props) {
		super(props);
	 }
	
	render (){
		const educationdata = this.props.state.educationHistorys;
		// console.log('In Content : ' + JSON.stringify(educationdata) )
		console.log(this.props.state);
		return (
			<div className="MyResumeContent">
				<Resume_sideNavbar color={this.props.state.color}/>
				<MyResume1 state={this.props.state}></MyResume1>
				<MyResume2 state={this.props.state}></MyResume2>
				<MyResume3 state={this.props.state}></MyResume3>
				{/*<MyResumePort state={this.props.state}></MyResumePort>*/}
				<MyresumeWorkGoals interestedJob={this.props.state.interestedJob} colour={this.props.state.color}> </MyresumeWorkGoals>
				<h1>Testing Sharing Space</h1>
				<SharingPopup></SharingPopup>
			</div>
		);
	}
}

export default MyResumeContent;
