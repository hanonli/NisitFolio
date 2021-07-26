import React from 'react';
import './landingPage.css';

class LandingPage2 extends React.Component {
    render() {
        return (
            <div className="landingPage">
                <span class="lg-view-search mx-auto">
                <div className="container-fluid">
                        <div class="d-flex justify-content-center">
                            <div className="row justify-content-md-center">
                                <div className="landingpage2">
                                    <div className="col-md-auto">
                                        <img src="assets/images/MyResume.png" className="LRounded" />
                                    </div>
                                    <div className="Myresume-text" >
                                        <h1>MyResume</h1> <br/>
                                        <h3>สร้างเรซูเม่ด้วยเทมเพลตที่ใช้ง่าย</h3>
                                    </div>
                                </div>
                                <div className="col-md-auto">
                                    <img src="assets/images/Portfolio.png" className="LRounded" />
                                </div>
                            </div>
                        </div>
                    </div>
                </span>

            </div>

        );
    }
}

export default LandingPage2;