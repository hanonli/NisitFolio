import React from 'react';
import './registtab3.css'

class Registab3_addHigher extends React.Component {
	render (){
		return (
			<div className="Registab3_addHigher">
				
                <div class='col-4' >
                    <div class="selectDropdown">
                        <select class="form-select form-select-lg dropbtn margin-bottom1 fff" id='selectDropdown1' aria-labelledby="select1">
                            <option selected disabled value>เลือกวุฒิการศึกษา</option>
                            <option >ปริญญาเอก</option>    
                            <option >ปริญญาโท</option>
                            <option >ปริญญาตรี</option>
                        </select>

                    </div>
                </div>
                <div class='row'>
                    <div class="col-md-6">
                        <input type="text" class="form-control dropbtn margin-bottom1" id="school" placeholder="สถานศึกษา*" required></input>
                    </div>
                    <div class="col-md-6">
                        <input type="text" class="form-control dropbtn margin-bottom1" id="statitued" placeholder="คณะ*" required></input>
                    </div>
                </div>
                <div class='row'>
                    <div class="col-md-6">
                        <input type="text" class="form-control dropbtn margin-bottom1" id="main_subj" placeholder="สาขาวิชา*" required></input>
                    </div>
                    <div class="col-md-6">
                        <br/>
                        <h5>เกรดเฉลี่ยรวม</h5>
                        

                    </div>
                </div>
                <div class='col-12' >
                    <div class="selectDropdown">
                        <select class="form-select form-select-lg dropbtn margin-bottom1 fff" id='selectDropdown1' aria-labelledby="select1">
                            <option selected disabled value>เลือกวุฒิการศึกษา</option>
                            <option >ปริญญาเอก</option>    
                            <option >ปริญญาโท</option>
                            <option >ปริญญาตรี</option>
                        </select>
                        <br/>
                    </div>
                </div>




			
			</div>
			
		);
	}
}

export default Registab3_addHigher;