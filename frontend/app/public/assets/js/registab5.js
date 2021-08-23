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