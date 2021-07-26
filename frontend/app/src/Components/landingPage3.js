import React from 'react';
import './landingPage3.css';

class LandingPage3 extends React.Component {
    render() {
        return (
            <div className="landingPage">
                <span class="lg-view-search mx-auto">
                <div className="container-fluid">
                        <div class="d-flex justify-content-center">

                            <div className="column">
                                    <img src="assets/images/MyAnalytics.png" className="LRounded1" />
                                    <div className="textMyAnalytics">
                                        <h1 id="Analytics">Analytics</h1> <br/>
                                        <h1 id="textAnalytics">แสดงผลข้อมูลที่วิเคราะห์<br/>จากผู้ใช้ทั้งหมด เพื่อให้คุณ<br/>รู้ว่าอยู่จุดใดและเปรียบ<br/>เทียบตัดสินใจได้ดียิ่งขึ้น</h1>
                                    </div> <br/>
                                    <div className="col-md-auto">
                                        <img src="assets/images/MyBookmark.png" className="LRounded2" />
                                    </div>
                                    <div className="textMyBookmark"> 
                                        <h1 id="Bookmark">Bookmark</h1> <br/>
                                        <span id="textBookmark">แหล่งรวบรวมผลงานผู้ใช้และผลงานที่คุณชอบ</span>
                                    </div> <br/>
                            </div>

                        </div>
                    </div>
                </span>

            </div>
        );
    }
}

export default LandingPage3;