import React, { Component, useState } from 'react';
import Registab4_addWorkHistory from './registab4_addWorkHistory';

import './registab3.css'
import './register.css'

const Registab4 = () => {

		const handleSubmit = (e) => {
			e.preventDefault();
			const newForm = { JobName , JobType , Company , Salary ,StartMonth , StartYear , EndMonth , EndYear , Information } ;

			fetch('http://localhost:2000/workhistory',{
				method: 'Post',
				headers: {"Content-Type" : "application/json"},
				body: JSON.stringify(newForm)
			}).then(() => {
				console.log('newWorkHistoryForm added')
			})
			alert(`You just submit form \nform = ${JSON.stringify(newForm)} `)
		}

        const [JobName , setJobName] = useState('');
        const [JobType , setJobType] = useState('');
        const [Company , setCompany] = useState('');
        const [StartMonth , setStartMonth] = useState();
        const [StartYear , setStartYear] = useState();
        const [EndMonth , setEndMonth] = useState();
        const [EndYear , setEndYear] = useState();
        const [Salary , setSalary] = useState();
        const [Information , setInformation] = useState('');

		return (
			<div className="Registab4 regis-box-content">
		
						<div className='registab4_formbox' >
								
								<div class='registab4_btnplus'>
									<button type="button" class="btn justify-content-center" data-bs-toggle="modal" data-bs-target="#registab4Modal">
											<img id='icon-plus-circle'  src="assets/images/+.png" width="115" height="115" ></img>
									</button>
								</div>
								<div class="modal fade" id="registab4Modal" tabindex="-1" aria-labelledby="exampleModalLabel1" aria-hidden="true">
									<div class="modal-dialog modal-dialog-centered modal-xl">
										<div class="modal-content modalworkhis" >
											<div class='modal-body'>
												<h1 class='modal-title' id='regisModallabel1'>เพิ่มประวัติการทำงาน</h1>			
												<div className='addWorkHistory'>
												<div className="Registab4_addWorkHistory">

                    <form class='' id='WorkHistoryForm'>
                        <div class='col-4'>
                            <div class="selectDropdown">
                                <select class="form-select form-select-lg dropbtn margin-bottom1 fff"  aria-labelledby="select1" value={JobType} onChange={(e) => setJobType(e.target.value)}required>
                                    <option selected disabled value=''>ประเภทงาน*</option>
                                    <option value='งานประจำ' >งานประจำ</option>    
                                    <option value='งานเสริมนอกเวลา' >งานเสริมนอกเวลา</option>
                                    <option value='ฟรีแลนซ์' >ฟรีแลนซ์</option>
                                </select>
                            </div>
                        </div>
                        <div class='row'>
                            <div class='col-6'>
                                <input type="text" class="form-control dropbtn margin-bottom1 " id="ValidationPositionFeedback" placeholder="ตำแหน่งงาน*"value={JobName} onChange={ (e) => setJobName(e.target.value)} required></input>
                            </div>
                            <div class='col-6'>
                                <input type="text" class="form-control dropbtn margin-bottom1 " id="ValidationCompanyFeedback" placeholder="สังกัด/บริษัท" value={Company} onChange={ (e) => setCompany(e.target.value)}></input>
                            </div>
                        </div>
                        <div class='row'>
                            <div class='col-5'>
                                <div class='col-8'>
                                    <input type="text" class="form-control dropbtn margin-bottom1 " id="ValidationIncomeFeedback" placeholder="รายได้" value={Salary} onChange={ (e) => setSalary(e.target.value)}></input>
                                </div>
                            </div>
                            <div class='col-5'>
                                <div class='col-8'>
                                    <div class="selectDropdown">
                                        <select class="form-select form-select-lg dropbtn margin-bottom1 fff"  aria-labelledby="select1"  required>
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
                                        <select class="form-select form-select-lg dropbtn margin-bottom1 fff"  id='year_startjob' aria-labelledby="select1" value={StartYear} onChange={ (e) => setStartYear(e.target.value)} required>
                                            <option selected disabled value=''>ปีที่เข้าทำงาน*</option>
                                        </select>
                                    </div>       
                                </div>
                            </div>
                            <div class='col-5'>
                                <div class='col-8'>
                                    <div class="selectDropdown">
                                        <select class="form-select form-select-lg dropbtn margin-bottom1 fff"  aria-labelledby="select1" value={StartMonth} onChange={(e) => setStartMonth(e.target.value)} required>
                                            <option selected disabled value=''>เดือนที่เข้าทำงาน*</option>
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
                                        <select class="form-select form-select-lg dropbtn margin-bottom1 fff"  aria-labelledby="select1" id='year_endjob' value={EndYear} onChange={(e) => setEndYear(e.target.value)} required>
                                            <option selected disabled value=''>ปีที่ออกจากงาน</option>
                                        </select>
                                    </div>       
                                </div>
                            </div>
                            <div class='col-4'>
                                <div class='col-10'>
                                    <div class="selectDropdown">
                                        <select class="form-select form-select-lg dropbtn margin-bottom1 fff"  aria-labelledby="select1" value={EndMonth} onChange={(e) => setEndMonth(e.target.value)} required>
                                            <option selected disabled value=''>เดือนที่ออกงาน</option>
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
                                <h5 id='registab4_textOr'> หรือ</h5>
                            </div>
                            <div class='col-2'>
                                <div class='row'>
                                    <div class='col'>
                                        <div class="form-check" id='registab4_radiocheck'>
                                            <input class="form-check-input" type="checkbox" id="registab4_cb" value=''  ></input>
                                            <label class="form-check-label" for="registab4_Radios1">
                                                ยังอยู่ในงาน
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <textarea type="text" rows='5' class="form-control dropbtn margin-bottom1 " id="registab4_textbox"  placeholder='เพิ่มรายละเอียด(ถ้ามี)' value={Information} onChange={(e) => setInformation(e.target.value)}>
                        </textarea>

                    </form>
			</div>
												</div>								
											</div>
												<div class="centerverify button-add-work1">
													<button type="button" class="btn btn-cta-primary-svshort round profile-button grey margin-right-m" data-bs-dismiss="modal">ยกเลิก</button>												
													<button type="button" class="btn btn-cta-primary-yellowshort profile-button round" onClick={handleSubmit} data-bs-dismiss="modal">เพิ่ม</button>
												</div>

										</div>
									</div>
								</div>			
		

				</div>
			</div>
		);
	}


export default Registab4;