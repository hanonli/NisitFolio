/*----year option----*/
$(document).ready(function () {
    let startYear = 1990;
    let endYear = new Date().getFullYear();
    for (i = endYear; i > startYear; i--) {
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

//gu loke ma jak stackoverflow because gu stupid jquery


/*-----value of modal-----*/

$(document).ready(function () {
    var modal_tab5 = document.getElementById("exampleModal1");
    console.log(modal_tab5);
});

//preview img before upload
function readURL(input, target2) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = function (e) {
            $(`#` + target2).attr('src', e.target.result);
        };
        reader.readAsDataURL(input.files[0]);
    }
}

// show list certi

var list_of_certi = []; //list of certi 

function show_certi(input2pic) {
    let grid_certi = `<div class="card_certi" id="{no_certi}">
                            <h1 id="name-of-certi">{name-certi}</h1>
                            <h1 id="year-of-certi">{year-certi}</h1>
                            <div class="pos-pic-of-certi">
                                <img height="160" id="{pic-of-certi}"></img>
                            </div>
                            <div class="layer-button-certi" >
                                <button type="button" class="btn" id="edit-certi"><img src="assets/images/blackedit.png" width="80" height="80"></img></button>
                                <button type="button" class="btn" id="del-certi"><img src="assets/images/bin.png" width="120" height="120"></img></button>
                            </div>
                        </div>`;
    grid_certi = grid_certi.replace("{no_certi}", input2pic["id"]);
    grid_certi = grid_certi.replace("{name-certi}", input2pic["name_certi"]);
    grid_certi = grid_certi.replace("{year-certi}", input2pic["year_certi"]);
    grid_certi = grid_certi.replace("{pic-of-certi}", input2pic["id_preview_pic"]);
    //$(".content-certi1").append(grid_certi);
    return grid_certi;
}

$(document).on('change', "#image-upload112", function () {
    $("#icon-upload-112").remove();
    $("#text-upload-112").remove();
    readURL(document.getElementById("image-upload112"), 'preview_before_upload');
    $(".for_upload112").append('<img id="preview_before_upload" height="135"></img>');
});

var choose_function = -1; //default
var for_edit;

//open modal to edit certi
$(document).on("click", "#edit-certi", function () {
    choose_function = 1;
    console.log(`chosoe: ${choose_function}`);
    id_list_certi_edit = $(this).parents().parents().attr('id');
    $("#icon-upload-112").remove();
    $("#text-upload-112").remove();
    $(".for_upload112").append(`<img id="pic_` + id_list_certi_edit + `" height="120"></img>`);
    console.log("id_list_certi111:", id_list_certi_edit);
    $('#exampleModal11112').modal('toggle');
    document.querySelector('#submit-certi').innerText = 'ยืนยัน';
    for_edit = list_of_certi.find(function (post, index_del) {
        if (post.id == id_list_certi_edit)
            return true;
    });
    console.log(`for_edit:`, for_edit);
    document.getElementById("nm_certi").value = for_edit["name_certi"];
    document.getElementById("yearpicker_111").selectedIndex = for_edit["year_certi_select"];
});

//open modal to add certi
$(document).on("click", "#add-certi", function () {
    choose_function = 2;
    console.log(`chosoe: ${choose_function}`);
    $('#exampleModal11112').modal('toggle');
    $('#submit-certi').text('เพิ่ม');
    document.querySelector('#submit-certi').innerText = 'เพิ่ม';
});

//open modal to delete certi (uncomplete!!!!!!!!!!!!!!!!!!!)
$(document).on("click", "#del-certi", function () {
    id_list_certi_del = $(this).parents().parents().attr('id');
    console.log("id_list_certi111:", id_list_certi_del);
    $('#exampleModal_remove_certi').modal('toggle');
});

$(document).on('click', "#summit-to-delete-certi", function () {
    var removeIndex = list_of_certi.findIndex(function (post, index_del) {
        if (post.id == id_list_certi_del)
            return true;
    });
    //console.log("id_list_certi:", id_list_certi);
    list_of_certi.splice(removeIndex, 1);
    //console.log(`delete _certi id:`, removeIndex);
    $(`#` + id_list_certi_del).remove();
    console.log(`list_of_certi:`, list_of_certi);
});


$(document).on('click', "#submit-certi", function () {
    if (choose_function == 1) {
        console.log("edit!!!!!!");
        name_certi = document.getElementById("nm_certi").value;
        year_certi = document.getElementById("yearpicker_111").value;
        file_pic_certi = document.getElementById("image-upload112");
        //console.log(`name: `, name_certi);
        //console.log(`year: `, year_certi);
        //console.log('pic: ', file_pic_certi.files[0]);
        console.log(`list_of_certi:`, list_of_certi);
        for_edit["name_certi"] = name_certi;
        for_edit["year_certi"] = year_certi;
        for_edit["year_certi_select"] = $("#yearpicker_111").prop('selectedIndex');
        //list_edit = document.querySelector('#id_list_certi_edit')
        //document.querySelector('#name-of-certi').innerText = name_certi;
        //document.querySelector('#year-of-certi').innerText = year_certi;
        var list_edit11 = document.getElementById(id_list_certi_edit);
        console.log("id_list_certi_edit:", id_list_certi_edit);
        //console.log("ilist_edit11.childNodes:", list_edit11.childNodes);
        list_edit11.childNodes[1].innerText = name_certi;
        list_edit11.childNodes[3].innerText = year_certi;
    }
    else if (choose_function == 2) {
        //console.log("add!!!!!!")
        name_certi = document.getElementById("nm_certi").value;
        year_certi = document.getElementById("yearpicker_111").value;
        file_pic_certi = document.getElementById("image-upload112");
        id_of_certi = create_UUID();
        //console.log(`name: `, name_certi);
        //console.log(`year: `, year_certi);
        //console.log('pic: ', file_pic_certi.files[0]);
        id_preview_pic = `pic_` + id_of_certi;
        readURL(document.getElementById("image-upload112"), id_preview_pic);
        keepInList = {
            id: id_of_certi,
            name_certi: name_certi,
            year_certi: year_certi,
            year_certi_select: $("#yearpicker_111").prop('selectedIndex'),
            path_file_certi: `path/pic/` + file_pic_certi.name,
            id_preview_pic: id_preview_pic
        };
        gridListCerti = show_certi(keepInList);
        list_of_certi.push(keepInList);
        $(".content-certi1").append(gridListCerti);
        document.getElementById(id_preview_pic).style.borderRadius = "16px";
        console.log(`list_of_certi:`, list_of_certi);
    }
    $("#nm_certi").val("");
    $("#yearpicker_111").prop('selectedIndex', 0);
    $("#preview_before_upload").remove();
    $(".for_upload112").append('<img id="icon-upload-112" src="assets/images/upload_file.png" width="85px" height="85px" class="up_img"></img>');
    $(".for_upload112").append('<h2 class="text_up" id="text-upload-112">อัพโหลดใบรับรองของคุณได้ที่นี่</h2>');
});

$(document).on('click', "#hide-modal-certi", function () {
    /*$('#yearpicker_111').prop('selectedIndex', 0);
    $("#nm_certi").val("");
    if (list_of_certi.length == 0) {
        $("#preview_before_upload").remove();
        $(".for_upload112").append('<img id="icon-upload-112" src="assets/images/upload_file.png" width="85px" height="85px" class="up_img"></img>');
        $(".for_upload112").append('<h2 class="text_up" id="text-upload-112">อัพโหลดใบรับรองของคุณได้ที่นี่</h2>');
    }*/
});