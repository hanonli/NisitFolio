
import React from 'react';
import $ from 'jquery';
import { Link } from "react-router-dom";
import MultipleRows from './myresume3slidemywork';
import MyResumeportfoliolayoutP from './Myresume_choiceforportfolio';


window.jQuery = $;
window.$ = $;
global.jQuery = $;


class MyResume3 extends React.Component {
    render() {
        console.log('in Myresume3'+ JSON.stringify(this.props))
        const linestyle = {
            backgroundColor:  this.props.state.color ? this.props.state.color : "#FFCE55"
        };
        const colourcode =  this.props.state.color ?  this.props.state.color : "#FFCE55";
        const bordercode = "0.5vw solid " + colourcode;
        const boxcolourstyle = {
            border: bordercode,
        };
        const myWorkSlideShow = [];
        const myWorkWithoutData = [];
        const myWorkWithData = [];
        const images = [];
        const imagesoverlay = [];
        const portfolioPictures = ["assets/images/ldwithgradient.png", "assets/images/ldwithgradient.png", "assets/images/ldwithgradient.png", "assets/images/ldwithgradient.png", "assets/images/ldwithgradient.png", "assets/images/ldwithgradient.png", "assets/images/ldwithgradient.png", "assets/images/ldwithgradient.png", "assets/images/ldwithgradient.png", "assets/images/ldwithgradient.png", "assets/images/ldwithgradient.png"];
        // const portfolioPictures = [];
        // const portfolioPictures = ["assets/images/ldwithgradient.png", "assets/images/MyResume.png", "assets/images/ldwithgradient.png", "assets/images/ldwithgradient.png", "assets/images/MyResume.png", "assets/images/ldwithgradient.png"];
        const create_time = "1 กันยายน 2800";
        const Port_Name = "ASD";


        this.state = {
            selec: [
                "assets/images/outline_lock_white_24dp.png",
                "assets/images/outline_people_white_24dp.png",
                "assets/images/outline_public_white_24dp.png"
            ],
            next: 0
        };

        this.handleNext = () => {
            this.setState({
                next: 1
            });
        };


        var refElement = null;

        for (let i = 0; i < portfolioPictures.length; i++) {
            images.push(
                <div>
                    <div id="img-overlay">
                        <div className="iconmywork">
                            <img className="img-mywork-select" type="button"
                            onClick={this.handleNext}
                            src={this.state.selec[this.state.next]}
                        />
                            <img className="img-mywork-bin" src="assets/images/white-bin.png" type="button" />
                            <img className="img-mywork-edit" src="assets/images/whiteedit.png" type="button" />
                        </div>
                        <h3 className="myworkname">
                            {Port_Name}
                        </h3>
                        <h4 className="myworkdate">
                            {create_time}
                        </h4>
                    </div>
                    <div class="mywork-col">
                        <img className="img-mywork-1" src={portfolioPictures[i]} />
                    </div>
                </div>
            )
        }


        if (portfolioPictures.length == 0) {
            myWorkWithoutData.push(
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
            )
        }
        else {
            myWorkWithData.push(
                <div class="myresume-mywork-woNb">
                    <div class="educationtopic">
                        <h2 class="myresume-head-woNb">ผลงานของฉัน</h2>
                    </div>
                    <div class="resumesectionline" style={linestyle}></div>
                    <div className="img-sp"></div>
                    <div class="showmywork-woNb">
                        <MyResumeportfoliolayoutP>
                            {images}
                        </MyResumeportfoliolayoutP>
                    </div>
                    <div className="myworkb"></div>
                    </div>
                
            )
        }

        return (
            <div id='resume-resume'>
                <br/><br/>
                <div>{myWorkWithoutData}</div>
                <div>{myWorkWithData}</div>
                <MultipleRows ></MultipleRows>
            </div>
        );
    }
}


export default MyResume3;
