import React from 'react';
import { Link } from "react-router-dom";

class informationHeader extends React.Component {
	render (){
		return (
			<div className="informationHeader">
				<header class="header-white">
					<div class="container">     
						<div class="row align-items-end">
							<div class="col">
								<div class="topData2-content">
									<h1 class="name inline">ข้อมูลผู้ใช้</h1>
									<h1 class="symbol inline">></h1>
									<h1 class="name2 inline">ยืนยันตัวตน</h1>
									<h1 class="symbol inline">></h1>
									<h1 class="name2 inline">เสร็จสิ้น</h1>
									<h1></h1>
									<div>
										<Link to="/information1"><h2 class="btn-select btn-cta-primary-white inline" href="#" target="_blank">ข้อมูลสำคัญ</h2></Link>
										<Link to="/information2"><h2 class="btn-select btn-cta-primary-white inline" href="#" target="_blank">ข้อมูลเพิ่มเติม</h2></Link>
										<Link to="/information3"><h2 class="btn-select btn-cta-primary-white inline" href="#" target="_blank">ประวัติการศึกษา</h2></Link>
										<Link to="/information4"><h2 class="btn-select btn-cta-primary-white inline" href="#" target="_blank">ประวัติการทำงาน</h2></Link>
										<Link to="/information5"><h2 class="btn-select btn-cta-primary-white inline" href="#" target="_blank">ใบรับรอง</h2></Link>
										<Link to="/information6"><h2 class="btn-select btn-cta-primary-white inline" href="#" target="_blank">ทักษะ/งานที่สนใจ</h2></Link>
										<Link to="/information7"><h2 class="btn-select btn-cta-primary-white inline" href="#" target="_blank">เป้าหมายการทำงาน</h2></Link>
									</div>
								</div>
							</div>
						</div>        
					</div>
				</header>
			</div>
		);
	}
}

export default informationHeader;