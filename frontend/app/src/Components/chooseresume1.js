import { data } from 'jquery';
import React, { useState } from 'react';
import cookie from 'react-cookies';
import $ from 'jquery';

class Editresume1 extends React.Component {

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
					<h5 class="dangerzoneEditresumeColor" id="dangerzonect1"></h5>
				</div>
		);
	}
}

export default Editresume1;

