import React from 'react';
import './register.css';

class Registab7 extends React.Component {
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
			<div className="Registab7">
				<div class="regis-box-content7 " id="yyy">
					<h1 class="headerRegis" id="havesideskill">ทักษะเสริม</h1>
					<div class="dropdowntap7_1">
						<input class="form-control dropbtn ssf" list="sideskillop" id="sideskilllist1" placeholder="เลือกทักษะเสริมที่ถนัด"></input>
						<datalist class="dropdown-content" id="sideskillop">
							<option value="Technical"></option>
							<option value="Computer"></option>
							<option value="Analytical"></option>
							<option value="Marketing"></option>
							<option value="Presentation"></option>
							<option value="Management"></option>
							<option value="Writing"></option>
							<option value="Language"></option>
							<option value="Design"></option>
						</datalist>	
					</div>
					<div class="dropdowntap7_2">
						<input class="form-control dropbtn ssf" list="sideskillop" id="sideskilllist2"  placeholder="เลือกทักษะเสริมที่ถนัด"></input>
					</div>
					<div class="dropdowntap7_3">
						<input class="form-control dropbtn ssf" list="sideskillop" id="sideskilllist3"  placeholder="เลือกทักษะเสริมที่ถนัด"></input>
					</div>
					<div class="modal fade" id="Modaltab7-1" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
						<div class="modal-dialog modal-dialog-centered">
							<div class="modal-content minisize">
								<h4 class="del-b">คุณต้องการลบทักษะเสริม ?</h4>
								<div class="centerverify">
										<a type="button" class="btn btn-cta-primary-svshort round profile-button grey margin-right-m" data-bs-dismiss="modal">ยกเลิก</a>
										<a type="button" class="btn btn-cta-primary-yellowshort profile-button round" id="del_sideskill1" data-bs-dismiss="modal">ลบ</a>
								</div>
							</div>
						</div>
					</div>
					<div class="modal fade" id="Modaltab7-2" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
						<div class="modal-dialog modal-dialog-centered">
							<div class="modal-content minisize">
								<h4 class="del-b">คุณต้องการลบทักษะเสริม ?</h4>
								<div class="centerverify">
										<a type="button" class="btn btn-cta-primary-svshort round profile-button grey margin-right-m" data-bs-dismiss="modal">ยกเลิก</a>
										<a type="button" class="btn btn-cta-primary-yellowshort profile-button round" id="del_sideskill2" data-bs-dismiss="modal">ลบ</a>
								</div>
							</div>
						</div>
					</div>
					<div class="modal fade" id="Modaltab7-3" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
						<div class="modal-dialog modal-dialog-centered">
							<div class="modal-content minisize">
								<h4 class="del-b">คุณต้องการลบทักษะเสริม ?</h4>
								<div class="centerverify">
										<a type="button" class="btn btn-cta-primary-svshort round profile-button grey margin-right-m" data-bs-dismiss="modal">ยกเลิก</a>
										<a type="button" class="btn btn-cta-primary-yellowshort profile-button round" id="del_sideskill3" data-bs-dismiss="modal">ลบ</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Registab7;