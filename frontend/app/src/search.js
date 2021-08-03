import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Navbar from './Components/navbar';
import BookmarkTabs from './Components/bookmarkTabs';
import SearchHeader from './Components/searchHeader';
import reportWebVitals from './reportWebVitals';

class Search extends React.Component {
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
					<SearchHeader />
					<BookmarkTabs />
			</div>
		);
	}
}

export default Search;
