import React from 'react';

class Registab1 extends React.Component {
	render (){
		return (
			<div className="Registab1 regis-box-content">
				<div class="container-fluid margin-top1">
					<form class="row">
						<div class="col-10">
							<div class="container-fluid">
								<div class="row">
									<div class="col-md-5">
										<input type="text" class="form-control dropbtn margin-bottom1" id="01" placeholder="ชื่อ*" required></input>
									</div>
									<div class="col-md-5">
										<input type="text" class="form-control dropbtn margin-bottom1" id="02" placeholder="นามสกุล*" required></input>
									</div>
								</div>
								<div class="col-md-10">
									<input type="text" class="form-control dropbtn margin-bottom1" id="03" placeholder="อีเมลล์*" required></input>
								</div>
								<div class="col-md-10">
									<input type="text" class="form-control dropbtn margin-bottom1" id="05" placeholder="รหัสผ่าน*" required></input>
								</div>
								<div class="col-md-10">
									<input type="text" class="form-control dropbtn margin-bottom1" id="06" placeholder="ยืนยันรหัสผ่าน*" required></input>
								</div>
								<div class="col-md-10">
									<div class="row">
										<div class="col-md-2">
											<label class="sexdistance form-f-sex">เพศ*</label>
										</div>
										<div class="col-6">
											<select class="form-select dropbtn margin-bottom1 fff" id="" required>
												<option selected disabled value="">เลือกเพศ</option>
												<option>ชาย</option>
												<option>หญิง</option>
												<option>LGBTQ+</option>
												<option>ไม่ระบุ</option>
											</select>
										</div>
									</div>
								</div>
								<div class="col-md-10">
									<div class="row">
										<div class="col-md-2">
											<label class="sexdistance form-f-sex">วันเกิด*</label>
										</div>
										<div class="col-6">
											<select class="form-select dropbtn margin-bottom1 fff" id="" required>
												<option selected disabled value="">วัน/เดือน/ปี</option>
												<option>ชาย</option>
												<option>หญิง</option>
												<option>LGBTQ+</option>
												<option>ไม่ระบุ</option>
											</select>
										</div>
										<div class="col-md-4">
											<label class="sexdistance fontsmallhere">* ข้อมูลที่จำเป็นต้องกรอก</label>
										</div>
									</div>
								</div>
							</div>	
						</div>
						<div class="col-2">
							<div class="">
								<img class="profile-image img-fluid rounded-circle" data-bs-toggle="tooltip" data-bs-placement="top" title="อัพโหลดรูปโปรไฟล์" type='button' id="avatar" src="assets/images/Circleuploadprofile.png" width="250" height="250"/>
							</div>
						</div>
						<div class="row">
							<button class="btn btn-cta-primary-yellowwide round ttr" type="submit">ยืนยันตัวตน</button>
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
								<a class="btn btn-cta-primary round profile-button grey" data-bs-dismiss="modal">ยกเลิก</a>
								<a class="btn btn-cta-primary-yellow round profile-button" id="crop">ใช้งานรูปภาพ</a>
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
