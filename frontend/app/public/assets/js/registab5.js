/*----year option----*/
$(document).ready(function () {
    var startYear = 1990;
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

        grid_certi = grid_certi.replace("{no_certi}", ele["id"]);
        grid_certi = grid_certi.replace("{name-certi}", ele["name_certi"]);
        grid_certi = grid_certi.replace("{year-certi}", ele["year_certi"]);
        grid_certi = grid_certi.replace("{pic-of-certi}", ele["path_file_certi"]);

        if (year_before_certi != ele["year_certi"]) {
            //console.log(`change year!!!!`);
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
    //console.log(`list_of_year_certi:`, list_of_year_certi);
}

$(document).ready(function () {
    show_certi();
    $("#icon-upload-112").remove();
    $("#text-upload-112").remove();
    $("#text-upload-116").remove();
    console.log("hello576");
});

var picOfCerti = '', file_picOfCerti = '';

$(document).on('change', "#image-upload112", function () {
    var path_img = document.getElementById("image-upload112");
    if (path_img.files[0].type == "image/jpeg" || path_img.files[0].type == "image/jpg" || path_img.files[0].type == "image/png") {
        console.log("path_img.files", path_img.files);
        file_picOfCerti = path_img.files;
        var reader = new FileReader();
        reader.onload = function (e) {
            //$("#preview_before_upload").remove();
            picOfCerti = e.target.result;
            $("#preview_before_upload").attr('src', e.target.result);
        };
        reader.readAsDataURL(path_img.files[0]);
        //picOfCerti = readURL(document.getElementById("image-upload112"));
        //console.log("picOfCerti:", picOfCerti);
        $("#icon-upload-112").remove();
        $("#text-upload-112").remove();
        $("#text-upload-116").remove();
        $(".for_upload112").append('<img id="preview_before_upload" height="145" oncontextmenu="return false;" ondragstart="return false;"></img>');
        $("#to_upload112").removeClass("error_select_certi");
    }
});

var choose_function = -1; //default
var for_edit;
var id_list_certi_edit;

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
        if (post.id == id_list_certi_edit)
            return true;
    });
    //console.log(`for_edit:`, for_edit);
    document.getElementById("nm_certi").value = for_edit["name_certi"];
    document.getElementById("yearpicker_111").selectedIndex = for_edit["year_certi_select"];
    picOfCerti = for_edit["path_file_certi"];
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
        if (post.id == id_list_certi_del)
            return true;
    });
    //console.log("id_list_certi:", id_list_certi);
    //console.log("removeIndex:", list_of_certi[removeIndex])
    list_of_year_certi[list_of_certi[removeIndex]["year_certi"]] -= 1;
    if (list_of_year_certi[list_of_certi[removeIndex]["year_certi"]] == 0) {
        $(`#yearOf_` + String(list_of_certi[removeIndex]["year_certi"])).remove();
    }
    list_of_certi.splice(removeIndex, 1);
    //console.log(`delete _certi id:`, removeIndex);
    $(`#` + id_list_certi_del).remove();
    //console.log(`list_of_certi:`, list_of_certi);
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

var name_certi, year_certi;
$(document).on('click', "#submit-certi", function () {
    name_certi = document.getElementById("nm_certi").value;
    year_certi = document.getElementById("yearpicker_111").value;
    //file_pic_certi = document.getElementById("image-upload112");
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
        if (choose_function == 1) {
            console.log("edit!!!!!!");
            console.log(`list_of_certi:`, list_of_certi);
            for_edit["name_certi"] = name_certi;
            for_edit["year_certi"] = parseInt(year_certi);
            for_edit["path_file_certi"] = picOfCerti;
            for_edit["file_pic"] = file_picOfCerti;
            for_edit["year_certi_select"] = $("#yearpicker_111").prop('selectedIndex');
            var list_edit11 = document.getElementById(id_list_certi_edit);
            //console.log("id_list_certi_edit:", id_list_certi_edit);
        }
        else if (choose_function == 2) {
            //console.log("add!!!!!!")
            var id_of_certi = create_UUID();
            list_of_certi.push({
                id: id_of_certi,
                name_certi: name_certi,
                year_certi: parseInt(year_certi),
                year_certi_select: $("#yearpicker_111").prop('selectedIndex'),
                path_file_certi: picOfCerti,
                file_pic: file_picOfCerti
            });
        }
        $("#nm_certi").val("");
        $("#yearpicker_111").prop('selectedIndex', 0);
        $("#exampleModal11112").modal("hide");
        $(".box-box-box").empty();
        console.log(`list_of_certi:`, list_of_certi);
        show_certi();
        $("#preview_before_upload").remove();
        $("#icon-upload-112").remove();
        $("#text-upload-112").remove();
        $("#text-upload-116").remove();
        picOfCerti = '';
        file_picOfCerti = '';
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
    file_picOfCerti = '';
});

$(document).on('click', "#hide-delete-certi", function () {
    $('#exampleModal_remove_certi').modal('hide');
});

function testPost5() {
    var CertName = [], CertPic = [], CertYear = []; //variable for send to backend
    list_of_certi.forEach(ele => {
        //post certi name
        CertName.push(ele["name_certi"]);
        //post year certi
        CertYear.push(ele["year_certi"]);
        //post pic certi
        CertPic.push(ele["path_file_certi"]);

    });
    console.log("CertName:", CertName);
    console.log("CertPic:", CertPic);
    console.log("CertYear:", CertYear);
}