import React from 'react';
import './popUp_certificate.css';

class PopUp_certi extends React.Component {
    componentDidMount() {
        const script = document.createElement("script");
        script.src = "assets/js/date.js";
        document.body.appendChild(script);
    }

    render() {
        return (
            <div className="popup_certi">
                <div className='popup_inner_certi'>
                    <form class="name_certi">
                        <input type="text" id="certi_name" name="certi_name" placeholder="พิมพ์ชื่อใบรับรอง/เกียรติบัตร"></input>
                    </form>
                    <form class="year_certi">
                        <select name="yearpicker" id="yearpicker"></select>
                    </form>
                    <button onClick={this.props.closePopup}>close me</button>
                </div>
            </div>
        );
    }
}

export default PopUp_certi;