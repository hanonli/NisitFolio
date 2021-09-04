import React from 'react';
import Registab3_addHigher from './registab3_addHigher';
import Registab3_addSecondary from './registab3_addSecondary';
import './register.css'
import './registab3.css'
import './registab3_script'


const Registab3 = () => {
		{/* Higher Function */}
		const Regis3_form = {
			Degree : '',
			Academy : '',
			Faculty : '',
			Field_of_study : '',
			Grade : 0,
			Education_End_Year: 0,
		}
		const newRegis3HigherDegree = (e) =>{
            Regis3_form.Degree = e.target.value
            console.log(Regis3_form)
        }
		const newRegis3HigherAcademy = (e) =>{
            Regis3_form.Academy = e.target.value
            console.log(Regis3_form)
        }
		const newRegis3HigherFaculty = (e) =>{
            Regis3_form.Faculty = e.target.value
            console.log(Regis3_form)
        }
		const newRegis3HigherFieldofStudy = (e) =>{
            Regis3_form.Field_of_study = e.target.value
            console.log(Regis3_form)
        }
		const newRegis3HigherGrade = (e) =>{
            Regis3_form.Grade = e.target.value
            console.log(Regis3_form)
        }
		const newRegis3HigherEndYear = (e) =>{
            Regis3_form.Education_End_Year = e.target.value
            console.log(Regis3_form)
        }
		const handleSubmitHigher = (e) => {
			e.preventdefault();
			
			fetch('http://localhost:2000/saveeducationhistory',{
				method: 'Post',
				headers: {"Content-Type" : "application/json"},
				body: JSON.stringify(Regis3_form)
			}).then(() => {
				console.log('Regis3_form added')
			})

		}
		{/* Secondary Function */}
		const Regis3_form2 = {
			Degree : '',
			Academy : '',
			Faculty : 'None',
			Field_of_study : '',
			Grade : 0,
			Education_End_Year: 0,
		}
		const newRegis3HigherDegree2 = (e) =>{
            Regis3_form2.Degree = e.target.value
            console.log(Regis3_form2)
        }
		const newRegis3HigherAcademy2 = (e) =>{
            Regis3_form2.Academy = e.target.value
            console.log(Regis3_form2)
        }
		const newRegis3HigherFaculty2 = (e) =>{
            Regis3_form2.Faculty = e.target.value
            console.log(Regis3_form2)
        }
		const newRegis3HigherFieldofStudy2 = (e) =>{
            Regis3_form2.Field_of_study = 'หลักสูตร' + e.target.value
            console.log(Regis3_form2)
        }
		const newRegis3HigherGrade2 = (e) =>{
            Regis3_form2.Grade = e.target.value
            console.log(Regis3_form2)
        }
		const newRegis3HigherEndYear2 = (e) =>{
            Regis3_form2.Education_End_Year = e.target.value
            console.log(Regis3_form2)
        }
		const handleSubmitSecondary = (e) => {
			e.preventdefault();
			
			fetch('http://localhost:2000/saveeducationhistory',{
				method: 'Post',
				headers: {"Content-Type" : "application/json"},
				body: JSON.stringify(Regis3_form2)
			}).then(() => {
				console.log('Regis3_form2 added')
			})

		}


		return (
			<div className="Registab3 regis-box-content">
				<div class='container-fluid'>
					<div class='col-16'>
						<div class='row justify-content-center'>
								<div className='registab3_formbox col-5'>
									<h1>อุดมศึกษา</h1>
									<div className='registab3_btnplus'>
										<button type="button" class="btn " data-bs-toggle="modal" data-bs-target="#registab3Modal1">
											<img id='icon-plus-circle'  src="assets/images/+.png"></img>
										</button>
									</div>

									<div class="modal fade" id="registab3Modal1" tabindex="-1" aria-labelledby="exampleModalLabel1" aria-hidden="true">
										<div class="modal-dialog modal-dialog-centered modal-xl">
											<div class="modal-content " >
												<div class='modal-body'>
													<button type="button" class="btn-close" id='registab3_btnclose' aria-label="Close" data-bs-dismiss="modal"></button>
													<h1 class='modal-title' id='regisModallabel1' >เพิ่มประวัติการศึกษา</h1>
													<div className='addHigher'>
			<div className="Registab3_addHigher ">
                <form  id='HigherForm'>
                    <div class='col-3' >
                        <div class="selectDropdown">
                            <select class="form-select form-select-lg dropbtn margin-bottom1 fff" id='regis3_selectdropdown1' aria-labelledby="select1" onChange={newRegis3HigherDegree} required>
                                <option selected disabled value='None'>เลือกวุฒิการศึกษา*</option>
                                <option value='ปริญญาเอก'>ปริญญาเอก</option>    
                                <option value='ปริญญาโท'>ปริญญาโท</option>
                                <option value='ปริญญาตรี'>ปริญญาตรี</option>
                                <option value='ปริญญาจัตวา'>ปริญญาจัตวา</option>
                                <option value='ปริญญาใจ'>ปริญญาใจ</option>
                            </select>

                        </div>
                    </div>
                    <div class='row'>
                        <div class="col-6 ">
                            <input type="text" class="form-control dropbtn margin-bottom1 " id="ValidationUniversityFeedback" placeholder="สถานศึกษา*" onBlur={newRegis3HigherAcademy} required></input>
                        </div>
                        <div class="col-6">
                            <input type="text" class="form-control dropbtn margin-bottom1 " id="ValidationFacultyFeedback" placeholder="คณะ*" onBlur={newRegis3HigherFaculty}required></input>
                        </div>
                    </div>
                    <div class='row'>
                        <div class="col-6   ">
                            <input type="text" class="form-control dropbtn margin-bottom1 " id="ValidationAreaFeedback"  placeholder='สาขาวิชา' onBlur={newRegis3HigherFieldofStudy} required></input>
                        </div>
                        <div class="col-6">
                            <div class='row'>
                                <div class='col'> 
                                    <h5 id='registab4_textGrade' type='number' >เกรดเฉลี่ยรวม*</h5>
                                </div>
                                <div class='col-4 ms-auto'> 
                                    <input type="text" class="form-control dropbtn margin-bottom1 " id="ValidationGradeFeedback" placeholder="XX.X" onBlur={newRegis3HigherGrade} required></input>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div class='col-3' >
                        <div class="selectDropdown">
                            <select class="form-select form-select-lg dropbtn_year margin-bottom1 fff" id='year_higher' aria-labelledby="select1" onChange={newRegis3HigherEndYear} required>
                                <option selected disabled value=''>ปีที่จบการศึกษา</option>
                                <option>กำลังศึกษา</option>
                            </select>
                            <br/>
                        </div>               
                    </div>
                </form>
			</div>
													</div>													
												</div>
												<div class='modal-footer'>
													<div class="centerverify">
														<button type="button" class="btn btn-cta-primary-svshort round profile-button grey margin-right-m" data-bs-dismiss="modal">ยกเลิก</button>
														<button type="button" class="btn btn-cta-primary-yellowshort profile-button round" data-bs-dismiss='modal' id='regis3_HigherConfirm' onSubmit={handleSubmitHigher}>ตกลง</button>
													</div>
												</div>

											</div>
										</div>
									</div>
								</div>

								<div className='registab3_formbox col-5'>
									<h1>มัธยมศึกษา</h1>
									<div className='registab3_btnplus'>						
										<button type="button" class="btn" data-bs-toggle="modal" data-bs-target="#registab3Modal2">
											<img id='icon-plus-circle'  src="assets/images/+.png"></img>
										</button>
									</div>
									<div class="modal fade" id="registab3Modal2" tabindex="-1" aria-labelledby="exampleModalLabel1" aria-hidden="true">
										<div class="modal-dialog modal-dialog-centered modal-xl">
											<div class="modal-content " >
												<div class='modal-body'>
													<button type="button" class="btn-close" id='registab3_btnclose' aria-label="Close" data-bs-dismiss="modal"></button>
													<h1 class='modal-title' id='regisModallabel2' >เพิ่มประวัติการศึกษา</h1>
													<div className='addSecondary'>
													<div className="Registab3_addSecondary">
				
                <form  id='SecondaryForm'>
                    <div class='col-5' >
                        <div class="selectDropdown">
                            <select class="form-select form-select-lg dropbtn margin-bottom1 fff" id='regis3_selectdropdown2' aria-labelledby="select1"  onChange={newRegis3HigherDegree2} required>
                                <option selected disabled value='เลือกวุฒิการศึกษา<'>เลือกวุฒิการศึกษา</option>
                                <option value='มัธยมศึกษาปีที่ 1' >มัธยมศึกษาปีที่ 1</option>    
                                <option value='มัธยมศึกษาปีที่ 2' >มัธยมศึกษาปีที่ 2</option>
                                <option value='มัธยมศึกษาปีที่ 3' >มัธยมศึกษาปีที่ 3</option>
                                <option value='มัธยมศึกษาปีที่ 4' >มัธยมศึกษาปีที่ 4</option>
                                <option value='มัธยมศึกษาปีที่ 5' >มัธยมศึกษาปีที่ 5</option>
                                <option value='มัธยมศึกษาปีที่ 6' >มัธยมศึกษาปีที่ 6</option>
                            </select>
                        </div>
                    </div>
                    <div class='row'>
                        <div class="col-12 ">
                            <input type="text" class="form-control dropbtn margin-bottom1 " id="ValidationSchoolFeedback" placeholder="สถานศึกษา*" onBlur={newRegis3HigherAcademy2} required></input>
                        </div>
                    </div>
                    <div class='row'>
                        <div class="col-8 ">
                            <input type="text" class="form-control dropbtn margin-bottom1 " id="ValidationCourseFeedback"  placeholder='หลักสูตร/แผนการเรียน' onBlur={newRegis3HigherFieldofStudy2} required></input>
                        </div>
                        <div class="col-4">
                            <div class='row'>
                                <div class='col'> 
                                    <h5 id='registab4_textGrade'>เกรดเฉลี่ยรวม</h5>
                                </div>
                                <div class='col-7 ms-auto'> 
                                    <input type="text" class="form-control dropbtn margin-bottom1 " id="ValidationGradeFeedback" placeholder="XX.X" onBlur={newRegis3HigherGrade2} required></input>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class='col-3' >
                        <div class="selectDropdown">
                            <select class="form-select form-select-lg dropbtn_year margin-bottom1 fff" id='year_secondary' aria-labelledby="select1" onChange={newRegis3HigherEndYear2} required>
                                <option selected disabled value=''>ปีที่จบการศึกษา</option>
                                <option>กำลังศึกษา</option>
                            </select>
                            <br/>
                        </div>               
                    </div>
                </form>
			</div>
													</div>													
												</div>
												<div class='modal-footer'>
													<div class="centerverify">
														<button type="button" class="btn btn-cta-primary-svshort round profile-button grey margin-right-m" data-bs-dismiss="modal">ยกเลิก</button>
														<button type="button" class="btn btn-cta-primary-yellowshort profile-button round" data-bs-dismiss='modal'>ตกลง</button>
													</div>
												</div>

											</div>
										</div>
									</div>
								</div>
						</div>
					</div>
					

				</div>

                    
			
			</div>
			
		);
	}


export default Registab3;