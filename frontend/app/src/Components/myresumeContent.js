import React from 'react';
import SharingPopup from './sharingpopup';
import MyResume1 from './myresume1';
import MyResume2 from './myresume2';
import MyResume3 from './myresume3';
import MyResumeEx from './myResumeEx';
import './myresume.css';

class MyResumeContent extends React.Component {
	render (){
		return (
			<div className="MyResumeContent">
				<h1>Example</h1>
				<MyResumeEx></MyResumeEx>
				<h1>MyResume Content Space</h1>
				<MyResume1></MyResume1>
				<MyResume2></MyResume2>
				<MyResume3></MyResume3>
				<h1>Testing Sharing Space</h1>
				<SharingPopup></SharingPopup>
			</div>
		);
	}
}

export default MyResumeContent;
