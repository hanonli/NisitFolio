import React from 'react';
import logo from './logo.svg';

class Header extends React.Component {
	render (){
		return (
			<div className="Header">
				<header class="header">
					<div class="container">     
						<div class="row align-items-end">
							<div class="col">
								<img class="profile-image img-fluid float-start rounded-circle" type='button' id="avatar" src="assets/images/profile.jpg" alt="profile image" />
								<input type="file" class="sr-only" id="input" accept="image/*" name="image" hidden />
								<div class="profile-content">
									<h1 class="name inline" contenteditable="true">วรเมศ ผดุงเจริญ </h1><i class="fas fa-pencil-alt"></i>
									<h2></h2>
									<a class="btn btn-cta-secondary btn-small round margin-right-s" href="#" target="_blank">Lead Full Stack Developer</a>
									<a class="btn btn-cta-secondary btn-small round margin-right-s" href="#" target="_blank">Actor</a>
									<a class="btn btn-cta-secondary btn-small round" href="#" target="_blank">PE Teacher</a>
									<h2 class="desc-s" contenteditable="true">I'm an ordinary guy who wants to be a great developer. However, one day I met another guy named Fa_ and I realize that he has already achieved my dream <i class="fas fa-pencil-alt"></i></h2> 
								</div>
							</div>
							<div class="col-12 col-md-auto">
								<a class="btn btn-cta-primary round grey margin-right-m" href="#" target="_blank">แก้ไขโปรไฟล์</a>        
								<a class="btn btn-cta-primary round yellow" href="#" target="_blank">เพิ่มกิจกรรมของคุณ</a>
							</div>
						</div>        
					</div>
					
					<div class="container">
						<div class="alert" role="alert"></div>
						<div class="modal fade" id="modal" tabindex="-1" role="dialog" aria-labelledby="modalLabel" aria-hidden="true">
						  <div class="modal-dialog" role="document">
							<div class="modal-content">
							  <div class="modal-header">
								<h5 class="modal-title" id="modalLabel">ปรับแต่งรูปโปรไฟล์</h5>
							  </div>
							  <div class="modal-body">
								<div class="img-container">
								  <img id="image" src="https://avatars0.githubusercontent.com/u/3456749" />
								</div>
							  </div>
							  <div class="modal-footer">
								<button type="button" class="btn btn-secondary" data-dismiss="modal">ยกเลิก</button>
								<button type="button" class="btn btn-primary" id="crop">ใช้งาน</button>
							  </div>
							</div>
						  </div>
						</div>
				  </div>
				</header>
			</div>
		);
	}
}

export default Header;
