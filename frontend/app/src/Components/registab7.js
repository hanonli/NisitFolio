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
				<div class="regis-box-content" id="yyy">
					<h1 class="headerRegis" id="havesideskill">ทักษะเสริม</h1>
					<div class="dropdowntap7">
						<input class="form-control dropbtn ssf" list="sideskillop" id="sideskilllist" placeholder="เลือกทักษะเสริมที่ถนัด"></input>
						<datalist class="dropdown-content" id="sideskillop">
							<option value="Photoshop"></option>
							<option value="Word"></option>
							<option value="Excel"></option>
							<option value="Ai"></option>
							<option value="Python"></option>
							<option value="Photoshop"></option>
							<option value="Word"></option>
							<option value="Excel"></option>
							<option value="Ai"></option>
							<option value="Python"></option>
							<option value="Photoshop"></option>
							<option value="Word"></option>
							<option value="Excel"></option>
							<option value="Ai"></option>
							<option value="Python"></option>
						</datalist>
					</div>
					<a>test delete-dropdown popup</a>
					<button type="button" class="btn" data-bs-toggle="modal" data-bs-target="#Modaltab7">
							<img src="assets/images/bin.png"></img>
					</button>
					<div class="modal fade" id="Modaltab7" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
						<div class="modal-dialog modal-dialog-centered">
							<div class="modal-content minisize">
								<h4 class="del-b">คุณต้องการลบทักษะเสริม ?</h4>
								<div class="centerverify">
										<a type="button" class="btn btn-cta-primary-svshort round profile-button grey margin-right-m" data-bs-dismiss="modal">ยกเลิก</a>
										<a type="button" class="btn btn-cta-primary-yellowshort profile-button round" id="del_sideskill" data-bs-dismiss="modal">ลบ</a>
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