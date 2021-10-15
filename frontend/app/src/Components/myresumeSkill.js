import React from 'react';
import cookie from 'react-cookies';

class MyResumeScoreSkill extends React.Component{

    render() {
       
        const skillName = this.props.skillname? this.props.skillname: "";
        const colourstyle = {
            backgroundColor: this.props.colour? this.props.colour: "#FFCE55"
        };
        const graystyle = {
            backgroundColor: "#C4C4C4"
        };
        const score = this.props.score? Math.round(this.props.score): 0;
        //console.log("remain-score:" + score%1);
        //console.log("score:" + score);
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
        if(score==10){
            levellabel = "ยอดเยี่ยม";
        }
        else if(score>7.5){
            levellabel = "ดี";
        }
        else if(score>5){
            levellabel = "พื้นฐาน";
        }
        else if(score>2.5){
            levellabel = "พอได้เล็กน้อย";
        }
        else{
            levellabel = "";
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
    constructor(props) {
		super(props);
    }

    shouldComponentUpdate(nextProps){
        if(this.props.addSkill != nextProps.addSkill){
            return true;
        }else{
            return false;
        }
            
        
    }
  

    handleRoute = () =>{ 
        window.location = ("editprofile");
        cookie.save('Edit_tabselect',6);
    }
    handleRoute2 = () =>{ 
        cookie.save('Edit_tabselect',6);
        window.location = ("editresume");
    }
    render() {
        // console.log('in skill: ' + JSON.stringify(this.props.addSkill))
        const owner = this.props.owner? this.props.owner: false;
        const additionalSkills = this.props.addSkill? this.props.addSkill: [];
        // console.log('in skill addskill: ' + JSON.stringify(additionalSkills))
        // console.log('in skill addskill: ' + additionalSkills.length)
        // console.log('in skill addskill: ' +  JSON.stringify(additionalSkills[0]))
        const interestedJob = this.props.intJob? this.props.intJob: {}; //มันควรชื่อ jobskill มากกว่าป่าวว
        console.log('in skill intJob: ' + JSON.stringify(interestedJob))

        const occupation = this.props.occupation? this.props.occupation: "นี้";
        const linestyle = {
            backgroundColor: this.props.colour? this.props.colour: "#FFCE55"
        };
        const color = this.props.colour? this.props.colour: "#FFCE55";
        const dummylinestyle = {
            backgroundColor: "#C4C4C4"
        };
        let softskillContent = [];
        let topicElement = [];

        if( additionalSkills.length !== 0){
            if(topicElement.length === 0){
                topicElement.push(<h2 class="resumetopic">ทักษะที่โดดเด่น</h2>);
                topicElement.push(<div class="resumesectionline" style={linestyle}></div>);
            }
            softskillContent.push(
                <h3 class="softskill-topic">ทักษะเสริม</h3>
            );
            let i=0;
            // console.log('fiwejfhiwefweif'+additionalSkills[{}].AdditionalSkill)
            while( i < additionalSkills.length ){
                console.log('i is : ' + i)
                if( i % 3 === 0){
                    softskillContent.push(
                        <div class="softskill-child softskill-child-left">
                            <p>{additionalSkills[i]? additionalSkills[i].AdditionalSkill : ""}</p>
                        </div>
                     );
                }else if(i % 3 === 1){
                    softskillContent.push(
                        <div class="softskill-child">
                            <p>{additionalSkills[i]? additionalSkills[i].AdditionalSkill  : ""}</p>
                        </div>
                    );
                }else if(i % 3 === 2){
                    softskillContent.push(
                        <div class="softskill-child softskill-child-right">
                            <p>{additionalSkills[i]? additionalSkills[i].AdditionalSkill  : ""}</p>
                        </div>
                    );
                }
                
            i+=1
            }
            
        }
        let jobskillcontent = [];
        let dummyshow = [];
        var jobskillcheck = false;
        // console.log('in skill intJob: ' + interestedJob.length)
        // console.log('in skill tf: ' + this.props.intJob)
        if(this.props.intJob?true:false){
            // console.log('in pass1')
            // console.log('in skill tf: ' + JSON.stringify(interestedJob[0]))
            if(interestedJob[0]? true:false){
                // console.log('in pass2')
                let job = interestedJob[0];
                // console.log(job.Job_SkillName)
                if( job.Job_SkillName.length !== 0){
                    if(topicElement.length === 0){
                        topicElement.push(<h2 class="resumetopic">ทักษะที่โดดเด่น</h2>);
                        topicElement.push(<div class="resumesectionline" style={linestyle}></div>);
                    }
                    for(var i = 0; i< job.Job_SkillName.length; i++){
                        // console.log('in skill skillname: ' + job.Job_SkillName[i] + ' score: ' + job.Job_Score[i])
                        jobskillcontent.push(
                            <MyResumeScoreSkill skillname={job.Job_SkillName[i]} score={job.Job_Score[i]} colour={color}></MyResumeScoreSkill>
                        );
                    }
                    jobskillcheck = true;
                }
            }
            
        }
        // let job = interestedJob[0];
        //console.log(this.props.intJob? true: false);
        //console.log(interestedJob.Job_SkillName? true: false);
        console.log(additionalSkills.length);
        
        console.log(jobskillcheck);
        if((additionalSkills.length===0) && (!jobskillcheck) && (owner)){
            if(topicElement.length === 0){
                topicElement.push(<h2 class="resumetopic">ทักษะที่โดดเด่น</h2>);
                topicElement.push(<div class="resumesectionline" style={linestyle}></div>);
            }
            dummyshow.push(<div class="dummycaseSkill"><MyResumeScoreSkill skillname="ทักษะของคุณ" score={10} level="ระดับคะแนน" colour="#505050"></MyResumeScoreSkill></div>);
            dummyshow.push(
            <div class="dummycaseSkill dummycenter">
                <p style={{textAlign: "center"}}>ตอนนี้คุณยังไม่มีข้อมูลทักษะที่โดดเด่น และทักษะเสริมที่เลือกไว้ สำหรับตำแหน่งงานนี้</p>
                <button onClick={this.handleRoute}>เพิ่มทักษะ</button>
                <button onClick={this.handleRoute2}>เลือกทักษะเสริม</button>
            </div>
            );
        }
        else if((additionalSkills.length===0) && (jobskillcheck) && (owner)){
            
            if(topicElement.length === 0){
                topicElement.push(<h2 class="resumetopic">ทักษะที่โดดเด่น</h2>);
                topicElement.push(<div class="resumesectionline" style={linestyle}></div>);
            }
            dummyshow.push(<div></div>);
            dummyshow.push(
            <div class="dummycaseSkill dummycenter">
                <p style={{textAlign: "center"}}>ตอนนี้คุณยังไม่มีข้อมูลทักษะเสริมที่เลือกไว้ สำหรับตำแหน่งงานนี้</p>
                <button onClick={this.handleRoute2}>เลือกทักษะเสริม</button>
            </div>
            );
            console.log(dummyshow);
        }
        else if((additionalSkills.length!==0) && (!jobskillcheck) && (owner)){
            
            if(topicElement.length === 0){
                topicElement.push(<h2 class="resumetopic">ทักษะที่โดดเด่น</h2>);
                topicElement.push(<div class="resumesectionline" style={linestyle}></div>);
            }
            dummyshow.push(
                <div class="dummycaseSkill dummycenter">
                    <p style={{textAlign: "center"}}>ตอนนี้คุณยังไม่มีข้อมูลทักษะที่โดดเด่น สำหรับตำแหน่งงานนี้</p>
                    <button onClick={this.handleRoute}>เพิ่มทักษะ</button>
                </div>
                );
            dummyshow.push(<div></div>);
            
            console.log(dummyshow);
        }
        let result;
        if((additionalSkills.length===0) && (!jobskillcheck) && (!owner)){
            result = (<div></div>);
        }
        else{
            result = (
                    <div class="myresumeskill" >
                        {topicElement}
                    
                        <div class="jobskillcontent">
                            {jobskillcontent}
                            {dummyshow[0]}
                        </div>
                        <div class="softskill-body">
                           {softskillContent}
                        </div>
                        {dummyshow[1]}
                    </div>  
                );
        }
        return(
           <div id='resume-additionalskills'>
               {result}
           </div> 
            
        );
    }
}
export default MyResumeSkill;