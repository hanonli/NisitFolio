let startYear = 1800;
let endYear = new Date().getFullYear();
for (i = endYear; i > startYear; i--) {
    $('#yearpicker1').append($('<option />').val(i).html(i));
}