import React, { useState } from 'react';
import cookie from 'react-cookies'
import { OverlayTrigger, Overlay, Tooltip, Button } from 'react-bootstrap';
import $ from 'jquery';

var myTemplate = {
    "red": "assets/images/pdfR.png",
    "orange": "assets/images/pdfO.png",
    "yellow": "assets/images/pdfY.png",
    "navy": "assets/images/pdfN.png",
    "blue": "assets/images/pdfB.png",
}

var select_color_template = "yellow";

class SharingPopup extends React.Component {  
    constructor(props) {
        super(props);
		this.handleLoad = this.handleLoad.bind(this);
        this.state = {
            //value_color: this.props.firstchoosecolor ? "#FFCE55" : this.props.Color_Resume,
            selectedOption: "yellow",
            sample_template: "assets/images/pdfY.png",
        };
        select_color_template = "yellow";
      }
    
      handleChange = e => {
        this.setState({
            //value_color: e.target.value,
            selectedOption: e.target.value,
            sample_template: myTemplate[e.target.value]
        });
        select_color_template = e.target.value; //ใช้ตัวแปรนี้แทน
        console.log("choose color:", select_color_template);
        //console.log("choose color2:", this.state.value_color);
    };

    handleSubmitExport = e => {
        console.log('selectedOption',select_color_template);
        /*window.location = '/makepdf/?template='+select_color_template+'&resume=0';*/ 
        var resume_index = cookie.load('resume-index');
        if(resume_index!=''){
            window.location = new URL(window.location.origin+'/makepdf/?template='+select_color_template+'&resume='+resume_index);
            cookie.load('resume-index',"");
        }
        else{
            console.log('Cant Export this bc u dont selected resume');
        }
        //cookie.load('resume-index',"");
    };

    copyToClipboard(){
        console.log('Yahoo!');
        var copyText = document.getElementById("copylink1");
        /* Select the text field */
        copyText.select();
        copyText.setSelectionRange(0, 99999); /* For mobile devices */

        /* Copy the text inside the text field */
        navigator.clipboard.writeText(copyText.value);

        /* Alert the copied text */
        alert("Copied the text: " + copyText.value);
    };
      componentDidMount() {
      <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
        var link_now = window.location.href;
        console.log(link_now);
        console.log($('#copylink1').text());
        var user_resumeid = cookie.load('search-userid');
        console.log(user_resumeid);
        if(user_resumeid=='none'){
            var url_to_use = link_now+'/'+ cookie.load('login-user');
        }
        else{
            var url_to_use = link_now;
        }  
        $('#copylink1').text(url_to_use);
        $('#copylink2').on('click', function(){
            navigator.clipboard.writeText($('#copylink1').text());
        });
        $('#qr-image').attr('src','https://chart.googleapis.com/chart?cht=qr&chs=400&chl='+$("#copylink1").text())
        $('#exportQrcode').click(function(){
            console.log($('#qr-image').src);
            var link = document.createElement('a');
                         link.href = $('#qr-image').attr('src');  // use realtive url 
                         link.download = 'qr-resume'+$("#copylink1").text()+'.jpeg';
                         document.body.appendChild(link);
                         link.click();     
        });
    }
      componentWillUnmount() {
        window.removeEventListener('load', this.handleLoad)  
        $(document).unbind();
      }
      handleLoad() {
		console.log("YEAH!");
	 }
    render (){
    return (
        <div>
        <div class="modal fade" id="sharingResume" aria-hidden="true" tabindex="-1">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content container-fluid sharingSize">
                    <div class="row">
                        <p class="SharingFontHead col-10">Sharing</p>
                    </div>
                    <div class="row mg-l1">
                        <div class="col-4 transition-component scale-up-s" id="cross-fade">
                            <img class="col-10 bottom" src="assets/images/share_link_hover.png" type="button" data-bs-toggle="modal" toggle-type="dynamic" data-bs-target="#sharinglink1"/>
                            <img class="col-10  top" src="assets/images/share_link.png" type="button" data-bs-toggle="modal" toggle-type="dynamic" data-bs-target="#sharinglink1" id="sharinglink"/>
                        </div>
                        <div class="col-4 transition-component scale-up-s" id="cross-fade">
                            <img class="col-10 bottom" src="assets/images/share_qr_hover.png" type="button" data-bs-toggle="modal" toggle-type="dynamic" data-bs-target="#sharingqr1"/>
                            <img class="col-10 top" src="assets/images/share_qr.png" type="button" data-bs-toggle="modal" toggle-type="dynamic" data-bs-target="#sharingqr1" id="sharingqr"/>
                        </div>
                        <div class="col-4 transition-component scale-up-s" id="cross-fade">
                        <img class="col-10 bottom" src="assets/images/share_pdf_hover.png" type="button" data-bs-toggle="modal" toggle-type="dynamic" data-bs-target="#sharingpdf1"/>
                        <img class="col-10 top" src="assets/images/share_pdf.png" type="button" data-bs-toggle="modal" toggle-type="dynamic" data-bs-target="#sharingpdf1" id="sharingpdf"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="modal fade" id="sharinglink1" aria-hidden="true" tabindex="-1">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content sharingSize3 container-fluid">
                    <div class="row marginBEx1">
                        <h1 class="SharingFontHead col-10" id="exampleModalToggleLabel2">Sharing</h1>
                    </div>
                    <div class="row dropbtn margin1">
                        <text class="col-11 link-text" id="copylink1" type="text">link</text>
                        <OverlayTrigger key={'bottom'} placement={'bottom'} overlay={ <Tooltip>คัดลอก</Tooltip> }>
                            <img class="col-1 block-right3 del-pad-col1" href="" src="assets/images/outline_content_copy_black_48dp.png" type="button" id='copylink2' height='25' width='25'/>
                        </OverlayTrigger>
                        
                    </div>
                    <label class='font-sharelink-resume'>ลิงก์ของคุณสร้างสำเร็จแล้ว</label>
                    <label class='font-sharelink-resume'>สามารถคัดลอกเพื่อแชร์ MyResume ของคุณ !</label>
                </div>
            </div>
        </div>
        <div class="modal fade" id="sharingpdf1" aria-hidden="true" aria-labelledby="exampleModalToggleLabel2" tabindex="-1">
            <div class="modal-dialog">
                <div class="modal-content sharingSize2 container-fluid">
                    <div class="header-export1 marginBEx1">
                        <h1 class="SharingFontHead " >Sharing</h1>
                        <h1 class="SharingFonSubtHead " >เลือกเทมเพลตสำหรับไฟล์ PDF</h1>
                    </div>
                    <div class="modal-body layout-edit-template">
                        <div class="sample-color-edit-template">
                            <img src={this.state.sample_template} width="270px" oncontextmenu="return false;" ondragstart="return false;"></img>
                        </div>
                        <div class="choose-color-edit-template11">
                            <h1 id="text-edit-color-template11">เลือกสีที่เข้ากันและบ่งบอกถึงตัวคุณ</h1>
                            <div class="grid-edit-template">

                                <div>
                                    <input
                                        id="edit-template-color-FFCE55"
                                        value="yellow"
                                        onChange={this.handleChange}
                                        checked={this.state.selectedOption === "yellow"}
                                        name="platform"
                                        type="radio"
                                    />
                                    <label id="color-edit-template1" class="edit-template-color-FFCE55" for="edit-template-color-FFCE55">
                                        <div class="circle-color-template-FFCE55-edit"></div>
                                        <div class="text-template33">เหลือง (ค่าเริ่มต้น)</div>
                                    </label>
                                </div>

                                <div>
                                    <input
                                        id="edit-template-color-FE9666"
                                        value="orange"
                                        onChange={this.handleChange}
                                        checked={this.state.selectedOption === "orange"}
                                        name="platform"
                                        type="radio"
                                    />
                                    <label id="color-edit-template1" class="edit-template-color-FE9666" for="edit-template-color-FE9666">
                                        <div class="circle-color-template-FE9666-edit"></div>
                                        <div class="text-template22">ส้ม</div>
                                    </label>
                                </div>

                                <div>
                                    <input
                                        id="edit-template-color-FF7370"
                                        value="red"
                                        onChange={this.handleChange}
                                        checked={this.state.selectedOption === "red"}
                                        name="platform"
                                        type="radio"
                                    />
                                    <label id="color-edit-template1" class="edit-template-color-FF7370" for="edit-template-color-FF7370">
                                        <div class="circle-color-template-FF7370-edit"></div>
                                        <div class="text-template11">แดง</div>
                                    </label>
                                </div>

                                <div>
                                    <input
                                        id="edit-template-color-32A3C7"
                                        value="blue"
                                        onChange={this.handleChange}
                                        checked={this.state.selectedOption === "blue"}
                                        name="platform"
                                        type="radio"
                                    />
                                    <label id="color-edit-template1" class="edit-template-color-32A3C7" for="edit-template-color-32A3C7">
                                        <div class="circle-color-template-32A3C7-edit"></div>
                                        <div class="text-template55">ฟ้า</div>
                                    </label>
                                </div>

                                <div>
                                    <input
                                        id="edit-template-color-01B8AA"
                                        value="navy"
                                        name="platform"
                                        onChange={this.handleChange}
                                        checked={this.state.selectedOption === "navy"}
                                        type="radio"
                                    />
                                    <label id="color-edit-template1" class="edit-template-color-01B8AA" for="edit-template-color-01B8AA">
                                        <div class="circle-color-template-01B8AA-edit"></div>
                                        <div class="text-template44">เขียว</div>
                                    </label>
                                </div>
                                </div>
                            <div class="button-export1">
							    <button class="btn btn-cta-primary-yellowwide round profile-button marginLEx1" target="_blank" id="exportResume" onClick={this.handleSubmitExport}>Export</button>
						    </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="modal fade" id="sharingqr1" aria-hidden="true" aria-labelledby="exampleModalToggleLabel2" tabindex="-1">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content sharingSize4 container-fluid">
                    <div class="row">
                        <h1 class="SharingFontHead col-10" id="exampleModalToggleLabel2">Sharing QR</h1>
                    </div>
                    <div class='row'>
                        <img id='qr-image' class="col-6" src='assets/images/clock.png' ></img> 
                        <div class='col-6'>
                            <div class='row font-shareqr-resume padtop1'>
                                <h5 class='head-shareqr-resume'>QR Code สร้างเสร็จแล้ว!</h5>
                                <p class=''>คุณสามารถเข้าถึง MyResume ได้จาก QR Code ด้านซ้าย</p>
                                <p class=''>หรือ</p>
                                <button class="btn btn-cta-primary-yellow round profile-button" target="_blank" id="exportQrcode" >บันทึกภาพ QR Code</button>
                            </div>
                        </div>
                    </div>
                    
                    
                </div>
            </div>
        </div>
        </div>
    )}
}
export default SharingPopup;