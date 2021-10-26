import React from 'react';
import { Link } from 'react-router-dom';
import './Components/landingPage1.css';
import './Components/landingPage4.css'
import SignInLand from './Components/signIn_land';
import Navbar from './Components/navbarLogin';

class AnonymousLogin extends React.Component {
    render() {
        return (
            <div className="AnonymousLogin1">
                <Navbar />
                <img width="100%" height="100%" src="assets/images/ldwithgradient.png" />
                <div id="center-signin78888888">
                    <SignInLand />
                </div>
            </div>
        );
    }
}

export default AnonymousLogin;