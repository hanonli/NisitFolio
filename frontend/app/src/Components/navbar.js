import React from 'react';
import { Link } from "react-router-dom";

class Navbar extends React.Component {
	render (){
		return (
			<div className="Navbar">
				<div class="icon-bar">
				  <Link to="/landing">
					<img class="icon-left" type='button' src="assets/images/nav-bar-icon.png" alt="profile image" />
				   </Link>
				  <Link to="/home">
					<a class="icon-right" href="#"><i class="fa fa-home"></i></a> 
				  </Link>
				  <a class="icon-right" href="#"><i class="fa fa-envelope"></i></a> 
				  <a class="icon-right" href="#"><i class="fa fa-globe"></i></a>
				  <a class="icon-right" href="#"><i class="fa fa-search"></i></a> 
				</div>
			</div>
		);
	}
}

export default Navbar;
