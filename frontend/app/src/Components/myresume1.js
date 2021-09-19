import React from 'react';
import MyresumeHeading from './myresumeheading.js';
import MyResumeEducation from './myresumeeducation.js'

class MyResume1 extends React.Component {

    render() {
        const firstname="สิรภพ"; 
        const lastname="ชยเจตน์"; 
        const occupation="พระเจ้า";
        const bio="บ่นไปเรื่อย ๆ วัน ๆ ไม่มีงานมีการให้ทำ ทำได้แค่บ่น ถึงได้มามาหางานทำนี่ไง";
        const imagepath="assets/images/dummyprofilepicture.png";
        const educationdata = [
            {
                "id": "6135805bd633f137e4559262",
                "UserId": "61358059d633f137e455925c",
                "Degree": "ประถมศึกษา",
                "Facalty": "ไม่มี",
                "Field_of_study": "หลักสูตรคนดีย์",
                "Academy": "โรงเรียนอนุบาลหมีเหงา",
                "Grade": 0,
                "Education_End_Year": 9999
            },
            {
                "id": "6135805bd633f137e4559263",
                "UserId": "61358059d633f137e453925c",
                "Degree": "มัธยมศึกษา",
                "Facalty": "หมูกรอบ",
                "Field_of_study": "none",
                "Academy": "ตู้ล็อกเกอร๋",
                "Grade": 3.30,
                "Education_End_Year": 2014
            },
            {
                "id": "6135805bd633f137e4559263",
                "UserId": "61358059d633f137e453925c",
                "Degree": "ประถมศึกษา",
                "Facalty": "none",
                "Field_of_study": "none",
                "Academy": "โรงเรียนของเราน่านอน",
                "Grade": 4.0,
                "Education_End_Year": 2019
            }
        ]
        return (
            
            <div class="resume1">
                <MyresumeHeading firstname={firstname} lastname={lastname} const occupation={occupation} bio={bio} imagepath={imagepath} colour="#FFCE55"></MyresumeHeading>
			    <MyResumeEducation data={educationdata}></MyResumeEducation>
            </div>
        );
        
    }
}



export default MyResume1;