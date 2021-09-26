import React from 'react';
import { Link } from "react-router-dom";
import $ from 'jquery';
import cookie from 'react-cookies';

class Navbar extends React.Component {
	constructor(props) {
		super(props);
		this.handleLoad = this.handleLoad.bind(this);
	 }
	
	componentDidMount() {
		window.addEventListener('load', this.handleLoad);
		console.log("Mounted Navbar script!");
		const script = document.createElement("script");
		script.src = "assets/js/navbar.js";
		document.body.appendChild(script);
		
		
		$(function(){
			$("#logout").click(function(){
			  //alert('logout!');
			  cookie.save('login-token', null, { path: '/' })
			   cookie.save('login-user', null, { path: '/' })
		   });
		});
		
		
	}
	
	componentWillUnmount() { 
	   window.removeEventListener('load', this.handleLoad)  
	}
	
	handleLoad() {
		console.log("Navbar script loaded!");
	 }
	
	render (){
		return (
			<div className="Navbar">
				<nav class="navbar-2 navbar-no-vertical-padding navbar-expand-lg navbar-light bg-light ">
					<div class="nav-flex">
						<div class="nvw1">
							<div class="lg-view">
								<a class="navbar-brand">
									<Link to="/home">
										<img src="assets/images/nav-bar-icon.png" alt="" width="146" height="26"/>
									</Link>
								</a>
							</div>
							<a class="sm-view navbar-brand-sm">
								<Link to="/home">
									<img src="assets/images/logo2_noname_new.png" alt="" width="60" height="60"/>
								</Link>
							</a>
						</div>

						<div class="nvw2">
							<form class="nvf">
								<input class="form-control btn-search-box home" id="search-input" type="search" placeholder="ค้นหา" aria-label="Search"/>
								<Link to="/search" class="d-flex">
								<button class="btn btn-search yellow" type="submit">
									<img src="assets/images/search.png" class="fx" alt="" width="20" height="20"/>
								</button>
								</Link>
							</form>
						</div>
						<div class="nvw3">
								<button class="navbar-toggler ms-auto" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
								  <span class="navbar-toggler-icon"></span>
								</button>
								<div>
								  <ul class="navbar-nav lg-view  ms-auto">
									<li class="nav-item tooltips-item shadow-box" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Bookmark">
									  <Link to="/bookmark">
										  <a class="nav-link" aria-current="page">
											<span class="lg-view">
												<img src="assets/images/bookmark_navigation_bar2.png" alt="" width="70" height="30"/>
											</span>
										  </a>
									  </Link>
									</li>
									<li class="nav-item tooltips-item shadow-box" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Portfolio">
									  <Link to="/portfolio">
										  <a class="nav-link">
											<span class="lg-view">
												<img src="assets/images/Portfolio_navigation_bar2.png" alt="" width="70" height="30"/>
											</span>
										  </a>
									  </Link>
									</li>
									<li class="nav-item tooltips-item shadow-box" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Myresume">
									  <Link to="/myresume">
										  <a class="nav-link">
											<span class="lg-view">
												<img src="assets/images/resume_navigation_bar2.png" alt="" width="70" height="30"/>
											</span>
										  </a>
									  </Link>
									</li>
									<li class="nav-item tooltips-item shadow-box" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Analytics">
									  <Link to="/analytics">
										  <a class="nav-link">
											<span class="lg-view">
												<img src="assets/images/Analytic_navigation_bar2.png" alt="" width="70" height="30"/>
											</span>
										  </a>
									  </Link>
									</li>
									<li class="nav-item tooltips-item shadow-box" id="logout" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Logout">
									  <Link to="/landing">
										  <a class="nav-link">
											<span class="lg-view">
												
													<img src="assets/images/logout2.png" alt="" width="70" height="30"/>
												
											</span>
										  </a>
									  </Link>
									</li>
								  </ul>
								</div>
								
						</div>
						
						
				  </div>
				  <div class="collapse navbar-collapse" id="navbarSupportedContent">
					  <ul class="navbar-nav sm-view ms-auto">
						<li class="nav-item shadow-box">
						  <Link to="/bookmark">
							  <a class="nav-link" aria-current="page">
								<span class="sm-view">
									บุ๊คมาร์ค
								</span>
							  </a>
						  </Link>
						</li>
						<li class="nav-item shadow-box">
						  <Link to="/portfolio">
							  <a class="nav-link">
								<span class="sm-view">
									แฟ้มสะสมงาน
								</span>
							  </a>
						  </Link>
						</li>
						<li class="nav-item shadow-box">
						  <Link to="/myresume">
							  <a class="nav-link">
								<span class="sm-view">
									เรซูเม่
								</span>
							  </a>
						  </Link>
						</li>
						<li class="nav-item shadow-box">
						  <Link to="/analytics">
							  <a class="nav-link">
								<span class="sm-view">
									การวิเคราะห์ทางสถิติ
								</span>
							  </a>
						  </Link>
						</li>
						<li class="nav-item shadow-box">
						  <Link to="/landing">
							  <a class="nav-link">
								<span class="sm-view">
									ออกจากระบบ
								</span>
							  </a>
						  </Link>
						</li>
					  </ul>
					</div>
				</nav>
			</div>
		);
	}
}

export default Navbar;
