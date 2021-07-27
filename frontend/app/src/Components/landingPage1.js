import React from 'react';
import './landingPage1.css';

class LandingPage1 extends React.Component {
    render() {
        return (
            <div className="landingPage">
                <img src="assets/images/LandingPage.png" />
                <div className="LogoNisitZaa11244">
                    <img src="assets/images/logo2_noname_square.png" width="130" id="nisit44Zaa112" />
                    <h1 id="NameProject112">Nisitfolio</h1>
                </div>
                <div className="textOfLandingPage">
                    <h1 id="sloganNisitZaa">เริ่มต้นชีวิตในรั้วมหาลัยที่ดีกว่า<br />ด้วยระบบจัดเก็บและโชว์ผลงานที่ดีกว่า</h1>
                </div>
                <div class="lg-view-search container-fluid container-search-no-icons" id="fromNahee">
                    <form class="d-flex" >
                        <input class="form-control form-control-lg btn-search-box" type="search" placeholder="ค้นหาบุคคลและผลงานคุณภาพได้ที่นี่" aria-label="Search" />
                        <button class="btn btn-search yellow" type="submit">
                            <img src="assets/images/search.png" alt="" width="65" height="65" />
                        </button>
                    </form>
                </div>
            </div>
        );
    }
}

export default LandingPage1;