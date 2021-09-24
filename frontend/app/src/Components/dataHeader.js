/* THIS HEADER IS FOR DATA-EDITING, CAN'T LINK TO OTHER DATA PAGES*/
import React from 'react';
import Registab1 from "./registab1";
import Registab2 from "./registab2";
import Registab3 from "./registab3";
import Registab4 from "./registab4";
import Registab5 from "./registab5";
import Registab6 from "./registab6";
import Registab7 from "./registab7";

class DataHeader extends React.Component {

	componentDidMount() {
		window.addEventListener('load', this.handleLoad);
		console.log("YEAHXXX!");
		const script = document.createElement("script");
		script.src = "assets/js/register.js";
		document.body.appendChild(script);
		
	}
	render (){
		return (
			<div className="DataHeader">
				<header class="header-white">
					<div class="container">     
						<div class="row align-items-end">
							<div class="col">
								<div class="topData2-content">
									<h1 class="name">ข้อมูลผู้ใช้</h1>
									<h1></h1>
								</div>
							</div>
						</div>        
					</div>
				</header>
				<ol class="tabs-list">
                    <li class="tab-list-item tab-list-active" id="tab-1" type="button">ข้อมูลสำคัญ</li>
                    <li class="tab-list-item" id="tab-2" type="button">ข้อมูลเพิ่มเติม</li>
                    <li class="tab-list-item" id="tab-3" type="button">ประวัติการศึกษา</li>
					<li class="tab-list-item" id="tab-4" type="button">ประวัติการทำงาน</li>
					<li class="tab-list-item" id="tab-5" type="button">ใบรับรอง</li>
					<li class="tab-list-item" id="tab-6" type="button">งานที่สนใจ</li>
					<li class="tab-list-item" id="tab-7" type="button">ทักษะเสริม</li>
                 </ol>
				 <div>
					<div class="tab-content" id="registab1-content">
						<Registab1 />
					</div>
					<div class="tab-content" id="registab2-content">
						<Registab2 />
					</div>
					<div class="tab-content" id="registab3-content">
						<Registab3 />
					</div>
					<div class="tab-content" id="registab4-content">
						<Registab4 />
					</div>
					<div class="tab-content" id="registab5-content">
						<Registab5 />
					</div>
					<div class="tab-content" id="registab6-content">
						<Registab6 />
					</div>
					<div class="tab-content" id="registab7-content">
						<Registab7 />
					</div>
				 </div>
			</div>
		);
	}
}

export default DataHeader;