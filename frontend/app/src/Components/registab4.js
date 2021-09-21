import React, { Component, useState } from 'react';
import Registab4_addWorkHistory from './registab4_addWorkHistory';

import './registab3.css'
import './register.css'

const Registab4 = () => {

		return (
			<div className="Registab4 regis-box-content1">
		
						<div className='registab4_formbox' >
								
								<div class='registab4_btnplus'>
									<button type="button" class="btn justify-content-center" id="add_work" data-bs-toggle="modal" data-bs-target="#registab4Modal">
											<img id='icon-plus-circle'  src="assets/images/+.png" width="115" height="115" ></img>
									</button>
								</div>
                                <div class="list-of-work row" id="in-list-of-work"></div>
                                <div class="t4-content col-6">
                          <h5 class="font-titlet4 ">พ่อครัว</h5>
                          <div class="row">
                              <div class="col-3 font-titlet3">
                              <div class="font-titlet3">กุ๊กไก่มหาชน</div>
                              <div class="font-titlet3">เริ่มต้น 08/2009</div>
                              <div class="font-titlet3">สิ้นสุด 09/2019</div>
                              </div>
                              <div class="col-9 font-titlet3">หิวข้าวมากแม่ช่วยด้วยยยยยยยยยยยยยยยยยยยยยยยยยยยยยยยยยยยยยยยยยยยยยยยยยยยยยยยยยยยยยยยยยยยยยยยยยยยยยย</div>
                          </div>
                          <div class="row">
                              <div class="col-3 font-titlet3">เงินเดือน</div>
                              <div class="col-9 font-titlet3">- บาท</div>
                          </div>
                          <div class="layer_icon2" >
                             <button type="button" class="btn button1" id="edit-work"><img src="assets/images/blackedit.png" width="57" height="57"></img></button>
                             <button type="button" class="btn button2" id="del-work"><img src="assets/images/bin.png" width="60" height="60"></img></button>
                          </div>
                      </div>
								<div class="modal fade" id="registab4Modal" tabindex="-1" aria-labelledby="exampleModalLabel1" aria-hidden="true">
									<div class="modal-dialog modal-dialog-centered modal-xl">
										<div class="modal-content modalworkhis" >
											<div class='modal-body'>
												<h1 class='modal-title' id='regisModallabelt4_1'>เพิ่มประวัติการทำงาน</h1>			
												<div className='addWorkHistory'>
												<div className="Registab4_addWorkHistory">

                    <form class='' id='WorkHistoryForm'>
                        <div class='col-4'>
                            <div class="selectDropdown">
                                <select class="form-select form-select-lg dropbtn margin-bottom1 fff"  aria-labelledby="select1" id='jobtype_work' required>
                                    <option selected disabled value='none'>ประเภทงาน*</option>
                                    <option value='งานประจำ' >งานประจำ</option>    
                                    <option value='งานเสริมนอกเวลา' >งานเสริมนอกเวลา</option>
                                    <option value='ฟรีแลนซ์' >ฟรีแลนซ์</option>
                                </select>
                            </div>
                        </div>
                        <div class='row'>
                            <div class='col-6'>
                                <input type="text" class="form-control dropbtn margin-bottom1 " id="jobname_work" placeholder="ตำแหน่งงาน*" required></input>
                            </div>
                            <div class='col-6'>
                                <input type="text" class="form-control dropbtn margin-bottom1 " id="company_work" placeholder="สังกัด/บริษัท(ถ้ามี)"></input>
                            </div>
                        </div>
                        <div class='row'>
                            <div class='col-5'>
                                <div class='col-8'>
                                    <input type="text" class="form-control dropbtn margin-bottom1 " id="salary_work" placeholder="รายได้"></input>
                                </div>
                            </div>
                            <div class='col-5'>
                                <div class='col-8'>
                                    <div class="selectDropdown">
                                        <select class="form-select form-select-lg dropbtn margin-bottom1 fff"  id="salarytype_work" aria-labelledby="select1"  required>
                                            <option selected disabled value=''>ประเภทรายได้</option>
                                            <option value='รายได้ต่อไตรมาส' >รายได้ต่อไตรมาส</option>
                                            <option value='รายได้ต่อเดือน'>รายได้ต่อเดือน</option>    
                                            <option value='รายได้ต่อสัปดาห์'>รายได้ต่อสัปดาห์</option>
                                            <option value='รายได้ต่อวัน'>รายได้ต่อวัน</option>
                                            <option value='รายได้ต่องาน'>รายได้ต่องาน</option>
                                            <option value='รายได้ไม่แน่นอน'>รายได้ไม่แน่นอน</option>
                                            <option value='ไม่ระบุ'>ไม่ระบุ</option>
                                        </select>
                                    </div>       
                                </div>
                            </div>
                        </div>        

                        <div class='row'>
                            <div class='col-5'>
                                <div class='col-8'>
                                    <div class="selectDropdown">
                                        <select class="form-select form-select-lg dropbtn margin-bottom1 fff"  id='year_startwork' aria-labelledby="select1"  required>
                                            <option selected disabled value='0'>ปีที่เข้าทำงาน*</option>
                                        </select>
                                    </div>       
                                </div>
                            </div>
                            <div class='col-5'>
                                <div class='col-8'>
                                    <div class="selectDropdown">
                                        <select class="form-select form-select-lg dropbtn margin-bottom1 fff"  id='month_startwork' aria-labelledby="select1" required>
                                            <option selected disabled value='0'>เดือนที่เข้าทำงาน*</option>
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                            <option value="4">4</option>
                                            <option value="5">5</option>
                                            <option value="6">6</option>
                                            <option value="7">7</option>
                                            <option value="8">8</option>
                                            <option value="9">9</option>
                                            <option value="10">10</option>
                                            <option value="11">11</option>
                                            <option value="12">12</option>
                                        </select>
                                    </div>       
                                </div>
                            </div>
                        </div>
                        <div class='row'>
                            <div class='col-5'>
                                <div class='col-8'>
                                    <div class="selectDropdown">
                                        <select class="form-select form-select-lg dropbtn margin-bottom1 fff" id='year_endwork' aria-labelledby="select1" >
                                            <option selected disabled value='0'>ปีที่ออกจากงาน</option>
                                        </select>
                                    </div>       
                                </div>
                            </div>
                            <div class='col-4'>
                                <div class='col-10'>
                                    <div class="selectDropdown">
                                        <select class="form-select form-select-lg dropbtn margin-bottom1 fff" id='month_endwork' aria-labelledby="select1">
                                            <option selected disabled value='0'>เดือนที่ออกจากงาน</option>
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                            <option value="4">4</option>
                                            <option value="5">5</option>
                                            <option value="6">6</option>
                                            <option value="7">7</option>
                                            <option value="8">8</option>
                                            <option value="9">9</option>
                                            <option value="10">10</option>
                                            <option value="11">11</option>
                                            <option value="12">12</option>
                                        </select>
                                    </div>       
                                </div>
                            </div>
                            <div class='col'>
                                <h5 id='registab4_textOr' class="modaltextB"> หรือ</h5>
                            </div>
                            <div class='col-2'>
                                <div class='row'>
                                    <div class='col'>
                                        <div class="form-check" id='registab4_radiocheck'>
                                            <input class="form-check-input" type="checkbox" id="regist4_cb" for="flexCheckDefault"></input>
                                            <label class="form-check-label modaltextB" for="registab4_Radios1">
                                                ยังอยู่ในงาน
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <textarea type="text" rows='5' class="form-control dropbtn margin-bottom1 registab4_textbox" id="inform_work"  placeholder='เพิ่มรายละเอียด(ถ้ามี)'>
                        </textarea>

                    </form>
			</div>
												</div>								
											</div>
												<div class="centerverify button-add-work1">
													<button type="button" class="btn btn-cta-primary-svshort round profile-button grey margin-right-m" data-bs-dismiss="modal">ยกเลิก</button>												
													<button type="button" class="btn btn-cta-primary-yellowshort profile-button round" id="submit-work">เพิ่ม</button>
												</div>

										</div>
									</div>
								</div>			
		

				</div>
                <div class="modal fade" id="Modal_remove_work" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
						<div class="modal-dialog modal-dialog-centered">
							<div class="modal-content minisize">
								<h4 class="del-b">คุณต้องการลบประวัติการทำงานนี้ ?</h4>
								<div class="centerverify">
									<a id="can_del_work" type="button" class="btn btn-cta-primary-svshort round profile-button grey margin-right-m" data-bs-dismiss="modal">ยกเลิก</a>
									<a id="sub_del_work" type="button" class="btn btn-cta-primary-yellowshort profile-button round" >ลบ</a>
								</div>
							</div>
						</div>
					</div>
			</div>
		);
	}


export default Registab4;