import React from 'react';
import { Link } from "react-router-dom";

class Navbarlogo extends React.Component {
	componentWillUnmount() { 
		window.removeEventListener('load', this.handleLoad)  
	 }
	 
	 handleLoad() {
		 console.log("YEAH!");
	 }
	render (){
		return (
			<div className="Navbarlogo">
				<nav class="navbar-2 navbar-no-vertical-padding navbar-expand-lg navbar-light bg-light ">
				  <div class="container-fluid p-0">
					<div class="row expandnavlg">
                        <div>
							<Link to="/landing">
								<img src="assets/images/nav-bar-icon.png" alt="" width="146" height="26"/>
							</Link>
                        </div>
					</div>
				  </div>
				</nav>
			</div>
		);
	}
}

export default Navbarlogo;
