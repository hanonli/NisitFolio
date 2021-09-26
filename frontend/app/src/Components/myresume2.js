import React from 'react';
import MyresumeWork from './myresumeWorkhistory';

class MyResume2 extends React.Component {
    render() {
        const workdata = [
            {
                "id": "61388f7c34f592a9d7f788e7",
                "UserId": "613881e534f592a9d7f788cf",
                "Work_JobName": "FUll time Pro Duel list",
                "Work_JobType": "Mainjob",
                "Company": "none",
                "Work_Start_Month": 7,
                "Work_End_Month": 6,
                "Work_Start_Year": 2013,
                "Work_End_Year": 2021,
                "Salary": 35000,
                "Infomation": "Duel"
            },
            {
                "id": "61388f7c34f592a9d7f788e7",
                "UserId": "613881e534f592a9d7f788cf",
                "Work_JobName": "Pro Duel list",
                "Work_JobType": "partime",
                "Company": "kaiba crop",
                "Work_Start_Month": 7,
                "Work_End_Month": 9,
                "Work_Start_Year": 2013,
                "Work_End_Year": 2021,
                "Salary": 35000,
                "Infomation": "Duel"
            },
            {
                "id": "61388f7c34f592a9d7f788e7",
                "UserId": "613881e534f592a9d7f788cf",
                "Work_JobName": "Slave Engineer",
                "Work_JobType": "partime",
                "Company": "1024 crop",
                "Work_Start_Month": 7,
                "Work_End_Month": 99,
                "Work_Start_Year": 2021,
                "Work_End_Year": 9999,
                "Salary": 35000,
                "Infomation": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tincidunt, neque vitae eleifend ornare, leo sem hendrerit lorem, vel hendrerit elit elit et libero. Pellentesque auctor ornare sapien sit amet imperdiet. Nam at justo nibh. Aenean mollis ornare lacus, in ornare odio."
            }
        ]
        return (
            <div class="resume2">
                <div class="myresume-3">
                    <h1 id="">ส่วนที่3</h1>                  
                </div>
                <div class="myresume-4">
                    <h1 id="">ส่วนที่4</h1>                  
                </div>
                <h1>กลัวจะไม่ทัน จะขึ้นโครง WORK HISTORY ให้ มาปรับ css ให้เข้า กับเก็บ detail เองนะ ตอนนี่ยังไม่ทำรองรับเงื่อนไขไม่มีข้อมูลแต่เป็นเจ้าของ ลองก็อบ html ใน inspect มาทำๆ ดู -PUN-</h1>
                
                <MyresumeWork data={workdata}></MyresumeWork>
                <MyresumeWork data={[]} owner={true}></MyresumeWork>
                
            </div>
                
        );
    }
}

export default MyResume2;