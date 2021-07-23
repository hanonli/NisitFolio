import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Navbar from './Components/navbar';
import ProfileHeader from './Components/profileHeader';
import reportWebVitals from './reportWebVitals';

class Home extends React.Component {
	render (){
		return (
			<div className="Home">
				<Navbar />
				<ProfileHeader />
			</div>
		);
	}
}

export default Home;
