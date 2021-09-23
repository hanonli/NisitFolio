import React, { useState } from 'react';
import Registab3_addHigher from './registab3_addHigher';
import Registab3_addSecondary from './registab3_addSecondary';
import './register.css'
import './registab3.css'

class Registab3 extends React.Component {

    componentDidMount() {
		window.addEventListener('load', this.handleLoad);
		const script = document.createElement("script");
		script.src = "assets/js/registab3_script.js";
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
									<h2 class="font-headert3">อุดมศึกษา</h2>
									<div className=''>
                                        <div class="list-of-aca" id="in-list-of-aca"></div>
                                        <div class="center3">
                                        <button type="button" class="btn registab3_btnplus" id="add_aca">
											<img id='icon-plus-circle'  src="assets/images/+.png"></img>
										</button>
                                        </div>
									</div>

									<div class="modal fade" id="registab3Modal1" tabindex="-1" aria-labelledby="exampleModalLabel1" aria-hidden="true">
										<div class="modal-dialog modal-dialog-centered modal-xl">
											<div class="modal-content modalworkaddH" >
												<div class='modal-body'>
													<h1 class='modal-title' id='regisModallabel1' >เพิ่มประวัติการศึกษา</h1>
													<div className='addHigher'>
                                                        <div className="Registab3_addHigher ">
                                                            <form  id='HigherForm'>
                                                                <div class='col-3' >
                                                                    <div class="selectDropdown">
                                                                        <select class="form-select form-select-lg dropbtn margin-bottom1 fff" id='aca_degree' aria-labelledby="select1" required>
                                                                            <option selected disabled value='none'>เลือกวุฒิการศึกษา*</option>
                                                                            <option value='ปริญญาเอก'>ปริญญาเอก</option>    
                                                                            <option value='ปริญญาโท'>ปริญญาโท</option>
                                                                            <option value='ปริญญาตรี'>ปริญญาตรี</option>
                                                                        </select>

                                                                    </div>
                                                                </div>
                                                                <div class='row'>
                                                                    <div class="col-6 ">
                                                                        <input type="text" class="form-control dropbtn margin-bottom1 " id="aca_name" placeholder="สถานศึกษา*" required></input>
                                                                    </div>
                                                                    <div class="col-6">
                                                                        <input type="text" class="form-control dropbtn margin-bottom1 " id="aca_faculty" placeholder="คณะ*" required></input>
                                                                    </div>
                                                                </div>
                                                                <div class='row'>
                                                                    <div class="col-6   ">
                                                                        <input type="text" class="form-control dropbtn margin-bottom1 " id="aca_field"  placeholder='สาขาวิชา'></input>
                                                                    </div>
                                                                    <div class="col-6">
                                                                        <div class='row'>
                                                                            <div class='col'> 
                                                                                <h5 id='registab4_textGrade' type='number' >เกรดเฉลี่ยสะสม</h5>
                                                                            </div>
                                                                            <div class='col-4 ms-auto'> 
                                                                                <input type="number" class="form-control dropbtn margin-bottom1" placeholder='X.XX' id="aca_grade"></input>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                
                                                                <div class='col-3' >
                                                                    <div class="selectDropdown">
                                                                        <select class="form-select form-select-lg dropbtn_year margin-bottom1 fff" id='year_secondary' aria-labelledby="select1">
                                                                            <option selected disabled value=''>ปีที่จบการศึกษา</option>
                                                                            <option value='9999'>กำลังศึกษา</option>
                                                                        </select>
                                                                        <br/>
                                                                    </div>               
                                                                </div>
                                                            </form>
                                                        </div>
                                                                                                </div>													
                                                                                            </div>
                                                                                                <div class="centerverify button-add-addH1">
                                                                                                    <button type="button" class="btn btn-cta-primary-svshort round profile-button grey margin-right-m" data-bs-dismiss="modal"  id='can-aca'>ยกเลิก</button>
                                                                                                    <button type="button" class="btn btn-cta-primary-yellowshort profile-button round" id='submit-aca' >เพิ่ม</button>
                                                                                                </div>

                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>

								<div className='registab3_formbox col-6'>
									<h2 class="font-headert3">มัธยมศึกษา</h2>
									<div className=''>		
                                        <div class="list-of-high" id="in-list-of-high"></div>
                                            <div class="center3">
                                                <button type="button" class="btn registab3_btnplus" data-bs-toggle="modal" data-bs-target="#registab3Modal2" id="add_high">
                                                    <img id='icon-plus-circle'  src="assets/images/+.png"></img>
                                                </button>
                                            </div>
									    </div>
									<div class="modal fade" id="registab3Modal2" tabindex="-1" aria-labelledby="exampleModalLabel1" aria-hidden="true">
										<div class="modal-dialog modal-dialog-centered modal-xl">
											<div class="modal-content modalworkaddH" >
												<div class='modal-body'>
													<h1 class='modal-title' id='regisModallabel2' >เพิ่มประวัติการศึกษา</h1>
													<div className='addSecondary'>
													<div className="Registab3_addSecondary">
				
                <form  id='SecondaryForm'>
                    <div class='col-5' >
                        <div class="selectDropdown">
                            <select class="form-select form-select-lg dropbtn margin-bottom1 fff" id='high_degree' aria-labelledby="select1" required>
                                <option selected disabled value=''>เลือกวุฒิการศึกษา*</option> 
                                <option value='อาชีวะศึกษา' >อาชีวะศึกษา </option>  
                                <option value='มัธยมศึกษาตอนปลาย' >มัธยมศึกษาตอนปลาย</option>    
                                <option value='มัธยมศึกษาตอนต้น' >มัธยมศึกษาตอนต้น</option>
                                <option value='ประถมศึกษา' >ประถมศึกษา</option> 
                            </select>
                        </div>
                    </div>
                    <div class='row'>
                        <div class="col-12 ">
                            <input type="text" class="form-control dropbtn margin-bottom1 " id="high_name" placeholder="สถานศึกษา*" required></input>
                        </div>
                    </div>
                    <div class='row'>
                        <div class="col-7 ">
                            <input type="text" class="form-control dropbtn margin-bottom1 " id="high_field"  placeholder='หลักสูตร/แผนการเรียน' required></input>
                        </div>
                        <div class="col-5">
                            <div class='row'>
                                <div class='col'> 
                                    <h5 id='registab4_textGrade'>เกรดเฉลี่ยสะสม</h5>
                                </div>
                                <div class='col-7 ms-auto'> 
                                    <input type="text" class="form-control dropbtn margin-bottom1 " id="high_grade" placeholder="X.XX"></input>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class='col-3' >
                        <div class="selectDropdown">
                            <select class="form-select form-select-lg dropbtn_year margin-bottom1 fff" id='year_higher' aria-labelledby="select1">
                                <option selected disabled value=''>ปีที่จบการศึกษา</option>
                                <option value='9999'>กำลังศึกษา</option>
                            </select>
                            <br/>
                        </div>               
                    </div>
                </form>
			</div>
													</div>													
												</div>
													<div class="centerverify button-add-addH1">
														<button type="button" class="btn btn-cta-primary-svshort round profile-button grey margin-right-m" data-bs-dismiss="modal">ยกเลิก</button>
														<button type="button" class="btn btn-cta-primary-yellowshort profile-button round" id="submit-high">เพิ่ม</button>
													</div>

											</div>
										</div>
									</div>
								</div>
						</div>
					</div>
					

				</div>

                <div class="modal fade" id="Modal_remove_aca" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
						<div class="modal-dialog modal-dialog-centered">
							<div class="modal-content minisize">
								<h4 class="del-b">คุณต้องการลบประวัติการศึกษานี้ ?</h4>
								<div class="centerverify">
									<a id="can_del_aca" type="button" class="btn btn-cta-primary-svshort round profile-button grey margin-right-m" data-bs-dismiss="modal">ยกเลิก</a>
									<a id="sub_del_aca" type="button" class="btn btn-cta-primary-yellowshort profile-button round" >ลบ</a>
								</div>
							</div>
						</div>
					</div>
                <div class="modal fade" id="Modal_remove_high" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
						<div class="modal-dialog modal-dialog-centered">
							<div class="modal-content minisize">
								<h4 class="del-b">คุณต้องการลบประวัติการศึกษานี้ ?</h4>
								<div class="centerverify">
									<a id="can_del_high" type="button" class="btn btn-cta-primary-svshort round profile-button grey margin-right-m" data-bs-dismiss="modal">ยกเลิก</a>
									<a id="sub_del_high" type="button" class="btn btn-cta-primary-yellowshort profile-button round" >ลบ</a>
								</div>
							</div>
						</div>
					</div>
			</div>

            
			
		);
	}
}

export default Registab3;