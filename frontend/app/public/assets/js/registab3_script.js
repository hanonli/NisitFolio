
$(document).ready(function(){
  console.log('script for registab3 loaded')
});

let startYear2 = 1950;
let endYear2 = new Date().getFullYear();
for (i = endYear2; i > startYear2; i--) {
  $('#year_higher').append($('<option />').val(i).html(i));
  $('#year_secondary').append($('<option />').val(i).html(i));
}

$('handleHigherSubmit').on('click',function() {
  $("#registab3Modal1").modal("hide");

});

$('handleSecondaryubmit').on('click',function() {
  $("#registab3Modal2").modal("hide");
});


//reset fill-form when modal is hid

$(document).on('hide.bs.modal', "#registab3Modal1", function () {
  //reset higher
  $('#regis3_selectdropdown1').prop('selectedIndex', 0);
  $('#ValidationUniversityFeedback').val()
  $('#ValidationFacultyFeedback').val()
  $('#ValidationAreaFeedback').val()
  $('##ValidationGradeFeedback').val()
  $('#ValidationUniversityFeedback').attr("placeholder", "สถานศีกษา*").placeholder();
  $('#ValidationFacultyFeedback').attr("placeholder", "คณะ").placeholder();
  $('#ValidationAreaFeedback').attr("placeholder", "สาขาวิชา*").placeholder();
  $('##ValidationGradeFeedback').attr("placeholder", "เกรดเฉลี่ย").placeholder();
  $('#year_higher').prop('selectedIndex', 0);

});


$(document).on('hide.bs.modal', "#registab3Modal2", function () {
  //reset secondary
  $('#regis3_selectdropdown2').prop('selectedIndex', 0);
  $('#ValidationSchoolFeedback').val()
  $('#ValidationFacultyFeedback').val()
  $('#ValidationCourseFeedback').val()
  $('##ValidationGrade1Feedback').val()
  $('#ValidationUniversityFeedback').attr("placeholder", "สถานศีกษา*").placeholder();
  $('#ValidationFacultyFeedback').attr("placeholder", "คณะ").placeholder();
  $('#ValidationAreaFeedback').attr("placeholder", "สาขาวิชา*").placeholder();
  $('##ValidationGrade2Feedback').attr("placeholder", "เกรดเฉลี่ย").placeholder();
  $('#year_secondary').prop('selectedIndex', 0);

});

