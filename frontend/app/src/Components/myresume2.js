import React from 'react';
import MyresumeWork from './myresumeWorkhistory';
import MyResumeSkill from './myresumeSkill';
import MyresumeCertificate from './myresumecertificate.js';
import MyResumeportfoliolayoutP from './Myresume_choiceforportfolio';

class MyResume2 extends React.Component {
    constructor(props) {
		super(props);

    }

    shouldComponentUpdate(nextProps){
        if(this.props.state.additionalSkills !== nextProps.state.additionalSkills){
            // console.log('addtion need to refresh state')
            return true;
        }
    }

    render() {
        const workdata = this.props.state.workHistorys;
        const owner = this.props.state.owner;
        const certdata = this.props.state.certificates;
        const color = this.props.state.color;
        // const workdata = [
        //     {
        //         "id": "61388f7c34f592a9d7f788e7",
        //         "UserId": "613881e534f592a9d7f788cf",
        //         "Work_JobName": "FUll time Pro Duel list",
        //         "Work_JobType": "Mainjob",
        //         "Company": "none",
        //         "Work_Start_Month": 7,
        //         "Work_End_Month": 6,
        //         "Work_Start_Year": 2013,
        //         "Work_End_Year": 2021,
        //         "Salary": 35000,
        //         "Infomation": "Duel"
        //     },
        //     {
        //         "id": "61388f7c34f592a9d7f788e7",
        //         "UserId": "613881e534f592a9d7f788cf",
        //         "Work_JobName": "Pro Duel list",
        //         "Work_JobType": "partime",
        //         "Company": "kaiba crop",
        //         "Work_Start_Month": 7,
        //         "Work_End_Month": 9,
        //         "Work_Start_Year": 2013,
        //         "Work_End_Year": 2021,
        //         "Salary": 35000,
        //         "Infomation": "Duel"
        //     },
        //     {
        //         "id": "61388f7c34f592a9d7f788e7",
        //         "UserId": "613881e534f592a9d7f788cf",
        //         "Work_JobName": "Slave Engineer",
        //         "Work_JobType": "partime",
        //         "Company": "1024 crop",
        //         "Work_Start_Month": 7,
        //         "Work_End_Month": 99,
        //         "Work_Start_Year": 2021,
        //         "Work_End_Year": 9999,
        //         "Salary": 35000,
        //         "Infomation": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tincidunt, neque vitae eleifend ornare, leo sem hendrerit lorem, vel hendrerit elit elit et libero. Pellentesque auctor ornare sapien sit amet imperdiet. Nam at justo nibh. Aenean mollis ornare lacus, in ornare odio."
        //     }
        // ]
        const additionalSkills = this.props.state.additionalSkills
        // const additionalSkills = [
        //     {
        //         "id": "61358059d633f137e455925d",
        //         "UserId": "61358059d633f137e455925c",
        //         "SoftSkill": "Photoshop"
        //     },
        //     {
        //         "id": "6135805ad633f137e455925e",
        //         "UserId": "61358059d633f137e455925c",
        //         "SoftSkill": "Video Cutting"
        //     }
        // ];
        const interestedJob =  this.props.state.interestedJob;
        // console.log('in resume2' + JSON.stringify(interestedJob))
        // const interestedJob = {
        //         "id": "6135805cd633f137e4559264",
        //         "UserId": "61358059d633f137e455925c",
        //         "Job_Objective": ["อยากหวั่นไหว"],
        //         "Job_Score": [10, 6.8, 4.5],
        //         "Job_JobName": "กวาดพื้นที่ logger room",
        //         "Job_SkillName": ["มวยปล้ำ", "ชักกะเย่อ", "การซ่อมแซมหรือเปลี่ยนวาล์ว ปั๊ม เครื่องแลกเปลี่ยนความร้อน คอมเพรสเซอร์ กังหันไอน้ำ และอุปกรณ์ควบคุมไฮดรอลิกหรือนิวแมติก "]
        // }; //มันควรชื่อ jobskill มากกว่าป่าววะ
        const interestedJobnoskill = {
            "id": "6135805cd633f137e4559264",
            "UserId": "61358059d633f137e455925c",
            "Job_Objective": ["อยากหวั่นไหว"],
            "Job_Score": [],
            "Job_JobName": "กวาดพื้นที่ logger room",
            "Job_SkillName": []
    }; //มันควรชื่อ jobskill มากกว่าป่าววะ
        return (
            <div class="resume2">
                <MyResumeSkill addSkill={additionalSkills} intJob={interestedJob} owner={owner} colour={color}></MyResumeSkill>
                <MyresumeWork data={workdata} owner={owner} colour={color}></MyresumeWork>
                {/* <MyresumeWork data={[]} owner={true}></MyresumeWork> */}
                
                {/* <h2>ไม่มีเหี้ยไรสักอย่าง แต่เป็นเจ้าของ</h2>
                <MyResumeSkill addSkill={[]} owner={true}></MyResumeSkill> */}
                {/* <h2>เคสที่มีแต่ jobskill</h2> */}
                {/* <MyResumeSkill intJob={interestedJob}></MyResumeSkill>
                <h2>เคสที่มีแต่ additionalSkills</h2>
                <MyResumeSkill addSkill={additionalSkills} owner={true}></MyResumeSkill>
                <h2>เคสที่มี intjob แต่ในนั้น array Job_SkillName ไม่มีสมาชิก</h2>
                <MyResumeSkill addSkill={[]} intJob={interestedJobnoskill} owner={true}></MyResumeSkill>
                <MyResumeSkill addSkill={[]} intJob={interestedJobnoskill} owner={false}></MyResumeSkill>
                <p>เหตุผลคือถ้าอุตส่าห์มีสกิลทั้งทีแล้วทำไมต้องรอให้มีสกิลเสริม หรือสกิลตามอาชีพก่อนถึงยอมโชว์ ถ้าเขาใส่มาคงอยากโชว์แหละ</p> */}
                <MyresumeCertificate data={certdata} owner={owner} colour={color}></MyresumeCertificate>
                
                <h1>ไกด์ให้มาย</h1>
                <MyResumeportfoliolayoutP>
                    <div>element1</div>
                    <div>element2</div>
                    <div>element3</div>
                    <div>element4</div>
                    <div>element5</div>
                    <div>element6</div>
                    <div>element7</div>
                    <div>element8</div>
                </MyResumeportfoliolayoutP>
                <MyResumeportfoliolayoutP>
                    <div><h1>content</h1></div>
                </MyResumeportfoliolayoutP>
            </div>
                
        );
    }
}

export default MyResume2;