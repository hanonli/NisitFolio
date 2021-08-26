import React from 'react';

class Registab1 extends React.Component {
	render (){
		return (
			<div className="Registab1 regis-box-content">
				<div class="container-fluid margin-top1">
					<form class="row">
						<div class="col-1"></div>
						<div class="col-8">
							<div class="container-fluid">
								<div class="row">
									<div class="col-md-5">
										<input type="text" class="form-control dropbtn margin-bottom1 " id="re01" placeholder="ชื่อ*" required></input>
									</div>
									<div class="col-md-2"></div>
									<div class="col-md-5">
										<input type="text" class="form-control dropbtn margin-bottom1 " id="re02" placeholder="นามสกุล*" required></input>
									</div>
								</div>
								<div class="col-md-12">
									<input type="text" class="form-control dropbtn margin-bottom1 " id="re03" placeholder="อีเมล*" required></input>
								</div>
								<div class="col-md-12">
									<input type="password" class="form-control dropbtn margin-bottom1 " id="pass05" placeholder="รหัสผ่าน*" aria-describedby="passwordHelpInline" required></input>
								</div>
								<div class="col-md-12 triggerRed1">
									<input type="password" class="form-control dropbtn margin-bottom1 " id="pass06" placeholder="ยืนยันรหัสผ่าน*" required></input>
								</div>
								<div class="col-md-12">
									<div class="row">
										<div class="col-md-2">
											<label class="sexdistance form-f-sex">เพศ<a class="red_markEp1">*</a></label>
										</div>
										<div class="col-6">
											<select class="form-select dropbtn margin-bottom1 fff" required>
												<option selected disabled value="">เลือกเพศ</option>
												<option>ชาย</option>
												<option>หญิง</option>
												<option>ไม่ระบุ</option>
											</select>
										</div>
									</div>
								</div>
								<div class="col-md-12">
									<div class="row">
										<div class="col-md-2">
											<label class="sexdistance form-f-sex ">วันเกิด<a class="red_markEp1">*</a></label>
										</div>
										<div class="col-md-2">
											<select class="form-select dropbtn margin-bottom1 fff" id="bdday" required>
												<option selected disabled value="">วัน</option>
											</select>
										</div>
										<div class="col-md-2">
											<select class="form-select dropbtn margin-bottom1 fff" id="bdmonth" required>
												<option selected disabled value="">เดือน</option>
											</select>
										</div>
										<div class="col-md-2">
											<select class="form-select dropbtn margin-bottom1 fff" id="bdyear" required>
												<option selected disabled value="">ปี</option>
											</select>
										</div>
									</div>
								</div>
							</div>	
						</div>
						<div class="col-2">
							<div class="">
								<img class="profile-image img-fluid rounded-circle" data-bs-toggle="tooltip" data-bs-placement="top" title="อัพโหลดรูปโปรไฟล์" type='button' id="avatar1" src="assets/images/Circleuploadprofile.png" width="250" height="250"/>
								<input type="file" class="sr-only" id="input" accept="image/*" name="image" hidden />
							</div>
						</div>
					</form>	
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
