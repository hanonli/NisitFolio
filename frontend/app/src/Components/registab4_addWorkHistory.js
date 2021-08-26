import React from 'react';
import './registab3.css'

class Registab4_addWorkHistory extends React.Component {
    constructor(props) {
		super(props);
		this.handleLoad = this.handleLoad.bind(this);
	 }
	
	componentDidMount() {
		window.addEventListener('load', this.handleLoad);
		const script = document.createElement("script");
		script.src = "assets/js/register.js";
		document.body.appendChild(script);
		
	}
	
	componentWillUnmount() { 
	   window.removeEventListener('load', this.handleLoad)  
	}
	
    handleLoad() {
		console.log("YEAH!");
	 }

	render (){
		return (
			<div className="Registab4_addWorkHistory">
 
                    <form class='' id='WorkHistoryForm'>
                        <div class='col-4'>
                            <div class="selectDropdown">
                                <select class="form-select form-select-lg dropbtn margin-bottom1 fff"  aria-labelledby="select1" required>
                                    <option selected disabled value=''>ประเภทงาน</option>
                                    <option >ระเบิดมหาลัย</option>    
                                    <option >เผาบ้าน</option>
                                    <option >ขูดรถ</option>
                                </select>
                            </div>
                        </div>
                        <div class='row'>
                            <div class='col-6'>
                                <input type="text" class="form-control dropbtn margin-bottom1 " id="ValidationPositionFeedback" placeholder="ตำแหน่งงาน" required></input>
                            </div>
                            <div class='col-6 was-validated'>
                                <input type="text" class="form-control dropbtn margin-bottom1 " id="ValidationCompanyFeedback" placeholder="สังกัด/บริษัท"></input>
                            </div>
                        </div>
                        <div class='row'>
                            <div class='col-5'>
                                <div class='col-8'>
                                    <input type="text" class="form-control dropbtn margin-bottom1 " id="ValidationIncomeFeedback" placeholder="รายได้"></input>
                                </div>
                            </div>
                            <div class='col-5'>
                                <div class='col-8'>
                                    <div class="selectDropdown">
                                        <select class="form-select form-select-lg dropbtn margin-bottom1 fff"  aria-labelledby="select1" required>
                                            <option selected disabled value=''>ประเภทรายได้</option>
                                            <option >ได้ใจ</option>    
                                            <option >ได้หน้า</option>
                                            <option >ได้ตา</option>
                                            <option >ได้หมดถ้าสดชื่น</option>
                                        </select>
                                    </div>       
                                </div>
                            </div>
                        </div>        

                        <div class='row'>
                            <div class='col-5'>
                                <div class='col-8'>
                                    <div class="selectDropdown">
                                        <select class="form-select form-select-lg dropbtn margin-bottom1 fff"  aria-labelledby="select1" required>
                                            <option selected disabled value=''>ปีที่เข้าทำงาน</option>
                                            <option >ปีนี้</option>    
                                            <option >ปีหน้า</option>
                                            <option >ปีไหนก็ไม่เข้าหรอก</option>
                                        </select>
                                    </div>       
                                </div>
                            </div>
                            <div class='col-5'>
                                <div class='col-8'>
                                    <div class="selectDropdown">
                                        <select class="form-select form-select-lg dropbtn margin-bottom1 fff"  aria-labelledby="select1" required>
                                            <option selected disabled value=''>เดือนที่เข้าทำงาน</option>
                                            <option >เดือนนี้</option>    
                                            <option >เดือนหน้า</option>
                                        </select>
                                    </div>       
                                </div>
                            </div>
                        </div>

                        <div class='row'>
                            <div class='col-5'>
                                <div class='col-8'>
                                    <div class="selectDropdown">
                                        <select class="form-select form-select-lg dropbtn margin-bottom1 fff"  aria-labelledby="select1" id='year_endjob'required>
                                            <option selected disabled value=''>ปีที่ออกจากงาน</option>
                                            <option >ปีนี้</option>    
                                            <option >ปีหน้า</option>
                                            <option >7ปีก้ไม่ออก</option>
                                            <option >ปีไหนก็ไม่ออกหรอก</option>
                                        </select>
                                    </div>       
                                </div>
                            </div>
                            <div class='col-4'>
                                <div class='col-10'>
                                    <div class="selectDropdown">
                                        <select class="form-select form-select-lg dropbtn margin-bottom1 fff"  aria-labelledby="select1" required>
                                            <option selected disabled value=''>เดือนที่ออกงาน</option>
                                            <option >เดือนนี้</option>    
                                            <option >เดือนหน้า</option>
                                            <option >ก็บอกว่าไม่ออก</option>
                                        </select>
                                    </div>       
                                </div>
                            </div>
                            <div class='col'>
                                <h5 id='registab4_textOr'> หรือ</h5>
                            </div>
                            <div class='col-2'>
                                <div class='row'>
                                    <div class='col'>
                                        <div class="form-check" id='registab4_radiocheck'>
                                            <input class="form-check-input" type="radio" name="exampleRadios" id="registab4_Radios1" value="option1" ></input>
                                            <label class="form-check-label" for="registab4_Radios1">
                                                ยังอยู่ในงาน
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>                        



                    </form>

					



			</div>
		);
	}
}

export default Registab4_addWorkHistory;