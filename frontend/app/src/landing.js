import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Navbar from './Components/navbar';
import reportWebVitals from './reportWebVitals';

class Landing extends React.Component {
	render (){
		return (
			<div className="Landing">
				<Navbar />
			</div>
		);
	}
}

export default Landing;
