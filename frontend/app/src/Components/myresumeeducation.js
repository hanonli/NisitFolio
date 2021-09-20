import React from 'react';
import Myresumetimeline from './myresumeTimeline';


class EducationContent extends React.Component {
    render(){
        const data = this.props.data;

        console.log(data.Degree)
        
        let content = [];
        let year;
        let line3;
        let line3x;
        if(data.Education_End_Year === 9999){
            year = "กำลังศึกษา";
        }
        else{
            year = data.Education_End_Year;
        }
        if(data.Facalty != "none"){
            if(data.Field_of_study != "none"){
                line3 = <p>{data.Facalty}, {data.Academy}</p>;
            }
            else{
                line3 = <p>{data.Facalty}</p>;
                line3x = <p>{data.Academy}</p>;
            }
        }
        else{
            line3 = <p>{data.Academy}</p>
        }
        if(data.Field_of_study != "none"){
            content.push(
            <div class="educationcontentLine2">
                <h3 class="field">{data.Field_of_study}</h3>
            </div>
            
            );
            content.push(
            <div class="educationcontentLine3">
                {line3}
            </div>
            );
        }
        else{
            if(data.Facalty == "none"){
                content.push(
                    <div class="educationcontentbigLine3">
                        {line3}
                    </div>
                );
            }
            else{
                content.push(
                    <div class="educationcontentbigLine3">
                        {line3}
                    </div>
                );
                content.push(
                    <div class="educationcontentLine3">
                        {line3x}
                    </div>
                );
            }

        }
        if(data.Grade != 0){
            content.push(
            <div class="educationcontentLine4">
<<<<<<< HEAD
                <p class="grade-label inline">เกรดเฉลี่ย</p>
                <div class="centerbreak inline">
                    <div class="breakline inline">
=======
                <p class="grade-label inline2">เกรด</p>
                <div class="centerbreak inline2">
                    <div class="breakline inline2">
>>>>>>> 3f98f0a2f52a5778ac3babb0c84459abfa0deef4
                        {" "}
                    </div>
                </div>
                <h4 class="grade inline2">{data.Grade.toFixed(2)}</h4>
            </div>
        );
        }
        return(
            <div class ="educationonecontent">
                <div class="educationcontentLine1">
                    <p class="year inline2">{year}</p>
                    <div class="centerbreak inline2">
                        <div class="breakline inline2">
                            |
                        </div>
                    </div>
                    <p class="degree inline2">{data.Degree}</p>
                </div>
                {content}
                
                
                

            </div>
        )
    }
}



class MyResumeEducation extends React.Component {
    render() {
        const linestyle = {
            backgroundColor: this.props.colour? this.props.colour: "#FFCE55"
        };
        const data = this.props.data? this.props.data: [];
        data.sort((a, b) => (a.Education_End_Year < b.Education_End_Year) ? 1 : -1)
        let someblock = [];
        for (var i = 0; i < data.length; i++) {
            someblock.push(<EducationContent data={data[i]}></EducationContent>);
            console.log(data[i]);
        }

        return (
            <div class="myeducation">
                <div class="educationtopic"><h2 class="resumetopic">ประวัติการศึกษา</h2></div>
                <div class="resumesectionline" style={linestyle}></div>
                <Myresumetimeline data={someblock}></Myresumetimeline>
                
            </div>

            
        );
        
    }
}



export default MyResumeEducation;