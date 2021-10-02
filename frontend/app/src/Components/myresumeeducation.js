import React from 'react';
import Myresumetimeline from './myresumeTimeline';


class EducationContent extends React.Component {

    render(){
        const data = this.props.data;
        let content = [];
        let year;
        let line3;
        let line3x;
        if(data.Education_End_Year === 0){
            content.push(
                <div class="educationcontentLine1">
                    <p class="degree inline2">{data.Degree}</p>
                </div>
            );
        }
        else{
            if(data.Education_End_Year === 9999){
                year = "กำลังศึกษา";
            }
            
            else{
                year = data.Education_End_Year;
            }
            content.push(
                
                <div class="educationcontentLine1">
                    <p class="year inline2">{year}</p>
                    <div class="centerbreak inline2">
                        <div class="breakline inline2">
                            |
                        </div>
                    </div>
                    <p class="degree inline2">{data.Degree}</p>
                </div>
            );

        }
        if(data.Facalty != "none"){
            line3 = data.Facalty;
            line3x = data.Academy;
            
            //line3 = <p>{data.Facalty}, {data.Academy}</p>;
        }
        else{
            line3 = data.Academy;
        }
        if(data.Field_of_study !== "none"){
            content.push(
            <div class="educationcontentLine2">
                <h3 class="field">{data.Field_of_study}</h3>
            </div>
            
            );
            content.push(
            <div class="educationcontentLine3">
                <p>{line3}</p>
            </div>
            );
            content.push(
            <div class="educationcontentLine3">
                <p>{line3x}</p>
            </div>
            );
        }
        else{
            if(data.Facalty == "none"){
                content.push(
                    <div class="educationcontentLine2">
                        <h3 class="field">{line3}</h3>
                    </div>
                );
            }
            else{
                content.push(
                    <div class="educationcontentLine2">
                        <h3 class="field">{line3}</h3>
                    </div>
                );
                content.push(
                    <div class="educationcontentLine3">
                        <p>{line3x}</p>
                    </div>
                );
            }
            /*content.push(
                <div class="educationcontentLine3">
                    {line3}
                </div>
                );*/

        }
        if(data.Grade != 0){
            content.push(
            <div class="educationcontentLine4">
                <p class="grade-label inline2">เกรด</p>
                <div class="centerbreak inline2">
                    <div class="breakline inline2">
                        {" "}
                    </div>
                </div>
                <h4 class="grade inline2">{data.Grade.toFixed(2)}</h4>
            </div>
        );
        }
        return(
            <div class ="educationonecontent">
                {content}
            </div>
        )
    }
}



class MyResumeEducation extends React.Component {
    handleRoute = () =>{ 
        window.location = ("editprofile");
    }
    render() {
        function educationSorter(firstKey, secondKey) {
            //console.log("callSort");
            const educationlevel = {
                "ประถมศึกษา": 1,
                "มัธยมศึกษาตอนต้น":2,
                "มัธยมศึกษาตอนปลาย": 3,
                "อาชีวะศึกษา":3,
                "ปริญญาตรี":4,
                "ปริญญาโท": 5,
                "ปริญญญาเอก":6
            };

            return function(a, b) {  
                /*var vala = "a=" + a[firstKey] +"equal"+ educationlevel[a[firstKey]];
                var valb = "b=" + b[firstKey] +"equal"+ educationlevel[b[firstKey]];*/
                if (educationlevel[a[firstKey]] > educationlevel[b[firstKey]]) {  
                    
                    /*console.log(vala);
                    console.log(valb);
                    console.log("a more than b");*/
                    return -1;  
                } 
                else if (educationlevel[[a[firstKey]]] < educationlevel[b[firstKey]]) {  
                    /*console.log(vala);
                    console.log(valb);
                    console.log("a less than b");*/
                    return 1;  
                }  
                else {
                    /*console.log(vala);
                    console.log(valb);*/
                    if (a[secondKey] < b[secondKey]) {  
                        
                        return 1;  
                    } else if (a[secondKey] > b[secondKey]) {  
                        return -1;  
                    } else {
                        return 0;
                    }
                } 
            }  
        }

        const owner = this.props.owner? this.props.owner: false;
        const linestyle = {
            backgroundColor: this.props.colour? this.props.colour: "#FFCE55"
        };
        const dummylinestyle = {
            backgroundColor: "#C4C4C4"
        };
        const data = this.props.data? this.props.data : [];
        /*data.sort((a, b) => (a.Education_End_Year < b.Education_End_Year) ? 1 : -1)*/
        const occupation = this.props.occupation? this.props.occupation: "นี้";
        let EducationCon;
        let sortdata;
        let topicElement = [];
        let content = [];
        if(data.length !== 0){
            topicElement.push(<div class="educationtopic"><h2 class="resumetopic">ประวัติการศึกษา</h2></div>);
            topicElement.push(<div class="resumesectionline" style={linestyle}></div>)
            sortdata = data.sort(educationSorter("Degree", "Education_End_Year"));
            for (var i = 0; i < sortdata.length; i++) {
                content.push(<EducationContent data={sortdata[i]}></EducationContent>);
                /*console.log(data[i]);*/
                
            }
            EducationCon = (<Myresumetimeline data={content} colour={this.props.colour}></Myresumetimeline>);
        }
        else if(owner){
            topicElement.push(<div class="educationtopic"><h2 class="resumetopic">ประวัติการศึกษา</h2></div>);
            topicElement.push(<div class="resumesectionline" style={linestyle}></div>)
            EducationCon = (
                <div class="education-dummyshow">
                    <div class="resumetimeline">
                        <div class="resumetimeline-line" style={dummylinestyle}></div>
                        <div class="timeline-block">
                            <div class="timeline-dot-pointer" style={dummylinestyle}></div>
                            <div class="left-row">
                                <div class="educationdummycontent">
                                    <div class="educationcontentLine1"><p class="year inline2">ปีที่จบการศึกษา</p><div class="centerbreak inline2"><div class="breakline inline2">|</div></div><p class="degree inline2">วุฒิศึกษา</p></div>
                                    <div class="educationcontentLine2"><h3 class="field">สาขาวิชา</h3></div>
                                    <div class="educationcontentLine3"><p>คณะ</p></div>
                                    <div class="educationcontentLine3"><p>สถานศึกษา</p></div>
                                    <div class="educationcontentLine4"><p class="grade-label inline2">เกรด</p><div class="centerbreak inline2"><div class="breakline inline2"> </div></div><h4 class="grade inline2">X.XX</h4></div></div></div></div>
                        <div class="timeline-block">
                            <div class="timeline-dummy">
                                <p>ตอนนี้คุณยังไม่มีข้อมูลประวัติการศึกษา สำหรับตำแหน่งงาน{occupation}</p>
                                <button onClick={this.handleRoute}>แก้ไขโปรไฟล์</button>
                            </div>
                        </div>
                        <div class="timeline-block">
                            <div class="timeline-dot-pointer" style={dummylinestyle}></div>
                            <div class="right-row">
                                <div class="educationdummycontent">
                                    <div class="educationcontentLine1"><p class="year inline2">ปีที่จบการศึกษา</p><div class="centerbreak inline2"><div class="breakline inline2">|</div></div><p class="degree inline2">วุฒิศึกษา</p></div>
                                    <div class="educationcontentLine2"><h3 class="field">สาขาวิชา</h3></div>
                                    <div class="educationcontentLine3"><p>คณะ</p></div>
                                    <div class="educationcontentLine3"><p>สถานศึกษา</p></div>
                                    <div class="educationcontentLine4"><p class="grade-label inline2">เกรด</p><div class="centerbreak inline2"><div class="breakline inline2"> </div></div><h4 class="grade inline2">X.XX</h4></div></div></div></div>
                        </div>
                    
                </div>
                );
        /*console.log(sortdata);*/
        
        }
        
        
        return (
            <div class="resume-education" id="resume-education">
                {topicElement}
                {EducationCon}
            </div>

            
        );
        
    }
}



export default MyResumeEducation;