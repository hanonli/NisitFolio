import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Navbar from './Components/navbar';
import Resume_sideNavbar from './Components/navbar_resume';
import MyResumeContent from './Components/myresumeContent';
import reportWebVitals from './reportWebVitals';

class MyResume extends React.Component {
	constructor(props) {
		super(props);
		this.handleLoad = this.handleLoad.bind(this);
	 }
	
	componentDidMount() {
		window.addEventListener('load', this.handleLoad);
		console.log("YEAHXXX!");
		const script = document.createElement("script");
		script.src = "assets/js/home.js";
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
				<Resume_sideNavbar/>
				<MyResumeContent />
			</div>
		);
	}
}

export default MyResume;
