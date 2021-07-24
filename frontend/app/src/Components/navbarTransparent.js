import React from 'react';
import { Link } from "react-router-dom";

class NavbarTransparent extends React.Component {
	render (){
		return (
			<div className="NavbarTransparent">
				<nav class="navbar transparent">
				  <div class="container-fluid">
					<a class="navbar-brand" href="#">
						<Link to="/home">
							<img src="assets/images/nav-bar-icon.png" alt="" width="135" height="24"/>
						</Link>
					</a>
					<div class="lg-view-search container-fluid container-search">
							<form class="d-flex">
								<input class="form-control btn-search-box" type="search" placeholder="ค้นหา" aria-label="Search"/>
								<button class="btn btn-search yellow" type="submit">
									<img src="assets/images/search.png" alt="" width="20" height="20"/>
								</button>
							</form>
						</div>
					 <span class="sm-view me-auto">
						  <form class="d-flex">
							<input class="form-control btn-search-box" type="search" placeholder="ค้นหา" aria-label="Search"/>
							<button class="btn btn-search yellow" type="submit">
								<img src="assets/images/search.png" alt="" width="20" height="20"/>
							</button>
						  </form>
					  </span>
				  </div>
				</nav>
			</div>
		);
	}
}

export default NavbarTransparent;
