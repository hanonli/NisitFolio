import React from 'react';
import './landingPage1.css';
import SignInLand from './signIn_land';
import SearchLanding1 from './searchLanding'

class LandingPage1 extends React.Component {
    render() {
        return (
            <div className="landingPage1">
                <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
                <div class="container-fliud">
                    <div class="row">
                        <div class="col-lg-12" >
                            <img src="assets/images/nisitfolio_logo_white.png" id="nisit44Zaa112" />
                            <div className="textOfLandingPage">
                                <h1 id="sloganNisitZaa">เริ่มต้นชีวิตในรั้วมหาลัยที่ดีกว่า<br />ด้วยระบบจัดเก็บและโชว์ผลงานที่ดีกว่า</h1>
                            </div>
                        </div>

                        <div class="col-sm-6" id="searchHuaKuay">
                            <SearchLanding1 />
                        </div>

                        <div class="col-sm-12">
                            <div className="signInX" >
                                <SignInLand />
                            </div>
                        </div>

                        <div class="col">
                            <img src="assets/images/arrow_down1.png" width="110" id="arrow_down1" />
                            <h1 id="textOfArrow">ฟีเจอร์ที่เรามีไว้ช่วยคุณ</h1>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default LandingPage1;