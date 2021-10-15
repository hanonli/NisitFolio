import React from 'react';
import MyResumeportfoliolayoutP from './Myresume_choiceforportfolio';
import MyResumePort from './myresumeport';

class MyresumePortfolioPrivacybutton extends React.Component {
    constructor(props){
        super(props)
        this.state = {privacy : this.props.privacy}

        
    }
    memberdo = () =>{
        console.log("change to private");
        this.setState({privacy: "Private"});
    }
            
    privatedo = () => {
        console.log("change to public");
        this.setState({privacy: "Public"});
    }
    
    publicdo = () => {
        console.log("change to member");
        this.setState({privacy: "Member"});
    }

    render(){
        const privacy = this.state.privacy;
        let button;


        if (privacy == "Members") {
            //button = "assets/images/outline_people_white_24dp.png";
            button = <img className="img-mywork-select" type="button" src="assets/images/outline_people_white_24dp.png" onClick={this.memberdo}/>;
        }
        else if (privacy == "Private") {
            //button = "assets/images/outline_lock_white_24dp.png";
            button = <img className="img-mywork-select" type="button" src="assets/images/outline_lock_white_24dp.png" onClick={this.voi}/>;
        }
        else if (privacy == "Public") {
            //button = "assets/images/outline_public_white_24dp.png";
            button = <img className="img-mywork-select" type="button" src="assets/images/outline_public_white_24dp.png" onClick={this.voi}/>;
        }
        return(
            {button}
        );
    }
}
export default MyresumePortfolioPrivacybutton;