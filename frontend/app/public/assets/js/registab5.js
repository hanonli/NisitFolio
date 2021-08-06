/*----year option----*/
$(function () {
    let startYear = 1910;
    let endYear = new Date().getFullYear();
    for (i = endYear; i > startYear; i--) {
        $('#yearpicker1').append($('<option />').val(i).html(i));
    }
});

/*----uplode img----*/

$(function () {
    $('#to_upload112').on('click', function () {
        $('#image-upload112').click();
    });
});

//gu loke ma jak stackoverflow because gu stupid jquery