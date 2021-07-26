import React from 'react';
import { Link } from "react-router-dom";

class NavbarTransparent extends React.Component {
	render (){
		return (
			<div className="NavbarTransparent">
				<nav class="navbar transparent">
				  <div class="container-fluid">
					<a class="navbar-brand">
						<Link to="/home">
							<img src="assets/images/nav-bar-icon.png" alt="" width="135" height="24"/>
						</Link>
					</a>
					<div class="lg-view-search container-fluid container-search-no-icons">
							<form class="d-flex">
								<input class="form-control btn-search-box" type="search" placeholder="ค้นหา" aria-label="Search"/>
								<button class="btn btn-search yellow" type="submit">
									<img src="assets/images/search.png" alt="" width="20" height="20"/>
								</button>
							</form>
					</div>
					 
					<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
					  <span class="navbar-toggler-icon"></span>
					</button>
					
					<div class="collapse navbar-collapse" id="navbarSupportedContent">
					  <span class="sm-view me-auto container-fluid">
						  <form class="d-flex">
							<input class="form-control btn-search-box" type="search" placeholder="ค้นหา" aria-label="Search"/>
							<button class="btn btn-search yellow" type="submit">
								<img src="assets/images/search.png" alt="" width="20" height="20"/>
							</button>
						  </form>
					  </span>
					</div>
				  </div>
				</nav>
			</div>
		);
	}
}

export default NavbarTransparent;
