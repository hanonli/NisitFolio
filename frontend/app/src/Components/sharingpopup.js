import React, { useState } from 'react';

class SharingPopup extends React.Component {  
    constructor(props) {
        super(props);
		this.handleLoad = this.handleLoad.bind(this);
      }
    
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
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content sharingSize2 container-fluid">
                    <div class="row">
                        <h1 class="SharingFontHead col-10" id="exampleModalToggleLabel2">Sharing PDF</h1>
                    </div>
                    <div class="row">
                        <div class="dropbtn col-5">
                            <img src="assets/images/previewRY.png" height="200" width="150"/>
                            <button class="form-check-input round" id="agree1"></button>
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
        <img class="obj-icon tooltips-item" src="assets/images/outline_ios_share_black_48dp.png" type="button" data-bs-toggle="modal" toggle-type="dynamic" data-bs-target="#sharingResume" alt="" width="30" height="30"/>
        </div>
    )}
}
export default SharingPopup;