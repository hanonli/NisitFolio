import React from 'react';
import { Link } from "react-router-dom";

class MyResume3 extends React.Component {
    render() {
        const linestyle = {
            backgroundColor: this.props.colour ? this.props.colour : "#FFCE55"
        };
        const colourcode = this.props.colour ? this.props.colour : "#FFCE55";
        const bordercode = "0.5vw solid " + colourcode;
        const boxcolourstyle = {
            border: bordercode,
        };

        return (
            <>
                <div class="myresume-mywork-woNb"></div>
                <div class="educationtopic"><h2 class="myresume-head-woNb">ผลงานของฉัน</h2></div>
                <div class="resumesectionline" style={linestyle}></div>
                <div class="showmywork-woNb">
                    <div class="showmywork">
                        <div class="row">
                            <div class="mywork-col">
                                <img className="img-mywork-1" src="assets/images/ldwithgradient.png" />
                            </div>
                            <div class="mywork-col">
                                <img className="img-mywork-1" src="assets/images/MyResume.png" />
                            </div>
                            <div class="mywork-col">
                                <img className="img-mywork-1" src="assets/images/ldwithgradient.png" />
                            </div>
                        </div>
                        <div class="row">
                            <div class="mywork-col">
                                <img className="img-mywork-1" src="assets/images/MyResume.png" />
                            </div>
                            <div class="mywork-col">
                                <img className="img-mywork-1" src="assets/images/ldwithgradient.png" />
                            </div>
                            <div class="mywork-col">
                                <img className="img-mywork-1" src="assets/images/MyResume.png" />
                            </div>
                        </div>
                    </div>
                </div>

            
                <div class="myresume-mywork-woNb">
                    <div class="myresume-mywork-withoutdata">
                        <h1 class="myresume-head-woNb">ผลงานของฉัน</h1>
                        <div class="line-mywork" style={linestyle}></div>
                        <div class="work-goals-woNb">
                            <h4 class="text-work-goals-wdata">ตอนนี้คุณยังไม่มีข้อมูลผลงาน สำหรับตำแหน่งงานนี้</h4>
                            <Link to="/editprofile">
                                <button class="work-goals-btn">แก้ไขโปรไฟล์</button>
                            </Link>
                            <div class="wgs"></div>
                        </div>
                    </div>
                </div>
                
            </>
        );
    }
}


export default MyResume3;