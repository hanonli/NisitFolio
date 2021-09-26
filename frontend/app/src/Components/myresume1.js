import React from 'react';
import MyresumeHeading from './myresumeheading.js';
import MyResumeEducation from './myresumeeducation.js'
import MyresumeCertificate from './myresumecertificate.js';

class MyResume1 extends React.Component {

    render() {
        const firstname="พุฒวัฒน์"; 
        const lastname="ผดุงเจริญ"; 
        const occupation="พระเจ้า";
        const bio= "Curabitur lobortis blandit tellus vitae viverra. Praesent a elementum massa, nec congue elit. Aliquam a nunc turpis. Praesent et nisi vestibulum sem interdum ultricies. Integer quis semper erat, sed rhoncus nulla. Etiam in euismod augue. Aenean eu auctor magna. Donec sodales sed.";
        const imagepath="assets/images/profile.jpg";
        const educationdata = this.props.state.educationHistorys;
        const certdata = this.props.state.certificates;
        // const educationdata = [
        //     {
        //         "id": "6135805bd633f137e4559262",
        //         "UserId": "61358059d633f137e455925c",
        //         "Degree": "ประถมศึกษา",
        //         "Facalty": "Vivamus at egestas elit, ut convallis nulla. Mauris sed.",
        //         "Field_of_study": "Proin nec ullamcorper neque gravida.",
        //         "Academy": "Vivamus at egestas elit, ut convallis nulla. Mauris sed.",
        //         "Grade": 1.0,
        //         "Education_End_Year": 9999
        //     },
        //     {
        //         "id": "6135805bd633f137e4559263",
        //         "UserId": "61358059d633f137e453925c",
        //         "Degree": "มัธยมศึกษาตอนต้น",
        //         "Facalty": "Vivamus at egestas elit, ut convallis nulla. Mauris sed.",
        //         "Field_of_study": "Proin nec ullamcorper neque gravida.",
        //         "Academy": "Vivamus at egestas elit, ut convallis nulla. Mauris sed.",
        //         "Grade": 3.30,
        //         "Education_End_Year": 2014
        //     },
        //     {
        //         "id": "6135805bd633f137e4559263",
        //         "UserId": "61358059d633f137e453925c",
        //         "Degree": "ประถมศึกษา",
        //         "Facalty": "Vivamus at egestas elit, ut convallis nulla. Mauris sed.",
        //         "Field_of_study": "Proin nec ullamcorper neque gravida.",
        //         "Academy": "Vivamus at egestas elit, ut convallis nulla. Mauris sed.",
        //         "Grade": 4.0,
        //         "Education_End_Year": 2019
        //     },
            
        // ];
        // const certdata = [{
        //     "id": "6135805ad633f137e4559260",
        //     "UserId": "61358059d633f137e455925c",
        //     "ResumeId": "6135805ad633f137e4559260",
        //     "CertName": "การแข่งขันการ์ดยูกิ",
        //     "CertPic": "assets/images/certi_ex.jpeg",
        //     "CertYear": 1999
        // },
        // {
        //     "id": "6135805bd633f137e4559261",
        //     "UserId": "61358059d633f137e455925c",
        //     "ResumeId": "6135805bd633f137e4559261",
        //     "CertName": "การแข่งขันเอกอิเอ้กเอ้กก",
        //     "CertPic": "assets/images/certi_ex3.jpeg",
        //     "CertYear": 2002
        // },
        // {
        //     "id": "6135805bd633f137e4559261",
        //     "UserId": "61358059d633f137e455925c",
        //     "ResumeId": "6135805bd633f137e4559261",
        //     "CertName": "การแข่งขันนอนกลางวัน",
        //     "CertPic": "assets/images/certi_ex2.jpeg",
        //     "CertYear": 2003
        // },
        // {
        //     "id": "6135805bd633f137e4559261",
        //     "UserId": "61358059d633f137e455925c",
        //     "ResumeId": "6135805bd633f137e4559261",
        //     "CertName": "การแข่งขันนอนกลางวัน",
        //     "CertPic": "assets/images/trylargesizeimg.jpg",
        //     "CertYear": 2003
        // },
        // {
        //     "id": "6135805bd633f137e4559261",
        //     "UserId": "61358059d633f137e455925c",
        //     "ResumeId": "6135805bd633f137e4559261",
        //     "CertName": "กNullam eu erat nec turpis dictum augue.",
        //     "CertPic": "assets/images/testlongimage.jpg",
        //     "CertYear": 2003
        // }];
        const color = this.props.state.color;
        const colour_red = "#FF7370";
        return (
            
            <div class="resume1">
                <MyresumeHeading firstname={firstname} lastname={lastname} const occupation={occupation} bio={bio} imagepath={imagepath} colour="#FFCE55" province="กรุงเทพมหานคร" city="มินบุรี"></MyresumeHeading>
			    <MyresumeHeading firstname={firstname} lastname={lastname} const occupation={occupation} imagepath={imagepath} colour="#FFCE55"></MyresumeHeading>
                <MyresumeHeading firstname={firstname} lastname={lastname} const occupation={occupation} imagepath={imagepath} colour="#FFCE55" owner={true}></MyresumeHeading>
                <MyResumeEducation data={educationdata}></MyResumeEducation>
                <MyResumeEducation data={[]} owner={true}></MyResumeEducation>
                <MyresumeCertificate data={certdata}></MyresumeCertificate>
                <MyresumeCertificate data={[]}></MyresumeCertificate>
                
                <h1> try change colour function</h1>

                <MyresumeHeading firstname={firstname} lastname={lastname} const occupation={occupation} bio={bio} imagepath={imagepath} colour={colour_red} province="กรุงเทพมหานคร" city="มินบุรี"></MyresumeHeading>
			    <MyresumeHeading firstname={firstname} lastname={lastname} const occupation={occupation} imagepath={imagepath} colour={colour_red}></MyresumeHeading>
                <MyresumeHeading firstname={firstname} lastname={lastname} const occupation={occupation} imagepath={imagepath} colour={colour_red} owner={true}></MyresumeHeading>
                <MyResumeEducation data={educationdata} colour={colour_red}></MyResumeEducation>
                <MyResumeEducation data={[]} owner={true} colour={colour_red}></MyResumeEducation>
                <MyresumeCertificate data={certdata} colour={colour_red}></MyresumeCertificate>
                <MyresumeCertificate data={[]} colour={colour_red}></MyresumeCertificate>

            </div>

        );
        
    }
}



export default MyResume1;