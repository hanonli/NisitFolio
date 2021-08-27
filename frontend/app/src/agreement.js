import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
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
				<div class="container">
					<div class="row full-block ">
                    	<h2 class="fontsmallhere" contenteditable="true">You can use the overflow property when you want to have better control of the layout. The overflow property specifies what happens if content overflows an element's box. You can use the overflow property when you want to have better control of the layout. The overflow property specifies what happens if content overflows an element's box. You can use the overflow property when you want to have better control of the layout. The overflow property specifies what happens if content overflows an element's box. You can use the overflow property when you want to have better control of the layout. The overflow property specifies what happens if content overflows an element's box. You can use the overflow property when you want to have better control of the layout. The overflow property specifies what happens if content overflows an element's box.</h2>
                	</div>
					<div class="row lineregis">
						<div class="form-check inlineweight col-md-9 was-validated">
							<input class="form-check-input" type="radio" name="flexRadioDefault" id="agree1"></input>
							<label class="form-check-label fontsmallhere" for="flexRadioDefault2">
								ข้าพเจ้ายินยอมในข้อตกลงการให้บริการ
							</label>
						</div>
						<div class="inlineweight col-md-2">
							<button class="btn btn-cta-primary-yellowwide round" href="/register.js" target="_self" id="continue1" disabled>ต่อไป</button>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Agreement;

//<a class="btn inlineweight" id="agree1"></a>