import React, { useState } from 'react';


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
		window.location = new URL(window.location.origin+'/makepdf/?template='+select_color_template+'&resume=0');
    };

      componentDidMount() {
    }
      componentWillUnmount() {
        window.removeEventListener('load', this.handleLoad)  
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
                            <img class="col-10 bottom" src="assets/images/share_link_hover.png" type="button" data-bs-toggle="modal" toggle-type="dynamic" data-bs-target="#sharinglink"/>
                            <img class="col-10  top" src="assets/images/share_link.png" type="button" data-bs-toggle="modal" toggle-type="dynamic" data-bs-target="#sharinglink"/>
                        </div>
                        <div class="col-4 transition-component scale-up-s" id="cross-fade">
                            <img class="col-10 bottom" src="assets/images/share_qr_hover.png" type="button" data-bs-toggle="modal" toggle-type="dynamic" data-bs-target="#sharingqr"/>
                            <img class="col-10 top" src="assets/images/share_qr.png" type="button" data-bs-toggle="modal" toggle-type="dynamic" data-bs-target="#sharingqr"/>
                        </div>
                        <div class="col-4 transition-component scale-up-s" id="cross-fade">
                        <img class="col-10 bottom" src="assets/images/share_pdf_hover.png" type="button" data-bs-toggle="modal" toggle-type="dynamic" data-bs-target="#sharingpdf"/>
                        <img class="col-10 top" src="assets/images/share_pdf.png" type="button" data-bs-toggle="modal" toggle-type="dynamic" data-bs-target="#sharingpdf"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="modal fade" id="sharinglink" aria-hidden="true" tabindex="-1">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content sharingSize container-fluid">
                    <div class="row marginBEx1">
                        <h1 class="SharingFontHead col-10" id="exampleModalToggleLabel2">Sharing</h1>
                    </div>
                    <div class="row dropbtn margin1">
                        <h5 class="col-10 link-text" id="copylink1">link</h5>
                        <img class="col-2 block-right3 del-pad-col1" href="" src="assets/images/outline_content_copy_black_48dp.png" onclick="copyToCliBoard()" type="button"/>
                    </div>
                </div>
            </div>
        </div>
        <div class="modal fade" id="sharingpdf" aria-hidden="true" aria-labelledby="exampleModalToggleLabel2" tabindex="-1">
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
        <div class="modal fade" id="sharingqr" aria-hidden="true" aria-labelledby="exampleModalToggleLabel2" tabindex="-1">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content sharingSize container-fluid">
                    <div class="row">
                        <h1 class="SharingFontHead col-10" id="exampleModalToggleLabel2">Sharing QR</h1>

                    </div>
                </div>
            </div>
        </div>
        </div>
    )}
}
export default SharingPopup;