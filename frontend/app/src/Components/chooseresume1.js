import { data } from 'jquery';
import React, { useState } from 'react';
import cookie from 'react-cookies';
import $ from 'jquery';

class Chooseresume1 extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			data : [],
		}
	}

    componentDidMount() {
				
		function get_high_id(list_of_high, x) {
			//var x = 1;
			list_of_high.forEach(ele => {
				ele["high_pos"] = x;
				console.log("x:", x);
				x++;
			});
			return list_of_high;
		}
				
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
        var data_aca = [], data_high = [],list_of_high=[],list_of_aca=[];
		var token = cookie.load('login-token')
        console.log('Your Token is: '+token);
		fetch("http://localhost:2000/register/getinfo",{
			method: "GET",
			headers: {
				'Authorization': 'Bearer '+token,	
				"Access-Control-Allow-Origin": "*",
				"Access-Control-Allow-Methods": "*",
				"Access-Control-Allow-Credentials": true,
				"Content-Type": "application/json"
			},
		})
		.then(response => response.json())
		.then((datas) => {
            console.log('You Fetch Success!');
			console.log(datas);
			this.setState({
				data : datas,
			})
			 console.log('this.state.data :'+this.state.data);
			 console.log(this.state.data.Degree);
			 /*this.state.data.Degree.forEach(element => {
			if(element=='มัธยมศึกษาตอนปลาย'||element=='ปวช.'){
				list_of_high.push({
					id: this.state.data.EducationHistory_id,
					high_pos: 0,
					high_name: this.state.data.Academy,
					high_faculty: 'none',
					high_degree: this.state.data.Degree,
					high_grade: this.state.data.Grade,
					high_field: this.state.data.Field_of_study,
					high_year: this.state.data.Education_End_Year,
				});
				get_high_id(list_of_high, 1);
				console.log(list_of_high);
			}
			else{
				list_of_aca.push({
					id: this.state.data.EducationHistory_id,
					aca_pos: 0,
					aca_name: this.state.data.Academy,
					aca_faculty: 'none',
					aca_degree: this.state.data.Degree,
					aca_grade: this.state.data.Grade,
					aca_field: this.state.data.Field_of_study,
					aca_year: this.state.data.Education_End_Year,
				});
				get_high_id(list_of_aca, 1);
				console.log(list_of_aca);
			}
		});*/
		});
	}

	componentWillUnmount() { 
	   window.removeEventListener('load', this.handleLoad)  
	}

	render(){
        //this.getDatas();
        //console.log('state : ' + JSON.stringify(this.state))
		return (
			<div className="Registab3 regis-box-content1">
				<div class='container-fluid'>
					<div class='col-16'>
						<div class='row'>
								<div className='registab3_formbox col-6'>
                                    <div class='row longlang'>
                                        <div class='col-10'>
                                            <h2 class="font-headert3">อุดมศึกษา</h2>
                                        </div>
                                    </div>
									<div className=''>
                                        <h5 class='font-dest3'>ระดับอุดมศึกษาจะประกอบไปด้วย ปวส. ปริญญาตรี ปริญญาโท และปริญญาเอก</h5>
                                        <div class="list-of-aca" id="in-list-of-aca" state={this.state}></div>
									</div>
                                </div>
								<div className='registab3_formbox col-6'>
                                    <div class='row longlang'>
                                        <div class='col-10'>
									        <h2 class="font-headert3">มัธยมศึกษา</h2>
                                        </div>
                                    </div>
									<div className=''>		
                                        <h5 class='font-dest3'>ระดับมัธยมศึกษาในที่นี้จะประกอบไปด้วย มัธยมศึกษาตอนปลาย และปวช.</h5>
                                        <div class="list-of-high" id="in-list-of-high" state={this.state}></div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
		);
	}
}

export default Chooseresume1;

