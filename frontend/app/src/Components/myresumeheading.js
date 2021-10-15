import React from "react";
import cookie from 'react-cookies';

class MyresumeHeading extends React.Component{
    render(){
        const colourcode = this.props.colour? this.props.colour : "#FFCE55";
        const bordercode = "0.55vw solid " + colourcode;
        const boxcolourstyle = {
            border: bordercode,
        };
        const owner = this.props.owner? this.props.owner: false;
        let nonbioresp;
        if(owner){
            nonbioresp = <p>ตอนนี้คุณยังไม่ได้เขียน เกี่ยวกับฉัน เพื่ออธิบายตัวตนของคุณ ผู้เข้าชมยังไม่รับรู้ว่าคุณเป็นคนยังไง และสนใจเรื่องอะไรกด <a href="editprofile" style={{color: "black", fontWeight: 700 }}>แก้ไขโปรไฟล์</a> เพื่อแสดง passion ของคุณ!</p>;
        }
        else{
            nonbioresp = [];
        }
        cookie.save('Job_EditName', (this.props.occupation? this.props.occupation: "ตำแหน่งงานที่สนใจ"));
        //console.log(cookie.load('Job_EditName'))
        return(
            <div class="resume-header" id="resume-header">
                <div class="resume-profile-picture">
                    <a> 
                        <img class="resume-profile-pic" src={this.props.imagepath? this.props.imagepath: "assets/images/profile2.jpg"}></img>
                    </a> 
                </div> 
                <div class="resume-head-darkpart">
                    <div class="resume-name-box" style={boxcolourstyle}>
                        <h1 class="resume-name-text">{this.props.firstname? this.props.firstname: "ชื่อ"}</h1>
                        <h1 class="resume-name-text">{this.props.lastname? this.props.lastname: "สกุล"}</h1>
                        <h1 class="resume-name-text">{this.props.addname? this.props.addname: ""}</h1>
                        <p class="resume-occupation">{this.props.occupation? this.props.occupation: "ตำแหน่งงานที่สนใจ"}</p>
                    </div>
                    <div class="resume-hometown">
                        <p>{this.props.city? this.props.city+", ": ""}{this.props.province? this.props.province+", ": ""} ประเทศไทย</p>
                    </div>
                </div>
                          
                <div class="resume-name-bio-part">    
                        {this.props.bio? <p>{this.props.bio}</p>: nonbioresp}
                </div>            
            </div>
            
            
        );
    }
}

export default MyresumeHeading;