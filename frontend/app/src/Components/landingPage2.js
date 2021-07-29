import React from 'react';
import './landingPage2.css';

class LandingPage2 extends React.Component {
    render() {
        return (
            <div className="landingPage2">
                <header>    
                <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
                </header>
                <div className="container-fluid text-center" id="shownav">
                    <div class="d-flex justify-content-center">
                        <div className="row">
                            <div className="col-lg-12" id="div1">
                                <img src="assets/images/MyResume.png" className="LRounded1" />
                                <h1 id="resume">MyResume</h1>
                                <h1 id="textMyResume1">สร้างเรซูเม่ของคุณด้วยเทมเพลตที่ใช้ง่าย<br/>และแปรเปลี่ยนได้ตามประเภทงานที่คุณต้องการนำเสนอ</h1>
                            </div>
                            <div className="col-lg-12" id="div2">
                                <img src="assets/images/Portfolio.png" className="LRounded2" />
                                <h1 id="portfolio">Portfolio</h1>
                                <h1 id="textMyPortfolio">แหล่งจัดเก็บผลงานของคุณตั้งแต่เริ่มใช้งานจนถึงปัจจุบัน</h1>
                            </div>

                        </div>
                    </div>

                </div>
            </div>

        );
    }
}

export default LandingPage2;