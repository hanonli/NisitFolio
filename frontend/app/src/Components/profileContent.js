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
													<img class="resume-icon hoverable-icon" src="assets/images/myresume1.png" data-src="assets/images/myresume1.png" data-hover="assets/images/myresume2.png" type='button' id="myresume" alt=""/>
												</Link>
											</div>
											<div class="col-md-auto">
												<Link to="/portfolio">
													<img class="portfolio-icon hoverable-icon"  src="assets/images/portfolio1.png" data-src="assets/images/portfolio1.png" data-hover="assets/images/portfolio2.png" type='button' id="portfolio" alt=""/>
												</Link>
											</div>
											<div class="col-md-auto">
												<div class="col-md-auto profile-sm">
													<Link to="/analytic">
														<img class="analytic-icon hoverable-icon"  src="assets/images/analytics1.png" data-src="assets/images/analytics1.png" data-hover="assets/images/analytics2.png" type='button' id="analytic" alt="" />
													</Link>
												</div>
												<div class="col-md-auto">
													<Link to="/bookmark">
														<img class="bookmark-icon hoverable-icon"  src="assets/images/bookmark1.png" data-src="assets/images/bookmark1.png" data-hover="assets/images/bookmark2.png" type='button' id="bookmark" alt="" />
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
