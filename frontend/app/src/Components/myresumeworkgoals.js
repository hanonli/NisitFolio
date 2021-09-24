import React from 'react';
import ReactDom from 'react-dom';
import { Link } from "react-router-dom";

class MyresumeWorkGoals extends React.Component {
    render() {

        const interestedJob = [
            {
                "id": "6135805cd633f137e4559264",
                "UserId": "61358059d633f137e455925c",
                "Job_Objective": "อยากหวั่นไหว",
                "Job_Score": 10,
                "Job_JobName": "กวาดพื้นที่ logger room",
                "Job_SkillName": "มวยปล้ำ"
            }
        ]
        const Count_Job = [1, 2, 3];
        const i = 0;
        const Job_Objective = "Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.";
        const linestyle = {
            backgroundColor: this.props.colour ? this.props.colour : "#FFCE55"
        };
        return (
            <>
                
                    <div class="myresume-mywork-woNb">
                        <div class="myresume-work-goals-woNb">
                            <div class="work-goals-head">
                                <h1 class="White-font" id="WG">เป้าหมายการทำงาน</h1>
                            </div>
                            <div class="line-mywork" style={linestyle}></div>
                            <div class="work-goals-woNb">
                                <h1 class="color-number">{Count_Job[0]}</h1>
                                <h5 class="White-font">{Job_Objective}</h5>
                                <h1 class="color-number">{Count_Job[1]}</h1>
                                <h5 class="White-font">{Job_Objective}</h5>
                                <h1 class="color-number">{Count_Job[2]}</h1>
                                <h5 class="White-font">{Job_Objective}</h5>
                            </div>
                        </div>
                    </div>
                

                <div class="myresume-mywork-woNb">
                    <div class="myresume-work-goals-withoutdata">
                        <div class="work-goals-head">
                            <h1 class="White-font">เป้าหมายการทำงาน</h1>
                        </div>
                        <div class="line-mywork" style={linestyle}></div>
                        <div class="work-goals-woNb">
                            <h4 class="text-work-goals-wdata">ตอนนี้คุณยังไม่มีข้อมูลเป้าหมายการทำงาน สำหรับตำแหน่งงานนี้</h4>
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

export default MyresumeWorkGoals;
