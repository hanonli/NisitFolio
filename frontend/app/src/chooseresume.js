import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Navbarlogo from './Components/navbarlogo';
import InformationHeader from './Components/informationHeader';
import reportWebVitals from './reportWebVitals';
import { Link } from "react-router-dom";
import Registab1 from "./Components/registab1";
import Registab2 from "./Components/registab2";
import Registab3 from "./Components/registab3";
import Registab4 from "./Components/registab4";
import Registab5 from "./Components/registab5";
import Registab6 from "./Components/registab6";
import Registab7 from "./Components/registab7";
import $ from 'jquery';

class Register extends React.Component {

	componentDidMount() {
		
    $(function(){
        $('.tab-content').hide();
        $('#registab1-content').show();
        console.log("Yahaha!");
    $('#tab-1').on('click', function(){
        $('.tab-content').hide();
        $('.tab-list-item').removeClass('tab-list-active');
        $('#tab-1').addClass('tab-list-active')
        $('#registab1-content').show();
    });
    
    $('#tab-2').on('click', function(){
        $('.tab-content').hide();
        $('.tab-list-item').removeClass('tab-list-active');
        $('#tab-2').addClass('tab-list-active')
        $('#registab2-content').show();
    });
    
    $('#tab-3').on('click', function(){
        $('.tab-content').hide();
        $('.tab-list-item').removeClass('tab-list-active');
        $('#tab-3').addClass('tab-list-active')
        console.log("Eiei3");
        $('#registab3-content').show();
    });

        $('#tab-4').on('click', function(){
            $('.tab-content').hide();
            $('.tab-list-item').removeClass('tab-list-active');
            $('#tab-4').addClass('tab-list-active')
            $('#registab4-content').show();
        });

        $('#tab-5').on('click', function(){
            $('.tab-content').hide();
            $('.tab-list-item').removeClass('tab-list-active');
            $('#tab-5').addClass('tab-list-active')
            $('#registab5-content').show();
        });

    });
		}

	render() {
		return (
			<div className="ChooseResume">
				<Navbarlogo />
                <header class="header-white">
					<div class="container">     
						<div class="row align-items-end">
							<div class="col">
								<div class="topData2-content">
									<h1 class="name inline">เลือกข้อมูลผู้ใช้ที่จะแสดง</h1>
								</div>
							</div>
						</div>        
					</div>
				</header>
				<ol class="tabs-list">
					<li class="tab-list-item tab-list-active" id="tab-1" type="button">ประวัติการศึกษา</li>
					<li class="tab-list-item" id="tab-2" type="button">ประวัติการทำงาน</li>
					<li class="tab-list-item" id="tab-3" type="button">ใบรับรอง</li>
					<li class="tab-list-item" id="tab-4" type="button">งานที่สนใจ</li>
					<li class="tab-list-item" id="tab-5" type="button">ทักษะเสริม</li>
				</ol>
				<form class="needs-validation" novalidate>
				<div>
					<div class="tab-content" id="registab1-content">
						<Registab3 />
					</div>
					<div class="tab-content" id="registab2-content">
						<Registab4 />
					</div>
					<div class="tab-content" id="registab3-content">
						<Registab5 />
					</div>
					<div class="tab-content" id="registab4-content">
						<Registab6 />
					</div>
					<div class="tab-content" id="registab5-content">
						<Registab7 />
					</div>
				</div>
				<div class="col block-right2">
                    <button class="btn btn-cta-primary-blackwide round profile-button" href="/choosenothing" target="_blank"  id="cancelChoose">ยกเลิก</button>
					<button class="btn btn-cta-primary-yellowwide round profile-button marginLEx1" href="/myresume" target="_blank" type="submit" id="confirmChoose">ยืนยัน</button>
				</div>
				</form>
			</div>
		);
	}
}

export default Register;