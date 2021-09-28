import React from 'react';
import './register.css';
import Ddt7 from './dropdownt7';
import SelectSS7 from './dropsideskill';

class Registab7 extends React.Component {

	render (){
		return (
			<div className="Registab7">
				<div class="regis-box-content1 " id="yyy">
					<h1 id="text-add-name-my-job11">เพิ่มทักษะเสริมที่ถนัด</h1>
					<div class="dropdowntap7_1 ssf"></div>
					<SelectSS7 />
					<Ddt7 />
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