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
	  }

	  onInputChange = value => {
		this.setState({
			sideskillName: value,
			checkstatust7: true,
		});
		//console.log("I am Parent component. I got", value, "from my child.");
		//console.log("I am",this.state.checkstatust7);
		//console.log('Now!!' +this.state.countsideskill);
		};

	  componentDidMount(){
		window.addEventListener('load', this.handleLoad);
		var choose_sideskill = [];
		var isCheck_sideskill = {};
		var aaa = this;
		setTimeout(() => {
		const myssdt2 = this.props.sideskill_data ? this.props.sideskill_data : [];
		console.log('Sideskill_data : ',myssdt2);
        var ssl = [...myssdt2];
		console.log('SSL : ',ssl);
		myssdt2.forEach(ele => {
			//alert(ele.sideskillName);
			isCheck_sideskill[ele.sideskill_id] = false;
			var ddt7_un =` <div id={ele.sideskill_id}>\
			<input\
				class="myresume-choose-ssl1"\
				id="{xxx}"\
				type="checkbox"\
				value="{ele.sideskill_idvalue}"\
				defaultChecked="{isCheck_sideskill[ele.sideskill_id]}"\
				hidden\
			/>\
			<label class="dropbtn-box margin-bottom1" for="{forxxx}" id="list-ssl-22">\
				<div >
					<div class="textT7B">{ele.sideskillName}</div>\
					<div class="icon-checkboxct6"><img height="35" src="assets/images/check_black.png" oncontextmenu="return false;" ondragstart="return false;"></img></div>\
				</div>\
			</label>\
		</div >`;
			ddt7_un = ddt7_un.replace("{ele.sideskill_id}", ele.sideskill_id);
			ddt7_un = ddt7_un.replace("{xxx}", `xxx` + ele.sideskill_id);
			ddt7_un = ddt7_un.replace("{ele.sideskill_idvalue}", ele.sideskill_id);
			ddt7_un = ddt7_un.replace("{isCheck_sideskill[ele.sideskill_id]}", isCheck_sideskill[ele.sideskill_id]);
			ddt7_un = ddt7_un.replace("{forxxx}", `xxx` + ele.sideskill_id);
			ddt7_un = ddt7_un.replace("{ele.sideskillName}", ele.sideskillName);
			$(".dropdowntap7").append(ddt7_un);
		});
		console.log("isCheck_sideskill :", isCheck_sideskill);
	},4000);
		$(document).on("click", ".myresume-choose-ssl1", function () {
            choose_sideskill = $('.myresume-choose-ssl1:input[type=checkbox]:checked').map(function (_, el) {
                return $(el).val();
            }).get();
            console.log("choosesideskill :", choose_sideskill);
        });

        $(document).on("click", ".myresume-choose-ssl1:input:checkbox", function () {
            var bol = $(".myresume-choose-ssl1:input:checkbox:checked").length >= 3;
            $(".myresume-choose-ssl1:input:checkbox").not(":checked").attr("disabled", bol);
        });

        $(document).on("change", ".myresume-choose-ssl1", function () {
            if (choose_sideskill.length === 3) {
                $("#dangerzonect6").text("คุณเลือกครบ 3 รายการแล้ว");
                $("#dangerzonect6").addClass("red_markOnly");
            }
            else if (choose_sideskill.length === 0) {
                $("#dangerzonect6").text("");
                $("#dangerzonect6").removeClass("red_markOnly");
            }
            else {
                $("#dangerzonect6").text(`คุณเลือกไปแล้ว ${choose_sideskill.length} รายการ`);
                $("#dangerzonect6").removeClass("red_markOnly");
            }
        });
	}
	
	render (){
		//console.log(this.state.sideskillName);
		return (
			<div className="Registab7">
                <h2 class="headerChooseResume">คุณสามารถเลือกทักษะเสริมที่สอดคล้องกับตำแหน่งงานที่สนใจได้สูงสุด 3 รายการ</h2>
				<div class="Editresume-box-content6" id="yyy">
					<div class=" myresume-choose-ssl1 dropdowntap7 fixed-wrapper">
					</div>
				</div>
				<h5 id="dangerzonect6" class='normalformzonet3'></h5>
			</div>
		);
	}
}

export default Chooseresume5;