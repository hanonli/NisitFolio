import React from 'react';
import './register.css';

class Registab5 extends React.Component {
	render() {
		return (
			<div className="Registab5">
				<div class="regis-box-content">
					<button type="button" class="btn" data-bs-toggle="modal" data-bs-target="#exampleModal">
						<img src="assets/images/bin.png"></img>
					</button>
					<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
						<div class="modal-dialog modal-dialog-centered modal-lg">
							<div class="modal-content minisize" id="certi_edit">

								<div class="centerverify" id="button_certi">
									<a type="button" class="btn btn-cta-primary-svshort round profile-button grey margin-right-m" data-bs-dismiss="modal">ยกเลิก</a>
									<a type="button" class="btn btn-cta-primary-yellowshort profile-button round">เพิ่ม</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Registab5;