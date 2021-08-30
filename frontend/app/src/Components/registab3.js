import React from 'react';
import Registab3_addHigher from './registab3_addHigher';
import Registab3_addSecondary from './registab3_addSecondary';
import './registab3.css'
import './registab3_script'
import './register.css'

class Registab3 extends React.Component {
	render (){
		return (
			<div className="Registab3 regis-box-content">
				<div class='container-fluid'>
					<div class='col-16'>
						<div class='row justify-content-center'>
								<div className='registab3_formbox col-5'>
									<h1>อุดมศึกษา</h1>
									<div className='registab3_btnplus'>
										<button type="button" class="btn " data-bs-toggle="modal" data-bs-target="#registab3Modal1">
											<img id='icon-plus-circle'  src="assets/images/+.png"></img>
										</button>
									</div>

									<div class="modal fade" id="registab3Modal1" tabindex="-1" aria-labelledby="exampleModalLabel1" aria-hidden="true">
										<div class="modal-dialog modal-dialog-centered modal-xl">
											<div class="modal-content " >
												<div class='modal-body'>
													<button type="button" class="btn-close" id='registab3_btnclose' aria-label="Close" data-bs-dismiss="modal"></button>
													<h1 class='modal-title' id='regisModallabel1' >เพิ่มประวัติการศึกษา</h1>
													<div className='addHigher'>
														<Registab3_addHigher/>
													</div>													
												</div>
												<div class='modal-footer'>
													<div class="centerverify">
														<button type="button" class="btn btn-cta-primary-svshort round profile-button grey margin-right-m" data-bs-dismiss="modal">ยกเลิก</button>
														<button type="button" class="btn btn-cta-primary-yellowshort profile-button round" data-bs-dismiss='modal' id='regis3_HigherConfirm'>ตกลง</button>
													</div>
												</div>

											</div>
										</div>
									</div>
								</div>

								<div className='registab3_formbox col-5'>
									<h1>มัธยมศึกษา</h1>
									<div className='registab3_btnplus'>						
										<button type="button" class="btn" data-bs-toggle="modal" data-bs-target="#registab3Modal2">
											<img id='icon-plus-circle'  src="assets/images/+.png"></img>
										</button>
									</div>
									<div class="modal fade" id="registab3Modal2" tabindex="-1" aria-labelledby="exampleModalLabel1" aria-hidden="true">
										<div class="modal-dialog modal-dialog-centered modal-xl">
											<div class="modal-content " >
												<div class='modal-body'>
													<button type="button" class="btn-close" id='registab3_btnclose' aria-label="Close" data-bs-dismiss="modal"></button>
													<h1 class='modal-title' id='regisModallabel2' >เพิ่มประวัติการศึกษา</h1>
													<div className='addSecondary'>
														<Registab3_addSecondary/>
													</div>													
												</div>
												<div class='modal-footer'>
													<div class="centerverify">
														<button type="button" class="btn btn-cta-primary-svshort round profile-button grey margin-right-m" data-bs-dismiss="modal">ยกเลิก</button>
														<button type="button" class="btn btn-cta-primary-yellowshort profile-button round" data-bs-dismiss='modal'>ตกลง</button>
													</div>
												</div>

											</div>
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

export default Registab3;