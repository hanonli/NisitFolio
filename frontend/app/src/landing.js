import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Navbar from './Components/navbar';
import LandingHeader from './Components/landingHeader';
import reportWebVitals from './reportWebVitals';
import { Link } from "react-router-dom";

class Landing extends React.Component {
	render (){
		return (
			<div className="Landing">
				<Navbar />
				<LandingHeader />
				<div class="col block-right">
					<Link to="/agreement">
						<a class="btn btn-cta-primary-yellow round" href="#" target="_blank">สมัครสมาชิก</a>
					</Link>
				</div>
			</div>
		);
	}
}

export default Landing;
