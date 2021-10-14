import React from 'react';
import DatePickerBD from './datepickerBD.js';
import $ from 'jquery';
import Cropper from 'react-cropper';

class Edittab4 extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        console.log("edittab4!!!!:", this.props.mywork_data);
    }
    render() {
        return (
            <div className="Registab4">
                <div class="regis-box-content1">

                </div>
            </div >
        );
    }
}

export default Edittab4;
