import React from 'react';

class MyResumeScoreSkill extends React.Component{
    render() {
        const skillName = this.props.skillname? this.props.skillname: "";
        const colourstyle = {
            backgroundColor: this.props.colour? this.props.colour: "#FFCE55"
        };
        const graystyle = {
            backgroundColor: "#C4C4C4"
        };
        const score = this.props.score? this.props.score: 0;
        const scoreContent =[];
        for(var i=0; i<10; i++){
            if(i<score){
                scoreContent.push(
                    <div class="skill-point">
                        <div class="point" style={colourstyle}></div>
                    </div>
                );
            }
            else{
                scoreContent.push(
                    <div class="skill-point">
                        <div class="point" style={graystyle}></div>
                    </div>
                );
            }
        }
        let levellabel;
        if(score>7.5){
            levellabel = "ยอดเยี่ยม";
        }
        else if(score>5){
            levellabel = "ดี";
        }
        else if(score>2.5){
            levellabel = "พื้นฐาน";
        }
        else{
            levellabel = "พอได้เล็กน้อย";
        }
        return(
            <div class="skillrow">
                <div class="skilllabelbox">
                    <div class="skillnamelabel">
                        <h3 class="skillname">{skillName}</h3>
                        <span class="skilltiptext">{skillName}</span>
                    </div>    
                </div>
                <div class="skillpointbox">
                    <div class="skill-Score">
                        {scoreContent}
                    </div>
                </div>
                <div class="skilllabelbox">
                    <div class="skilllevellabel"><p class="skilllevel">{this.props.level? this.props.level :levellabel}</p></div>
                </div>
            </div>
        )
    }
}
class MyResumeSkill extends React.Component {
    handleRoute = () =>{ 
        window.location = ("editprofile");
    }
    render() {
        const additionalSkills = this.props.addSkill? this.props.addSkill: [];
        const interestedJob = this.props.intJob? this.props.intJob: {}; //มันควรชื่อ jobskill มากกว่าป่าววะ
        const occupation = this.props.occupation? this.props.occupation: "นี้";
        const linestyle = {
            backgroundColor: this.props.colour? this.props.colour: "#FFCE55"
        };
        const dummylinestyle = {
            backgroundColor: "#C4C4C4"
        };
        let softskillContent = [];
        if(additionalSkills.length !== 0){
            softskillContent.push(
                <h3 class="softskill-topic">ทักษะเสริม</h3>
            );
            softskillContent.push(
                <div class="softskill-body">
                    <div class="softskill-child softskill-child-left">
                        <p>{additionalSkills[0]? additionalSkills[0].SoftSkill : ""}</p>
                    </div>
                    <div class="softskill-child">
                        <p>{additionalSkills[1]? additionalSkills[1].SoftSkill : ""}</p>
                    </div>
                    <div class="softskill-child softskill-child-right">
                        <p>{additionalSkills[2]? additionalSkills[2].SoftSkill : ""}</p>
                    </div>
                </div>
            );
        }
        let jobskillcontent = [];
        let dummyshow = [];
        if(this.props.intJob?true:false){
            
            for(var i = 0; i<interestedJob.Job_SkillName.length; i++){
                jobskillcontent.push(
                    <MyResumeScoreSkill skillname={interestedJob.Job_SkillName[i]} score={interestedJob.Job_Score[i]}></MyResumeScoreSkill>
                );
            }
            
        }
        if((additionalSkills.length==0) && (this.props.intJob?false:true)){
            dummyshow.push(<div class="dummycaseSkill"><MyResumeScoreSkill skillname="ทักษะของคุณ" score={10} level="ระดับคะแนน" colour="#505050"></MyResumeScoreSkill></div>);
            dummyshow.push(
            <div class="dummycaseSkill dummycenter">
                <p style={{textAlign: "center"}}>ตอนนี้คุณยังไม่มีข้อมูลทักษะที่โดดเด่น สำหรับตำแหน่งงาน{occupation} และทักษะเสริมที่ช่วยแสดงความถนัดด้านอื่น ๆ ของคุณ</p>
                <button onClick={this.handleRoute}>แก้ไขโปรไฟล์</button>
            </div>
            );
        }
        return(
            <div class="myresumeskill">
                <h2 class="resumetopic">ทักษะที่โดดเด่น</h2>
                <div class="resumesectionline" style={linestyle}></div>
                <div class="jobskillcontent">
                    {jobskillcontent}
                    {dummyshow[0]}
                </div>
                {softskillContent}
                {dummyshow[1]}
            </div>  
        );
    }
}
export default MyResumeSkill;