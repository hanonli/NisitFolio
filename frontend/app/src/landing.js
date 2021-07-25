import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import NavbarTransparent from './Components/navbarTransparent';
import LandingHeader from './Components/landingHeader';
import LandingBody from './Components/landingBody';
import reportWebVitals from './reportWebVitals';
import { Link } from "react-router-dom";

class Landing extends React.Component {
	render (){
		return (
			<div className="Landing">
				<NavbarTransparent />
				
				<div class="col block-right">
					<Link to="/agreement">
						<a class="btn btn-cta-primary-yellow round" href="#" target="_blank">สมัครสมาชิก</a>
					</Link>
				</div>
				<LandingHeader />
				<LandingBody />
			</div>
		);
	}
}

export default Landing;
