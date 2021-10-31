import React from 'react';
import ReactDom from 'react-dom';
import { Link } from "react-router-dom";
import cookie from 'react-cookies';

class MyresumeWorkGoals extends React.Component {
    handleRoute = () => {
        cookie.save('Edit_tabselect', 6);
        window.location = ("editprofile");
    }

    render() {
        console.log(this.props.state);
        const interestedJob = this.props.state.interestedJob[0]
        console.log(interestedJob);
        let Count_Job = 0;
        const Job_Objective = interestedJob.Job_Objective;
        // const Job_Objective = ["none", "none", "none"];
        // const interestedJob = this.props.interestedJob;
        // const Job_Objective = this.props.interestedJob.Job_Objective;
        // console.log(Job_Objective)
        // alert(JSON.stringify(interestedJob[0]))
        const linestyle = {
            backgroundColor: this.props.colour ? this.props.colour : "#FFCE55"
        };
        const colornumstyle = {
            color: this.props.colour ? this.props.colour : "#FFCE55"
        };
        const owner = this.props.state.is_owner;
        const Job_Goals = []
        const Job_Goals_With_data = []
        const Without_Job_Goals = []

        for (let i = 0; i < Job_Objective.length; i++) {
            if (Job_Objective[i] != "none" && Job_Objective[i] != "") {
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

        if ((Count_Job == 0) && (owner)) {
            Without_Job_Goals.push(
                <div class="myresume-work-goals-withoutdata">
                    <div class="work-goals-head">
                        <h1 class="White-font-topic">เป้าหมายการทำงาน</h1>
                    </div>
                    <div class="resumesectionline" style={linestyle}></div>
                    <div class="work-goals-woNb">
                        <h4 class="text-work-goals-wdata">ตอนนี้คุณยังไม่มีข้อมูลเป้าหมายการทำงาน สำหรับตำแหน่งงานนี้</h4>
                        <button class="work-goals-btn" onClick={this.handleRoute}>เพิ่มเป้าหมาย</button>
                        <div class="wgs"></div>
                    </div>
                </div>
            )
        }
        let result;
        if ((Count_Job == 0) && (!owner)) {
            result = (<div></div>);
        }
        else {
            result = (
                <div class="workgolas" id="resume-goal">
                    <div>{Job_Goals_With_data}</div>
                    <div>{Without_Job_Goals}</div>
                </div>);
        }
        return (
            <div>{result}</div>
        );
    }
}

export default MyresumeWorkGoals;