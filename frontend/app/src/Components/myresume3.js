
import React from 'react';
import $ from 'jquery';
import { Link } from "react-router-dom";
import MultipleRows from './myresume3slidemywork';
import MyResumeportfoliolayoutP from './Myresume_choiceforportfolio';

class MyResume3 extends React.Component {
    render() {
        console.log('in Myresume3'+ JSON.stringify(this.props))
        const linestyle = {
            backgroundColor:  this.props.state.color ? this.props.state.color : "#FFCE55"
        };
        const colourcode =  this.props.state.color ?  this.props.state.color : "#FFCE55";
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

        const portfolios = [
            {
                "_id": "615ac3f2a7acb0008091f7f1",
                "UserId": "6142fd75f8b2b96640bc542d",
                "Port_Name": "โปรโตไทป์-3244",
                "Port_Info": "โปรโตไทป์ โปรโตไทป์ โปรโตไทป์ โปรโตไทป์",
                "Owner": "ไก่จิก เด็กตาย",
                "totalBookmark": 2,
                "Port_Tag": [
                    "ช่างยนต์",
                    "เจ้าหน้าที่ฝ่าย IT"
                ],
                "Port_Privacy": "Members",
                "Port_Date": "02/10/2021",
                "portfolioPictures": [
                    {
                        "create_time": "4 ตุลาคม 2564 16:05",
                        "last_modified": [
                            "4 ตุลาคม 2564 16:05",
                            "4 ตุลาคม 2564 16:14",
                            "4 ตุลาคม 2564 16:14",
                            "4 ตุลาคม 2564 16:16",
                            "4 ตุลาคม 2564 16:18",
                            "4 ตุลาคม 2564 16:18",
                            "4 ตุลาคม 2564 16:19",
                            "4 ตุลาคม 2564 16:19",
                            "4 ตุลาคม 2564 16:19",
                            "4 ตุลาคม 2564 16:20",
                            "4 ตุลาคม 2564 16:27",
                            "4 ตุลาคม 2564 16:27",
                            "4 ตุลาคม 2564 16:53",
                            "4 ตุลาคม 2564 16:54",
                            "4 ตุลาคม 2564 16:54",
                            "4 ตุลาคม 2564 17:00"
                        ],
                        "PortId": "615ac3f2a7acb0008091f7f1",
                        "Pic": [
                            "https://nisitfolio.s3.amazonaws.com/images/61508ce5f3a324659c4de1c2_ad196d56-2b35-45d6-b176-3472c6a8fbaf.png",
                            "https://nisitfolio.s3.amazonaws.com/images/61508ce5f3a324659c4de1c2_74e5cebd-407e-4af8-a80d-38cd476bf2d3.png",
                            "https://nisitfolio.s3.amazonaws.com/images/61508ce5f3a324659c4de1c2_999b3e11-cf81-46ed-a2b6-e16a147928ab.png",
                            "https://nisitfolio.s3.amazonaws.com/images/61508ce5f3a324659c4de1c2_68b21541-ac5f-4416-bd59-5406e88c158d.png"
                        ],
                        "Description": [],
                        "id": "615ad0bea7acb0008091f9bf"
                    }
                ],
                "create_time": "4 ตุลาคม 2564 16:05",
                "last_modified": [
                    "4 ตุลาคม 2564 16:05"
                ],
                "modified_by": [
                    "::1"
                ],
                "ResumeId": [],
                "__v": 15
            }
        ]
        
        /*if (Port_Privacy == "Members") {
            
        }
        else if (Port_Privacy == "Private") {
            
        }
        else if (Port_Privacy == "Public") {
            
        }*/
/*
        for (let i = 0; i < portfolioPictures.length; i++) {
            images.push(
                <div>
                    <div id="img-overlay">
                        <div className="iconmywork">
                            <img className="img-mywork-select" type="button" src="asset/images/outline_people_white_24dp.png" />
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
        }*/

        return (
            <div id='resume-resume'>
                <br/><br/>
                <div>{myWorkWithoutData}</div>
                <div>{myWorkWithData}</div>
            </div>
        );
    }
}


export default MyResume3;
