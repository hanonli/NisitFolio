import React from 'react';
import logo from './logo.svg';

class Navbar extends React.Component {
	render (){
		return (
			<div className="Navbar">
				<div class="icon-bar">
				  <img class="icon-left" type='button' src="assets/images/nav-bar-icon.png" alt="profile image" />
				  <a class="icon-right" href="#"><i class="fa fa-home"></i></a> 
				  <a class="icon-right" href="#"><i class="fa fa-envelope"></i></a> 
				  <a class="icon-right" href="#"><i class="fa fa-globe"></i></a>
				  <a class="icon-right" href="#"><i class="fa fa-search"></i></a> 
				</div>
			</div>
		);
	}
}

export default Navbar;
