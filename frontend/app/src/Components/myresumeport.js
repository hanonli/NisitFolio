import React from 'react';
import $ from 'jquery';
import { Link } from "react-router-dom";
import MultipleRows from './myresume3slidemywork';
import MyResumeportfoliolayoutP from './Myresume_choiceforportfolio';

class MyResumePort extends React.Component {
    render() {
        const date = "02/10/2021"
        const image = "https://nisitfolio.s3.amazonaws.com/images/61508ce5f3a324659c4de1c2_ad196d56-2b35-45d6-b176-3472c6a8fbaf.png"
        const link = "portinfo/615ac3f2a7acb0008091f7f1"
        const port_name = "โปรโตไทป์-3244"
        const privacy = "Members"

        let srcpri = "";

        const linestyle = {
            backgroundColor: this.props.state.color ? this.props.state.color : "#FFCE55"
        };

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
            <div>
                <div className="img-overlay">
                    <div className="iconmywork">
                        <img className="img-mywork-select" type="button" src={srcpri} />
                        <img className="img-mywork-bin" src="assets/images/white-bin.png" type="button" />
                        <img className="img-mywork-edit" src="assets/images/whiteedit.png" type="button" />
                    </div>
                    <h3 className="myworkname">
                        {port_name}
                    </h3>
                    <h4 className="myworkdate">
                        {date}
                    </h4>
                </div>
                <img className="img-mywork-1" src={image} />
            </div>
        );
    }
}

export default MyResumePort;