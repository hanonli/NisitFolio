import React from 'react';
import './register.css';
import Ddt7 from './dropdownt7';
import SelectSS7 from './dropsideskill';
import $ from 'jquery';
import Select, { NonceProvider } from 'react-select'
import cookie from 'react-cookies'
import Chooseresume from '../chooseresume';

/*Wait for Port*/
class Chooseresume5 extends React.Component {
	
	constructor(props) {
		super(props);
	  }

	render (){
		//console.log(this.state.sideskillName);
		return (
			<div className="Registab7">
				<h2 class="headerChooseResume">คุณสามารถเลือกผลงานที่สอดคล้องกับตำแหน่งงานที่สนใจได้ไม่จำกัด</h2>
				<div class="Editresume-box-content6" id="yyy">
				</div>
				<h1 id="dangerzonect5" class='normalformzonet3'>คุณเลือกไปแล้ว x รายการ</h1>
			</div>
		);
	}
}

export default Chooseresume5;