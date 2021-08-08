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
							<div class="layer_icon">
								<button type="button" class="btn" data-bs-toggle="modal" data-bs-target="#exampleModal22" id="img_icon"><img src="assets/images/blackedit.png" width="75" height="75"></img></button>
								<button type="button" class="btn" data-bs-toggle="modal" data-bs-target="#exampleModal_remove_job" id="img_icon"><img src="assets/images/bin.png" width="95" height="95"></img></button>
							</div>
						</div>
						<div class="frame_job">
							<div class="layer_icon">
								<button type="button" class="btn" data-bs-toggle="modal" data-bs-target="#exampleModal22" id="img_icon"><img src="assets/images/blackedit.png" width="75" height="75"></img></button>
								<button type="button" class="btn" data-bs-toggle="modal" data-bs-target="#exampleModal_remove_job" id="img_icon"><img src="assets/images/bin.png" width="95" height="95"></img></button>
							</div>
						</div>
						<div class="frame_add_job_interest">
							<div className="button_add_job_interest">
								<button type="button" class="btn" data-bs-toggle="modal" data-bs-target="#exampleModal22">
									<img src="assets/images/+.png" width="115" height="115"></img>
								</button>
							</div>
						</div>
					</div>

					<div class="modal fade" id="exampleModal_remove_job" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
						<div class="modal-dialog modal-dialog-centered">
							<div class="modal-content minisize">
								<h4 class="del-b">คุณต้องการลบเป้าหมายในการทำงานนี้ ?</h4>
								<div class="centerverify">
									<a type="button" class="btn btn-cta-primary-svshort round profile-button grey margin-right-m" data-bs-dismiss="modal">ยกเลิก</a>
									<a type="button" class="btn btn-cta-primary-yellowshort profile-button round">ลบ</a>
								</div>
							</div>
						</div>
					</div>

					<div class="modal fade" id="exampleModal22" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
						<div class="modal-dialog modal-dialog-centered modal-xl">
							<div class="modal-content popup_JOB" >
								<h1 id="topic_pop">เพิ่มงานที่สนใจ</h1>
								<select class="form-select dropbtn_year margin-bottom1 fff" id="each_skill1" required>
									<option selected disabled value="">เลือกตำแหน่งงานหรืองานที่คุณสนใจ *</option>
									<option >โปรแกรมเมอร์</option>
									<option >บาร์เทนเนอร์</option>
									<option >ดีไซน์เนอร์</option>
									<option >นักแปลภาษา</option>
								</select>

								<div className="tabPOP">
									<ul class="tabs_pop">
										<li class="tab-link_pop current2" data-tab1="tab01" type="button">ทักษะของฉัน</li>
										<li class="tab-link_pop" data-tab1="tab02" type="button">เป้าหมายในการทำงาน</li>
									</ul>
								</div>

								<div className="contentOfModalJop">
									<div class="tab-contents_pop">
										<div class="tab-pane_pop current2" id="tab01">
											<div class="row">
												<div class="col-md-5">
													<select class="form-select dropbtn_year margin-bottom1 fff" id="each_skill1" required>
														<option selected disabled value="">เลือกทักษะของคุณที่เหมาะกับงาน</option>
														<option >ทักษะA</option>
														<option >ทักษะB</option>
														<option >ทักษะC</option>
														<option >ทักษะD</option>
													</select>
												</div>
												<div class="col-md-5">
													<input type="range" class="form-control-range" min="0" max="10" id="customRange11" />
												</div>
											</div>

											<div class="row">
												<div class="col-md-5">
													<select class="form-select dropbtn_year margin-bottom1 fff" id="each_skill1" required>
														<option selected disabled value="">เลือกทักษะของคุณที่เหมาะกับงาน</option>
														<option >ทักษะA</option>
														<option >ทักษะB</option>
														<option >ทักษะC</option>
														<option >ทักษะD</option>
													</select>
												</div>
												<div class="col-md-5">
													<input type="range" class="form-control-range" min="0" max="10" id="customRange11" />
												</div>
											</div>

											<div class="row">
												<div class="col-md-5">
													<select class="form-select dropbtn_year margin-bottom1 fff" id="each_skill1" required>
														<option selected disabled value="">เลือกทักษะของคุณที่เหมาะกับงาน</option>
														<option >ทักษะA</option>
														<option >ทักษะB</option>
														<option >ทักษะC</option>
														<option >ทักษะD</option>
													</select>
												</div>
												<div class="col-md-5">
													<input type="range" class="form-control-range" min="0" max="10" id="customRange11" />
												</div>
											</div>
										</div>
										<div class="tab-pane_pop" id="tab02">
											<div class="col-md-lg">
												<textarea type="text" class="form-control dropbtn margin-bottom1" id="03" placeholder="พิมพ์เป้าหมายในการทำงานของคุณเพิ่ม" required></textarea>
											</div>
											<div class="col-md-lg">
												<textarea type="text" class="form-control dropbtn margin-bottom1" id="03" placeholder="พิมพ์เป้าหมายในการทำงานของคุณเพิ่ม" required></textarea>
											</div>
											<div class="col-md-lg">
												<textarea type="text" class="form-control dropbtn margin-bottom1" id="03" placeholder="พิมพ์เป้าหมายในการทำงานของคุณเพิ่ม" required></textarea>
											</div>
										</div>
									</div>
								</div>

								<div class="col-md-10">
									<a type="button" class="btn btn-cta-primary-svshort round profile-button grey margin-right-m" data-bs-dismiss="modal">ยกเลิก</a>
									<a type="button" class="btn btn-cta-primary-yellowshort profile-button round">เพิ่ม</a>
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