import React from 'react';
import $ from 'jquery';
import { Link } from "react-router-dom";
import MultipleRows from './myresume3slidemywork';
import MyResumeportfoliolayoutP from './Myresume_choiceforportfolio';
import btnedit from './myresumebuttonedit';

class MyResumePort extends React.Component {
    handleRoute = () =>{ 
        const link = this.props.data.link;
        window.location = (link);
    }

    handleClicktoEdit = () => {
        const editporfolio = "editport";
        window.location = (editporfolio);
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

        // let owner = false;
        // let privacy = "Private";

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
                <div class="myworkobj" onClick={this.handleRoute} >
                    <div className="img-overlay">
                        <div className="iconmywork">
                            <img className="img-mywork-select" type="button" src={srcpri} />
                            <img className="img-mywork-edit" onClick={this.handleClicktoEdit} src="assets/images/whiteedit.png" type="button" />
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
        else if (owner == false && (privacy == "Public" || privacy == "Members")) {
            return (
                <div class="myworkobj" onClick={this.handleRoute}>
                    <div className="img-overlay">
                        <img className="img-mywork-bookmark" src="assets/images/outline_bookmark_border_white_24dp.png" />
                        <img className="img-mywork-bookmark" src="assets/images/outline_bookmark_white_48dp.png" />
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
        else {
            return (
                <div></div>
            );
        }
    }
}

export default MyResumePort;