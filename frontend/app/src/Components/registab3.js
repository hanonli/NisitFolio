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
                                    <div class='row longlang'>
                                        <div class='col-10'>
                                            <h2 class="font-headert3">อุดมศึกษา</h2>
                                        </div>
                                        <button type="button" class="col-2 btn registab3_btnplus" id="add_aca">
											<img id='icon-plus-circle'  src="assets/images/add_black.png"></img>
									    </button>
                                    </div>
									<div className=''>
                                        <h5 class='font-dest3'>ระดับอุดมศึกษาจะประกอบไปด้วย ปวส. ปริญญาตรี ปริญญาโท และปริญญาเอก</h5>
                                        <div class="list-of-aca" id="in-list-of-aca"></div>
                                        <h5 class="font-titlet3 normalformzonet3 dangerzonet3" id='aca_danger'>ท่านสามารถเพิ่มประวัติการศึกษาได้สูงสุด 3 อัน</h5>
									</div>

									<div class="modal fade" id="registab3Modal1" tabindex="-1" aria-labelledby="exampleModalLabel1" aria-hidden="true">
										<div class="modal-dialog modal-dialog-centered modal-xl">
											<div class="modal-content modalworkaddH" >
												<div class='modal-body'>
													<h1 class='modal-title' id='regisModallabel1' >เพิ่มประวัติการศึกษา</h1>
													<div className='addHigher'>
                                                        <div className="Registab3_addHigher ">
                                                            <form  id='HigherForm'>
                                                            <div class='row'>
                                                                <div class="col-md-2 chidright">
										                            <label class="form-f-sex">วุฒิการศึกษา<a class="red_markEp1">*</a></label>
									                            </div>
                                                                <div class='col-3' >
                                                                    <div class="selectDropdown">
                                                                        <select class="form-select form-select-lg dropbtn margin-bottom1 fff" id='aca_degree' aria-labelledby="select1" required>
                                                                            <option selected disabled value='none'>เลือกวุฒิการศึกษา</option>
                                                                            <option value='ปริญญาเอก'>ปริญญาเอก</option>    
                                                                            <option value='ปริญญาโท'>ปริญญาโท</option>
                                                                            <option value='ปริญญาตรี'>ปริญญาตรี</option>
                                                                        </select>
                                                                    </div>
                                                                </div>
                                                                <div class="col-md-3 chidright">
										                            <label class="form-f-sex">ปีที่จบการศึกษา<a class="red_markEp1">*</a></label>
									                            </div>
                                                                <div class='col-3' >
                                                                    <select class="form-select form-select-lg dropbtn margin-bottom1 fff" id='year_secondary' aria-labelledby="select1">
                                                                        <option selected disabled value=''>ค.ศ.</option>
                                                                        <option value='9999'>กำลังศึกษา</option>
                                                                    </select>            
                                                                </div>
                                                            </div>
                                                                <div class='row'>
                                                                    <div class="col-md-2 chidright">
										                                <label class="form-f-sex">สถานศึกษา<a class="red_markEp1">*</a></label>
									                                </div>
                                                                    <div class="col-9 ">
                                                                        <input type="text" class="form-control dropbtn margin-bottom1 " id="aca_name" required></input>
                                                                    </div>
                                                                </div>
                                                                <div class='row'>
                                                                    <div class="col-md-2 chidright">
										                                <label class="form-f-sex">คณะ<a class="red_markEp1">*</a></label>
									                                </div>
                                                                    <div class="col-9">
                                                                        <input type="text" class="form-control dropbtn margin-bottom1 " id="aca_faculty" required></input>
                                                                    </div>
                                                                </div>
                                                                <div class='row'>
                                                                    <div class="col-md-2 chidright">
										                                <label class="form-f-sex">สาขาวิชา</label>
									                                </div>
                                                                    <div class="col-4">
                                                                        <input type="text" class="form-control dropbtn margin-bottom1 fff" id="aca_field" ></input>
                                                                    </div>
                                                                    <div class="col-2 chidright">
										                                <label class="form-f-sex">เกรดเฉลี่ยสะสม</label>
									                                </div>
                                                                    <div class="col-3">
                                                                        <input type="number" class="form-control dropbtn margin-bottom1" placeholder='X.XX' id="aca_grade"></input>
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
                                    <div class='row longlang'>
                                        <div class='col-10'>
									        <h2 class="font-headert3">มัธยมศึกษา</h2>
                                        </div>
                                        <button type="button" class="btn registab3_btnplus col-2" data-bs-toggle="modal" data-bs-target="#registab3Modal2" id="add_high">
                                            <img id='icon-plus-circle'  src="assets/images/add_black.png"></img>
                                        </button>
                                    </div>
									<div className=''>		
                                        <h5 class='font-dest3'>ระดับมัธยมศึกษาในที่นี้จะประกอบไปด้วย มัธยมศึกษาตอนปลาย และปวช.</h5>
                                        <div class="list-of-high" id="in-list-of-high"></div>
                                        <h5 class="font-titlet3 normalformzonet3 dangerzonet3" id='high_danger'>ท่านสามารถเพิ่มประวัติการศึกษาได้สูงสุด 3 อัน</h5>
                                            <div class="center3">
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
                    <div class='row'>
                        <div class="col-3 chidright">
                            <label class="form-f-sex">วุฒิการศึกษา<a class="red_markEp1">*</a></label>
                        </div>
                        <div class="col-3">
                            <select class="form-select form-select-lg dropbtn margin-bottom1 fff" id='high_degree' aria-labelledby="select1" required>
                                <option selected disabled value=''>เลือกวุฒิการศึกษา</option> 
                                <option value='อาชีวะศึกษา' >อาชีวะศึกษา </option>  
                                <option value='มัธยมศึกษาตอนปลาย' >มัธยมศึกษาตอนปลาย</option>    
                                <option value='มัธยมศึกษาตอนต้น' >มัธยมศึกษาตอนต้น</option>
                                <option value='ประถมศึกษา' >ประถมศึกษา</option> 
                            </select>
                        </div>
                        <div class="col-3 chidright">
                            <label class="form-f-sex">ปีที่จบการศึกษา<a class="red_markEp1"></a></label>
                        </div>
                        <div class='col-3' >
                            <select class="form-select form-select-lg dropbtn margin-bottom1 fff" id='year_higher' aria-labelledby="select1">
                                <option selected disabled value=''>ค.ศ.</option>
                                <option value='9999'>กำลังศึกษา</option>
                            </select>
                        </div>
                    </div>
                    <div class='row'>
                        <div class="col-md-3 chidright">
							<label class="form-f-sex">สถานศึกษา<a class="red_markEp1">*</a></label>
						</div>
                        <div class="col-9 ">
                            <input type="text" class="form-control dropbtn margin-bottom1 fff" id="high_name" required></input>
                        </div>
                    </div>
                    <div class='row'>
                        <div class="col-md-3 chidright">
							<label class="form-f-sex">หลักสูตร/แผนการเรียน</label>
						</div>
                        <div class="col-3 ">
                            <input type="text" class="form-control dropbtn margin-bottom1 fff" id="high_field" required></input>
                        </div>
                        <div class="col-md-3 chidright">
							<label class="form-f-sex">เกรดเฉลี่ยสะสม</label>
						</div>
                        <div class='col-3'> 
                            <input type="text" class="form-control dropbtn margin-bottom1 " id="high_grade" placeholder="X.XX"></input>
                        </div>
                    </div>
                </form>
			</div>
													</div>													
												</div>
													<div class="centerverify button-add-addH2">
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