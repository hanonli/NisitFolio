import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Navbarlogo from './Components/navbarlogo';
import reportWebVitals from './reportWebVitals';
import { Link } from "react-router-dom";
import cookie from 'react-cookies';
import $ from 'jquery';
import {Redirect} from 'react-router-dom';

class Failregis extends React.Component {
	constructor(props){
		super(props);
	}
	
	componentDidMount() {
        $('#resendEmail').on('click',function(){
			var EmailtoResend = cookie.load('Email-verify');
			const EmailtoResends = {
			  method: 'POST',
			  headers: { 'Content-Type': 'application/json' },
			  body: JSON.stringify({ Email: EmailtoResend })
			};
			fetch('http://localhost:2000/resend-confirmation-link', EmailtoResends)
			  .then(function (response) {
				if (!response.ok) {
				console.log(EmailtoResend);
				  alert('Resend fail');
				}
				else{
				  alert('Resend success');
				}
			  }).catch((error) => {
				console.log('Token Error!');
				console.log(EmailtoResend);
			});
			  });
	}

	render (){
		return (
			<div className="Successregis">
				<Navbarlogo />
				<div className="DataHeader">
					<header class="header-white">
						<div class="container">     
							<div class="row align-items-end">
								<div class="col">
                                    <div class="topData2-content">
									    <h1 class="name inline">ยืนยันตัวตนไม่สำเร็จ</h1>
                                    </div>
                                </div>
							</div>        
						</div>
					</header>
				</div>
				<div class="centerfail">
					<img class="img-fluid successregispic margin-bottom1" data-bs-placement="top" title="ยืนยันตัวตนสำเร็จแล้ว" src="assets/images/cross_icon.png" alt="" width="150" height="150"/>	
					<h1 class="successregis-f">ขออภัย ลิงก์ที่ท่านคลิกได้หมดอายุแล้ว</h1>
                    <h1 class="failregis-f margin-bottom1">กรุณากด <a>ส่งใหม่อีกครั้ง</a> เพื่อรับอีเมลในการยืนยันตัวตนใหม่</h1>
                    <h1 class="successregis-f margin-bottom1 ">โปรดตรวจสอบการแจ้งเตือนที่อีเมลของคุณเพื่อยืนยันตัวตน</h1>
					<div class="col failgap">
						<h5 class='form-b24'>หากไม่ได้รับอีเมลในการยืนยัน</h5>
						<a class="btn btn-cta-primary-yellowwideE round profile-button" id='resendEmail' target="_blank">ส่งใหม่อีกครั้ง</a>
					</div>
				</div>
			</div>
		);
	}
}

export default Failregis;