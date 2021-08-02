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
                            Nothing to see here, this tab is <em>extinct</em>! 
                        </div> 
                        <div label="ประวัติการศึกษา"> 
                            Nothing to see here, this tab is <em>extinct</em>! 
                        </div> 
                        <div label="ใบรับรอง"> 
                            Nothing to see here, this tab is <em>extinct</em>! 
                        </div> 
                        <div label="งานที่สนใจ"> 
                            Nothing to see here, this tab is <em>extinct</em>! 
                        </div>
                        <div label="ทักษะเสริม"> 
                            Nothing to see here, this tab is <em>extinct</em>! 
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