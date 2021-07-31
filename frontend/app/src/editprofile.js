import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Navbar from './Components/navbar';
import DataHeader from './Components/dataHeader';
import reportWebVitals from './reportWebVitals';
import Tabs from "./Components/Tabs"; 

/* THIS FILE IS FOR DATA-EDITING TEST, CAN'T LINK TO OTHER DATA PAGES*/
class Editprofile extends React.Component {
	render (){
		return (
			<div className="Editprofile">
				<Navbar />
				<header class="header-white">
					<h1 class="topData2-content name">แก้ไขโปรไฟล์</h1>
				</header>
				<div>
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
							After 'while, <em>Crocodile</em>! 
						</div> 
						<div label="ประวัติการทำงาน">
							<div class="content-form-block">
								<h1>Nothing to see here</h1>
							</div>
						</div> 
						<div label="ประวัติการศึกษา"> 
							Nothing to see here, this tab is <em>extinct</em>! 
						</div> 

						<div label="ใบรับรอง"> 
							Nothing to see here, this tab is <em>extinct</em>! 
						</div> 
						<div label="งานที่สนใจ"> 
							Nothing to see here, this tab is <em>extinct</em>! 
						</div>
						<div label="ทักษะเสริม"> 
							Nothing to see here, this tab is <em>extinct</em>! 
						</div> 
					</Tabs> 
				</div>
				<div class="col block-right">
					<a class="btn btn-cta-primary-yellow round profile-button" href="#" target="_blank">ยืนยันการแก้ไข</a>
				</div>
			</div>
		);
	}
}

export default Editprofile;