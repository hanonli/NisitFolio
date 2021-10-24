import React from 'react';
import $ from 'jquery';
import './register.css';
import './registab5.css';
import './chooseresume3.css';

class Editresume3 extends React.Component {
    constructor() {
        super();
        this.handleLoad = this.handleLoad.bind(this);

    }

    componentWillUnmount() {
        window.removeEventListener('load', this.handleLoad);
        $(window).unbind('scroll');
        $(document).unbind();
    }

    handleLoad() {
        console.log("YEAH!");
    }

    render() {
        return (
            <div className="Registab5">
                <h2 class="head-of-choose-resume-tab3">คุณสามารถเลือกใบรับรองที่สอดคล้องกับตำแหน่งงานที่สนใจได้สูงสุด 6 รายการ</h2>
                <div class="Editresume-box-content1">
                    <div class="myresume-choose-certi11"></div>
                </div>
                <h5 class="you-choose-list-resume" id="you-choose-list-resume-certi1"></h5>
            </div>
        );
    }
}

export default Editresume3;