import React from 'react';
import SharingPopup from './sharingpopup';

class MyResumeContent extends React.Component {
	render (){
		return (
			<div className="MyResumeContent">
				<h1>"This is MyResume..."</h1>
				<SharingPopup></SharingPopup>
			</div>
		);
	}
}

export default MyResumeContent;
