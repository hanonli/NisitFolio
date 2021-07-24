import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Navbar from './Components/navbar';
import InformationHeader from './Components/informationHeader';
import reportWebVitals from './reportWebVitals';
import { Link } from "react-router-dom";

class Information5 extends React.Component {
	render (){
		return (
			<div className="Information5">
				<Navbar />
				<InformationHeader />
				<div class="full-block">
                    <h1>ใบรับรอง</h1>
                    <h2 class="desc-b" contenteditable="true">Not Avaliable,Need text permission here<i class="fas fa-pencil-alt"></i></h2>
                </div>
                <Link to="/home">
                    <div class="col block-right">
                        <a class="btn btn-cta-primary-yellow round" href="#" target="_blank">ยืนยันตัวตน</a>
                    </div>
                </Link>
			</div>
		);
	}
}

export default Information5;