import React from 'react';
import './register.css';
import Ddt7 from './dropdownt7';
import SelectSS7 from './dropsideskill';
import $ from 'jquery';
import Select, { NonceProvider } from 'react-select'
import cookie from 'react-cookies'

class Registab7 extends React.Component {
	
	constructor(props) {
		super(props);
		this.state = {
		  sideskillName: "",
		  checkstatust7: false,
		  countsideskill:0,
		};
		cookie.save('sideskill1',"");
		cookie.save('typesideskill1',"");
		cookie.save('sideskill2',"");
		cookie.save('typesideskill2',"");
		cookie.save('sideskill3',"");
		cookie.save('typesideskill3',"");
	  }
	  onInputChange = value => {
		this.setState({
			sideskillName: value,
			checkstatust7: true,
		});
		//console.log("I am Parent component. I got", value, "from my child.");
		//console.log("I am",this.state.checkstatust7);
		var ddt7_un1 ='<div class="container-fluid dropbtn-box form-f margin-bottom1" id="ssl1">\
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
		var ddt7_un2 ='<div class="container-fluid dropbtn-box form-f margin-bottom1" id="ssl2">\
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
		var ddt7_un3 ='<div class="container-fluid dropbtn-box form-f margin-bottom1" id="ssl3">\
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
			if(this.state.countsideskill==0){
				ddt7_un1 = ddt7_un1.replace("{sideskillName}", value);
				//console.log(ddt7_un);
				$('.dropdowntap7').append(ddt7_un1);
				//alert(value);
				cookie.save('sideskill1', value);
				this.setState({countsideskill:1})
			}
			else if(this.state.countsideskill==1){
				ddt7_un2 = ddt7_un2.replace("{sideskillName}", value);
				//console.log(ddt7_un);
				$('.dropdowntap7').append(ddt7_un2);
				//alert(value);
				cookie.save('sideskill2', value);
				this.setState({countsideskill:2})
			}
			else if(this.state.countsideskill==2){
				ddt7_un3 = ddt7_un3.replace("{sideskillName}", value);
				//console.log(ddt7_un);
				$('.dropdowntap7').append(ddt7_un3);
				//alert(value);
				cookie.save('sideskill3', value);
				this.setState({countsideskill:3})
				$('#dangerzonet7').addClass('red_markOnly');
				$('#dangerzonet7').text('*ท่านเพิ่มทักษะเสริมที่ถนัดครบจำนวนแล้ว');
			}
			//console.log('Now!!' +this.state.countsideskill);
		}
		else{
			console.log('u r uncomplete select');
			if(this.state.countsideskill==0){
				cookie.save('typesideskill1', status_now);
			}
			else if(this.state.countsideskill==1){
				cookie.save('typesideskill2', status_now);
			}
			else if(this.state.countsideskill==2){
				cookie.save('typesideskill3', status_now);
			}
		}
		//alert('ตอนนี้อยู่หมวด : '+status_now);
	  };

	  onDel1 = () => {
		//alert(cookie.load('sideskill1')+ '+' +cookie.load('sideskill2')+'+'+cookie.load('sideskill3'));
		//alert(cookie.load('sideskill1'));
		var ddt7_un1 ='<div class="container-fluid dropbtn-box form-f margin-bottom1" id="ssl1">\
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
		var ddt7_un2 ='<div class="container-fluid dropbtn-box form-f margin-bottom1" id="ssl2">\
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
		cookie.save('sideskill1',cookie.load('sideskill2'));
		cookie.save('typesideskill1',cookie.load('typesideskill2'));
		cookie.save('sideskill2',cookie.load('sideskill3'));
		cookie.save('typesideskill2',cookie.load('typesideskill3'));
		cookie.save('sideskill3',"");
		cookie.save('typesideskill3',"");
		$('#ssl1').remove();
		if(this.state.countsideskill==1){
			this.setState({countsideskill:0})
		}
		else if(this.state.countsideskill==2){
			this.setState({countsideskill:1})
			$('#ssl2').remove();
			ddt7_un1 = ddt7_un1.replace("{sideskillName}", cookie.load('sideskill1'));
			//console.log(ddt7_un);
			$('.dropdowntap7').append(ddt7_un1);
		}
		else if(this.state.countsideskill==3){
			this.setState({countsideskill:2})
			$('#ssl2').remove();
			$('#ssl3').remove();
			ddt7_un1 = ddt7_un1.replace("{sideskillName}", cookie.load('sideskill1'));
			//console.log(ddt7_un);
			$('.dropdowntap7').append(ddt7_un1);
			ddt7_un2 = ddt7_un2.replace("{sideskillName}", cookie.load('sideskill2'));
			//console.log(ddt7_un);
			$('.dropdowntap7').append(ddt7_un2);
			$('#dangerzonet7').removeClass('red_markOnly');
			$('#dangerzonet7').val('ท่านสามารถเพิ่มทักษะเสริมที่ถนัดได้สูงสุด 3 อัน');
			$('.ahhahat7').show();
		}
	  };

	  onDel2 = () => {
		//alert(cookie.load('sideskill1')+ '+' +cookie.load('sideskill2')+'+'+cookie.load('sideskill3'));
		var ddt7_un2 ='<div class="container-fluid dropbtn-box form-f margin-bottom1" id="ssl2">\
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
		cookie.save('sideskill2',cookie.load('sideskill3'));
		cookie.save('typesideskill2',cookie.load('typesideskill3'));
		cookie.save('sideskill3',"");
		cookie.save('typesideskill3',"");
		$('#ssl2').remove();
		if(this.state.countsideskill==2){
			this.setState({countsideskill:1})
		}
		else if(this.state.countsideskill==3){
			this.setState({countsideskill:2})
			ddt7_un2 = ddt7_un2.replace("{sideskillName}", cookie.load('sideskill2'));
			//console.log(ddt7_un);
			$('.dropdowntap7').append(ddt7_un2);
			$('#ssl3').remove();
			$('#dangerzonet7').removeClass('red_markOnly');
			$('#dangerzonet7').text('ท่านสามารถเพิ่มทักษะเสริมที่ถนัดได้สูงสุด 3 อัน');
			$('.ahhahat7').show();
		}
	  };

	  onDel3 = () => {
		//alert(cookie.load('sideskill1')+ '+' +cookie.load('sideskill2')+'+'+cookie.load('sideskill3'));
		this.setState({countsideskill:2})
		cookie.save('sideskill3',"");
		cookie.save('typesideskill3',"");
		$('#ssl3').remove();
		$('#dangerzonet7').removeClass('red_markOnly');
		$('#dangerzonet7').text('ท่านสามารถเพิ่มทักษะเสริมที่ถนัดได้สูงสุด 3 อัน');
		$('.ahhahat7').show();
	  };

	  componentDidMount(){
		var ddt7_un1 ='<h3>Table:{sideskill1}</h3> \
		';
		var aaa = this;
		$('#add_sideskill').on('click',function(){
			var sss1 = cookie.load('sideskill1');
			var sss2 = cookie.load('sideskill2');
			var sss3 = cookie.load('sideskill3');
			//$('#ddt7s').val('');
			console.log('Add sideskill dropdown!');
			//alert(cookie.load('sideskill1')+ '+' +cookie.load('sideskill2')+'+'+cookie.load('sideskill3'));
			if(sss1==""){
				console.log('ใส่อันที่1แล้วจ้า');
				$('#ddt7s').show();
			}
			else if(sss2==""){
				console.log('ใส่อันที่2แล้วจ้า');
				$('#ddt7s').show();
			}
			else if(sss3==""){
				console.log('ใส่อันที่3แล้วจ้า');
				$('#ddt7s').show();
				$('.ahhahat7').hide();
			}
			else{
				$('#dangerzonet7').addClass('red_markOnly');
				$('#dangerzonet7').text('*ท่านเพิ่มทักษะเสริมที่ถนัดครบจำนวนแล้ว');
				$('.ahhahat7').hide();
			}
		  });
	}
	componentWillUnmount(){
		cookie.save('sideskill1', "",);
		cookie.save('typesideskill1', "",);
		cookie.save('sideskill2', "",);
		cookie.save('typesideskill2', "",);
		cookie.save('sideskill3', "",);
		cookie.save('typesideskill3', "",);
	}
	render (){
		//console.log(this.state.sideskillName);
		return (
			<div className="Registab7">
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
					<h1 id="dangerzonet7">ท่านสามารถเพิ่มทักษะเสริมที่ถนัดได้สูงสุด 3 อัน</h1>
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