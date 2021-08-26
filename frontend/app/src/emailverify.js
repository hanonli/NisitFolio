import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Navbarlogo from './Components/navbarlogo';
import DataHeader from './Components/dataHeader';
import reportWebVitals from './reportWebVitals';
import { Link } from "react-router-dom";

/* NOT AVALIABLE TO TEST RIGHT NOW BC DONT HAVE PATH TO LINK WITH*/
class Emailverify extends React.Component {
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
					<h1 class="recheck-f">โปรดตรวจสอบการแจ้งเตือนที่อีเมลล์ของคุณเพื่อยืนยันตัวตน</h1>
					<div class="emailpic">
						<img class="img-fluid" data-bs-placement="top" title="ส่งอีเมลล์ยืนยันแล้ว" src="assets/images/mail.png" alt="" width="150" height="150"/>	
					</div>
					<Link to="/successregis">
						<div class="col">
							<a class="btn btn-cta-primary-yellowwideE round profile-button" href="#" target="_blank">ส่งใหม่อีกครั้ง</a>
						</div>
					</Link>
				</div>
			</div>
		);
	}
}

export default Emailverify;