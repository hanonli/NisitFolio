import React from 'react';

class DataHeader extends React.Component {
	render (){
		return (
			<div className="DataHeader">
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
										<h2 class="btn-select btn-cta-primary-white inline" href="#" target="_blank">ข้อมูลสำคัญ<i class="fas fa-pencil-alt"></i></h2>
										<h2 class="btn-select btn-cta-primary-white inline" href="#" target="_blank">ข้อมูลเพิ่มเติม</h2>
										<h2 class="btn-select btn-cta-primary-white inline" href="#" target="_blank">ประวัติการศึกษา</h2>
										<h2 class="btn-select btn-cta-primary-white inline" href="#" target="_blank">ประวัติการทำงาน</h2>
										<h2 class="btn-select btn-cta-primary-white inline" href="#" target="_blank">ใบรับรอง</h2>
										<h2 class="btn-select btn-cta-primary-white inline" href="#" target="_blank">ทักษะ/งานที่สนใจ</h2>
										<h2 class="btn-select btn-cta-primary-white inline" href="#" target="_blank">เป้าหมายการทำงาน</h2>	
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

export default DataHeader;