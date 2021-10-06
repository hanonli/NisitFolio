import React from 'react';
import ReactDom from 'react-dom';
import { Link } from "react-router-dom";

class MyresumeWorkGoals extends React.Component {
    render() {
        // const interestedJob = this.props.state.interestedJob;
        /*const interestedJob = [
            {
                "id": "6135805cd633f137e4559264",
                "UserId": "61358059d633f137e455925c",
                "Job_Objective": "อยากหวั่นไหว",
                "Job_Score": 10,
                "Job_JobName": "กวาดพื้นที่ logger room",
                "Job_SkillName": "มวยปล้ำ"
            }
        ]*/
        let Count_Job = 0;
         const Job_Objective = ["Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.","อยากรวย","อยากมีตัง หิวเงิน"];
        // const Job_Objective = ["none", "none", "none"];
        // const interestedJob = this.props.interestedJob;
        // const Job_Objective = this.props.interestedJob.Job_Objective;
        // alert(JSON.stringify(interestedJob[0]))
        const linestyle = {
            backgroundColor: this.props.colour ? this.props.colour : "#FFCE55"
        };
        const colornumstyle = {
            color: this.props.colour ? this.props.colour : "#FFCE55"
        };

        const Job_Goals = []
        const Job_Goals_With_data = []
        const Without_Job_Goals = []

        for (let i = 0; i <= 2; i++) {
            if (Job_Objective[i] != "none") {
                Count_Job += 1;
                Job_Goals.push(
                    <>
                        <h1 class="color-number" style={colornumstyle}>{Count_Job}</h1>
                        <h5 class="White-font">{Job_Objective[i]}</h5>
                    </>
                );
            }
        }

        if (Count_Job != 0) {
            Job_Goals_With_data.push(
                <div class="myresume-work-goals-woNb">
                    <div class="work-goals-head">
                        <h1 class="White-font-topic">เป้าหมายการทำงาน</h1>
                    </div>
                    <div class="resumesectionline" style={linestyle}></div>
                    <div class="work-goals-woNb">
                        <div>{Job_Goals}</div>
                    </div>
                </div>
            )
        }

        if (Count_Job == 0) {
            Without_Job_Goals.push(
                <div class="myresume-work-goals-withoutdata">
                    <div class="work-goals-head">
                        <h1 class="White-font-topic">เป้าหมายการทำงาน</h1>
                    </div>
                    <div class="resumesectionline" style={linestyle}></div>
                    <div class="work-goals-woNb">
                        <h4 class="text-work-goals-wdata">ตอนนี้คุณยังไม่มีข้อมูลเป้าหมายการทำงาน สำหรับตำแหน่งงานนี้</h4>
                        <Link to="/editprofile">
                            <button class="work-goals-btn">แก้ไขโปรไฟล์</button>
                        </Link>
                        <div class="wgs"></div>
                    </div>
                </div>
            )
        }

        return (
            <div class="workgolas">
                <div>{Job_Goals_With_data}</div>
                <div>{Without_Job_Goals}</div>
            </div>
        );
    }
}

export default MyresumeWorkGoals;