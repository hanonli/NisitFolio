import React from 'react';
//import './registab3.css'
import './register.css'
import './registab4.css'

class Registab4 extends React.Component {

    componentDidMount(){
		window.addEventListener('load', this.handleLoad);
		const script = document.createElement("script");
		script.src = "assets/js/registab4.js";
		document.body.appendChild(script);
    }

	render(){
        return(
            <div className="Registab4">
                <div class="regis-box-content1">
                    <h1 id="text-add-name-my-work11">เพิ่มประวัติการทำงาน</h1>
                    <div class="registab4_formbox">
                        <div className="registab4_btnplus">
                            <button type="button" class="btn" id="add_work" >
                                <img src="assets/images/+.png" width="57" height="57" ></img>
                            </button>
                        </div>
                    </div>

                    <div class="box-box-box-work1">
                        <div class="content-work1111"></div>
                    </div>

                    <div class="modal fade" id="registab4Modal" tabindex="-1" aria-labelledby="exampleModalLabel1" aria-hidden="true">
                        <div class="modal-dialog modal-dialog-centered modal-xl">
                            <div class="modal-content modalworkhis" >
                                <div class='modal-body layoutforwork111'>
                                    <h1 class='modal-title' id='regisModallabelt4_1'>เพิ่มประวัติการทำงาน</h1>			
                                    <div className='addWorkHistory'>
                                        <div className="Registab4_addWorkHistory">

                                            <div class='row'>
                                                <div class="col-2 chidright">
                                                    <label class=" form-f-sex">ประเภทงาน<a class="red_markEp1">*</a></label>
                                                </div>
                                                <div class='col-4'>
                                                    <select class="form-select form-select-lg dropbtn margin-bottom1 fff"  aria-labelledby="select1" id='jobtype_work' required>
                                                        <option selected disabled value="">เลือกประเภทงาน</option>
                                                        <option value='งานประจำ' >งานประจำ</option>    
                                                        <option value='งานเสริมนอกเวลา' >งานเสริมนอกเวลา</option>
                                                        <option value='ฟรีแลนซ์' >ฟรีแลนซ์</option>
                                                    </select>
                                                </div>
                                            </div>

                                            <div class='row'>
                                                <div class="col-2 chidright">
                                                    <label class=" form-f-sex">ตำแหน่งงาน<a class="red_markEp1">*</a></label>
                                                </div>
                                                <div class='col-4'>
                                                    <input maxlength="42" type="text" class="form-control dropbtn margin-bottom1 jobname_work1" id="jobname_work" required></input>
                                                </div>
                                            </div>

                                            <div class='row'>
                                                <div class="col-2 chidright">
                                                    <label class=" form-f-sex">สังกัด/บริษัท</label>
                                                </div>
                                                <div class='col-4'>
                                                    <input maxlength="56" type="text" class="form-control dropbtn margin-bottom1 company_work1" id="company_work"></input>
                                                </div>                                                
                                            </div>

                                            <div class='row'>
                                                <div class="col-2 chidright">
                                                    <label class=" form-f-sex">ประเภทรายได้</label>
                                                </div>                                                
                                                <div class='col-4'>
                                                    <select class="form-select form-select-lg dropbtn margin-bottom1 fff salarytype_work1"  id="salarytype_work" aria-labelledby="select1" required>
                                                        <option value="">เลือกประเภทรายได้</option>
                                                            <option value='รายได้ต่อไตรมาส' >รายได้ต่อไตรมาส</option>
                                                            <option value='รายได้ต่อเดือน'>รายได้ต่อเดือน</option>    
                                                            <option value='รายได้ต่อสัปดาห์'>รายได้ต่อสัปดาห์</option>
                                                            <option value='รายได้ต่อวัน'>รายได้ต่อวัน</option>
                                                            <option value='รายได้ต่องาน'>รายได้ต่องาน</option>
                                                            <option value='รายได้ไม่แน่นอน'>รายได้ไม่แน่นอน</option>
                                                            <option value='ไม่ระบุ'>ไม่ระบุ</option>
                                                    </select>                                              
                                                </div>
                                                <div class='col-2 chidright position-salary1'>
                                                    <label class=" form-f-sex">รายได้</label>
                                                </div>
                                                <div class='col-4'>
                                                    <input maxlength="20" type="text" class="form-control dropbtn margin-bottom1 salary_work1" id="salary_work" placeholder='บาท'></input>
                                                </div>
                                            </div>        

                                            <div class='row'>
                                                <div class='col-2 chidright'>
                                                    <label class=" form-f-sex">ปีที่เข้าทำงาน<a class="red_markEp1">*</a></label>
                                                </div>
                                                <div class='col-4'>
                                                    <select class="form-select form-select-lg dropbtn margin-bottom1 fff year_startwork1"  id='year_startwork' aria-labelledby="select1"  required>
                                                        <option selected disabled value="">ค.ศ.</option>
                                                    </select>                                                
                                                </div>
                                                <div class='col-2 chidright position-month1'>
                                                    <label class=" form-f-sex">เดือนที่เข้าทำงาน<a class="red_markEp1">*</a></label>
                                                </div>
                                                <div class='col-4'>
                                                    <select class="form-select form-select-lg dropbtn margin-bottom1 fff month_startwork1"  id='month_startwork' aria-labelledby="select1" required>
                                                        <option selected disabled value="">เดือน</option>
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

                                            <div class='row'>
                                                <div class='col-2 chidright'>
                                                    <label class=" form-f-sex">ปีที่ออกจากงาน</label>
                                                </div>
                                                <div class='col-4'>
                                                    <select class="form-select form-select-lg dropbtn margin-bottom1 fff year_startwork1"  id='year_endwork' aria-labelledby="select1"  required>
                                                        <option value='9999'>ค.ศ.</option>
                                                    </select>                                                
                                                </div>
                                                <div class='col-2 chidright position-month1'>
                                                    <label class=" form-f-sex">เดือนที่ออกจากงาน</label>
                                                </div>
                                                <div class='col-4'>
                                                    <select class="form-select form-select-lg dropbtn margin-bottom1 fff salary_work1"  id='month_endwork' aria-labelledby="select1" required>
                                                        <option value="99">เดือน</option>
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
                                                    <h5 id='registab4_textOr' class="modaltextB"> หรือ</h5>
                                                        
                                                    <div class="form-check dropbtn margin-bottom1 fff bg-checkbox-status-job" id='registab4_radiocheck'>
                                                        <input class="form-check-input" type="checkbox" name="flexRadioDefault" id="regist4_cb" for="flexCheckDefault"></input>
                                                        <label class="form-check-label modaltextB" for="registab4_Radios1">ยังอยู่ในงาน</label>
                                                    </div>                                                                      
                                                </div>
                                            </div>
                                                        
                                            <div class="row">
                                                <div class="col">
                                                    <textarea maxlength="280" type="text" rows='5' class="form-control dropbtn margin-bottom1 registab4_textbox" id="inform_work"  placeholder='เพิ่มรายละเอียดเกี่ยวกับตำแหน่งงานที่ทำ'></textarea>
                                                </div>
                                            </div>                                        
                                        </div>
                                    </div>								
                                </div>
                                <div class="centerverify button-add-work1">
                                    <button type="button" class="btn btn-cta-primary-svshort round profile-button grey margin-right-m" id="hide-modal-work">ยกเลิก</button>												
                                    <button type="button" class="btn btn-cta-primary-yellowshort profile-button round" id="submit-work"></button>
                                </div>
                            </div>
                        </div>
                    </div>			                

                    <div class="modal fade" id="Modal_remove_work" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog modal-dialog-centered">
                            <div class="modal-content minisize">
                                <h4 class="del-b">คุณต้องการลบประวัติการทำงานนี้ ?</h4>
                                <div class="centerverify">
                                    <a id="can_del_work" type="button" class="btn btn-cta-primary-svshort round profile-button grey margin-right-m">ยกเลิก</a>
                                    <a id="sub_del_work" type="button" class="btn btn-cta-primary-yellowshort profile-button round" >ลบ</a>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>                                  
            </div>
        );
    } 
}

export default Registab4;