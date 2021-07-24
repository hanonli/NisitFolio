import React from 'react';

class ProfileContent extends React.Component {
	render (){
		return (
				<div className="ProfileContent"><br></br>
							<span class="lg-view-search mx-auto">
								<div class="container-fluid">
									<div class="d-flex justify-content-center">
										<div class="row">
											<div class="col-md-auto">
												<img class="resume-icon hoverable-icon" src="assets/images/MyResume.png" data-src="assets/images/MyResume.png" data-hover="assets/images/Myresume_hover.png" type='button' id="myresume" alt=""/>
											</div>
											<div class="col-md-auto">
												 <img class="portfolio-icon hoverable-icon"  src="assets/images/Portfolio.png" data-src="assets/images/Portfolio.png" data-hover="assets/images/Portfoliohover.png" type='button' id="portfolio" alt=""/>
											</div>
											<div class="col-md-auto">
												<div class="col-md-auto profile-sm">
													<img class="analytic-icon hoverable-icon"  src="assets/images/Analyt.png" data-src="assets/images/Analyt.png" data-hover="assets/images/Analyt_hover.png" type='button' id="analytic" alt="" />
												</div>
												<div class="col-md-auto">
													<img class="bookmark-icon hoverable-icon"  src="assets/images/Bookmark.png" data-src="assets/images/Bookmark.png" data-hover="assets/images/bookmark_hover.png" type='button' id="bookmark" alt="" />
												</div>
											</div>
										</div>
									</div>
								</div>
							</span>
			</div>
		);
	}
}

export default ProfileContent;
