import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Navbar from './Components/navbar';
import DataHeader from './Components/dataHeader';
import reportWebVitals from './reportWebVitals';

/* THIS FILE IS FOR DATA-EDITING TEST, CAN'T LINK TO OTHER DATA PAGES*/
class Data extends React.Component {
	render (){
		return (
			<div className="Data">
				<Navbar />
				<DataHeader />
				<div class="full-block">
                    <h2 class="desc-b" contenteditable="true">Not Avaliable, This page is for *DATA-EDITING PAGE* Test</h2>
                </div>
				<div class="col block-right">
					<a class="btn btn-cta-primary-yellow round" href="#" target="_blank">ยืนยันการแก้ไข</a>
				</div>
			</div>
		);
	}
}

export default Data;