import React, { useState } from 'react';
import cookie from 'react-cookies';
import $ from 'jquery';
import './register.css';
import './registab5.css';
import './chooseresume3.css';


class Editresume2 extends React.Component {
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
            <div className="Registab4">
                <h2 class="head-of-choose-resume-tab2">คุณสามารถเลือกประวัติการทำงานที่สอดคล้องกับตำแหน่งงานที่สนใจได้สูงสุด 3 รายการ</h2>
                <div class="Editresume-box-content1">
                    <div class="myresume-choose-work11">
                    </div>
                </div>
                <h5 class="you-choose-list-resume" id="you-choose-list-resume-work11"></h5>
            </div>
        );
    }
}

export default Editresume2;