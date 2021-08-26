import React from 'react';
import Registab4_addWorkHistory from './registab4_addWorkHistory';
import './registab3.css'

class Registab4 extends React.Component {
	render (){
		return (
			<div className="Registab4 regis-box-content">
		
						<div className='textbox col-12' >
								
								<div class='registab4_btnplus'>
									<button type="button" class="btn justify-content-center" data-bs-toggle="modal" data-bs-target="#registab4Modal">
											<img id='icon-plus-circle'  src="assets/images/+.png" width="115" height="115" ></img>
									</button>
								</div>
								<div class="modal fade" id="registab4Modal" tabindex="-1" aria-labelledby="exampleModalLabel1" aria-hidden="true">
									<div class="modal-dialog modal-dialog-centered modal-xl">
										<div class="modal-content " >
											<div class='modal-header'>
												<h1 class='modal-title' id='regisModallabel1' >เพิ่มประวัติการศึกษา</h1>
												<button type="button" class="btn-close" aria-label="Close" data-bs-dismiss="modal"></button>
											</div>
											<div class='modal-body'>
												<Registab4_addWorkHistory/>
											</div>
											<div class='modal-footer'>
												<div class="centerverify">
													<button type="button" class="btn btn-cta-primary-svshort round profile-button grey margin-right-m" data-bs-dismiss="modal">ยกเลิก</button>												<button type="button" class="btn btn-cta-primary-yellowshort profile-button round" data-bs-dismiss='modal'>ตกลง</button>
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

export default Registab4;