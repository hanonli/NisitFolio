import React from 'react';
import './register.css';
import './registab6.css';
import TabsJob from "./Tabs-job";


class Registab6 extends React.Component {

	/*componentDidMount() {
		window.addEventListener('load', this.handleLoad);
		const script = document.createElement("script");
		console.log("kuayPraYut");
		script.src = "assets/js/registab6_popup.js";
		document.body.appendChild(script);
	}*/

	render() {
		return (
			<div className="Registab6">
				<div class="regis-box-content">
					<div class="row" id="pos_card">
						<div class="frame_job">
							<button type="button" class="btn" data-bs-toggle="modal" data-bs-target="#exampleModal2">
								<img src="assets/images/+.png" width="50" height="50"></img>
							</button>
						</div>
						<div class="frame_job">
							<button type="button" class="btn" data-bs-toggle="modal" data-bs-target="#exampleModal2">
								<img src="assets/images/+.png" width="50" height="50"></img>
							</button>
						</div>
					</div>

					<div class="modal fade" id="exampleModal2" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
						<div class="modal-dialog modal-dialog-centered modal-xl">
							<div class="modal-content minisize" id="popup_JOB">
								<h1>เพิ่มงานที่สนใจ</h1>
								<ol class="tabs-list2">
									<li class="tab-list-item tab-list-active" id="tab-11" type="button">ทักษะของฉัน</li>
									<li class="tab-list-item" id="tab-12" type="button">เป้าหมายในการทำงาน</li>
								</ol>

								<div>
									<div class="tab-content" id="tabP1-content">

									</div>
									<div class="tab-content" id="tabP2-content">

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