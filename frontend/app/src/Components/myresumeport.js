import React from 'react';
import $ from 'jquery';
import { Link } from "react-router-dom";
import MultipleRows from './myresume3slidemywork';
import MyResumeportfoliolayoutP from './Myresume_choiceforportfolio';
import MyresumeEditportButton from './myresumebuttonedit';
import MyresumePortfolioPrivacybutton from './myresumeportprivacybutton';

class MyResumePort extends React.Component {
    handleRoute = () => { 
        const link = this.props.data.link;
        window.location = (link);
    }

    voi = () => {
        console.log("clicked!")
    }
    render() {
        const data = this.props.data;
        console.log(data);
        const port_id = data.port_id;
        console.log(port_id);
        const date = data.date;
        const image = data.image;
        const owner = data.owner;
        const port_name = data.port_name;
        const privacy = data.privacy;
        console.log(this.props.data);
        let srcpri = "";

        // let owner = false;

        if (privacy == "Members") {
            srcpri = "assets/images/outline_people_white_24dp.png";
        }
        else if (privacy == "Private") {
            srcpri = "assets/images/outline_lock_white_24dp.png";
        }
        else if (privacy == "Public") {
            srcpri = "assets/images/outline_public_white_24dp.png";
        }

        if (owner == true) {
            return (
                <div class="">
                    <div className="img-overlay">
                        <div class="ghostbutton" onClick={this.handleRoute}></div>
                            <div className="img-mywork-edit">
                            <MyresumeEditportButton portid={port_id}></MyresumeEditportButton>
                            </div>
                        <h3 className="myworkname">
                            {port_name}
                        </h3>
                        <h4 className="myworkdate">
                            {date}
                        </h4>
                    </div>
                    <div className="row">
                        <div className="mywork-col">
                            <img className="img-mywork-1" src={image} />
                        </div>
                    </div>
                </div>
            );
        }
        else{
            return (
                <div class="myworkobj" onClick={this.handleRoute}>
                    <div className="img-overlay">
                        <h3 className="myworkname">
                            {port_name}
                        </h3>
                        <h4 className="myworkdate">
                            {date}
                        </h4>
                    </div>
                    <div className="row">
                        <div className="mywork-col">
                            <img className="img-mywork-1" src={image} />
                        </div>
                    </div>
                </div>
            );
        }
    }
}

export default MyResumePort;