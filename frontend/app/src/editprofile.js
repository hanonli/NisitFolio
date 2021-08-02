import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Navbar from './Components/navbar';
import DataHeader from './Components/dataHeader';
import reportWebVitals from './reportWebVitals';
import Tabs from "./Components/Tabs"; 
import { Link } from "react-router-dom";

/* THIS FILE IS FOR DATA-EDITING TEST, CAN'T LINK TO OTHER DATA PAGES*/
class Editprofile extends React.Component {
	render (){
		return (
			<div className="Editprofile">
				<Navbar />
				<DataHeader />
				<Tabs> 
					<div label="ข้อมูลสำคัญ"> 
						<div class="container-fluid">
							<div class="container-search">
								<form class="d-flex inline">
									<input class="form-control silver" type="form" placeholder="ชื่อ*" aria-label="Name"/>
									<input class="form-control silver" type="form" placeholder="นามสกุล*" aria-label="Surname"/>
								</form>
								<form class="">
									<input class="form-control silver" type="form" placeholder="อีเมล*" aria-label="Email"/>
									<input class="form-control silver" type="form" placeholder="รหัสผ่าน*" aria-label="Password"/>
									<input class="form-control silver" type="form" placeholder="ยืนยันรหัสผ่าน*" aria-label="Confirmpassword"/>
								</form>
							</div>
						</div>
					</div> 
					<div label="ข้อมูลเพิ่มเติม"> 
						<h1>Rungry Jang</h1>
					</div> 
					<div label="ประวัติการทำงาน">
						<h1>P kung</h1>
					</div> 
					<div label="ประวัติการศึกษา"> 
						<h1>P kung</h1>
					</div> 
					<div label="ใบรับรอง"> 
						<h1>Pluem kung</h1>
					</div> 
					<div label="งานที่สนใจ"> 
						<h1>Pluem kung</h1>
					</div>
					<div label="ทักษะเสริม"> 
						<h1>Rungry Jang</h1>
					</div> 
				</Tabs> 
				<Link to="/home">
					<div class="col block-right">
						<a class="btn btn-cta-primary-yellowwide round profile-button" href="#" target="_blank">ยืนยันตัวตน</a>
					</div>
				</Link>
			</div>
		);
	}
}

export default Editprofile;