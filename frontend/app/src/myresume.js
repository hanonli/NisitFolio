import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Navbar from './Components/navbar';
// import Resume_sideNavbar from './Components/navbar_resume';
// import MyResumeContent from './Components/myresumeContent';
import cookie from 'react-cookies';
import reportWebVitals from './reportWebVitals';
import Resume_topNavbar from './Components/navbar_top_resume';
import MyResumeContent from './Components/myresumeContent';

class MyResume extends React.Component {
	constructor(props) {
		super(props);
		this.handleLoad = this.handleLoad.bind(this);
		var userid = this.props.match.params.id;
		console.log('search-userid:'+userid);
		cookie.save('search-userid', userid );	
	 }
	
	componentDidMount() {
		window.addEventListener('load', this.handleLoad);
		console.log("YEAHXXX!");
		const script = document.createElement("script");
		script.src = "assets/js/myresume.js";
		document.body.appendChild(script);

	}
	
	componentWillUnmount() { 
	   window.removeEventListener('load', this.handleLoad)  	
	}
	
	handleLoad() {
		console.log("YEAH!");
	 }
	
	render (){
		return (
			
			<div className="Home">
				<Navbar />
				<Resume_topNavbar />
				
			</div>
		);
	}
}

export default MyResume;
