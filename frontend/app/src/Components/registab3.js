import React from 'react';
import Registab3_addHigher from './registab3_addHigher';
import Registab3_addSecondary from './registab3_addSecondary';
import './registtab3.css'

class Registab3 extends React.Component {
	render (){
		return (
			<div className="Registab3">
				<div className='textbox-container justify-content-center'>
					
						<div className='textbox'>
							<h1>อุดมศึกษา</h1>
							<button type="button" class="btn " data-bs-toggle="modal" data-bs-target="#registabModal1">
								<img id='icon-plus-circle'  src="assets/images/+.png"></img>
							</button>
							<div class="modal fade" id="registabModal1" tabindex="-1" aria-labelledby="exampleModalLabel1" aria-hidden="true">
                        		<div class="modal-dialog modal-dialog-centered modal-xl">
                            		<div class="modal-content " >
										<div class='modal-header'>
											<h1 class='modal-title' id='regisModallabel1' >เพิ่มประวัติการศึกษา</h1>
											<button type="button" class="btn-close" aria-label="Close" data-bs-dismiss="modal"></button>
										</div>
										<div class='modal-body'>
											<Registab3_addHigher/>
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

						<div className='textbox'>
							<h1>มัธยมศึกษา</h1>
							<button type="button" class="btn" data-bs-toggle="modal" data-bs-target="#registabModal2">
								<img id='icon-plus-circle'  src="assets/images/+.png"></img>
							</button>
							<div class="modal fade" id="registabModal2" tabindex="-1" aria-labelledby="exampleModalLabel2" aria-hidden="true">
                        		<div class="modal-dialog modal-dialog-centered">
                            		<div class="modal-content largesize">
                                		<Registab3_addSecondary/>
                                		<div class="centerverify">
                                        	<a type="button" class="btn btn-cta-primary-svshort round profile-button grey margin-right-m" data-bs-dismiss="modal">ยกเลิก</a>
                                        	<a type="button" class="btn btn-cta-primary-yellowshort profile-button round">ลบ</a>
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