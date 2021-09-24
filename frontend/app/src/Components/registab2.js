import React, { Component } from 'react'

class Registab2 extends React.Component {

	render (){
		return (
			<div className="Registab2 regis-box-content1">
				<div class="container-fluid margin-top1">
					<form class="row">
						<div class="col-1"></div>
						<div class="col-10">
							<div class="container-fluid">
								<div class="row">
									<div class="col-md-2">
										<label class="sexdistance form-f-sex">ที่อยู่ปัจจุบัน</label>
									</div>
									<div class="col-md-10">
										<h4 class="form-control margin-bottom1 fff dis_input1">ประเทศไทย</h4>
									</div>
								</div>
								<div class="row">
									<div class="col-md-2"></div>
									<div class="col-md-5">
										<select class="form-select dropbtn margin-bottom1 fff" id="province">
											<option selected disabled value="">จังหวัด</option>
										</select>
									</div>
									<div class="col-md-5">
										<select class="form-select dropbtn margin-bottom1 fff" id="townny">
											<option selected disabled value="">เมือง</option>
										</select>
									</div>
								</div>
								<div class="col-md-12">
									<h4 type="text" class="form-control margin-bottom1 dis_input2" >อีเมลสำรอง</h4>
								</div>
								<div class="row-3">
									<div class="col-md-12">
										<textarea maxlength="280" type="text" class="form-control aboutmee margin-bottom2" id="aboutme2" placeholder="บอกเล่าเกี่ยวกับตัวเองสั้นๆ" autocomplete="off"></textarea>
										<div id="charactersRemaining">280 characters</div>
									</div>
								</div>
							</div>	
						</div>
						<div class="col-1"></div>
					</form>	
				</div>
			</div>
		);
	}
}

export default Registab2;