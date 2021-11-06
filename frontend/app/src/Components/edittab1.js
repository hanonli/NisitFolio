import React from 'react';
import DatePickerBD from './datepickerBD.js';
import $ from 'jquery';
import Cropper from 'react-cropper';
import cookie from 'react-cookies'
import ApplicationURL from './path';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';
import thLocale from 'date-fns/locale/th';
import { uploadFile } from 'react-s3';
import { v4 as uuidv4 } from 'uuid';
import { isValidDate } from './CheckValidDateFormat';

const S3_BUCKET = 'nisitfolio';
const REGION = 'ap-southeast-1';
const ACCESS_KEY = 'AKIAWGHRNY32XLWEVA62';
const SECRET_ACCESS_KEY = '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';
const DIR_NAME = 'images';

const config = {
	bucketName: S3_BUCKET,
	region: REGION,
	accessKeyId: ACCESS_KEY,
	secretAccessKey: SECRET_ACCESS_KEY,
	dirName: DIR_NAME,
}

class Edittab1 extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
		  statusDelHeader: "Saved",
          imgStatusHeader: "assets/images/outline_cloud_done_black_24dp.png",
		  token: cookie.load('login-token'),
		  render:true,
		  status_changepass : false,
		  currentDate: ""
		};
	  }
	  componentDidMount(){
		var aaa1 = this;
		var myprivate = this.props.myprivate_data ? this.props.myprivate_data : [];
        var list_tab1 = [...myprivate];
		//console.log(myprivate);
		//console.log(list_tab1);
		$('#re01').val(list_tab1[0].Firstname);
		$('#re02').val(list_tab1[0].Lastname);
		$('#re03').text(list_tab1[0].Email);
		$('#avatar11').attr('src', list_tab1[0].ProfilePic);
		//$('#basic-date-picker1').attr('val', list_tab1[0].Birthday);
		var list_gender = ["ชาย","หญิง","ไม่ระบุ"];
		list_gender.forEach(element => {
			if(list_tab1[0].Gender==element){
				$('#sexgen').append($('<option />').val(element).html(element).attr('selected',true));
			}
			else{
				$('#sexgen').append($('<option />').val(element).html(element));
			}
		});
		if(list_tab1[0].Birthday != null){
			//alert(777);
			//setInterval(function() { console.log(aaa1.state.currentDate); }, 1000);
			var tpp = list_tab1[0].Birthday.split('/');
			var date = tpp[0]; var month = tpp[1]; var year = tpp[2];
			if(month == '01') month = 'Jan';
			else if(month == '02') month = 'Feb';
			else if(month == '03') month = 'Mar';
			else if(month == '04') month = 'Apr';
			else if(month == '05') month = 'May';
			else if(month == '06') month = 'Jun';
			else if(month == '07') month = 'Jul';
			else if(month == '08') month = 'Aug';
			else if(month == '09') month = 'Sep';
			else if(month == '10') month = 'Oct';
			else if(month == '11') month = 'Sep';
			else if(month == '12') month = 'Dec';
			var day = 'NON'; // Mon, Tue, Wed, ...
			aaa1.setState({ currentDate: day+' '+month+' '+date+' '+year+' 01:24:50 GMT+0700 (Indochina Time)' });
		}

		$('#change-pass').on('click', function () {
			if(aaa1.state.status_changepass){
				$('.edit-pass-now').hide();
				$('#change-pass').text('แก้ไข');
				aaa1.setState({status_changepass:false});
			}
			else{
				$('.edit-pass-now').show();
				$('#change-pass').text('ปิด');
				aaa1.setState({status_changepass:true});
			}
		})
		$('#forget-pass-editprofile').on('click', function () {
			window.location.pathname = '/forgotpassword'
		})
	  }
	render (){
		return (
			<div className="Registab1">
				<img class="status-img-headerrrr114" src={this.state.imgStatusHeader} onContextMenu={(e) => e.preventDefault()} onDragStart={(e) => e.preventDefault()}></img>
                <h1 class="status-present-headerrr114">{this.state.statusDelHeader}</h1>
				<div class="regis-box-content1 container-fluid">
					<div class="row">
						<div class="col-9 container-fluid">
								<div class="row">
									<div class="col-2 chidright del-padrightbit">
										<label class=" form-f-sex">ชื่อภาษาไทย<label class="red_markEp1">*</label></label>
									</div>
									<div class="col-4 ">
										<input maxlength="100" type="text" class="form-control dropbtn margin-bottom1 " id="re01" required></input>
									</div>
									<div class="col-2 chidright del-padleft del-padrightbit">
										<label class=" form-f-sex">นามสกุลภาษาไทย<label class="red_markEp1">*</label></label>
									</div>
									<div class="col-4">
										<input maxlength="100" type="text" class="form-control dropbtn margin-bottom1 " id="re02" required></input>
									</div>
								</div>
								<div class="row">
									<div class="col-md-2 chidright del-padrightbit">
										<label class="form-f-sex">อีเมล<label class="red_markEp1">*</label></label>
									</div>
									<div class="col-10">
									  <h4 type="text" class="form-control margin-bottom1 dis_input2" id="re03">อีเมล</h4>
								</div>
								</div>
								<div class="row">
									<div class="col-md-2 chidright del-padrightbit">
										<label class="form-f-cfp">เพศ<label class="red_markEp1">*</label></label>
									</div>
									<div class="col-4">
										<select class="form-select dropbtn margin-bottom1 fff" id ="sexgen" required>
											<option selected disabled value="">เลือกเพศ</option>
										</select>
									</div>
									<div class="col-md-2 chidright del-padrightbit">
										<label class=" form-f-sex ">วันเกิด<label class="red_markEp1">*</label></label>
									</div>
									<div class="col-4 ">
									<LocalizationProvider dateAdapter={AdapterDateFns} locale={thLocale}>
									<DatePicker
										value={this.state.currentDate}
										onChange={currentDate => this.setState({ currentDate })}
										maxDate={new Date()}
										renderInput={(params) => <TextField variant="filled" id="basic-date-picker" {...params} />}
									/>
									</LocalizationProvider>
									</div>
                				</div>
								<div class='reset-pass'>
									<div class="row">
                                        <div class="col-md-8">
                                            <label class="disablecopypaste" id="header-reset-pass-font">เปลี่ยนรหัสผ่าน</label>
                                        </div>
										<div class="col-md-4 chidright">
											<button class="btn btn-cta-primary-yellowwide round profile-button" href="#" target="_blank" type="submit" id="change-pass">แก้ไข</button>
										</div>
									</div>
									<div class="edit-pass-now">
										<div class="row margin-top2">
											<div class="col-md-3 chidright del-padrightbit">
												<label class="form-f-sex disablecopypaste">รหัสผ่านปัจจุบัน<label class="red_markEp1">*</label></label>
											</div>
											<div class="col-9">
												<input maxlength="100" type="password" class="form-control dropbtn margin-bottom1 " id="passOld" aria-describedby="passwordHelpInline" required></input>
											</div>
										</div>
										<div class="row triggerRed1 chidright">
											<div class="col-md-3 del-padleft del-padrightbit">
												<label class="form-f-cfp disablecopypaste">รหัสผ่านใหม่<label class="red_markEp1">*</label></label>
											</div>
											<div class="col-9">
												<input maxlength="100" type="password" class="form-control dropbtn margin-bottom1 " id="pass05" placeholder="ความยาวอย่างน้อย 8 อักขระ" required></input>
											</div>
										</div>
										<div class="row triggerRed1 chidright">
											<div class="col-md-3 del-padleft del-padrightbit">
												<label class="form-f-cfp disablecopypaste">ยืนยันรหัสผ่าน<label class="red_markEp1">*</label></label>
											</div>
											<div class="col-9">
												<input maxlength="100" type="password" class="form-control dropbtn" id="pass06" placeholder="พิมพ์รหัสผ่านใหม่อีกครั้ง" required></input>
											</div>
										</div>
										<div class="row">
											<div class="col-md-3"></div>
											<div class="col-md-3">
												<a class="disablecopypaste" id="forget-pass-editprofile" type="button">ลืมรหัสผ่าน?</a>
											</div>
										</div>
									</div>
                                </div>
					</div>
						<div class="col-3">
							<div class="container-fluid">
								<img class="profile-image img-fluid rounded-circle" data-bs-toggle="tooltip" data-bs-placement="top" title="อัพโหลดรูปโปรไฟล์" type='button' id="avatar11" src="assets/images/profile_uk.png" width="250" height="250"/>
								<input type="file" class="sr-only" id="input" accept="image/*" name="image" hidden />
							</div>
						</div>
					</div>	
				</div>
				<div class="container">
						<div class="alert" role="alert"></div>
						<div class="modal fade" data-bs-backdrop="static" id="modal" tabindex="-1" role="dialog" aria-labelledby="modalLabel" aria-hidden="true">
						  <div class="modal-dialog" role="document">
							<div class="modal-content">
							  <div class="modal-header">
								<h5 class="modal-title" id="modalLabel">ปรับแต่งรูปโปรไฟล์</h5>
							  </div>
							  <div class="modal-body">
								<div class="img-container">
								  <img id="image" src="https://avatars0.githubusercontent.com/u/3456749" />
								</div>
							  </div>
							  <div class="modal-footer">
								<a class="btn btn-cta-primary-svshort round profile-button grey margin-right-m" data-bs-dismiss="modal">ยกเลิก</a>
								<a class="btn btn-cta-primary-yellowwide round profile-button" id="crop">ใช้งานรูปภาพ</a>
							  </div>
							</div>
						  </div>
						</div>
				  </div>
			</div>
		);
	}
}

export default Edittab1;
