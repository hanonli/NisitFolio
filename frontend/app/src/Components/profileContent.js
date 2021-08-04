import React from 'react';
import { Link } from "react-router-dom";

class ProfileContent extends React.Component {
	render (){
		return (
				<div className="ProfileContent">
							<span class="lg-view-search mx-auto">
								<div class="container-fluid df-f">
									<div class="d-flex justify-content-center">
										<div class="row">
											<div class="col-md-auto">
												<Link to="/myresume">
													<div class="transition-component scale-up-s resume-icon" id="cross-fade">
														<img class="resume-icon bottom" src="assets/images/myresume2.png" type='button' id="myresume-home" alt="" />
														<img class="resume-icon top" src="assets/images/myresume1.png" type='button' id="myresume-home" alt="" />
													</div>
												</Link>
											</div>
											<div class="col-md-auto">
												<Link to="/portfolio">
													<div class="transition-component scale-up-s portfolio-icon" id="cross-fade">
														<img class="portfolio-icon bottom" src="assets/images/portfolio2.png" type='button' id="portfolio-home" alt="" />
														<img class="portfolio-icon top" src="assets/images/portfolio1.png" type='button' id="portfolio-home" alt="" />
													</div>
												</Link>
											</div>
											<div class="col-md-auto">
												<div class="col-md-auto profile-sm">
													<Link to="/analytics">
														<div class="transition-component scale-up-s analytic-icon" id="cross-fade">
															<img class="analytic-icon bottom" src="assets/images/analytics2.png" type='button' id="analytic-home" alt="" />
															<img class="analytic-icon top" src="assets/images/analytics1.png" type='button' id="analytic-home" alt="" />
														</div>
													</Link>
												</div>
												<div class="col-md-auto">
													<Link to="/bookmark">
														<div class="transition-component scale-up-s bookmark-icon" id="cross-fade">
															<img class="bookmark-icon bottom" src="assets/images/bookmark2.png" type='button' id="bookmark-home" alt="" />
															<img class="bookmark-icon top" src="assets/images/bookmark1.png" type='button' id="bookmark-home" alt="" />
														</div>
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
