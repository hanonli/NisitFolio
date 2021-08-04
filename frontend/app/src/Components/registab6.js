import React from 'react';
import './register.css';
import './registab6.css';

class Registab6 extends React.Component {
	render() {
		return (
			<div className="Registab6">
				<div class="regis-box-content">
					<div class="row" id="pos_card">
						<div class="col-md-15">
							<div class="frame_job">
								<button type="button" class="btn" data-bs-toggle="modal" data-bs-target="#exampleModal2">
									<img src="assets/images/+.png" width="50" height="50"></img>
								</button>
							</div>
						</div>
						<div class="col-md-25">
							<div class="frame_job">
								<button type="button" class="btn" data-bs-toggle="modal" data-bs-target="#exampleModal2">
									<img src="assets/images/+.png" width="50" height="50"></img>
								</button>
							</div>
						</div>

						<div class="modal fade" id="exampleModal2" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
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
				</div>
			</div>
		);
	}
}

export default Registab6;