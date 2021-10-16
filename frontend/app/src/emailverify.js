import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Navbarlogo from './Components/navbarlogo';
import DataHeader from './Components/dataHeader';
import reportWebVitals from './reportWebVitals';
import { Link } from "react-router-dom";
import $ from "jquery";
import cookie from "react-cookies";

class Emailverify extends React.Component {

	componentDidMount() {
		/*window.addEventListener('load', this.handleLoad);
		console.log("YEAHXXX!");
		const scripointer = document.createElement("scripointer");
		scripointer.src = "assets/js/register2.js";
		document.body.appendChild(scripointer);
		*/
    $('#resendEmail').on('click',function(){
      var EmailtoResend = cookie.load('Email-verify');
			const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ Email: EmailtoResend })
      };
      fetch('http://localhost:2000/resend-confirmation-link', requestOptions)
        .then(function (response) {
          if (!response.ok) {
            console.log(EmailtoResend);
            alert('Resend fail');
          }
          else{
            alert('Resend success');
          }
        })
		});
	}

	render (){
		return (
			<div className="Emailverify">
				<Navbarlogo />
				<div className="DataHeader">
					<header class="header-white">
						<div class="container">     
							<div class="row align-items-end">
								<div class="col">
									<div class="topData2-content">
										<h1 class="name inline">ยืนยันตัวตน</h1>
										<h1 class="symbol inline">></h1>
										<h1 class="name2 inline">เสร็จสิ้น</h1>
									</div>
								</div>
							</div>        
						</div>
					</header>
				</div>
				<div class="centerverify">
					<h1 class="recheck-f">โปรดตรวจสอบการแจ้งเตือนที่อีเมลของคุณเพื่อยืนยันตัวตน</h1>
					<div class="emailpic">
						<img class="img-fluid" data-bs-placement="top" title="ส่งอีเมลยืนยันแล้ว" src="assets/images/mail.png" alt="" width="150" height="150"/>	
					</div>
					<div class="col">
						<h5 class='form-b24'>หากไม่ได้รับอีเมลในการยืนยัน</h5>
						<a class="btn btn-cta-primary-yellowwideE round profile-button" id='resendEmail' target="_blank">ส่งใหม่อีกครั้ง</a>
					</div>
				</div>
			</div>
		);
	}
}

export default Emailverify;
