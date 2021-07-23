import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Navbar from './Components/navbar';
import LandingHeader from './Components/landingHeader';
import reportWebVitals from './reportWebVitals';

class Landing extends React.Component {
	render (){
		return (
			<div className="Landing">
				<Navbar />
				<LandingHeader />
			</div>
		);
	}
}

export default Landing;
