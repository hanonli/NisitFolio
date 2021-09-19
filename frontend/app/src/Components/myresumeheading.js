import React from "react";


class MyresumeHeading extends React.Component{
    render(){
        const colourcode = this.props.colour? this.props.colour : "#FFCE55";
        const bordercode = "1vw solid " + colourcode;
        const boxcolourstyle = {
            border: bordercode,
        };
        return(
            <div class="resume-header">
                <div class="resume-profile-picture">
                    <a> 
                        <img class="resume-profile-pic" src={this.props.imagepath? this.props.imagepath: "assets/images/profile2.jpg"}></img>
                    </a> 
                </div> 
                <div class="resume-head-darkpart">
                    <div class="resume-name-box" style={boxcolourstyle}>
                        <h1 class="resume-name-text">{this.props.firstname? this.props.firstname: "ชื่อ"}</h1>
                        <h1 class="resume-name-text">{this.props.lastname? this.props.lastname: "สกุล"}</h1>
                        <p class="resume-occupation">{this.props.occupation? this.props.occupation: "ตำแหน่งงานที่สนใจ"}</p>
                    </div>
                    <div class="resume-hometown">
                        <p>เมือง, นครศรีธรรมราช, ประเทศไทย</p>
                    </div>
                </div>
                          
                <div class="resume-name-bio-part">    
                        {this.props.bio? this.props.bio: ""}
                </div>            
            </div>
            
            
        );
    }
}

export default MyresumeHeading;