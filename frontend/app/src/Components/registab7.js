import React from 'react';
import './register.css';
import CustomSelect from './customSelect';

class Registab7 extends React.Component {

	render (){
		return (
			<div className="Registab7">
				<div class="regis-box-content7 " id="yyy">
					<h1 class="headerRegis" id="havesideskill">ทักษะเสริม</h1>
					<div class="dropdowntap7_1 ssf">
						<div class="row ddt7_1">
							<div class="col-md-6">
								<select class="form-select dropbtn fff " id="ch1">
									<option selected disabled value="">เลือกหมวดทักษะเสริมที่ถนัด</option>
									<option value= 'Technical'>Technical</option>
									<option value='Computer'>Computer</option>
									<option value='Analytical'>Analytical</option>
									<option value='Marketing'>Marketing</option>
									<option value='Presentation'>Presentation</option>
									<option value='Management'>Management</option>
									<option value='Writing'>Writing</option>
									<option value='Language'>Language</option>
									<option value='Design'>Design</option>
								</select>
							</div>
							<div class="col-md-6">
								<select class="form-select dropbtn" id="sideskilllist1">
									<option selected disabled value="">เลือกทักษะเสริมที่ถนัด</option>
								</select>
							</div>
						</div>
					</div>
					<div class="dropdowntap7_2 ssf">
					<div class="row ddt7_2">
							<div class="col-md-6">
								<select class="form-select dropbtn fff" id="ch2">
									<option selected disabled value="">เลือกหมวดทักษะเสริมที่ถนัด</option>
									<option value= 'Technical'>Technical</option>
									<option value='Computer'>Computer</option>
									<option value='Analytical'>Analytical</option>
									<option value='Marketing'>Marketing</option>
									<option value='Presentation'>Presentation</option>
									<option value='Management'>Management</option>
									<option value='Writing'>Writing</option>
									<option value='Language'>Language</option>
									<option value='Design'>Design</option>
								</select>
							</div>
							<div class="col-md-6">
								<select class="form-select dropbtn" id="sideskilllist2">
									<option selected disabled value="">เลือกทักษะเสริมที่ถนัด</option>
								</select>
							</div>
						</div>
					</div>
					<div class="dropdowntap7_3 ssf">
					<div class="row ddt7_3">
							<div class="col-md-6">
								<select class="form-select dropbtn fff" id="ch3">
									<option selected disabled value="">เลือกหมวดทักษะเสริมที่ถนัด</option>
									<option value= 'Technical'>Technical</option>
									<option value='Computer'>Computer</option>
									<option value='Analytical'>Analytical</option>
									<option value='Marketing'>Marketing</option>
									<option value='Presentation'>Presentation</option>
									<option value='Management'>Management</option>
									<option value='Writing'>Writing</option>
									<option value='Language'>Language</option>
									<option value='Design'>Design</option>
								</select>
							</div>
							<div class="col-md-6">
								<select class="form-select dropbtn" id="sideskilllist3">
									<option selected disabled value="">เลือกทักษะเสริมที่ถนัด</option>
								</select>
							</div>
						</div>
					</div>
					<div class="modal fade" id="Modaltab7-1" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
						<div class="modal-dialog modal-dialog-centered">
							<div class="modal-content minisize">
								<h4 class="del-b">คุณต้องการลบทักษะเสริม ?</h4>
								<div class="centerverify">
										<a type="button" class="btn btn-cta-primary-svshort round profile-button grey margin-right-m" data-bs-dismiss="modal">ยกเลิก</a>
										<a type="button" class="btn btn-cta-primary-yellowshort profile-button round" id="del_sideskill1" data-bs-dismiss="modal">ลบ</a>
								</div>
							</div>
						</div>
					</div>
					<div class="modal fade" id="Modaltab7-2" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
						<div class="modal-dialog modal-dialog-centered">
							<div class="modal-content minisize">
								<h4 class="del-b">คุณต้องการลบทักษะเสริม ?</h4>
								<div class="centerverify">
										<a type="button" class="btn btn-cta-primary-svshort round profile-button grey margin-right-m" data-bs-dismiss="modal">ยกเลิก</a>
										<a type="button" class="btn btn-cta-primary-yellowshort profile-button round" id="del_sideskill2" data-bs-dismiss="modal">ลบ</a>
								</div>
							</div>
						</div>
					</div>
					<div class="modal fade" id="Modaltab7-3" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
						<div class="modal-dialog modal-dialog-centered">
							<div class="modal-content minisize">
								<h4 class="del-b">คุณต้องการลบทักษะเสริม ?</h4>
								<div class="centerverify">
										<a type="button" class="btn btn-cta-primary-svshort round profile-button grey margin-right-m" data-bs-dismiss="modal">ยกเลิก</a>
										<a type="button" class="btn btn-cta-primary-yellowshort profile-button round" id="del_sideskill3" data-bs-dismiss="modal">ลบ</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Registab7;