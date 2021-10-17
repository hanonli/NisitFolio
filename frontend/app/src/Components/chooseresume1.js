import { data } from 'jquery';
import React, { useState } from 'react';
import cookie from 'react-cookies';
import $ from 'jquery';

class Chooseresume1 extends React.Component {

	constructor(props) {
		super(props);
		this.handleLoad = this.handleLoad.bind(this);
		this.state = {
			data: [],
			render: true,
			//list_of_aca: this.props.list_of_aca,
		}
	}

    componentDidMount() {
		setTimeout(() => {
		const list_of_aca = this.props.list_of_aca ? this.props.list_of_aca : [];
		var locc = [...list_of_aca];
		//console.log(`list_of_aca:`, this.state.list_of_aca);
		console.log(`list_of_aca:`, list_of_aca);
		console.log(`locc:`, locc);
		/*function get_high_id(list_of_high, x) {
			//var x = 1;
			list_of_high.forEach(ele => {
				ele["high_pos"] = x;
				console.log("x:", x);
				x++;
			});
			return list_of_high;
		}
		console.log('i am resumetab1'+data);
		
		function show_all_high() {
		
			list_of_high.forEach(ele => {
				var grid_high1 = '<div class="t3-content1 row">\
									<div class="col-4">\
										<div class="font-titlet3_2 font-boldt3">{degree_high}</div>\
										<div class="font-titlet3_2 font-khotboldt3">{year_high}</div>\
									</div>\
									<div class="col-8">\
										<div class="font-titlet3_2">{field_high}</div>\
										<div class="font-titlet3_2">{name_high}</div>\
										<div class="font-titlet3_2">เกรด {grade_high}</div>\
									</div>';
		
				var grid_high2 = `
									<div class="layer_icon1" id={no-list-high}>\
									<button type="button" class="btn button1" id="edit-high"><img src="assets/images/blackedit.png" width="27" height="27"></img></button>\
									<button type="button" class="btn button2" id="del-high"><img src="assets/images/bin.png" width="30" height="30"></img></button>\
									</div>\
								</div>`;
				grid_high2 = grid_high2.replace("{no-list-high}", ele["id"]);
				grid_high1 = grid_high1.replace("{no_high}", ele["high_pos"]);
				grid_high1 = grid_high1.replace("{degree_high}", ele["high_degree"]);
				// if (ele["high_name"].length > 34) {
				//   grid_high1 = grid_high1.replace("{name_high}", ele["high_name"].slice(0, 34) + "...");
				// }
				// else {
				//   grid_high1 = grid_high1.replace("{name_high}", ele["high_name"]);
				// }
		
				grid_high1 = grid_high1.replace("{name_high}", ele["high_name"]);
				if(ele["high_grade"]=="0.00"){
				grid_high1 = grid_high1.replace("{grade_high}", '-');
				}
				else{
				grid_high1 = grid_high1.replace("{grade_high}", ele["high_grade"]);
				}
				if(ele["high_field"]=="none"){
				grid_high1 = grid_high1.replace("{field_high}", '-');
				}
				// else if(ele["high_field"].length > 34){
				//   grid_high1 = grid_high1.replace("{field_high}", ele["high_field"].slice(0, 34) + "...");
				// }
				// else{
				//   grid_high1 = grid_high1.replace("{field_high}", ele["high_field"]);
				// }
				grid_high1 = grid_high1.replace("{field_high}", ele["high_field"]);
				if(ele["high_year"]=="0"){
				grid_high1 = grid_high1.replace("{year_high}", '-');
				}
				else if(ele["high_year"]=="9999"){
				grid_high1 = grid_high1.replace("{year_high}", 'กำลังศึกษา');
				}
				else{
				grid_high1 = grid_high1.replace("{year_high}", ele["high_year"]);
				}
				$(".list-of-high").append(grid_high1 + grid_high2);
				console.log(`list_of_high:`, list_of_high);
			});
		}
		window.addEventListener('load', this.handleLoad);
		const script = document.createElement("script");
		script.src = "assets/js/chooseresume.js";
		document.body.appendChild(script);
		*/		
		function show_all_aca() {
			list_of_aca.forEach(ele => {
				var grid_aca1 = '<div class="t3-content1 row">\
									<div class="col-3">\
										<div class="font-titlet3_1 font-boldt3">{degree_aca}</div>\
										<div class="font-titlet3_1 font-khotboldt3">{year_aca}</div>\
									</div>\
									<div class="col-9">\
										<div class="font-titlet3_1">{field_aca}</div>\
										<div class="font-titlet3_1">{faculty_aca}</div>\
										<div class="font-titlet3_1">{name_aca}</div>\
										<div class="font-titlet3_1">เกรด {grade_aca}</div>\
									</div>';
		
				var grid_aca2 = `
									<div class="layer_icon1" id={no-list-aca}>\
									<button type="button" class="btn button1" id="edit-aca"><img src="assets/images/blackedit.png" width="27" height="27"></img></button>\
									<button type="button" class="btn button2" id="del-aca"><img src="assets/images/bin.png" width="30" height="30"></img></button>\
									</div>\
								</div>`;
				grid_aca2 = grid_aca2.replace("{no-list-aca}", ele["id"]);
				grid_aca1 = grid_aca1.replace("{no_aca}", ele["aca_pos"]);
				//grid_aca1 = grid_aca1.replace("{name_aca}", ele["aca_name"]);
				grid_aca1 = grid_aca1.replace("{degree_aca}", ele["aca_degree"]);
				//grid_aca1 = grid_aca1.replace("{field_aca}", ele["aca_field"]);
				//grid_aca1 = grid_aca1.replace("{faculty_aca}", ele["aca_faculty"]);
				//grid_aca1 = grid_aca1.replace("{year_aca}", ele["aca_year"]);
				grid_aca1 = grid_aca1.replace("{name_aca}", ele["aca_name"]);
				grid_aca1 = grid_aca1.replace("{faculty_aca}", ele["aca_faculty"]);
				if(ele["aca_grade"]=="0.00"){
				grid_aca1 = grid_aca1.replace("{grade_aca}", '-');
				}
				else{
				grid_aca1 = grid_aca1.replace("{grade_aca}", ele["aca_grade"]);
				}
				if(ele["aca_field"]=="none"){
				grid_aca1 = grid_aca1.replace("{field_aca}", '-');
				}
				else{
				grid_aca1 = grid_aca1.replace("{field_aca}", ele["aca_field"]);
				}
				if(ele["aca_year"]==0){
				grid_aca1 = grid_aca1.replace("{year_aca}", '-');
				}
				else if(ele["aca_year"]==9999){
				grid_aca1 = grid_aca1.replace("{year_aca}", 'กำลังศึกษา');
				}
				else{
				grid_aca1 = grid_aca1.replace("{year_aca}", ele["aca_year"]);
				}
				$(".list-of-aca").append(grid_aca1 + grid_aca2);
				console.log(`list_of_aca:`, list_of_aca);
			});
		}
		/*if(this.state.list_of_aca!=[]){
			console.log('My ACA NOT EMPTY!');
			show_all_aca();
		}/*
		if(list_of_high!=[]){
			show_all_high();
		}*/
	},2000);
	}
	handleLoad() {
		console.log("YEAH!");
	}

	componentWillUnmount() { 
	   window.removeEventListener('load', this.handleLoad)  
	}

	render(){
        //this.getDatas();
        //console.log('state : ' + JSON.stringify(this.state))
		return (
			<div className="Registab3">
				<h2 class="headerChooseResume">คุณสามารถเลือกประวัติการศึกษาที่สอดคล้องกับตำแหน่งงานที่สนใจได้สูงสุด 6 รายการ</h2>
				<div class='container-fluid Editresume-box-content6'>
					<div class='col-16'>
						<div class='row'>
								<div className='choosetab3_formbox col-6'>
                                    <div class='row longlang'>
                                        <div class='col-10'>
                                            <h2 class="font-headert3">อุดมศึกษา</h2>
                                        </div>
                                    </div>
									<div className=''>
                                        <h5 class='font-dest3'>ระดับอุดมศึกษาจะประกอบไปด้วย ปวส. ปริญญาตรี ปริญญาโท และปริญญาเอก</h5>
                                        <div class="list-of-aca" id="in-list-of-aca"></div>
									</div>
                                </div>
								<div className='choosetab3_formbox col-6'>
                                    <div class='row longlang'>
                                        <div class='col-10'>
									        <h2 class="font-headert3">มัธยมศึกษา</h2>
                                        </div>
                                    </div>
									<div className=''>		
                                        <h5 class='font-dest3'>ระดับมัธยมศึกษาในที่นี้จะประกอบไปด้วย มัธยมศึกษาตอนปลาย และปวช.</h5>
                                        <div class="list-of-high" id="in-list-of-high"></div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<h5 id="dangerzonect1" class='normalformzonet3'></h5>
				</div>
		);
	}
}

export default Chooseresume1;

