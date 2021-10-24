import React from 'react';
import { Link } from "react-router-dom";
import $ from 'jquery';
import cookie from 'react-cookies';

class Navbar extends React.Component {
	constructor(props) {
		super(props);
		this.handleLoad = this.handleLoad.bind(this);
		this.state = {
			tpId: 'user'
		}
	 }
	
	componentDidMount() {
		window.addEventListener('load', this.handleLoad);
		console.log("Mounted Navbar script!");
		const script = document.createElement("script");
		script.src = "assets/js/navbar.js";
		document.body.appendChild(script);
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
				<nav class="navbar-2 navbar-no-vertical-padding navbar-expand-lg navbar-light bg-light static-nav">
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
								<div>
								  <ul class="navbar-nav lg-view  ms-auto">
								    <li class="nav-item tooltips-item">
										  <a class="nav-link" aria-current="page">
											<div class="nav-dum" />
										  </a>
									</li>
									 <li class="nav-item tooltips-item">
									  <a class="nav-link" aria-current="page">
											<div class="nav-dum" />
										  </a>
									</li>
									 <li class="nav-item tooltips-item">
									  <a class="nav-link" aria-current="page">
											<div class="nav-dum" />
										  </a>
									</li>
									 <li class="nav-item tooltips-item">
									  <a class="nav-link" aria-current="page">
											<div class="nav-dum" />
										  </a>
									</li>
									 <li class="nav-item tooltips-item">
									   <a class="nav-link" aria-current="page">
											<div class="nav-dum" />
										  </a>
									</li>
									 <li class="nav-item tooltips-item">
									  <a class="nav-link" aria-current="page">
											<div class="nav-dum" />
										  </a>
									</li>
								  </ul>
								</div>
								
						</div>
				  </div>
				</nav>
				<div class="nav-margin"></div>
			</div>
		);
	}
}

export default Navbar;
