import React from 'react';
import $ from 'jquery';
import { Link } from "react-router-dom";
import MultipleRows from './myresume3slidemywork';
import MyResumeportfoliolayoutP from './Myresume_choiceforportfolio';
import MyresumePortfolioPrivacybutton from './myresumeportprivacybutton';
class MyResumePort extends React.Component {
    handleRoute = () =>{ 
        const link = this.props.data.link;
        window.location = (link);
    }
    voi = () => {
        console.log("clicked!")
    }
    render() {
        const data = this.props.data;
        
        const date = data.date;
        const image = data.image;
        const owner = data.owner;
        const port_name = data.port_name;
        const privacy = data.privacy;
        console.log(this.props.data);
        let srcpri = "";


        if (privacy == "Members") {
            srcpri = "assets/images/outline_people_white_24dp.png";
        }
        else if (privacy == "Private") {
            srcpri = "assets/images/outline_lock_white_24dp.png";
        }
        else if (privacy == "Public") {
            srcpri = "assets/images/outline_public_white_24dp.png";
        }

        return (
            <div class="myworkobj" >
                <div className="img-overlay">
                    <div class="ghostbutton" onClick={this.handleRoute}></div>
                    <div className="iconmywork">
                        <MyresumePortfolioPrivacybutton privacy={privacy}></MyresumePortfolioPrivacybutton>
                        <img className="img-mywork-bin" src="assets/images/white-bin.png" type="button" onClick={this.voi}/>
                        <img className="img-mywork-edit" src="assets/images/whiteedit.png" type="button" onClick={this.voi}/>
                    </div>
                    <h3 className="myworkname">
                        {port_name}
                    </h3>
                    <h4 className="myworkdate">
                        {date}
                    </h4>
                </div>
                <div className="row" >
                    <img className="img-mywork-1" src={image} />
                </div>
            </div>
        );
    }
}

export default MyResumePort;