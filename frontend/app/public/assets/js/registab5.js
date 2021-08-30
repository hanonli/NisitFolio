/*----year option----*/
$(document).ready(function () {
    let startYear = 1910;
    let endYear = new Date().getFullYear();
    for (i = endYear; i > startYear; i--) {
        $('#yearpicker_111').append($('<option />').val(i).html(i));
    }
});

/*----uplode img----*/

$(document).ready(function () {
    $('#to_upload112').on('click', function () {
        $('#image-upload112').click();
    });
});

//gu loke ma jak stackoverflow because gu stupid jquery

//preview img before upload


/*-----value of modal-----*/

$(document).ready(function () {
    var modal_tab5 = document.getElementById("exampleModal1");
    console.log(modal_tab5);
});

function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = function (e) {
            $('#preview_before_upload').attr('src', e.target.result);
        };
        reader.readAsDataURL(input.files[0]);
    }
}

$(document).ready(function () {

    var choose_function = -1; //default
    $("#edit-certi").click(function () {
        choose_function = 1;
        console.log(`chosoe: ${choose_function}`);
        $('#exampleModal11112').modal('show');
        document.querySelector('#submit-certi').innerText = 'ยืนยัน';
    });

    $("#add-certi").click(function () {
        choose_function = 2;
        console.log(`chosoe: ${choose_function}`);
        $('#exampleModal11112').modal('show');
        document.querySelector('#submit-certi').innerText = 'เพิ่ม';
    });
    document.getElementById("image-upload112").addEventListener("change", function () {
        $("#icon-upload-112").remove();
        $("#text-upload-112").remove();
        readURL(document.getElementById("image-upload112"));
        $(".for_upload112").append('<img id="preview_before_upload" height="120"></img>');
    });
    document.getElementById("submit-certi").addEventListener("click", function () {
        if (choose_function == 2) {
            console.log("add!!!!!!");
            name_certi = document.getElementById("nm_certi").value;
            year_certi = document.getElementById("yearpicker_111").value;
            file_pic_certi = document.getElementById("image-upload112");
            console.log(`name: `, name_certi);
            console.log(`year: `, year_certi);
            console.log('pic: ', file_pic_certi.files[0]);
        }
        else if (choose_function == 1) {
            console.log("edit!!!!!!");
            $("#icon-upload-112").remove();
            $("#text-upload-112").remove();
            $(".for_upload112").append('<img id="preview_before_upload" height="120"></img>'); //unconplete
            name_certi = document.getElementById("nm_certi").value;
            year_certi = document.getElementById("yearpicker_111").value;
            file_pic_certi = document.getElementById("image-upload112");
            console.log(`name: `, name_certi);
            console.log(`year: `, year_certi);
            console.log('pic: ', file_pic_certi.files[0]);
        }
        $("#nm_certi").val("");
        $("#yearpicker_111").prop('selectedIndex', 0);
        $("#preview_before_upload").remove();
        $(".for_upload112").append('<img id="icon-upload-112" src="assets/images/upload_file.png" width="85px" height="85px" class="up_img"></img>');
        $(".for_upload112").append('<h2 className="text_up" id="text-upload-112">อัพโหลดใบรับรองของคุณได้ที่นี่</h2>');
    });
});