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

class Register extends React.Component {
	render (){
		return (
			<div className="Register">
				<Navbarlogo />
				<InformationHeader />
				<div>
                    <Tabs> 
                        <div label="ข้อมูลสำคัญ"> 
                            <Registab1 />
                        </div> 
                        <div label="ข้อมูลเพิ่มเติม"> 
                            <Registab2 />
                        </div> 
                        <div label="ประวัติการทำงาน">
                            <h1>P kung</h1>
                        </div> 
                        <div label="ประวัติการศึกษา"> 
                            <h1>P kung</h1>
                        </div> 
                        <div label="ใบรับรอง"> 
                            <h1>Pluem kung</h1>
                        </div> 
                        <div label="งานที่สนใจ"> 
                            <h1>Pluem kung</h1>
                        </div>
                        <div label="ทักษะเสริม"> 
                            <h1>Rungry Jang</h1>
                        </div>  
                    </Tabs>
                </div>
                <Link to="/emailverify">
                    <div class="col block-right">
                        <a class="btn btn-cta-primary-yellowwide round profile-button" href="#" target="_blank">ยืนยันตัวตน</a>
                    </div>
                </Link>
			</div>
		);
	}
}

export default Register;