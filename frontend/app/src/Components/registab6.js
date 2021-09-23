import React from 'react';
import './register.css';
import './registab6.css';

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
				<div class="regis-box-content1">
					<h1 id="text-add-name-my-job11">เพิ่มตำแหน่งงานที่สนใจ</h1>
					<div class="list-of-job" id="in-list-of-job"></div>

					<div class="frame_add_job_interest">
						<div className="button_add_job_interest">
							<button id="add-job" type="button" class="btn">
								<img src="assets/images/+.png" width="57" height="57"></img>
							</button>
						</div>
					</div>


					<div class="modal fade" id="exampleModal_remove_job" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
						<div class="modal-dialog modal-dialog-centered">
							<div class="modal-content minisize">
								<h4 class="del-b">คุณต้องการลบเป้าหมายในการทำงานนี้ ?</h4>
								<div class="centerverify">
									<a id="hide-modal-delete" type="button" class="btn btn-cta-primary-svshort round profile-button grey margin-right-m" >ยกเลิก</a>
									<a id="summit-to-delete" type="button" class="btn btn-cta-primary-yellowshort profile-button round" >ลบ</a>
								</div>
							</div>
						</div>
					</div>

					<div class="modal fade" id="exampleModalJob" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
						<div class="modal-dialog modal-dialog-centered modal-xl">
							<div class="modal-content popup_JOB" >
								<div class="row head_modal_job">
									<div class="col-md-5">
										<h1 id="topic_pop">เพิ่มตำแหน่งงานที่สนใจ</h1>
									</div>
									<div class="col-md-5 select-job4">
										<select id="nm_job" class="form-select dropbtn-job4 margin-bottom-job4 fff" >
											<option selected disabled value="เลือกตำแหน่งงานหรืองานที่คุณสนใจ *">เลือกตำแหน่งงานหรืองานที่คุณสนใจ *</option>
										</select>
									</div>
								</div>

								<div className="tabPOP">
									<ul class="tabs_pop">
										<li class="tab-link_pop current2" id="prayut-nha-hee" data-toggle="tab" data-tab1="tab01" type="button">ทักษะของฉัน</li>
										<li class="tab-link_pop" data-tab1="tab02" type="button">เป้าหมายในการทำงาน</li>
									</ul>
								</div>

								<div className="contentOfModalJop">
									<div class="tab-contents_pop">
										<div class="tab-pane_pop current2" id="tab01">
											<div class="row list-job-skill1">
												<div class="col-md-5">
													<select id="each_skill1" class="form-select dropbtn_year margin-bottom1 fff"  >
														<option value="เลือกทักษะของคุณที่เหมาะกับงาน">เลือกทักษะของคุณที่เหมาะกับงาน</option>
													</select>
												</div>
												<div class="col-md-5">
													<div class="box-slider1">
														<div class="sliderWithLabels" id="mySlider1"></div>
													</div>
												</div>
											</div>

											<div class="row list-job-skill1">
												<div class="col-md-5">
													<select id="each_skill2" class="form-select dropbtn_year margin-bottom1 fff" >
														<option value="เลือกทักษะของคุณที่เหมาะกับงาน">เลือกทักษะของคุณที่เหมาะกับงาน</option>
													</select>
												</div>
												<div class="col-md-5">
													<div class="box-slider2">
														<div class="sliderWithLabels" id="mySlider2"></div>
													</div>
												</div>
											</div>

											<div class="row list-job-skill1">
												<div class="col-md-5">
													<select id="each_skill3" class="form-select dropbtn_year margin-bottom1 fff">
														<option value="เลือกทักษะของคุณที่เหมาะกับงาน">เลือกทักษะของคุณที่เหมาะกับงาน</option>
													</select>
												</div>
												<div class="col-md-5">
													<div class="box-slider3">
														<div class="sliderWithLabels" id="mySlider3"></div>
													</div>
												</div>
											</div>
										</div>

										<div class="tab-pane_pop" id="tab02">
											<div class="col-md-lg">
												<div class="contend-of-obj" >
													<div class="pos-del-obj-button" id="pos-del-obj-button1">
														<button type="button" class="btn del-obj-icon"><img src="assets/images/bin.png" width="25" height="25"></img></button>
													</div>
													<textarea maxlength="280" type="text" class="form-control dropbtn margin-bottom1 height-job1" id="obj-job-01" placeholder="พิมพ์เป้าหมายในการทำงานของคุณเพิ่ม" required></textarea>
												</div>
											</div>
											<div class="col-md-lg">
												<div class="contend-of-obj" >
													<div class="pos-del-obj-button" id="pos-del-obj-button2">
														<button type="button" class="btn del-obj-icon"><img src="assets/images/bin.png" width="25" height="25"></img></button>
													</div>
													<textarea maxlength="280" type="text" class="form-control dropbtn margin-bottom1 height-job2" id="obj-job-02" placeholder="พิมพ์เป้าหมายในการทำงานของคุณเพิ่ม" required></textarea>
												</div>
											</div>
											<div class="col-md-lg">
												<div class="contend-of-obj" >
													<div class="pos-del-obj-button" id="pos-del-obj-button3">
														<button type="button" class="btn del-obj-icon"><img src="assets/images/bin.png" width="25" height="25"></img></button>
													</div>
													<textarea maxlength="280" type="text" class="form-control dropbtn margin-bottom1 height-job3" id="obj-job-03" placeholder="พิมพ์เป้าหมายในการทำงานของคุณเพิ่ม" required></textarea>
												</div>

											</div>
										</div>

									</div>
								</div>


								<div className="button-add-job1">
									<button id="hide-modal-tab6" class="btn btn-cta-primary-svshort round profile-button grey margin-right-m" >ยกเลิก</button>
									<button id="submit-job11" type="submit" class="btn btn-cta-primary-yellowshort profile-button round" ></button>
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