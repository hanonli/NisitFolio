import React from 'react';
import MyresumeHeading from './myresumeheading.js';
import MyResumeEducation from './myresumeeducation.js'
import MyresumeCertificate from './myresumecertificate.js';

class MyResume1 extends React.Component {
    
    render() {
        var name = this.props.state.owner.split(' ');
        console.log('namem : ' + JSON.stringify(name))   

<<<<<<< HEAD
        
        var firstname = this.props.state.firstname ? this.props.state.firstname : '';
        var lastname = this.props.state.lastname ? this.props.state.lastname : ''

=======
        var firstname = name[0] ? name[0] : '';
        var lastname = name[1] ? name[1] : '';
        var addname = name[2] ? name[2] + (name[3]? " "+name[3]: ''): "";
>>>>>>> fa7bec92ddde3800ad3493e4abe38f767ad23607
        // if( name.length >1){
        //     alert('longname')
        //     var firstname = name[0]
        //     var lastname = name[1]
        // }else{
        //     alert('shortname')
        //     var firstname = name[0]
        // }

        // const firstname="พุฒวัฒน์"; 
        // const lastname="ผดุงเจริญ"; 
        // var job = this.props.state.interestedJob[0].Job_JobName
        // console.log('job: '+ JSON.stringify(job))
        const occupation = this.props.state.interestedJob[0].Job_JobName ? this.props.state.interestedJob[0].Job_JobName : 'คุณยังไม่มีอาชีพ' ;
        // const bio= "Curabitur lobortis blandit tellus vitae viverra. Praesent a elementum massa, nec congue elit. Aliquam a nunc turpis. Praesent et nisi vestibulum sem interdum ultricies. Integer quis semper erat, sed rhoncus nulla. Etiam in euismod augue. Aenean eu auctor magna. Donec sodales sed.";
        var bio = this.props.state.aboutme ? this.props.state.aboutme : 'No Content, please add one'
        // const imagepath="assets/images/profile.jpg";
        var imagepath =  this.props.state.profilepic ? this.props.state.profilepic : null ; 
        var educationdata = this.props.state.educationHistorys;
        //const certdata = this.props.state.certificates; // certificate move to resume 2 follow the figma!
        
        var owner = this.props.state.is_owner;
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
        console.log(owner);
        const colour_red = "#FF7370";
        return (
            
            <div class="resume1">
                <MyresumeHeading firstname={firstname} lastname={lastname} addname={addname} occupation={occupation} owner={owner} bio={bio} imagepath={imagepath} colour={color} province="กรุงเทพมหานคร" city="มินบุรี"></MyresumeHeading>
			    {/* <MyresumeHeading firstname={firstname} lastname={lastname} const occupation={occupation} imagepath={imagepath} colour="#FFCE55"></MyresumeHeading> bio={bio}
                <MyresumeHeading firstname={firstname} lastname={lastname} const occupation={occupation} imagepath={imagepath} colour="#FFCE55" owner={true}></MyresumeHeading> */}
                <MyResumeEducation data={educationdata} owner={owner} colour={color}></MyResumeEducation>
                {/* <MyResumeEducation data={[]} owner={true}></MyResumeEducation> */}
                {/*<MyresumeCertificate data={certdata} owner={owner}></MyresumeCertificate>*/}
                {/* <MyresumeCertificate data={[]}></MyresumeCertificate> */}
                {/*certificate move to myresume 2 follow the figma*/}
                {/* <h1> try change colour function</h1>

                <MyresumeHeading firstname={firstname} lastname={lastname} const occupation={occupation} bio={bio} imagepath={imagepath} colour={colour_red} province="กรุงเทพมหานคร" city="มินบุรี"></MyresumeHeading>
			    <MyresumeHeading firstname={firstname} lastname={lastname} const occupation={occupation} imagepath={imagepath} colour={colour_red}></MyresumeHeading>
                <MyresumeHeading firstname={firstname} lastname={lastname} const occupation={occupation} imagepath={imagepath} colour={colour_red} owner={true}></MyresumeHeading>
                <MyResumeEducation data={educationdata} colour={colour_red}></MyResumeEducation>
                <MyResumeEducation data={[]} owner={true} colour={colour_red}></MyResumeEducation>
                <MyresumeCertificate data={certdata} colour={colour_red}></MyresumeCertificate>
                <MyresumeCertificate data={[]} colour={colour_red}></MyresumeCertificate> */}

            </div>

        );
        
    }
}



export default MyResume1;