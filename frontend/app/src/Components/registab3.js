import React, { useState } from 'react';
import Registab3_addHigher from './registab3_addHigher';
import Registab3_addSecondary from './registab3_addSecondary';
import './register.css'
import './registab3.css'
import './registab3_script'


const Registab3 = () => {

        const handleSubmitHigher = (e) => {
            e.preventDefault();
			const FormHigher = {HigherAcademy , HigherDegree , HigherEndYear , HigherFaculty ,HigherFieldofStudy ,HigherGrade};

			fetch('http://localhost:2000/educationhistory',{
				method: 'Post',
				headers: {"Content-Type" : "application/json"},
				body: JSON.stringify(FormHigher)
			}).then(() => {
				console.log('FormHigher added')
			})
            alert('FormHigher added')
            alert(`You just submit a Form \n data = ${JSON.stringify(FormHigher)}`)

		}

        const [HigherDegree , setHigherDegree] = useState();
        const [HigherAcademy, setHigherAcademy] = useState('');
        const [HigherFaculty , setHigherFaculty] = useState('');
        const [HigherFieldofStudy , setHigherFieldofStudy] = useState('');
        const [HigherGrade , setHigherGrade] = useState('');
        const [HigherEndYear , setHigherEndYear] = useState('');
		
		
        const handleSubmitSecondary = (e) => {
            e.preventDefault();
			const FormSecondary = {SecondaryAcademy , SecondaryDegree , SecondaryEndYear , SecondaryFaculty , SecondaryFieldofStudy , SecondaryGrade}

			fetch('http://localhost:2000/educationhistory',{
				method: 'Post',
				headers: {"Content-Type" : "application/json"},
				body: JSON.stringify(FormSecondary)
			}).then(() => {
				console.log('FormSecondary added')
                
			})
            alert(`You just submit a Form \n data = ${JSON.stringify(FormSecondary)}`)
            
		}

        const [SecondaryDegree , setSecondaryDegree] = useState('');
        const [SecondaryAcademy, setSecondaryAcademy] = useState('');
        const [SecondaryFaculty , setSecondaryFaculty] = useState('-');
        const [SecondaryFieldofStudy , setSecondaryFieldofStudy] = useState('');
        const [SecondaryGrade , setSecondaryGrade] = useState('');
        const [SecondaryEndYear , setSecondaryEndYear] = useState('');
        
		


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
                            <select class="form-select form-select-lg dropbtn margin-bottom1 fff" id='regis3_selectdropdown1' aria-labelledby="select1" value={HigherDegree} onChange={ (e) => setHigherDegree(e.target.value)} required>
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
                            <input type="text" class="form-control dropbtn margin-bottom1 " id="ValidationUniversityFeedback" placeholder="สถานศึกษา*" value={HigherAcademy} onChange={ (e) => setHigherAcademy(e.target.value)} required></input>
                        </div>
                        <div class="col-6">
                            <input type="text" class="form-control dropbtn margin-bottom1 " id="ValidationFacultyFeedback" placeholder="คณะ*" value={HigherFaculty} onChange={ (e) => setHigherFaculty(e.target.value)} required></input>
                        </div>
                    </div>
                    <div class='row'>
                        <div class="col-6   ">
                            <input type="text" class="form-control dropbtn margin-bottom1 " id="ValidationAreaFeedback"  placeholder='สาขาวิชา' value={HigherFieldofStudy} onChange={ (e) => setHigherFieldofStudy(e.target.value)} required></input>
                        </div>
                        <div class="col-6">
                            <div class='row'>
                                <div class='col'> 
                                    <h5 id='registab4_textGrade' type='number' >เกรดเฉลี่ยรวม*</h5>
                                </div>
                                <div class='col-4 ms-auto'> 
                                    <input type="text" class="form-control dropbtn margin-bottom1 " id="ValidationGradeFeedback" placeholder="XX.X" value={HigherGrade} onChange={ (e) => setHigherGrade(e.target.value)} required></input>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div class='col-3' >
                        <div class="selectDropdown">
                            <select class="form-select form-select-lg dropbtn_year margin-bottom1 fff" id='year_higher' aria-labelledby="select1" value={HigherEndYear} onChange={ (e) => setHigherEndYear(e.target.value)} required>
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
														<button type="button" class="btn btn-cta-primary-yellowshort profile-button round" onClick={handleSubmitHigher} data-bs-dismiss='modal' id='regis3_HigherConfirm' >ตกลง</button>
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
                            <select class="form-select form-select-lg dropbtn margin-bottom1 fff" id='regis3_selectdropdown2' aria-labelledby="select1"  value={SecondaryDegree} onChange={ (e) => setSecondaryDegree(e.target.value)} required>
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
                            <input type="text" class="form-control dropbtn margin-bottom1 " id="ValidationSchoolFeedback" placeholder="สถานศึกษา*" value={SecondaryAcademy} onChange={ (e) => setSecondaryAcademy(e.target.value)} required></input>
                        </div>
                    </div>
                    <div class='row'>
                        <div class="col-8 ">
                            <input type="text" class="form-control dropbtn margin-bottom1 " id="ValidationCourseFeedback"  placeholder='หลักสูตร/แผนการเรียน' value={SecondaryFieldofStudy} onChange={ (e) => setSecondaryFieldofStudy(e.target.value)}required></input>
                        </div>
                        <div class="col-4">
                            <div class='row'>
                                <div class='col'> 
                                    <h5 id='registab4_textGrade'>เกรดเฉลี่ยรวม</h5>
                                </div>
                                <div class='col-7 ms-auto'> 
                                    <input type="text" class="form-control dropbtn margin-bottom1 " id="ValidationGradeFeedback" placeholder="XX.X" value={SecondaryGrade} onChange={ (e) => setSecondaryGrade(e.target.value)} required></input>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class='col-3' >
                        <div class="selectDropdown">
                            <select class="form-select form-select-lg dropbtn_year margin-bottom1 fff" id='year_secondary' aria-labelledby="select1" value={SecondaryEndYear} onChange={ (e) => setSecondaryEndYear(e.target.value)} required>
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
														<button type="button" class="btn btn-cta-primary-yellowshort profile-button round" onClick={handleSubmitSecondary} data-bs-dismiss='modal'>ตกลง</button>
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