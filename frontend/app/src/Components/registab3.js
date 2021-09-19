import React, { useState } from 'react';
import Registab3_addHigher from './registab3_addHigher';
import Registab3_addSecondary from './registab3_addSecondary';
import './register.css'
import './registab3.css'

const initialstate = {
    HigherAcademy: '',
    HigherDegree: '',
    HigherEndYear: '',
    HigherFaculty: '',
    HigherFieldofStudy: '',
    HigherGrade: '',
    SecondaryAcademy: '',
    SecondaryDegree: '',
    SecondaryEndYear: '',
    SecondaryFaculty: '-',
    SecondaryFieldofStudy: '',
    SecondaryGrade: '',
}

class Registab3 extends React.Component {
    constructor(props) {
		super(props);
        this.state = initialstate;
      
        this.setHigherAcademy = this.setHigherAcademy.bind(this);
        this.setHigherDegree = this.setHigherDegree.bind(this);
        this.setHigherEndYear = this.setHigherEndYear.bind(this);
        this.setHigherFaculty = this.setHigherFaculty.bind(this);
        this.setHigherFieldofStudy = this.setHigherFieldofStudy.bind(this);
        this.setHigherGrade = this.setHigherGrade.bind(this);
        this.handleHigherSubmit = this.handleHigherSubmit.bind(this);
        this.setSecondaryAcademy = this.setSecondaryAcademy.bind(this);
        this.setSecondaryDegree = this.setSecondaryDegree.bind(this);
        this.setSecondaryEndYear = this.setSecondaryEndYear.bind(this);
        this.setSecondaryFaculty = this.setSecondaryFaculty.bind(this);
        this.setSecondaryFieldofStudy = this.setSecondaryFieldofStudy.bind(this);
        this.setSecondaryGrade = this.setSecondaryGrade.bind(this);
        this.handleSecondarySubmit = this.handleSecondarySubmit.bind(this);
	 }
	 
    setHigherAcademy = (e) => {
        this.setState({HigherAcademy : e.target.value});
    }
    setHigherDegree = (e) =>{
        this.setState({HigherDegree : e.target.value});
    }
    setHigherEndYear= (e) =>{
        this.setState({HigherEndYear: e.target.value});
    }
    setHigherFaculty = (e) =>{
        this.setState({HigherFaculty: e.target.value});
    }
    setHigherFieldofStudy = (e) =>{
        this.setState({ HigherFieldofStudy : e.target.value});
    }
    setHigherGrade = (e) =>{
        this.setState({HigherGrade : e.target.value});
    }

    setSecondaryAcademy = (e) => {
        this.setState({SecondaryAcademy : e.target.value});
    }
    setSecondaryDegree = (e) =>{
        this.setState({SecondaryDegree : e.target.value});
    }
    setSecondaryEndYear= (e) =>{
        this.setState({SecondaryEndYear: e.target.value});
    }
    setSecondaryFaculty = (e) =>{
        this.setState({SecondaryFaculty: e.target.value});
    }
    setSecondaryFieldofStudy = (e) =>{
        this.setState({ SecondaryFieldofStudy : e.target.value});
    }
    setSecondaryGrade = (e) =>{
        this.setState({SecondaryGrade : e.target.value});
    }
    handleHigherSubmit(){
        console.log(this.state)
        // //Clearing data
        this.state = initialstate;
        // document.getElementById("HigherForm").reset();
        // console.log(this.state)
    }   
    handleSecondarySubmit(){
        console.log(this.state)
        // //Clearing data
        this.state = initialstate;
        // document.getElementById("SecondaryForm").reset();
    }

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
			<div className="Registab3 regis-box-content">
				<div class='container-fluid'>
					<div class='col-16'>
						<div class='row justify-content-center'>
								<div className='registab3_formbox col-6'>
									<h1 class="font-headert3">อุดมศึกษา</h1>
									<div className=''>
                                        <div class="list-of-aca" id="in-list-of-aca"></div>
                                        <div class="t3-content1">
                                            <div class="row">
                                                <div class="col-3 font-titlet3">ปริญญาโท</div>
                                                <div class="col-4 font-titlet3">บริหารบุคคล</div>
                                                <div class="col-5 font-titlet3">คณะบริหารธุรกิจ</div>
                                            </div>
                                            <div class="row">
                                                <div class="col-3 font-titlet3">2560</div>
                                                <div class="col-4 font-titlet3">เกรด 4.00</div>
                                                <div class="col-5 font-titlet3">มหาวิทยาลัยเกษตรศาสตร์</div>
                                            </div>
                                        </div>
										<button type="button" class="btn registab3_btnplus" data-bs-toggle="modal" data-bs-target="#registab3Modal1" >
											<img id='icon-plus-circle'  src="assets/images/+.png"></img>
										</button>
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
                                                                        <select class="form-select form-select-lg dropbtn margin-bottom1 fff" id='aca_degreedd' aria-labelledby="select1"  onChange={this.setHigherDegree} required>
                                                                            <option selected disabled value='None'>เลือกวุฒิการศึกษา*</option>
                                                                            <option value='ปริญญาเอก'>ปริญญาเอก</option>    
                                                                            <option value='ปริญญาโท'>ปริญญาโท</option>
                                                                            <option value='ปริญญาตรี'>ปริญญาตรี</option>
                                                                        </select>

                                                                    </div>
                                                                </div>
                                                                <div class='row'>
                                                                    <div class="col-6 ">
                                                                        <input type="text" class="form-control dropbtn margin-bottom1 " id="aca_name" placeholder="สถานศึกษา*" defaultValue={this.state.HigherAcademy} onBlur={this.setHigherAcademy} required></input>
                                                                    </div>
                                                                    <div class="col-6">
                                                                        <input type="text" class="form-control dropbtn margin-bottom1 " id="aca_faculty" placeholder="คณะ*" defaultValue={this.state.HigherFaculty} onBlur={this.setHigherFaculty} required></input>
                                                                    </div>
                                                                </div>
                                                                <div class='row'>
                                                                    <div class="col-6   ">
                                                                        <input type="text" class="form-control dropbtn margin-bottom1 " id="aca_field"  placeholder='สาขาวิชา' defaultValue={this.state.HigherFieldofStudy} onBlur={this.setHigherFieldofStudy} required></input>
                                                                    </div>
                                                                    <div class="col-6">
                                                                        <div class='row'>
                                                                            <div class='col'> 
                                                                                <h5 id='registab4_textGrade' type='number' >เกรดเฉลี่ยสะสม</h5>
                                                                            </div>
                                                                            <div class='col-4 ms-auto'> 
                                                                                <input type="number" class="form-control dropbtn margin-bottom1 " id="aca_grade" placeholder="X.XX" defaultValue={this.state.HigherGrade} onBlur={this.setHigherGrade} required></input>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                
                                                                <div class='col-3' >
                                                                    <div class="selectDropdown">
                                                                        <select class="form-select form-select-lg dropbtn_year margin-bottom1 fff" id='year_higher' aria-labelledby="select1" defaultValue={this.state.HigherEndYear} onChange={this.setHigherEndYear} required>
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
                                                                                                    <button type="button" class="btn btn-cta-primary-svshort round profile-button grey margin-right-m" data-bs-dismiss="modal"  id='registab3_btnclose'>ยกเลิก</button>
                                                                                                    <button type="button" class="btn btn-cta-primary-yellowshort profile-button round" onClick={this.handleHigherSubmit}  id='regis3_AcaConfirm' >เพิ่ม</button>
                                                                                                </div>

                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>

								<div className='registab3_formbox col-6'>
									<h1 class="font-headert3">มัธยมศึกษา</h1>
									<div className=''>		
                                        <div class="list-of-high" id="in-list-of-high"></div>
                                            <div class="t3-content1">
                                                <div class="row">
                                                    <div class="col-3 font-titlet3">ปริญญาโท</div>
                                                    <div class="col-4 font-titlet3">บริหารบุคคล</div>
                                                    <div class="col-5 font-titlet3">คณะบริหารธุรกิจ</div>
                                                </div>
                                                <div class="row">
                                                    <div class="col-3 font-titlet3">2560</div>
                                                    <div class="col-4 font-titlet3">เกรด 4.00</div>
                                                    <div class="col-5 font-titlet3">มหาวิทยาลัยเกษตรศาสตร์</div>
                                                </div>
                                                <div class="layer_icon1">
								                    <button type="button" class="btn" id="edit-t31"><img src="assets/images/blackedit.png" width="30" height="30" data-bs-toggle="modal" data-bs-target="#registab3Modal2"></img></button>
								                    <button type="button" class="btn" id="del-t31"><img src="assets/images/bin.png" width="30" height="30" data-bs-toggle="modal" data-bs-target="#Modal_remove_high"></img></button>
                                                </div>
                                            </div>
										<button type="button" class="btn registab3_btnplus" data-bs-toggle="modal" data-bs-target="#registab3Modal2">
											<img id='icon-plus-circle'  src="assets/images/+.png"></img>
										</button>
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
                            <select class="form-select form-select-lg dropbtn margin-bottom1 fff" id='high_degree' aria-labelledby="select1"   onChange={this.setSecondaryDegree} required>
                                <option selected disabled value=''>เลือกวุฒิการศึกษา</option>
                                <option value='ประถมศึกษา' >ประถมศึกษา</option>    
                                <option value='มัธยมศึกษาตอนต้น' >มัธยมศึกษาตอนต้น</option>    
                                <option value='มัธยมศึกษาตอนปลาย' >มัธยมศึกษาตอนปลาย</option>
                            </select>
                        </div>
                    </div>
                    <div class='row'>
                        <div class="col-12 ">
                            <input type="text" class="form-control dropbtn margin-bottom1 " id="high_name" placeholder="สถานศึกษา*" value={this.state.SecondaryAcademy} onChange={this.setSecondaryAcademy} required></input>
                        </div>
                    </div>
                    <div class='row'>
                        <div class="col-7 ">
                            <input type="text" class="form-control dropbtn margin-bottom1 " id="high_field"  placeholder='หลักสูตร/แผนการเรียน' value={this.state.SecondaryFieldofStudy} onChange={this.setSecondaryFieldofStudy}required></input>
                        </div>
                        <div class="col-5">
                            <div class='row'>
                                <div class='col'> 
                                    <h5 id='registab4_textGrade'>เกรดเฉลี่ยสะสม</h5>
                                </div>
                                <div class='col-7 ms-auto'> 
                                    <input type="text" class="form-control dropbtn margin-bottom1 " id="high_grade" placeholder="X.XX" value={this.state.SecondaryGrade} onChange={this.setSecondaryGrade} required></input>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class='col-3' >
                        <div class="selectDropdown">
                            <select class="form-select form-select-lg dropbtn_year margin-bottom1 fff" id='year_secondary' aria-labelledby="select1" value={this.state.SecondaryEndYear} onChange={this.setSecondaryEndYear} required>
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
														<button type="button" class="btn btn-cta-primary-yellowshort profile-button round"  onClick={this.handleSecondarySubmit}>เพิ่ม</button>
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