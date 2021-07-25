/* THIS HEADER IS FOR DATA-EDITING, CAN'T LINK TO OTHER DATA PAGES*/
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
									<div>
										<h2 class="btn-select btn-cta-primary-white inline" href="#" target="_blank">ข้อมูลสำคัญ</h2>
										<h2 class="btn-select btn-cta-primary-white inline" href="#" target="_blank">ข้อมูลเพิ่มเติม</h2>
										<h2 class="btn-select btn-cta-primary-white inline" href="#" target="_blank">ประวัติการศึกษา</h2>
										<h2 class="btn-select btn-cta-primary-white inline" href="#" target="_blank">ประวัติการทำงาน</h2>
										<h2 class="btn-select btn-cta-primary-white inline" href="#" target="_blank">ใบรับรอง</h2>
										<h2 class="btn-select btn-cta-primary-white inline" href="#" target="_blank">งานที่สนใจ</h2>
										<h2 class="btn-select btn-cta-primary-white inline" href="#" target="_blank">ทักษะเสริม</h2>
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