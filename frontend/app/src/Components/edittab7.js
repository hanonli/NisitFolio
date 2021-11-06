import React from 'react';
import './register.css';
import Ddt7 from './dropdownt7';
import SelectSS7 from './dropsideskill';
import $ from 'jquery';
import Select, { NonceProvider } from 'react-select'
import cookie from 'react-cookies'
import ApplicationURL from './path';

class Registab7 extends React.Component {
	
	constructor(props) {
		super(props);
		this.state = {
		  sideskillName: "",
		  checkstatust7: false,
		  countsideskill:0,
		  statusUpload7: "",
          imgStatus7: "",
		  statusDelHeader: "Saved",
          imgStatusHeader: "assets/images/outline_cloud_done_black_24dp.png",
		  token: cookie.load('login-token'),
		  ssk1:"",
		  ssk2:"",
		  ssk3:"",
		  ssk_id1:"",
		  ssk_id2:"",
		  ssk_id3:"",
		  render:true
		};
	  }
	  onInputChange = value => {
		this.setState({
			sideskillName: value,
			checkstatust7: true,
		});
		//console.log("I am Parent component. I got", value, "from my child.");
		//console.log("I am",this.state.checkstatust7);
		//var token7 = cookie.load('login-token');
		var ddt7_un1 ='<div class="container-fluid dropbtn-box form-f margin-bottom1 ssl1" id={ssk_id}>\
		<div class="row">\
			<div class="col-10">\
				<a class="textT7B">{sideskillName}</a>\
			</div>	\
			<div class="col-2">\
				<div class="delbtn">\
				<img class="obj-icont7 tooltips-item" src="assets/images/bin.png" type="button" data-bs-toggle="modal" toggle-type="dynamic"data-bs-target="#Modaltab71" id="valss" alt="" width="30" height="30"/>\
				</div>\
			</div>\
		</div>\
	</div>\
		';
		var ddt7_un2 ='<div class="container-fluid dropbtn-box form-f margin-bottom1 ssl2" id={ssk_id}>\
		<div class="row">\
			<div class="col-10">\
				<a class="textT7B">{sideskillName}</a>\
			</div>	\
			<div class="col-2">\
				<div class="delbtn">\
				<img class="obj-icont7 tooltips-item" src="assets/images/bin.png" type="button" data-bs-toggle="modal" toggle-type="dynamic"data-bs-target="#Modaltab72" id="valss" alt="" width="30" height="30"/>\
				</div>\
			</div>\
		</div>\
	</div>\
		';
		var ddt7_un3 ='<div class="container-fluid dropbtn-box form-f margin-bottom1 ssl3" id={ssk_id}>\
		<div class="row">\
			<div class="col-10">\
				<a class="textT7B">{sideskillName}</a>\
			</div>	\
			<div class="col-2">\
				<div class="delbtn">\
				<img class="obj-icont7 tooltips-item" src="assets/images/bin.png" type="button" data-bs-toggle="modal" toggle-type="dynamic"data-bs-target="#Modaltab73" id="valss" alt="" width="30" height="30"/>\
				</div>\
			</div>\
		</div>\
	</div>\
		';
		var status_now = cookie.load('StatusSelecttab7');
		if(value!="unselected"){
			console.log({"SoftSkill": value,"SoftSkillType":status_now});
			this.setState({ statusDelHeader: "Saving...", imgStatusHeader: "assets/images/outline_cached_black_24dp.png" });
			fetch(ApplicationURL.backend+"register/addsoftskill", {
                method: "POST",
                headers: {
                    'Authorization': 'Bearer ' + this.state.token,
                    "Access-Control-Allow-Origin": "*",
                    "Access-Control-Allow-Methods": "*",
                    "Access-Control-Allow-Credentials": true,
                    "Content-Type": "application/json"
                },
				body: JSON.stringify({"SoftSkill": value,"SoftSkillType":status_now})
            })
                .then(response => response.json())
                .then((raws) => {
                    //console.log(raws);
                    if ("message" in raws) {
                        this.setState({ statusDelHeader: "Save Failed", imgStatusHeader: "assets/images/baseline_error_black_24dp.png" });
                        $(".status-present-headerrr114").addClass("status-saving5555-red");
						$('.ahhahat7').show();
					}
					else {
						if(this.state.countsideskill==0){
							ddt7_un1 = ddt7_un1.replace("{sideskillName}", value);
							ddt7_un1 = ddt7_un1.replace("{ssk_id}", raws.id);
							//console.log(ddt7_un);
							$('.dropdowntap7').append(ddt7_un1);
							//alert(value);
							this.setState({countsideskill:1,ssk1:value,ssk_id1:raws.id})
						}
						else if(this.state.countsideskill==1){
							ddt7_un2 = ddt7_un2.replace("{sideskillName}", value);
							ddt7_un2 = ddt7_un2.replace("{ssk_id}", raws.id);
							//console.log(ddt7_un);
							$('.dropdowntap7').append(ddt7_un2);
							//alert(value);
							this.setState({countsideskill:2,ssk2:value,ssk_id2:raws.id})
						}
						else if(this.state.countsideskill==2){
							ddt7_un3 = ddt7_un3.replace("{sideskillName}", value);
							ddt7_un3 = ddt7_un3.replace("{ssk_id}", raws.id);
							//console.log(ddt7_un);
							$('.dropdowntap7').append(ddt7_un3);
							//alert(value);
							this.setState({countsideskill:3,ssk3:value,ssk_id3:raws.id})
							$('#dangerzonet7').addClass('red_markOnly');
							$('#dangerzonet7').text('*ท่านเพิ่มทักษะเสริมที่ถนัดครบจำนวนแล้ว');
							$('.ahhahat7').hide();
						}
						this.setState({ statusUpload7: "", imgStatus7: "" });
                    	this.setState({ statusDelHeader: "Saved", imgStatusHeader: "assets/images/outline_cloud_done_black_24dp.png" });
                        $(".status-present-headerrr114").removeClass("status-saving5555-red");
					}
					
				}).catch((error) => {
					//console.log(error);
					this.setState({ statusDelHeader: "Save Failed", imgStatusHeader: "assets/images/baseline_error_black_24dp.png" });
					//$(".status-present-headerrr114").addClass("status-saving5555-red");
				});
			//console.log('Now!!' +this.state.countsideskill);
		}
		else{
			console.log('u r uncomplete select');
			/*if(this.state.countsideskill==0){
				cookie.save('typesideskill1', status_now);
			}
			else if(this.state.countsideskill==1){
				cookie.save('typesideskill2', status_now);
			}
			else if(this.state.countsideskill==2){
				cookie.save('typesideskill3', status_now);
			}*/
		}
	  };

	  onDel1 = () => {
		//alert(cookie.load('sideskill1')+ '+' +cookie.load('sideskill2')+'+'+cookie.load('sideskill3'));
		//alert(cookie.load('sideskill1'));
		var ddt7_un1 ='<div class="container-fluid dropbtn-box form-f margin-bottom1 ssl1" id={ssk_id}>\
		<div class="row">\
			<div class="col-10">\
				<a class="textT7B">{sideskillName}</a>\
			</div>	\
			<div class="col-2">\
				<div class="delbtn">\
				<img class="obj-icont7 tooltips-item" src="assets/images/bin.png" type="button" data-bs-toggle="modal" toggle-type="dynamic"data-bs-target="#Modaltab71" id="valss" alt="" width="30" height="30"/>\
				</div>\
			</div>\
		</div>\
	</div>\
		';
		var ddt7_un2 ='<div class="container-fluid dropbtn-box form-f margin-bottom1 ssl2" id={ssk_id}>\
		<div class="row">\
			<div class="col-10">\
				<a class="textT7B">{sideskillName}</a>\
			</div>	\
			<div class="col-2">\
				<div class="delbtn">\
				<img class="obj-icont7 tooltips-item" src="assets/images/bin.png" type="button" data-bs-toggle="modal" toggle-type="dynamic"data-bs-target="#Modaltab72" id="valss" alt="" width="30" height="30"/>\
				</div>\
			</div>\
		</div>\
	</div>\
		';
		this.setState({ statusDelHeader: "Saving...", imgStatusHeader: "assets/images/outline_cached_black_24dp.png" });
		fetch(ApplicationURL.backend+"register/additionalSkill/"+this.state.ssk_id1, {
			method: "DELETE",
			headers: {
				'Authorization': 'Bearer ' + this.state.token,
				"Access-Control-Allow-Origin": "*",
				"Access-Control-Allow-Methods": "*",
				"Access-Control-Allow-Credentials": true,
				"Content-Type": "application/json"
			},
		})
			.then(response => response.json())
			.then((raws) => {
				//console.log(raws);
				if ("message" in raws) {
					this.setState({ statusUpload7: "Save Failed", imgStatus7: "assets/images/baseline_error_black_24dp.png" });
					$("#for-error-dgd").addClass("status-saving5555-red");
					this.setState({ statusDelHeader: "Save Failed", imgStatusHeader: "assets/images/baseline_error_black_24dp.png" });
					$(".status-present-headerrr114").addClass("status-saving5555-red");
					$('.ahhahat7').show();
				}
				else {
					$('.ssl1').remove();
					if(this.state.countsideskill==1){
						this.setState({countsideskill:0})
					}
					else if(this.state.countsideskill==2){
						this.setState({countsideskill:1})
						$('.ssl2').remove();
						ddt7_un1 = ddt7_un1.replace("{sideskillName}", this.state.ssk2);
						ddt7_un1 = ddt7_un1.replace("{ssk_id}", this.state.ssk_id2);
						//console.log(ddt7_un);
						$('.dropdowntap7').append(ddt7_un1);
					}
					else if(this.state.countsideskill==3){
						this.setState({countsideskill:2})
						$('.ssl2').remove();
						$('.ssl3').remove();
						ddt7_un1 = ddt7_un1.replace("{sideskillName}",this.state.ssk2);
						ddt7_un1 = ddt7_un1.replace("{ssk_id}", this.state.ssk_id2);
						//console.log(ddt7_un);
						$('.dropdowntap7').append(ddt7_un1);
						ddt7_un2 = ddt7_un2.replace("{sideskillName}",this.state.ssk3);
						ddt7_un2 = ddt7_un2.replace("{ssk_id}", this.state.ssk_id3);
						//console.log(ddt7_un);
						$('.dropdowntap7').append(ddt7_un2);
						$('#dangerzonet7').removeClass('red_markOnly');
						$('#dangerzonet7').val('ท่านสามารถเพิ่มทักษะเสริมที่ถนัดได้สูงสุด 3 อัน');
						$('.ahhahat7').show();
					}
					this.setState({ssk1:this.state.ssk2,ssk_id1:this.state.ssk_id2,ssk2:this.state.ssk3,ssk_id2:this.state.ssk_id3,ssk3:"",ssk_id3:""})
					this.setState({ statusDelHeader: "Saved", imgStatusHeader: "assets/images/outline_cloud_done_black_24dp.png" });
					$(".status-present-headerrr114").removeClass("status-saving5555-red");
					
				}
				
			}).catch((error) => {
				//console.log(error);
				this.setState({ statusDelHeader: "Save Failed", imgStatusHeader: "assets/images/baseline_error_black_24dp.png" });
				//$(".status-present-headerrr114").addClass("status-saving5555-red");
			});
	  };

	  onDel2 = () => {
		//alert(cookie.load('sideskill1')+ '+' +cookie.load('sideskill2')+'+'+cookie.load('sideskill3'));
		var ddt7_un2 ='<div class="container-fluid dropbtn-box form-f margin-bottom1 ssl2" id={ssk_id}>\
		<div class="row">\
			<div class="col-10">\
				<a class="textT7B">{sideskillName}</a>\
			</div>	\
			<div class="col-2">\
				<div class="delbtn">\
				<img class="obj-icont7 tooltips-item" src="assets/images/bin.png" type="button" data-bs-toggle="modal" toggle-type="dynamic"data-bs-target="#Modaltab72" id="valss" alt="" width="30" height="30"/>\
				</div>\
			</div>\
		</div>\
	</div>\
		';
		this.setState({ statusDelHeader: "Saving...", imgStatusHeader: "assets/images/outline_cached_black_24dp.png" });
		fetch(ApplicationURL.backend+"register/additionalSkill/"+this.state.ssk_id2, {
			method: "DELETE",
			headers: {
				'Authorization': 'Bearer ' + this.state.token,
				"Access-Control-Allow-Origin": "*",
				"Access-Control-Allow-Methods": "*",
				"Access-Control-Allow-Credentials": true,
				"Content-Type": "application/json"
			},
		})
			.then(response => response.json())
			.then((raws) => {
				//console.log(raws);
				if ("message" in raws) {
					this.setState({ statusDelHeader: "Save Failed", imgStatusHeader: "assets/images/baseline_error_black_24dp.png" });
					$(".status-present-headerrr114").addClass("status-saving5555-red");
					$('.ahhahat7').show();
				}
				else {
					$('.ssl2').remove();
					if(this.state.countsideskill==2){
						this.setState({countsideskill:1})
					}
					else if(this.state.countsideskill==3){
						this.setState({countsideskill:2})
						ddt7_un2 = ddt7_un2.replace("{sideskillName}",this.state.ssk3);
						ddt7_un2 = ddt7_un2.replace("{ssk_id}", this.state.ssk_id3);
						//console.log(ddt7_un);
						$('.dropdowntap7').append(ddt7_un2);
						$('.ssl3').remove();
						$('#dangerzonet7').removeClass('red_markOnly');
						$('#dangerzonet7').text('ท่านสามารถเพิ่มทักษะเสริมที่ถนัดได้สูงสุด 3 อัน');
						$('.ahhahat7').show();
					}
					this.setState({ssk2:this.state.ssk3,ssk_id2:this.state.ssk_id3,ssk3:"",ssk_id3:""})
					this.setState({ statusDelHeader: "Saved", imgStatusHeader: "assets/images/outline_cloud_done_black_24dp.png" });
					$(".status-present-headerrr114").removeClass("status-saving5555-red");
				}
			}).catch((error) => {
				//console.log(error);
				this.setState({ statusDelHeader: "Save Failed", imgStatusHeader: "assets/images/baseline_error_black_24dp.png" });
				//$(".status-present-headerrr114").addClass("status-saving5555-red");
			});
	  };

	  onDel3 = () => {
		//alert(cookie.load('sideskill1')+ '+' +cookie.load('sideskill2')+'+'+cookie.load('sideskill3'));
		this.setState({countsideskill:2})
		this.setState({ statusDelHeader: "Saving...", imgStatusHeader: "assets/images/outline_cached_black_24dp.png" });
		fetch(ApplicationURL.backend+"register/additionalSkill/"+this.state.ssk_id3, {
			method: "DELETE",
			headers: {
				'Authorization': 'Bearer ' + this.state.token,
				"Access-Control-Allow-Origin": "*",
				"Access-Control-Allow-Methods": "*",
				"Access-Control-Allow-Credentials": true,
				"Content-Type": "application/json"
			},
		})
			.then(response => response.json())
			.then((raws) => {
				//console.log(raws);
				if ("message" in raws) {
					this.setState({ statusDelHeader: "Save Failed", imgStatusHeader: "assets/images/baseline_error_black_24dp.png" });
					$(".status-present-headerrr114").addClass("status-saving5555-red");
					$('.ahhahat7').show();
				}
				else {
					$('.ssl3').remove();
					$('#dangerzonet7').removeClass('red_markOnly');
					$('#dangerzonet7').text('ท่านสามารถเพิ่มทักษะเสริมที่ถนัดได้สูงสุด 3 อัน');
					$('.ahhahat7').show();
					this.setState({ssk3:"",ssk_id3:""})
					this.setState({ statusDelHeader: "Saved", imgStatusHeader: "assets/images/outline_cloud_done_black_24dp.png" });
					$(".status-present-headerrr114").removeClass("status-saving5555-red");
				}
			}).catch((error) => {
				//console.log(error);
				this.setState({ statusDelHeader: "Save Failed", imgStatusHeader: "assets/images/baseline_error_black_24dp.png" });
				//$(".status-present-headerrr114").addClass("status-saving5555-red");
			});
	  };

	  componentDidMount(){
		var token7 = cookie.load('login-token')
		/*var ddt7_un1 ='<h3>Table:{sideskill1}</h3> \
		';*/
		$('#ddt7s').hide();
		var list_of_ssk;
		var aaa = this;
		var start_count=0;
		var myssk = this.props.myssk_data ? this.props.myssk_data : [];
        list_of_ssk = [...myssk];
		console.log(list_of_ssk);
		list_of_ssk.forEach(ele => {(start_count=start_count+1)});
		//alert(start_count);
		show_ssk();
		$('#add_sideskill').on('click',function(){
			var ssk1 = aaa.state.ssk1;
			var ssk2 = aaa.state.ssk2;
			var ssk3 = aaa.state.ssk3;
			//$('#ddt7s').val('');
			//console.log('Add sideskill dropdown!');
			console.log(ssk1 + ssk2+ ssk3);
			if (ssk1 == '') {
				console.log('ใส่อันที่1แล้วจ้า');
				$('#ddt7s').show();
			}
			/*else if (ssk1 == ssk2 && ssk1 == ssk3) {
				aaa.setState({ render: false });
				$('.ssl1').addClass('borderred');
				$('.ssl2').addClass('borderred');
				$('.ssl3').addClass('borderred');
				$('.ahhahat7').hide();
			}
			else if (ssk1 == ssk2 && ssk1 != "" && ssk2 != "") {
				aaa.setState({ render: false });
				$('.ssl1').addClass('borderred');
				$('.ssl2').addClass('borderred');
				$('.ahhahat7').hide();
			}
			else if (ssk1 == ssk3 && ssk1 != "" && ssk3 != "") {
				aaa.setState({ render: false });
				$('.ssl1').addClass('borderred');
				$('.ssl3').addClass('borderred');
				$('.ahhahat7').hide();
			}
			else if (ssk3 == ssk2 && ssk3 != "" && ssk2 != "") {
				aaa.setState({ render: false });
				$('.ssl3').addClass('borderred');
				$('.ssl2').addClass('borderred');
				$('.ahhahat7').hide();
			}*/
			else if (ssk2 == '') {
				//console.log('ใส่อันที่2แล้วจ้า');
				$('#ddt7s').show();
			}
			else if (ssk3 == '') {
				//console.log('ใส่อันที่3แล้วจ้า');
				$('#ddt7s').show();
				$('.ahhahat7').hide();
			}
			else {
				$('#dangerzonet7').addClass('red_markOnly');
				$('#dangerzonet7').text('*ท่านเพิ่มทักษะเสริมที่ถนัดครบจำนวนแล้ว');
				$('.ahhahat7').hide();
			}
		  });

		function show_ssk(){
			var ddt7_un1 ='<div class="container-fluid dropbtn-box form-f margin-bottom1 ssl1" id={ssk_id}>\
		<div class="row">\
			<div class="col-10">\
				<a class="textT7B">{sideskillName}</a>\
			</div>	\
			<div class="col-2">\
				<div class="delbtn">\
				<img class="obj-icont7 tooltips-item" src="assets/images/bin.png" type="button" data-bs-toggle="modal" toggle-type="dynamic"data-bs-target="#Modaltab71" id="valss" alt="" width="30" height="30"/>\
				</div>\
			</div>\
		</div>\
	</div>\
		';
		var ddt7_un2 ='<div class="container-fluid dropbtn-box form-f margin-bottom1 ssl2" id={ssk_id}>\
		<div class="row">\
			<div class="col-10">\
				<a class="textT7B">{sideskillName}</a>\
			</div>	\
			<div class="col-2">\
				<div class="delbtn">\
				<img class="obj-icont7 tooltips-item" src="assets/images/bin.png" type="button" data-bs-toggle="modal" toggle-type="dynamic"data-bs-target="#Modaltab72" id="valss" alt="" width="30" height="30"/>\
				</div>\
			</div>\
		</div>\
	</div>\
		';
		var ddt7_un3 ='<div class="container-fluid dropbtn-box form-f margin-bottom1 ssl3" id={ssk_id}>\
		<div class="row">\
			<div class="col-10">\
				<a class="textT7B">{sideskillName}</a>\
			</div>	\
			<div class="col-2">\
				<div class="delbtn">\
				<img class="obj-icont7 tooltips-item" src="assets/images/bin.png" type="button" data-bs-toggle="modal" toggle-type="dynamic"data-bs-target="#Modaltab73" id="valss" alt="" width="30" height="30"/>\
				</div>\
			</div>\
		</div>\
	</div>\
		';
		aaa.setState({countsideskill:start_count});
		//console.log('come in show_ssk func success');
		//console.log(aaa.state.countsideskill);
		if(start_count==1){
			ddt7_un1 = ddt7_un1.replace("{sideskillName}", list_of_ssk[0].sideskillName);
			ddt7_un1 = ddt7_un1.replace("{ssk_id}", list_of_ssk[0].sideskill_id);
			aaa.setState({ssk1:list_of_ssk[0].sideskillName,ssk_id1:list_of_ssk[0].sideskill_id})
			//console.log(ddt7_un);
			$('.dropdowntap7').append(ddt7_un1);
		}
		else if(start_count==2){
			ddt7_un1 = ddt7_un1.replace("{sideskillName}", list_of_ssk[0].sideskillName);
			ddt7_un1 = ddt7_un1.replace("{ssk_id}", list_of_ssk[0].sideskill_id);
			aaa.setState({ssk1:list_of_ssk[0].sideskillName,ssk_id1:list_of_ssk[0].sideskill_id})
			//console.log(ddt7_un);
			$('.dropdowntap7').append(ddt7_un1);
			ddt7_un2 = ddt7_un2.replace("{sideskillName}", list_of_ssk[1].sideskillName);
			ddt7_un2 = ddt7_un2.replace("{ssk_id}", list_of_ssk[1].sideskill_id);
			aaa.setState({ssk2:list_of_ssk[1].sideskillName,ssk_id2:list_of_ssk[1].sideskill_id})
			//console.log(ddt7_un);
			$('.dropdowntap7').append(ddt7_un2);
		}
		else if(start_count==3){
			ddt7_un1 = ddt7_un1.replace("{sideskillName}", list_of_ssk[0].sideskillName);
			ddt7_un1 = ddt7_un1.replace("{ssk_id}", list_of_ssk[0].sideskill_id);
			aaa.setState({ssk1:list_of_ssk[0].sideskillName,ssk_id1:list_of_ssk[0].sideskill_id})
			//console.log(ddt7_un);
			$('.dropdowntap7').append(ddt7_un1);
			ddt7_un2 = ddt7_un2.replace("{sideskillName}", list_of_ssk[1].sideskillName);
			ddt7_un2 = ddt7_un2.replace("{ssk_id}", list_of_ssk[1].sideskill_id);
			aaa.setState({ssk2:list_of_ssk[1].sideskillName,ssk_id2:list_of_ssk[1].sideskill_id})
			//console.log(ddt7_un);
			$('.dropdowntap7').append(ddt7_un2);
			ddt7_un3 = ddt7_un3.replace("{sideskillName}", list_of_ssk[2].sideskillName);
			ddt7_un3 = ddt7_un3.replace("{ssk_id}", list_of_ssk[2].sideskill_id);
			aaa.setState({ssk3:list_of_ssk[2].sideskillName,ssk_id3:list_of_ssk[2].sideskill_id})
			//console.log(ddt7_un);
			$('.dropdowntap7').append(ddt7_un3);
			$('#dangerzonet7').addClass('red_markOnly');
			$('#dangerzonet7').text('*ท่านเพิ่มทักษะเสริมที่ถนัดครบจำนวนแล้ว');
			//$('.ahhahat7').hide();
		}
		//console.log(aaa.state.countsideskill);
		}
	}
	componentWillUnmount(){
		cookie.save('sideskill1', "");
		cookie.save('sideskill2', "");
		cookie.save('sideskill3', "");
		window.removeEventListener('load', this.handleLoad);
        $(document).unbind();
	}
	render (){
		//console.log(this.state.sideskillName);
		return (
			<div className="Registab7">
				<img class="status-img-headerrrr114" src={this.state.imgStatusHeader} onContextMenu={(e) => e.preventDefault()} onDragStart={(e) => e.preventDefault()}></img>
                <h1 class="status-present-headerrr114">{this.state.statusDelHeader}</h1>
				<div class="regis-box-content7" id="yyy">
					<h1 id="text-add-name-ss">เพิ่มทักษะเสริมที่ถนัด</h1>
					
					<div class="transition-component ahhahat7" id="cross-fadegone7">
                        <img class="registab3_btnplus icon-plus-circleA bottom" type='button' src="assets/images/add_hover.png" ></img>
                        <img class="registab3_btnplus icon-plus-circleA top" type='button' id='add_sideskill' src="assets/images/add_black.png"></img>
                    </div>
					<div class='fff'>
						<Ddt7 onChange={this.onInputChange} class='margin-bottom1'/>
					</div>
					<div class="dropdowntap7 fixed-wrapper">
					</div>
					<h1 id="dangerzonet7" class='normalformzonet3'>ท่านสามารถเพิ่มทักษะเสริมที่ถนัดได้สูงสุด 3 อัน</h1>
					<div class="modal fade" id="Modaltab71" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
						<div class="modal-dialog modal-dialog-centered">
							<div class="modal-content minisize">
								<h4 class="del-b">คุณต้องการลบทักษะเสริม ?</h4>
								<div class="centerverify">
										<a type="button" class="btn btn-cta-primary-svshort round profile-button grey margin-right-m" data-bs-dismiss="modal">ยกเลิก</a>
										<a type="button" onClick={this.onDel1} class="btn btn-cta-primary-yellowshort profile-button round" id="del_sideskill1" data-bs-dismiss="modal">ลบ</a>
								</div>
							</div>
						</div>
					</div>
					<div class="modal fade" id="Modaltab72" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
						<div class="modal-dialog modal-dialog-centered">
							<div class="modal-content minisize">
								<h4 class="del-b">คุณต้องการลบทักษะเสริม ?</h4>
								<div class="centerverify">
										<a type="button" class="btn btn-cta-primary-svshort round profile-button grey margin-right-m" data-bs-dismiss="modal">ยกเลิก</a>
										<a type="button" onClick={this.onDel2} class="btn btn-cta-primary-yellowshort profile-button round" id="del_sideskill2" data-bs-dismiss="modal">ลบ</a>
								</div>
							</div>
						</div>
					</div>
					<div class="modal fade" id="Modaltab73" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
						<div class="modal-dialog modal-dialog-centered">
							<div class="modal-content minisize">
								<h4 class="del-b">คุณต้องการลบทักษะเสริม ?</h4>
								<div class="centerverify">
										<a type="button" class="btn btn-cta-primary-svshort round profile-button grey margin-right-m" data-bs-dismiss="modal">ยกเลิก</a>
										<a type="button" onClick={this.onDel3} class="btn btn-cta-primary-yellowshort profile-button round" id="del_sideskill3" data-bs-dismiss="modal">ลบ</a>
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