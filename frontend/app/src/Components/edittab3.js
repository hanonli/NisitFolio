import React, { useState } from 'react';
import Registab3_addHigher from './registab3_addHigher';
import Registab3_addSecondary from './registab3_addSecondary';
import cookie from 'react-cookies'
import ApplicationURL from './path';
import './register.css'
import './registab3.css'

class Registab3 extends React.Component {
    constructor(props) {
		super(props);
		this.state = {
          statusUpload3: "",
          imgStatus3: "",
		  statusDelHeader: "Saved",
          imgStatusHeader: "assets/images/outline_cloud_done_black_24dp.png",
		  token: cookie.load('login-token'),
		  render:true,
          status_Eduid_now:""
		};
	  }

    componentDidMount() {
		window.addEventListener('load', this.handleLoad);
		/*const script = document.createElement("script");
		script.src = "assets/js/registab3_script.js";
		document.body.appendChild(script);*/
        var aaa3 = this;
        var list_of_aca,list_of_high;
        var choose_function3 = -1; //default stutus before add(2) or edit(1)
        var for_editaca,for_edithigh;
        var myaca = this.props.myaca_data ? this.props.myaca_data : [];
        list_of_aca = [...myaca];
        var myhigh = this.props.myhigh_data ? this.props.myhigh_data : [];
        list_of_high = [...myhigh];
        console.log(list_of_aca);
        console.log(list_of_high);
	}

	componentWillUnmount() { 
	   window.removeEventListener('load', this.handleLoad)  
	}

	render(){

		return (
			<div className="Registab3">
                <img class="status-img-headerrrr114" src={this.state.imgStatusHeader} onContextMenu={(e) => e.preventDefault()} onDragStart={(e) => e.preventDefault()}></img>
                <h1 class="status-present-headerrr114">{this.state.statusDelHeader}</h1>
				<div class='regis-box-content1 container-fluid'>
					<div class='col-16'>
						<div class='row'>
								<div className='registab3_formbox col-6'>
                                    <div class='row longlang'>
                                        <div class='col-10'>
                                            <h2 class="font-headert3">อุดมศึกษา</h2>
                                        </div>
                                        <div class="col-2 transition-component" id="cross-fadegone">
                                                <img class="registab3_btnplus icon-plus-circleA bottom" type='button' src="assets/images/add_hover.png"></img>
                                                <img class="registab3_btnplus icon-plus-circleA top" type='button' id='add_aca' src="assets/images/add_black.png"></img>
                                        </div>
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
                                                    <img class="status-img-saving-3r3r" src={this.state.imgStatus3} height="36" onContextMenu={(e) => e.preventDefault()} onDragStart={(e) => e.preventDefault()}></img>
                                                    <h5 class="inline status-saving5555" id="for-error-dgd">{this.state.statusUpload3}</h5>
													<div className='addHigher'>
                                                        <div className="Registab3_addHigher ">
                                                            <form  id='HigherForm'>
                                                            <div class='row'>
                                                                <div class="col-md-2 chidright">
										                            <label class="form-f-sex">วุฒิการศึกษา<label class="red_markEp1">*</label></label>
									                            </div>
                                                                <div class='col-3' >
                                                                    <div class="selectDropdown">
                                                                        <select class="form-select form-select-lg dropbtn margin-bottom1 fff" id='aca_degree' aria-labelledby="select1" required>
                                                                            <option selected disabled value=''>เลือกวุฒิการศึกษา</option>
                                                                            <option value='ปริญญาเอก'>ปริญญาเอก</option>    
                                                                            <option value='ปริญญาโท'>ปริญญาโท</option>
                                                                            <option value='ปริญญาตรี'>ปริญญาตรี</option>
                                                                            <option value='ปวส.'>ปวส.</option>
                                                                        </select>
                                                                    </div>
                                                                </div>
                                                                <div class="col-md-3 chidright">
										                            <label class="form-f-sex">ปีที่จบการศึกษา</label>
									                            </div>
                                                                <div class='col-3' >
                                                                    <select class="form-select form-select-lg dropbtn margin-bottom1 fff" id='year_secondary' aria-labelledby="select1" required>
                                                                        <option selected disabled value=''>ค.ศ.</option>
                                                                        <option value='9999'>กำลังศึกษา</option>
                                                                    </select>            
                                                                </div>
                                                            </div>
                                                                <div class='row'>
                                                                    <div class="col-md-2 chidright">
										                                <label class="form-f-sex">สถานศึกษา<label class="red_markEp1">*</label></label>
									                                </div>
                                                                    <div class="col-9 ">
                                                                        <input maxlength="56" type="text" class="form-control dropbtn margin-bottom1 " id="aca_name" required></input>
                                                                    </div>
                                                                </div>
                                                                <div class='row'>
                                                                    <div class="col-md-2 chidright">
										                                <label class="form-f-sex">คณะ<label class="red_markEp1">*</label></label>
									                                </div>
                                                                    <div class="col-9">
                                                                        <input maxlength="56" type="text" class="form-control dropbtn margin-bottom1 " id="aca_faculty" required></input>
                                                                    </div>
                                                                </div>
                                                                <div class='row'>
                                                                    <div class="col-md-2 chidright">
										                                <label class="form-f-sex">สาขาวิชา</label>
									                                </div>
                                                                    <div class="col-4">
                                                                        <input maxlength="36" type="text" class="form-control dropbtn margin-bottom1 fff" id="aca_field" ></input>
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
                                        <div class="col-2 transition-component" id="cross-fadegone">
                                                <img class="registab3_btnplus icon-plus-circleH bottom" type='button' src="assets/images/add_hover.png"></img>
                                                <img class="registab3_btnplus icon-plus-circleH top" type='button' id='add_high' src="assets/images/add_black.png"></img>
                                        </div>
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
											<div class="modal-content modalworkaddH2" >
												<div class='modal-body'>
													<h1 class='modal-title' id='regisModallabel2' >เพิ่มประวัติการศึกษา</h1>
                                                    <img class="status-img-saving-3r3r" src={this.state.imgStatus3} height="36" onContextMenu={(e) => e.preventDefault()} onDragStart={(e) => e.preventDefault()}></img>
                                                    <h5 class="inline status-saving5555" id="for-error-dgd">{this.state.statusUpload3}</h5>
													<div className='addSecondary'>
													<div className="Registab3_addSecondary">
				
                <form  id='SecondaryForm'>
                    <div class='row'>
                        <div class="col-3 chidright">
                            <label class="form-f-sex">วุฒิการศึกษา<label class="red_markEp1">*</label></label>
                        </div>
                        <div class="col-3">
                            <select class="form-select margin-bottom1 fff dropbtn_year" id='high_degree' aria-labelledby="select1" required>
                                <option selected disabled value=''>เลือกวุฒิการศึกษา</option> 
                                <option value='มัธยมศึกษาตอนปลาย' >มัธยมศึกษาตอนปลาย</option>    
                                <option value='ปวช.' >ปวช.</option>
                            </select>
                        </div>
                        <div class="col-3 chidright">
                            <label class="form-f-sex">ปีที่จบการศึกษา<label class="red_markEp1"></label></label>
                        </div>
                        <div class='col-3' >
                            <select class="form-select dropbtn margin-bottom1 fff" id='year_higher' aria-labelledby="select1" required>
                                <option selected disabled value=''>ค.ศ.</option>
                                <option value='9999'>กำลังศึกษา</option>
                            </select>
                        </div>
                    </div>
                    <div class='row'>
                        <div class="col-md-3 chidright">
							<label class="form-f-sex">สถานศึกษา<label class="red_markEp1">*</label></label>
						</div>
                        <div class="col-9 ">
                            <input maxlength="56" type="text" class="form-control dropbtn margin-bottom1 fff" id="high_name" required></input>
                        </div>
                    </div>
                    <div class='row'>
                        <div class="col-md-3 chidright del-padleft">
							<label class="form-f-cfp">หลักสูตร/แผนการเรียน</label>
						</div>
                        <div class="col-4 ">
                            <input maxlength="36" type="text" class="form-control dropbtn margin-bottom1 fff" id="high_field" required></input>
                        </div>
                        <div class="col-md-2 chidright">
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