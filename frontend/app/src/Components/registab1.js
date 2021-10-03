import React from 'react';
import DatePickerBD from './datepickerBD.js';

class Registab1 extends React.Component {
	render (){
		return (
			<div className="Registab1 regis-box-content1">
				<div class="container-fluid margin-top1">
					<div class="row">
						<div class="col-9 container-fluid">
								<div class="row">
									<div class="col-2 chidright del-padrightbit">
										<label class=" form-f-sex">ชื่อภาษาไทย<label class="red_markEp1">*</label></label>
									</div>
									<div class="col-4 ">
										<input maxlength="100" type="text" class="form-control dropbtn margin-bottom1 " id="re01" required></input>
									</div>
									<div class="col-2 chidright del-padleft del-padrightbit">
										<label class=" form-f-sex">นามสกุลภาษาไทย<label class="red_markEp1">*</label></label>
									</div>
									<div class="col-4">
										<input maxlength="100" type="text" class="form-control dropbtn margin-bottom1 " id="re02" required></input>
									</div>
								</div>
								<div class="row">
									<div class="col-md-2 chidright del-padrightbit">
										<label class="form-f-sex">อีเมล<label class="red_markEp1">*</label></label>
									</div>
									<div class="col-10">
										<input maxlength="60" type="text" class="form-control dropbtn margin-bottom1 " id="re03" required></input>
										<a id='toggleEmailW'>อีเมลนี้มีอยู่ในระบบอยู่แล้ว</a>
									</div>
								</div>
								<div class="row">
									<div class="col-md-2 chidright del-padrightbit">
										<label class="form-f-sex disablecopypaste">รหัสผ่าน<label class="red_markEp1">*</label></label>
									</div>
									<div class="col-10">
										<input maxlength="100" type="password" class="form-control dropbtn margin-bottom1 " id="pass05" placeholder='ความยาวอย่างน้อย 8 อักขระ' describedby="passwordHelpInline" required></input>
									</div>
								</div>
								<div class="row triggerRed1 chidright">
									<div class="col-md-2 del-padleft del-padrightbit">
										<label class="form-f-cfp disablecopypaste">ยืนยันรหัสผ่าน<label class="red_markEp1">*</label></label>
									</div>
									<div class="col-10">
										<input maxlength="100" onpaste="return false;" type="password" class="form-control dropbtn margin-bottom1 " id="pass06" required></input>
									</div>
								</div>
								<div class="row">
									<div class="col-md-2 chidright del-padrightbit">
										<label class="form-f-cfp">เพศ<label class="red_markEp1">*</label></label>
									</div>
									<div class="col-4">
										<select class="form-select dropbtn margin-bottom1 fff" id ="sexgen" required>
											<option selected disabled value="">เลือกเพศ</option>
											<option value="ชาย">ชาย</option>
											<option value="หญิง">หญิง</option>
											<option value="ไม่ระบุ">ไม่ระบุ</option>
										</select>
									</div>
									<div class="col-md-2 chidright del-padrightbit">
										<label class="sexdistance form-f-sex ">วันเกิด<label class="red_markEp1">*</label></label>
									</div>
									<div class="col-4 del-padleft">
										<DatePickerBD />
									</div>
								</div>
					</div>
						<div class="col-3">
							<div class="container-fluid">
								<img class="profile-image img-fluid rounded-circle" data-bs-toggle="tooltip" data-bs-placement="top" title="อัพโหลดรูปโปรไฟล์" type='button' id="avatar1" src="assets/images/Circleuploadprofile.png" width="250" height="250"/>
								<input type="file" class="sr-only" id="input" accept="image/*" name="image" hidden />
							</div>
						</div>
					</div>	
				</div>
				<div class="container">
						<div class="alert" role="alert"></div>
						<div class="modal fade" id="modal" tabindex="-1" role="dialog" aria-labelledby="modalLabel" aria-hidden="true">
						  <div class="modal-dialog" role="document">
							<div class="modal-content">
							  <div class="modal-header">
								<h5 class="modal-title" id="modalLabel">ปรับแต่งรูปโปรไฟล์</h5>
							  </div>
							  <div class="modal-body">
								<div class="img-container">
								  <img id="image" src="https://avatars0.githubusercontent.com/u/3456749" />
								</div>
							  </div>
							  <div class="modal-footer">
								<a class="btn btn-cta-primary-svshort round profile-button grey margin-right-m" data-bs-dismiss="modal">ยกเลิก</a>
								<a class="btn btn-cta-primary-yellowwide round profile-button" id="crop">ใช้งานรูปภาพ</a>
							  </div>
							</div>
						  </div>
						</div>
				  </div>
			</div>
		);
	}
}

export default Registab1;
