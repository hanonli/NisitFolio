import React from 'react';
import './registertab3.css'

class Registab3 extends React.Component {
	render (){
		return (
			<div className="Registab3">
				<div className='textbox-container justify-content-center'>
					
						<div className='textbox'>
							<h1>อุดมศึกษา</h1>

							<button type="button" class="btn" data-bs-toggle="modal" data-bs-target="#exampleModal">
								<img id='icon-plus-circle'  src="assets/images/+.png"></img>
							</button>
							<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        		<div class="modal-dialog modal-dialog-centered">
                            		<div class="modal-content minisize">
                                		<h4 class="del-b">คุณต้องการลบทักษะเสริม ?</h4>
                                		<div class="centerverify">
                                        	<a type="button" class="btn btn-cta-primary-svshort round profile-button grey margin-right-m" data-bs-dismiss="modal">ยกเลิก</a>
                                        	<a type="button" class="btn btn-cta-primary-yellowshort profile-button round">ลบ</a>
                                		</div>
                            		</div>
                        		</div>
                    		</div>
						</div>

						<div className='textbox'>
							<h1>มัธยมศึกษา</h1>
							<button type="button" class="btn item-align-center" >
								<img id='icon-plus-circle'  src="assets/images/+.png"></img>
							</button>
						</div>

				</div>
                    
			
			</div>
			
		);
	}
}

export default Registab3;