import React from 'react';
import { Link } from "react-router-dom";

class Header extends React.Component {
	render (){
		return (
			<div className="Header">
				<header class="header">
					<div class="container">     
						<div class="row align-items-end">
							<div class="col-md-7">
								<img class="profile-image img-fluid float-start rounded-circle" data-bs-toggle="tooltip" data-bs-placement="top" title="อัพโหลดรูปโปรไฟล์" type='button' id="avatar" src="assets/images/profile_uk.png" alt="profile image" />
								<input type="file" class="sr-only" id="input" accept="image/*" name="image" hidden />
								<div class="profile-content">
									<h1 class="name" id="fetch-name"></h1>
									<div id="tags-container">
									</div>
								<h2 class="desc-s" id="fetch-desc">I'm an ordinary guy who wants to be a great developer. However, one day I met another guy named Fa_ and I realize that he has already achieved my dream.</h2> 
								</div>
							</div>
							<div class="col-md-5">
								 <div class="lg-view float-end">
									<Link to="/editprofile">
										<a class="btn btn-cta-primary round profile-button grey margin-right-m" target="_blank">แก้ไขโปรไฟล์</a>
									</Link>        
									<a class="btn btn-cta-primary-yellow round profile-button" href="#" target="_blank">เพิ่มกิจกรรมของคุณ</a>
								</div>
								
								<div class="sm-view">
									<Link to="/editprofile">
										<a class="btn btn-cta-primary round profile-button grey margin-right-m" target="_blank">แก้ไขโปรไฟล์</a>
									</Link>        
									<a class="btn btn-cta-primary-yellow round profile-button" href="#" target="_blank">เพิ่มกิจกรรมของคุณ</a>
								</div>
								
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
								<a class="btn btn-cta-primary round profile-button grey" data-bs-dismiss="modal">ยกเลิก</a>
								<a class="btn btn-cta-primary-yellow round profile-button" id="crop">ใช้งานรูปภาพ</a>
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
