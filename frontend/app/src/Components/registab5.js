import React from 'react';
import './register.css';
import './registab5.css';

class Registab5 extends React.Component {
	componentDidMount() {
		const script = document.createElement("script");
		script.src = "assets/js/date.js";
		document.body.appendChild(script);
	}
	render() {
		return (
			<div className="Registab5">
				<div class="regis-box-content">
					<div class="row" id="pos_card">
						<div class="card_certi">
							<button type="button" class="btn" data-bs-toggle="modal" data-bs-target="#exampleModal1">
								<img src="assets/images/+.png" width="50" height="50"></img>
							</button>
						</div>

						<div class="card_certi">
							<button type="button" class="btn" data-bs-toggle="modal" data-bs-target="#exampleModal1">
								<img src="assets/images/+.png" width="50" height="50"></img>
							</button>
						</div>
					</div>
					<div class="row" id="pos_card">
						<div class="card_certi">
							<button type="button" class="btn" data-bs-toggle="modal" data-bs-target="#exampleModal1">
								<img src="assets/images/+.png" width="50" height="50"></img>
							</button>
						</div>
						<div class="dummy"></div>
					</div>

					<div class="modal fade" id="exampleModal1" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
						<div class="modal-dialog modal-dialog-centered modal-lg">
							<div class="modal-content minisize" id="certi_edit">
								<div class="row" id="input_certi">
									<div class="col-md-5">
										<input type="text" class="form-control certibtn margin-bottom1" placeholder="พิมพ์ชื่อใบรับรอง/เกียรติบัตร*" required></input>
									</div>
									<div class="col-md-10">
										<select class="form-select dropbtn_year margin-bottom1 fff" id="yearpicker" required>
											<option selected disabled value="">ปี*</option>
										</select>
									</div>
								</div>
								<div class="row" id="input_upload">
									<div className="bg_upload">
										<img src="assets/images/upload_file.png" width="70px" height="70px" class="up_img"></img>
										<h2 className="text_up">อัพโหลดใบรับรองของคุณได้ที่นี่</h2>
									</div>
									<h5 className="text_Info1">* ข้อมูลที่จำเป็นต้องกรอก</h5>
									<div class="col-md-10">
										<a type="button" class="btn btn-cta-primary-svshort round profile-button grey margin-right-m" data-bs-dismiss="modal">ยกเลิก</a>
										<a type="button" class="btn btn-cta-primary-yellowshort profile-button round">เพิ่ม</a>
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

export default Registab5;