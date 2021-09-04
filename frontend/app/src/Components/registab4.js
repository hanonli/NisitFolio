import React from 'react';
import Registab4_addWorkHistory from './registab4_addWorkHistory';

import './registab3.css'
import './register.css'

const Registab4 = () => {

		const handleSubmit = (e) => {
			e.preventDefault();
			
			fetch('http://localhost:2000/register',{
				method: 'Post',
				headers: {"Content-Type" : "application/json"},
				body: JSON.stringify(Regis4_form)
			}).then(() => {
				console.log('Regis4_form added')
			})


			alert(`You jus submit form \n data = ${JSON.stringify(Regis4_form)}`)
		}

        const Regis4_form = {
			Work_JobName : '',
			Work_JobType : '',
			Company : '',
			Work_Start_Month : 0,
			Work_End_Month : 0,
			Work_Start_Year: 0,
			Work_End_Year : 0 ,
			Salary : 0,
			Infomation : '-' ,

		}

        const newRegis4JobType = (e) =>{
            Regis4_form.Work_JobType = e.target.value
            console.log(Regis4_form)
        }
        const newRegis4JobName = (e) =>{
            Regis4_form.Work_JobName = e.target.value
            console.log(Regis4_form)
        }
        const newRegis4Company = (e) =>{
            Regis4_form.Company = e.target.value
            console.log(Regis4_form)
        }
        const newRegis4StartMonth = (e) =>{
            Regis4_form.Work_Start_Month = e.target.value
            console.log(Regis4_form)
        }
        const newRegis4StartYear = (e) =>{
            Regis4_form.Work_Start_Year = e.target.value
            console.log(Regis4_form)
        }
        const newRegis4EndMonth = (e) =>{
            Regis4_form.Work_End_Month = e.target.value
            console.log(Regis4_form)
        }
        const newRegis4EndYear = (e) =>{
            Regis4_form.Work_End_Year = e.target.value
            console.log(Regis4_form)
        }
        const newRegis4Salary = (e) =>{
            Regis4_form.Salary = e.target.value
            console.log(Regis4_form)
        }
        const newRegis4Information = (e) =>{
            Regis4_form.Infomation = e.target.value
            console.log(Regis4_form)
        }

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
                                <select class="form-select form-select-lg dropbtn margin-bottom1 fff"  aria-labelledby="select1"  onChange={newRegis4JobType} required>
                                    <option selected disabled value=''>ประเภทงาน</option>
                                    <option value='ระเบิดบ้าน' >ระเบิดมหาลัย</option>    
                                    <option value='เผาบ้าน' >เผาบ้าน</option>
                                    <option value='ขูดรถ' >ขูดรถ</option>
                                </select>
                            </div>
                        </div>
                        <div class='row'>
                            <div class='col-6'>
                                <input type="text" class="form-control dropbtn margin-bottom1 " id="ValidationPositionFeedback" placeholder="ตำแหน่งงาน" onBlur={newRegis4JobName} required></input>
                            </div>
                            <div class='col-6'>
                                <input type="text" class="form-control dropbtn margin-bottom1 " id="ValidationCompanyFeedback" placeholder="สังกัด/บริษัท" onBlur={newRegis4Company}></input>
                            </div>
                        </div>
                        <div class='row'>
                            <div class='col-5'>
                                <div class='col-8'>
                                    <input type="text" class="form-control dropbtn margin-bottom1 " id="ValidationIncomeFeedback" placeholder="รายได้" onBlur={newRegis4Salary}></input>
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
                                        <select class="form-select form-select-lg dropbtn margin-bottom1 fff"  aria-labelledby="select1" onChange={newRegis4StartYear} required>
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
                                        <select class="form-select form-select-lg dropbtn margin-bottom1 fff"  aria-labelledby="select1" onChange={newRegis4StartMonth} required>
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
                                        <select class="form-select form-select-lg dropbtn margin-bottom1 fff"  aria-labelledby="select1" id='year_endjob' onChange={newRegis4EndYear} required>
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
                                        <select class="form-select form-select-lg dropbtn margin-bottom1 fff"  aria-labelledby="select1" onChange={newRegis4EndMonth} required>
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
                        <textarea type="text" rows='5' class="form-control dropbtn margin-bottom1 " id="registab4_textbox"  placeholder='เพิ่มรายละเอียด(ถ้ามี)' onBlur={newRegis4Information}>
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