import React from 'react';
import DatePickerBD from './datepickerBD.js';
import $ from 'jquery';
import Cropper from 'react-cropper';
import cookie from 'react-cookies';
import { uploadFile } from 'react-s3';
import { v4 as uuidv4 } from 'uuid';

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

class Edittab5 extends React.Component {
    constructor(props) {
        super(props);
        this.handleLoad = this.handleLoad.bind(this);
        this.state = ({
            statusUpload5: "",
            imgStatus5: ""
        });
    }
    componentDidMount() {
        window.addEventListener('load', this.handleLoad);
        //alert("อย่าเพิ่ง add edit delete");
        var certiedit = this;
        var token5 = cookie.load('login-token');
        var list_of_year_certi = {}; //check year
        var year_before_certi;
        var picOfCerti = '', file_picOfCerti = '';
        var list_of_certi = [];
        var choose_function = -1; //default
        var for_edit;
        var id_list_certi_edit;
        var check_pic = [];
        var uploadurl;
        function UploadToS3(_img) {
            return new Promise((resolve, reject) => {

                uploadFile(_img, config)
                    .then(data => {
                        uploadurl = data.location;
                        //alert(current_i+' push! (from file)');
                        resolve();

                    })
                    .catch(err => console.error(err))


            });
        }
        console.log("edittab5!!!!:", this.props.mycerti_data);
        const mycert2 = this.props.mycerti_data ? this.props.mycerti_data : [];
        list_of_certi = [...mycert2];
        $("#icon-upload-112").remove();
        $("#text-upload-112").remove();
        $("#text-upload-116").remove();
        show_certi();

        $(document).ready(function () {
            var startYear = 1900;
            var endYear = new Date().getFullYear();
            for (let i = endYear; i > startYear; i--) {
                $('#yearpicker_111').append($('<option />').val(i).html(i));
            }
        });

        /*----upload img----*/
        $(document).ready(function () {
            $('#to_upload112').on('click', function () {
                $('#image-upload112').click();
            });
        });

        /*---- generate code ID ----*/
        function create_UUID() {
            var dt = new Date().getTime();
            var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
                var r = (dt + Math.random() * 16) % 16 | 0;
                dt = Math.floor(dt / 16);
                return (c == 'x' ? r : (r & 0x3 | 0x8)).toString(16);
            });
            return uuid;
        }

        function compareValues(key, order = 'asc') {
            return function innerSort(a, b) {
                if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
                    // property doesn't exist on either object
                    return 0;
                }

                var varA = (typeof a[key] === 'string')
                    ? a[key].toUpperCase() : a[key];
                var varB = (typeof b[key] === 'string')
                    ? b[key].toUpperCase() : b[key];

                let comparison = 0;
                if (varA > varB) {
                    comparison = 1;
                } else if (varA < varB) {
                    comparison = -1;
                }
                return (
                    (order === 'desc') ? (comparison * -1) : comparison
                );
            };
        }

        // show list certi
        function show_certi() {
            year_before_certi = -1;
            list_of_year_certi = {};
            list_of_certi.sort(compareValues('CertYear', 'desc'));
            list_of_certi.forEach(ele => {
                let grid_certi = `<div class="card_certi" id="{no_certi}">\
                                <h1 id="name-of-certi">{name-certi}</h1>\
                                <h1 id="year-of-certi">{year-certi}</h1>\
                                <div class="pos-pic-of-certi">\
                                    <img height="142" src="{pic-of-certi}" id="border_certi" oncontextmenu="return false;" ondragstart="return false;"></img>\
                                </div>\
                                <div class="layer-button-certi">\
                                    <div class="set-layer-button-certi">\
                                        <button type="button" class="btn" id="edit-certi"><img src="assets/images/blackedit.png" width="35" height="35" oncontextmenu="return false;" ondragstart="return false;"></img></button>\
                                        <button type="button" class="btn" id="del-certi"><img src="assets/images/bin.png" width="50" height="50" oncontextmenu="return false;" ondragstart="return false;"></img></button>\                                    
                                    </div>\
                                </div>\
                            </div>`;
                let headOfyear1234 = `<div id="{show-year}" >\
                                    <h1 id="textOfyear_certi">{head-year}</h1>\
                              </div>\
                              <div class="content-certi1" id="{contentYear}"></div>`;

                grid_certi = grid_certi.replace("{no_certi}", ele["Certificate_id"]);
                grid_certi = grid_certi.replace("{name-certi}", ele["CertName"]);
                grid_certi = grid_certi.replace("{year-certi}", ele["CertYear"]);
                grid_certi = grid_certi.replace("{pic-of-certi}", ele["CertPic"]);

                if (year_before_certi != ele["CertYear"]) {
                    //console.log(`change year!!!!`);
                    list_of_year_certi[ele["CertYear"]] = 1;
                    year_before_certi = ele["CertYear"];
                    headOfyear1234 = headOfyear1234.replace("{show-year}", `yearOf_` + String(ele["CertYear"]));
                    headOfyear1234 = headOfyear1234.replace("{head-year}", String(ele["CertYear"]));
                    headOfyear1234 = headOfyear1234.replace("{contentYear}", `contentYear_` + String(ele["CertYear"]));
                    $(".box-box-box-edit-certi").append(headOfyear1234);
                }
                else {
                    list_of_year_certi[ele["CertYear"]] += 1;
                }
                $("#contentYear_" + String(ele["CertYear"])).append(grid_certi);
            });
            //console.log(`list_of_year_certi:`, list_of_year_certi);
        }

        $(document).on('change', "#image-upload112", function () {
            var path_img = document.getElementById("image-upload112");
            if (path_img.files[0].type == "image/jpeg" || path_img.files[0].type == "image/jpg" || path_img.files[0].type == "image/png") {
                console.log("path_img.files", path_img.files);
                file_picOfCerti = new File([path_img.files[0]], 'newuser_ct_' + uuidv4(), { type: path_img.files[0].type });;
                var reader = new FileReader();
                reader.onload = function (e) {
                    //$("#preview_before_upload").remove();
                    picOfCerti = e.target.result;
                    $("#preview_before_upload").attr('src', e.target.result);
                };
                reader.readAsDataURL(path_img.files[0]);
                $("#icon-upload-112").remove();
                $("#text-upload-112").remove();
                $("#text-upload-116").remove();
                $(".for_upload112").append('<img id="preview_before_upload" height="145" oncontextmenu="return false;" ondragstart="return false;"></img>');
                $("#to_upload112").removeClass("error_select_certi");
            }
        });

        //open modal to edit certi
        $(document).on("click", "#edit-certi", function () {
            choose_function = 1;
            //console.log(`chosoe: ${choose_function}`);
            id_list_certi_edit = $(this).parents().parents().parents().attr('id');
            //console.log("id_list_certi111:", id_list_certi_edit);
            $('#exampleModal11112').modal('toggle');
            $("#nm_certi").removeClass("is-invalid");
            $("#yearpicker_111").removeClass("is-invalid");
            $("#preview_before_upload").remove();
            $("#icon-upload-112").remove();
            $("#text-upload-112").remove();
            $("#text-upload-116").remove();
            document.querySelector('#submit-certi').innerText = 'ยืนยัน';
            for_edit = list_of_certi.find(function (post, index_del) {
                if (post.Certificate_id === id_list_certi_edit)
                    return true;
            });
            //console.log(`for_edit:`, for_edit);
            document.getElementById("nm_certi").value = for_edit["CertName"];
            //document.getElementById("yearpicker_111").selectedIndex = for_edit["CertYear_select"];
            $("#yearpicker_111").val(for_edit["CertYear"]);
            picOfCerti = for_edit["CertPic"];
            $(".for_upload112").append(`<img src="` + picOfCerti + `" id="preview_before_upload" height="145" oncontextmenu="return false;" ondragstart="return false;"></img>`);
        });

        //open modal to add certi
        $(document).on("click", ".frame_add_certi", function () {
            $("#icon-upload-112").remove();
            $("#text-upload-112").remove();
            $("#text-upload-116").remove();
            choose_function = 2;
            //console.log(`chosoe: ${choose_function}`);
            $('#exampleModal11112').modal('toggle');
            $("#preview_before_upload").remove();
            $("#nm_certi").removeClass("is-invalid");
            $("#yearpicker_111").removeClass("is-invalid");
            $('.for_upload112').append(`<img id="icon-upload-112" src="assets/images/upload_file.png" width="85px" height="85px" class="up_img" oncontextmenu="return false;" ondragstart="return false;"></img>`);
            $('.for_upload112').append(`<h2 class="text_up5" id="text-upload-112">อัพโหลดใบรับรองของคุณได้ที่นี่</h2>`);
            $('.for_upload112').append(`<h2 class="text_up5-1" id="text-upload-116">(ไฟล์สกุล jpg jpeg หรือ png เท่านั้น)</h2>`);
            $('#submit-certi').text('เพิ่ม');
            document.querySelector('#submit-certi').innerText = 'เพิ่ม';
        });

        //open modal to delete certi (uncomplete!!!!!!!!!!!!!!!!!!!)
        var id_list_certi_del;
        $(document).on("click", "#del-certi", function () {
            id_list_certi_del = $(this).parents().parents().parents().attr('id');
            //console.log("id_list_certi111:", id_list_certi_del);
            $('#exampleModal_remove_certi').modal('toggle');
            //console.log(`list_of_year_certi:`, list_of_year_certi);
        });

        $(document).on('click', "#summit-to-delete-certi", function () {
            var removeIndex = list_of_certi.findIndex(function (post, index_del) {
                if (post.Certificate_id === id_list_certi_del)
                    return true;
            });
            fetch("http://localhost:2000/register/certificate/" + list_of_certi[removeIndex].Certificate_id, {
                method: "DELETE",
                headers: {
                    'Authorization': 'Bearer ' + token5,
                    "Access-Control-Allow-Origin": "*",
                    "Access-Control-Allow-Methods": "*",
                    "Access-Control-Allow-Credentials": true,
                    "Content-Type": "application/json"
                },
            })
                .then(response => response.json())
                .then((raws) => {
                    console.log(raws);
                    if (!("message" in raws)) {
                        list_of_year_certi[list_of_certi[removeIndex]["CertYear"]] -= 1;
                        if (list_of_year_certi[list_of_certi[removeIndex]["CertYear"]] == 0) {
                            $(`#yearOf_` + String(list_of_certi[removeIndex]["CertYear"])).remove();
                        }
                        list_of_certi.splice(removeIndex, 1);
                        $(`#` + id_list_certi_del).remove();
                        //console.log(`delete _certi id:`, removeIndex);
                        //console.log(`list_of_certi:`, list_of_certi);
                        $("#preview_before_upload").remove();
                        $("#icon-upload-112").remove();
                        $("#text-upload-112").remove();
                        $("#text-upload-116").remove();
                        $("#exampleModal_remove_certi").modal("hide");
                        console.log(`list_of_year_certi:`, list_of_year_certi);
                        console.log(`list_of_certi:`, list_of_certi);
                    }

                }).catch((error) => {
                    console.log(error);
                });
        });

        $(document).on("change", "#nm_certi", function () {
            if (document.getElementById("nm_certi").value != "") {
                $("#nm_certi").removeClass("is-invalid");
            }
        });

        $(document).on("change", "#yearpicker_111", function () {
            if (document.getElementById("yearpicker_111").selectedIndex != 0) {
                $("#yearpicker_111").removeClass("is-invalid");
            }
        });

        var name_certi, year_certi;
        $(document).on('click', "#submit-certi", async function () {
            certiedit.setState({ statusUpload5: "Saving...", imgStatus5: "assets/images/outline_cached_black_24dp.png" });
            $("#for-error-dgd5").removeClass("status-saving5555-red");
            name_certi = document.getElementById("nm_certi").value;
            year_certi = document.getElementById("yearpicker_111").value;
            if (document.getElementById("nm_certi").value == "" && year_certi == "" && picOfCerti == '') {
                $("#nm_certi").addClass("is-invalid");
                $("#yearpicker_111").addClass("is-invalid");
                $("#to_upload112").addClass("error_select_certi");
            }
            else if (year_certi == "") {
                $("#yearpicker_111").addClass("is-invalid");
            }
            else if (document.getElementById("nm_certi").value == "") {
                //alert("error!!!!");
                $("#nm_certi").addClass("is-invalid");
            }
            else if (picOfCerti == '' && choose_function == 2) {
                $("#to_upload112").addClass("error_select_certi");
            }
            else {
                certiedit.setState({ statusUpload5: "Saving...", imgStatus5: "assets/images/outline_cached_black_24dp.png" });
                if (file_picOfCerti != '') {
                    await UploadToS3(file_picOfCerti);
                    //alert(uploadurl);
                    check_pic.push(file_picOfCerti);
                }

                if (choose_function == 1) {
                    var sendCerti2back = {
                        "CertName": name_certi,
                        "CertYear": parseInt(year_certi),
                        "CertPic": file_picOfCerti != '' ? uploadurl : for_edit["CertPic"]
                    };
                    console.log("edit!!!!!!");
                    console.log(`list_of_certi:`, list_of_certi);
                    fetch("http://localhost:2000/register/certificate/" + id_list_certi_edit, {
                        method: "PATCH",
                        headers: {
                            'Authorization': 'Bearer ' + token5,
                            "Accept": "application/json",
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify(sendCerti2back)
                    })
                        .then(response => response.json())
                        .then((raws) => {
                            console.log(raws);
                            if ("message" in raws) {
                                $("#for-error-dgd5").addClass("status-saving5555-red");
                                certiedit.setState({ statusUpload5: "Save Failed", imgStatus5: "assets/images/baseline_error_black_24dp.png" });
                            }
                            else {
                                for_edit["CertName"] = name_certi;
                                for_edit["CertYear"] = parseInt(year_certi);
                                for_edit["CertPic"] = file_picOfCerti != '' ? uploadurl : for_edit["CertPic"];
                                //for_edit["file_pic"] = file_picOfCerti != '' ? uploadurl : for_edit["file_pic"];
                                //for_edit["CertYear_select"] = $("#yearpicker_111").prop('selectedIndex');
                                //var list_edit11 = document.getElementById(id_list_certi_edit);
                                $("#nm_certi").val("");
                                $("#yearpicker_111").prop('selectedIndex', 0);
                                $("#exampleModal11112").modal("hide");
                                $(".box-box-box-edit-certi").empty();
                                console.log(`list_of_certi:`, list_of_certi);
                                certiedit.setState({ statusUpload5: "", imgStatus5: "" });
                                show_certi();
                                $("#preview_before_upload").remove();
                                $("#icon-upload-112").remove();
                                $("#text-upload-112").remove();
                                $("#text-upload-116").remove();
                                picOfCerti = '';
                                file_picOfCerti = '';
                            }

                        }).catch((error) => {
                            console.log(error);
                            $("#for-error-dgd5").addClass("status-saving5555-red");
                            certiedit.setState({ statusUpload5: "Save Failed", imgStatus5: "assets/images/baseline_error_black_24dp.png" });
                        });
                }
                else if (choose_function == 2) {
                    var sendCerti2back = {
                        "CertName": name_certi,
                        "CertYear": parseInt(year_certi),
                        "CertPic": uploadurl
                    };
                    //console.log("add!!!!!!")
                    var id_of_certi = create_UUID();
                    fetch("http://localhost:2000/register/addcertificate", {
                        method: "POST",
                        headers: {
                            'Authorization': 'Bearer ' + token5,
                            "Accept": "application/json",
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify(sendCerti2back)
                    })
                        .then(response => response.json())
                        .then((raws) => {
                            console.log(raws);
                            if ("message" in raws) {
                                certiedit.setState({ statusUpload5: "Save Failed", imgStatus5: "assets/images/baseline_error_black_24dp.png" });
                                $("#for-error-dgd5").addClass("status-saving5555-red");
                            }
                            else {
                                list_of_certi.push({
                                    Certificate_id: raws.id,
                                    CertName: name_certi,
                                    CertYear: parseInt(year_certi),
                                    //CertYear_select: $("#yearpicker_111").prop('selectedIndex'),
                                    //CertPic: picOfCerti,
                                    //file_pic: file_picOfCerti,
                                    CertPic: uploadurl,
                                    isFetch: false
                                });
                                $("#nm_certi").val("");
                                $("#yearpicker_111").prop('selectedIndex', 0);
                                $("#exampleModal11112").modal("hide");
                                $(".box-box-box-edit-certi").empty();
                                console.log(`list_of_certi:`, list_of_certi);
                                certiedit.setState({ statusUpload5: "", imgStatus5: "" });
                                show_certi();
                                $("#preview_before_upload").remove();
                                $("#icon-upload-112").remove();
                                $("#text-upload-112").remove();
                                $("#text-upload-116").remove();
                                picOfCerti = '';
                                file_picOfCerti = '';
                            }

                        }).catch((error) => {
                            certiedit.setState({ statusUpload5: "Save Failed", imgStatus5: "assets/images/baseline_error_black_24dp.png" });
                            $("#for-error-dgd5").addClass("status-saving5555-red");
                            console.log(error);
                        });
                }
            }
        });

        $(document).on('click', "#hide-modal-certi", function () {
            $("#exampleModal11112").modal("hide");
        });

        $(document).on('hide.bs.modal', "#exampleModal11112", function () {
            $('#yearpicker_111').prop('selectedIndex', 0);
            $("#nm_certi").val("");
            $("#preview_before_upload").remove();
            $("#icon-upload-112").remove();
            $("#text-upload-112").remove();
            $("#text-upload-116").remove();
            $("#to_upload112").removeClass("error_select_certi");
            certiedit.setState({ statusUpload5: "", imgStatus5: "" });
            $("#for-error-dgd5").removeClass("status-saving5555-red");
            picOfCerti = '';
            file_picOfCerti = '';
        });
        $(document).on('click', "#hide-delete-certi", function () {
            $('#exampleModal_remove_certi').modal('hide');
        });
    }

    componentWillReceiveProps(props) {
        console.log("props edittab5");
        console.log(props.mycerti_data);
    }

    componentWillUnmount() {
        window.removeEventListener('load', this.handleLoad);
        //$(window).unbind('scroll');
        $(document).unbind();
    }

    handleLoad() {
        console.log("YEAH!");
    }

    render() {
        return (
            <div className="Registab5">
                <div class="regis-box-content1">
                    <h1 id="text-add-name-my-certi11">เพิ่มใบรับรองของคุณ</h1>
                    <div class="frame_add_certi">
                        <div className="button_add_certi">
                            <button id="add-certi-button1" type="button" class="btn">
                                <img src="assets/images/+.png" width="57" height="57" onContextMenu={(e) => e.preventDefault()} onDragStart={(e) => e.preventDefault()}></img>
                            </button>
                        </div>
                    </div>

                    <div class="box-box-box-edit-certi"></div>

                    <div class="modal fade" id="exampleModal_remove_certi" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog modal-dialog-centered">
                            <div class="modal-content minisize">
                                <h4 class="del-b">คุณต้องการลบใบรับรองนี้ ?</h4>
                                <div class="centerverify">
                                    <a id="hide-delete-certi" type="button" class="btn btn-cta-primary-svshort round profile-button grey margin-right-m">ยกเลิก</a>
                                    <a id="summit-to-delete-certi" type="button" class="btn btn-cta-primary-yellowshort profile-button round">ลบ</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="modal fade" id="exampleModal11112" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog modal-dialog-centered modal-lg">
                            <div class="modal-content minisize" id="certi_edit">
                                <div class="row" id="input_certi">
                                    <div class="col-md-5">
                                        <textarea maxlength="39" id="nm_certi" type="text" class="form-control certibtn margin-bottom1" placeholder="พิมพ์ชื่อใบรับรอง/เกียรติบัตร*" required></textarea>
                                    </div>
                                    <div class="col-md-10">
                                        <select class="form-select dropbtn_year margin-bottom1 fff" id="yearpicker_111" required>
                                            <option selected disabled value="">ปี*</option>
                                        </select>
                                        <img class="inline status-img-saving-3r3r5" src={this.state.imgStatus5} weight="36" height="36"></img>
                                        <h5 class="inline status-saving555445" id="for-error-dgd5">{this.state.statusUpload5}</h5>
                                    </div>

                                </div>
                                <div class="row" id="input_upload">
                                    <input id="image-upload112" accept="image/png, image/jpeg, image/jpg" class="hidden" type="file"></input>
                                    <div className="bg_upload" id="to_upload112">
                                        <div className="for_upload112" id="to_upload116"></div>
                                    </div>

                                    <div className="button_popup_certi">
                                        <a type="button" id="hide-modal-certi" class="btn btn-cta-primary-svshort round profile-button grey margin-right-m" >ยกเลิก</a>
                                        <a id="submit-certi" type="submit" id="submit-certi" class="btn btn-cta-primary-yellowshort profile-button round" >เพิ่ม</a>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        );
    }
}

export default Edittab5;
