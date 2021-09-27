import React from 'react';
import Myresumetimeline from './myresumeTimeline';

class MyresumeWorkelement extends React.Component {
    render() {
        const monthdict = {
            1: "มกราคม",
            2: "กุมภาพันธ์",
            3: "มีนาคม",
            4: "เมษายน",
            5: "พฤษภาคม",
            6: "มิถุนายน",
            7: "กรกฎาคม",
            8: "สิงหาคม",
            9: "กันยายน",
            10: "ตุลาคม",
            11: "พฤศจิกายน",
            12: "ธันวาคม",
            99: "ยังอยู่ในงาน"
        }
        const data = this.props.data;
        let content = [];
        let endyear;
        if((data.Work_End_Year===9999) & (data.Work_End_Month===99)){
            endyear = "ปัจจุบัน";
        }
        else{
            endyear = data.Work_End_Year
        }        
        content.push(
            <div class="workcontentLine1">
                <p class="year inline2">{data.Work_Start_Year} - {endyear}</p>
                    <div class="centerbreak inline2">
                        <div class="breakline inline2">
                            |
                        </div>
                    </div>
                <p class="degree inline2">{data.Work_JobType}</p>
            </div>
        );
        content.push(
            <div class="workcontentLine2">
                <h3 class="field">{data.Work_JobName}</h3>
            </div>
        );
        if(data.Company !== "none"){
            content.push(
                <div class="educationcontentLine3">
                    <p>{data.Company}</p>
                </div>
            );
        }

        if(data.Infomation !== "none"){
            content.push(
                <div class="educationcontentLine3">
                    <p>{data.Infomation}</p>
                </div>
            );
        }
        return(
            <div class="workonecontent">
                {content}
            </div>
        )
    }
}

class MyresumeWork extends React.Component{
    handleRoute = () =>{ 
        window.location = ("editprofile");
    }
    render() {
        const data = this.props.data? this.props.data: [];
        const owner = this.props.owner? this.props.owner: false;
        function workSorter(firstKey, secondKey) {
            //console.log("callSort");

            return function(a, b) {  
                var vala = "a=" + a[firstKey];
                var valb = "b=" + b[firstKey];
                if (a[firstKey] > b[firstKey]) {  
                    
                    /*console.log(vala);
                    console.log(valb);
                    console.log("a more than b");*/
                    return -1;  
                } 
                else if ([a[firstKey]] < b[firstKey]) {  
                    /*console.log(vala);
                    console.log(valb);
                    console.log("a less than b");*/
                    return 1;  
                }  
                else {
                    /*console.log(vala);
                    console.log(valb);
                    console.log(a[secondKey]);*/
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
        const linestyle = {
            backgroundColor: this.props.colour? this.props.colour: "#FFCE55"
        };
        const dummylinestyle = {
            backgroundColor: "#C4C4C4"
        };
        const occupation = this.props.occupation? this.props.occupation: "นี้";
        let workCon;
        let sortdata;
        let content = [];
        if(data.length !== 0){
            sortdata = data.sort(workSorter("Work_End_Year", "Work_End_Month"));
            for (var i = 0; i < sortdata.length; i++) {
                content.push(<MyresumeWorkelement data={sortdata[i]}></MyresumeWorkelement>);
                /*console.log(data[i]);*/
                
            }
            workCon = (<Myresumetimeline data={content} colour={this.props.colour}></Myresumetimeline>);
        }
        else{
            if(owner){
                workCon =(
                <div class="work-dummyshow">
                    <div class="resumetimeline">
                        <div class="resumetimeline-line" style={dummylinestyle}></div>
                        <div class="timeline-block">
                            <div class="timeline-dot-pointer" style={dummylinestyle}></div>
                            <div class="left-row">
                                <div class="workdummycontent">
                                    <div class="workcontentLine1">
                                        <p class="year inline2">ช่วงปีที่ทำงาน</p><div class="centerbreak inline2"><div class="breakline inline2">|</div></div><p class="degree inline2">ประเภทงาน</p>
                                    </div>
                                    <div class="workcontentLine2"><h3 class="field">ตำแหน่งงานที่ทำ</h3></div>
                                    <div class="educationcontentLine3"><p>ชื่อสังกัด/บริษัท</p></div>
                                    <div class="educationcontentLine3"><p>[รายละเอียดเกี่ยวกับงานที่ทำ]</p></div>
                                </div>
                            </div>
                        <div class="timeline-block">
                            <div class="timeline-dummy">
                                <p>ตอนนี้คุณยังไม่มีข้อมูลประวัติการศึกษา สำหรับตำแหน่งงาน{occupation}</p>
                                <button onClick={this.handleRoute}>แก้ไขโปรไฟล์</button>
                            </div>
                        </div>
                        <div class="timeline-block">    
                            <div class="timeline-dot-pointer" style={dummylinestyle}></div>
                            <div class="right-row">
                                <div class="workdummycontent">
                                    <div class="workcontentLine1">
                                        <p class="year inline2">ช่วงปีที่ทำงาน</p><div class="centerbreak inline2"><div class="breakline inline2">|</div></div><p class="degree inline2">ประเภทงาน</p>
                                    </div>
                                    <div class="workcontentLine2"><h3 class="field">ตำแหน่งงานที่ทำ</h3></div>
                                    <div class="educationcontentLine3"><p>ชื่อสังกัด/บริษัท</p></div>
                                    <div class="educationcontentLine3"><p>[รายละเอียดเกี่ยวกับงานที่ทำ]</p></div></div>
                                </div>
                            </div>
                        </div>    
                    </div>
                </div>);
            }
        }
        return(
            <div class="resume-education" id="resume-work">
                <div class="educationtopic"><h2 class="resumetopic">ประวัติการการทำงาน</h2></div>
                <div class="resumesectionline" style={linestyle}></div>
                {workCon}
            </div>
        )
    }
}
export default MyresumeWork;