import React from 'react';

class MyResumeSoftSkill extends React.Component{
    render() {
        
        const colourstyle = {
            backgroundColor: this.props.colour? this.props.colour: "#FFCE55"
        };
        const graystyle = {
            backgroundColor: "#C4C4C4"
        };
        return(
            <div class="skill-Score">
                <div class="skill-point">
                    <div class="point" style={colourstyle}></div>
                </div>
                <div class="skill-point">
                    <div class="point" style={colourstyle}></div>
                </div>
                <div class="skill-point">
                    <div class="point" style={colourstyle}></div>
                </div>
                <div class="skill-point">
                    <div class="point" style={colourstyle}></div>
                </div>
                <div class="skill-point">
                    <div class="point" style={colourstyle}></div>
                </div>
                <div class="skill-point">
                    <div class="point" style={colourstyle}></div>
                </div>
                <div class="skill-point">
                    <div class="point" style={colourstyle}></div>
                </div>
                <div class="skill-point">
                    <div class="point" style={colourstyle}></div>
                </div>
                <div class="skill-point">
                    <div class="point" style={colourstyle}></div>
                </div>
                <div class="skill-point">
                    <div class="point" style={colourstyle}></div>
                </div>
            </div>
        )
    }
}
class MyResumeSkill extends React.Component {
    render() {
        const additionalSkills = [
            {
                "id": "61358059d633f137e455925d",
                "UserId": "61358059d633f137e455925c",
                "SoftSkill": "Photoshop"
            },
            {
                "id": "6135805ad633f137e455925e",
                "UserId": "61358059d633f137e455925c",
                "SoftSkill": "Video Cutting"
            }
        ];
        const interestedJob = [
            {
                "id": "6135805cd633f137e4559264",
                "UserId": "61358059d633f137e455925c",
                "Job_Objective": "อยากหวั่นไหว",
                "Job_Score": 10,
                "Job_JobName": "กวาดพื้นที่ logger room",
                "Job_SkillName": "มวยปล้ำ"
            }
        ]; //มันควรชื่อ jobskill มากกว่าป่าววะ
        
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

        return(
            <div class="myresumeskill">
                <h2 class="resumetopic">ทักษะที่โดดเด่น</h2>
                <div class="resumesectionline" style={linestyle}></div>
                <MyResumeSoftSkill></MyResumeSoftSkill>
                {softskillContent}
                

                

            </div>  
        );
    }
}
export default MyResumeSkill;