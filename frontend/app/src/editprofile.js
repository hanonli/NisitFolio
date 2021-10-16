import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Navbar from './Components/navbar';
import DataHeader from './Components/dataHeader';
import reportWebVitals from './reportWebVitals';
import Tabs from "./Components/Tabs"; 
import { Link } from "react-router-dom";
import $ from 'jquery';

/* THIS FILE IS FOR DATA-EDITING TEST, CAN'T LINK TO OTHER DATA PAGES*/
class Editprofile extends React.Component {
	componentDidMount() {
		$('#cancelChoose').on('click',function(){
			window.history.go(-1);
		});
		$('#confirmEdit').on('click',function(){
        	window.location = ("home");
		})
	}
	render (){
		return (
			<div className="Editprofile">
				<Navbar />
				<DataHeader />
				<div class="col block-right2">
					<button class="btn btn-cta-primary-blackwide round profile-button" target="_blank" id="cancelChoose">ยกเลิก</button>
					<button class="btn btn-cta-primary-yellowwide round profile-button marginLEx1" target="_blank" type="submit" id="confirmEdit">ยืนยัน</button>
				</div>
			</div>
		);
	}
}

export default Editprofile;