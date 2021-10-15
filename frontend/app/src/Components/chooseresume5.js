import React from 'react';
import './register.css';
import Ddt7 from './dropdownt7';
import SelectSS7 from './dropsideskill';
import $ from 'jquery';
import Select, { NonceProvider } from 'react-select'
import cookie from 'react-cookies'
import Chooseresume from '../chooseresume';

class Chooseresume5 extends React.Component {
	
	constructor(props) {
		super(props);
		this.state = {
		  sideskillName: "",
		  checkstatust7: false,
		  countsideskill:0,
		};
		cookie.save('sideskill1',"");
		cookie.save('sideskill2',"");
		cookie.save('sideskill3',"");
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
		}
	  };

	  componentDidMount(){
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
		cookie.save('sideskill2', "",);
		cookie.save('sideskill3', "",);
	}
	render (){
		//console.log(this.state.sideskillName);
		return (
			<div className="Registab7">
                <h2 class="headerChooseResume">คุณสามารถเลือกทักษะเสริมที่สอดคล้องกับตำแหน่งงานที่สนใจได้สูงสุด 3 รายการ</h2>
				<div class="regis-box-content1" id="yyy">
					<div class="dropdowntap7 fixed-wrapper">
					</div>
					<h1 id="dangerzonet7" class='normalformzonet3'>คุณเลือกไปแล้ว x รายการ</h1>
				</div>
			</div>
		);
	}
}

export default Chooseresume5;