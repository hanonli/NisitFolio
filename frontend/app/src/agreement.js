import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Navbar from './Components/navbar';
import DataHeader from './Components/dataHeader';
import reportWebVitals from './reportWebVitals';

/* NOT AVALIABLE TO TEST RIGHT NOW BC DONT HAVE PATH TO LINK WITH*/
class Agreement extends React.Component {
	render (){
		return (
			<div className="Data">
				<Navbar />
				<div className="DataHeader">
				<header class="header-white">
					<div class="container">     
						<div class="row align-items-end">
							<div class="col">
								<div class="topData2-content">
									<h1 class="name inline">ข้อตกลงการให้บริการ</h1>
									<h1 class="symbol inline">></h1>
                                    <h1 class="name2 inline">ข้อมูลผู้ใช้</h1>
                                    <h1 class="symbol inline">></h1>
									<h1 class="name2 inline">ยืนยันตัวตน</h1>
									<h1 class="symbol inline">></h1>
									<h1 class="name2 inline">เสร็จสิ้น</h1>
								</div>
							</div>
						</div>        
					</div>
				</header>
                <div class="full-block">
                    <h2 class="desc-b" contenteditable="true">Not Avaliable,Need text permission here</h2>
                </div>
				<div class="col block-right">
					<a class="btn btn-cta-primary-yellow round" href="#" target="_blank">ต่อไป</a>
				</div>
			</div>
		);
	}
}

export default Agreement;