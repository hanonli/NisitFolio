import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Navbarlogo from './Components/navbarlogo';
import reportWebVitals from './reportWebVitals';
import { Link } from "react-router-dom";
import cookie from 'react-cookies';

/* NOT AVALIABLE TO TEST RIGHT NOW BC DONT HAVE PATH TO LINK WITH*/
class Successregis extends React.Component {
	constructor(props){
		super(props);
	}
	
	componentDidMount() {
		// Simple POST request with a JSON body using fetch
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
			.then(function (response) {
				if (!response.ok) {
					window.location = "http://localhost:3000/failregis";
				}
			})
			.then(data => this.setState({ postId: data.id }));
		//setInterval(window.location = "http://localhost:3000/landing", 5000);  
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
									    <h1 class="name inline">เสร็จสิ้น</h1>
                                    </div>
                                </div>
							</div>        
						</div>
					</header>
				</div>
				<div class="centersuccess">
					<img class="img-fluid successregispic margin-bottom1" data-bs-placement="top" title="ยืนยันตัวตนสำเร็จแล้ว" src="assets/images/check-mark.png" alt="" width="150" height="150"/>	
					<h1 class="successregis-f margin-bottom1">ท่านได้ทำการยืนยันตัวตนผ่านอีเมลสำเร็จ กรุณา <a>เข้าสู่ระบบ</a></h1>
					<div class="col">
						<a class="btn btn-cta-primary-yellowshort round profile-button" href="/landing" id='gotohome' target="_blank">เข้าสู่ระบบ</a>
					</div>
				</div>
			</div>
		);
	}
}

export default Successregis;