import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Navbarlogo from './Components/navbarlogo';
import reportWebVitals from './reportWebVitals';
import { Link } from "react-router-dom";
import cookie from 'react-cookies';
import $ from 'jquery';
import {Redirect} from 'react-router-dom';

/* NOT AVALIABLE TO TEST RIGHT NOW BC DONT HAVE PATH TO LINK WITH*/
class Failregis extends React.Component {
	constructor(props){
		super(props);
	}
	
	componentDidMount() {
		// Simple POST request with a JSON body using fetch
        /*
		let params = new URLSearchParams(document.location.search.substring(1));
		let token = params.get("token");
		//cookie.save('login-token',token);
		console.log(token);
		const requestOptions = {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ token: token })
		};
		fetch('http://localhost:2000/email-confirmation/confirm', requestOptions)
			.then(response => response.json())
			.then(data => this.setState({ postId: data.id }));
		//setInterval(window.location = "http://localhost:3000/landing", 5000);  
        */
        $('#resendEmail').on('click',function(){
			alert('This feature is now unavaliable! be patient');
			<Redirect  to="/landing" />
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
						<a class="btn btn-cta-primary-yellowwideE round profile-button" href="#" id='resendEmail' target="_blank">ส่งใหม่อีกครั้ง</a>
					</div>
				</div>
			</div>
		);
	}
}

export default Failregis;