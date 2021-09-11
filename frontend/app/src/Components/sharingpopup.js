import React, { useState } from 'react';

class SharingPopup extends React.Component {  
    render (){
    return (
        <div>
        <div class="modal fade" id="sharingResume" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabindex="-1">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content container-fluid sharingSize">
                    <div class="row">
                        <p class="SharingFontHead col-10">Sharing</p>
                    </div>
                    <div class="row">
                        <img class="col-4" src="assets/images/share_link.png" type="button" data-bs-toggle="modal" toggle-type="dynamic" data-bs-target="#sharinglink"/>
                        <img class="col-4" src="assets/images/share_qr.png" type="button" data-bs-toggle="modal" toggle-type="dynamic" data-bs-target="#sharingqr"/>
                        <img class="col-4" src="assets/images/share_pdf.png" type="button" data-bs-toggle="modal" toggle-type="dynamic" data-bs-target="#sharingpdf"/>
                    </div>
                </div>
            </div>
        </div>
        <div class="modal fade" id="sharinglink" aria-hidden="true" aria-labelledby="exampleModalToggleLabel2" tabindex="-1">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content sharingSize container-fluid">
                    <div class="row">
                        <h1 class="SharingFontHead col-10" id="exampleModalToggleLabel2">Sharing</h1>

                    </div>
                </div>
            </div>
        </div>
        <div class="modal fade" id="sharingpdf" aria-hidden="true" aria-labelledby="exampleModalToggleLabel2" tabindex="-1">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content sharingSize container-fluid">
                    <div class="row">
                        <h1 class="SharingFontHead col-10" id="exampleModalToggleLabel2">Sharing PDF</h1>

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