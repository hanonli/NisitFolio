import React, { Component } from 'react'

class Registab2 extends React.Component {

	render (){
		return (
			<div className="Registab2 regis-box-content">
				<div class="container-fluid margin-top1">
					<form class="row">
						<div class="col-2"></div>
						<div class="col-10">
							<div class="container-fluid">
								<div class="row">
									<div class="col-md-2">
										<label class="sexdistance form-f-sex">ที่อยู่ปัจจุบัน</label>
									</div>
									<div class="col-md-7">
										<h4 class="form-control dropbtn margin-bottom1 fff">ประเทศไทย</h4>
									</div>
								</div>
								<div class="row">
									<div class="col-md-2"></div>
									<div class="col-md-4">
										<select class="form-select dropbtn margin-bottom1 fff" id="province">
											<option selected disabled value="">จังหวัด</option>
										</select>
									</div>
									<div class="col-md-3">
										<select class="form-select dropbtn margin-bottom1 fff" id="townny">
											<option selected disabled value="">เมือง</option>
										</select>
									</div>
								</div>
								<div class="col-md-9">
									<input type="text" class="form-control dropbtn margin-bottom1" id="" placeholder="อีเมลสำรอง" ></input>
								</div>
								<div class="row-3">
									<div class="col-md-9">
										<textarea type="text" class="form-control aboutmee margin-bottom1" id="aboutme2" placeholder="บอกเล่าเกี่ยวกับตัวเองสั้นๆ"></textarea>
										<div id="charactersRemaining">180 characters</div>
									</div>
								</div>
							</div>	
						</div>
					</form>	
				</div>
			</div>
		);
	}
}

export default Registab2;