import React from 'react';
import Navbar from './navbar';
import './myresumeTemplate.css'

class MyResumeTemplate extends React.Component {
    render() {
        return (
            <div class="layout-template">
                <Navbar />
                <div class="template-header">
                    <h1 class="inline" id="text-choose-template">เลือกเทมเพลต</h1>
                    <h1 class="inline" id="text-display-info"><span id="span-text-display-info">></span> เลือกข้อมูลผู้ใช้ที่จะแสดง</h1>
                </div>

                <div class="template-content">
                    <div class="choose-color-template11">
                        <h1 id="text-choose-color-template11">เลือกสีที่เข้ากันและบ่งบอกถึงตัวคุณ</h1>
                        <div class="choose-template-red1"></div>
                        <br />
                        <div class="choose-template-red1 user-choose-template"></div>
                    </div>
                </div>

            </div>
        );
    }
}

export default MyResumeTemplate;