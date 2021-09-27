import React from 'react';
import './register.css';
import CustomSelect from './customSelect';
import SelectSS7 from './dropsideskill';

class Registab7 extends React.Component {

	render (){
		return (
			<div className="Registab7">
				<div class="regis-box-content1 " id="yyy">
					<h1 id="text-add-name-my-job11">เพิ่มทักษะเสริมที่ถนัด</h1>
					<SelectSS7 />
					<div class="dropdowntap7_1 ssf">
						<div class="row ddt7_1">
							<div class="col-md-12">
								<select class="form-select dropbtn fff" id="ch1">
									<option selected disabled value="">เลือกหมวดทักษะเสริมที่ถนัด</option>
									<option value='Computer_Technology'>Computer_Technology</option>
									<option value='Hard_Communication%20Skills'>Hard_Communication Skills</option>
									<option value='Data_Analysis'>Data_Analysis</option>
									<option value='Certifications_and_Licenses'>Certifications_and_Licenses</option>
									<option value='Marketing'>Marketing</option>
									<option value='Project_Management'>Project_Management</option>
									<option value='Design'>Design</option>
									<option value='Cloud_Computing'>Cloud_Computing</option>
									<option value='Writing'>Writing</option>
									<option value='Mobile_&_Web_Development'>Mobile_&_Web_Development</option>
									<option value='Network_Structure&_Security'>NetworkStructure&_Security</option>
								</select>
							</div>
							<div class="col-md-12">
								<select class="form-select dropbtn" id="sideskilllist1">
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
				</div>
			</div>
		);
	}
}

export default Registab7;