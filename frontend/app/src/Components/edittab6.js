import React from 'react';
import DatePickerBD from './datepickerBD.js';
import $ from 'jquery';
import Cropper from 'react-cropper';

class Edittab6 extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        console.log("edittab6!!!!:", this.props.myjob_data);
    }
    render() {
        return (
            <div className="Registab6">
                <div class="regis-box-content1">

                </div>
            </div >
        );
    }
}

export default Edittab6;