import React from 'react';
import './landingPage.css';

class LandingPage3 extends React.Component {
    render() {
        return (
            <div className="landingPage">
                <span class="lg-view-search mx-auto">
                <div className="container-fluid">
                        <div class="d-flex justify-content-center">
                            <div className="row justify-content-md-center">
                                <div className="landingpage3">
                                    <div className="col-md-auto">
                                        <img src="assets/images/Analytics.png" className="LRounded" />
                                    </div>
                                    <div className="Myresume-text">
                                        <h1>Analytics</h1> <br/>
                                        <h3>สร้างเรซูเม่ด้วยเทมเพลตที่ใช้ง่าย</h3>
                                    </div> <br/>
                                    <div className="col-md-auto">
                                        <img src="assets/images/Bookmark.png" className="LRounded" />
                                    </div>
                                    <div className="Myresume-text">
                                        <h1>Bookmark</h1> <br/>
                                        <h3>สร้างเรซูเม่ด้วยเทมเพลตที่ใช้ง่าย</h3>
                                    </div> <br/>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </span>

            </div>
        );
    }
}

export default LandingPage3;