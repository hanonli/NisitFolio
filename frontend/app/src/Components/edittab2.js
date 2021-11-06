import React, { Component } from 'react'
import cookie from 'react-cookies'
import ApplicationURL from './path';
import $ from 'jquery';

class Registab2 extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
		  statusDelHeader: "Saved",
          imgStatusHeader: "assets/images/outline_cloud_done_black_24dp.png",
		  token: cookie.load('login-token'),
		  render:true
		};
	  }
	  componentDidMount(){
		var myaboutme = this.props.myaboutme_data ? this.props.myaboutme_data : [];
        var list_tab2 = [...myaboutme];
		//console.log(list_tab2);
		if(list_tab2.Aboutme!=""){
			//alert(list_tab2[0].Aboutme);
			$('#aboutme2').val(list_tab2[0].Aboutme);
		}
	  }
	render (){
		return (
			<div className="Registab2">
				<img class="status-img-headerrrr114" src={this.state.imgStatusHeader} onContextMenu={(e) => e.preventDefault()} onDragStart={(e) => e.preventDefault()}></img>
                <h1 class="status-present-headerrr114">{this.state.statusDelHeader}</h1>
				<div class="regis-box-content1 container-fluid">
					<form class="row">
						<div class="col-1"></div>
						<div class="col-10">
							<div class="container-fluid">
								<div class="row">
									<div class="col-md-2">
										<label class="sexdistance form-f-sex">ที่อยู่ปัจจุบัน</label>
									</div>
									<div class="col-md-10">
										<h4 class="form-control margin-bottom1 fff dis_input1">ประเทศไทย</h4>
									</div>
								</div>
								<div class="row">
									<div class="col-md-2"></div>
									<div class="col-md-5">
										<select class="form-select dropbtn margin-bottom1 fff" id="province" required>
											<option selected disabled value="">จังหวัด</option>
										</select>
									</div>
									<div class="col-md-5">
										<select class="form-select dropbtn margin-bottom1 fff" id="townny" required>
											<option selected disabled value="">เมือง</option>
										</select>
									</div>
								</div>
								<div class="row-3">
									<div class="col-md-12">
										<textarea maxlength="280" type="text" class="form-control aboutmee margin-bottom2" id="aboutme2" placeholder="อธิบายตัวตนของคุณ เพื่อให้คนอื่นรู้ว่าคุณเป็นคนยังไงและสนใจเรื่องอะไร" autocomplete="off"></textarea>
									</div>
								</div>
							</div>	
						</div>
						<div class="col-1"></div>
					</form>	
				</div>
			</div>
		);
	}
}

export default Registab2;