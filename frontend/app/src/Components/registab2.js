import React from 'react';

class Registab2 extends React.Component {

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
			<div className="Registab2 regis-box-content">
				<div class="container-fluid margin-top1">
					<form class="row">
						<div class="col-2"></div>
						<div class="col-10">
							<div class="container-fluid">
								<div class="row">
									<div class="col-md-2">
										<label class="sexdistance form-f-sex">ที่อยู่ปัจจุบัน</label>
									</div>
									<div class="col-md-4">
										<input type="text" class="form-control dropbtn margin-bottom1" id="" placeholder="เมือง" ></input>
									</div>
									<div class="col-md-4">
										<input type="text" class="form-control dropbtn margin-bottom1" id="" placeholder="จังหวัด" ></input>
									</div>
								</div>
								<div class="row">
									<div class="col-md-2"></div>
									<div class="col-md-8">
										<input type="text" class="form-control dropbtn margin-bottom1" id="" placeholder="ประเทศ" ></input>
									</div>
								</div>
								<div class="col-md-10">
									<input type="text" class="form-control dropbtn margin-bottom1" id="" placeholder="อีเมลล์ติดต่อเพิ่มเติม" ></input>
								</div>
								<div class="row-3">
									<div class="col-md-10">
										<textarea type="text" class="form-control aboutmee margin-bottom1" id="" placeholder="บอกเล่าเกี่ยวกับตัวเองสั้นๆ"></textarea>
									</div>
								</div>
							</div>	
						</div>
					</form>	
				</div>
			</div>
		);
	}
}

export default Registab2;