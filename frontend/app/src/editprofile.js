import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Navbar from './Components/navbar';
import DataHeader from './Components/dataHeader';
import reportWebVitals from './reportWebVitals';
import Tabs from "./Components/Tabs"; 
import { Link } from "react-router-dom";

/* THIS FILE IS FOR DATA-EDITING TEST, CAN'T LINK TO OTHER DATA PAGES*/
class Editprofile extends React.Component {
	render (){
		return (
			<div className="Editprofile">
				<Navbar />
				<DataHeader />
				<Link to="/home">
					<div class="col block-right">
						<a class="btn btn-cta-primary-yellowwide round profile-button" href="#" target="_blank">ยืนยัน</a>
					</div>
				</Link>
			</div>
		);
	}
}

export default Editprofile;