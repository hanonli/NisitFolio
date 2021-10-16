import React from 'react';
import { Link } from 'react-router-dom';
import './myresumeNothing.css'

class MyResumeNothing1 extends React.Component {
    render() {
        return (
            <div class="layout-nothing">
                <div class="nothing-content">
                    <img src="assets/images/outline_cancel_black_24dp 1.png" width="250" />
                    <h1 id="text-nothing">ตอนนี้คุณยังไม่มีตำแหน่งงานเพื่อแสดงผล MyResume</h1>
                    <Link to="/editresume">
                        <button id="create-myResume" type="button" class="btn btn-cta-primary-yellowshort profile-button round" >เพิ่มตำแหน่งงานที่สนใจ</button>
                    </Link>
                </div>
            </div>
        );
    }
}

export default MyResumeNothing1;
