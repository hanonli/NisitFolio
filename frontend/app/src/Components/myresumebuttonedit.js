import React from 'react';
import { Link } from "react-router-dom";
import './myresume.css';
import cookie from 'react-cookies';

class MyresumeEditportButton extends React.Component {
    handleClicktoEdit = () => {
        const portid = this.props.port_id;
        console.log(portid)
        cookie.save('port-entry', 'edit', { path: '/' })
        cookie.save('port-focus', portid, { path: '/' })
        const editportfolio = "/editport"
        // window.location = (editportfolio);

        /*$('.pft-edit-icon').on('click', function (e) {
            e.stopPropagation();
            cookie.save('port-entry', 'edit', { path: '/' })
            cookie.save('port-focus', pftId[focusId], { path: '/' })
            refThis.setState({ redirect: "/editport" });
        });*/
    }

    render() {
        return (
            <img className="img-mywork-edit" onClick={this.handleClicktoEdit} src="assets/images/whiteedit.png" type="button" />
        );
    }
}

export default MyresumeEditportButton;