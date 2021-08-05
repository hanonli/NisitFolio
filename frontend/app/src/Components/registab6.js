import React from 'react';
import './register.css';
import './registab6.css';
import TabsJob from "./Tabs-job";


class Registab6 extends React.Component {

	componentDidMount() {
		window.addEventListener('load', this.handleLoad);
		const script = document.createElement("script");
		console.log("kuayPraYut");
		script.src = "assets/js/registab6_popup.js";
		document.body.appendChild(script);
	}

	render() {
		return (
			<div className="Registab6">
				<div class="regis-box-content">
					<div class="row" id="pos_card">
						<div class="frame_job">
							<button type="button" class="btn" data-bs-toggle="modal" data-bs-target="#exampleModal2">
								<img src="assets/images/+.png" width="50" height="50"></img>
							</button>
							<div class="layer_icon">
								<button type="button" class="btn" data-bs-toggle="modal" data-bs-target="#exampleModal2" id="img_icon"><img src="assets/images/blackedit.png" width="50" height="50"></img></button>
								<button type="button" class="btn" data-bs-toggle="modal" data-bs-target="#exampleModal2" id="img_icon"><img src="assets/images/bin.png" width="50" height="50"></img></button>
							</div>

						</div>
						<div class="frame_job">
							<button type="button" class="btn" data-bs-toggle="modal" data-bs-target="#exampleModal2">
								<img src="assets/images/+.png" width="50" height="50"></img>
							</button>
							<div class="layer_icon">
								<button type="button" class="btn" data-bs-toggle="modal" data-bs-target="#exampleModal2" id="img_icon"><img src="assets/images/blackedit.png" width="50" height="50"></img></button>
								<button type="button" class="btn" data-bs-toggle="modal" data-bs-target="#exampleModal2" id="img_icon"><img src="assets/images/bin.png" width="50" height="50"></img></button>
							</div>
						</div>
					</div>

					<div class="modal fade" id="exampleModal2" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
						<div class="modal-dialog modal-dialog-centered modal-xl">
							<div class="modal-content minisize" id="popup_JOB">
								<h1>เพิ่มงานที่สนใจ</h1>
								<ul class="tabs_pop">
									<li class="tab-link_pop current2" data-tab1="tab01">ทักษะของฉัน</li>
									<li class="tab-link_pop" data-tab1="tab02">เป้าหมายในการทำงาน</li>
								</ul>
								<div class="tab-contents_pop">
									<div class="tab-pane_pop" id="tab01">
										<h2>ควยประยุทธ์</h2>
										<select class="form-select dropbtn_year margin-bottom1 fff" id="each_skill1" required>
											<option selected disabled value="">เลือกทักษะของคุณที่เหมาะกับงาน</option>
											<option >ซิโนแวค</option>
											<option >แอสตร้า</option>
											<option >หมอยง</option>
											<option >ไฟเซอร์</option>
										</select>
									</div>
									<div class="tab-pane_pop" id="tab02">
										<h2>ควยอนุทิน</h2>
										<select class="form-select dropbtn_year margin-bottom1 fff" id="each_skill2" required>
											<option selected disabled value="">เลือกทักษะของคุณที่เหมาะกับงาน</option>
											<option >ซิโนแวค</option>
											<option >แอสตร้า</option>
											<option >หมอยง</option>
											<option >ไฟเซอร์</option>
										</select>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Registab6;