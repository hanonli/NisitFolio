import React from 'react';
import { Link } from "react-router-dom";

class BookmarkHeader extends React.Component {
	constructor(props) {
		super(props);
		this.handleLoad = this.handleLoad.bind(this);
	 }
	
	componentDidMount() {
		window.addEventListener('load', this.handleLoad);
		//console.log("YEAHXXX!");
		const script = document.createElement("script");
		script.src = "assets/js/search-header.js";
		document.body.appendChild(script);
		
	}
	
	componentWillUnmount() { 
	   window.removeEventListener('load', this.handleLoad)  
	}
	
	handleLoad() {
		console.log("search header script loaded!");
	 }
	
	render (){
		return (
			<div className="BookmarkHeader">
				<header class="header-white lg-view bookmark-header-fixed">
					<div class="container-fluid yahaha2">     
						<div class="row">
							<div class="col">
								<div class="topDataBk-content">
									<h1 class="name inline">Search</h1>
									<h1 class="symbol inline">.</h1>
									<h1 class="name2 inline"></h1>
									<h1></h1>
								</div>
							</div>
						</div>        
					</div>
				</header>
			</div>
		);
	}
}

export default BookmarkHeader;