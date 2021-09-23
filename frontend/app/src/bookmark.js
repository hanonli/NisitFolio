import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Navbar from './Components/navbar';
import BookmarkTabs from './Components/bookmarkTabs';
import BookmarkHeader from './Components/bookmarkHeader';
import reportWebVitals from './reportWebVitals';

class Bookmark extends React.Component {
	constructor(props) {
		super(props);
		this.handleLoad = this.handleLoad.bind(this);
	 }
	
	componentDidMount() {
		window.addEventListener('load', this.handleLoad);
		console.log("YEAHXXX!");
		const script = document.createElement("script");
		script.src = "assets/js/search-bookmark.js";
		document.body.appendChild(script);
		
	}
	
	componentWillUnmount() { 
	   window.removeEventListener('load', this.handleLoad)  
	}
	
	handleLoad() {
		console.log("YEAH!");
	 }
	
	render (){
		return (
			<div className="Home">
			<link rel="stylesheet" href="assets/css/bookmark.css" />
					<Navbar /> <br></br>
					
					<header class="lg-view header-white bookmark-header-fixed">
						<div class="container-fluid yahaha2">     
							<div class="row">
								<div class="col">
									<div class="topDataBk-content">
										<h1 class="name inline">Bookmark</h1>
										<h1></h1>
									</div>
								</div>
							</div>        
						</div>
					</header>
				
					<BookmarkTabs />
			</div>
		);
	}
}

export default Bookmark;
