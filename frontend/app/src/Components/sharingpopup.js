import React, { useState } from 'react';

class SharingPopup extends React.Component {  
    render (){
    return (
        <div>
        <div class="modal fade" id="sharingResume" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabindex="-1">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content sharingSize">
                    <div class="modal-header container-fluid">
                        <h1 class="modal-title SharingFontHead">Sharing</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body row">
                        Show a second modal and hide this one with the button below.
                        <button class="btn btn-primary col-2" data-bs-target="#sharinglink" data-bs-toggle="modal" data-bs-dismiss="modal">Link</button>
                    </div>
                </div>
            </div>
        </div>
        <div class="modal fade" id="sharinglink" aria-hidden="true" aria-labelledby="exampleModalToggleLabel2" tabindex="-1">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title SharingFontHead" id="exampleModalToggleLabel2">Sharing link</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        Hide this modal and show the first with the button below.
                    </div>
                    <div class="modal-footer">
                        <button class="btn btn-primary" data-bs-target="#sharingresume" data-bs-toggle="modal" data-bs-dismiss="modal">Back to Sharing</button>
                    </div>
                </div>
            </div>
        </div>
        <img class="obj-icon tooltips-item" src="assets/images/outline_ios_share_black_48dp.png" type="button" data-bs-toggle="modal" toggle-type="dynamic" data-bs-target="#sharingResume" alt="" width="30" height="30"/>
        </div>
    )}
}
export default SharingPopup;