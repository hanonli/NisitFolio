console.log("Hello bitchews!(registab3_script)");

let startYear = 1950;
let endYear = new Date().getFullYear();
for (i = endYear; i > startYear; i--) {
    $('#year_higher').append($('<option />').val(i).html(i));
    $('#year_secondary').append($('<option />').val(i).html(i));
}

function handleHigherSubmit(){
  alert('click');
}