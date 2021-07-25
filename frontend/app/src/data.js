import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Navbar from './Components/navbar';
import DataHeader from './Components/dataHeader';
import reportWebVitals from './reportWebVitals';
import Tabs from "./Components/Tabs"; 

/* THIS FILE IS FOR DATA-EDITING TEST, CAN'T LINK TO OTHER DATA PAGES*/
class Data extends React.Component {
	render (){
		return (
			<div className="Data">
				<Navbar />
				<div>
					<h1 class="topData2-content name">แก้ไขโปรไฟล์</h1>
					<Tabs> 
						<div label="ข้อมูลสำคัญ"> 
							See ya later, <em>Alligator</em>! 
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
					<a class="btn btn-cta-primary-yellow round" href="#" target="_blank">ยืนยันการแก้ไข</a>
				</div>
			</div>
		);
	}
}

export default Data;