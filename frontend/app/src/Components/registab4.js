import React, { useState } from 'react';
import Registab4_addWorkHistory from './registab4_addWorkHistory';

import './registab3.css'
import './register.css'

const Registab4 = () => {

		const handleSubmit = (e) => {
			e.preventDefault();
			const newForm = { JobName , JobType , Company , Salary ,StartMonth , StartYear , EndMonth , EndYear , Information } ;

			fetch('http://localhost:2000/register',{
				method: 'Post',
				headers: {"Content-Type" : "application/json"},
				body: JSON.stringify(newForm)
			}).then(() => {
				console.log('newWorkHistoryForm added')
			})
            alert(`newWorkHistoryForm added`)
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
		
						<div className='registab4_formbox col-12' >
								
								<div class='registab4_btnplus'>
									<button type="button" class="btn justify-content-center" data-bs-toggle="modal" data-bs-target="#registab4Modal">
											<img id='icon-plus-circle'  src="assets/images/+.png" width="115" height="115" ></img>
									</button>
								</div>
								<div class="modal fade" id="registab4Modal" tabindex="-1" aria-labelledby="exampleModalLabel1" aria-hidden="true">
									<div class="modal-dialog modal-dialog-centered modal-xl">
										<div class="modal-content " >
											<div class='modal-body'>
												<button type="button" class="btn-close" id='registab3_btnclose' aria-label="Close" data-bs-dismiss="modal"></button>
												<h1 class='modal-title' id='regisModallabel1'>เพิ่มประวัติการทำงาน</h1>			
												<div className='addWorkHistory'>
												<div className="Registab4_addWorkHistory">

                    <form class='' id='WorkHistoryForm'>
                        <div class='col-4'>
                            <div class="selectDropdown">
                                <select class="form-select form-select-lg dropbtn margin-bottom1 fff"  aria-labelledby="select1" value={JobType} onChange={(e) => setJobType(e.target.value)}required>
                                    <option selected disabled value=''>ประเภทงาน</option>
                                    <option value='ระเบิดบ้าน' >ระเบิดมหาลัย</option>    
                                    <option value='เผาบ้าน' >เผาบ้าน</option>
                                    <option value='ขูดรถ' >ขูดรถ</option>
                                </select>
                            </div>
                        </div>
                        <div class='row'>
                            <div class='col-6'>
                                <input type="text" class="form-control dropbtn margin-bottom1 " id="ValidationPositionFeedback" placeholder="ตำแหน่งงาน"value={JobName} onChange={ (e) => setJobName(e.target.value)} required></input>
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
                                        <select class="form-select form-select-lg dropbtn margin-bottom1 fff"  aria-labelledby="select1" value={StartYear} onChange={ (e) => setStartYear(e.target.value)} required>
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
                                        <select class="form-select form-select-lg dropbtn margin-bottom1 fff"  aria-labelledby="select1" value={StartMonth} onChange={(e) => setStartMonth(e.target.value)} required>
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
                                        <select class="form-select form-select-lg dropbtn margin-bottom1 fff"  aria-labelledby="select1" id='year_endjob' value={EndYear} onChange={(e) => setEndYear(e.target.value)} required>
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
                                        <select class="form-select form-select-lg dropbtn margin-bottom1 fff"  aria-labelledby="select1" value={EndMonth} onChange={(e) => setEndMonth(e.target.value)} required>
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
                                            <input class="form-check-input" type="radio" name="exampleRadios" id="registab4_Radios1" value="option1"  ></input>
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
											<div class='modal-footer'>
												<div class="centerverify">
													<button type="button" class="btn btn-cta-primary-svshort round profile-button grey margin-right-m" data-bs-dismiss="modal">ยกเลิก</button>												
													<button type="button" class="btn btn-cta-primary-yellowshort profile-button round" onClick={handleSubmit} data-bs-dismiss="modal">ตกลง</button>
												</div>
											</div>

										</div>
									</div>
								</div>			
		

				</div>
			</div>
		);
	}


export default Registab4;