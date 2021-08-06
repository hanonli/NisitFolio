import React from 'react';
import './registtab3.css'

class Registab3_addHigher extends React.Component {
	render (){
		return (
			<div className="Registab3_addHigher ">
				
                <form class='was-validated' id='HigherForm'>
                    <div class='col-5' >
                        <div class="selectDropdown">
                            <select class="form-select form-select-lg dropbtn margin-bottom1 fff" id='selectDropdown1' aria-labelledby="select1" required>
                                <option selected disabled value=''>เลือกวุฒิการศึกษา</option>
                                <option >ปริญญาเอก</option>    
                                <option >ปริญญาโท</option>
                                <option >ปริญญาตรี</option>
                                <option >ปริญญาจัตวา</option>
                                <option >ปริญญาใจ</option>
                            </select>

                        </div>
                    </div>
                    <div class='row'>
                        <div class="col-6 ">
                            <input type="text" class="form-control dropbtn margin-bottom1 " id="ValidationSchoolFeedback" placeholder="สถานศึกษา*" required></input>
                        </div>
                        <div class="col-6">
                            <input type="text" class="form-control dropbtn margin-bottom1 " id="ValidationFacultyFeedback" placeholder="คณะ*" required></input>
                        </div>
                    </div>
                    <div class='row'>
                        <div class="col-6   ">
                            <input type="text" class="form-control dropbtn margin-bottom1 " id="ValidationAreaFeedback"  placeholder='สาขาวิชา' required></input>
                        </div>
                        <div class="col-6">
                            <div class='row'>
                                <div class='col'> 
                                    <h5 id='textGrade'>เกรดเฉลี่ยรวม</h5>
                                </div>
                                <div class='col-4 ms-auto'> 
                                    <input type="text" class="form-control dropbtn margin-bottom1 " id="ValidationGradeFeedback" placeholder="XX.X" required></input>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class='col-3' >
                        <div class="selectDropdown">
                            <select class="form-select form-select-lg dropbtn margin-bottom1 is-valid" id='ValidationGraduateYearFeedback' aria-labelledby="select1" required>
                                <option selected disabled value=''>ปีที่จบการศึกษา</option>
                                <option >กำลังศึกษา</option>    
                                <option >กำลังจะไปไหน</option>
                                <option >กำลังจะต่อยหน้ามึงอะ</option>
                            </select>
                            <br/>
                        </div>               
                    </div>
                </form>
			</div>
			
		);
	}
}

export default Registab3_addHigher;