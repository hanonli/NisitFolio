import React from 'react';
import { Link } from "react-router-dom";
import './myresume.css';


class MyresumeEditportButton extends React.Component {
    handleClicktoEdit = () => {
        const editporfolio = "editport";
        window.location = (editporfolio);
    }

    render() {
        return (
            <img className="img-mywork-edit" onClick={this.handleClicktoEdit} src="assets/images/whiteedit.png" type="button" />
        );
    }
}

export default MyresumeEditportButton;