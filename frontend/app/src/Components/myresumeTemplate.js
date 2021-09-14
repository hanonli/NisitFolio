import React from 'react';
import './myresumeTemplate.css'

class MyResumeTemplate extends React.Component {
    render() {
        return (
            <div class="layout-template">

                <div class="template-header">
                    <h1 class="inline" id="text-choose-template">เลือกเทมเพลต</h1>
                    <h1 class="inline" id="text-display-info"><span id="span-text-display-info">></span> เลือกข้อมูลผู้ใช้ที่จะแสดง</h1>
                </div>

                <div class="template-content">
                    <h1 id="text-nothing">not found 404</h1>
                </div>

            </div>
        );
    }
}

export default MyResumeTemplate;