import React from 'react';
import './register.css';
import './registab5.css';

class Registab5 extends React.Component {

	componentDidMount() {
		window.addEventListener('load', this.handleLoad);
		const script = document.createElement("script");
		script.src = "assets/js/registab5.js";
		document.body.appendChild(script);
	}

	render() {
		return (
			<div className="Registab5">
				<div class="regis-box-content">

					<div class="frame_add_certi">
						<div className="button_add_certi">
							<button id="add-certi" type="button" class="btn" data-bs-toggle="modal" data-bs-target="#exampleModal11112">
								<img src="assets/images/+.png" width="115" height="115"></img>
							</button>
						</div>
					</div>

					<div class="box-box-box">

					</div>


					<div class="modal fade" id="exampleModal_remove_certi" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
						<div class="modal-dialog modal-dialog-centered">
							<div class="modal-content minisize">
								<h4 class="del-b">คุณต้องการลบใบรับรองนี้ ?</h4>
								<div class="centerverify">
									<a id="hide-delete-certi" type="button" class="btn btn-cta-primary-svshort round profile-button grey margin-right-m">ยกเลิก</a>
									<a id="summit-to-delete-certi" type="button" class="btn btn-cta-primary-yellowshort profile-button round">ลบ</a>
								</div>
							</div>
						</div>
					</div>

					<div class="modal fade" id="exampleModal11112" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
						<div class="modal-dialog modal-dialog-centered modal-lg">
							<div class="modal-content minisize" id="certi_edit">
								<div class="row" id="input_certi">
									<div class="col-md-5">
										<textarea id="nm_certi" type="text" class="form-control certibtn margin-bottom1" placeholder="พิมพ์ชื่อใบรับรอง/เกียรติบัตร*" required></textarea>
									</div>
									<div class="col-md-10">
										<select class="form-select dropbtn_year margin-bottom1 fff" id="yearpicker_111" required>
											<option selected disabled value="0">ปี*</option>
										</select>
									</div>
								</div>
								<div class="row" id="input_upload">
									<input id="image-upload112" accept="image/png, image/jpeg, image/jpg" class="hidden" type="file"></input>
									<div className="bg_upload" id="to_upload112">
										<div className="for_upload112" id="to_upload116"></div>
									</div>

									<div className="button_popup_certi">
										<a type="button" id="hide-modal-certi" class="btn btn-cta-primary-svshort round profile-button grey margin-right-m" >ยกเลิก</a>
										<a id="submit-certi" type="submit" id="submit-certi" class="btn btn-cta-primary-yellowshort profile-button round" >เพิ่ม</a>
									</div>

								</div>
							</div>
						</div>
					</div>
				</div>
			</div >
		);
	}
}

export default Registab5;