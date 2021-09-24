import React from 'react';
import Navbar from './navbar';
import './myresumeTemplate.css'

class MyResumeTemplate extends React.Component {
    render() {
        return (
            <div class="myresumeTemplate">
                <Navbar />
                <div class="layout-template">
                    
                    <div class="template-header">
                        <h1 class="inline" id="text-choose-template">เลือกเทมเพลต</h1>
                        <h1 class="inline" id="text-display-info"><span id="span-text-display-info">></span> เลือกข้อมูลผู้ใช้ที่จะแสดง</h1>
                    </div>

                    <div class="template-content">
                        <div class="choose-color-template11">
                            <h1 id="text-choose-color-template11">เลือกสีที่เข้ากันและบ่งบอกถึงตัวคุณ</h1>
                            <div class="grid-choose-template">
                                <div id="red-template1" class="choose-template-color" ><h1 id="text-red-template1">แดง</h1></div>
                                <div id="orange-template1" class="choose-template-color user-choose-template"><h1>ส้ม</h1></div>
                                <div id="yellow-template1" class="choose-template-color"><h1>เหลือง</h1></div>
                                <div id="green-template1" class="choose-template-color"><h1>เขียว</h1></div>
                                <div id="lightblue-template1" class="choose-template-color"><h1>ฟ้า</h1></div>
                            </div>
                        </div>
                    </div>

                </div>                
            </div>

        );
    }
}

export default MyResumeTemplate;