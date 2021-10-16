import React from 'react';
import { Link } from 'react-router-dom';
import './Components/landingPage1.css';
import './Components/landingPage4.css'
import SignInLand from './Components/signIn_land';
import Navbar from './Components/navbar';

class AnonymousLogin extends React.Component {
    render() {
        return (
            <div className="Landing">
                <Navbar />
                <div class="landingPage4">
                    <div class="container">
                        <div class="d-flex justify-content-center">
                            <div>
                                <img class="bg-center-signin78888888" src="assets/images/ldwithgradient.png" />
                                <div id="center-signin78888888">
                                    <SignInLand />
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </div>

        );
    }
}

export default AnonymousLogin;