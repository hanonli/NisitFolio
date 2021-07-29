import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import NavbarTransparent from './Components/navbarTransparent';
import LandingPage1 from './Components/landingPage1';
import LandingPage2 from './Components/landingPage2';
import LandingPage3 from './Components/landingPage3';
import LandingPage4 from './Components/landingPage4';
import reportWebVitals from './reportWebVitals';
import { Link } from "react-router-dom";

class Landing extends React.Component {
	componentDidMount() {
		const script = document.createElement("script");
		script.src = "assets/js/landing.js";
		document.body.appendChild(script);
	}

	render() {
		return (
			<div className="Landing">
				<NavbarTransparent />
				<LandingPage1/>
				<LandingPage2/>
				<LandingPage3/>
				<LandingPage4/>
			</div>
		);
	}
}

export default Landing;
