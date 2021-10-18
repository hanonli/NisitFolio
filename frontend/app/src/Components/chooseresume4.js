import React from 'react';
import './register.css';
import Ddt7 from './dropdownt7';
import $ from 'jquery';
import Select, { NonceProvider } from 'react-select'
import cookie from 'react-cookies'
import Chooseresume from '../chooseresume';
import { GetDominantColorFromImage } from './GetDominantColorFromImage'

/*Wait for Port*/

class Chooseresume5 extends React.Component {
	
	constructor(props) {
		super(props);
		this.state = {
			data_port: [],
		}
	  }
	  componentDidMount() {
		var port_data = [];
		var token = cookie.load('login-token')
		//console.log('Your Token is: ' + token);
		fetch("http://localhost:2000/portfolio", {
			method: "GET",
			headers: {
				'Authorization': 'Bearer ' + token,
				"Access-Control-Allow-Origin": "*",
				"Access-Control-Allow-Methods": "*",
				"Access-Control-Allow-Credentials": true,
				"Content-Type": "application/json"
			},
		})
			.then(response => response.json())
			.then((datas) => {
				//console.log('All Port',datas);
				this.setState({
					data_port: datas,
				})
				this.state.data_port.forEach(ele => {
					port_data.push ({
						Port_Name:ele.Port_Name,
						Port_PicPreview:ele.portfolioPictures[0].Pic[0],
						Port_Resumeid:ele.ResumeId,
						Port_id:ele._id
					})
				})
			}).catch(function(error) {
				console.log(error);
			});
			var choose_Port = [];
			var isCheck_Port = {};
			console.log('All Port',port_data);
			setTimeout(() => {
			port_data.forEach(ele => {
				//alert('Sawaddeekrub Port!!!');
				isCheck_Port[ele.Port_id] = false;
				var t5_port =` <div id={ele.Port_id}>\
				<input\
					class="myresume-choose-port1"\
					id="{xxx}"\
					type="checkbox"\
					value="{ele.Port_idvalue}"\
					defaultChecked="{isCheck_Port[ele.Port_id]}"\
					hidden\
				/>\
				<label class="pft-container555" for="{forxxx}" id="list-port-22">\
					<div class="pft-box555">\
						<div style="z-index: -1;position: absolute;cursor: pointer;height: 100%;width: 100%;left: 0%;background: #000;"></div>\
						<img class="pft-isus" src="{ele.img}" alt=""</img>\
						<div class="pft-namesus">{ele.PortName}</div>\
						<img class="icon-checkboxct5" height="110" src="assets/images/check_black.png" oncontextmenu="return false;" ondragstart="return false;"></img>\
					</div>\
				</label>\
			</div >`;
				t5_port = t5_port.replace("{ele.Port_id}", ele.Port_id);
				t5_port = t5_port.replace("{ele.img}", ele.Port_PicPreview);
				t5_port = t5_port.replace("{xxx}", `xxx` + ele.Port_id);
				t5_port = t5_port.replace("{ele.Port_idvalue}", ele.Port_id);
				t5_port = t5_port.replace("{isCheck_Port[ele.Port_id]}", isCheck_Port[ele.Port_id]);
				t5_port = t5_port.replace("{forxxx}", `xxx` + ele.Port_id);
				t5_port = t5_port.replace("{ele.PortName}", ele.Port_Name);
				//alert('Sawaddeekrub Port',t5_port);
				$(".port-box1").append(t5_port);
			});
		},3000);
			console.log("isCheck_Port :", isCheck_Port);
			$(document).on("click", ".myresume-choose-port1", function () {
				choose_Port = $('.myresume-choose-port1:input[type=checkbox]:checked').map(function (_, el) {
					return $(el).val();
				}).get();
				console.log("choosePort :", choose_Port);
			});
	
			$(document).on("change", ".myresume-choose-port1", function () {
				if(choose_Port.length!=0){
				$("#dangerzonect5").text(`คุณเลือกไปแล้ว ${choose_Port.length} รายการ`);
				}
				else{
					$("#dangerzonect5").text('');
				}
			});
	  }
	render (){
		//console.log(this.state.PortName);
		return (
			<div className="Registab7">
				<h2 class="headerChooseResume">คุณสามารถเลือกผลงานที่สอดคล้องกับตำแหน่งงานที่สนใจได้ไม่จำกัด</h2>
				<div class="Editresume-box-content5" id="yyy">
				<div class="port-box1"></div>
				</div>
				<h1 id="dangerzonect5" class='normalformzonet3'></h1>
			</div>
		);
	}
}

export default Chooseresume5;