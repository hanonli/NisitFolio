import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Navbarlogo from './Components/navbarlogo';
import InformationHeader from './Components/informationHeader';
import reportWebVitals from './reportWebVitals';
import { Link } from "react-router-dom";
import Tabs from "./Components/Tabs"; 
import Registab1 from "./Components/registab1";
import Registab2 from "./Components/registab2";
import Registab3 from "./Components/registab3";
import Registab4 from "./Components/registab4";
import Registab5 from "./Components/registab5";
import Registab6 from "./Components/registab6";
import Registab7 from "./Components/registab7";

class Register extends React.Component {

    componentDidMount() {
		window.addEventListener('load', this.handleLoad);
		console.log("YEAHXXX!");
		const script = document.createElement("script");
		script.src = "assets/js/register.js";
		document.body.appendChild(script);
		
	}
    
	render (){
		return (
			<div className="Register">
				<Navbarlogo />
				<InformationHeader />
                <ol class="tabs-list">
                    <li class="tab-list-item tab-list-active" id="tab-1" type="button">ข้อมูลสำคัญ</li>
                    <li class="tab-list-item" id="tab-2" type="button">ข้อมูลเพิ่มเติม</li>
                    <li class="tab-list-item" id="tab-3" type="button">ประวัติการศึกษา</li>
					<li class="tab-list-item" id="tab-4" type="button">ประวัติการทำงาน</li>
					<li class="tab-list-item" id="tab-5" type="button">ใบรับรอง</li>
					<li class="tab-list-item" id="tab-6" type="button">งานที่สนใจ</li>
					<li class="tab-list-item" id="tab-7" type="button">ทักษะเสริม</li>
                 </ol>
				 <div>
					<div class="tab-content" id="registab1-content">
						<Registab1 />
					</div>
					<div class="tab-content" id="registab2-content">
						<Registab2 />
					</div>
					<div class="tab-content" id="registab3-content">
						<Registab3 />
					</div>
					<div class="tab-content" id="registab4-content">
						<Registab4 />
					</div>
					<div class="tab-content" id="registab5-content">
						<Registab5 />
					</div>
					<div class="tab-content" id="registab6-content">
						<Registab6 />
					</div>
					<div class="tab-content" id="registab7-content">
						<Registab7 />
					</div>
				 </div>
                <Link to="/emailverify">
                    <div class="col block-right">
                        <a class="btn btn-cta-primary-yellowwide round profile-button" href="#" target="_blank" type="submit">ยืนยันตัวตน</a>
                    </div>
                </Link>
			</div>
		);
	}
}

export default Register;