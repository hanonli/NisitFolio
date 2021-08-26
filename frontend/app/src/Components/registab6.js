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
					
					<div class="frame_job" id="no-1">
						<div class="job-column-1">
							<h1 id="job-position">ตำแหน่งงานที่ 1</h1>
							<h1 id="job-name">สามกีบ</h1>
						</div>
						<div class="my-skill-content">
							<h1 id="mySkil-job">ทักษะของฉัน</h1>
							<div class="each-skill-job">
								<p id="skill1-job">ทักษะที่ 1</p>
								<p id="skill2-job">ทักษะที่ 2</p>
								<p id="skill3-job">ทักษะที่ 3</p>
							</div>
						</div>
						<div class="layer_icon">
							<button type="button" class="btn" data-bs-toggle="modal" data-bs-target="#exampleModalJob" id="edit-job"><img src="assets/images/blackedit.png" width="65" height="65"></img></button>
							<button type="button" class="btn" data-bs-toggle="modal" data-bs-target="#exampleModal_remove_job" id="del-job"><img src="assets/images/bin.png" width="90" height="90"></img></button>
						</div>
					</div>


					<div class="frame_add_job_interest">
						<div className="button_add_job_interest">
							<button id="add-job" type="button" class="btn" data-bs-toggle="modal" data-bs-target="#exampleModalJob">
								<img src="assets/images/+.png" width="115" height="115"></img>
							</button>
						</div>
					</div>



					<div class="modal fade" id="exampleModal_remove_job" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
						<div class="modal-dialog modal-dialog-centered">
							<div class="modal-content minisize">
								<h4 class="del-b">คุณต้องการลบเป้าหมายในการทำงานนี้ ?</h4>
								<div class="centerverify">
									<a type="button" class="btn btn-cta-primary-svshort round profile-button grey margin-right-m" data-bs-dismiss="modal">ยกเลิก</a>
									<a type="button" class="btn btn-cta-primary-yellowshort profile-button round" data-bs-dismiss="modal">ลบ</a>
								</div>
							</div>
						</div>
					</div>

					<div class="modal fade" id="exampleModalJob" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
						<div class="modal-dialog modal-dialog-centered modal-xl">
							<div class="modal-content popup_JOB" >

								<div class="row head_modal_job">
									<div class="col-md-5">
										<h1 id="topic_pop">เพิ่มงานที่สนใจ</h1>
									</div>
									<div class="col-md-5 select-job4">
										<select id="nm_job" class="form-select dropbtn-job4 margin-bottom-job4 fff" required>
											<option selected disabled value="">เลือกตำแหน่งงานหรืองานที่คุณสนใจ *</option>
											<option >โปรแกรมเมอร์</option>
											<option >บาร์เทนเนอร์</option>
											<option >ดีไซน์เนอร์</option>
											<option >นักแปลภาษา</option>
											<option >สลิ่ม</option>
											<option >สามกีบ</option>
										</select>
									</div>
								</div>

								<div className="tabPOP">
									<ul class="tabs_pop">
										<li class="tab-link_pop current2" data-tab1="tab01" type="button">ทักษะของฉัน</li>
										<li class="tab-link_pop" data-tab1="tab02" type="button">เป้าหมายในการทำงาน</li>
									</ul>
								</div>

								<div className="contentOfModalJop">
									<div class="tab-contents_pop">
										<div class="tab-pane_pop current2" id="tab01">

											<div class="row list-job-skill1">
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
													<div className="range-slider-job">
														<input type="range" class="slider x1" min="0" max="10" step="0.1" defaultValue="5" id="customRange11" />
													</div>
												</div>
											</div>

											<div class="row list-job-skill1">
												<div class="col-md-5">
													<select class="form-select dropbtn_year margin-bottom1 fff" id="each_skill2" required>
														<option selected disabled value="">เลือกทักษะของคุณที่เหมาะกับงาน</option>
														<option >ทักษะA</option>
														<option >ทักษะB</option>
														<option >ทักษะC</option>
														<option >ทักษะD</option>
													</select>
												</div>
												<div class="col-md-5">
													<div className="range-slider-job">
														<input type="range" class="slider x2" min="0" max="10" step="0.1" defaultValue="5" id="customRange12" />
													</div>
												</div>
											</div>

											<div class="row list-job-skill1">
												<div class="col-md-5">
													<select class="form-select dropbtn_year margin-bottom1 fff" id="each_skill3" required>
														<option selected disabled value="">เลือกทักษะของคุณที่เหมาะกับงาน</option>
														<option >ทักษะA</option>
														<option >ทักษะB</option>
														<option >ทักษะC</option>
														<option >ทักษะD</option>
													</select>
												</div>
												<div class="col-md-5">
													<div className="range-slider-job">
														<input type="range" class="slider x3" min="0" max="10" step="0.1" defaultValue="5" id="customRange13" />
														<div className="mark3">
															<label>ไม่ได้</label>
															<label>พอได้เล็กน้อย</label>
															<label>ดี</label>
															<label>ยอดเยี่ยม</label>
														</div>
													</div>
												</div>
											</div>
										</div>

										<div class="tab-pane_pop" id="tab02">
											<div class="col-md-lg">
												<div class="contend-of-obj">
													<div class="pos-del-obj-button">
														<button type="button" class="btn del-obj-icon"><img src="assets/images/bin.png" width="25" height="25"></img></button>
													</div>
													<textarea type="text" class="form-control dropbtn margin-bottom1 height-job" id="obj-job-01" placeholder="พิมพ์เป้าหมายในการทำงานของคุณเพิ่ม" required></textarea>
												</div>
											</div>
											<div class="col-md-lg">
												<div class="contend-of-obj">
													<div class="pos-del-obj-button">
														<button type="button" class="btn del-obj-icon"><img src="assets/images/bin.png" width="25" height="25"></img></button>
													</div>
													<textarea type="text" class="form-control dropbtn margin-bottom1 height-job" id="obj-job-02" placeholder="พิมพ์เป้าหมายในการทำงานของคุณเพิ่ม" required></textarea>
												</div>
											</div>
											<div class="col-md-lg">
												<div class="contend-of-obj">
													<div class="pos-del-obj-button">
														<button type="button" class="btn del-obj-icon"><img src="assets/images/bin.png" width="25" height="25"></img></button>
													</div>
													<textarea type="text" class="form-control dropbtn margin-bottom1 height-job" id="obj-job-03" placeholder="พิมพ์เป้าหมายในการทำงานของคุณเพิ่ม" required></textarea>
												</div>

											</div>
										</div>

									</div>
								</div>

								<div className="button-add-job1">
									<a type="button" class="btn btn-cta-primary-svshort round profile-button grey margin-right-m" data-bs-dismiss="modal">ยกเลิก</a>
									<button type="submit" id="submit-job11" class="btn btn-cta-primary-yellowshort profile-button round" data-bs-dismiss="modal">เพิ่ม</button>
								</div>

							</div>
						</div>
					</div>

				</div>
			</div >
		);
	}
}

export default Registab6;