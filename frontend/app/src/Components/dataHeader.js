/* THIS HEADER IS FOR DATA-EDITING, CAN'T LINK TO OTHER DATA PAGES*/
import React from 'react';
import { Link } from "react-router-dom";

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
										<Link to="/data1"><h2 class="btn-select btn-cta-primary-white inline" href="#" target="_blank">ข้อมูลสำคัญ</h2></Link>
										<Link to="/data2"><h2 class="btn-select btn-cta-primary-white inline" href="#" target="_blank">ข้อมูลเพิ่มเติม</h2></Link>
										<Link to="/data3"><h2 class="btn-select btn-cta-primary-white inline" href="#" target="_blank">ประวัติการศึกษา</h2></Link>
										<Link to="/data4"><h2 class="btn-select btn-cta-primary-white inline" href="#" target="_blank">ประวัติการทำงาน</h2></Link>
										<Link to="/data5"><h2 class="btn-select btn-cta-primary-white inline" href="#" target="_blank">ใบรับรอง</h2></Link>
										<Link to="/data6"><h2 class="btn-select btn-cta-primary-white inline" href="#" target="_blank">ทักษะ/งานที่สนใจ</h2></Link>
										<Link to="/data7"><h2 class="btn-select btn-cta-primary-white inline" href="#" target="_blank">เป้าหมายการทำงาน</h2></Link>
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