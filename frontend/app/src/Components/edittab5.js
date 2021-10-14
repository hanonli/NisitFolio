import React from 'react';
import DatePickerBD from './datepickerBD.js';
import $ from 'jquery';
import Cropper from 'react-cropper';

class Edittab5 extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        console.log("edittab5!!!!:", this.props.mycerti_data);
        var name_certi, year_certi, id_of_certi;
        /*----year option----*/
        $("#icon-upload-112").remove();
        $("#text-upload-112").remove();
        $("#text-upload-116").remove();
        $(document).ready(function () {
            let startYear = 1990;
            let endYear = new Date().getFullYear();
            for (var i = endYear; i > startYear; i--) {
                $('#yearpicker_111').append($('<option />').val(i).html(i));
            }
        });

        $(document).ready(function () {
            show_certi();
            $("#icon-upload-112").remove();
            $("#text-upload-112").remove();
            $("#text-upload-116").remove();
        });
        /*----upload img----*/
        $('#to_upload112').on('click', function () {
            $('#image-upload112').click();
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

        var list_of_certi = []; //list of certi 

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
        var list_of_year_certi = {}; //check year
        var year_before_certi
        function show_certi() {
            year_before_certi = -1;
            var id_pos;
            list_of_year_certi = {};
            list_of_certi.sort(compareValues('year_certi', 'desc'));
            list_of_certi.forEach(ele => {
                let grid_certi = `<div class="card_certi" id="{no_certi}">\
                                <h1 id="name-of-certi">{name-certi}</h1>\
                                <h1 id="year-of-certi">{year-certi}</h1>\
                                <div class="pos-pic-of-certi">\
                                    <img height="142" src="{pic-of-certi}" id="border_certi"></img>\
                                </div>\
                                <div class="layer-button-certi">\
                                    <div class="set-layer-button-certi">\
                                        <button type="button" class="btn" id="edit-certi"><img src="assets/images/blackedit.png" width="35" height="35"></img></button>\
                                        <button type="button" class="btn" id="del-certi"><img src="assets/images/bin.png" width="50" height="50"></img></button>\                                    
                                    </div>\
                                </div>\
                            </div>`;
                let headOfyear1234 = `<div id="{show-year}" >\
                                    <h1 id="textOfyear_certi">{head-year}</h1>\
                              </div>\
                              <div class="content-certi1" id="{contentYear}"></div>`;

                grid_certi = grid_certi.replace("{no_certi}", ele["id"]);
                grid_certi = grid_certi.replace("{name-certi}", ele["name_certi"]);
                grid_certi = grid_certi.replace("{year-certi}", ele["year_certi"]);
                grid_certi = grid_certi.replace("{pic-of-certi}", ele["path_file_certi"]);

                if (year_before_certi != ele["year_certi"]) {
                    list_of_year_certi[ele["year_certi"]] = 1;
                    year_before_certi = ele["year_certi"];
                    headOfyear1234 = headOfyear1234.replace("{show-year}", `yearOf_` + String(ele["year_certi"]));
                    headOfyear1234 = headOfyear1234.replace("{head-year}", String(ele["year_certi"]));
                    headOfyear1234 = headOfyear1234.replace("{contentYear}", `contentYear_` + String(ele["year_certi"]));
                    $(".box-box-box").append(headOfyear1234);
                }
                else {
                    list_of_year_certi[ele["year_certi"]] += 1;
                }
                $("#contentYear_" + String(ele["year_certi"])).append(grid_certi);
            });
        }

        var picOfCerti = '';

        $(document).on('change', "#image-upload112", function () {
            var path_img = document.getElementById("image-upload112");
            if (path_img.files[0].type == "image/jpeg" || path_img.files[0].type == "image/jpg" || path_img.files[0].type == "image/png") {
                var reader = new FileReader();
                reader.onload = function (e) {
                    picOfCerti = e.target.result;
                    $("#preview_before_upload").attr('src', e.target.result);
                };
                reader.readAsDataURL(path_img.files[0]);
                $("#icon-upload-112").remove();
                $("#text-upload-112").remove();
                $("#text-upload-116").remove();
                $(".for_upload112").append('<img id="preview_before_upload" height="145"></img>');
                $("#to_upload112").removeClass("error_select_certi");
            }
        });

        var choose_function = -1; //default
        var for_edit;
        var id_list_certi_edit;
        //open modal to edit certi
        $(document).on("click", "#edit-certi", function () {
            choose_function = 1;
            id_list_certi_edit = $(this).parents().parents().parents().attr('id');
            $('#exampleModal11112').modal('toggle');
            $("#nm_certi").removeClass("is-invalid");
            $("#yearpicker_111").removeClass("is-invalid");
            $("#preview_before_upload").remove();
            $("#icon-upload-112").remove();
            $("#text-upload-112").remove();
            $("#text-upload-116").remove();
            document.querySelector('#submit-certi').innerText = 'ยืนยัน';
            for_edit = list_of_certi.find(function (post, index_del) {
                if (post.id == id_list_certi_edit)
                    return true;
            });
            document.getElementById("nm_certi").value = for_edit["name_certi"];
            document.getElementById("yearpicker_111").selectedIndex = for_edit["year_certi_select"];
            picOfCerti = for_edit["path_file_certi"];
            $(".for_upload112").append(`<img src="` + picOfCerti + `" id="preview_before_upload" height="145"></img>`);

        });

        //open modal to add certi
        $(document).on("click", ".frame_add_certi", function () {
            $("#icon-upload-112").remove();
            $("#text-upload-112").remove();
            $("#text-upload-116").remove();
            choose_function = 2;
            $('#exampleModal11112').modal('toggle');
            $("#preview_before_upload").remove();
            $("#nm_certi").removeClass("is-invalid");
            $("#yearpicker_111").removeClass("is-invalid");
            $('.for_upload112').append(`<img id="icon-upload-112" src="assets/images/upload_file.png" width="85px" height="85px" class="up_img"></img>`);
            $('.for_upload112').append(`<h2 class="text_up5" id="text-upload-112">อัพโหลดใบรับรองของคุณได้ที่นี่</h2>`);
            $('.for_upload112').append(`<h2 class="text_up5-1" id="text-upload-116">(ไฟล์สกุล jpg jpeg หรือ png เท่านั้น)</h2>`);
            $('#submit-certi').text('เพิ่ม');
            document.querySelector('#submit-certi').innerText = 'เพิ่ม';
        });
        var id_list_certi_del;
        $(document).on("click", "#del-certi", function () {
            id_list_certi_del = $(this).parents().parents().parents().attr('id');
            $('#exampleModal_remove_certi').modal('toggle');
        });

        $(document).on('click', "#summit-to-delete-certi", function () {
            var removeIndex = list_of_certi.findIndex(function (post, index_del) {
                if (post.id == id_list_certi_del)
                    return true;
            });
            list_of_year_certi[list_of_certi[removeIndex]["year_certi"]] -= 1;
            if (list_of_year_certi[list_of_certi[removeIndex]["year_certi"]] == 0) {
                $(`#yearOf_` + String(list_of_certi[removeIndex]["year_certi"])).remove();
            }
            list_of_certi.splice(removeIndex, 1);
            $(`#` + id_list_certi_del).remove();
            $("#preview_before_upload").remove();
            $("#icon-upload-112").remove();
            $("#text-upload-112").remove();
            $("#text-upload-116").remove();
            $("#exampleModal_remove_certi").modal("hide");
            console.log(`list_of_year_certi:`, list_of_year_certi);
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

        $(document).on('click', "#submit-certi", function () {
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
                $("#nm_certi").addClass("is-invalid");
            }
            else if (picOfCerti == '' && choose_function == 2) {
                $("#to_upload112").addClass("error_select_certi");
            }
            else {
                if (choose_function == 1) {
                    console.log("edit!!!!!!");
                    console.log(`list_of_certi:`, list_of_certi);
                    for_edit["name_certi"] = name_certi;
                    for_edit["year_certi"] = parseInt(year_certi);
                    for_edit["path_file_certi"] = picOfCerti;
                    for_edit["year_certi_select"] = $("#yearpicker_111").prop('selectedIndex');
                    var list_edit11 = document.getElementById(id_list_certi_edit);
                }
                else if (choose_function == 2) {
                    id_of_certi = create_UUID();
                    list_of_certi.push({
                        id: id_of_certi,
                        name_certi: name_certi,
                        year_certi: parseInt(year_certi),
                        year_certi_select: $("#yearpicker_111").prop('selectedIndex'),
                        path_file_certi: picOfCerti
                    });
                }
                $("#nm_certi").val("");
                $("#yearpicker_111").prop('selectedIndex', 0);
                $("#exampleModal11112").modal("hide");
                $(".box-box-box").empty();
                show_certi();
                $("#preview_before_upload").remove();
                $("#icon-upload-112").remove();
                $("#text-upload-112").remove();
                $("#text-upload-116").remove();
                picOfCerti = '';
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
            picOfCerti = '';
        });
        $(document).on('click', "#hide-delete-certi", function () {
            $('#exampleModal_remove_certi').modal('hide');
        });
    }
    render() {
        return (
            <div className="Registab5">
                <div class="regis-box-content1">
                    <h1 id="text-add-name-my-certi11">เพิ่มใบรับรองของคุณ</h1>
                    <div class="frame_add_certi">
                        <div className="button_add_certi">
                            <button id="add-certi-button1" type="button" class="btn">
                                <img src="assets/images/+.png" width="57" height="57"></img>
                            </button>
                        </div>
                    </div>

                    <div class="box-box-box">

                    </div>


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
