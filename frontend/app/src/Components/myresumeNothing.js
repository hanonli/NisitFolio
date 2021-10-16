import React from 'react';
import './myresumeNothing.css'
import { Link } from 'react-router-dom';
import cookie from "react-cookies";
import $ from 'jquery';

class MyResumeNothing extends React.Component {
    componentDidMount() {
        $('#goToeditProfile').on('click', function () {
            cookie.save('Edit_tabselect', 6);
            window.location = ("editprofile");
        })
    }
    render() {
        return (
            <div class="layout-nothing">
                <div class="nothing-content">
                    <img src="assets/images/outline_cancel_black_24dp 1.png" width="250" />
                    <h1 id="text-nothing">ตอนนี้คุณยังไม่มีหน้า MyResume สำหรับตำแหน่งงานที่ 1</h1>
                    <button id="create-myResume" type="button" data-bs-toggle="modal" data-bs-target="#exampleModal_createResume" class="btn btn-cta-primary-yellowshort profile-button round" >เริ่มต้นสร้าง MyResume</button>
                </div>

                <div class="modal fade" id="exampleModal_createResume" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered">
                        <div class="modal-content minisize">
                            <h4 class="del-b">คุณยังไม่มีตำแหน่งงานที่ต้องการ<br />ต้องการเพิ่มตอนนี้เลยหรือไม่?</h4>
                            <div class="centerverify">
                                <a type="button" class="btn btn-cta-primary-svshort round profile-button grey margin-right-m" data-bs-dismiss="modal">ยกเลิก</a>
                                <a type="button" class="btn btn-cta-primary-yellowshort profile-button round" target="_blank" id="goToeditProfile">เพิ่ม</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default MyResumeNothing;
