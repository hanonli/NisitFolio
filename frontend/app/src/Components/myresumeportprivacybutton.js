import React from 'react';
import cookie from 'react-cookies';

class MyresumePortfolioPrivacybutton extends React.Component {
    constructor(props){
        super(props)
        this.state = {privacy : this.props.privacy ,portid:this.props.port_id}

        
    }
    memberdo = () =>{
        var token = cookie.load('login-token');
        console.log(token);
        console.log("change to private");
        const portid = this.state.portid;
        console.log("form member " + portid );
        fetch("http://localhost:2000/portfolio/"+portid,{
			method: "PATCH",
			headers: {
				'Authorization': 'Bearer '+token,
				"Access-Control-Allow-Origin": "*",
				"Access-Control-Allow-Methods": "*",
				"Access-Control-Allow-Credentials": true,
				"Content-Type": "application/json"
			},
			body: JSON.stringify({
                "Port_Privacy": "Private"
            }),
		})
        .then(response => {
            //console.log(datas);
            console.log(response);
            this.setState({privacy: "Private"});
            //GetSearchBookmarkData();
        })
        .catch((error) => {
            console.log(error);
            //this.setState({ redirect: "/landing" });
        });
    }
            
    privatedo = () => {
        var token = cookie.load('login-token');
        console.log(token);
        console.log("change to public");
        const portid = this.state.portid;
        console.log("form member " + portid );
        fetch("http://localhost:2000/portfolio/"+portid,{
			method: "PATCH",
			headers: {
				'Authorization': 'Bearer '+token,
				"Access-Control-Allow-Origin": "*",
				"Access-Control-Allow-Methods": "*",
				"Access-Control-Allow-Credentials": true,
				"Content-Type": "application/json"
			},
			body: JSON.stringify({
                "Port_Privacy": "Public"
            }),
		})
        .then(response => {
            //console.log(datas);
            console.log(response);
            this.setState({privacy: "Public"});
            //GetSearchBookmarkData();
        })
        .catch((error) => {
            console.log(error);
            //this.setState({ redirect: "/landing" });
        });
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


        if (privacy == "Members") {
            //button = "assets/images/outline_people_white_24dp.png";
            button = <img type="button" src="assets/images/outline_people_white_24dp.png" onClick={this.memberdo}/>;
        }
        else if (privacy == "Private") {
            //button = "assets/images/outline_lock_white_24dp.png";
            button = <img type="button" src="assets/images/outline_lock_white_24dp.png" onClick={this.privatedo}/>;
        }
        else if (privacy == "Public") {
            //button = "assets/images/outline_public_white_24dp.png";
            button = <img type="button" src="assets/images/outline_public_white_24dp.png" onClick={this.publicdo}/>;
        }
        return(
            <div>{button}</div>
        );
    }
}
export default MyresumePortfolioPrivacybutton;