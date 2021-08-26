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