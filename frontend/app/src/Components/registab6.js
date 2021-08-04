import React from 'react';
import './register.css';
import './registab6.css';


class Registab6 extends React.Component {

	componentDidMount() {
		window.addEventListener('load', this.handleLoad);
		const script = document.createElement("script");
		console.log("kuay");
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

								<ol class="tabs-list-job">
									<li class="tab-list-item-job tab-list-active-job" id="tab-1-job" type="button">ข้อมูลสำคัญ</li>
									<li class="tab-list-item-job" id="tab-2-job" type="button">ข้อมูลเพิ่มเติม</li>
								</ol>

								<div>
									<div class="tab-content-job" id="registab1-content-job">

									</div>
									<div class="tab-content-job" id="registab2-content-job">

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