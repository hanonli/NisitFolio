import React from 'react';

class Registab1 extends React.Component {
	render (){
		return (
			<div className="Registab1 regis-box-content1">
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
										<div class="col-md-2">
											<select class="form-select dropbtn margin-bottom1 fff" id="" required>
												<option selected disabled value="">วัน</option>
												<option>1</option>
												<option>2</option>
												<option>3</option>
												<option>4</option>
											</select>
										</div>
										<div class="col-md-2">
											<select class="form-select dropbtn margin-bottom1 fff" id="" required>
												<option selected disabled value="">เดือน</option>
												<option>ชาย</option>
												<option>หญิง</option>
												<option>LGBTQ+</option>
												<option>ไม่ระบุ</option>
											</select>
										</div>
										<div class="col-md-2">
										<input type="text" class="form-control dropbtn margin-bottom1" id="bdyear" placeholder="ปี" required></input>
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
							<button class="btn btn-cta-primary-yellowwide round ttrbtn" type="submit" id="confirmform1">ยืนยันตัวตน</button>
						</div>
					</form>	
				</div>

			</div>
		);
	}
}

export default Registab1;
