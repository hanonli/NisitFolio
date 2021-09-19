
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
/*
$(document).on('hide.bs.modal', "#registab3Modal1", function () {
  //reset higher
  $('#regis3_selectdropdown1').prop('selectedIndex', 0);
  $('#ValidationUniversityFeedback').val('')
  $('#ValidationFacultyFeedback').val('')
  $('#ValidationAreaFeedback').val('')
  $('##ValidationGradeFeedback').val('')
  $('#ValidationUniversityFeedback').attr("placeholder", "สถานศีกษา*").placeholder();
  $('#ValidationFacultyFeedback').attr("placeholder", "คณะ").placeholder();
  $('#ValidationAreaFeedback').attr("placeholder", "สาขาวิชา*").placeholder();
  $('##ValidationGradeFeedback').attr("placeholder", "เกรดเฉลี่ย").placeholder();
  $('#year_higher').prop('selectedIndex', 0);

});


$(document).on('hide.bs.modal', "#registab3Modal2", function () {
  //reset secondary
  $('#regis3_selectdropdown2').prop('selectedIndex', 0);
  $('#ValidationSchoolFeedback').val('')
  $('#ValidationFacultyFeedback').val('')
  $('#ValidationCourseFeedback').val('')
  $('##ValidationGrade1Feedback').val('')
  $('#ValidationUniversityFeedback').attr("placeholder", "สถานศีกษา*").placeholder();
  $('#ValidationFacultyFeedback').attr("placeholder", "คณะ").placeholder();
  $('#ValidationAreaFeedback').attr("placeholder", "สาขาวิชา*").placeholder();
  $('##ValidationGrade2Feedback').attr("placeholder", "เกรดเฉลี่ย").placeholder();
  $('#year_secondary').prop('selectedIndex', 0);

});
*/

function create_UUID() {
  var dt = new Date().getTime();
  var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
      var r = (dt + Math.random() * 16) % 16 | 0;
      dt = Math.floor(dt / 16);
      return (c == 'x' ? r : (r & 0x3 | 0x8)).toString(16);
  });
  return uuid;
}

var choose_function3 = -1; //default

function show_all_aca() {

  list_of_job.forEach(ele => {
      var grid_aca1 = '<div class="t3-content1">\
      <div class="row">\
          <div class="col-3 font-titlet3">{degree}</div>\
          <div class="col-4 font-titlet3">{field_of_study}</div>\
          <div class="col-5 font-titlet3">{faculty}</div>\
      </div>\
      <div class="row">\
          <div class="col-3 font-titlet3">{academyEnd}</div>\
          <div class="col-4 font-titlet3">{academyGrade}</div>\
          <div class="col-5 font-titlet3">{academyName}</div>\
      </div>\
  </div>';

      var grid_aca2 = `				</div>\
                                   </div>\
                                   <div class="layer_icon1" id={no-list-aca}>\
                                   <button type="button" class="btn" id="edit-t31"><img src="assets/images/blackedit.png" width="30" height="30"></img></button>\
                                   <button type="button" class="btn" id="del-t31"><img src="assets/images/bin.png" width="30" height="30"></img></button>\
                              </div>\
                          </div>\
                      </div>`;
      grid_aca2 = grid_aca2.replace("{no-list-aca}", ele["id"]);
      grid_aca1 = grid_aca1.replace("{no_aca}", ele["aca_pos"]);
      grid_aca1 = grid_aca1.replace("{academyName}", ele["aca_name"]);

      $(".list-of-aca").append(grid_aca1 + grid_aca2);
      console.log(`list_of_aca:`, list_of_aca);
  });
}
$(document).ready(function () {
  show_all_aca();
});


$(document).on("click", "#add-aca", function () {

  $("#nm_aca").removeClass("error_select_aca");
  choose_function3 = 2;
  if (list_of_aca.length < 3) {
      $('#registab3Modal1').modal('toggle');
  }
  /*else {
      $(".frame_add_job_interest").hide();
  }*/
  $('#aca_degreedd').prop('selectedIndex', 0);
  $('#aca_name').val('')
  $('#aca_faculty').val('')
  $('#aca_field').val('')
  $('#aca_grade').val('')
  $('#aca_name').attr("placeholder", "สถานศีกษา*").placeholder();
  $('#aca_faculty').attr("placeholder", "คณะ").placeholder();
  $('aca_field').attr("placeholder", "สาขาวิชา*").placeholder();
  $('#aca_grade').attr("placeholder", "เกรดเฉลี่ยสะสม").placeholder();
  $('#year_secondary').prop('selectedIndex', 0);
});

var for_editaca;
$(document).on("click", "#edit-aca", function () {
  $("#nm_aca").removeClass("error_select_aca");
  id_list_aca_edit = $(this).parents().attr('id');
  console.log(`edit:`, id_list_aca_edit);
  choose_function3 = 1;
  $('#registab3Modal1').modal('toggle');
  $('#regis3_AcaConfirm').text('ยืนยัน');
  console.log(`choose: ${choose_function3}`);
  for_editaca = list_of_aca.find(function (post, index_del) {
      if (post.id == id_list_aca_edit)
          return true;
  });

  console.log(`for_editaca:`, for_editaca);
  document.getElementById("nm_aca").selectedIndex = for_edit["name_aca_select"];
});


$(document).on("click", "#del-aca", function () {
  id_list_aca_del = $(this).parents().attr('id');
  console.log("id_list_aca111:", id_list_aca_del);
  $('#Modal_remove_aca').modal('toggle');
});

$(document).on('click', "#sub-del_aca", function () {
  var removeIndexA = list_of_aca.findIndex(function (post, index_del) {
      if (post.id == id_list_aca_del)
          return true;
  });
  console.log("id_list_aca:", id_list_aca_del);
  list_of_aca.splice(removeIndexA, 1);
  console.log(`delete aca id:`, removeIndexA);
  $('#Modal_remove_aca').modal('hide');
  $(".list-of-aca").empty();
  console.log(list_of_aca);
  get_aca_id(list_of_aca, 1);
  show_all_aca()
});


$(document).on('hide.bs.modal', "#exampleModalAca", function () {
  $('#nm_aca_degreedd').prop('selectedIndex', 0);
  $('#aca_name').val('')
  $('#aca_faculty').val('')
  $('#aca_field').val('')
  $('#aca_grade').val('')
  $('#aca_name').attr("placeholder", "สถานศีกษา*").placeholder();
  $('#aca_faculty').attr("placeholder", "คณะ").placeholder();
  $('aca_field').attr("placeholder", "สาขาวิชา*").placeholder();
  $('#aca_grade').attr("placeholder", "เกรดเฉลี่ยสะสม").placeholder();
  $('#year_secondary').prop('selectedIndex', 0);
});

$(document).on('click', "#hide-aca-del", function () {
  $('#Modal_remove_aca').modal('hide');
});

$(document).on("change", "#nm_job", function () {
  if (document.getElementById("nm_job").selectedIndex != 0) {
      $("#nm_job").removeClass("error_select_job");
  }
});

document.getElementById("submit-aca1").addEventListener("click", function () {
  name_aca = document.getElementById("aca_name").value;
  degree_aca = document.getElementById("aca_degree").value;
  faculty_aca = document.getElementById("aca_faculty").value;
  field_acc = document.getElementById("aca_field").value;
  grade_aca = document.getElementById("aca_grade").value;
  year_aca = document.getElementById("year_secondary").value;

  if (document.getElementById("aca_name").value == '') {
      alert("submit aca wrong!");
      $("#aca_name").addClass("error_select_aca");
  }
  if (document.getElementById("aca_dagree").value == '') {
    alert("submit aca wrong!");
    $("#aca_degree").addClass("error_select_aca");
  }
  if (document.getElementById("aca_faculty").value == '') {
  alert("submit aca wrong!");
  $("#aca_faculty").addClass("error_select_aca");
  }
  else {
      if (field_aca == '') {
          field_aca = 'none';
      }
      if (grade_aca == '') {
          grade_aca = 0;
      }
      if (year_aca == '') {
          year_aca = 0;
      }
      if (choose_function3 == 1) { //edit aca after add
          console.log("edit!!!!!!");
          for_edit["aca_name"] = name_aca;
          for_edit["aca_degree_select"] = $("#nm_aca_degreedd").prop('selectedIndex');
          for_edit["aca_year_select"] = $("#year_secondary").prop('selectedIndex');
          for_edit["aca_faculty"] = faculty_aca;
          for_edit["aca_degree"] = degree_aca;
          for_edit["aca_grade"] = parseFloat(grade_aca).toFixed(2);
          for_edit["aca_field"] = field_aca;
          for_edit["year_secondary"] = year_aca;
      }
      else if (choose_function == 2) { //add aca in list
          list_of_aca.push({
              id: create_UUID(),
              aca_pos: 0,
              aca_name: name_aca,
              aca_degree_select: $("#nm_aca_degreedd").prop('selectedIndex'),
              aca_year_select: $("#year_secondary").prop('selectedIndex'),
              aca_grade: parseFloat(grade_aca).toFixed(2),
              aca_field: field_aca,
              aca_year: year_aca,
          });
          get_aca_id(list_of_aca, 1);
          console.log(list_of_aca);
      }
      $('#nm_aca_degreedd').prop('selectedIndex', 0);
      $("#year_secondary").prop('selectedIndex', 0);
      $('#aca_name').val('')
      $('#aca_faculty').val('')
      $('#aca_field').val('')
      $('#aca_grade').val('')
      $('#aca_name').attr("placeholder", "สถานศีกษา*").placeholder();
      $('#aca_faculty').attr("placeholder", "คณะ").placeholder();
      $('aca_field').attr("placeholder", "สาขาวิชา*").placeholder();
      $('#aca_grade').attr("placeholder", "เกรดเฉลี่ยสะสม").placeholder();
      //$("#pos-del-obj-button1").hide();
      $('#exampleModalJob').modal('hide');
      $(".list-of-aca").empty();
      show_all_aca()
  }
});


