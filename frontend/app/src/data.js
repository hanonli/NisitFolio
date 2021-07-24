import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Navbar from './Components/navbar';
import DataHeader from './Components/dataHeader';
import reportWebVitals from './reportWebVitals';

class Data extends React.Component {
	render (){
		return (
			<div className="Data">
				<Navbar />
				<DataHeader />
				<div class="full-block">
                    <h2 class="desc-b" contenteditable="true">Not Avaliable,Need text permission here<i class="fas fa-pencil-alt"></i></h2>
                </div>
				<div class="col block-right">
					<a class="btn btn-cta-primary-yellow round" href="#" target="_blank">ยืนยันตัวตน</a>
				</div>
			</div>
		);
	}
}

export default Data;