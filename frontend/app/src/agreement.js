import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './register.css';
import Navbarlogo from './Components/navbarlogo';
import DataHeader from './Components/dataHeader';
import reportWebVitals from './reportWebVitals';
import { Link } from "react-router-dom";

/* NOT AVALIABLE TO TEST RIGHT NOW BC DONT HAVE PATH TO LINK WITH*/
class Agreement extends React.Component {
	constructor(props) {
		super(props);
		this.handleLoad = this.handleLoad.bind(this);
	 }
	
	componentDidMount() {
		window.addEventListener('load', this.handleLoad);
		console.log("YEAHXXX!");
		const script = document.createElement("script");
		script.src = "assets/js/register.js";
		document.body.appendChild(script);
		
	}
	
	componentWillUnmount() { 
	   window.removeEventListener('load', this.handleLoad)  
	}
	
	handleLoad() {
		console.log("YEAH!");
	 }
	render (){
		return (
			<div className="Agreement">
				<Navbarlogo />
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
				</div>
                <div class="full-block ">
                    <h2 class="desc-b" contenteditable="true">You can use the overflow property when you want to have better control of the layout. The overflow property specifies what happens if content overflows an element's box. You can use the overflow property when you want to have better control of the layout. The overflow property specifies what happens if content overflows an element's box. You can use the overflow property when you want to have better control of the layout. The overflow property specifies what happens if content overflows an element's box. You can use the overflow property when you want to have better control of the layout. The overflow property specifies what happens if content overflows an element's box. You can use the overflow property when you want to have better control of the layout. The overflow property specifies what happens if content overflows an element's box.</h2>
                </div>
				<div class="lineregis">
					<a class="btn inlineweight" id="agree1"></a>
					<h5 class="inlineweight ttr">ข้าพเจ้ายินยอมในข้อตกลงการให้บริการ</h5>
					<Link to="/register">
						<div class="inlineweight">
							<a class="btn btn-cta-primary-yellowwide round " href="#" target="_blank" id="continue1">ต่อไป</a>
						</div>
					</Link>
				</div>
			</div>
		);
	}
}

export default Agreement;