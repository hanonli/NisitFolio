import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Navbarlogo from './Components/navbarlogo';
import reportWebVitals from './reportWebVitals';
import { Link } from "react-router-dom";

/* NOT AVALIABLE TO TEST RIGHT NOW BC DONT HAVE PATH TO LINK WITH*/
class Successregis extends React.Component {
	render (){
		return (
			<div className="Successregis">
				<Navbarlogo />
				<div className="DataHeader">
					<header class="header-white">
						<div class="container">     
							<div class="row align-items-end">
								<div class="col">
                                    <div class="topData2-content">
									    <h1 class="name inline">เสร็จสิ้น</h1>
                                    </div>
                                </div>
							</div>        
						</div>
					</header>
				</div>
                <div class="full-block ">
                    <h2 class="desc-b" contenteditable="true">Not Avaliable,Need text permission here</h2>
                </div>
				<Link to="/home">
					<div class="col block-right">
						<a class="btn btn-cta-primary-yellow round profile-button" href="#" target="_blank">ต่อไป</a>
					</div>
				</Link>
			</div>
		);
	}
}

export default Successregis;