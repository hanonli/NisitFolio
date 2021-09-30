import React from 'react';
import cookie from 'react-cookies';
import SharingPopup from './sharingpopup';
import MyResume1 from './myresume1';
import MyResume2 from './myresume2';
import MyResume3 from './myresume3';
import MyresumeWorkGoals from './myresumeworkgoals';
import MyResumeEx from './myResumeEx';
import './myresume.css';

class MyResumeContent extends React.Component {
	constructor(props) {
		super(props);
	 }
	
	render (){
		const educationdata = this.props.state.educationHistorys;
		// console.log('In Content : ' + JSON.stringify(educationdata) )
		return (
			<div className="MyResumeContent">
				<MyResume1 state={this.props.state}></MyResume1>
				<MyResume2 state={this.props.state}></MyResume2>
				<MyResume3 state={this.props.state}></MyResume3>
				<MyresumeWorkGoals interestedJob={this.props.state.interestedJob}></MyresumeWorkGoals>
				<h1>Testing Sharing Space</h1>
				<SharingPopup></SharingPopup>
			</div>
		);
	}
}

export default MyResumeContent;
