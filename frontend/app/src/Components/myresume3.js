
import React, { Component } from 'react';
import { Link } from "react-router-dom";
import MultipleRows from './myresume3slidemywork';



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
        // const portfolioPictures = ["assets/images/ldwithgradient.png", "assets/images/ldwithgradient.png", "assets/images/ldwithgradient.png", "assets/images/ldwithgradient.png", "assets/images/ldwithgradient.png", "assets/images/ldwithgradient.png", "assets/images/ldwithgradient.png", "assets/images/ldwithgradient.png", "assets/images/ldwithgradient.png", "assets/images/ldwithgradient.png", "assets/images/ldwithgradient.png"];
        // const portfolioPictures = [];
        const portfolioPictures = ["assets/images/ldwithgradient.png", "assets/images/MyResume.png", "assets/images/ldwithgradient.png", "assets/images/ldwithgradient.png", "assets/images/MyResume.png", "assets/images/ldwithgradient.png"];
        const create_time = "1 กันยายน 2800";
        const Port_Name = "ASD";
        let countslide = 0;

        function clickHandler() {
            console.log('GOGO!')
        }

        countslide = Math.ceil(portfolioPictures.length / 6);

        if (portfolioPictures.length <= 6) {
            for (let i = 0; i < portfolioPictures.length; i++) {
                images.push(
                        <div class="mywork-col">
                            <img className="img-mywork-1" src={portfolioPictures[i]} />
                        </div>
                        
                )
                imagesoverlay.push(
                    <div className="mywork-col">
                        <div class="img-overlay">
                            <img className="img-mywork-bookmark" scr="./element/portfolio/outline_bookmark_border_white_24dp" />
                            <h3 className="myworkname">
                                {Port_Name}
                            </h3>
                            <h4 className="myworkdate">
                                {create_time}
                            </h4>
                        </div>
                    </div>
                )
            }
        }
                        
/*
        images.push(
                <><div class="mywork-col">
                <div class="img-overlay">
                    <img className="img-mywork-1" src="assets/images/ldwithgradient.png" />
                </div>
            </div><div class="mywork-col">
                    <div class="img-overlay">
                        <img className="img-mywork-1" src="assets/images/MyResume.png" />
                    </div>
                </div><div class="mywork-col">
                    <div class="img-overlay">
                        <img className="img-mywork-1" src="assets/images/ldwithgradient.png" />
                    </div>
                </div><div class="mywork-col">
                    <div class="img-overlay">
                        <img className="img-mywork-1" src="assets/images/MyResume.png" />
                    </div>
                </div><div class="mywork-col">
                    <div class="img-overlay">
                        <img className="img-mywork-1" src="assets/images/ldwithgradient.png" />
                    </div>
                </div><div class="mywork-col">
                    <div class="img-overlay">
                        <img className="img-mywork-1" src="assets/images/MyResume.png" />
                    </div>
                </div></>   
        )

        images.push(
        )*/

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

        else if (portfolioPictures.length <= 6) {
            myWorkWithData.push(
                <>
                    
                    <div class="myresume-mywork-woNb">
                    <div class="educationtopic">
                        <h2 class="myresume-head-woNb">ผลงานของฉัน</h2>
                    </div>
                        <div class="resumesectionline" style={linestyle}></div>
                        <div class="showmywork-woNb">
                            <div class="showmywork">
                            
                                <div className="img-overlay-block">
                                    <div class="img-overlayspace">

                                        <div className="mywork-col-overlay">
                                            <div class="img-overlay">
                                                <div className="iconmywork">
                                                    <img className="img-mywork-select" src="assets/images/outline_public_white_24dp.png" type="button" />
                                                    <img className="img-mywork-bin" src="assets/images/white-bin.png" type="button" />
                                                    <img className="img-mywork-edit" src="assets/images/whiteedit.png" type="button" />
                                                </div>
                                                <div className="myworkname">
                                                    {Port_Name}
                                                </div>
                                                <div className="myworkdate">
                                                    {create_time}
                                                    </div>
                                                    </div>
                                        </div>
                                        <div className="mywork-col-overlay">
                                            <div class="img-overlay">
                                                <div className="iconmywork">
                                                    <img className="img-mywork-select" src="assets/images/outline_public_white_24dp.png" type="button" />
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
                                        </div>
                                        <div className="mywork-col-overlay">
                                            <div class="img-overlay">
                                                <div className="iconmywork">
                                                    <img className="img-mywork-select" src="assets/images/outline_public_white_24dp.png" type="button" />
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
                                        </div>
                                        <div className="mywork-col-overlay">
                                            <div class="img-overlay2">
                                                <div className="iconmywork">
                                                    <img className="img-mywork-select" src="assets/images/outline_public_white_24dp.png" type="button" />
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
                                        </div>
                                        <div className="mywork-col-overlay">
                                            <div class="img-overlay2">
                                                <div className="iconmywork">
                                                    <img className="img-mywork-select" src="assets/images/outline_public_white_24dp.png" type="button" />
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
                                        </div>
                                        <div className="mywork-col-overlay">
                                            <div class="img-overlay2">
                                                <div className="iconmywork">
                                                    <img className="img-mywork-select" src="assets/images/outline_public_white_24dp.png" type="button" />
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
                                        </div>

                                    </div>
                                </div>

                            <div class="row">
                                <div>{images}</div>
                            </div>
                            </div>
                            
                    </div>
                    <div className="myworkb"></div>
                </div>
                </>
            )
        }

        else {
            myWorkWithData.push(
                <MultipleRows ></MultipleRows>
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
