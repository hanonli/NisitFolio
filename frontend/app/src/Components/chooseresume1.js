import React, { useState } from 'react';
import Registab3_addHigher from './registab3_addHigher';
import Registab3_addSecondary from './registab3_addSecondary';
import './register.css'
import './registab3.css'

class Registab3 extends React.Component {

    componentDidMount() {
		window.addEventListener('load', this.handleLoad);
		const script = document.createElement("script");
		script.src = "assets/js/chooseresume.js";
		document.body.appendChild(script);
	}

	componentWillUnmount() { 
	   window.removeEventListener('load', this.handleLoad)  
	}

	render(){

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
                                        <div class="list-of-aca" id="in-list-of-aca"></div>
                                        <h5 class="font-titlet3 normalformzonet3 dangerzonet3" id='aca_danger'>ท่านสามารถเพิ่มประวัติการศึกษาได้สูงสุด 3 อัน</h5>
									</div>
								<div className='registab3_formbox col-6'>
                                    <div class='row longlang'>
                                        <div class='col-10'>
									        <h2 class="font-headert3">มัธยมศึกษา</h2>
                                        </div>
                                        <div class="col-2 transition-component" id="cross-fadegone">
                                                <img class="registab3_btnplus icon-plus-circleH bottom" type='button' src="assets/images/add_hover.png"></img>
                                                <img class="registab3_btnplus icon-plus-circleH top" type='button' id='add_high' src="assets/images/add_black.png"></img>
                                        </div>
                                    </div>
									<div className=''>		
                                        <h5 class='font-dest3'>ระดับมัธยมศึกษาในที่นี้จะประกอบไปด้วย มัธยมศึกษาตอนปลาย และปวช.</h5>
                                        <div class="list-of-high" id="in-list-of-high"></div>
                                        <h5 class="font-titlet3 normalformzonet3 dangerzonet3" id='high_danger'>ท่านสามารถเพิ่มประวัติการศึกษาได้สูงสุด 3 อัน</h5>
                                            <div class="center3">
                                            </div>
									    </div>
									</div>
								</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Registab3;