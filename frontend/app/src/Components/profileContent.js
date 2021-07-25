import React from 'react';
import { Link } from "react-router-dom";

class ProfileContent extends React.Component {
	render (){
		return (
				<div className="ProfileContent"><br></br>
							<span class="lg-view-search mx-auto">
								<div class="container-fluid">
									<div class="d-flex justify-content-center profile-content">
										<div class="row">
											<div class="col-md-auto">
												<Link to="/myresume">
													<img class="resume-icon hoverable-icon" src="assets/images/MyResume.png" data-src="assets/images/MyResume.png" data-hover="assets/images/Myresume_hover.png" type='button' id="myresume" alt=""/>
												</Link>
											</div>
											<div class="col-md-auto">
												<Link to="/portfolio">
													<img class="portfolio-icon hoverable-icon"  src="assets/images/Portfolio.png" data-src="assets/images/Portfolio.png" data-hover="assets/images/Portfoliohover.png" type='button' id="portfolio" alt=""/>
												</Link>
											</div>
											<div class="col-md-auto">
												<div class="col-md-auto profile-sm">
													<Link to="/analytic">
														<img class="analytic-icon hoverable-icon"  src="assets/images/Analyt.png" data-src="assets/images/Analyt.png" data-hover="assets/images/Analyt_hover.png" type='button' id="analytic" alt="" />
													</Link>
												</div>
												<div class="col-md-auto">
													<Link to="/bookmark">
														<img class="bookmark-icon hoverable-icon"  src="assets/images/Bookmark.png" data-src="assets/images/Bookmark.png" data-hover="assets/images/bookmark_hover.png" type='button' id="bookmark" alt="" />
													</Link>
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
