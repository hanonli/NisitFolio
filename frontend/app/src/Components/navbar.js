import React from 'react';
import { Link } from "react-router-dom";

class Navbar extends React.Component {
	render (){
		return (
			<div className="Navbar">
				<nav class="navbar navbar-expand-lg navbar-light bg-light">
				  <div class="container-fluid">
					<a class="navbar-brand" href="#">
						<Link to="/landing">
							<img src="assets/images/nav-bar-icon.png" alt="" width="169" height="30"/>
						</Link>
					</a>
					
					 <span class="sm-view">
						  <form class="d-flex">
							<input class="form-control me-2" type="search" placeholder="ค้นหา" aria-label="Search"/>
							<button class="btn btn-outline-success" type="submit">
								<img src="assets/images/search.png" alt="" width="20" height="20"/>
							</button>
						  </form>
					  </span>
					
					<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
					  <span class="navbar-toggler-icon"></span>
					</button>
					<div class="collapse navbar-collapse" id="navbarSupportedContent">
					
					  <span class="lg-view-search mx-auto">
						  <form class="d-flex">
							<input class="form-control me-2" type="search" placeholder="ค้นหา" aria-label="Search"/>
							<button class="btn btn-outline-success" type="submit">
								<img src="assets/images/search.png" alt="" width="20" height="20"/>
							</button>
						  </form>
					  </span>
					  
					  <ul class="navbar-nav ms-auto">
						<li class="nav-item">
						  <a class="nav-link" aria-current="page" href="#">
							<span class="lg-view">
								<img src="assets/images/bookmark_navigation_bar.png" alt="" width="30" height="30"/>
							</span>
							<span class="sm-view">
								รายการโปรด
							</span>
						  </a>
						</li>
						<li class="nav-item">
						  <a class="nav-link" href="#">
							<span class="lg-view">
								<img src="assets/images/Analytic_navigation_bar.png" alt="" width="30" height="30"/>
							</span>
							<span class="sm-view">
								การวิเคราะห์ทางสถิติ
							</span>
						  </a>
						</li>
						<li class="nav-item">
						  <a class="nav-link" href="#">
							<span class="lg-view">
								<img src="assets/images/resume_navigation_bar.png" alt="" width="30" height="30"/>
							</span>
							<span class="sm-view">
								เรซูเม่
							</span>
						  </a>
						</li>
						<li class="nav-item">
						  <a class="nav-link" href="#">
							<span class="lg-view">
								<img src="assets/images/Portfolio_navigation_bar.png" alt="" width="30" height="30"/>
							</span>
							<span class="sm-view">
								แฟ้มสะสมงาน
							</span>
						  </a>
						</li>
					  </ul>
					  
					</div>
				  </div>
				</nav>
			</div>
		);
	}
}

export default Navbar;
