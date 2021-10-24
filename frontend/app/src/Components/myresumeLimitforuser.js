import React from 'react';
import './myresumeNothing.css'
import { Link } from 'react-router-dom';
import cookie from "react-cookies";
import $ from 'jquery';

class MyResumeLimitforUser extends React.Component {
    componentDidMount() {
        $('#create-myResume').on('click', function () {
            cookie.save('Edit_tabselect', 6);
            window.location = ("editprofile");
        })
    }
    render() {
        return (
            <div class="layout-nothing">
                <div class="nothing-content">
                    <img src="assets/images/outline_cancel_black_24dp 1.png" width="250" />
                    <h1 id="text-nothing"> คุณไม่มีสิทธิ์ในการเข้าดู Myresume นี้ </h1>
                    {/* <button id="create-myResume" type="button" class="btn btn-cta-primary-yellowshort profile-button round" >เริ่มต้นสร้าง MyResume</button> */}
                </div>
            </div>
        );
    }
}

export default MyResumeLimitforUser;
