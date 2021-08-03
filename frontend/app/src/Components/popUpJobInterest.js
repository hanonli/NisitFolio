import React from 'react';
import './popUpJobInterest.css';

class PopUp_Job_interest extends React.Component {
    render() {
        return (
            <div className="Popup_jop">
                <div className='popup_inner_job'>
                    <h1>{this.props.text}</h1>
                    <button onClick={this.props.closePopup}>close me</button>
                </div>
            </div>
        );
    }
}

export default PopUp_Job_interest;