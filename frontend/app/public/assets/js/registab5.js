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

/*-----value of modal-----*/

$(document).ready(function () {
    var moda_tab5 = document.getElementById("exampleModal1");
    console.log(modal_tab5);
});

/*function submitValueTab5() {
    console.log(`nhahee`);
    var name_certi, year_certi, pic_certi;
    name_certi = document.getElementById("nm_certi");
    year_certi = document.getElementByTagName("select");
    pic_certi = document.getElementById("image-upload112");
    console.log(`name: {name_certi}`);
    console.log(`year: {year_certi}`);
    console.log(`pic: {pic_certi}`);
}*/

document.getElementById("submit-certi").addEventListener("click", function () {
    //console.log(`nhahee`);
    var name_certi, year_certi;
    name_certi = document.getElementById("nm_certi").value;
    year_certi = document.getElementById("yearpicker_111").value;
    var file_pic_certi = document.getElementById("image-upload112");
    console.log(`name: `, name_certi);
    console.log(`year: `, year_certi);
    console.log('pic: ', file_pic_certi.files[0]);
});

document.getElementById("edit-certi").addEventListener("click", function () {
    //console.log(`nhahee`);
    var name_certi, year_certi;
    name_certi = document.getElementById("nm_certi").value;
    year_certi = document.getElementById("yearpicker_111").value;
    var file_pic_certi = document.getElementById("image-upload112");
    console.log(`name: `, name_certi);
    console.log(`year: `, year_certi);
    console.log('pic: ', file_pic_certi.files[0]);
});