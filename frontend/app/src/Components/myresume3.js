import React from 'react';
import { Link } from "react-router-dom";

class MyResume3 extends React.Component {
    render() {
        const linestyle = {
            backgroundColor: this.props.colour ? this.props.colour : "#FFCE55"
        };
        return (
            <>
                
                    <div class="myresume-mywork-woNb">
                        <h1 class="myresume-head-woNb">ผลงานของฉัน</h1>
                        <div class="line-mywork" style={linestyle}></div>
                        <div class="showmywork-woNb">
                        <img src="assets/images/MyResume.png" className="picmywork1" width="409.5" height="300" />
                        <img src="assets/images/MyResume.png" className="picmywork1" width="409.5" height="300" />
                        <img src="assets/images/MyResume.png" className="picmywork1" width="409.5" height="300" />
                        <img src="assets/images/MyResume.png" className="picmywork1" width="409.5" height="300" />
                        </div>
                    <h5 class="seemywork-woNb"></h5>
                    </div>

             
                <div class="myresume-mywork-woNb">
                    <div class="myresume-mywork-withoutdata">
                        <h1 class="myresume-head-woNb">ผลงานของฉัน</h1>
                        <div class="line-mywork" style={linestyle}></div>
                        <div class="work-goals-woNb">
                            <h4 class="text-work-goals-wdata">ตอนนี้คุณยังไม่มีข้อมูลผลงาน สำหรับตำแหน่งงานนี้</h4>
                            <Link to="/editprofile">
                                <button class="work-goals-btn">
                                    <h4 class="text-btn-work-goals">แก้ไขโปรไฟล์</h4>
                                </button>
                            </Link>
                        </div>
                    </div>
                    </div>
                
            </>
        );
    }
}


export default MyResume3;