import React from 'react';
import './landingPage1.css';
import SignInLand from './signIn_land'

class LandingPage1 extends React.Component {
    render() {
        return (
            <div className="landingPage1">
                <div className="LogoNisitZaa11244">
                    <img src="assets/images/nisitfolio_logo2.png" width="665" id="nisit44Zaa112" />
                </div>
                <div className="textOfLandingPage">
                    <h1 id="sloganNisitZaa">เริ่มต้นชีวิตในรั้วมหาลัยที่ดีกว่า<br />ด้วยระบบจัดเก็บและโชว์ผลงานที่ดีกว่า</h1>
                </div>
                <div class="lg-view-search container-fluid container-search-no-icons" id="fromNahee">
                    <form class="d-flex" >
                        <input class="form-control form-control-lg btn-search-box" id="stupidSearch" type="search" placeholder="ค้นหาบุคคลและผลงานคุณภาพได้ที่นี่" aria-label="Search" />
                        <button class="btn btn-lg btn-search yellow" type="submit" >
                            <img src="assets/images/search.png" alt="" width="65" height="65" />
                        </button>
                    </form>
                </div>
                <div className="signInX" >
                    <SignInLand />
                </div>
                <img src="assets/images/arrow_down1.png" width="110" id="arrow_down1" />
                <h1 id="textOfArrow">ฟีเจอร์ที่เรามีไว้ช่วยคุณ</h1>
            </div>
        );
    }
}

export default LandingPage1;