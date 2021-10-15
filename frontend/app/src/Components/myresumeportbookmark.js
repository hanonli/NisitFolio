import React from 'react';

class MyresumePortfolioBookmarkbutton extends React.Component {
    constructor(props){
        super(props)
        this.state = {privacy : this.props.bookmark}
        
        
    }
    memberdo = () =>{
        var token = cookie.load('login-token');
        var userId = cookie.load('login-user');
        console.log(token);
        console.log("change to private");
        this.setState({privacy: "Private"});
    }
            
    privatedo = () => {
        var token = cookie.load('login-token');
        console.log(token);
        console.log("change to public");
        this.setState({privacy: "Public"});
    }
    
    publicdo = () => {
        var token = cookie.load('login-token');
        console.log(token);
        console.log("change to member");
        this.setState({privacy: "Members"});
    }

    render(){
        const privacy = this.state.privacy;
        let button;


        if (privacy === "Members") {
            //button = "assets/images/outline_people_white_24dp.png";
            button = <img type="button" src="assets/images/outline_people_white_24dp.png" onClick={this.memberdo}/>;
        }
        else if (privacy === "Private") {
            //button = "assets/images/outline_lock_white_24dp.png";
            button = <img type="button" src="assets/images/outline_lock_white_24dp.png" onClick={this.privatedo}/>;
        }
        return(
            <div>{button}</div>
        );
    }
}
export default MyresumePortfolioBookmarkbutton;