import React from 'react';
import './popUp_certificate.css';

class PopUp_certi extends React.Component {
    render() {
        return (
            <div className="Popup_certi">
                <div className='popup_inner_certi'>
                    <h1>{this.props.text}</h1>
                    <button onClick={this.props.closePopup}>close me</button>
                </div>
            </div>
        );
    }
}

export default PopUp_certi;