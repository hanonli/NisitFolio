import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Chart from 'chart.js';
import Navbar from './Components/navbar';
import AnalyticsHeader from './Components/analyticsHeader';
import AnalyticsTabs from './Components/analyticsTabs';
import reportWebVitals from './reportWebVitals';

class Analytics extends React.Component {
	constructor(props) {
		super(props);
		this.handleLoad = this.handleLoad.bind(this);
	 }
	
	componentDidMount() {
		window.addEventListener('load', this.handleLoad);
		console.log("YEAHXXX!");
		const script = document.createElement("script");
		script.src = "assets/js/analytics.js";
		document.body.appendChild(script);
		//setTimeout(function() { chart.update(); }, 500);
		
	}
	
	componentWillUnmount() { 
	   window.removeEventListener('load', this.handleLoad)  
	}
	
	handleLoad() {
		console.log("YEAH!");
	 }
	
	render (){
		return (
			<div className="Analytics">
				<Navbar />
				<AnalyticsTabs />
			</div>
		);
	}
}

export default Analytics;
