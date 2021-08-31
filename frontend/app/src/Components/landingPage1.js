import React from 'react';
import { Link } from 'react-router-dom';
import './landingPage1.css';
import './landingPage4.css'
import SignInLand from './signIn_land';
import SearchLanding1 from './searchLanding'

class LandingPage4 extends React.Component {
    render() {
        return (
            <div className="landingPage4">
                <header>    
                    <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
                </header>
                <div className="container">
                    <div class="d-flex justify-content-center">
                        <div>
                                    <img class="pic-new" src="assets/images/ldwithgradient.png"/>
									<img class="pic-logo" src="assets/images/nisitfolio_logo_white3.png"/>
                                    <h1 class ="sc1-sub">เริ่มต้นชีวิตในรั้วมหาลัยที่ดีกว่า<br />ด้วยระบบจัดเก็บและโชว์ผลงานที่ดีกว่า</h1>   
									<div class="col-6" id="searchHuaKuay">
										<SearchLanding1 />
									</div> 
                                   
									<div id="signInX">
										<SignInLand />
									</div>   
									<img class="sc1-footer" src="assets/images/arrow_down1.png"/>
									<h1 class="text-of-arrow">ฟีเจอร์ที่เรามีไว้ช่วยคุณ</h1>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default LandingPage4;