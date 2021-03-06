import React from 'react';
import './register.css';
import $ from 'jquery';
import cookie from 'react-cookies'
import { GetDominantColorFromImage } from './GetDominantColorFromImage'
import './chooseresume3.css';
import ApplicationURL from './path';

/*Wait for Port*/
var choose_Port = [];
class Editresume4 extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			data_port: [],
		}
	}

	componentDidMount() {
		var port_data = [];
		var token = cookie.load('login-token')
		var ResumeId_Now = cookie.load('ResumeIdForEdit')
		//console.log('Your Token is: ' + token);
		fetch(ApplicationURL.backend+"portfolio", {
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
				//console.log('All Port Fetch: ',this.state.data_port)
				this.state.data_port.forEach(ele => {
					port_data.push({
						Port_Name: ele.Port_Name,
						Port_PicPreview: ele.portfolioPictures[0].Pic[0],
						Port_Resumeid: ele.ResumeId,
						Port_id: ele._id,
						isCheckPort: ele.ResumeId.includes(ResumeId_Now) ? 'checked' : "defaultChecked"
					})
				})
			}).catch(function (error) {
				console.log(error);
			});
		//console.log('All Port ', port_data);
		setTimeout(() => {
			port_data.forEach(ele => {
				//alert('Sawaddeekrub Port!!!');
				var t5_port = ` <div id={ele.Port_id}>\
				<input\
					class="myresume-choose-port1"\
					id="{xxx}"\
					type="checkbox"\
					value="{ele.Port_idvalue}"\
					{isCheckPort}\
					hidden\
				/>\
				<label class="pft-container555" for="{forxxx}" id="list-port-22">\
					<div class="pft-box555">\
						<div style="z-index: -1;position: absolute;cursor: pointer;height: 100%;width: 100%;left: 0%;background: #000;"></div>\
						<img class="pft-isus" src="{ele.img}" alt=""</img>\
						<div class="pft-namesus">{ele.PortName}</div>\
						<div class="icon-checkboxct5"><img height="110" src="assets/images/check_black.png" oncontextmenu="return false;" ondragstart="return false;"></img></div>\		
					</div>\	
				</label>\
			</div >`;
				t5_port = t5_port.replace("{ele.Port_id}", ele.Port_id);
				t5_port = t5_port.replace("{ele.img}", ele.Port_PicPreview);
				t5_port = t5_port.replace("{xxx}", `xxx` + ele.Port_id);
				t5_port = t5_port.replace("{ele.Port_idvalue}", ele.Port_id);
				t5_port = t5_port.replace("{isCheckPort}", ele.isCheckPort);
				t5_port = t5_port.replace("{forxxx}", `xxx` + ele.Port_id);
				//t5_port = t5_port.replace("{ele.PortName}", ele.Port_Name);
				if (ele["Port_Name"].length > 40) {
					t5_port = t5_port.replace("{ele.PortName}", ele["Port_Name"].slice(0, 40) + "...");
				}
				else {
					t5_port = t5_port.replace("{ele.PortName}", ele.Port_Name);
				}
				//alert('Sawaddeekrub Port',t5_port);
				$(".port-box1").append(t5_port);
			});
			var count_pp = $(".myresume-choose-port1:input:checkbox:checked").length;
			//alert(count_pp);
			$("#dangerzonect5").text(`?????????????????????????????????????????? ${count_pp} ??????????????????`);
		}, 1000);
		//console.log("isCheck_Port :", isCheck_Port);
		$(document).on("click", ".myresume-choose-port1", function () {
			choose_Port = $('.myresume-choose-port1:input[type=checkbox]:checked').map(function (_, el) {
				return $(el).val();
			}).get();
			console.log("choosePort :", choose_Port);
			cookie.save('choose_Port',choose_Port);
		});

		$(document).on("change", ".myresume-choose-port1", function () {
			if (choose_Port.length != 0) {
				$("#dangerzonect5").text(`?????????????????????????????????????????? ${choose_Port.length} ??????????????????`);
			}
			else {
				$("#dangerzonect5").text('');
			}
		});
	}
	render() {
		//console.log(this.state.PortName);
		return (
			<div className="Registab7">
				<h2 class="headerChooseResume">???????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????</h2>
				<div class="Editresume-box-content5" id="yyy">
					<div class="port-box1"></div>
				</div>
				<h1 id="dangerzonect5" class="dangerzoneEditresumeColor"></h1>
			</div>
		);
	}
}

export default Editresume4;