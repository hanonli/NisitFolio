import React from 'react';

class ProfileContent extends React.Component {
	render (){
		return (
				<div className="ProfileContent"><br></br>
					<span class="lg-view-search mx-auto">
						<div class="container">
							<div class="d-flex justify-content-center">
							  <div class="row align-items-end">
								<div class="col-md-auto">
									<img class="resume-icon" src="assets/images/myresume.png" type='button' id="myresume" alt=""/>
								</div>
								<div class="col-md-auto">
								  <img class="portfolio-icon"  src="assets/images/portfolio.png" type='button' id="portfolio" alt=""/>
								</div>
								<div class="col-md-auto">
									<div class="col-md-auto profile-sm">
										<img class="analytic-icon"  src="assets/images/analytic.png" type='button' id="analytic" alt="" />
									</div>
									<div class="col-md-auto">
										<img class="bookmark-icon"  src="assets/images/bookmark.png" type='button' id="bookmark" alt="" />
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
